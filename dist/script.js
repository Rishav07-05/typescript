"use strict";
// basic types
// let a : number = 6; // Number
// let arr : [number , number , number] = [1 , 2 , 3]; // Tuple
// let str : string = "Joe"; // String
// let list : []; // Array
// any
// let b : any = 25;
// b = "hey";
// Unknown
// let c : unknown = 25;
// c = "Rishav"
// console.log(c);
// Never
// function infinite(): never{
//     while(true){
//         console.log("Infinite run");
//     }
// }
// infinite();
// console.log("hey");
// Void => basically returns nothing
// function abcd(): void{
//     console.log("Hey");
// }
// abcd();
// enum => basically used for grouping
// enum Direction{
//     top = "TOP",
//     left = "LEFT",
//     right = "RIGHT",
//     bottom = "BOTTOM",
// }
// Direction.bottom
// enums
// enum Human{
//     name = "Rishav",
//     age = 18
// }
// console.log(Human.name);
// type inference => guessing the type itself
// let a = 12;
// let b = "Hello";
// let c = true;
// Union
// function abcd(variable: number | string){
//     if(typeof variable === 'number'){
//         variable.toFixed(2);
//     }
//     else if(typeof variable === 'string'){
//         variable.toLowerCase();
//     }
// }
// abcd(12);
// abcd("12");
// abcd("Hello");
// Intersection
// type classmate = {
//     section: string
// }
// type student = {
//     name: string
// }
// type classmateInStudents = classmate & student;
// let a: classmateInStudents = {
//     name : "Rishav",
//     section: "A"
// }
// type allias => making our own type
// Primitive type aliases
// type Name = string; // making our own types
// let myName : Name = "Rissss"
// // object type aliases
// type Human = {
//     name: string,
//     age: number,
//     email: string,
// } // initializing the type for object type alias
// let rishav: Human = {
//     name : "Risssss",
//     age: 18,
//     email: "hello@hotmail.com"
// }
// creating another type for more understanding
// type realBox = {
//     weight: number,
//     color:  string,
// }
// let box:realBox = {
//     weight: 2,
//     color: "#111"
// }
// Interfaces => mainly creates the shapes of classes and object
//  interfaces are used for merging same name interfaces , like an interface can be declared again and again . So it merges all the declared statement with one.
// interface User{
//     name: string,
//     username: string,
//     age: number,
//     email: string,
//     password: string
// }
// function getUser(user:User){
//     user.name.
// }
// "extends" keyword in interface
// interface food{
//     name: string,
//     price: number,
// }
// interface sweetFood extends food{
//     avaliable: boolean;
// }
// interface restFood extends food , sweetFood{
//     sour:boolean;
// }
// function getSweetFood(sweet: sweetFood){
//     sweet.name = "Gulab Jamun";
//     sweet.price = 25;
//     sweet.avaliable = true;
// }
// function getSourFood(sweet: restFood){
//     sweet.name = "Gulab Jamun";
//     sweet.price = 25;
//     sweet.avaliable = true;
//     sweet.sour = true
// }
// Classes
// example 1
// class Airpod{
//     price = 25000;
//     image = "images/airpod";
//     color = "White";
//     playMusic(){
//         console.log("Music Playing...");
//     }
//     switchMode(mode: string){
//         console.log(mode);
//     }
// }
// example 2
// class airConditionar{
//     color = "White";
//     tons = 70;
//     company = "Voltas";
//     temp = 22;
//     turnOn(name:string){
//         console.log(`Turing on ${name}...`);
//         console.log(`${name} turned on...`);
//     }
//     raiseTemp(){
//         console.log("Temperature raised by 1");
//         this.temp++;
//         console.log(this.temp);
//     }
//     decreaseTemp(){
//         console.log("Temperature decreased by 1");
//     }
// }
// let ac1 = new airConditionar();
// let ac2 = new airConditionar();
// // ac1.raiseTemp();
// // ac1.raiseTemp();
// ac1.turnOn("ac1");
// example 3
// type Data = string | null;
// class Pendrive{
//     company = "hp";
//     price = 1200;
//     data: null | string = null;
//     putData(data: Data){
//         console.log(`putting some datat ${data}`);
//         this.data = data;
//     }
//     getData(){
//         console.log(this.data);
//     }
// }
// let Pendrive1 = new Pendrive();
// Pendrive1.putData("12");
// Pendrive1.getData();
// example 4
class Food {
    constructor() {
        this.price = 1233;
    }
    eat() {
        console.log("eating....");
    }
}
class sweet1 extends Food {
    constructor() {
        super(...arguments);
        this.name = "Gulab Jamun";
    }
}
let sweet2 = new sweet1(); // making the instance for sweet1
sweet2.eat();
