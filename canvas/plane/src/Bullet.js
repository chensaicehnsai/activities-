import img_bullet from './images/bullet.png';
class Bullet {
  constructor({ctx, x, y, speed = 8}) {
    this.ctx = ctx;
    this.width = 18;
    this.height = 23.6;
    this.alive = true;
    this.x = x - this.width / 2;
    this.y = y;
    this.speed = speed;
    this.init();
  }

  init() {
    let img = new Image();
    img.src = img_bullet;
    this.img = img;
  }

  draw() {
    this.y -= this.speed;
    if (this.y < 0) this.alive = false;
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

export default Bullet;