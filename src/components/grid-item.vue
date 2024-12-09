<template>
    <div class="container center grid-box">
        <div class="fixed-grid has-4-cols">
            <div class="grid">
                <div class="cell"></div> <!-- empty cell -->
                
                <div class="cell">category</div>
                <div class="cell">category</div>
                <div class="cell">category</div>


                <div class="cell">category</div>
                <Item class="cell"/>
                <Item class="cell"/>
                <Item class="cell"/>


                <div class="cell">
                    category
                </div>
                <Item class="cell"/>
                <Item class="cell"/>
                <Item class="cell"/>


                <div class="cell">
                    category
                </div>
                <Item class="cell"/>
                <Item class="cell"/>
                <Item class="cell"/>
            </div>
            
        </div>
    </div>
    
</template>

<script>
import item from './item-item.vue';


export default {
    name: 'grid-item',
    components: {
        Item: item,

    }
}
</script>


<style>
    .grid-box {
        
        grid-gap: 5px;
        height: 300px;
        width: 330px;
        max-width: 330px;
        max-height: 300px;
    }
</style>