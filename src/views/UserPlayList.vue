<template>
    <!-- {{ $route.params }} -->
    <div class="bg-home h-screen">
        <div class="flex lg:h-72 h-42 h-52  p-6  bg-gray-500">
            <div class="lg:h-60 h-40 w-40 bg-pink-600 flex justify-center lg:w-60">
                <fa class="text-white self-center h-20" icon="heart" />
            </div>
            <div class="flex lg:ml-10 ml-3 flex-col justify-center text-white lg:h-60">
                <h2 class="text-md mb-1">PUBLIC PLAYLIST</h2>
                <h1 class="lg:text-6xl text-2xl font-bold">{{ this.$route.name }} Songs
                </h1>
                <p class="text-lg lg:mt-4 mt-1 text-gray-200">{{ musicStore.userName }}</p>
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
import axios from 'axios'
export default {
    data() {
        return {
            playlist: false,
            name: false,
            musicStore: useMusicStore()
        }
    },
    components: {
        MusicContainer
    },
    mounted() {
        const musicStore = useMusicStore()
        this.name = this.$route.params.name;
        const data = musicStore.playList.filter((obj) => obj.PlayListName == this.name)
        console.log(data[0].newPlayList);
        this.playlist = data[0].newPlayList
        if (musicStore.likedSongs) {
            const d = this.playlist.map((D) => {
                if (musicStore.likedSongs.includes(D._id)) { D.Fav = true; return D }
                else {
                    return D;
                }
            });
            this.playlist = d;
            musicStore.createDll(this.playlist);
            console.log("bye");
        } else {
            this.getLikes();
        }
        
    },
    methods: {
        async getLikes() {
            const id = localStorage.getItem("uid");
            const res = await axios.get(this.root_uri + "/likes/" + id);
            this.musicStore.likedSongs = res.data;
            const d = this.playlist.map((D) => {
                if (this.musicStore.likedSongs.includes(D._id)) { D.Fav = true; return D }
                else {
                    return D;
                }
            });
            this.playlist = d;
            this.musicStore.createDll(this.playlist);
            console.log("hii");
        }
    },

}
</script>