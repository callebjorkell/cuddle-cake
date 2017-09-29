import Reveal from 'reveal.js'
import "reveal.js/lib/js/head.min"

import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'
import 'reveal.js/lib/css/zenburn.css'

Reveal.initialize({
    autoSlide: 5001,
	dependencies: [
		{ src: 'plugin/markdown/marked.js' },
		{ src: 'plugin/markdown/markdown.js' },
		{ src: 'plugin/notes/notes.js', async: true },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]
});

// plugins
require( "imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/zoom-js/zoom")
require( "imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/marked")
require( "imports-loader?Reveal=reveal.js/js/reveal!reveal.js/plugin/markdown/markdown")
