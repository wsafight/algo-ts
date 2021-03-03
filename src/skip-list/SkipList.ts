import SkipListNode, { MAX_SKIP_NODE_LEVEL } from "./SkipListNode";

export default class SkipList<T> {
  /** head属性是一个Node类的实例，指向整个链表的开始 */
  head: SkipListNode<T>
  /** levelCount属性表示了当前跳表索引的总共级数 */
  levelCount: number

  constructor() {
    this.head = new SkipListNode();
    this.levelCount = 1;
  }

  /**
   * 跳表里面插入数据的时候，随机生成索引的级数
   */
  static randomLevel() {
    let level = 1;
    for (let i = 1; i < MAX_SKIP_NODE_LEVEL; i++) {
      if (Math.random() < 0.5) {
        level++;
      }
    }
    return level;
  }

  insert(value:T) {
    const level = SkipList.randomLevel();
    const newNode = new SkipListNode({
      data: value,
      maxLevel: level
    })
    const update = (new Array(level) as any).fill(new SkipListNode());
    let p = this.head;
    for(let i = level - 1; i >= 0; i--) {
      while(p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }
      update[i] = p;
    }
    for(let i = 0; i < level; i++) {
      newNode.refer[i] = update[i].refer[i];
      update[i].refer[i] = newNode;
    }
    if(this.levelCount < level) {
      this.levelCount = level;
    }
  }

  find(value: T) {
    if(!value){return null}
    let p = this.head;
    for(let i = this.levelCount - 1; i >= 0; i--) {
      while(p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }
    }

    if(p.refer[0] !== undefined && p.refer[0].data === value) {
      return p.refer[0];
    }
    return null;
  }

  remove(value: T) {
    let _node;
    let p: SkipListNode<T> = this.head;
    const update = new Array(new SkipListNode());
    for(let i = this.levelCount - 1; i >= 0; i--) {
      while(p.refer[i] !== undefined && p.refer[i].data < value){
        p = p.refer[i];
      }
      update[i] = p;
    }

    if(p.refer[0] !== undefined && p.refer[0].data === value) {
      _node = p.refer[0];
      for(let i = 0; i <= this.levelCount - 1; i++) {
        if(update[i].refer[i] !== undefined && update[i].refer[i].data === value) {
          update[i].refer[i] = update[i].refer[i].refer[i];
        }
      }
      return _node;
    }
    return null;
  }
}