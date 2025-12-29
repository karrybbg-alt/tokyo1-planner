/* app.js - wallet, checklist, memo, tabs logic for Winter Japan planner */

/* Configuration */
const HKD_RATE = 0.052;
const STORAGE_KEY = 'tokyo1_planner_v1';

/* State */
let state = {
  expenses: [],
  checklist: [
    { text: 'Passport', done: false },
    { text: 'Travel insurance', done: false },
    { text: 'Universal Adapter', done: false },
  ],
  memo: '',
  currentPhoto: '',
  activeTab: 'plan'
};

/* Helpers */
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    state = Object.assign(state, parsed);
  } catch (e) {
    console.warn('Failed to parse stored state', e);
  }
}

function formatJPY(n) {
  return n.toLocaleString('en-US') + ' ¥';
}

function formatHKD(n) {
  return 'HK$ ' + n.toFixed(2);
}

function toHKD(jpy) {
  return jpy * HKD_RATE;
}

/* Tabs */
function switchTab(id) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.remove('nav-active');
    b.classList.add('text-gray-500');
  });
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  const btn = document.getElementById('btn-' + id);
  if (btn) {
    btn.classList.add('nav-active');
    btn.classList.remove('text-gray-500');
  }
  state.activeTab = id;
  saveState();
}

/* Currency live conversion */
function setupConversion() {
  const jpyInput = document.getElementById('jpyInput');
  const hkdResult = document.getElementById('hkdResult');

  function update() {
    const v = parseFloat(jpyInput.value || 0);
    const hkd = toHKD(isNaN(v) ? 0 : v);
    hkdResult.textContent = formatHKD(hkd);
  }

  jpyInput.addEventListener('input', update);
  update();
}

