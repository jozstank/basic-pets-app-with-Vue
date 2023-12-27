<template>
  <router-view :pets="pets"></router-view>
</template>
<script>
export default {
  data() {
    return {
      pets: [
        {
          id: 1,
          name: "Bella",
          age: 1,
          type: "Cat",
          breed: "Ragdoll",
          hobbies: ["walks", "car rides", "napping"],
          picture:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg",
        },
        {
          id: 2,
          name: "Charlie",
          age: 6,
          type: "Cat",
          breed: "American Shorthair",
          hobbies: ["eating", "napping", "barking"],
          picture:
            "https://i.pinimg.com/originals/ac/f4/8d/acf48d2edf5ba7bdb393ae5bdb17b3b5.jpg",
        },
        {
          id: 3,
          name: "Lucy",
          age: 5,
          type: "Cat",
          breed: "Tabby",
          hobbies: ["eating", "napping", "climbing"],
          picture:
            "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg",
        },
      ],
    };
  },
};
</script>
