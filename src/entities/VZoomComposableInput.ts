

interface ZoomableEvent {
  zoom: number,
  pan: {
      x: number,
      y: number,
      deltaX: number,
      deltaY: number,
  },
  type: string,
}
