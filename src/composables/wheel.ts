import { useTransform } from './transform';

export function useWheel(props: any, emit: any) {

  let { changeZoom } = useTransform(props, emit);

  function onWheel(ev: WheelEvent) {
    if (props.disabled) return;
    // check if all conditions are met to zoom
    if (!props.wheelEnabled || !props.zoomEnabled) return;

    // normalizes the value of ev.deltaY to either be 1 or -1 and multiplies it with the double click zoom step
    const deltaZoom = props.wheelZoomStep * -1 * ev.deltaY / Math.abs(ev.deltaY);
    changeZoom(deltaZoom, "wheel");

    ev.preventDefault();
  }

  return {
    onWheel
  };
}
