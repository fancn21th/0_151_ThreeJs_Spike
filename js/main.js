let scene, camera, renderer;
let add = 0.01;
let light;

// set up the environment -
// initialize scene, camera, objects and renderer
let init = function () {
  // create the scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // create an locate the camera

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 20;

  // axes helper
  let axes = new THREE.AxesHelper(10);
  scene.add(axes);

  light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  createGeometry();

  // create the renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
};

// main animation loop - calls 50-60 in a second.
let mainLoop = function () {
  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();
