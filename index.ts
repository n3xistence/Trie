import Trie from "./Trie/Trie";

let tree: Trie = new Trie();

const words: string[] = [
  "word",
  "war",
  "car",
  "man",
  "woman",
  "node",
  "code",
  "string",
];

const searches: string[] = [
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
  console.log(
    `Tree ${tree.contains(word) ? "contains" : "does not contain"} ${word}.`
  );
}
