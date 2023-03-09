<template>
    <!-- {{ $route.params }} -->
    <div class="bg-home h-screen">
        <div class="flex h-72 p-6  bg-gray-500">
            <div class="h-60 bg-pink-600 flex justify-center w-60">
                <fa class="text-white self-center h-20" icon="heart" />
            </div>
            <div class="flex ml-10 flex-col justify-center text-white h-60">
                <h2 class="text-md mb-1">PUBLIC PLAYLIST</h2>
                <h1 class="text-6xl font-bold">{{ this.$route.name }} Songs
                </h1>
                <p class="text-lg mt-4 text-gray-200">{{musicStore.userName}}</p>
            </div>
        </div>
        <div class="">
            <hr class="mt-16 mx-8">
        </div>
        <div class="text-white bg-home px-8">
            <div class="h-14 mt-2 rounded-lg w-full hover:bg-gray-600 flex justify-between" v-for="music in playlist"
                :key="music">
                <MusicContainer :music="music" />
            </div>
        </div>
    </div>

</template>

<script >
import MusicContainer from '@/components/MusicContainer.vue'
import { useMusicStore } from '@/store/MusicStore'
export default {
    data() {
        return {
            playlist: false,
            name : false,
            musicStore: useMusicStore()
        }
    },
    components :{
        MusicContainer
    },
    mounted() {
        const musicStore = useMusicStore()
        if (musicStore.musics == false) {
            musicStore.getMusics();
        }
        this.name = this.$route.params.name;
        console.log(this.name);
        const data = musicStore.playList.filter((obj) => obj.PlayListName == this.name)
        console.log(data[0].newPlayList);
        this.playlist = data[0].newPlayList;
        musicStore.createDll(this.playlist);
    },

}
</script>