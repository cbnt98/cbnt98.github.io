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
    new pageClass(0,"ブログを作りました。","2023-4-15","お知らせ","はじめまして",0),
    new pageClass(1,"今まで使ったカメラたち","2023-11-22","写真","結局今のカメラが一番好き。",2),
    new pageClass(2,"スイス・ローザンヌへ行きました。","2023-11-29","旅行","ただで行けた。ラッキー！",4),
    new pageClass(3,"年越しに向けて","2023-12-5", "雑記", "色々と整理する",5 ),
    new pageClass(4,"車校通いとiPod4の楽しみ","2023-12-14", "雑記", "",5 )
];

function WritePageList(){   //全ページのリストを作る
    // document.write(`<ul class="contentsList">`);
    for(i=pages.length-1; i >=0; i--){
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

function WritePageContoroller(x){

    var d = document.getElementById("PageController");
    var b = document.createElement('a');
    var n = document.createElement('a');
    var p = document.createElement('p');


    b.setAttribute('id','back');
    p.setAttribute('id','HeadTitle');
    n.setAttribute('id','next');

    d.appendChild(n);
    d.appendChild(b);
    d.appendChild(p);

    if(x === 0){
        n.setAttribute('href','page'+(x+1)+'.html');
        if(window.outerWidth >= 550){
            n.textContent = '<' + (x+2) + '. '+ pages[(x+1)].title;
        }
        else{
            n.textContent = '< 次へ' ;
        }
    }
    else if(x === pages.length-1){
        b.setAttribute('href','page'+(x-1)+'.html');
        if(window.outerWidth >= 550){
            b.textContent = x + '. '+ pages[(x-1)].title + '>';
        }
        else{
            b.textContent = '前へ>';
        }

    }
    else{
        b.setAttribute('href','page'+(x-1)+'.html');
        n.setAttribute('href','page'+(x+1)+'.html');
        if(window.outerWidth >= 550){
        b.textContent = x + '. '+ pages[(x-1)].title + '>';
        n.textContent = '<' + (x+2) + '. '+ pages[(x+1)].title;
        }
        else{
            n.textContent = '< 次へ' ;
            b.textContent = '前へ>';
        }
    }

    p.textContent = x+1 + '. '+ pages[x].title;
    
}

function WriteTagList(){
    
    for(i = 0; i < tags.length; i++){
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

            for(h = 0; h < tagPages.length; h ++){
                var p = document.createElement('li');
                var a = document.createElement('a');
                ul.appendChild(p);
                p.appendChild(a);
                a.setAttribute('href', "page" + tagPages[h].page + ".html");
                a.setAttribute('class','whitebox')
                a.textContent = tagPages[h].title+'（'+ tagPages[h].date+')';
            }        
        }
    }
}

