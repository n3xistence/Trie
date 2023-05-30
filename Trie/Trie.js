"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("../Node/Node"));
class Trie {
    constructor() {
        this.tree = [];
    }
    addWord(word) {
        let activeNode = this.tree[this.tree.length];
        for (let node of this.tree) {
            if (node.getData() === word[0])
                activeNode = node;
        }
        if (!activeNode) {
            activeNode = new Node_1.default(word[0]);
            this.tree.push(activeNode);
        }
        for (let i = 1; i < word.length; i++) {
            const char = word[i];
            let existingChild = activeNode
                .getChildren()
                .find((node) => node.getData() === char);
            if (!existingChild) {
                const newElement = new Node_1.default(char);
                activeNode.addChildren([newElement]);
                activeNode = newElement;
            }
            else {
                activeNode = existingChild;
            }
        }
        activeNode.isWord = true;
    }
    traversePath(word, node, currentSearch) {
        currentSearch += node.getData();
        if (currentSearch === word && node.isWord)
            return true;
        if (node.isLeaf())
            return false;
        for (let i = 0; i < node.getChildren().length; i++) {
            if (this.traversePath(word, node.getChild(i), currentSearch))
                return true;
        }
        return false;
    }
    contains(word) {
        for (let path of this.tree) {
            if (this.traversePath(word, path, ""))
                return true;
        }
        return false;
    }
    getTree() {
        return this.tree;
    }
}
exports.default = Trie;
