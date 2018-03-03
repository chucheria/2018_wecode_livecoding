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




/****** HERE ARE SOME EXERCISES ABOUT COLOR WITH PERLIN NOISE ******/

function perlin2Dcolor() {
    loadPixels();
    beginShape();
    for (var i = 0; i < width; i++) {
        var xoff = 0;
        for (var j = 0; j < height; j++) {
            var index = (i + j * width) * 4;
            n = noise(xoff, yoff) * 255;
            pixels[index + 0] = n; // <- r
            pixels[index + 1] = n ; // <- g
            pixels[index + 2] = n ; // <- b
            pixels[index + 3] = 255; // <- alpha
            xoff += 0.01;
        }
        yoff += 0.001;
    }

    updatePixels();
    endShape();

    noLoop();
}

function perlinCircleColor() {

    noFill();
    strokeWeight(2);

    r = noise(t) * 255;
    g = noise(t + 80) * 255;
    b = noise(t + 500) * 255

    stroke(r,g,b);

    x = noise(t) * width;
    y = noise(t + 10) * height;

    r = noise(t + 16) * 50;
    ellipse(x, y, r, r)

    t += 0.01;

}
