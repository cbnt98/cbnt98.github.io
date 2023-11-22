var allPageNum = 2;
var pageTitle = "PageTitle";    //1
var pageDate = "0000-00-00";    //2
var categorie = "categorie";    //3
var PageMemo = "memo";          //4

var url = "index.Html";
var tagNum;
var tag = Array[tagNum]


class pageClass {
    // ...クラスの内容をここで定義する
    constructor(title, date, categorie, comment, tags,pageNum) { /* コンストラクタ */
        this.title = title;
        this.date = date;
        this.categorie = categorie;
        this.memo = comment;
        this.tags = tags;
        this.pageNum = pageNum;
    }
    GetPageInfo() {  /* メソッド */
        return ;  /* x と y を足した値を返却する */
    }
}

var pages = [
    new pageClass("ブログを作りました","2023-4-15","お知らせ","",["お知らせ","お知らせ"],"0"),
    new pageClass("今まで使ったカメラたち","2023-4-15","写真","懐かしい",["写真"],"1"),
    new pageClass("ソニックアドベンチャーで遊ぶ","2023-5-3","TVゲーム","PS3移植版",["ゲーム"],"2"),
];

function WritePageList(){   //全ページのリストを作る
    // document.write(`<ul class="contentsList">`);
    for(i=2; i >=0; i--){
        // PageInfo(i);
        // pages[i].GetPageInfo;
        var li = document.createElement('li');
        li.setAttribute('class','content');
        
        var a = document.createElement('a');
        a.setAttribute('href', "page" + i + ".html");

        var span = document.createElement('span');
        span.setAttribute('style', "background-color:whitesmoke");
        a.appendChild(span);
        span.textContent = pages[i].title+'（'+ pages[i].date+')';

        document.getElementById('contentsList').appendChild(li);
        li.appendChild(a);

        var p = document.createElement('p');
        p.setAttribute('class','contentComment');
        p.textContent = pages[i].date + ' ' + pages[i].memo + ' <' + pages[i].categorie + '> ';

        document.getElementById('contentsList').appendChild(p);
    }
}

function WriteTitleAndDate(i){   //一つのページ情報を書く
    var li = document.createElement('li');
    li.setAttribute('class','content');
    
    var a = document.createElement('a');
    a.setAttribute('href', "page" + i + ".html");

    var span = document.createElement('span');
    span.setAttribute('style', "background-color:whitesmoke");
    a.appendChild(span);
    span.textContent = pages[i].title+'（'+ pages[i].date+')';

    document.getElementById('contentsList').appendChild(li);
    li.appendChild(a);
}


function WritePageTitle(x){  //一つだけのリストを作る。各ページの先頭に置く
    var span = document.createElement('span');
    span.setAttribute('style', "background-color:whitesmoke");
    document.getElementById('pageTitle').appendChild(span);

    span.textContent = pages[x].title+'（'+ pages[x].date+')';
}
