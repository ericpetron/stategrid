<template>
    <div class="container is-centered">
        <div class="fixed-grid has-4-cols grid-box">
            <div class="grid">
                <div class="cell"></div> <!-- empty cell -->
                
                <CategoryItem class="cell cat">category</CategoryItem>
                <CategoryItem class="cell cat">category</CategoryItem>
                <CategoryItem class="cell cat">category</CategoryItem>


                <CategoryItem class="cell cat">category</CategoryItem>
                <Item class="cell"/>
                <Item class="cell"/>
                <Item class="cell"/>


                <CategoryItem class="cell cat">
                    category
                </CategoryItem>
                <Item class="cell"/>
                <Item class="cell"/>
                <Item class="cell"/>


                <CategoryItem class="cell cat">
                    category
                </CategoryItem>
                <Item class="cell"/>
                <Item class="cell"/>
                <Item class="cell"/>
            </div>
            
        </div>
    </div>
    
</template>

<script>
import CategoryItem from './category-item.vue';
import item from './item-item.vue';


export default {
    name: 'grid-item',
    components: {
        Item: item,
        CategoryItem: CategoryItem
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