<template>
    <div class="relativew-full mb-20 lg:mb-2 left-0 py-4 px-8 bg-home flex flex-col">
        <div class="searchBar lg:w-[400px] lg:mx-auto w-full  bg-white flex px-4 rounded-3xl py-1">
            <fa class="h-5 py-1 w-5" icon="magnifying-glass" />
            <input @keyup="resultQuery"  v-model="searchQuery" class="ml-3  w-full text-lg outline-none" type="search"
                placeholder="search">
        </div>
        <!-- Search Results -->
        <div v-if="flag">
            <div v-if="topResult.length > 0">
                <div class="h-96 ml-8 rounded-lg flex mt-4">
                    <div  class="ml-2 text-white">
                        <h2 class="font-bold text-xl text-white">Top Result</h2>
                        <div v-for="music in topResult" :key="music" @click="playSong(music)"
                            class="h-80  mt-4 w-80 rounded-lg hover:bg-gray-800 flex flex-col">
                            <img class=" self-center h-56 w-56 m-4" src="../assets/images/thumbnail.jpg" alt="">
                            <p class="ml-10">{{ music.Title }}</p>
                            <p class="ml-10">{{ music.Artist }}</p>
                        </div>
                    </div>
                    <!-- Results -->
                    <div v-if="searchResults.length > 0" class="ml-5 w-full bg-home ">
                        <h2 class="mb-4 font-bold text-xl text-white ">Results</h2>
                        <div v-for="music in searchResults" :key="music">
                            <MusicContainer title="Chandralingam" :music="music" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <p>No results found</p>
            </div>
        </div>
        <!--End of Search Results -->
        <h1 class="text-white pt-4 font-semibold mb-1 lg:mb-4 text-3xl">Browse all</h1>
        <div>
            <div class="grid w-full  lg:gap-3 gap-4 grid-cols-2 lg:grid-cols-5">
                <div class="lg:h-60 h-44 overflow-hidden rounded-lg m-2 flex flex-col "
                    :class="color[Math.floor(Math.random() * color.length)]"
                    v-for="music_artist in MusicDetails.music_artist" :key="music_artist.artist">
                    <router-link :to="'/artist/' + music_artist.artist">
                        <p class="flex mt-5 justify-center  px-auto text-white">{{ music_artist.artist.toUpperCase() }}</p>
                        <img class="h-36 rotate-45 mt-16  self-end"
                            :src="require(`@/assets/images/${music_artist.imgurl}`)" />
                    </router-link>
                </div>
                <div class="lg:h-60 h-44 overflow-hidden rounded-lg m-2 flex flex-col"
                    :class="color[Math.floor(Math.random() * color.length)]" v-for="music_album in MusicDetails.music_album"
                    :key="music_album.album">
                    <!-- {{ music_album }} -->
                    <router-link :to="'/album/' + music_album.album">
                        <p class="flex mt-5 justify-center  px-auto text-white">{{ music_album.album.toLocaleUpperCase() }}
                        </p>
                        <img class="h-36 rotate-45 lg:mt-16 mt-10  self-end"
                            :src="require(`@/assets/images/${music_album.imgurl}`)" />
                    </router-link>
                </div>
            </div>
        </div>
</div>
</template>
<script>
import { useMusicStore } from '@/store/MusicStore'
import { MusicDetails } from '@/globalconstants/music_details';
import MusicContainer from '@/components/MusicContainer.vue';
export default {
    data() {
        return {
            MusicDetails,
            musicStore: useMusicStore(),
            searchResults: false,
            topResult: false,
            flag: false,
            searchQuery: "",
            color: ["bg-pink-600", "bg-pink-700", "bg-purple-800", "bg-indigo-800", "bg-blue-700", "bg-green-600", "bg-yellow-700", "bg-red-800", "bg-red-500", "bg-blue-500"]
        }
    },
    components: {
        MusicContainer
    },
    methods: {
        getColor() {
            return true;
        },
        async playSong(obj) {
            this.musicStore.currentSong = this.musicStore.dllist.getIndex(obj);
            if (this.musicStore.musicTrack) {
                this.musicStore.musicTrack.pause();
            }
            await this.musicStore.setMusicTrack();
        },
        async resultQuery() {
            if (this.searchQuery) {
                this.flag = true
                const details = await this.musicStore.getSearchResults(this.searchQuery);
                if(details){
                    this.musicStore.createDll(details);
                    this.topResult = details.slice(0, 1);
                    this.searchResults = details.slice(1, 6);
                }
            } else{
                this.searchResults = this.musicStore.getSample()
            }
        }
    },
    mounted() {
        this.musicStore = useMusicStore()
    }
}



</script>