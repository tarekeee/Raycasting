class Ray {
  constructor(x, y, angle) {
    this.pos = createVector(x, y);
    this.dir = p5.Vector.fromAngle(angle);
  }
  draw(x, y) {
    if (x && y) {
      push();
      stroke(255);
      line(this.pos.x, this.pos.y,x,y);
      pop();
    } else {
      push();
      stroke(255);
      translate(this.pos.x, this.pos.y);
      push();
      strokeWeight(40);
      point(0, 0);
      pop();
      line(0, 0, this.dir.x * 2000, this.dir.y * 2000);
      pop();
    }
  }
  update(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }
  check(wall) {
    const x1 = wall.a.x;
    const y1 = wall.a.y;
    const x2 = wall.b.x;
    const y2 = wall.b.y;
    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den == 0) {
      return false;
    }
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / den;
    console.log("t:", t, "u:", u, "den:", den);
    if (t >= 0 && t <= 1 && u >= 0) {
      const pt = createVector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    }
    return false;
  }
}
