document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  //setTimeout
  setTimeout(function () {
    document.documentElement.classList.add("is-splash01");
  }, 50);
  setTimeout(function () {
    document.documentElement.classList.add("is-splash02");
  }, 100);
  setTimeout(function () {
    document.documentElement.classList.add("is-splash03");
  }, 2000);
  setTimeout(function () {
    document.documentElement.classList.add("is-splash04");
  }, 2300);
  setTimeout(function () {
    document.documentElement.classList.add("is-splash05");
  }, 2950);

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {},
    "(max-width: 767px)": function () {},

    all: function () {
      gsap.to(".st-kvcopy01", {
        transform: "translateX(-30%)",
        scrollTrigger: {
          trigger: ".sectionIntro",
          start: "top 100%",
          end: "top 0%",
          scrub: true,
        },
      });
      gsap.to(".st-kvcopy02", {
        transform: "translateX(30%)",
        scrollTrigger: {
          trigger: ".sectionIntro",
          start: "top 100%",
          end: "top 0%",
          scrub: true,
        },
      });
      gsap.to(".sectionKv", {
        transform: "translateY(60%)",
        scrollTrigger: {
          trigger: ".sectionIntro",
          start: "top 100%",
          end: "top 0%",
          scrub: true,
        },
      });
      gsap.to(".sectionIntro", {
        transform: "translateY(30%)",
        scrollTrigger: {
          trigger: ".sectionPick",
          start: "top 100%",
          end: "top 0%",
          scrub: true,
        },
      });
      gsap.to(".sectionPick .textBlock", {
        opacity: "0",
        scrollTrigger: {
          trigger: ".sectionVoice",
          start: "top 150%",
          end: "top 90%",
          scrub: true,
        },
      });
      gsap.to(".sectionPick", {
        transform: "translateY(30%)",
        scrollTrigger: {
          trigger: ".sectionVoice",
          start: "top 100%",
          end: "top 0%",
          scrub: true,
        },
      });

      gsap.to(".corpLogo01 img", {
        transform: "scale(1)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".corpLogo01 img",
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        },
      });
      gsap.to(".corpLogo02 img", {
        transform: "scale(1)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".corpLogo02 img",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.to(".corpLogo03 img", {
        transform: "scale(1)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".corpLogo03 img",
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        },
      });
      gsap.to(".corpLogo04 img", {
        transform: "scale(1)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".corpLogo04 img",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.to(".corpLogo05 img", {
        transform: "scale(1)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".corpLogo05 img",
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        },
      });
      gsap.to(".corpLogo06 img", {
        transform: "scale(1)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".corpLogo06 img",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.to(".corpLogo07 img", {
        transform: "scale(1)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".corpLogo07 img",
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        },
      });
      gsap.to(".corpLogo08 img", {
        transform: "scale(1)",
        opacity: 1,
        scrollTrigger: {
          trigger: ".corpLogo08 img",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });
      gsap.to(".sprit img", {
        transform: "translateY(25%)",
        scrollTrigger: {
          trigger: ".sectionVoice",
          start: "top 100%",
          end: "bottom 0%",
          scrub: true,
        },
      });
      gsap.to(".sectionVoice", {
        transform: "translateY(5%)",
        scrollTrigger: {
          trigger: ".sectionMag",
          start: "top 100%",
          end: "top 0%",
          scrub: true,
        },
      });
      const container = document.querySelector(".horizon");

      gsap.to(".horizon", {
        x: "-320vw",
        scrollTrigger: {
          trigger: ".horizonTrigger",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".sectionMag", {
        transform: "translateY(5%)",
        scrollTrigger: {
          trigger: ".sectionContact",
          start: "top 100%",
          end: "top 0%",
          scrub: true,
        },
      });
      gsap.to(".sectionContact", {
        transform: "translateY(5%)",
        scrollTrigger: {
          trigger: ".sectionNews",
          start: "top 100%",
          end: "top 0%",
          scrub: true,
        },
      });
      gsap.to(".sectionNews", {
        transform: "translateY(5%)",
        scrollTrigger: {
          trigger: ".sectionEvent",
          start: "top 100%",
          end: "top 0%",
          scrub: true,
        },
      });
      gsap.to(".sectionFooter", {
        transform: "translateY(0%)",
        scrollTrigger: {
          trigger: ".sectionEvent",
          start: "bottom 50%",
          end: "bottom 0%",
          scrub: true,
        },
      });
      gsap.to("header img", {
        opacity: "0",
        scrollTrigger: {
          trigger: ".sectionEvent",
          start: "bottom 50%",
          end: "bottom 40%",
          scrub: true,
        },
      });
      gsap.to(".floatBtn", {
        opacity: "1",
        bottom: "10px",
        scrollTrigger: {
          trigger: ".sectionKv",
          start: "bottom 50%",
          end: "bottom 40%",
          scrub: true,
        },
      });
      gsap.to(".floatBtn img", {
        opacity: "0",
        bottom: "-10px",
        scrollTrigger: {
          trigger: ".sectionEvent",
          start: "bottom 50%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }, //end matchMedia
  });
});
