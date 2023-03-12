<template>
    <div class="bg-home">
        <div class="bg-gray-500 flex py-5 flex-col px-8 justify-center text-white lg:h-60">
            <h2 class="text-lg mb-1">PUBLIC PLAYLIST</h2>
            <h1 class="text-6xl font-bold">{{ musicStore.newPlayListName }}</h1>
            <p class="text-lg mt-4 text-gray-200">{{ musicStore.userName }}</p>
        </div>
        <div class="flex flex-col lg:mt-5 p-4 lg:mx-20" v-if="musicStore.newPlayList.length != 0">
            <h1 class="text-white font-bold text-lg lg:text-2xl">New Play List </h1>
            <div class="h-16 items-center text-white mx-0 hover:bg-gray-700 rounded-md justify-between flex bg-gray-800 m-2"
                v-for="new1 in musicStore.newPlayList" :key="new1">
                <div class="flex mx-3 my-1 w-full">
                    <img class="h-12 w-12" :src="require(`@/assets/images/${new1.imgPath}`)" alt="">
                    <div class="lg:ml-6 ml-2">
                        <p class="text-semibold">{{ cropTitle(new1.Title) }}</p>
                        <p class="text-gray-300">{{ new1.Artist }}</p>
                    </div>
                </div>
                <div class="lg:mr-10 mr-3 flex items-center align-center justify-center">
                    <fa class="h-6  text-green-600 rounded-full text-xl lg:text-2xl font-bold w-6 mr-2 lg:mr-8" icon="check-circle" />
                    <button @click="removeMusic(new1)"
                        class="lg:h-10  lg:w-10 w-7 h-7 text-white bg-gray-500 rounded-full text-2xl font-bold">
                        <fa icon="remove" />
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col pt-0 p-4 lg:px-20">
            <h1 class="text-white text-lg mt-3 font-semibold">Let's find something for your playlist</h1>
            <div class="searchBar my-3 w-full lg:w-96 bg-gray-300 flex px-4 rounded-md py-1">
                <fa class="h-5 bg-gray-300 py-1 w-5" icon="magnifying-glass" />
                <input @keyup="resultQuery" v-model="searchQuery" class=" ml-3 text-lg bg-transparent outline-none w-full"
                    type="search" placeholder="search">
            </div>
            <div v-if="searchResults.length != 0">
                <div class="h-16 items-center hover:bg-gray-700 mx-0 rounded-md justify-between flex bg-gray-800 m-2"
                    v-for="music in searchResults" :key="music">
                    <div class="flex mx-3 my-1 w-full">
                        <img class="h-12 w-12" :src="require(`@/assets/images/${music.imgPath}`)" alt="">
                        <div class="lg:ml-6 ml-2">
                            <p class="text-semibold">{{ music.Title }}</p>
                            <p class="text-gray-300">{{ music.Artist }}</p>
                        </div>
                    </div>
                    <div class="lg:mr-10 pb-2 py-auto items-center align-center mr-3">
                        <button @click="addMusic(music)"
                            class="lg:h-10 lg:w-10 w-7 h-7 align-center items-center text-white bg-gray-500 rounded-full text-xl lg:text-2xl font-bold">
                            <fa icon="add" />
                        </button>
                    </div>
                </div>
            </div>
            <div v-else>
                <p>No Records Found</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMusicStore } from '@/store/MusicStore'
import axios from 'axios';
import { onMounted, onUnmounted } from 'vue';
const MusicStore = useMusicStore();
const addMusic = (music) => {
    if (!MusicStore.newPlayList.includes(music))
        MusicStore.newPlayList = [...MusicStore.newPlayList, music];
}
const removeMusic = (new1) => {
    MusicStore.newPlayList = MusicStore.newPlayList.filter((obj) => obj._id != new1._id);
}
onMounted(() => {
    MusicStore.createUserPlayList()
})
onUnmounted(() => {
    console.log("hii");
    if (MusicStore.newPlayList.length > 0) {
        MusicStore.saveUserPlayList();
    } else {
        axios.delete(MusicStore.root_uri + "/playlist/delete/" + MusicStore.userId + '/' + MusicStore.newPlayListName);
        MusicStore.playList.pop();
    }
})
const cropTitle = (title)=>{
    return title.slice(0,25);
}

</script>


<script>
export default {
    data() {
        return {
            musicStore: useMusicStore(),
            searchResults: false,
            searchQuery: "",
            color: ["bg-pink-600", "bg-pink-700", "bg-purple-800", "bg-indigo-800", "bg-blue-700", "bg-green-600", "bg-yellow-700", "bg-red-800", "bg-red-500", "bg-blue-500"]
        }
    },
    methods: {
        async getSlice() {
            this.searchResults = await this.musicStore.getSample()
        },
        async resultQuery() {
            if (this.searchQuery) {
                const details = await this.musicStore.getSearchResults(this.searchQuery);
                this.searchResults = details.slice(0, 15);
            } else {
                this.searchResults = await this.musicStore.getSample()
            }
        }
    },
    mounted() {
        this.musicStore = useMusicStore()
        this.getSlice();
    }

}



</script>