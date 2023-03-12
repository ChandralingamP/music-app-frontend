
<style>
.news-ticker {
  height: 30px;
  width: 100%;
  overflow: hidden;
}
@keyframes ticker {
  0% {
    transform: translateX(0%);
  }
  100%{
    transform:  translateX(-100%);
  }
}
.news-ticker p {
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline-block;
  animation: ticker 12s linear infinite;
}
</style>

<template>
    <div class="bg-home py-6 lg:px-10 px-3 pb-16 lg:pb-0">
        <h1 class="text-white ml-2 font-bold text-3xl mb-5">Play List</h1>
        <div class="flex flex-col lg:flex-row flex-wrap">
            <Router-Link to="/likes">
                <div  v-if="musicStore.likedSongsPlaylist.length "
                    class="lg:h-72 lg:px-4 h-16 py-2 flex flex-row col-span-2 rounded-lg pl-6  text-white bg-green-400 m-2 lg:flex-col justify-center">
                    <div :for="song in musicStore.likedSongs" :key="song">
                        <fa icon="heart" class="lg:text-6xl text-4xl pt-2 lg:pt-0  mx-auto" />
                    </div>
                    <div class="flex ml-4 lg:ml-0 flex-col">
                        <h1 class="lg:mt-8  lg:text-3xl text-xl font-bold">Liked Songs</h1>
                        <h4 class="lg:mt-5 text-md font-medium">{{ musicStore.likedSongsPlaylist.length }} liked songs</h4>
                    </div>
                </div>
            </Router-Link>
            <Router-Link to="/createplaylist">
                <div
                    class="h-16 lg:h-72 px-7 flex flex-row lg:flex-col justify-center justify-items-center rounded-lg text-white lg:mx-3 hover:bg-gray-700 bg-gray-800 m-2">
                    <div class="lg:self-center">
                        <fa icon="add" class="lg:h-8 h-6  lg:pt-0  pt-5 mr-2 lg:mr-0" />
                    </div>
                    <h2 class="lg:mt-4 self-center">Create New PlayList</h2>
                </div>
            </Router-Link>
            <div :v-if="musicStore.playList.length"
                class="lg:h-72 p-4 overflow-hidden rounded-lg text-white hover:bg-gray-700 bg-gray-800 m-2"
                v-for="num in musicStore.playList" :key="num">
                <router-link :to="'/playlist/' + num.PlayListName">
                    <div class="flex flex-row lg:flex-col ">
                        <div class="lg:h-44 lg:w-full h-16 w-16 lg:mb-5 rounded-lg  bg-gray-400">
                        </div>
                        <div class="ml-4 lg:ml-0 ">
                            <h2 class="text-semibold text-xl my-1">{{ num.PlayListName }}</h2>
                            <div class="news-ticker">
                                <p class="text-gray-300 text-semibold">By {{ musicStore.userName }}</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMusicStore } from '@/store/MusicStore'
import { onMounted} from 'vue';
const musicStore = useMusicStore();
onMounted(() => {
    musicStore.getUserPlayList();
})

</script>


