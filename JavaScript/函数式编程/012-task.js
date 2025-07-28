import fs from "fs";
import fp from "lodash/fp.js";
import tasks from "folktale/concurrency/task/index.js";
const { split, find } = fp;
const { task } = tasks;

function readFile(filename) {
  return task((resolver) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) resolver.reject(err);
      resolver.resolve(data);
    });
  });
}

readFile(".././package.json")
  .map(split("\n"))
  .map(find((s) => s.includes("name")))
  .run()
  .listen({
    onRejected: (err) => {
      console.log(err);
    },
    onResolved: (data) => {
      console.log(data);
    },
  });
