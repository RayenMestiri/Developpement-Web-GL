 //ex2
 let Name:String="rayen mestiri";
 let age:number=20;
 let tableau:number[]=[1,2,3,4,5];
 enum role{"admin","user","guest"};
 let r1=role.admin;
 //ex3 
 let id:number|string="123";
 type n=number;
 type x=string;
 let X:x|n = 5; // or let X:x|n = "hello";
type A = { propA: string };
type B = { propB: number };
type Intersection = A & B;
let example: A &B = { propA: "Hello", propB: 42 };  
type status = "active" | "inactive" | "pending";
let userStatus: status = "active";
