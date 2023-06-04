# Higher order function -> It takes function as parameter
def add(a1,a2):
    return a1+a2

def calc(v1,v2,operation):
    return operation(v1,v2)

calc(10,2,add)

# Time -> It has time related functions
from ast import Str
import time
from typing import Any

time.sleep(1000) # it is used to pause thread from defined amount of ms.
print(time.ctime(time.time())) # return current time

# Files
file = open("test.txt","w", encoding="utf-8")
# mode = r(read), w(write), x(create), a(append), t(text mode), b(binary mode), +(multiple)
file.write("This is python learning") # writing data inside file
file.close() # closing file

# Read in binary
file = open("test.txt", "r+b") 

# using with to create files
with open("test.txt", mode="a") as file:
    file.write("\n This append") # using this way you don't need to close file object

# Exception Handling
try :
    raise Exception("Throwing error intensionally")
except NameError:
    print("Name Error")
except:
    print("Catch unknown error")
else:
    print("If no error it will execute")
finally:
    print("Always executes in end")

# Working with CSV files
import csv
with open("test.csv", "r") as file:
    reader = csv.reader(file)

# List comprehension
# Normal Way
number_list = []
for x in range(10):
    number_list.append(x)

# list = [expression for item in iterable if condition == bool]
# List comprehension way
number_list = [x for x in range(10)]

# is keyword -> compare two objects
x = 12
y = x
x is y # True

# Dictionary Comprehension
# {key:value for (key,value) in iterable if condition}
new_dict = {x:x**3 for x in range(10) if x**3 %4 == 0}
new_dict1 = {k:v for (k,v) in new_dict.items()}

# Arbitary Arguments(*args) -> it can take n number of var as argument and store it as array
def my_fun(*kids):
    print("Name: "+kids[1])

# passing arbitary args
my_fun("Linus", "Toby", "Emily")

# Arbitary Keyword Arguments -> Same as *args but store data as dictionary
def my_fun(**kid):
    print("Name: "+kid["lname"])

# passing Arbitary Keyword Arguments
my_fun(fname="Linus", lname="Torvalds")

# json -> working with json data
import json
with open("data.json") as file:
    data = json.loads(file)

# DateTime module -> working with advance date and time
import datetime
datetime.date.today()

# smtp module -> to send with smtp protocol and emails
import smtplib
smtplib.SMTP(host="host_server", port=3000, local_hostname="localhost_server")

# Type System -> types are ignored by interpreter its just for human understanding
# Annotation --> type system, : and -> to denote type and can create custom type also
def local(a:int,b:int)->int:
    return a+b

local(1,4)
variables: str
variables: int
variables: None # None means nothing, null, or no value
variables: Any # It can transform itself to any form
variables: float
variables: bool
variables: dict
variables: tuple

# OS module -> It provide all feature to interact with os
import os
cwd = os.getcwd()
os.getenv("API_KEY") # get environment variable

# __doc__ -> way to access document of any function
docs = Str.__doc__ # accessing string class docs

# Lambda
# Lambda Function
cube = lambda y: y*y*y # After lambda keyword is parameter, then body that returns operation
# associate function with name cube
cube(5)

# regular function
def cube(y):
    return y*y*y

# List comprehension using lambda
tables = [lambda x=x:x*10 for x in range(1,11)]

for table in tables:
    print(table()) # print table of 10

# enumerate -> iterate with index, item
l1 = ["a","b","c"]
l2 = enumerate(l1) # return [(0,"a"), (1,"b"), (2,"c")]
for index,item in enumerate(l1):
    print(f"{index}: {item}") # return 0: a, 1: b, 2: c

# decorator -> its function which modify its behaviour without modifying function and return
# modified decorator function behaviour by function call.
# ex- @classmethod is decorator
from time import time, sleep
# decorator function and parameter is function on which decorator called on ex- loop
def timer(work):
    def task(*args):
        start = time()
        work(*args)
        end = time()
        print(f"RuntimeL {end-start} ms")
    # return task function when decorator called it executes
    return task

@timer
def loop(num):
    for _ in range(num):
        pass

loop(400000)

# it executes when module is run directly, not imported. If it doesn't exist then all
# statement executes when we import module. * Module is python source code file.
if __name__ == "__main__":
    # if we execute this module then only module name = __main__
    print("module execute")

# Map
# map each item to function and iterate
numbers = [1,2,3,4]
def addition(num):
    return num*num

# lambda way
addition = lambda n: n*n

res = map(addition, numbers) # [2,4,6,8]

# convert all input to integer
nums = map(int, input().split())

# Filter -> It filter data based on condition from list
res = seq_list = [0,1,2,3,4,5,6,7]
filter(lambda x:x%2 != 0, seq_list) # [1,3,5]

# Reduce -> it has temp to store previous operation results and return all as final
from functools import reduce
reduce(lambda a,b: a+b, seq_list) # return: 28

# Ternary operation
# on_true if condition else on_false
a,b = 10,20
print(a) if a>b else print(b)

# Access Modifiers
# Python doesn't have access modifiers but developers follow convension to keep development
# understandable to everyone.
# Public
var = 10

# protected
_var = 10

# private -> python adds extra hurdle for variable declared private (by convension)
__var = 10

# typing module -> it has types Any, Union, Callable, TypeVar, and Generics.
# Type Aliases -> it can help you create generic types
from typing import List, NewType, TypeVar

# Generic of type list
Vector = List[float]
def scale(scalar: float, vector: Vector) -> Vector:
    return [scalar * num for num in vector]

a = scale(scalar=2.0, vector=[1.0,2.0,3.0])

# NewType -> create user defined datatypes
Student_ID = NewType("StudentID", int) # Generic type of Student_ID
sample_id = Student_ID(100)
s_id: Student_ID

# TypeVar -> Generic type with type holder or placeholder
T = TypeVar("T")

def get_item(item_list:List[T], index:int) -> T:
    return item_list[index]

car = ["Tata", "Ford", "Maruti"]
get_item(car,1) # return: Ford

# Generator -> it generates value when called
# Yield -> suspend execution and send value back to caller but has state to continue
# Generator, iterator and yield -> to generate values at same point delivers it
# helps generating big amount of data
def sheep(n):
    for i in n:
        yield "😂" * i

for i in sheep(10000):
    print(i)
