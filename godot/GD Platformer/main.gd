extends Node2D

func _ready():
	# Utils.saveGame()
	Utils.loadGame()

func _on_quit_pressed():
	# Quit game
	get_tree().quit() # get_tree is used to access scene tree


func _on_play_pressed():
	# Changing scene to world scene
	get_tree().change_scene_to_file("res://world.tscn")
