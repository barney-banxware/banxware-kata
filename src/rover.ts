import { Direction, Instruction, Position, Rover } from './models'

const processMove = (position: Position): Position => movements[position.direction](position)

const movements = {
  N: (position: Position) => ({ ...position, y: position.y + 1 }),
  S: (position: Position) => ({ ...position, y: position.y - 1 }),
  E: (position: Position) => ({ ...position, x: position.x + 1 }),
  W: (position: Position) => ({ ...position, x: position.x - 1 }),
}

const leftTurns: { [key in Direction]: Direction } = { N: Direction.W, S: Direction.E, E: Direction.N, W: Direction.S }
const turnLeft = (current: Direction): Direction => leftTurns[current]

const rightTurns: { [key in Direction]: Direction } = { N: Direction.E, S: Direction.W, E: Direction.S, W: Direction.N }
const turnRight = (current: Direction): Direction => rightTurns[current]

export function processSingleInstruction(
  start: Position,
  mapSize: [number, number],
  instruction: Instruction,
): Position {
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
