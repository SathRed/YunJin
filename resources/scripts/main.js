import {baseStats, cliffbreakersBanner} from "./modules/yunJinData";

const yunJinLevelForm = document.getElementById("Yun-Jin-Level");

for(let i = 0; i < baseStats.length; i++){
  const newOption = `<option value="${baseStats[i][0]}">${baseStats[i][0]}</option>`;
  yunJinLevelForm.innerHTML += newOption;
}









/*
//let level = 
let baseDEF = yunJinData.baseStats[14][3];
//let percentDEF = 0;
//let DEF = 0;
//let partyElements = 0;

const baseDEF = 734;
const bonusScaling = 0.5789;

const calcPercentDEF = () => {
  const huskBonus = 0.54;
  const subStats = 0;
  const mainStats = 0.583 * 3;
  const gorouBonus = 0.25;

  return huskBonus + subStats + mainStats + gorouBonus;
};

const calcTotalDEF = () => {
  const gorouBonus = 371;
  return baseDEF * (1 + calcPercentDEF()) + gorouBonus;
}

const calcRawQBonus = () => {
  return calcTotalDEF() * bonusScaling;
}

const calcBonusDamageTotal = () => {
  return calcRawQBonus() * (1 + 2.2) * (1 + 0.466 + 0.35);
}

console.log(calcBonusDamageTotal());
*/