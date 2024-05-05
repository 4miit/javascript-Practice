


const student = {
    fullName:"amit kumar",
    marks: 94.2,
    printMarks:()=>{
        console.log("marks = ",this.marks);
    },
};





const employee = {
    calcTax(){
        console.log("tax rate in 10%");
    },
    calcTax2:function(){
        console.log("hello tax");
    },
};

const karan ={
    salary: 50000,
    calcTax(){
        console.log("gst");
    }
};

karan.__proto__=employee;



class toyotaCar{
    constructor(legender,o){
        console.log("creating new object");
        this.r=legender;
        this.p=o;
    }
    
    start(){
        console.log("start");
    }
    
    stop(){
        console.log("yadav");
    }
}

let fortuner = new toyotaCar("defender",789);
console.log(fortuner);
let lexus = new toyotaCar("endaver",34);
console.log(lexus);
console.log(fortuner.start);
console.log(fortuner.constructor);
console.log(lexus.constructor);
console.log(lexus.r);
console.log(lexus.p);
console.log(fortuner.r);
console.log(fortuner.p);




class toyotaCar{
    constructor(legender,o){
        console.log("creating new object");
        this.r=legender;
        this.p=o;
        console.log(o);
        console.log(legender);
    }
    
    start(){
        console.log("start");
    }
    
    stop(y){
        console.log(y);
    }
    
    stp(){
        console.log("yadav");
    }
    
    setBrand(hi){
        this.h=hi;
        console.log(hi);
    }
}

let fortuner = new toyotaCar("legender",34);
console.log(fortuner);
let lexus = new toyotaCar("endover",44);
console.log(lexus);
lexus.setBrand("maruti");
fortuner.stop("rai");
fortuner.stp();



class parent{
    hello(){
        console.lo("bye");
    }
}

class child extends parent{}

let obj = new child;



class person{
    constructor(){
        this.species="homo sapiens";
    }
    
    eat(){
        console.log("khana");
    }
    
    sleep(){
        console.log("sona")
    }
    work(){
        console.log("do nothing");
    }
}

class engineer extends person{
    work(){
        console.log("solve problems");
    }
}

class doctor extends person{
    work(){
        console.log("treat patients");
    }
}
let amit = new engineer;
let p1 = new person;
console.log(p1);
console.log(amit);



class person{
    constructor(){
        this.species="homo sapiens";
    }
    
    eat(){
        console.log("khana");
    }
    
    sleep(){
        console.log("sona")
    }
    work(){
        console.log("do nothing");
    }
}

class engineer extends person{
    work(){
        console.log("solve problems");
    }
}

class doctor extends person{
    work(){
        console.log("treat patients");
    }
}
let amit = new engineer;
let p1 = new person;
console.log(p1);
console.log(amit);



class person{
    constructor(name){
        this.species="homo sapiens";
    }
    
    eat(){
        console.log("khana");
    }
}

class engineer extends person{
    constructor(stream){
        super();
        this.branch = stream;
        console.log(stream);
    }
    
    
    work(){
        console.log("solve the problem");
    }
}
let engobj = new engineer("chemical engineer");







class person{
    constructor(name){
        this.species="homo sapiens";
        this.naam = name ="ayush kumar";
        console.log(name);
    }
    
    eat(){
        console.log("khana");
    }
}

class engineer extends person{
    constructor(name){
        super(name);
        this.branch = name;
        console.log(name);
    }
    
    
    work(){
        console.log("solve the problem");
    }
}
let engobj = new engineer("amit kumar");


console.log(engobj);
console.log(engobj.species);






class person{
    constructor(homo){
        this.species=homo;
        console.log(homo);
    }
    
    eat(){
        console.log("khana");
    }
}

class engineer extends person{
    constructor(stream){
        super(stream);
        this.branch = stream;
        console.log(stream);
    }
    work(){
        super.eat();
        console.log("solve the problem");
    }
}
let engobj = new engineer("chemical engineer");
console.log(engobj.work());

let data = "information";
class user{
    constructor(x,y){
        this.j=x;
        this.k=y;
        console.log(x);
        console.log(y);
    }
    
