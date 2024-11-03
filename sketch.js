function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#f5ebe0");
  noFill();
  stroke("#99582a");
  strokeWeight(3);

  let faceSize = map(mouseY, 0, height, 50, 150); // Map mouseY to a face size range
  let spacing = 10;
  let facesPerRow = floor(width / (faceSize + spacing));

  // 產生25排
  for (let row = 0; row < 25; row++) {
    for (let col = 0; col < facesPerRow; col++) {
      let x = spacing + col * (faceSize + spacing);
      let y = spacing + row * (faceSize + spacing);

      // 笑臉
      ellipse(x, y, faceSize);
      fill("#99582a");
      ellipse(x - faceSize * 0.2, y - 10, faceSize * 0.1);
      ellipse(x + faceSize * 0.2, y - 10, faceSize * 0.1);
      noFill();
      arc(x, y + 20, faceSize * 0.5, faceSize * 0.2, 0, PI);
    }
  }
}