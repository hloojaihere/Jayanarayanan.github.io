function header(){
  document.getElementById('top').innerHTML =
   `<a class="brand" href="index.html">${SITE.name}</a>
    <nav><a href="index.html">Projects</a><a href="about.html">About</a></nav>`;
  const f=document.getElementById('foot'); if(f) f.textContent = SITE.name + " · " + SITE.email;
}
