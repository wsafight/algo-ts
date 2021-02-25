type LessThan =  (a: number, b: number) => boolean

function binarySort<T>(
  arr: T[],
  lessThan: LessThan = (a: number, b: number) => a < b) {
  const len = arr.length
  if (len <= 1) {
    return arr
  }
  innerBinarySort(arr, 0, len, lessThan)
  return arr
}

function innerBinarySort<T>(arr: T[], first: number, last: number, lessThan: LessThan) {
  for (let i = first + 1; i < last; i += 1) {
    let point = binSearch(arr, first, i, arr[i], lessThan);
    cyclicRShift(arr, point, i + 1);
  }
  return arr;
}


function binSearch(arr, first, last, value, lessThan: LessThan) {
  while (first < last) {
    const mid = last + ((first - last) >> 1);
    // the condition makes right most point of same values
    // leftmost if lessThan become "less than equal"
    // rightmost: mid > val
    // leftmost: mid >= val
    if (lessThan(value, arr[mid])) {
      last = mid;
    } else {
      first = mid + 1;
    }
  }
  return first;
}

function cyclicRShift<T>(arr: T[], first: number, last: number) {
  if (last - first <= 1) return arr;
  const mostRight = arr[last - 1];
  // C: memmove(first, first+1, last-first-1)
  for (let cur = last - 1; cur > first; cur -= 1) {
    arr[cur] = arr[cur - 1];
  }
  arr[first] = mostRight;
  return arr;
}