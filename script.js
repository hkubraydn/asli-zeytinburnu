// Menü Verileri
// Güncellenmiş Aslı Lezzetleri Menü Verileri
const menuItems = [
  // --- KAHVALTILAR & YUMURTALAR ---
  { id: 1, category: 'kahvalti', name: 'Serpme Kahvaltı (2 Kişilik)', price: 950, desc: 'Menemen, Ezine beyaz peyniri, taze kaşar, salam, zeytinler, reçel, bal, tereyağı, söğüş, patates kızartması, peynirli su böreği ve sınırsız çay. (1750 kcal)', img: 'photos/serpme-kahvaltı.png' },
  { id: 2, category: 'kahvalti', name: 'Çabuk Kahvaltı', price: 390, desc: 'Bal, kıl biber, çeri domates, Ezine peyniri, eski kaşar, vişne reçeli, salatalık, simit, tereyağı, kabuklu yumurta, zeytin çeşitleri, ekmekler. (1439 kcal)', img: 'photos/çabuk-kahvaltı.jpg' },
  { id: 3, category: 'kahvalti', name: 'Sahanda Tereyağlı Yumurta', price: 125, desc: 'Sıcak sahanda taze tereyağlı yumurta. (245 kcal)', img: 'photos/sahandayumurta.jpg' },
  { id: 4, category: 'kahvalti', name: 'Sahanda Peynirli Yumurta', price: 140, desc: 'Lezzetli peynir harcı ile sahanda yumurta. (340 kcal)', img: 'photos/Sahanda Peynirli Yumurta.jpg' },
  { id: 5, category: 'kahvalti', name: 'Sahanda Sucuklu Yumurta', price: 180, desc: 'Nefis dilim sucuklar ile pişirilmiş yumurta. (430 kcal)', img: 'photos/Sahanda Sucuklu Yumurta.jpg' },
  { id: 6, category: 'kahvalti', name: 'Menemen', price: 175, desc: 'Geleneksel domates, biber ve yumurta uyumu. (285 kcal)', img: 'photos/menemen.jpg' },
  { id: 7, category: 'kahvalti', name: 'Kaşarlı Menemen', price: 210, desc: 'Eritilmiş taze kaşar peynirli menemen. (424 kcal)', img: 'photos/menemen.jpg' },
  { id: 8, category: 'kahvalti', name: 'Sucuklu Menemen', price: 210, desc: 'Sucuk taneleri ile zenginleştirilmiş menemen. (432 kcal)', img: 'photos/menemen.jpg' },
  { id: 9, category: 'kahvalti', name: 'Sade Omlet', price: 175, desc: 'Taze yumurtalardan hazırlanan hafif omlet. (220 kcal)', img: 'photos/Beyaz Peynirli Omlet.png' },
  { id: 10, category: 'kahvalti', name: 'Beyaz Peynirli Omlet', price: 190, desc: 'Ezine beyaz peynir dolgulu sıcak omlet. (318 kcal)', img: 'photos/Beyaz Peynirli Omlet.png' },

  // --- BÖREKLER, POĞAÇALAR VE TOSTLAR ---
  { id: 11, category: 'borek', name: 'Peynirli Su Böreği', price: 260, desc: 'El açması yufka, %12 beyaz peynir ve tereyağı ile. (223 kcal)', img: 'photos/Peynirli Su Böreği.jpg' },
  { id: 12, category: 'borek', name: 'Kıymalı Kol Böreği', price: 290, desc: '%14 dana kıymalı iç harcı ile çıtır kol böreği. (272 kcal)', img: 'photos/kolböreğikıymalı.jpg' },
  { id: 13, category: 'borek', name: 'Patatesli Boşnak Böreği', price: 260, desc: '%35 patates harçlı el açması Boşnak böreği. (255 kcal)', img: 'photos/Boşnak Böreği - Patatesli porsiyon.jpg' },
  { id: 14, category: 'borek', name: 'Kıymalı Boşnak Böreği', price: 320, desc: '%20 dana kıymalı geleneksel Boşnak böreği. (220 kcal)', img: 'photos/Boşnak Böreği - Kıymalı porsiyon.jpg' },
  { id: 15, category: 'borek', name: 'Sade Poğaça', price: 40, desc: 'Taze pişmiş yumuşacık sade poğaça. (360 kcal)', img: 'photos/poğaçasade.jpg' },
  { id: 16, category: 'borek', name: 'Peynirli Poğaça', price: 40, desc: 'Peynir dolgulu nefis poğaça. (368 kcal)', img: 'photos/poğaçapeynirli.jpg' },
  { id: 17, category: 'borek', name: 'Dereotlu Poğaça', price: 45, desc: 'Taze dereotu aromalı kıyır poğaça. (446 kcal)', img: 'photos/poğaçadereotlu.jpg' },
  { id: 18, category: 'borek', name: 'Simit', price: 40, desc: 'Çıtır susamlı sokak simidi. (302 kcal)', img: 'photos/Sokak Simidi.jpg' },
  { id: 19, category: 'borek', name: 'Beyaz Peynirli Tost', price: 180, desc: 'Ekşi mayalı tost ekmeğinde Ezine peyniri ve tereyağı. (240 kcal)', img: 'photos/Bazlama Tost.jpg' },
  { id: 20, category: 'borek', name: 'Kaşarlı Tost', price: 180, desc: 'Ekşi mayalı tost ekmeğinde erimiş taze kaşar. (275 kcal)', img: 'photos/Bazlama Tost.jpg' },
  { id: 21, category: 'borek', name: 'Karışık Tost', price: 210, desc: 'Kaşar peyniri ve sucuklu tost. (292 kcal)', img: 'photos/Bazlama Tost.jpg' },
  { id: 22, category: 'borek', name: 'Kaşarlı Bazlama Tost', price: 180, desc: 'Yumuşacık bazlama ekmeğine kaşarlı tost. (295 kcal)', img: 'photos/Bazlama Tost.jpg' },
  { id: 23, category: 'borek', name: 'Peynirli Bazlama Tost', price: 180, desc: 'Bazlama ekmeğinde Ezine peyniri. (272 kcal)', img: 'photos/Bazlama Tost.jpg' },
  { id: 24, category: 'borek', name: 'Karışık Bazlama Tost', price: 210, desc: 'Bazlama ekmeğinde kaşar peyniri ve sucuk. (310 kcal)', img: 'photos/Bazlama Tost.jpg' },

  // --- BAŞLANGIÇLAR, SANDVİÇLER & SALATALAR ---
  { id: 25, category: 'atistirmalik', name: 'Zeytinyağlı Yaprak Sarma', price: 290, desc: 'Asma yaprağı, pirinç ve zeytinyağı ile ev yapımı lezzet. (210 kcal)', img: 'photos/sarma.jpg' },
  { id: 26, category: 'atistirmalik', name: 'Çıtır Tavuk Parçaları', price: 210, desc: 'Pane kaplamalı çıtır tavuk göğsü dilimleri. (280 kcal)', img: 'photos/çıtırtavuk1.jpg' },
  { id: 27, category: 'atistirmalik', name: 'Patates Kızartması', price: 150, desc: 'Altın sarısı baharatlı patates kızartması. (230 kcal)', img: 'photos/Patates Kızartması.jpg' },
  { id: 28, category: 'atistirmalik', name: 'Foccacia Sandviç', price: 220, desc: 'Focaccia ekmeğinde marul, beyaz peynir, kaşar, domates, labne. (220 kcal)', img: 'photos/sandviçekmegi.jpg' },
  { id: 29, category: 'atistirmalik', name: 'Peynirli Baget Sandviç', price: 150, desc: 'Baget ekmeğinde taze peynirler ve yeşillik. (170 kcal)', img: 'photos/sandviçekmegi.jpg' },
  { id: 30, category: 'atistirmalik', name: 'Salamlı Baget Sandviç', price: 160, desc: 'Baget ekmeğinde dana salam, salatalık, domates ve labne. (190 kcal)', img: 'photos/sandviçekmegi.jpg' },
  { id: 31, category: 'atistirmalik', name: 'Tavuklu Sezar Salata', price: 270, desc: 'Izgara tavuk, kruton ekmek, parmesan ve Sezar sos. (270 kcal)', img: 'photos/tavuklusezar.jpg' },
  { id: 32, category: 'atistirmalik', name: 'Çıtır Tavuk Salata', price: 280, desc: 'Akdeniz yeşillikleri ve pane çıtır tavuklar ile. (280 kcal)', img: 'photos/çıtırtavuksalata.jpg' },
  { id: 33, category: 'atistirmalik', name: 'Akdeniz Salata', price: 230, desc: 'Yeşillikler, beyaz peynir, mısır, çeri domates ve zeytinyağlı sos. (230 kcal)', img: 'photos/akdenizsalata.jpg' },
  { id: 34, category: 'atistirmalik', name: 'Ton Balıklı Salata', price: 330, desc: 'Ton balığı, haşlanmış yumurta, kırmızı soğan ve mısır ile. (330 kcal)', img: 'photos/tonbalıklısalata.jpg' },

  // --- ANA YEMEKLER, DÜRÜMLER, PİZZALAR VE MAKARNALAR ---
  { id: 35, category: 'ana-yemek', name: 'Izgara Köfte', price: 460, desc: 'Izgara köfte, pilav, patates kızartması ve közlenmiş biber servis edilir. (270 kcal)', img: 'photos/Köfte Porsiyon.jpg' },
  { id: 36, category: 'ana-yemek', name: 'Köri Soslu Tavuk', price: 380, desc: 'Özel köri soslu sotelenmiş tavuk, pilav ve patates kızartması. (165 kcal)', img: 'photos/körisoslutavuk.jpg' },
  { id: 37, category: 'ana-yemek', name: 'Aslı Burger', price: 450, desc: '160g dana burger köftesi, dana füme, karamelize soğan, cheddar, patates kızartması. (295 kcal)', img: 'photos/Aslı burger.jpg' },
  { id: 38, category: 'ana-yemek', name: 'Hamburger', price: 380, desc: '160g dana köfte, yeşillik, turşu ve patates kızartması. (260 kcal)', img: 'photos/hamburger.jpg' },
  { id: 39, category: 'ana-yemek', name: 'Cheeseburger', price: 350, desc: '160g dana köfte, cheddar peyniri, turşu ve patates kızartması. (280 kcal)', img: 'photos/cheeseburger.jpg' },
  { id: 40, category: 'ana-yemek', name: 'Tavuk Dürüm', price: 320, desc: 'Jülyen tavuk, lavaş ekmeği, cheddar, patates ve yeşillik. (145 kcal)', img: 'photos/Tavuk Dürüm.jpg' },
  { id: 41, category: 'ana-yemek', name: 'Köfte Dürüm', price: 380, desc: 'Izgara köfte, lavaş ekmeği, cheddar ve patates kızartması. (165 kcal)', img: 'photos/Dürüm Köfte.jpg' },
  { id: 42, category: 'ana-yemek', name: 'Margarita Pizza', price: 370, desc: 'Pizza sosu, mozzarella peyniri ve fesleğen. (235 kcal)', img: 'photos/Pizza Margarita.jpg' },
  { id: 43, category: 'ana-yemek', name: 'Sucuklu Pizza', price: 380, desc: 'Pizza sosu, mozzarella ve bol dana sucuk. (255 kcal)', img: 'photos/Pizza Sucuklu.jpg' },
  { id: 44, category: 'ana-yemek', name: 'Sebzeli Pizza', price: 350, desc: 'Mantar, kabak, patlıcan, soğan, mısır ve biberli vejetaryen pizza. (220 kcal)', img: 'photos/Pizza Sebzeli.jpg' },
  { id: 45, category: 'ana-yemek', name: 'Penne Arabiata', price: 275, desc: 'Sarımsaklı, acı domates soslu ve parmesanlı penne. (175 kcal)', img: 'photos/pennearabiate.jpg' },
  { id: 46, category: 'ana-yemek', name: 'Spaghetti Napolitan', price: 275, desc: 'Geleneksel Napolitan domates soslu spagetti. (170 kcal)', img: 'photos/spagettinapolitan.jpg' },
  { id: 47, category: 'ana-yemek', name: 'Spaghetti Bolognese', price: 310, desc: 'Kıymalı özel Bolognese soslu spagetti. (205 kcal)', img: 'photos/spagettibolonez.jpg' },
  { id: 48, category: 'ana-yemek', name: 'Fettucini Alfredo', price: 325, desc: 'Tavuk göğsü, krema, mantar ve parmesanlı fettucini. (225 kcal)', img: 'photos/fettucino.jpg' },
  { id: 49, category: 'ana-yemek', name: 'Mantı', price: 480, desc: 'Dana kıymalı ev mantısı, yoğurt ve tereyağlı sos ile. (225 kcal)', img: 'photos/Mantı Porsiyon.jpg' },

  // --- TATLILAR, PASTALAR & KURABİYELER ---
  { id: 50, category: 'tatli', name: 'Profiterol', price: 370, desc: 'Çikolata soslu taze profiterol topları. (315 kcal)', img: 'photos/Profiterol Porsiyon.jpg' },
  { id: 51, category: 'tatli', name: 'Fırın Sütlaç', price: 320, desc: 'Geleneksel fırınlanmış sütlaç. (210 kcal)', img: 'photos/fırınsütlaç.jpg' },
  { id: 52, category: 'tatli', name: 'Kazandibi', price: 320, desc: 'Karamelize alt tabanlı enfes sütlü tatlı. (225 kcal)', img: 'photos/kazandibi.jpg' },
  { id: 53, category: 'tatli', name: 'Supangle', price: 320, desc: 'Yoğun çikolatalı klasik supangle. (320 kcal)', img: 'photos/supangle.jpg' },
  { id: 54, category: 'tatli', name: 'Trileçe', price: 325, desc: 'Karamel soslu yumuşak trileçe. (245 kcal)', img: 'photos/Trileçe1.jpg' },
  { id: 55, category: 'tatli', name: 'Aslı Cup', price: 255, desc: 'Krema, çilek, pandispanya ve çikolata katmanlı cup. (260 kcal)', img: 'photos/Aslı Cup.jpg' },
  { id: 56, category: 'tatli', name: 'Fıstıklı Baklava', price: 380, desc: '%12 Antep fıstıklı çıtır baklava. (422 kcal)', img: 'photos/fıstıklıbaklava.jpg' },
  { id: 57, category: 'tatli', name: 'Cevizli Ev Baklavası', price: 330, desc: '%12 bol cevizli el açması ev baklavası. (401 kcal)', img: 'photos/cevizlievbaklavası2.png' },
  { id: 58, category: 'tatli', name: 'Fıstıklı Kadayıf', price: 350, desc: 'Antep fıstıklı ve üzüm pekmezli şerbetli kadayıf. (422 kcal)', img: 'photos/kadayıfporsiyon.jpg' },
  { id: 59, category: 'tatli', name: 'Cevizli Sarı Burma', price: 320, desc: '%30 cevizli özel sarı burma tatlısı. (401 kcal)', img: 'photos/Sarı Burma - Porsiyon.jpg' },
  { id: 60, category: 'tatli', name: 'Brownie', price: 335, desc: 'Çikolatalı, vişneli ıslak brownie. (450 kcal)', img: 'photos/brownie.jpg' },
  { id: 61, category: 'tatli', name: 'Böğürtlenli Cheesecake', price: 290, desc: 'Labne ve taze böğürtlen soslu cheesecake. (538 kcal)', img: 'photos/frambuazlı cheesecake.jpg' },
  { id: 62, category: 'tatli', name: 'Fıstıklı Cheesecake', price: 290, desc: 'Antep fıstık kremalı zengin cheesecake. (390 kcal)', img: 'photos/dubaicheesecake.jpg' },
  { id: 63, category: 'tatli', name: 'Fıstıklı Krokanlı Pasta', price: 315, desc: 'Fıstık ve çıtır krokan parçalı yaş pasta. (322 kcal)', img: 'photos/krokanlıpasta.jpg' },
  { id: 64, category: 'tatli', name: 'Muzlu Pasta', price: 335, desc: 'Taze muz dilimli hafif krema dolgulu pasta. (421 kcal)', img: 'photos/Muzlu Tek Pasta.jpg' },
  { id: 65, category: 'tatli', name: 'San Sebastian', price: 320, desc: 'Akışkan iç kıvamlı İspanyol cheesecake. (420 kcal)', img: 'photos/San Sebastian Dilimlow.jpg' },
  { id: 66, category: 'tatli', name: 'Aslı Cookie', price: 140, desc: 'Esmer şeker ve parça çikolatalı ev yapımı kurabiye. (441 kcal)', img: 'photos/Arap Bohçası Kurabiyelow.jpg' },

  // --- SICAK İÇECEKLER ---
  { id: 67, category: 'icecek', name: 'Aslı Çay', price: 50, desc: 'Geleneksel taze demlenmiş bardak çay.', img: 'photos/çay.jpg' },
  { id: 68, category: 'icecek', name: 'Aslı Fincan Çay', price: 70, desc: 'Büyük fincanda demlenmiş Rize çayı.', img: 'photos/fincan02.jpg' },
  { id: 69, category: 'icecek', name: 'Bitki Çayları', price: 150, desc: 'Ihlamur, adaçayı, yeşil çay ve karışım seçenekleri.', img: 'photos/Aslı Bardak kahve (1).png' },
  { id: 70, category: 'icecek', name: 'Türk Kahvesi', price: 120, desc: 'Geleneksel köpüklü Türk kahvesi.', img: 'photos/Türk kahvesi.jpg' },
  { id: 71, category: 'icecek', name: 'Duble Türk Kahvesi', price: 140, desc: 'Duble fincanda sunulan Türk kahvesi.', img: 'photos/Türk kahvesi.jpg' },
  { id: 72, category: 'icecek', name: 'Caffe Latte', price: 160, desc: 'Espresso ve sıcak süt köpüğü. (120 kcal)', img: 'photos/Buzlu Latte.jpg' },
  { id: 73, category: 'icecek', name: 'Caramel Latte', price: 190, desc: 'Karamel aromalı sıcak Caffe Latte. (180 kcal)', img: 'photos/Aslı Karamelli Frappe.jpg' },
  { id: 74, category: 'icecek', name: 'Cappuccino', price: 160, desc: 'Yoğun espresso ve süt köpüğü. (90 kcal)', img: 'photos/Aslı Espresso Frappe.jpg' },
  { id: 75, category: 'icecek', name: 'Caffe Mocha', price: 175, desc: 'Espresso, çikolata sosu ve süt. (210 kcal)', img: 'photos/Buzlu Mocha.jpg' },
  { id: 76, category: 'icecek', name: 'White Chocolate Mocha', price: 175, desc: 'Beyaz çikolata soslu Caffe Mocha. (240 kcal)', img: 'photos/Buzlu White Chocolate Mocha.jpg' },
  { id: 77, category: 'icecek', name: 'Americano', price: 140, desc: 'Sıcak su ile inceltilmiş zengin espresso. (3 kcal)', img: 'photos/espresso_americano.png' },
  { id: 78, category: 'icecek', name: 'Espresso', price: 100, desc: 'Yoğun ve taze çekilmiş kahve özü. (3 kcal)', img: 'photos/espresso_americano.png' },
  { id: 79, category: 'icecek', name: 'Duble Espresso', price: 140, desc: 'Çift shot zengin espresso. (6 kcal)', img: 'photos/espresso_americano.png' },
  { id: 80, category: 'icecek', name: 'Filtre Kahve', price: 130, desc: 'Taze demlenmiş filtre kahve. (2 kcal)', img: 'photos/Filtre Kahve Paket Aslılow.jpg' },
  { id: 81, category: 'icecek', name: 'Salep', price: 175, desc: 'Tarçın süslemeli geleneksel sıcak salep. (185 kcal)', img: 'photos/çay.jpg' },
  { id: 82, category: 'icecek', name: 'Sıcak Çikolata', price: 175, desc: 'Yoğun kıvamlı çikolatalı sıcak içecek. (230 kcal)', img: 'photos/Aslı Çikolatalı Frappe 2.jpg' }
];

