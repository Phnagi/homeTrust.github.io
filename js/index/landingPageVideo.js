let indexVideo = document.querySelector('.indexVideo');
let indexVideoBox = document.querySelector('.indexVideoBox');
let landingVideo = document.querySelector('.landingVideo');
let videoMask = document.querySelector('.videoMask');
let landingBigLogo = document.querySelector('.landingBigLogo');
let scrolltips = document.querySelector('.scrolltips');


let landingVideoTl = gsap.timeline({
    scrollTrigger:{
        trigger:indexVideoBox,
        start:'10% top',
        end:'10% 80%',
        scrub:true,
        // markers:true,
        onEnter: videoChange_in,
        // onLeave: worksPageMainScroll_FirstOnLeave,
        onEnterBack: videoChange_out,
        // onLeaveBack: worksPageMainScroll_FirstonLeaveBack
    }
});

let landingVideoTl2 = gsap.timeline({
    scrollTrigger:{
        trigger:indexVideoBox,
        start:'90% top',
        end:'90% 80%',
        scrub:true,
        // markers:true,
        onEnter: positionChange_in,
        // onLeave: worksPageMainScroll_FirstOnLeave,
        onEnterBack: positionChange_out,
        // onLeaveBack: worksPageMainScroll_FirstonLeaveBack
    }
});

// landingVideoTl.to(worksPageMainScroll1,{
//     // xPercent:60,
//     // opacity:0,
// },{

//     // xPercent:0,
//     // opacity:1,
// })
function videoChange_in(){
    // console.log("IN")
    // indexVideo.style.position="absolute";

    indexVideo.classList.add('positionChangeAct');
    indexVideo.classList.remove('positionChangeNonAct');
    


    videoMask.classList.add('act');
    videoMask.classList.remove('NonAct');

    landingBigLogo.classList.add('landingScrollActImg');
    landingBigLogo.classList.remove('landingScrollRemoveActImg');

    scrolltips.classList.add('landingScrollActImg');
    scrolltips.classList.remove('landingScrollRemoveActImg');
};
function videoChange_out(){
    // console.log("OUT")
    // indexVideo.style.alignItems="fixed";
    indexVideo.classList.add('positionChangeNonAct');
    indexVideo.classList.remove('positionChangeAct');



    videoMask.classList.remove('act');
    videoMask.classList.add('NonAct');

    landingBigLogo.classList.add('landingScrollRemoveActImg');
    landingBigLogo.classList.remove('landingScrollActImg');

    scrolltips.classList.add('landingScrollRemoveActImg');
    scrolltips.classList.remove('landingScrollActImg');

};

function positionChange_in(){
    
    indexVideo.classList.add('positionAbsolute');
    indexVideo.classList.remove('positionFix');
}

function positionChange_out(){
    indexVideo.classList.add('positionFix');
    indexVideo.classList.remove('positionAbsolute');
}