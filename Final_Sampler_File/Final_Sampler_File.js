var Juliet;
var Supply;
let sentence = ['For never', 'was a story of', 'more woe than', 'this of Juliet', 'and her Romeo', '"FOR NEVER WAS A STORY OF MORE WOE THAN THIS OF JULIET AND HER ROMEO."'];
let word;
let ts = 100;
let speed = 5;
let polySynth;


function preload() {
  Juliet = loadFont('data/Juliet-Serif.otf');
  Supply = loadFont('data/Supply-Regular.otf');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(playSynth); //how to change it to follow the word change?
  textFont(Juliet);
  textAlign(CENTER, CENTER);
  word = sentence[0];
  
  polySynth = new p5.PolySynth();

  setTimeout(one, 1000);
  setTimeout(two, 2000);
  setTimeout(three, 3000);
  setTimeout(four, 4000);
  setTimeout(five, 6000);
}

function one(){
  word = sentence[1];
  ts = 100;
  speed = 5;
}

function two(){
  word = sentence[2];
  ts = 175;
  speed = 5;
}

function three(){
  word = sentence[3];
  ts = 150;
  speed = 5;
}

function four(){
  word = sentence[4];
  ts = 150;
  speed = 5;
}

function five(){
  word = sentence[5];
  ts = 105;
  speed = 5;
}

function draw() {
  background(196, 58, 35);
  textFont(Juliet)
  textSize(ts);
  text(word, 0.15*width, 0.15*height, 0.7*width, 0.7*height);
  
  fill(0);
  noStroke();
  textFont(Supply);
  textSize(9);
  text('Juliet Serif by Kayla Insyira (2021)', width/2, 0.925*height);
  
  fill(0);
  noStroke();
  textFont(Supply);
  textSize(9);
  text('click anywhere for sound', width/2, 0.075*height);
  
}

function playSynth() {
  userStartAudio();

  // note duration (in seconds)
  let dur = 0.5;

  // time from now (in seconds)
  let time = 1;

  // velocity (volume, from 0 to 1)
  let vel = 0.3;

  // notes can overlap with each other
  polySynth.play('C5', vel, time*1, dur);
  polySynth.play('E5', vel, time*1, dur);
  polySynth.play('G5', vel, time*1, dur);
  polySynth.play('C3', vel, time*2, dur);
  polySynth.play('A5', vel, time*3, dur);
  polySynth.play('C5', vel, time*4, dur);
  polySynth.play('E5', vel, time*4, dur);
  polySynth.play('A5', vel, time*4, dur);
}
