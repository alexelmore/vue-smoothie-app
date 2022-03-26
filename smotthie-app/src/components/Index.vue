<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)"
          >delete</i
        >
        <h2 class="indigo-text">
          {{ smoothie.title }}
          <ul class="ingredients">
            <li
              v-for="(ingredient, index) in smoothie.ingredients"
              :key="index"
            >
              <span class="chip">{{ ingredient }}</span>
            </li>
          </ul>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Index",
  data() {
    return {
      smoothies: [],
    };
  },
  methods: {
    // Method to delete a smoothie from our smoothies data property
    deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter((smoothie) => {
        return smoothie.id !== id;
      });
    },
  },
  created() {
    // Send a request to our Firebase DB to fetch the data
    db.collection("smoothies")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let smoothie = doc.data();
          smoothie.id = doc.id;
          this.smoothies.push(smoothie);
        });
      });
  },
};
</script>

<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>