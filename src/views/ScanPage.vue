<template >
    <div v-if="!imgUrl" class="bg-home pt-20 lg:pt-10 px-10 flex flex-col justify-center">
        <div class="self-center h-80 ">
            <video ref="video" @canplay="initCanvas()">Stream unavailable</video>
        </div>
        <button @click="takePicture()"
            class="lg:mt-5 mt-48 py-2  px-6 outline-none self-center bg-gray-400 text-white w-44 font-semibold text-lg rounded-lg hover:shadow-lg">capture
            image</button>
        <canvas ref="canvas" style="display :none"></canvas>
    </div>
    <div v-if="flag">
        <h1 v-if="musicStore.userName" class="lg:p-8 pb-0 p-4 text-xl lg:text-2xl  lg:pb-14 text-aliceblue">Hello {{ musicStore.userName }}</h1>
        <h1 v-if="!musicStore.userName" class="lg:p-8 pb-0 p-4 text-xl lg:text-2xl  lg:pb-14 text-aliceblue">Hello Buddy</h1>
        <h1 class="lg:p-8 p-4 py-2 text-xl lg:text-2xl  lg:pb-14 text-aliceblue">I Recommend Some Songs For You....</h1>
        <div class=" p-4 pt-2 lg:px-16">
            <div class="h-14 mt-2 rounded-lg w-full hover:bg-gray-600 flex justify-between" v-for="music in musicStore.musics"
                :key="music">
                <MusicContainer :music="music" />
            </div>
        </div>
    </div>
</template>
<script>
import MusicContainer from '@/components/MusicContainer.vue'
import { useMusicStore } from '@/store/MusicStore'
export default {
    name: "ScanPage",
    musicStore: false,
    mounted() {
        this.video = this.$refs.video
        this.canvas = this.$refs.canvas
        this.musicStore = useMusicStore()
        this.startCapture()
    },
    components:{
        MusicContainer
    },
    unmounted() {
        this.endCapture()
    },
    methods: {
        endCapture() {
            this.videoStream.getTracks().forEach(function (track) {
                if (track.readyState == 'live' && track.kind === 'video') {
                    track.stop();
                }
            });
        },
        startCapture() {
            navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
                this.video.srcObject = stream;
                this.videoStream = stream;
                this.video.play()
            }).catch(error => {
                console.log(error);
            })
        },
        async takePicture() {
            let context = this.canvas.getContext('2d')
            context.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight)
            this.imgUrl = this.canvas.toDataURL('image/png')
            this.endCapture();
            await this.musicStore.predictEmotion(this.imgUrl);
            this.flag = true;
            
        },
        initCanvas() {
            this.canvas.setAttribute('width', this.video.videoWidth)
            this.canvas.setAttribute('height', this.video.videoHeight)
        }
    },
    data() {
        return {
            video: false,
            canvas: false,
            flag: false,
            imgUrl: false,
            videoStream: false
        }
    },
}
</script>