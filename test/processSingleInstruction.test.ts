import { processSingleInstruction, Position } from '../src'

test('moveRover - facing south, move 1', () => {
  // given
  const start: Position = { x: 0, y: 2, direction: 'S' }
  const mapSize = [5, 5] as [number, number]
  const instructions = 'M'

  // when
  const result = processSingleInstruction(start, mapSize, instructions)

  // then
  expect(result).toEqual({ x: 0, y: 1, direction: 'S' })
})

test('moveRover - facing east, move 1', () => {
  // given
  const start: Position = { x: 0, y: 0, direction: 'E' }
  const mapSize = [5, 5] as [number, number]
  const instructions = 'M'

  // when
  const result = processSingleInstruction(start, mapSize, instructions)

  // then
  expect(result).toEqual({ x: 1, y: 0, direction: 'E' })
})

test('moveRover - facing south, turn L', () => {
  // given
  const start: Position = { x: 0, y: 0, direction: 'S' }
  const mapSize = [5, 5] as [number, number]
  const instructions = 'L'

  // when
  const result = processSingleInstruction(start, mapSize, instructions)

  // then
  expect(result).toEqual({ x: 0, y: 0, direction: 'E' })
})

test('moveRover - facing south, turn R', () => {
  // given
  const start: Position = { x: 0, y: 0, direction: 'S' }
  const mapSize = [5, 5] as [number, number]
  const instructions = 'R'

  // when
  const result = processSingleInstruction(start, mapSize, instructions)

  // then
  expect(result).toEqual({ x: 0, y: 0, direction: 'W' })
})
