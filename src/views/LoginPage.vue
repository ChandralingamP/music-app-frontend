<template >
    <div class="relative flex bg-home">
        <div class="w-96 mx-auto rounded-lg bg-gray-200 my-36  flex flex-col justify-center">
            <h1 class="text-black mt-20 text-xl mb-5 font-bold self-center">Sign In</h1>
            <input class="w-80 m-2 py-1 px-4 self-center" required type="text" placeholder="email" v-model="email" />
            <input class="w-80 m-2 py-1 px-4 self-center items-center" required type="password" placeholder="password"
                v-model="password" />
            <button
                class="self-center m-1 rounded-lg mt-5 py-1 bg-gray-600 text-white hover:text-black font-semibold hover:bg-gray-400 w-40"
                @click="login">Submit</button>
            <button class="self-center m-1 rounded-lg pt-1 hover:text-blue-500 text-blue-300  font-semibold  w-40"
                @click="signInWithGoogle">Sign in With Google </button>
            <h3 class="self-center mb-9">Don't you have an account?<router-link to="/register">
                    <button
                        class="self-center m-1 rounded-lg py-1 hover:text-blue-500 text-blue-300  font-semibold">Signup</button>
                </router-link>
            </h3>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useMusicStore } from '@/store/MusicStore'
import { useRouter } from 'vue-router';
import { addUser } from '@/service/User'
import axios from 'axios';
const email = ref();
const password = ref('');
const router = useRouter();
const MusicStore = useMusicStore();
const login = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value).then(async (data) => {
        MusicStore.userId = data.user.uid;
        localStorage.setItem('uid', data.user.uid);
        MusicStore.setFav(false);
        MusicStore.getUserPlayList();
        router.push('/');
        const res = await axios.get(MusicStore.root_uri + '/users/' + data.user.uid)
        MusicStore.userName = await res.data.userName;
        MusicStore.setDetails();
    }).catch((err) => {
        alert(err.message);
    })
}
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then(async(data) => {
        await addUser(data.user.uid, data.user.displayName);
        localStorage.setItem('uid', data.user.uid);
        MusicStore.setFav(false);
        MusicStore.getUserPlayList();
        router.push('/');
        const res = await axios.get(MusicStore.root_uri + '/users/' + data.user.uid)
        MusicStore.userName = await res.data.userName;
        MusicStore.setDetails();
    }).catch((Err) =>
        console.log(Err)
    );
}

</script>

