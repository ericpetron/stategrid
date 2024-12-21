
// src/composables/useSupabase.js
import { ref } from 'vue'
import { SupabaseClient as supabase } from '@supabase/supabase-js' 
console.log(supabase)
export function useSupabase() {
  const user = ref(null)
  const error = ref(null)
  const loading = ref(false)
  
  

  // Database functions
  async function fetchData(table, query = {}) {
    try {
      loading.value = true
      let queryBuilder = supabase.from(table).select()
      
      // Apply filters if any
      if (query.filters) {
        query.filters.forEach(filter => {
          queryBuilder = queryBuilder.filter(
            filter.column,
            filter.operator,
            filter.value
          )
        })
      }
      
      const { data, error: fetchError } = await queryBuilder
      if (fetchError) throw fetchError
      return data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  async function insertData(table, data) {
    try {
      loading.value = true
      const { data: insertedData, error: insertError } = await supabase
        .from(table)
        .insert(data)
        .select()
      if (insertError) throw insertError
      return insertedData
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    error,
    loading,
    fetchData,
    insertData,
    supabase // Expose supabase client for direct access if needed
  }
}
