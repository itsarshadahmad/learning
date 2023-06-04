# Classes and Objects
class Car:
    pass  # pass is placeholder, none(null). It has no operation when interpreter reads

# Object
my_car = Car()

# class methods
class Car:
    # class variable
    colour = "Blue"
    school = "LPU"

    # It get called every time new object of class will be created
    def __init__(self, name) -> None: # initialization block
        print("This is constructor")
        # Properties --> Creates global variable of name
        self.name = name

    # method declaration
    def drive(self): # instance method
        print("move")

    # class method -> it can be invoked by using classname
    @classmethod
    def info(cls): # cls is class object or instance
        return cls.school

    # Static method -> it doesn't have any parameter or access class state
    @staticmethod
    def welcome():
        return "welcome to static method"

    # Converting object to string (toString)
    def __str__(self) -> str:
        return f"Color: {self.colour}"

# accessing class method 
Car.info()

# accessing static method
Car.welcome()

# class variable
Car.colour = "Yellow"

my_car = Car()
# method call
my_car.drive()

# Inheritance -> Single level inheritance
class Animal:
    def breath(self):
        print("Breathing")

# Inheriting Animal class
class Fish (Animal):
    def __init__(self) -> None:
        # Calls parent constructor
        super().__init__()
    # Overriding
    def breath(self):
        # calling parent class breath method
        super.breath()
        print("Underwater")

len("Joe") # return 3

# Nested classes and inner class
class NestedClass:
    def __init__(self) -> None:
        # Object of inner class
        self.inner = self.InnerClass()

    class InnerClass:
        pass

nested = NestedClass()
# Accessing inner class
nested.inner
inner = NestedClass.InnerClass()

# Multi level inheritance -> Class A --> Class B --> Class C
class A:
    def welcome(self):
        pass

class B (A):
    def work(self):
        pass

class C (B):
    def show(self):
        pass

# Multiple inheritance
class A:
    def welcome(self):
        pass

class B:
    def work(self):
        pass

class C:
    def show(self):
        pass

# Class D === Class A,B,C (features)
class D (A,B,C):
    pass

# Dunder or magic method -> dunder means duble under (underscore) ex- __len__
# __str__ conver object to string
# It also gives ability to Operator overloading ex. __add__ (+)
car = Car()
car.__str__()

# Property decorator -> It puts restriction on object access and modification
# Classes allows us to also access and change objects values which is bad, to strict
# things up we use @property, it puts restriction on objects access.
class Test:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age

    @property #Getter
    def name(self):
        return self._name

    @name.setter #Setter
    def name(self, name):
        # to access property outside of __init__ we require to put underscore before object
        # name. It is also to avoid clash between method and variable.
        self._name = name

test = Test("Joe", 42)
print(f"Name: {test.name}, Age: {test.age}")

#* NOTE:- 
#* Python follows all these convension just to help programmers to code in defined
#* convension so code doesn't clash. It doesn't have to many type or checks.
