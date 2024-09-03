function writeHeader(){
    document.write(header);
}

var header = `
<header id="header">
<!-- TODO:  Use a tags instead of ul -->

<div class="logo">Cabinet (キャビネット)</div>
<div class="sublogo">家具的なブログ..</div>
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
      <a href="imageList.html">
        Images
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