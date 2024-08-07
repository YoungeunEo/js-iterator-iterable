let arr = [1, 2, 3, 4, 5];
let iterator = arr[Symbol.iterator]();

console.log(iterator);
let result = iterator.next();
console.log(result);

while(!result.done) {
    console.log(result.value);
    result = iterator.next();
}

let copy = [...iterator];
console.log(copy);
class Sequence{
    constructor(from=0, to= Infinity, interval=1) {
        this.from = from;
        this.to = to;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let next = this.from;
        return {
            next: () => {
                if(next <= this.to){
                    let result = {value: next, done: false};
                    next += this.interval;
                    return result;
                }
                return{value: undefined, done: true};
            }
        }
    }
}
let evenNumbers = new Sequence(2, 10, 2);
let iterator = evenNumbers[Symbol.iterator]();
let result = iterator.next();
console.log(result);

while(!result.done){
    console.log(result.value);
    result = iterator.next();
}
위아래 값이 같음
for(let num of evenNumbers)
    console.log(num);


// 여기서부터 제너레이터, 데이터 전체를 다 보내지 않고 잘라서 보낼때 사용
function* generate() {
    console.log("제너레이터 실행");
    console.log("1생성");
    yield 1;
    console.log("2생성");
    yield 2;
    console.log("3생성");
    yield 3;}




let gen = generate();
let result = gen.next();
result = gen.next();
while(!result.done){
    console.log(result.value);
    result =gen.next();
}
for(let ge of gen)
    console.log(gen)



// [Symbol.iterator]() 메서드를 제너레이터 메서드로 구현하여 제너레이터 객체를 반환
// class Sequence {
//     constructor (from = 0, to= Infinity, interval = 1) {
//         this.from = from;
//         this.to = to;
//         this.interval = interval;
//     }
//     *[Symbol.iterator]() {
//         let num = this.from;
//         while(num <= this.to){
//             yield num;
//             num += this.interval;
//         }
//     }
// }
// let evenNumbers = new Sequence(2, 10, 2);
// for(const num of evenNumbers) {
//     console.log(num);
// // }
// function* generateIterables(...iterables) {
//     for(let iterable of iterables)
//         for(let item of iterable)
//             yield item;
// }

// function* generateIterables(...iterables) {
//     for(let iterable of iterables)
//        yield* iterable
//     }
// let evenNumbers = new Sequence(2, 10, 2);
// let generator = generateIterables("abc", [1, 2, 3])
// let arr = [...generator]
// console.log(arr);
