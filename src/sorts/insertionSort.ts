export default function insertionSort<T>(arr: T[]) {
  const len = arr.length
  if (len <= 1) {
    return
  }
  for (let i = 1; i < len; i++) {
    const temp = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = temp
  }
}