<template>
    <div class="container center">
        <div class="fixed-grid has-4-cols grid-box">
            <div class="grid">
                <div class="cell cat"></div> <!-- empty cell -->
                
                <div class="cell cat">category</div>
                <div class="cell cat">category</div>
                <div class="cell cat">category</div>


                <div class="cell cat">category</div>
                <Item class="cell"/>
                <Item class="cell"/>
                <Item class="cell"/>


                <div class="cell cat">
                    category
                </div>
                <Item class="cell"/>
                <Item class="cell"/>
                <Item class="cell"/>


                <div class="cell cat">
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
    .cat {
    display: flex;
    align-items: center;
    justify-content: center;

    
    font-size: 18px;
    font-weight: bold;
    height: 100px;
    width: 100px;
    }
    .grid-box {
        position: absolute;
        top: 50%;
        left: 25%;
        grid-gap: 5px;
        height: 300px;
        width: 330px;
        max-width: 330px;
        max-height: 300px;
    }
</style>