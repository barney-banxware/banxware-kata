import { Direction, Position, Rover } from './models'

export * from './models'

export function process(input: string): string {
  const { mapSize, rovers } = parseInput(input)
  const updatedRovers = rovers.map((rover) => processRover(rover, mapSize))
  return updatedRovers.map((rover) => `${rover.x} ${rover.y} ${rover.direction}`).join(' ')
}

export function parseInput(input: string): {
  mapSize: [number, number]
  rovers: Array<Rover>
} {
  const lines = input.split('\n').map((x) => x.trim())
  const mapSize = lines
    ?.shift()
    ?.split(' ')
    ?.map((x) => parseInt(x)) as [number, number]

  const rovers: Array<Rover> = []

  while (true) {
    const startLine = lines.shift()?.split(' ')
    if (!startLine || !startLine.length) {
      break
    }

    const position: Position = {
      x: parseInt(startLine[0]),
      y: parseInt(startLine[1]),
      direction: startLine[2] as Direction,
    }

    const instructions = lines.shift()
    if (!instructions) {
      break
    }

    rovers.push({
      position,
      instructions,
    } as Rover)
  }

  return { mapSize, rovers }
}

function processMove(position: Position): Position {
  switch (position.direction) {
    case 'N':
      return {
        ...position,
        y: position.y + 1,
      }

    case 'S':
      return {
        ...position,
        y: position.y - 1,
      }

    case 'E':
      return {
        ...position,
        x: position.x + 1,
      }

    case 'W':
      return {
        ...position,
        x: position.x - 1,
      }
  }
}

function turnLeft(current: Direction): Direction {
  switch (current) {
    case 'N':
      return 'W'

    case 'S':
      return 'E'

    case 'E':
      return 'N'

    case 'W':
      return 'S'
  }
}

function turnRight(current: Direction): Direction {
  switch (current) {
    case 'N':
      return 'E'

    case 'S':
      return 'W'

    case 'E':
      return 'S'

    case 'W':
      return 'N'
  }
}

export function processSingleInstruction(start: Position, mapSize: [number, number], instruction: string): Position {
  switch (instruction) {
    case 'L':
      return {
        ...start,
        direction: turnLeft(start.direction),
      }

    case 'R':
      return {
        ...start,
        direction: turnRight(start.direction),
      }

    case 'M':
    default:
      return processMove(start)
  }
}

export function processRover(rover: Rover, mapSize: [number, number]): Position {
  let position = rover.position

  for (const instruction of rover.instructions) {
    position = processSingleInstruction(position, mapSize, instruction)
  }

  return position
}
