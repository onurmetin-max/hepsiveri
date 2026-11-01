---
title: "Cloudflare kaynaklı küresel arıza: Birkaç saatlik \"tek hata noktası\", internetin ne kadar kırılgan olduğunu gösterdi"
description: "18 Kasım 2025 Salı günü dünya, internetin ne kadar az \"dağıtık\" olduğunu bir kez daha deneyimleyerek hatırladı. İnternet altyapı şirketi Cloudflare’de yaşanan geniş kapsamlı a..."
pubDate: 2025-11-19
category: "Genel"
author: "Onur Metin"
status: "Yayında"
readTime: "8 dk okuma"
heroImage: "/uploads/cloudflare.jpg"
---

18 Kasım 2025 Salı günü dünya, internetin ne kadar az "dağıtık" olduğunu bir kez daha deneyimleyerek hatırladı. İnternet altyapı şirketi Cloudflare’de yaşanan geniş kapsamlı arıza, X (Twitter), ChatGPT, Spotify, Facebook, Shopify, League of Legends, çeşitli kamu kurumlarının siteleri ve binlerce servisi saatler boyunca yavaşlattı, hata verdirdi ya da tamamen erişilemez hale getirdi. <a title="Cloudflare outage briefly disrupts ChatGPT, X and dozens of apps" href="https://www.washingtonpost.com/business/2025/11/18/cloudflare-outage-error-status/">The Washington Post</a> haberi "Cloudflare kesintisi ChatGPT, X ve düzinelerce uygulamayı kısa süreliğine aksattı" başlığıyla verdi.)
<blockquote class="td_quote_box td_box_center">
<h3 style="text-align: left;" data-start="451" data-end="544">BT ve network jargonunda “dağıtık mimari (distributed architecture)”  nedir?</h3>
<ul style="text-align: left;" data-start="546" data-end="1048">
 	<li data-start="546" data-end="686">
<p data-start="548" data-end="686"><strong data-start="548" data-end="576">Veri ve işlem kapasitesi</strong>, tek bir sunucuya / tek bir veri merkezine değil,<br data-start="626" data-end="629" />dünyanın veya ülkenin farklı noktalarına yayılmıştır.</p>
</li>
 	<li data-start="687" data-end="799">
<p data-start="689" data-end="799">Bu düğümler (server, node, veri merkezi vs.) <strong data-start="734" data-end="767">birbirleriyle koordine olarak</strong> tek bir sistem gibi davranır.</p>
</li>
 	<li data-start="800" data-end="1048">
<p data-start="802" data-end="809">Amaç:</p>

<ul data-start="812" data-end="1048">
 	<li data-start="812" data-end="845">
<p data-start="814" data-end="845">Yükü bölmek (load balancing),</p>
</li>
 	<li data-start="848" data-end="894">
<p data-start="850" data-end="894">Hata toleransı sağlamak (fault tolerance),</p>
</li>
 	<li data-start="897" data-end="951">
<p data-start="899" data-end="951">Servis sürekliliğini artırmak (high availability),</p>
</li>
 	<li data-start="954" data-end="1048">
<p data-start="956" data-end="1048">Performansı kullanıcıya coğrafi olarak yakın sunucularla yükseltmek (latency optimizasyonu).</p>
</li>
</ul>
</li>
</ul>
<p style="text-align: left;" data-start="1050" data-end="1060">Örneğin:</p>

<ul data-start="1061" data-end="1357">
 	<li style="text-align: left;" data-start="1061" data-end="1158">
<p data-start="1063" data-end="1158">Aynı web sitesi, sadece <strong data-start="1087" data-end="1119">tek bir İstanbul sunucusunda</strong> çalışıyorsa:<br data-start="1132" data-end="1135" />➜ Merkezî bir yapı.</p>
</li>
 	<li data-start="1159" data-end="1357">
