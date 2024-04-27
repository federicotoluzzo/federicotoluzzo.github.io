import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {Material, MeshBasicMaterial} from "three";
import {roughness} from "three/examples/jsm/nodes/core/PropertyNode";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();
loader.load('3dpea.gltf', (gltf) => {
    // Add the loaded model to your scene
    const model = gltf.scene;
    const material = new Material();
    //material.
    //model.material = material;
    scene.add(model);

    // Position the camera to view the model
    camera.position.set(0, 0, 150); // Adjust as needed

    // Add lights if necessary
    const ambientLight = new THREE.RectAreaLight(0xffffff, 100);
    ambientLight.position.set(-50, 70, 0);
    scene.add(ambientLight);

    // Render the scene
    renderer.setClearColor(0xeeeeee); // Light gray background color
    renderer.render(scene, camera);
}, undefined, (error) => {
    console.error('Error loading glTF model:', error);
});