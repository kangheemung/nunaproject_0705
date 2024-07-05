//1 다음코드를es6문법을 이용하여 재작성하시오
let name = "noona's fruite store";
let fruits=["banana","apple","mango"]
let address="Seoul";
//let store={name:name,fruits:fruits ,address:address}
const store = { name,fruits ,address}
console.log(store)
//2 es문법을 이용하여 다음과 같이 출력하시오
const meassage=`제 가게 이름은 ${ name}입니다.위치는 ${address}에 있습니다.`
console.log(meassage)
///다음코드를Desyructoring을 이용하여 해결하시오
function calculate(obj){
    return obj.a+obj.b+obj.c//　함수안을 바꾸기
}
calculate({a:1,b:2,c:3})
//다음 문제의 정답이 true 가 나오게 하시오
let Newname= "noona store"
let Newfruits=["banana","apple","mango"]
let Newaddress={
    country:"Korea",
    city:"Seoul"
}
function findStore(obj){
    return name ==="noona stroe" &&city==="Soul"
}
console.log(findStore({name,fruits,address}))

//5.다음과 같이 프린트되게 코드를 바꾸시오
function getNumber(){
    let array=[1,2,3,4,5,6]//여기서부터 바꾸세요
    return{first,third,forth}
}
console.log(getNumber())//결과값 {first:1,third:3,forth:4}