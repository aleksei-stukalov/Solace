export function callIntervalImmediately(fn, delay) {
  fn();
  return setInterval(fn, delay);
}

export function cache(arr, type) {
  if (!cache.list) {
    cache.list = [];
  }
  let list = cache.list;
  if (type === "image") {
    for (let i = 0; i < arr.length; i++) {
      let img = new Image();
      img.onload = function () {
        let index = list.indexOf(this);
        if (index !== -1) {
          list.splice(index, 1);
        }
      };
      list.push(img);
      img.src = arr[i];
    }
  }
}
