document.addEventListener("DOMContentLoaded", () => {
  const slidesPrimary = document.querySelectorAll(".slide");
  const slidesSecondary = document.querySelectorAll(".slide-n");
  const splitTypes = document.querySelectorAll(".reveal-type");
  const right = document.getElementById("right");
  const tl = gsap.timeline();
  const rightValue = slidesPrimary[0].offsetWidth * (slidesPrimary.length - 15);
  right.setAttribute("style", `right: ${rightValue}px;`);

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, SlowMo);

  tl.from("#home", {
    scaleY: 0,
    opacity: 0,
    transformOrigin: "top",
    y: -100,
    duration: 1,
  });

  ScrollTrigger.create({
    trigger: "#home",
    start: "top center",
    end: "bottom center",
    animation: gsap.to("#home", {
      scaleY: 0,
      opacity: 0,
      transformOrigin: "top",
      y: -100,
      duration: 1,
      paused: true,
    }),
    toggleActions: "play none none reverse",
    scrub: true,
  });

  splitTypes.forEach((char) => {
    const text = new SplitType(char, { types: "chars" });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
      scaleY: 0,
      y: -20,
      transformOrigin: "top",
      opacity: 0,
      stagger: 0.1,
      duration: 1,
    });
  });

  const slideAnimation = (slides, direction) => {
    gsap.to(slides, {
      x: () => direction * window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".skills-slider",
        start: "top 80%",
        end: () => "+=" + document.querySelector(".skills-slider").scrollWidth,
        scrub: false,
        snap: 1 / slides.length,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * slides.length);
          slides.forEach((slide, i) => {
            slide.style.transition = i === index ? "none" : "";
          });
        },
      },
      duration: 20,
      repeat: -1,
    });
  };

  document.querySelectorAll(".item").forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: index * 0.2,
    });
  });

  gsap.fromTo(
    ".cloud.big",
    { opacity: 0.1, x: 300 },
    { opacity: 0, x: -1000, duration: 8, ease: "linear", repeat: -1 }
  );
  gsap.fromTo(
    ".cloud.small",
    { opacity: 0.1, x: 300 },
    { opacity: 0, x: -1000, duration: 9.2, ease: "linear", repeat: -1 }
  );
  gsap.fromTo(
    ".cloud.distant",
    { opacity: 0.1, x: 300 },
    { opacity: 0, x: -1000, duration: 13.5, ease: "linear", repeat: -1 }
  );
  gsap.fromTo(
    ".cloud.super-slow",
    { opacity: 0.1, x: 300 },
    { opacity: 0, x: -1000, duration: 20.5, ease: "linear", repeat: -1 }
  );


  gsap.to("#element", {
    scrollTrigger: {
      trigger: "#element",
      onEnter: () => {
        var type = new Typed("#element", {
          strings: [
            "Cybersecurity student at <span class='span'> Westfield Academy</span> bridging tech and security since <span class='span'> Sep 2021</span>. Laurance Haines School: <span class='span'> < Sep 2013 - Sep 2021 ></span>",
          ],
          typeSpeed: 1,
        });
      },
    },
  });

  slideAnimation(slidesPrimary, -1);
  slideAnimation(slidesSecondary, 1);

  gsap.to(".sidenav", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 100%",
      end: "top 90%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
    opacity: 0,
  });

  var path = ".path";

  gsap.to(".sun-conatainer", {
    scrollTrigger: {
      trigger: "#edu",
      start: "top 100%",
      end: "top top",
      scrub: true,
    },
    duration: 10,
    motionPath: {
      path: path,
      align: path,
      autoRotate: true,
    },
    ease: "linear",
  });
});

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
