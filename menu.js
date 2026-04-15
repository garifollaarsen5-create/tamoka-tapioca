const MENU = {
  tea_cream: {
    title: {ru:'Tea & Cream', kz:'Tea & Cream'},
    items: [
      {id:'mango_cream', img:'img/mango_cream.jpg', name:{ru:'Mango Cream Tapioca',kz:'Mango Cream Tapioca'}, desc:{ru:'Манго, сырная шапка, тапиока',kz:'Манго, ірімшік көбігі, тапиока'}, sizes:{500:1750,700:1990}, temp:'cold', emoji:'🥭', color:'#ffd28a'},
      {id:'matcha_peach', img:'img/matcha_peach.jpg', name:{ru:'Matcha Peach Cream',kz:'Matcha Peach Cream'}, desc:{ru:'Персик, зелёный матча, сырная шапка',kz:'Шабдалы, жасыл матча, ірімшік қалпақ, сүт, тапиока'}, sizes:{500:1850,700:2050}, temp:'cold', emoji:'🍑', color:'#c4ecb4'},
      {id:'sunset', img:'img/sunset.jpg', name:{ru:'Sunset',kz:'Sunset'}, desc:{ru:'Клубника, сырная шапка, тапиока',kz:'Жержидек, ірімшік қалпақ, сүт, тапиока'}, sizes:{500:1750,700:1990}, temp:'cold', emoji:'🍓', color:'#ff9fb0'},
    ]
  },
  classical: {
    title: {ru:'Classical', kz:'Classical'},
    items: [
      {id:'thai', img:'img/thai.jpg', name:{ru:'Thai Tapioca',kz:'Thai Tapioca'}, desc:{ru:'Тайский изумрудный чай, тапиока, молоко',kz:'Тай зүмірет шайы, тапиока, сүт'}, sizes:{500:1650,700:1800}, temp:'both', emoji:'🧋', color:'#c4ecb4'},
    ]
  },
  lemonade: {
    title: {ru:'Lemonade', kz:'Lemonade'},
    items: [
      {id:'mojito', img:'img/mojito.png', name:{ru:'Mojito Classic',kz:'Mojito Classic'}, desc:{ru:'Классический освежающий мохито',kz:'Классикалық сергітетін мохито'}, sizes:{500:1500,700:1800}, temp:'cold', emoji:'🍃', color:'#c4ecb4'},
      {id:'marakuya', img:'img/marakuya.png', name:{ru:'Маракуйя',kz:'Маракуйя'}, desc:{ru:'Яркий лимонад с маракуйей',kz:'Маракуйямен жасалған лимонад'}, sizes:{500:1500,700:1800}, temp:'cold', emoji:'🟡', color:'#ffe08a'},
      {id:'granat', img:'img/granat.png', name:{ru:'Гранатовый удар',kz:'Гранатовый удар'}, desc:{ru:'Насыщенный гранатовый вкус',kz:'Анар дәмі бар қанық лимонад'}, sizes:{500:1500,700:1800}, temp:'cold', emoji:'🔴', color:'#ff9fb0'},
      {id:'kivi_mar', img:'img/kivi_mar.png', name:{ru:'Киви Маракуйя',kz:'Киви Маракуйя'}, desc:{ru:'Киви и маракуйя',kz:'Киви мен маракуйя'}, sizes:{500:1500,700:1800}, temp:'cold', emoji:'🥝', color:'#c4ecb4'},
      {id:'mango_mar', img:'img/mango_mar.png', name:{ru:'Манго Маракуйя',kz:'Манго Маракуйя'}, desc:{ru:'Манго и маракуйя',kz:'Манго мен маракуйя'}, sizes:{500:1500,700:1800}, temp:'cold', emoji:'🥭', color:'#ffd28a'},
      {id:'cherry_moj', img:'img/cherry_moj.png', name:{ru:'Cherry Мохито',kz:'Cherry Мохито'}, desc:{ru:'Вишнёвый мохито',kz:'Шие мохито'}, sizes:{500:1500,700:1800}, temp:'cold', emoji:'🍒', color:'#ff7a7a'},
      {id:'ananas_moj', img:'img/ananas_moj.png', name:{ru:'Ананас Мохито',kz:'Ананас Мохито'}, desc:{ru:'Ананасовый мохито',kz:'Ананас мохито'}, sizes:{500:1500,700:1800}, temp:'cold', emoji:'🍍', color:'#ffe08a'},
      {id:'malina_moj', img:'img/malina_moj.png', name:{ru:'Малина Мохито',kz:'Малина Мохито'}, desc:{ru:'Малиновый мохито',kz:'Таңқурай мохито'}, sizes:{500:1500,700:1800}, temp:'cold', emoji:'🫐', color:'#ff9fb0'},
    ]
  },
  special: {
    title: {ru:'Special', kz:'Special'},
    items: [
      {id:'siren', img:'img/siren.png', name:{ru:'Сиреневое молоко',kz:'Сиреневое молоко'}, desc:{ru:'Клубника, молоко, сырная шапка, голубой курасао',kz:'Құлпынай, сүт, ірімшік қақпағы, көк курасао'}, sizes:{500:1800,700:2000}, temp:'both', emoji:'💜', color:'#d4b8ff'},
      {id:'cacao_banana', img:'img/cacao_banana.jpg', name:{ru:'Cacao Banana Tapioca',kz:'Cacao Banana Tapioca'}, desc:{ru:'Какао, банан, тапиока, шоколад',kz:'Какао, банан, тапиока, шоколад'}, sizes:{500:1700,700:1900}, temp:'both', emoji:'🍫', color:'#b89070'},
      {id:'bubble_coffee', img:'img/bubble_coffee.jpg', name:{ru:'Bubble Coffee',kz:'Bubble Coffee'}, desc:{ru:'Кофе, сырная шапка, тапиока, шоколад',kz:'Кофе, ірімшік көбігі, тапиока, шоколад'}, sizes:{500:1650,700:1850}, temp:'both', emoji:'☕', color:'#b89070'},
      {id:'milky_matcha', img:'img/milky_matcha.jpg', name:{ru:'Milky & Matcha',kz:'Milky & Matcha'}, desc:{ru:'Зелёный матча, молоко, классическое желе, тапиока',kz:'Жасыл матча, сүт, классикалық желе, тапиока'}, sizes:{500:1650,700:1800}, temp:'cold', emoji:'🍵', color:'#c4ecb4'},
      {id:'snickers', img:'img/snickers.jpg', name:{ru:'Snickers',kz:'Snickers'}, desc:{ru:'Карамель, шоколад, лесные орехи, молоко, тапиока',kz:'Карамель, шоколад, фундук, сүт, тапиока'}, sizes:{500:1850,700:2050}, temp:'cold', emoji:'🍫', color:'#e0b890'},
      {id:'oreo', img:'img/oreo.jpg', name:{ru:'Oreo',kz:'Oreo'}, desc:{ru:'Oreo, молоко, шоколад, сырная шапка, тапиока',kz:'Oreo, сүт, шоколад, ірімшік көбігі, тапиока'}, sizes:{500:1850,700:2050}, temp:'cold', emoji:'🖤', color:'#d8d0cc'},
      {id:'tamoka', img:'img/tamoka.jpg', name:{ru:'Tamoka Tapioca',kz:'Tamoka Tapioca'}, desc:{ru:'Зелёная матча, клубника, молоко, тапиока',kz:'Жасыл матча, құлпынай, сүт, тапиока'}, sizes:{500:1850,700:2050}, temp:'cold', emoji:'🐯', color:'#c4ecb4'},
      {id:'mango_matcha', img:'img/mango_matcha.jpg', name:{ru:'Mango Matcha Tapioca',kz:'Mango Matcha Tapioca'}, desc:{ru:'Манго, зелёная матча, тапиока, молоко',kz:'Манго, жасыл матча, тапиока, сүт'}, sizes:{500:1850,700:2050}, temp:'cold', emoji:'🥭', color:'#ffd28a'},
    ]
  },
  fruits: {
    title: {ru:'Tea & Fruits', kz:'Tea & Fruits'},
    items: [
      {id:'kaha_orange', img:'img/kaha_orange.png', name:{ru:'Kaha Orange Ice Tea',kz:'Kaha Orange Ice Tea'}, desc:{ru:'Апельсин, маракуйя, пюре маракуйя, жасмин',kz:'Апельсин, маракуйя, жасмин'}, sizes:{500:1700,700:2000}, temp:'cold', emoji:'🍊', color:'#ffb070'},
      {id:'blue_lagoon', img:'img/blue_lagoon.jpg', name:{ru:'Blue Lagoon',kz:'Blue Lagoon'}, desc:{ru:'Ананас, персик, чай ананас, кокосовое желе',kz:'Ананас, шабдалы, ананас шайы, кокос желесі'}, sizes:{500:1550,700:1850}, temp:'cold', emoji:'💙', color:'#9fd4ff'},
      {id:'boracay', img:'img/boracay.jpg', name:{ru:'Boracay',kz:'Boracay'}, desc:{ru:'Ананас, персик, чай ананас, кокосовое желе',kz:'Ананас, шабдалы, ананас шайы, кокос желесі'}, sizes:{500:1700,700:1950}, temp:'cold', emoji:'🌴', color:'#ffd28a'},
      {id:'lime_extra', img:'img/lime_extra.jpg', name:{ru:'Lime Extra',kz:'Lime Extra'}, desc:{ru:'Лайм, лимон, листья мяты, жасмин, кокосовое желе',kz:'Лайм, лимон, жалбыз, жасмин, кокос желесі'}, sizes:{500:1550,700:1850}, temp:'cold', emoji:'🍋', color:'#c4ecb4'},
      {id:'tokyo_grape', img:'img/tokyo_grape.jpg', name:{ru:'Tokyo Grape',kz:'Tokyo Grape'}, desc:{ru:'Виноград, жасмин, кокосовое желе',kz:'Жүзім, жасмин, кокос желесі'}, sizes:{500:1550,700:1850}, temp:'cold', emoji:'🍇', color:'#b89fff'},
      {id:'okinawa', img:'img/okinawa.jpg', name:{ru:'Okinawa',kz:'Okinawa'}, desc:{ru:'Киви, личи, жасмин, кокосовое желе',kz:'Киви, личи, жасмин, кокос желесі'}, sizes:{500:1700,700:1950}, temp:'cold', emoji:'🥝', color:'#c4ecb4'},
      {id:'palawan', img:'img/palawan.jpg', name:{ru:'Palawan',kz:'Palawan'}, desc:{ru:'Киви, маракуйя, манго, кокосовое желе',kz:'Киви, маракуйя, манго, кокос желесі'}, sizes:{500:1600,700:1850}, temp:'cold', emoji:'🌺', color:'#ffb8d9'},
    ]
  },
};
