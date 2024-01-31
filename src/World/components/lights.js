import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
  // Create an ambient light
  const ambientLight = new HemisphereLight(
    "white", // bright sky color
    "darkslategrey", // dim ground color
    3, // intensity
  );
  // Create a directional light
  const mainLight = new DirectionalLight("white", 2);
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };
