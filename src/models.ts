export enum Direction {
  N = 'N',
  S = 'S',
  E = 'E',
  W = 'W',
}

export enum Instruction {
  M = 'M',
  L = 'L',
  R = 'R',
}

export interface Position {
  x: number
  y: number
  direction: Direction
}

export interface Rover {
  position: Position
  instructions: Instruction[]
}
