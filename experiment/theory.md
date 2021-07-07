### Inheritance in Java
- It is an important part of OOPs (Object Oriented programming system).
- It is the mechanism in java by which one class is allowed to inherit the features(fields and methods) of another class.
- The idea behind inheritance in Java is that you can create new classes that are built upon existing classes. When you inherit from an existing class, you can reuse methods and fields of the parent class.


### Why use inheritance in java?
- For Method Overriding (so runtime polymorphism can be achieved).
- For Code Reusability.

### Important terminology: 
- **Super Class:** The class whose features are inherited is known as superclass(or a base class or a parent class).

- **Sub Class:** The class that inherits the other class is known as a subclass(or a derived class, extended class, or child class). The subclass can add its own fields and methods in addition to the superclass fields and methods.

- **Reusability:** Inheritance supports the concept of “reusability”, i.e. when we want to create a new class and there is already a class that includes some of the code that we want, we can derive our new class from the existing class. By doing this, we are reusing the fields and methods of the existing class.

### How to use inheritance in Java?
The keyword used for inheritance is **extends**.The extends keyword indicates that you are making a new class that derives from an existing class. The meaning of "extends" is to increase the functionality. 

### The syntax of Inheritance in JAVA

```
	class Subclass-name extends Superclass-name  
	{  
	   //methods and fields  
	}  

```

### Simple Example of Inheritance
In this example, Programmer is the subclass and Employee is the superclass.

```
	class Employee
	{  
	 float salary=40000;  
	}  
	// Here subclass Programmer extends the feature of Superclass Employee
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

#### OUTPUT

```
Programmer salary is:40000.0
Bonus of programmer is:10000

```

### Types of inheritance in java
On the basis of class, there can be three types of inheritance in java: 
- Single
- Multilevel
- Hierarchical.
In java programming, multiple and hybrid inheritance is supported through interface only. We will learn about interfaces later.

**1. Single Inheritance:**  When a class inherits another class, it is known as a **single inheritance**. In the example given below, Dog class inherits the Animal class, so there is the single inheritance.

```
	class Animal
	{  
	void eat()
	{
	System.out.println("eating...");
	}  
	}  
	// Here subclass Dog inherits the property of superclass Animal
	class Dog extends Animal
	{  
	void bark()
	{
      System.out.println("barking...");
        }  
        }  
      class TestInheritance
      {  
      public static void main(String args[])
      {  
      Dog d=new Dog();  // Here we are creating object of Dog class
      d.bark();  
      d.eat();  
      }
      }  

```

### OUTPUT

```
barking...
eating...

```
 **2. Multilevel Inheritance:**  When there is a chain of inheritance, it is known as **multilevel inheritance**. In the example given below, BabyDog class inherits the Dog class which again inherits the Animal class, so there is a multilevel inheritance.

```
	class Animal
	{  
	void eat()
	{
	System.out.println("eating...");
	}  
	}  
	class Dog extends Animal
	{  
	void bark()
	{
	System.out.println("barking...");
	}  
	}  
	class BabyDog extends Dog
	{  
	void weep()
	{
	System.out.println("weeping...");
	}  
	}  
	class TestInheritance2
	{  
	public static void main(String args[])
	{  
	BabyDog d=new BabyDog();  
	d.weep();  
	d.bark();  
	d.eat();  
	}
	}  

```

### OUTPUT

```
weeping...
barking...
eating...
```

**3. Hierarchical Inheritance:** When two or more classes inherits a single class, it is known as **hierarchical inheritance**. In the example given below, Dog and Cat classes inherits the Animal class, so there is hierarchical inheritance.

```
	class Animal
	{  
	void eat()
	{
	System.out.println("eating...");
	}  
	}  
	class Dog extends Animal
	{  
	void bark()
	{
	System.out.println("barking...");
	}  
	}  
	class Cat extends Animal
	{  
	void meow()
	{
	System.out.println("meowing...");
	}  
	}  
	class TestInheritance3
	{  
	public static void main(String args[])
	{  
	Cat c=new Cat();  
	c.meow();  
	c.eat();  
	//c.bark();//C.T.(Complie time) Error  
	}}  

```

#### OUTPUT

```
meowing...
eating...

```
