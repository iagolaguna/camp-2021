function* increase(){
    let index = 0;
    while(true)
        yield index++;
}

const gen = increase(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...