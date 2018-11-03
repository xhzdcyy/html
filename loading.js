let websiteWelcome = document.getElementById('websiteWelcome');
setTimeout(function () { websiteWelcome.classList.remove('active') }, 1000);

let topNavBar = document.getElementById('topNavBar');
let specialTags = document.querySelectorAll('[data-x]');
for(let i=0;i<specialTags.length;i++){
    specialTags[i].classList.add('offset');
}

function findClosest(){
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex=0;
    for(let i=1;i<specialTags.length;i++){
        if(Math.abs(specialTags[i].offsetTop-window.scrollY)<Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
            minIndex=i;
        }
    }
    specialTags[minIndex].classList.remove('offset');
    for(let i=0;i<specialTags.length;i++){
        if(i===minIndex){
            specialTags[i].classList.add('active');
        }else{
            specialTags[i].classList.remove('active');
        }
    }
    let id = specialTags[minIndex].id;
    console.log(id);
    let a =document.querySelector('a[href="#'+id+'"]');
    let li = a.parentNode;
    let lis = li.parentNode.children;
    for(let i=0;i<lis.length;i++){
        lis[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
}
setTimeout(function(){
    findClosest();
},1000);
window.onscroll = function () {
    if (scrollY > 0) {
        topNavBar.classList.add('sticky');
    } else {
        topNavBar.classList.remove('sticky');
    }
    findClosest()
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
        console.log('you clicked 11');
        console.log(e.currentTarget);
        let x = e.currentTarget;
        let a = x.getAttribute('href');
        let target = document.querySelector(a);
        let targetTop = target.offsetTop - 80;
        let currentTop = window.scrollY;
        console.log(targetTop);
        console.log(currentTop);
        let T = 300;
        let n = 60;
        let t = T / n;
        let S = targetTop - currentTop;
        let s = S / n;
        let c = 0;
        let id = setInterval(function () {
            if (c === n) {
                window.clearInterval(id);
                return;
            }
            c += 1;
            window.scrollTo(0, currentTop + s * c);
        },t)
    }
}

