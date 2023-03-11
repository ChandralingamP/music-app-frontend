<template>
  <div class="relativew-full left-0 right-0 lg:p-8 p-4 mb-16 bg-home flex flex-col">
    <div class="my-3" v-if="musicStore.showRecentlyPlayed">
      <h1 class="text-2xl font-bold text-aliceblue mb-2">Recently Played</h1>
      <div class="grid w-full gap-2 lg:grid-cols-6">
        <div class="lg:h-64 h-24 bg-artist rounded-lg" v-for="music in musicStore.recentlyPlayedList" :key="music">
          <div class="relateive lg:h-64 h-24 rounded-lg w-full hover:bg-gray-600 flex flex-col justify-between">
            <div class="absolute lg:h-64 h-24  w-56 lg:pt-40 pt-8 pl-8  flex items-start opacity-0 hover:opacity-100">
              <div @click="playSong(music)"
                class="relative bg-green-500 rounded-full h-8 w-8 flex items-center justify-center">
                <fa class=" text-white" icon="play" />
              </div>
            </div>
            <div class="flex flex-row pt-4 lg:flex-col">
              <img class="lg:h-40 lg:w-40 h-16 w-16  lg:px-3 ml-3 mx-1" :src="require(`@/assets/images/${music.imgPath}`)"
                alt="">
              <div>
                <p class="text-gray-100 mt-2 px-4">{{ music.Title }}</p>
                <p class="text-gray-300 px-5">{{ music.Artist }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="lg:text-5xl text-2xl text-white mb-4 font-bold">{{ greeting }}</h1>
    <div class="grid w-full  lg:gap-3 gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      <div class="relative  lg:h-24 h-48  w-full rounded-lg bg-artist" v-for="music in MusicDetails.music_type"
        :key="music">
        <router-link :to="'/type/' + music.type">
          <div class="absolute w-full selection:lg:h-24 h-48 flex  items-end p-4 opacity-0 hover:opacity-100">
            <div class="bg-green-500 rounded-full self-end h-8 w-8 flex items-center justify-center">
              <fa class="text-white" icon="play" />
            </div>
          </div>
        </router-link>
        <div class=" flex flex-col lg:flex-row">
          <img class="lg:h-20 h-32 lg:m-2 mb-2 m-4" :src="require(`@/assets/images/${music.imgurl}`)" />
          <p class="self-center lg:pl-4 text-sm lg:text-lg text-white">{{ music.type.toUpperCase() }}</p>
        </div>
      </div>
    </div>
    <h1 class="lg:text-4xl text-2xl mt-3 text-white mb-4 font-bold">You might like this</h1>
    <div class="grid w-full lg:gap-2 gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
      <div class="relative lg:h-64 h-48 hover:bg-gray-600 bg-artist rounded-lg"
        v-for="music_artist in MusicDetails.music_artist" :key="music_artist.artist">
        <router-link class=" flex flex-col" :to="'/artist/' + music_artist.artist">
          <div class="absolute w-full h-48 lg:h-64 flex  items-end p-4 opacity-0 hover:opacity-100">
            <div class="bg-green-500 rounded-full self-end h-8 w-8 flex items-center justify-center">
              <fa class="text-white" icon="play" />
            </div>
          </div>
        </router-link>
        <img class="lg:h-[70%] h-[70%]  w-[86%] lg:w-[86%] mt-4 mx-[7%] self-center"
          :src="require(`@/assets/images/${music_artist.imgurl}`)" />
        <p class="flex mt-3 justify-center  px-auto text-white">{{ music_artist.artist }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { MusicDetails } from '@/globalconstants/music_details';
import { useMusicStore } from '@/store/MusicStore';

export default {

  data() {
    return {
      MusicDetails,
      musicStore: false,
      greeting: 'Good Morning',
      imgd: "../assets/logo.png"
    }
  },
  methods: {
    async playSong(obj) {
      this.musicStore.currentSong = this.musicStore.dllist.getIndex(obj);
      if (this.musicStore.musicTrack) {
        this.musicStore.musicTrack.pause();
      }
      await this.musicStore.setMusicTrack();
    }
  },
  mounted() {
    this.musicStore = useMusicStore();
    this.musicStore.getRecentlyPlayed();
    if (this.recentlyPlayedList) {
      this.musicStore.createDll(this.recentlyPlayedList);
    }
    const now = new Date()
    const hours = now.getHours();
    if (hours < 12) {
      this.greeting = "Good Morning";
    } else if (hours < 15) {
      this.greeting = "Good After noon";
    } else if (hours < 19) {
      this.greeting = "Good Evening";
    } else {
      this.greeting = "Good night";
    }

  }
}



</script>
