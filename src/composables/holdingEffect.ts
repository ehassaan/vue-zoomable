import { ref, watch, watchEffect } from 'vue';


export function useHoldingEffect() {

  let clear = 0;

  /**
   * 
   * @param cbOnce this function will be called only once when the button is pressed
   * @param cbWhileHold this function will be called throughout the duration while button is pressed and hold
   * @param minHoldDuration minimum press and hold duration before cbWhileHold is called for first time
   * @param holdCbInterval interval to repeatedly call cbWhileHold
   */
  function startHold(cbOnce: Function, cbWhileHold: Function, minHoldDuration: number, holdCbInterval: number) {
    cbOnce();

    clear = window.setTimeout(() => {

      clear = window.setInterval(() => {
        cbWhileHold();
      }, holdCbInterval);

    }, minHoldDuration);
  }

  function clearHold() {
    if (!clear) return;
    window.clearInterval(clear);
    clear = 0;
  }

  return {
    startHold,
    clearHold
  };
}

