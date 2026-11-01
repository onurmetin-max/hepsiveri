---
title: "IDMerit kimlik doğrulama veri sızıntısı: Dijital kimlik doğrulamada küresel risk, Türkiye'de 49 milyon kayıt iddiası"
description: "Kasım 2025'te IDMerit ile ilişkilendirilen korumasız bir veritabanının kısa süreliğine internete açık kaldığı raporlandı. Olay, \"hack\"ten çok yanlış yapılandırma kaynaklı bir ..."
pubDate: 2026-02-24T10:59:56+03:00
category: "Genel"
author: "Onur Metin"
status: "Yayında"
readTime: "6 dk okuma"
heroImage: "/uploads/idmerit-verisizintisi.webp"
---

<article id="hv-idmerit-kyc-veri-sizintisi-2026" class="hv-article"><header>
<p class="hv-spot">Kasım 2025'te IDMerit ile ilişkilendirilen korumasız bir veritabanının kısa süreliğine internete açık kaldığı raporlandı.</p>
<p class="hv-spot">Olay, "hack"ten çok yanlış yapılandırma kaynaklı bir veri sızıntısı olarak anlatılıyor.
<strong>Şubat 2026</strong>'da kamuoyuna yansıyan yayınlar, 26 ülkede yaklaşık 1 milyar benzersiz kayıt ölçeğinde bir maruziyete işaret ediyor.</p>
<p class="hv-spot">Türkiye içinse farklı kaynaklarda 46-49 milyon bandında kayıt iddiası yer alıyor.</p>

</header><section>
<h2>Ne oldu?</h2>
Cybernews araştırmacıları, 11 Kasım 2025 tarihinde parola koruması ve anlamlı erişim kontrolleri olmayan bir MongoDB veritabanı tespit etti. İçerik ve yapı işaretleri, veritabanının IDMerit ile bağlantılı olabileceğine işaret ediyordu.

İlk raporlarda 3 milyarın üzerinde kayıt hacminden bahsedildi. Tekrar eden kayıtlar ayrıştırıldıktan sonra yaklaşık 1 milyar benzersiz kişisel kayıt ölçeği öne çıktı.

<img class="aligncenter size-full wp-image-2104" src="/uploads/id-merit-hv.webp" alt="" width="859" height="586" />

Bildirimin 12 Kasım 2025'te yapıldığı ve veritabanının aynı gün çevrimdışına alındığı aktarıldı. Bu nedenle vaka, sofistike bir dış saldırıdan ziyade operasyonel güvenlik açığı (yanlış yapılandırma) çerçevesinde ele alınıyor.

<aside class="hv-note-box">
<blockquote class="td_quote td_quote_left">
<h3>"Kısa süre açık kaldı" demek "kısa süre risk" demek değil</h3>
Bu tip sızıntılarda maruziyet penceresi kısa olsa bile, veri bir kez kopyalandıysa risk yıllara yayılabilir. Etki, olay gününün ötesine taşabilir.</blockquote>
</aside></section><section>
<h2>Ölçek ve coğrafya: 26 ülkede kimlik doğrulama havuzu</h2>
Vakayı sıradan bir veri ihlali olmaktan çıkaran şey, hem ülke kapsamı hem de KYC (Know your customer - müşterini tanı) süreçlerinin doğası gereği veri setinin "tam profil" kurmaya elverişli olması.
Raporlamalara göre sızıntı 26 ülkeye yayılıyor ve bazı ülkelerde yüz milyonlara ulaşan kayıt kümeleri raporlanıyor.

Bu tablo, kimlik doğrulama tedarik zincirinin finansal sistem için kritik bir altyapı katmanı haline geldiğini gösteriyor: tek bir üçüncü taraf sağlayıcıdaki operasyonel zafiyet, aşağı akışta (bankalar, fintekler, kripto platformları) risk yüzeyini genişletebiliyor.

</section><section>
<h2>Türkiye bölümü: 46-49 milyon kayıt iddiası ne söylüyor?</h2>
Türkiye açısından en kritik başlık, farklı yayınlarda yer alan 46-49 milyon bandındaki kayıt iddiası. Bu aralık, raporlama ve sayım yöntemlerinin farklılığından kaynaklanıyor. Ancak ortak mesaj net:
<blockquote class="td_quote_box td_box_center"><strong>Türkiye, ülke kırılımlarında yüksek maruziyet grubunda anılıyor.</strong></blockquote>
HepsiVeri'nin bu dosya için yaptığı kaynak taramasında (Cybernews, TechRadar, Tom's Guide, SC Media ve Türkiye'deki haberler), Türkiye'ye ilişkin sayıların farklı biçimlerde verildiği ama hepsinin "nüfusun büyük kısmına yaklaşan stratejik hacim" fikrinde buluştuğu görülüyor. Bu nedenle mesele, sadece bireysel mağduriyet riski değil; kimlik doğrulama altyapısında yönetişim ve denetim kapasitesi sorusu.
<h3>Türkiye'de hangi tür bilgiler risk altına girmiş olabilir?</h3>
KYC süreçleri gereği bu tür sistemlerde tutulan alanlar, kimlik doğrulamanın tam paketini oluşturuyor. Raporlanan alanlar özetle şunlar:
<ul>
 	<li>Ad-soyad, tam adres, posta kodu</li>
 	<li>Doğum tarihi ve cinsiyet</li>
 	<li>Ulusal kimlik numarası türleri (ülkeye göre değişen "national ID" alanları)</li>
 	<li>Cep telefonu ve e-posta adresi</li>
 	<li>Telekom operatörü ve hatla ilişkili üstveriler (telco metadata)</li>
 	<li>Kısmen sosyal profil notları ve "breach status" benzeri etiketler</li>
