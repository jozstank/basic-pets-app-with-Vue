<script>
import PetCard from "@/components/PetCard.vue";
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
  computed: {
    pet() {
      return this.pets.find((pet) => {
        return pet.id === Number(this.$route.params.id);
      });
    },
  },
};
</script>

<template>
  <router-link to="/">
    <p>back to all cats</p>
  </router-link>
  <PetCard :pet="pet"></PetCard>
</template>
