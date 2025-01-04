
// src/composables/useSupabase.js
import { ref } from 'vue'
import { SupabaseClient as supabase } from './supabaseClient' 
console.log(supabase)
export function useSupabase() {
  const user = ref(null)
  const error = ref(null)
  const loading = ref(false)
  
  

  // Database functions
  async function fetchData(cat1, cat2) {
    try {
      loading.value = true
      let queryBuilder = supabase.rpc('on_sub', {cat1: cat1, cat2: cat2})
      const { data, error: fetchError } = await queryBuilder
      console.log("data");
      console.log(data);
      if (fetchError) throw fetchError




      return data
    } catch (fetchError) {
      error.value = fetchError.message
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
