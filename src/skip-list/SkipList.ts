import SkipListNode, { MAX_SKIP_NODE_LEVEL } from "./SkipListNode";

export default class SkipList<T> {
  head: SkipListNode<T>
  levelCount: number

  constructor() {
    this.head = new SkipListNode();
    this.levelCount = 1;
  }

  randomLevel() {
    let level = 1;
    for (let i = 1; i < MAX_SKIP_NODE_LEVEL; i++) {
      if (Math.random() < 0.5) {
        level++;
      }
    }
    return level;
  }

  insert(value:T) {
    const level = this.randomLevel();
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
}