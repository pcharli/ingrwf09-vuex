<template>
  <div class="home">
    <ul>
      <li v-for="(fruit, index) in allfruits" :key="index">{{ fruit.label}} à {{ fruit.prix}} € <a href="" v-if="testConnect" @click.prevent="editFruit(index)">edit</a></li>
    </ul>
    <h2>En stock</h2>
    <ul>
      <li v-for="(fruit, index) in allFruitsStock" :key="index">{{ fruit.label}} à {{ fruit.prix}} €</li>
    </ul>
    <hr>
    <form @submit.prevent="updateFruit" action="" v-if="testConnect">
      <input type="text" v-model="selectedFruit.label">
      <input type="text" v-model="selectedFruit.prix">
      <input type="checkbox" v-model="selectedFruit.stock">Stock
      <input type="hidden" v-model="selectedFruit.index">
      <button>Edit</button>
      </form>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  computed: {
    allfruits() {
      return this.$store.getters.allFruits
    },
    allFruitsStock() {
      return this.$store.getters.stockFruits
    },
    testConnect() {
      return this.$store.getters.testConnect
    }
  },
  data() {
    return {
      selectedFruit: {}
    }
  },
  methods: {
    editFruit(index) {
      //console.log(index)
      this.selectedFruit = { ... this.allfruits[index] }
      this.selectedFruit.index = index
    },
    updateFruit() {
      this.$store.commit("updateFruit", this.selectedFruit)
    }
  }
}
</script>
