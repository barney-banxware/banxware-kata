import { Position, processRover } from '../src'

test('process instruction list - rover 1', () => {
  // given
  const position: Position = { x: 1, y: 2, direction: 'N' }
  const mapSize = [5, 5] as [number, number]
  const instructions = 'LMLMLMLMM'

  // when
  const result = processRover({ position, instructions }, mapSize)

  // then
  expect(result).toEqual({ x: 1, y: 3, direction: 'N' })
})

test('process instruction list - rover 2', () => {
  // given
  const position: Position = { x: 3, y: 3, direction: 'E' }
  const mapSize = [5, 5] as [number, number]
  const instructions = 'MMRMMRMRRM'

  // when
  const result = processRover({ position, instructions }, mapSize)

  // then
  expect(result).toEqual({ x: 5, y: 1, direction: 'E' })
})
