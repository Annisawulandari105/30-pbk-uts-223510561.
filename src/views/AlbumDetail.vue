<template>
    <q-page>
      <q-list>
        <q-item v-for="photo in photos" :key="photo.id" clickable @click="viewPhoto(photo.url)">
          <q-item-section avatar>
            <q-img :src="photo.thumbnailUrl" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ photo.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
  
      <q-dialog v-model="photoDialog" max-width="80%">
        <q-card>
          <q-img :src="selectedPhoto" />
        </q-card>
      </q-dialog>
    </q-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAlbumStore } from '../stores/albumStore'
  
  const route = useRoute()
  const store = useAlbumStore()
  const photos = ref([])
  const photoDialog = ref(false)
  const selectedPhoto = ref('')
  
  onMounted(() => {
    store.fetchPhotos(route.params.id).then(() => {
      photos.value = store.photos
    })
  })
  
  const viewPhoto = (url) => {
    selectedPhoto.value = url
    photoDialog.value = true
  }
  </script>
  