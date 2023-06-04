from tkinter import *
import tkinter
m = tkinter.Tk()  # where m is the name of the main window object

m.title('Counting Seconds')
button = tkinter.Button(m, text='Stop', width=25, command=m.destroy)
button.pack()

m.mainloop()


master = Tk()
w = Canvas(master, width=40, height=60)
w.pack()
canvas_height = 20
canvas_width = 200
y = int(canvas_height / 2)
w.create_line(0, y, canvas_width, y)
mainloop()


master = Tk()
var1 = IntVar()
Checkbutton(master, text='male', variable=var1).grid(row=0, sticky=W)
var2 = IntVar()
Checkbutton(master, text='female', variable=var2).grid(row=1, sticky=W)
mainloop()


master = Tk()
Label(master, text='First Name').grid(row=0)
Label(master, text='Last Name').grid(row=1)
e1 = Entry(master)
e2 = Entry(master)
e1.grid(row=0, column=1)
e2.grid(row=1, column=1)
mainloop()


root = Tk()
frame = Frame(root)
frame.pack()
bottomframe = Frame(root)
bottomframe.pack(side=BOTTOM)
redbutton = Button(frame, text='Red', fg='red')
redbutton.pack(side=LEFT)
greenbutton = Button(frame, text='Brown', fg='brown')
greenbutton.pack(side=LEFT)
bluebutton = Button(frame, text='Blue', fg='blue')
bluebutton.pack(side=LEFT)
blackbutton = Button(bottomframe, text='Black', fg='black')
blackbutton.pack(side=BOTTOM)
root.mainloop()


root = Tk()
w = Label(root, text='GeeksForGeeks.org!')
w.pack()
root.mainloop()


top = Tk()
Lb = Listbox(top)
Lb.insert(1, 'Python')
Lb.insert(2, 'Java')
Lb.insert(3, 'C++')
Lb.insert(4, 'Any other')
Lb.pack()
top.mainloop()


root = Tk()
menu = Menu(root)
root.config(menu=menu)
filemenu = Menu(menu)
menu.add_cascade(label='File', menu=filemenu)
filemenu.add_command(label='New')
filemenu.add_command(label='Open...')
filemenu.add_separator()
filemenu.add_command(label='Exit', command=root.quit)
helpmenu = Menu(menu)
menu.add_cascade(label='Help', menu=helpmenu)
helpmenu.add_command(label='About')
mainloop()


main = Tk()
ourMessage = 'This is our Message'
messageVar = Message(main, text=ourMessage)
messageVar.config(bg='lightgreen')
messageVar.pack()
main.mainloop()


root = Tk()
v = IntVar()
Radiobutton(root, text='GfG', variable=v, value=1).pack(anchor=W)
Radiobutton(root, text='MIT', variable=v, value=2).pack(anchor=W)
mainloop()


master = Tk()
w = Scale(master, from_=0, to=42)
w.pack()
w = Scale(master, from_=0, to=200, orient=HORIZONTAL)
w.pack()
mainloop()


root = Tk()
scrollbar = Scrollbar(root)
scrollbar.pack(side=RIGHT, fill=Y)
mylist = Listbox(root, yscrollcommand=scrollbar.set)
for line in range(100):
    mylist.insert(END, 'This is line number' + str(line))
    mylist.pack(side=LEFT, fill=BOTH)
    scrollbar.config(command=mylist.yview)
mainloop()


root = Tk()
T = Text(root, height=2, width=30)
T.pack()
T.insert(END, 'GeeksforGeeks\nBEST WEBSITE\n')
mainloop()


root = Tk()
root.title('GfG')
top = Toplevel()
top.title('Python')
top.mainloop()


m1 = PanedWindow()
m1.pack(fill=BOTH, expand=1)
left = Entry(m1, bd=5)
m1.add(left)
m2 = PanedWindow(m1, orient=VERTICAL)
m1.add(m2)
top = Scale(m2, orient=HORIZONTAL)
m2.add(top)
mainloop()
