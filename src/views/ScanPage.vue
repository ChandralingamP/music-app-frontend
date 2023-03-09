<template >
    <div v-if="!imgUrl" class="bg-home pt-10 flex flex-col justify-center">
        <div class="self-center">
            <video ref="video" @canplay="initCanvas()">Stream unavailable</video>
        </div>
        <button @click="takePicture()"
            class="mt-5 py-2 px-6 outline-none self-center bg-gray-400 text-white w-44 font-semibold text-lg rounded-lg hover:shadow-lg">capture
            image</button>
        <canvas ref="canvas" style="display :none"></canvas>
    </div>
    <div v-if="flag">
        <h1 class="p-8 text-2xl pb-14 text-aliceblue">We Recommend Some Songs For You....</h1>
        <div class="px-16">
            <div class="h-14 mt-2 rounded-lg w-full hover:bg-gray-600 flex justify-between" v-for="music in musicStore.playList"
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