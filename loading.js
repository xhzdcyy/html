let websiteWelcome = document.getElementById('websiteWelcome');
console.log(websiteWelcome);
setTimeout(function () { websiteWelcome.classList.remove('active') }, 1000);

let topNavBar = document.getElementById('topNavBar');

window.onscroll = function () {
    if (scrollY > 0) {
        topNavBar.classList.add('sticky');
    } else {
        topNavBar.classList.remove('sticky');
    }
}


let liTags = document.getElementsByClassName('menuTigger')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (e) {
        e.currentTarget.classList.add('active');
    }
    liTags[i].onmouseleave = function (e) {

        e.currentTarget.classList.remove('active');
    }
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a');
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (e) {
        e.preventDefault()
        console.log('you clicked');
        console.log(e.currentTarget);
        let x = e.currentTarget;
        let a = x.getAttribute('href');
        let target = document.querySelector(a);
        let top = target.offsetTop;
        window.scrollTo(x, top - 80);
    }
}