let cart = [];
let activeCategory = 'all';

// Sayfa Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
  renderMenu(menuItems);
  checkOpenStatus();
  initSlider();
});


// Çalışma Saati Kontrolü (07:00 - 23:00)
function checkOpenStatus() {
  const now = new Date();
  const hours = now.getHours();
  const badge = document.getElementById('status-badge');

  if (hours >= 7 && hours < 23) {
    badge.textContent = "Şu An Açık (07:00 - 23:00)";
    badge.className = "badge open";
  } else {
    badge.textContent = "Şu An Kapalı";
    badge.className = "badge closed";
  }
}

// Menüyü Ekrana Basma
function renderMenu(items) {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = '<p style="text-align: center; width: 100%; margin: 40px 0;">Aradığınız ürün bulunamadı.</p>';
    return;
  }

  // Kategori sıralaması ve Türkçe adları
  const categoryOrder = ['kahvalti', 'borek', 'atistirmalik', 'ana-yemek', 'tatli', 'icecek'];
  const categoryNames = {
    'kahvalti': 'Kahvaltı & Yumurta',
    'borek': 'Börek & Tost',
    'atistirmalik': 'Sandviç & Salata',
    'ana-yemek': 'Ana Yemek & Pasta',
    'tatli': 'Tatlılar',
    'icecek': 'İçecekler'
  };

  // Ürünleri kategorilerine göre grupla
  const groupedItems = {};
  items.forEach(item => {
    if (!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
  });

  // Her kategoriyi sırayla ekrana bas
  categoryOrder.forEach(catKey => {
    const catItems = groupedItems[catKey];
    if (catItems && catItems.length > 0) {
      const groupEl = document.createElement('div');
      groupEl.className = 'menu-category-group';

      const titleEl = document.createElement('h3');
      titleEl.className = 'menu-category-title';
      titleEl.textContent = categoryNames[catKey] || catKey;
      groupEl.appendChild(titleEl);

      const catGridEl = document.createElement('div');
      catGridEl.className = 'menu-category-grid';

      catItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <div class="card-body">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="card-footer">
              <span class="price">${item.price} ₺</span>
              <button class="add-btn" onclick="addToCart(${item.id})">Ekle +</button>
            </div>
          </div>
        `;
        catGridEl.appendChild(card);
      });

      groupEl.appendChild(catGridEl);
      grid.appendChild(groupEl);
    }
  });
}

// Kategori Filtreleme
function filterCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterMenu();
}

// Arama ve Filtre Kombinasyonu
function filterMenu() {
  const query = document.getElementById('menu-search').value.toLowerCase();
  const filtered = menuItems.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });
  renderMenu(filtered);
}

// Sepet İşlemleri
function addToCart(id) {
  const item = menuItems.find(i => i.id === id);
  const cartItem = cart.find(i => i.id === id);

  if (cartItem) {
    cartItem.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartUI();
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartItemsContainer.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        <small>${item.price} ₺ x ${item.qty}</small>
      </div>
      <div><strong>${item.price * item.qty} ₺</strong></div>
    `;
    cartItemsContainer.appendChild(div);
  });

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-msg">Sepetiniz henüz boş.</p>';
  }

  cartCount.textContent = count;
  cartTotal.textContent = `${total} ₺`;
}

