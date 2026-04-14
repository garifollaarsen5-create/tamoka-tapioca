// ---------- I18N ----------
const I18N = {
  ru: {
    nav_menu:'Меню', nav_about:'О нас', nav_locations:'Адреса', nav_contact:'Контакты',
    hero_badge:'🐯 Bubble Tea · Актобе',
    hero_title_html:'Твой маленький отдых <span class="accent">в стакане</span>',
    hero_sub:'Натуральные вкусы • Быстро • Стильно. Работаем каждый день 💖',
    hero_order:'Заказать', hero_more:'Узнать больше',
    perk1:'всегда свежая тапиока', perk2:'насыщенные вкусы',
    perk3:'быстрое приготовление', perk4:'эстетика, которую хочется снимать 😍',
    about_title:'Почему все приходят к нам снова и снова',
    about_p1:'Мы готовим каждый напиток вручную, свежо и с любовью. Десятки авторских вкусов — от классической тапиоки до летних лимонадов и нежных тиа-кримов.',
    about_p2:'Это не просто напиток — это твой маленький отдых в течение дня 💖',
    stat1:'вкусов', stat2:'локации в Актобе', stat3:'натуральные ингредиенты',
    menu_title:'Меню', menu_sub:'Выбирай любимый вкус — мы приготовим его за пару минут',
    loc_title:'Наши адреса', loc_sub:'3 точки в Актобе — мы всегда рядом',
    loc_main:'Головной',
    loc1_desc:'Центр города, уютная атмосфера',
    loc2_desc:'Рядом с жилым массивом',
    loc3_desc:'Новая точка, заходи попробовать',
    contact_title:'Остались вопросы?',
    contact_sub:'Пиши нам в Instagram или WhatsApp — ответим быстро 💬',
    footer_desc:'Bubble Tea в Актобе · Работаем каждый день',
    cart_title:'Корзина', cart_total:'Итого',
    cart_choose_loc:'Выбери точку для заказа:',
    cart_send:'Оформить в WhatsApp',
    cart_empty:'Пока пусто. Выбери напиток в меню 🥤',
    add:'В корзину',
    wa_greeting:'Здравствуйте! Хочу оформить заказ:',
    wa_order:'Заказ', wa_date:'Дата', wa_total:'Итого',
    size:'Размер',
  },
  kz: {
    nav_menu:'Мәзір', nav_about:'Біз туралы', nav_locations:'Мекенжайлар', nav_contact:'Байланыс',
    hero_badge:'🐯 Bubble Tea · Ақтөбе',
    hero_title_html:'Күніңдегі кішкентай <span class="accent">рахат</span>',
    hero_sub:'Табиғи дәмдер • Жылдам • Стильді. Күн сайын жұмыс істейміз 💖',
    hero_order:'Тапсырыс беру', hero_more:'Толығырақ',
    perk1:'әрқашан жаңа тапиока', perk2:'қанық дәмдер',
    perk3:'жылдам дайындау', perk4:'суретке түсіргің келетін эстетика 😍',
    about_title:'Неге бәрі бізге қайта-қайта келеді',
    about_p1:'Әр сусынды қолмен, жаңа әрі сүйіспеншілікпен дайындаймыз. Классикалық тапиокадан бастап жазғы лимонадтар мен жұмсақ tea-cream дәмдерге дейін ондаған таңдау.',
    about_p2:'Бұл жай сусын емес — бұл күніңдегі кішкентай рахат 💖',
    stat1:'дәм', stat2:'Ақтөбедегі нүкте', stat3:'табиғи ингредиенттер',
    menu_title:'Мәзір', menu_sub:'Сүйікті дәміңді таңда — бірнеше минутта дайындаймыз',
    loc_title:'Біздің мекенжайлар', loc_sub:'Ақтөбеде 3 нүкте — әрқашан жаныңдамыз',
    loc_main:'Басты',
    loc1_desc:'Қала орталығы, жайлы атмосфера',
    loc2_desc:'Тұрғын үй ауданының жанында',
    loc3_desc:'Жаңа нүкте, кіріп көр',
    contact_title:'Сұрақтарың қалды ма?',
    contact_sub:'Instagram немесе WhatsApp арқылы жаз — тез жауап береміз 💬',
    footer_desc:'Ақтөбедегі Bubble Tea · Күн сайын жұмыс',
    cart_title:'Себет', cart_total:'Барлығы',
    cart_choose_loc:'Тапсырыс үшін нүктені таңда:',
    cart_send:'WhatsApp арқылы тапсырыс',
    cart_empty:'Әзірге бос. Мәзірден сусын таңда 🥤',
    add:'Себетке',
    wa_greeting:'Сәлеметсіз бе! Тапсырыс бергім келеді:',
    wa_order:'Тапсырыс', wa_date:'Күні', wa_total:'Барлығы',
    size:'Көлем',
  }
};

