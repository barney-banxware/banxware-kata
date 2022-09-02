import { Instruction, parseInput, Rover } from '../src'

test('parseInput test', () => {
  // given
  const input = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`

  // when
  const result = parseInput(input)

  // then
  expect(result).toEqual({
    mapSize: [5, 5],
    rovers: [
      {
        position: { x: 1, y: 2, direction: 'N' },
        instructions: [...'LMLMLMLMM'].map((x) => x as Instruction),
      } as Rover,
      {
        position: { x: 3, y: 3, direction: 'E' },
        instructions: [...'MMRMMRMRRM'].map((x) => x as Instruction),
      } as Rover,
    ],
  })
})