function toggleCart() {
  document.getElementById('cart-drawer').classList.toggle('open');
}

function showCustomAlert(message) {
  const modal = document.getElementById('custom-alert-modal');
  const msgEl = document.getElementById('custom-alert-message');
  const iconContainer = document.getElementById('custom-modal-icon-container');
  
  if (!modal || !msgEl || !iconContainer) return;
  
  msgEl.textContent = message;
  
  // Dinamik ikon belirleme
  let iconHtml = '<i class="fa-solid fa-circle-info"></i>';
  const lowercaseMsg = message.toLowerCase();
  if (lowercaseMsg.includes('garson')) {
    iconHtml = '<i class="fa-solid fa-bell-concierge"></i>';
  } else if (lowercaseMsg.includes('sepet') || lowercaseMsg.includes('boş')) {
    iconHtml = '<i class="fa-solid fa-basket-shopping"></i>';
  }
  iconContainer.innerHTML = iconHtml;
  
  modal.classList.add('open');
}

function closeCustomAlert() {
  const modal = document.getElementById('custom-alert-modal');
  if (modal) {
    modal.classList.remove('open');
  }
}

function checkout() {
  if (cart.length === 0) {
    showCustomAlert('Sepetiniz boş!');
    return;
  }
  showCustomAlert('Garsonla iletişime geçiniz.');
  cart = [];
  updateCartUI();
  toggleCart();
}

