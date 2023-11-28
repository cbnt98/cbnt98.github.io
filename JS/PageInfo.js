class pageClass {
    // ...クラスの内容をここで定義する
    constructor(page ,title, date, categorie, memo, tags) { /* コンストラクタ */
        this.page = page
        this.title = title;
        this.date = date;
        this.categorie = categorie;
        this.memo = memo;
        this.tags = tags;
    }
    GetPageInfo() {  /* メソッド */
        return ;  /* x と y を足した値を返却する */
    }
}

var tags = [
    'お知らせ',//0
    'TVゲーム',//1
    'カメラ',//2
    'お絵かき',//3
    'おでかけ',//4
    '雑記',//5
    'パソコン・タブレット'//6
]


var pages = [
                //page,title,date,categorie,memo,tags
    new pageClass(0,"ブログを作りました","2023-4-15","お知らせ","",0),
    new pageClass(1,"今まで使ったカメラたち","2023-4-15","写真","懐かしい",2),
    new pageClass(2,"ソニックアドベンチャーで遊ぶ","2023-5-3","TVゲーム","PS3移植版",1),
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

function WriteTagList(){
    
    for(i = 0; i <= tags.length+1; i++){
        var tagPages = pages.filter(h => h.tags === i);
        if(tagPages.length > 0){
            var li = document.createElement('li');
            var d = document.createElement('details');
    
            document.getElementById('tagList').appendChild(li);
            li.appendChild(d);

            var s = document.createElement('summary');
            // s.setAttribute('class','whitebox')
            s.textContent = tags[i];
            d.appendChild(s);
            var ul = document.createElement('ul');
            d.appendChild(ul);

            for(h = 0; h <= tagPages.length-1; h ++){
                var p = document.createElement('li');
                var a = document.createElement('a');
                ul.appendChild(p);
                p.appendChild(a);
                a.setAttribute('href', "page" + tagPages[h].page + ".html");
                a.setAttribute('class','whitebox')
                a.textContent = pages[i].title+'（'+ pages[i].date+')';
            }        
        }
    }

    var buttoms = document.getElementsByName('tag');
    for (i = 0; i <= buttoms.length; i++){
        // buttoms[i].addEventListener('onclick', CheckRadioButtons(buttoms[i].value))
    }

}

function CheckRadioButtons(x){
    var tagPages = pages.filter(h => h.tags === x);
    var ul = document.getElementById('tagPagesList');

    console.log("addd")
    for(i = 0; i <= tagPages.length+1; i++){
        var li = document.createElement('li');
        ul.appendChild(li);

        var a = document.createElement('a');
        li.appendChild(a);

        a.setAttribute('href', "page" + tagPages.page + ".html");
        a.textContent = tagPages.title;
    }
}





function WritePagesOfTag(x){
    var tagPages = pages.filter(h => h.tags === x);

    // var ul = document.createElement('ul');
    // document.getElementById('tag'+x).appendChild(ul);

    for(i = 0; i <= tagPages.length+1; i++){
        var li = document.createElement('li');
        document.getElementById('tagPagesList').appendChild(li);
        
        var a = createElement('a');
        li.appendChild(a);

        a.setAttribute('href', "page" + tagPages[i].page + ".html");
        a.textContent = tagPages[i].title;
    }
}

