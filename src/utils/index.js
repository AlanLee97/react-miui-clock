export function onLongTap(cb = () => {}, el = window) {
  let start = 0;
  let end = 0;
  const onTouchStart = () => { start = Date.now(); }
  const onTouchEnd = () => { 
    end = Date.now();
    if(end - start > 800) {
      cb();
    }
  }
  const destroy = () => {
    el.removeEventListener('touchstart', onTouchStart);
    el.removeEventListener('touchend', onTouchEnd);
  }
  el.addEventListener('touchstart', onTouchStart);
  el.addEventListener('touchend', onTouchEnd);

  return {
    destroy
  }
}