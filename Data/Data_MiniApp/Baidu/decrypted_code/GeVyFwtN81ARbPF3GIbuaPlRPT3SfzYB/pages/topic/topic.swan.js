var _sjsSupporter={compiler:!1};window.define("components/topic/topic-item/topic-item.swan",(function(e,t){t.exports={componentUsingComponentMap:{"components/live-item-card/live-item-card.swan":["live-item"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},getAPack:function(){return[1,"swan-private-root-tag",4,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",5,2,"class",3,"topic-main-container",2,"id",6,1,3,"itemId",1,"view",3,2,"class",3,"topic-title-wrap",1,"text",2,2,"class",3,"topic-title",null,6,1,3,"topicTitle",1,"view",3,2,"class",3,"author-tag",38,6,1,3,"authorDesc",null,6,1,3,"authorDesc",null,1,"view",2,2,"class",3,"topic-dec",null,6,1,3,"topicDesc",1,"view",2,2,"class",3,"content-wrap",1,"template",3,38,10,76,6,1,3,"liveList",6,2,3,"liveList",3,"length",1,"view",2,38,10,76,6,1,3,"bigLiveList",6,2,3,"bigLiveList",3,"length",1,"view",3,2,"class",3,"live-item-wrap big",37,"item",null,null,6,1,3,"bigLiveList",1,"live-item",5,2,"item",6,1,3,"item",2,"card-type",6,2,3,"constCardType",3,"fullWidth",2,"card-position",3,"live",2,"class",3,"swan-spider-tap",35,"bindsendlog",8,6,1,3,"eventHappen",5,3,"sendlog",6,1,3,"$event",3,"childlog",3,"",3,"bind",null,null,1,"view",2,38,10,76,6,1,3,"doubleFeedLiveList",6,2,3,"doubleFeedLiveList",3,"length",1,"view",3,2,"class",3,"live-item-wrap double-feed",37,"item",null,null,6,1,3,"doubleFeedLiveList",1,"live-item",5,2,"item",6,1,3,"item",2,"card-type",6,2,3,"constCardType",3,"doubleFeed",2,"card-position",3,"live",2,"class",3,"swan-spider-tap",35,"bindsendlog",8,6,1,3,"eventHappen",5,3,"sendlog",6,1,3,"$event",3,"childlog",3,"",3,"bind",null,null,1,1,"template",3,39,10,76,6,1,3,"articleList",6,2,3,"articleList",3,"length",37,"item","index",null,6,1,3,"articleList",1,"view",7,2,"class",3,"content-item swan-spider-tap",2,"data-type",6,2,3,"item",3,"type",2,"data-id",6,2,3,"item",3,"idEnc",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"picClick",3,"",3,"bind",null,1,"view",3,2,"class",3,"item-img-wrap",1,"image",3,2,"class",3,"item-img",2,"src",6,2,3,"item",3,"img",2,"mode",3,"aspectFill",1,"view",3,2,"class",3,"videoTime",38,10,122,6,2,3,"item",3,"type",3,"video",1,"view",2,2,"class",3,"videoTimeOut playicon",1,"view",2,2,"class",3,"time",null,6,2,3,"item",3,"duration",1,1,"view",3,2,"class",3,"videoTimeList",39,10,122,6,2,3,"item",3,"type",3,"showlist",1,"view",2,2,"class",3,"videoTimeOut feediconList",1,"view",2,2,"class",3,"feedNum",null,9,null,2,7,null,6,2,3,"item",3,"num",null,3,"个视频",1,"view",2,2,"class",3,"item-title",null,6,2,3,"item",3,"title",1,"view",4,2,"class",3,"item-user-info",38,11,33,6,1,3,"authorDesc",1,"view",3,2,"class",3,"headimg-wrap",1,"image",2,2,"class",3,"headimg",2,"src",6,3,3,"item",3,"user",3,"avatar",1,"template",2,38,10,183,6,3,3,"item",3,"user",3,"type",4,1,1,"text",1,2,"class",3,"ident-icon",1,1,"template",2,39,10,183,6,3,3,"item",3,"user",3,"type",4,2,1,"text",1,2,"class",3,"ident-icon org",1,"view",2,2,"class",3,"username",null,6,3,3,"item",3,"user",3,"uname",null]},isComponent:!0,componentPath:"components/topic/topic-item/topic-item.swan",customComponentCss:[".",[0],"topic-main-container","{margin: 0 17px 15px 17px;}",".",[0],"topic-title-wrap","{display: flex; justify-content: space-between; align-items: center;}",".",[0],"topic-title-wrap ",".",[0],"topic-title","{font-weight: bold; font-size: 24px; white-space: nowrap; margin-right: 2px;}",".",[0],"topic-title-wrap ",".",[0],"author-tag","{font-family: PingFangSC-Regular; font-weight: normal; font-size: 12px; color: #814E29; display: inline-block; background-color: #FFF8E1; line-height: 20px; padding: 0 3.14vw; border-radius: 3px;}",".",[0],"topic-dec","{margin-top: 4px; font-size: 15px; color: #666;}",".",[0],"content-wrap","{justify-content: space-between; margin-top: 4vw;}",".",[0],"content-item","{width: 49%; display: inline-block; margin-bottom: 3vw; overflow: hidden; text-overflow: ellipsis;}",".",[0],"content-item:nth-child(odd)","{margin-right: 2%;}",".",[0],"content-item ",".",[0],"item-img-wrap","{width: 100%; height: 24.88vw; position: relative; margin-bottom: 5px;}",".",[0],"content-item ",".",[0],"item-img","{width: 100%; height: 100%; border-radius: 3px;}",".",[0],"content-item ",".",[0],"item-title","{font-size: 15px; color: #000; margin-top: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}",".",[0],"content-item ",".",[0],"item-user-info","{margin-top: 5px; display: flex; align-items: center;}",".",[0],"headimg-wrap","{position: relative; width: 20px; height: 20px;}",".",[0],"content-item ",".",[0],"item-user-info ",".",[0],"headimg","{width: 17px; height: 17px; border-radius: 50%;}",".",[0],"content-item ",".",[0],"item-user-info ",".",[0],"username","{display: inline-block; font-size: 12px; color: #999; margin-left: 5px;}",".",[0],"item-user-info ",".",[0],"ident-icon","{width: 8px; height: 8px; position: absolute; right: 0; bottom: 2px; display: block; background: url(__custom_prefix_path__/images/author/ident-icon.png) no-repeat; background-size: contain;}",".",[0],"item-user-info ",".",[0],"ident-icon",".",[0],"org","{background-image: url(__custom_prefix_path__/images/author/ident-icon-org.png);}",".",[0],"videoTimeOut","{width: 100%; display: flex; align-items: center;}",".",[0],"videoTime","{width: 56px; height: 20px; border-radius: 10px; position: absolute; bottom: 5px; right: 5px; display: flex; background: rgba(0, 0, 0, .4); font-family: HelveticaNeue; font-size: 10px; color: #FFF;}",".",[0],"videoTimeList","{width: 70px; height: 20px; border-radius: 10px; position: absolute; bottom: 5px; right: 5px; display: flex; background: rgba(0, 0, 0, .4); font-family: HelveticaNeue; font-size: 10px; color: #FFF; letter-spacing: 0;}",".",[0],"videoTimeOut",".",[0],"feediconList","{padding-left: 24px; background: url(__custom_prefix_path__/images/feed-video3.png) 10px 50% no-repeat; background-size: 10px 10px;}",".",[0],"videoTimeOut",".",[0],"playicon","{padding-left: 21px; background: url(__custom_prefix_path__/images/duration.png) 8px 45% no-repeat; background-size: 9px 9px;}",".",[0],"live-item-wrap","{margin-bottom: 3.3vw;}",".",[0],"live-item-wrap",".",[0],"double-feed","{display: inline-block; width: 49%;}",".",[0],"live-item-wrap",".",[0],"double-feed:nth-child(odd)","{margin-right: 1.9%;}"],createTemplateComponent:function(){return{}},filters:{},initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}})),window.define("pages/topic/topic.swan",(function(e,t){t.exports={componentUsingComponentMap:{"components/common/top-bar/top-bar.swan":["top-bar"],"components/topic/topic-item/topic-item.swan":["topic-item"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},getAPack:function(){return[1,"swan-private-root-tag",4,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",5,2,"class",3,"topic-page",1,"top-bar",6,2,"id",3,"top-bar-id",2,"title",6,1,3,"title",2,"from-jingyan-swan",6,1,3,"fromJingyanSwan",2,"bg-color",3,"#fff",2,"class",3,"swan-spider-tap",35,"bindsendlog",8,6,1,3,"eventHappen",5,3,"sendlog",6,1,3,"$event",3,"childlog",3,"",3,"bind",null,1,"view",4,2,"class",3,"topic-header",1,"view",2,2,"class",3,"topic-header-bg",2,"style",9,null,2,3,"background-color: ",7,null,12,10,183,6,2,3,"topElement",3,"color",3,"",3,"#E7E0D0",6,2,3,"topElement",3,"color",1,8,6,1,3,"_style",null,1,"image",3,2,"class",3,"topic-header-img",2,"src",6,2,3,"topElement",3,"img",2,"mode",3,"aspectFill",1,"view",2,2,"class",3,"topic-header-tab-wrap",1,"view",2,2,"class",3,"topic-header-tabs",1,"template",2,37,"item","index",null,6,1,3,"tabList",1,"view",4,2,"class",3,"tab swan-spider-tap",2,"data-index",6,1,3,"index",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"tap",3,"",3,"bind",null,null,6,1,3,"item",1,"template",2,37,"item","index",null,6,1,3,"liveContent",1,"topic-item",7,2,"item-id",9,null,2,3,"t",7,null,6,1,3,"index",null,2,"topic-title",6,3,3,"liveContent",6,1,3,"index",3,"title",2,"topic-desc",6,3,3,"liveContent",6,1,3,"index",3,"desc",2,"live-list",6,3,3,"liveContent",6,1,3,"index",3,"items",2,"author-desc",6,3,3,"liveContent",6,1,3,"index",3,"authorDesc",2,"class",3,"swan-spider-tap",35,"bindsendlog",8,6,1,3,"eventHappen",5,3,"sendlog",6,1,3,"$event",3,"childlog",3,"",3,"bind",null,1,"template",2,37,"item","index",null,6,1,3,"content",1,"topic-item",7,2,"item-id",9,null,2,3,"t",7,null,10,43,6,1,3,"index",6,2,3,"liveContent",3,"length",null,2,"topic-title",6,3,3,"content",6,1,3,"index",3,"title",2,"topic-desc",6,3,3,"content",6,1,3,"index",3,"desc",2,"article-list",6,3,3,"content",6,1,3,"index",3,"items",2,"author-desc",6,3,3,"content",6,1,3,"index",3,"authorDesc",2,"class",3,"swan-spider-tap",35,"bindsendlog",8,6,1,3,"eventHappen",5,3,"sendlog",6,1,3,"$event",3,"childlog",3,"",3,"bind",null]},isComponent:!1,componentPath:"pages/topic/topic.swan",createTemplateComponent:function(){return{}},filters:{},initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));