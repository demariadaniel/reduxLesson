#Redux Tutorial

A basic Redux implementation meant to show how Redux aids with state handling when you have multiple levels of nested components. In this example the BoxE components contain buttons to increase the number of clicks, and the HeaderD component displays the total number of clicks. However, each BoxE is nested inside four levels of parent Box components,
and HeaderD is nested inside three levels of Header components. This would
require extensive passing of props and state between many components in
a traditional React app. Using Redux we are able to connect BoxE and HeaderD directly to our Store so that both components can easily make and
receive any updates to the number of clicks.

This project was bootstrapped with [Create React App]

based on this great [tutorial](https://www.valentinog.com/blog/react-redux-tutorial-beginners/) by Valentino Gagliardi

##Highlights
*./src/index.js contains basic setup using Store and Provider
*/store, /actions, /reducers all contain standard function types used in Redux
*HeaderD.js shows how to receive state values inside a component
*BoxE.js shows how to connect your state-updating actions to a React Component

##  ES6 SYNTAX FOR REDUX 
//////////////////////////////////////////////////////////////////////

### Currying
```javascript
function currying (A){
	console.log(`I am ${A}`)
	return function (B){
		console.log(`I am ${B}`)
	}
}

currying('Sean')('Greg')
```
Currying is the term for functions which return a second function, and executing BOTH functions using two sets of parentheses in a single function call. This example will print both 'I am Sean' and 'I am Greg.'

This is used in Redux as a way to combine presentational components we write with predefined functions in the react-redux library.

##Default Values
```javascript
function defaultValues (name = "Dan", age = 31){
	console.log(name)
	console.log(age)
}

defaultValues('Shane')
defaultValues('Lily', 24)
defaultValues()
```
You may not always receive a value for a given function argument. Default
values allow you to assign a value to your parameters when this happens.
So in this example, 'Dan' and 31 are the default values. defaultValues('Shane') will print 'Shane' and 31 -- age is not specified so it defaults to 31. However defaultValues('Lily', 24) will print 'Lily' and 24
because both of these values are provided.

This is used in Redux for Reducers which need a default state at the beginning of your app, before any other state has been created.

##Automatic Return in Arrow Functions
```javascript
let thing = ()=> 'item';
console.log(thing())
```
Single line arrow functions without { } will automatically return the return value of the statement they execute. In this example the function thing will return 'item' for example. This is used everywhere from actions to mapDispatchToProps/mapStatetoProps tos presentational components.

##Destructuring
```javascript
let data = {
	name: 'Dan', 
	age: 31, 
	DOB: 'Jan 20 1987', 
	address: '38 Joe Shuster Way #318', 
	kids: ['Soji', 'Sylvia', 'Isla'],
	occupation: 'Teaching Assistant',
	company: 'BrainStation'
}

let work = ({occupation, company}) => {
	console.log(occupation)
	console.log(company)
}

work(data)
```
The `=({var1, var2, ...})=>` syntax allows you to extract specific keys of
an object as independent variables. 
