class movieClass{
    constructor(imgSrc,title, year ,author, comment, date){
        this.imgSrc = imgSrc;
        this.title = title;
        this.year = year;
        this.author = author;
        this.comment = comment;
        this.date = date;
    }
}

var movies = [
    new movieClass('Movie/1.jpg','コーダあいのうた','2021','シアン・ヘダー','', new date(2024,8-1,28)),
    new movieClass('Movie/2.jpg','夜の浜辺でひとり','2017','ホン・サンス','', new date(2024,9-1,4)),
    new movieClass('Movie/3.jpg','オー！スジョン','2000','ホン・サンス','', new date(2024,8-1,30)),
    new movieClass('Movie/4.jpg','ニューヨーカーの暮らし方 season3','2024','ジョン・ウィルソン','', new date(2024,9-1,18)),
    new movieClass('Movie/5.jpg','座頭市 血煙り街道','1967','三隅研次','', new date(2024,9-1,5)),
    new movieClass('Movie/6.jpg','introduction','2022','ホン・サンス','', new date(2024,8-1,28)),

]

function WriteMovieImage(){
    var d = document.getElementById('bookImages');
    for(let  i = 0; i < books.length; i++){
        var img =  document.createElement('img');
        img.setAttribute('src','Cabinet/' + (i+1) + '.jpg');
        img.setAttribute('class', 'contentImg');
        img.setAttribute('id', (i+1));
        d.appendChild(img);
    }
}
movies[0].comment = 
`
友達のすすめでみた。最初のショットからめちゃくちゃ良い映画だと思った。海とか港がとても良いルックで写されている。めちゃくちゃ泣いたし。ブルーレイ買ってしまった。
`

movies[1].comment = 
`
四回目くらい、みるの。やっぱホン・サンスすき。この作品が一番ルックが良いと思う。キム・ミニがめちゃくちゃいい感じに写されてる。体に染み入った。
`

movies[2].comment = 
`
映画館で見逃してから気になりだしたのでアマプラでみた。かなり昔のホン・サンス。見たことある俳優も出てくる。おもしろいけど、最近の作品のほうが好き。
`;

movies[2].comment = 
`
映画館で見逃してから気になりだしたのでアマプラでみた。かなり昔のホン・サンス。見たことある俳優も出てくる。おもしろいけど、最近の作品のほうが好き。
`;

