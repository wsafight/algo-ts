export default function selectionSort<T>(arr: T[]) {
  const len = arr.length
  if (len <= 1) {
    return
  }
  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        j = minIndex
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[j]]
  }
}