"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Trie_1 = __importDefault(require("./Trie/Trie"));
let tree = new Trie_1.default();
const words = [
    "word",
    "war",
    "car",
    "man",
    "woman",
    "node",
    "code",
    "string",
];
const searches = [
    "word",
    "warm",
    "cat",
    "man",
    "woman",
    "no",
    "code",
    "yes",
];
for (const word of words) {
    tree.addWord(word);
}
for (const word of searches) {
    console.log(`Tree ${tree.contains(word) ? "contains" : "does not contain"} ${word}.`);
}
