var _sjsSupporter={compiler:!1};window.define("pages/register/registerNew/registerNew.swan",(function(require,modulesExports){var componentUsingComponentMap={"components/myModal/myModal.swan":["modal"],"components/header/header.swan":["header"]},componentUsingComponentMapInPlugin={},componentGenerics={};function processTemplateModule(filterTemplateArrs,filterModule){eval(filterModule);var modules={},templateFiltersObj={};return filterTemplateArrs&&filterTemplateArrs.forEach((function(element){var filterName=element.filterName,func=element.func,module=element.module;modules[module]=eval(module),templateFiltersObj[filterName]=function(){var e;return(e=modules[module])[func].apply(e,arguments)}})),templateFiltersObj}var createTemplateComponent=function(e){var n=Object.create(null),t=Object.create(null),i=JSON.parse("[]"),a={};i.length&&(a=processTemplateModule(i,""));var s=san.defineComponent({components:t,template:'<swan-template data-origin-name="step3"><view class="stepClass"><template s-if="{{!needParentMemberNum}}"><view class="title1">登录账户</view><view class="inputLine" style="color:#9D9D9D">{{phoneNum}}\n      </view></template><view class="title1">设置密码</view><view class="inputLine" style="justify-content:space-between"><input placeholder="请设置6位数字密码" value="{{pin}}" maxlength="6" placeholder-class="holderClass" type="number" password="{{!showPass}}" style="width:80%" on-bindinput="eventHappen(\'input\', $event, \'pinInput\', \'\', \'bind\')" on-bindblur="eventHappen(\'blur\', $event, \'pinBlur\', \'\', \'bind\')" /></view><template s-if="{{needParentMemberNum}}"><view class="title1">关联监护人账号</view><view class="inputLine" style="justify-content:space-between"><input placeholder="请输入会员卡号" value="{{guardianAccountNum}}" maxlength="12" placeholder-class="holderClass" type="number" style="width:80%" on-bindinput="eventHappen(\'input\', $event, \'guardianAccountNumInput\', \'\', \'bind\')" /></view><view class="title1">请监护人输入密码</view><view class="inputLine" style="justify-content:space-between"><input placeholder="请输入6位数字密码" value="{{guardianAccountPin}}" maxlength="6" placeholder-class="holderClass" type="number" password="{{true}}" style="width:80%" on-bindinput="eventHappen(\'input\', $event, \'guardianAccountPinInput\', \'\', \'bind\')" /></view></template><template s-if="{{personShow==true}}"><view class="title1">推荐人</view><input placeholder-class="holderClass" type="number" value="{{submitPerson}}" placeholder="请输入推荐人工号" maxlength="10" class="inputLine" on-bindblur="eventHappen(\'blur\', $event, \'personIdBlur\', \'\', \'bind\')" on-bindinput="eventHappen(\'input\', $event, \'personIdInput\', \'\', \'bind\')" /></template><template s-if="{{needParentMemberNum}}"><view class="privacyView">温馨提示：未满14周岁未成年人注册入会，需要得到您的监护人同意并关联您的监护人账户。\n      </view><button class="loginBtn {{pin.length===6&&guardianAccountNum&&guardianAccountPin.length===6?\'\':\'disable\'}} swan-spider-tap" hover-class="loginHover" hover-stay-time="100" on-bindtap="eventHappen(\'tap\', $event, pin.length===6&&guardianAccountNum&&guardianAccountPin.length===6?\'stepTap\':\'\', \'\', \'bind\')">注册</button></template><template s-else><button class="loginBtn {{pin.length===6?\'\':\'disable\'}} swan-spider-tap" hover-class="loginHover" hover-stay-time="100" on-bindtap="eventHappen(\'tap\', $event, pin.length!=6?\'\':\'stepTap\', \'\', \'bind\')">注册</button></template></view></swan-template>',filters:Object.assign({},a),_smartJs:smartJsMap,inited:function(){var e=this,n=function(n){for(var t in n)e.data.set(t,n[t])};n(this.data.get("data")),this.watch("data",n)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});n["template-36129a68"]=s;var p=JSON.parse("[]"),l={};p.length&&(l=processTemplateModule(p,""));var c=san.defineComponent({components:t,template:'<swan-template data-origin-name="step2"><view class="stepClass"><view class="title1">国家/地区</view><view class="inputLine swan-spider-tap" style="justify-content:space-between" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{country.name}}</text><image class="am-fr" style="width: 7px;height: 13px;margin-top: 5px;" src="https://m.airchina.com.cn/ac/assets/iN/account/icon_coupon_zhankai.png" mode="aspectFit" /></view><view class="twoTitle"><view class="title1">中文姓</view><view class="title1">拼音/英文姓</view></view><view class="twoTitle"><view class="inputLine"><input value="{{cnLastName}}" placeholder="只输姓,例:张" maxlength="20" placeholder-class="holderClass" on-bindblur="eventHappen(\'blur\', $event, \'checkChinese\', \'\', \'bind\')" on-bindinput="eventHappen(\'input\', $event, \'cnLastNameInput\', \'\', \'bind\')" /></view><view class="inputLine"><input placeholder="请输入拼音/英文姓" maxlength="20" placeholder-class="holderClass" value="{{lastName}}" on-bindinput="eventHappen(\'input\', $event, \'lastNameInput\', \'\', \'bind\')" on-bindblur="eventHappen(\'blur\', $event, \'checkEnglish\', \'\', \'bind\')" /></view></view><view class="twoTitle"><view class="title1">中文名</view><view class="title1">拼音/英文名</view></view><view class="twoTitle"><view class="inputLine"><input value="{{cnFirstName}}" placeholder="只输名,例:三" maxlength="20" placeholder-class="holderClass" on-bindblur="eventHappen(\'blur\', $event, \'checkChinese\', \'\', \'bind\')" on-bindinput="eventHappen(\'input\', $event, \'cnFirstNameInput\', \'\', \'bind\')" /></view><view class="inputLine"><input placeholder="请输入拼音/英文名" maxlength="20" placeholder-class="holderClass" value="{{firstName}}" on-bindinput="eventHappen(\'input\', $event, \'firstNameInput\', \'\', \'bind\')" on-bindblur="eventHappen(\'blur\', $event, \'checkEnglish\', \'\', \'bind\')" /></view></view><view class="title1">证件类型</view><picker class="pickerItem swan-spider-tap" value="{{IndentityIndex}}" range-key="{{\'text\'}}" range="{{Indentitys}}" on-bindchange="eventHappen(\'change\', $event, \'IndentityChange\', \'\', \'bind\')"><view class="inputLine" style="justify-content:space-between"><view class="pickerText">{{Indentitys[IndentityIndex].text}}</view><image class="am-fr" style="width: 7px;height: 13px;margin-top: 5px;" src="https://m.airchina.com.cn/ac/assets/iN/account/icon_coupon_zhankai.png" mode="aspectFit" /></view></picker><view class="title1">证件号</view><view class="inputLine"><label s-if="{{Indentitys[IndentityIndex].text==\'军官证\'}}">军</label><input value="{{indentityNum}}" placeholder="请输入证件号" type="{{indentityType}}" maxlength="20" style="width:{{Indentitys[IndentityIndex].text==\'军官证\'?\'95%\':\'100%\'}}" on-bindinput="eventHappen(\'input\', $event, \'indentityNumInput\', \'\', \'bind\')" on-bindblur="eventHappen(\'blur\', $event, \'checkIndentity\', \'\', \'bind\')" /></view><template s-if="{{Indentitys[IndentityIndex].text!=\'身份证/港澳台居民居住证/户口本\'}}"><view class="twoTitle"><view class="title1">出生日期</view><view class="title1">性别</view></view><view class="twoTitle"><picker mode="date" value="{{birthday}}" style="width:45%;margin-right:5%;" class="swan-spider-tap" on-bindchange="eventHappen(\'change\', $event, \'birthdayChange\', \'\', \'bind\')"><view class="inputLine" style="justify-content:space-between"><view >{{birthday}}</view><image class="am-fr" style="width: 7px;height: 13px;margin-top: 5px;" src="https://m.airchina.com.cn/ac/assets/iN/account/icon_coupon_zhankai.png" mode="aspectFit" /></view></picker><radio-group class="swan-spider-tap" on-bindchange="eventHappen(\'change\', $event, \'genderChange\', \'\', \'bind\')"><radio value="M" checked="{{gender==\'M\'}}" color="#DF3736"><view class="gender">男</view></radio><radio value="F" checked="{{gender==\'F\'}}" color="#DF3736"><view class="gender">女</view></radio></radio-group></view></template><view class="title1">邮箱</view><view class="inputLine"><input value="{{email}}" placeholder="请输入邮箱地址" maxlength="40" style="width:100%" on-bindinput="eventHappen(\'input\', $event, \'emailInput\', \'\', \'bind\')" /></view><view class="inputLine" style="justify-content:space-between"><label >接收促销邮件</label><switch class="switchItem swan-spider-tap" color="#DF3736" on-bindchange="eventHappen(\'change\', $event, \'swithChange1\', \'\', \'bind\')" /></view><view class="inputLine" style="justify-content:space-between"><label >接收促销短信</label><switch class="switchItem swan-spider-tap" color="#DF3736" on-bindchange="eventHappen(\'change\', $event, \'swithChange\', \'\', \'bind\')" /></view><view class="privacyView swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'bindAgreeChange\', \'\', \'bind\')"><image src="{{isAgree? \'/images/checked.png\':\'/images/check.png\'}}" /><label >我已阅读并同意 <label class="register swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'privacyMember\', \'\', \'catch\')">"凤凰知音"条款和条件</label>以及 <label class="register swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'privacyPolicy\', \'\', \'catch\')">国航隐私条款</label></label></view><button class="loginBtn {{step2Disable?\'disable\':\'\'}} swan-spider-tap" hover-class="loginHover" hover-stay-time="100" on-bindtap="eventHappen(\'tap\', $event, step2Disable?\'\':\'stepTap\', \'\', \'bind\')">下一步</button></view></swan-template>',filters:Object.assign({},l),_smartJs:smartJsMap,inited:function(){var e=this,n=function(n){for(var t in n)e.data.set(t,n[t])};n(this.data.get("data")),this.watch("data",n)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});n["template-9b782e40"]=c;var o=JSON.parse("[]"),r={};o.length&&(r=processTemplateModule(o,""));var v=san.defineComponent({components:t,template:"<swan-template data-origin-name=\"step1\"><view class=\"stepClass\"><view class=\"title1\">手机号</view><view class=\"inputLine {{pageActive.phoneNumActive?'inputlineActive':''}}\"><view class=\"phoneCodeView swan-spider-tap\" on-bindtap=\"eventHappen('tap', $event, 'choosePhoneCode', '', 'bind')\"><text >+{{countryCode.num}}</text><image src=\"https://m.airchina.com.cn/ac/assets/iN/xcx/ic_arrow_gray_1.png\" mode=\"aspectFit\" style=\"width: 2.933333333333333vw;height:1.6vw;\" /></view><input class=\"inputBlock\" placeholder=\"请输入手机号\" value=\"{{phoneNum}}\" maxlength=\"20\" placeholder-class=\"holderClass\" type=\"number\" on-bindinput=\"eventHappen('input', $event, 'phoneNumInput', '', 'bind')\" on-bindblur=\"eventHappen('blur', $event, 'phoneNumAbroadCheck', '', 'bind')\" /></view><view class=\"title1\">验证码</view><view class=\"inputLine  {{pageActive.phoneNumCheckActive?'inputlineActive':''}}\"><input class=\"inputBlock\" placeholder=\"请输入验证码\" maxlength=\"6\" placeholder-class=\"holderClass\" value=\"{{phoneNumCheck}}\" on-bindinput=\"eventHappen('input', $event, 'phoneNumCheckInput', '', 'bind')\" on-bindblur=\"eventHappen('blur', $event, 'phoneNumCheckBlur', '', 'bind')\" /><button class=\"getPhone swan-spider-tap\" plain=\"{{true}}\" disabled=\"{{phoneNumCheckContent!='获取验证码'}}\" on-bindtap=\"eventHappen('tap', $event, 'getCheck', '', 'bind')\">{{phoneNumCheckContent}}</button></view><button class=\"loginBtn {{step1Disable?'disable':''}} swan-spider-tap\" hover-class=\"loginHover\" hover-stay-time=\"100\" on-bindtap=\"eventHappen('tap', $event, step1Disable?'':'stepTap', '', 'bind')\">下一步</button></view></swan-template>",filters:Object.assign({},r),_smartJs:smartJsMap,inited:function(){var e=this,n=function(n){for(var t in n)e.data.set(t,n[t])};n(this.data.get("data")),this.watch("data",n)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});return n["template-2e957eb8"]=v,Object.assign(t,e,n),n},filterCustomArr=[],sjsExportsMap={},smartJsMap={},modules={},filtersObj={};modulesExports.exports={componentUsingComponentMap:componentUsingComponentMap,componentUsingComponentMapInPlugin:componentUsingComponentMapInPlugin,componentGenerics:componentGenerics,template:'<header title="注册入会" image-show="{{false}}" on-bindbackAction="eventHappen(\'backAction\', $event, \'backAciton\', \'\', \'bind\')"></header><view class="loginBlock" style="margin-top:{{headerHeight}}px;"><image s-if="{{activeIndex!=0}}" src="https://m.airchina.com.cn/ac/assets/iN/login/icon_air_logo.png" class="logoImg"></image><view class="headerView"><text class="title">注册凤凰知音会员</text><image s-if="{{activeIndex==0}}" class="logo" src="https://m.airchina.com.cn/ac/assets/iN/icon_xm.png"></image><view class="path"><view class="circle {{circle1}}"><image style="width: 21px;height: 21px;" src="https://m.airchina.com.cn/ac/assets/iN/login/icon_yiwancheng.png" s-if="{{circle1==\'circleOver\'}}" /><template s-if="{{circle1!=\'circleOver\'}}">1</template></view><view class="line {{line1Left}}"></view><view class="line {{line1Right}}"></view><view class="circle  {{circle2}}"><image style="width: 21px;height: 21px;" src="https://m.airchina.com.cn/ac/assets/iN/login/icon_yiwancheng.png" s-if="{{circle2==\'circleOver\'}}" /><template s-if="{{circle2!=\'circleOver\'}}">2</template></view><view class="line {{line2Left}}"></view><view class="line {{line2Right}}"></view><view class="circle {{activeIndex==2?\'circleActive\':\'\'}}">3</view></view><template-2e957eb8 data="{{{countryCode,activeIndex,pageActive,step1Disable,phoneNumCheck,phoneNum,phoneNumCheckContent,captchaShow,captchaReload,options}}}" s-if="{{activeIndex==0}}" data-origin-name="step1" /><template-9b782e40 data="{{{activeIndex,country,cnLastName,lastName,cnFirstName,firstName,Indentitys,IndentityIndex,indentityNum,indentityType,birthday,gender,noProSMSFlag,isAgree,step2Disable}}}" s-elif="{{activeIndex==1}}" data-origin-name="step2" /><template-36129a68 data="{{{needParentMemberNum,guardianAccountNum,guardianAccountPin,phoneNum,pin,showPass,submitPerson,personShow}}}" s-else data-origin-name="step3" /></view></view><modal show="{{modalShow}}" title="温馨提示" msg="{{msg}}" cancel-show="{{false}}"></modal><view class="modelBack" s-if="{{ checkVisible }}"><view class="changeBox"><view class="changeHeader"><image src="https://m.airchina.com.cn/ac/assets/iN/checkIns/icon_close_dialog.png" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleCheckPop\', \'\', \'bind\')" /></view><view class="form"><view >图片验证码</view><view class="inputLine1" style="margin-bottom:0"><input class="inputBlock" type="text" placeholder="请输入" maxlength=\'4\' value="{{inputYzm}}" name="phone" on-bindinput="eventHappen(\'input\', $event, \'onInput\', \'\', \'bind\')" /><image class="common-verify-code-img swan-spider-tap" src="https://m.airchina.com.cn:9061/up/check/image?key={{key}}" mode="widthFix" on-bindtap="eventHappen(\'tap\', $event, \'initKey\', \'\', \'bind\')" /></view></view><view style="{{inputYzm ? \'\' : \'opacity: .5\'}};margin-top:5.333333333333333vw" class="btn swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handlCheckOK\', \'\', \'bind\')">确认</view></view></view>',isComponent:!1,componentPath:"pages/register/registerNew/registerNew.swan",customComponentCss:[],createTemplateComponent:createTemplateComponent,filters:Object.assign({},filtersObj),initialFilters:filterCustomArr,pageModules:modules,extProperties:{_smartJs:smartJsMap}}}));