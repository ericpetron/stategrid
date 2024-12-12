<template>
    <div >
        <div class="container search floating-input box">
        <div class="field">
        <label class="label">Enter a state</label>
        <div class="control">
            <input
            class="input"
            type="text"
            v-model="output"
            @input="filterItems"
            placeholder="Type to search..."
            
            />
            <div class="control">
                <button class="button search-button" type="button is-primary" @click="sendString" >Submit</button>
            </div>
        </div>
        
        
        </div>

        <div class="dropdown floating-input" style="margin-top: 1em;" :class="{ 'is-active': filteredItems.length > 0 }">
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content ">
            <a
                v-for="item in filteredItems"
                :key="item"
                class="dropdown-item"
                @click="selectItem(item)"
            >
                {{ item }}
                
            </a>
            
            </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>




export default {
    
    
    name: "search-bar",
    data() {
        return {
            output: "",
            items: [
                    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
                    'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia',
                    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
                    'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
                    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
                    'New Jersey', 'New Mexico', 'New York', 'North Carolina',
                    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
                    'Pennsylvania', 'Rhode Island', 'South Carolina', 
                    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
                ],
                filteredItems: [],
        };
    },
    methods: {
        filterItems() {
            // Filter the list based on the query
            this.filteredItems = this.items.filter(item => 
            item.toLowerCase().includes(this.output.toLowerCase())
        );
        },
        selectItem(item) {
            // Handle item selection (e.g., set the query to the selected item)
            this.output = item;
            this.filteredItems = [];
        },
        sendString() {
            if (!(this.items.includes(this.output))) {
                alert("Please enter a state");
                return;
            }
            this.$emit("output", this.output);
        },
        
        
    },
};
</script>

<style scoped>
    .search {
        border-color: gray;
        padding: 20px;
        border-radius: 8px;
        border-width: 3px;
        width: 500px;
        max-width: 90%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-align: center;
    }
    .floating-input {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        z-index: 10;
    }
    .grid-container {
        position: relative;
        height: 100vh;
    }
        
    .dropdown-item {
    cursor: pointer;
    }
    .search-button {
        margin-top: 1em;
        font-size: 10px;
    }
        
</style>