
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

    100% {
        transform: translateX(-100%);
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
    <div class="relateive h-16 pt-2 rounded-lg w-full hover:bg-gray-600 flex justify-between">
        <!-- {{ music }} -->
        <div @click="playSong(music)" class="absolute w-full h-12  flex items-start  opacity-0 lg:hover:opacity-100">
            <div class="bg-green-500 rounded-full mt-2 ml-4 h-8 w-8 flex items-center justify-center">
                <fa class="text-white" icon="play" />
            </div>
        </div>
        <div class="flex">
            <img class="h-12 w-12 mx-2" :src="music.imgPath" alt="">
            <div>
                <p class="hidden lg:block text-gray-100"> {{ music.Title }}</p>
                <p class="lg:hidden text-gray-100"> {{ cropTitle(music.Title) }}</p>
                <p class="hidden lg:block text-gray-300">{{ music.Artist }}</p>
                <div class="news-ticker lg:hidden">
                    <p class=" w-300px text-gray-300">{{ music.Artist }}</p>
                </div>
            </div>
        </div>
        <div class="h-12 z-0 py-auto lg:w-24 w-8 flex justify-around lg:mr-10 mr-4">
            <div class=" flex items-center mr-2 justify-center">
                <div @click="addLike(music)" v-if="music.Fav == false">
                    <fa class="lg:hover:text-white text-black self-center" icon="heart" />
                </div>
                <div @click="removeLike(music)" v-else>
                    <fa class="text-green-400 self-center" icon="heart" />
                </div>
            </div>
            <p class="text-gray-200 self-center">{{ calDur(music.Duration) }}</p>
        </div>
    </div>
</template>

<script setup>
import { useMusicStore } from '@/store/MusicStore';
const musicStore = useMusicStore();
const playSong = async (obj) => {
    musicStore.currentSong = musicStore.dllist.getIndex(obj);
    if (musicStore.musicTrack) {
        musicStore.musicTrack.pause();
    }
    await musicStore.setMusicTrack();
}
const calDur = (time) => {
    var mind = time % (60 * 60);
    var minutes = Math.floor(mind / 60);
    let secd = mind % 60;
    var seconds = Math.ceil(secd);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var res = minutes + ':' + seconds;
    return res;
}
const cropTitle = (title) => {
    return title.slice(0, 24);
}
</script>


<script>
export default {
    name: 'musicContainer',
    props: ['music'],
    data() {
        return {
            flag: false,
            musicStore: useMusicStore()
        }
    },
    mounted() {
        this.flag = this.music.Fav;
    },
    methods: {
        addLike(music) {
            if (this.musicStore.userId) {
                if (this.musicStore.likedSongs) {
                    console.log(this.musicStore.likedSongs?.includes(music._id));
                    this.musicStore.likedSongs = [...this.musicStore.likedSongs, music._id]
                    for (const key in music) {
                        if (Object.hasOwnProperty.call(music, key)) {
                            if (key == "Fav") music[key] = true;
                        }
                    }
                    this.musicStore.updateLikedList();
                    this.musicStore.updateFav(true);
                } else {
                    this.musicStore.likedSongs = [music._id];
                }
            }else{
                alert("Login to Like the Song");
            }
        },
        removeLike(music) {
            if (this.musicStore.userId) {

                for (const key in music) {
                    if (Object.hasOwnProperty.call(music, key)) {
                        if (key == "Fav") music[key] = false;
                    }
                }
                this.musicStore.likedSongs = this.musicStore.likedSongs.filter((obj) => obj != music._id)
                this.musicStore.likedSongs = [...this.musicStore.likedSongs];
                console.log(this.musicStore.likedSongs);
                this.musicStore.updateLikedList();
                this.musicStore.updateFav(true);
            }
        }
    }
}
</script>
