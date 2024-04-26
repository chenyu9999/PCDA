"use strict";window.skeleton.tpl='<html >\n<header >\n    <style >\n        /* 扫光 */\n        @keyframes seepmove {\n            0% {\n                -webkit-transform: translateX(-25.12vw);\n                transform: translateX(-25.12vw);\n            }\n\n            100% {\n                -webkit-transform: translateX(100vw);\n                transform: translateX(100vw);\n            }\n        }\n        .light {\n            transform: translateX(-25.12vw);\n            position: absolute;\n            left: 0;\n            top: 0;\n            height: 100%;\n            width: 25.12vw;\n            opacity: 0.5;\n            background: linear-gradient(to right, rgba(255,255,255,0), #ffffff, rgba(255,255,255,0));\n\n            -webkit-animation: 1.5s seepmove ease-in-out infinite normal;\n            animation: 1.5s seepmove ease-in-out infinite normal;\n        }\n        html, body {margin: 0; padding: 0; font-size: 0.081vw;}\n        .bg-gray {background-color: #F5F5F5;}\n        .border-gray {border: 0.081vw solid #E6E6E6;}\n        .mt-30 {margin-top: 2.42vw;}\n        .mt-32 {margin-top: 2.58vw;}\n        .mt-45 {margin-top: 3.62vw;}\n        .mt-48 {margin-top: 3.86vw;}\n        .mt-60 {margin-top: 4.83vw;}\n        .mt-64 {margin-top: 5.15vw;}\n        .mt-100 {margin-top: 8.05vw;}\n        .mt-185 {margin-top: 14.90vw;}\n        .ml-28 {margin-left: 2.25vw;}\n        .ml-30 {margin-left: 2.42vw;}\n        .ml-52 {margin-left: 4.19vw;}\n        .ml-79 {margin-left: 6.36vw;}\n\n        .screen {\n            position: fixed;\n            width: 100vw;\n            height: 100vh;\n            overflow: hidden;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background-color: #FFF;\n            z-index: 8888;\n        }\n        .screen * {box-sizing: border-box;}\n\n        .skeleton {\n            width: 100vw;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n        .skeleton * {background-color: #F5F5F5;}\n\n        .icon {\n            width: 21.50vw;\n            height: 21.50vw;\n            border-radius: 4.35vw;\n        }\n\n        .title {\n            width: 17.39vw;\n            height: 4.35vw;\n            border-radius: 0.48vw;\n        }\n\n        .short-line {\n            width: 38.65vw;\n            height: 3.22vw;\n            border-radius: 0.48vw;\n        }\n        \n        .long-btn {\n            width: 91.79vw;\n            height: 10.63vw;\n            border-radius: 5.31vw;\n        }\n\n        .split-line {\n            width: 97.75vw;\n            height: 1.93vw;\n        }\n\n        .container {\n            background-color: #FFF;\n            white-space: nowrap;\n            width: 100vw;\n            overflow: hidden;\n        }\n\n        .container-block {\n            display: inline-block;\n            width: 37.04vw;\n            height: 65.70vw;\n            border-radius: 2.90vw;\n        }\n\n        .text-lines {\n            background-color: #FFF;\n        }\n\n        .text-line {\n            width: 91.79vw;\n            height: 3.86vw;\n            border-radius: 0.48vw;\n        }\n\n    </style>\n</header>\n\n<body >\n    <div class="screen">\n        <div class="light"></div>\n        <div class="skeleton">\n            <div class="icon border-gray mt-185"></div>\n            <div class="title mt-48"></div>\n            <div class="short-line mt-32"></div>\n            <div class="short-line mt-30"></div>\n            <div class="long-btn mt-100 ml-52"></div>\n            <div class="split-line mt-60 ml-28"></div>\n            <div class="container mt-64 ml-79">\n                <div class="container-block ml-30"></div>\n                <div class="container-block ml-30"></div>\n                <div class="container-block ml-30"></div>\n            </div>\n            <div class="text-lines mt-45">\n                <div class="text-line mt-30 ml-52"></div>\n                <div class="text-line mt-30 ml-52"></div>\n                <div class="text-line mt-30 ml-52"></div>\n                <div class="text-line mt-30 ml-52"></div>\n                <div class="text-line mt-30 ml-52"></div>\n                <div class="text-line mt-30 ml-52"></div>\n                <div class="text-line mt-30 ml-52"></div>\n                <div class="text-line mt-30 ml-52"></div>\n                <div class="text-line mt-30 ml-52"></div>\n                <div class="text-line mt-30 ml-52"></div>\n            </div>\n        </div>\n    </div>\n</body>\n\n</html>';