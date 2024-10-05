import { computed, ref } from 'vue';
import { useTransform } from './transform';

export interface TouchPoint { x: number, y: number; }

export function useTouch(props: any, emit: any) {

  let transform = useTransform(props, emit);
  let pointers = ref<{ [id: number]: TouchPoint; }>({});
  let startingTpDist = ref(0);   // distance between two fingers when multi-touch started
  let lastPosition: TouchPoint | null = null;

  function onTouchMove(ev: TouchEvent) {

    // avoid any computation if not necessary
    if (props.disabled || !props.touchEnabled) return;
    if (!props.panEnabled && !props.zoomEnabled) return;
    ev.preventDefault();

    if (ev.touches.length < 1) return;

    console.log("TouchMove: ", ev, transform.pan.value);

    const p1 = ev.touches.item(0);

    if (!p1) return;

    let deltaZoom = 0;
    let center = { x: p1.clientX, y: p1.clientY };

    if (ev.touches.length === 2) {
      const p2 = ev.touches.item(1);

      let res = calculateDistance({
        x: p1 ? p1.clientX : 0,
        y: p1 ? p1.clientY : 0
      }, {
        x: p2 ? p2.clientX : 0,
        y: p2 ? p2.clientY : 0
      });

      if (startingTpDist.value <= 0) {  // pinch started
        startingTpDist.value = res.distance;
        deltaZoom = 0;
      }
      else {
        deltaZoom = (res.distance / startingTpDist.value) - transform.zoom.value;
      }
      center = res.center;
    }
    if (props.zoomEnabled) {
      transform.changeZoom(deltaZoom, "touch");
    }
    console.log("TouchMovePan: ", lastPosition, center, transform.pan.value);

    if (lastPosition === null) {
      lastPosition = {
        x: center.x,
        y: center.y
      };
      return;
    }

    const deltaPan = {
      x: center.x - lastPosition.x,
      y: center.y - lastPosition.y
    };
    if (props.panEnabled) {
      transform.changePan(deltaPan.x, deltaPan.y, "touch");
    }

    lastPosition = {
      x: center.x,
      y: center.y,
    };

  }

  function calculateDistance(p1: TouchPoint, p2: TouchPoint) {
    // distance between two fingers
    let distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    let center = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
    return {
      distance,
      center
    };
  }

  function onTouchStart(ev: TouchEvent) {
    if (props.disabled || !props.touchEnabled) return;

    lastPosition = null;
    document.addEventListener("touchmove", onTouchMove, { passive: false });

    document.addEventListener("touchend", function (evEnd: TouchEvent) {
      if (ev.touches.length < 2) {
        startingTpDist.value = -1; // pinch end
      }
      document.removeEventListener("touchmove", onTouchMove);
    });
  }

  return {
    onTouchStart,
    touchCount: computed(() => Object.keys(pointers.value).length)
  };

}