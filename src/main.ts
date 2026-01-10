import { createApp } from 'vue'
import App from './App.vue'
import { setupDayjs, setupLoading, setupNProgress } from '@/plugins'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { setupI18n } from '@/locales'
import './styles'

async function setupApp() {
  setupLoading()
  setupNProgress()
  setupDayjs()
  const app = createApp(App)
  setupStore(app)
  await setupRouter(app)
  setupI18n(app)
  app.mount('#app')
}

setupApp()
