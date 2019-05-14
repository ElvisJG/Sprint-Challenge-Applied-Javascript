class Carousel {
  constructor(e) {
    this.e = e;
    this.index = 0;
    this.left = e.querySelector('.left-button');
    this.right = e.querySelector('.right-button');
    this.images = e.querySelectorAll(`img`);

    this.images.forEach((img, current) => {
      if (current === this.index) {
        img.style.display = 'flex';
      } else {
        img.style.display = 'none';
      }
    });

    this.left.addEventListener('click', () =>
      this.displayImage((this.index = this.index - 1))
    );
    this.right.addEventListener('click', () =>
      this.displayImage((this.index = this.index + 1))
    );
  }

  displayImage() {
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }

    if (this.index > this.images.length - 1) {
      this.index = 0;
    }

    this.images.forEach((img, current) => {
      if (current === this.index) {
        img.style.display = 'flex';
      } else {
        img.style.display = 'none';
      }
    });
  }
}

let carousel = document
  .querySelectorAll('.carousel')
  .forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