    viewData(){
        console.log("viewing the data =",data);
    }
}

class admin extends user{
    constructor(u,v){
        super(u,v);
    }
    editData(){
        data = "new value";
    }
}


let student1 = new user("amit kumar","xyz@123");
let student2= new user("alok kumar","abc@gmail.com");
let student3= new user("he","pqr@gmail.com");

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student3.viewData());
console.log(student3.j,student1.k);

let admin1 = new admin(" kumar","123");

console.log(admin1);




let a = 5;
let b = 10;

console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);
try{
    console.log(j);    
}
catch(kuchhv){
    console.log(kuchhv);
}
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);





function getData(dataId, getnextdata1, getnextdata2,getnextdata3,getnextdata4,getnextdata5){
    setTimeout(() =>{
        console.log("data = ",dataId);
        getnextdata1();
        getnextdata2();
        getnextdata3();
        getnextdata4();
        getnextdata5();
    },1000);
}

getData(1, () =>{
    console.log("getting data 2......");
    getData(2, () => {
        console.log("getting data 3......");
        getData(3 , () => {
            console.log("getting data 4......");
            getData(4 , () => {
                console.log("getting data 9......");                    //THIS IS CALL BACK HELL
                getData(9);
            });
        });
    });
});




let promise = new Promise( (resolve,reject) => {
    console.log("i am apromise");
    reject("error");
});                          
console.log(promise);



let promises = new Promise( (resolve,reject) => {
    console.log("i am apromise");
    resolve("resolved");
});                          
console.log(promises);





function getData(dataId,getNextData){
    return new Promise((resolve,reject)  => {
        setTimeout(() =>{
            console.log("data = ",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },3000);
    });
}
let p = getData(123);
console.log(p);





function getData(dataId,getNextData){
    return new Promise((resolve,reject)  => {
        setTimeout(() =>{
            console.log("data = ",dataId);
            reject("error");
            if(getNextData){
                getNextData();
            }
        },3000);
    });
}
let p = getData(123);
console.log(p);





const getPromise = () => {
    return new Promise( (resolve,reject) => {
        console.log("i am apromise");
        resolve("1234");
    });                          
}

let promise = getPromise();
promise.then( (res)  => {
    console.log("promise fullfilled",res);
});





const getPromise = () => {
    return new Promise( (resolve,reject) => {
        console.log("i am apromise");
        reject("1234");
    });                          
}

let promise = getPromise();
promise.then( (res)  => {
    console.log("promise fullfilled",res);
});

promise.catch( (err) => {
    console.log("rejected",err);
})





function asyncFunction(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log("some data returning");
            resolve("result");
        },3000);
    });
}

console.log("fetching data1");
let p = asyncFunction();

p.then( (res) => {
     console.log(res);
    });
    
    p.catch( (err) => {
        console.log(err);
    })
    
    
    
    
    
    
    function asyncFunction(){
        return new Promise( (resolve,reject) => {
            setTimeout( () => {
                console.log("some data returning");
                reject(" err");
            },3000);
        });
    }
    
    console.log("fetching data1");
let p = asyncFunction();

p.then( (res) => {
    console.log(res);
});

p.catch( (err) => {
    console.log(err);
});





function asyncFunction1(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log("returning data 1");
            reject("minor err");
        },4000);
    });
}

function asyncFunction2(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log("returning data 2");
            reject("minor err");
        },6000);
    });
}

console.log("fetching data1");
let p = asyncFunction1();

p.then( (res) => {
    console.log(res);
});

p.catch( (err) => {
    console.log(err);
});


function asyncFunction1(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log("returning data 1");
            resolve("result 1");
        },4000);
    });
}

function asyncFunction2(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log("returning data 2");
            resolve("result 2");
        },4000);
    });
}


console.log("fetching data1");
let p1 = asyncFunction1();

p1.then( (res) => {
    console.log(res);
    console.log("fetching data 2");
    let p2 = asyncFunction2();
    p2.then( (res) => {
        console.log(res);
    })
});

p1.catch( (err) => {
    console.log(err);
});






