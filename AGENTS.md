## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Editorial Guidelines (Yazım ve Başlık Kuralları)

- **Başlık ve Alt Başlık Yazım Formatı (Sentence Case):**
  - Haber başlıklarında ve haber içindeki alt başlıklarda (`##`, `###`), yalnızca ilk kelimenin ilk harfi ve cümle içindeki özel isimler/kısaltmalar (ör. TEPAV, SGK, TÜİK, Türkiye) büyük harfle başlar.
  - Geri kalan tüm sözcükler cümle yapısına uygun olarak küçük harfle yazılır (ör. "TEPAV ve Bakanlık verileri: Kadın emeğinde çifte kıskaç").
- **Numaralandırma Yasağı:**
  - Haber içi ara başlıklarda `1. `, `2. `, `3. ` gibi rakam veya sıra numaralandırması **kesinlikle kullanılmaz**. Başlıklar doğrudan metin olarak verilir.
- **Tarih ve Saat Formatı:**
  - `pubDate` alanı Türkiye saati (`+03:00`) baz alınarak daima `YYYY-MM-DD HH:mm` formatında yazılır.
- **Yayın Saati ve Anında Yayınlama Özgürlüğü (Serbest Zamanlama):**
  - **10:00 saat kuralı ve zorunluluğu tamamen kaldırılmıştır.**
  - Haberler günün her saatinde (gece, sabah, öğlen) hazırlandığı anın güncel tarih ve saatiyle anında `status: "Yayında"` olarak yayınlanabilir.
  - Yayın saati ve tarihi tamamen kullanıcının tercihine bırakılmıştır; anlık yayınlarda o anki güncel saat yazılır. Geleceğe yönelik planlama yapılmak istenirse ileri bir tarih seçilebilir.
- **Noktalama İşaretleri ve Yazım Dili:**
  - **Noktalı Virgül (`;`):** Haddinden fazla kullanılmamalıdır. Yalnızca çok nadir ve dil bilgisi açısından kesinlikle zorunlu olduğu durumlarda yer verilmelidir. Genellikle nokta veya virgülle sadeleştirilmelidir.
  - **Çizgi / Tire Kullanımı:** Uzun çizgi (`—` / em-dash) kullanılmamalıdır. Bunun yerine kısa çizgi (`-`) veya uygunsa iki nokta üst üste (`:`) tercih edilmelidir.

## Editor Modules & Custom Components (CMS Modülleri)

Decap CMS (`/admin`) editöründe haber metnine eklenebilen özel bileşenler:
1. **📊 Tablo Ekle (`table`):** Excel, Google Sheets veya CSV verilerini kopyalayıp doğrudan tabloya dönüştürür.
2. **📈 Flourish Grafiği Ekle (`flourish`):** Flourish görselleştirme ID'sini veya embed kodunu yerleştirir.
3. **💻 Özel HTML / Kod Ekle (`html_embed`):** Harici iframe, script, Datawrapper, etkileşimli widget veya özel HTML bloklarını güvenle yerleştirir (`<div class="hepsiveri-html-embed">...</div>`).



