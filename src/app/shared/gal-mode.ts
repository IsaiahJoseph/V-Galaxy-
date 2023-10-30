export interface IVideo {
    id: string
      name: string
      path: string
       tags: string[]
       type: string
      genre: string
      views: string
      author: {
        id: string
      name: string
      img: string
      sub: string
      videos: string[];
    }
      
      date: Date
      comments?: any
}
