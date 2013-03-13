# Diagonal CSS3 Accordion
## Description
This is a proof of concept for a diagonal accordion using mostly CSS3 and some JavaScript for triggering events.

## Features
 - Diagonal accordion with a -45deg skew.
 - LESS source code for easier customization.
 - Auto-adjusting of the images to the accordion size (needs improvement).
 - Fallbacks to a simple accordion (without animation) on browsers that do not support CSS3.

## Usage
This accordions needs some basic markup:

```html
	<div class="skew-accordion">
	    <div class="skew-cont skew-open">
	        <img src="http://lorempixel.com/1280/600/sports?1=1" alt="" class="skew-background">
	        <h1 class="accordion-title">Slide 1</h1>
	        <div>
	            <img src="http://lorempixel.com/1000/600/food/" >
	            <h1>Hello</h1>
	            <p>Sample content</p>
	        </div>
	    </div>
	    <div class="skew-cont">
	        <img src="http://lorempixel.com/1280/600/sports?1=2" alt="" class="skew-background">
	        <h1 class="accordion-title">Slide 2</h1>
	        <div>
	            <img src="http://lorempixel.com/1000/600/food/" >
	            <h1>Hello</h1>
	            <p>Sample content</p>
	        </div>
	    </div>
	    <div class="skew-cont">
	        <img src="http://lorempixel.com/1280/600/sports?1=3" alt="" class="skew-background">
	        <h1 class="accordion-title">Slide 3</h1>
	        <div>
	            <img src="http://lorempixel.com/1000/600/food/" >
	            <h1>Hello</h1>
	            <p>Sample content</p>
	        </div>
	    </div>
	    <div class="skew-cont">
	        <img src="http://lorempixel.com/1280/600/sports?1=4" alt="" class="skew-background">
	        <h1 class="accordion-title">Slide 4</h1>
	        <div>
	            <img src="http://lorempixel.com/1000/600/food/" >
	            <h1>Hello</h1>
	            <p>Sample content</p>
	        </div>
	    </div>
	</div>
```
Include the scripts.js and styles.css files, tweak to your liking and you should be ready to go.

## About
This was developed as a proof of concept for a project, feel free to use it however you want.