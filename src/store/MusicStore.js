import axios from "axios";
import { defineStore } from "pinia";
import { createDLL } from "@/store/DoublyLikedList";
export const useMusicStore = defineStore("musicStore", {
  state: () => ({
    root_uri: "https://musicappserver-1-x3219821.deta.app",
    userId: false,
    loading: true,
    musics: false,
    pause: false,
    userName: false,
    isLoggedIn: false,
    currentSong: 0,
    currentSongData: false,
    musicTrack: false,
    musicTiming: 0,
    showRecentlyPlayed: false,
    recentlyPlayed: [],
    newRecentlyPlayed: [],
    recentlyPlayedList: false,
    dllist: false,
    likedSongs: false,
    likedSongsPlaylist: false,
    songUrl: false,
    playList: false,
    playListCount: false,
    newPlayListName: false,
    newPlayListId: false,
    newPlayList: [],
    userEmotion: false,
    recommendedPlayList: [],
    userPlayListName: false,
  }),
  actions: {
    async setDetails() {
      this.userId = localStorage.getItem("uid");
      await this.getUserPlayList();
      await this.setFav(false);
      this.loading = false;
    },
    async getRecentlyPlayed() {
      const id = localStorage.getItem("uid");
      if (id) {
        const res = await axios.get(this.root_uri + "/recent/" + id);
        console.log(res.data[0].MusicId);
        if (res.data.length) {
          this.showRecentlyPlayed = true;
          this.recentlyPlayedList = res.data[0].MusicId;
          console.log(res.data);
          this.setRP();
        }
      }
    },
    async setRP() {
      if (this.likedSongs) {
        const d = this.recentlyPlayedList.map((music) => {
          if (this.likedSongs.includes(music._id)) {
            music.Fav = true;
            return music;
          } else {
            music.Fav = false;
            return music;
          }
        });
        this.recentlyPlayed = d;
      } else {
        this.setFav(true);
      }
      this.createDll(this.recentlyPlayedList);
      this.newRecentlyPlayed = this.recentlyPlayedList;
    },
    async getLikedPlaylist() {
      if (this.userId) {
        const data = await axios.get(
          this.root_uri + "/likes/playlist/" + this.userId
        );
        this.likedSongsPlaylist = data.data;
        this.createDll(this.likedSongsPlaylist);
      }
    },
    async getPlayList(t, v) {
      const res = await axios.get(this.root_uri + "/musics/" + t + "/" + v);
      this.musics = await res.data;
      console.log(this.musics);
      if(this.userId){
        this.updateFav(true);
      }else{
        this.createDll(this.musics)
      }
    },
    async getUserPlayList() {
      if (this.userId) {
        const res = await axios.get(this.root_uri + "/playlist/" + this.userId);
        this.playList = res.data;
        this.playListCount = res.data.length;
      }
    },
    async getSample() {
      const data = await axios.get(this.root_uri + "/musics/");
      return data.data;
    },
    async getSearchResults(query) {
      const data = await axios.get(this.root_uri + "/musics/search/" + query);
      const res = data.data;
      return res;
    },
    async createDll(data) {
      this.dllist = createDLL(data);
      console.log(this.dllist);
      if (!this.currentSongData) {
        this.currentSongData = this.dllist.getAt(0);
        let songUrl = this.currentSongData.Title;
        const myArray = songUrl.split(" ");
        this.songUrl = myArray.join("");
        this.musicTrack = new Audio(this.currentSong.MusicURL);
      }
    },
    async setFav(d) {
      try {
        const id = localStorage.getItem("uid");
        if (id) {
          const res = await axios.get(this.root_uri + "/likes/" + id);
          this.likedSongs = res.data;
          if (d) {
            this.setRP();
            return;
          }
          this.updateFav(true);
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    async updateFav(fg) {
      if (!this.likedSongs) {
        this.setFav(false);
      }
      if (this.musics && this.likedSongs) {
        const d = this.musics.map((music) => {
          if (this.likedSongs.includes(music._id)) {
            music.Fav = true;
            return music;
          } else {
            return music;
          }
        });
        this.musics = d;
        console.log(this.musics);
        this.createDll(this.musics);
      }
      if (!fg) {
        this.updateLikedList();
      }
    },
    async updateLikedList() {
      try {
        await axios.post(this.root_uri + "/likes/update", {
          UserId: this.userId,
          MusicId: this.likedSongs,
        });
      } catch (err) {
        console.log(err);
      }
    },
    async createUserPlayList() {
      if (this.playListCount) {
        this.newPlayListName = "PlayList " + (this.playListCount + 1);
        const res = await axios.post(this.root_uri + "/playlist/add", {
          UserId: this.userId,
          PlayListName: this.newPlayListName,
        });
        this.newPlayListId = res.data._id;
        this.playList = [...this.playList, res.data];
        this.playListCount = this.playList.length;
      } else {
        if (this.userId) {
          const res = await axios.get(
            this.root_uri + "/playlist/" + this.userId
          );
          this.playList = res.data;
          this.playListCount = res.data.length;
          this.createUserPlayList();
        }
      }
    },
    async predictEmotion(url) {
      try {
        const res = await axios({
          method: "post",
          url: "http://127.0.0.1:5001/image",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          data: {
            imgURL: url,
          },
        });
        this.userEmotion = res.data.result[0].dominant_emotion;
        const data = await axios.get(
          this.root_uri + "/musics/results/" + this.userEmotion
        );
        this.recommendedPlayList = data.data;
        this.musics = this.recommendedPlayList;
        const d = this.musics.map((d) => {
          if (this.likedSongs.includes(d._id)) {
            d = d.Fav = true;
            return d;
          } else {
            return d;
          }
        });
        this.musics = d;
        this.createDll(this.musics);
      } catch (err) {
        console.log(err);
      }
    },
    async saveUserPlayList() {
      try {
        await axios.post(this.root_uri + "/playlist/update", {
          UserId: this.userId,
          PlayListName: this.newPlayListName,
          nePlayList: this.newPlayList,
        });
        this.getUserPlayList();
        this.newPlayList = [];
        this.newPlayListId = false;
        this.newPlayListName = false;
      } catch (er) {
        console.log(er);
      }
    },
    async resumeSong() {
      this.pause = true;
      this.musicTrack.ontimeupdate = () => {
        this.musicTiming = this.musicTrack.currentTime;
      };
      this.musicTrack.play();
    },
    async pauseSong() {
      this.pause = false;
      this.musicTrack.pause();
    },
    async nextSong() {
      this.currentSong = await this.dllist.nextSong(this.currentSong);
      this.setMusicTrack();
    },
    async setMusicTrack() {
      try {
        this.currentSongData = this.dllist.getAt(this.currentSong);
        // let songUrl = this.currentSongData.Title;
        // const myArray = songUrl.split(" ");
        // this.songUrl = myArray.join("");
        // this.musicTrack = new Audio(
        //   require("@/assets/musics/" + this.songUrl + ".mp3")
        // );
        // this.musicTrack = new Audio(
        //   require("@/assets/musics/" + this.songUrl + ".mp3")
        // );
        this.musicTrack = new Audio(this.currentSongData.MusicURL);
        console.log(this.musicTrack);
        this.musicTrack.play();
        this.musicTiming = 0;
        this.musicTrack.ontimeupdate = () => {
          this.musicTiming = this.musicTrack.currentTime;
        };
        this.updateRecentlyPlayed();
        this.musicTrack.onended = () => {
          console.log("Ended", this.currentSong, "sdsd");
          this.currentSongData = this.dllist.nextSong(this.currentSong);
          console.log(this.currentSongData);
          this.currentSong = this.dllist.getIndex(this.currentSongData);
          this.setMusicTrack();
        };

        this.pause = true;
      } catch (err) {
        this.pause = false;
        console.log(err.message);
      }
    },
    async updateRecentlyPlayed() {
      this.newRecentlyPlayed = this.newRecentlyPlayed.filter(
        (ob) => ob._id !== this.currentSongData._id
      );
      if (this.newRecentlyPlayed.length > 12) {
        this.newRecentlyPlayed = this.newRecentlyPlayed.slice(0, -1);
      }
      this.newRecentlyPlayed = [
        this.currentSongData,
        ...this.newRecentlyPlayed,
      ];
      try {
        await axios.post(this.root_uri + "/recent/update", {
          userId: this.userId,
          MusicId: this.newRecentlyPlayed,
        });
      } catch (err) {
        console.log("err");
      }
    },
    async setTime(t) {
      this.musicTrack.currentTime = t;
    },
  },
});
