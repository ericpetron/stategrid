<template>
  <div @click="toggleState" class="item">
    
    <div v-if="!state">
      <p>Before</p>
    </div>
    <div v-else>
      <p class="state-style">{{ rarity }}</p>
      
      <img class="img-style" :src="flagLink" alt="State Flag">
      <p class="state-style">{{ USstate }}</p>
    </div>

  
  </div>
</template>

<script>
import { useSupabase } from '@/lib/useSupabase';
// import { ref, onMounted } from 'vue';

const { fetchData } = useSupabase()


export default {

  name: "Item-item",
  
  components: {
  },
  data() {
    return {
      state: false,
      inputReceived: false,
      rarity: "",
      USstate: "",
      flagLink: "",
      listOfStates: {
        'Alabama': 'al', 'Alaska': 'ak', 'Arizona': 'az', 'Arkansas': 'ar', 'California': 'ca', 
        'Colorado': 'co', 'Connecticut': 'ct', 'Delaware': 'de', 'Florida': 'fl', 'Georgia': 'ga', 
        'Hawaii': 'hi', 'Idaho': 'id', 'Illinois': 'il', 'Indiana': 'in', 'Iowa': 'ia', 'Kansas': 'ks', 
        'Kentucky': 'ky', 'Louisiana': 'la', 'Maine': 'me', 'Maryland': 'md', 'Massachusetts': 'ma', 
        'Michigan': 'mi', 'Minnesota': 'mn', 'Mississippi': 'ms', 'Missouri': 'mo', 'Montana': 'mt', 
        'Nebraska': 'ne', 'Nevada': 'nv', 'New Hampshire': 'nh', 'New Jersey': 'nj', 'New Mexico': 'nm', 
        'New York': 'ny', 'North Carolina': 'nc', 'North Dakota': 'nd', 'Ohio': 'oh', 'Oklahoma': 'ok', 
        'Oregon': 'or', 'Pennsylvania': 'pa', 'Rhode Island': 'ri', 'South Carolina': 'sc', 
        'South Dakota': 'sd', 'Tennessee': 'tn', 'Texas': 'tx', 'Utah': 'ut', 'Vermont': 'vt', 
        'Virginia': 'va', 'Washington': 'wa', 'West Virginia': 'wv', 'Wisconsin': 'wi', 'Wyoming': 'wy'
      },
    }
  },
  methods: {
    // set USSstate will do the intersection logic.
      async setUSState() {
        this.inputReceived = true;
        this.state = true
        if (!Object.keys(this.listOfStates).includes(this.USstate)) {
          this.USstate = "Invalid State"
        }
        const res = await fetchData(1,2);
        console.log(res)
        // supabase call here,
        // then jsonifiy the response
        // check if state is in the response
        // if so run get rarity and get flag
        this.getFlag()
        this.getRarity()


      },
      async getFlag() {
        if (this.USstate === "Invalid State" || !this.inputReceived) {
          this.flagLink = `@/assets/flags/invalid.png`
        }
        const stateAbbreviation = this.listOfStates[this.USstate]
        
        
        return this.flagLink = require(`@/assets/state-flags/${stateAbbreviation}.svg`)
      },
      getRarity() {
        if (this.USstate === "Invalid State" || !this.inputReceived) {
          this.rarity = "Invalid State"
        }
        if (this.USstate === "California" || this.USstate === "Texas" || this.USstate === "Florida" || this.USstate === "New York") {
          this.rarity = "Common"
        }
        else {
          this.rarity = "Rare"
        }
      },
    },
  
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #7e7e7e;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  height: 150px;
  width: 150px;
}
.img-style {
  
  width: 100px;
  background-size: cover;
}
.state-style {
  font-size: 9px;
  font-weight: bold;
  margin: 0.5em;
}
</style>