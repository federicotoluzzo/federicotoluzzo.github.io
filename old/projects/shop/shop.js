"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
// @ts-ignore
var GLTFLoader_js_1 = require("three/addons/loaders/GLTFLoader.js");
var OrbitControls_js_1 = require("three/addons/controls/OrbitControls.js");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth < window.innerHeight ? window.innerWidth * 0.8 : window.innerHeight * 0.8, window.innerWidth < window.innerHeight ? window.innerWidth * 0.8 : window.innerHeight * 0.8);
document.getElementById("renderer").appendChild(renderer.domElement);
/*const price = document.createElement("p");
price.className = "label";
price.innerHTML = "&#x20AC 24.99";
document.getElementById("renderer").appendChild(price);*/
var checkout = document.createElement("a");
checkout.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
checkout.style.display = "block";
checkout.className = "label";
checkout.innerHTML = "&#x1F6D2";
document.getElementById("renderer").appendChild(checkout);
var loader = new GLTFLoader_js_1.GLTFLoader();
var controls = new OrbitControls_js_1.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
animate();
function animate() {
    requestAnimationFrame(animate);
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();
    renderer.render(scene, camera);
}
loader.load('3dpea.gltf', function (gltf) {
    // Add the loaded model to your scene
    var model = gltf.scene;
    model.traverse(function (obj) {
        if (obj.isMesh) {
            obj.material = new THREE.MeshStandardMaterial({ color: 0x082008 }); // Apply the new material to each mesh
        }
    });
    scene.add(model);
    // Position the camera to view the model
    camera.position.set(0, 0, 150); // Adjust as needed
    // Add lights if necessary
    var ambientLight = new THREE.RectAreaLight(0xFFFFFF, 10);
    ambientLight.position.set(-50, 70, 0);
    ambientLight.width = 1000;
    ambientLight.height = 1000;
    ambientLight.lookAt(gltf.scene.position);
    scene.add(ambientLight);
    /*const asd = new THREE.BoxGeometry(100, 1, 100, 1,1,1);
    const as = new THREE.Mesh(asd);
    as.position.set(-50, 70, 0);
    scene.add(as);*/
    // Render the scene
    renderer.setClearColor(0x19053F); // Light gray background color
    renderer.render(scene, camera);
    camera.lookAt(gltf.scene.position);
}, undefined, function (error) {
    console.error('Error loading glTF model:', error);
});
