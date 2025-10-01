const FRAME_RATE = 10;
const CELL_SIZE = 7;
const CYCLE_SPEED = 3;
const INITIAL_SIZE = 1;
const MAXIMUM_SIZE = 5;
const SPEED_OF_GROWTH_MIN = 1;
const SPEED_OF_GROWTH_MAX = 2;
const STROKE_WEIGHT_MIN = 1;
const STROKE_WEIGHT_MAX = 2;
const BACKGROUND_COLOR = 22;
const COLORS =
  "d9ed92, b5e48c, 99d98c, 76c893, 52b69a, 34a0a4, 168aad, ffffaa,1a759f, 1e6091, 184e77".split(
    ", ",
  );

let cycling = 0;
let livingCells = new Set();
let livingCellsConfig = new Map();
let randomWalkers = [];
let button;
let isMuted = true;

function preload() {
  song = loadSound("public/BiosphereAngelsFlight.mp3");
}

class CellConfig {
  size: number;
  shouldGrow: boolean;
  speedOfGrowth: number;
  strokeColor: string;
  strokeWeight: number;

  constructor() {
    this.size = INITIAL_SIZE;
    this.shouldGrow = true;
    this.speedOfGrowth = random(SPEED_OF_GROWTH_MIN, SPEED_OF_GROWTH_MAX);
    this.strokeColor = COLORS[int(random(0, COLORS.length - 1))];
    this.strokeWeight = int(random(STROKE_WEIGHT_MIN, STROKE_WEIGHT_MAX));
  }

  updateSize() {
    if (this.shouldGrow) {
      this.size = this.size + this.speedOfGrowth;
      if (this.size >= MAXIMUM_SIZE) {
        this.shouldGrow = false;
      }
    }
  }
}

function cantor(x, y) {
  return 0.5 * (x + y) * (x + y + 1) + y;
}

function uncantor(z) {
  let t = Math.floor((-1 + Math.sqrt(1 + 8 * z)) / 2);
  let x = (t * (t + 3)) / 2 - z;
  let y = z - (t * (t + 1)) / 2;
  return { x: x, y: y };
}

function toggleMute() {
  if (!song.isPlaying()) {
    song.play();
  }
  if (isMuted) {
    song.setVolume(1);
    button.html("mute sound");
    isMuted = false;
  } else {
    song.setVolume(0);
    button.html("unmute sound");
    isMuted = true;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(FRAME_RATE);
  let centerX = Math.floor(windowWidth / (CELL_SIZE * 2));
  let centerY = Math.floor(windowHeight / (CELL_SIZE * 2));
  randomWalkers = [
    [centerX, centerY],
    [centerX, centerY],
    [centerX, centerY],
    [centerX, centerY],
    [centerX, centerY],
    [centerX, centerY],
    [centerX, centerY],
    [centerX, centerY],
    [centerX, centerY],
  ];

  button = createButton("unmute sound");
  button.style("background-color", "transparent");
  button.style("color", "#fffffa");
  button.style("border", "3px solid #fffffa");
  button.style("padding", "8px");
  button.style("border-radius", "5px");
  button.style("cursor", "pointer");
  button.mousePressed(toggleMute);
  button.position(30, 30);
}

function nextCycle() {
  cycling++;
  if (cycling % CYCLE_SPEED !== 0) return;
  cycling = 0;
  calculateNextLivingCells();
}

function neighbours(cell) {
  let { x, y } = uncantor(cell);
  let neighbours = [];

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      neighbours.push(cantor(x + i, y + j));
    }
  }
  return neighbours;
}

function deadNeighbours(cell) {
  let ng = neighbours(cell);
  let intersect = new Set([...ng].filter((i) => !livingCells.has(i)));
  return intersect;
}

function aliveNeighbours(cell) {
  let ng = neighbours(cell);
  let intersect = new Set([...ng].filter((i) => livingCells.has(i)));
  return intersect;
}

function neighboursDeadCells() {
  let deadCells = new Set();
  livingCells.forEach((cell) => {
    deadNeighbours(cell).forEach((dn) => deadCells.add(dn));
  });
  return deadCells;
}

function calculateNextLivingCells() {
  let newLivingCells = new Set();
  let newLivingCellsConfig = new Map();
  let deadCells = neighboursDeadCells();

  livingCells.forEach((cell) => {
    let nbrOfAliveNeighbours = aliveNeighbours(cell).size;
    if (nbrOfAliveNeighbours === 2 || nbrOfAliveNeighbours === 3) {
      newLivingCells.add(cell);
      newLivingCellsConfig.set(cell, new CellConfig());
    }
  });

  deadCells.forEach((cell) => {
    let nbrOfAliveNeighbours = aliveNeighbours(cell).size;
    if (nbrOfAliveNeighbours === 3) {
      newLivingCells.add(cell);
      newLivingCellsConfig.set(cell, new CellConfig());
    }
  });

  livingCells = newLivingCells;
  livingCellsConfig = newLivingCellsConfig;
}

function displayCell(cell) {
  let { x, y } = uncantor(cell);
  let cellConfig = livingCellsConfig.get(cell);
  strokeWeight(cellConfig.strokeWeight);
  stroke("#" + cellConfig.strokeColor);
  noFill();
  cellConfig.updateSize();
  ellipse(x * CELL_SIZE, y * CELL_SIZE, cellConfig.size, cellConfig.size);
}

function draw() {
  background(BACKGROUND_COLOR, 50);
  walk();
  livingCells.forEach((cell) => displayCell(cell));
  nextCycle();
}

function walk() {
  randomWalkers.forEach((randomWalker) => {
    randomWalker[0] += int(random(-2, 2));
    randomWalker[1] += int(random(-2, 2));
    if (
      randomWalker[0] >= windowWidth ||
      randomWalker[1] >= windowHeight ||
      randomWalker[0] <= 0 ||
      randomWalker[1] <= 0
    ) {
    }
    let neighbor = neighbours(cantor(randomWalker[0], randomWalker[1]));
    for (neighbour of neighbor) {
      livingCells.add(neighbour);
      livingCellsConfig.set(neighbour, new CellConfig());
    }
  });
}

function mouseDragged() {
  const x = Math.round(mouseX / CELL_SIZE);
  const y = Math.round(mouseY / CELL_SIZE);
  const cell = cantor(x, y);
  livingCells.add(cell);
  livingCellsConfig.set(cell, new CellConfig());
}
