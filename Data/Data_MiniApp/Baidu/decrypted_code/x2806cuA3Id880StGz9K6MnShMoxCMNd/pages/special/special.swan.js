var _sjsSupporter={compiler:!1};window.define("pages/special/special.swan",(function(e,t){t.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view id="container"><view class=\'tab-wrap\'><view class="tab {{isChapter?\'active\':\'\'}} swan-spider-tap" data-ischapter on-bindtap="eventHappen(\'tap\', $event, \'switchTab\', \'\', \'bind\')"><text >章节练习</text></view><view class="tab {{isChapter?\'\':\'active\'}} swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'switchTab\', \'\', \'bind\')"><text >专项练习</text></view></view><view class="chapter" hidden=\'{{!isChapter}}\'><view class="chapter-p"><template s-for="item, index in chapter"><view class="chapter-i self-color swan-spider-tap" data-chapter="{{item.id}}" on-bindtap="eventHappen(\'tap\', $event, \'chapter\', \'\', \'bind\')"><text class="dot_{{index%7}} dot txt_1">{{index+1}}</text><text class="txt_2">{{item.title}}</text><text class="txt_3">{{item.count}}题</text></view></template></view></view><view class="special" hidden=\'{{isChapter}}\'><view class="special-p clearfix"><template s-for="item, index in nodes"><template s-if="item.count>0"><view class="special-w"><view class="self-color special-i swan-spider-tap" data-tag="{{item.tagId}}" on-bindtap="eventHappen(\'tap\', $event, \'special\', \'\', \'bind\')"><text class="dot_{{index%7}} dot txt_1">{{index+1}}</text><text class="txt_2">{{item.label}}</text><text class="txt_3">{{item.count}}题</text></view></view></template></template></view></view></view>',isComponent:!1,componentPath:"pages/special/special.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));