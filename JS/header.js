const BlogName = 'Cabinet (キャビネット)';
const BlogSubText = '家具的なブログ..';

class pageClass{
  constructor(title,file){
    this.title = title;
    this.file = file;
  }
}

var HeaderList = [
  new pageClass('Top','index.html'),
  new pageClass('Splendid Ocean Blue','movies.html'),
  new pageClass('This is the way I like it','page.html'),
  new pageClass('Cabinet','books.html'),
  new pageClass('abaut','about.html'),
]


function writeHeader(){
    var Header = document.getElementById('header');
    // var Header = document.createElement('header');
    // Header.setAttribute('id', 'header');

    var Logo = document.createElement('div');
    Logo.setAttribute('class', 'logo');
    Logo.textContent = BlogName;
    Header.appendChild(Logo);

    var SubLogo = document.createElement('div');
    SubLogo.setAttribute('class', 'sublogo');
    SubLogo.textContent = BlogSubText;

    var Ul = document.createElement('ul');
    Ul.setAttribute('id','hederList')

    for(i = HeaderList.length - 1; i>=0; i--){
      var Li = document.createElement('li');
      Li.setAttribute('id','headerLIst');

      var A = document.createElement('a');
      A.setAttribute('href',HeaderList[i].file);
      A.textContent = HeaderList[i].title;

      Li.appendChild(A);
      Ul.appendChild(Li);
    }
}






var header = `
<header id="header">

<div class="logo">Cabinet (キャビネット)</div>
<div class="sublogo">家具的なブログ..</div>


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


</header>
`