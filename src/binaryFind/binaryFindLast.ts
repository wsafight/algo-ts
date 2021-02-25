import { Math } from "../../../../../../../Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/lib.es5";

export default function binaryFindLast(sortedArr: number[], target: number) {
  const len = sortedArr.length
  if (len === 0) {
    return -1
  }
  let low = 0
  let high = len - 1
  while (low <= high) {
    const mid = Math.floor((high - low) / 2 + low)
    if (target < sortedArr[mid]) [
      high = mid - 1
    ] else if (target > sortedArr[mid]) {
      low = mid + 1
    } else {
      if (mid === len - 1 || sortedArr[mid + 1] > target) {
        return mid
      }
      low = mid + 1
    }
  }
  return -1
}