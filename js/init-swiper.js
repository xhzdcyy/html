!function(){
    let view = document.querySelector('#mySlides')
    console.log(view)
    let controller = function(view){
        // let mySwiper = new Swiper(view.querySelector('.swiper-container'), {
        let mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
        
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        }) 
    }
    controller(view);
// var mySwiper = new Swiper('.swiper-container', {
//     autoplay: true,
//     direction: 'horizontal', // 垂直切换选项
//     loop: true, // 循环模式选项

//     // 如果需要分页器
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // 如果需要前进后退按钮
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // 如果需要滚动条
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// })    
}.call();