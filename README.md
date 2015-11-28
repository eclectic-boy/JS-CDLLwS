#JS-CDLLwS

Javascript (*ES2015*) implementation of a *Circular Doubly Linked List with Sentinel*.
Porting from [javascript-CDLLwS-implicit](https://github.com/eclectic-boy/javascript-CDLLwS-implicit).

The implementation is based on *ES2015* (compiled to *ES5* using [Babel](http://babeljs.io/) compiler and [Gulp](http://gulpjs.com/)).

##Usage

To use the code simply grab the files
`js/app.built.js` and `js/app.built.js.map`, put them within the static directory of your project and link the first in your HTML file. These files contain the *ES5* compiled version of the code, refer to `js/src/JS-CDLLwS.es2015.js` for the *ES2015* original version.

##Tests
The tests suite has been nuilt using [Jasmine](http://jasmine.github.io/).
To run the test simply open up the file `jasmine/SpecRunner.html` in your browser. The file `jasmine/spec/mainSpec.js` contains the *ES5* compiled version of the test functions, refer to `jasmine/spec/src/mainSpec.2015.js` for the *ES2015* original version.

---

##`CDLLwS` class
The *Doubly Linked List with Sentinel* class itthis.
The defined properties/methods are the followings:

###`length`
	
It is the length of the list (omitting the sentinel object).
```javascript
let l = new CDDlwS();
length let = l.length;
```

###`constructor(this)`

###`[Symbol.iterator](this, getNode=false)`
	
Transforms this object into an iterator. If `getNode` is `true` it returns the `Node` instance otherwise the `data` property within.

> The Babel transpiller has some issues in handling defualt  parameters hence currenty the implementation has a normal `getNode` parameter and `getNode = getNode || false;` within the body of the function.

For example you can do:
```javascript
let l = new CDDlwS();
for(let x of l) {
	//...
}
```

###`get(this, getNode=false)`

Allows you to positionally retrieve a value of the list. If `getNode` is `true` it returns the `Node` instance otherwise the `data` property within.

> The Babel transpiller has some issues in handling defualt  parameters hence currenty the implementation has a normal `getNode` parameter and `getNode = getNode || false;` within the body of the function.

e.g.:
```javascript
let = new CDDlwS();
let item = l.get(27);
```

###`toString(this)`

Lets you print the `CDLLwS` instance like a normal `Array`, e.g.:
```javascript
let l = new CDDlwS();
console.log(l.toString());
```

###`valueOf(this)`

Rapresents the `CDLLwS` instance like a normal `Array`, e.g.:
```javascript
let l = new CDDlwS();
let asArray = l.valueOf();
```

###`insert(this, i, data)`

Lets you insert any value (`data`) to any position `i` (*&lt;int&gt;*) of the `CDLLwS` instance, e.g.:
```javascript
let l = new CDDlwS();
l.insert(27, "some text");
```
	
###`append(this, data)`

Lets you append any value (`data`) to the `CDLLwS` instance, e.g.:
```javascript
let l = new CDDlwS();
l.append("some text");
```

###`pop(this, i=-1)`

Lets you remove an element from the `CDLLwS` instance and return it. If parameter `i` (*&lt;int&gt;*) is equal to `-1` the last item is removed otherwise `i` must be and integer number indicating the position of the item to remove.

> The Babel transpiller has some issues in handling defualt  parameters hence currenty the implementation has a normal `i` parameter and `i = i !== undefined ? i : -1;` within the body of the function.

e.g.:
```javascript
let l = new CDDlwS();
let x = l.pop()
let y = l.pop(27)
let z = l.pop(0)
```
	
###`index(this, data)`

Returns the index of the first occurrence of `data` in the `CDLLwS` instance. Raises an `Error` instance if not present.
```javascript
let l = new CDDlwS();
let i = l.index("some text");
```
	
###`reverse(this)`

Reverses the order of the`CDLLwS` instance in place.

```javascript
let l = new CDDlwS();
l.reverse();
```

##Utility
	
###`enumerate(iterable)`

Returns a generator that associates an incremental 0-based index to every item of the `iterable` i.e. returns a (n-2) matrix of the form `[[0, iterable[0]], ..., [n-1, iterable[n-1]]]`.

```javascript
let l = ["q", "w", "e", "r", "t", "y"];

for(let [i, x] of enumerate(l)) {
	console.log(i, x);
}
/*
0	q
1	w
2	e
3	r
4	t
5	y
*/
```

---

##Changelog

###1.0.0

First version