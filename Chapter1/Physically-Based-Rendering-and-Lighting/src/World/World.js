import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createLights } from './components/lights.js'
import { createScene } from './components/scene.js'
import { createControls } from './systems/controls.js'

import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/loop.js'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera
let renderer
let scene
let loop

class World {
  constructor(container) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()

    container.append(renderer.domElement)
    loop = new Loop(camera, scene, renderer)

    const controls = createControls(camera, renderer.domElement)

    const cube = createCube()
    const light = createLights()

    loop.updatables.push(cube)
    loop.updatables.push(controls)
    scene.add(cube, light)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera)
  }
  start() {
    loop.start()
  }
  stop() {
    loop.stop()
  }
}

export { World }
