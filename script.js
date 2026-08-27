// Menü Verileri
// Güncellenmiş Aslı Lezzetleri Menü Verileri
const menuItems = [
  // --- KAHVALTILAR & YUMURTALAR ---
  { id: 1, category: 'kahvalti', name: 'Serpme Kahvaltı (2 Kişilik)', price: 950, desc: 'Menemen veya sucuklu yumurta, ezine beyaz peyniri, taze kaşar, salam, siyah zeytin, yeşil zeytin, reçel, bal, tereyağı, domates, salatalık, yeşil biber, maydonoz, patates kızartması, peynirli su böreği ve sınırsız çay. (1750 kcal)', img: 'photos/serpme-kahvaltı.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 2, category: 'kahvalti', name: 'Çabuk Kahvaltı', price: 390, desc: 'Bal, yeşil biber, salatalık, domates, ezine peyniri, taze kaşar, reçel, simit, tereyağı, haşlanmış yumurta, siyah zeytin, yeşil zeytin, yanında 2 adet çay. (1439 kcal)', img: 'photos/çabuk-kahvaltı.webp', allergens: ['gluten', 'sut', 'yumurta', 'susam'] },
  { id: 3, category: 'kahvalti', name: 'Sahanda Tereyağlı Yumurta', price: 125, desc: 'Sıcak sahanda taze tereyağlı yumurta. (245 kcal)', img: 'photos/sade-yumurta.webp', allergens: ['sut', 'yumurta'] },
  { id: 4, category: 'kahvalti', name: 'Sahanda Peynirli Yumurta', price: 140, desc: 'Lezzetli peynir harcı ile sahanda yumurta. (340 kcal)', img: 'photos/Sahanda Peynirli Yumurta.webp', allergens: ['sut', 'yumurta'] },
  { id: 5, category: 'kahvalti', name: 'Sahanda Sucuklu Yumurta', price: 180, desc: 'Sucuk dilimleri ile pişirilmiş yumurta. (430 kcal)', img: 'photos/Sahanda Sucuklu Yumurta.webp', allergens: ['yumurta'] },
  { id: 6, category: 'kahvalti', name: 'Menemen', price: 175, desc: 'Geleneksel domates, biber ve yumurta uyumu. (285 kcal)', img: 'photos/menemen.webp', allergens: ['yumurta'] },
  { id: 7, category: 'kahvalti', name: 'Kaşarlı Menemen', price: 210, desc: 'Eritilmiş taze kaşar peynirli menemen. (424 kcal)', img: 'photos/kasarlimenemen.webp', allergens: ['sut', 'yumurta'] },
  { id: 8, category: 'kahvalti', name: 'Sucuklu Menemen', price: 210, desc: 'Sucuk dilimleri ile hazırlanmış menemen. (432 kcal)', img: 'photos/sucuklumenemen.webp', allergens: ['yumurta'] },
  { id: 9, category: 'kahvalti', name: 'Sade Omlet', price: 175, desc: 'Patates kızartması ve mevsim yeşillikleri ile servis edilir. (220 kcal)', img: 'photos/sadeomlet.webp', allergens: ['yumurta'] },
  { id: 10, category: 'kahvalti', name: 'Beyaz Peynirli Omlet', price: 190, desc: 'Patates kızartması ve mevsim yeşillikleri ile servis edilir. (318 kcal)', img: 'photos/peynirliomlet.webp', allergens: ['sut', 'yumurta'] },

  // --- BÖREKLER, POĞAÇALAR VE TOSTLAR ---
  { id: 11, category: 'borek', name: 'Peynirli Su Böreği', price: 260, desc: 'Tereyağlı, peynirli su böreği. (223 kcal)', img: 'photos/Peynirli Su Böreği.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 12, category: 'borek', name: 'Kıymalı Kol Böreği', price: 290, desc: 'Dana kıymalı iç harcı ile çıtır kol böreği. (272 kcal)', img: 'photos/kolböreğikıymalı.webp', allergens: ['gluten', 'yumurta'] },
  { id: 13, category: 'borek', name: 'Patatesli Boşnak Böreği', price: 260, desc: 'Patates harçlı el açması Boşnak böreği. (255 kcal)', img: 'photos/Boşnak Böreği - Patatesli porsiyon.webp', allergens: ['gluten', 'yumurta'] },
  { id: 14, category: 'borek', name: 'Kıymalı Boşnak Böreği', price: 320, desc: 'Dana kıymalı geleneksel Boşnak böreği. (220 kcal)', img: 'photos/Boşnak Böreği - Kıymalı porsiyon.webp', allergens: ['gluten', 'yumurta'] },
  { id: 15, category: 'borek', name: 'Sade Poğaça', price: 40, desc: 'Taze pişmiş yumuşacık sade poğaça. (360 kcal)', img: 'photos/poğaçasade.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 16, category: 'borek', name: 'Peynirli Poğaça', price: 40, desc: 'Peynir dolgulu nefis poğaça. (368 kcal)', img: 'photos/poğaçapeynirli.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 17, category: 'borek', name: 'Dereotlu Poğaça', price: 45, desc: 'Taze dereotlu poğaça. (446 kcal)', img: 'photos/poğaçadereotlu.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 18, category: 'borek', name: 'Simit', price: 40, desc: 'Susamlı simit. (302 kcal)', img: 'photos/Sokak Simidi.webp', allergens: ['gluten', 'susam'] },
  { id: 19, category: 'borek', name: 'Beyaz Peynirli Tost', price: 180, desc: 'Ekşi mayalı tost ekmeğinde ezine peyniri, yanında mevsim yeşillikleri. (240 kcal)', img: 'photos/peynirli-tost.webp', allergens: ['gluten', 'sut'] },
  { id: 20, category: 'borek', name: 'Kaşarlı Tost', price: 180, desc: 'Ekşi mayalı tost ekmeğinde erimiş Mihaliç peyniri, yanında mevsim yeşillikleri. (275 kcal)', img: 'photos/kasarlı-tost.webp', allergens: ['gluten', 'sut'] },
  { id: 21, category: 'borek', name: 'Karışık Tost', price: 210, desc: 'Ekşi mayalı tost ekmeğinde erimiş Mihaliç peyniri ile dilim dana sucuk, yanında mevsim yeşillikleri. (292 kcal)', img: 'photos/sucuklu-tost1.webp', allergens: ['gluten', 'sut'] },


  // --- BAŞLANGIÇLAR, SANDVİÇLER & SALATALAR ---
  { id: 25, category: 'atistirmalik', name: 'Zeytinyağlı Yaprak Sarma', price: 290, desc: 'Asma yaprağı, pirinç ve zeytinyağı ile ev yapımı lezzet. (210 kcal)', img: 'photos/sarma.webp', allergens: [] },
  { id: 26, category: 'atistirmalik', name: 'Çıtır Tavuk Parçaları', price: 210, desc: 'Pane kaplamalı çıtır tavuk göğsü dilimleri, yanında baharatlı patates kızartması ile. (280 kcal)', img: 'photos/çıtırtavuk1.webp', allergens: ['gluten', 'yumurta'] },
  { id: 27, category: 'atistirmalik', name: 'Patates Kızartması', price: 150, desc: 'Baharatlı patates kızartması. (230 kcal)', img: 'photos/Patates Kızartması.webp', allergens: [] },
  { id: 28, category: 'atistirmalik', name: 'Kaşar Peynirli Baget Sandviç', price: 150, desc: 'Baget ekmeğinde taze kaşar peyniri, salatalık, domates, krem peyniri ve yeşillik. (220 kcal)', img: 'photos/peynirli-baget.webp', allergens: ['gluten', 'sut'] },
  { id: 29, category: 'atistirmalik', name: 'Peynirli Baget Sandviç', price: 150, desc: 'Baget ekmeğinde taze beyaz peyniri, salatalık, domates, krem peyniri ve yeşillik. (170 kcal)', img: 'photos/peynirli-baget.webp', allergens: ['gluten', 'sut'] },
  { id: 30, category: 'atistirmalik', name: 'Kaşarlı Salamlı Baget Sandviç', price: 160, desc: 'Baget ekmeğinde dana salam, taze kaşar peyniri, salatalık, domates ve labne. (190 kcal)', img: 'photos/salamlı-baget.webp', allergens: ['gluten', 'sut'] },
  { id: 31, category: 'atistirmalik', name: 'Tavuklu Sezar Salata', price: 270, desc: 'Izgara tavuk, kruton ekmek ve Sezar sos. (270 kcal)', img: 'photos/tavuklusezar.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 32, category: 'atistirmalik', name: 'Çıtır Tavuk Salata', price: 280, desc: 'Akdeniz yeşillikleri ve pane çıtır tavuklar ile. (280 kcal)', img: 'photos/citirtavuksalata.webp', allergens: ['gluten', 'yumurta'] },
  { id: 33, category: 'atistirmalik', name: 'Akdeniz Salata', price: 230, desc: 'Yeşillikler, beyaz peynir, mısır, domates ve zeytinyağlı sos. (230 kcal)', img: 'photos/akdenizsalata.webp', allergens: ['sut'] },
  { id: 34, category: 'atistirmalik', name: 'Ton Balıklı Salata', price: 330, desc: 'Ton balığı, haşlanmış yumurta, kırmızı soğan ve mısır ile. (330 kcal)', img: 'photos/tonbalıklısalata.webp', allergens: ['balik', 'yumurta'] },

  // --- ANA YEMEKLER, DÜRÜMLER, PİZZALAR VE MAKARNALAR ---
  { id: 35, category: 'ana-yemek', name: 'Izgara Köfte', price: 460, desc: 'Izgara köfte, pilav, patates kızartması, közlenmiş biber ve mevsim yeşillikleri ile servis edilir. (270 kcal)', img: 'photos/Köfte Porsiyon.webp', allergens: ['gluten'] },
  { id: 36, category: 'ana-yemek', name: 'Köri Soslu Tavuk', price: 380, desc: 'Özel köri soslu sotelenmiş tavuk, pilav, patates kızartması ve mevsim yeşillikleri ile servis edilir. (165 kcal)', img: 'photos/körisoslutavuk.webp', allergens: ['sut'] },
  { id: 37, category: 'ana-yemek', name: 'Aslı Burger', price: 450, desc: '160g dana burger köftesi, dana füme, karamelize soğan, cheddar, domates, patates kızartması ve mevsim yeşillikleri ile servis edilir. (295 kcal)', img: 'photos/Aslı burger.webp', allergens: ['gluten', 'sut', 'susam'] },
  { id: 38, category: 'ana-yemek', name: 'Hamburger', price: 380, desc: '160g dana köfte, yeşillik, turşu, domates, patates kızartması ve mevsim yeşillikleri ile servis edilir. (260 kcal)', img: 'photos/hamburger.webp', allergens: ['gluten', 'susam'] },
  { id: 39, category: 'ana-yemek', name: 'Cheeseburger', price: 350, desc: '160g dana köfte, cheddar peyniri, turşu, domates, patates kızartması ve mevsim yeşillikleri ile servis edilir. (280 kcal)', img: 'photos/cheeseburger.webp', allergens: ['gluten', 'sut', 'susam'] },
  { id: 40, category: 'ana-yemek', name: 'Tavuk Dürüm', price: 320, desc: 'Jülyen tavuk, kırmızı ve yeşil biber, lavaş ekmeği, cheddar, patates ve mevsim yeşillikleri ile servis edilir. (145 kcal)', img: 'photos/Tavuk Dürüm.webp', allergens: ['gluten', 'sut'] },
  { id: 41, category: 'ana-yemek', name: 'Köfte Dürüm', price: 380, desc: 'Izgara köfte,kırmızı ve yeşil biber, lavaş ekmeği, cheddar, patates ve mevsim yeşillikleri ile servis edilir. (165 kcal)', img: 'photos/Dürüm Köfte.webp', allergens: ['gluten', 'sut'] },
  { id: 45, category: 'ana-yemek', name: 'Penne Arabiata', price: 275, desc: 'Sarımsaklı, acı domates soslu penne makarna. (175 kcal)', img: 'photos/pennearabiate.webp', allergens: ['gluten', 'sut'] },
  { id: 46, category: 'ana-yemek', name: 'Spaghetti Napolitan', price: 275, desc: 'Geleneksel Napolitan domates soslu spagetti. (170 kcal)', img: 'photos/spagettinapolitan.webp', allergens: ['gluten', 'sut'] },
  { id: 47, category: 'ana-yemek', name: 'Spaghetti Bolognese', price: 310, desc: 'Kıymalı özel Bolognese soslu spagetti. (205 kcal)', img: 'photos/spagettibolonez.webp', allergens: ['gluten', 'sut'] },
  { id: 48, category: 'ana-yemek', name: 'Fettucini Alfredo', price: 325, desc: 'Tavuk göğsü, krema, mantarlı fettucini. (225 kcal)', img: 'photos/fettucino.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 49, category: 'ana-yemek', name: 'Mantı', price: 480, desc: 'Dana kıymalı ev mantısı, yoğurt ve tereyağlı sos ile. (225 kcal)', img: 'photos/Mantı Porsiyon.webp', allergens: ['gluten', 'sut', 'yumurta'] },

  // --- TATLILAR, PASTALAR & KURABİYELER ---
  { id: 50, category: 'tatli', name: 'Profiterol', price: 370, desc: 'Özel çikolata soslu profiterol topları. (315 kcal)', img: 'photos/Profiterol Porsiyon.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 51, category: 'tatli', name: 'Fırın Sütlaç', price: 320, desc: 'Geleneksel fırınlanmış sütlaç. (210 kcal)', img: 'photos/fırınsütlaç.webp', allergens: ['sut'] },
  { id: 52, category: 'tatli', name: 'Kazandibi', price: 320, desc: 'Karamelize alt tabanlı enfes sütlü tatlı. (225 kcal)', img: 'photos/kazandibi.webp', allergens: ['sut'] },
  { id: 53, category: 'tatli', name: 'Supangle', price: 320, desc: 'Yoğun çikolatalı klasik supangle. (320 kcal)', img: 'photos/supangle.webp', allergens: ['sut'] },
  { id: 54, category: 'tatli', name: 'Trileçe', price: 325, desc: 'Karamel soslu yumuşak trileçe. (245 kcal)', img: 'photos/Trileçe1.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 55, category: 'tatli', name: 'Aslı Cup', price: 255, desc: 'Krema, çilekli Aslı Cup. (260 kcal)', img: 'photos/Aslı Cup.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 56, category: 'tatli', name: 'Fıstıklı Baklava', price: 380, desc: 'Antep fıstıklı çıtır baklava. (422 kcal)', img: 'photos/baklavafıstıklı.webp', allergens: ['gluten', 'sut', 'kuruyemis'] },
  { id: 57, category: 'tatli', name: 'Cevizli Ev Baklavası', price: 330, desc: 'Bol cevizli ev baklavası. (401 kcal)', img: 'photos/cevizlievbaklavası2.webp', allergens: ['gluten', 'sut', 'kuruyemis'] },
  { id: 58, category: 'tatli', name: 'Fıstıklı Kadayıf', price: 350, desc: 'Antep fıstıklı şerbetli kadayıf. (422 kcal)', img: 'photos/kadayıfporsiyon.webp', allergens: ['gluten', 'sut', 'kuruyemis'] },
  { id: 59, category: 'tatli', name: 'Cevizli Sarı Burma', price: 320, desc: 'Cevizli sarı burma tatlısı. (401 kcal)', img: 'photos/Sarı Burma - Porsiyon.webp', allergens: ['gluten', 'sut', 'kuruyemis'] },
  { id: 60, category: 'tatli', name: 'Brownie', price: 335, desc: 'Çikolatalı, vişneli brownie. (450 kcal)', img: 'photos/brownie.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 61, category: 'tatli', name: 'Böğürtlenli Cheesecake', price: 290, desc: 'Labne ve taze böğürtlen soslu cheesecake. (538 kcal)', img: 'photos/böğürtlenlicheesecake.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 62, category: 'tatli', name: 'Fıstıklı Cheesecake', price: 290, desc: 'Antep fıstıklı cheesecake. (390 kcal)', img: 'photos/fıstıklıcheesecake.webp', allergens: ['gluten', 'sut', 'yumurta', 'kuruyemis'] },
  { id: 63, category: 'tatli', name: 'Fıstıklı Krokanlı Pasta', price: 315, desc: 'Fıstık ve çıtır krokan parçalı pasta. (322 kcal)', img: 'photos/fıstıklıkrokanlı.webp', allergens: ['gluten', 'sut', 'yumurta', 'kuruyemis'] },
  { id: 64, category: 'tatli', name: 'Muzlu Show Pasta', price: 335, desc: 'Hafif krema dolgulu muzlu pasta. (421 kcal)', img: 'photos/muzlupasta.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 65, category: 'tatli', name: 'Fıstıklı Çikolatalı Show Pasta', price: 335, desc: 'Çikolata ve Antep fıstıklı pasta. (421 kcal)', img: 'photos/cikolatalıshow.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 66, category: 'tatli', name: 'San Sebastian', price: 320, desc: 'Lezzetli İspanyol cheesecake. (420 kcal)', img: 'photos/San Sebastian Dilimlow.webp', allergens: ['sut', 'yumurta'] },
  { id: 67, category: 'tatli', name: 'Tiramisu', price: 300, desc: 'Kahveli İtalyan tatlısı. (421 kcal)', img: 'photos/tiramisudilim.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 68, category: 'tatli', name: 'Aslı Cookie', price: 140, desc: 'Esmer şeker ve parça çikolatalı ev yapımı kurabiye. (441 kcal)', img: 'photos/cookie.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 69, category: 'tatli', name: 'Kurabiye Tabağı', price: 260, desc: 'Elmalı, tahinli, cazibe, ballı cevizli, kavala. (340 kcal)', img: 'photos/kurabiye.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 70, category: 'tatli', name: 'Kurabiye (Adet)', price: 60, desc: 'Elmalı, tahinli, cazibe, ballı cevizli, kavala. (441 kcal)', img: 'photos/kurabiye.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 71, category: 'tatli', name: 'Dondurma (Porsiyon)', price: 300, desc: '4 top dondurma.', img: 'photos/dondurma.webp', allergens: ['gluten', 'sut', 'yumurta'] },
  { id: 72, category: 'tatli', name: 'Dondurma (Top)', price: 75, desc: 'Vanilyalı, çikolatalı, çilekli, italyan karamel, bal badem, karamel, limonlu.', img: 'photos/dondurma.webp', allergens: ['gluten', 'sut', 'yumurta'] },

  // --- SICAK İÇECEKLER ---
  { id: 73, category: 'sicak-icecek', name: 'Aslı Çay', price: 50, desc: 'Geleneksel taze demlenmiş bardak Aslı çay.', img: 'photos/çay.webp', allergens: [] },
  { id: 74, category: 'sicak-icecek', name: 'Aslı Fincan Çay', price: 70, desc: 'Büyük fincanda demlenmiş Aslı çay.', img: 'photos/fincan02.webp', allergens: [] },
  { id: 75, category: 'sicak-icecek', name: 'Bitki Çayları', price: 150, desc: 'Ihlamur, adaçayı, yeşil çay seçenekleri.', img: 'photos/Aslı Bardak kahve (1).webp', allergens: [] },
  { id: 76, category: 'sicak-icecek', name: 'Türk Kahvesi', price: 120, desc: 'Geleneksel köpüklü Türk kahvesi.', img: 'photos/Türk kahvesi.webp', allergens: [] },
  { id: 77, category: 'sicak-icecek', name: 'Duble Türk Kahvesi', price: 140, desc: 'Duble fincanda sunulan Türk kahvesi.', img: 'photos/Türk kahvesi.webp', allergens: [] },
  { id: 78, category: 'sicak-icecek', name: 'Caffe Latte', price: 160, desc: 'Espresso ve sıcak süt. (120 kcal)', img: 'photos/Buzlu Latte.webp', allergens: ['sut'] },
  { id: 79, category: 'sicak-icecek', name: 'Caramel Latte', price: 190, desc: 'Karamel aromalı sıcak Caffe Latte. (180 kcal)', img: 'photos/Aslı Karamelli Frappe.webp', allergens: ['sut'] },
  { id: 80, category: 'sicak-icecek', name: 'Cappuccino', price: 160, desc: 'Yoğun espresso ve süt köpüğü. (90 kcal)', img: 'photos/Aslı Espresso Frappe.webp', allergens: ['sut'] },
  { id: 81, category: 'sicak-icecek', name: 'Caffe Mocha', price: 175, desc: 'Espresso, çikolata sosu ve süt. (210 kcal)', img: 'photos/Buzlu Mocha.webp', allergens: ['sut'] },
  { id: 82, category: 'sicak-icecek', name: 'White Chocolate Mocha', price: 175, desc: 'Beyaz çikolata soslu Caffe Mocha. (240 kcal)', img: 'photos/Buzlu White Chocolate Mocha.webp', allergens: ['sut'] },
  { id: 83, category: 'sicak-icecek', name: 'Americano', price: 140, desc: 'Sıcak su ile inceltilmiş zengin espresso. (3 kcal)', img: 'photos/espresso_americano.webp', allergens: [] },
  { id: 84, category: 'sicak-icecek', name: 'Espresso', price: 100, desc: 'Yoğun ve taze çekilmiş kahve özü. (3 kcal)', img: 'photos/espresso_americano.webp', allergens: [] },
  { id: 85, category: 'sicak-icecek', name: 'Duble Espresso', price: 140, desc: 'Çift shot zengin espresso. (6 kcal)', img: 'photos/espresso_americano.webp', allergens: [] },
  { id: 86, category: 'sicak-icecek', name: 'Filtre Kahve', price: 130, desc: 'Taze demlenmiş filtre kahve. (2 kcal)', img: 'photos/Filtre Kahve Paket Aslılow.webp', allergens: [] },
  { id: 87, category: 'sicak-icecek', name: 'Salep', price: 175, desc: 'Tarçın süslemeli geleneksel sıcak salep. (185 kcal)', img: 'photos/çay.webp', allergens: ['sut'] },
  { id: 88, category: 'sicak-icecek', name: 'Sıcak Çikolata', price: 175, desc: 'Yoğun kıvamlı çikolatalı sıcak içecek. (230 kcal)', img: 'photos/Aslı Çikolatalı Frappe 2.webp', allergens: ['sut'] },

  // --- SOĞUK İÇECEKLER ---
  { id: 89, category: 'soguk-icecek', name: 'Iced Americano', price: 140, desc: 'Espresso ve soğuk suyun buzla eşsiz uyumu. (39 kcal)', img: '', allergens: [] },
  { id: 90, category: 'soguk-icecek', name: 'Iced Caffe Latte', price: 160, desc: 'Süt ve süt ürünleri içerir. İz miktarda soya içerebilir. (155 kcal)', img: '', allergens: ['sut'] },
  { id: 91, category: 'soguk-icecek', name: 'Iced Caffe Mocha', price: 190, desc: 'Süt ve süt ürünleri içerir. İz miktarda soya içerebilir. (213 kcal)', img: '', allergens: ['sut'] },
  { id: 92, category: 'soguk-icecek', name: 'Iced White Chocolate Mocha', price: 190, desc: 'Süt ve süt ürünleri içerir. İz miktarda soya içerebilir. (240 kcal)', img: '', allergens: ['sut'] },
  { id: 93, category: 'soguk-icecek', name: 'Frappe', price: 200, desc: 'Süt ve süt ürünleri içerir. İz miktarda soya içerebilir. (260 kcal)', img: '', allergens: ['sut'] },
  { id: 94, category: 'soguk-icecek', name: 'Frozen', price: 200, desc: 'Farklı meyve aromalı seçenekleriyle ferahlatıcı buzlu içecek. (180 kcal)', img: '', allergens: [] },
  { id: 95, category: 'soguk-icecek', name: 'Milkshake', price: 190, desc: 'Süt ve süt ürünleri içerir. İz miktarda soya içerebilir. (320 kcal)', img: '', allergens: ['sut'] },
  { id: 96, category: 'soguk-icecek', name: 'Limonata (Normal Boy)', price: 140, desc: 'Ev yapımı ferahlatıcı taze limonata. (110 kcal)', img: '', allergens: [] },
  { id: 97, category: 'soguk-icecek', name: 'Limonata (Büyük Boy)', price: 185, desc: 'Ev yapımı ferahlatıcı taze limonata. (110 kcal)', img: '', allergens: [] },
  { id: 98, category: 'soguk-icecek', name: 'Çilekli Limonata (Normal Boy)', price: 160, desc: 'Taze çilek aromalı ev yapımı limonata. (145 kcal)', img: '', allergens: [] },
  { id: 99, category: 'soguk-icecek', name: 'Çilekli Limonata (Büyük Boy)', price: 200, desc: 'Taze çilek aromalı ev yapımı limonata. (145 kcal)', img: '', allergens: [] },
  { id: 100, category: 'soguk-icecek', name: 'Portakal Suyu', price: 195, desc: 'Taze sıkılmış doğal portakal suyu. (110 kcal)', img: '', allergens: [] },

  // --- SOFT İÇECEKLER ---
  { id: 101, category: 'soft-icecek', name: 'Ayran', price: 60, desc: 'Soğuk ve taze ayran. (68 kcal)', img: '', allergens: ['sut'] },
  { id: 102, category: 'soft-icecek', name: 'Beyoğlu Gazoz', price: 90, desc: 'Geleneksel Beyoğlu gazozu. (100 kcal)', img: '', allergens: [] },
  { id: 103, category: 'soft-icecek', name: 'Meyve Suyu', price: 65, desc: 'Çeşitli meyve aromalı soğuk meyve suları. (105 kcal)', img: '', allergens: [] },
  { id: 104, category: 'soft-icecek', name: 'Meysu Kola', price: 90, desc: 'Soğuk Meysu kola. (163 kcal)', img: '', allergens: [] },
  { id: 105, category: 'soft-icecek', name: 'Meysu Portakal', price: 90, desc: 'Portakal aromalı soğuk gazlı içecek. (168 kcal)', img: '', allergens: [] },
  { id: 106, category: 'soft-icecek', name: 'Churchill', price: 85, desc: 'Limon suyu, soda ve tuz karışımı ferahlatıcı içecek. (40 kcal)', img: '', allergens: [] },
  { id: 107, category: 'soft-icecek', name: 'Sade Soda', price: 65, desc: 'Doğal mineralli sade maden suyu. (0 kcal)', img: '', allergens: [] },
  { id: 108, category: 'soft-icecek', name: 'Su', price: 35, desc: 'Şişe içme suyu. (0 kcal)', img: '', allergens: [] }
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
  const categoryOrder = ['kahvalti', 'borek', 'atistirmalik', 'ana-yemek', 'tatli', 'sicak-icecek', 'soguk-icecek', 'soft-icecek'];
  const categoryNames = {
    'kahvalti': 'Kahvaltı & Yumurta',
    'borek': 'Börek & Tost',
    'atistirmalik': 'Sandviç & Salata',
    'ana-yemek': 'Ana Yemek & Pasta',
    'tatli': 'Tatlılar',
    'sicak-icecek': 'Sıcak İçecekler',
    'soguk-icecek': 'Soğuk İçecekler',
    'soft-icecek': 'Soft İçecekler'
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
        const isBeverage = ['sicak-icecek', 'soguk-icecek', 'soft-icecek'].includes(item.category);
        const card = document.createElement('div');
        card.className = `menu-card${isBeverage ? ' no-image' : ''}`;

        let descText = item.desc;
        let kcalHtml = '';
        const kcalMatch = descText.match(/\s*\((\d+\s*kcal)\)/i);
        if (kcalMatch) {
          const kcalValue = kcalMatch[1];
          descText = descText.replace(kcalMatch[0], '').trim();
          kcalHtml = `<span class="kcal-badge"><i class="fa-solid fa-fire"></i> ${kcalValue}</span>`;
        }

        let allergenHtml = '';
        if ((item.allergens && item.allergens.length > 0) || kcalHtml) {
          allergenHtml = `<div class="card-allergens">`;
          if (item.allergens && item.allergens.length > 0) {
            item.allergens.forEach(allg => {
              let iconClass = '';
              let titleText = '';
              let faIcon = '';
              if (allg === 'gluten') {
                iconClass = 'gluten';
                titleText = 'Glüten içerir';
                faIcon = '<i class="fa-solid fa-wheat-awn"></i>';
              } else if (allg === 'sut') {
                iconClass = 'sut';
                titleText = 'Süt ve Süt Ürünleri içerir';
                faIcon = '<i class="fa-solid fa-cow"></i>';
              } else if (allg === 'yumurta') {
                iconClass = 'yumurta';
                titleText = 'Yumurta içerir';
                faIcon = '<i class="fa-solid fa-egg"></i>';
              } else if (allg === 'kuruyemis') {
                iconClass = 'kuruyemis';
                titleText = 'Kuruyemiş içerir';
                faIcon = '<i class="fa-solid fa-seedling"></i>';
              } else if (allg === 'balik') {
                iconClass = 'balik';
                titleText = 'Balık içerir';
                faIcon = '<i class="fa-solid fa-fish"></i>';
              } else if (allg === 'susam') {
                iconClass = 'susam';
                titleText = 'Susam içerir';
                faIcon = '<i class="fa-solid fa-circle-nodes"></i>';
              }
              if (iconClass) {
                allergenHtml += `<span class="allergen-badge-icon ${iconClass}" title="${titleText}">${faIcon}</span>`;
              }
            });
          }
          allergenHtml += kcalHtml;
          allergenHtml += `</div>`;
        }

        card.innerHTML = `
          ${!isBeverage ? `<img src="${item.img}" alt="${item.name}">` : ''}
          <div class="card-body">
            ${allergenHtml}
            <h3>${item.name}</h3>
            <p>${descText}</p>
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