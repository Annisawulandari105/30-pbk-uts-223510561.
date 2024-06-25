<template>
    <div>
      <q-list bordered>
        <q-item
          v-for="photo in photos"
          :key="photo.id"
          clickable
          @click="showPhoto(photo.url)"
        >
          <q-item-section>
            <q-img :src="photo.thumbnailUrl" />
          </q-item-section>
          <q-item-section>{{ photo.title }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import axios from 'axios'
  
  export default {
    name: 'PhotoList',
    props: {
      albumId: {
        type: Number,
        required: true
      }
    },
    setup(props) {
      const photos = ref([])
  
      async function fetchPhotos() {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${props.albumId}/photos`)
          photos.value = response.data
        } catch (error) {
          console.error('Error fetching photos:', error)
        }
      }
  
      function showPhoto(photoUrl) {
        // Implementasi logika untuk menampilkan foto dalam ukuran penuh
        // Misalnya, menggunakan dialog atau komponen lain
        console.log('Show photo:', photoUrl)
      }
  
      // Fetch photos saat komponen dibuat
      fetchPhotos()
  
      return {
        photos,
        showPhoto
      }
    }
  }
  </script>
  