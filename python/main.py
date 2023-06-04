# Print message
print("This is working")

# Input with message --> By default user input is in string
input("This is message")

# This is comment in python
"""
Multiline comment
"""

# This is variable
my_var = "My Variable"
my_int = 12
my_float = 2.5

# Shorthand Operators
my_num = 12
my_num += 4  # = my_num + 4
my_num -= 5

# String concat
string_concat = "Hello "+"World!"

# Escape character
speech = "She said: \" hi! \""

# F-String or template string
days = 365
print(f"There are {days} in a year")

# Type convertion
my_num = 12

float(my_num/2)
int(my_num / 2)
str(my_num)

# type check
my_num = 12.44
type(my_num)

# Arithmetic Operators
3+2  # Add
4-1  # Subtract
2*3  # Multiply
5/2  # Divide
5**2  # Exponent
5 % 2  # Remainder

# Function with argument
def exam(start_time, end_time):
    return end_time - start_time


# Function call
exam(2, 5)

# variable scope
num = 22  # Global Scope


def my_function():
    num = 2  # Local scope


# Keyword Argument
def dunk(num1, num2):
    return num1+num2


dunk(num2=3, num1=4)

# Control Statements
# Conditional Statements
n = 4
if n == 4:
    print("its 4")
elif n < 4:
    print("Oh it greater than 4")
elif n > 4:
    print("Oh it less than 4")
else:
    print("What not 4?")

# multiple conditions
j = 5
if n == 4 and n != j:
    print("And statement")
elif j <= 12 or n != 0:
    print("Or statement")
elif not j >= 0:
    print("Not statement")

# Loops
for n in range(12):
    print(n)
    if (n == 12):
        break
    if n == 5:
        continue

num1 = 0
while (num1 < 10):
    num1 += 1
    print(num1)

# Infinite loop (Danger)
while 5 > 1:  # 5 is always greater than 1
    print("Noooo!!")

# List
list1 = [2, 4, 5, 6, 1]
list2 = [44, 22, 41, 45, 79]

new_list = list1 + list2

# Adding item in list
all_fruits = ["apple", "banana", "orange"]
all_fruits.append("pear")

# List index
all_fruits[2]  # return 3 item of list
all_fruits[-1]  # return last item of list

# List slicing
letters = ["a", "b", "c", "d", "e"]
letters[1:3]  # returns ["b", "c"]

# list [starting_position : ending_position + 1 : interval]
letters[::-1] #prints in reverse order
letters[::2] # prints at interval of two
letters[:4] # prints till position 4 from 0
letters[2:] # prints from position 2 to end of list

# Range
range(start=1, end=5, step=1)

# Randomization
import random  # import entire random module
import random
n = random.randint(1, 4)

# Round figure
round(4.6)  # return 5

# absolute value -> Removes -ve
abs(-4.6)  # return 4.6

# modules
# importing
from random import randinit  # import randinit from random module

# Aliasing
import random as ra  # it rename object to defined alias name
ra.randint(1, 5)

# Import everything --> You don't need object to refer to call items
from random import *

# floor division -> round down after division
print(8//3) #return 2 (2.666)

# Format string
print("{:.2f}".format(13.4)) # return 13.95

# lowercase string 
"Arshad".lower() # return "arshad"

# Count given character or string
"arshad".count("a")

# multiline string
print('''
This is multiline string
''')

# List -> []
["A","B", "C", "D"].split(",") #split cuts list

# choice -> Picks random itemfrom list
from random import choice
choice(["A","B","C","D"])

# Accessing list backward
var = [1,3,4,5,7,8,2]
var[-2] # last 2nd element from list
var[-1] # last element from list

# Multidimensional list
arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

# sum -> add all items from list
arr[1,2,3,4,5]
sum(arr) #return 15

# minimum item from list
min(arr)

# maximum item from list
max(arr)

# shuffle list
# random.shuffle, here random was imported as * thats why shuffle was available to call
shuffle(arr) 

# in keyword
fruits = ["apple", "banana", "cherry"]
if "banana" in fruits: # to find element
    print("Yuumm..")

# to iterate over list
for x in fruits:
    print(x)

# join -> its used to join list element to string
arr = ['1','2','3','4']
s="-"
s = s.join(arr) # returns: 1-2-3-4

arr = ['g','e','e','k','s']
"".join(arr) # geeks

# index of list
arr.index(3) # return: k

# Dictionary -> ordered (after python v3.7) {}
data = {
    1:"Geeks",
    2: "For",
    3: "Geeks"
}

# assigning dictionary
data["bug"] = "A moth in your computer"

# deleting dictionary
del data["bug"] # del keyword is used to delete objects
data.pop("bug") # popping out item from dictionary
data.clear() # completely delete dictionary

# Tuples -> ordered, unchangeable, allow duplicates ()
data = ("apple","banana","cherry")

# Sets -> unordered, unchangeable, No duplicate, unindexed {}
data = {"apple","banana","Cherry"}

# docString -> Documentation String provide docs to python modules
def name(author, publisher):
    """
    Name will return name of auther and publisher
    """
    return author + " : " + publisher

# ide also reads docstring and provide doc when you hover over function
name("Joe", "Self")

# constant -> python doesn't have const. Caps var name is convension used to indicate const
PI = 3.14
GRAVITY = 9.8

# Global keyword
x=0 #global variable
def myfun():
    # if x doesn't exist then global keyword will create x globally
    global x # need to access and modify global variable in local scope
    x = 300
