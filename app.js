window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 10)
})


/*----------------- NavBar ------------------*/

let nav_items = document.querySelector(".navigation");

let hamburger = document.querySelector('.hamburger');

let bars = document.querySelectorAll('.hamburger span');

let isActive = false;

hamburger.onclick = () => {

    if (!isActive) {
        nav_items.classList.add("active");
        bars[0].style.transform = 'rotate(45deg)';
        bars[1].style.opacity = 0;
        bars[2].style.transform = 'rotate(-45deg)';
        isActive = true;
    } else {
        nav_items.classList.remove("active");
        bars[0].style.transform = 'rotate(0deg)';
        bars[1].style.opacity = 1;
        bars[2].style.transform = 'rotate(0deg)';
        isActive = false;
    }

};