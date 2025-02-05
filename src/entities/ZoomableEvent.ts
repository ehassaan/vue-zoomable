

export interface ZoomableEvent {
  zoom: number,
  delta: {
    zoom: number,
    pan: {
      x: number,
      y: number,
    };
  };
  pan: {
    x: number,
    y: number,
    deltaX: number,
    deltaY: number,
  },
  type: string,
}
