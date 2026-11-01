---
title: "Asgari ücret 28.075 tl oldu. Reel ücret erimesi: Asgari ücret, kamu maaşları ve emekli aylığı - TÜFE karşısında (2015 referansı + 2022-2025 yakın seri) nasıl eridi?"
description: "TCMB'nin yayımladığı tabloda yer alan TÜİK verilerine göre, Kasım 2025'te TÜFE (Tüketici Fiyat Endeksi) aylık %0,87 arttı. Yıllık enflasyon ise %31,07'ye geriledi. Manşetteki ..."
pubDate: 2025-12-22
category: "Ekonomi"
author: "Onur Metin"
status: "Yayında"
readTime: "7 dk okuma"
heroImage: "/uploads/para.jpg"
---

TCMB'nin yayımladığı tabloda yer alan TÜİK verilerine göre, Kasım 2025'te TÜFE (Tüketici Fiyat Endeksi) aylık %0,87 arttı. Yıllık enflasyon ise %31,07'ye geriledi. Manşetteki bu "dezenflasyon görünümü", hanehalkı tarafında tek başına bir rahatlama vaadi taşımıyor. Çünkü gelirler (asgari ücret, kamu maaşları, emekli aylıkları) yıl içinde ne kadar seyrek güncelleniyorsa, satın alma gücü kaybı o kadar "kademeli ve birikimli" şekilde hissediliyor.

İlk önce bir son dakika bilgisi: 23 Aralık 2025 akşam saatlerinde aldığımız bilgiye göre, 2026 yılında asgari ücret 28.075 TL olarak belirlendi. Peki, asgari ücret yıllara göre nasıl değişti?

Bu haber, "reel ücret erimesi"ni bir panel mantığıyla ele alıyor: Nominal gelir sabitken fiyat seviyesi yükselir, aradaki fark ise pratikte "endeks açığı" gibi çalışır. Analizde TÜİK'in aylık TÜFE değişimlerini TCMB'nin derlediği tabloda yer alan seri üzerinden bileşik (compound) hesapla biriktirdik.
<h3><span style="font-family: terminal, monaco, monospace;">Metot</span></h3>
<ul>
 	<li><span style="font-family: terminal, monaco, monospace;">Fiyatlar bir dönemde %X artarsa, aynı nominal gelirin satın alma gücü <strong>1 / (1+X)</strong> oranına iner. Örnek: Fiyatlar %29,74 artarsa, satın alma gücü yaklaşık <strong>%22,93</strong> azalır.</span></li>
 	<li><span style="font-family: terminal, monaco, monospace;">"Dönem TÜFE birikimi", ilgili ayların aylık enflasyon oranlarının bileşik çarpımıyla hesaplanır (Ocak'tan Kasım'a kadar her ayın etkisi üst üste biner). (<a title="TCMB - Tüketici Fiyatları" href="https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB%2BTR/Main%2BMenu/Istatistikler/Enflasyon%2BVerileri/Tuketici%2BFiyatlari">Türkiye Cumhuriyet Merkez Bankası</a>, Tüketici Fiyatları)</span></li>
</ul>
<h2>Asgari ücrette güncelleme periyodu uzadıkça, erime daha görünür hale geliyor</h2>
Asgari ücrette kritik parametre, sadece zam oranının seviyesi değil, <strong>zam takvimi</strong>. Örneğin 2015'te yıl içinde iki dönem vardı. 2022 ve 2023'te yüksek enflasyon rejimi, yıl ortası "ara zam" mekanizmasını geri getirdi. 2024 ve 2025'te ise yeniden tek dönemli yapı baskınlaşmıştır.
<ul>
 	<li><strong>2025</strong> net asgari ücret: <strong>22.104,67 TL</strong> (01.01.2025 itibarıyla). (ÇSGB, 2025)</li>
 	<li>Kasım 2025 itibarıyla yıl başından bu yana biriken TÜFE: <strong>%29,74</strong>. (TCMB)</li>
 	<li>Bu, "nominal sabit" bir ücret için satın alma gücünde yaklaşık <strong>%22,93</strong>'lük bir aşınma demek. (Matematik: 1/(1+0,2974))</li>
 	<li><strong>2024</strong> net asgari ücret: <strong>17.002,12 TL</strong> (01.01.2024 itibarıyla). (ÇSGB, 2024)</li>
 	<li>2024 Aralık/Aralık TÜFE birikimi: <strong>%44,37</strong>. (TCMB)
