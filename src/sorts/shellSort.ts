export default function ShellSort<T>(arr: T[]) {
  let len = arr.length

  if (len <= 1) {
    return
  }

  let step = 1

  while (step < len / 3) {
    step = 3 * step + 1
  }

  while (step >= 1) {
    for (let i = step; i < len; i++) {
      // 将array[i]插入到array[i-step],array[i-2*step],array[i-3*step]...当中
      for (let j = i; j - step >= 0 && arr[j] < arr[j - step]; j -= step) {
        [arr[j], arr[j - step]] = [arr[j - step], arr[j]]
      }
    }
    step = Math.floor(step / 3)
  }

}