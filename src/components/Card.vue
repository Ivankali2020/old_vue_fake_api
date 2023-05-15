<template>
             <div class="col-12 col-md-6 col-xl-4 mb-4"  >
                <div class="card C_card" >
                <img src="../assets/logo.png" alt="" class="card-img-top imgStyle"  />
                <div class="card-body">
                    <div class="card-title text-primary">{{ item.name }}</div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                    
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                    <span>$ <span>{{ item.price }}</span></span>
                    <button @click="addCart(item)" class="btn btn-outline-primary">
                        Add <i  class="fa fa-car-alt"></i>
                    </button>
                    </div>
                </div>
                </div>
             </div>
       
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
      addCart(x) {
        this.$emit('toParent',x);
      }
  },
};
</script>

<style  scoped>
.imgStyle{
    width: 100px;
    transition: .5s all ease;
}

.card:hover .imgStyle{
    transform: translateX(40px);
}
</style>