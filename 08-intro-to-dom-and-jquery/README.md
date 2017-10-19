<!-- .slide: data-transition="concave"  data-background="../images/background.jpg"-->
# ![](../images/js_logo.png)
## DOM + JSON

---

<!-- .slide: data-background="../images/background.jpg"-->
## Document Object Model

# ![](../images/dom.png)

---

<!-- .slide: data-background="../images/background.jpg"-->
* The DOM is a large object that describes the structure of our content. 
* Since it's an object, we can use normal techniques to get and set data
* In the browser, the DOM is represented by the `document` object. 

---

<!-- .slide: data-background="../images/background.jpg"-->
#### What can I do with the `document` object?

#### [Summary of all DOM properites and events](https://developer.mozilla.org/en-US/docs/Web/API/Document)

* Notice the event handlers. Pay special attention to:

	- `Document.getElementById(String id)`
	- `Document.querySelector(String selector)`
	- `Document.querySelectorAll(String selector)`

---

<!-- .slide: data-background="../images/background.jpg"-->
## Working with the DOM: Codealong

We can manipulate the DOM in 3 different ways:

1) Inline JavaScript (Worst)

```html
  <body onload="window.alert('welcome to my app!');">
```

---

<!-- .slide: data-background="../images/background.jpg"-->
2) Include script tags in our HTML documents. This technique is used primarily when generating content/properties through a back-end language (Bad)

	  <html>
	    <head>
	      <script>
	         alert('Welcome to my app!');
	      </script>
	    </head>
	    <body>
	    </body>
	  </html>

---

<!-- .slide: data-background="../images/background.jpg"-->
3) Including the JavaScript file at the footer (Good)

* We can't manipulate something that has not yet been drawn in the browser
* We can usually wrap this in a 'window.onload' function
* Let's try it out

---

<!-- .slide: data-background="../images/background.jpg"-->
Add a new element to our page through the following steps:

```js
   // run this function when the document is loaded
   window.onload = function() {

     // create a couple of elements in an empty HTML page
     var header = document.createElement("h1");
     var header_text = document.createTextNode("Hello dynamic world!");
     header.appendChild(header_text);
     document.body.appendChild(header);
  }
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## Augmenting JavaScript with jQuery: Codealong

Let's look at: [.val()](https://api.jquery.com/val/). 

Note in the table of contents that there are two method signatures, `.val()` and `.val(value)`. This is our hint that `.val()` can do two things.

---

<!-- .slide: data-background="../images/background.jpg"-->
Reading the documentation, we discover that `.val()` is getter on an element, but that `.val(value)` is a setter on an element. 

Be sure you're using the correct method. 

Reading examples is very helpful, and the jQuery examples in the docs are fully functional!

---

<!-- .slide: data-background="../images/background.jpg"-->
Here is a list of many common jQuery functions:

1. **[find()](http://api.jquery.com/find)**
1. **[hide()](http://api.jquery.com/hide)** / **[show()](http://api.jquery.com/show)**
1. **[html()](http://api.jquery.com/html)**
1. **[append()](http://api.jquery.com/append)** / **[prepend()](http://api.jquery.com/prepend)**
1. **[on()](http://api.jquery.com/on)** / **[off()](http://api.jquery.com/off)**
1. **[css()](http://api.jquery.com/css)**
1. **[attr()](http://api.jquery.com/attr)**
1. **[val()](http://api.jquery.com/val)**
1. **[text()](http://api.jquery.com/text)**
1. **[each()](http://api.jquery.com/each)**

---

<!-- .slide: data-background="../images/background.jpg"-->
We can use jQuery to find elements, manipulate the returned elements, change styles, and add event listeners.

Targeting DOM elements in jQuery is a little easier to read than the JavaScript counterpart.

```js
  // Target item by id
  $('#item');

  // Target item(s) by class
  $('.box')

  // Target item(s) by tag
  $('h2')
```

---

<!-- .slide: data-background="../images/background.jpg"-->
Setting CSS properties is just as easy
```js
  // It is good practice to prefix items we have selected via jQuery with a $ in front of the variable name
  var $item = $('#item');
  // Setting the css property requires us to pass the property we are changing and the value we are changing it to as parameters (strings) in the css() method
  $item.css('color', 'red');
```
>*** TIP: We often don't update styles through the css property. 
>
>This should be done by adding and removing classes appropriately through the `addClass()` and `removeClass()` methods. ***

---

<!-- .slide: data-background="../images/background.jpg"-->
We can update the internal html of an element with the html() method. 

Whatever we pass through the method will replace the current content of the selected element.

```js
  var $item = $('#item');
  // We can replace the content of the element either with text or with additional html.
  var htmlContent = "<p>Hello world</p>";
  $item.html(htmlContent);
```

---

<!-- .slide: data-background="../images/background.jpg"-->
jQuery also gives us access to many events making dealing with user interaction significantly easier.
```js
  var $button = $('#my-button');

  // Most events we will work with will pass as the first parameter in the on() method
  $button.on('click', function(event) {
    event.preventDefault();
    // Do something
  });
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## Challenge Lab: Create a Checklist in the Playground


---


<!-- .slide: data-background="../images/background.jpg"-->
## Homework

**Converting JSON**
- All of the instructions for this exercise are contained in the homework folder
- Given the flicker.js file, read through the instructions and complete each of the challenges, typing your code directly into the file