let LANG = localStorage.getItem('tamoka_lang') || 'ru';
let CART = JSON.parse(localStorage.getItem('tamoka_cart') || '[]');

// ---------- LANG ----------
function setLang(lang){
  LANG = lang;
  localStorage.setItem('tamoka_lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-switch button').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n; if(I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  const h1 = document.querySelector('.hero h1');
  if(h1) h1.innerHTML = I18N[lang].hero_title_html;
  renderMenu();
  renderCart();
}

document.querySelectorAll('.lang-switch button').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));

// ---------- BURGER MENU ----------
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', ()=>{
  navLinks.classList.toggle('open');
  burger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});
// close nav when a link is tapped
navLinks.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=>{
    navLinks.classList.remove('open');
    burger.textContent = '☰';
  });
});

// ---------- MENU RENDER ----------
function renderMenu(){
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  Object.entries(MENU).forEach(([, cat], catIdx)=>{
    // Category header
    const header = document.createElement('div');
    header.className = 'cat-header reveal';
    header.innerHTML = `<h3>${cat.title[LANG]}</h3>`;
    grid.appendChild(header);

    // Category banner image (optional)
    if(cat.banner){
      const bannerEl = document.createElement('div');
      bannerEl.className = 'cat-banner reveal';
      bannerEl.innerHTML = `<img src="${cat.banner}" alt="${cat.title[LANG]}" onerror="this.parentElement.style.display='none'"/>`;
      grid.appendChild(bannerEl);
    }

    cat.items.forEach((item, itemIdx)=>{
      const sizes = Object.keys(item.sizes);
      const defaultSize = sizes[0];

      const tempBadge = item.temp==='hot'
        ? `<span class="temp-badge hot" title="Горячий">🔥</span>`
        : item.temp==='both'
          ? `<span class="temp-badge hot">🔥</span><span class="temp-badge cold">❄️</span>`
          : `<span class="temp-badge cold" title="Холодный">❄️</span>`;

      const card = document.createElement('div');
      card.className = 'menu-card reveal';
      // stagger delay per card
      card.style.transitionDelay = `${(catIdx * 3 + itemIdx) * 55}ms`;

      card.innerHTML = `
        <div class="menu-img" style="background:linear-gradient(135deg,${item.color},#fff)">
          <div class="temp-badges">${tempBadge}</div>
          <div class="img-emoji">${item.emoji}</div>
          ${item.img ? `<img src="${item.img}" alt="${item.name[LANG]}"
            onload="this.classList.add('loaded')"
            onerror="this.remove()"/>` : ''}
        </div>
        <h3>${item.name[LANG]}</h3>
        <p class="desc">${item.desc[LANG]}</p>
        ${sizes.length>1
          ? `<div class="size-tabs">${sizes.map((s,i)=>`<button class="${i===0?'active':''}" data-size="${s}">${s}${isNaN(s)?'':' мл'}</button>`).join('')}</div>`
          : ''}
        <div class="row">
          <div class="price">${item.sizes[defaultSize]} ₸ ${sizes.length===1 && isNaN(defaultSize)
            ? `<small>/${defaultSize}</small>`
            : `<small>${defaultSize}${isNaN(defaultSize)?'':' мл'}</small>`}</div>
          <button class="add-btn">+ ${I18N[LANG].add}</button>
        </div>
      `;

      let selectedSize = defaultSize;
      card.querySelectorAll('.size-tabs button').forEach(b=>{
        b.onclick = ()=>{
          card.querySelectorAll('.size-tabs button').forEach(x=>x.classList.remove('active'));
          b.classList.add('active');
          selectedSize = b.dataset.size;
          card.querySelector('.price').innerHTML =
            `${item.sizes[selectedSize]} ₸ <small>${selectedSize}${isNaN(selectedSize)?'':' мл'}</small>`;
        };
      });
      card.querySelector('.add-btn').onclick = ()=> addToCart(item, selectedSize);
      grid.appendChild(card);
    });
  });

  // trigger scroll reveal after render
  setTimeout(setupReveal, 50);
}