function asyncFunction1(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log("returning data 1");
            reject("err1 1");
        },4000);
    });
}

function asyncFunction2(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log("returning data 2");
            reject("err2 2");
        },4000);
    });
}


console.log("fetching data1");
let p1 = asyncFunction1();

p1.then( (res) => {
    console.log(res);
    console.log("fetching data 2");
    let p2 = asyncFunction2();
    p2.then( (res) => {
        console.log(res);
    });
});

p1.catch( (err) => {
    console.log(err);
    console.log("fetching data 2");
    let p2 = asyncFunction2();
    p2.catch( (err2) => {
        console.log(err2);
    });
});






function getData(dataId,){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("data = ",dataId)
            resolve("success");
        },1500);
    })
}

getData(1).then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res);
        getData(3).then((res) => {
            console.log(res); 
            getData(4).then((res) => {
                console.log(res);
            });
        });
    });
});







function getData(dataId,){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("data = ",dataId)
            resolve("success");
        },1500);
    })
}


getData(1)
.then((res) => {
    return getData(2);
})
.then((res) => {
    return getData(3)
})
.then((res) => {
    return getData(4);
})
.then((res) => {
    return getData(5)
})
.then((res) => {
    console.log(res);
});


function getData(dataId,){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("data = ",dataId)
            resolve("success");
        },1500);
    })
}


getData(1)
.then(() => {
    return getData(2);
})
.then(() => {
    return getData(3)
})
.then(() => {
    return getData(4);
})
.then(() => {
    return getData(5)
})
.then((res) => {
    console.log(res);
});





async function hello(){
    console.log("hi");
}




function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },3000);
    });
}

async function getWeatherData(){
    await api();
    await api();
    await api();
    await api();
}
getWeatherData();




function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("data = ",dataId)
            resolve("success");
        },2000);
    })
}
 async function getAllData(){
     console.log("getting data1....")
    await getData(1);
    console.log("getting data2....")
    await getData(2);
    console.log("getting data3....")
    await getData(3);
    console.log("getting data4....")
    await getData(4);
}

getAllData();





let URL = "https://cat-fact.herokuapp.com/facts";
let g = document.querySelector(".api");
let promise = fetch(URL);
console.log(promise);

const getFact = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    console.log(data[0].text);
    g.innerText=data[0].text;
};

getFact();








let URL = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(URL);
console.log(promise);

const getFact = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    console.log(data[0].text);
    g.innerText=data[3].text;
};

let h = document.querySelector(".btn");
const g = document.querySelector(".api");
h.addEventListener("click",getFact);






let URL = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(URL);
console.log(promise);

const getFact = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    console.log(data[0].text);
    g.innerText=data[3].text;
};

let h = document.querySelector(".btn");
const g = document.querySelector(".api");
h.addEventListener("click",getFact);


let arr = [4,5,6,7,8,9];

function filterDouble(arr){
    let newArr =[];
    
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2==0){
            newArr.push(arr[i]*2);
        }
    }
    
    return newArr;   
}

console.log(filterDouble(arr));


let arr = [4,5,6,7,8,9];

function filterDouble(arr){
    let newArr =[];
    
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2==0){
            newArr.push(arr[i]*2);
        }
    }
   
    console.log(newArr);
}

filterDouble(arr);



let arr = [4,5,6,7,8,9];

(function filterDouble(arr){
    let newArr =[];
    
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2==0){
            newArr.push(arr[i]*2);
        }
    }
    
    console.log(newArr); 
    
})(arr);



let arr = [2,3,4,5,6,7,8];

console.log(arr.filter((a) => a %  2 == 0).map((a) => a * 2));


let arr = [6,7,8,9,5,4];

console.log(arr.filter((a) => a%2!==0).map((a) => a*4));

function sum(nums){

    let add = 0;
    for(let i = 0 ; i< nums.length; i++){
        add += nums[i];
    }
    return add;
}
let number =[1,2,3,4,5];
console.log(sum(number));


let str = "hello";
str[0] = "B";
str = "B";
console.log(str);

*/


let a =3;
let b =4;
let c,d=0;
for(let i = a; i<=b ; i++){
     c = Math.pow(i,3);
     d+=c;
    }

