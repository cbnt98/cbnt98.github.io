class bookClass {
    constructor(imgSrc, title, author, comment, date ) { 
        this.imgSrc = imgSrc;
        this.title = title;
        this.author = author;
        this.comment = comment;
        this.date = date;
    }
    GetImgInfo() {  /* メソッド */
        return ;  /* x と y を足した値を返却する */
    }
}

var books = [
    new bookClass('Cabinet/1.jpg','フィッツジェラルド10傑作選','スコット・フィッツジェラルド 村上春樹 編訳','読了',new Date(2024, 9, 12)),
    new bookClass('Cabinet/2.jpg','中国行きのスロー・ボート','村上春樹 ','読み途中。',new Date(2024, 9, 13)),
    new bookClass('Cabinet/3.jpg','掃除婦のための手引書','ルシア・ベルリン 岸本佐知子 訳','読み途中。',new Date(2024, 9, 12)),
    new bookClass('Cabinet/4.jpg','ディザインズ','五十嵐大介','読了。',new Date(2024, 9, 14)),
    new bookClass('Cabinet/5.jpg','村上さんのところ','村上春樹','読み途中。',new Date(2024, 9, 12)),
]

function WriteBookComments(){
    var P = document.getElementById('bookComments');
    for(let i = 0; i < books.length; i++){
        $('#bookComments')
    }
}

books[1].comment = 
`
スコット・フィッツジェラルド 村上春樹 編訳 <br>
村上春樹好きで初スコットフィッツジェラルド。
グレート・ギャツビーの映画は見たことあるけど。<br>
『氷の宮殿』が一番好きだった。
エッセイ『壊れる』三部作も何度か読み返した。
はずかしいけど、好きな文章をスケッチブックに写したりした（笑）。<br>
7月の終わりごろから読み始めて、出かけるときによく鞄の中に入れていたのに読み終わったのは9月。
午後のバイトの前に大濠公園のカフェでよく読んでいた。
`;

books[4].comment = 
`
大好きな漫画。絵が良すぎる。本当に美しい。<br>
一時期は1巻か2巻かを図書館でずっと模写していた。
こういうふうに絵書いたり、世界に触れたりしたい。<br>
二巻だけどこの本屋にもなかったから、一巻を読んだあと、残りは電子でかった思い出。
でも、漫画の場合、電子のほうが絵がよく見えて、めちゃくちゃ感動する。
これは発見だった。フラットな方が原稿に近いだろうし。
`
