import { processSingleInstruction, Position, Direction, Instruction } from '../src'

test('moveRover - facing south, move 1', () => {
  // given
  const start: Position = { x: 0, y: 2, direction: Direction.S }
  const mapSize = [5, 5] as [number, number]
  const instructions = 'M'

  // when
  const result = processSingleInstruction(start, mapSize, Instruction.M)

  // then
  expect(result).toEqual({ x: 0, y: 1, direction: Direction.S })
})

test('moveRover - facing east, move 1', () => {
  // given
  const start: Position = { x: 0, y: 0, direction: Direction.E }
  const mapSize = [5, 5] as [number, number]
  const instructions = 'M'

  // when
  const result = processSingleInstruction(start, mapSize, Instruction.M)

  // then
  expect(result).toEqual({ x: 1, y: 0, direction: Direction.E })
})

test('moveRover - facing south, turn L', () => {
  // given
  const start: Position = { x: 0, y: 0, direction: Direction.S }
  const mapSize = [5, 5] as [number, number]
  const instructions = 'L'

  // when
  const result = processSingleInstruction(start, mapSize, Instruction.L)

  // then
  expect(result).toEqual({ x: 0, y: 0, direction: Direction.E })
})

test('moveRover - facing south, turn R', () => {
  // given
  const start: Position = { x: 0, y: 0, direction: Direction.S }
  const mapSize = [5, 5] as [number, number]
  const instructions = 'R'

  // when
  const result = processSingleInstruction(start, mapSize, Instruction.R)

  // then
  expect(result).toEqual({ x: 0, y: 0, direction: Direction.W })
})
