import { World } from "./World/World.js";
//  Create an instance of the World app
async function main() {
  //  Create an instance of the World app
  const container = document.querySelector("#scene-container");

  //Create an instance of the World app
  const world = new World(container);
  // async stuff
  await world.init();
  //  Render the scene
  world.start();
}

main().catch((err) => {
  console.error(err);
});
