!function () {
    let view = document.querySelector('nav.menu')
    let controller = function (view) {
        let liTags = view.getElementsByClassName('menuTigger')
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
                }, t)
            }
        }
    }
    controller(view);

}.call();