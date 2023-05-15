<template>
  <div>
    <h1 id="name" class="text-white">To Do List</h1>
    <h3 style="color: red" v-if="error">Write Something Bae</h3>
    <input
      type="text"
      class="form-control d-inline w-25"
      v-model="test"
      @keyup.enter="add()"
    />
    <button @click="add()" class="btn btn-outline-dark">add</button>

    <div v-if="arr.length">
      <span>Total {{ arr.length }}</span>

      <span v-if="countCheck == arr.length" class="text-success">
        AllDone {{ countCheck }}
      </span>
      <span v-else-if="countCheck">Check {{ countCheck }} </span>

      <ul
        v-for="(a, index) in arr"
        :key="index"
        class="btn list-group w-25 m-auto"
      >
       
        <li
          :class="[
            'list-group-items d-flex justify-content-between text-white',
            { delete: a.delete },
          ]"
        >
          <input
            type="checkbox"
            :id="'check' + a.id"
            class="form-control-checkbox mr-5"
            @click="check(a)"
          />
          <input
            type="text"
            class="form-control w-25 d-inline"
            v-if="a.edit"
            @keyup.enter="update(a.id)"
            v-model="updateText"
          />
          <label v-else :for="'check' + a.id" :class="[{ delete: a.checkbox }]">
            {{ a.name }}
          </label>
          <button class="btn btn-warning btn-sm" @click="e(a.id)">edit</button>
          <button class="btn btn-primary btn-sm" @click="del(a)">delete</button>
        </li>
      </ul>
    </div>
    <div v-else>no availabel to do lists</div>

    <!-- <New :test="arr"></New> -->
  </div>
</template>

<script>
// import New from './New.vue';
export default {
  // components: { New },
  name: "HelloWorld",
  data() {
    return {
      error: false,
      test: "",
      updateText: "",
      arr: [],
      count: 1,
    };
  },
  computed: {
    countCheck() {
      return this.arr.filter((el) => el.checkbox === true).length;
    },
  },
  methods: {
    check(x) {
      console.log((x.checkbox = !x.checkbox));

      // this.arr = this.arr.map(el=>el.id == x.id ? el.checkbox =true : el.checkbox = false);
    },
    add() {
      if (this.test.length != "") {
        this.arr.push({
          checkbox: false,
          name: this.test,
          id: this.count,
          edit: false,
          delete: false,
        });
        this.count++;
        this.test = "";
        this.error = false;
      } else {
        this.error = true;
      }
    },

    del(x) {
      x.delete = true;
      // let del = this.arr.filter(el => el.name == x);
      // del[0].delete = true;
      // console.log( del[0].delete = true)
      setTimeout(() => {
        this.arr = this.arr.filter((el) => el.name != x.name);
      }, 500);
    },

    e(id) {
      this.arr.map((el) => {
        if (el.id == id) {
          el.edit = true;
        }
      });
    },

    update(id) {
      if (this.updateText.length != "") {
        this.arr.map((el) => {
          if (el.id == id) {
            el.name = this.updateText;
            el.edit = false;
          }
        });
        this.updateText = "";
        this.error = false;
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style  scoped>
.delete {
  animation: 0.5s bounce;
}


</style>