Yani 2024 boyunca nominal asgari ücret değişmediyse, ki değişmedi; yıl sonuna gelindiğinde satın alma gücü yaklaşık <strong>%30,74</strong> aşınmış olur.</li>
</ul>
<h3>Asgari ücretin "dönem sonu reel değeri" tablosu (2015 referansı + 2022-2025)</h3>
Aşağıdaki tabloda "dönem sonu reel değer", ilgili dönemdeki nominal ücretin dönem sonundaki satın alma gücünün, dönem başı fiyatlarıyla karşılığını verir (deflate edilmiş bakış).
<div class="hv-table-wrap">
<table class="hv-table">
<thead>
<tr>
<th>Dönem</th>
<th class="hv-num">Net asgari ücret (TL/ay)</th>
<th class="hv-num">Dönem TÜFE birikimi</th>
<th class="hv-num">Dönem sonu reel değer (dönem başı fiyatlarıyla, TL)</th>
</tr>
</thead>
<tbody>
<tr>
<td>2015 1Y (Oca-Haz)</td>
<td class="hv-num">949,07</td>
<td class="hv-num">%4,76</td>
<td class="hv-num">905,96</td>
</tr>
<tr>
<td>2015 2Y (Tem-Ara)</td>
<td class="hv-num">1.000,54</td>
<td class="hv-num">%3,86</td>
<td class="hv-num">963,32</td>
</tr>
<tr>
<td>2022 1Y (Oca-Haz)</td>
<td class="hv-num">4.253,40</td>
<td class="hv-num">%42,34</td>
<td class="hv-num">2.988,13</td>
</tr>
<tr>
<td>2022 2Y (Tem-Ara)</td>
<td class="hv-num">5.500,35</td>
<td class="hv-num">%15,39</td>
<td class="hv-num">4.766,66</td>
</tr>
<tr>
<td>2023 1Y (Oca-Haz)</td>
<td class="hv-num">8.506,80</td>
<td class="hv-num">%19,78</td>
<td class="hv-num">7.101,87</td>
</tr>
<tr>
<td>2023 2Y (Tem-Ara)</td>
<td class="hv-num">11.402,32</td>
<td class="hv-num">%37,57</td>
<td class="hv-num">8.288,48</td>
</tr>
<tr>
<td>2024 (Oca-Haz)</td>
<td class="hv-num">17.002,12</td>
<td class="hv-num">%24,73</td>
<td class="hv-num">13.631,12</td>
</tr>
<tr>
<td>2024 (Yıl sonu)</td>
<td class="hv-num">17.002,12</td>
<td class="hv-num">%44,37</td>
<td class="hv-num">11.776,50</td>
</tr>
<tr>
<td>2025 (Oca-Haz)</td>
<td class="hv-num">22.104,67</td>
<td class="hv-num">%16,67</td>
<td class="hv-num">18.946,41</td>
</tr>
<tr>
<td>2025 (Oca-Kas)</td>
<td class="hv-num">22.104,67</td>
<td class="hv-num">%29,74</td>
<td class="hv-num">17.037,17</td>
</tr>
</tbody>
</table>
</div>
<strong>Kaynak notu (ücret):</strong> 2015 net asgari ücret iki dönem halinde 949,07 TL ve 1.000,54 TL olarak yer alır. (<a title="2015 Yılı Asgari Ücret Tutarları" href="https://iskanunu.com/haberler/2348-asgari-ucret-2015/">iskanunu.com</a>) 2022-2025 net tutarlar, ilgili yıl duyuruları ve "net hesap / işverene maliyet" tablolarından alınmıştır. (<a title="2022 yılı asgari ücreti brüt 5.004 TL, net 4.253,40 TL olarak ..." href="https://www.csgb.gov.tr/cgm/haberler/16-12-2021/">ÇSGB, 2021</a>)
<div class="flourish-wrapper">
<div class="flourish-embed flourish-chart" data-src="visualisation/26930213"><noscript><img src="https://public.flourish.studio/visualisation/26930213/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
</div>
Bu panelin alt mesajı net: <strong>Yıllık enflasyon düşüyor olsa bile, yıl içinde güncellenmeyen ücrette reel kayıp "stok" gibi birikir.</strong> 2024'te tek güncelleme ve yıl içi yüksek enflasyon kombinasyonu, erimeyi daha görünür kılmıştır. 2025'te manşet enflasyon düşse de yıl başından itibaren biriken fiyat artışı, ücretin yıl içindeki satın alma gücünü aşındırmaya devam etmiştir. (TCMB)
<h2>Kamu maaşları: "katsayı" mekaniği, ama asıl belirleyici yarım yıl birikimi</h2>
Kamu maaşları, teknik olarak "mali ve sosyal haklar" kapsamında katsayı ve gösterge sistemiyle çalışır. Maaşlar, yıl içinde katsayıların güncellenmesi, taban aylık, yan ödeme ve farklı kalemlerin de otomatik revizyonunu tetikler. 2015 Ocak dönemine ilişkin genelgede uygulanan aylık katsayı gibi parametreler bu mekaniğin omurgasıdır. (Maliye Bakanlığı Genelgesi * 2015 Yılı Mali ve Sosyal Haklar, <a title="Maliye Bakanlığı Genelgesi (2015 Yılı Mali ve Sosyal Haklar)" href="https://www.ogm.gov.tr/tr/e-kutuphane-sitesi/mevzuat-sitesi/Tamimler/T.C.Maliye%20Bakanl%C4%B1%C4%9F%C4%B1%20Genelgesi%20%282015%20Y%C4%B1l%C4%B1%20Mali%20ve%20Sosyal%20Haklar%29.pdf">OGM</a>)

