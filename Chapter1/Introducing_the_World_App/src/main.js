import { World } from './World/World.js'

function main() {
  const container = document.querySelector('#scene-container')
  const btn = document.querySelector('#btn')
  btn.addEventListener('click', () => {
    console.log('clicked')
  })
  const world = new World(container)
  world.render()
}
main()
