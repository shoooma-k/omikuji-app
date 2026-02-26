import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.draw()
  }

  draw() {
    this.clearResults();

    this.drawFortune();
    this.drawAdvice();
    this.drawWish();
    this.drawLove();
    this.drawvisitor();
    this.drawbusiness();
    this.drawtravel();
    this.drawstudy();
    this.drawillness();

    this.drawcharm();
    this.drawspot();
    this.drawally();
    this.drawcolor();
    this.drawcurse();
    this.drawvoide();
    this.drawjinx();

  }

  clearResults() {
    // 運勢：prependしてる div を削除（「運勢」の文字pは残す）
    const fortune = document.getElementById("result-fortune");
    fortune?.querySelectorAll("div").forEach((d) => d.remove());

    // 助言：挿入した p を削除（spanは残す）
    const advice = document.getElementById("result-advice");
    advice?.querySelectorAll("p").forEach((p) => p.remove());

    // その他：追加した p.import を全部削除
    document.querySelectorAll("p.import").forEach((p) => p.remove());
  }

  drawFortune() {
    const resultFortune = document.getElementById('result-fortune');
    const div = document.createElement("div");
    const fortunes = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    div.textContent = fortune;
    resultFortune.prepend(div);
  }

  drawAdvice() {
    const resutlAdvice = document.getElementById('result-advice');
    const p = document.createElement("p");
    const advices = [
      "今は迷わず進むべき時です。恐れはあるでしょうが、一歩を踏み出すことで道はひらけます。",
      "小さな行動の積み重ねが、大きな成果に変わるときが来ます。",
      "言葉は少なくても、誠意を込めれば相手に伝わります。心を込めた一言を大切に。",
      "感謝の気持ちを表せば、人との縁は自然と深まります。",
      "疲れを感じたときは立ち止まり、休む勇気を持ちましょう。整った体と心が幸運を呼びます。",
      "生活を整え、無駄を減らすことで気持ちも軽やかになっていきます。",
      "今は慌てず丁寧に取り組むことで、信頼が積み重なり成果につながります。",
      "小さな出費を見直すことで、思わぬ余裕が生まれるでしょう。",
      "苦しいときこそ静かに心を澄ませましょう。やがて状況は変わり、光が見えてきます。",
      "今日を大切に過ごすことが、未来の自分を守ることにつながります。"
    ];
    const advice = advices[Math.floor(Math.random() * advices.length)];
    p.textContent = advice;
    const span = resutlAdvice.querySelector("span");
    resutlAdvice.insertBefore(p, span);
  }

  drawWish() {
    const resultWish = document.getElementById('result-wish');
    const p = document.createElement("p");
    p.classList.add("import");
    const wishes = [
      "多くを望まなければ必ず叶う。",
      "焦らず待てば時が満ちる。",
      "他人を思えば道は開ける。",
      "努力を重ねれば報われる。",
      "欲を抑えれば望みは届く。",
      "時を選べば願いは叶う。",
      "心を静めれば必ず実る。",
      "小さな願いは早く叶う。",
      "周囲の助けを借りれば達成できる。",
      "今は控えよ、時が来れば自ずと叶う。"
    ];
    const wish = wishes[Math.floor(Math.random() * wishes.length)];
    p.textContent = wish;
    resultWish.appendChild(p);
  }

  drawLove() {
    const resultLove = document.getElementById('result-love');
    const p = document.createElement("p");
    p.classList.add("import");
    const loves = [
      "思い切って心を開けば、良き縁が訪れるでしょう。",
      "今は焦らず、相手を思いやる気持ちを大切にすると吉。",
      "新しい出会いは身近なところにあります。目を凝らしましょう。",
      "すれ違いがあっても誠意を持って話せば絆は深まります。",
      "恋の進展には少し時間がかかりますが、諦めずに待てば良縁に恵まれるでしょう。",
      "迷いは禁物。素直な心で接すれば、想いは伝わります。",
      "思い込みに注意。相手の気持ちを確かめながら進めば安泰。",
      "新たな縁を望むなら、古い想いを手放すことが必要です。"
    ];
    const love = loves[Math.floor(Math.random() * loves.length)];
    p.textContent = love;
    resultLove.appendChild(p);
  }

  drawvisitor() {
    const resultvisitor = document.getElementById('result-visitor');
    const p = document.createElement("p");
    p.classList.add("import");
    const visitors = [
      "待てば必ず来る。焦らず心静かに。",
      "遅れて現れるが、良き知らせを運ぶ。",
      "近きうちに訪れる。心の準備を整えよ。",
      "来るが、時を選ぶ。急ぐなかれ。",
      "しばらく先だが、確かに訪れる。",
      "思わぬ形で現れる。驚きに備えよ。",
      "今は現れず。願いを強く持てば時が巡る。"
    ];
    const visitor = visitors[Math.floor(Math.random() * visitors.length)];
    p.textContent = visitor;
    resultvisitor.appendChild(p);
  }

  drawbusiness() {
    const resultbusiness = document.getElementById('result-business');
    const p = document.createElement("p");
    p.classList.add("import");
    const businesss = [
      "利益は小さいが着実に得られる。堅実に進めよ。",
      "今は無理に拡げず、現状を守るが吉。",
      "新しいことに手を出すより、信頼を重ねることが利益を呼ぶ。",
      "取引は順調。誠実さが信用を広げる。",
      "欲をかけば損を招く。慎みを忘れぬように。",
      "良き協力者に恵まれれば、大きな実りがある。",
      "小さな損あり。しかし後に大きな利益に変わる。"
    ];
    const business = businesss[Math.floor(Math.random() * businesss.length)];
    p.textContent = business;
    resultbusiness.appendChild(p);
  }

  drawtravel() {
    const resulttravel = document.getElementById('result-travel');
    const p = document.createElement("p");
    p.classList.add("import");
    const travels = [
      "早まる旅は災いを呼ぶ。時を選べば吉。",
      "東の方角に幸運あり。小さな旅から始めるとよい。",
      "同行者を得れば安心。ひとりの旅は注意が必要。",
      "道中に小難あり。しかし最後は良き結果を得る。",
      "目的を明確にすれば、望み通りの旅となる。",
      "準備を怠らなければ、旅は安らぎをもたらす。",
      "今は控えよ。後日、好機が訪れる。"
    ];
    const travel = travels[Math.floor(Math.random() * travels.length)];
    p.textContent = travel;
    resulttravel.appendChild(p);
  }

  drawstudy() {
    const resultstudy = document.getElementById('result-study');
    const p = document.createElement("p");
    p.classList.add("import");
    const studys = [
      "努力を重ねれば必ず実る。怠れば成果遠し。",
      "師や先達に学べば、大きな実りあり。",
      "今は基礎を固める時。焦らず積み重ねよ。",
      "試験は油断大敵。最後まで手を抜かぬこと。",
      "心を静め、落ち着いて臨めば良い結果を得る。",
      "仲間と学べば理解は深まり、成果も早い。",
      "遊びを控え、真面目に励めば大吉となる。"
    ];
    const study = studys[Math.floor(Math.random() * studys.length)];
    p.textContent = study;
    resultstudy.appendChild(p);
  }

  drawillness() {
    const resultillness = document.getElementById('result-illness');
    const p = document.createElement("p");
    p.classList.add("import");
    const illnesss = [
      "すぐには癒えぬが、静養すれば快復す。",
      "長引くが命に別状なし。心を安らげよ。",
      "早く良くなる。焦らず養生せよ。",
      "医を信じて従えば快方に向かう。",
      "今は重し。油断すれば悪化する恐れあり。",
      "気持ちを整えれば治りは早い。",
      "人の助けを得れば快復は確実。"
    ];
    const illness = illnesss[Math.floor(Math.random() * illnesss.length)];
    p.textContent = illness;
    resultillness.appendChild(p);
  }

  drawcharm() {
    const resultcharm = document.getElementById('result-charm');
    const p = document.createElement("p");
    p.classList.add("import");
    const charms = [
      "漫画",
      "手帳",
      "本",
      "鉛筆",
      "音楽",
      "花",
      "茶",
      "石",
      "香",
      "鏡"
    ];
    const charm = charms[Math.floor(Math.random() * charms.length)];
    p.textContent = charm;
    resultcharm.appendChild(p);
  }

  drawspot() {
    const resultspot = document.getElementById('result-spot');
    const p = document.createElement("p");
    p.classList.add("import");
    const spots = [
      "神社",
      "寺",
      "川辺",
      "山頂",
      "公園",
      "図書館",
      "市場",
      "海辺",
      "橋の上",
      "庭"
    ];
    const spot = spots[Math.floor(Math.random() * spots.length)];
    p.textContent = spot;
    resultspot.appendChild(p);
  }

  drawally() {
    const resultally = document.getElementById('result-ally');
    const p = document.createElement("p");
    p.classList.add("import");
    const allys = [
      "友人",
      "師",
      "先輩",
      "後輩",
      "家族",
      "子ども",
      "老人",
      "異性",
      "旅人",
      "隣人"
    ];
    const ally = allys[Math.floor(Math.random() * allys.length)];
    p.textContent = ally;
    resultally.appendChild(p);
  }

  drawcolor() {
    const resultcolor = document.getElementById('result-color');
    const p = document.createElement("p");
    p.classList.add("import");
    const colors = [
      "赤",
      "青",
      "緑",
      "黄",
      "白",
      "黒",
      "紫",
      "金",
      "銀",
      "桃"
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.textContent = color;
    resultcolor.appendChild(p);
  }

  drawcurse() {
    const resultcurse = document.getElementById('result-curse');
    const p = document.createElement("p");
    p.classList.add("import");
    const curses = [
      "壊れた時計",
      "欠けた器",
      "古びた靴",
      "錆びた鍵",
      "黒ずんだ鏡",
      "破れた本",
      "使い古した財布",
      "荒れた傘",
      "割れた石",
      "不要な紙くず"
    ];
    const curse = curses[Math.floor(Math.random() * curses.length)];
    p.textContent = curse;
    resultcurse.appendChild(p);
  }

  drawvoide() {
    const resultvoide = document.getElementById('result-voide');
    const p = document.createElement("p");
    p.classList.add("import");
    const voides = [
      "十字路",
      "裏道",
      "廃屋",
      "橋の下",
      "墓場",
      "荒れ地",
      "トンネル",
      "人の少ない公園",
      "荒れた神社",
      "水溜り"
    ];
    const voide = voides[Math.floor(Math.random() * voides.length)];
    p.textContent = voide;
    resultvoide.appendChild(p);
  }

  drawjinx() {
    const resultjinx = document.getElementById('result-jinx');
    const p = document.createElement("p");
    p.classList.add("import");
    const jinxs = [
      "嘘つき",
      "欲深き人",
      "怠け者",
      "怒りっぽい人",
      "噂好き",
      "気まぐれな人",
      "金に執着する人",
      "無責任な人",
      "約束を守らぬ人",
      "不平不満を言う人"
    ];
    const jinx = jinxs[Math.floor(Math.random() * jinxs.length)];
    p.textContent = jinx;
    resultjinx.appendChild(p);
  }
}
