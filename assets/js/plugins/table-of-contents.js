/*!
 * Table of Contents Toggle
 * https://github.com/smithtimmytim/brightlycolored.org
 * Copyright (c) 2017 Timothy B. Smith
 * Licensed MIT
 */
function showToc(o){function t(){o.style.display="block";var t=o.scrollHeight+"px";return o.style.disply="",t}var e=t();o.classList.add("js-toc-is-open"),o.style.height=e,window.setTimeout(function(){o.style.height=""},350)}function hideToc(t){t.style.height=t.scrollHeight+"px",window.setTimeout(function(){t.style.height="0"},1),window.setTimeout(function(){t.classList.remove("js-toc-is-open")},350)}function toggleToc(t){tocToggle.classList.toggle("js-toc-is-open"),t.classList.contains("js-toc-is-open")?hideToc(t):showToc(t)}var tocToggle=document.getElementById("toc-toggle"),tableOfContents=document.getElementById("markdown-toc");tocToggle&&tocToggle.addEventListener("click",function(){toggleToc(tableOfContents)});