export const listenerManager = (function createListenerManager() {
  let count = 0;
  function setListener(eventType, fn) {
    if (count === 0) {
      document.addEventListener(eventType, fn);
      count++;
    }
  }
  return {
    setListener: setListener,
  };
}());
