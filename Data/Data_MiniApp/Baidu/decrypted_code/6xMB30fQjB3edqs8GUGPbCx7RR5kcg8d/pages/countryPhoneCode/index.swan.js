var _sjsSupporter={compiler:!1};window.define("pages/countryPhoneCode/index.swan",(function(e,i){i.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view class="codeChoose" s-if="{{codeData}}"><view class="header-box"><view class="search-box"><image class="search-icon" src="https://m.airchina.com.cn/ac/WeChat_Image/icon_black_search.png" /><input class="search-input" type="text" value="{{keyWord}}" placeholder="请输入中/英文名称查询" placeholder-class="input-placeholder" on-bindinput="eventHappen(\'input\', $event, \'search\', \'\', \'bind\')" /></view></view><scroll-view id="scroll-view" scroll-y="true" class="scroll-wrapper" scroll-into-view="{{toView}}"><view s-if="{{showDefault}}"><view class="hot-item" id="hot">热门</view><view class="word-box"><view class="word-item swan-spider-tap" s-for="item, index in hot" s-key="index" data-area-code="{{item.nationlityCode}}" data-code="{{item}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'catch\')">{{item.nationality}}</view></view><view class="item-box" s-for="item, index in codeData.groupNationlityCode" s-key="index"><view id="{{index}}" class="letterView">{{index}}</view><view class="countryBlock"><view s-for="items, index in codeData.groupNationlityCode[index]" s-for-item="items" s-key="index" class="countryView swan-spider-tap" data-area-code="{{items.nationlityCode}}" data-code="{{items}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><view class="wid"><view >{{items.nationality}}</view><view class="col">{{items.nationalityId}}</view></view><view s-if="{{type == \'areaCode\'}}">+{{items.nationlityCode}}</view></view></view></view></view><view s-else><view s-if="{{searchRes.length === 0}}" class="tag">未搜索到结果</view><view s-else><view s-for="items, index in searchRes" s-for-item="items" class="countryView swan-spider-tap" data-area-code="{{items.nationlityCode}}" data-code="{{items}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><view class="wid"><view >{{items.nationality}}</view><view class="col">{{items.nationalityId}}</view></view><view s-if="{{type == \'areaCode\'}}">+{{items.nationlityCode}}</view></view></view></view></scroll-view><view s-if="{{showDefault}}" class="sortArea"><view data-sort="#" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">#</view><view s-for="item, index in codeData.lettersList" s-key="index" data-sort="{{codeData.lettersList[index]}}" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">{{codeData.lettersList[index]}}</view></view></view>',isComponent:!1,componentPath:"pages/countryPhoneCode/index.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));