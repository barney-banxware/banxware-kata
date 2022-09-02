import { process } from '../src'

test('process test', () => {
  // given
  const input = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`

  // when
  const result = process(input)

  // then
  expect(result).toEqual('1 3 N 5 1 E')
})
