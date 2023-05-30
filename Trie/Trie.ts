import Node from "../Node/Node";

class Trie {
  tree: Node[];

  constructor() {
    this.tree = [];
  }

  addWord(word: string): void {
    let activeNode: Node | undefined = this.tree[this.tree.length];
    for (let node of this.tree) {
      if (node.getData() === word[0]) activeNode = node;
    }

    if (!activeNode) {
      activeNode = new Node(word[0]);
      this.tree.push(activeNode);
    }

    for (let i = 1; i < word.length; i++) {
      const char = word[i];
      let existingChild: Node | undefined = activeNode
        .getChildren()
        .find((node) => node.getData() === char);

      if (!existingChild) {
        const newElement: Node = new Node(char);
        activeNode.addChildren([newElement]);
        activeNode = newElement;
      } else {
        activeNode = existingChild;
      }
    }

    activeNode.isWord = true;
  }

  private traversePath(
    word: string,
    node: Node,
    currentSearch: string
  ): boolean {
    currentSearch += node.getData();

    if (currentSearch === word && node.isWord) return true;
    if (node.isLeaf()) return false;

    for (let i = 0; i < node.getChildren().length; i++) {
      if (this.traversePath(word, node.getChild(i), currentSearch)) return true;
    }

    return false;
  }

  contains(word: string): boolean {
    for (let path of this.tree) {
      if (this.traversePath(word, path, "")) return true;
    }

    return false;
  }

  getTree(): Node[] {
    return this.tree;
  }
}

export default Trie;
