//사용자 정의 이터러블, 이터러블/이터레이터 프로토콜 정의 LMS
  
  const iterable = {
    [Symbol.iterator]() { // iteratable의 값은 Symbol.iterator 메서드를 구현하고 있어야하고 iterator를 반환해야함.
        let i = 3;
        return {
            next() {   //iterator는 next를 메소드로 가지고있고 next는 value,done을 가지고 있는 객체를 리턴해야함.
                return i ===0 ? {done: true} : {value: i--, done: false };  //i가 0이 됐다면 그때부터는 항상 done:true return
            }
        }
    }
    };
    let iterator = iterable[Symbol.iterator](); //Symbol.iterator통해 iterator를 반환, iterator는 next통해 내부의 값 조회 가능
    for(const a of iterable) console.log(a); 
     //결론: iterator에 Symbol.iterator가 구현되어 있어서 for of문에 들어갈 수 있고, 안에서 Symbol.iterator를 실행했을 때 next()부터가 실현되는 것
  
