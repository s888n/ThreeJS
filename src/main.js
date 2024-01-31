import { World } from "./World/World.js";
// 1. Create an instance of the World app
function main() {
  // 1. Create an instance of the World app
  const container = document.querySelector("#scene-container");

  //2. Create an instance of the World app
  const world = new World(container);

  // 3. Render the scene
  world.start();
}
main();
