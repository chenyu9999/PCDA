!function(){var e=window.swanVersion||0;window.errorMsg=window.errorMsg||[],function(){if(!window.require||!window.define){var e={};window.require=function(n){if("string"!=typeof n)throw new Error("require args must be a string");var t=e[n];if(!t)throw new Error('module "'+n+'" is not defined');if(1===t.status){var r={exports:{}},o=(0,t.factory)(require,r,r.exports,define);t.exports=r.exports||o,t.status=2}return t.exports},window.define=function(n,t,r){if("string"!=typeof n)throw new Error("define args 0 must be a string");var o=t instanceof Array?t:[],s="function"==typeof t?t:r;e[n]||(e[n]={status:1,dependents:o,factory:s})}}}();(function(e,n){if(0===n)return 1;e=e.split("."),n=n.split(".");for(var t=Math.max(e.length,n.length);e.length<t;)e.push("0");for(;n.length<t;)n.push("0");for(var r=0;r<t;r++){var o=parseInt(e[r],10),s=parseInt(n[r],10);if(o>s)return 1;if(o<s)return-1}return 0})("3.30.0",e)>=0&&new Promise((function(e,n){var t=window.pageInfo.appPath,r=document.createElement("script");r.type="text/javascript",r.src=t+"/swan-execute.js",r.onload=function(){e()},r.onerror=n,document.head.appendChild(r)})).then((function(){"function"==typeof window.renderPage&&window.renderPage("pages/swan-news-showcase/index.swan")})).catch((function(e){window.errorMsg.execError=e}))}();var _sjsSupporter={compiler:!1};window.define("pages/swan-news-showcase/index.swan",(function(require,modulesExports){var componentUsingComponentMap=JSON.parse('{"dynamicLib://swan-news-tool/swan-news-showcase":["swan-news-showcase"]}'),componentUsingComponentMapInPlugin=JSON.parse("{}"),componentGenerics=JSON.parse("{}");function processTemplateModule(filterTemplateArrs,filterModule){eval(filterModule);var modules={},templateFiltersObj={};return filterTemplateArrs&&filterTemplateArrs.forEach((function(element){var filterName=element.filterName,func=element.func,module=element.module;modules[module]=eval(module),templateFiltersObj[filterName]=function(){var e;return(e=modules[module])[func].apply(e,arguments)}})),templateFiltersObj}var createTemplateComponent=function(e){var n=Object.create(null),t=Object.create(null);return Object.assign(t,e,n),n},filterCustomArr=JSON.parse("[]"),sjsExportsMap={},smartJsMap={},modules={},filtersObj={};filterCustomArr&&filterCustomArr.forEach((function(element){modules[element.module]=eval(element.module);var func=element.func,module=element.module;filtersObj[element.filterName]=function(){var e;return(e=modules[module])[func].apply(e,arguments)}})),modulesExports.exports={componentUsingComponentMap:componentUsingComponentMap,componentUsingComponentMapInPlugin:componentUsingComponentMapInPlugin,componentGenerics:componentGenerics,template:' <view ><swan-news-showcase home-page-path="pages/advert/index" /></view>',isComponent:!1,size:3084,componentPath:"pages/swan-news-showcase/index.swan",customComponentCss:[],createTemplateComponent:createTemplateComponent,filters:Object.assign({},filtersObj),initialFilters:filterCustomArr,pageModules:modules,extProperties:{_smartJs:smartJsMap}}}));