import { Group, MathUtils } from "three";
import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";
import { createMeshes } from "./meshes.js";

const weelSpeed = MathUtils.degToRad(24);

class Train extends Group {
  constructor() {
    super();
    this.meshes = createMeshes();

    this.add(
      this.meshes.cabin,
      this.meshes.nose,
      this.meshes.chimney,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel,
    );
  }
  tick(delta) {
    this.meshes.smallWheelRear.rotation.y += weelSpeed * delta;
    this.meshes.smallWheelFront.rotation.y += weelSpeed * delta;
    this.meshes.smallWheelCenter.rotation.y += weelSpeed * delta;
    this.meshes.bigWheel.rotation.y += weelSpeed * delta;
  }
}

export { Train };
