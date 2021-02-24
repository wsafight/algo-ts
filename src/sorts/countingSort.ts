export default function countingSort(arr: number[]) {
  const len = arr.length
  if (len <= 1) {
    return
  }

  const max = findMaxValue(array)
  const counts = new Array(max + 1)

  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0
    }
    counts[element]++
  })

  let sortedIndex = 0
  counts.forEach((count, i) => {
    while (count > 0) {
      arr[sortedIndex] = i
      sortedIndex++
      count--
    }
  })
}

function findMaxValue(arr: number[]) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
