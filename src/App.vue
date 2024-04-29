<template>
  <div class="background">
    <h1>Annisa Wulandari</h1>
    <h2>Tabel kegiatan</h2>
    <form @submit.prevent="addActivity">
      <input type="text" v-model="newActivity" placeholder="Masukkan kegiatan baru">
      <button type="submit">Tambahkan</button>
    </form>
    <br>
    <div>
      <button @click="toggleCompleted">Tampilkan Kegiatan Selesai</button>
      <button @click="toggleIncomplete">Tampilkan Kegiatan Belum Selesai</button>
      <button @click="showAll">Tampilkan Semua Kegiatan</button>
    </div>
    <br>
    <table>
      <thead>
        <tr>
          <th>Hobi</th>
          <th>Keterangan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="activity in filteredActivities" :key="activity.id" :class="{ completed: activity.completed }">
          <td>
            <span :style="{ 'text-decoration': activity.completed ? 'line-through' : 'none' }">{{ activity.name }}</span>
          </td>
          <td>
            <span>{{ activity.completed ? 'Telah Selesai' : 'Belum Selesai' }}</span>
            <input type="checkbox" v-model="activity.completed">
          </td>
          <td>
            <button @click="cancelActivity(activity.id)">Batalkan</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="feedback">{{ feedback }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const activities = ref([
      { id: 1, name: 'Membaca', completed: false },
      { id: 2, name: 'Menulis', completed: false }
    ]);

    const newActivity = ref('');
    const feedback = ref('');
    const showCompleted = ref(false);
    const showIncomplete = ref(false);

    function addActivity() {
      if (newActivity.value.trim() !== '') {
        activities.value.push({ id: Date.now(), name: newActivity.value, completed: false });
        newActivity.value = '';
        feedback.value = 'Kegiatan berhasil ditambahkan';
      } else {
        feedback.value = 'Mohon masukkan kegiatan';
      }
    }

    function cancelActivity(id) {
      const index = activities.value.findIndex(activity => activity.id === id);
      if (index !== -1) {
        activities.value.splice(index, 1);
        feedback.value = 'Kegiatan berhasil dibatalkan';
      }
    }

    function toggleCompleted() {
      showCompleted.value = !showCompleted.value;
    }

    function toggleIncomplete() {
      showIncomplete.value = !showIncomplete.value;
    }

    function showAll() {
      showCompleted.value = false;
      showIncomplete.value = false;
    }

    const filteredActivities = computed(() => {
      if (showCompleted.value && !showIncomplete.value) {
        return activities.value.filter(activity => activity.completed);
      } else if (!showCompleted.value && showIncomplete.value) {
        return activities.value.filter(activity => !activity.completed);
      } else {
        return activities.value;
      }
    });

    return { 
      activities, 
      newActivity, 
      feedback, 
      addActivity, 
      cancelActivity, 
      showCompleted, 
      showIncomplete, 
      filteredActivities,
      toggleCompleted,
      toggleIncomplete,
      showAll
    };
  }
}
</script>

<style>
.background {
  background-color: rgba(245, 245, 245, 0.325);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 20px;
}



table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

th {
  background-color: lightgrey;
  text-align: center;
}

.completed span {
  text-decoration: line-through;
}
</style>
