import { WebGLRenderer } from 'three'

function createRenderer() {
  const renderer = new WebGLRenderer({})

  // turn on the physically correct lighting mode
  renderer.physicallyCorrectLights = true
  return renderer
}

export { createRenderer }
