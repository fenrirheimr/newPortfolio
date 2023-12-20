import dotenvExpand from 'dotenv-expand';
import { loadEnv, defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig(({ mode }) => {
  // This check is important!
  if (mode === 'development') {
    const env = loadEnv(mode, process.cwd(), '');
    dotenvExpand.expand({ parsed: env });
  }

  return {
    plugins: [
      vue(),
      webfontDownload([
        'https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300;400;500;600;700&display=swap'
      ])
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/_mixins.scss";`
        }
      }
    }
  };
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     webfontDownload([
//       'https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300;400;500;600;700&display=swap'
//     ])
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "./src/styles/_mixins.scss";`
//       }
//     }
//   }
// })
