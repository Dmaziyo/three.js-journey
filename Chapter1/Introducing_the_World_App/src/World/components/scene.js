import { Color, Scene } from 'three'

function createScene() {
  const scene = new Scene()

  scene.background = new Color('#22c16f')
  return scene
}

export { createScene }
