// ==UserScript==
// @name         Usunięcie Sidebara
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Wypierdalanie sidebara z planogramu
// @author       Ty
// @match        https://labelcloud.scandit.com/evaluate/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Funkcja usuwająca
    const removeSidebar = () => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.remove();
            console.log('Sidebar poleciał!');
        }
    };

    // 1. Próba natychmiastowa
    removeSidebar();

    // 2. Obserwator (na wypadek, gdyby skrypt strony go dorysował później)
    const observer = new MutationObserver((mutations) => {
        removeSidebar();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
