import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight, window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight);
document.body.appendChild(renderer.domElement);
const loader = new GLTFLoader();
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
animate();
function animate() {
    requestAnimationFrame(animate);
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();
    renderer.render(scene, camera);
}
loader.load('3dpea.gltf', (gltf) => {
    // Add the loaded model to your scene
    const model = gltf.scene;
    scene.add(model);
    // Position the camera to view the model
    camera.position.set(0, 0, 150); // Adjust as needed
    // Add lights if necessary
    const ambientLight = new THREE.RectAreaLight(0xFFFFFF, 1);
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
    renderer.setClearColor(0xeeeeee); // Light gray background color
    renderer.render(scene, camera);
    camera.lookAt(gltf.scene.position);
}, undefined, (error) => {
    console.error('Error loading glTF model:', error);
});
