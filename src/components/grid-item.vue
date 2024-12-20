<template>
    <div class="container is-centered">
        <div class="fixed-grid has-4-cols grid-box">
            <div class="grid">
                <div class="cell"></div> <!-- empty cell -->
                
                <CategoryItem class="cell cat">category</CategoryItem>
                <CategoryItem class="cell cat">category</CategoryItem>
                <CategoryItem class="cell cat">category</CategoryItem>


                <CategoryItem class="cell cat">category</CategoryItem>
                <Item id="0" @click="selectItem(0)" class="cell"/>
                <Item id="1" @click="selectItem(1)" class="cell"/>
                <Item id="2" @click="selectItem(2)" class="cell"/>


                <CategoryItem class="cell cat">
                    category
                </CategoryItem>
                <Item id="3" @click="selectItem(3)" class="cell"/>
                <Item id="4" @click="selectItem(4)" class="cell"/>
                <Item id="5" @click="selectItem(5)" class="cell"/>


                <CategoryItem class="cell cat">
                    category
                </CategoryItem>
                <Item id="6" @click="selectItem(6)" class="cell"/>
                <Item id="7" @click="selectItem(7)" class="cell"/>
                <Item id="8" @click="selectItem(8)" class="cell"/>
            </div>
           
        </div>
        
    </div>
    <div v-if="show">
        <SearchBar @keyup.esc="selectItem(-1)" @output="handleSubmit"/>
    </div>
    
    
</template>

<script>
import CategoryItem from './category-item.vue';
import item from './item-item.vue';
import SearchBar from './search-bar.vue';


export default {
    name: 'grid-item',
    data() {
        return {
            show: false
        };
    },
    components: {
        Item: item,
        CategoryItem: CategoryItem,
        SearchBar: SearchBar
    },
    methods: {
        selectItem(id) {
            this.show = !this.show;
            this.handleSubmit(id)
        },
        handleSubmit(output) {
            console.log(output)
            // Select the item with id "output" and send it there.
        }
    }
}
</script>


<style>
    
    .grid-box {

        
        grid-gap: 5px;
        height: 300px;
        width: 400px;
        max-width: 400px;
        max-height: 300px;
    }
</style>