<p style="text-align: left;" data-start="1161" data-end="1357">Aynı web sitesi, Frankfurt, Amsterdam, Singapur, İstanbul gibi birçok noktada replikalarıyla ayakta duruyor, DNS/CDN üzerinden kullanıcıyı en yakın noktaya yönlendiriyorsa:<br data-start="1333" data-end="1336" />➜ Dağıtık bir yapı.</p>
</li>
</ul>
İşte Cloudflare tam olarak bunu yapıyor. Bir web sitesinin aynı adresin yönlendirdiği replikalarını oluşturuyor.</blockquote>
Şirket birkaç saat içinde sorunu çözdüğünü, ciddi bir siber saldırı değil; alışılmadık trafik artışıyla tetiklenen yazılımsal bir hata yaşandığını açıkladı. Ancak ortaya çıkan tablo, dünya web trafiğinin yaklaşık beşte birini taşıyan tek bir özel şirketin yaşadığı sorunların, küresel ölçekte "internet erişim sorunu" olarak hissedilmesine yettiğini gösteriyor.
<h2>Ne oldu, ne kadar sürdü?</h2>
Cloudflare’in resmi durum sayfasına göre küresel olay, 18 Kasım’da 11.48 UTC’de "Cloudflare Global Network experiencing issues" notuyla kayda geçti; şirket bunu "iç hizmetlerde bozulma (internal service degradation)" olarak tanımladı. (<a title="Cloudflare Status" href="https://www.cloudflarestatus.com/">Cloudflare Durumu</a>)

<img class="aligncenter size-full wp-image-1412" src="/uploads/Cloudflare-Global-Network-experiencing-issues.png" alt="" width="856" height="1221" />

