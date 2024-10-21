const BlogName = 'Cabinet (キャビネット)';
const BlogSubText = '家具的なブログ..';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max+1);
  return Math.floor(Math.random() * (max - min) + min); // 上限は除き、下限は含む
}

function setBgImg(x,y,z){
  n = getRandomInt(x,y);
  bg.setAttribute('src','BGImg/'+z+n+'.jpg');
  return null;
};
class SubPageClass{
  constructor(title,file){
    this.title = title;
    this.file = file;
  }
}

var HeaderList = [
  new SubPageClass('Top','index.html'),
  new SubPageClass('Splendid Ocean Blue','movies.html'),
  new SubPageClass('This is the way I like it','page.html'),
  new SubPageClass('Cabinet','books.html'),
  new SubPageClass('abaut','about.html'),
]


function writeHeader(){
    var Header = document.getElementById('header');
    // var Header = document.createElement('header');
    // Header.setAttribute('id', 'header');

    var Logo = document.createElement('div');
    Header.appendChild(Logo);
    Logo.setAttribute('class', 'logo');
    Logo.textContent = BlogName;
    

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

<div class="logo">羊の島</div>
<div class="sublogo"> ＿＿Letters from the sheep land. </div>


  <ul id= "headerList">
    <li id = "headerList">
      <a href="Home.html">
        Home
      </a>
    </li>
    
    <li id = "headerList">
      <a href="SplendidOceanBlue.html">
        Splendid Ocean Blue
      </a>
    </li>
    
    <li id = "headerList">
      <a href="ThatsTheWayILikeIt.html">
        That's The Way I Like It
      </a>
    </li>

    <li id = "headerList">
      <a href="Cabinet.html">
        Cabinet
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