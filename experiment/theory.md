### Inheritance in Java
**Inheritance in Java** is a mechanism in which one object acquires all the properties and behaviors of a parent object. It is an important part of OOPs (Object Oriented programming system).
The idea behind inheritance in Java is that you can create new classes that are built upon existing classes. When you inherit from an existing class, you can reuse methods and fields of the parent class. Inheritance represents the **IS-A relationship** which is also known as a **parent-child relationship**.

### The syntax of Java Inheritance

```sh
	class Subclass-name extends Superclass-name  
	{  
	   //methods and fields  
	}  

```
The **extends keyword** indicates that you are making a new class that derives from an existing class. The meaning of "extends" is to increase the functionality.

### Simple Example of Inheritance

```sh
	class Employee
	{  
	 float salary=40000;  
	}  
	class Programmer extends Employee
	{  
	 int bonus=10000;  
	 public static void main(String args[])
	{  
   Programmer p=new Programmer();  
   System.out.println("Programmer salary is:"+p.salary);  
   System.out.println("Bonus of Programmer is:"+p.bonus);  }  
}  

```

### OUTPUT

```sh
Programmer salary is:40000.0
Bonus of programmer is:10000

```

### Types of inheritance in java

- **Single Inheritance:** When a class inherits another class, it is known as a single inheritance. In the example given below, Dog class inherits the Animal class, so there is the single inheritance.

```sh
	class Animal{  
	void eat()
	{
	System.out.println("eating...");
	}  
	}  
	class Dog extends Animal{  
	void bark()
	{
System.out.println("barking...");
}  
}  
class TestInheritance{  
public static void main(String args[]){  
Dog d=new Dog();  
d.bark();  
d.eat();  
}
}  

```

### OUTPUT

```sh
barking...
eating...

```

- **Multilevel Inheritance:** When there is a chain of inheritance, it is known as multilevel inheritance. In the example given below, BabyDog class inherits the Dog class which again inherits the Animal class, so there is a multilevel inheritance.

```sh
	class Animal{  
	void eat(){System.out.println("eating...");}  
	}  
	class Dog extends Animal{  
	void bark(){System.out.println("barking...");}  
	}  
	class BabyDog extends Dog{  
	void weep(){System.out.println("weeping...");}  
	}  
class TestInheritance2{  
public static void main(String args[]){  
BabyDog d=new BabyDog();  
d.weep();  
d.bark();  
d.eat();  
}}  

```

### OUTPUT

```sh
weeping...
barking...
eating...
```

- **Hierarchical Inheritance:** When two or more classes inherits a single class, it is known as hierarchical inheritance. In the example given below, Dog and Cat classes inherits the Animal class, so there is hierarchical inheritance.

```sh
	class Animal{  
	void eat(){System.out.println("eating...");}  
	}  
	class Dog extends Animal{  
	void bark(){System.out.println("barking...");}  
	}  
	class Cat extends Animal{  
	void meow(){System.out.println("meowing...");}  
	}  
class TestInheritance3{  
public static void main(String args[]){  
Cat c=new Cat();  
c.meow();  
c.eat();  
//c.bark();//C.T.Error  
}}  

```

### OUTPUT

```sh
meowing...
eating...

```
