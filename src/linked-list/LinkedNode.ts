import { NodeProps } from "./interface";

export default class LinkedNode<T> implements NodeProps<T> {
  next: NodeProps<T> | null;
  value: T;

  constructor(value: T | null = null) {
    this.value = value
    this.next = null
  }
}
