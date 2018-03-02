t = 0;

function setup() {
    createCanvas(400, 400)
    background('#3A0088')
}

function draw() {
    // circlePerlin()
    // linePerlin();
    // bezierPerlin();
    circlePerlinv2();
}

function circlePerlin() {
    background('#3A0088')
    noStroke();

    x = noise(t) * width;
    y = noise(t + 10) * height;
    ellipse(x, y, 50, 50)

    t += 0.01
}

function linePerlin() {
    background('#3A0088')
    noFill();
    stroke(255);
    beginShape()
    for (var x = 0; x < width; x++) {
        y = noise(t) * height;

        vertex(x, y)

        t += 0.01;

    }
    endShape()

    noLoop();

}

function bezierPerlin() {
    noFill();
    stroke(255, 18);

    x1 = noise(t) * width;
    x2 = noise(t + 10) * width;
    x3 = noise(t + 20) * width;
    x4 = noise(t + 60) * width;

    y1 = noise(t + 70) * height;
    y2 = noise(t + 45) * height;
    y3 = noise(t + 34) * height;
    y4 = noise(t + 79) * height;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4)

    t += 0.001;

    if (frameCount % 400 == 0) {
        noLoop();
    }
}

function circlePerlinv2() {
    noFill();
    stroke(255, 18);


    translate(width/2, height/ 2);
    beginShape()
    for (var i = 0; i < width; i++) {

        alpha = map(i, 0, width, 0, TWO_PI);

        rad = width * noise(i * 0.01, t * 0.05)

        x = rad * cos(alpha);
        y = rad * sin(alpha);

        curveVertex(x, y)

        t += 0.001;
    }
    endShape()
}
