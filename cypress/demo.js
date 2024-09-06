let aa ='nancy'
console.log(aa);

if(aa== 'hello world'){
    console.log(a)
}
else {
    console.log('not hello worlf')
}

function add(a,b) {
    return a+b
}
res = add(3,4)
console.log(res);

// 箭头函数

add = (a,b ) => {
    return a+b 
}
console.log(add(5,6))

// 回调函数

function print(string,callback){
    console.log(string)
    console.log("after log")
    callback()

}
print("a",function(){

})
