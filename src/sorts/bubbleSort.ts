export default function bubbleSort<T>(arr: T[]) {
  const len = arr.length
  if (len <= 1) {
    return
  }
  for (let i = 0; i < len; i++) {
    let sorted = true
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        sorted = false
      }
    }
    if (sorted) {
      break
    }
  }
}