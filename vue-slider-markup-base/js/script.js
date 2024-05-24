// const slides = [
//   {
//     image: 'img/01.webp',
//     title: "Marvel's Spiderman Miles Morale",
//     text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//   },
//   {
//     image: 'img/02.webp',
//     title: 'Ratchet & Clank: Rift Apart',
//     text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//   },
//   {
//     image: 'img/03.webp',
//     title: 'Fortnite',
//     text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
//   },
//   {
//     image: 'img/04.webp',
//     title: 'Stray',
//     text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//   },
//   {
//     image: 'img/05.webp',
//     title: "Marvel's Avengers",
//     text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
//   },
// ];

// console.log(slides);

const { createApp } = Vue;

const myApp = createApp({
  //   data: function () {
  //     return {};
  //   },
  data() {
    return {
      title: 'Il nostro slider',
      //   myClass: 'pippo',
      images: [
        {
          image: 'img/01.webp',
          title: "Marvel's Spiderman Miles Morales",
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
        },
        {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        },
        {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      currentIndex: 0,
      currentInterval: null,
    };
  },
  methods: {
    // prevImage: function(){}
    prevImage() {
      console.log('immagine precedente');

      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1;
      }
    },
    nextImage() {
      console.log('immagine successiva');

      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    changeImage(idx) {
      console.log('change image');
      console.log(idx);
      this.currentIndex = idx;
    },
    startAutoPlay() {
      this.currentInterval = setInterval(this.nextImage, 3000);
    },
    stopAutoPlay() {
      clearInterval(this.currentInterval);
    },
  },
  mounted() {
    console.log('app montata in pagina');
  },
  created() {
    console.log('app creata');
    this.startAutoPlay();
  },
});

myApp.mount('#app');

// setTimeout(function () {
//   myApp.mount('#app');
// }, 5000);