window.addEventListener("load",()=>{let t=!1;function e(){var e;document.body.style.cssText="width: 100%;overflow: hidden",document.querySelector("#local-search .search-dialog").style.display="block",document.querySelector("#local-search-input input").focus(),btf.fadeIn(document.getElementById("search-mask"),.5),t||(e=GLOBAL_CONFIG.localSearch.path,fetch(GLOBAL_CONFIG.root+e).then(e=>e.text()).then(e=>(new window.DOMParser).parseFromString(e,"text/xml")).then(e=>{const t=[...e.querySelectorAll("entry")].map(function(e){var t=e.querySelector("content");return{title:e.querySelector("title").textContent,content:t?t.textContent:"",url:e.querySelector("url").textContent}}),n=document.querySelector("#local-search-input input"),c=document.getElementById("local-search-results");n.addEventListener("input",function(){let u='<div class="search-result-list">';const h=this.value.trim().toLowerCase().split(/[\s]+/);if(c.innerHTML="",!(this.value.trim().length<=0)){let d=0;t.forEach(function(e){let n=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");let c=e.title.trim().toLowerCase();const r=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var l=e.url.startsWith("/")?e.url:GLOBAL_CONFIG.root+e.url;let o,a=-1,s=-1;if(""!==c||""!==r?h.forEach(function(e,t){o=c.indexOf(e),a=r.indexOf(e),o<0&&a<0?n=!1:(a<0&&(a=0),0===t&&(s=a))}):n=!1,n){const i=e.content.trim().replace(/<[^>]+>/g,"");if(0<=s){let e=s-30,t=s+100;e<0&&(e=0),0===e&&(t=100),t>i.length&&(t=i.length);let n=i.substring(e,t);h.forEach(function(e){var t=new RegExp(e,"gi");n=n.replace(t,'<span class="search-keyword">'+e+"</span>"),c=c.replace(t,'<span class="search-keyword">'+e+"</span>")}),u+='<div class="local-search__hit-item"><a href="'+l+'" class="search-result-title">'+c+"</a>",d+=1,""!==r&&(u+='<p class="search-result">'+n+"...</p>")}u+="</div>"}}),0===d&&(u+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),u+="</div>",c.innerHTML=u,window.pjax&&window.pjax.refresh(c)}})}),t=!0),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(n(),document.removeEventListener("keydown",e))})}const n=function(){document.body.style.cssText="width: '';overflow: ''";const e=document.querySelector("#local-search .search-dialog");e.style.animation="search_close .5s",setTimeout(()=>{e.style.cssText="display: none; animation: ''"},500),btf.fadeOut(document.getElementById("search-mask"),.5)},c=()=>{document.querySelector("#search-button > .search").addEventListener("click",e),document.getElementById("search-mask").addEventListener("click",n),document.querySelector("#local-search .search-close-button").addEventListener("click",n)};c(),window.addEventListener("pjax:complete",function(){"block"===getComputedStyle(document.querySelector("#local-search .search-dialog")).display&&n(),c()})});