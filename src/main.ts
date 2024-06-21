import './style.css'
import { ArcRotateCamera, Engine, Scene, TransformNode, Vector3 } from 'babylonjs'
import { GUI3DManager, HolographicButton, SpherePanel } from '@babylonjs/gui'



var createScene = function (engine: Engine, canvas: HTMLCanvasElement) {
  var scene = new Scene(engine);
  var camera = new ArcRotateCamera("cam", -Math.PI / 2, Math.PI / 2, 10, Vector3.Zero());
  var anchor = new TransformNode("");

  camera.wheelDeltaPercentage = 0.01;
  camera.attachControl(canvas, true);

  // Create the 3D UI manager
  var manager = new GUI3DManager(scene);

  var panel = new SpherePanel();
  panel.margin = 0.2;

  manager.addControl(panel);
  panel.linkToTransformNode(anchor);
  panel.position.z = -1.5;

  // Let's add some buttons!
  var addButton = function() {
      var button = new HolographicButton("orientation");
      panel.addControl(button);

      button.text = "Button #" + panel.children.length;
  }

  panel.blockLayout = true;
  for (var index = 0; index < 60; index++) {
      addButton();    
  }
  panel.blockLayout = false;

  return scene

};

const init = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement
  const engine = new Engine(canvas)
  const scene = createScene(engine, canvas)
  engine.runRenderLoop(() => {
    scene.render()
  })
}

init()