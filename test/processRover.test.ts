import { Direction, Instruction, Position, processRover } from '../src'

test('process instruction list - rover 1', () => {
  // given
  const position: Position = { x: 1, y: 2, direction: Direction.N }
  const mapSize = [5, 5] as [number, number]
  const instructions = [...'LMLMLMLMM'].map((x) => x as Instruction)

  // when
  const result = processRover({ position, instructions }, mapSize)

  // then
  expect(result).toEqual({ x: 1, y: 3, direction: Direction.N })
})

test('process instruction list - rover 2', () => {
  // given
  const position: Position = { x: 3, y: 3, direction: Direction.E }
  const mapSize = [5, 5] as [number, number]
  const instructions = [...'MMRMMRMRRM'].map((x) => x as Instruction)

  // when
  const result = processRover({ position, instructions }, mapSize)

  // then
  expect(result).toEqual({ x: 5, y: 1, direction: Direction.E })
})
