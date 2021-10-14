const template = {
  carousel() {
    $('.owl-carousel').owlCarousel({
      loop: false,
      margin: 20,
      nav: false,
      items: 3,
    });
  },
};

template.carousel();
