var _sjsSupporter={compiler:!1};function ownKeys(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(l),!0).forEach((function(n){_defineProperty(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):ownKeys(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function _defineProperty(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}window.define("homes/fresh-focus/index.swan",(function(require,modulesExports){var componentUsingComponentMap={"components/c-button-login/c-button-login.swan":["c-button-login"],"components/page-loading/page-loading.swan":["page-loading"],"components/loading/index.swan":["c-loading"],"components/coupon-repurchase/index.swan":["coupon-repurchase"],"components/c-repurchase-popup/index.swan":["c-repurchase-popup"],"node_modules/@baidu/smart-kit/dist/components/coupon/src/index.swan":["coupon"]},componentUsingComponentMapInPlugin={},componentGenerics={};function processTemplateModule(filterTemplateArrs,filterModule){eval(filterModule);var modules={},templateFiltersObj={};return filterTemplateArrs&&filterTemplateArrs.forEach((function(element){var filterName=element.filterName,func=element.func,module=element.module;modules[module]=eval(module),templateFiltersObj[filterName]=function(){var e;return(e=modules[module])[func].apply(e,arguments)}})),templateFiltersObj}var createTemplateComponent=function(e){var n=Object.create(null),l=Object.create(null),t=JSON.parse("[]"),a={};t.length&&(a=processTemplateModule(t,""));var o=san.defineComponent({components:l,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"card-loading",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",2,2,"class",3,"reload",1,"c-loading",1,2,"status",3,"loading"]},filters:_objectSpread({},a),_smartJs:smartJsMap,inited:function(){var e=this,n=function(n){for(var l in n)e.data.set(l,n[l])};n(this.data.get("data")),this.watch("data",n)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});n["template-4f970603"]=o;var u=JSON.parse("[]"),s={};u.length&&(s=processTemplateModule(u,""));var i=san.defineComponent({components:l,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"reload",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",4,2,"class",3,"reload swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleReload",3,"",3,"bind",null,null,3,"重新加载\n        ",1,"image",2,2,"class",3,"reload-img",2,"src",6,1,3,"reloadImg"]},filters:_objectSpread({},s),_smartJs:smartJsMap,inited:function(){var e=this,n=function(n){for(var l in n)e.data.set(l,n[l])};n(this.data.get("data")),this.watch("data",n)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});n["template-24bc8a66"]=i;var c=JSON.parse("[]"),p={};c.length&&(p=processTemplateModule(c,""));var r=san.defineComponent({components:l,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"sku-item",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"c-button-login",7,33,"needFlex",9,null,null,2,"dataset",13,3,14,3,"jumpType",6,1,3,"jumpType",14,3,"jumpUrl",6,1,3,"jumpUrl",14,3,"isNeedDrawCoupon",6,1,3,"isNeedDrawCoupon",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,9,3,'{\n            "module": "',7,null,6,1,3,"mod",null,3,'",\n            "rank": "',7,null,6,1,3,"index",null,3,'",\n            "user_type": "',7,null,6,1,3,"user_type",null,3,'",\n            "skuid": "',7,null,6,1,3,"skuid",null,3,'"\n        }',2,"class",3,"swan-spider-tap",35,"bindloginhandle",8,6,1,3,"eventHappen",5,3,"loginhandle",6,1,3,"$event",3,"handleClickSku",3,"",3,"bind",null,1,"view",3,2,"class",3,"sku-info",1,"image",2,2,"class",3,"sku-img",2,"src",6,1,3,"img",1,"view",3,2,"class",3,"sku-detail",1,"view",2,1,"view",2,2,"class",3,"sku-title-wrap c-lc2",1,"text",2,2,"class",3,"sku-title",null,9,null,1,7,null,6,1,3,"title",null,1,"view",3,2,"class",3,"sku-sales",38,6,1,3,"sold",null,9,null,3,3,"已售",7,null,6,1,3,"sold",null,3,"\n                    ",null,1,"view",5,2,"class",3,"sku-price",1,"text",2,2,"class",3,"sku-price-icon",null,3,"¥",1,"text",2,2,"class",3,"sku-price",null,9,null,1,7,null,6,1,3,"priceNum",null,1,"text",3,2,"class",3,"sku-price-begin",38,6,1,3,"showBegin",null,3,"起",null,1,"text",3,2,"class",3,"sku-origin",38,6,1,3,"originPrice",null,9,null,3,3,"¥",7,null,6,1,3,"originPrice",null,3,"\n                    ",null]},filters:_objectSpread({},p),_smartJs:smartJsMap,inited:function(){var e=this,n=function(n){for(var l in n)e.data.set(l,n[l])};n(this.data.get("data")),this.watch("data",n)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});n["template-b095236a"]=r;var d=JSON.parse("[]"),m={};d.length&&(m=processTemplateModule(d,""));var g=san.defineComponent({components:l,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"title",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",4,2,"class",3,"card-title",2,"style",9,null,2,3,"background: ",7,null,6,1,3,"background",1,8,6,1,3,"_style",null,1,"rich-text",2,2,"class",3,"card-rich-title",2,"nodes",6,1,3,"nodes",1,"view",8,2,"class",3,"card-title-right swan-spider-tap",2,"data-jump-type",6,1,3,"jumpType",2,"data-jump-url",6,1,3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,5,3,'{\n                "module": "',7,null,6,1,3,"module",null,3,'_more",\n                "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'"\n            }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,38,6,1,3,"rightText",1,"text",2,2,"class",3,"card-title-more",null,9,null,1,7,null,6,1,3,"rightText",null,null]},filters:_objectSpread({},m),_smartJs:smartJsMap,inited:function(){var e=this,n=function(n){for(var l in n)e.data.set(l,n[l])};n(this.data.get("data")),this.watch("data",n)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});n["template-d5d3db17"]=g;var w=JSON.parse("[]"),b={};w.length&&(b=processTemplateModule(w,""));var v=san.defineComponent({components:l,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-error-page",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",5,2,"class",3,"c-error-page",2,"style",9,null,2,3,"background-color: ",7,null,12,6,1,3,"bgColor",6,1,3,"bgColor",3,"#fff",1,8,6,1,3,"_style",null,1,"template",4,38,10,183,6,1,3,"type",4,1,1,"view",2,2,"class",3,"c-error-page-img",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"c-error-page-tip c-fm",null,3,"网络不给力，请稍候重试",1,"view",5,2,"class",3,"c-error-page-btn c-fm c-gtlm swan-spider-tap",2,"hover-class",3,"c-error-page-btn-active",2,"data-mod",9,null,3,3,'{"module": "error-page", "index": "',7,null,4,1,null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onErrorPageReload",3,"",3,"bind",null,null,3,"重新加载\n            ",null,1,"template",3,38,10,183,6,1,3,"type",4,2,1,"view",2,2,"class",3,"img",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"text c-fm",null,9,null,1,7,null,12,6,1,3,"text",6,1,3,"text",3,"暂无结果",null,null,1,"template",4,38,10,183,6,1,3,"type",4,3,1,"view",2,2,"class",3,"c-error-page-img img3",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"text c-fm",null,3,"数据异常",1,"view",5,2,"class",3,"c-error-page-btn c-fm c-gtlm swan-spider-tap",2,"hover-class",3,"c-error-page-btn-active",2,"data-mod",9,null,3,3,'{"module": "error-page", "index": "',7,null,4,2,null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onErrorPageReload",3,"",3,"bind",null,null,3,"重新加载\n            ",null]},filters:_objectSpread({},b),_smartJs:smartJsMap,inited:function(){var e=this,n=function(n){for(var l in n)e.data.set(l,n[l])};n(this.data.get("data")),this.watch("data",n)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});return n["template-77f12031"]=v,Object.assign(l,e,n),n},filterCustomArr=[],sjsExportsMap={},smartJsMap={},modules={},filtersObj={};modulesExports.exports={componentUsingComponentMap:componentUsingComponentMap,componentUsingComponentMapInPlugin:componentUsingComponentMapInPlugin,componentGenerics:componentGenerics,getAPack:function(){return[1,"swan-private-root-tag",7,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"page-loading",1,2,"hideLoading",6,1,3,"rendered",1,"template-77f12031",3,2,"data",13,1,14,3,"type",6,1,3,"errType",2,"data-origin-name",3,"c-error-page",38,6,1,3,"showErrorPage",null,1,"view",5,2,"class",3,"new-freshmen-welfare-container",1,"view",5,2,"class",3,"page-top",1,"image",2,2,"class",3,"page-top-bg",2,"src",6,1,3,"bannerImg",1,"view",3,2,"style",9,null,3,3,"padding-top: ",7,null,10,43,6,1,3,"navigationBarHeight",6,1,3,"statusBarHeight",1,8,6,1,3,"_style",null,3,"px",1,"view",4,2,"class",3,"page-top-row1",1,"view",8,2,"class",3,"rule btn swan-spider-tap",2,"data-jump-type",6,2,3,"ruleInfo",3,"jumpType",2,"data-jump-url",6,2,3,"ruleInfo",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,3,3,'{\n                        "module": "rule",\n                        "user_type":"',7,null,6,1,3,"dotUserTag",null,3,'"\n                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,38,6,1,3,"ruleInfo",null,9,null,2,7,null,6,2,3,"ruleInfo",3,"text",null,3,"\n                ",null,1,"image",2,2,"class",3,"title-img",2,"src",12,10,76,11,33,6,1,3,"isLocked",6,1,3,"repurchaseCoupons",6,1,3,"topImgRepurchase",6,1,3,"topImg",1,"view",8,2,"class",3,"coupon btn swan-spider-tap",2,"data-jump-type",6,2,3,"baoInfo",3,"jumpType",2,"data-jump-url",6,2,3,"baoInfo",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,3,3,'{\n                        "module": "coupons",\n                        "user_type":"',7,null,6,1,3,"dotUserTag",null,3,'"\n                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,38,6,1,3,"baoInfo",null,9,null,2,7,null,6,2,3,"baoInfo",3,"text",null,3,"\n                ",null,1,"view",2,2,"class",3,"page-top-row2",1,"view",8,2,"class",3,"order btn swan-spider-tap",2,"data-jump-type",6,2,3,"orderInfo",3,"jumpType",2,"data-jump-url",6,2,3,"orderInfo",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,3,3,'{\n                        "module": "order",\n                        "user_type":"',7,null,6,1,3,"dotUserTag",null,3,'"\n                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,38,6,1,3,"orderInfo",null,9,null,2,7,null,6,2,3,"orderInfo",3,"text",null,3,"\n                ",null,1,"view",3,2,"class",3,"top-container",1,"swiper",10,33,"autoplay",5,1,2,"current",3,"0",2,"current-item-id",3,"0",33,"circular",9,null,null,33,"vertical",9,null,null,2,"disable-touchmove",10,183,6,2,3,"tips",3,"length",4,1,2,"display-multiple-items",3,"1",2,"class",3,"tips-wrap",38,10,76,6,1,3,"tips",6,2,3,"tips",3,"length",1,"swiper-item",4,2,"class",3,"tips-item",37,"item","index",null,6,1,3,"tips",1,"view",3,2,"class",3,"tips-left",1,"image",2,2,"class",3,"tips-icon",2,"src",6,1,3,"voiceImg",1,"text",2,2,"class",3,"tips-title",null,9,null,2,7,null,6,2,3,"item",3,"title",null,3,"\n                        ",1,"view",7,2,"class",3,"tips-btn swan-spider-tap",2,"data-jump-type",6,2,3,"item",3,"jumpType",2,"data-jump-url",6,2,3,"item",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,3,3,'{\n                            "module": "voice",\n                            "index": "',7,null,6,1,3,"index",null,3,'"\n                        }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,null,9,null,2,7,null,6,2,3,"item",3,"button",null,3,"\n                    ",null,1,"view",2,2,"class",3,"coupon-wrap",1,"view",3,2,"class",3,"multi-coupons",38,10,76,10,183,6,1,3,"styleStatus",4,0,10,76,10,62,6,2,3,"coupons",3,"length",4,0,10,183,6,1,3,"repurchaseCoupons",6,1,3,"undefind",1,"c-button-login",7,2,"type",12,10,155,6,2,3,"item",3,"couponStatus",6,2,3,"freshmenCouponStatus",3,"SELL_OUT",3,"login",3,"button",2,"dataset",13,2,14,3,"coupon",6,2,3,"coupon",4,0,14,3,"coupons",6,1,3,"coupon",2,"class",3,"swan-spider-tap",35,"bindloginhandle",8,6,1,3,"eventHappen",5,3,"loginhandle",6,1,3,"$event",3,"onFreshmenCouponTap",3,"",3,"bind",null,37,"coupon",null,null,6,1,3,"coupons",1,"view",5,2,"class",3,"envelope-coupon-wrap",2,"style",9,null,3,3,"background-image: url(",7,null,6,3,3,"coupon",4,0,3,"img",1,8,6,1,3,"_style",null,3,")",38,10,183,6,2,3,"coupon",3,"length",4,2,1,"view",2,2,"class",3,"coupon-info-wrap",1,"view",5,2,"class",3,"coupon-price-wrap",37,"item","index",null,6,1,3,"coupon",1,"text",2,2,"class",3,"price-number-wrap",null,9,null,1,7,null,6,2,3,"item",3,"price",null,null,3,"元\n                                    ",1,"view",2,2,"class",3,"use-limit-wrap",null,9,null,1,7,null,6,2,3,"item",3,"couponText",null,1,"view",3,2,"class",9,null,2,3,"coupon-btn-wrap ",7,null,12,6,1,3,"hasScroll",3,"",3,"breath",1,8,6,1,3,"_class",null,38,10,248,10,183,6,3,3,"coupon",4,0,3,"couponStatus",6,2,3,"freshmenCouponStatus",3,"NOT_GET",10,183,6,3,3,"coupon",4,0,3,"couponStatus",6,2,3,"freshmenCouponStatus",3,"TO_BE_PAY",1,"text",2,2,"class",3,"coupon-btn-text-wrap",null,9,null,1,7,null,6,3,3,"coupon",4,0,3,"buttonText",null,1,1,"view",5,2,"class",3,"coupon-btn-wrap btn-disabled swan-spider-tap",2,"data-coupon",6,2,3,"coupon",4,0,35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onFreshmenCouponTap",3,"",3,"bind",null,39,10,183,6,3,3,"coupon",4,0,3,"couponStatus",6,2,3,"freshmenCouponStatus",3,"SELL_OUT",1,"text",2,2,"class",3,"coupon-btn-text-wrap",null,9,null,1,7,null,6,3,3,"coupon",4,0,3,"buttonText",null,null,1,"template",2,38,10,183,6,2,3,"coupon",3,"length",4,1,1,"view",4,2,"class",3,"envelope-coupon",2,"style",9,null,3,3,"background-image: url(",7,null,6,2,3,"item",3,"img",1,8,6,1,3,"_style",null,3,")",37,"item",null,null,6,1,3,"coupon",1,"view",4,2,"class",3,"coupon-info",1,"view",3,2,"class",3,"coupon-price",1,"text",2,2,"class",3,"price-number",null,9,null,1,7,null,6,2,3,"item",3,"price",null,null,3,"元\n                                    ",1,"view",2,2,"class",3,"use-limit",null,9,null,1,7,null,6,2,3,"item",3,"couponText",null,1,"view",3,2,"class",9,null,2,3,"coupon-btn ",7,null,12,6,1,3,"hasScroll",3,"",3,"breath",1,8,6,1,3,"_class",null,38,10,248,10,183,6,2,3,"item",3,"couponStatus",6,2,3,"freshmenCouponStatus",3,"NOT_GET",10,183,6,2,3,"item",3,"couponStatus",6,2,3,"freshmenCouponStatus",3,"TO_BE_PAY",1,"text",2,2,"class",3,"coupon-btn-text",null,9,null,1,7,null,6,2,3,"item",3,"buttonText",null,1,1,"view",5,2,"class",3,"coupon-btn btn-disabled swan-spider-tap",2,"data-coupon",6,1,3,"item",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onFreshmenCouponTap",3,"",3,"bind",null,39,10,183,6,2,3,"item",3,"couponStatus",6,2,3,"freshmenCouponStatus",3,"SELL_OUT",1,"text",2,2,"class",3,"coupon-btn-text",null,9,null,1,7,null,6,2,3,"item",3,"buttonText",null,null,4,1,"div",3,2,"class",3,"strong-coupon",39,10,76,10,183,6,1,3,"styleStatus",4,1,11,33,6,1,3,"isRcpHit",1,"view",3,2,"class",7,null,12,10,62,6,2,3,"coupons",3,"length",4,1,3,"strong-coupon-box",3,"",1,8,6,1,3,"_class",null,37,"item","index",null,6,1,3,"coupons",1,"coupon",15,2,"external-coupon-container-class",3,"external-coupon-container-class sku-style",2,"bg-img",12,10,121,6,2,3,"item",3,"couponStatus",4,2,6,1,3,"strongCouponImg",6,1,3,"strongCouponImgGray",2,"status",6,2,3,"item",3,"couponStatus",2,"title",6,2,3,"item",3,"couponText",2,"time-range",6,2,3,"item",3,"couponSubText",2,"status-name",6,2,3,"item",3,"buttonText",33,"is-button-show",9,null,null,2,"content-text-color",3,"#fff",2,"btn-bg",12,10,121,6,2,3,"item",3,"couponStatus",4,2,3,"#fff",3,"opacity:0",2,"btn-text-color",12,10,121,6,2,3,"item",3,"couponStatus",4,2,3,"#f33",3,"#fff",2,"countdown",10,76,6,2,3,"item",3,"countdown",10,62,6,2,3,"item",3,"countdown",4,0,2,"time-left",6,2,3,"item",3,"countdown",2,"data-coupon",6,1,3,"item",35,"bindbtnclick",8,6,1,3,"eventHappen",5,3,"btnclick",6,1,3,"$event",3,"onFreshmenCouponTap",3,"",3,"bind",null,1,"view",3,2,"class",9,null,2,3,"coupon-slot-price ",7,null,12,10,121,6,2,3,"item",3,"couponStatus",4,2,3,"",3,"is-coupon-used",1,8,6,1,3,"_class",null,1,"view",2,2,"class",3,"unit",null,3,"¥",1,"view",2,2,"class",3,"price",null,9,null,1,7,null,6,3,3,"coupons",6,1,3,"index",3,"price",null,1,"div",3,2,"class",3,"strong-coupon",39,10,76,10,183,6,1,3,"styleStatus",4,1,10,76,10,183,6,2,3,"coupons",3,"length",4,1,10,76,6,1,3,"isRcpHit",6,1,3,"isLocked",1,"view",3,2,"class",7,null,12,10,183,6,2,3,"coupons",3,"length",4,1,3,"strong-coupon-box",3,"",1,8,6,1,3,"_class",null,37,"item","index",null,6,1,3,"coupons",1,"coupon",15,2,"external-coupon-container-class",3,"external-coupon-container-class sku-style",2,"bg-img",6,1,3,"strongCouponImg",2,"status",6,2,3,"item",3,"couponStatus",2,"title",6,2,3,"item",3,"couponText",2,"time-range",6,2,3,"item",3,"couponSubText",2,"status-name",6,2,3,"item",3,"buttonText",33,"is-button-show",9,null,null,2,"content-text-color",3,"#fff",2,"btn-bg",12,10,121,6,2,3,"item",3,"couponStatus",4,2,3,"#fff",3,"opacity:0",2,"btn-text-color",12,10,121,6,2,3,"item",3,"couponStatus",4,2,3,"#f33",3,"#fff",2,"countdown",10,76,6,2,3,"item",3,"countdown",10,62,6,2,3,"item",3,"countdown",4,0,2,"time-left",6,2,3,"item",3,"countdown",2,"data-coupon",6,1,3,"item",35,"bindbtnclick",8,6,1,3,"eventHappen",5,3,"btnclick",6,1,3,"$event",3,"onFreshmenCouponTap",3,"",3,"bind",null,1,"view",3,2,"class",9,null,2,3,"coupon-slot-price ",7,null,12,10,121,6,2,3,"item",3,"couponStatus",4,2,3,"",3,"is-coupon-used",1,8,6,1,3,"_class",null,1,"view",2,2,"class",3,"unit",null,3,"¥",1,"view",2,2,"class",3,"price",null,9,null,1,7,null,6,3,3,"coupons",6,1,3,"index",3,"price",null,1,"view",3,2,"class",3,"strong-coupon-double",39,10,76,10,183,6,1,3,"styleStatus",4,1,10,76,10,62,6,2,3,"coupons",3,"length",4,1,10,76,6,1,3,"isRcpHit",6,1,3,"isLocked",1,"view",3,2,"class",3,"coupon-double-box",37,"item","index",null,6,1,3,"coupons",1,"coupon-repurchase",13,2,"bg-img",6,1,3,"couponShort",2,"title",6,2,3,"item",3,"couponText",2,"status",6,2,3,"item",3,"couponStatus",2,"descriptive-text",6,2,3,"item",3,"couponSubText",2,"countdown",10,76,6,2,3,"item",3,"countdown",10,62,6,2,3,"item",3,"countdown",4,0,2,"time-left",6,2,3,"item",3,"countdown",2,"price",6,2,3,"item",3,"price",2,"button-text",6,2,3,"item",3,"buttonText",2,"content-text-color",3,"#fff",2,"data-coupon",6,1,3,"item",2,"data-coupon-index",6,1,3,"index",2,"data-coupon-id",6,2,3,"item",3,"couponName",35,"bindbtnclick",8,6,1,3,"eventHappen",5,3,"btnclick",6,1,3,"$event",3,"onFreshmenCouponTap",3,"",3,"bind",null,1,"view",4,2,"class",3,"repurchase",39,10,76,6,1,3,"repurchaseCoupons",10,76,11,33,6,1,3,"isLocked",6,1,3,"isRcpHit",1,"view",2,2,"class",3,"repurchase-box",1,"view",4,2,"class",3,"repurchase-border",37,"item","index",null,6,1,3,"repurchaseCoupons",1,"view",3,2,"class",3,"repurchase-title",1,"view",6,2,"class",3,"title-text swan-spider-tap",2,"data-jump-type",3,"local",2,"data-jump-url",6,2,3,"item",3,"jumpUrl",2,"data-mod",9,null,9,3,'{\n                                        "module": "fujiafuli_new_task",\n                                        "new_task_name": "',7,null,6,2,3,"item",3,"jumpText",null,3,'",\n                                        "new_task_status": "',7,null,6,2,3,"item",3,"couponStatus",null,3,'",\n                                        "industry": "',7,null,6,2,3,"item",3,"couponType",null,3,'",\n                                        "order": "',7,null,10,43,6,1,3,"index",4,1,null,3,'",\n                                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,null,9,null,2,7,null,6,2,3,"item",3,"jumpText",null,3,"\n                                ",1,"image",3,2,"class",3,"arrowImg",2,"src",6,1,3,"arrowBlack",38,10,183,6,2,3,"item",3,"couponStatus",4,1,null,1,"view",3,2,"class",9,null,2,7,null,12,10,183,6,2,3,"repurchaseCoupons",3,"length",4,2,3,"repurchase-coupon",3,"repurchase-coupon-long",1,8,6,1,3,"_class",null,3," ",1,"coupon-repurchase",14,2,"bg-img",6,1,3,"couponShort",2,"title",6,2,3,"item",3,"couponText",2,"status",6,2,3,"item",3,"couponStatus",2,"descriptive-text",6,2,3,"item",3,"couponSubText",2,"countdown",10,76,6,2,3,"item",3,"countdown",10,62,6,2,3,"item",3,"countdown",4,0,2,"time-left",6,2,3,"item",3,"countdown",2,"price",6,2,3,"item",3,"price",2,"button-text",6,2,3,"item",3,"buttonText",2,"content-text-color",3,"#fff",2,"data-coupon",6,1,3,"item",2,"data-coupon-id",6,2,3,"item",3,"couponName",2,"data-index",6,1,3,"index",35,"bindbtnclick",8,6,1,3,"eventHappen",5,3,"btnclick",6,1,3,"$event",3,"onRepurchaseCouponTap",3,"",3,"bind",null,38,10,183,6,2,3,"repurchaseCoupons",3,"length",4,2,null,1,"coupon",17,2,"external-coupon-container-class",3,"external-coupon-container-class sku-style",2,"bg-img",6,1,3,"strongCouponImg",2,"status",6,2,3,"item",3,"couponStatus",2,"title",6,2,3,"item",3,"couponText",2,"time-range",6,2,3,"item",3,"couponSubText",2,"status-name",6,2,3,"item",3,"buttonText",33,"is-button-show",9,null,null,2,"content-text-color",3,"#fff",2,"btn-bg",3,"opacity:0",2,"btn-text-color",3,"#fff",2,"countdown",10,76,6,2,3,"item",3,"countdown",10,62,6,2,3,"item",3,"countdown",4,0,2,"time-left",6,2,3,"item",3,"countdown",2,"data-coupon",6,1,3,"item",2,"data-index",6,1,3,"index",35,"bindbtnclick",8,6,1,3,"eventHappen",5,3,"btnclick",6,1,3,"$event",3,"onRepurchaseCouponTap",3,"",3,"bind",null,38,10,183,6,2,3,"repurchaseCoupons",3,"length",4,1,1,"view",3,2,"class",3,"coupon-slot-price",1,"view",2,2,"class",3,"unit",null,3,"¥",1,"view",2,2,"class",3,"price",null,9,null,1,7,null,6,2,3,"item",3,"price",null,null,1,"view",8,2,"class",3,"repurchase-tip swan-spider-tap",2,"data-jump-type",6,1,3,"repurchaseTipType",2,"data-jump-url",6,1,3,"repurchaseTipUrl",2,"data-mod",3,'{\n                            "module": "fujiafuli_shoudanquan_bar"\n                        }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,38,6,1,3,"repurchaseTip",1,"view",4,2,"class",3,"tip-text",null,3,"你购买的",1,"text",2,2,"class",3,"tip-text-red",null,9,null,1,7,null,6,1,3,"repurchaseTip",null,null,3,"还未使用，点击去查看\n                        ",1,"image",2,2,"class",3,"arrowImgRed",2,"src",6,1,3,"arrowRed",null,1,"view",5,2,"class",3,"repurchase-wrap",38,10,76,6,1,3,"repurchaseCoupons",10,76,6,1,3,"isLocked",6,1,3,"isRcpHit",1,"view",2,2,"class",3,"repurchase-box",1,"view",4,2,"class",3,"repurchase-border",37,"item","index",null,6,1,3,"repurchaseCoupons",1,"view",3,2,"class",3,"repurchase-title",1,"view",2,2,"class",3,"title-text",null,9,null,2,7,null,6,2,3,"item",3,"jumpText",null,3," ",1,"image",2,2,"class",3,"arrowImg",2,"src",6,1,3,"arrowBlack",1,"view",3,2,"class",3,"repurchase-coupon-short",38,10,62,6,2,3,"repurchaseCoupons",3,"length",4,1,1,"coupon-repurchase",10,2,"bg-img",6,1,3,"couponShort",2,"title",6,2,3,"item",3,"couponText",2,"status",6,2,3,"item",3,"couponStatus",2,"descriptive-text",6,2,3,"item",3,"couponSubText",2,"countdown",10,76,6,2,3,"item",3,"countdown",10,62,6,2,3,"item",3,"countdown",4,0,2,"time-left",6,2,3,"item",3,"countdown",2,"price",6,2,3,"item",3,"price",2,"button-text",6,2,3,"item",3,"buttonText",2,"content-text-color",3,"#fff",2,"data-coupon",6,1,3,"item",1,1,"view",3,2,"class",3,"repurchase-coupon-long",39,10,183,6,2,3,"repurchaseCoupons",3,"length",4,1,1,"coupon",14,2,"external-coupon-container-class",3,"external-coupon-container-class sku-style",2,"bg-img",6,1,3,"strongCouponImg",2,"status",6,2,3,"item",3,"couponStatus",2,"title",6,2,3,"item",3,"couponText",2,"time-range",6,2,3,"item",3,"couponSubText",2,"status-name",6,2,3,"item",3,"buttonText",33,"is-button-show",9,null,null,2,"content-text-color",3,"#fff",2,"btn-bg",3,"opacity:0",2,"btn-text-color",3,"#fff",2,"countdown",10,76,6,2,3,"item",3,"countdown",10,62,6,2,3,"item",3,"countdown",4,0,2,"time-left",6,2,3,"item",3,"countdown",2,"data-coupon",6,1,3,"item",1,"view",3,2,"class",3,"coupon-slot-price",1,"view",2,2,"class",3,"unit",null,3,"¥",1,"view",2,2,"class",3,"price",null,9,null,1,7,null,6,2,3,"item",3,"price",null,1,"view",1,2,"class",3,"triangle",1,"view",3,2,"class",3,"repurchase-lock",1,"image",2,2,"class",3,"lock-img",2,"src",6,1,3,"lockImg",1,"view",4,2,"class",3,"lock-text",null,3,"使用上面新人福利券后，可再领红包\n                    ",1,"image",2,2,"class",3,"redpacket-icon",2,"src",6,1,3,"redPacketIcon",1,"text",2,2,"class",3,"lock-price",null,9,null,2,7,null,6,1,3,"wfAmount",null,3,"元",null,1,"view",4,2,"class",3,"new-freshmen-welfare-content",1,"view",4,2,"class",3,"module-title",1,"image",2,2,"class",3,"title-shadow",2,"src",6,1,3,"titleLeftShadowImg",1,"text",2,2,"class",3,"title-text",null,3,"以下是每天都有的优惠",1,"image",2,2,"class",3,"title-shadow",2,"src",6,1,3,"titleRightShadowImg",1,"scroll-view",4,33,"scroll-y",9,null,null,2,"class",3,"scroll-container swan-spider-tap",35,"bindscroll",8,6,1,3,"eventHappen",5,3,"scroll",6,1,3,"$event",3,"handleScroll",3,"",3,"bind",null,1,"view",2,2,"class",3,"new-freshmen-welfare-list",1,"view",8,2,"class",9,null,2,3,"card ",7,null,12,10,183,6,2,3,"card",3,"id",3,"food",3,"food-bottom",3,"",1,8,6,1,3,"_class",null,2,"data-id",6,2,3,"card",3,"id",2,"data-ubc-show",9,null,5,3,'{\n                        "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                        "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'"\n                    }',2,"id",6,2,3,"card",3,"id",37,"card","index",null,6,1,3,"cardList",1,"view",3,38,10,183,6,2,3,"card",3,"id",3,"food",1,"template-d5d3db17",8,2,"nodes",6,2,3,"card",3,"title",2,"right-text",6,3,3,"card",3,"more",3,"text",2,"background",6,2,3,"card",3,"background",2,"jump-type",6,2,3,"card",3,"jumpType",2,"jump-url",6,2,3,"card",3,"jumpUrl",2,"module",6,2,3,"card",3,"module",2,"dot-user-tag",6,1,3,"dotUserTag",2,"data-origin-name",3,"title",1,"view",4,2,"class",3,"card-content",1,"template-4f970603",2,2,"data-origin-name",3,"card-loading",38,6,2,3,"card",3,"loading",null,1,"template-24bc8a66",3,2,"reloadImg",6,2,3,"card",3,"reloadImg",2,"data-origin-name",3,"reload",38,6,2,3,"card",3,"loadError",null,1,"view",2,2,"class",3,"sku-list",1,"view",6,2,"class",3,"sku-item",2,"data-id",9,null,2,3,"food-",7,null,6,1,3,"index",null,2,"id",9,null,2,3,"food-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,9,3,'{\n                                        "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                                        "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'",\n                                        "skuid": "',7,null,6,2,3,"item",3,"id",null,3,'",\n                                        "rank": "',7,null,6,1,3,"index",null,3,'"\n                                    }',37,"item","index",null,6,2,3,"card",3,"data",1,"template-b095236a",2,2,"data",13,7,15,6,1,3,"item",14,3,"mod",6,2,3,"card",3,"module",14,3,"user_type",6,1,3,"dotUserTag",14,3,"skuid",6,2,3,"item",3,"id",14,3,"index",6,1,3,"index",14,3,"isNeedDrawCoupon",6,1,3,"isNeedDrawCoupon",14,3,"showBegin",11,33,6,1,3,"isLogin",2,"data-origin-name",3,"sku-item",null,1,"view",3,38,10,183,6,2,3,"card",3,"id",3,"coupon",1,"template-d5d3db17",8,2,"nodes",6,2,3,"card",3,"title",2,"right-text",6,3,3,"card",3,"more",3,"text",2,"background",6,2,3,"card",3,"background",2,"jump-type",6,2,3,"card",3,"jumpType",2,"jump-url",6,2,3,"card",3,"jumpUrl",2,"module",6,2,3,"card",3,"module",2,"dot-user-tag",6,1,3,"dotUserTag",2,"data-origin-name",3,"title",1,"view",4,2,"class",3,"card-content",1,"template-4f970603",2,2,"data-origin-name",3,"card-loading",38,6,2,3,"card",3,"loading",null,1,"template-24bc8a66",3,2,"reloadImg",6,2,3,"card",3,"reloadImg",2,"data-origin-name",3,"reload",38,6,2,3,"card",3,"loadError",null,1,"view",6,2,"class",3,"takeout-coupon",2,"data-id",9,null,2,3,"coupon-",7,null,6,1,3,"index",null,2,"id",9,null,2,3,"coupon-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,9,3,'{\n                                    "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'",\n                                    "coupon_id": "',7,null,6,2,3,"item",3,"couponName",null,3,'",\n                                    "rank": "',7,null,6,1,3,"index",null,3,'"\n                                }',37,"item","index",null,6,2,3,"card",3,"data",1,"c-button-login",4,2,"type",3,"login",2,"class",3,"swan-spider-tap",35,"bindloginhandle",8,6,1,3,"eventHappen",5,3,"loginhandle",6,1,3,"$event",3,"onCouponTap",3,"",3,"bind",null,1,"coupon",19,2,"bg-img",6,2,3,"item",3,"bgImg",2,"title",6,2,3,"item",3,"title",2,"time-range",6,2,3,"item",3,"description",2,"status-img-url",6,2,3,"item",3,"statusImgUrl",33,"need-login",9,null,null,2,"status",6,2,3,"item",3,"status",2,"index",6,2,3,"item",3,"index",2,"status-name",6,2,3,"item",3,"statusName",33,"is-toast",9,null,null,2,"content-text-color",6,2,3,"item",3,"contentTextColor",33,"is-button-show",9,null,null,2,"btn-bg",6,2,3,"item",3,"btnBg",2,"btn-text-color",6,2,3,"item",3,"btnTextColor",2,"btn-border-color",6,2,3,"item",3,"btnBorderColor",2,"data-coupon-index",6,1,3,"index",2,"data-coupon-id",6,2,3,"item",3,"couponName",2,"data-module",6,2,3,"card",3,"module",35,"bindbtnclick",8,6,1,3,"eventHappen",5,3,"btnclick",6,1,3,"$event",3,"onCouponTap",3,"",3,"bind",null,1,"view",3,2,"class",3,"coupon-slot-price",1,"view",2,2,"class",3,"unit",null,3,"¥",1,"view",2,2,"class",3,"price",null,9,null,1,7,null,6,2,3,"item",3,"price",null,null,1,"view",3,38,10,183,6,2,3,"card",3,"id",3,"recharges",1,"template-d5d3db17",4,2,"nodes",6,2,3,"card",3,"title",2,"right-text",6,3,3,"card",3,"more",3,"text",2,"background",6,2,3,"card",3,"background",2,"data-origin-name",3,"title",1,"view",2,2,"class",3,"card-content",1,"view",8,2,"class",3,"recharges",2,"data-id",9,null,2,3,"recharge-",7,null,6,1,3,"index",null,2,"id",9,null,2,3,"recharge-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,5,3,'{\n                                    "module": "',7,null,6,2,3,"item",3,"module",null,3,'",\n                                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'"\n                                }',37,"item","index",null,6,2,3,"card",3,"data",1,"image",2,2,"class",3,"recharges-img",2,"src",6,2,3,"item",3,"bannerImg",1,"view",3,2,"class",3,"recharges-info",1,"view",2,2,"class",3,"recharges-title",null,9,null,1,7,null,6,2,3,"item",3,"title",null,1,"view",2,2,"class",3,"recharges-desc",null,9,null,1,7,null,6,2,3,"item",3,"notice",null,1,"view",7,2,"class",3,"recharges-btn swan-spider-tap",2,"data-jump-type",6,2,3,"item",3,"jumpType",2,"data-jump-url",6,2,3,"item",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,5,3,'{\n                                        "module": "',7,null,6,2,3,"item",3,"module",null,3,'",\n                                        "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'"\n                                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,1,"text",1,null,3,"立即充值",null,1,"view",1,2,"class",3,"content-bg",1,"view",4,2,"class",3,"mask swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"closePanel",3,"",3,"bind",null,38,6,1,3,"showMask",1,"view",4,2,"class",9,null,2,3,"panel ",7,null,12,6,1,3,"showPanel",3,"show-panel",3,"close-panel",1,8,6,1,3,"_class",null,1,"view",2,2,"class",3,"panel-title",1,"text",2,2,"class",3,"title-text",null,3,"请选择",1,"view",7,2,"class",3,"single-item swan-spider-tap",2,"data-jump-type",6,2,3,"item",3,"jumpType",2,"data-jump-url",6,2,3,"item",3,"jumpUrl",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,37,"item",null,null,6,1,3,"jumpItems",1,"image",2,2,"class",3,"item-icon",2,"src",6,2,3,"item",3,"icon",1,"text",2,2,"class",3,"item-name",null,9,null,1,7,null,6,2,3,"item",3,"name",null,1,"view",2,2,"class",3,"cancel-btn",1,"text",2,2,"class",3,"btn-text",null,3,"取消",null,1,"view",3,2,"class",3,"lottieWwrap",38,6,1,3,"isShowPop",1,"view",3,2,"class",3,"videoWrap",1,"animation-video",8,2,"class",3,"video",2,"path",6,1,3,"videoPath",2,"loop",5,1,2,"resource-width",3,"2216",2,"resource-height",3,"2216",2,"canvas-style",6,1,3,"canvasStyle",2,"autoplay",5,1,2,"alpha-direction",3,"left",1,"view",2,2,"class",3,"videoText swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"clickBottom",3,"",3,"bind",null,null,1,"c-repurchase-popup",1,2,"isRepurchase",6,1,3,"isRepurchase"]},isComponent:!1,componentPath:"homes/fresh-focus/index.swan",customComponentCss:[],createTemplateComponent:createTemplateComponent,filters:Object.assign({},filtersObj),initialFilters:filterCustomArr,pageModules:modules,extProperties:{_smartJs:smartJsMap}}}));