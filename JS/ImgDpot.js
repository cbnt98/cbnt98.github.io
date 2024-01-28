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
    new imageClass(0,0,"奈良　東大寺","2023-8"),
    new imageClass(1,0,"京都駅　バス停","2023-8"),
    new imageClass(1,1,"EPFL コミュニティーラーニングセンター", "2023-9"),
    new imageClass(1,2,"自宅","2023-11"),
    new imageClass(2,0,"","2023-9"),
    new imageClass(2,1,"Heathrow空港","2023-9"),
    new imageClass(2,2,"ローザンヌの何処か","2023-9"),
    new imageClass(2,3,"まちのポスター","2023-9"),
    new imageClass(2,4,"大学の学生寮","2023-9"),
    new imageClass(2,5,"みずうみ","2023-9"),
    new imageClass(2,6,"駅前","2023-9"),
    new imageClass(3,0,"知らない街の丘の上","2020-11"),
    new imageClass(3,1,"道","2021-11"),
    new imageClass(3,2,"地下鉄駅(天神？）","2020-12"),
    new imageClass(3,3,"駅2","2020-12"),
    new imageClass(3,4,"駅3","2020-12"),
    new imageClass(3,5,"駅4","2020-12"),
    new imageClass(3,6,"朝イチのthinkpad","2023-11"),
    new imageClass(4,0,"駐輪場","2022-5"),
    new imageClass(4,1,"寺の駐車場","2023-8"),
    new imageClass(4,2,"開かれたiPod","2023-12"),
    new imageClass(4,3,"WindowsPCを使って復元","2023-12"),
    new imageClass(5,0,"道","2022-2"),
    new imageClass(5,1,"サギってなんか好き","2023-11"),
    new imageClass(5,2,"脇道の中の公園","2022-4"),
    new imageClass(5,3,"確か唐津で撮った","2022-4"),
    new imageClass(6,0,"ピンクグラデ",""),
    new imageClass(6,1,"かわいいスマホ、Jelly Star","2023-12"),
    new imageClass(7,0,"福岡市動物園のペンギン","2024-1"),
    new imageClass(7,1,"動物園2","2024-1"),
    new imageClass(7,2,"動物園3","2024-1"),
    new imageClass(8,0,"糸島の駄菓子屋前","2023-12"),
    new imageClass(8,1,"...","2024-1"),
    // new imageClass(0,0,"",""),
];

// あるページの画像を全て、配置する。
function WriteImage(x){
    var pageImgs = contentImgs.filter(i => i.pageNo === x);

    var BGdiv = document.getElementById('Img0');
    var BGImg = document.createElement('Img');
    BGdiv.appendChild(BGImg);
    BGImg.setAttribute('class','backGround');
    BGImg.setAttribute('src','ImgBig/' + x + '-0.jpg');

    for (let i = 1; i < pageImgs.length; i++){
        var img = document.createElement('img');
        img.setAttribute('src','Img/' + x + '-' + i + '.jpg');
        img.setAttribute('class', 'contentImg');
        img.setAttribute('data-src', 'ImgBig/' + x + '-' + i + '.jpg');
        img.setAttribute('id',i)

        var p = document.createElement('p');
        p.setAttribute('class','imgComment');

        var targetImg = pageImgs.find(h => h.imgNo === i);
        p.textContent = targetImg.comment + ' <' +  targetImg.date + ">";

        document.getElementById('Img'+i).appendChild(img)
        document.getElementById('Img'+i).appendChild(p)
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
