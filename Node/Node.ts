class MyNode {
  private data: string;
  private children: MyNode[];
  isWord: boolean = false;

  constructor(data: string) {
    this.data = data;
    this.children = [];
  }

  getData(): string {
    return this.data;
  }

  setData(data: string): void {
    this.data = data;
  }

  addChildren(nodes: MyNode[]): void {
    this.children = [...this.children, ...nodes];
  }

  getChildren(): MyNode[] {
    return this.children;
  }

  getChild(index: number): MyNode {
    if (index >= this.children.length) throw Error("Index out of Bounds.");
    return this.children[index];
  }

  isLeaf(): boolean {
    return this.children.length === 0;
  }
}

export default MyNode;
