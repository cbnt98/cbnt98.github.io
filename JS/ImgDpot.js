class imageClass {
    // ...クラスの内容をここで定義する
    constructor(pageNo, imgNo, comment, date ) { /* コンストラクタ */
        this.pageNo = pageNo;
        this.imgNo = imgNo;
        this.comment = comment;
        this.date = date;
    }
    GetImgInfo() {  /* メソッド */
        return ;  /* x と y を足した値を返却する */
    }
}

var contentImgs = [
    new imageClass(1,0,"熊本旅行中、阿蘇","2023-3"),
    new imageClass(1,1,"EPFL コミュニティーラーニングセンター、スイス　ローザンヌ", "2023-9"),
    new imageClass(1,2,"自宅","2023-11"),
    new imageClass(0,0,"","")
];

function WriteImage(x,y){
    var img = document.createElement('img');
    img.setAttribute('src','Img/'+x+'-'+y+'.jpg');
    img.setAttribute('class', 'contentImg');

    var p = document.createElement('p');
    p.setAttribute('class','imgComment');

    var targetImg = contentImgs.find(i => i.pageNo === x ,h => h.imgNo === y);

    p.textContent = targetImg.coment + ' <' +  targetImg.date + ">";
}