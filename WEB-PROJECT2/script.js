//LOADER OF THE WEBSITE

let loader = document.querySelector('.loader');
let body = document.querySelector('body');

window.addEventListener('load', function(){
    loader.style.display = 'none';
    body.style.overflowY = 'scroll';
})


//ACTIVE LINKS FOR THE WEBSITE

let Links = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 200;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            Links.forEach(Link => {
                Link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


//RESPONSIVE NAVBAR.
let toggle = document.querySelector('.toggle');
let navBar = document.querySelector('header nav');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');

});



//RESERVATION FORM.
let formWrapper = document.querySelector('.form');
let formBtn = document.querySelector('.form-btn');

formBtn.addEventListener('click', () =>{
    formWrapper.classList.toggle('active');
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
});


let closeBtn = document.querySelector('.closebtn');

closeBtn.addEventListener('click', () => {
    formWrapper.classList.toggle('active');
})