import { BoxGeometry, Mesh, MeshStandardMaterial,MathUtils } from 'three'
const radiansPerSecond = MathUtils.degToRad(30) //相对于速度
function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2)

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: '#3aff96' })

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material)

  cube.tick = delta => {
    cube.rotation.z += radiansPerSecond * delta //速度*时间=规定的路程
    cube.rotation.x += radiansPerSecond * delta
    cube.rotation.y += radiansPerSecond * delta
  }

  cube.rotation.set(Math.PI / 4, Math.PI / 4, 0)

  return cube
}

export { createCube }
