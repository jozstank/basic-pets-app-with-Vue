<script>
export default {
  props: {
    pet: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="img">
      <img :src="pet.picture" alt="imgae" />
    </div>
    <router-link :to="`/pet/${pet.id}`">
      <h1>{{ pet.name }}</h1>
    </router-link>
    <p>{{ pet.age }} years old</p>
    <p>{{ pet.breed }}</p>
    <p v-for="(hoby, index) in pet.hobbies" :key="index">{{ hoby }}</p>
  </div>
</template>

<style scoped>
.img {
  width: 100%;
  height: 200px;
  border: 1px solid green;
}
img {
  width: 100%;
  height: inherit;
  object-fit: cover;
}
.main {
  width: 200px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid gray;
}
</style>
