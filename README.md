## Morphing Background Effect

##HTML
```html
<div class="absolute">
	<div class="absolute inset-0 justify-center">
		<div class="bg-shape1 bg-teal opacity-50 bg-blur"></div>
		<div class="bg-shape2 bg-primary opacity-50 bg-blur"></div>
		<div class="bg-shape1 bg-purple opacity-50 bg-blur"></div>
	</div>
</div>
```

##CSS
```css
body {
	justify-content: center;
	box-sizing: border-box;
}

.absolute {
	position: absolute;
	top: 50px !important;
	inset: 0;
	justify-content: center;
	display: inline-flex;
	flex-direction: row;
}

.justify-center {
	justify-content: center;
}

.bg-shape1 {
	width: 400px;
	height: 400px;
	border-radius: 9999px;
	position: relative;
	animation: one 10s infinite;
}

.bg-shape2 {
	width: 300px;
	height: 300px;
	border-radius: 9999px;
	position: relative;
	animation: two 10s infinite;
}

@keyframes one {
	0% { left: 0px; top: 0px; }
	25% { left: -100px; top: 70px; }
	50% { left: 20px; top: 150px; }
	75% { left: 50px; top: 100px; }
	100% { left: 0px; top: 0px; }
}

@keyframes two {
	0% { left: 0px; top: 0px; }
	25% { left: 50px; top: 10px; }
	50% { left: 100px; top: 50px; }
	75% { left: 50px; top: 100px; }
	100% { left: 0px; top: 0px; }
}

.opacity-50 {
	opacity: .5;
}

.bg-blur {
	filter: blur(90px);
}

.bg-primary {
	background-color: rgb(30, 0, 255);
}

.bg-teal {
	background-color: rgb(255, 72, 173);
}

.bg-purple {
	background-color: rgb(140, 0, 215);
}
```
