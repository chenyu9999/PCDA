var _sjsSupporter={compiler:!1};window.define("pages/passWord/passWord.swan",(function(e,n){n.exports={componentUsingComponentMap:{"components/header/header.swan":["header"],"components/myModal/myModal.swan":["modal"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:"<header title=\"忘记密码\" image-show=\"{{false}}\" on-bindbackAction=\"eventHappen('backAction', $event, 'backAciton', '', 'bind')\"></header><view class=\"passView\" style=\"top:{{headerHeight}}px;height:calc(100% - {{headerHeight}}px)\"><image src=\"https://m.airchina.com.cn/ac/assets/iN/login/icon_air_logo.png\" class=\"logoImg\"></image><view class=\"textView\"><view >忘记登录密码？</view><view >输入您的注册手机号即可找回</view><view >手机号</view><view class=\"inputLine1 {{userlineActive?'lineActive':''}}\"><view class=\"country swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, 'chooseCountry', '', 'bind')\"><text >+{{countryCode.num}}</text><van-icon name=\"arrow-down\" size=\"28rpx\" custom-class=\"arrowDown\" /></view><input class=\"inputBlock1\" placeholder=\"请输入手机号\" value=\"{{userName}}\" maxlength=\"11\" placeholder-class=\"holderClass\" type=\"number\" on-bindinput=\"eventHappen('input', $event, 'userNameInput', '', 'bind')\" on-bindblur=\"eventHappen('blur', $event, 'userNameBlur', '', 'bind')\" /></view><view >验证码</view><view class=\"inputLine1  {{passlineActive?'lineActive':''}}\" style=\"margin-bottom:0\"><input class=\"inputBlock\" placeholder=\"请输入验证码\" value=\"{{userPass}}\" maxlength='6' type='number' placeholder-class=\"holderClass\" on-bindinput=\"eventHappen('input', $event, 'userPassInput', '', 'bind')\" on-bindblur=\"eventHappen('blur', $event, 'userPassBlur', '', 'bind')\" /><button class=\"getCode swan-spider-tap\" plain=\"{{true}}\" disabled=\"{{phoneNumCheckContent!='获取验证码'}}\" on-bindtap=\"eventHappen('tap', $event, 'getSMS', '', 'bind')\">{{phoneNumCheckContent}}</button></view><view style=\"background-color:{{(userName!='' && userPass != '')?'#DF3736':'#F9D7D7'}}\" class=\"swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, (userName!='' && userPass != '') ?'userCheck':'', '', 'bind')\">下一步</view><view class=\"swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, 'showOther', '', 'bind')\">无法使用手机号码？</view><view >温馨提示</view><view >如果无法完成验证，或是境外邮箱注册用户，请致电95583联系客服找回密码。</view></view></view><view class=\"modelBack\" s-if=\"{{ checkVisible }}\"><view class=\"changeBox\"><view class=\"changeHeader\"><image src=\"https://m.airchina.com.cn/ac/assets/iN/checkIns/icon_close_dialog.png\" class=\"swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, 'handleCheckPop', '', 'bind')\" /></view><view class=\"form\"><view >图片验证码</view><view class=\"inputLine1\" style=\"margin-bottom:0\"><input class=\"inputBlock\" type=\"text\" placeholder=\"请输入\" maxlength='4' value=\"{{inputYzm}}\" name=\"phone\" on-bindinput=\"eventHappen('input', $event, 'onInput', '', 'bind')\" /><image class=\"common-verify-code-img swan-spider-tap\" src=\"https://m.airchina.com.cn:9061/up/check/image?key={{key}}\" mode=\"widthFix\" on-bindtap=\"eventHappen('tap', $event, 'initKey', '', 'bind')\" /></view></view><view style=\"{{inputYzm ? '' : 'opacity: .5'}};margin-top:5.333333333333333vw\" class=\"btn swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, 'handlCheckOK', '', 'bind')\">确认</view></view></view><view class=\"modelBack\" s-if=\"{{ otherVisible }}\"><view class=\"changeBox\"><view class=\"otherform\"><view data-type=\"1\" class=\"swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, 'goOther', '', 'bind')\">银联卡认证</view><view class=\"swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, 'goOther', '', 'bind')\">取消</view></view></view></view>",isComponent:!1,componentPath:"pages/passWord/passWord.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));