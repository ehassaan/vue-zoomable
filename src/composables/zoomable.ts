import { computed } from 'vue';
import { useButtons } from './buttons';
import { useMouse } from './mouse';
import { useTouch } from './touch';
import { useTransform } from './transform';
import { useWheel } from './wheel';


export function useZoomable(props: any, emit: any) {

  const touch = useTouch(props, emit);
  const wheel = useWheel(props, emit);
  const mouse = useMouse(props, emit);
  const buttons = useButtons(props, emit);
  const transform = useTransform(props, emit);

  return {
    zoom: transform.zoom,
    pan: transform.pan,
    setZoom: transform.setZoom,
    setPan: transform.setPan,
    onWheel: wheel.onWheel,
    onTouchStart: touch.onTouchStart,
    onButtonUp: buttons.onButtonUp,
    onButtonDown: buttons.onButtonDown,
    onPointerDown: mouse.onPointerDown,
    onDblClick: mouse.onDblClick,
  };

}