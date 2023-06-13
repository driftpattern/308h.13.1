// https://ps-react-curriculum.herokuapp.com/308H/13/lab/
// R-ALAB 308H.13.1 - DOM Manipulation (Part Two)


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


// Select and cache the <header> element
const headerEl = document.querySelector('header');
const navEl = document.createElement('nav');
navEl.id = 'sub-menu';
headerEl.appendChild(navEl);


// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Updated menuLinks array
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];




// Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = Array.from(topMenuEl.querySelectorAll('a'));

// Declare a global showingSubMenu variable and initialize it to false.
let showingSubMenu = false;

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(event) {
  // Call the event object's preventDefault() method.
  event.preventDefault();

  // Immediately return if the element clicked was not an <a> element.
  if (!event.target.matches('a')) {
    return;
  }

  // Check if the clicked <a> link has a class of active.
  if (event.target.classList.contains('active')) {
    // Remove the active class from the clicked <a> element.
    event.target.classList.remove('active');
    // Set the showingSubMenu to false.
    showingSubMenu = false;
    // Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = '0';
    // Return to exit the handler.
    return;
  }

  // Remove a class name of active from each <a> element in topMenuLinks.
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });

  // Add a class name of active to the <a> element that was clicked.
  event.target.classList.add('active');

  // Check if the clicked <a> element's "link" object within menuLinks has a subLinks property.
  const linkObject = menuLinks.find(function(link) {
    return link.text === event.target.textContent;
  });

  if (linkObject && linkObject.subLinks) {
    // Set showingSubMenu to true if the "link" object has a subLinks property.
    showingSubMenu = true;
    // Call the buildSubMenu function passing the subLinks array for the clicked <a> element.
    buildSubMenu(linkObject.subLinks);
    // Set the CSS top property of subMenuEl to 100%.
    subMenuEl.style.top = '100%';
  } else {
    // Set showingSubMenu to false if the "link" object does not have a subLinks property.
    showingSubMenu = false;
    // Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = '0';
  }

  // Prevent the default action of the click event.
  event.preventDefault();
});

// Build the submenu based on the subLinks array
function buildSubMenu(subLinks) {
  // Clear the contents of subMenuEl.
  subMenuEl.innerHTML = '';

  // Iterate over the subLinks array passed as an argument.
  subLinks.forEach(function(link) {
    // Create an <a> element.
    const subLink = document.createElement('a');
    // Add an href attribute with its value set to the href property of the "link" object.
    subLink.setAttribute('href', link.href);
    // Set the new element's content to the value of the text property of the "link" object.
    subLink.textContent = link.text;
    // Append the new element to the subMenuEl element.
    subMenuEl.appendChild(subLink);
  });
}





// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function(event) {
  // Call the event object's preventDefault() method.
  event.preventDefault();

  // Immediately return if the element clicked was not an <a> element.
  if (!event.target.matches('a')) {
    return;
  }

  // Log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent);

  // Set showingSubMenu to false.
  showingSubMenu = false;
  // Set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = '0';

  // Remove the class name of active from each <a> element in topMenuLinks.
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });

  // Update the contents of mainEl to the contents of the <a> element clicked within subMenuEl.
  if (event.target.textContent === 'ABOUT') {
    mainEl.innerHTML = '<h1>About</h1>';
  } else {
    mainEl.innerHTML = '<h1>' + event.target.textContent + '</h1>';
  }
});

// Update the contents of mainEl to the provided content.
function updateMainContent(content) {
  mainEl.innerHTML = content;
}
