<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid v-slot="{ item }" :items="items">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
    <hr class="my-4" />
    <!-- <h2>{{ $person.name }}</h2> -->
    <!-- <button class="btn btn-primary" @click="person.say">click person</button> -->
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  },
};
</script>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};

const items = ref(['사과', '포도', '딸기', '바나나']);
// const person = inject('person');
// console.log('person.name: ', person.name);
</script>

<style lang="scss" scoped></style>
