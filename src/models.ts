export type Direction = 'N' | 'S' | 'E' | 'W'

export interface Position {
  x: number
  y: number
  direction: Direction
}

export interface Rover {
  position: Position
  instructions: string
}