(Türkiye yerel saati UTC+3'tür)
<ul>
 	<li><strong>11.20–11.50 UTC civarı:</strong> Cloudflare, altyapısında "alışılmadık bir trafik artışı" tespit ettiğini ve bazı trafiğin 500 hata kodlarıyla dönmeye başladığını belirtiyor. (<a title="Reports of outages surge at X and other apps as ..." href="https://www.cbsnews.com/news/cloudflare-500-error-outage-x-league-of-legends-down-not-working/">cbsnews.com</a>)</li>
 	<li><strong>12.21 UTC:</strong> Şirket, hataların genişlediğini ve çok sayıda müşterinin etkilendiğini kabul ederek "iyileşme sinyalleri var ama hata oranları normalin üzerinde" açıklaması yapıyor. (<a title="Cloudflare Status" href="https://www.cloudflarestatus.com/">Cloudflare Durumu</a>)</li>
 	<li><strong>14.42 UTC:</strong> Cloudflare, sorunu tetikleyen değişiklikleri geri aldığını, uygulama trafiğinde iyileşme gözlendiğini ve "incident’ın çözüldüğüne inandığını" duyuruyor. (<a title="Cloudflare Status" href="https://www.cloudflarestatus.com/">Cloudflare Durumu</a>)</li>
 	<li><strong>19.28 UTC:</strong> "Cloudflare Global Network experiencing issues" olayı tamamen "resolved" statüsüne çekiliyor; şirket, ağ genelinde hata ve gecikmelerin normale döndüğünü bildiriyor. (<a title="Cloudflare Status" href="https://www.cloudflarestatus.com/">Cloudflare Durumu</a>)</li>
</ul>
Türkiye saatiyle bakıldığında (UTC+3), kesinti 14.30 civarında yoğun hissedilmeye başlandı, akşamüstüne doğru büyük ölçüde normale döndü. Yerel haber siteleri, teknoloji sayfaları ve sosyal medya kullanıcılara göre, X, ChatGPT, bazı haber portalları ve bizzat bu siteleri barındıran altyapılar eşzamanlı erişim sorunları yaşadı. (<a title="Cloudflare çöktü: X, ChatGPT ve haber sitelerine girilmiyor" href="https://medyascope.tv/2025/11/18/cloudflare-coktu-x-chatgpt-ve-haber-sitelerine-girilmiyor/">Medyascope</a>)
<h2>Hangi servisler etkilendi?</h2>
Farklı ülkelerdeki medya kuruluşlarının derlediği bilgiye göre kesintiden etkilenen başlıca hizmetler arasında şunlar yer aldı:
<ul>
 	<li><strong>Sosyal medya ve içerik platformları:</strong> X (Twitter), Facebook, Instagram, Reddit, Truth Social, Letterboxd. (<a title="ChatGPT and X hit by outage at online security group Cloudflare" href="https://www.ft.com/content/9898e434-f7ec-4113-915b-fce28f1a9c25">Financial Times</a>)</li>
 	<li><strong>Yapay zekâ ve bulut servisleri:</strong> ChatGPT ve OpenAI’nin diğer hizmetleri, Microsoft Copilot, bazı LLM/AI API uçları. (<a title="Cloudflare outage briefly disrupts ChatGPT, X and dozens of apps" href="https://www.washingtonpost.com/business/2025/11/18/cloudflare-outage-error-status/">The Washington Post</a>)</li>
 	<li><strong>Müzik ve eğlence platformları:</strong> Spotify, bazı oyun sunucuları (özellikle League of Legends). (<a title="Global Cloudflare outage disrupts X, major websites ..." href="https://www.thenews.com.pk/latest/1358778-global-cloudflare-outage-disrupts-x-major-websites-worldwide">The News</a>)</li>
 	<li><strong>E-ticaret ve kurumsal hizmetler:</strong> Shopify tabanlı mağazalar, Amazon’un bazı uç noktaları, Vinted gibi pazar yerleri, New Jersey Transit gibi ulaşım hizmetleri. (<a title="Cloudflare Outage Nov 18, 2025" href="https://www.sfa-oxford.com/market-news-and-insights/sfa-cloudflare-global-outage-november-18-2025-critical-minerals-supply-chain-risk/">SFA (Oxford)</a>)</li>
 	<li><strong>Kamu kurumları ve finans sektörü:</strong> İngiltere’de Finansal Davranış Otoritesi (FCA) ve MI5’in internet siteleri dahil olmak üzere bazı resmi kurum siteleri. (<a title="ChatGPT and X hit by outage at online security group Cloudflare" href="https://www.ft.com/content/9898e434-f7ec-4113-915b-fce28f1a9c25">Financial Times</a>)</li>
</ul>
Çok sayıda kullanıcı; "500 Internal Server Error", "you have been blocked" veya Cloudflare’ın kendi hata sayfalarıyla karşılaştı. Bazı servislerde tamamen erişim kesilirken, bazıları ciddi yavaşlama ve kısmi hizmet sunmaya devam etti. (<a title="Cloudflare Outage Nov 18, 2025" href="https://www.sfa-oxford.com/market-news-and-insights/sfa-cloudflare-global-outage-november-18-2025-critical-minerals-supply-chain-risk/">SFA (Oxford)</a>)
<h2>Şirketin açıklaması: Latent bug + konfig değişikliği + trafik şoku</h2>
Cloudflare, olayın ilk anlarında bunun <strong>ülke bazlı bir engelleme ya da hedefli bir saldırı değil</strong>, kendi küresel ağını etkileyen teknik bir sorun olduğunu vurguladı. NetBlocks da yaptığı açıklamada, tespit ettikleri kesintinin belirli ülkelerdeki devlet kaynaklı filtreleme veya "shutdown" değil, Cloudflare’in küresel ağına bağlı hizmetlerde yaşanan teknik arızayla ilişkili olduğunu teyit etti. (<a title="Cloudflare reports global network disruptions impacting ..." href="https://www.pakistantoday.com.pk/2025/11/18/cloudflare-reports-global-network-disruptions-impacting-online-services/">Pakistan Today</a>)

Daha sonra paylaşılan teknik arka plan şöyle özetleniyor:
<ul>
 	<li>Cloudflare, <strong>bot trafiğini engellemeye dönük bir servisinde</strong> uzun süredir gizli kalmış (latent) bir yazılım hatası bulunduğunu;</li>
 	<li>Rutin bir <strong>konfigürasyon değişikliğinin</strong> bu hatayı tetiklediğini;</li>
 	<li>Aynı anda gelen <strong>alışılmadık bir trafik artışının</strong> da sorunun kısa sürede çok geniş bir alana yayılmasına neden olduğunu belirtiyor. (<a title="Cloudflare blames massive internet outage on 'latent bug'" href="https://techcrunch.com/2025/11/18/cloudflare-blames-massive-internet-outage-on-latent-bug/">TechCrunch</a>)</li>
</ul>
Bu kombinasyon, Cloudflare üzerinden geçen trafiğin önemli bir bölümünde 500 hata kodları, gecikme artışları ve bazı hizmetlerde tamamen kopma olarak yansıdı. Şirket, olayın bir saldırı (DDoS vb.) değil, kendi iç altyapısındaki yazılımsal bir zafiyetin tetiklenmesi olduğunu özellikle vurguladı. (<a title="Cloudflare outage briefly disrupts ChatGPT, X and dozens of apps" href="https://www.washingtonpost.com/business/2025/11/18/cloudflare-outage-error-status/">The Washington Post</a>)
<h2>Rakamlarla Cloudflare kesintisi</h2>
Farklı izleme platformlarının verileri, kesintinin ölçeğini daha net gösteriyor:
<h3><strong>Downdetector verileri:</strong></h3>
X/Twitter için rapor sayısı, 18 Kasım sabah saatlerinde iki ayrı dalgada 10 binin üzerine çıktı. (<a title="What is Cloudflare? Cloudflare service outages causes issues for Twitter, ChatGPT" href="https://www.thetelegraph.com/news/article/loudflare-outage-x-chatgpt-november-18-21194344.php">The Telegraph</a>)

ChatGPT için raporlar aynı gün sabah 9.30 civarında yaklaşık 2 bin seviyesine ulaştı. (<a title="What is Cloudflare? Cloudflare service outages causes issues for Twitter, ChatGPT" href="https://www.thetelegraph.com/news/article/loudflare-outage-x-chatgpt-november-18-21194344.php">The Telegraph</a>)

Cloudflare’in kendi hizmetleri için bildirilen sorunlar ise 11 bin civarında zirve gördükten sonra, öğle saatlerinde 2.800 seviyelerine geriledi. (<a title="Global Cloudflare outage disrupts X, major websites ..." href="https://www.thenews.com.pk/latest/1358778-global-cloudflare-outage-disrupts-x-major-websites-worldwide">The News</a>)

<strong>Pazar payı ve kapsama:</strong>

Farklı kaynaklar, bugün itibarıyla tüm web sitelerinin yaklaşık <strong>%20’sinin</strong> performans, güvenlik veya DNS düzeyinde Cloudflare hizmetleri kullandığını aktarıyor. (<a title="Cloudflare outage briefly disrupts ChatGPT, X and dozens of apps" href="https://www.washingtonpost.com/business/2025/11/18/cloudflare-outage-error-status/">The Washington Post</a>)

Cloudflare Radar, küresel trafik eğilimlerini sürekli izleyen bir platform; Radar’ın son yedi günlük küresel trafiğe yönelik panellerinde 18 Kasım öğle saatlerinde kısa süreli anomali ve hata oranı artışları görülüyor. (<a title="Cloudflare Radar: Worldwide Overview" href="https://radar.cloudflare.com/">Cloudflare Radar</a>)

Bu veriler, internet kullanıcılarının yaşadığı "son bir gündür internet bozuk" hissiyatının teknik olarak birkaç saatlik bir altyapı arızasından kaynaklansa da, ölçek itibarıyla bir <strong>ülke çapı kesinti</strong> kadar görünür sonuç ürettiğini gösteriyor.
<h2>Sansür değil, tekil altyapı riski</h2>
İnternet kesintileri dendiğinde birçok ülkede akla ilk gelen başlık, seçim günleri, protestolar ya da kopya çekmeyi engellemek için yapılan <strong>devlet kaynaklı internet shutdown’ları</strong>. Son yıllarda Afganistan’dan Hindistan’a, Afrika ve Ortadoğu ülkelerine kadar pek çok örnekte Cloudflare, NetBlocks ve diğer izleme platformları bu shutdown’ları anlık olarak belgeledi. (<a title="Shutdown season- the Q2 2025 Internet disruption summary" href="https://blog.cloudflare.com/q2-2025-internet-disruption-summary/">The Cloudflare Blog</a>)

18 Kasım kesintisi ise doğrudan bir devlet kararı değil, <strong>özel bir altyapı sağlayıcısının tekil hatası</strong>. Bu ayrım, hem hukuki hem de politik düzeyde kritik:
<ul>
 	<li>Olay, NetBlocks ve benzeri gözlemciler tarafından, "ülke içinde belirli sitelerin engellenmesi" şeklinde okunmadı; Cloudflare’in kendisi de bunun global ağ seviyesinde bir teknik arıza olduğunu teyit etti. (<a title="Cloudflare reports global network disruptions impacting ..." href="https://www.pakistantoday.com.pk/2025/11/18/cloudflare-reports-global-network-disruptions-impacting-online-services/">Pakistan Today</a>)</li>
 	<li>Buna karşın kullanıcı deneyimi açısından sonuç, birçok ülkede "sosyal medya çöktü", "ChatGPT yine açılmıyor" algısıyla, fiilen bir erişim kaybı olarak yaşandı.</li>
</ul>
Başka bir deyişle, <strong>internetin nasıl yapılandığına dair teknik bir tasarım tercihi</strong>, gedik açtığında gündelik siyasi tartışmalara benzeyen sonuçlar üretmeye başlıyor: İnsanlar "kim kesti?" diye soruyor, ama burada fail, tekil bir şirket içi bug.
<h2>Tek şirket, küresel risk: Kritik sorular</h2>
18 Kasım olayı, küresel internet mimarisiyle ilgili birkaç yapısal tartışmayı yeniden masaya koyuyor:
<ol>
 	<li><strong>Tekil hata noktaları (single point of failure):</strong><strong>
</strong>Cloudflare; DDoS koruması, CDN, DNS ve uygulama güvenliği gibi katmanları aynı anda sunarak, çok sayıda site için "her şeyin geçtiği kapı" haline gelmiş durumda. Bu kapı anlık bile çalışmadığında, dünyanın dört bir yanındaki çok farklı sektörlerden platformlar eşzamanlı hata veriyor. (<a title="Cloudflare outage causes error messages across the internet" href="https://www.theguardian.com/technology/2025/nov/18/cloudflare-outage-causes-error-messages-across-the-internet">The Guardian</a>)</li>
 	<li><strong>Şeffaflık ve raporlama kapasitesi:</strong>
Bugünkü kesinti hakkında elimizdeki rakamlar, ağırlıklı olarak <strong>özel şirketlerin dashboardları</strong> (Cloudflare Status, Cloudflare Radar) ve <strong>platform izleme servisleri</strong> (Downdetector vb.) üzerinden geliyor. Devletlerin veya ulusal düzenleyicilerin, bu tür altyapı arızalarını anlık izleyip raporlayacak şeffaf ve standartlaştırılmış mekanizmaları çoğu ülkede hâlâ yok. (<a title="Cloudflare down? Current problems and outages" href="https://downdetector.com/status/cloudflare/">downdetector.com</a>)</li>
 	<li><strong>Yedeklilik (redundancy) ne kadar gerçek?</strong>
Yatayda çok sayıda alternatif altyapı sağlayıcısı var gibi görünse de, pratikte büyük platformların önemli bir kısmı benzer servisleri aynı birkaç firmadan alıyor. Bu, kâğıt üzerindeki "dağıtık internet" idealinin, fiiliyatta oldukça konsantre bir pazara dönüştüğünü gösteriyor. (<a title="ChatGPT and X hit by outage at online security group Cloudflare" href="https://www.ft.com/content/9898e434-f7ec-4113-915b-fce28f1a9c25">Finansal Zamanlar</a>)</li>
 	<li><strong>Kamu yararı perspektifi:</strong>
Bu yapıların, fiilen elektrik, su, telekom kadar kritik altyapı haline geldiği noktada; yalnızca "müşteri–tedarikçi" sözleşmeleriyle değil, kamusal gözetim ve risk analizi çerçeveleriyle de ele alınması gerekip gerekmediği, giderek daha fazla sorulan bir soru.</li>
</ol>
<h2>Türkiye açısından resim</h2>
Türkiye’de de 18 Kasım öğleden sonra; X, ChatGPT ve bu altyapıyı kullanan çeşitli sitelere erişimde eşzamanlı sorunlar bildirilirken, birçok haber sitesi ve teknoloji mecrası sorunu "Cloudflare kesintisi" başlığıyla servis etti. (<a title="Cloudflare çöktü: X, ChatGPT ve haber sitelerine girilmiyor" href="https://medyascope.tv/2025/11/18/cloudflare-coktu-x-chatgpt-ve-haber-sitelerine-girilmiyor/">Medyascope</a>)

Anadolu Ajansı, sorunun ABD merkezli X şirketi özelinde hissedildiğini; altyapı tarafında ise Cloudflare’deki problemin hem X hem de ChatGPT gibi platformlarda erişim sorunu yarattığını aktardı. (<a title="ABD merkezli X şirketinin sosyal medya platformuna erişim ..." href="https://www.aa.com.tr/tr/bilim-teknoloji/abd-merkezli-x-sirketinin-sosyal-medya-platformuna-erisim-sorunu/3747118">Anadolu Ajansı</a>)

Türkiye’de internet özgürlüğü tartışmaları genellikle BTK kararları, mahkeme engellemeleri ve sosyal medya bant daraltmaları üzerinden yürürken; bu olay, <strong>ülke sınırlarının ötesinde, küresel özel bir aktörün yaşadığı arızanın da yerel erişimi aynı derecede etkileyebildiğini</strong> somutlaştırdı.
<h2>Veri ve görselleştirme için notlar</h2>
Bu olayı veri haberi olarak derinleştirmek için kullanılabilecek bazı temel veri kaynakları şöyle özetlenebilir:
<ul>
 	<li><strong>Zaman serileri:</strong>
<ul>
 	<li>Cloudflare Status/Incident API üzerinden, 18 Kasım olayına ilişkin güncellemelerin zaman damgaları (incident başlangıcı, ara güncellemeler, çözüm anı). (<a title="Cloudflare Status" href="https://www.cloudflarestatus.com/">Cloudflare Durumu</a>)</li>
 	<li>Downdetector’un X, ChatGPT ve Cloudflare için tuttuğu son 24 saatlik rapor grafikleri (saat-bazlı rapor sayıları). (<a title="Cloudflare down? Current problems and outages" href="https://downdetector.com/status/cloudflare/">downdetector.com</a>)</li>
</ul>
</li>
 	<li><strong>Platform listeleri ve etkilenme haritası:</strong>
<ul>
 	<li>Farklı haber kaynaklarının derlediği "etkilenen servisler" listeleri, sektör kırılımı (sosyal medya, oyun, e-ticaret, finans, kamu, AI servisleri) bazında tabloya dönüştürülebilir. (<a title="ChatGPT and X hit by outage at online security group Cloudflare" href="https://www.ft.com/content/9898e434-f7ec-4113-915b-fce28f1a9c25">Finansal Zamanlar</a>)</li>
</ul>
</li>
 	<li><strong>Makro bağlam:</strong>
<ul>
 	<li>Cloudflare’in önceki çeyrek internet kesinti raporları (Q1–Q3 2025), AWS gibi diğer büyük sağlayıcıların yakın tarihli arızalarıyla karşılaştırmalı bir grafik üretmeye elverişli. (<a title="Online outages: Q3 2025 Internet disruption summary" href="https://blog.cloudflare.com/q3-2025-internet-disruption-summary/">The Cloudflare Blog</a>)</li>
</ul>
</li>
</ul>
Haber: Onur Metin | <a href="https://hepsiveri.com">hepsiveri.com</a>
<h3>Kaynaklar</h3>
<ul>
 	<li><a href="https://www.washingtonpost.com/business/2025/11/18/cloudflare-outage-error-status/">The Washington Post</a></li>
 	<li><a href="https://www.theguardian.com/technology/2025/nov/18/cloudflare-outage-causes-error-messages-across-the-internet">The Guardian</a></li>
 	<li><a href="https://www.ft.com/content/9898e434-f7ec-4113-915b-fce28f1a9c25">Financial Times </a></li>
 	<li><a href="https://www.businessinsider.com/cloudflare-outage-internet-down-x-open-ai-2025-11">businessinsider.com</a></li>
 	<li><a href="https://www.techradar.com/pro/live/a-cloudflare-outage-is-taking-down-parts-of-the-internet">techradar.com</a></li>
 	<li><a href="https://www.tomshardware.com/news/live/cloudflare-outage-under-investigation-as-twitter-downdetector-go-down-company-confirms-global-network-issue-clone">Tom's Hardware</a></li>
 	<li><a href="https://www.techradar.com/news/live/chatgpt-down-november-18-openai">techradar.com</a></li>
 	<li><a href="https://medyascope.tv/2025/11/18/cloudflare-coktu-x-chatgpt-ve-haber-sitelerine-girilmiyor/">Medyascope</a></li>
 	<li><a href="https://www.bloomberght.com/cloudflare-de-erisim-sorunu-3761778">Bloomberght</a></li>
 	<li><a href="https://tr.euronews.com/2025/11/18/x-ve-bircok-internet-sitesine-ulasilamiyor">tr.euronews.com</a></li>
</ul>
