
var movies = [
    new bookClass('Movie/1.jpg','コーダあいのうた','シアン・ヘダー','', new Date(2024,8-1,28),'2021'),
    new bookClass('Movie/2.jpg','夜の浜辺でひとり','ホン・サンス','', new Date(2024,9-1,4),'2017'),
    new bookClass('Movie/3.jpg','オー！スジョン','ホン・サンス','', new Date(2024,8-1,30),'2000'),
    new bookClass('Movie/4.jpg','ニューヨーカーの暮らし方 season3','ジョン・ウィルソン','', new Date(2024,9-1,18),'2024'),
    new bookClass('Movie/5.jpg','座頭市 血煙り街道','三隅研次','', new Date(2024,9-1,5),'1967'),
    new bookClass('Movie/6.jpg','introduction','ホン・サンス','', new Date(2024,9-1,19),'2022'),
    new bookClass('Movie/7.jpg','プッシャー','ニコラス・ウィンディング・レフン','', new Date(2024,9-1,23),'1996'),
    new bookClass('Movie/8.jpg','プッシャー2','ニコラス・ウィンディング・レフン','', new Date(2024,9-1,30),'2004'),
    new bookClass('Movie/9.jpg','ウィンディ＆ルーシー','ケリー・ライカート','', new Date(2024,9-1,27),'2008'),
    new bookClass('Movie/10.jpg','プッシャー3','ニコラス・ウィンディング・レフン','', new Date(2024,10-1,27),'2008'),
    new bookClass('Movie/11.jpg','旅の始まり世界の終わり','黒沢清','', new Date(2024,10-1,6),'2019'),
    new bookClass('Movie/12.jpg','ポーラ X','レオス・カラックス','', new Date(2024,10-1,10),'1999'),
    new bookClass('Movie/13.jpg','美しき仕事','クレール・ドニ','', new Date(2024,10-1,10),'1999'),
    new bookClass('Movie/14.jpg','うなぎ','今村昌平','', new Date(2024,10-1,17),'1997'),
    new bookClass('Movie/15.jpg','蛇の道','黒沢清','', new Date(2024,10-1,17),'2024'),
    new bookClass('Movie/16.jpg','あなた自身と、あなたのこと','ホン・サンス','', new Date(2024,10-1,10),'2016'),
    new bookClass('Movie/17.jpg','結婚のすべて','岡本喜八','', new Date(2024,10-1,18),'1958'),
    new bookClass('Movie/18.jpg','二重のまち／交代地のうたを編む','小森はるか','', new Date(2024,11-1,1),'2019 '),
    new bookClass('Movie/19.jpg','映画館の恋','ホン・サンス','', new Date(2024,10-1,20),'2006'),
    new bookClass('Movie/20.jpg','ユリイカ','青山真治','', new Date(2024,10-1,22),'2001'),
    new bookClass('Movie/21.jpg','リスト','ホン・サンス','', new Date(2024,10-1,23),'2011'),
    new bookClass('Movie/22.jpg','草の葉','ホン・サンス','', new Date(2024,10-1,23),'2018'),
    new bookClass('Movie/23.jpg','川沿いのホテル','ホン・サンス','', new Date(2024,10-1,23),'2018'),
    new bookClass('Movie/24.jpg','異国日記','瀬田なつき','', new Date(2024,10-1,30),'2018'),
    new bookClass('Movie/25.jpg','夜明けのすべて','三宅唱','', new Date(2024,10-1,30),'2024'),
    new bookClass('Movie/26.jpg','サタンタンゴ','タル・ベーラ','', new Date(2024,10-1,31),'1994'),
    new bookClass('Movie/27.jpg','サスペリア','ダリオ・アルジェント','', new Date(2024,11-1,1),'1977'),
    new bookClass('Movie/28.jpg','アンダーグラウンド','小田香','', new Date(2024,11-1,2),'2024'),
    new bookClass('Movie/29.jpg','自由が丘で','ホン・サンス','', new Date(2024,11-1,2),'2014'),
    new bookClass('Movie/30.jpg','ストレンジ・ウェイ・オブ・ライフ','ペドロ・アルモドバル','2023', new Date(2024,11-1,4),'1994'),
    new bookClass('Movie/31.jpg','ノスタルジア','アンドレイ・タルコフスキー','', new Date(2024,11-1,5),'1983'),
    new bookClass('Movie/32.jpg','レニングラード・カウボーイズ・ゴー・アメリカ','アキ・カウリスマキ','', new Date(2024,11-1,6),'1990'),
    new bookClass('Movie/33.jpg','空に聞く','小森はるか','', new Date(2024,11-1,7),'2018'),
    new bookClass('Movie/34.jpg','逃げた女','ホン・サンス','', new Date(2024,11-1,8),'2020'),
    new bookClass('Movie/35.jpg','ヴェルクマイスター・ハーモニー','タル・ベーラ','', new Date(2024,11-1,10),'2000'),
    new bookClass('Movie/36.jpg','3人のアンヌ','ホン・サンス','', new Date(2024,11-1,13),'2004'),
    new bookClass('Movie/37.jpg','女は男の未来だ','ホン・サンス','', new Date(2024,11-1,19),'2012'),
    new bookClass('Movie/38.jpg','EO','イエジー・スコリモフスキ','', new Date(2024,11-1,19),'2022'),
    new bookClass('Movie/39.jpg','パリでかくれんぼ','ジャック・リヴェット','', new Date(2024,11-1,20),'1995'),
    new bookClass('Movie/40.jpg','彼女たちの舞台','ジャック・リヴェット','', new Date(2024,11-1,20),'1998'),
    new bookClass('Movie/41.jpg','CUT','アミール・ナデリ','', new Date(2024,11-1,22),'2011'),
    new bookClass('Movie/42.jpg','台北ストーリー','エドワード・ヤン','', new Date(2024,11-1,23),'1985'),
    new bookClass('Movie/43.jpg','恋恋風塵','ホウ・シャオシェン','', new Date(2024,11-1,23),'1986'),
    new bookClass('Movie/44.jpg','青春神話','ツァイ・ミンリャン','', new Date(2024,11-1,23),'1992'),
    new bookClass('Movie/45.jpg','それから','ホン・サンス','', new Date(2024,11-1,24),'2017'),
    new bookClass('Movie/46.jpg','ワイルド・スピードx3 TOKYO DRIFT','ジャスティン・リン','', new Date(2024,11-1,24),'2006'),
    new bookClass('Movie/47.jpg','クレアのカメラ','ホン・サンス','', new Date(2024,11-1,27),'2017'),
    new bookClass('Movie/48.jpg','冬の旅','アニエス・バルダ','', new Date(2024,11-1,29),'1985'),
    new bookClass('Movie/49.jpg','戦艦ポチョムキン','セルゲイ・エイゼンシュテイン','', new Date(2024,11-1,29),'1925'),
    new bookClass('Movie/50.jpg','クレアのカメラ','ホン・サンス','', new Date(2024,11-1,29),'2017'),
    new bookClass('Movie/51.jpg','ゲームの規則','ジャン・ルノワール','', new Date(2024,11-1,30),'1939'),
    new bookClass('Movie/52.jpg','アンゼルム　"傷ついた世界"の芸術家','ヴィム・ヴェンダース','', new Date(2024,12-1,3),'1939'),
    new bookClass('Movie/53.jpg','関心領域','ジョナサン・グレイザー','', new Date(2024,12-1,3),'2024'),
    new bookClass('Movie/54.jpg','ハイゼ家 百年','トーマス・ハイゼ','', new Date(2024,12-1,4),'2021'),
    new bookClass('Movie/55.jpg','動物界','トマ・カイエ','', new Date(2024,12-1,4),'2024'),
    new bookClass('Movie/56.jpg','リュミエール！リュミエール！','ティエリー・フレモー','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/57.jpg','椿三十郎','黒澤明','', new Date(2024,12-1,6),'2024'),
    new bookClass('Movie/58.jpg','男の子の名前はみんなパトリックっていうの','ジャン=リュック・ゴダール','', new Date(2024,12-1,7),'2024'),
    new bookClass('Movie/59.jpg','正しい日間違えた日','ホン・サンス','', new Date(2024,12-1,10),'2024'),
    new bookClass('Movie/60.jpg','沓掛時次郎 遊侠一匹','加藤泰','', new Date(2024,12-1,10),'2024'),
    new bookClass('Movie/61.jpg','うってつけの日','岩崎敢志','', new Date(2024,12-1,10),'2024'),
    new bookClass('Movie/62.jpg','はなればなれに','ジャン=リュック・ゴダール','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/63.jpg','愛と哀しみのボレロ','クロード・ルルーシュ','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/64.jpg','ザ・バイクライダーズ','ジェフ・ニコルズ','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/65.jpg','カルメンという名の女','ジャン=リュック・ゴダール','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/66.jpg','5時から7時までのクレオ','アニエス・ヴァルダ','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/67.jpg','コヴェナント/約束の救出','ガイ・リッチー','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/68.jpg','小説家の映画','ホン・サンス','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/69.jpg','のぞき屋稼業 夢犯遊戯','大工原正樹','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/70.jpg','あこがれ','フランソワ・トリュフォー','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/71.jpg','東京上空いらっしゃいませ','相米慎二','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/72.jpg','小さな兵隊','ジャン=リュック・ゴダール','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/73.jpg','赤と白','ヤンチョー・ミクローシュ','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/74.jpg','赤い讃美歌','ヤンチョー・ミクローシュ','', new Date(2024,12-1,5),'2024'),
    new bookClass('Movie/75.jpg','SUPER HAPPY FOREVER','五十嵐耕平','', new Date(2024,12-1,5),'2023'),
    new bookClass('Movie/76.jpg','夜の浜辺でひとり','ホン・サンス','', new Date(2024,12-1,22),'2016'),
    new bookClass('Movie/77.jpg','豚が井戸に落ちた日','ホン・サンス','', new Date(2024,12-1,23),'1996'),
    new bookClass('Movie/78.jpg','PERFECT DAYS','ヴィム・ヴェンダース','', new Date(2024,12-1,24),'1996'),
    new bookClass('Movie/79.jpg','ソニック・ザ・ムービー2','','', new Date(2024,12-1,25),'1996'),
    new bookClass('Movie/80.jpg','落下の解剖学','ジュスティーヌ・トリエ','', new Date(2024,12-1,27),'1996'),
    new bookClass('Movie/81.jpg','王国（あるいは、その家について）','草野なつか','', new Date(2024,12-1,27),'1996'),
    new bookClass('Movie/82.jpg','悪は存在しない','濱口竜介','', new Date(2024,12-1,27),'1996'),
    new bookClass('Movie/83.jpg','ソニック × シャドウ TOKYO MISSION','ジェフ・ファウラー','', new Date(2024,12-1,27),'1996'),
    new bookClass('Movie/84.jpg','浜辺の女','ホン・サンス','', new Date(2024,12-1,27),'1996'),
    new bookClass('Movie/85.jpg','イメージの本','ジャン=リュック・ゴダール','', new Date(2024,12-1,28),'1998'),
    new bookClass('Movie/86.jpg','ドレミファ娘の血は騒ぐ','黒沢清','', new Date(2024,12-1,28),'1996'),
    new bookClass('Movie/87.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/88.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/89.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/90.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/91.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/92.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/93.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/94.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/95.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/96.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/97.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/98.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/99.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/100.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/101.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/102.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/103.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/104.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/105.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/106.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/107.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/108.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/109.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/110.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/111.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/112.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/113.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/114.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/115.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/116.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/117.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/118.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/119.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/120.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/121.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/122.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/123.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/124.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/125.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/126.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/127.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/128.jpg','蜘蛛の瞳','黒沢清','', new Date(2024,12-1,29),'1996'),
    new bookClass('Movie/129.jpg','アンダルシアの犬','ルイス・ブニュエル','', new Date(2024,12-1,29),'1996'),

]


