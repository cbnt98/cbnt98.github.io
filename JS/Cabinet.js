class bookClass {
    constructor(imgSrc, title,author, comment, date, year ) { 
        this.imgSrc = imgSrc;
        this.title = title;
        this.author = author;
        this.comment = comment;
        this.date = date;
        this.year= year;
    }
    GetImgInfo() {  /* メソッド */
        return ;  /* x と y を足した値を返却する */
    }
}

var books = [
    new bookClass('Cabinet/1.jpg','フィッツジェラルド10傑作選','スコット・フィッツジェラルド 村上春樹 編訳','読了',new Date(2024, 9 -1 , 12)),
    new bookClass('Cabinet/2.jpg','中国行きのスロー・ボート','村上春樹 ','読み途中。',new Date(2024, 9 -1 , 20)),
    new bookClass('Cabinet/3.jpg','掃除婦のための手引書','ルシア・ベルリン 岸本佐知子 訳','読み途中。',new Date(2024, 9-1 , 12)),
    new bookClass('Cabinet/4.jpg','ディザインズ','五十嵐大介','読了。',new Date(2024, 9-1 , 14)),
    new bookClass('Cabinet/5.jpg','村上さんのところ','村上春樹','読み途中。',new Date(2024, 9-1 , 23)),
    new bookClass('Cabinet/6.jpg','スプートニクの恋人','村上春樹','思い出した。また読みたい。',new Date(2024, 9-1 , 16)),
    new bookClass('Cabinet/7.jpg','人間失格','太宰治','',new Date(2024, 9-1 , 22)),
    new bookClass('Cabinet/8.jpg','フラニーとズーイ','サリンジャー 村上春樹 訳','',new Date(2024, 9-1 , 30)),
    new bookClass('Cabinet/9.jpg','異邦人 ','カミュ 窪田啓作 訳','', new Date(2024, 10-1 , 2)),
    new bookClass('Cabinet/10.jpg','歩くこと、または飼いならされずに詩的な人生を生きる術','トマス・エスペダル','',new Date(2024, 9-1 , 30)),
    new bookClass('Cabinet/11.jpg','螢・納屋を焼く・その他の短編','村上春樹','',new Date(2024, 10-1 , 3)),

]
function WriteLastContent(x,y){
    var p = document.getElementById(y);
    var s = p.innerHTML + '<br>最終更新： '+x[(x.length-1)].date.toLocaleDateString('sv-SE')+'『' + x[(x.length-1)].title + '』'+ x[(x.length-1)].author;

    p.innerHTML =s;
}

function WriteBookImage(x){
    var d = document.getElementById('bookImages');
    for(let  i = (x.length-1); i >= 0; i--){
        var img =  document.createElement('img');
        img.setAttribute('src',x[i].imgSrc);
        img.setAttribute('class', 'contentImg');
        img.setAttribute('id', (i+1));
        d.appendChild(img);
    }
}

function WriteBookComments(x){
    var P = document.getElementById('bookComments');
    var s = '<div class = "wrapper">'
    var y = '';
    for(let  i = (x.length-1); i >= 0; i--){
        if(x[i].year != null){
            y = '('+x[i].year+') ';
        }
        s = s + '<div class="content">'+'<img src = '+x[i].imgSrc+' width="30" >'+'<span style="background-color:whitesmoke">『' + x[i].title + '』'+ y + x[i].author + '<br>' + x[i].comment +'('+x[i].date.toLocaleDateString('sv-SE')+ ')'+'<br><br></div>';
    }
    P.innerHTML = s;
}

window.addEventListener('load', function() {
    var menuItems = Array.from(document.getElementsByClassName('contentImg'));
    var sections =  Array.from(document.getElementsByClassName('content'));
    menuItems.forEach(function(item, i) {
      var target = sections[i];
      item.addEventListener('click', function() {
        $('html,body').animate({
          scrollTop: window.pageYOffset + target.getBoundingClientRect().top - 8 // 要素がブラウザ上部ぴったりになるので少し隙間をあけました
        }, 500, 'swing');
      });
    });
  });

books[8].comment =
`
不条理についてよりも彼女マリイと海で遊んだり、街の様子などに対してムルソーが幸福を感じる描写が好きだった。
”私ははじめて、世界の優しい無関心に、心をひらいた。これほど世界を自分に近いものと感じ、
自分の兄弟のように感じると、私は、自分が幸福だったし、今もなお幸福であることを悟った。”
`

books[7].comment =
`
面白かった。『フラニー』の章ではかなり引き込まれて、『ズーイ』の章ではいよいよ、小難しい話がおおくて、疲れたけど、なんかぐっと来た。
ズーイの口達者さと、フラニーの口調、どちらも好きだった。優しいハートを感じた。
` 

books[6].comment = 
`
散歩しながら朗読聞いた（オーディブル）。昼は駒沢公園の芝生で寝ながら、最後はたどり着いた三軒茶屋の公園のベンチで聞いていた。
結構夢中になったし、面白かったんだと思う。最後の数節が耳に残っている。
`

books[1].comment =
`
本を読む場所を探して散歩をする一日を一週間ほど繰り返した。
『土の中の小さな犬』が心に残っている。
あと『貧乏な叔母さんの話』で寝ている彼女に電話をかけるところ。
`;
books[0].comment = 
`
村上春樹好きで初スコットフィッツジェラルド。
グレート・ギャツビーの映画は見たことあるけど。<br>
『氷の宮殿』が一番好きだった。
エッセイ『壊れる』三部作も何度か読み返した。
はずかしいけど、好きな文章をスケッチブックに写したりした（笑）。<br>
7月の終わりごろから読み始めて、出かけるときによく鞄の中に入れていたのに読み終わったのは9月。
午後のバイトの前に大濠公園のカフェでよく読んでいた。
`;

books[3].comment = 
`
大好きな漫画。絵が良すぎる。本当に美しい。<br>
一時期は1巻か2巻かを図書館でずっと模写していた。
こういうふうに絵書いたり、世界に触れたりしたい。<br>
二巻だけどこの本屋にもなかったから、一巻を読んだあと、残りは電子でかった思い出。
でも、漫画の場合、電子のほうが絵がよく見えて、めちゃくちゃ感動する。
これは発見だった。フラットな方が原稿に近いだろうし。
`;

books[4].comment =
`
適当に開いて読むと楽しい。電子版買おうかな。
`