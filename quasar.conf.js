// quasar.conf.js

module.exports = function (ctx) {
    return {
      // Aplikasi judulnya
      appName: 'Vue Photo Album',
  
      // Environment yang digunakan selama pengembangan
      env: {
        // URL API atau konfigurasi lainnya
        API_URL: ctx.dev ? 'http://localhost:3000' : 'https://api.example.com'
      },
  
      // Pengaturan untuk Quasar Framework
      framework: {
        // Icon yang digunakan di seluruh aplikasi
        iconSet: 'ionicons-v5',
  
        // Komponen-komponen yang ingin Anda gunakan
        components: [
          'QAvatar',
          'QBadge',
          'QBtn',
          'QCard',
          'QCardSection',
          'QCardActions',
         
        ],
  
        // Directive yang ingin Anda gunakan
        directives: [
          'Ripple'
        ],
  
        // Plugins yang ingin Anda aktifkan dalam proyek Anda
        plugins: [
          'Notify'
        ]
      },
  
      // Konfigurasi build
      build: {
        vueRouterMode: 'history', // Menggunakan mode history untuk router Vue
        vueCompiler: true, // Mengaktifkan compiler Vue
        // Gaya linting (misalnya, ESLint), Anda dapat menyesuaikan sesuai kebutuhan
        extendWebpack(cfg) {
          cfg.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
          })
        }
      },
  
      // Pengaturan untuk pengembangan
      devServer: {
        // Konfigurasi server pengembangan
        https: false,
        port: 8080,
        open: true // Buka browser secara otomatis saat server berjalan
      }
    }
  }
  