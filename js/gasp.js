const listWrapperEls = $('.side-scroll-list-wrapper');//外枠
const listEls = $('.side-scroll-list');//中のul
const sideScrolls = $('.side-scroll');//中のul

//console.log(listEls[0])


$(listWrapperEls).each(function(i, elem) {
    console.log(i + ': ' + $(elem));
    $(listEls[i]).addClass(`js_slide_${i}`);
    console.log($(listEls[i]))

    gsap.to(listEls[i], {
          x: () => -(listEls[i].clientWidth - listWrapperEls[i].clientWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: sideScrolls[i],
            //trigger: `.js_slide_${i}`,
            start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
            end: () => `+=${listEls[i].clientWidth - listWrapperEls[i].clientWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

});

//だめ
// let listCount = listWrapperEls.length;
// // console.log(listWrapperEls.length)
// // console.log(listEls[1])

// for(let i = 0; i < listCount; i++){
//     $(listEls[i]).addClass(`js_slide_${i}`);
//     //listEls[i].addClass('test');

//     console.log(listEls[i]);
//     console.log(listWrapperEls[i]);

    
//     gsap.to(listEls[i], {
//     x: () => -(listEls[i].clientWidth - listWrapperEls[i].clientWidth),
//     ease: 'none',
//     scrollTrigger: {
//         trigger: `.js_slide_${i}`,
//         start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
//         end: () => `+=${listEls[i].clientWidth - listWrapperEls[i].clientWidth}`,
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//     },
//     });

// }



//通常
// const listWrapperEl = document.querySelector('.side-scroll-list-wrapper');
// const listEl = document.querySelector('.side-scroll-list');

// gsap.to(listEl, {
//   x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.side-scroll',
//     start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
//     end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     invalidateOnRefresh: true,
//   },
// });