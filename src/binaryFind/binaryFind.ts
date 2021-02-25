export default function binaryFind(sortedArr: number[], target: number) {
  const len = sortedArr.length
  if (len === 0) {
    return -1
  }
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target === mid) {
      return mid
    } else if (target < sortedArr[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}