// --- SLIDER (CAROUSEL) YÖNETİMİ ---
let currentSlideIndex = 0;
let sliderInterval = null;

function initSlider() {
  showSlide(currentSlideIndex);
  startSliderTimer();
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  if (slides.length === 0) return;
  
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }
  
  slides.forEach((slide, i) => {
    if (i === currentSlideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  
  dots.forEach((dot, i) => {
    if (i === currentSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function moveSlide(step) {
  stopSliderTimer();
  showSlide(currentSlideIndex + step);
  startSliderTimer();
}

function currentSlide(index) {
  stopSliderTimer();
  showSlide(index);
  startSliderTimer();
}

function startSliderTimer() {
  stopSliderTimer(); // Her ihtimale karşı temizle
  sliderInterval = setInterval(() => {
    showSlide(currentSlideIndex + 1);
  }, 5000);
}

function stopSliderTimer() {
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
  }
}

// Slaytlardaki butonlara tıklandığında menüye kaydır ve filtrele
function selectHeroCategory(categoryName) {
  const categoryTabs = document.getElementById('category-tabs');
  if (categoryTabs) {
    const buttons = categoryTabs.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      const onclickAttr = btn.getAttribute('onclick');
      if (onclickAttr && onclickAttr.includes(`'${categoryName}'`)) {
        filterCategory(categoryName, btn);
      }
    });
  }
  
  const menuSection = document.getElementById('menu');
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: 'smooth' });
  }
}