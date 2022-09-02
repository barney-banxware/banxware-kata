import { parseInput } from './parser'
import { processRover } from './rover'

export * from './models'
export * from './parser'
export * from './rover'

export function process(input: string): string {
  const { mapSize, rovers } = parseInput(input)
  const updatedRovers = rovers.map((rover) => processRover(rover, mapSize))
  return updatedRovers.map((rover) => `${rover.x} ${rover.y} ${rover.direction}`).join(' ')
}
