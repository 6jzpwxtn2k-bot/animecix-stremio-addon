# AnimeCiX Stremio Addon

Unofficial Stremio Addon for [AnimeCiX](https://animecix.tv) - Türkçe altyazılı anime izleme platform

## Özellikler

- AnimeCiX'teki tüm animelere erişim
- Dizi ve film desteği
- Türkçe altyazı desteği
- Genre/kategori filtreleme
- Arama desteği

## Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

1. Repo'yu klonlayın:
```bash
git clone https://github.com/6jzpwxtn2k-bot/animecix-stremio-addon.git
cd animecix-stremio-addon
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env` dosyasını oluşturun:
```bash
cp .env.example .env
```

4. `.env` dosyasını düzenleyin:
- `API_HOST` - AnimeCiX API adresi (varsayılan: https://animecix.tv/api/v1)
- `API_KEY` - API anahtarı (gerekirse)
- `PORT` - Sunucu portu (varsayılan: 7000)
- `HOSTING_URL` - Addon URL'i (varsayılan: http://localhost:7000)

5. Addon'ı çalıştırın:
```bash
npm start
```

6. Stremio'ya ekleyin:
- Tarayıcınızdan `http://localhost:7000/manifest.json` adresine gidin
- Veya Stremio'da "Community Addons" kısmından URL ekleyin

## Kullanım

Addon'ı yükledikten sonra:

1. Stremio'yu açın
2. "Discover" veya "Board" sekmesine gidin

3. AnimeCiX kataloglarını göreceksiniz:
   - AnimeciX Dizileri
   - AnimeciX Filmleri

4. İzlemeye başlayın!

## Geliştirme

Bu temel bir çalışan versiyondur. İyileştirmeler için öneriler:

- [ ] AnimeCiX API'den gerçek veri çekme
- [ ] Video stream linklerini elde etme
- [ ] Altyazı entegrasyonu
- [ ] Cache mekanizması
- [ ] Hata yönetimi

## Lisans

MIT

## Uyarı

Bu **unofficial** bir addondur. AnimeCiX ile resmi bir bağlantısı yoktur.