movies[70].comment =
`
`
movies[70].comment =
`
`
movies[70].comment =
`
`
movies[74].comment =
`
`
movies[75].comment =
`
めちゃくちゃシャープな画面だ。この作品はやっぱホン・サンスの中でも異質な感がある。
シャープすぎてはじめのロゴがジャギってる。
象徴的な男の存在。
`
movies[76].comment =
`
ホン・サンスの最初の長編監督作。良かった。イ・ウンギョンがキャリーバッグをもってさまよう姿。
音楽がなんかキモい。カットは結構割っている。突然切れる男。カメラは常に三脚を感じさせる。
急にセックスが始まる。音楽がキモい。
`
movies[77].comment =
`
面白くない。カメラ的に好きじゃない。
`
movies[78].comment =
`
面白くない。音楽がかっこよくない。
`
movies[55].comment =
`
まじで感動で涙。円盤出たら買う。めちゃくちゃ参考にする。
カメラの美しさ！映画はカメラで勝負するべきだと思った。世界の美しさ、昔の人々。
リュミエール主義者になろかな。
`
movies[54].comment =
`
感動的なラスト。すごい泣き方した。これみてからずっと元気良い。
`
movies[53].comment =
`映画ではないとおもうけど、それをおいておくと、良かった。泣きながら4時間みた。感動で、震えまくった。
リスト、手紙。歴史がこの世で一番重い。個人の歴史というのは本当に美しいと思った。愛。手紙の結びでキスを送る人たち。
優しくて静かなキスを。（パンフレット欲しかった～～～～）
`
movies[52].comment =
`この映画が狙っているところは成功していると思うけど、だから何なんだろう？
`
movies[51].comment =
`面白かった。けど映画って感じがしないな。自分の好奇心とか満たせた。飯食いながらテレビでみたいな。
`
movies[50].comment =
`
うーん。ドタバタでおもろいけど、印象薄い。っす。
絵の綺麗さ？左様ですか。
`
movies[49].comment =
`
奥行きすごい。最初のショットとラストショットの凄さ。これ。
`
movies[48].comment =
`
飯食いながら、一旦観た。おもしろいけど、なんでこんなぶつぶつな映像なんだろう。
エイゼンシュテインはまあ当然興味ない。
`
movies[47].comment =
`
おすすめされて観た。良いね。なんかカットのつなぎが独特な感が最初らへんにあった。
いつでも安定したそこそこ楽な生活手に入れれてそうやったけど、
いっこいっこほっぽりだして、うーん。楽に行きたい、としか言わん主人公、の特殊性があってそこがかなり魅力ん。
？？？
`
movies[46].comment =
`
観てるうちにおもいだしてきたけど、奥行きすごい、この作品。17年のホン・サンスが一番良い。
なんだこのショット？！みたいな、昔の自分の中の喜びを少し取り戻せて、良かった。
`
movies[45].comment =
`
面白い、アクション映画すきやな、ぼく。日本舞台で描かれる外国人も好き。
何人か日本人設定じゃないほうが面白いだろ！と思った。
でも主人公がとにかください。韓国の兄貴かっこいい。
`
movies[44].comment =
`
最初の1カット、ラストショット、真似したいね。ホン・サンスのカメラは演技重視だと言うことがやっとわかってきた。
そして僕の好きなショットっていつもカフェで二人が喋っている部分ではなく、
`
movies[43].comment =
`
面白い！おもしろーい！バイク破壊されるヤンキー好き。鬱屈浪人生おもろすぎ。
`
movies[42].comment =
`
目ひらいたら元気だった人がめちゃくちゃ怪我してて面白かった。
`
movies[41].comment =
`
記憶の中の台北ストーリーのほうが面白かった。
`
movies[40].comment =
`
エネルギーすごいけど、おもしろくない
`
movies[39].comment =
`
ながいよ。面白いけど、最後の方しんどかったんよ。
`
movies[38].comment =
`
めちゃくちゃおもしろい。おしゃれ映画やんね。ながい。
`
movies[37].comment =
`
じーん。
`
movies[36].comment =
`
良い。昔観たことあったわね。初期ホン・サンスなんでいろいろ考えるところもあり。
`