</ul>
Bu kombinasyonun risk seviyesi, tek tek alanlardan değil, alanların aynı profilde birleşmesinden geliyor. Bu da hedefli dolandırıcılık, hesap ele geçirme ve kimlik doğrulama akışlarında suistimal senaryolarını daha uygulanabilir hale getirebiliyor.
<h3>Türkiye'de pratik risk: SIM swap ve hesap ele geçirme</h3>
Telefon numarası, ulusal kimlik türleri ve telekom üstverilerinin aynı veri setinde bulunması, sosyal mühendisliği güçlendiriyor. Bu da SIM swap (hat devralma) ve SMS tabanlı iki adımlı doğrulama kullanılan hesaplarda ele geçirme riskini büyütüyor. Risk, "tek seferlik panik"ten çok uzun vadeli ve hedefli suistimal ihtimali olarak okunmalı.
<blockquote class="td_quote_box td_box_center">
<p style="text-align: left;">SIM swap saldırısı, genellikle iki faktörlü kimlik doğrulama (2FA) veya iki adımlı doğrulama süreçlerindeki bir zayıflığı hedef alan bir hesap ele geçirme dolandırıcılığı türüdür. Bu tür saldırılarda ikinci faktör ya da doğrulama adımı, cep telefonuna gönderilen bir kısa mesaj (SMS) ya da yapılan bir arama üzerinden gerçekleştirilir. SIM kartı üzerinden telefon numaranız geçici ya da kalıcı olarak ele geçirilebilir.</p>
</blockquote>
Türkiye'de geçmişte, bankacılık sistemlerinde benzer vakalar görülmüştü. Mağdurun banka hesabına bağlı telefon numarasını başka bir operatörden çıkartan kişi, bunu onaylatarak ya da onaylatmadan banka sistemlerini kullanmış ve hesaplarını boşaltmıştı. Günümüzde hat değişikliğinde onay mekanizmaları ya da arama gibi faaliyetler olsa da bunları atlatmak da imkansız değil.

<img class="aligncenter size-large wp-image-2103" src="/uploads/riskakisidiyagrami--1024x486.webp" alt="" width="696" height="330" />
<h3>KVKK perspektifi: sınır ötesi veri ve üçüncü taraf denetimi</h3>
Türkiye'de kişisel verilerin korunması KVKK çerçevesinde yürüyor. Bu vaka, yurt dışına veri aktarımı ve üçüncü taraf hizmet sağlayıcı yönetimi başlıklarını yeniden öne çıkarıyor.

Uygulamada şu sorular büyüyor: Veriler yurt dışında hangi kontrollerle saklanıyor, kimler erişiyor, denetlenebilirlik nasıl sağlanıyor ve finansal kurumlar tedarikçi seçiminde güvenlik standardını nasıl doğruluyor?

</section><section>
<h2>Türkiye'deki kullanıcılar için pratik adımlar</h2>
Bu tür olaylarda "bir kere yap ve unut" yaklaşımı çalışmıyor. Veri bir kez dışarı çıktıysa, risk zamana yayılabilir. Bu yüzden operasyonel hijyen ve izleme kapasitesi kritik.
<ul>
 	<li>Her servis için farklı ve güçlü şifre kullanın; kritik hesaplarda şifre yenileyin. AYNI ŞİFRE İKİ AYRI HESAPTA OLURSA, RİSK BÜYÜR.</li>
 	<li>İki adımlı doğrulama kullanın; mümkünse SMS yerine doğrulayıcı uygulama (authenticator) veya donanım anahtarı tercih edin.</li>
 	<li>Telekom operatörünüzle görüşüp SIM swap riskine karşı ek güvenlik adımları (ek parola, değişim kısıtı, ek doğrulama) talep edin.</li>
 	<li>Banka ve kart işlemlerinde anlık bildirimleri açın; ekstreleri düzenli kontrol edin ve şüpheli işlemlerde hızlı itiraz kanallarını kullanın.</li>
 	<li>Dijital güvenlik, her durumda gerekli. Gerekiyorsa bir uzmandan destek alın.</li>
</ul>
</section><section>
<h2>Kimlik doğrulama artık altyapı, altyapı da disiplin ister</h2>
IDMerit vakası, kimlik doğrulama hizmetlerinin finans ve dijital servisler için kritik bir altyapı katmanı haline geldiğini bir kez daha hatırlatıyor.
Yanlış yapılandırma gibi "basit" görünen bir operasyonel hata bile, çok uluslu ve çok kurumlu bir risk yüzeyi üretebiliyor.

