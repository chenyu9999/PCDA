var _sjsSupporter={compiler:!1};window.define("pages/checkIns/viewBoarding/viewBoarding.swan",(function(e,a){a.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'\n<view class="form-view am-padding-vertical-xs am-line"><view class="am-u-sm-6 am-text-danger">{{boarding.carrFlightNO}} / {{boarding.tourClass}}\n  </view><view class="am-u-sm-6 am-text-right">{{boarding.strOrg}} - {{boarding.strDst}}\n  </view></view><view class="form-view am-padding-vertical-xs am-line"><view class="am-u-sm-4"><view style="color:#c2c2c2">乘机人</view><view class="am-padding-top-xxs">{{boarding.psrName == "" ? boarding.psrEnName : boarding.psrName}}</view></view><view class="am-u-sm-5 am-text-center"><view style="color:#c2c2c2">会员卡号</view><view class="am-padding-top-xxs">{{boarding.cardNo == "" ? "--" : boarding.cardNo}}</view></view><view class="am-u-sm-3 am-text-right"><view style="color:#c2c2c2">会员级别</view><view class="am-padding-top-xxs">{{boarding.level == "" ? "--" : boarding.level}}</view></view></view><view class="form-view am-padding-vertical-xs am-line"><view class="am-u-sm-3"><view style="color:#c2c2c2">出发航站楼</view><view class="am-padding-top-xxs" style="font-weight:800;">{{boarding.fromTerminal}}</view></view><view class="am-u-sm-3"><view style="color:#c2c2c2">登机口</view><view class="am-padding-top-xxs" style="font-weight:800;">{{boarding.boardingGateNumber==\'????\' ? \'待定\':boarding.boardingGateNumber}}</view></view><view class="am-u-sm-3 am-text-center"><view style="color:#c2c2c2">座位号</view><view class="am-padding-top-xxs" style="font-weight:800;"><text style="padding-right: 5px;">{{boarding.seatNO}}</text><image src="https://m.airchina.com.cn/ac/WeChat_Image/icon_cnn_info.png" mode="aspectFill" style="width: 15px;height:15px" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'doAlert\', \'\', \'bind\')" /></view></view><view class="am-u-sm-3 am-text-right"><view style="color:#c2c2c2">登机序号</view><view class="am-padding-top-xxs" style="font-weight:800;">{{boarding.boardingNumber}}</view></view></view><view class="form-view am-padding-vertical-xs am-line"><view class="am-u-sm-6"><view style="color:#c2c2c2">起飞时间</view><view class="am-padding-top-xxs">{{boarding.flightTime}}</view></view><view class="am-u-sm-6 am-text-right"><view style="color:#c2c2c2">含税票价</view><view class="am-padding-top-xxs">{{boarding.totalFare == "" ? "--" : boarding.totalFare}}</view></view></view><view class="am-padding-top-sm" s-if="{{boarding.boardStream != \'\'}}"><canvas style="width:{{sizeWidth}}px;height:{{sizeWidth}}px;margin-left:{{marginLeft}}px;background:#fff;" canvas-id="mycanvas" class="swan-spider-tap" on-bindlongpress="eventHappen(\'longpress\', $event, \'longHandle\', \'\', \'bind\')" /></view><view class="form-view am-padding-vertical-sm"><view class="am-padding-xs">{{prompt}}</view></view><view class="form-row am-padding-vertical-sm"><view class="page-section-btns am-u-sm-12 am-text-center"><view class="am-u-sm-6 am-text-center"><button class="form-buttom swan-spider-tap" type="default" style="padding-top:3px;margin:auto;font-size:3.466666666666667vw;background-color:#eee;color:#000" on-bindtap="eventHappen(\'tap\', $event, \'cancelCheckIn\', \'\', \'bind\')">取消值机</button></view><view class="am-u-sm-6 am-text-center"><button class="form-buttom swan-spider-tap" type="warn" style="padding-top:3px;margin:auto;font-size:3.466666666666667vw;background-color:#B1000E" on-bindtap="eventHappen(\'tap\', $event, \'doOK\', \'\', \'bind\')">完成</button></view></view></view><view class="form-view"><view class="am-u-sm-12 am-text-right"><image src="https://m.airchina.com.cn/ac/WeChat_Image/board_pass_logo.png" mode="aspectFill" style="width: 112px;height:27px" /></view></view>',isComponent:!1,componentPath:"pages/checkIns/viewBoarding/viewBoarding.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));