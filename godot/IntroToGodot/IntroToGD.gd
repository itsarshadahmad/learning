class_name MyClass

# Use documentation to learn all about gdscript

# Inherit any node
extends Node2D

# Constructor
func _init():
	print("Constructed!")
	

# Variables
var test := 12.4
var test1: int
const TEST = 12.9

# Enum
enum {UNIT_NEUTRAL, UNIT_ENEMY, UNIT_ALLY}

# Functions.
func some_function(param1, param2, param3):
	const local_const = 5

	if param1 < local_const:
		print(param1)
	elif param2 > 5:
		print(param2)
	else:
		print("Fail!")

	for i in range(20):
		print(i)

	while param2 != 0:
		param2 -= 1

	match param3:
		3:
			print("param3 is 3!")
		_:
			print("param3 is not 3!")

	var local_var = param1 + 3
	return local_var


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Func is used to create function
# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
