import { WebGLRenderer } from 'https://cdn.skypack.dev/three@0.149.0'

function createRenderer() {
  const renderer = new WebGLRenderer({})

  // turn on the physically correct lighting mode
  renderer.physicallyCorrectLights = true
  return renderer
}

export { createRenderer }
