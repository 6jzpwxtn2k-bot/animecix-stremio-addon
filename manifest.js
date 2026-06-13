require("dotenv").config();

const manifest = {
  id: 'animecix-stremio-addon',
  version: '2.0.0',
  name: 'AnimeciX',
  description: "AnimeciX'ten turkce altyazili animeleri stremionuza getirir.",
  logo: `${process.env.HOSTING_URL}/images/animecix.png`,
  background: `${process.env.HOSTING_URL}/images/background.png`,
  behaviorHints: {},
  config: [{ key: 'animecix', type: 'select', required: false }],
  catalogs: [
    {
      type: 'series',
      id: 'animecix',
      name: 'AnimeciX Dizileri',
      extra: [
        { name: 'search', isRequired: false },
        { name: 'genre', isRequired: false, options: ['Dram','Aksiyon','Gerilim','Komedi','Bilim Kurgu','Korku','Gizem','Romantik','Tarih\u00ee','B\u00fcy\u00fc','Spor','Isekai','Asker\u00ee','Dedektif','\u00d6l\u00fcm','Gizli Organizasyon','Ecchi','Harem','Ters Harem','Vampir','Kan, Vah\u015fet','Shounen','Shounen Ai','Seinen','Canavar','Do\u011fa\u00fcst\u00fc','\u015eeytan','\u0130ntikam','Zaman Yolculu\u011fu','Okul','Uzay','Shoujo','Oyun','Samuray','Ninja','Ya\u015famdan Kesitler','\u0130\u015f Hayat\u0131','D\u00f6v\u00fc\u015f Sanatlar\u0131','Yuri','Yaoi'] }
      ],
      genres: ['Dram','Aksiyon','Gerilim','Komedi','Bilim Kurgu','Korku','Gizem','Romantik','Tarih\u00ee','B\u00fcy\u00fc','Spor','Isekai','Asker\u00ee','Dedektif','\u00d6l\u00fcm','Gizli Organizasyon','Ecchi','Harem','Ters Harem','Vampir','Kan, Vah\u015fet','Shounen','Shounen Ai','Seinen','Canavar','Do\u011fa\u00fcst\u00fc','\u015eeytan','\u0130ntikam','Zaman Yolculu\u011fu','Okul','Uzay','Shoujo','Oyun','Samuray','Ninja','Ya\u015famdan Kesitler','\u0130\u015f Hayat\u0131','D\u00f6v\u00fc\u015f Sanatlar\u0131','Yuri','Yaoi']
    },
    {
      type: 'movie',
      id: 'animecix',
      name: 'AnimeciX Filmleri',
      extra: [
        { name: 'search', isRequired: false },
        { name: 'genre', isRequired: false, options: ['Dram','Aksiyon','Gerilim','Komedi','Bilim Kurgu','Korku','Gizem','Romantik','Tarih\u00ee','B\u00fcy\u00fc','Spor','Isekai','Asker\u00ee','Dedektif','\u00d6l\u00fcm','Gizli Organizasyon','Ecchi','Harem','Ters Harem','Vampir','Kan, Vah\u015fet','Shounen','Shounen Ai','Seinen','Canavar','Do\u011fa\u00fcst\u00fc','\u015eeytan','\u0130ntikam','Zaman Yolculu\u011fu','Okul','Uzay','Shoujo','Oyun','Samuray','Ninja','Ya\u015famdan Kesitler','\u0130\u015f Hayat\u0131','D\u00f6v\u00fc\u015f Sanatlar\u0131','Yuri','Yaoi'] }
      ],
      genres: ['Dram','Aksiyon','Gerilim','Komedi','Bilim Kurgu','Korku','Gizem','Romantik','Tarih\u00ee','B\u00fcy\u00fc','Spor','Isekai','Asker\u00ee','Dedektif','\u00d6l\u00fcm','Gizli Organizasyon','Ecchi','Harem','Ters Harem','Vampir','Kan, Vah\u015fet','Shounen','Shounen Ai','Seinen','Canavar','Do\u011fa\u00fcst\u00fc','\u015eeytan','\u0130ntikam','Zaman Yolculu\u011fu','Okul','Uzay','Shoujo','Oyun','Samuray','Ninja','Ya\u015famdan Kesitler','\u0130\u015f Hayat\u0131','D\u00f6v\u00fc\u015f Sanatlar\u0131','Yuri','Yaoi']
    }
  ],
  resources: ['addon_catalog', 'catalog', 'stream', 'meta', 'subtitles'],
  types: ['movie', 'series'],
  idPrefixes: ['0-']
};

module.exports = manifest;
