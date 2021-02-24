export default function mergeSort<T>(arr:T[]){
  const len = arr.length
  if (len <= 1) {
    return
  }
  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return mergeArr(mergeSort<T>(left), mergeSort<T>(right))
}

function mergeArr<T>(left: T[], right: T[]) {
  const temp: T[] = []
  let leftIndex = 0;
  let rightIndex = 0;
  const leftLength = left.length
  const rightLength = right.length
  while (leftLength > leftIndex && rightLength > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex++])
    } else {
      temp.push(right[rightIndex++])
    }
  }
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}