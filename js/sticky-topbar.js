!function () {
    let view = document.getElementById('topNavBar');
    let controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function () {
            window.addEventListener('scroll', (e) => {
                if (scrollY > 0) {
                    view.classList.add('sticky');
                } else {
                    view.classList.remove('sticky');
                }
            })
        }

    }

    controller.init(view);
}.call();