let torus;

let createTorus = function () {
  let geometry = new THREE.TorusGeometry(3, 0.01, 30, 30);
  let material = new THREE.MeshBasicMaterial({
    color: 0x10b2cb,
    wireframe: true,
  });
  torus = new THREE.Mesh(geometry, material);
  scene.add(torus);
};
