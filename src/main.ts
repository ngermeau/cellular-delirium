let config = {
  cellSize: 7,
  //Speed
  frameRate: 10,

  //background
  backgroundColor: 22,

  //Cell
  initialSize: 1,
  thresholdSizeMax: 5,
  finalSizeMin: 5,
  finalSizeMax: 5,
  speedOfGrowthMin: 1,
  speedOfGrowthMax: 2,
  strokeWeightMin: 1,
  strokeWeightMax: 2,
  colors:
    "d9ed92, b5e48c, 99d98c, 76c893, 52b69a, 34a0a4, 168aad, ffffaa,1a759f, 1e6091, 184e77".split(
      ", ",
    ),
};

var cycling;
var cycleSpeed;
var livingCells;
var livingCellsConfig;
var randomWalkers = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

class CellConfig {
  constructor() {
    this.size = config.initialSize;
    this.shouldGrow = true;

    this.thresholdSize = 5;
    this.finalSize = 5;
    this.speedOfGrowth = getRandomFloat(
      config.speedOfGrowthMin,
      config.speedOfGrowthMax,
    );

    this.strokeColor = config.colors[getRandomInt(0, config.colors.length - 1)];
    this.strokeWeight = getRandomInt(
      config.strokeWeightMin,
      config.strokeWeightMax,
    );
  }

  updateSize() {
    if (this.shouldGrow) {
      this.size = this.size + this.speedOfGrowth;
      if (this.size >= this.thresholdSize) this.shouldGrow = false;
    } else if (this.size > this.finalSize) {
      this.size = this.size - this.speedOfGrowth;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cycling = 0;
  cycleSpeed = 3;
  livingCells = new Set();
  livingCellsConfig = new Map();
  frameRate(config.frameRate);
  let centerX = Math.floor(windowWidth / (config.cellSize * 2));
  let centerY = Math.floor(windowHeight / (config.cellSize * 2));
  randomWalkers = [
    [centerX, centerY],
    [centerX, centerY],
    [centerX, centerY],
  ];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function cycle() {
  cycling++;
  if (cycleSpeed !== 0 && cycling % cycleSpeed !== 0) return;
  cycling = 0;
  calculateNextLivingCells();
  randowWalker();
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
  rectMode(CENTER);
  ellipse(
    x * config.cellSize,
    y * config.cellSize,
    cellConfig.size,
    cellConfig.size,
  );
}

function draw() {
  background(22, 40);
  randowWalker();
  livingCells.forEach((cell) => displayCell(cell));
  cycle();
}

function randowWalker() {
  randomWalkers.forEach((randomWalker) => {
    randomWalker[0] += getRandomInt(-1, 1);
    randomWalker[1] += getRandomInt(-1, 1);
    if (randomWalker[0] >= windowWidth || randomWalker[1] >= windowHeight) {
      return;
    }
    let cell = cantor(randomWalker[0], randomWalker[1]);
    livingCells.add(cell);
    livingCellsConfig.set(cell, new CellConfig());
    let cell2 = cantor(randomWalker[0] + 1, randomWalker[1] + 1);
    livingCells.add(cell2);
    livingCellsConfig.set(cell2, new CellConfig());
    let cell3 = cantor(randomWalker[0] + 1, randomWalker[1] - 1);
    livingCells.add(cell3);
    livingCellsConfig.set(cell3, new CellConfig());
    let cell4 = cantor(randomWalker[0] - 1, randomWalker[1] + 1);
    livingCells.add(cell4);
    livingCellsConfig.set(cell4, new CellConfig());
    let cell5 = cantor(randomWalker[0] - 1, randomWalker[1] - 1);
    livingCells.add(cell5);
    livingCellsConfig.set(cell5, new CellConfig());
  });
}

function mouseDragged() {
  let x = Math.round(mouseX / config.cellSize);
  let y = Math.round(mouseY / config.cellSize);
  let cell = cantor(x, y);
  livingCells.add(cell);
  livingCellsConfig.set(cell, new CellConfig());
}
