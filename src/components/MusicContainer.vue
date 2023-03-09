<template>
    <div class="relateive h-16 pt-2 rounded-lg w-full hover:bg-gray-600 flex justify-between">
        <!-- {{ music }} -->
        <div class="absolute w-full h-12  flex items-start  opacity-0 hover:opacity-100">
            <div @click="playSong(music)" class="bg-green-500 rounded-full mt-2 ml-4 h-8 w-8 flex items-center justify-center">
                <fa class="text-white" icon="play" />
            </div>
        </div>
        <div class="flex">
            <img class="h-12 w-12 mx-2" :src="require(`@/assets/images/${music.imgPath}`)" alt="">
            <div>
                <p class="text-gray-100">{{ music.Title }}</p>
                <p class="text-gray-300">{{ music.Artist }}</p>
            </div>
        </div>
        <div class="h-12 py-auto lg:w-24 w-8 flex justify-around lg:mr-10 mr-4">
            <div class=" flex items-center mr-2 justify-center">
                <div @click="addLike(music)" v-if="music.Fav == false">
                    <fa class="hover:text-white text-black self-center" icon="heart" />
                </div>
                <div @click="removeLike(music)" v-else>
                    <fa class="text-green-400 self-center" icon="heart" />
                </div>
            </div>
            <p class="text-gray-200 self-center">{{calDur(music.Duration)}}</p>
        </div>
    </div>
</template>

<script setup>
import { useMusicStore } from '@/store/MusicStore';
const musicStore = useMusicStore();
const playSong = async (obj) => {
    musicStore.currentSong = musicStore.dllist.getIndex(obj);
    if(musicStore.musicTrack){
        musicStore.musicTrack.pause();
    }
    await musicStore.setMusicTrack();
}
const calDur = (time) => {
    var mind = time % (60 * 60);
    var minutes = Math.floor(mind / 60);
    var secd = mind % 60;
    var seconds = Math.ceil(secd);
    var res = minutes + ':' + seconds;
    return res;
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
            if (this.musicStore.likedSongs.length == 0) {
                this.musicStore.likedSongs = [music._id];

            } else {
                this.musicStore.likedSongs = [...this.musicStore.likedSongs, music._id]
            }
            for (const key in music) {
                if (Object.hasOwnProperty.call(music, key)) {
                    if (key == "Fav") music[key] = true;
                }
            }
            this.musicStore.updateFav();
        },
        removeLike(music) {
            console.log("remove");
            for (const key in music) {
                if (Object.hasOwnProperty.call(music, key)) {
                    if (key == "Fav") music[key] = false;
                }
            }
            this.musicStore.likedSongs = this.musicStore.likedSongs.filter((obj) => obj != music._id)
            this.musicStore.updateFav();
        }
    }
}
</script>
