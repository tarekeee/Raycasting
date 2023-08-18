let b;
let rays;
let xoff;
let yoff;
const numberOfRays = 50;
function setup() {
  createCanvas(1000, 1000);
  b = [];
  for (let i = 0; i < 10; i++) {
    b.push(
      new Boundary(
        random(0, width),
        random(0, height),
        random(0, width),
        random(0, height)
      )
    );
  }
  xoff = 0;
  yoff = 100000;
  particle = new Particle(500, 500,numberOfRays);
}

function draw() {
  background(0);
  for (let i = 0; i < b.length; i++) {
    b[i].draw();
  }
  particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.draw();
  particle.cast(b);
  xoff += 0.01/2;
  yoff += 0.01/2;
}
