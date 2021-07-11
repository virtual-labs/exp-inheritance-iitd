## Post Test

Q1. What will be the output of the following Java program?<br>

```
class Base {
    public void show() {
       System.out.println("Base::show() called");
    }
}
  
class Derived extends Base {
    public void show() {
       System.out.println("Derived::show() called");
    }
}
  
public class Main {
    public static void main(String[] args) {
        Base b = new Derived();;
        b.show();
    }
}
```

**A Derived::show() called**<br>
B Base::show() called<br>


Q2. Find Superclass and Subclass in the below Java program?<br>
```
class Liquid
{
  void pour(){}
}
class Juice extends Liquid
{
  void filter(){}
}
```
**A The Liquid is a superclass and Juice is a subclass**<br>
B The Liquid is a Subclass and Juice is a Superclass<br>
C There is no superclass or subclass<br>
D None<br>

Q3. Which of these keywords is used to refer to member of base class from a sub class?<br>
A upper<br>
**B super**<br>
C this<br>
D none of the mentioned<br>

Q4. Multiple inheritance means,<br>
**A one class inheriting from more super classes**<br>
B more classes inheriting from one super class<br>
C more classes inheriting from more super classes<br>
D None of the above<br>

Q5. What is the output of the following program?<br>
```
class Base {
    final public void show() {
       System.out.println("Base::show() called");
    }
}
  
class Derived extends Base {
    public void show() {
       System.out.println("Derived::show() called");
    }
}
  
class Main {
    public static void main(String[] args) {
        Base b = new Derived();;
        b.show();
    }
}
```


A Base::show() called<br>
B Derived::show() called<br>
**C Compiler Error**<br>
D Runtime Error<br>
