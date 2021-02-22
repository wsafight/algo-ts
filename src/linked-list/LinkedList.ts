import LinkedNode from "./LinkedNode";

export default class LinkedList<T> {
  head: LinkedNode<T>

  constructor(value: T) {
    this.head = new LinkedNode<T>()
  }

  findByValue(item: T): LinkedNode<T> | null {
    let currentNode = this.head.next
    while (currentNode !== null && currentNode.value !== item) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  findByIndex(index: number): LinkedNode<T> | null {
    if (index < 0) {
      return null
    }
    let currentNode = this.head.next
    let pos: number = 0
    while (currentNode !== null && index !== pos) {
      currentNode = currentNode.next
      pos++
    }
    return currentNode
  }

  append(newValue: T) {
    const newNode = new LinkedNode<T>(newValue)
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  insert(newValue: T, value: T) {
    const currentNode = this.findByValue(value)
    if (!currentNode) {
      return
    }
    const newNode = new LinkedNode(newValue)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  findPrev(item: T) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.value !== item) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) {
      return null
    }
    return currentNode
  }

  remove(item: T) {
    const prevNode = this.findPrev(item)
    if (prevNode) {
      console.log('未找到元素')
      return
    }
    prevNode.next = prevNode.next.next
  }

  reverse() {
    const root = new LinkedNode<T>()
    let currentNode = this.head.next
    while (currentNode) {
      const next = currentNode.next
      currentNode.next = root.next
      root.next = currentNode
      currentNode = next
    }
    this.head = root
  }

  checkCircle() {
    let fast = this.head.next
    let slow = this.head
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) {
        return true
      }
    }
    return fast
  }

  removeByIndexFromEnd(index: number) {
    if (this.checkCircle()) return false
    let pos: number = 1
    this.reverse()
    let currentNode = this.head.next
    while (currentNode !== null && pos < index) {
      currentNode = currentNode.next
      pos++
    }
    if (currentNode === null) {
      console.log('无法删除最后一个节点或者该节点不存在')
      return false
    }
    this.remove(currentNode.value)
    this.reverse()
  }

  findMiddleNode() {
    let fast = this.head
    let slow = this.head
    while (fast.next && fast.next.next) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }
}