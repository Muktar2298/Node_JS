const EventEmitter = require("events");
const emitter = new EventEmitter();

//--Register and eventListener for the bellRing event --//
//emitter.on("bellRing", () => {
//   console.log("We need to Run");
// });
emitter.on("bellRing", ({ period, text }) => {
  console.log(`We need to run the school because ${period} ${text}`);
});

//--raise an (or define or register) event --//
// emitter.emit("bellRing");
// emitter.emit("bellRing", { period: "last", text: "period is ended!" });
setTimeout(() => {
  emitter.emit("bellRing", { period: "last", text: "period is ended!" });
}, 2000);
