import Rox from "rox-browser";

const flags = {
  contrastButtons: new Rox.Flag(),
};

async function initRollout() {
  const options = {};

  Rox.register("frontend", flags);

  await Rox.setup("614cb9429c58545c995db1d5", options);
}

initRollout().then(function () {
  console.log("Done loading CloudBees Feature Management");
});