console.log(d);




console.log("server file is running");

function abc(a,b){
    return a+b;
}

let res=abc(7,8);
console.log(res);


function abc(a,b){
    return a+b;
}

let res=abc(6,35);
console.log(res);




function abc(a,b){
    return a+b;
}

let res=abc(7,8);
console.log(res);



let v = (a,b) =>{
    return a+b;
}
let g=v(7,6);
console.log(g);


function callback(){
    console.log("hi i am amit");
}

const add = function(a,b,callback){
        var result = a+b;
        console.log("result :" + result);
        callback();
}
add(7,7,callback);


function callback(){
    console.log("hi i am amit");
}

const add = function(a,b,callback){
    var result = a+b;
    console.log("result :" + result);
    callback();
}
add(7,7,callback);




(function (a,j){
    console.log("hi i am amit");
    console.log(a+j);
})(9,8);




function callback(){
    console.log("hi i am amit");
}

( function(a,b,callback){
    var result = a+b;
    console.log("result :" + result);
    callback();
})(7,8,callback);


function callback(){
    console.log("hi i am amit");
}
let u=6,v=9;
( function(a,b,callback){
    var result = a+b;
    console.log("result :" , result);
    callback();
})(v,u,callback);


function callback(){
    console.log("hi i am amit");
    console.log(u,v);
}

{var u=6,v=9;}

( function(a,b,callback){
    var result = a+b;
    console.log("result :" , result);
    console.log(u,v);
    callback();
})(v,u,callback);



function callback(){
    console.log("hi i am amit");
    var u=6,v=9;
    console.log(u,v);
}





( function(a,b,callback){
    var result = a+b;
    console.log("result :" , result);
    console.log(u,v);
    callback();
})(v,u,callback);





const add = function (a,b,callback){
    let result = a+b;
    console.log(result);
    callback(7,90);
}

add(6,87,(v,n)=>{
    console.log(v+n)
})

const add = function (a,b,callback){
    let result = a+b;
    console.log(result);
    callback(7,90);
}

add(6,87,(v,n)=>console.log(v+n))






var fs = require("fs");
var os = require("os");

var user = os.userInfo();
console.log(user.username);

fs.appendFile("greeting.txt", "hello node js"   + user.username + "!\n" ,()=>{
    console.log("file is created");
});
console.log(os);
console.log(fs);



const notes =require("./notes.js");
var _ = require("lodash");
                                                                  
let age = notes.age;
console.log(age);

var result = notes.addnumber(age+18,10)
console.log(age);
console.log("result is :", result);

var data = ["person","amit","amit",1,2,4,1,4,2,"hello","9"];
var filter= _.uniq(data);
console.log(filter);

console.log(_.isString("prince"));
console.log(_.isString(9));
console.log(_.isString(true));

const jsonString = '{"name":"john","age": 23,"city": "new York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.name);
console.log(typeof jsonObject);


objectToconvert = {
    name : 'amit kumar',
    age: 23,
};
const json =JSON.stringify(objectToconvert);
console.log(json)
console.log(json.name)

console.log(typeof json);



const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('welcome to my hotel how i can help you')
})

app.get('/chicken',(req,res) =>{
    res.send('sure sir , i would love to serve chicken')
})                              

app.get('/idli',(req,res) =>{
    var customizedIdli = {
        name : 'rava idli',
        size : '10 cm diameter',
        is_sambhar : true,
        coconutChutny : false
    };
    res.send(customizedIdli)
})

app.listen(3000,() =>{
    console.log('listen on port 3000');
})





const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('welcome to my hotel how i can help you')
})

app.get('/chicken',(req,res) =>{
    res.send('sure sir , i would love to serve chicken')
})                              

app.get('/idli',(req,res) =>{
    var customizedIdli = {
        name : 'rava idli',
        size : '10 cm diameter',
        is_sambhar : true,
        coconutChutny : false
    };
    res.send(customizedIdli)
})


app.post('/person', (req,res) => {
    res.send('data is saved');
})

app.listen(3000,() =>{
    console.log('listen on port 3000');
})








