// ==UserScript==
// @name        Labelcloud Zoom
// @namespace   Violentmonkey Scripts
// @icon        data:image/png;base64,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
// @version     1.0.0
//
// @match       https://labelcloud.scandit.com/evaluate/*
// @grant       none
//
// @author      -
// @description
// ==/UserScript==

function onHover(event) {
  const canvas = event.currentTarget;
  const card = event.currentTarget.closest('.card-body');
  const rect = canvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width);
  const y = ((event.clientY - rect.top) / rect.height);
  const viewport = card.querySelector('.zoom-viewport');
  const scrollableHeight = viewport.scrollHeight - viewport.clientHeight/2;
  const scrollableWidth = viewport.scrollWidth - viewport.clientWidth/2;
  console.log(scrollableHeight * y, scrollableWidth * x);
  viewport.scrollTo({
    top: scrollableHeight * y,
    left: scrollableWidth * x,
    behavior: 'smooth'
  });
}


const setupHover = () => {
  const cards = document.querySelectorAll('.image-container .card-body:has(img)');
  cards.forEach((card) => {

    card.style.display = "flex";

    const zoom_viewport = document.createElement('div');
    zoom_viewport.className = "zoom-viewport";
    zoom_viewport.style.height = '400px';
    zoom_viewport.style.width = '400px';
    zoom_viewport.style.overflow = "scroll";
    zoom_viewport.style.pointerEvents = "none";

    const original_image = card.querySelector('img');
    const zoom_image = document.createElement('img');
    zoom_image.src = original_image.src;

    zoom_viewport.appendChild(zoom_image);
    card.appendChild(zoom_viewport);

    const canvas = card.querySelector('canvas:last-child')
    canvas.addEventListener('mousemove', onHover);

  });
};

const checkInterval = setInterval(() => {
  if (document.querySelectorAll('.card-body').length > 0) {
    setupHover();
    clearInterval(checkInterval);
  }
}, 2000);



