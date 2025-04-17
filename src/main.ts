let config = {
  //init
  cellSize: 15,
  initCells: [
    4317, 4410, 5892, 6587, 6001, 10208, 10066, 9924, 6246, 5891, 10065, 4132,
    4223, 6473, 6358, 4409, 4133, 6247, 5783, 6586, 6824, 1488, 1601, 1543,
    1658, 1489, 1657, 7179, 1261, 1211, 1593, 1260, 1376, 1311, 2267, 1724,
    10909, 11208, 1723, 10762, 11059, 2335, 10766, 1665, 11207, 8702, 3705,
    1783, 1788, 6670, 2452, 2331, 3879, 2334, 2403, 9344, 1390, 1848, 3374,
    3129, 11521, 1744, 2263, 5176, 7410, 3792, 3791, 13742, 1787, 3942, 13743,
    1742, 5158, 2381, 4483, 3625, 2374, 6845, 1521, 11839, 1337, 2522, 10936,
    6958, 7282, 1669, 1863, 2262, 7757, 989, 7059, 2104, 6929, 4481, 6786, 7929,
    2246, 2314, 2245, 7197, 3541, 3456, 7162, 7038, 1561, 11686, 2521, 8048,
    11084, 1685, 1684, 3588, 3577, 9910, 2240, 7303, 7546, 1870, 6443, 6556,
    5003, 5725, 1792, 1368, 1864, 6674, 13576, 9073, 1862, 5512, 4707, 1188,
    2939, 11211, 7408, 8701, 1755, 3624, 3412, 1670, 8162, 8290, 11994, 9481,
    11085, 10052, 10193, 7803, 3375, 3941, 5622, 2973, 11827, 2329, 5278, 2288,
    7660, 3576, 1577, 1749, 6497, 2974, 1001, 7048, 8021, 8825, 4479, 2571,
    2325, 1674, 4804, 5280, 8566, 1618, 1676, 6707, 6940, 10913, 11830, 7287,
    8696, 6963, 7799, 2226, 2294, 9208, 9909, 6841, 6959, 8183, 10924, 4568,
    3050, 12928, 2787, 4517, 5382, 7533, 1815, 4976, 2502, 2647, 7785, 3763,
    2461, 2534, 2677, 4032, 6441, 3492, 3594, 8293, 4981, 3673, 3848, 2308,
    2788, 7020, 5261, 5364, 7286, 8022, 8148, 4576, 4298, 4579, 8540, 5107,
    6790, 3508, 11840, 10774, 11234, 3579, 1289, 1339, 3852, 11071, 12925,
    13248, 7146, 7632, 14081, 5517, 3855, 1140, 8569, 3423, 6688, 6499, 6612,
    1122, 4300, 4195, 1852, 5832, 1316, 10921, 4111, 5707, 5617, 4863, 7780,
    1559, 1236, 6457, 12607, 4203, 6119, 6708, 7178, 1977, 2040, 11063, 11514,
    10620, 10186, 6554, 1124, 1221, 13910, 11984, 9620, 1391, 7425, 5578, 5685,
    4569, 13252, 13088, 11673, 1098, 5074, 7168, 4031, 1576, 8421, 8552, 1808,
    1931, 5057, 2540, 12769, 4293, 2303, 2442, 3590, 3849, 5498, 3509, 6846,
    1235, 7196, 7042, 7161, 4858, 5390, 5816, 3838, 1340, 10776, 4902, 5103,
    900, 985, 7882, 1937, 5474, 988, 2646, 5394, 958, 957, 8430, 8692, 2427,
    2356, 11983, 11982, 2096, 2257, 2394, 2610, 1397, 1450, 4516, 4611, 6689,
    8175, 3589, 3503, 6385, 6614, 5178, 5383, 944, 4033, 2174, 7063, 7423, 6558,
    1369, 4202, 7801, 12604, 12764, 9209, 1216, 3491, 1139, 1187, 3095, 6706,
    3330, 3497, 4962, 8962, 5308, 5516, 3506, 5166, 5373, 4778, 10775, 6384,
    2678, 1341, 6687, 4567, 1854, 2865, 1051, 4518, 2467, 5204, 2648, 5209,
    6611, 3211, 4883, 3847, 2446, 3097, 1046, 6257, 7069, 8277, 4575, 12447,
    6009, 6233, 6460, 1673, 7267, 14082, 8306, 8436, 8565, 5831, 5163, 8303,
    2362, 3851, 2603, 2676, 7027, 3424, 11070, 6343, 6592, 7299, 1483, 1537,
    1429, 1482, 11213, 10615, 10621, 10915, 9902, 10044, 10911, 10764, 8703,
    2400, 1079, 1126, 13250, 13413, 9072, 9207, 9343, 1750, 1932, 7670, 7921,
    3292, 3373, 3130, 11219, 5175, 7289, 7411, 13412, 13909, 4122, 3679, 1691,
    10337, 10482, 10627, 10773, 5159, 5260, 2237, 4388, 2375, 2444, 2443, 5604,
    5710, 5817, 4957, 5160, 1222, 3839, 9757, 1031, 1076, 7633, 7883, 7756,
    5472, 7058, 2105, 2039, 2169, 11513, 6930, 6906, 6785, 4677, 2496, 2643,
    6920, 7157, 2683, 13255, 1506, 1562, 8176, 8047, 8304, 8037, 3504, 3587,
    3937, 3493, 3662, 901, 2241, 1876, 1936, 7183, 7545, 7669, 6330, 6444, 6328,
    13583, 13581, 5004, 902, 5833, 1791, 6559, 7677, 7926, 8538, 13411, 8938,
    4784, 5407, 4515, 4610, 4706, 1189, 3016, 3331, 3581, 7531, 7905, 8312,
    8180, 8438, 5309, 3495, 7924, 2161, 2160, 5270, 5372, 12768, 10039, 1396,
    1449, 4206, 4394, 3940, 4030, 4472, 2897, 11828, 11981, 2397, 2289, 14248,
    3408, 3768, 5311, 6383, 6727, 2975, 8553, 5082, 5600, 5815, 7658, 7782,
    7907, 3176, 1002, 956, 1047, 1093, 8693, 8958, 5066, 4296, 3494, 4385, 4384,
    2258, 2324, 2393, 2463, 1121, 1168, 1239, 1290, 3175, 5076, 5384, 13915,
    14250, 8697, 12291, 1735, 9901, 5062, 11676, 11985, 11829, 8564, 8829, 8695,
    8828, 8433, 2432, 1220, 14078, 4973, 10777, 12767, 4613, 4612, 4681, 4876,
    2503, 2575, 2574, 3764, 2323, 2392, 2532, 2531, 2605, 2604, 3593, 5266,
    5263, 1930, 12770, 6370, 6950, 2441, 4768, 6792, 4580, 5007, 5208, 7026,
    3425, 10628, 4566, 4662, 6234, 6345, 6458, 10325, 1393, 1392, 899, 3131,
    4380, 3422, 2609, 10618, 6572, 8050, 8305, 6386, 1170, 1915, 1318, 6120,
    6344, 6230, 4864, 1615, 1138, 1186, 6571, 6827, 10330, 8178, 8307, 1032,
    5686, 4474, 1006, 1052, 1097, 1145, 8551, 8407, 3505, 5289, 5499, 6806,
    6923, 5186, 5307, 4485, 6690, 1035, 1081,
  ],

  //Speed
  frameRate: 120,

  //background
  backgroundColor: 22,

  //Cell
  initialSize: 1,
  thresholdSizeMax: 40,
  finalSizeMin: 1,
  finalSizeMax: 10,
  speedOfGrowthMin: 1,
  speedOfGrowthMax: 2,
  strokeWeightMin: 1,
  strokeWeightMax: 4,
  colors: [
    "ff69b4",
    "ff1493",
    "00ff7f",
    "7fffd4",
    "ff4500",
    "ff6347",
    "9400d3",
    "8a2be2",
    "00ced1",
  ],
};

var cycling;
var cycleSpeed;
var livingCells;
var livingCellsConfig;
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

    this.thresholdSize = getRandomInt(this.size, config.thresholdSizeMax);
    this.finalSize = getRandomInt(config.finalSizeMin, config.finalSizeMax);
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
  cycleSpeed = 10;
  livingCells = new Set();
  livingCellsConfig = new Map();

  config.initCells.forEach((cell) => {
    livingCells.add(cell);
    livingCellsConfig.set(cell, new CellConfig());
  });
  frameRate(config.frameRate);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function cycle() {
  cycling++;
  if (cycleSpeed !== 0 && cycling % cycleSpeed !== 0) return;
  cycling = 0;
  calculateNextLivingCells();
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
  background(config.backgroundColor);
  livingCells.forEach((cell) => displayCell(cell));
  cycle();
}
function mouseDragged() {
  let x = Math.round(mouseX / config.cellSize);
  let y = Math.round(mouseY / config.cellSize);
  let cell = cantor(x, y);
  livingCells.add(cell);
  livingCellsConfig.set(cell, new CellConfig());
}
