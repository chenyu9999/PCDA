var _sjsSupporter={compiler:!1};window.define("pages/hospital/ask/index.swan",(function(n,o){o.exports={componentUsingComponentMap:{"mars_modules/@baidu/med-ui/dist/swan/components/Icon/Icon.swan":["c-icon"],"components/common/topbar.swan":["top-bar"],"components/common/container.swan":["med-container"],"components/common/hospitalInfo.swan":["ask-hospital-info"],"mars_modules/@baidu/med-ui/dist/swan/components/Dialog/Dialog.swan":["c-dialog"],"components/common/image.swan":["c-image"],"components/Hospital/Home/ask-textarea.swan":["ask-textarea"],"components/common/login-btn.swan":["login-btn"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},getAPack:function(){return[1,"swan-private-root-tag",4,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"med-container",17,2,"ref",3,"container",2,"bg-color",3,"#f4f4f4",2,"feedback-is-show",5,1,2,"complaint-text",3,"反馈",2,"feedback-text",3,"",2,"no-jump",5,1,33,"hide-header",9,null,null,2,"datanojumpeventproxy",3,"handleNoJump",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",0",2,"rootUID",6,1,3,"rootUID",2,"class",3,"swan-spider-tap",35,"bindnoJump",8,6,1,3,"eventHappen",5,3,"noJump",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"top-bar",6,2,"bar-class",6,1,3,"barColor",2,"text-color",3,"#333",2,"blank",5,1,2,"title",3,"问大家",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",1",2,"rootUID",6,1,3,"rootUID",1,"view",2,2,"class",3,"custom-header-topbar-bg",2,"style",9,null,4,3,"height:",7,null,10,43,6,1,3,"topbarHeight",3,"px",1,8,6,1,3,"_style",null,3,";background:",7,null,6,1,3,"barColor",1,8,6,1,3,"_style",null,1,"view",2,1,"view",4,2,"class",3,"ack-content",1,"view",3,2,"class",3,"ask",38,10,248,6,2,3,"hospitalMsg",3,"name",6,2,3,"hospitalMsg",3,"logo",1,"ask-hospital-info",3,2,"hospital-msg",6,1,3,"hospitalMsg",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",2",2,"rootUID",6,1,3,"rootUID",null,1,"view",2,38,10,76,6,1,3,"askList",6,2,3,"askList",3,"length",1,"view",9,2,"key",6,1,3,"index",2,"class",3,"info swan-spider-tap",2,"datatapargumentsproxy",16,1,17,6,2,3,"list",3,"moreLink",2,"datatapeventproxy",3,"navigateTo",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,37,"list","index",null,6,1,3,"askList",1,"view",4,2,"class",3,"info-title",38,6,2,3,"list",3,"askQuestion",1,"view",2,2,"class",3,"info-title-icon ask-style",null,3,"问",1,"view",2,2,"class",3,"c-gap-left-middle c-color-title c-font-medium",null,9,null,1,7,null,6,2,3,"list",3,"askQuestion",null,null,1,"view",4,2,"class",3,"info-flex info-title-space",38,10,76,6,2,3,"list",3,"questioner",10,76,6,2,3,"list",3,"answerQuestion",6,3,3,"list",3,"answerQuestion",3,"length",1,"view",2,2,"class",3,"info-title-icon answer-style",null,3,"答",1,"view",4,2,"class",3,"c-gap-left-middle c-line-clamp4",38,10,76,6,2,3,"list",3,"answerQuestion",6,3,3,"list",3,"answerQuestion",3,"length",1,"text",2,2,"class",3,"c-color-gray c-font-medium",null,9,null,2,7,null,6,2,3,"list",3,"questioner",null,3,":",1,"text",2,2,"class",3,"c-gap-left-middle",1,"text",4,2,"key",6,1,3,"index",2,"class",3,"c-color-title c-font-medium",37,"item","index",null,6,2,3,"list",3,"answerQuestion",null,9,null,1,7,null,6,1,3,"item",null,null,null,1,"view",3,2,"class",3,"info-answer-count c-color-green c-font-normal",null,9,null,3,3,"全部",7,null,10,248,6,2,3,"list",3,"count",4,0,null,3,"条回答",1,"c-icon",3,2,"name",3,"youjiantou",2,"compId",10,43,10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",3-",6,1,3,"index",2,"rootUID",6,1,3,"rootUID",null,1,"view",3,2,"class",9,null,2,3,"exp-loading ",7,null,12,10,76,6,1,3,"askList",6,2,3,"askList",3,"length",3,"",3,"exp-loading-padding",1,8,6,1,3,"_class",null,1,"c-image",12,33,"has-compress",9,null,null,2,"src",6,1,3,"loading",2,"width",10,43,6,1,3,"widthImage",3,"px",2,"height",10,43,6,1,3,"heightImage",3,"px",2,"hack-white-stroke",5,null,2,"is-round",5,null,2,"extra",13,1,14,3,"column",4,3,2,"mode",3,"widthFix",2,"display",3,"inline-block",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",4",2,"rootUID",6,1,3,"rootUID",38,10,76,6,1,3,"nextInfo",11,33,6,2,3,"nextInfo",3,"isLast",null,1,"view",3,2,"class",3,"logo c-filter-gray",38,10,76,6,1,3,"nextInfo",6,2,3,"nextInfo",3,"isLast",1,"c-image",11,33,"has-compress",9,null,null,2,"src",6,1,3,"bottomImg",2,"width",3,"93px",2,"height",3,"23px",2,"hack-white-stroke",5,null,2,"is-round",5,null,2,"extra",13,1,14,3,"column",4,3,2,"mode",3,"widthFix",2,"display",3,"inline-block",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",5",2,"rootUID",6,1,3,"rootUID",null,1,"view",3,2,"class",9,null,2,3,"ask-questions-box ",7,null,6,1,3,"securityClass",1,8,6,1,3,"_class",null,2,"style",9,null,2,3,"bottom:",7,null,10,43,6,1,3,"scrollHeightBottom",3,"px",1,8,6,1,3,"_style",null,1,"view",3,2,"class",3,"ask-questions",1,"view",2,2,"class",3,"ask-questions-warp",1,"ask-textarea",13,2,"ref",3,"textarea",2,"value",6,1,3,"textareaValue",2,"auto-focus",6,1,3,"focus",2,"placeholder",3,"请描述你的问题",2,"dataoninputeventproxy",3,"onInput",2,"datafocuseventproxy",3,"onFocus",2,"datablureventproxy",3,"onBlur",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",6",2,"rootUID",6,1,3,"rootUID",2,"class",3,"swan-spider-tap",35,"bindonInput",8,6,1,3,"eventHappen",5,3,"onInput",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,35,"bindfocus",8,6,1,3,"eventHappen",5,3,"focus",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,35,"bindblur",8,6,1,3,"eventHappen",5,3,"blur",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"view",2,2,"class",9,null,2,3,"ask-questions-btn c-gap-left-xmiddle ",7,null,12,6,1,3,"isDiableSubmit",3,"disable",3,"",1,8,6,1,3,"_class",null,1,"login-btn",9,33,"class",9,null,null,2,"z-index",4,9,2,"text",3,"提问",2,"dataonloginsuccesseventproxy",3,"onLoginSuccess",2,"dataontapendeventproxy",3,"onLoginBtnTapEnd",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",7",2,"rootUID",6,1,3,"rootUID",35,"bindonLoginSuccess",8,6,1,3,"eventHappen",5,3,"onLoginSuccess",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,35,"bindonTapEnd",8,6,1,3,"eventHappen",5,3,"onTapEnd",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"c-dialog",11,2,"show",6,1,3,"feedbackDialog",2,"btn-opts",6,1,3,"feedbackDialogBtn",2,"content-text-align",3,"center",2,"datacloseeventproxy",3,"handleClose",2,"databtntapeventproxy",3,"handleDialogBtnTap",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",8",2,"rootUID",6,1,3,"rootUID",2,"class",3,"swan-spider-tap",35,"bindclose",8,6,1,3,"eventHappen",5,3,"close",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,35,"bindbtntap",8,6,1,3,"eventHappen",5,3,"btntap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"view",2,2,"class",3,"content-area",null,3,"此功能不支持咨询病情或挂号",1,"c-dialog",7,2,"show",6,1,3,"isAskSuccess",2,"btn-opts",6,1,3,"btnOpts",2,"databtntapeventproxy",3,"askSuccess",2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",9",2,"rootUID",6,1,3,"rootUID",35,"bindbtntap",8,6,1,3,"eventHappen",5,3,"btntap",6,1,3,"$event",3,"handleProxy",3,"",3,"bind",null,1,"view",4,2,"class",3,"ask-success",1,"view",1,1,"c-image",9,33,"has-compress",9,null,null,2,"src",3,"https://med-fe.cdn.bcebos.com/doctor/homepage/success.png",2,"width",3,"48px",2,"height",3,"48px",2,"hack-white-stroke",5,null,2,"is-round",5,null,2,"extra",13,1,14,3,"column",4,4,2,"compId",10,43,12,6,1,3,"compId",6,1,3,"compId",3,"$root",3,",10",2,"rootUID",6,1,3,"rootUID",1,"view",2,2,"class",3,"c-color-title ask-success-title c-font-medium",null,3,"问题提交成功\n            ",1,"view",2,2,"class",3,"c-font-medium c-color",null,3,"审核通过后将会向用户发出提问\n            "]},isComponent:!1,componentPath:"pages/hospital/ask/index.swan",customComponentCss:[],createTemplateComponent:function(n){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));