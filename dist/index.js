"use strict";
//1//
async function delay(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(`Выполнено через ${ms} миллисекунд`), ms));
}
async function runSequentially() {
    const result1 = await delay(1000);
    console.log(result1);
    const result2 = await delay(2000);
    console.log(result2);
    const result3 = await delay(3000);
    console.log(result3);
}
runSequentially();
//2//
async function processString(str) {
    return new Promise((resolve) => setTimeout(() => resolve(str.toUpperCase()), 1000));
}
async function processArray(arr) {
    const results = await Promise.all(arr.map(processString));
    console.log(results);
}
processArray(["привет", "мир", "typescript"]);
//3//
async function taskWithError() {
    const p1 = Promise.resolve("Промис 1");
    const p2 = Promise.reject("Ошибка в Промисе 2");
    const p3 = Promise.resolve("Промис 3");
    try {
        const results = await Promise.all([p1, p2, p3]);
        console.log(results);
    }
    catch (error) {
        console.error("Обнаружена ошибка:", error);
    }
}
taskWithError();
//4//
async function delayTime(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
}
async function processNumbers(arr) {
    const results = await Promise.all(arr.map(delayTime));
    console.log("Завершено через миллисекунды:", results);
}
processNumbers([1000, 2000, 3000]);
