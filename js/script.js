window.addEventListener('resize', resize, false);

function resize(){
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5);
    camera.position.y = 2;
    camera.position.z = 5;
}

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5);
camera.position.y = 2;
camera.position.z = 5; //카메라 위치 이동, default로 아래쪽 바라봄.

const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry();

// const material = new THREE.MeshPhongMaterial({color: 0x00ff00});

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

let loader = new THREE.GLTFLoader();
let model;
loader.load('scene.gltf', function(gltf){
    model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
    renderer.render(scene, camera);
});

{
    const color = 0xFFFFFF;
    const intensity = 1;
    const hlight = new THREE.AmbientLight(0x404040, 5);
    scene.add(hlight);
    const dlight = new THREE.DirectionalLight(color, intensity);
    dlight.position.set(-1, 2, 4);
    dlight.castShadow = true;
    scene.add(dlight);
    const plight = new THREE.PointLight(0xc4c4c4, 1);
    plight.position.set(0, 300, 500);
    scene.add(plight);
}

function render(time) {
    time *= 0.0005;  // convert time to seconds

    model.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}

requestAnimationFrame(render);

// let scene, camera, renderer;

// function init() {
//     scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xdddddd);

//     camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);

//     hlihgt = new THREE.AmbientLight(0x404040, 100);
//     scene.add(hlight);

//     renderer = new THREE.WebGLRenderer({antialias:true});
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     let loader = new THREE.GLTFLoader();
//     loader.load('scene.gltf', function(gltf){
//         scene.add(gltf.scene);
//         renderer.render(scene, camera);
//     });
//     init();
// }