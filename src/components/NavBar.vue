<template>
    <div class="fixed lg:z-0 z-10 h-full top-0 lg:w-60 w-full pt-10 lg:flex flex-col text-gray-300 bg-black">
        <div @click="$emit('toggle')" class="absolute lg:hidden right-5">
            <fa class="h-6 w-6 text-aliceblue" icon="remove" />
        </div>
        <div class="text-white pl-8 mb-2 flex rounded-md" v-if="musicStore.isLoggedIn == false" @click="navTo('/login')">
            <p>{{ "<-" }}</p>
                    <h2 class="h-5 ml-4">Login</h2>
        </div>
        <button @click="$emit('handler')" v-else class="pl-8 self-start"><span class="mr-4">{{ "->"
        }}</span>SignOut</button>
        <nav class="flex flex-col my-2 pl-8 h-12 justify-around" v-for="nav in navLinks" :key="nav.link">
            <div @click="navTo(nav.link)" class="flex cursor-pointer hover:text-white">
                <fa class="h-5 w-5" :icon="nav.icon" />
                <h2 class="h-5 ml-4">{{ nav.name }}</h2>
            </div>
        </nav>
        <div class="h-x mt-6 mx-6 bg-white"></div>
    </div>
</template>
<script setup>
import { useMusicStore } from '@/store/MusicStore';
const musicStore = useMusicStore()

</script>

<script>
import router from '@/router';
export default {
    params: ['isLoggedIn'],
    data() {
        return {
            navLinks: [
                { link: "/", name: "Home", icon: "home" },
                { link: "/search", name: "Search", icon: "search" },
                { link: "/scan", name: "Scan", icon: "portrait" },
                { link: "/library", name: "Library", icon: "book" },
                { link: "/createplaylist", name: "Create PlayList", icon: "add" },
                { link: "/likes", name: "Liked Songs", icon: "heart" },
            ]
        }
    },
    methods: {
        navTo(uri) {
            router.push(uri);
            this.$emit('toggle');
            window.scrollTo(0, 0);
        }

    }
}


</script>