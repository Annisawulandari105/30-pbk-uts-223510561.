<template>
    <q-page>
      <q-list>
        <q-item v-for="album in albums" :key="album.id" clickable @click="goToAlbum(album.id)">
          <q-item-section>
            <q-item-label>{{ album.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-page>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { useAlbumStore } from '../stores/albumStore'
  import { onMounted } from 'vue'
  
  const router = useRouter()
  const store = useAlbumStore()
  
  const goToAlbum = (id) => {
    router.push(`/albums/${id}`)
  }
  
  onMounted(() => {
    store.fetchAlbums()
  })
  
  const albums = store.albums
  </script>
  