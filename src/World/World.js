import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";

import { createRenderer } from "./systems/rendrer.js";
import { Resizer } from "./systems/Resizer.js"

//we do this so that we can't access these variables from outside the module
let camera;
let renderer;
let scene;

class World {

    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        const cube = createCube();
        const light = createLights();
        scene.add(cube, light);

        const resizer = new Resizer(container, camera, renderer);
    }
    render() {
        renderer.render(scene, camera);
    }
}
export { World };