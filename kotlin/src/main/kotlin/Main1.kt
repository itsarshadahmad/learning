import java.util.Objects
import java.util.Scanner
import kotlin.collections.reduce as reduce

class Main1 {
    //    Companion object -> Makes few kotlin missing feature of java work
    companion object {
        @JvmStatic // Static function
        fun staticFunction() {
            // Kotlin doesn't support static that's why to work with java and have static
            // behaviour it has static annotation.
        }

        // Factory design pattern -> It create object of defined class object from multiple classes
        fun create(): Main1 = Main1()
    }
}

fun main() {
    var obj = Main1.create()

//    User input in kotlin
    //val scanner = Scanner(System.`in`)
//    print("Enter your name: ")
//    var name = scanner.nextLine()
//    println("Your name is $name.")

//    Kotlin way of user input
//    var num = readlnOrNull()
//    readln()
//    readLine()

    var s1 = mutableListOf<String>() // mutable list
    s1.add("Dan")
    s1.add("John")
    s1.add("Brandon")

    s1.forEach(::print)
//    list.forEach(className::println)
    s1.forEach { println(it) }
    s1.forEach { v -> println(v) }

    s1.filter { it.length == 4 } // to filter or find something from list return boolean
    s1.map { } // to change, transform or map list to something
    // val red = s1.reduce() // it also transforms list to defined operation

    // lateinit -> allow us to declare variable but assign value letter on.
    lateinit var names: String
    names = "Card"

//    Null Safety
    // There are still few techniques for using or accessing the nullable variable.
    // One of them is safe call (?.) and another one is null check (!!)

//    safe calls (?.) -> Its way of using a nullable property is safe call operator (?.)
//    Safe calls are useful in chains.
    names?.length?.and(12)

//    Elvis Operator (?:)
//    This one is similar to safe calls except the fact that it can return a non-null value if the calling property is null even

//    fun foo(node: Node): String? {
//        val parent = node.getParent() ?: return null
//        val name = node.getName() ?: throw IllegalArgumentException(“name expected”)
//        // …
//    }

//    The !! Operator (or Not Null Assertion):
//    This operator is used to explicitly tell the compiler that the property is not
//    null and if it’s null, please throw a null pointer exception (NPE).
    names!!.length // not null

//    Type checking (is operator):
    var m1 = Main1()
    if (m1 is Main1) {
        // checks weather m1 belongs to Main1
    }

//    is operator is also used in smart cast:
    lateinit var obj2: Main1
    //obj2 is Main1 // smart cast way to cast if object belongs to same class

//    as keyword -> explicitly cast
    lateinit var obj1: Main1
    //obj1 as Main1 // Cast

    //    Any type -> Its generic return type where type will be automatically defined by compiler at runtime
    fun tc(): Any {
        return "Tom Cruise World!"
    }

//    Destructuring -> create different object of any object (like js)
    var (name, age) = Person("John", 17)

//    mutable map
    var m3 = mutableMapOf<String, Int>()
    m3["John"] = 17 // way to assign map key and value

    //    varargs -> parameter of array
    fun arrFun(vararg arr: Int) {}
    arrFun(13, 2, 21, 4, 5, 88) // It doesn't have any limit on variable as argument

//    Inline function call -> its lambda way to define method call
    calc { num1, num2 -> num1 + num2 }

//    Scope functions -> purpose is to execute a block of code within the context of an object.
//    There are five of them: let, run, with, apply, and also
//    Let function, Object reference it:
//    let can be used to invoke one or more functions on results of call chains.
    val numbers = mutableListOf("one", "two", "three", "four", "five")
    val resultList = numbers.map { it.length }.filter { it > 3 }
    println(resultList)

//    Run function, Object reference this:
//    run does the same as with but invokes as let - as an extension function of the context object.
//run is useful when your lambda contains both the object initialization and the computation of the return value.
    val hexNumberRegex = run {
        val digits = "0-9"
        val hexDigits = "A-Fa-f"
        val sign = "+-"

        Regex("[$sign]?[$digits$hexDigits]+")
    }

    for (match in hexNumberRegex.findAll("+123 -FFFF !%*& 88 XYZ")) {
        println(match.value)
    }


//    With function, Object reference this:
//    We recommend with for calling functions on the context object without providing the lambda result. In the code, with can be read as "with this object, do the following."
//    val numbers = mutableListOf("one", "two", "three")
    with(numbers) {
        println("'with' is called with argument $this")
        println("It contains $size elements")
    }

//    Apply function, Object reference this:
//    Use apply for code blocks that don't return a value and mainly operate on the members of the receiver object. The common case for apply is the object configuration. Such calls can be read as "apply the following assignments to the object."
    val adam = Person("Adam", 32).apply {
        age = 32
    }
    println(adam)

//    Also function, Object reference it:
//    When you see also in the code, you can read it as "and also do the following with the object."
//    val numbers = mutableListOf("one", "two", "three")
    numbers
        .also { println("The list elements before adding new one: $it") }
        .add("four")

//    Enum call
    var enumObj = Day.Friday
    enumObj.printFormattedDay()

//    Sealed class call
    var ob1 = Red("Light", 2)
    ob1.type
}

// Inline function -> high order function is a function that takes functions as parameters, or returns a function.
// It was created to implement closure and improve performance because it uses lambda.
inline fun calc(fn: (num1: Int, num2: Int) -> Int): Unit {
    println(fn(10, 22))
}

data class Person(val name: String, val age: Int)

// Sealed classes -> ensure type safety by restricting the types to be
// matched at compile-time rather than at runtime. Sealed class are used to create class
// with different types. It's similar to enum where enum is restricted to specified value
// sealed classes allow you to type cast class with different flavor state.
// We can not create object of sealed class but used as type checking on other class.
// Enum deals with value, sealed classes deals with types, and state of objects can be
// changed in sealed class of different objects. like red with dark tint, red with light
// tint where in enum you only had red as generic one option.
sealed class Tile
class Red(val type: String, val points: Int) : Tile()
class Blue(points: Int) : Tile()

//Sealed interface -> its same like sealed class but its interface
sealed interface Age

// Enum -> Its class with predefined value as variable to call using class name.
// when your data is predefined or known then use enum class. All values of enum are
// object of class.
enum class Day {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday;

    fun printFormattedDay() {
        println("Day is $this") // this point to object which calls
    }
}

// Enum with constructor
enum class Gender(number: Int) {
    Male(1),
    Female(2),
    Other(3)
}