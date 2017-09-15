# ![logo](https://i.imgur.com/4O1IXsG.png) BigPicture.js

![Example page screenshot](http://i.imgur.com/7T6dnN3.gif)

Lightweight (just over 4 KB minified, 2 KB gzip) and framework independent JavaScript image / video viewer.

Supports Youtube, Vimeo, and direct video links.

Doesn't sit on the DOM when inactive.

##### [Check out the example page here](https://henrygd.me/bigpicture)

## Instructions

Install via npm or add a script from the [dist](dist) directory to your page.

```
npm install bigpicture
```

```javascript
var BigPicture = require('bigpicture');
```

Or with a script tag:

```html
<script src="BigPicture.js"></script>
```
The script is all that's needed -- no additional CSS file.

When you want to open something, pass an object to `BigPicture` containing the element from which you want the animation to start and an optional second parameter depending on what you want to do. Examples below use `this` to refer to the trigger element being interacted with in the context of an event handler. You can use a different element if you want (for example, different buttons could be set up to open videos from the same central showcase element).

##### Remote image example

```javascript
BigPicture({
  el: this,
  imgSrc: 'http://yourimage.jpg'
});
```

##### Remote video

```javascript
BigPicture({
  el: this,
  vidSrc: 'http://yourvideo.mp4'
});
```

##### Youtube

Pass in the video ID from the url. For example, the ID for `https://www.youtube.com/watch?v=z_PeaHVcohg` would be `z_PeaHVcohg` (The `v` parameter in the address).

```javascript
BigPicture({
  el: this,
  ytSrc: 'z_PeaHVcohg'
});
```

##### Vimeo

Like Youtube, pass in the video ID from the url. The ID for `https://vimeo.com/119287310` would be `119287310`.

```javascript
BigPicture({
  el: this,
  vimeoSrc: '119287310'
});
```

##### Local images & background images

If your trigger element is an image or an element with a background image, you can open it directly by passing it alone.

```javascript
BigPicture({
  el: this
});
```

## Captions

To display a caption, add a caption attribute with the desired text (or HTML) to the trigger element itself.

```html
<img src="yourimage.jpg" caption="Example of an optional caption."/>
```

## Optional callbacks

To execute specified functions at the start or end of the opening animation, pass them in as `animationStart` or `animationEnd`. `animationStart` will run even if there's an error, so it's okay to use if you want to hide your own custom loader.

```javascript
BigPicture({
  el: this,
  // executed immediately before open animation starts
  animationStart: function() {
    console.log('it is opening');
  },
  // executed immediately after open animation finishes
  animationEnd: function() {
    console.log('it has opened');
  }
});
```

## Hide default loading icon

If you're loading remote images or videos and don't want the default loading icon displayed, set `noLoader` to true.

```javascript
BigPicture({
  el: this,
  vimeoSrc: '119287310',
  noLoader: true
});
```

### Troubleshooting

If the media or loading icon fails to display, it's probably a z-index issue. The media container has a default z-index of 9999, and the loading icon has a z-index of 9 relative to the trigger element's parent container.

---

License: MIT
