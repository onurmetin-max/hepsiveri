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
- **Yayın Saati ve İleri Tarihli Planlama Kuralı (Varsayılan Sabah 10:00 & Taslak):**
  - Kullanıcı özel olarak "hemen gir", "anında yayınla" veya farklı bir saat belirtmediği sürece, haberlerin yayın saati daima **sabah 10:00** (`10:00`) olarak ayarlanır.
  - Gün içinde veya akşam/gece hazırlanan haberlerin tarihi, kullanıcı aksini söylemedikçe bir sonraki sabah `10:00` (veya sabah erken hazırlanmışsa o günün `10:00`ı) olacak şekilde ayarlanır (Örn: `2026-11-02 10:00`).
  - **İleri Tarihli Haberler İçin Taslak Kuralı:** Gelecek günlere (ör. 2-3 gün sonrasına) hazırlanan haberler, yayın gününe kadar sitede vaktinden önce görünmemesi için `status: "Taslak"` olarak kaydedilir. Yayın günü sabahı saat 10:00'da CMS üzerinden veya commit ile `status: "Yayında"` yapılarak tek tıkla canlıya alınır.
- **Noktalama İşaretleri ve Yazım Dili:**
  - **Noktalı Virgül (`;`):** Haddinden fazla kullanılmamalıdır. Yalnızca çok nadir ve dil bilgisi açısından kesinlikle zorunlu olduğu durumlarda yer verilmelidir. Genellikle nokta veya virgülle sadeleştirilmelidir.
  - **Çizgi / Tire Kullanımı:** Uzun çizgi (`—` / em-dash) kullanılmamalıdır. Bunun yerine kısa çizgi (`-`) veya uygunsa iki nokta üst üste (`:`) tercih edilmelidir.


