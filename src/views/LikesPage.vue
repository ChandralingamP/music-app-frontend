<template>
    <div class="bg-home h-screen">
        <div class="flex lg:h-72 h-52 p-6  bg-gray-500">
            <div class="lg:h-60 h-40 w-40 bg-pink-600 flex justify-center lg:w-60">
                <fa class="text-white self-center h-20" icon="heart" />
            </div>
            <div class="flex lg:ml-10 ml-3 flex-col  justify-center text-white lg:h-60">
                <h2 class="text-md mb-1">PUBLIC PLAYLIST</h2>
                <h1 class="lg:text-6xl text-2xl font-bold">Liked Songs </h1>
                <p v-if="musicStore.userName != false" class="text-lg lg:mt-4 mt-1 text-gray-200">{{ musicStore.userName }}</p>
            </div>
        </div>
        <!-- <div class="flex flex-col w-full px-8">
            <h1 class="text-white text-lg mt-4 font-semibold">Let's find something for your playlist</h1>
            <div class="searchBar mt-3 lg:w-96 bg-gray-300 flex px-4 rounded-md py-1">
                <fa class="h-5 bg-gray-300 py-1 w-5" icon="magnifying-glass" />
                <input class="ml-3 text-lg bg-transparent outline-none w-full" type="search" placeholder="hello">
            </div>
        </div> -->
        <div v-if="musicStore.likedSongsPlaylist" class="text-white lg:pb-20 pb-36 bg-home lg:px-8 px-4">
            <div class="h-14 mt-2 rounded-lg w-full hover:bg-gray-600 flex justify-between" v-for="music in musicStore.likedSongsPlaylist"
                :key="music">
                <MusicContainer :music="music" />
            </div>
        </div>
    </div>
</template>


<script setup>
import { useMusicStore } from '@/store/MusicStore';
import MusicContainer from '@/components/MusicContainer.vue';
import { onMounted} from 'vue';
const musicStore = useMusicStore();
onMounted(() => {
    musicStore.getLikedPlaylist();
})
</script>