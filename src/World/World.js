import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";
import { createAxesHelper,createGridHelper } from "./components/helpers.js";
import { Train } from "./components/Train/Train.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/rendrer.js";
import { Resizer } from "./systems/Resizer.js"
import { Loop } from "./systems/Loop.js";

//we do this so that we can't access these variables from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {

    constructor(container) {


        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        const controls = createControls(camera, renderer.domElement);
        const { ambientLight, mainLight } = createLights();
        const train = new Train();
        loop.updatables.push(controls, train);
        scene.add(ambientLight, mainLight, train);
        const resizer = new Resizer(container, camera, renderer);

        scene.add( createAxesHelper(),createGridHelper());
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