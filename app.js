// https://ps-react-curriculum.herokuapp.com/308H/12/lab/
// R-ALAB 308H.12.1 - DOM Manipulation (Part One)


const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');


// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');


// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


// Iterate over the entire menuLinks array
menuLinks.forEach(function(link) {
    var linkEl = document.createElement('a');
    linkEl.href = link.href;
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });

