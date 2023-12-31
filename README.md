# PCDA

这是小程序缺陷配置（PCDA）问题自动化分析工具的源代码，其中有两个自动化检测工具：
1. 小程序api检测工具：pcdapit.py
2. 问题小程序排查工具：pcdappt.py

## 使用方法
1. 第一步
```
npm install
```
加载配置依赖，然后根据报错缺哪个依赖补充哪个

2. 第二步
```
node wuWxapkg.js <wx_mini_progranm_file_path>
```
运行python脚本，获得检测结果

## 常见问题
```
1. Module build failed: Error: Cannot find module 'escodegen'（本项目已经修复该问题）
```
#### 解决方法：
```
npm i escodegen -S
```
```
2. Error: This Package is unrecognizable, please decrypted every type of file by hand.
```
#### 解决办法：虽然微信小程序的包后缀是.wxapkg，但有一些包的依赖后缀也是.wxapkg，真正的小程序包大小1M左右，而依赖包大小2、3M甚至更多。所以一股脑的反编译.wxapkg 类型的文件可能会报错，遇见这个问题很可能没找对包和位置

```
3. _vd_version_info__ is not defined （本项目已经修复该问题）
```
#### 解决办法： 修改反编译目录下的wuWxss.js文件,修改RunVm方法为

```
function runVM(name,code){

	let wxAppCode={},handle={cssFile:name};

	let tsandbox = {

		__vd_version_info__:"",

		$gwx:GwxCfg.prototype["$gwx"],

		__mainPageFrameReady__:GwxCfg.prototype["$gwx"],

		__wxAppCode__:wxAppCode,

		setCssToHead:cssRebuild.bind(handle)

	}		

	let vm = new VM({sandbox:tsandbox});

	vm.run(code);

	for(let name in wxAppCode){

		if(name.endsWith(".wxss")){

			handle.cssFile = path.resolve(frameName,"..",name);

			wxAppCode[name]();

		}	

	}

}
```

## 环境配置 & 参考链接
- https://blog.csdn.net/qq_41139830/article/details/80531802
- https://www.cnblogs.com/wukong8/p/11612470.html
- http://lrdcq.com/me/read.php/66.html

![版本 0.3](https://img.shields.io/badge/版本-0.3-red.svg) ![支持的微信版本 >20180111](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC-%3E=20180111-brightgreen.svg) ![高级特性支持度 0](https://img.shields.io/badge/%E6%94%AF%E6%8C%81-0%25-yellow.svg)

> Wechat App(微信小程序, .wxapkg)解包及相关文件(.wxss, .json, .wxs, .wxml)还原工具

> 欢迎大家使用本程序解包一些开源或经作者授权的小程序包供学习小程序编写或供在电脑端使用小程序或通过研究本项目代码来了解小程序本地运行的部分原理、发现小程序编译时本身的[一些问题](https://github.com/qwerty472123/wxappUnpacker/commit/73580c3afecad8c59e14ea7252dcedd8034e6c3a)（这个或许现在已经修了）...

## 当前功能如下（异常api检测目前是半自动化完成）

- `pcdapit.py` 将协助完成对待测api的顺利执行和执行后getSetting方法的调用以获取到实际配置值。
- `pcdapit.py` 然后自动将实际配置值和标准配置值进行预处理，然后进行比对，返回并报告比对结果。
- `pcdappt.py` 能够自动化的识别目标小程序是否使用了具有PCDA问题的异常api。
- `pcdappt.py` 根据构建抽象语法树，分析语法，能够报告出问题小程序的异常api的使用情况（名称、方法名、上下文等），提高准确率。
- 在使用 `pcdappt.py` 时只需要打开待测小程序，然后启动我们的排查工具即可进行检测。

### wxapkg 包的获取

Android 手机最近使用过的微信小程序所对应的 wxapkg 包文件都存储在特定文件夹下，可通过以下命令查看：

    adb pull /data/data/com.tencent.mm/MicroMsg/{User}/appbrand/pkg

其中`{User}` 为当前用户的用户名，类似于 `2bc**************b65`。

### 另注

小程序源代码获取过程中所有命令上都可以使用`-f`指令来提高一定的并行度，但输出信息会混乱。

如果发现包内文件“缺失”，请先检查解包时是否出现提示`NOTICE: SubPackages exist in this package.`。如存在，请在寻找好分包后，按上文提示操作。（小程序需要访问特定页面；小游戏需要触发特定函数，然后分包才会被下载。）

### 局限（包括但可能不限于以下内容）

- 实现中很多功能基于特定的版本(`wcc-v0.6vv_20180111_fbi`, 且不考虑面向低版本适配)和字符串搜索，所以不能很好的适应各种特殊情况。
- wxml 文件拥有不同于 xml 和 html 文件的字符转义规则，且尚未公开(并非"没有")，因此未能很好的还原相关内容。
- js 文件被压缩后会丢失原始变量名等信息内容无法还原；wxss 文件压缩后的注释也会丢失。
- wxs 文件会将所有的变量如 Math 改为 nv_Math ，这里仅通过字符串替换去除。
- 一些被引用 wxss 文件本身的源文件丢失，因此无法恢复原始目录。
- 有些项目开启了难以复原的`es6转es5`选项，检验本项目结果是否正确时需要关闭项目中的`es6转es5`选项。
- wxml 中一些无法找到相对应 的正向语句的内容无法还原。
- json 中`components`项丢失，仅会标注被其他包引用的自定义组件。

## 依赖

这些 node.js 程序除了自带的 API 外还依赖于以下包:
[cssbeautify](https://github.com/senchalabs/cssbeautify)、[CSSTree](https://github.com/csstree/csstree)、[VM2](https://github.com/patriksimek/vm2)、[Esprima](https://github.com/jquery/esprima)、[UglifyES](https://github.com/mishoo/UglifyJS2/tree/harmony)、[js-beautify](https://github.com/beautify-web/js-beautify)

您需要安装这些包才能正确执行这些程序，为了做到这一点，您可以执行`npm install`；另外如需全局安装这些包可执行以下命令:

    npm install esprima -g
    npm install css-tree -g
    npm install cssbeautify -g
    npm install vm2 -g
    npm install uglify-es -g
    npm install js-beautify -g
    npm install escodegen -g

此外，这些 node.js 程序之间也有一定的依赖关系，比如他们都依赖于 wuLib.js 。


## 参考

这些实现除了参考微信小程序开发文档、 一个开源微信小程序和一些 Issue 提供的 wxapkg 文件解包后的内容以及通过开发者工具编译的一些 wxml 外，还参考了一些 github 上的相关内容的分析( [unwxapkg.py](https://gist.github.com/feix/32ab8f0dfe99aa8efa84f81ed68a0f3e)、[wechat-app-unpack](https://github.com/leo9960/wechat-app-unpack/) )，在此感谢他们。

另外，如果您对本程序的一些具体实现细节感兴趣，可以参考 [DETAILS.md](https://github.com/qwerty472123/wxappUnpacker/blob/master/DETAILS.md) 。

## 关于 Issue 的一些说明

1. Issue 可以发的内容为项目本身的 bug 反馈或问题解决方案（可为文本、可公开访问的链接等形式）。其他内容一律 Close 或 Delete 处理。
2. 所有的 bug 反馈不再作强制格式要求，不过建议按格式来，不然其他人也很难得知具体的问题。当然请对自己在 Issue 中发布的内容负责。
