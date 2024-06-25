<template>
    <div>
      <h2>{{ albumTitle }}</h2>
      <photo-list :albumId="albumId" />
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import PhotoList from '../components/PhotoList.vue'
  
  export default {
    components: {
      PhotoList
    },
    setup() {
      const route = useRoute()
      const albumId = ref(parseInt(route.params.albumId))
      const albumTitle = ref('')
  
      // Simulasi fetch album detail dari JSONPlaceholder
      // Secara aktual, Anda akan mengganti ini dengan request API yang sesungguhnya
      async function fetchAlbumDetail() {
        try {
          // Request untuk mendapatkan detail album
          // Contoh:
          // const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId.value}`)
          // albumTitle.value = response.data.title
          albumTitle.value = `Album ${albumId.value}`
        } catch (error) {
          console.error('Error fetching album detail:', error)
        }
      }
  
      fetchAlbumDetail()
  
      return {
        albumId,
        albumTitle
      }
    }
  }
  </script>
  