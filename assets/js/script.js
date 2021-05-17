const root = document.documentElement;
const burger = document.getElementById('burger');
const ul = document.querySelector('.menu ul');

const body = document.getElementsByTagName("body")[0];
const header = document.getElementsByTagName("header")[0];
const sections = document.querySelectorAll('section');
const active = getComputedStyle(root).getPropertyValue('--light-color');
const inactive = getComputedStyle(root).getPropertyValue('--primary-color');
const modalBtn = document.querySelectorAll('.modalBtn');
const modalContent = document.querySelectorAll('[data-modal]');
const closeBtn = document.querySelectorAll('.closeBtn');

const options = {
    threshold: 0.3
}
let observer = new IntersectionObserver(navCheck, options);

window.onscroll = function () {
     scrollFunction() 
};

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


function navCheck(elms){
    elms.forEach(elm => {
        const id = elm.target.getAttribute('id');
        const activeAnchor = document.querySelector(`[data-page=${id}]`);
        if (elm.isIntersecting) {
            // activeAnchor.style.setProperty('color', `${active}`);
            activeAnchor.classList.add('active');
        }
        else{
            // activeAnchor.style.setProperty('color', `${inactive}`);
            activeAnchor.classList.remove('active');
        }
    })
}

sections.forEach(section =>{
    observer.observe(section);
})

modalBtn.forEach(element => {
  element.addEventListener('click', (e)=>{
    showModal(e);

  })
});

closeBtn.forEach(element => {
  element.addEventListener('click', (e)=>{
    closeModal(e);
  });
});

window.addEventListener('click', closeOpenedModal);

function showModal(modalToShow){
  modalContent.forEach(e => {
    if (e.dataset.modal == `#${modalToShow.target.id}`) {
        e.style.display = 'block';
    }
  })
}

function closeModal(modalToHide){
  modalToHide.target.closest('.modal').style.display = 'none';
}

function closeOpenedModal(e){
  modalContent.forEach(element => {
    if (element.closest('.modal').style.display === 'block' && element.dataset.modal ==   e.target.dataset.modal) {
      element.style.display = 'none';
    }
  });
}

const marqueeElementDislayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marquee-item");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for (let i = 0; i < marqueeElementDislayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}