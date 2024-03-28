import { PerspectiveCamera } from 'https://cdn.skypack.dev/three@0.149.0'

function createCamera() {
  const camera = new PerspectiveCamera(30, 1, 0.1, 100)

  camera.position.set(0, 0,20 )

  return camera
}

export { createCamera }
