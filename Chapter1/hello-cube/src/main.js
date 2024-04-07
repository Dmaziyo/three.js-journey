import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'

// Get the reference to the scene-container
const container = document.querySelector('#scene-container')

// create the scene
const scene = new Scene()

// Set the bg color
scene.background = new Color('skyblue')

// Create a camera
const fov = 35
const aspect = container.clientWidth / container.clientHeight
const near = 0.1
const far = 100

const camera = new PerspectiveCamera(fov, aspect, near, far)

camera.position.set(0, 0, 10)

const geometry = new BoxGeometry(2, 2, 2)

const material = new MeshBasicMaterial()

const cube = new Mesh(geometry, material)

scene.add(cube)

const renderer = new WebGLRenderer()
renderer.setSize(container.clientWidth, container.clientHeight)
renderer.setPixelRatio(window.devicePixelRatio)

renderer.render(scene,camera);

container.append(renderer.domElement)


