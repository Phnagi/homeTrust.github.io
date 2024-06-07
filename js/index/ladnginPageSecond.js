let indexSecondBox = document.querySelector(".indexSecondBox");
let indexWelcomeBox = document.querySelector(".indexWelcomeBox");
let indexWelComeBtn = document.querySelector(".indexWelComeBtn");

let landingVideoTl3 = gsap.timeline({
  scrollTrigger: {
    trigger: indexSecondBox,
    start: "-50% top",
    end: "-50% 80%",
    scrub: true,
    markers: true,
    onEnter: landinPageSec_in,

    onEnterBack: landinPageSec_out,
  },
});

let landingVideoTlLeave3 = gsap.timeline({
  scrollTrigger: {
    trigger: indexSecondBox,
    start: "30% top",
    end: "30% 80%",
    scrub: true,
    markers: true,
    onEnter: landinPageSec2_in,

    onEnterBack: landinPageSec2_out,
  },
});

function landinPageSec_in() {
  indexWelcomeBox.classList.add("indexWelcomeBoxAct");
  indexWelComeBtn.classList.add("indexWelcomeBoxAct");
}
function landinPageSec_out() {
  indexWelcomeBox.classList.remove("indexWelcomeBoxAct");
  indexWelComeBtn.classList.remove("indexWelcomeBoxAct");
}

function landinPageSec2_in() {
  indexWelcomeBox.classList.remove("indexWelcomeBoxAct");
  indexWelComeBtn.classList.remove("indexWelcomeBoxAct");
}
function landinPageSec2_out() {
  indexWelcomeBox.classList.add("indexWelcomeBoxAct");
  indexWelComeBtn.classList.add("indexWelcomeBoxAct");
}
