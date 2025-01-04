import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fvsibnzyttpklwcymegh.supabase.co"
console.log(supabaseUrl)
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2c2libnp5dHRwa2x3Y3ltZWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3NzQyNDEsImV4cCI6MjA1MDM1MDI0MX0.zUsi_x27Pn9vM2BGCsOjdbfc3rMBROENfizTG3VUcoo"

export const SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// Example usage in a Vue component:
// src/components/ExampleComponent.vue
{/* <script setup>
import { onMounted } from 'vue'
import { useSupabase } from '../composables/useSupabase'

const { user, error, loading, signIn, fetchData } = useSupabase()

// Example function to fetch todos
async function fetchTodos() {
  const todos = await fetchData('todos', {
    filters: [
      { column: 'user_id', operator: 'eq', value: user.value?.id }
    ]
  })
  console.log(todos)
}

onMounted(() => {
  // Check for active session
  const activeUser = supabase.auth.getUser()
  if (activeUser) {
    user.value = activeUser
  }
})
</script> */}