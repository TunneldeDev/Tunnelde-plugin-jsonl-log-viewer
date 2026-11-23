import assert from "node:assert/strict";import {test} from "node:test";import {runCommand as log} from "../index.mjs";

test("invalid editor JSONL reports a bounded summary without returning replacement text", () => {
  const result = log("to-log", { source: "bad\n".repeat(200), document: {} });
  assert.equal(result.error, true);
  assert.match(result.text, /1, 2, 3, 4, 5, 6, 7, 8… \(200\)/);
  assert.doesNotMatch(result.text, /INVALID JSONL/);
});
