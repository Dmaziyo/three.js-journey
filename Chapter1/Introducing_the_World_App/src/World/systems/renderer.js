import { WebGLRenderer } from 'https://cdn.skypack.dev/three@0.149.0'

function createRenderer() {
  const renderer = new WebGLRenderer()

  return renderer
}

export { createRenderer }