Kamu tarafında ana ritim genellikle <strong>Ocak ve Temmuz</strong> maaş güncellemeleridir. Bu ritimde, yarım yılda biriken enflasyon, "gecikmeli endeksleme" etkisi yaratır. Zam geldiği gün nominal gelir yükselir, ama zam gelene kadar geçen aylarda satın alma gücü aşınır, o aradaki kayıp, hanehalkı bilançosunda "nakit akışı stresi" olarak hissedilir.
<h3>Yarım yıl TÜFE birikimi: kamu maaşı ve emekli endekslemesinin "ham girdisi"</h3>
Aşağıdaki tablo, TÜFE'nin yarım yıl birikimini gösterir (bileşik). Bu oranlar, kamu maaşı ve emekli güncellemelerinde referans alınan enflasyon farkı tartışmalarının nicel zeminini verir. (TCMB)
<table>
<thead>
<tr>
<th>Dönem</th>
<th>TÜFE birikimi</th>
</tr>
</thead>
<tbody>
<tr>
<td>2015 Oca-Haz</td>
<td>%4,76</td>
</tr>
<tr>
<td>2015 Tem-Ara</td>
<td>%3,86</td>
</tr>
<tr>
<td>2022 Oca-Haz</td>
<td>%42,34</td>
</tr>
<tr>
<td>2022 Tem-Ara</td>
<td>%15,39</td>
</tr>
<tr>
<td>2023 Oca-Haz</td>
<td>%19,78</td>
</tr>
<tr>
<td>2023 Tem-Ara</td>
<td>%37,57</td>
</tr>
<tr>
<td>2024 Oca-Haz</td>
<td>%24,73</td>
</tr>
<tr>
<td>2024 Tem-Ara</td>
<td>%15,75</td>
</tr>
<tr>
<td>2025 Oca-Haz</td>
<td>%16,67</td>
</tr>
<tr>
<td>2025 Tem-Kas (kısmi)</td>
<td>%11,21</td>
</tr>
</tbody>
</table>
<div class="flourish-wrapper">
<div class="flourish-embed flourish-chart" data-src="visualisation/26930465"><noscript><img src="https://public.flourish.studio/visualisation/26930465/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
</div>
Bu seri iki şeyi aynı anda söyler:

