var _sjsSupporter={compiler:!1};window.define("pages/file/preview-image/preview-image.swan",(function(e,t){t.exports={componentUsingComponentMap:{"payment/Components/Navbar/Navbar.swan":["Navbar"],"payment/Components/NavbarPlaceholder/placeholder.swan":["NavbarPlaceholder"],"components/image-preview/image-preview.swan":["imagepreview"],"components/toasts/index.swan":["toasts"],"components/outside-bottom-bar/index.swan":["outside-bottom-bar"],"components/activity-btn/index.swan":["activity-btn"],"components/bottom-btn-bar/bottom-btn-bar.swan":["bottom-btn-bar"],"components/vip-card/index.swan":["vip-card"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:"<view ><imagepreview id=\"ImagePreview\" homePre=\"{{homePre || schemaPre}}\" outsidePre=\"{{outsidePre}}\" class=\"swan-spider-tap\" on-binddoSave=\"eventHappen('doSave', $event, 'doSave', '', 'bind')\" on-bindshowConfirm=\"eventHappen('showConfirm', $event, 'showConfirm', '', 'bind')\"><activity-btn id=\"activitybtn\" activity='{{activity}}' show='{{activity.isValid}}' showCancel=\"{{false}}\" activity-class=\"activity-btn-class\" top=\"{{statusBarHeightRpx + 120}}rpx\" bottom=\"auto\" on-bindiconClick=\"eventHappen('iconClick', $event, 'handleIconClick', '', 'bind')\"></activity-btn><outside-bottom-bar outsidePre=\"{{outsidePre}}\" isHomeDir=\"{{false}}\" imgPre=\"{{true}}\" thirdParty=\"{{thirdParty}}\" class=\"video-bottom-btn swan-spider-tap\" on-bindstartShare=\"eventHappen('startShare', $event, 'startShare', '', 'bind')\" on-bindtiebaShare=\"eventHappen('tiebaShare', $event, 'tiebaShare', '', 'bind')\" on-bindstartSave=\"eventHappen('startSave', $event, 'startSave', '', 'bind')\" on-bindpopupopen=\"eventHappen('popupopen', $event, 'popupopen', '', 'bind')\" on-bindpopupclose=\"eventHappen('popupclose', $event, 'popupclose', '', 'bind')\" on-binddownLoad=\"eventHappen('downLoad', $event, 'downLoad', '', 'bind')\" on-binddealVipCard=\"eventHappen('dealVipCard', $event, 'dealVipCard', '', 'bind')\"></outside-bottom-bar><bottom-btn-bar id=\"bottomBtnBar\" imgPre=\"{{true}}\" home=\"{{homePre || schemaPre}}\" thirdParty=\"{{thirdParty}}\" class=\"swan-spider-tap\" on-binddownLoad=\"eventHappen('downLoad', $event, 'downLoad', '', 'bind')\" on-bindstartShare=\"eventHappen('startShare', $event, 'startShare', '', 'bind')\" on-bindtiebaShare=\"eventHappen('tiebaShare', $event, 'tiebaShare', '', 'bind')\" on-binddoShareTieba=\"eventHappen('doShareTieba', $event, 'doShareTieba', '', 'bind')\"></bottom-btn-bar></imagepreview></view><toasts id=\"toasts\"></toasts><vip-card id=\"vipCard\"></vip-card>",isComponent:!1,componentPath:"pages/file/preview-image/preview-image.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));