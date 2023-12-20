// vite.config.js
import dotenvExpand from "file:///home/fenrir/WebstormProjects/fenrirheimr/node_modules/dotenv-expand/lib/main.js";
import { loadEnv, defineConfig } from "file:///home/fenrir/WebstormProjects/fenrirheimr/node_modules/vite/dist/node/index.js";
import vue from "file:///home/fenrir/WebstormProjects/fenrirheimr/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
import webfontDownload from "file:///home/fenrir/WebstormProjects/fenrirheimr/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import vercel from "file:///home/fenrir/WebstormProjects/fenrirheimr/node_modules/vite-plugin-vercel/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///home/fenrir/WebstormProjects/fenrirheimr/vite.config.js";
var vite_config_default = defineConfig(({ mode }) => {
  if (mode === "development") {
    const env = loadEnv(mode, process.cwd(), "");
    dotenvExpand.expand({ parsed: env });
  }
  return {
    plugins: [
      vue(),
      vercel(),
      webfontDownload([
        "https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@300;400;500;600;700&display=swap"
      ])
    ],
    vercel: {
      "rewrites": [{ "source": "/(.*)", "destination": "/" }]
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
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
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9mZW5yaXIvV2Vic3Rvcm1Qcm9qZWN0cy9mZW5yaXJoZWltclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZmVucmlyL1dlYnN0b3JtUHJvamVjdHMvZmVucmlyaGVpbXIvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZmVucmlyL1dlYnN0b3JtUHJvamVjdHMvZmVucmlyaGVpbXIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgZG90ZW52RXhwYW5kIGZyb20gJ2RvdGVudi1leHBhbmQnO1xuaW1wb3J0IHsgbG9hZEVudiwgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IHdlYmZvbnREb3dubG9hZCBmcm9tICd2aXRlLXBsdWdpbi13ZWJmb250LWRsJztcbmltcG9ydCB2ZXJjZWwgZnJvbSAndml0ZS1wbHVnaW4tdmVyY2VsJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICAvLyBUaGlzIGNoZWNrIGlzIGltcG9ydGFudCFcbiAgaWYgKG1vZGUgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKTtcbiAgICBkb3RlbnZFeHBhbmQuZXhwYW5kKHsgcGFyc2VkOiBlbnYgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgdmVyY2VsKCksXG4gICAgICB3ZWJmb250RG93bmxvYWQoW1xuICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb2ZpYStTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnXG4gICAgICBdKVxuICAgIF0sXG4gICAgdmVyY2VsOiB7XG4gICAgICBcInJld3JpdGVzXCI6IFt7IFwic291cmNlXCI6IFwiLyguKilcIiwgXCJkZXN0aW5hdGlvblwiOiBcIi9cIiB9XVxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiLi9zcmMvc3R5bGVzL19taXhpbnMuc2Nzc1wiO2BcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuLy8gZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbi8vICAgcGx1Z2luczogW1xuLy8gICAgIHZ1ZSgpLFxuLy8gICAgIHdlYmZvbnREb3dubG9hZChbXG4vLyAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb2ZpYStTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnXG4vLyAgICAgXSlcbi8vICAgXSxcbi8vICAgcmVzb2x2ZToge1xuLy8gICAgIGFsaWFzOiB7XG4vLyAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuLy8gICAgIH1cbi8vICAgfSxcbi8vICAgY3NzOiB7XG4vLyAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuLy8gICAgICAgc2Nzczoge1xuLy8gICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCIuL3NyYy9zdHlsZXMvX21peGlucy5zY3NzXCI7YFxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlMsT0FBTyxrQkFBa0I7QUFDdFUsU0FBUyxTQUFTLG9CQUFvQjtBQUN0QyxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlLFdBQVc7QUFDbkMsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxZQUFZO0FBTHVLLElBQU0sMkNBQTJDO0FBTzNPLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBRXhDLE1BQUksU0FBUyxlQUFlO0FBQzFCLFVBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUMzQyxpQkFBYSxPQUFPLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFBQSxFQUNyQztBQUVBLFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLFFBQ2Q7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixZQUFZLENBQUMsRUFBRSxVQUFVLFNBQVMsZUFBZSxJQUFJLENBQUM7QUFBQSxJQUN4RDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUN0RDtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
