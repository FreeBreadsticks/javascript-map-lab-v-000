const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var sortedRobots = robots.map(function(autobot) {
  if (knownDecepticons.includes(autobot.name)) {
    return Object.assign({}, autobot, {
      alliance: "decepticon"
    });
  } else {
    return Object.assign({}, autobot, {
      alliance: "autobot"
    });
  }
});

function isEven(n) {
   return n % 2 == 0;
}


var coloredZebraStripes = zebraStripes.map(function(stripe, index, zebra) {
  if (isEven(index)) {
    return Object.assign({}, stripe, {
      color: "black"
    });
  } else {
    return Object.assign({}, stripe, {
      color: "white"
    });
  }
});
