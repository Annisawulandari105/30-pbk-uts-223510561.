<template>
    <div>
      <q-list bordered>
        <q-item
          v-for="album in albums"
          :key="album.id"
          clickable
          @click="showAlbum(album.id)"
        >
          <q-item-section>{{ album.title }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import axios from 'axios'
  
  export default {
    name: 'AlbumList',
    setup() {
      const albums = ref([])
  
      async function fetchAlbums() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
          albums.value = response.data
        } catch (error) {
          console.error('Error fetching albums:', error)
        }
      }
  
      function showAlbum(albumId) {
        // Navigasi ke halaman album detail
        router.push({ name: 'album', params: { albumId } })
      }
  
      // Fetch albums saat komponen dibuat
      fetchAlbums()
  
      return {
        albums,
        showAlbum
      }
    }
  }
  </script>
  