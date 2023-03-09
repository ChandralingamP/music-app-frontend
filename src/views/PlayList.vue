<template>
    <div class="bg-home min-h-screen">
        <div class="flex lg:h-72 h-52 p-6  bg-gray-500">
            <div class="lg:h-60 h-40 w-40 bg-pink-600 flex justify-center lg:w-60">
                <fa class="text-white self-center h-20" icon="heart" />
            </div>
            <div class="flex lg:ml-10 ml-3 flex-col justify-center text-white lg:h-60">
                <h2 class="text-md mb-1">PUBLIC PLAYLIST</h2>
                <h1 class="lg:text-6xl text-2xl font-bold">{{ playlistname }} Songs </h1>
                <p v-if="musicStore.userName != false" class="text-lg lg:mt-4 mt-1 text-gray-200">{{ musicStore.userName }}</p>
            </div>
        </div>
        <div class="">
            <hr class="lg:mt-16 mt-4 mx-2 lg:mx-8">
        </div>
        <div class="text-white bg-home lg:px-8 px-2 pb-3">
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
            playlistname: this.$route.params.value,
            musicStore: false,
        }
    },
    components: {
        MusicContainer
    },
    mounted() {
        this.musicStore = useMusicStore()
        const type = this.$route.params.type;
        const value = this.$route.params.value;
        this.setPlayList(type,value)
        this.playlist = true;
    },
    unmounted() {
        if (this.musicStore.userId) {
            this.musicStore.updateLikedList()
            console.log(this.musicStore.likedSongs);
        }
    },
    methods: {
        async setPlayList(type, value) {
            if (type == "type") {
                try{
                    this.playlist = await this.musicStore.getPlayList("type",value,"j")
                }catch(err){
                    console.log(err);
                }
            } else if (type == "album") {
                try{
                    this.playlist = await this.musicStore.getPlayList("playlist",value,"j")
                }catch(err){
                    console.log(err);
                }
            } else if (type == "artist") {
                try{
                    this.playlist = await this.musicStore.getPlayList("artist",value,"j")
                }catch(err){
                    console.log(err);
                }
            }
            this.musicStore.createDll(this.playlist);
        },
    }
}
</script>