movies[35].comment =
`
予告がめちゃくちゃ良い。一編目号泣。新宿御苑の芝生で寝転がって観た。
`
movies[34].comment =
`
ああ。サタンタンゴのこと毎日思い出している。
モチーフ、脚本から、バッチリ好き。やっぱこういうショットで映画つくるべき、。
`
movies[33].comment =
`
素晴らしい。素晴らしい…
`
movies[32].comment =
`
おもろかった。カメラまわしたい僕も。
`
movies[31].comment =
`
良い。タイトルから良いもんね。
`
movies[30].comment =
`
寢らんかった。
`
movies[29].comment =
`
つまらんかった。
`
movies[28].comment =
`
お口直しに夜中見始めたけど、寝落ちしちまった。
`
movies[27].comment =
`
タル・ベーラとはぜんぜん違う感じなんやね。ときどき目覚めさせてくる。
でもサタンタンゴのほうがすきだな♡
`
movies[26].comment =
`
笑った。
`
movies[25].comment =
`
純粋な映画ってあんま好きじゃないかも。長回しのほうが疲労溜まりにくいね。
（見終わった直後のぼくの感想冷めすぎ笑。
監督の持っている愛を感じるし、見終わったあとも心に刻まれている。
しかしやっぱ純粋というか、硬い感じがある。ホン・サンスは軽やかさがある。）
`
movies[17].comment =
`
ガチおもんない。
`
movies[24].comment =
`
最後まで見れた。
`
movies[23].comment =
`
おもんなすぎて、映画館抜けて早稲田散歩した。天気が良く、幸福を感じた。
`
movies[22].comment =
`
面白い。ホン・サンスで一番おもしろかったかも。
`
movies[21].comment =
`
ちょっと困惑した。困惑できて嬉しいけど。面白くなかったね。
`
movies[20].comment =
`
良い短編、爽やかさがあった。
`
movies[19].comment =
`
博多弁が良かった。光石研の北九弁も良かった。
`
movies[18].comment =
`
好き。2部目で目が覚めてきた。バキバキに感動した。
映画館出てから、街がいい感じに見れるようになった。
`
movies[16].comment =
`
結婚相談所のシーンで声出して笑ったｗ
`
movies[15].comment =
`
この前下高井戸で見たこの映画のこと思い出して、良かったなあ、と思った。
ヒロインの魅力！ナイーブな男！
`
movies[14].comment =
`
めちゃくちゃ面白かった。柴咲コウとフランス人のおっさんのコンビが格好良い。
`
movies[13].comment =
`
倒れているヒロインを見つける、場面が美しかった。もうちょっと短く作ってほしい、眠い。
`

