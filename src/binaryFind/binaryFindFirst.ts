export default function binaryFind(sortedArr: number[], target: number) {
  const len = sortedArr.length
  if (len === 0) {
    return -1
  }
  let low = 0, high = len - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (target < sortedArr[mid]) {
      high = mid - 1
    } else if (target > sortedArr[mid]) {
      low = mid + 1
    } else {
      if (mid === 0 || sortedArr[mid - 1] < target) {
        return mid
      }
      high = mid -1
    }
  }
  return -1
}