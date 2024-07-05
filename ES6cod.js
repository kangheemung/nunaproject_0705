//1 다음코드를es6문법을 이용하여 재작성하시오
let name = "noona's fruite store";
let fruits=["banana","apple","mango"]
let address="Seoul";
//let store={name:name,fruits:fruits ,address:address}
const store = { name,fruits ,address}
console.log(store)
//2 es문법을 이용하여 다음과 같이 출력하시오
const meassage=`제 가게 이름은 ${ store.name}입니다.위치는 ${store.address}에 있습니다.`
console.log(meassage)


///3 다음코드를Desyructoring을 이용하여 해결하시오
//function calculate(obj){
  //  return obj.a+obj.b+obj.c//　함수안을 바꾸기
//}
//calculate({a:1,b:2,c:3})

function calculate(obj ) {
    let {a,b,c}=obj
    return a + b + c;
}

calculate({ a:1, b:2, c:3 });


//4 다음 문제의 정답이 true 가 나오게 하시오
let storeName = "noona store";
let storeFruits = ["banana", "apple", "mango"];
let storeAddress = {
    country: "Korea",
    city: "Seoul"
};
//function findStore(obj){
  //  return Newname === "noona stroe" &&city==="Soul"
//}
function findStore({ name, address: { city } }) {
    return name === "noona store" && city === "Seoul";
}

//console.log(findStore({Newname,Newfruits,Newaddress}))

console.log(findStore({ name: storeName, fruits: storeFruits, address: storeAddress }));

//5.다음과 같이 프린트되게 코드를 바꾸시오
//function getNumber(){
  //  let array=[1,2,3,4,5,6]//여기서부터 바꾸세요
    //return{first,third,forth}
//}
//console.log(getNumber())//결과값 {first:1,third:3,forth:4}
function getNumber() {
    let array = [1, 2, 3, 4, 5, 6];
    const [first, , third, forth] = array; // Destructuring 사용
    return { first, third, forth };
}

console.log(getNumber());
//6.다음 결과가 true가되게 하시오
function getcCalendar(first,...rest){
    return(
        first === "January" &&
        rest[0] === "February" &&
        rest[1] ===  "March" &&
        rest[2] === undefined
    );
}
console.log(getcCalendar("January", "February", "March"));//여기 바꾸기


//7 두 어레이들중 최소값을 찾는 함수를 완성하시오
//function getMinimum(){
  //  let a=[45,23,78]
    //let b =[54,11,9]
    //return Math.min//여기를 바꾸시오
//}
//console.log(getMinimum())

function getMinimum() {
    let a = [45, 23, 78];
    let b = [54, 11, 9];
    return Math.min(...a, ...b);
}

console.log(getMinimum());

//8다음의 함수를 화살표 함수로 바꾸시오
//function sumNumber(){
    //여기를 바꾸기
  //  const sum =function(a,b){
    //return a+b;
//};
//return sum(40,10);
//}
//const sumNumbers = () => {
   // const sum = (a, b) => {
   //     return a + b;
   // };
   // return sum(40, 10);
//}
function sumNumbers(){
    const sum = (a, b) =>  a + b
    return sum(40, 10);
}
console.log(sumNumbers());
//다음 함수를 화살표로 함수로 바꾸시오


//function sumNumber(){
//return addNumber(1)(2)(3);
  //  function addNumber(a){
    //    return function(b){
      //      return function(c){
        //        return a + b + c;
          //  };
       // };
   // }
//}
//console.log(sumNumber());
//9 디음함수를 화살표 함수로 바꾸시오.
//const sumNumber = () => {
   // return addNumber(1)(2)(3);
//};
//////
///function addNumber(){
///const addNumber = a => b => c => {
///    return a + b + c;
///};
///}
///console.log(sumNumber());
function sumNumber(){
    const addNumber = (a) => (b) => (c) => a + b + c;
        return  addNumber (1)(2)(3);
    }

    console.log(sumNumber());

//function addNumber(a){
  //  return function(b){
    //    return function(c){
      //      return a+b+c;
       // };
    //};
//}
//return addNumber(1)(2)(3);
//console.log(sumNumber());