movies[12].comment =
`
良かった。眠かったのでもう一回みたい。最後のカットが急にカッコ良くてびっくりした。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
`

movies[11].comment =
`
さいしょ面白かったけど途中からだるくなってきた。
`

movies[10].comment =
`
主役の葉子に魅力を感じないどころか、
殆ど苛立ちに近いものを感じ続けた。面白くなかった。
`

movies[9].comment =
`
三部作の中で一番おもしろかったかも。デンマークの悪い人たちを見れてよかった。
`
movies[8].comment =
`
一番好きな映画。出てくる人物が皆魅力的。人の親切心とかに涙出る。犬かわいい。
`

movies[7].comment =
`
前作から8年くらいたってるから、ミロがちょっと太っている。マッツ・ミケルセンはあんま変わらない。
暴力とか、ドラックとかもう見たくなくなってきた。
`

movies[6].comment =
`
朝起きて少し肌寒かったから、ジャージ羽織ってこの映画見始めたら、
主人公が全く同じジャージをほとんどのシーンで着ていてびっくりしたね。
` 

movies[5].comment = 
`
散歩しているときに思い出して、もう一度みた。やっぱり素晴らしいなと思った。
`;


movies[0].comment = 
`
友達のすすめでみた。最初のショットからめちゃくちゃ良い映画だと思った。海とか港がとても良いルックで写されている。めちゃくちゃ泣いたし。
`

movies[1].comment = 
`
やっぱホン・サンスすき。この作品が一番ルックが良いと思う。キム・ミニがめちゃくちゃいい感じ。体に染み入った。
`

movies[2].comment = 
`
映画館で見逃してから気になりだしたのでアマプラでみた。かなり昔のホン・サンス。見たことある俳優も出てくる。おもしろいけど、最近の作品のほうが好き。
`;

movies[2].comment = 
`
映画館で見逃してから気になりだしたのでアマプラでみた。最近の作品のほうが好き。
`;

movies[3].comment = 
`
このスタイルが好き。
`;

movies[4].comment = 
`
シネスコサイズで決まっている。1対1で向かい合ってしずかに雪が振り始めるショット、完璧。
`;

