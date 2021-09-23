import Rox from "rox-browser";

export const flags = {
  contrastButtons: new Rox.Flag(),
};

async function initRollout() {
  const options = {};

  Rox.register("frontend", flags);

  await Rox.setup(import.meta.env.VITE_FM_KEY, options);
}

initRollout().then(function () {
  console.log("Done loading CloudBees Feature Management");
});