- 2015 gibi görece "düşük ve stabil" dönemlerde yarım yıllık birikim %4-5 bandında kalırken, 2022-2024'te birikim iki haneye, hatta 2022 ilk yarıda %42'ye çıkmıştır.

- 2025'te manşet yıllık enflasyon %31,07'ye gerilese de (Kasım), yıl içindeki birikim hâlâ çift hanelidir: Ocak-Haziran %16,67; Ocak-Kasım %29,74. (TCMB)

Kurumsal perspektiften bakıldığında bu, kamu tarafında "ücret-ödeme takvimi" ile "fiyatlama davranışı" arasındaki zaman uyumsuzluğunun devam ettiği anlamına gelir: Enflasyon düşse bile, <strong>güncelleme periyodu</strong> uzun kaldıkça, erime dönemsel olarak görünür olur.
<h2>Emekli aylıkları: endeksleme var, ama erime "zam gününe kadar" gerçek</h2>
Emekli aylıkları (özellikle SSK ve Bağ-Kur) genel olarak <strong>6 aylık TÜFE</strong> üzerinden güncellenir; kamu emeklilerinde ise kamu maaşı dinamikleriyle bağlantılı bir yapılanma bulunur. Panelin bu ayağında kritik nokta şu: Endeksleme formülü var diye erime ortadan kalkmaz; sadece <strong>zam gününde</strong> nominal telafi devreye girer.

Bunu pratik bir senaryoyla okumak kolay:
<ul>
 	<li>2025 ilk yarıda TÜFE birikimi <strong>%16,67</strong>. (TCMB)</li>
 	<li>Bu, Ocak'ta belirlenen bir aylığın Haziran sonunda satın alma gücünün yaklaşık <strong>%14,29</strong> azalması demek (1/(1+0,1667)).</li>
 	<li>Temmuz'da güncelleme gelse bile, ilk 6 ayda yaşanan erime "geriye dönük" olarak hane bütçesinde zaten hissedilmiştir.</li>
</ul>
Buradaki fark, asgari ücrete göre şudur: Asgari ücret tek zamla gidiyorsa, erime yıl geneline yayılır. Emekli aylığında ise erime "yarım yıllık bloklar" halinde yaşanır. Sonuç aynı kapıya çıkar: <strong>enflasyonun seviyesi kadar, takvim tasarımı da refah hissini belirler.</strong>
<h2>2015 referansı: "düşük birikim + iki dönemli asgari ücret" ile bugünün farkı</h2>
Asgari ücret için 10 yıllık geçmişe bakalım.

2015'te net asgari ücretin iki dönemli yapısı (949,07 TL ve 1.000,54 TL) ve TÜFE'nin yarım yıllık birikimlerinin %4-5 bandında seyretmesi, "reel erime paneli"nin taban senaryosunu verir. (<a title="2015 Yılı Asgari Ücret Tutarları" href="https://iskanunu.com/haberler/2348-asgari-ucret-2015/">iskanunu.com</a>)

Buna karşılık 2022-2024'te yarım yıllık birikimler (özellikle 2022 ilk yarı %42,34) ücret-ödeme takvimini fiilen bir "enflasyon yönetimi aracı"na çevirmiştir. Ara zam, reel kaybı yavaşlatan bir tampon gibi çalışır, tek zam olması ise erimeyi yıl içinde daha görünür kılar. (<a title="TCMB - Tüketici Fiyatları" href="https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB%2BTR/Main%2BMenu/Istatistikler/Enflasyon%2BVerileri/Tuketici%2BFiyatlari">TCMB</a>)
<h2>Manşet enflasyon düşse de, "takvim riski" refah algısını yönetiyor</h2>
Kasım 2025 itibarıyla manşet enflasyonun %31,07'ye gerilemesi, makro tarafta dezenflasyon görünümü açısından pozitif bir sinyal (TCMB). Ancak hanehalkının "gerçek zamanlı" deneyiminde belirleyici olan, bu manşetin tek başına seviyesi değil, gelirlerin ne sıklıkla güncellendiği ve enflasyonun yıl içinde nasıl birikim yaptığı.

