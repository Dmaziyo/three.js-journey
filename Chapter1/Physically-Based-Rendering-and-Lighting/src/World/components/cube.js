import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2)

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: '#3aff96' })

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)

  cube.rotation.set(Math.PI / 4, Math.PI / 4, 0)

  return cube
}

export { createCube }
