<template>
    <div class="container is-centered">
        <div class="fixed-grid has-4-cols grid-box">
            <div class="grid">
                <div class="cell"></div> <!-- empty cell -->
                
                <CategoryItem ref="cat-0" class="cell cat">category</CategoryItem>
                <CategoryItem ref="cat-1" class="cell cat">category</CategoryItem>
                <CategoryItem ref="cat-2" class="cell cat">category</CategoryItem>

                <CategoryItem ref="cat-3" class="cell cat">category</CategoryItem>
                <Item id="0" ref="item-0" @click="selectItem(0)" class="cell"/>
                <Item id="1" ref="item-1" @click="selectItem(1)" class="cell"/>
                <Item id="2" ref="item-2" @click="selectItem(2)" class="cell"/>

                <CategoryItem ref="cat-4" class="cell cat">
                    
                </CategoryItem>
                <Item id="3" ref="item-3" @click="selectItem(3)" class="cell"/>
                <Item id="4" ref="item-4" @click="selectItem(4)" class="cell"/>
                <Item id="5" ref="item-5" @click="selectItem(5)" class="cell"/>

                <CategoryItem ref="cat-5" class="cell cat">
                    category
                </CategoryItem>
                <Item id="6" ref="item-6" @click="selectItem(6)" class="cell"/>
                <Item id="7" ref="item-7" @click="selectItem(7)" class="cell"/>
                <Item id="8" ref="item-8" @click="selectItem(8)" class="cell"/>
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
            show: false,
            currentlySelected: -1
        };
    },
    components: {
        Item: item,
        CategoryItem: CategoryItem,
        SearchBar: SearchBar
    },
    methods: {
        selectItem(id) {
            this.currentlySelected = id;
            this.show = !this.show;
            console.log(id)
        },
        handleSubmit(output) {
            if (this.currentlySelected === -1) {
                return;
            }
            this.show = false;
            console.log(output)
            const selectedItem = this.$refs[`item-${this.currentlySelected}`];
            console.log(selectedItem)
            if (selectedItem) {
                selectedItem.USstate = output;
                selectedItem.setUSState();
            }
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