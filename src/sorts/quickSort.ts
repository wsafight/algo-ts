export default function quickSort<T>(arr: T[], left = 0, right = arr.length) {
  if (left >= right) {
    return
  }
  const index = partition(arr, left, right)
  quickSort(arr, left, index - 1)
  quickSort(arr, index + 1, right)
}

function partition<T>(arr: T[], left: number, right: number): number {
  const pivotVal = arr[right]
  let pivotIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
      pivotIndex++
    }
  }
  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]
  return pivotIndex
}