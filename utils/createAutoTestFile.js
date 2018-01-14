const fs = require('fs')

function testMission (mission) {
  return `
  class ${mission.name}
  {
    campaign = "";
    mission = "${mission.path}";
  };
  `
}

module.exports = function (missions, filePath) {
  const data = `
class TestMissions
{
  ${missions.map(testMission).join('')}
};
  `

  fs.writeFileSync(filePath, data)
}
