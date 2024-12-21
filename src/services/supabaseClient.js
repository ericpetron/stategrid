import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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