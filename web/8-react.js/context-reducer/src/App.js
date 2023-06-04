import Test from "./components/test.component";
import Diff from "./components/diff.component";
import Reducer from "./components/reducer.component";

/* 
* Why use context?
The React Context API is a way for a React app to effectively produce global 
variables that can be passed around. This is the alternative to "prop drilling" 
or moving props from grandparent to child to parent, and so on.
It allows state to be available everywhere and use in only place where required
unlikely prop drilling which passes states everywhere for just use in single component.

* Limitations of context api:-
Everything that consumes a context re-renders everytime that context's state changes. 
That means that if you're consuming your context all over the place in your app, or 
worse, using one context for your entire app's state, you're causing a ton of 
re-renders all over the place!
It can cause lot of trouble in big projects because it re-renders everytime. Re-render
doesn't mean paint everything but re-render to reflect on changes.

 */

function App() {
	return (
		<div className="App">
			<Test />
			<Diff />

			<Reducer />
		</div>
	);
}

export default App;
