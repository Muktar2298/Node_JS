const School = require("./schoolEvents");
const school = new School();

school.on("bellRing", ({ period, message }) => {
  console.log(`We need to run because ${period} ${message}`);
});

school.startPeriod();
