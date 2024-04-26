var _sjsSupporter={compiler:!1};window.define("pages/rescheduled/rescheduled/rescheduled.swan",(function(e,t){t.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'\n<view style="border-bottom: 8px solid #f8f8f8;padding:2.1333333333333333vw 4.266666666666667vw 0vw 4.266666666666667vw"><view class="form-row" style="padding:0px"><view class="am-u-sm-1"><image src="https://m.airchina.com.cn/ac/WeChat_Image/my_lap.png" mode="aspectFill" style="width:17px;height:17px;" /></view><view class="am-u-sm-11"><text class="am-padding-left-xs" style="font-weight: 700">我的行程</text></view></view><view class="form-view flex-wrp" s-if="{{ticketList.length >0}}" style="flex-direction:column;padding:0px"><view class="am-u-sm-12 am-padding-vertical-xs am-line swan-spider-tap" s-for="ticket, index in ticketList" s-for-index="index" s-for-item="ticket" data-strindex="{{ticket.index}}" data-flag="this" data-ticketNumber="{{ticket.ticketNumber}}" data-couponNumber="{{ticket.couponNumber}}" data-departureAirportCode="{{ticket.departureAirportCode}}" data-arrivalAirportCode="{{ticket.arrivalAirportCode}}" on-bindtap="eventHappen(\'tap\', $event, \'flightDetail\', \'\', \'bind\')"><view class="clearfix"><view class="am-u-sm-7"><view class="am-text-truncate" style="padding-bottom: 0.3rem;"><text class="am-text-danger">{{ticket.carrierAirlineCode}}{{ticket.carrierFlightNumber}}</text><text class="am-padding-left-xs">{{ticket.strOperatingAirlineCode}}</text></view><view class="am-text-truncate" style="padding-bottom: 0.3rem;"><text style="font-weight: 700">{{ticket.departureTime}} {{ticket.strDepartureAirportCode}} {{ticket.departureTerminal == "--" ? "" : ticket.departureTerminal}}</text></view><view class="am-text-truncate"><text >{{ticket.arrivalTime}} {{ticket.strArrivalAirportCode}} {{ticket.arrivalTerminal == "--" ? "" : ticket.arrivalTerminal}}</text></view></view><view class="am-u-sm-5"><view class="am-text-truncate am-text-right" style="padding-bottom: 0.3rem;"><text style="color: #999;">{{ticket.departureDate}} {{ticket.strDepartureDate}}</text></view><view class="am-text-truncate am-text-right am-padding-top-sm"><text class="am-text-danger">{{ticket.strCouponStatus}}</text></view></view></view></view></view></view><view style="border-bottom: 8px solid #f8f8f8;padding:0vw 4.266666666666667vw"><view class="form-view" style="padding-top:1rem"><text class="am-text-danger">如果您需要为别人变更，请输入：</text></view><view class="form-row am-line"><view class="am-u-sm-3">凭证号</view><view class="form-row-content am-u-sm-9"><input name="input" class="input" placeholder-class="input-placeholder-left" placeholder="证件号/票号" maxlength="18" on-bindinput="eventHappen(\'input\', $event, \'changeCertNO\', \'\', \'bind\')" /></view></view><view class="form-row am-line"><view class="am-u-sm-3">航班号</view><view class="form-row-content am-u-sm-9"><input name="input" class="input" placeholder-class="input-placeholder-left" placeholder="请输入航班号，例如CA1519" maxlength="18" on-bindinput="eventHappen(\'input\', $event, \'changeFlightNo\', \'\', \'bind\')" /></view></view><view class="form-row am-line"><view class="am-u-sm-3">出发日期</view><view class="form-row-content am-u-sm-9"><picker mode="date" value="{{nowData}}" start="{{startData}}" end="{{endData}}" class="swan-spider-tap" on-bindchange="eventHappen(\'change\', $event, \'bindDataChange\', \'\', \'bind\')"><view class="picker" style="padding:13px 0px;">{{nowData}}</view></picker></view></view><view class="form-row am-line" s-if="{{goldFlag == \'0\'}}"><view class="am-u-sm-3">验证码</view><view class="form-row-content am-u-sm-5"><input name="input" type="number" placeholder-class="input-placeholder-left" placeholder="请输入验证码" class="input" maxlength="6" on-bindinput="eventHappen(\'input\', $event, \'changeVericode\', \'\', \'bind\')" /></view><view class="am-u-sm-4"><button class="form-buttom swan-spider-tap" type="primary" size="mini" style="width: 100%;font-size:3.466666666666667vw;background-color:#3bb4f2" on-bindtap="eventHappen(\'tap\', $event, \'getCheckCode\', \'\', \'bind\')">{{btnkaptcha1}}</button></view></view><view class="form-row" style="padding-top:1rem"><button class="form-buttom swan-spider-tap" type="warn" style="margin-left:20%;width:60%;padding-top:3px;margin:auto;font-size:3.466666666666667vw;background-color:#B1000E" on-bindtap="eventHappen(\'tap\', $event, \'getTrips\', \'\', \'bind\')">获取行程</button></view></view><view style="border-bottom: 8px solid #f8f8f8;padding:2.1333333333333333vw 4.266666666666667vw 0vw 4.266666666666667vw" s-if="{{otherTicketList.length >0}}"><view class="form-row" style="padding:0px"><view class="am-u-sm-1"><image src="https://m.airchina.com.cn/ac/WeChat_Image/ic_segment.png" mode="aspectFill" style="width:17px;height:17px;" /></view><view class="am-u-sm-11"><text class="am-padding-left-xs" style="font-weight: 700">{{otherName}}</text></view></view><view class="form-view flex-wrp" style="flex-direction:column;padding:0px"><view class="am-u-sm-12 am-padding-vertical-xs am-line swan-spider-tap" s-for="ticket, index in otherTicketList" s-for-index="index" s-for-item="ticket" data-strindex="{{ticket.index}}" data-flag="other" data-ticketNumber="{{ticket.ticketNumber}}" data-couponNumber="{{ticket.couponNumber}}" data-departureAirportCode="{{ticket.departureAirportCode}}" data-arrivalAirportCode="{{ticket.arrivalAirportCode}}" on-bindtap="eventHappen(\'tap\', $event, \'flightDetail\', \'\', \'bind\')"><view class="clearfix"><view class="am-u-sm-7"><view class="am-text-truncate" style="padding-bottom: 0.3rem;"><text class="am-text-danger">{{ticket.carrierAirlineCode}}{{ticket.carrierFlightNumber}}</text><text class="am-padding-left-xs">{{ticket.strOperatingAirlineCode}}</text></view><view class="am-text-truncate" style="padding-bottom: 0.3rem;"><text style="font-weight: 700">{{ticket.departureTime}} {{ticket.strDepartureAirportCode}} {{ticket.departureTerminal == "--" ? "" : ticket.departureTerminal}}</text></view><view class="am-text-truncate"><text >{{ticket.arrivalTime}} {{ticket.strArrivalAirportCode}} {{ticket.arrivalTerminal == "--" ? "" : ticket.arrivalTerminal}}</text></view></view><view class="am-u-sm-5"><view class="am-text-truncate am-text-right" style="padding-bottom: 0.3rem;"><text style="color: #999;">{{ticket.departureDate}} {{ticket.strDepartureDate}}</text></view><view class="am-text-truncate am-text-right am-padding-top-sm"><text class="am-text-danger">{{ticket.strCouponStatus}}</text></view></view></view></view></view></view><view class="am-dialog {{ showDialog1 == \'1\' ? \'am-dialog-show\' : \'\' }}"><view class="am-dialog-mask" /><view class="am-dialog-container-top am-padding-vertical-xs" style="margin-top:35%;"><view class="form-row am-line am-margin-horizontal-sm"><view class="am-u-sm-3">手机号</view><view class="form-row-content am-u-sm-9"><input name="input" class="input" placeholder-class="input-placeholder-left" value="{{phone}}" placeholder="请输入手机号" maxlength="11" on-bindinput="eventHappen(\'input\', $event, \'changePhone\', \'\', \'bind\')" /></view></view><view class="form-row am-line am-margin-horizontal-sm"><view class="am-u-sm-3">验证码</view><view class="form-row-content am-u-sm-5"><input name="input" class="input" placeholder-class="input-placeholder-left" value="{{vericode1}}" placeholder="验证码" maxlength="6" on-bindinput="eventHappen(\'input\', $event, \'changeVericode1\', \'\', \'bind\')" /></view><view class="am-u-sm-4"><button class="form-buttom swan-spider-tap" type="primary" size="mini" style="width: 100%;font-size:3.466666666666667vw;background-color:#3bb4f2" on-bindtap="eventHappen(\'tap\', $event, \'getKaptcha\', \'\', \'bind\')">{{btnkaptcha}}</button></view></view><view class="form-row am-margin-horizontal-sm"><button class="form-buttom swan-spider-tap" type="warn" style="margin-left:20%;width:60%;padding-top:3px;margin:auto;font-size:3.466666666666667vw;background-color:#B1000E" on-bindtap="eventHappen(\'tap\', $event, \'confirmBtn\', \'\', \'bind\')">确定</button></view></view></view>',isComponent:!1,componentPath:"pages/rescheduled/rescheduled/rescheduled.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));