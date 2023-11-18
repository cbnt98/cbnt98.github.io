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

function PageInfo(page){
    switch(page){
        case 0:
            pageTitle = "ブログを始めました";
            pageDate = "2023-4-15";
            categorie = "お知らせ";
            PageMemo = "初めましてのごあいさつ";
            break;
        case 1:
            pageTitle = "背景の写真について";
            pageDate = "2023-4-15";
            categorie = "写真";
            PageMemo = "フィルムで撮った写真";
            break;
        case 2:
            pageTitle = "このブログの構造";
            pageDate = "2023-5-3";
            categorie = "写真";
            PageMemo = "なかなか凝っている";
            break;
    }
}

function WritePageList(){   //全ページのリストを作る
    // document.write(`<ul class="contentsList">`);
    for(i=2; i >=0; i--){
        // PageInfo(i);
        // pages[i].GetPageInfo;
        var li = document.createElement('li');
        li.setAttribute('class','content');
        var a = document.createElement('a');
        a.setAttribute('href', "page" + i + ".html");
        a.textContent = pages[i].title+'（'+ pages[i].date+')';

        document.getElementById('contentsList').appendChild(li);
        li.appendChild(a);

        var p = document.createElement('p');
        p.setAttribute('class','contentComment');
        p.textContent = pages[i].date + ' ' + pages[i].memo + ' <' + pages[i].categorie + '> '

        document.getElementById('contentsList').appendChild(p);


        /*
        document.write(`
        <li class="content"><a href= "page`+pages[i].pageNum+`.html">`+pages[i].title+`（`+ pages[i].date+`)</a></li>
        <p class="contentComment">`+ pages[i].date+ ` `+pages[i].Memo+` #`+ pages[i].categorie+`</p>
        `);*/
    }
    // document.write(`</ul>`);
}
function WritePageTitle(x){  //一つだけのリストを作る。各ページの先頭に置く
    document.write(`<p id = "pageTitle"><span style="background-color:whitesmoke"`);
    document.write(pages[x].title);
    document.write(`</span></p>`);
}
