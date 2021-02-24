import insertionSort from "./insertionSort";

export default function bucketSort(arr: number[], bucketSize = 5) {
  const len = arr.length
  if (len <= 1) {
    return arr
  }

  const buckets = createBuckets(arr, bucketSize)
  return sortBuckets(buckets)
}

function createBuckets(arr: number[], bucketSize: number) {
  let minVal = arr[0]
  let maxVal = arr[0]
  // 遍历数组，找到数组最小值与数组最大值
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i]
    } else if (arr[i] > maxVal) {
      maxVal = arr[i]
    }
  }
  // 根据最小值、最大值、桶的大小，计算得到桶的个数
  const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1
// 建立一个二维数组，将桶放入buckets中
  const buckets = []
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  // 计算每一个值应该放在哪一个桶中
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minVal) / bucketSize)
    buckets[bucketIndex].push(arr[i])
  }
  return buckets
}

function sortBuckets(buckets: number[]) {
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i])
      sortedArray.push(...buckets[i])
    }
  }
  return sortedArray
}
