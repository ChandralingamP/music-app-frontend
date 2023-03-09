import axios from "axios";
import { defineStore } from "pinia";
import { createDLL } from "@/store/DoublyLikedList";
export const useMusicStore = defineStore("musicStore", {
  state: () => ({
    root_uri : "http://localhost:5000",
    userId: false,
    loading: true,
    pause: false,
    userName: false,
    isLoggedIn: false,
    currentSong: 0,
    currentSongData: false,
    musicTrack: false,
    musicTiming: 0,
    recentlyPlayed: [],
    newRecentlyPlayed : [],
    recentlyPlayedList : false,
    dllist: false,
    likedSongs: [],
    songUrl: false,
    playList: [],
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
      this.getUserPlayList();
      this.setFav();
      this.loading = false;
    },
    async getRecentlyPlayed() {
      console.log("called");
      const id = localStorage.getItem('uid');
      console.log(id);
      const res = await axios.get(this.root_uri+"/recent/" + id);
      this.recentlyPlayedList =  res.data[0].MusicId;
      this.setRP();
    },
    async setRP(){
      this.createDll(this.recentlyPlayedList)
      this.newRecentlyPlayed = this.recentlyPlayedList;
      console.log(this.recentlyPlayedList,"Recently played");
    },
    async getPlayList(t,v){
      const res = await axios.get(this.root_uri+'/musics/'+t+'/'+v);
      console.log(res.data);
      return res.data;
    },
    async getUserPlayList() {
      const res = await axios.get(this.root_uri+"/playlist/"+this.userId);
      this.playList = res.data;
      this.playListCount = res.data.length;
    },
    async getSample(){
      const data =  await axios.get(this.root_uri+'/musics/');
      console.log(data);
      return data.data;
    },
    async getSearchResults(query){
      const data = await axios.get(this.root_uri+'/musics/search/'+query)
      const res = data.data;
      return res;
    },
    async createDll(data) {
      this.dllist = createDLL(data);
      if (!this.currentSongData) {
        this.currentSongData = this.dllist.getAt(0);
        let songUrl = this.currentSongData.Title;
        const myArray = songUrl.split(" ");
        this.songUrl = myArray.join("");
        this.musicTrack = new Audio(
          require("@/assets/musics/" + this.songUrl + ".mp3")
        );
      }
    },
    async setFav() {
      try {
        const res = await axios.get(
          this.root_uri+"/likes/" + this.userId
        );
        this.likedSongs = res.data[0].MusicId;
        const ll = this.likedSongs.map((item) => item);
        this.likedSongs = ll;
        this.updateFav();
      } catch (err) {
        console.log(err.message);
      }
    },
    async updateFav() {
      this.playList.map((music) => {
        if (this.likedSongs.includes(music)) {
          for (const key in music) {
            if (Object.hasOwnProperty.call(music, key)) {
              if (key == "Fav") music[key] = true;
            }
          }
        }
      });
      // this.likedSongsPlayList = this.playList.filter((music) =>
      //   this.likedSongs.includes(music._id)
      // );
    },
    async updateLikedList() {
      try {
        await axios.post(this.root_uri+"/likes/update", {
          UserId: this.userId,
          MusicId: this.likedSongs,
        });
        console.log(this.likedSongs);
      } catch (err) {
        console.log(err);
      }
    },
    async createUserPlayList() {
      this.newPlayListName = "PlayList " + (this.playListCount + 1);
      const res = await axios.post(this.root_uri+"/playlist/add", {
        UserId: this.userId,
        PlayListName: this.newPlayListName,
      });
      this.newPlayListId = res.data._id;
      this.playList = [...this.playList, res.data];
      this.playListCount = this.playList.length;
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
        if (this.userEmotion == "disgust") {
          this.recommendedPlayList = this.musics.filter(
            (music) =>
              music.Type == "alonevibe" ||
              music.Type == "happy" ||
              music.PlayList == "drug"
          );
          this.recommendedPlayList = this.recommendedPlayList.slice(0, 20);
        } else if (this.userEmotion == "fear") {
          this.recommendedPlayList = this.musics.filter(
            (music) =>
              music.PlayList == "melody" || music.PlayList == "yuvandrug"
          );
          this.recommendedPlayList = this.recommendedPlayList.slice(0, 20);
        } else if (this.userEmotion == "angry") {
          this.recommendedPlayList = this.musics.filter(
            (music) => music.Type == "happy" || music.Artist == "G. V. Prakash"
          );
          this.recommendedPlayList = this.recommendedPlayList.slice(0, 20);
        } else if (this.userEmotion == "happy") {
          this.recommendedPlayList = this.musics.filter(
            (music) => music.Type == "happy" || music.Type == "vibe"
          );
          this.recommendedPlayList = this.recommendedPlayList.slice(0, 20);
        } else if (this.userEmotion == "neutral") {
          this.recommendedPlayList = this.musics.filter(
            (music) =>
              music.PlayList == "lovedrug" ||
              music.Type == "vibe" ||
              music.PlayList == "happyvibe	"
          );
          this.recommendedPlayList = this.recommendedPlayList.slice(0, 20);
        } else if (this.userEmotion == "sad") {
          this.recommendedPlayList = this.musics.filter(
            (music) =>
              music.PlayList == "lovedrug" ||
              music.Type == "drug" ||
              music.PlayList == "breakup	"
          );
          this.recommendedPlayList = this.recommendedPlayList.slice(0, 20);
        } else {
          this.recommendedPlayList = this.musics.filter(
            (music) =>
              music.PlayList == "lovevibe" ||
              music.Type == "happy" ||
              music.PlayList == "goosbums	"
          );
          this.recommendedPlayList = this.recommendedPlayList.slice(0, 20);
        }
        this.playList = this.recommendedPlayList;
        this.createDll(this.playList);
      } catch (err) {
        console.log(err);
      }
    },
    async saveUserPlayList() {
      try {
        await axios.post(this.root_uri+"/playlist/update", {
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
        console.log(this.currentSongData);
        let songUrl = this.currentSongData.Title;
        const myArray = songUrl.split(" ");
        this.songUrl = myArray.join("");
        // this.musicTrack = new Audio(
        //   require("@/assets/musics/" + this.songUrl + ".mp3")
        // );
        this.musicTrack = new Audio(
          require("@/assets/musics/" + this.songUrl + ".mp3")
        );
        this.musicTrack.play();
        this.musicTiming = 0;
        this.musicTrack.ontimeupdate = () => {
          this.musicTiming = this.musicTrack.currentTime;
        };
        this.updateRecentlyPlayed();
        console.log(this.musicTrack);
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
    async updateRecentlyPlayed(){
      if (this.newRecentlyPlayed.includes(this.currentSongData)) {
        this.newRecentlyPlayed = this.newRecentlyPlayed.filter(
          (ob) => ob !== this.currentSongData
        );
      }
      if (this.newRecentlyPlayed.length > 12) {
        this.newRecentlyPlayed = this.newRecentlyPlayed.slice(0, -1);
      }
      this.newRecentlyPlayed = [
        this.currentSongData,
        ...this.newRecentlyPlayed,
      ];
      try{
        await axios.post(this.root_uri+"/recent/update", {
          userId: this.userId,
          MusicId: this.newRecentlyPlayed,
        });
      }catch(er){
        console.log(er);
      }
    },
    async setTime(t) {
      this.musicTrack.currentTime = t;
    },
  },
});
