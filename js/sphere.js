let sphere;

let createSphere = function () {
  let geometry = new THREE.SphereGeometry(2, 30, 30);
  let material = new THREE.MeshBasicMaterial({
    color: 0x00a1cb,
    wireframe: true,
  });
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
};
