var _sjsSupporter={compiler:!1};window.define("pages/image-process/index.swan",(function(e,i){i.exports={componentUsingComponentMap:{"payment/Components/Navbar/Navbar.swan":["Navbar"],"payment/Components/NavbarPlaceholder/placeholder.swan":["NavbarPlaceholder"],"components/nav-bar/nav-bar.swan":["nav-bar"],"components/choose-image-picker/index.swan":["choose-image-picker"],"components/toggle-image/toggle-image.swan":["toggle-image"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<nav-bar id="nav-bar" titleText="文档扫描" customBg="#fff" showHome="{{true}}" showBack="{{true}}"></nav-bar><view class="page" style="{{\'padding-top:\'+topHeight+\'px\'}};height:{{screenHeight}}px;"><view class="preview-wrap" style="height:{{screenHeight - bottomOperateHeight}}px;"><view s-if="\'pengding\' === processStatus || \'error\' === processStatus" class="preview-loading-mask" style="z-index: 11;"><image src="{{processStatus === \'pengding\' ? PROCESSING_ICON : (processStatus === \'error\' ? PROCESS_ERROR_ICON : PROCESSING_ICON)}}" class="preview-loading-img" mode="aspectFit" image-menu-prevent></image><view s-if="processStatus === \'pengding\'">智能处理加载中{{processDone}}/{{imageList.length}}...</view></view><view class="preview-image"><image mode="aspectFit" class="preview-imag-el swan-spider-tap" src="{{imageList[currentIndex].imageUrl}}" image-menu-prevent="{{true}}" on-binderror="eventHappen(\'error\', $event, \'handleImageError\', \'\', \'bind\')" on-bindload="eventHappen(\'load\', $event, \'handleImageLoad\', \'\', \'bind\')"></image><view s-if="\'pengding\' === imageList[currentIndex].processStatus || \'error\' === imageList[currentIndex].processStatus" class="preview-loading-mask"><image src="{{imageList[currentIndex].processStatus === \'pengding\' ? PROCESSING_ICON : (imageList[currentIndex].processStatus === \'error\' ? PROCESS_ERROR_ICON : PROCESSING_ICON)}}" class="preview-loading-img" mode="aspectFit" image-menu-prevent></image><view s-if="imageList[currentIndex].processStatus === \'pengding\'">智能处理加载中...</view><view s-else class="preview-loading-retry swan-spider-tap" data-index="{{currentIndex}}" on-bindtap="eventHappen(\'tap\', $event, \'handleRetry\', \'\', \'bind\')"><view >{{imageList[currentIndex].errorMsg}}</view><image image-menu-prevent class="preview-loading-retry-icon" src="https://staticiot.cdn.bcebos.com/union/netdisk-bp-smartprogram/ic-img-progress-retry.png"></image></view></view></view><view style="height: 4.8vw;"></view><toggle-image allLength="{{imageList.length}}" class="swan-spider-tap" on-bindtoggle="eventHappen(\'toggle\', $event, \'handleToggleImage\', \'\', \'bind\')"></toggle-image></view><view class="bottom-operate" style="height:{{bottomOperateHeight}}px;"><view class="filter-wrap"><view s-for="item, index in filterList" class="filter-item {{item.op_id === imageList[currentIndex].currentOpId ? \'active\' : \'\'}} swan-spider-tap" data-opid="{{item.op_id}}" on-bindtap="eventHappen(\'tap\', $event, \'handleFilterShow\', \'\', \'bind\')"><view class="filter-item-border"><image src="{{item.image}}" mode="aspectFit" class="filter-item-image" image-menu-prevent></image></view><view class="filter-name">{{item.name}}</view></view></view><view class="button-wrap"><view class="button-list"><view class="re-takephoto swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleReTakePhoto\', \'\', \'bind\')"><image src="https://staticiot.cdn.bcebos.com/union/netdisk-bp-smartprogram/re-takephoto-icon.png" class="re-takephoto-icon" image-menu-prevent></image><view >重拍</view></view><view class="clip-image swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleClipImage\', \'\', \'bind\')"><image src="https://staticiot.cdn.bcebos.com/union/netdisk-bp-smartprogram/clip-image-icon.png" class="clip-image-icon" image-menu-prevent></image><view >裁切</view></view></view><view ><view class="next-btn swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'hanlderNextNew\', \'\', \'bind\')">下一步</view></view></view></view><choose-image-picker id="showDocumentScanPicker" custom="{{true}}" class="swan-spider-tap" on-bindchooseImage="eventHappen(\'chooseImage\', $event, \'reloadImage\', \'\', \'bind\')"></choose-image-picker></view>',isComponent:!1,componentPath:"pages/image-process/index.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));