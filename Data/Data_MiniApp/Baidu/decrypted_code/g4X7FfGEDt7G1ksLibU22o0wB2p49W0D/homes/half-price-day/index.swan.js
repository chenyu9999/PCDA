var _sjsSupporter={compiler:!1};function ownKeys(l,e){var n=Object.keys(l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),n.push.apply(n,t)}return n}function _objectSpread(l){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach((function(e){_defineProperty(l,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(n,e))}))}return l}function _defineProperty(l,e,n){return e in l?Object.defineProperty(l,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):l[e]=n,l}window.define("homes/half-price-day/index.swan",(function(require,modulesExports){var componentUsingComponentMap={"components/c-button-login/c-button-login.swan":["c-button-login"],"components/top-fixed-bar/tpl.swan":["top-fixed-bar"],"components/page-loading/page-loading.swan":["page-loading"],"components/c-tabs-header-top/index.swan":["c-tabs-header-top"],"components/loading/index.swan":["c-loading"],"components/c-repurchase-popup/index.swan":["c-repurchase-popup"],"node_modules/@baidu/smart-kit/dist/components/service-container/src/service-container.swan":["service-container"]},componentUsingComponentMapInPlugin={},componentGenerics={};function processTemplateModule(filterTemplateArrs,filterModule){eval(filterModule);var modules={},templateFiltersObj={};return filterTemplateArrs&&filterTemplateArrs.forEach((function(element){var filterName=element.filterName,func=element.func,module=element.module;modules[module]=eval(module),templateFiltersObj[filterName]=function(){var l;return(l=modules[module])[func].apply(l,arguments)}})),templateFiltersObj}var createTemplateComponent=function(l){var e=Object.create(null),n=Object.create(null),t=JSON.parse("[]"),i={};t.length&&(i=processTemplateModule(t,""));var a=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-error-page",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",5,2,"class",3,"c-error-page",2,"style",9,null,2,3,"background-color: ",7,null,12,6,1,3,"bgColor",6,1,3,"bgColor",3,"#fff",1,8,6,1,3,"_style",null,1,"template",4,38,10,183,6,1,3,"type",4,1,1,"view",2,2,"class",3,"c-error-page-img",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"c-error-page-tip c-fm",null,3,"网络不给力，请稍候重试",1,"view",5,2,"class",3,"c-error-page-btn c-fm c-gtlm swan-spider-tap",2,"hover-class",3,"c-error-page-btn-active",2,"data-mod",9,null,3,3,'{"module": "error-page", "index": "',7,null,4,1,null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onErrorPageReload",3,"",3,"bind",null,null,3,"重新加载\n            ",null,1,"template",3,38,10,183,6,1,3,"type",4,2,1,"view",2,2,"class",3,"img",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"text c-fm",null,9,null,1,7,null,12,6,1,3,"text",6,1,3,"text",3,"暂无结果",null,null,1,"template",4,38,10,183,6,1,3,"type",4,3,1,"view",2,2,"class",3,"c-error-page-img img3",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"text c-fm",null,3,"数据异常",1,"view",5,2,"class",3,"c-error-page-btn c-fm c-gtlm swan-spider-tap",2,"hover-class",3,"c-error-page-btn-active",2,"data-mod",9,null,3,3,'{"module": "error-page", "index": "',7,null,4,2,null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onErrorPageReload",3,"",3,"bind",null,null,3,"重新加载\n            ",null]},filters:_objectSpread({},i),_smartJs:smartJsMap,inited:function(){var l=this,e=function(e){for(var n in e)l.data.set(n,e[n])};e(this.data.get("data")),this.watch("data",e)},eventHappen:function(){var l;(l=this.owner).eventHappen.apply(l,arguments)}});return e["template-77f12031"]=a,Object.assign(n,l,e),e},filterCustomArr=[],sjsExportsMap={},smartJsMap={},modules={},filtersObj={};modulesExports.exports={componentUsingComponentMap:componentUsingComponentMap,componentUsingComponentMapInPlugin:componentUsingComponentMapInPlugin,componentGenerics:componentGenerics,getAPack:function(){return[1,"swan-private-root-tag",7,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"page-loading",1,2,"hideLoading",6,1,3,"rendered",1,"template-77f12031",3,2,"data",13,1,14,3,"type",6,1,3,"errType",2,"data-origin-name",3,"c-error-page",38,6,1,3,"showErrorPage",null,1,"service-container",5,2,"topBar-opacity",6,1,3,"opacity",2,"btn-list",6,1,3,"btnList",2,"uniform-style",6,1,3,"uniformStyle",35,"bindbtnTap",8,6,1,3,"eventHappen",5,3,"btnTap",6,1,3,"$event",3,"onBtnTap",3,"",3,"bind",null,1,"view",2,2,"slot",3,"content",1,"view",3,2,"class",3,"content",1,"view",4,2,"class",3,"page-content",1,"view",3,38,10,76,6,1,3,"seckillTab",6,2,3,"seckillTab",3,"length",1,"view",2,2,"class",3,"seckill-container",1,"view",2,2,"class",3,"seckill-wrap",1,"view",4,2,"class",3,"seckill-bg",2,"style",9,null,3,3,"background-image: url(",7,null,6,3,3,"seckillTab",6,1,3,"activeSeckillIndex",3,"bgImg",1,8,6,1,3,"_style",null,3,")",1,"view",2,2,"class",3,"seckill-tabs-wrap",1,"view",8,2,"class",9,null,3,3,"seckill-tab-item ",7,null,12,10,183,6,1,3,"index",6,1,3,"activeSeckillIndex",6,2,3,"tab",3,"activeClass",3,"",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"data-index",6,1,3,"index",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,5,3,'{\n                                        "module": "foodbrand_timelimit_tab",\n                                        "order": "',7,null,6,1,3,"index",null,3,'",\n                                        "tab": "',7,null,6,2,3,"tab",3,"title",null,3,'"\n                                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"seckillTabChange",3,"",3,"bind",null,37,"tab","index",null,6,1,3,"seckillTab",1,"view",3,2,"class",3,"title",38,11,33,6,2,3,"tab",3,"img",null,9,null,1,7,null,6,2,3,"tab",3,"title",null,1,1,"image",7,2,"class",7,null,12,6,2,3,"tab",3,"isBrandDay",3,"title-pinpai-img",3,"title-img",1,8,6,1,3,"_class",null,2,"src",12,10,183,6,1,3,"index",6,1,3,"activeSeckillIndex",6,2,3,"tab",3,"img",6,2,3,"tab",3,"notAtiveImg",2,"mode",3,"aspectFill",2,"lazy-load",3,"true",2,"image-menu-prevent",3,"true",2,"preview",3,"false",40,1,"view",2,2,"class",9,null,2,3,"sub-title c-lc1 ",7,null,12,10,76,6,2,3,"tab",3,"img",6,2,3,"tab",3,"isBrandDay",3,"sub-title-pinpai",3,"",1,8,6,1,3,"_class",null,null,9,null,1,7,null,6,2,3,"tab",3,"subTitle",null,1,"view",2,2,"class",3,"seckill-content",1,"swiper",4,2,"class",9,null,2,7,null,12,10,183,6,3,3,"seckillTabContent",6,1,3,"activeSeckillIndex",3,"length",4,3,3,"swiper-column",3,"swiper-horizontal",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"current",6,1,3,"activeSeckillIndex",35,"bindchange",8,6,1,3,"eventHappen",5,3,"change",6,1,3,"$event",3,"swiperChange",3,"",3,"bind",null,1,"swiper-item",3,2,"class",3,"swiper-content-item",37,"seckillContent","seckillIndex",null,6,1,3,"seckillTabContent",1,"view",3,2,"class",3,"seckill-content-flex",38,10,183,6,2,3,"seckillContent",3,"length",4,3,1,"view",6,2,"class",3,"seckill-item",2,"data-id",9,null,3,7,null,6,1,3,"seckillIndex",null,3,"-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,9,3,'{\n                                                    "module": "timelimitgoods",\n                                                    "order": "',7,null,6,1,3,"index",null,3,'",\n                                                    "skuid": "',7,null,6,2,3,"item",3,"id",null,3,'",\n                                                    "goods_title": "',7,null,6,2,3,"item",3,"title",null,3,'",\n                                                    "tab": "',7,null,6,3,3,"seckillTab",6,1,3,"seckillIndex",3,"title",null,3,'"\n                                                }',2,"data-ubc-type",3,"newHsh",37,"item","index",null,6,1,3,"seckillContent",1,"c-button-login",7,33,"need-new-log",9,null,null,2,"dataset",13,5,14,3,"jumpType",6,2,3,"item",3,"jumpType",14,3,"jumpUrl",6,2,3,"item",3,"jumpUrl",14,3,"status",6,2,3,"item",3,"btnStatus",14,3,"id",10,43,10,43,6,1,3,"activeSeckillIndex",3,"-",6,1,3,"index",14,3,"type",3,"seckillModule",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,9,3,'{\n                                                        "module": "timelimitgoods",\n                                                        "order": "',7,null,6,1,3,"index",null,3,'",\n                                                        "skuid": "',7,null,6,2,3,"item",3,"id",null,3,'",\n                                                        "goods_title": "',7,null,6,2,3,"item",3,"title",null,3,'",\n                                                        "tab": "',7,null,6,3,3,"seckillTab",6,1,3,"activeSeckillIndex",3,"title",null,3,'"\n                                                    }',2,"class",3,"swan-spider-tap",35,"bindloginhandle",8,6,1,3,"eventHappen",5,3,"loginhandle",6,1,3,"$event",3,"handleClickSku",3,"",3,"bind",null,1,"view",3,2,"class",3,"seckill-item-content",1,"view",5,2,"class",3,"seckill-img-wrap",1,"image",6,2,"src",6,2,3,"item",3,"img",2,"class",3,"seckill-img",2,"mode",3,"aspectFill",2,"lazy-load",3,"true",2,"image-menu-prevent",3,"true",2,"preview",3,"false",1,"view",1,2,"class",3,"img-mask",1,"view",4,2,"class",3,"seckill-bubble",2,"style",9,null,2,3,"background: ",7,null,6,2,3,"item",3,"bubbleColor",1,8,6,1,3,"_style",null,38,6,2,3,"item",3,"bubbleText",null,9,null,1,7,null,6,2,3,"item",3,"bubbleText",null,null,1,"view",4,2,"class",3,"img-decorate-wrap",38,6,2,3,"item",3,"coupon",1,"image",6,2,"src",3,"/homes/half-price-day/new.png",2,"class",3,"img-decorate",2,"mode",3,"aspectFill",2,"lazy-load",3,"true",2,"image-menu-prevent",3,"true",2,"preview",3,"false",1,"view",4,2,"class",3,"img-decorate-content",null,9,null,1,7,null,12,6,1,3,"isLogin",3,"限时省",3,"最高省",null,1,"text",2,2,"class",3,"img-decorate-price",null,9,null,1,7,null,6,2,3,"item",3,"discountPrice",null,null,3,"元",null,1,"view",3,2,"class",3,"seckill-info",1,"view",2,1,"view",2,2,"class",3,"seckill-title",1,"text",2,2,"class",3,"seckill-title-text",null,9,null,1,7,null,6,2,3,"item",3,"title",null,1,"progress",10,2,"class",3,"inner-progress",2,"percent",6,2,3,"item",3,"percent",2,"font-size",3,"11",2,"stroke-width",3,"4",2,"active-color",3,"rgba(255, 163, 102, .8)",2,"background-color",3,"rgba(255, 51, 0, .1)",2,"border-radius",3,"90",33,"show-info",9,null,null,33,"active",9,null,null,38,6,2,3,"item",3,"showPercent",1,1,"view",3,2,"class",3,"save-price",39,6,2,3,"item",3,"discount_pct",null,9,null,1,7,null,6,2,3,"item",3,"discount_pct",null,1,"view",3,2,"class",3,"price-wrap",1,"view",3,2,"class",3,"price-container",1,"view",4,2,"class",3,"price",1,"view",2,2,"class",3,"price-icon",null,3,"¥",1,"view",2,2,"class",3,"price-int",null,9,null,1,7,null,6,2,3,"item",3,"priceInt",null,1,"view",3,2,"class",3,"price-float",38,6,2,3,"item",3,"priceFloat",null,9,null,2,3,".",7,null,6,2,3,"item",3,"priceFloat",null,null,1,"view",3,2,"class",3,"price-origin",38,10,76,6,2,3,"item",3,"originPrice",6,2,3,"item",3,"showOrigin",null,9,null,2,3,"原价¥",7,null,6,2,3,"item",3,"originPrice",null,null,1,"view",2,2,"class",9,null,4,3,"price-btn\n                                                                    ",7,null,12,6,2,3,"item",3,"btnDisabled",3,"price-disabled-btn",3,"",1,8,6,1,3,"_class",null,3,"\n                                                                    ",7,null,12,6,2,3,"item",3,"showOrigin",3,"price-able-btn",3,"",1,8,6,1,3,"_class",null,null,9,null,2,7,null,6,2,3,"item",3,"btnText",null,3,"\n                                                                ",1,1,"view",6,2,"class",3,"seckill-horizontal-item",2,"data-id",9,null,3,7,null,6,1,3,"seckillIndex",null,3,"-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,9,3,'{\n                                                "module": "timelimitgoods",\n                                                "order": "',7,null,6,1,3,"index",null,3,'",\n                                                "skuid": "',7,null,6,2,3,"item",3,"id",null,3,'",\n                                                "goods_title": "',7,null,6,2,3,"item",3,"title",null,3,'",\n                                                "tab": "',7,null,6,3,3,"seckillTab",6,1,3,"activeSeckillIndex",3,"title",null,3,'"\n                                            }',40,37,"item","index",null,6,1,3,"seckillContent",1,"c-button-login",10,33,"need-new-log",9,null,null,33,"need-flex",9,null,null,2,"dataset",13,3,14,3,"jumpType",6,2,3,"item",3,"jumpType",14,3,"jumpUrl",6,2,3,"item",3,"jumpUrl",14,3,"status",6,2,3,"item",3,"btnStatus",2,"style",3,"width: 100%;",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,9,3,'{\n                                                    "module": "timelimitgoods",\n                                                    "order": "',7,null,6,1,3,"index",null,3,'",\n                                                    "skuid": "',7,null,6,2,3,"item",3,"id",null,3,'",\n                                                    "goods_title": "',7,null,6,2,3,"item",3,"title",null,3,'",\n                                                    "tab": "',7,null,6,3,3,"seckillTab",6,1,3,"activeSeckillIndex",3,"title",null,3,'"\n                                                }',2,"class",3,"swan-spider-tap",35,"bindloginhandle",8,6,1,3,"eventHappen",5,3,"loginhandle",6,1,3,"$event",3,"handleClickSku",3,"",3,"bind",null,1,"view",4,2,"class",3,"seckill-img-wrap",1,"image",6,2,"src",6,2,3,"item",3,"img",2,"class",3,"seckill-img",2,"mode",3,"aspectFill",2,"lazy-load",3,"true",2,"image-menu-prevent",3,"true",2,"preview",3,"false",1,"view",1,2,"class",3,"img-mask",1,"view",4,2,"class",3,"seckill-bubble",2,"style",9,null,2,3,"background: ",7,null,6,2,3,"item",3,"bubbleColor",1,8,6,1,3,"_style",null,38,6,2,3,"item",3,"bubbleText",null,9,null,1,7,null,6,2,3,"item",3,"bubbleText",null,null,1,"view",3,2,"class",3,"seckill-detail",1,"view",3,1,"view",2,2,"class",3,"seckill-title",1,"text",2,2,"class",3,"seckill-title-text",null,9,null,1,7,null,6,2,3,"item",3,"title",null,1,"view",4,2,"class",3,"c-lc1 seckill-sale",38,10,248,6,2,3,"item",3,"peopleOrderQuantity",6,2,3,"item",3,"monthOrderQuantity",1,"text",3,2,"class",3,"sku-buy-num",38,6,2,3,"item",3,"peopleOrderQuantity",null,9,null,2,7,null,6,2,3,"item",3,"peopleOrderQuantity",null,3,"人买过",null,1,"text",3,2,"class",3,"sku-sales",38,6,2,3,"item",3,"monthOrderQuantity",null,9,null,3,3,"本月售出",7,null,6,2,3,"item",3,"monthOrderQuantity",null,3,"份",null,null,1,"view",3,2,"class",3,"seckill-progress",38,10,76,6,2,3,"item",3,"showPercent",6,2,3,"item",3,"percent",1,"view",5,2,"class",3,"seckill-item-progress-active",2,"style",9,null,3,3,"width: ",7,null,6,2,3,"item",3,"percent",1,8,6,1,3,"_style",null,3,"%; transition: width 0.3s;",1,"view",1,2,"class",3,"seckill-item-progress-color",1,"view",2,2,"class",3,"seckill-item-progress-shading",1,"view",2,2,"class",3,"seckill-item-progress-lightning",2,"style",9,null,4,3,"right: ",7,null,12,10,183,6,2,3,"item",3,"percent",4,100,3,"3px",3,"-9px",1,8,6,1,3,"_style",null,3,"; left: ",7,null,12,10,183,6,2,3,"item",3,"percent",4,0,3,"3px",3,"",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"seckill-item-progress-percent",null,9,null,2,7,null,6,2,3,"item",3,"percent",null,3,"%",null,1,"view",3,2,"class",3,"price-wrap",1,"view",2,2,"class",3,"price-container",1,"view",6,2,"class",3,"price",1,"view",2,2,"class",3,"price-icon",null,3,"¥",1,"view",2,2,"class",3,"price-int",null,9,null,1,7,null,6,2,3,"item",3,"priceInt",null,1,"view",3,2,"class",3,"price-float",38,6,2,3,"item",3,"priceFloat",null,9,null,2,3,".",7,null,6,2,3,"item",3,"priceFloat",null,null,1,"view",2,2,"class",3,"price-desc",null,3,"到手价",1,"view",2,2,"class",3,"price-origin",null,9,null,2,3,"原价¥",7,null,6,2,3,"item",3,"originPrice",null,1,"view",2,2,"class",9,null,2,3,"price-btn ",7,null,12,6,2,3,"item",3,"btnDisabled",3,"price-disabled-btn",3,"",1,8,6,1,3,"_class",null,null,9,null,1,7,null,6,2,3,"item",3,"btnText",null,1,"view",2,2,"class",3,"subscribe-container",1,"view",3,2,"class",3,"subscribe-wrap",1,"view",2,2,"class",3,"subscribe-tips",null,3,"不想错过秒杀，您可开启秒杀提醒",1,"form",12,2,"id",3,"form",2,"report-submit",5,1,2,"report-type",3,"subscribe",33,"skip-subscribe-authorize",9,null,null,2,"template-id",6,1,3,"tempId",2,"subscribe-id",6,1,3,"subscribeId",2,"data-type",3,"sub",2,"data-ubc-type",3,"newHsh",2,"data-mod",3,'{"module": "sub"}',2,"class",3,"swan-spider-tap",35,"bindsubmit",8,6,1,3,"eventHappen",5,3,"submit",6,1,3,"$event",3,"formSubmit",3,"",3,"bind",null,1,"button",5,2,"class",3,"subscribe-button swan-spider-tap",2,"formType",3,"submit",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"selSwitch",3,"",3,"bind",null,38,11,33,6,1,3,"subscribe",1,"view",1,2,"class",3,"switch-off",1,1,"button",4,2,"class",3,"subscribe-button swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"cancelSubscribe",3,"",3,"catch",null,40,1,"view",1,2,"class",3,"switch-on",null,1,"view",4,2,"class",3,"banner-container",38,10,76,6,1,3,"banner",10,76,6,2,3,"banner",3,"info",6,3,3,"banner",3,"info",3,"length",1,"swiper",8,2,"class",3,"banner-swiper swan-spider-tap",2,"disable-touchmove",10,183,6,3,3,"banner",3,"info",3,"length",4,1,2,"interval",12,6,2,3,"banner",3,"rotationTime",10,42,6,2,3,"banner",3,"rotationTime",4,1e3,4,5e3,33,"autoplay",5,1,33,"circular",9,null,null,2,"current",6,1,3,"swiperCurrent",35,"bindchange",8,6,1,3,"eventHappen",5,3,"change",6,1,3,"$event",3,"swiperChangeCustom",3,"",3,"bind",null,1,"swiper-item",8,2,"data-jump-url",6,2,3,"item",3,"jumpUrl",2,"data-jump-type",6,2,3,"item",3,"jumpType",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,5,3,'{\n                            "module": "foodbrand_banner",\n                            "order": "',7,null,6,1,3,"index",null,3,'",\n                            "activity_url": "',7,null,6,2,3,"item",3,"jumpUrl",null,3,'"\n                        }',2,"class",3,"swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,37,"item","index",null,6,2,3,"banner",3,"info",1,"image",7,2,"src",6,2,3,"item",3,"img",2,"class",3,"banner-img",2,"mode",3,"aspectFill",2,"lazy-load",3,"true",2,"image-menu-prevent",3,"true",2,"preview",3,"false",2,"data-ubc-show",9,null,5,3,'{\n                                "module": "foodbrand_banner",\n                                "order": "',7,null,6,1,3,"index",null,3,'",\n                                "activity_url": "',7,null,6,2,3,"item",3,"jumpUrl",null,3,'"\n                            }',1,"view",3,2,"class",3,"banner-swiper-dots",38,10,62,6,3,3,"banner",3,"info",3,"length",4,1,1,"view",2,2,"class",9,null,2,3,"banner-swiper-dot ",7,null,12,10,122,6,1,3,"index",6,1,3,"swiperCurrent",3,"banner-swiper-dot-active",3,"",1,8,6,1,3,"_class",null,37,"item","index",null,6,2,3,"banner",3,"info",null,null,1,"view",4,2,"class",3,"waterfall-wrap",38,10,76,6,1,3,"waterfallList",6,2,3,"waterfallList",3,"length",1,"view",4,2,"class",9,null,2,3,"waterfall-tab ",7,null,12,6,1,3,"isFixed",3,"waterfall-tab-fixed",3,"",1,8,6,1,3,"_class",null,2,"style",9,null,3,3,"top: ",7,null,10,43,6,1,3,"statusBarHeight",6,1,3,"navigationBarHeight",1,8,6,1,3,"_style",null,3,"px;",1,"scroll-view",5,33,"scroll-x",9,null,null,34,"scroll-left",6,1,3,"cateScrollLeft",33,"scroll-with-animation",9,null,null,2,"class",3,"cate-scroll-wrap",1,"view",2,2,"class",9,null,4,3,"cate-wrap ",7,null,12,10,60,6,2,3,"waterfallList",3,"length",4,5,3,"cate-less-wrap",3,"",1,8,6,1,3,"_class",null,3," ",7,null,12,10,183,6,1,3,"currentCate",10,45,6,2,3,"waterfallList",3,"length",4,1,3,"cate-last-item-active",3,"",1,8,6,1,3,"_class",null,1,"view",9,2,"class",9,null,5,3,"cate-item\n                                    ",7,null,12,10,183,6,1,3,"currentCate",6,1,3,"index",3,"cate-item-active",3,"",1,8,6,1,3,"_class",null,3,"\n                                    ",7,null,12,10,183,6,1,3,"currentCate",10,45,6,2,3,"waterfallList",3,"length",4,1,3,"cate-last-item-active",3,"",1,8,6,1,3,"_class",null,3,"\n                                 swan-spider-tap",2,"id",9,null,2,3,"cate-item-",7,null,6,1,3,"index",null,2,"data-index",6,1,3,"index",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,5,3,'{\n                                    "module": "foodbrand_tab",\n                                    "order": "',7,null,6,1,3,"index",null,3,'",\n                                    "tab": "',7,null,6,2,3,"tab",3,"name",null,3,'"\n                                }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onClickCateTab",3,"",3,"bind",null,37,"tab","index",null,6,1,3,"waterfallList",1,"view",2,2,"class",3,"cate-item-name",null,9,null,1,7,null,6,2,3,"tab",3,"name",null,1,"image",3,2,"src",6,1,3,"cateSelect",2,"class",3,"cate-item-selected-img",38,10,183,6,1,3,"currentCate",6,1,3,"index",null,1,"view",3,2,"class",3,"brand-scroll-container",38,6,3,3,"waterfallList",6,1,3,"currentCate",3,"brandList",1,"scroll-view",5,33,"scroll-x",9,null,null,34,"scroll-left",6,1,3,"brandScrollLeft",33,"scroll-with-animation",9,null,null,2,"class",3,"brand-scroll-wrap",1,"view",2,2,"class",3,"brand-wrap",1,"view",4,2,"class",3,"brand-item",2,"id",6,2,3,"brand",3,"name",37,"brand","index",null,6,3,3,"waterfallList",6,1,3,"currentCate",3,"brandList",1,"view",2,2,"class",3,"brand-item-content",1,"view",7,2,"class",9,null,3,3,"brand-info-box\n                                                ",7,null,12,10,183,6,1,3,"currentBrand",6,1,3,"index",3,"brand-item-active",3,"",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"data-index",6,1,3,"index",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,5,3,'{\n                                                "module": "foodbrand__brand_tab",\n                                                "order": "',7,null,6,1,3,"index",null,3,'",\n                                                "tab": "',7,null,6,2,3,"brand",3,"name",null,3,'"\n                                            }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onClickBrandTab",3,"",3,"bind",null,1,"image",2,2,"class",9,null,2,3,"brand-item-logo ",7,null,12,6,2,3,"brand",3,"isHotList",3,"brand-hot-logo",3,"",1,8,6,1,3,"_class",null,2,"src",6,2,3,"brand",3,"logo",1,"view",2,2,"class",3,"brand-item-name",null,9,null,2,7,null,6,2,3,"brand",3,"name",null,3,"\n                                            ",null,1,"swiper",5,2,"style",9,null,3,3,"height: ",7,null,6,2,3,"heightMap",6,1,3,"currentCate",1,8,6,1,3,"_style",null,3,"; min-height: 100vh;",2,"current",6,1,3,"currentCate",2,"class",3,"swan-spider-tap",35,"bindchange",8,6,1,3,"eventHappen",5,3,"change",6,1,3,"$event",3,"swiperCateChange",3,"",3,"bind",null,1,"swiper-item",2,37,"cateContent","cateIndex",null,6,1,3,"waterfallList",1,"view",3,2,"class",9,null,2,3,"c-welfare-waterfall-list-",7,null,6,1,3,"cateIndex",1,8,6,1,3,"_class",null,1,"view",3,2,"class",3,"waterfall-list-content",38,10,76,6,4,3,"cateContent",3,"brandList",6,1,3,"currentBrand",3,"goodsList",6,5,3,"cateContent",3,"brandList",6,1,3,"currentBrand",3,"goodsList",3,"length",1,"view",5,2,"class",3,"sku-item",2,"data-id",9,null,5,7,null,6,1,3,"currentCate",null,3,"-",7,null,6,1,3,"currentBrand",null,3,"-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,9,3,'{\n                                        "module": "foodbrand_foodsort_brandsku",\n                                        "tab": "',7,null,6,2,3,"cateContent",3,"name",null,3,'",\n                                        "brand_tab": "',7,null,6,4,3,"cateContent",3,"brandList",6,1,3,"currentBrand",3,"name",null,3,'",\n                                        "order": "',7,null,6,1,3,"index",null,3,'",\n                                        "skuid": "',7,null,6,2,3,"item",3,"id",null,3,'"\n                                    }',37,"item","index",null,6,4,3,"cateContent",3,"brandList",6,1,3,"currentBrand",3,"goodsList",1,"c-button-login",10,2,"class",3,"sku-item-wrap swan-spider-tap",33,"need-new-log",9,null,null,2,"dataset",13,4,14,3,"jumpType",6,2,3,"item",3,"jumpType",14,3,"jumpUrl",6,2,3,"item",3,"jumpUrl",14,3,"id",10,43,10,43,10,43,10,43,6,1,3,"currentCate",3,"-",6,1,3,"currentBrand",3,"-",6,1,3,"index",14,3,"type",3,"waterfall",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,9,3,'{\n                                            "module": "foodbrand_foodsort_brandsku",\n                                            "tab": "',7,null,6,2,3,"cateContent",3,"name",null,3,'",\n                                            "brand_tab": "',7,null,6,4,3,"cateContent",3,"brandList",6,1,3,"currentBrand",3,"name",null,3,'",\n                                            "order": "',7,null,6,1,3,"index",null,3,'",\n                                            "skuid": "',7,null,6,2,3,"item",3,"id",null,3,'"\n                                        }',33,"need-flex",9,null,null,35,"bindloginhandle",8,6,1,3,"eventHappen",5,3,"loginhandle",6,1,3,"$event",3,"handleClickSku",3,"",3,"bind",null,1,"view",5,2,"class",3,"sku-img-wrap",1,"image",6,2,"src",6,2,3,"item",3,"img",2,"class",3,"sku-img",2,"mode",3,"aspectFill",2,"lazy-load",3,"true",2,"image-menu-prevent",3,"true",2,"preview",3,"false",1,"view",4,2,"class",3,"sku-order-img",2,"style",9,null,3,3,"background-image: url(",7,null,12,10,62,6,1,3,"index",4,2,6,2,3,"seriesBg",4,3,6,2,3,"seriesBg",6,1,3,"index",1,8,6,1,3,"_style",null,3,");",38,6,4,3,"cateContent",3,"brandList",6,1,3,"currentBrand",3,"isHotList",1,"text",2,2,"class",9,null,5,3,"sku-order-num\n                                                    c-baidunum\n                                                    ",7,null,12,10,62,6,1,3,"index",4,2,3,"",3,"sku-order-top",1,8,6,1,3,"_class",null,3,"\n                                                    ",7,null,12,11,33,6,1,3,"isIos",3,"sku-andr-order-num",3,"",1,8,6,1,3,"_class",null,3,"\n                                                ",null,9,null,1,7,null,10,43,6,1,3,"index",4,1,null,null,1,"view",1,2,"class",3,"img-mask",1,"view",4,2,"class",3,"img-decorate-wrap",38,6,2,3,"item",3,"coupon",1,"image",6,2,"src",3,"/homes/half-price-day/new.png",2,"class",3,"img-decorate",2,"mode",3,"aspectFill",2,"lazy-load",3,"true",2,"image-menu-prevent",3,"true",2,"preview",3,"false",1,"view",4,2,"class",3,"img-decorate-content",null,9,null,1,7,null,12,6,1,3,"isLogin",3,"限时省",3,"最高省",null,1,"text",2,2,"class",3,"img-decorate-price",null,9,null,1,7,null,6,2,3,"item",3,"discountPrice",null,null,3,"元",null,1,"view",3,2,"class",3,"sku-detail",1,"view",3,1,"view",2,2,"class",3,"sku-title",1,"text",2,2,"class",3,"sku-title-text",null,9,null,1,7,null,6,2,3,"item",3,"title",null,1,"view",3,2,"class",3,"sku-desc c-lc1",38,6,2,3,"item",3,"extraDesc",null,9,null,1,7,null,6,2,3,"item",3,"extraDesc",null,null,1,"view",3,2,"class",3,"c-lc1",1,"text",3,2,"class",3,"sku-buy-num",38,6,2,3,"item",3,"peopleOrderQuantity",null,9,null,2,7,null,6,2,3,"item",3,"peopleOrderQuantity",null,3,"人买过",null,1,"text",3,2,"class",3,"sku-sales",38,6,2,3,"item",3,"monthOrderQuantity",null,9,null,3,3,"本月售出",7,null,6,2,3,"item",3,"monthOrderQuantity",null,3,"份",null,1,"view",2,2,"class",3,"price-wrap",1,"view",3,2,"class",3,"price-container",1,"view",2,2,"class",3,"price-origin",null,9,null,2,3,"原价¥",7,null,6,2,3,"item",3,"originPrice",null,1,"view",5,2,"class",3,"price",1,"view",2,2,"class",3,"price-icon",null,3,"¥",1,"view",2,2,"class",3,"price-int",null,9,null,1,7,null,6,2,3,"item",3,"priceInt",null,1,"view",3,2,"class",3,"price-float",38,6,2,3,"item",3,"priceFloat",null,9,null,2,3,".",7,null,6,2,3,"item",3,"priceFloat",null,null,1,"view",2,2,"class",3,"price-desc",null,3,"到手价",1,"view",2,2,"class",3,"sku-btn",null,3,"去抢购",null,1,"c-loading",2,2,"status",12,10,248,6,4,3,"cateContent",3,"brandList",6,1,3,"currentBrand",3,"hasMore",10,183,6,4,3,"cateContent",3,"brandList",6,1,3,"currentBrand",3,"hasMore",6,1,3,"undefined",3,"loading",3,"complete",2,"noMoreText",3,"到底了 没有更多内容了",null,1,"view",3,2,"class",3,"lottieWwrap",38,6,1,3,"isShowPop",1,"view",3,2,"class",3,"videoWrap",1,"animation-video",8,2,"class",3,"video",2,"path",6,1,3,"videoPath",2,"loop",5,1,2,"resource-width",3,"2216",2,"resource-height",3,"2216",2,"canvas-style",6,1,3,"canvasStyle",2,"autoplay",5,1,2,"alpha-direction",3,"left",1,"view",2,2,"class",3,"videoText swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"clickBottom",3,"",3,"bind",null,null,1,"c-repurchase-popup",1,2,"isRepurchase",6,1,3,"isRepurchase"]},isComponent:!1,componentPath:"homes/half-price-day/index.swan",customComponentCss:[],createTemplateComponent:createTemplateComponent,filters:Object.assign({},filtersObj),initialFilters:filterCustomArr,pageModules:modules,extProperties:{_smartJs:smartJsMap}}}));