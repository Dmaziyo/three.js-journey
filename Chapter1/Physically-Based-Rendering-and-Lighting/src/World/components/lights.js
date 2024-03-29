import { DirectionalLight } from 'https://cdn.skypack.dev/three@0.149.0'

function createLights() {
  const light = new DirectionalLight('white', 8)

  //move the light start position
  light.position.set(-10,10,10);
  return light
}
export { createLights }
