<template>
  <div id="app">
      <div class="container mt-5 ">
        <div class="row">
            <div class="col-12  sticky-top py-3 ">
                <New @search='search' ></New>
            </div>  
            <div class="col-12 col-xl-9 mt-5" >
              <div :class="['row']" v-if="sit.length" >
                  <Card @toParent='run' v-for="(item,i) in (categoryValue > 0 ? category : sit)" :key="i" :item='item'></Card>
              </div>
              <div class="card card-body" v-else>
                There is Nothing Matching Item in List
              </div>
            </div>

            <div id="sidebar" :class="[sidebar ? ' col-5 col-md-4 d-block col-xl-3 border mt-0  active' : 'col-12 d-none d-xl-block col-xl-3 border mt-5'] ">
               <Side @DelList='DelList' :whishList='buyItems'></Side>
            </div>   
        </div>
          
      </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import New from './components/New.vue'
import Side from './components/Side.vue'


export default {
  components: { New, Card, Side },
  name:'App',
  data() {
    return {
      sidebar : false,
      items: [

        {'id': 1,'name':'ivan','price':21 , 'total' : 21 , 'qualtity' : 1,},
        {'id': 2,'name':'mother','price':77, 'total' : 77 , 'qualtity' : 1,},
        {'id': 3,'name':'father','price':221, 'total' : 221 , 'qualtity' : 1,},
        {'id': 4,'name':'sister','price':400, 'total' : 400 , 'qualtity' : 1,},
        {'id': 5,'name':'Juniro','price':150, 'total' : 150 , 'qualtity' : 1,},
         {'id': 6,'name':'ivan','price':21 , 'total' : 21 , 'qualtity' : 1,},
        {'id': 7,'name':'mother','price':254, 'total' : 254 , 'qualtity' : 1,},
        {'id': 8,'name':'father','price':221, 'total' : 221 , 'qualtity' : 1,},
        {'id': 9,'name':'sister','price':400, 'total' : 400 , 'qualtity' : 1,},
        {'id': 10,'name':'Juniro','price':217, 'total' : 217 , 'qualtity' : 1,},

      ],
      buyItems:[],
      searchValue : '',
      categoryValue : '',
           
    }
  },
  computed: {
    sit(){
      return this.items.filter(el=>el.name.includes(this.searchValue));
    },
    category(){
      return this.items.filter(el=> el.price < this.categoryValue);
    }
  },
  methods: {
    run(x) {
      if(this.buyItems.find(el=>el.price==x.price)){
        return alert('what the fuck');  
      }
      this.buyItems.push(x);
      console.log(x)
    },
    search(){
      // let aa = this.items;
      // if(x.trim().length != 0){

      // this.items = aa.filter(el => { 
      //       if(el.name.indexOf(x) > -1 ){
      //         return el;
      //       }
      // });
     
      // }else{ window.location.reload(); }
      
    },
    DelList(x){
      this.buyItems = this.buyItems.filter(el=>el.id != x.id);
      console.log(x);
    }


      
    
  },
 
}
</script>

<style scoped>
.delete {
  animation: 0.5s bounce;
}

.active{
  height: 500px;
  background-color: rebeccapurple;
  position: absolute;
  top: 0;
  left: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
