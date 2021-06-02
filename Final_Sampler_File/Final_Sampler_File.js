var Juliet;
var Supply;
let sentence = ['Love is', 'heavy & light', 'bright & dark', 'asleep & awake', 'Its everything except what it is!', 'For never', 'was a story of', 'more woe', 'than this of', 'JULIET AND HER ROMEO'];
let word;
let ts = 100;
let speed = 5;
let polySynth;


function preload() {
  Juliet = loadFont('data/Juliet-Serif.otf');
  Supply = loadFont('data/Supply-Regular.otf');
  song = loadSound('data/Sound-RJ.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(Juliet);
  textAlign(CENTER, CENTER);
  word = sentence[0];

  setTimeout(one, 2000);
  setTimeout(two, 3000);
  setTimeout(three, 4000);
  setTimeout(four, 5000);
  setTimeout(five, 8500);
  setTimeout(six, 10000);
  setTimeout(seven, 14000);
  setTimeout(eight, 16000);
  setTimeout(nine, 18000);
}

function one(){
  word = sentence[1];
  ts = 100;
  speed = 5;
}

function two(){
  word = sentence[2];
  ts = 100;
  speed = 5;
}

function three(){
  word = sentence[3];
  ts = 100;
  speed = 5;
}

function four(){
  word = sentence[4];
  ts = 100;
  speed = 5;
}

function five(){
  word = sentence[5];
  ts = 150;
  speed = 5;
}

function six(){
  word = sentence[6];
  ts = 100;
  speed = 5;
}

function seven(){
  word = sentence[7];
  ts = 150;
  speed = 5;
}

function eight(){
  word = sentence[8];
  ts = 100;
  speed = 5;
}

function nine(){
  word = sentence[9];
  ts = 150;
  speed = 5;
}

function draw() {
  background(196, 58, 35);
  textFont(Juliet)
  textSize(ts);
  text(word, 0.15*width, 0.15*height, 0.7*width, 0.7*height);
  
  song.setVolume(map(mouseX, 0, width, 0, 1));
  
  fill(0);
  noStroke();
  textFont(Supply);
  textSize(9);
  text('Juliet Serif by Kayla Insyira (2021)', width/2, 0.925*height);
  
  fill(0);
  noStroke();
  textFont(Supply);
  textSize(9);
  text('click anywhere for sound, move for volume', width/2, 0.075*height);
  
}

function mousePressed() {
  song.play();
}
