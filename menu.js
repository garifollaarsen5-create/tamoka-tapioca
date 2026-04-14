const MENU = {
  tea_cream: {
    title: {ru:'Tea & Cream', kz:'Tea & Cream'},
    items: [
      {id:'lychee_cream', name:{ru:'Lychee Cream',kz:'Lychee Cream'}, desc:{ru:'Личи, жасмин, сырная шапка, классическое желе, тапиока',kz:'Личи, жасмин, ірімшік қалпақ, классикалық желе, тапиока'}, sizes:{500:1750,700:1990}, temp:'cold', emoji:'🥤', color:'#ffb8d9'},
      {id:'mango_cream', name:{ru:'Mango Cream Tapioca',kz:'Mango Cream Tapioca'}, desc:{ru:'Манго, сырная шапка, тапиока',kz:'Манго, ірімшік көбігі, тапиока'}, sizes:{500:1750,700:1990}, temp:'cold', emoji:'🥭', color:'#ffd28a'},
      {id:'matcha_peach', name:{ru:'Matcha Peach Cream',kz:'Matcha Peach Cream'}, desc:{ru:'Персик, зелёный матча, сырная шапка',kz:'Шабдалы, жасыл матча, ірімшік қалпақ, сүт, тапиока'}, sizes:{500:1850,700:2050}, temp:'cold', emoji:'🍑', color:'#c4ecb4'},
      {id:'sunset', name:{ru:'Sunset',kz:'Sunset'}, desc:{ru:'Клубника, сырная шапка, сырная шапка, тапиока',kz:'Жержидек, ірімшік қалпақ, сүт, тапиока'}, sizes:{500:1750,700:1990}, temp:'cold', emoji:'🍓', color:'#ff9fb0'},
    ]
  },
  classical: {
    title: {ru:'Classical', kz:'Classical'},
    items: [
      {id:'jasmine', name:{ru:'Jasmine Tapioca',kz:'Jasmine Tapioca'}, desc:{ru:'Тапиока, жасминовый чай, молоко',kz:'Тапиока, жасмин шайы, сүт'}, sizes:{500:1650,700:1800}, temp:'cold', emoji:'🍵', color:'#fff5cc'},
      {id:'thai', name:{ru:'Thai Tapioca',kz:'Thai Tapioca'}, desc:{ru:'Тайский изумрудный чай, тапиока, молоко',kz:'Тай зүмірет шайы, тапиока, сүт'}, sizes:{500:1650,700:1800}, temp:'hot', emoji:'🧋', color:'#c4ecb4'},
    ]
  },
  lemonade: {
    title: {ru:'Lemonade · 1500 ₸', kz:'Lemonade · 1500 ₸'},
    items: [
      {id:'mojito', name:{ru:'Mojito Classic',kz:'Mojito Classic'}, desc:{ru:'Классический освежающий мохито',kz:'Классикалық сергітетін мохито'}, sizes:{500:1500}, temp:'cold', emoji:'🍃', color:'#c4ecb4'},
      {id:'marakuya', name:{ru:'Маракуйя',kz:'Маракуйя'}, desc:{ru:'Яркий лимонад с маракуйей',kz:'Маракуйямен жасалған лимонад'}, sizes:{500:1500}, temp:'cold', emoji:'🟡', color:'#ffe08a'},
      {id:'granat', name:{ru:'Гранатовый удар',kz:'Гранатовый удар'}, desc:{ru:'Насыщенный гранатовый вкус',kz:'Анар дәмі бар қанық лимонад'}, sizes:{500:1500}, temp:'cold', emoji:'🔴', color:'#ff9fb0'},
      {id:'kivi_mar', name:{ru:'Киви Маракуйя',kz:'Киви Маракуйя'}, desc:{ru:'Киви и маракуйя',kz:'Киви мен маракуйя'}, sizes:{500:1500}, temp:'cold', emoji:'🥝', color:'#c4ecb4'},
      {id:'mango_mar', name:{ru:'Манго Маракуйя',kz:'Манго Маракуйя'}, desc:{ru:'Манго и маракуйя',kz:'Манго мен маракуйя'}, sizes:{500:1500}, temp:'cold', emoji:'🥭', color:'#ffd28a'},
      {id:'cherry_moj', name:{ru:'Cherry Мохито',kz:'Cherry Мохито'}, desc:{ru:'Вишнёвый мохито',kz:'Шие мохито'}, sizes:{500:1500}, temp:'cold', emoji:'🍒', color:'#ff7a7a'},
      {id:'ananas_moj', name:{ru:'Ананас Мохито',kz:'Ананас Мохито'}, desc:{ru:'Ананасовый мохито',kz:'Ананас мохито'}, sizes:{500:1500}, temp:'cold', emoji:'🍍', color:'#ffe08a'},
      {id:'malina_moj', name:{ru:'Малина Мохито',kz:'Малина Мохито'}, desc:{ru:'Малиновый мохито',kz:'Таңқурай мохито'}, sizes:{500:1500}, temp:'cold', emoji:'🫐', color:'#ff9fb0'},
    ]
  },
  special: {
    title: {ru:'Special', kz:'Special'},
    items: [
      {id:'siren', name:{ru:'Сиреневое молоко',kz:'Сиреневое молоко'}, desc:{ru:'Клубника, молоко, сырная шапка, голубой курасао',kz:'Құлпынай, сүт, ірімшік қақпағы, көк курасао'}, sizes:{500:1800,700:2000}, temp:'hot', emoji:'💜', color:'#d4b8ff'},
      {id:'cacao_banana', name:{ru:'Cacao Banana Tapioca',kz:'Cacao Banana Tapioca'}, desc:{ru:'Какао, банан, тапиока, шоколад',kz:'Какао, банан, тапиока, шоколад'}, sizes:{500:1700,700:1900}, temp:'both', emoji:'🍫', color:'#b89070'},
      {id:'kaha_orange', name:{ru:'Kaha Orange Ice Tea',kz:'Kaha Orange Ice Tea'}, desc:{ru:'Апельсин, маракуйя, пюре маракуйя, жасмин',kz:'Апельсин, маракуйя, жасмин'}, sizes:{500:1700,700:2000}, temp:'cold', emoji:'🍊', color:'#ffb070'},
      {id:'bubble_coffee', name:{ru:'Bubble Coffee',kz:'Bubble Coffee'}, desc:{ru:'Кофе, сырная шапка, тапиока, шоколад',kz:'Кофе, ірімшік көбігі, тапиока, шоколад'}, sizes:{500:1650}, temp:'both', emoji:'☕', color:'#b89070'},
      {id:'milky_matcha', name:{ru:'Milky & Matcha',kz:'Milky & Matcha'}, desc:{ru:'Зелёный матча, молоко, классическое желе, тапиока',kz:'Жасыл матча, сүт, классикалық желе, тапиока'}, sizes:{500:1650,700:1800}, temp:'cold', emoji:'🍵', color:'#c4ecb4'},
      {id:'snickers', name:{ru:'Snickers',kz:'Snickers'}, desc:{ru:'Карамель, шоколад, лесные орехи, молоко, тапиока',kz:'Карамель, шоколад, фундук, сүт, тапиока'}, sizes:{500:1850,700:2050}, temp:'cold', emoji:'🍫', color:'#a07050'},
      {id:'oreo', name:{ru:'Oreo',kz:'Oreo'}, desc:{ru:'Oreo, молоко, шоколад, сырная шапка, тапиока',kz:'Oreo, сүт, шоколад, ірімшік көбігі, тапиока'}, sizes:{500:1850,700:2050}, temp:'cold', emoji:'🖤', color:'#3a2a2a'},
      {id:'tamoka', name:{ru:'Tamoka Tapioca',kz:'Tamoka Tapioca'}, desc:{ru:'Зелёная матча, клубника, молоко, тапиока',kz:'Жасыл матча, құлпынай, сүт, тапиока'}, sizes:{500:1850,700:2050}, temp:'cold', emoji:'🐯', color:'#c4ecb4'},
      {id:'mango_matcha', name:{ru:'Mango Matcha Tapioca',kz:'Mango Matcha Tapioca'}, desc:{ru:'Манго, зелёная матча, тапиока, молоко',kz:'Манго, жасыл матча, тапиока, сүт'}, sizes:{500:1850,700:2050}, temp:'cold', emoji:'🥭', color:'#ffd28a'},
    ]
  },
  fruits: {
    title: {ru:'Tea & Fruits', kz:'Tea & Fruits'},
    items: [
      {id:'blue_lagoon', name:{ru:'Blue Lagoon',kz:'Blue Lagoon'}, desc:{ru:'Ананас, персик, чай ананас, кокосовое желе',kz:'Ананас, шабдалы, ананас шайы, кокос желесі'}, sizes:{500:1550,700:1850}, temp:'cold', emoji:'💙', color:'#9fd4ff'},
      {id:'boracay', name:{ru:'Boracay',kz:'Boracay'}, desc:{ru:'Ананас, персик, чай ананас, кокосовое желе',kz:'Ананас, шабдалы, ананас шайы, кокос желесі'}, sizes:{500:1700,700:1950}, temp:'cold', emoji:'🌴', color:'#ffd28a'},
      {id:'lime_extra', name:{ru:'Lime Extra',kz:'Lime Extra'}, desc:{ru:'Лайм, лимон, листья мяты, жасмин, кокосовое желе',kz:'Лайм, лимон, жалбыз, жасмин, кокос желесі'}, sizes:{500:1550,700:1700}, temp:'cold', emoji:'🍋', color:'#c4ecb4'},
      {id:'tokyo_grape', name:{ru:'Tokyo Grape',kz:'Tokyo Grape'}, desc:{ru:'Виноград, жасмин, кокосовое желе',kz:'Жүзім, жасмин, кокос желесі'}, sizes:{500:1550,700:1850}, temp:'cold', emoji:'🍇', color:'#b89fff'},
      {id:'okinawa', name:{ru:'Okinawa',kz:'Okinawa'}, desc:{ru:'Киви, личи, жасмин, кокосовое желе',kz:'Киви, личи, жасмин, кокос желесі'}, sizes:{500:1700,700:1950}, temp:'cold', emoji:'🥝', color:'#c4ecb4'},
      {id:'palawan', name:{ru:'Palawan',kz:'Palawan'}, desc:{ru:'Киви, маракуйя, манго, кокосовое желе',kz:'Киви, маракуйя, манго, кокос желесі'}, sizes:{500:1600,700:1850}, temp:'cold', emoji:'🌺', color:'#ffb8d9'},
    ]
  },
  desserts: {
    title: {ru:'Десерты', kz:'Десерттер'},
    items: [
      {id:'mochi', name:{ru:'Моти',kz:'Моти'}, desc:{ru:'Ассортимент: киви, малина, вишня, банан, лесные ягоды, нутелла, орео',kz:'Ассортимент: киви, таңқурай, шие, банан, жабайы жидектер, нутелла, орео'}, sizes:{'шт':1200}, temp:'cold', emoji:'🍡', color:'#ffd6ea'},
    ]
  }
};