Türkiye için raporlanan 46-49 milyon bandı da bu riskin yerel ölçekte yüksek hacimli bir kırılganlık tartışmasına dönüştüğünü düşündürüyor.

Haber: Onur Metin | HepsiVeri

</section><footer>
<h2>Kaynakça</h2>
<ul class="hv-sources">
 	<li>IDMerit data breach: 1 billion records of personal data exposed in KYC data leak - 18 Şubat 2026 -
<a href="https://cybernews.com/security/global-data-leak-exposes-billion-records/">https://cybernews.com/security/global-data-leak-exposes-billion-records/</a></li>
 	<li>Massive global data breach sees over a billion records exposed - here's what we know so far - 19 Şubat 2026 -
<a href="https://www.techradar.com/pro/security/massive-global-data-breach-sees-over-a-billion-records-exposed-heres-what-we-know-so-far">https://www.techradar.com/pro/security/massive-global-data-breach-sees-over-a-billion-records-exposed-heres-what-we-know-so-far</a></li>
 	<li>New AI Data Leak Alert - 1 Billion IDs, Emails And Phone Numbers Exposed - 19 Şubat 2026 -
<a href="https://www.forbes.com/sites/daveywinder/2026/02/19/new-ai-data-leak-alert-1-billion-ids-emails-and-phone-numbers-exposed/">https://www.forbes.com/sites/daveywinder/2026/02/19/new-ai-data-leak-alert-1-billion-ids-emails-and-phone-numbers-exposed/</a></li>
 	<li>1 billion personal records exposed in massive new data leak - full names, addresses, phone numbers and more - 18 Şubat 2026 -
<a href="https://www.tomsguide.com/computing/online-security/1-billion-personal-records-from-26-countries-exposed-in-massive-new-data-leak-how-to-stay-safe">https://www.tomsguide.com/computing/online-security/1-billion-personal-records-from-26-countries-exposed-in-massive-new-data-leak-how-to-stay-safe</a></li>
 	<li>Massive global KYC data leak exposes billions of personal records - 18 Şubat 2026 -
<a href="https://londonlovestech.com/massive-global-kyc-data-leak-exposes-billions-of-personal-records/">https://londonlovestech.com/massive-global-kyc-data-leak-exposes-billions-of-personal-records/</a></li>
 	<li>Billions of records exposed by unsecured IDMerit database - 19 Şubat 2026 -
<a href="https://www.scworld.com/brief/billions-of-records-exposed-by-unsecured-idmerit-database">https://www.scworld.com/brief/billions-of-records-exposed-by-unsecured-idmerit-database</a></li>
 	<li>IDMerit data breach: 1 billion records of personal data exposed in KYC data leak -
<a href="https://fincrimecentral.com/idmerit-kyc-data-one-billion-records-exposed/">https://fincrimecentral.com/idmerit-kyc-data-one-billion-records-exposed/</a></li>
 	<li>The IDMart (IDMerit) Data Leak: A Goldmine for Cybercriminals - (Şubat 2026, sayfada kesin tarih yerine göreli ifade kullanılıyor) -
<a href="https://www.firestormcyber.com/post/the-idmart-idmerit-data-leak-a-goldmine-for-cybercriminals">https://www.firestormcyber.com/post/the-idmart-idmerit-data-leak-a-goldmine-for-cybercriminals</a></li>
 	<li>Kimlik doğrulama şirketi IDMerit, 46 milyon Türk'ün verisini sızdırdı - 22 Şubat 2026 02:15 -
<a href="https://www.turkiyegazetesi.com.tr/teknoloji/kimlik-dogrulama-sirketi-idmerit-46-milyon-turkun-verisini-sizdirdi-1772493">https://www.turkiyegazetesi.com.tr/teknoloji/kimlik-dogrulama-sirketi-idmerit-46-milyon-turkun-verisini-sizdirdi-1772493</a></li>
 	<li>Yapay Zeka Tabanlı IDMerit'ten Büyük Veri Sızıntısı: Türkiye'den 49 Milyon Kayıt Etkilendi - 21 Şubat 2026 -
<a href="https://www.kulis.tv/yapay-zeka-kimlik-dogrulama-hizmeti-idmeritten-milyar-kisilik-veri-sizintisi/39416/">https://www.kulis.tv/yapay-zeka-kimlik-dogrulama-hizmeti-idmeritten-milyar-kisilik-veri-sizintisi/39416/</a></li>
 	<li>Yurt Dışına Aktarım - 31 Ocak 2018 -
<a href="https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim">https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim</a></li>
 	<li>Kişisel Verilerin Yurt Dışına Aktarılması Rehberi (KVKK Yayınları No: 48) - Ocak 2025 -
<a href="https://www.kvkk.gov.tr/Icerik/8142/Kisisel-Verilerin-Yurt-Disina-Aktarilmasi-Rehberi">https://www.kvkk.gov.tr/Icerik/8142/Kisisel-Verilerin-Yurt-Disina-Aktarilmasi-Rehberi</a></li>
</ul>
</footer></article>
