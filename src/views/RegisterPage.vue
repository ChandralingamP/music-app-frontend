<template >
    <div class="flex bg-home h-screen w-full">
        <div class="w-96 mx-auto bg-gray-200 my-auto h-1/2 flex flex-col justify-center">
            <h1 class="text-black text-xl mb-5 font-bold self-center">Create an Account</h1>
            <input class="w-80 m-2 py-1 px-4 self-center" required type="text" placeholder="username" v-model="username" />
            <input class="w-80 m-2 py-1 px-4 self-center" required type="text" placeholder="email" v-model="email" />
            <input class="w-80 m-2 py-1 px-4 self-center" required type="password" placeholder="password"
                v-model="password" />
            <button
                class="self-center m-1 rounded-lg mt-5 py-1 bg-gray-600 text-white hover:text-black font-semibold hover:bg-gray-400 w-40"
                @click="register">Submit</button>
            <button class="self-center m-1 rounded-lg pt-1 hover:text-blue-500 text-blue-300  font-semibold  w-40"
                @click="signInWithGoogle">Sign in With Google </button>
            <h3 class="self-center mb-9">Already you have an account?<router-link to="/login">
                    <button
                        class="self-center m-1 rounded-lg py-1 hover:text-blue-500 text-blue-300  font-semibold">Signup</button>
                </router-link>
            </h3>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useMusicStore } from '@/store/MusicStore'
import { useRouter } from 'vue-router';
import { addUser } from '@/service/User'
const username = ref();
const email = ref();
const password = ref('');
const router = useRouter();
const MusicStore = useMusicStore();
const register = () => {
    const auth = getAuth()
    if (username.value.length <= 3) {
        alert("Enter a good user Name");
        return;
    }
    createUserWithEmailAndPassword(auth, email.value, password.value).then(async (data) => {
        await addUser(data.user.uid, username.value);
        MusicStore.userId = data.user.uid;
        MusicStore.userName = username.value;
        localStorage.setItem('uid', data.user.uid);
        router.push('/')
    }).catch((err) => {
        alert(err.message);
    })
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then(async(data) => {
        await addUser(data.user.uid, data.user.displayName);
        MusicStore.userId = data.user.uid;
        console.log(data.user);
        MusicStore.userName = data.user.displayName;
        localStorage.setItem('uid', data.user.uid);
        router.push('/');
    }).catch((Err) =>
        console.log(Err.message)
    )
}

</script>

