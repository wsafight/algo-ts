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

  findPrev (item: T) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.value !== item) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) {
      return null
    }
    return currentNode
  }

  remove (item: T) {
    const prevNode = this.findPrev(item)
    if (prevNode) {
      console.log('未找到元素')
      return
    }
    prevNode.next = prevNode.next.next
  }
}