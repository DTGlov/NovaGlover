// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css', '~/assets/css/main.css'],
  app: {
    head: {
      title: 'NovaGlover',
      meta: [
        {
          name: 'NovaGlover - Accounting & Tax Solutions in Accra, Ghana',
          content:
            'Welcome to NovaGlover, your trusted partner in accounting and tax solutions. Based in the heart of Accra, Ghana, we provide a comprehensive range of services tailored to meet the unique needs of entrepreneurs, businesses, and individuals.',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;700&display=swap',
        },
      ],
      script: [
        {
          src: 'https://unpkg.com/ionicons@7.2/dist/ionicons/ionicons.esm.js',
          type: 'module',
        },
        {
          src: 'https://unpkg.com/ionicons@7.2/dist/ionicons/ionicons.js',
          nomodule: true,
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/image'],
});
