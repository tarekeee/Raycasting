class Particle {
  constructor(x, y,nRays) {
    this.pos = createVector(x, y);
    this.rays = [];
    for (let i = 0; i < nRays; i++) {
      this.rays.push(new Ray(x, y, (i * TWO_PI) / nRays));
    }
  }
  update(x, y) {
    this.pos.x = x;
    this.pos.y = y;
    for (let i = 0; i < this.rays.length; i++) {
      this.rays[i].update(x, y);
    }
  }
  cast(b) {
    for (let i = 0; i < this.rays.length; i++) {
      let closest = null;
      let min = Infinity;
      for (let j = 0; j < b.length; j++) {
        const pt = this.rays[i].check(b[j]);
        if (pt) {
          const d = p5.Vector.dist(this.rays[i].pos, pt);
          if (d < min) {
            min = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        this.rays[i].draw(closest.x, closest.y);
      } else {
        this.rays[i].draw();
      }
    }
  }
  draw() {
    push();
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 26);
    pop();
  }
}
