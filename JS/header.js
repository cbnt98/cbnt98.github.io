function writeHeader(){
    document.write(header);
}

var header = `
<header id="header">
<!-- TODO:  Use a tags instead of ul -->

<div class="logo">Cabinet (キャビネット)</div>
<div class="sublogo">古い家具、新しい生活</div>
<nav class="menu">
  <ul id= "headerList">
    <li id = "headerList">
      <a href="index.html">
        Home
      </a>
    </li>
    
    <li id = "headerList">
      <a href="categories.html">
        Categories
      </a>
    </li>
    
    <li id = "headerList">
      <a href="links.html">
        Links
      </a>
    </li>
    
    <li id = "headerList">
      <a href="about.html">
        About
      </a>
    </li>
    
  </ul>
</nav>

</header>
`