// ---------- SCROLL REVEAL ----------
function setupReveal(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08, rootMargin:'0px 0px -30px 0px'});

  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el));
}

// ---------- CART ----------
function saveCart(){ localStorage.setItem('tamoka_cart', JSON.stringify(CART)); }

function addToCart(item, size){
  const id = item.id + '_' + size;
  const existing = CART.find(c=>c.key===id);
  if(existing){ existing.qty++; }
  else{
    CART.push({
      key:id, id:item.id,
      name_ru:item.name.ru, name_kz:item.name.kz,
      size, price:item.sizes[size],
      emoji:item.emoji, qty:1
    });
  }
  saveCart(); renderCart();

  // bounce animation on cart button
  const badge = document.getElementById('cart-count');
  badge.style.transform = 'scale(1.5)';
  setTimeout(()=>badge.style.transform='scale(1)',180);
}

function changeQty(key, delta){
  const item = CART.find(c=>c.key===key); if(!item) return;
  item.qty += delta;
  if(item.qty<=0) CART = CART.filter(c=>c.key!==key);
  saveCart(); renderCart();
}

function renderCart(){
  const count = CART.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cart-count').textContent = count;
  const wrap = document.getElementById('cart-items');
  if(CART.length===0){
    wrap.innerHTML = `<div class="cart-empty">${I18N[LANG].cart_empty}</div>`;
  } else {
    wrap.innerHTML = CART.map(c=>`
      <div class="cart-item">
        <div class="cart-item-emoji">${c.emoji}</div>
        <div class="cart-item-info">
          <h4>${LANG==='ru'?c.name_ru:c.name_kz}</h4>
          <small>${c.size}${isNaN(c.size)?'':' мл'} · ${c.price} ₸</small>
        </div>
        <div class="cart-item-controls">
          <button onclick="changeQty('${c.key}',-1)">−</button>
          <span>${c.qty}</span>
          <button onclick="changeQty('${c.key}',1)">+</button>
        </div>
      </div>
    `).join('');
  }
  const total = CART.reduce((s,i)=>s+i.qty*i.price,0);
  document.getElementById('cart-total').textContent = total.toLocaleString('ru-RU')+' ₸';
}

function toggleCart(){
  document.getElementById('cart-drawer').classList.toggle('open');
  document.getElementById('cart-overlay').classList.toggle('open');
  // close burger menu if open
  navLinks.classList.remove('open');
  burger.textContent = '☰';
}

function sendToWhatsApp(){
  if(CART.length===0){ alert(I18N[LANG].cart_empty); return; }
  const phone = document.getElementById('cart-location').value;
  const now = new Date();
  const dateStr = now.toLocaleDateString(LANG==='ru'?'ru-RU':'kk-KZ') + ' ' +
                  now.toLocaleTimeString(LANG==='ru'?'ru-RU':'kk-KZ',{hour:'2-digit',minute:'2-digit'});
  const locText = document.getElementById('cart-location').selectedOptions[0].textContent;
  let msg = `${I18N[LANG].wa_greeting}\n\n`;
  msg += `📍 ${locText}\n`;
  msg += `🗓 ${I18N[LANG].wa_date}: ${dateStr}\n\n`;
  msg += `🧾 ${I18N[LANG].wa_order}:\n`;
  CART.forEach((c,i)=>{
    msg += `${i+1}. ${LANG==='ru'?c.name_ru:c.name_kz} (${c.size}${isNaN(c.size)?'':' мл'}) × ${c.qty} = ${c.qty*c.price} ₸\n`;
  });
  const total = CART.reduce((s,i)=>s+i.qty*i.price,0);
  msg += `\n💰 ${I18N[LANG].wa_total}: ${total.toLocaleString('ru-RU')} ₸`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ---------- STATIC SECTION REVEALS ----------
function initStaticReveal(){
  // add reveal class to static sections
  document.querySelectorAll('.about-grid, .about-stats>div, .loc-card, .section-head, .contact-inner').forEach(el=>{
    el.classList.add('reveal');
  });
  setupReveal();
}

// ---------- INIT ----------
setLang(LANG);
renderCart();
initStaticReveal();
