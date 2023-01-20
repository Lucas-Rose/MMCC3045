import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
import { PointerLockControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/PointerLockControls.js"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

const controls = new PointerLockControls(camera, document.body);
let cameraLock = false
let xSpeed = 0
let ySpeed = 0
let speed = .1

document.body.addEventListener("click", async () => {
    await document.body.requestPointerLock();
    cameraLock = true
})

document.onkeydown = function (e) {
    e = e || window.event;
    if(cameraLock == true){
        if(e.code = "keyW"){

        }
        if(e.code = "keyS"){
            
        }
        if(e.code = "keyA"){
            
        }
        if(e.code = "keyD"){
            
        }
    }
};


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();