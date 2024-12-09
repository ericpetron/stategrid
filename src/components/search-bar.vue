<template>
    <div >
        <div class="container search floating-input box">
        <div class="field">
        <label class="label">Search</label>
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

        <div class="dropdown floating-input" style="margin-top: 2em;" :class="{ 'is-active': filteredItems.length > 0 }">
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
    
    <!--<div >
        <div @click="captureClick" class="container floating-input search box">
            <label class="label"></label>
            <p class="control">
                <input list="USstates" name="states" id="states">
                    <datalist id="USstates">
                        <option value=""></option>   
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District Of Columbia">District Of Columbia</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                        
                    </datalist>
                    
           
                <button @click="sendString" class="button">Submit</button>
            </p>
        </div>    
        
    </div> -->
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
        top: 50%;
        left: 50%;
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
        font-size: 8px;
    }
        
</style>