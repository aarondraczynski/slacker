slacker
=======
Copyright (C) 2010-2012 Aaron Draczynski

http://github.com/aarondraczynski/slacker

http://twitter.com/developer

Released under the MIT License

http://www.opensource.org/licenses/mit-license.php

### Introduction
Slacker is a jQuery plugin that lazy loads images as the user scrolls down the page.

Images that are located outside of the current viewport position will not be loaded until the user scrolls to them, conserving bandwidth and decreasing page load time.

Slacker requires jQuery v1.7 or later.

### Usage
Include slacker.js on your page after jQuery:
<pre>
  <code>
    &lt;script src="jquery.js" type="text/javascript"&gt;&lt;/script&gt;
    &lt;script src="slacker.js" type="text/javascript"&gt;&lt;/script&gt;
  </code>
</pre>
Your image HTML should be formatted as shown below, with a noscript alternative for users without JavaScript. A 1px placeholder graphic is set as the initial image src, which is replaced with the src of the actual image once Slacker detects the user has scrolled that far.
<pre>
  <code>
    &lt;img class="l" src="placeholder.gif" data-src="actual-image.jpg" width="640" height="480" alt="Image" /&gt;
    &lt;noscript&gt;
      &lt;img src="actual-image.jpg" width="640" height="480" alt="Image" /&gt;
    &lt;/noscript&gt;
  </code>
</pre>
In your site JavaScript, initialize Slacker on all images you're lazy loading (any &lt;img&gt; with class "l") by making the following call:
<pre>
  <code>
    $('.l').slacker();
  </code>
</pre>
Finally, ensure that users without JavaScript will not see any of the placeholder graphics by including the following style in your page:
<pre>
  <code>
    &lt;noscript&gt;
      &lt;style type="text/css"&gt;
        .l { display: none }
      &lt;/style&gt;
    &lt;/noscript&gt;
  </code>
</pre>

### Customization
You can modify the __sensitivity__ variable inside of slacker.js. This is a threshold (in pixels) where images located slightly outside of the current scroll position will be loaded anyways. This ensures that as the user continues scrolling, the next image will be loaded even if it's slightly out of view.
