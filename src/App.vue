<template>
  <div class="relative min-h-screen bg-home w-full overflow-hidden">
    <div class="lg:hidden flex justify-between h-10 bg-gray-800 w-full">
      <fa @click="toggle" class="h-6 w-6 p-2 text-aliceblue" icon="bars" />
      <p class="px-4 self-center text-lg" v-if="musicStore.userName">
        {{ musicStore.userName }}
      </p>
      <p class="self-center " v-if="!musicStore.userName">
        <RouterLink class="text-white pl-8 mb-2 flex rounded-md" v-if="musicStore.isLoggedIn == false" to="/login">
          <h2 class="px-4 text-lg">Login</h2>
        </RouterLink>
      </p>
    </div>
    <div class="relative flex">
      <div :class="toggler">
        <NavBar :isLoggedIn="musicStore.isLoggedIn" @toggle="toggle" @handler="handleSignOut" />
      </div>
      <div class="relative w-full lg:ml-60 mb-20">
        <div>
          <router-view />
        </div>
      </div>
      <div class="fixed bottom-0 w-full">
        <MusicPlayer />
      </div>
    </div>
  </div>
</template>

<script setup>
import MusicPlayer from './components/MusicPlayer.vue';
import { onMounted } from 'vue';
import axios from 'axios';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth'
let auth;

const musicStore = useMusicStore()
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      musicStore.isLoggedIn = true;
      musicStore.userId = user.uid;
      const res = await axios.get("https://musicappserver-1-x3219821.deta.app/users/:"+user.uid);
      // const res = await axios.get('http://localhost:5000/users/' + user.uid)
      musicStore.userName = res.data.userName;
    } else {
      musicStore.isLoggedIn = false;
      musicStore.userId = false;
    }
  })
})
const handleSignOut = () => {
  signOut(auth).then(() => {
    localStorage.removeItem('uid');
    router.push('/')
  })
}
</script>

<script>
import NavBar from './components/NavBar.vue';

import { storeToRefs } from 'pinia';

import { useMusicStore } from '@/store/MusicStore';
import router from './router';

export default {
  data() {
    return {
      toggler: 'hidden lg:block'
    }
  },
  methods: {
    toggle() {
      if (this.toggler == 'hidden lg:block') {
        this.toggler = 'block absolute';
      } else {
        this.toggler = 'hidden lg:block';
      }
    }
  },
  name: 'App',
  components: {
    NavBar,
    MusicPlayer
  },
  setup() {
    const musicStore = useMusicStore()
    const { createUserPlayList,musics,showRecentlyPlayed,updateFav, getPlayList, dllist, createDll, recentlyPlayedList, recentlyPlayed, getRecentlyPlayed, musicTiming, songUrl, setTime, currentSongData, currentSong, saveUserPlayList, updateLikedList, setMusicTrack, newPlayListName, isLoggedIn, setDetails, pauseSong, userId, resumeSong, setFav, likedSongs, pasue, loading, getUserPlayList, getType, getArtist } = storeToRefs(musicStore);
    return { createUserPlayList,musics,showRecentlyPlayed,updateFav, getPlayList, dllist, createDll, recentlyPlayedList, recentlyPlayed, getRecentlyPlayed, musicTiming, songUrl, setTime, currentSongData, currentSong, saveUserPlayList, updateLikedList, setMusicTrack, newPlayListName, isLoggedIn, setDetails, pauseSong, userId, resumeSong, setFav, likedSongs, pasue, loading, getUserPlayList, getType, getArtist }
  }
}
</script>
