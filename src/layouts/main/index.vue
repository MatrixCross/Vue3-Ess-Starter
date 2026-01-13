<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useStore } from '@/hooks'

defineOptions({ name: 'MainLayout' })

const { t } = useI18n()
const { changeLocale, localeOptions } = useStore('app')
const { resetStore } = useStore('auth')
const { toggleThemeScheme, themeScheme } = useStore('theme')

function handleLanguageSelect(key: I18n.LangType) {
  changeLocale(key)
}

function handleLogout() {
  resetStore()
}
</script>

<template>
  <div class="wh-full flex flex-col bg-layout transition-colors duration-300">
    <!-- Header -->
    <header class="h-16 flex-y-center justify-between bg-container px-6 shadow-sm transition-colors duration-300">
      <div class="text-xl text-primary font-bold">
        {{ t('system.title') }}
      </div>

      <div class="flex-center space-x-4">
        <!-- Theme Toggle -->
        <n-button circle quaternary @click="toggleThemeScheme()">
          <template #icon>
            <div v-if="themeScheme === 'dark'" class="i-carbon-moon text-xl" />
            <div v-else-if="themeScheme === 'auto'" class="i-carbon-laptop text-xl" />
            <div v-else class="i-carbon-sun text-xl" />
          </template>
        </n-button>

        <!-- Language Select -->
        <n-dropdown trigger="hover" :options="localeOptions" @select="handleLanguageSelect">
          <n-button circle quaternary>
            <template #icon>
              <div class="i-carbon-language text-xl" />
            </template>
          </n-button>
        </n-dropdown>

        <!-- Logout -->
        <n-button circle quaternary @click="handleLogout">
          <template #icon>
            <div class="i-carbon-logout text-xl" />
          </template>
        </n-button>
      </div>
    </header>

    <!-- Content -->
    <main class="flex-1 overflow-auto p-4">
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
