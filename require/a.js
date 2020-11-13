console.log("a.js");
define(["b"],function(res){
    console.log(res);
    return {
        myname:"张三",
        age:20
    }
})