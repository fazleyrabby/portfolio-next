// root consts 
const root = document.documentElement;
const burger = document.getElementById('burger');
const ul = document.querySelector('.menu ul');
const body = document.getElementsByTagName("body")[0];
const header = document.getElementsByTagName("header")[0];
const active = getComputedStyle(root).getPropertyValue('--light-color');
const inactive = getComputedStyle(root).getPropertyValue('--primary-color');


// ====================== THEME ====================== //

// theme consts 
const themeToggle = document.getElementById('theme-toggle');
const theme = document.querySelector('[data-theme]');

//Set theme from localstorage data
theme.dataset.theme = localStorage.getItem("theme") ?? 'light';

//toggle icon and change theme accorging to theme
themeIcon(localStorage.getItem("theme") , themeToggle);

// themetoggle button events
themeToggle.addEventListener('click', e => {
  const targetTheme = e.target.dataset.mode;
  if (targetTheme == 'dark') {
    localStorage.setItem("theme", "dark");
    themeIcon('dark', e.target)
  } else {
    localStorage.setItem("theme", "light");
    themeIcon('light', e.target)
  }
})

// set theme function 
function themeIcon(type, target) {
  if (type == 'dark') {
    target.classList.remove('fa-moon')
    target.dataset.mode = 'light'
    target.classList.add('fa-sun')
    theme.dataset.theme = 'dark'
  } else {
    target.classList.remove('fa-sun')
    target.dataset.mode = 'dark'
    target.classList.add('fa-moon')
    theme.dataset.theme = 'light'
  }
}

// ====================== DYNAMIC TAB ====================== //

// tab consts
const tabBtns = document.querySelectorAll('.tab-btn');
const tabItems = document.querySelectorAll('.tab-item .card');

// Dynamic tab
tabBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    tabItems.forEach(e => e.classList.remove('active'));
    tabBtns.forEach(e => e.classList.remove('active'));
    let activeTabName = e.target.dataset.tab;
    let activeTab = document.getElementById(activeTabName);
    activeTab.classList.add('active');
    e.target.classList.add('active');
    
  })
})


// ====================== NAV TRIGGER & SET ACTIVE SECTIONS ====================== //
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu ul li a');

window.onscroll = function () {
  scrollFunction()
  navActive()
};

function navActive() {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 118;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < height + offset) {
      navLinks.forEach(link => {
        link.classList.remove('active')
        const navLink = document.querySelector(`.menu ul li a[href*='${id}']`);
        if(navLink){
          navLink.classList.add('active');
        }
      })
    }
  })
}

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    header.classList.add("fixed");

  } else {
    header.classList.remove("fixed");
  }
}

burger.addEventListener('click', () => {
  burger.classList.toggle('show-x');
  ul.classList.toggle('show');
});




// ====================== DYNAMIC MODAL ====================== //

const modalBtn = document.querySelectorAll('.modalBtn');
const modalContent = document.querySelectorAll('[data-modal]');
const closeBtn = document.querySelectorAll('.closeBtn');

modalBtn.forEach(element => {
  element.addEventListener('click', (e) => {
    showModal(e);
  })
});

closeBtn.forEach(element => {
  element.addEventListener('click', (e) => {
    closeModal(e);
  });
});

window.addEventListener('click', closeOpenedModal);

function showModal(modalToShow) {
  modalContent.forEach(e => {
    if (e.dataset.modal == `#${modalToShow.target.id}`) {
      e.style.display = 'block';
    }
  })
}

function closeModal(modalToHide) {
  modalToHide.target.closest('.modal').style.display = 'none';
}

function closeOpenedModal(e) {
  modalContent.forEach(element => {
    if (element.closest('.modal').style.display === 'block' && element.dataset.modal == e.target.dataset.modal) {
      element.style.display = 'none';
    }
  });
}


// ====================== DYNAMIC STACK MARQUEE ====================== //

const marqueeElementDislayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-item");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for (let i = 0; i < marqueeElementDislayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}