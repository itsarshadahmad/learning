import turtle

turtle.color('red', 'yellow')
turtle.begin_fill()
while True:
    turtle.forward(200)
    turtle.left(170)
    if abs(turtle.pos()) < 1:
        break
turtle.end_fill()
turtle.done()


import turtle

screen = turtle.Screen()
screen.bgcolor("light green")
screen.title("Turtle Module")
t = turtle.Turtle()

# Square
for _ in range(4):
    t.forward(90) # distance to move
    t.left(90) # angle to rotate

# polygon
num_sides = 6
side_length = 70
angle = 360 / num_sides

for _ in range(num_sides):
    t.forward(side_length)
    t.right(angle)

screen.exitonclick()
turtle.done()


# Color pattern
import turtle   #Outside_In
import turtle
import time
import random
 
print ("This program draws shapes based on the number you enter in a uniform pattern.")
num_str = input("Enter the side number of the shape you want to draw: ")
if num_str.isdigit():
    squares = int(num_str)
 
angle = 180 - 180*(squares-2)/squares
 
turtle.up
 
x = 0
y = 0
turtle.setpos(x, y)
 
 
numshapes = 8
for x in range(numshapes):
    turtle.color(random.random(), random.random(), random.random())
    x += 5
    y += 5
    turtle.forward(x)
    turtle.left(y)
    for i in range(squares):
        turtle.begin_fill()
        turtle.down()
        turtle.forward(40)
        turtle.left(angle)
        turtle.forward(40)
        print (turtle.pos())
        turtle.up()
        turtle.end_fill()
 
time.sleep(11)
turtle.bye()