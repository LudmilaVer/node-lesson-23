"use strict";
async function processString(str) {
    return new Promise((resolve) => setTimeout(() => resolve(str.toUpperCase()), 1000));
}
async function processArray(arr) {
    const results = await Promise.all(arr.map(processString));
    console.log(results);
}
processArray(["привет", "мир", "typescript"]);
