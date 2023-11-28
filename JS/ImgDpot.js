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
    // new imageClass(0,0,"","")
];

// あるページの画像を全て、配置する。
function WriteImage(x){
    var pageImgs = contentImgs.filter(i => i.pageNo === x);
    for (let i = 0; i < pageImgs.length; i++){
        var img = document.createElement('img');
        img.setAttribute('src','Img/' + x + '-' + i + '.jpg');
        img.setAttribute('class', 'contentImg');
        img.setAttribute('data-src', 'ImgBig/' + x + '-' + i + '.jpg')

        var p = document.createElement('p');
        p.setAttribute('class','imgComment');

        var targetImg = contentImgs.find(h => h.imgNo === i);
        p.textContent = targetImg.comment + ' <' +  targetImg.date + ">";

        document.getElementById('Img'+x+'-'+i).appendChild(img)
        document.getElementById('Img'+x+'-'+i).appendChild(p)
    }    
}

function WriteImageForList(x){
    var pageImgs = contentImgs.filter(i => i.pageNo === x);
    for (let i = 0; i < pageImgs.length; i++){
        var img = document.createElement('img');
        img.setAttribute('src','Img/' + x + '-' + i + '.jpg');
        img.setAttribute('class', 'contentImg');
        img.setAttribute('data-src', 'ImgBig/' + x + '-' + i + '.jpg')


        var li = document.createElement('li')

        document.getElementById('contentsList').appendChild(img)
    }    
}