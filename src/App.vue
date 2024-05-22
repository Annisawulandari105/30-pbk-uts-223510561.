<template>
  <div class="background">
    <header>
      <nav>
        <ul>
          <li @click="showTodos">Todos</li>
          <li @click="showPosts">Post</li>
          <li @click="showPosts">user</li>
        </ul>
      </nav>
    </header>
    <main>
      <div v-if="showTodosSection">
        <!-- Fitur Todos -->
        <h2>Fitur Todos</h2>
        <select v-model="selectedUser">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
        <div v-if="selectedUser">
          <h3>Postingan untuk User: {{ selectedUser }}</h3>
          <ul>
            <li v-for="post in posts" :key="post.id" v-if="post.userId === selectedUser">
              <p><strong>Title:</strong> {{ post.title }}</p>
              <p><strong>Body:</strong> {{ post.body }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <!-- Fitur Postingan -->
        <h2>Fitur Postingan dari User</h2>
        <p>Gunakan https://jsonplaceholder.typicode.com/ sebagai resource data</p>
      </div>
    </main>
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
    <h1>Parent Component</h1>
    <p>{{ parentMessage }}</p>
    <ChildComponent :message="parentMessage" @updateMessage="updateMessage" />
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'App',
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

    const showTodosSection = ref(false);
    const users = [
      { id: 1, name: 'Leanne Graham' },
      { id: 2, name: 'Ervin Howell' },
      { id: 3, name: 'Clementine Bauch' },
      { id: 4, name: 'Patricia Lebsack' },
      { id: 5, name: 'Chelsey Dietrich' },
      { id: 6, name: 'Mrs. Dennis Schulist' },
      { id: 7, name: 'Kurtis Weissnat' },
      { id: 8, name: 'Nicholas Runolfsdottir V' },
      { id: 9, name: 'Glenna Reichert' },
      { id: 10, name: 'Clementina DuBuque' }
    ];
    const selectedUser = ref(null);
    const posts = ref([]);

    function showTodos() {
      showTodosSection.value = true;
      if (posts.value.length === 0) {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => {
            posts.value = data;
          });
      }
    }

    function showPosts() {
      showTodosSection.value = false;
    }

    const parentMessage = ref('Hello from Parent');

    function updateMessage(newMessage) {
      parentMessage.value = newMessage;
    }

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
      showAll,
      showTodos,
      showPosts,
      showTodosSection,
      users,
      selectedUser,
      posts,
      parentMessage,
      updateMessage
    };
  },
  components: {
    ChildComponent: {
      props: ['message'],
      template: `
        <div>
          <h2>Child Component</h2>
          <p>{{ message }}</p>
          <input v-model="newMessage" placeholder="Enter new message">
          <button @click="sendMessage">Update Parent Message</button>
        </div>
      `,
      data() {
        return {
          newMessage: ''
        };
      },
      methods: {
        sendMessage() {
          this.$emit('updateMessage', this.newMessage);
        }
      }
    }
  }
};
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
