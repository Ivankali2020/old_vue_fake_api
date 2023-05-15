<template>
    <div class="d-flex flex-column flex-md-row  justify-content-between">
        <div class="me-3 d-flex "> 
            <input type="text" @keyup="search()" v-model="searchValue" class="form-control me-3 " placeholder="Search Items" name="search">
            <button :class="['btn btn-outline-primary']">Search</button>
        </div>
        <div class="d-flex mt-4 mt-md-0 ">
              <select @change="categorySelect()" v-model.number="categoryValue" name="select" id="" class="form-select  me-5">
                <option value="-1" selected>All</option>
                <option value="50">$50 Lower</option>
                <option value="100">$100 Lower</option>
                <option value="200">$100 Lower</option>
                <option value="250">$250 Lower</option>
                <option value="300">$300 Lower</option>
            </select>
            <button @click="sideBar()" class="btn btn-outline-primary d-block d-xl-none"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'New',
        props:[],
        data() {
            return {               
               searchValue : '',
               categoryValue: '',
            }
        },
        methods: {
            sideBar() {
                return this.$parent.sidebar = !this.$parent.sidebar;
            },
            search(){  
                this.$parent.searchValue = this.searchValue;
                return this.$emit('search',this.searchValue);
            },
            categorySelect(){
                this.$parent.categoryValue = this.categoryValue;
                console.log(this.categoryValue);
            }
        },
        mounted () {
            console.log(this.$parent.sidebar);
        },
    }
</script>

<style scoped>
.delete {
  animation: 0.5s bounce;
}
</style>