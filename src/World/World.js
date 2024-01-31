import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";
import { createAxesHelper, createGridHelper } from "./components/helpers.js";
import {loadBirds} from "./components/birds/birds.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/rendrer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

//we do this so that we can't access these variables from outside the module
let camera;
let renderer;
let scene;
let loop;
let controls;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);
    
    const { ambientLight, mainLight } = createLights();
  
    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);

    // scene.add(createAxesHelper(), createGridHelper());
  }
  async init() {
    const { parrot, flamingo, stork } = await loadBirds();
    controls.target.copy(parrot.position);
    loop.updatables.push(parrot, flamingo, stork);
    scene.add(parrot, flamingo, stork);
  }
  //draw a single frame
  render() {
    renderer.render(scene, camera);
  }
  //start the animation loop
  start() {
    loop.start();
  }
  stop() {
    loop.stop();
  }
}
export { World };
