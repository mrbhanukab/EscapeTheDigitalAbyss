// ==UserScript==
// @name         Escape The Digital Abyss 
// @namespace    https://mrbhanukab.github.io/EscapeTheDigitalAbyss/
// @version      1.0
// @description  Encourages users to reconsider spending their time on time-wasting websites.
// @author       Bhanuka Bandara
// @match        https://*.youtube.com/*
// @match        https://twitter.com/*
// @match        https://x.com/*
// @match        https://rumble.com/*
// @match        https://*.tiktok.com/*
// @match        https://*.facebook.com/*
// @match        https://*.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let promptCount = 0;
    const maxPrompts = 5;

    function showWarning() {
        const strongMessageSites = ["youtube.com", "tiktok.com", "facebook.com", "instagram.com"];
        const isStrongMessageSite = strongMessageSites.some(site => window.location.hostname.includes(site));

        // Check for YouTube, TikTok, Facebook, and Instagram.
        if (isStrongMessageSite && (window.location.pathname === '/' || window.location.pathname.startsWith('/user/'))) {
            if (confirm("Hey mother fucker, what you doing man? Are You Crazy to waste your fucking time watching videos of bunch of idiots talking nonsense or watching half-naked poor women dance in front of a camera? Fucking Hell, click OK to get out of here.")) {
                window.location.href = "https://duckduckgo.com";
                return; // Exit the function to prevent further prompts
            }
        }
        // Check other sites
        else if (window.location.hostname.includes("twitter.com") ||
                 window.location.hostname.includes("x.com") ||
                 window.location.hostname.includes("rumble.com")) {
            if (confirm("Remember not to waste your time! Do you really want to continue browsing?")) {
                window.location.href = "https://duckduckgo.com";
                return; // Exit the function to prevent further prompts
            }
        }

        promptCount++;

        // If user has been prompted 5 times, stop showing the dialog
        if (promptCount >= maxPrompts) {
            clearInterval(intervalID);
        }
    }

    // Start the interval to show the warning every 5 seconds
    const intervalID = setInterval(showWarning, 5000);
})();
