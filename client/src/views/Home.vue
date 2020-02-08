<template>
  <div class="home">
    <page-title :text="'Главная страница'" />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';

export default {
  name: 'Home',
  components: {
    PageTitle,
  }
}
</script>
