import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // 将@配置为指向项目根目录下的src目录
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'], // 添加 .vue 扩展名
  },
})
