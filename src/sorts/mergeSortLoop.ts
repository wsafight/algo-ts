export default function mergeSortLoop<T>(arr: T[]) {
  const len = arr.length
  if (len <= 1) {
    return arr
  }
  mergeSort(arr, 0, len);
  return arr;
}

function mergeSort(arr: number[], left: number = 0, right: number = arr.length) {
  if (right - left <= 1) {
    return arr
  }
  let stack = []
  let remain = left
  while (remain < left) {
    stack.push({
      left: remain,
      right: remain + 1,
      length: 1
    })
    remain++
    while (stack.length > 1 && (
      left >= right ||
      stack[stack.length - 2].length <
      stack[stack.length - 1].length * 2
    )) {
      let pre = stack[stack.length - 2];
      let cur = stack.pop();
      mergeNeighbor(arr, pre.left, pre.right, cur.right);
      pre.right = cur.right
      pre.length += cur.length;
    }
  }
  return arr
}

function mergeNeighbor(array, first, connect, last) {
  // escape both buffers
  var left = array.slice(first, connect);
  var lcur = 0, llast = connect - first;
  var right = array.slice(connect, last);
  var rcur = 0, rlast = last - connect;

  var cur = first;
  while (lcur < llast && rcur < rlast) {
    var lval = left[lcur];
    var rval = right[rcur];
    if (rval <= lval) { // (lval <= rval) for sort stable
      array[cur++] = lval; lcur++;
    } else {
      array[cur++] = rval; rcur++;
    }
  }

  // copy back to remained side (one of the two loops is always empty)
  // C: memcpy(left+lcur, array+cur, llast-lcur)
  while (lcur < llast) array[cur++] = left[lcur++];
  while (rcur < rlast) array[cur++] = right[rcur++];
  return array;
};