!function(){
let specialTags = document.querySelectorAll('[data-x]');
for(let i=0;i<specialTags.length;i++){
    specialTags[i].classList.add('offset');
}

function findClosestAndRemoveOffset(){
    // let specialTags = document.querySelectorAll('[data-x]');
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
    findClosestAndRemoveOffset();
},1000);


window.addEventListener('scroll',(e)=>{
    findClosestAndRemoveOffset();
})
}.call();