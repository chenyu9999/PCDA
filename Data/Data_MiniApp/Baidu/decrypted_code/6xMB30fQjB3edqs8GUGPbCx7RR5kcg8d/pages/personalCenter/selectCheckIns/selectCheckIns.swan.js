var _sjsSupporter={compiler:!1};window.define("pages/personalCenter/selectCheckIns/selectCheckIns.swan",(function(e,t){t.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view class="clearfix"><view class="form-view flex-wrp" style="flex-direction:column;padding:0rem 0.7rem"><view class="am-u-sm-12 am-padding-vertical-xs" s-for="ticket, index in ticketList" s-for-item="ticket"><view class="clearfix"><view class="am-u-sm-6 am-text-danger" style="font-weight: 600;"><view class="am-u-sm-2"><view style="width:18px;height:18px;line-height:18px;background:#dd514c;color:#eee;text-align: center;border-radius: 50%;">{{ticket.index}}</view></view><view class="am-u-sm-10"><text >{{ticket.flightCom}}{{ticket.flightNumber}}</text></view></view><view class="am-u-sm-6 am-text-right"><text >{{ticket.strDepartureDate}} ({{ticket.strDepartureWeek}})</text></view></view><view class="clearfix am-line am-padding-bottom-xs"><view class="am-u-sm-4"><view class="am-text-xs" style="font-weight: 600;">{{ticket.strDepartureTime}}</view><view >{{ticket.strDepartureAirport}}</view></view><view class="am-u-sm-4 am-text-center"><image src="https://m.airchina.com.cn/ac/WeChat_Image/flight_big.png" mode="aspectFill" style="width:65px;height:16px;" /></view><view class="am-u-sm-4 am-text-right"><view class="am-text-xs" style="font-weight: 600;">{{ticket.strArrivalTime}}</view><view >{{ticket.strArrivalAirport}}</view></view></view><view class="clearfix am-padding-vertical-xs swan-spider-tap" s-for="traveler, index in ticket.travelerlist" s-for-item="traveler" style="border-bottom: 1px solid #333;" data-strCouponStatus="{{traveler.strCouponStatus}}" data-flightNum="{{ticket.flightCom + ticket.flightNumber}}" data-tKTNumber="{{traveler.ticketNumber}}" on-bindtap="eventHappen(\'tap\', $event, \'goCheckIns\', \'\', \'bind\')"><view class="am-u-sm-12 clearfix" style="padding-bottom:0.3rem"><view class="am-u-sm-6" style="font-weight: 600;">{{traveler.lastName}}{{traveler.firstName}}</view><view class="am-u-sm-6 am-text-right">已出票</view></view><view class="am-u-sm-12 clearfix"><view class="am-u-sm-11">票号：{{traveler.ticketNumber}}</view><view class="am-u-sm-1 am-text-right"><image src="https://m.airchina.com.cn/ac/WeChat_Image/ic_blue_arrow_l_ss.png" mode="aspectFill" style="width:10px;height:15px;" /></view></view></view></view></view></view>',isComponent:!1,componentPath:"pages/personalCenter/selectCheckIns/selectCheckIns.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));