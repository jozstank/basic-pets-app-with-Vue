<script>
import PetCard from "../components/PetCard.vue";
export default {
  props: {
    pets: {
      type: Array,
      required: true,
    },
  },
  components: {
    PetCard,
  },
};
</script>

<template>
  <div class="card-container">
    <PetCard v-for="pet in pets" :key="pet.id" :pet="pet"></PetCard>
  </div>
</template>
<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
