<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Vue Project with Quasar
        </q-toolbar-title>
        <q-btn flat @click="goTo('/todos')">Todos</q-btn>
        <q-btn flat @click="goTo('/posts')">Posts</q-btn>
        <q-btn flat @click="goTo('/albums')">Albums</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goTo = (path) => {
  router.push(path);
};
</script>

<style>
/* Tambahkan gaya kustom di sini jika diperlukan */
</style>
