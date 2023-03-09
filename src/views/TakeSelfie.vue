<template >
    <div v-if="!imgurl" class="flex bg-home flex-col justify-center">
        <div class="self-center mt-20">
            <video ref="video" @canplay="initCanvas()">Stream unavailable</video>
        </div>
        <button @click="takePicture()" class="mt-5 py-2 px-6 outline-none self-center bg-gray-400 text-white w-44 font-semibold text-lg rounded-lg hover:shadow-lg">capture image</button>
        <canvas ref="canvas" style="display :none"/>
    </div>
</template>

<script>

export default {
    name : "ScanPage",
    mounted(){
        this.video = this.$refs.video
        this.canvas = this.$refs.canvas
        this.startCapture()
    },
    methods:{
        startCapture(){
            navigator.mediaDevices.getUserMedia({video : true,audio :false}).then(stream =>{
                this.video.srcObject = stream
                this.video.play()
            }).catch(error =>{
                console.log(error);
            })
        },
        takePicture(){
            let context = this.canvas.getContext('2d')
            context.drawImage(this.video,0,0,this.video.vedioWidth,this.video.vedioHeight)
            this.$emit('user-picture', this.canvas.toDataURL('image/png'))
        },
        initCanvas(){
            this.canvas.setAttribute('width',this.video.vedioWidth)
            this.canvas.setAttribute('height',this.video.vedioHeight)
        }
    },
    data(){
        return {
            video : false,
            canvas : false
        }
    },
}
</script>