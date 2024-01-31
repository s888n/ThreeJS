import { MeshStandardMaterial } from "three";

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: "firebrick",
    flatShading: true,
  });

  // just as with geometries, we need to clone materials
  const detail = new MeshStandardMaterial({
    color: "darkslategrey",
    flatShading: true,
  });

  return { body, detail };
}

export { createMaterials };
