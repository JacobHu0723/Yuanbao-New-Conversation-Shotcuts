// ==UserScript==
// @name         Tencent Yuanbao New Conversation Shorcuts
// @namespace    https://github.com/JacobHu0723/Yuanbao-New-Conversation-Shotcuts
// @version      1.1.0
// @description  Press Ctrl+Q to create a new conversation!
// @author       Jacob Hu
// @match        https://yuanbao.tencent.com/*
// @icon         https://raw.githubusercontent.com/JacobHu0723/Yuanbao-New-Conversation-Shotcuts/refs/heads/master/yuanbao.png
// @downloadURL  https://raw.githubusercontent.com/JacobHu0723/Yuanbao-New-Conversation-Shotcuts/refs/heads/master/Tencent-Yuanbao-New-Conversation-Shorcuts.user.js
// @updateURL    https://raw.githubusercontent.com/JacobHu0723/Yuanbao-New-Conversation-Shotcuts/refs/heads/master/Tencent-Yuanbao-New-Conversation-Shorcuts.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && (event.key === 'q' || event.key === 'Q')) {
            event.preventDefault(); // 阻止默认行为
            var new_con_btn = document.getElementsByClassName("yb-icon iconfont-yb icon-yb-ic_newchat_20")[0];
            new_con_btn.click();
        }
    });
})();
