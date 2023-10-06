const imgAbout = document.querySelectorAll('.imgAbout');
const images = Array.from(imgAbout);
const innerWidth = window.innerWidth;
const widthToString = innerWidth.toString();


document.addEventListener('load', () => {
  if(innerWidth < 500) {
    images.forEach((image) => {
      image.style.width = '100%';
    })
  }
})

const config = {
  type: 'carousel',
  startAt: 0,
  focusAt: 'center',
  gap: 0
};

//3 articles linked to the respective photo
let box = document.querySelectorAll('.box');
const box1 = box[0];
const box2 = box[1];
const box3 = box[2];

const glide = new Glide(".glide", config)

console.log(glide.index)

glide.on(['mount.after', 'run'], () => {

  //for know current index of slide image
   const currentIndex = glide.index;
  console.log(currentIndex)

  if(currentIndex === 0){
    box1.style.display = 'flex'
    box2.style.display = 'none'
    box3.style.display = 'none'
  } else if(currentIndex === 1){
    box1.style.display = 'none'
    box2.style.display = 'flex'
    box3.style.display = 'none'
  } else if(currentIndex === 2){
    box1.style.display = 'none'
    box2.style.display = 'none'
    box3.style.display = 'flex'
  }
})
glide.mount();


//for slide menu (mobile)
const openbtn = document.getElementById('open');
const closebtn = document.getElementById('close');
const navBar = document.getElementById('navBox');
const navUl = document.getElementById('primary-nav').firstElementChild;
const body = document.getElementById('body');
const blackScreen = document.getElementById('black-screen');

document.addEventListener('click', (e) => {
  if (e.target === openbtn || e.target === closebtn) {
    navBar.classList.toggle('open-nav')
    body.classList.toggle('block-over')
    blackScreen.classList.toggle('active')
  } else if (e.target != navBar && e.target != navUl) {
    navBar.classList.remove('open-nav')
    body.classList.remove('block-over')
    blackScreen.classList.remove('active')
  }
})