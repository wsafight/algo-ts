export const MAX_SKIP_NODE_LEVEL = 16;

interface SkipListNodeProps<T> {
  /** 存放了每个节点的数据 */
  data: T | null
  /** 当前节点处于整个跳表索引的级数  */
  maxLevel: number
  /** 存放着很多个索引
   * 如果用p表示当前节点，用level表示这个节点处于整个跳表索引的级数；那么p[level]表示在level这一层级p节点的下一个节点
   * p[level-n]表示level级下面n级的节点
   * */
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
