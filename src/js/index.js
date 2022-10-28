document.addEventListener(
  "DOMContentLoaded",
  function () {
    // CHANGING WORDS
    let changingWord = document.getElementById("changingWord");
    let words = ["Novasyon", "UX & CX", "Algı", "Strateji"];
    function changeIt(words) {
      let n = 0;
      setInterval(function () {
        if (n >= words.length) {
          n = 0;
        }
        changingWord.innerHTML = words[n];

        changingWord.classList.add("animate__animated", "animate__fadeIn");
        setTimeout(() => {
          changingWord.classList.remove("animate__animated", "animate__fadeIn");
        }, 1000);

        n++;
      }, 3500);
    }
    changeIt(words);
    // CHANGING WORDS ENDS
  },
  false
);

//   CHANGE PEOPLE
function changePeople(e) {
  // ACTIVE CLASS
  let people = document.querySelectorAll(".people__inner__people__span");
  people.forEach((people) => {
    people.classList.remove("people__inner__people__active");
  });
  e.target.classList.add("people__inner__people__active");
  // ACTIVE CLASS
  let peopleInnerDesc = document.querySelector(".people__inner__desc");
  let peopleInner = document.querySelector(".people__inner__wrap");
  let peopleInnerBtn = document.querySelector(".people__inner__btn");

  function changePeopleInner(name) {
    if (name === "Kullanıcı Hedefleme") {
      peopleInnerDesc.innerHTML =
        "Uservision platformu ile, paneller, dijital veri partnerlikleri ve dijital reklamlar ile tüm dünyadan en niş kullanıcılar hızlıca hedeflenebilir.";
      peopleInnerBtn.innerHTML = "Detaylı Bilgi";
      peopleInner.innerHTML = `<img src="/src/img/landing/Nasıl Çalışıyoruz_ Area Photos/1-Kullanıcı Hedefleme.png" alt="">`;
    } else if (name === "Veri Toplama") {
      peopleInnerDesc.innerHTML =
        "Birebir görüşmeler, odak grupları, UX araştırmaları, anketler, nöro araştırma ve yenilikçi araştırma yöntemleri ile veri toplanır.";
      peopleInnerBtn.innerHTML = "Ürünleri Keşfedin";
      peopleInner.innerHTML = `<video autoplay controls>
      <source src="/src/img/landing/Nasıl Çalışıyoruz_ Area Photos/promo.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>`;
    } else if (name === "Veri Analizi") {
      peopleInnerDesc.innerHTML =
        "Veriler, yapay zeka ve interdisipliner bir ekip tarafından analiz edilir. Markanın stratejik hedefleri doğrultusunda neden ve sonuçlarla, aksiyon alınabilir çıktılar raporlanır. ";
      peopleInnerBtn.innerHTML = "Neden Uservision?";
      peopleInner.innerHTML = `<img src="/src/img/landing/Nasıl Çalışıyoruz_ Area Photos/veri.png" alt="">`;
    }
  }
  changePeopleInner(e.target.innerHTML);
}

//   CHANGE PEOPLE ends
let moment = 0;
let counter = 1;
// SLIDER CAROUSEL
function moveSlider(way) {
  let card = document.querySelector(".carousel__card");
  let cards = document.querySelectorAll(".carousel__card");
  let descs = document.querySelectorAll(".carousel__card__desc");

  console.log(counter + 1, cards.length);

  if (way === "right") {
    if (moment <= -345) {
      return;
    } else {
      descs.forEach((card) => {
        card.classList.remove("carousel__card__desc__active");
      });
      moment = moment - card.getBoundingClientRect().width;
      counter++;
      descs[counter].classList.add("carousel__card__desc__active");

      cards.forEach((card) => {
        console.log(moment);
        card.style.transform = `translateX(${moment}px)`;
      });
    }
  } else if (way === "left") {
    if (moment >= 345) {
      return;
    } else {
      descs.forEach((card) => {
        card.classList.remove("carousel__card__desc__active");
      });
      moment = moment + card.getBoundingClientRect().width;
      counter--;
      descs[counter].classList.add("carousel__card__desc__active");

      cards.forEach((card) => {
        console.log(moment);
        card.style.transform = `translateX(${moment}px)`;
      });
    }
  }
}
// $(".carousel__blogside").owlCarousel();

// SLIDER CAROUSEL

// NAVBAR
let ul = document.querySelector(".header__navbar__list");
let hamBtnOpen = document.querySelector(".hamburger-btn .fa-bars");
let hamBtn = document.querySelector(".hamburger-btn");
let hamBtnClosed = document.querySelector(".hamburger-btn .fa-xmark");

function openIt(e) {
  if (!ul.classList.contains("hamburger")) {
    e.target.style.display = "none";
    hamBtnClosed.style.display = "block";
    ul.classList.add("hamburger");
  }
}
function closeIt(e) {
  if (ul.classList.contains("hamburger")) {
    e.target.style.display = "none";
    hamBtnOpen.style.display = "block";
    ul.classList.remove("hamburger");
  }
}
