// ==UserScript==
// @name         Escape The Digital Abyss
// @namespace    https://mrbhanukab.github.io/EscapeTheDigitalAbyss/
// @version      2.0
// @description  Encourages users to reconsider spending their time on time-wasting websites.
// @author       Bhanuka Bandara
// @icon         https://img.icons8.com/ios-filled/500/000000/clock--v3.png
// @supportURL   https://github.com/mrbhanukab/EscapeTheDigitalAbyss
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

    // Define contentDiv based on the website version
    let contentDiv;
    if (window.location.hostname === 'm.youtube.com') {
        contentDiv = document.getElementById('app');
    } else {
        contentDiv = document.getElementById('content');
    }
    contentDiv.style.display = 'none';

        // Create a div element for containing the elements
    const containerDiv = document.createElement('div');
    containerDiv.style.color = '#fff';
    containerDiv.style.zIndex = '1000';
    containerDiv.style.position = 'absolute';
    containerDiv.style.display = 'flex';
    containerDiv.style.flexDirection = 'column';
    containerDiv.style.height = '100vh';
    containerDiv.style.width = '100vw';
    containerDiv.style.justifyContent = 'center';
    containerDiv.style.alignItems = 'center';
    containerDiv.style.gap = '2rem';
    containerDiv.style.background = '#3f51b5';
    document.body.insertBefore(containerDiv, document.body.firstChild);

    // Create elements to be shown to the user inside the container div
    const h1 = document.createElement('h1');
    h1.textContent = 'Escape The Digital Abyss';
    containerDiv.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = "Don't waste time here, friend! Let's do something better instead! Are you here for something useful? Alright, take control. But remember, as soon as your work is complete, leave this place. It can be dangerous to linger.";
    p.style.width = '75%';
    p.style.textAlign = "center";
    containerDiv.appendChild(p);

    // Create a button element named "Take Control"
    const takeControlButton = document.createElement('button');
    takeControlButton.setAttribute('aria-label', 'Take Control (Not Recommended)');
    takeControlButton.setAttribute('title', '');
    takeControlButton.style.position = 'relative';
    takeControlButton.style.overflow = 'hidden';
    takeControlButton.style.cursor = 'pointer';
    takeControlButton.style.outline = 'none';
    takeControlButton.style.border = 'none';
    takeControlButton.style.borderRadius = '2px';
    takeControlButton.style.backgroundColor = '#ff8983';
    takeControlButton.style.textTransform = 'none';
    takeControlButton.style.fontWeight = '500';
    takeControlButton.style.fontSize = '14px';
    takeControlButton.style.lineHeight = '36px';
    takeControlButton.style.padding = '0px 16px';
    takeControlButton.style.marginTop = '1rem';
    takeControlButton.style.boxShadow = 'none';
    takeControlButton.style.transition = 'background-color 0.2s, box-shadow 0.2s';
    takeControlButton.innerHTML = '<span class="yt-core-attributed-string yt-core-attributed-string--white-space-no-wrap" role="text">Take Control (Not Recommended)</span>';
    containerDiv.appendChild(takeControlButton);

    // Function to handle button click
    function handleClick() {
        // Remove the CSS rule to display all elements
        contentDiv.style.display = 'inline';

        // Remove the elements shown to the user
        containerDiv.removeChild(h1);
        containerDiv.removeChild(p);
        containerDiv.removeChild(takeControlButton);
        document.body.removeChild(containerDiv);
        // Stop showing the warning interval
        //clearInterval(intervalID);
    }

    // Add event listener to the button
    takeControlButton.addEventListener('click', handleClick);
})();
