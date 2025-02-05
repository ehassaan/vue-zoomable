import { computed, Ref } from 'vue';
import { useButtons } from './buttons';
import { useMouse } from './mouse';
import { useTouch } from './touch';
import { useTransform } from './transform';
import { useWheel } from './wheel';



export function useZoomable({ props, onChange, container, target
}: { props: any, onChange: any, container: Ref<HTMLElement>; target: Ref<HTMLElement>; }) {

  const transform = useTransform({ props, onChange, container, target });
  const touch = useTouch({ props, transform });
  const wheel = useWheel({ props, transform });
  const mouse = useMouse({ props, transform });
  const buttons = useButtons({ props, transform });

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