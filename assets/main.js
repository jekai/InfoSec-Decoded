// sidenav for mobile mode
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false, // remove the 3 dots
  height: 500,
  transition: 500,
  interval: 8000 // 6 seconds
});

// scrollspy
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {});

// parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax, {});

// modal program
const modalProgram = document.querySelector('#program');
M.Modal.init(modalProgram, {});

// modal resources
const modalResources = document.querySelector('#resources');
M.Modal.init(modalResources, {});

const modalElizabeth = document.querySelector('#elizabeth_profile');
M.Modal.init(modalElizabeth, {});

const modalSam = document.querySelector('#sam_profile');
M.Modal.init(modalSam, {});

// and more modal 
const modalMore = document.querySelector('#and_more');
M.Modal.init(modalMore, {})

// beginner modal 
const modalBeginner = document.querySelector('#beginner');
M.Modal.init(modalBeginner, {})

// defense modal 
const modalDefense = document.querySelector('#defense');
M.Modal.init(modalDefense, {})

// attack modal 
const modalAttack = document.querySelector('#attack');
M.Modal.init(modalAttack, {})

// career modal 
const modalCareer = document.querySelector('#career');
M.Modal.init(modalCareer, {})

// modal news and tabs
const newsModal = document.querySelector('#newsModal');
M.Modal.init(newsModal, {});
const tabs = document.querySelector('.tabs');
M.Tabs.init(tabs, {});
const newsSelect = document.querySelector('select');
M.FormSelect.init(newsSelect, {});