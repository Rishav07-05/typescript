"use strict";
// // basic types
// // let a : number = 6; // Number
// // let arr : [number , number , number] = [1 , 2 , 3]; // Tuple
// // let str : string = "Joe"; // String
// // let list : []; // Array
// // any
// // let b : any = 25;
// // b = "hey";
// // Unknown
// // let c : unknown = 25;
// // c = "Rishav"
// // console.log(c);
// // Never
// // function infinite(): never{
// //     while(true){
// //         console.log("Infinite run");
// //     }
// // }
// // infinite();
// // console.log("hey");
// // Void => basically returns nothing
// // function abcd(): void{
// //     console.log("Hey");
// // }
// // abcd();
// // enum => basically used for grouping
// // enum Direction{
// //     top = "TOP",
// //     left = "LEFT",
// //     right = "RIGHT",
// //     bottom = "BOTTOM",
// // }
// // Direction.bottom
// // enums
// // enum Human{
// //     name = "Rishav",
// //     age = 18
// // }
// // console.log(Human.name);
// // type inference => guessing the type itself
// // let a = 12;
// // let b = "Hello";
// // let c = true;
// // Union
// // function abcd(variable: number | string){
// //     if(typeof variable === 'number'){
// //         variable.toFixed(2);
// //     }
// //     else if(typeof variable === 'string'){
// //         variable.toLowerCase();
// //     }
// // }
// // abcd(12);
// // abcd("12");
// // abcd("Hello");
// // Intersection
// // type classmate = {
// //     section: string
// // }
// // type student = {
// //     name: string
// // }
// // type classmateInStudents = classmate & student;
// // let a: classmateInStudents = {
// //     name : "Rishav",
// //     section: "A"
// // }
// // type allias => making our own type
// // Primitive type aliases
// // type Name = string; // making our own types
// // let myName : Name = "Rissss"
// // // object type aliases
// // type Human = {
// //     name: string,
// //     age: number,
// //     email: string,
// // } // initializing the type for object type alias
// // let rishav: Human = {
// //     name : "Risssss",
// //     age: 18,
// //     email: "hello@hotmail.com"
// // }
// // creating another type for more understanding
// // type realBox = {
// //     weight: number,
// //     color:  string,
// // }
// // let box:realBox = {
// //     weight: 2,
// //     color: "#111"
// // }
// // Interfaces => mainly creates the shapes of classes and object
// //  interfaces are used for merging same name interfaces , like an interface can be declared again and again . So it merges all the declared statement with one.
// // interface User{
// //     name: string,
// //     username: string,
// //     age: number,
// //     email: string,
// //     password: string
// // }
// // function getUser(user:User){
// //     user.name.
// // }
// // "extends" keyword in interface
// // interface food{
// //     name: string,
// //     price: number,
// // }
// // interface sweetFood extends food{
// //     avaliable: boolean;
// // }
// // interface restFood extends food , sweetFood{
// //     sour:boolean;
// // }
// // function getSweetFood(sweet: sweetFood){
// //     sweet.name = "Gulab Jamun";
// //     sweet.price = 25;
// //     sweet.avaliable = true;
// // }
// // function getSourFood(sweet: restFood){
// //     sweet.name = "Gulab Jamun";
// //     sweet.price = 25;
// //     sweet.avaliable = true;
// //     sweet.sour = true
// // }
// // Classes
// // example 1
// // class Airpod{
// //     price = 25000;
// //     image = "images/airpod";
// //     color = "White";
// //     playMusic(){
// //         console.log("Music Playing...");
// //     }
// //     switchMode(mode: string){
// //         console.log(mode);
// //     }
// // }
// // example 2
// // class airConditionar{
// //     color = "White";
// //     tons = 70;
// //     company = "Voltas";
// //     temp = 22;
// //     turnOn(name:string){
// //         console.log(`Turing on ${name}...`);
// //         console.log(`${name} turned on...`);
// //     }
// //     raiseTemp(){
// //         console.log("Temperature raised by 1");
// //         this.temp++;
// //         console.log(this.temp);
// //     }
// //     decreaseTemp(){
// //         console.log("Temperature decreased by 1");
// //     }
// // }
// // let ac1 = new airConditionar();
// // let ac2 = new airConditionar();
// // // ac1.raiseTemp();
// // // ac1.raiseTemp();
// // ac1.turnOn("ac1");
// // example 3
// // type Data = string | null;
// // class Pendrive{
// //     company = "hp";
// //     price = 1200;
// //     data: null | string = null;
// //     putData(data: Data){
// //         console.log(`putting some datat ${data}`);
// //         this.data = data;
// //     }
// //     getData(){
// //         console.log(this.data);
// //     }
// // }
// // let Pendrive1 = new Pendrive();
// // Pendrive1.putData("12");
// // Pendrive1.getData();
// // example 4
// // class Food{
// //     price = 1233;
// //     eat(){
// //         console.log("eating....");
// //     }
// // }
// // class sweet1 extends Food{
// //     name = "Gulab Jamun";
// // }
// // let sweet2 = new sweet1(); // making the instance for sweet1
// // sweet2.eat();
// // Constructor => It's a type of special method for classes whose work is to run first and initializing all the variables
// // example 1
// // class Pendrive{
// //     public company: string;
// //     constructor(name:string){
// //         this.company = name;
// //     }
// // }
// // let p1 = new Pendrive("Sandisk");
// // let p2 = new Pendrive("hp");
// // example 2
// // class Earphone{
// //     public name: string ;
// //     public price: number;
// //     constructor(name : string , price : number){
// //         this.name = name;
// //         this.price = price;
// //     }
// // }
// // let e1 = new Earphone("Apple" , 25000);
// // let e2 = new Earphone("Samsung" , 20000);
// // example 3
// // Initializing public in the constructor itself
// // class Bottle{
// //     constructor(public shape: string){ 
// //         this.shape = shape;
// //     }
// // }
// // let el = new Bottle("Square");
// // example 4
// // class User{
// //     constructor(public name : string , public password : string , public email: string , public image: string){
// //         this.name = name;
// //         this.email = email;
// //         this.password = password;
// //         this.image = image;
// //     }
// // }
// // let el = new User("Rishav" , "@hello" , "hello@email.com" , "image/src")
// // Access Modifier => Public , Private & Protected
// //By default everything is given public
// // class Pendrive{
// //     price; // By default everytime it's public
// //     constructor(){
// //         this.price = 1230;
// //     }
// // }
// // Private => By initializing with private be can't do any changes globally and can only be used 
// // class User{
// //     private balance = 1200;
// //     getBalance(){
// //         console.log(this.balance);
// //     }
// // }
// // let ul = new User();
// // ul.balance = 120000; // It will show error as initialized as private
// // ul.balance = 12300;  // We can get the desired output and can change the private part but on the compilation time ts compiler will show error
// // Protected => can't be used outside the class or globally but can be used in the extended class 
// // class User{
// //     protected balance = 1200;
// // }
// // class Admin extends User{
// //     private isAdmin = true;
// //     getBalance(){
// //         this.balance
// //     }
// // }
// // let al = new Admin();
// //Readonly Property => mainly used for not changing the property making it to read only not write.
// class abcd{
//     constructor(public readonly name: string){
//         this.name = name;
//     }
//     getName(){
//         console.log(this.name);
//     };
// }
// let abcd1 = new abcd("Risss")
// getters & setters


// class abcd{
//     constructor(public username: string){
//         this.username = username;
//     }
//     get name(){
//         return this.username;
//     }
//     set name(value: string){
//         this.username = value;
//     }
// }
// let abcd1 = new abcd("Risss");
// console.log(abcd1);