/* Image processing (resize to keep small) */
function processImage(event) {
  const file = event.target.files && event.target.files[0];
  const statusEl = document.getElementById('photoStatus');

  if (!file) {
    state.currentPhoto = '';
    statusEl.textContent = 'No Photo';
    saveState();
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // Resize if bigger than max dimension
      const MAX_DIM = 1200;
      let { width, height } = img;
      if (width > MAX_DIM || height > MAX_DIM) {
        const ratio = Math.min(MAX_DIM / width, MAX_DIM / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const compressed = canvas.toDataURL('image/jpeg', 0.8);
      state.currentPhoto = compressed;
      statusEl.textContent = `Photo selected (${Math.round((compressed.length * 3 / 4) / 1024)} KB)`;
      saveState();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* Expenses management */
function addExpense() {
  const nameEl = document.getElementById('itemName');
  const priceEl = document.getElementById('itemPrice');

  const name = (nameEl.value || '').trim();
  const price = parseFloat(priceEl.value);
  if (!name) {
    alert('請輸入品項名稱');
    nameEl.focus();
    return;
  }
  if (isNaN(price) || price <= 0) {
    alert('請輸入有效金額 (JPY)');
    priceEl.focus();
    return;
  }

  const expense = {
    id: Date.now(),
    name,
    jpy: Math.round(price),
    photo: state.currentPhoto || '',
    createdAt: new Date().toISOString()
  };
  state.expenses.unshift(expense);

  // clear inputs
  nameEl.value = '';
  priceEl.value = '';
  state.currentPhoto = '';
  document.getElementById('photoStatus').textContent = 'No Photo';

  saveState();
  renderExpenses();
}

function deleteExpense(id) {
  if (!confirm('確定要刪除此筆紀錄嗎？')) return;
  state.expenses = state.expenses.filter(e => e.id !== id);
  saveState();
  renderExpenses();
}

function renderExpenses() {
  const list = document.getElementById('expenseList');
  list.innerHTML = '';

  if (state.expenses.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'card p-4 text-sm text-gray-400';
    empty.textContent = '尚無紀錄';
    list.appendChild(empty);
    renderTotals();
    return;
  }

  state.expenses.forEach(exp => {
    const wrap = document.createElement('div');
    wrap.className = 'card p-3 flex items-start justify-between';

    const left = document.createElement('div');
    left.className = 'flex items-start gap-3';

    if (exp.photo) {
      const img = document.createElement('img');
      img.src = exp.photo;
      img.alt = exp.name;
      img.style.width = '56px';
      img.style.height = '56px';
      img.style.objectFit = 'cover';
      img.className = 'rounded';
      left.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'w-14 h-14 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-500';
      placeholder.textContent = 'No\nPhoto';
      left.appendChild(placeholder);
    }

    const meta = document.createElement('div');
    meta.innerHTML = `<div class="font-bold">${escapeHtml(exp.name)}</div>
                      <div class="text-[12px] text-gray-400">${new Date(exp.createdAt).toLocaleString()}</div>`;
    left.appendChild(meta);

    const right = document.createElement('div');
    right.className = 'text-right';
    right.innerHTML = `<div class="font-bold">${formatJPY(exp.jpy)}</div>
                       <div class="text-[12px] text-yellow-500">${formatHKD(toHKD(exp.jpy))}</div>
                       <button class="mt-2 text-[12px] px-2 py-1 bg-red-700 rounded text-white">刪除</button>`;

    right.querySelector('button').addEventListener('click', () => deleteExpense(exp.id));

    wrap.appendChild(left);
    wrap.appendChild(right);
    list.appendChild(wrap);
  });

  renderTotals();
}

function renderTotals() {
  // Show totals as a sticky small card above expense list (or appended)
  const list = document.getElementById('expenseList');
  const totalJPY = state.expenses.reduce((s, e) => s + e.jpy, 0);
  const totalHKD = toHKD(totalJPY);

  // remove existing totals if any
  const existing = document.getElementById('expenseTotals');
  if (existing) existing.remove();

  const totals = document.createElement('div');
  totals.id = 'expenseTotals';
  totals.className = 'card p-3 mb-3 flex justify-between items-center';
  totals.innerHTML = `<div class="text-sm text-gray-400">合計</div>
                      <div class="text-right">
                        <div class="font-bold">${formatJPY(totalJPY)}</div>
                        <div class="text-[12px] text-yellow-500">${formatHKD(totalHKD)}</div>
                      </div>`;
  list.prepend(totals);
}

/* Checklist */
function renderChecklist() {
  const container = document.getElementById('checklist');
  container.innerHTML = '';

  state.checklist.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between';

    const left = document.createElement('label');
    left.className = 'flex items-center gap-3 w-full';
    left.innerHTML = `<input type="checkbox" ${item.done ? 'checked' : ''} class="mr-2"> 
                      <span class="${item.done ? 'line-through text-gray-400' : ''}">${escapeHtml(item.text)}</span>`;
    left.querySelector('input').addEventListener('change', (e) => {
      state.checklist[idx].done = e.target.checked;
      saveState();
      renderChecklist();
    });

    const buttons = document.createElement('div');
    buttons.className = 'flex gap-2';
    const del = document.createElement('button');
    del.className = 'text-[11px] px-2 py-1 bg-red-700 rounded text-white';
    del.textContent = '移除';
    del.addEventListener('click', () => {
      if (!confirm('移除此項目？')) return;
      state.checklist.splice(idx, 1);
      saveState();
      renderChecklist();
    });
    buttons.appendChild(del);

    row.appendChild(left);
    row.appendChild(buttons);
    container.appendChild(row);
  });

  // append add control
  const addRow = document.createElement('div');
  addRow.className = 'flex gap-2 mt-2';
  addRow.innerHTML = `<input id="newChecklistItem" placeholder="新增項目" class="w-full bg-gray-800 p-2 rounded text-sm outline-none">
                      <button id="addChecklistBtn" class="text-[12px] px-3 py-2 bg-yellow-600 text-black rounded">新增</button>`;
  container.appendChild(addRow);

  document.getElementById('addChecklistBtn').addEventListener('click', () => {
    const val = document.getElementById('newChecklistItem').value.trim();
    if (!val) return;
    state.checklist.push({ text: val, done: false });
    document.getElementById('newChecklistItem').value = '';
    saveState();
    renderChecklist();
  });
}

/* Memo link detection */
function renderMemoLinks() {
  const area = document.getElementById('memoArea');
  const links = document.getElementById('memoLinks');
  links.innerHTML = '';

  const urlRegex = /https?:\/\/[^\s]+/g;
  const text = area.value || '';
  const found = text.match(urlRegex) || [];

  found.forEach(u => {
    const a = document.createElement('a');
    a.href = u;
    a.target = '_blank';
    a.className = 'px-2 py-1 bg-gray-800 rounded text-xs text-yellow-400 border border-yellow-700/40';
    a.textContent = u;
    links.appendChild(a);
  });
}

/* Escape HTML for safety when injecting text */
function escapeHtml(unsafe) {
  return unsafe.replace(/[&<"'>]/g, function(m) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m];
  });
}

/* Init App */
function initApp() {
  // Load persisted state
  loadState();

  // Attach conversion
  setupConversion();

  // Attach file input handler
  const photoInput = document.getElementById('photoInput');
  if (photoInput) photoInput.addEventListener('change', processImage);

  // Attach add expense
  const saveBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('儲存紀錄'));
  if (saveBtn) saveBtn.addEventListener('click', addExpense);

  // Wire up memo area
  const memoArea = document.getElementById('memoArea');
  if (memoArea) {
    memoArea.value = state.memo || '';
    memoArea.addEventListener('input', () => {
      state.memo = memoArea.value;
      renderMemoLinks();
      saveState();
    });
    renderMemoLinks();
  }

  // Fill photo status if present
  const statusEl = document.getElementById('photoStatus');
  if (state.currentPhoto && statusEl) {
    statusEl.textContent = 'Photo loaded';
  }

  // Checklist
  renderChecklist();

  // Expenses
  renderExpenses();

  // Tabs: restore last active tab
  if (state.activeTab) switchTab(state.activeTab);

  // Wire nav buttons to persist tab (in case other code uses switchTab global)
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // small debounce to allow switchTab called by onclick attribute
      setTimeout(() => {
        const id = Array.from(btn.id.split('-')).slice(1).join('-');
        state.activeTab = id;
        saveState();
      }, 10);
    });
  });

  // Expose some functions globally for inline HTML onclick usage
  window.switchTab = switchTab;
  window.processImage = processImage;
  window.addExpense = addExpense;

  // Allow clearing all data (dev helper) - optional
  const meta = document.createElement('div');
  meta.className = 'text-[11px] text-gray-500 mt-3';
  meta.innerHTML = '<button id="clearAllBtn" class="px-2 py-1 bg-gray-800 rounded">清除本機資料</button>';
  document.body.appendChild(meta);
  document.getElementById('clearAllBtn').addEventListener('click', () => {
    if (!confirm('確定要清除所有本機儲存的資料？')) return;
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });
}

document.addEventListener('DOMContentLoaded', initApp);