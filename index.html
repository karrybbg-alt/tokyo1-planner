<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Family Trip to Hokkaido 2026</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'snow-white': '#F0FFFF',        // 雪白色/極淺藍
                        'ice-blue': '#B3E5FC',          // 冰川藍
                        'light-snow-blue': '#E5F3F7',   // 整個頁面柔和淺藍底色
                        'deep-sea-blue': '#01579B',     // 深海藍 (文字/強調)
                        'accent-yellow': '#FFD54F',     // 溫暖黃 (按鈕/點綴)
                        'soft-gray': '#F5F5F5'          // 背景灰
                    }
                }
            }
        }
    </script>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap');
        body {
            background-color: #E5F3F7; 
            -webkit-tap-highlight-color: transparent;
            font-family: 'Noto Sans TC', sans-serif;
            color: #334155;
        }

        .app-container {
            max-width: 480px;
            margin: 0 auto;
            min-height: 100vh;
            background-color: #ffffff; 
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
            position: relative;
            padding-bottom: 90px;
        }

        /* ****** 修正 1: 確保頁首背景為白色，完全消除多餘的藍色區塊 ****** */
        .header-bg {
            /* 關鍵修正: 設置為白色以確保沒有藍色殘留 */
            background-color: #ffffff; 
            padding: 0; 
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); 
            /* --- 圓弧銜接 --- */
            border-bottom-left-radius: 35px; 
            border-bottom-right-radius: 35px;
            z-index: 10; 
            padding-bottom: 0px; 
        }
        
        /* 圖片專用容器 */
        .header-image-container {
            width: 100%;
            height: 250px; 
            overflow: hidden;
            background-color: transparent; 
            border-bottom-left-radius: 35px; 
            border-bottom-right-radius: 35px;
        }
        
        .header-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover; 
            display: block; 
        }
        
        /* 雪花圖層 (保持透明度，讓圖片更柔和) */
        .snow-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* 背景圖案只有白色雪花點 */
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="%23fff" opacity="0.8"/><circle cx="20" cy="80" r="0.5" fill="%23fff" opacity="0.6"/><circle cx="70" cy="30" r="1.5" fill="%23fff" opacity="0.9"/></svg>');
            background-size: 100px 100px;
            opacity: 0.7;
            animation: snowfall 10s linear infinite;
            z-index: 5;
        }

        @keyframes snowfall {
            to {
                background-position: 100px 100px;
            }
        }
        
        /* ****** 修正 2: Tab 按鈕容器樣式 (向上大移動) ****** */
        .side-tab-bar {
            position: absolute;
            /* 關鍵調整: 將底邊距向上拉至 45px，確保按鈕完全位於圖片區內 */
            bottom: 45px; 
            right: 16px;
            z-index: 30; /* 確保它在最上層 */
            
            /* 橫向排列 */
            display: flex;
            flex-direction: row;
            gap: 8px; 
        }
        
        /* 單一按鈕樣式 */
        .tab-button {
            width: 40px; 
            height: 40px;
            border-radius: 9999px; 
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.125rem; 
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); 
            transition: all 0.2s ease;
        }
        
        /* 活躍按鈕樣式 */
        .tab-button.active {
            background-color: #01579B; /* deep-sea-blue */
            color: #ffffff;
            box-shadow: 0 6px 15px rgba(1, 87, 155, 0.4); 
            transform: scale(1.05);
        }
        
        /* 非活躍按鈕樣式 */
        .tab-button:not(.active) {
            background-color: #ffffff;
            color: #B3E5FC; /* ice-blue */
        }


        /* --- 圓弧銜接的主內容區域 --- */
        .app-main {
            padding-top: 25px !important; 
            position: relative;
            z-index: 5;
        }
        
        /* 隱藏捲軸但保持滑動功能 */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none; 
        }

        /* 卡片柔和陰影 */
        .card-shadow {
            box-shadow: 0 4px 20px rgba(179, 229, 252, 0.3);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        /* 頁面淡入動畫 */
        .animate-fade-in {
            animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* 自定義浮動按鈕陰影 */
        .fab-shadow {
            box-shadow: 0 4px 15px rgba(255, 213, 79, 0.5);
        }

        /* 備註內容高度控制 */
        .note-content {
            max-height: 2.5rem;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }

        .note-content.expanded {
            max-height: 500px;
        }
        
        /* 支出圓形分類標籤 */
        .expense-category-tag {
            min-width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            font-weight: bold;
            flex-shrink: 0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        /* 花費頁 Banner 顏色調整 */
        .expenses-banner {
            background: linear-gradient(135deg, #01579B 0%, #0097A7 100%);
        }
        
        /* 日期選單置頂的背景 */
        .date-selector-sticky {
             /* 讓日期選單置頂在 Banner 下方，並給予白色背景 */
            background-color: #ffffff;
            border-bottom: 1px solid #f0f0f0; 
            z-index: 20; 
            top: 0; 
        }
    </style>
</head>
<body>

<div id="app" class="app-container">

    <div class="header-bg relative">
        <div class="header-image-container">
            <img src="IMG_4330.PNG" alt="北海道家族旅行計畫">
        </div>
        
        <div class="snow-layer"></div> 
        
        <div class="side-tab-bar">
            <button @click="currentTab = 'itinerary'" title="行程" 
                    :class="{'active': currentTab === 'itinerary'}" 
                    class="tab-button">
                <i class="fa-solid fa-map-location-dot"></i>
            </button>
            
            <button @click="currentTab = 'info'" title="資訊" 
                    :class="{'active': currentTab === 'info'}" 
                    class="tab-button">
                <i class="fa-solid fa-circle-info"></i>
            </button>
            
            <button @click="currentTab = 'shopping'" title="購物" 
                    :class="{'active': currentTab === 'shopping'}" 
                    class="tab-button">
                <i class="fa-solid fa-basket-shopping"></i>
            </button>
            
            <button @click="currentTab = 'expenses'" title="花費" 
                    :class="{'active': currentTab === 'expenses'}" 
                    class="tab-button">
                <i class="fa-solid fa-coins"></i>
            </button>
        </div>
        </div>

    
    <main class="p-4 app-main">
        
        <div v-if="currentTab === 'itinerary'" class="animate-fade-in">
            
            <div class="flex overflow-x-auto hide-scrollbar space-x-3 pb-4 mb-2 snap-x px-1 sticky date-selector-sticky pt-1 -mx-4 px-4">
                <div v-for="(day, index) in dates" :key="index" 
                     @click="selectedDateIndex = index"
                     class="snap-center flex-shrink-0 w-[58px] h-[68px] rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border-2 shadow-sm"
                     :class="selectedDateIndex === index ?
'bg-deep-sea-blue text-white border-deep-sea-blue shadow-lg scale-105' : 'bg-white text-slate-400 border-white hover:bg-soft-gray'">
                    
                    <span class="text-sm font-bold uppercase tracking-wider">{{ day.weekday }}</span> 
                    <span class="text-xs font-medium opacity-70">{{ day.date }}</span> 
                </div>
            </div>

            <div v-if="weatherData[selectedDateIndex]" class="mb-4 bg-snow-white border border-ice-blue rounded-2xl p-4 flex justify-between items-center shadow-md">
                <div class="flex items-start text-deep-sea-blue space-x-4">
                    <i :class="getWeatherIcon(weatherData[selectedDateIndex].condition)" class="text-5xl text-blue-500"></i>
                    
                    <div class="pt-1">
                        <span class="text-3xl font-extrabold leading-none">{{ weatherData[selectedDateIndex].temp.split('/')[0] }}°</span>
                        <span class="text-sm font-light text-slate-500 ml-1">/ {{ weatherData[selectedDateIndex].temp.split('/')[1] }}°C</span>
                        <span class="block text-xs text-slate-600 mt-1">體感: {{ weatherData[selectedDateIndex].feel }}°C</span> 
                    </div>
                </div>
                <div class="text-right text-xs text-slate-600 pl-3">
                    <span class="font-bold block text-slate-700">{{ getWeatherDescription(weatherData[selectedDateIndex].condition) }}</span>
                    
                    <span v-if="dates[selectedDateIndex].hasCar" class="mt-1 block text-deep-sea-blue font-bold">
                        <i class="fa-solid fa-car-side mr-1 text-accent-yellow"></i> 租車日
                        <span v-if="dates[selectedDateIndex].tollFee" class="ml-2 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                            ¥{{ formatNumber(dates[selectedDateIndex].tollFee) }}
                        </span>
                    </span>
                    <span v-else class="mt-1 block text-slate-400">本日步行/大眾運輸</span>
                </div>
            </div>

            <div class="space-y-4">
                <div v-for="(item, idx) in currentItinerary" :key="item.id" class="relative group">
                    
                    <div v-if="idx > 
0" class="pl-8 pb-2 flex items-center text-xs text-slate-400">
                        <div class="h-6 w-0.5 bg-slate-200 absolute left-6 -top-3"></div>
                        
                        <i :class="getTransportIcon(currentItinerary[idx].transportType)" 
                            class="mr-2 text-slate-300 cursor-pointer hover:text-deep-sea-blue transition-colors" 
                           @click="openMapDirections(currentItinerary[idx - 1], item)">
                        </i>
                        <span class="font-bold">{{ item.travelTime ||
'約 15 分鐘' }}</span>
                    </div>
                    
                    <div class="bg-white rounded-3xl p-5 card-shadow relative overflow-hidden flex items-start border border-ice-blue/50">
                        
                        <div class="mr-4 flex flex-col items-center min-w-[50px]">
                            <div class="p-2 rounded-full text-white shadow-md text-base mb-1" :class="getCategoryColor(item.category)">
                                <i :class="getCategoryIcon(item.category)"></i>
                            </div>
                            <span v-if="item.startTime" class="text-xs font-bold text-slate-600 mt-1">{{ item.startTime }}</span>
                        </div>

                        <div class="flex-1 pb-1">
                            <h3 class="text-lg font-bold text-slate-800 mb-1 leading-tight pr-8">{{ item.name }}</h3>
                            
                            <div 
class="text-sm text-slate-500 space-y-1.5 mt-2">
                                <p v-if="item.hours" class="flex items-center"><i class="fa-regular fa-clock w-4 text-center mr-2 text-ice-blue"></i> 營業: {{ item.hours }}</p>
                                <p v-if="item.price" class="flex items-center"><i class="fa-solid fa-ticket w-4 text-center mr-2 text-ice-blue"></i> 門票/費用: {{ item.price }}</p>
                                <p v-if="item.address" class="flex items-start"><i class="fa-solid fa-location-dot w-4 text-center mr-2 mt-1 text-ice-blue"></i> {{ item.address }}</p>
                            </div>

                            <div v-if="item.note && item.note.length > 0" 
class="mt-3 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                                <p class="text-slate-600 font-bold mb-1 flex items-center">
                                    <i class="fa-solid fa-highlighter text-accent-yellow mr-2"></i> 備註
                                </p>
                                <div class="note-content" :class="{'expanded': item.isNoteExpanded}">
                                    {{ item.note }}
                                </div>
                                <button v-if="item.note.length > 50" @click="item.isNoteExpanded = !item.isNoteExpanded" class="text-deep-sea-blue font-bold mt-1 block">
                                    {{ 
item.isNoteExpanded ? '收合備註' : '查看更多...' }}
                                </button>
                            </div>
                        </div>

                        <div class="absolute top-3 right-3 flex flex-col space-y-1">
                            <button v-if="idx > 0" @click.stop="moveItineraryUp(item.id)" class="w-7 h-7 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center text-xs hover:bg-slate-300 transition-colors" title="上移">
                                <i class="fa-solid fa-arrow-up"></i>
                            </button>
                            <button v-if="idx < currentItinerary.length - 1" @click.stop="moveItineraryDown(item.id)" class="w-7 h-7 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center text-xs hover:bg-slate-300 transition-colors" title="下移">
                                <i class="fa-solid fa-arrow-down"></i>
                            </button>
                            <button @click.stop="openMap(item.address || item.name)" class="w-7 h-7 bg-ice-blue text-deep-sea-blue rounded-full flex items-center justify-center text-xs hover:bg-deep-sea-blue hover:text-white transition-colors" title="Google Maps 導航">
                                <i class="fa-solid fa-location-arrow"></i>
                            </button>
                            <button @click.stop="editItem(item)" class="w-7 h-7 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center text-xs hover:bg-slate-200 transition-colors" title="編輯行程">
                                <i class="fa-solid fa-pencil"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div v-if="currentItinerary.length === 0" class="text-center py-16 text-slate-300">
                    <i class="fa-solid fa-map-location-dot text-5xl mb-3 text-slate-200"></i>
                    <p class="text-sm">本日尚無行程<br>請點擊右下角新增</p>
                </div>
            </div>
        </div>

        <div v-if="currentTab === 'info'" class="space-y-5 animate-fade-in">
            
            <div class="bg-gradient-to-r from-deep-sea-blue to-cyan-700 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 
bg-white/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
                <h3 class="font-bold text-lg mb-4 flex items-center relative z-10"><i class="fa-solid fa-calculator mr-2"></i> 匯率換算</h3>
                <div class="flex items-center justify-between space-x-3 relative z-10">
                    <div class="flex-1">
                        <label class="text-[10px] 
text-cyan-200 block mb-1 uppercase tracking-wider">JPY (日幣)</label>
                        <input type="number" v-model="currencyInput" @input="calculateCurrency" class="w-full bg-white/20 border border-white/30 rounded-xl px-3 py-2.5 text-white placeholder-white/50 focus:outline-none focus:bg-white/30 text-lg font-bold" placeholder="¥">
                    </div>
                    <i class="fa-solid fa-arrow-right-arrow-left text-cyan-300 mt-5"></i>
                    <div class="flex-1">
                        <label class="text-[10px] text-cyan-200 block mb-1 uppercase tracking-wider">TWD (台幣)</label>
                        <div class="w-full bg-white/10 rounded-xl px-3 py-2.5 text-white text-lg font-bold border border-transparent">
                            $ {{ currencyResult }}
                        </div>
                    </div>
                </div>
                <p class="text-[10px] text-cyan-300 mt-3 text-right relative z-10">匯率基準: 0.215</p>
            </div>
            
            <div class="bg-white rounded-3xl p-5 card-shadow">
                <h3 class="font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2"><i class="fa-solid fa-plane-departure text-blue-500 mr-2"></i> 航班資訊</h3>
                <div class="space-y-4">
                    <div class="bg-blue-50 rounded-xl p-3 border border-blue-100">
                        <div class="flex justify-between text-sm font-bold text-deep-sea-blue mb-1">
                            <span>TPE 台北</span>
                            <i class="fa-solid fa-plane text-xs"></i>
                            <span>CTS 札幌</span>
                        </div>
                        <div class="flex justify-between text-xs text-slate-500">
                            <span>08:35</span>
                            <span>CI0130 (2/1)</span>
                            <span>13:15</span>
                        </div>
                    </div>
                    <div class="bg-orange-50 rounded-xl p-3 border border-orange-100">
                        <div class="flex justify-between text-sm font-bold text-orange-800 mb-1">
                            <span>CTS 札幌</span>
                            <i class="fa-solid fa-plane text-xs"></i>
                            <span>TPE 台北</span>
                        </div>
                        <div class="flex justify-between text-xs text-slate-500">
                            <span>14:40</span>
                            <span>CI0131 (2/7)</span>
                            <span>18:15</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-3xl p-6 card-shadow">
                <h3 class="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3"><i class="fa-solid fa-hotel text-indigo-500 mr-2"></i> 住宿資訊</h3>
                <ul class="space-y-5">
                    <li v-for="hotel in hotels" class="border-b last:border-0 pb-4 last:pb-0">
                        <div class="flex justify-between items-start group">
                            <div class="flex-1">
                                <span class="font-bold block text-slate-700 text-lg">{{ hotel.name }}</span>
                                <span class="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full inline-block mt-1">{{ hotel.date }}</span>
                            </div>
                            <button @click="openMap(hotel.name)" class="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all"><i class="fa-solid fa-location-arrow text-xs"></i></button>
                        </div>
                        <div class="text-sm text-slate-500 mt-2 space-y-1">
                            <p class="flex items-center"><i class="fa-solid fa-phone w-4 text-center mr-2 text-slate-300"></i> <a :href="'tel:' + hotel.phone" class="hover:text-deep-sea-blue">{{ hotel.phone }}</a></p>
                            <p class="flex items-start"><i class="fa-solid fa-map-pin w-4 text-center mr-2 mt-1 text-slate-300"></i> {{ hotel.address }}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="bg-white rounded-3xl p-6 card-shadow">
                <h3 class="font-bold text-slate-800 mb-3 border-b border-slate-100 pb-3"><i class="fa-solid fa-car text-green-500 mr-2"></i> 租車資訊</h3>
                <div class="text-sm space-y-3">
                    <div class="flex justify-between">
                        <span class="text-slate-500">公司</span>
                        <span class="font-bold text-slate-700">Nissan Rent a Car</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-500">取車點</span>
                        <span class="font-bold text-slate-700 text-right">札幌駅南口アスティ店</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-500">期間</span>
                        <span class="font-bold text-slate-700">2/2 08:00 - 2/6 20:00</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-500">車型</span>
                        <span class="font-bold text-slate-700">Kicks (油電)</span>
                    </div>
                    <button @click="openMap('Nissan Rent a Car Sapporo Station South Exit Asty')" class="w-full mt-4 bg-green-50 text-green-700 py-3 rounded-xl text-sm font-bold hover:bg-green-100 transition-colors flex items-center justify-center">
                        <i class="fa-solid fa-diamond-turn-right mr-2"></i> 導航去取車點
                    </button>
                </div>
            </div>
            
            <div class="bg-red-50 rounded-3xl p-6 border border-red-100">
                <h3 class="font-bold text-red-800 mb-4"><i class="fa-solid fa-kit-medical mr-2"></i> 緊急聯絡</h3>
                <div class="grid grid-cols-2 gap-4 text-center">
                    <a href="tel:110" class="bg-white py-3 rounded-xl shadow-sm text-red-600 font-bold block border border-red-100 hover:bg-red-600 hover:text-white transition-all">
                        <i class="fa-solid fa-user-shield mr-1"></i> 警察 110
                    </a>
                    <a href="tel:119" class="bg-white py-3 rounded-xl shadow-sm text-red-600 font-bold block border border-red-100 hover:bg-red-600 
hover:text-white transition-all">
                        <i class="fa-solid fa-truck-medical mr-1"></i> 救護 119
                    </a>
                </div>
            </div>
        </div>

        <div v-if="currentTab === 'shopping'" class="animate-fade-in">
            <div class="grid grid-cols-2 gap-4">
                <div v-for="(item, idx) in shoppingList" :key="idx" class="bg-white rounded-2xl p-3 card-shadow relative group">
                    <div class="aspect-square bg-slate-50 rounded-xl mb-3 overflow-hidden relative border border-slate-100">
                        <img v-if="item.image" :src="item.image" class="w-full h-full object-cover">
                        <div v-else class="w-full h-full flex items-center justify-center text-slate-300">
                            <i class="fa-solid fa-bag-shopping text-3xl"></i>
                        </div>
                        <button @click="removeShoppingItem(idx)" class="absolute top-2 right-2 bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <p class="font-bold text-sm text-slate-800 truncate px-1">{{ item.name }}</p>
                </div>
                
                <div v-if="shoppingList.length % 2 !== 0" class="h-0 invisible"></div>
                
                <div v-if="shoppingList.length === 0" class="col-span-2 text-center py-16 text-slate-300">
                    <i class="fa-solid fa-bag-shopping text-5xl mb-3 text-slate-200"></i>
                    <p class="text-sm">購物清單空白<br>請點擊右下角新增</p>
                </div>
            </div>
        </div>

        <div v-if="currentTab === 'expenses'" class="animate-fade-in">
            <div class="expenses-banner text-white rounded-3xl p-8 mb-6 relative overflow-hidden">
               
                <div class="absolute -right-10 -top-10 bg-white/10 w-48 h-48 rounded-full blur-3xl"></div>
                <div class="absolute -left-10 -bottom-10 bg-ice-blue/20 w-40 h-40 rounded-full blur-2xl"></div>
                <p class="text-sm text-cyan-200 mb-2 relative z-10">目前總花費 (JPY)</p>
                <h2 class="text-5xl font-bold relative z-10 tracking-tight">¥ {{ formatNumber(totalExpensesJPY) }}</h2>
                <p class="text-sm text-right mt-2 opacity-80 
relative z-10">約 NT$ {{ formatNumber(totalExpensesTWD) }}</p>
            </div>

            <div class="bg-white rounded-t-3xl min-h-[500px] p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] -mx-4 px-8">
                <h3 class="font-bold text-slate-800 mb-5 flex items-center">
                    <i class="fa-solid fa-receipt text-slate-300 mr-2"></i>支出紀錄
                </h3>
                <div class="space-y-5">
                    <div v-for="(exp, idx) in expenses" :key="idx" class="flex items-center justify-between border-b border-slate-50 pb-4 last:border-0">
                        <div class="flex items-center">
                            
                            <div class="expense-category-tag mr-4" :class="[getCategoryColor(exp.category), 'text-white']">
                                {{ getCategoryLabel(exp.category) }}
                            </div>
                            <div>
                                <p class="font-bold text-slate-700 text-sm mb-0.5">{{ exp.name }}</p>
                                <p class="text-[10px] text-slate-400 uppercase tracking-wide">{{ exp.date }} · {{ exp.payment === 'card' ?
'信用卡' : '現金' }}</p>
                            </div>
                        </div>
                        <div class="text-right flex items-center">
                            <p class="font-bold text-slate-700">¥{{ formatNumber(exp.amount) }}</p>
                            <button @click="removeExpense(idx)" class="w-5 h-5 ml-3 text-red-300 hover:text-red-500 transition-colors flex items-center justify-center">
                                <i class="fa-solid fa-xmark text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>

 
    <button v-if="currentTab !== 'info'" @click="handleAddClick" class="fixed bottom-6 right-6 w-14 h-14 bg-accent-yellow rounded-full fab-shadow text-deep-sea-blue text-2xl flex items-center justify-center hover:scale-110 transition-transform z-40">
        <i class="fa-solid fa-plus"></i>
    </button>

    <div v-if="showShoppingModal" class="fixed inset-0 bg-deep-sea-blue/40 z-50 flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in">
        <div class="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl">
            <h3 class="font-bold text-lg mb-5 text-center text-slate-800">新增購物清單</h3>
            <input v-model="newShoppingItem.name" type="text" placeholder="商品名稱" class="w-full 
bg-slate-50 border-none rounded-xl p-4 mb-4 focus:ring-2 focus:ring-deep-sea-blue text-sm">
            <div class="relative mb-6">
                <input type="file" @change="handleImageUpload" class="hidden" id="fileInput">
                <label for="fileInput" class="w-full h-36 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center cursor-pointer text-slate-400 hover:bg-slate-100 hover:border-border-slate-300 transition-all">
                    <span v-if="!newShoppingItem.image" class="flex flex-col items-center text-xs">
                        <i class="fa-solid fa-camera text-2xl mb-2"></i> 上傳照片
                    </span>
                    <img v-else :src="newShoppingItem.image" class="h-full w-full object-contain rounded-xl">
                </label>
           
            </div>
            <div class="flex space-x-3">
                <button @click="showShoppingModal = false" class="flex-1 py-3 rounded-xl bg-slate-100 text-slate-500 font-bold text-sm">取消</button>
                <button @click="addShoppingItem" class="flex-1 py-3 rounded-xl bg-deep-sea-blue text-white font-bold text-sm shadow-lg shadow-deep-sea-blue/30">新增</button>
            </div>
        </div>
    </div>
    
    <div 
v-if="showExpenseModal" class="fixed inset-0 bg-deep-sea-blue/40 z-50 flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in">
        <div class="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl">
            <h3 class="font-bold text-lg mb-5 text-center text-slate-800">記一筆</h3>
            <div class="grid grid-cols-2 gap-3 mb-4">
                <input v-model="newExpense.date" type="date" class="bg-slate-50 rounded-xl p-3 text-sm text-slate-600 outline-none">
                <select v-model="newExpense.category" class="bg-slate-50 
rounded-xl p-3 text-sm text-slate-600 outline-none">
                    <option value="food">飲食</option>
                    <option value="shopping">購物</option>
                    <option value="transport">交通</option>
                    <option value="stay">住宿</option>
            
                    <option value="ticket">門票</option>
                    <option value="other">其他</option>
                </select>
            </div>
            <input v-model="newExpense.name" placeholder="名稱 (如: 湯咖哩)" class="w-full bg-slate-50 rounded-xl p-4 mb-4 text-sm outline-none focus:ring-2 focus:ring-accent-yellow">
            <div class="relative mb-4">
   
                <span class="absolute left-4 top-4 text-slate-400 font-bold">¥</span>
                <input v-model.number="newExpense.amount" type="number" placeholder="金額" class="w-full bg-slate-50 rounded-xl p-4 pl-8 text-sm outline-none focus:ring-2 focus:ring-accent-yellow font-bold text-lg">
            </div>
            <div class="flex space-x-3 mb-6">
                <button @click="newExpense.payment='cash'" :class="newExpense.payment==='cash' ? 'bg-deep-sea-blue text-white' : 'bg-slate-100 text-slate-500'" class="flex-1 py-3 rounded-xl text-sm transition-colors"><i class="fa-solid fa-coins mr-1"></i> 現金</button>
                <button @click="newExpense.payment='card'" :class="newExpense.payment==='card' ? 'bg-deep-sea-blue text-white' : 'bg-slate-100 text-slate-500'" class="flex-1 py-3 rounded-xl text-sm transition-colors"><i class="fa-solid fa-credit-card mr-1"></i> 信用卡</button>
            </div>
            <div class="flex space-x-3">
                <button @click="showExpenseModal = false" class="flex-1 py-3 rounded-xl bg-slate-100 text-slate-500 font-bold text-sm">取消</button>
                <button @click="addExpense" class="flex-1 py-3 rounded-xl bg-accent-yellow text-deep-sea-blue font-bold text-sm shadow-lg shadow-accent-yellow/30">儲存</button>
            </div>
        </div>
    </div>
    
    <div v-if="showItineraryModal" class="fixed inset-0 bg-deep-sea-blue/40 z-50 flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in">
        <div class="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 class="font-bold text-lg mb-5 text-center text-slate-800">{{ isEditMode ? '編輯行程' : '新增行程' }}</h3>
            <div class="space-y-3">
                <select v-model="newItinerary.category" class="w-full bg-slate-50 rounded-xl p-3 text-sm outline-none">
                    <option value="sightseeing">景點</option>
                    <option value="food">飲食</option>
                    <option value="shopping">購物</option>
                    <option value="accommodation">住宿</option>
                    <option value="flight">航班</option>
                    <option value="transport">交通</option>
                    <option value="ticket">門票</option>
                    <option value="other">其他</option>
                </select>
                <input v-model="newItinerary.name" placeholder="名稱" class="w-full bg-slate-50 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-deep-sea-blue">
                <input v-model="newItinerary.address" placeholder="地址/地點 (Google Map 搜尋用)" class="w-full bg-slate-50 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-deep-sea-blue">
                <div class="grid grid-cols-2 gap-3">
                    <input v-model="newItinerary.startTime" type="text" placeholder="時間 (e.g. 09:30)" class="bg-slate-50 rounded-xl p-3 text-sm outline-none">
                    <select v-model="newItinerary.transportType" class="bg-slate-50 rounded-xl p-3 text-sm outline-none">
                        <option value="walk">步行</option>
                        <option value="car">自駕</option>
                        <option value="bus">巴士</option>
                        <option value="public">地鐵/JR</option>
                        <option value="flight">飛機</option>
                        <option value="other">其他</option>
                    </select>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <input v-model="newItinerary.travelTime" type="text" placeholder="車程/移動時間" class="bg-slate-50 rounded-xl p-3 text-sm outline-none">
                    <input v-model="newItinerary.hours" type="text" placeholder="營業時間" class="bg-slate-50 rounded-xl p-3 text-sm outline-none">
                </div>
                <input v-model="newItinerary.price" type="text" placeholder="門票/費用" class="w-full bg-slate-50 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-deep-sea-blue">
                <textarea v-model="newItinerary.note" placeholder="備註/細節" rows="3" class="w-full bg-slate-50 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-deep-sea-blue"></textarea>
            </div>
            <div class="flex space-x-3 mt-6">
                <button @click="showItineraryModal = false; isEditMode = false" :class="isEditMode ? 'w-1/3' : 'flex-1'" class="py-3 rounded-xl bg-slate-100 text-slate-500 font-bold text-sm">取消</button>
                
                <button v-if="isEditMode" @click="removeItineraryItem(newItinerary.id)" class="w-1/3 py-3 rounded-xl bg-red-100 text-red-600 font-bold text-sm hover:bg-red-200 transition-colors">
                    <i class="fa-solid fa-trash-can mr-1"></i> 刪除
                </button>
                
                <button @click="saveItineraryItem" :class="isEditMode ? 'w-1/3' : 'flex-1'" class="py-3 rounded-xl bg-deep-sea-blue text-white font-bold text-sm shadow-lg shadow-deep-sea-blue/30">{{ isEditMode ? '儲存修改' : '新增行程' }}</button>
            </div>
        </div>
    </div>


</div> <script>
    const { createApp, ref, computed, onMounted } = Vue

    createApp({
        setup() {
            // 匯率基準
            const EXCHANGE_RATE = 0.215;

            // 標籤顏色與圖示定義
            const CATEGORY_MAP = {
                sightseeing: { color: 'bg-green-500', icon: 'fa-solid fa-camera' },
                food: { color: 'bg-red-500', icon: 'fa-solid fa-utensils' },
                shopping: { color: 'bg-indigo-500', icon: 'fa-solid fa-bag-shopping' },
                accommodation: { color: 'bg-purple-500', icon: 'fa-solid fa-bed' },
                flight: { color: 'bg-blue-500', icon: 'fa-solid fa-plane-departure' },
                transport: { color: 'bg-orange-500', icon: 'fa-solid fa-car' },
                ticket: { color: 'bg-cyan-500', icon: 'fa-solid fa-ticket' },
                other: { color: 'bg-slate-500', icon: 'fa-solid fa-circle-info' },
                stay: { color: 'bg-purple-500', icon: 'fa-solid fa-hotel' }, 
            };
            const CATEGORY_LABEL_MAP = {
                sightseeing: '景點', food: '飲食', shopping: '購物', accommodation: '住宿', flight: '航班', transport: '交通', ticket: '門票', other: '其他', stay: '住宿'
            };

            // 當前頁面
            const currentTab = ref('itinerary');

            // --- 資料定義：已根據使用者最新行程全部更新 ---
            
            const dates = ref([
                { date: '2/1', weekday: '五', hasCar: false, tollFee: 0 },
                { date: '2/2', weekday: '六', hasCar: true, tollFee: 0 }, // 2/2 租車日開始
                { date: '2/3', weekday: '日', hasCar: true, tollFee: 0 },
                { date: '2/4', weekday: '一', hasCar: true, tollFee: 0 },
                { date: '2/5', weekday: '二', hasCar: true, tollFee: 0 },
                { date: '2/6', weekday: '三', hasCar: true, tollFee: 0 }, // 2/6 還車
                { date: '2/7', weekday: '四', hasCar: false, tollFee: 0 },
            ]);

            const hotels = ref([
                { name: '札幌大通東急STAY酒店', date: '2/1 - 2/3 (2晚)', phone: '+81-11-200-5109', address: '〒060-0042 北海道札幌市中央区大通西９丁目３−3' },
                { name: '富良野ホテル (Furano Hotel)', date: '2/3 (1晚)', phone: '+81-167-22-1133', address: '〒076-0035 北海道富良野市学田三区' },
                { name: '登別溫泉第一瀧本館', date: '2/4 - 2/6 (2晚)', phone: '+81-143-84-2111', address: '〒059-0551 北海道登別市登別温泉町５５' },
                { name: '札幌西三井花園飯店', date: '2/6 (1晚)', phone: '+81-11-280-5531', address: '〒060-0004 北海道札幌市中央区北４条西７丁目１−2' },
            ]);
            
            // 使用者的完整行程資料 (已根據最新的排程更新)
            const itineraryData = ref([
                // Day 1: 2/1 (日) 札幌市區遊
                [
                    { id: 101, name: '桃園機場報到', category: 'flight', startTime: '06:00', address: '桃園國際機場 (TPE)', note: '中華航空 CI0130 08:35起飛', hours: null, price: null, transportType: 'flight', travelTime: null, isNoteExpanded: false },
                    { id: 102, name: '新千歲機場 (CTS) 抵達', category: 'flight', startTime: '13:15', address: '新千歲機場', note: '領取行李與確認巴士站牌', hours: null, price: null, transportType: 'flight', travelTime: '4h40m', isNoteExpanded: false },
                    { id: 103, name: '搭乘機場巴士至札幌', category: 'transport', startTime: '~14:30', address: '札幌大通東急STAY酒店', note: '國內線14, 22站台搭車，分直達/全達，車程約60-80分鐘。', hours: null, price: '約 ¥1,400/人', transportType: 'bus', travelTime: '1h30m', isNoteExpanded: false },
                    { id: 104, name: '札幌大通東急STAY酒店 Check-in', category: 'accommodation', startTime: '~16:00', address: '札幌東急大通酒店', note: '完成住宿手續並稍作休息', hours: null, price: null, transportType: 'walk', travelTime: '10m', isNoteExpanded: false },
                    { id: 105, name: '晚餐 (湯咖哩)', category: 'food', startTime: '~17:00', address: 'Soup Curry GARAKU 或 奥芝商店 実家', note: '人氣：燉豬肉湯咖哩、嫩雞腿和蔬菜湯咖哩', hours: '17:00-20:30', price: null, transportType: 'walk', travelTime: '15m', isNoteExpanded: false },
                    { id: 106, name: '大通公園 & 札幌電視塔', category: 'sightseeing', startTime: '~19:00', address: '大通公園 & 札幌電視塔', note: '欣賞夜景，電視塔觀景台高 90.38m。冬季有燈飾。', hours: '9:00-22:00 (電視塔)', price: '觀景台門票', transportType: 'walk', travelTime: '5m', isNoteExpanded: false },
                    { id: 107, name: '貍小路商店街', category: 'shopping', startTime: '~20:30', address: '貍小路商店街 (4-5丁目)', note: '藥妝、伴手禮採購。', hours: null, price: null, transportType: 'walk', travelTime: '15m', isNoteExpanded: false },
                    { id: 108, name: '成吉思汗烤肉 (宵夜/晚餐)', category: 'food', startTime: '~21:30', address: '成吉思汗烤肉YUHI 薄野本店', note: '或是北海道ジンギスカンMASAJINすすきの本店', hours: '17:00–23:00/00:00', price: null, transportType: 'walk', travelTime: '15m', isNoteExpanded: false },
                    { id: 109, name: '業務超市', category: 'shopping', startTime: '~22:30', address: '業務スーパー (大通西17条店)', note: '大份量、價格實惠，採購零食或隔日早餐', hours: '9:00–22:00', price: null, transportType: 'walk', travelTime: '20m', isNoteExpanded: false },
                ],
                // Day 2: 2/2 (一) 小樽
                [
                    { id: 201, name: '札幌市區取車', category: 'transport', startTime: '08:00', address: 'Nissan Rent a Car 札幌駅南口アスティ店', note: '租車日開始！', hours: null, price: null, transportType: 'walk', travelTime: '20m', isNoteExpanded: false },
                    { id: 202, name: '小樽水族館', category: 'sightseeing', startTime: '09:00', address: '小樽水族館', note: '海獸樂園表演 (海豚/海獅) 11:00、企鵝散步 11:30 (冬季限定)。', hours: '9:00-16:00', price: '¥1,800/成人', transportType: 'car', travelTime: '55m', isNoteExpanded: false },
                    { id: 203, name: '小樽水族館企鵝散步', category: 'sightseeing', startTime: '11:30', address: '小樽水族館', note: '冬季限定，企鵝會在雪地上散步。', hours: null, price: null, transportType: 'walk', travelTime: '0m', isNoteExpanded: false },
                    { id: 204, name: '午餐 (三角市場)', category: 'food', startTime: '~12:45', address: '三角市場 (滝波食堂/惠比壽櫻)', note: '新鮮海鮮丼飯，近 JR 小樽車站。 (備選: cafe BAAL 牛排飯)', hours: '8:00-17:00', price: null, transportType: 'car', travelTime: '15m', isNoteExpanded: false },
                    { id: 205, name: '小樽堺町通り商店街', category: 'shopping', startTime: '~14:30', address: '小樽音樂盒堂本館/北一硝子/LeTAO總店', note: '北一硝子三號館煤油燈、蒸汽鐘報時、LeTAO雙層起司蛋糕。', hours: null, price: null, transportType: 'walk', travelTime: '10m', isNoteExpanded: false },
                    { id: 206, name: '天狗山纜車', category: 'sightseeing', startTime: '~16:30', address: '天狗山纜車', note: '觀賞小樽夜景的最佳地點 (北海道三大夜景之一)。約 15:00 上山', hours: '9:00-21:00', price: '¥1,800/成人', transportType: 'car', travelTime: '15m', isNoteExpanded: false },
                    { id: 207, name: '晚餐', category: 'food', startTime: '~19:00', address: '小樽運河周邊餐廳', note: '在小樽用餐後再開車回札幌', hours: null, price: null, transportType: 'car', travelTime: '15m', isNoteExpanded: false },
                    { id: 208, name: '返回札幌大通東急STAY酒店', category: 'accommodation', startTime: '~20:30', address: '札幌東急大通酒店', note: '休息準備隔日退房', hours: null, price: null, transportType: 'car', travelTime: '1h', isNoteExpanded: false },
                ],
                // Day 3: 2/3 (二) 旭川 & 美瑛 & 富良野
                [
                    { id: 301, name: '早餐 (Sandria三明治)', category: 'food', startTime: '08:00', address: 'Sandria三明治 (札幌市區)', note: '雙倍蛋沙拉、炸蝦三明治，外帶車上享用。', hours: '24小時', price: null, transportType: 'car', travelTime: '15m', isNoteExpanded: false },
                    { id: 302, name: '旭山動物園', category: 'sightseeing', startTime: '09:30', address: '旭山動物園', note: '冬季營業時間 10:30-15:30。必看冬季限定企鵝散步、北極熊館。', hours: '10:30-15:30 (冬季)', price: '¥1,000/成人', transportType: 'car', travelTime: '2h', isNoteExpanded: false },
                    { id: 303, name: '午餐', category: 'food', startTime: '~13:00', address: '山頭火拉麵 或 動物園內餐廳', note: '可在旭川市區或動物園附近用餐', hours: null, price: null, transportType: 'car', travelTime: '15m', isNoteExpanded: false },
                    { id: 304, name: '美瑛景點 (聖誕樹 & 白鬚瀑布)', category: 'sightseeing', startTime: '~15:00', address: '美瑛聖誕樹 & 白鬚瀑布', note: '欣賞美瑛著名的冬季雪景', hours: null, price: null, transportType: 'car', travelTime: '30m', isNoteExpanded: false },
                    { id: 305, name: '富良野 森林精靈露台', category: 'sightseeing', startTime: '~17:00', address: '森林精靈露台', note: '手工藝品小木屋，晚上點燈很美，免費入場。', hours: '10:00-20:45', price: '免費', transportType: 'car', travelTime: '1h', isNoteExpanded: false },
                    { id: 306, name: '晚餐', category: 'food', startTime: '~19:00', address: '富良野周邊餐廳', note: '富良野當地特色餐廳', hours: null, price: null, transportType: 'car', travelTime: '15m', isNoteExpanded: false },
                    { id: 307, name: 'COOP超市 & Seicomart', category: 'shopping', startTime: '~20:30', address: 'COOP超市 / Seicomart', note: 'Seicomart 的 Hot Chef 熟食和 Secoma 自有品牌。', hours: null, price: null, transportType: 'car', travelTime: '10m', isNoteExpanded: false },
                    { id: 308, name: '富良野ホテル Check-in', category: 'accommodation', startTime: '~21:30', address: '富良野ホテル (Furano Hotel)', note: '本日住宿：富良野', hours: null, price: null, transportType: 'car', travelTime: '10m', isNoteExpanded: false },
                ],
                // Day 4: 2/4 (三) 登別溫泉
                [
                    { id: 401, name: '白色戀人工廠', category: 'sightseeing', startTime: '09:00', address: '白い恋人パーク', note: '歐式庭園，參觀餅乾生產線，可 DIY 體驗。', hours: '10:00-19:00', price: '¥800/成人', transportType: 'car', travelTime: '2h30m', isNoteExpanded: false },
                    { id: 402, name: '午餐 (牛津巧克力酒廊)', category: 'food', startTime: '~12:00', address: '白色戀人工廠內', note: '或在前往下一個景點途中用餐', hours: null, price: null, transportType: 'walk', travelTime: '10m', isNoteExpanded: false },
                    { id: 403, name: '國營瀧野鈴蘭丘陵公園', category: 'sightseeing', startTime: '~14:00', address: '國営滝野すずらん公園', note: '冬季免費入園 (瀧野雪之世界)，玩雪、雪上橡皮艇。', hours: '9:00-17:00 (冬季免費)', price: '冬季免費', transportType: 'car', travelTime: '45m', isNoteExpanded: false },
                    { id: 404, name: '登別溫泉第一瀧本館 Check-in', category: 'accommodation', startTime: '~16:30', address: '登別溫泉第一瀧本館', note: '本日住宿：登別溫泉 (本日車程較長)', hours: null, price: null, transportType: 'car', travelTime: '1h20m', isNoteExpanded: false },
                    { id: 405, name: '晚餐 (旅館內)', category: 'food', startTime: '~18:00', address: '登別溫泉第一瀧本館', note: '享用溫泉旅館豐盛的晚餐', hours: null, price: null, transportType: 'walk', travelTime: '5m', isNoteExpanded: false },
                    { id: 406, name: '閻魔堂地獄審判', category: 'sightseeing', startTime: '~19:30', address: '閻魔堂', note: '溫泉街上的閻羅王變臉秀表演。', hours: null, price: null, transportType: 'walk', travelTime: '5m', isNoteExpanded: false },
                    { id: 407, name: '登別溫泉街', category: 'shopping', startTime: '~20:30', address: '登別溫泉街', note: '逛街、買伴手禮、免費足湯。', hours: null, price: null, transportType: 'walk', travelTime: '5m', isNoteExpanded: false },
                ],
                // Day 5: 2/5 (四) 登別
                [
                    { id: 501, name: '尼克斯海洋公園', category: 'sightseeing', startTime: '09:30', address: '登別尼克斯海洋公園', note: '歐洲城堡水族館、企鵝遊行、海豚海獅表演。', hours: '9:00-17:00', price: '¥3,000/成人', transportType: 'car', travelTime: '10m', isNoteExpanded: false },
                    { id: 502, name: '尼克斯海洋公園 企鵝遊行', category: 'sightseeing', startTime: '11:00', address: '登別尼克斯海洋公園', note: '企鵝會在園區內大搖大擺散步。', hours: null, price: null, transportType: 'walk', travelTime: '0m', isNoteExpanded: false },
                    { id: 503, name: '午餐', category: 'food', startTime: '~12:30', address: '尼克斯海洋公園內或登別溫泉街', note: '可選擇回到溫泉街用餐', hours: null, price: null, transportType: 'car', travelTime: '10m', isNoteExpanded: false },
                    { id: 504, name: '登別熊牧場', category: 'sightseeing', startTime: '~14:00', address: '登別熊牧場', note: '搭纜車上山，人之籠看熊，俱多樂湖展望台。', hours: '9:30-16:30', price: '¥3,000/成人 (含纜車)', transportType: 'car', travelTime: '10m', isNoteExpanded: false },
                    { id: 505, name: '登別地獄谷', category: 'sightseeing', startTime: '~16:00', address: '登別地獄谷', note: '壯麗地貌，爆裂火山口、鐵泉池間歇泉，免費參觀。', hours: '全天', price: '免費', transportType: 'car', travelTime: '5m', isNoteExpanded: false },
                    { id: 506, name: '晚餐 (旅館內) / 溫泉休息', category: 'food', startTime: '~18:00', address: '登別溫泉第一瀧本館', note: '本日繼續享受溫泉', hours: null, price: null, transportType: 'walk', travelTime: '5m', isNoteExpanded: false },
                    { id: 507, name: '鬼火之路', category: 'sightseeing', startTime: '~20:00', address: '登別地獄谷', note: '夜晚步道兩側點燈，營造奇幻氛圍', hours: null, price: '免費', transportType: 'walk', travelTime: '5m', isNoteExpanded: false },
                ],
                // Day 6: 2/6 (五) 札幌
                [
                    { id: 601, name: '羊之丘展望台', category: 'sightseeing', startTime: '09:00', address: 'さっぽろ羊ヶ丘展望台', note: '與克拉克博士雕像合影。冬季可玩雪。', hours: null, price: '¥1,000/成人', transportType: 'car', travelTime: '1h', isNoteExpanded: false },
                    { id: 602, name: '午餐 (羊之丘)', category: 'food', startTime: '~12:00', address: '羊之丘休息屋', note: '可品嚐成吉思汗烤肉或白色戀人冰淇淋。', hours: null, price: null, transportType: 'walk', travelTime: '0m', isNoteExpanded: false },
                    { id: 603, name: '三井OUTLET PARK 札幌北廣島', category: 'shopping', startTime: '~14:00', address: '三井アウトレットパーク 札幌北広島', note: '購物血拼。', hours: '10:00-20:00', price: null, transportType: 'car', travelTime: '30m', isNoteExpanded: false },
                    { id: 604, name: '歸還租車', category: 'transport', startTime: '~19:00', address: 'Nissan Rent a Car 札幌駅南口アスティ店', note: '本日晚上歸還租車。', hours: null, price: null, transportType: 'car', travelTime: '1h', isNoteExpanded: false },
                    { id: 605, name: '札幌西三井花園飯店 Check-in', category: 'accommodation', startTime: '~20:00', address: '札幌西三井花園飯店', note: '本日住宿：札幌', hours: null, price: null, transportType: 'walk', travelTime: '10m', isNoteExpanded: false },
                    { id: 606, name: '晚餐 (串鳥)', category: 'food', startTime: '~20:30', address: '串鳥 札幌駅北口店', note: '人氣餐點：雞肉串、豬肉串、豬五花蘆筍捲。', hours: '16:30–23:30', price: null, transportType: 'walk', travelTime: '5m', isNoteExpanded: false },
                ],
                // Day 7: 2/7 (六) 回家
                [
                    { id: 701, name: '早餐 (飯店/札幌車站周邊)', category: 'food', startTime: '08:00', address: '札幌車站周邊', note: '享用早餐', hours: null, price: null, transportType: 'walk', travelTime: '10m', isNoteExpanded: false },
                    { id: 702, name: '前往新千歲機場 (JR/巴士)', category: 'transport', startTime: '09:30', address: '新千歲機場', note: '搭乘 JR 或機場巴士，預計 11:30 報到。', hours: null, price: null, transportType: 'public', travelTime: '40m-1h', isNoteExpanded: false },
                    { id: 703, name: '機場報到/托運行李', category: 'flight', startTime: '11:30', address: '新千歲機場 (CTS)', note: '預計 11:30 報到', hours: null, price: null, transportType: 'walk', travelTime: '0m', isNoteExpanded: false },
                    { id: 704, name: '午餐 (一幻拉麵)', category: 'food', startTime: '~12:30', address: '一幻拉麵 (國內線航廈)', note: '推薦濃厚蝦湯頭搭配粗麵。', hours: '9:00-21:00', price: null, transportType: 'walk', travelTime: '10m', isNoteExpanded: false },
                    { id: 705, name: '機場購物/候機', category: 'shopping', startTime: '~13:30', address: '新千歲機場', note: '國內線航廈伴手禮店、多啦A夢樂園、Royce\' Chocolate World。', hours: null, price: null, transportType: 'walk', travelTime: '0m', isNoteExpanded: false },
                    { id: 706, name: '新千歲機場起飛 (CI0131)', category: 'flight', startTime: '14:30', address: '桃園國際機場 (TPE)', note: '預計 18:15 抵達桃園', hours: null, price: null, transportType: 'flight', travelTime: '3h45m', isNoteExpanded: false },
                ],
            ]);

            // 預設天氣資訊
            const weatherData = ref([
                { condition: 'snow', temp: '0/-5', feel: '-8' },
                { condition: 'snow', temp: '-1/-7', feel: '-10' },
                { condition: 'snow', temp: '-2/-10', feel: '-12' },
                { condition: 'snow', temp: '-3/-8', feel: '-11' },
                { condition: 'snow', temp: '1/-4', feel: '-6' },
                { condition: 'snow', temp: '2/-3', feel: '-5' },
                { condition: 'cloudy', temp: '3/-2', feel: '-3' },
            ]);
            
            // 購物清單 (範例資料)
            const shoppingList = ref([
                { name: '六花亭 奶油葡萄乾夾心餅乾', image: 'https://via.placeholder.com/100/f0f9ff/005e8a?text=Rokkatei' },
                { name: 'LeTAO 雙層起司蛋糕', image: 'https://via.placeholder.com/100/f0f9ff/005e8a?text=LeTAO' },
                { name: '薯條三兄弟', image: 'https://via.placeholder.com/100/f0f9ff/005e8a?text=JagaPockle' },
            ]);

            // 花費紀錄 (範例資料)
            const expenses = ref([
                { name: '機票費用', amount: 35000, category: 'flight', date: '2026-01-15', payment: 'card' },
                { name: '札幌湯咖哩', amount: 4500, category: 'food', date: '2026-03-06', payment: 'cash' },
                { name: '小樽水族館門票', amount: 3600, category: 'ticket', date: '2026-03-07', payment: 'card' },
                { name: '登別溫泉飯店', amount: 80000, category: 'stay', date: '2026-03-09', payment: 'card' },
            ]);

            // --- 狀態控制 ---
            const selectedDateIndex = ref(0);
            const showShoppingModal = ref(false);
            const showExpenseModal = ref(false);
            const showItineraryModal = ref(false);
            const isEditMode = ref(false); 
            
            // 新增/編輯行程狀態
            const newItinerary = ref({
                id: null, name: '', category: 'sightseeing', startTime: '', hours: '', address: '', price: '', note: '', transportType: 'car', travelTime: '', isNoteExpanded: false
            });
            // 新增購物狀態
            const newShoppingItem = ref({
                name: '', image: null
            });
            // 新增花費狀態
            const newExpense = ref({
                name: '', amount: null, category: 'food', date: new Date().toISOString().substring(0, 10), payment: 'cash'
            });

            // 貨幣轉換
            const currencyInput = ref(50000);
            const currencyResult = ref(0);
            
            // --- Computed Properties ---
            
            const currentItinerary = computed(() => {
                if (!itineraryData.value[selectedDateIndex.value]) {
                    itineraryData.value[selectedDateIndex.value] = [];
                }
                return itineraryData.value[selectedDateIndex.value];
            });

            const totalExpensesJPY = computed(() => {
                return expenses.value.reduce((sum, exp) => sum + exp.amount, 0);
            });

            const totalExpensesTWD = computed(() => {
                return Math.round(totalExpensesJPY.value * EXCHANGE_RATE);
            });

            // --- Methods ---

            const calculateCurrency = () => {
                currencyResult.value = Math.round(currencyInput.value * EXCHANGE_RATE);
            };

            const formatNumber = (num) => {
                if (num === 0 || num === null || num === undefined) return '0';
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            };

            // 取得顏色/圖示/描述
            const getCategoryColor = (category) => CATEGORY_MAP[category]?.color || CATEGORY_MAP.other.color;
            const getCategoryIcon = (category) => CATEGORY_MAP[category]?.icon || CATEGORY_MAP.other.icon;
            const getCategoryLabel = (category) => CATEGORY_LABEL_MAP[category] || '其他';
            const getWeatherIcon = (condition) => {
                const map = {
                    snow: 'fa-solid fa-snowflake',
                    sunny: 'fa-solid fa-sun',
                    cloudy: 'fa-solid fa-cloud',
                    rain: 'fa-solid fa-cloud-showers-heavy'
                };
                return map[condition] || 'fa-solid fa-cloud-question';
            };
            const getWeatherDescription = (condition) => {
                const map = {
                    snow: '大雪/降雪',
                    sunny: '晴朗',
                    cloudy: '多雲/陰天',
                    rain: '降雨'
                };
                return map[condition] || '天氣資訊未定';
            };
            const getTransportIcon = (type) => {
                const map = {
                    walk: 'fa-solid fa-shoe-prints',
                    car: 'fa-solid fa-car-side',
                    bus: 'fa-solid fa-bus-simple',
                    public: 'fa-solid fa-train-subway',
                    flight: 'fa-solid fa-plane',
                    other: 'fa-solid fa-solid fa-arrow-right-long'
                };
                return map[type] || 'fa-solid fa-arrow-right-long';
            };

            // 地圖功能
            const openMap = (query) => {
                if (query) {
                    // 使用 Google Maps 搜尋或導航
                    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
                    window.open(url, '_blank');
                }
            };

            const openMapDirections = (startItem, endItem) => {
                const origin = startItem.address || startItem.name;
                const destination = endItem.address || endItem.name;
                
                if (origin && destination) {
                    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${endItem.transportType === 'car' ? 'driving' : 'transit'}`;
                    window.open(url, '_blank');
                } else {
                    alert('移動兩點間至少需要一個地點名稱或地址。');
                }
            };
            
            // 浮動按鈕點擊處理
            const handleAddClick = () => {
                if (currentTab.value === 'itinerary') {
                    resetItineraryForm();
                    showItineraryModal.value = true;
                } else if (currentTab.value === 'shopping') {
                    resetShoppingForm();
                    showShoppingModal.value = true;
                } else if (currentTab.value === 'expenses') {
                    resetExpenseForm();
                    showExpenseModal.value = true;
                }
            };
            
            // --- 行程管理 ---
            const resetItineraryForm = () => {
                isEditMode.value = false;
                newItinerary.value = {
                    id: Date.now(), name: '', category: 'sightseeing', startTime: '', hours: '', address: '', price: '', note: '', transportType: 'car', travelTime: '', isNoteExpanded: false
                };
            };

            const editItem = (item) => {
                isEditMode.value = true;
                // 深拷貝，防止直接修改原始資料
                newItinerary.value = JSON.parse(JSON.stringify(item)); 
                showItineraryModal.value = true;
            };

            const saveItineraryItem = () => {
                if (!newItinerary.value.name) {
                    alert('行程名稱不能為空');
                    return;
                }
                
                if (isEditMode.value) {
                    // 編輯模式：替換舊項目
                    const index = currentItinerary.value.findIndex(item => item.id === newItinerary.value.id);
                    if (index !== -1) {
                        currentItinerary.value[index] = { ...newItinerary.value };
                    }
                } else {
                    // 新增模式：推入新項目
                    const newItem = { ...newItinerary.value };
                    // 確保 ID 是最新的
                    newItem.id = Date.now();
                    itineraryData.value[selectedDateIndex.value].push(newItem);
                }
                
                // 重新賦值以確保 Vue 響應式更新
                itineraryData.value[selectedDateIndex.value] = [...currentItinerary.value];
                
                showItineraryModal.value = false;
                isEditMode.value = false;
            };
            
            // 刪除行程項目功能
            const removeItineraryItem = (id) => {
                if (confirm('確定要刪除這個行程嗎？此操作無法復原。')) {
                    const currentList = itineraryData.value[selectedDateIndex.value];
                    const index = currentList.findIndex(item => item.id === id);
                    
                    if (index !== -1) {
                        currentList.splice(index, 1);
                        // 重新賦值以確保 Vue 響應式更新
                        itineraryData.value[selectedDateIndex.value] = [...currentList];
                        showItineraryModal.value = false;
                        isEditMode.value = false;
                        alert('行程已刪除。');
                    }
                }
            };
            
            // 行程上下移動
            const moveItinerary = (id, direction) => {
                const currentList = currentItinerary.value;
                const index = currentList.findIndex(item => item.id === id);

                if (index === -1) return;

                const newIndex = index + direction;
                if (newIndex >= 0 && newIndex < currentList.length) {
                    // 執行交換
                    const item = currentList.splice(index, 1)[0];
                    currentList.splice(newIndex, 0, item);
                    // 重新賦值以確保 Vue 響應式更新
                    itineraryData.value[selectedDateIndex.value] = [...currentList];
                }
            };

            const moveItineraryUp = (id) => moveItinerary(id, -1);
            const moveItineraryDown = (id) => moveItinerary(id, 1);


            // --- 購物清單管理 ---
            const resetShoppingForm = () => {
                newShoppingItem.value = { name: '', image: null };
            };
            
            const handleImageUpload = (event) => {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        newShoppingItem.value.image = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            };

            const addShoppingItem = () => {
                if (newShoppingItem.value.name.trim() === '') {
                    alert('商品名稱不能為空！');
                    return;
                }
                shoppingList.value.push({ ...newShoppingItem.value });
                showShoppingModal.value = false;
                resetShoppingForm();
            };

            const removeShoppingItem = (index) => {
                shoppingList.value.splice(index, 1);
            };

            // --- 花費管理 ---
            const resetExpenseForm = () => {
                newExpense.value = { name: '', amount: null, category: 'food', date: new Date().toISOString().substring(0, 10), payment: 'cash' };
            };

            const addExpense = () => {
                if (newExpense.value.name.trim() === '' || newExpense.value.amount === null || newExpense.value.amount <= 0) {
                    alert('請輸入有效名稱和金額！');
                    return;
                }
                expenses.value.push({ ...newExpense.value });
                // 排序 (最新到最舊)
                expenses.value.sort((a, b) => new Date(b.date) - new Date(a.date)); 
                showExpenseModal.value = false;
                resetExpenseForm();
            };

            const removeExpense = (index) => {
                expenses.value.splice(index, 1);
            };


            // 載入時執行
            onMounted(() => {
                calculateCurrency();
                // 初始載入時將 expense 排序 (最新到最舊)
                expenses.value.sort((a, b) => new Date(b.date) - new Date(a.date));
            });

            return {
                currentTab, dates, selectedDateIndex, itineraryData, currentItinerary,
                hotels, shoppingList, expenses, totalExpensesJPY, totalExpensesTWD,
                weatherData, currencyInput, currencyResult, calculateCurrency,
                getCategoryColor, getCategoryIcon, getCategoryLabel, getWeatherIcon, getTransportIcon, getWeatherDescription,
                showShoppingModal, showExpenseModal, showItineraryModal, isEditMode,
                newShoppingItem, newExpense, newItinerary,
                handleAddClick, handleImageUpload, addShoppingItem, removeShoppingItem,
                addExpense, removeExpense, editItem, saveItineraryItem,
                removeItineraryItem, 
                moveItineraryUp, moveItineraryDown, 
                openMap, openMapDirections, formatNumber
            };
        }
    }).mount('#app');
</script>
</body>
</html>
