export default function mergeSortLoop (arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }
  mergeSort(arr, 0, len);
  return arr;
};

// merge sort by loop with chunk stack
// - neighbor two chunks in stack are neighbors in the array
// - max chunk stack size: log(n)
// - e.g. trace of stack state of chunk length
//   [1] => [1,1] => [2] => [2,1] => [2,1,1] => [2,2] => [4] => ...
function mergeSort(array, first, last) {
  if (last - first <= 1) return array;
  // in C
  // - max stack size is: smax = 0; while (len > 0) {smax++;len>>1;}
  // - make stack as maxsize array of chunk struct. not pointer of the struct
  var stack = [];
  var remain = first;
  while (remain < last) {
    // cut 1 element chunk
    stack.push({
      first: remain,
      last: remain + 1,
      length: 1,
    });
    remain++;

    // merge conditions:
    // - last two chunk become same size
    // - no more chunk remained on array
    while (
      stack.length > 1 &&
      (remain >= last ||
        stack[stack.length - 2].length < stack[stack.length - 1].length * 2)
      ) {
      var pre = stack[stack.length - 2];
      var cur = stack.pop();
      // assert pre.last === cur.first
      mergeNeighbor(array, pre.first, pre.last, cur.last);
      // add two chunks as single chunk
      pre.last = cur.last;
      pre.length += cur.length;
    }
  }
  return array;
}

// merge of merge sort with addtional buffers
function mergeNeighbor(arr, first, connect, last) {
  // escape both buffers
  var left = arr.slice(first, connect);
  var lcur = 0,
    llast = connect - first;
  var right = arr.slice(connect, last);
  var rcur = 0,
    rlast = last - connect;

  var cur = first;
  while (lcur < llast && rcur < rlast) {
    var lval = left[lcur];
    var rval = right[rcur];
    if (lval <= rval) {
      // (lval <= rval) for sort stable
      arr[cur++] = lval;
      lcur++;
    } else {
      arr[cur++] = rval;
      rcur++;
    }
  }

  // copy back to remained side (one of the two loops is always empty)
  // C: memcpy(left+lcur, array+cur, llast-lcur)
  while (lcur < llast) arr[cur++] = left[lcur++];
  while (rcur < rlast) arr[cur++] = right[rcur++];
  return arr;
}

