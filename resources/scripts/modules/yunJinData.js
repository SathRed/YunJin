//Array with Yun Jin's raw stat data
const baseStats = [
  //["level","baseHP","baseATK", "baseDEF", "ER","critRate","CritDMG"],
  ["1/20", 894, 16, 62, 0, 0.05, 0.50],
  ["20/20", 2296, 41, 158, 0, 0.05, 0.50],
  ["20/40", 2963, 53, 204, 0, 0.05, 0.50],
  ["40/40", 4438, 80, 306, 0, 0.05, 0.50],
  ["40/50", 4913, 77, 339, 0.067, 0.05 , 0.50],
  ["50/50", 5651, 101, 389, 0.067, 0.05, 0.50],  
  ["50/60", 6283, 113, 433, 0.133, 0.05, 0.50],
  ["60/60", 7021, 126, 484, 0.133, 0.05, 0.50],
  ["60/70", 7495, 134, 517, 0.133, 0.05, 0.50],
  ["70/70", 8233, 148, 567, 0.133, 0.05, 0.50],
  ["70/80", 8707, 156, 600, 0.20, 0.05, 0.50],
  ["80/80", 9445, 169, 651, 0.20, 0.05, 0.50],
  ["80/90", 9919, 178, 684, 0.267, 0.05, 0.50],
  ["90/90", 10657, 191, 734, 0.267, 0.05, 0.50]
];


const cloudGrazingStrike = {
  "Description": {
    "Normal Attack": "Performs up to five consecutive spear strikes.",
    "Charged Attack": "Consumes a certain amount of Stamina to lunge forward, dealing damag to opponents along the way.",
    "Plunging Attack": "Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact."
  }
}
const openingFlourish = {};
const cliffbreakersBanner = {
  "Description": {
    
  },
  "DMG Increase (DEF%)": [
    0.3216,
    0.3457,
    0.3698,
    0.402,
    0.4261,
    0.4502,
    0.4824,
    0.5146,
    0.5467,
    0.5789,
    0.611,
    0.6432,
    0.6834,
    0.7236
  ]
};

//Object with Yun Jin's talents
const talents = {
  cloudGrazingStrike,
  openingFlourish,
  cliffbreakersBanner
}

export {baseStats, cliffbreakersBanner};