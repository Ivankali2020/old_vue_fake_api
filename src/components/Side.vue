<template>
  <div class="">
    <div class="pt-3">
      <div class="logo d-flex justify-content-between align-items-center">
        <div class="">
          <h4 class="text-primary">Add Cart</h4>
          <span class="text-black-50">Selected Items </span>
        </div>
        <div class=" ">
          <i class="fa fa-cart-plus h2"> <sup>{{ whishList.length }} </sup> </i>
        </div>
        <div class="d-block d-xl-none">
          <button @click="close" class="btn btn-outline-primary" id="closeDetail">
            <i class="fa fa-arrow-alt-circle-left"></i>
            
          </button>
        </div>
      </div>
      <!-- whishLis  -->
      <div class="" v-if="whishList.length">
        <div class="buyBox" v-for="(item,index) in whishList" :key="index">
              <div class="card"  >
                <div class="card-body">
                  <div class="buy-item d-flex justify-content-between">
                    <img src="" class="buy-img" alt="" srcset="" />
                    
                    <button @click="$emit('DelList',item)" class="btn btn-sm btn-outline-danger "><i class="fa fa-trash-alt text-danger"></i></button>
                  </div>
                  <div class="">
                    <p class="buy-title">{{ item.name }}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center form-group">
                      <button @click="minusQualtity(item)" class="btn btn-sm btn-outline-primary buy-minus">
                        <i  class="fa fa-minus"></i>
                        
                      </button>
                      <input
                        type="number"
                        class="buy-input w-50 form-control input-sm"
                        v-model.number="item.qualtity"
                        @change="changeQualtity(item)"
                        min="1"
                      />
                      <button @click="plusQualtity(item)" class="btn btn-sm btn-outline-primary buy-plus">
                        <i class="fa fa-plus"></i>
                        
                      </button>
                    </div>
                    <div class="d-flex align-items-center">
                      <h5 class="mb-0 me-2 me-md-3">$</h5>
                      <span id="buy-dollar " class="ml-1 fw-bolder d-inline">{{ item.total }}</span>
                    </div>
                  </div>
                </div>
              </div>
            
        </div>
      </div>
      <div class="card card-body my-3 " v-else>Nothing To Show WishList</div>
      
      

      
      <!-- whishLis  -->

      <div
        class="
          buyTotal
          d-flex
          justify-content-between
          align-items-center
          mx-2
          mt-4
        "
      >
        <h6>Total</h6>
        <div class="">
          <span>$ <span id="total-buy"> </span> {{ whishList.length ? total : '0' }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Side',
  props: {
    whishList: {
      type: Array,
    },
  },
  data() {
    return {
      
    }
  },
  computed: {
    total() {
      let no = this.whishList.map(el=>el.total);
      return  no.reduce((x,y)=>x+y);
    },
  
  
  },
  methods: {
    plusQualtity(x) {
      x.qualtity++;
      return x.total = x.qualtity * x.price; 
    },
    changeQualtity(x){
       return x.total = x.qualtity * x.price; 
    },
    minusQualtity(x){
      if(x.qualtity <= 1 ){
        return alert('danger');
      } 
      else{
        x.qualtity--;
        return x.total = x.qualtity * x.price; 
      }
    },
    close(){
      this.$parent.sidebar = false;
    },
   


  },
};
</script>

<style scoped></style>
