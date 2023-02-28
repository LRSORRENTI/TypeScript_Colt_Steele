// So we have the public, private modifiers, 
// there's another: protected

// Protected is used when dealing with 
// inheritance, 

class Doggy {
    protected owner: string = "luke";
   public breed: string;
   public age: number;

   constructor( breed: string,
       age: number){
           this.breed = breed;
           this.age = age;
       }

       private secretMethod(): void{
       console.log("secret method")
      }

   }

   class SuperDog extends Doggy{
   public isAmazing: boolean = true
   updateOwner(){
    this.owner = "luke"
   }
   }

   // essentially, protected will allow 
   // child classes, or extended classes to allow 
   // child classes to have access to things 
   // from the parent classes 

   // But if the need to make something only 
   // ever accessible inside of a class, use private
   
   // public = available anywhere

   // private = available only inside the class it's 
   // defined

   // protected = available in any child or extended 
   // classes of parent class 