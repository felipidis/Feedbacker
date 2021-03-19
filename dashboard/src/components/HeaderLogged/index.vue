<template>
  <div class="flex items-center justify-between w-4/5 max-w-6xl py-10">
    <div class="invisible sm:visible w-28 lg:w-36">
      <img class="w-full" src="../../assets/images/logo_white.png" alt="logo" />
    </div>

    <div class="flex">
      <ul class="flex list-none">
        <li
          @click="() => router.push({ name: 'Credencials' })"
          class="px-6 py-2 -ml-6 sm:ml-0 mr-2 mt-2 sm:mt-0 justify-center font-bold text-white text-xs sm:text-base  rounded-full cursor-pointer focus:outline-none"
        >
          Credenciais
        </li>
        <li
          @click="() => router.push({ name: 'Feedbacks' })"
          class="px-6 py-2 -ml-6 mbm:ml-0 mr-2 mt-2 sm:mt-0 items-center font-bold text-white text-xs sm:text-base rounded-full cursor-pointer focus:outline-none"
        >
          Feedbacks
        </li>
        <li
          id="logout-button"
          @click="handleLogout"
          class="px-6 py-2  font-bold bg-white text-xs sm:text-base rounded-full cursor-pointer text-brand-main focus:outline-none"
        >
          {{ logoutLabel }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import useStore from '../../hooks/useStore'
import { clearUser } from '../../store/user'

export default {
  setup () {
    const router = useRouter()
    const store = useStore('User')

    const logoutLabel = computed(() => {
      if (!store.currentUser.name) {
        return '...'
      }
      return `${store.currentUser.name} (sair)`
    })

    function handleLogout () {
      window.localStorage.removeItem('token')
      clearUser()
      router.push({ name: 'Home' })
    }

    return {
      router,
      logoutLabel,
      handleLogout
    }
  }
}
</script>
