var _sjsSupporter={compiler:!1};window.define("374",(function(e,n){var a={};n.exports=function(e,n){var t=san.defineComponent({components:e,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"na-guide",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",4,2,"class",3,"na-guide-wp",1,"button",9,2,"class",3,"na-guide-btn swan-spider-tap",2,"open-type",3,"launchApp",2,"data-androidmiddle",3,"https://zhidao.baidu.com/activity/simpleindexact?tplName=nareplace&type=wap",2,"download-app-url-ios",3,"https://itunes.apple.com/cn/app/bai-du-zhi-dao-yu-yin-wen-da/id465885800?mt=8",2,"app-installed-android-name",3,"com.baidu.iknow",2,"launch-app-name",3,"百度知道",2,"launch-scheme",10,248,6,1,3,"guideScheme",3,"zhidao://com.baidu.iknow/index/home",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"jumpNa",3,"",3,"bind",null,1,"text",2,2,"class",3,"na-guide-btn-txt",null,10,248,6,1,3,"guideBtnText",3,"打开百度知道APP",1,"view",2,2,"class",3,"na-guide-txt",null,10,248,6,1,3,"guideText",3,"用百度知道APP提问更快速、更方便",1,"view",4,2,"class",3,"na-download-footer",38,10,183,6,1,3,"platform",3,"android",1,"view",1,null,6,1,3,"naVersionText",1,"view",3,2,"class",3,"tips-link swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"goProtocol",3,"",3,"bind",null,null,3,"隐私政策和权限",null]},filters:a,_smartJs:n,inited:function(){var e=this,n=function(n){for(var a in n)e.data.set(a,n[a])};n(this.data.get("data")),this.watch("data",n)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});return t}})),window.define("components/hashtag/hashtag.swan",(function(e,n){n.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},getAPack:function(){return[1,"swan-private-root-tag",4,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",3,2,"class",3,"cover",38,6,1,3,"showHashTag",1,"view",4,2,"class",3,"hash-tag-container",1,"view",3,2,"class",3,"hash-tag-header",1,"text",2,38,10,122,6,1,3,"qid",3,"1994877701802037707",null,3,"添加2020小心愿",1,1,"text",2,40,null,3,"添加2019关键词",1,"view",2,2,"class",3,"hash-tag-close-icon swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"closeHashTag",3,"",3,"bind",null,1,"input",5,34,"value",6,1,3,"search",2,"placeholder",6,1,3,"searchPlaceholder",2,"placeholder-style",3,"color:#999; font-size: 15px;",2,"class",3,"hash-tag-input",35,"bindinput",8,6,1,3,"eventHappen",5,3,"input",6,1,3,"$event",3,"bindKeyInput",3,"",3,"bind",null,1,"view",3,2,"class",3,"hash-tag",38,11,33,6,1,3,"search",1,"view",5,2,"class",3,"hash-tag-hot swan-spider-tap",2,"data-item",6,1,3,"item",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"addHashTag",3,"",3,"bind",null,37,"item","index",null,6,1,3,"hashTags",null,9,null,2,3,"# ",7,null,6,1,3,"item",null,1,1,"view",4,2,"class",3,"hash-tag sug",40,1,"view",5,2,"data-item",6,1,3,"search",2,"class",3,"swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"addHashTag",3,"",3,"bind",null,1,"text",2,2,"style",3,"color: #666; font-size: 15px; margin-right: 6px",null,3,"创建:  ",1,"text",2,2,"style",3,"color: #4e9ae7; font-size: 15px;",null,9,null,2,3,"# ",7,null,6,1,3,"search",null,1,"view",5,2,"class",3,"hash-tag-hot-search swan-spider-tap",2,"data-item",6,1,3,"item",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"addHashTag",3,"",3,"bind",null,37,"item","index",null,6,1,3,"hashTagsSuggests",null,9,null,2,3,"# ",7,null,6,1,3,"item",null,null]},isComponent:!0,componentPath:"components/hashtag/hashtag.swan",customComponentCss:[".",[0],"hash-tag-container","{position: absolute; bottom: 0; width: 100%; height: 90vh; border-radius: 10px 10px 0 0; background: #fff;}",".",[0],"hash-tag-container",".",[0],"slide-in-up","{top: 20vh;}",".",[0],"hash-tag-container ",".",[0],"hash-tag-header","{width: 100%; text-align: center; font-size: 18px; height: 48px; line-height: 48px; position: relative;}",".",[0],"hash-tag-container ",".",[0],"hash-tag-header ",".",[0],"hash-tag-close-icon","{position: absolute; top: 13px; right: 14px; background: url(http://gss0.bdstatic.com/7051cy89RcgCncy6lo7D0j9wexYrbOWh7c50/yt/bdsp/icon/hash-tag-close.png); background-size: 100% 100%; height: 22px; width: 22px;}",".",[0],"hash-tag-container ",".",[0],"hash-tag-header::before",'{content: ""; position: absolute; left: 0; bottom: 0; background: #e5e5e5; width: 200%; height: 1px; transform: scale(.5); transform-origin: 0 0;}',".",[0],"hash-tag-container ",".",[0],"hash-tag","{height: 80%; margin: 17px 17px 0 17px; overflow-y: scroll;}",".",[0],"hash-tag-container ",".",[0],"hash-tag",".",[0],"sug","{margin: 21px 17px 0 17px;}",".",[0],"hash-tag-container ",".",[0],"hash-tag ",".",[0],"hash-tag-hot-search","{color: #333; margin-top: 18px; font-size: 15px;}",".",[0],"hash-tag-container ",".",[0],"hash-tag ",".",[0],"hash-tag-hot-search:active","{background-color: #e6e6e6;}",".",[0],"hash-tag-container ",".",[0],"hash-tag ",".",[0],"hash-tag-hot","{display: inline-block; background: #f5f5f5; color: #666; font-size: 15px; height: 32px; border-radius: 33px; line-height: 32px; padding: 0 12px; margin: 0 14px 17px 0;}",".",[0],"hash-tag-container ",".",[0],"hash-tag ",".",[0],"hash-tag-hot:active","{background-color: #e6e6e6;}",".",[0],"hash-tag-container ",".",[0],"hash-tag-input","{border: 1px solid #ccc; border-radius: 33px; height: 36px; margin: 14px 17px 0; padding: 0 17px; font-size: 15px; color: #333;}",".",[0],"cover","{position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 100001; background: rgba(0, 0, 0, .65);}"],createTemplateComponent:function(){return{}},filters:{},initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}})),window.define("pages/answer/answer.swan",(function(e,n){var a={};n.exports={componentUsingComponentMap:{"components/nav/nav.swan":["nav"],"components/vcode/vcode.swan":["vcode"],"components/hashtag/hashtag.swan":["hashtag"],"components/videoUpload/videoUpload.swan":["videoupload"],"components/videoPreview/videoPreview.swan":["videopreview"],"components/loginBtn/loginBtn.swan":["loginbtn"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},getAPack:function(){return[1,"swan-private-root-tag",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"nav",6,2,"hideHome",5,1,2,"navTitle",3,"选封面",2,"navClass",3,"video-cover-select-bar",2,"customBack",3,"true",35,"bindback",8,6,1,3,"eventHappen",5,3,"back",6,1,3,"$event",3,"clickBack",3,"",3,"bind",null,38,6,1,3,"showVideoCoverSelect",1,1,"nav",2,2,"navTitle",3,"回答",40,1,"template",2,38,6,1,3,"showVideoCoverSelect",1,"view",4,2,"class",3,"video-cover-select-container",2,"style",9,null,5,3,"height: ",7,null,10,45,6,1,3,"windowHeight",6,1,3,"totalTitleHeight",1,8,6,1,3,"_style",null,3,"px;padding-top: ",7,null,6,1,3,"totalTitleHeight",1,8,6,1,3,"_style",null,3,"px;",1,"view",3,2,"class",3,"preview-image-container",1,"image",4,2,"class",3,"preview-image horizontal",2,"src",6,2,3,"coverUrlList",6,1,3,"videoCoverSelectIndex",2,"style",9,null,5,3,"margin-top: ",7,null,10,47,10,45,6,1,3,"previewImageHeight",10,47,10,42,10,45,6,1,3,"windowWidth",4,34,6,1,3,"videoHeight",6,1,3,"videoWidth",4,2,1,8,6,1,3,"_style",null,3,"px; height:",7,null,10,47,10,42,10,45,6,1,3,"windowWidth",4,34,6,1,3,"videoHeight",6,1,3,"videoWidth",1,8,6,1,3,"_style",null,3,"px;",38,10,76,10,62,6,1,3,"videoWidth",6,1,3,"videoHeight",6,1,3,"previewImageHeight",null,1,"image",4,2,"class",3,"preview-image vertical",2,"src",6,2,3,"coverUrlList",6,1,3,"videoCoverSelectIndex",2,"style",9,null,5,3,"height: ",7,null,6,1,3,"previewImageHeight",1,8,6,1,3,"_style",null,3,"px; width: ",7,null,10,47,10,42,6,1,3,"previewImageHeight",6,1,3,"videoWidth",6,1,3,"videoHeight",1,8,6,1,3,"_style",null,3,"px",38,10,76,10,60,6,1,3,"videoWidth",6,1,3,"videoHeight",6,1,3,"previewImageHeight",null,1,"view",3,2,"class",3,"preview-list-container",1,"view",2,2,"class",3,"preview-list",1,"view",5,2,"class",9,null,2,3,"preview-item-container horizontal",7,null,12,10,183,6,1,3,"videoCoverSelectIndex",6,1,3,"index",3," select",3,"",1,8,6,1,3,"_class",null,37,"item","index",null,6,1,3,"coverUrlList",38,10,62,6,1,3,"videoWidth",6,1,3,"videoHeight",1,"view",3,2,"class",3,"rec-icon",38,10,183,6,1,3,"index",4,0,null,3,"推荐",null,1,"view",4,2,"class",3,"preview-item swan-spider-tap",2,"data-index",6,1,3,"index",2,"style",9,null,3,3,"height: 40px;background-image: url(",7,null,6,1,3,"item",1,8,6,1,3,"_style",null,3,"); background-position: center 100%;",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"chooseCover",3,"",3,"bind",null,1,1,"view",5,2,"class",9,null,2,3,"preview-item-container vertical",7,null,12,10,183,6,1,3,"videoCoverSelectIndex",6,1,3,"index",3," select",3,"",1,8,6,1,3,"_class",null,37,"item","index",null,6,1,3,"coverUrlList",40,1,"view",3,2,"class",3,"rec-icon",38,10,183,6,1,3,"index",4,0,null,3,"推荐",null,1,"view",4,2,"class",3,"preview-item swan-spider-tap",2,"data-index",6,1,3,"index",2,"style",9,null,3,3,"height: 72px;background-image: url(",7,null,6,1,3,"item",1,8,6,1,3,"_style",null,3,"); background-position: 100% center;",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"chooseCover",3,"",3,"bind",null,1,"view",3,2,"class",3,"select-btn swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"submitCover",3,"",3,"bind",null,null,3,"完成",1,1,"template",7,40,1,"view",3,2,"class",3,"answer-container",2,"style",9,null,3,3,"padding-top: ",7,null,6,1,3,"totalTitleHeight",1,8,6,1,3,"_style",null,3,"px",1,"form",5,2,"name",3,"answerform",1,"view",4,2,"class",3,"answer-warp",1,"view",2,2,"class",3,"answer-title",null,6,1,3,"title",1,"videopreview",19,2,"id",3,"vpreview",2,"coverUrl",6,1,3,"coverUrl",2,"videoUrl",6,1,3,"videoUrl",2,"width",6,1,3,"videoWidth",2,"height",6,1,3,"videoHeight",2,"vtopicIndex",6,1,3,"vtopicIndex",2,"topicArr",6,1,3,"topicArr",2,"hasSelectTopic",6,1,3,"hasSelectTopic",2,"bigPreview",5,1,2,"progress",6,1,3,"progress",2,"status",6,1,3,"videoStatus",2,"up",6,1,3,"videoPreviewPositionUp",2,"class",3,"swan-spider-tap",35,"bindchangePostion",8,6,1,3,"eventHappen",5,3,"changePostion",6,1,3,"$event",3,"changePostion",3,"",3,"bind",null,35,"binddeleteVideo",8,6,1,3,"eventHappen",5,3,"deleteVideo",6,1,3,"$event",3,"deleteVideo",3,"",3,"bind",null,35,"bindopenCoverSelect",8,6,1,3,"eventHappen",5,3,"openCoverSelect",6,1,3,"$event",3,"openCoverSelect",3,"",3,"bind",null,35,"bindsetVTopicIndex",8,6,1,3,"eventHappen",5,3,"setVTopicIndex",6,1,3,"$event",3,"setVTopicIndex",3,"",3,"bind",null,35,"binduploadVideo",8,6,1,3,"eventHappen",5,3,"uploadVideo",6,1,3,"$event",3,"uploadVideo",3,"",3,"bind",null,38,10,76,6,1,3,"videoPreviewPositionUp",6,1,3,"hasVideo",null,1,"view",4,2,"class",9,null,2,3,"answer-added clear ",7,null,12,10,76,6,1,3,"videoPreviewPositionUp",6,1,3,"hasVideo",3,"video-up",3,"",1,8,6,1,3,"_class",null,2,"id",3,"answerAdded",1,"textarea",16,2,"rows",3,"10",2,"maxlength",3,"9999",2,"placeholder",12,6,1,3,"showHashTag",3,"",3,"回答开门见山，重点突出，排版美观，图文并茂，更容易成为『宝藏回答』哦",2,"placeholder-class",3,"phclass",2,"placeholder-style",3,"color:#ccc;",2,"show-confirm-bar",6,1,3,"showCB",34,"value",6,1,3,"answerContent",2,"disabled",6,1,3,"disableInput",2,"auto-focus",6,1,3,"autoFocus",2,"adjust-position",3,"false",2,"class",3,"swan-spider-tap",35,"bindinput",8,6,1,3,"eventHappen",5,3,"input",6,1,3,"$event",3,"changeAnswer",3,"",3,"bind",null,35,"bindlinechange",8,6,1,3,"eventHappen",5,3,"linechange",6,1,3,"$event",3,"onLineChange",3,"",3,"bind",null,35,"bindfocus",8,6,1,3,"eventHappen",5,3,"focus",6,1,3,"$event",3,"onTextareaFocus",3,"",3,"bind",null,35,"bindblur",8,6,1,3,"eventHappen",5,3,"blur",6,1,3,"$event",3,"onTextareaBlur",3,"",3,"bind",null,38,11,33,6,1,3,"isFullScreen",null,1,"view",5,2,"class",3,"answer-topic-btn swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"showHashTag",3,"",3,"bind",null,38,6,1,3,"showTopic",1,"view",1,2,"class",3,"topic-btn-icon",1,"text",2,38,10,122,6,1,3,"qid",3,"1994877701802037707",null,3,"添加2020小心愿",1,1,"text",2,40,null,3,"添加2019关键词",null,1,"view",3,2,"class",9,null,2,3,"video-upload-wrapper ",7,null,12,6,1,3,"hasVideo",3,"contain-video",3,"",1,8,6,1,3,"_class",null,38,6,1,3,"showUploadVideoIcon",1,"view",6,2,"class",3,"swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"uploadVideo",3,"",3,"bind",null,38,11,33,6,1,3,"hasVideo",1,"view",2,2,"class",3,"video-upload",1,"view",2,2,"class",3,"gif",38,6,1,3,"showGif",null,1,"view",2,2,"class",3,"add-video",null,3,"添加视频",1,"view",1,2,"class",3,"video-arrow",1,1,"videopreview",20,2,"id",3,"vpreview",2,"coverUrl",6,1,3,"coverUrl",2,"videoUrl",6,1,3,"videoUrl",2,"bigPreview",5,1,2,"vtopicIndex",6,1,3,"vtopicIndex",2,"topicArr",6,1,3,"topicArr",2,"hasSelectTopic",6,1,3,"hasSelectTopic",2,"width",6,1,3,"videoWidth",2,"height",6,1,3,"videoHeight",2,"progress",6,1,3,"progress",2,"status",6,1,3,"videoStatus",2,"up",6,1,3,"videoPreviewPositionUp",2,"class",3,"swan-spider-tap",35,"bindchangePostion",8,6,1,3,"eventHappen",5,3,"changePostion",6,1,3,"$event",3,"changePostion",3,"",3,"bind",null,35,"binddeleteVideo",8,6,1,3,"eventHappen",5,3,"deleteVideo",6,1,3,"$event",3,"deleteVideo",3,"",3,"bind",null,35,"bindonpreviewvideo",8,6,1,3,"eventHappen",5,3,"onpreviewvideo",6,1,3,"$event",3,"onPreviewVideo",3,"",3,"bind",null,35,"bindopenCoverSelect",8,6,1,3,"eventHappen",5,3,"openCoverSelect",6,1,3,"$event",3,"openCoverSelect",3,"",3,"bind",null,35,"bindsetVTopicIndex",8,6,1,3,"eventHappen",5,3,"setVTopicIndex",6,1,3,"$event",3,"setVTopicIndex",3,"",3,"bind",null,35,"binduploadVideo",8,6,1,3,"eventHappen",5,3,"uploadVideo",6,1,3,"$event",3,"uploadVideo",3,"",3,"bind",null,39,10,76,11,33,6,1,3,"videoPreviewPositionUp",6,1,3,"hasVideo",null,1,"view",4,2,"class",3,"answer-submit-guide",1,"view",2,2,"class",3,"answer-submit-guide-desc",null,3,"提交优质回答，最高可获得现金3元",1,"view",2,2,"class",3,"guide-arrow swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"jumptoguide",3,"",3,"bind",null,1,"view",3,2,"class",3,"answer-submit-guide-btn-desc swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"jumptoguide",3,"",3,"bind",null,null,3,"查看规则",1,"view",2,2,"class",3,"answer-submit swan-security-padding-bottom",1,"view",4,2,"class",3,"answer-submit-btn active",38,10,76,6,1,3,"cansubmit",11,33,6,1,3,"isBan",null,9,null,2,7,null,12,6,1,3,"isReward",3,"有奖发布",3,"提交",null,3,"\n                    ",1,"loginbtn",1,35,"bindmylogin",8,6,1,3,"eventHappen",5,3,"mylogin",6,1,3,"$event",3,"submitAnswer",3,"",3,"bind",null,1,1,"view",3,2,"class",3,"answer-submit-btn",40,null,12,6,1,3,"isReward",3,"有奖发布",3,"提交",1,"template-cce457d3",3,2,"data",13,4,14,3,"guideText",3,"用百度知道APP回答 功能更丰富，更容易被采纳！",14,3,"guideScheme",6,1,3,"naScheme",14,3,"naVersionText",6,1,3,"naVersionText",14,3,"platform",6,1,3,"platform",2,"data-origin-name",3,"na-guide",38,10,76,10,94,6,1,3,"fromScene",3,"WEB",6,1,3,"notFromSquare",null,1,"hashtag",9,2,"qid",6,1,3,"qid",2,"pageInfo",13,2,14,3,"qid",6,1,3,"qid",14,3,"fr",3,"answer",2,"showHashTag",6,1,3,"showHashTag",2,"searchPlaceholder",12,10,122,6,1,3,"qid",3,"1994877701802037707",3,"直接输入或选择下方小心愿",3,"直接输入或选择下方关键词",2,"hashTags",6,1,3,"hashTags",2,"class",3,"swan-spider-tap",35,"bindcloseHashTag",8,6,1,3,"eventHappen",5,3,"closeHashTag",6,1,3,"$event",3,"closeHashTag",3,"",3,"bind",null,35,"bindaddHashTag",8,6,1,3,"eventHappen",5,3,"addHashTag",6,1,3,"$event",3,"addHashTag",3,"",3,"bind",null,38,6,1,3,"showTopic",null,1,"vcode",2,2,"id",3,"answerVcode",2,"vcodeType",3,"wap_reply",1,"videoupload",9,2,"id",3,"vupload",2,"bigPreview",5,1,2,"encodeVideoInterval",4,10,2,"style",7,null,12,10,76,6,1,3,"showUploadVideoIcon",11,33,6,1,3,"mediaId",3,"",3,"display: none;",1,8,6,1,3,"_style",null,2,"class",3,"swan-spider-tap",35,"bindonuploadprocess",8,6,1,3,"eventHappen",5,3,"onuploadprocess",6,1,3,"$event",3,"onUploadProcess",3,"",3,"bind",null,35,"bindonencodestatus",8,6,1,3,"eventHappen",5,3,"onencodestatus",6,1,3,"$event",3,"onEncodeVideoStatus",3,"",3,"bind",null,35,"bindonchoosevideo",8,6,1,3,"eventHappen",5,3,"onchoosevideo",6,1,3,"$event",3,"onChooseVideo",3,"",3,"bind",null,1,"view",2,2,"slot",3,"action",2,"class",3,"video-upload",1,"view",3,2,"class",3,"safe-bottom",2,"style",3,"height: 100vh",38,6,1,3,"isTextareaOnFocus",null,1,"template-1d6c979c",2,2,"data",13,2,14,3,"showUserBanTip",6,1,3,"showUserBanTip",14,3,"banInfo",6,1,3,"banInfo",2,"data-origin-name",3,"ban-tip"]},isComponent:!1,componentPath:"pages/answer/answer.swan",createTemplateComponent:function(e){var n={},t={};return n["template-cce457d3"]=window.require("374")(t,a),n["template-1d6c979c"]=window.require("355")(t,a),Object.assign(t,e,n),n},filters:{},initialFilters:[],pageModules:{},extProperties:{_smartJs:a}}}));