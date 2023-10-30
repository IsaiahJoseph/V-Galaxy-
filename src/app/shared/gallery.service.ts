import { EventEmitter, Injectable } from "@angular/core";
import { IVideo } from "./gal-mode";
Injectable()

export class GalleryService {
  getvideos() {
    return videos
  }
  getAVideo(id: string): IVideo {
    return videos.find(video => video.id === id)!

  }


  searchVideos(searchTerm: string) {
    var term = searchTerm.toLocaleLowerCase();
    var results: IVideo[] = [];



    var matchingVideos = videos.filter(Video =>
      Video.name.toLocaleLowerCase().indexOf(term) > -1).map((videos: any) => {

        return videos;
      })
    results = results.concat(matchingVideos);


    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results)
    }, 100);
    return emitter

  }

  shortsVideos() {
    var term = 'Shorts';
    var results: IVideo[] = [];



    var matchingVideos = videos.filter(Video =>
      Video.type.indexOf(term) > -1).map((videos: any) => {

        return videos;
      })
    results = results.concat(matchingVideos);


    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results)
    }, 100);
    return emitter

  }




}

const videos: IVideo[] = [
  {
    id: "a",
    name: "Introduction To Email",
    path: "assets/videos/edu/edu-1.mp4",
    tags: ["All", "Emails"],
    genre: "education",
    type: "",
    views: 40 + "k" + " " + "views",
    date: new Date('9/26/2036'),
    comments: [{}],
    author:
    {
      id: "",
      name: "Jonas",
      img: "assets/img/images (12)",
      sub: 43 + "k" + " " + "subscribers",
      videos: [""],
    },

  },

  {
    name: "Every Email has A Purpose",
    path: "assets/videos/edu/edu-2.mp4",
    tags: ["All", "Emails"],
    type: "",
    genre: "education",
    views: 54 + "k" + " " + "views",
    author:
    {
      id: "",
      name: "Jonas",
      img: "assets/img/images (12)",
      sub: 43 + "k" + " " + "subscribers",
      videos: [""],
    },

    date: new Date('9/16/2036'),
    id: "b",
    comments: [{}],

  },
  {
    name: "Hannah_Grace_'Wonderful_Way",
    path: "assets/videos/song vid/song-0.mp4",
    tags: ["All", "Emails"],
    type: "",
    genre: "music",
    views: 28 + "k" + " " + "views",
    author:
    {
      id: "",
      name: "Jonas",
      img: "assets/img/images (12)",
      sub: 13 + "k" + " " + "subscribers",
      videos: [""],
    },

    date: new Date('9/23/2036'),
    id: "c",
    comments: [{}],
  },
  {
    name: "sunny day",
    path: "assets/videos/shorts/0 short vid fun.mp4",
    tags: ["All", "Tagline", "Emails"],
    type: "Shorts",
    genre: "fun short reels",
    views: 24 + "k" + " " + "views",
    author:
    {
      id: "",
      name: "Jonas",
      img: "assets/img/images (12)",
      sub: 43 + "k" + " " + "subscribers",
      videos: [""],
    },

    date: new Date('3/18/2036'),
    id: "d",
    comments: [{}],
  },

  {
    name: " funny",
    path: "assets/videos/shorts/1 short vid fun.mp4",
    tags: ["All", "Tagline", "Emails"],
    type: "Shorts",
    genre: "fun short reels",
    views: 24 + "k" + " " + "views",
    author:
    {
      id: "",
      name: "Jonas",
      img: "assets/img/images (12)",
      sub: 43 + "k" + " " + "subscribers",
      videos: [""],
    },

    date: new Date('3/8/2036'),
    id: "e",
    comments: [{}],
  },

  {
    name: "A new day has come; by celion don",
    path: "assets/videos/song vid/song-1.mp4",
    tags: ["All", "Tagline", "Emails"],
    type: "",
    genre: "music",
    views: 24 + "k" + " " + "views",
    author:
    {
      id: "",
      name: "Celion Don",
      img: "assets/img/images (12)",
      sub: 43 + "k" + " " + "subscribers",
      videos: [""],
    },

    date: new Date('3/14/2036'),
    id: "f",
    comments: [{}],
  },


];