import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from 'https://cdn.skypack.dev/three@0.149.0'

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2)

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: '#3aff96' })

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)

  cube.rotation.set(-1, -1, 0.8);

  return cube
}

export { createCube }