Bu panelin gösterdiği tablo şu: <strong>Nominal gelir artışları, takvim nedeniyle gecikmeli çalıştığında, enflasyon düşse bile reel erime bir süre daha sistemin içinde kalır.</strong> Asgari ücrette tek güncelleme modeli, erimeyi yıl geneline yayarken, kamu maaşı ve emekli aylığında 6 aylık güncelleme modeli erimeyi bloklara bölüyor. İki modelin ortak paydası, enflasyonun sadece "yıllık oran" değil, aynı zamanda bir "nakit akışı problemi" olduğunu bir kez daha teyit etmesi.
<h3>Kaynaklar</h3>
Türkiye Cumhuriyet Merkez Bankası (TCMB) - "Tüketici Fiyatları" (Enflasyon Verileri - TÜFE aylık/yıllık yüzde değişim tablosu) - Veri dönemi: Kasım 2025; Erişim: 22.12.2025 - <a href="https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Istatistikler/Enflasyon+Verileri/Tuketici+Fiyatlari">https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Istatistikler/Enflasyon+Verileri/Tuketici+Fiyatlari</a>

T.C. Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) - "2025 Yılında Uygulanacak Yeni Asgari Ücret 22 Bin 104 Lira Olarak Belirlendi" - 24.12.2024 - <a href="https://www.csgb.gov.tr/haberler/2025-yilinda-uygulanacak-yeni-asgari-ucret-22-bin-104-lira-olarak-belirlendi/">https://www.csgb.gov.tr/haberler/2025-yilinda-uygulanacak-yeni-asgari-ucret-22-bin-104-lira-olarak-belirlendi/</a>

T.C. Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) - "Asgari Ücretin Net Hesabı ve İşverene Maliyeti" - Dönem: 01.01.2024-31.12.2024 - <a href="https://www.csgb.gov.tr/Media/pbqphfb4/2024-asgari-%C3%BCcret.pdf">https://www.csgb.gov.tr/Media/pbqphfb4/2024-asgari-%C3%BCcret.pdf</a>

iskanunu.com - "2015 Yılı Asgari Ücret Tutarları" - 30.12.2014 - <a href="https://iskanunu.com/haberler/2348-asgari-ucret-2015/">https://iskanunu.com/haberler/2348-asgari-ucret-2015/</a>

T.C. Çalışma ve Sosyal Güvenlik Bakanlığı (ÇSGB) / Çalışma Genel Müdürlüğü - "2022 yılı asgari ücreti brüt 5.004 TL, net 4.253,40 TL olarak belirlendi" - 16.12.2021 - <a href="https://www.csgb.gov.tr/cgm/haberler/16-12-2021/">https://www.csgb.gov.tr/cgm/haberler/16-12-2021/</a>

T.C. Maliye Bakanlığı - "Genelge (2015 Yılı Mali ve Sosyal Haklar)" (OGM e-kütüphane üzerinden PDF) - 31.12.2014 - <a href="https://www.ogm.gov.tr/tr/e-kutuphane-sitesi/mevzuat-sitesi/Tamimler/T.C.Maliye%20Bakanl%C4%B1%C4%9F%C4%B1%20Genelgesi%20%282015%20Y%C4%B1l%C4%B1%20Mali%20ve%20Sosyal%20Haklar%29.pdf">https://www.ogm.gov.tr/tr/e-kutuphane-sitesi/mevzuat-sitesi/Tamimler/T.C.Maliye%20Bakanl%C4%B1%C4%9F%C4%B1%20Genelgesi%20%282015%20Y%C4%B1l%C4%B1%20Mali%20ve%20Sosyal%20Haklar%29.pdf</a>
