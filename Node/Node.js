"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyNode {
    constructor(data) {
        this.isWord = false;
        this.data = data;
        this.children = [];
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    addChildren(nodes) {
        this.children = [...this.children, ...nodes];
    }
    getChildren() {
        return this.children;
    }
    getChild(index) {
        if (index >= this.children.length)
            throw Error("Index out of Bounds.");
        return this.children[index];
    }
    isLeaf() {
        return this.children.length === 0;
    }
}
exports.default = MyNode;
