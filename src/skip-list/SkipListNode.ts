export const MAX_SKIP_NODE_LEVEL = 16;

interface SkipListNodeProps<T> {
  data: T | null
  maxLevel: number
  refer: SkipListNode<T>[]
}

export default class SkipListNode<T> implements SkipListNodeProps<T> {
  data: T | null;
  maxLevel: number;
  refer: SkipListNode<T>[];

  constructor({
                data = null,
                maxLevel = 0,
                refer = new Array(MAX_SKIP_NODE_LEVEL)
              } = {}) {
    this.data = data;
    this.maxLevel = maxLevel;
    this.refer = refer
  }


}
