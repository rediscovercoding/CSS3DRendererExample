import './style.css'
import * as THREE from 'three'
import {CSS3DRenderer, CSS3DObject} from 'three/examples/jsm/renderers/CSS3DRenderer'
import{OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

//Sizes
const sizes={
    width:window.innerWidth,
    height:window.innerHeight
}


//Scene
const scene= new THREE.Scene()

//Objects
const geometry= new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshNormalMaterial()
const mesh= new THREE.Mesh(geometry, material)
// mesh.rotation.x=Math.PI*0.25;
// mesh.rotation.y=Math.PI*0.25;
scene.add(mesh)

const element= document.createElement('div')
element.className='wordClass'
element.innerHTML='<iframe src="https://threejs.org/"></iframe>'
element.style.color='blue'
element.style.fontSize='5px'
element.style.width='200px'
const textObj= new CSS3DObject(element)
textObj.scale.set(0.00300,0.00600,0.00400)
textObj.position.z=0.5
textObj.position.x=-0.15
textObj.position.y=-0.05


scene.add(textObj)



//Camera
const camera= new THREE.PerspectiveCamera(75,800/600,0.1,100)
camera.position.z=3
scene.add(camera)


//Renderers
const renderer= new THREE.WebGLRenderer();
renderer.setSize(sizes.width,sizes.width/1.33)
document.body.appendChild(renderer.domElement)

//Renderer 2
const renderer2= new CSS3DRenderer()
renderer2.setSize(sizes.width,sizes.width/1.33)
renderer2.domElement.style.position='absolute'
renderer2.domElement.style.top='0px'
document.body.appendChild(renderer2.domElement)

//Controls
const orbitcontrol = new OrbitControls(camera,renderer2.domElement)

//create an axis
const axis = new THREE.Vector3(0,1,0)
let rad=0.02
//Render or animate
const clock= new THREE.Clock();

const animate=()=>{
    const elapsedTime= clock.getElapsedTime()
    renderer2.render(scene,camera)
    renderer.render(scene,camera)
    // mesh.rotation.y+= Math.PI*0.0051;

    
    // textObj.rotateOnAxis(axis,rad)
    // textObj.position.z=Math.cos(elapsedTime)
    // textObj.position.x=Math.sin(elapsedTime)
    
    requestAnimationFrame(animate)
}

animate()