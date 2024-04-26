var _sjsSupporter={compiler:!1};window.define("pages/my/orderList/orderList.swan",(function(e,t){t.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view class="page"><template s-if="{{!isLogin}}"><view class="none-login-tip"><image lazy-load="true" src="https://externalimage.1hai.cn/160/6570cb3185ed4091998e4d2c58662518.png" class="none-login-tip-image"></image><view class="none-login-text">登录后才能看到您的订单哦\n      </view><view class="gologin-button swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'toLogin\', \'\', \'bind\')">去登录</view></view></template><template s-else><view class="ui-tab"><view class="ui-flex align-center hd order-type"><view class="cell {{status == 1 ? \'active\' : \'\'}} swan-spider-tap" data-status="1" on-bindtap="eventHappen(\'tap\', $event, \'changeOrderStatus\', \'\', \'bind\')">预约中</view><view class="cell {{status == 2 ? \'active\' : \'\'}} swan-spider-tap" data-status="2" on-bindtap="eventHappen(\'tap\', $event, \'changeOrderStatus\', \'\', \'bind\')">租赁中</view><view class="cell {{status == 4 ? \'active\' : \'\'}} swan-spider-tap" data-status="4" on-bindtap="eventHappen(\'tap\', $event, \'changeOrderStatus\', \'\', \'bind\')">已完成</view><view class="cell {{status == 5 ? \'active\' : \'\'}} swan-spider-tap" data-status="5" on-bindtap="eventHappen(\'tap\', $event, \'changeOrderStatus\', \'\', \'bind\')">已取消</view></view><view class="bd"><template s-if="orderList.length >0"><scroll-view scroll-y lower-threshold="10" class="swan-spider-tap" on-bindscrolltolower="eventHappen(\'scrolltolower\', $event, \'loadMore\', \'\', \'bind\')"><view class="order-item"><template s-for="order, index in orderList" s-key="orderList"><view class="order-item-wrap swan-spider-tap" data-id="{{index}}" s-if="order.OrderType !== 20" on-bindtap="eventHappen(\'tap\', $event, \'orderDetail\', \'\', \'bind\')"><view class="order-item-hd"><view class="{{order.Status == 5 ? \'gray\' : \'orange\'}}">{{order.OrderStatusName}}</view></view><view class="ui-flex align-center"><view class="cell order-item-bd"><view class="ui-flex algin-start"><view >订单号</view><text class=\'colon\'>：</text><view class="cell">{{order.Id}}</view></view><view class="ui-flex algin-start"><view >车型</view><text class=\'colon\'>：</text><view class="cell">{{order.CarConfiguration}}</view></view><view class="ui-flex algin-start"><view >取车门店</view><text class=\'colon\'>：</text><view class="cell"><view >{{order.PickupAddress.CityName}} {{order.PickupAddress.StoreName}}</view></view></view><view class="ui-flex algin-start"><view >还车门店</view><text class=\'colon\'>：</text><view class="cell"><view >{{order.DropoffAddress.CityName}} {{order.DropoffAddress.StoreName}}</view></view></view><view class="ui-flex algin-start"><view >用车时间</view><text class=\'colon\'>：</text><view class="cell">{{order.PickupTime}} - {{order.DropoffTime}}</view></view><view class="ui-flex algin-start"><view >总价</view><text class=\'colon\'>：</text><view class="cell orange"><text class="rmb">¥</text>{{order.TotalAmount}}</view></view></view><view class="arrow aw-right"></view></view></view></template></view><view class="gray order-tip" s-if="{{status == 4}}">一年前订单请到APP或网页版查看</view></scroll-view></template><template s-else><view class="none-tip"><image lazy-load="true" src="https://externalimage.1hai.cn/160/bdb051ebe3f84807b38714b5a365b3ff.png" class="none-tip-image"></image><view >暂无匹配订单</view></view></template></view></view></template></view>',isComponent:!1,componentPath:"pages/my/orderList/orderList.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));