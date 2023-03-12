
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
    <div v-if="musicStore.dllist"
        class="w-full z-20 lg:h-20 flex lg:flex-row flex-col items-center justify-between bg-gray-800">
        <div
            class="flex w-full border-b lg:border-none border-b-slate-600 px-5 py-3 lg:w-1/3 pl-10 justify-between overflow-hidden items-center">
            <div>
                <h1 class="lg:mb-1 text-md text-white tracking-wide">{{ musicStore.currentSongData.Title }}</h1>
                <p class="hidden lg:block text-sm text-gray-400 tracking-wide">{{ musicStore.currentSongData.Singer }}</p>
                <div class="news-ticker lg:hidden ">
                    <p class="text-sm w-300px text-gray-400 tracking-wide">{{ musicStore.currentSongData.Singer }}</p>
                </div>
            </div>
            <fa @click="removeLike(musicStore.currentSongData)" v-if="musicStore.currentSongData.Fav" class="ml-5 text-base text-green-300"
                icon="heart" />
            <fa @click="addLike(musicStore.currentSongData)" v-if="!musicStore.currentSongData.Fav" class="ml-5 text-base text-gray-200"
                icon="heart" />
        </div>
        <div class="lg:w-2/3 w-full px-5 lg:py-4 flex flex-col items-center py-2">
            <div class="flex items-center">
                <button @click="prev" class="outline-none w-20">
                    <fa class="text-xl hover:text-green-500 text-gray-300" icon="backward" />
                </button>
                <button v-if="musicStore.pause == true" @click="playSong" class="outline-none border-1 w-20">
                    <fa class="text-2xl hover:text-green-500 text-gray-300" icon="pause-circle" />
                </button>
                <button v-if="musicStore.pause != true" @click="ResumeSong" class="outline-none border-1 w-20">
                    <fa class="text-2xl hover:text-green-500 text-gray-300" icon="play-circle" />
                </button>
                <button @click="next" class="outline-none w-20">
                    <fa class="text-xl hover:text-green-500 text-gray-300" icon="forward" />
                </button>
            </div>
            <div class="w-full flex">
                <div class="mr-5">
                    <p>{{ calDur(musicStore.musicTiming) }}</p>
                </div>
                <input id="progressBar" class="w-full bg-green-500" type="range" @change="handleChange()"
                    :value="musicStore.musicTiming" :min="0" :max="musicStore.currentSongData.Duration">
                <div class="ml-5">
                    <p>{{ calDur(musicStore.currentSongData.Duration) }}</p>
                </div>
            </div>
        </div>
        <div class="lg:flex hidden w-1/5 pr-4 items-center flex-row justify-center">
            <fa @click="removeLike(musicStore.currentSongData)" v-if="musicStore.currentSongData.Fav" class="ml-5 text-base text-green-300"
                icon="heart" />
            <fa @click="addLike(musicStore.currentSongData)" v-if="!musicStore.currentSongData.Fav" class="ml-5 text-base text-gray-200"
                icon="heart" />
        </div>
    </div>
</template>


<script setup>
import './musicControl'

import './audioplayer.css'
// import {ref} from 'vue'
import { useMusicStore } from '@/store/MusicStore';

const musicStore = useMusicStore();
const playSong = async () => {
    console.log(musicStore.currentSongData.Fav);
    if (musicStore.musicTrack) {
        musicStore.pauseSong();
    } else {
        await musicStore.setMusicTrack();
    }
}

const addLike = (music) => {
    if (musicStore.likedSongs.length == 0) {
        musicStore.likedSongs = [music._id];
    } else {
        musicStore.likedSongs = [...musicStore.likedSongs, music._id]
    }
    for (const key in music) {
        if (Object.hasOwnProperty.call(music, key)) {
            if (key == "Fav") music[key] = true;
        }
    }
    musicStore.updateFav();
}
const removeLike = (music) => {
    for (const key in music) {
        if (Object.hasOwnProperty.call(music, key)) {
            if (key == "Fav") music[key] = false;
        }
    }
    musicStore.likedSongs = musicStore.likedSongs.filter((obj) => obj != music._id)
    musicStore.updateFav();
}


const ResumeSong = async () => {
    if (musicStore.musicTrack) {
        musicStore.resumeSong();
    } else {
        await musicStore.setMusicTrack();
    }
}
const prev = async () => {
    const newobj = musicStore.dllist.previousSong(musicStore.currentSong);
    musicStore.currentSong = musicStore.dllist.getIndex(newobj);
    if (musicStore.musicTrack) {
        musicStore.musicTrack.pause();
    }
    await musicStore.setMusicTrack();
}
const next = async () => {
    const newobj = musicStore.dllist.nextSong(musicStore.currentSong);
    musicStore.currentSong = musicStore.dllist.getIndex(newobj);
    if (musicStore.musicTrack) {
        musicStore.musicTrack.pause();
    }
    await musicStore.setMusicTrack();
}

const handleChange = () => {
    const v = document.getElementById('progressBar').value;
    musicStore.setTime(v);
}
const calDur = (time) => {
    var mind = time % (60 * 60);
    var minutes = Math.floor(mind / 60);
    minutes = (minutes < 10 ? "0" : "") + minutes;
    var secd = mind % 60;
    var seconds = Math.ceil(secd);
    seconds = (seconds < 10 ? "0" : "") + seconds;
    var res = minutes + ':' + seconds;
    return res;
}
</script>

