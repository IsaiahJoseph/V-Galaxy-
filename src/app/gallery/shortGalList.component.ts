import { Component, Input, OnInit } from "@angular/core";
import { IVideo } from "../shared/gal-mode";
import { GalleryService } from "../shared/gallery.service";

@Component({
    selector: 'shorts-list',
    template: `<div class="vid-container">
    <div class="col-md-3" *ngFor="let video of shortVideos">
<div [routerLink]="['/vid', video.id]" class="well hoverwell thumbnail">
    <figure class="gallery__item" > 
        <video   class="gallery__video" id="{{video.id}}" muted loop (mouseover)="onMouseover($event)" (mouseout)="onMouseout($event)" #playVideo >
         <source src="{{video.path}}" type="video/mp4">
         your browser is not supported!
     </video>
     <!-- <video [src]="video.path" (mouseover)="videoplayer()"  #playVideo></video> -->
     <label>{{video.name}}</label>
     <div class="info"><p>1.1M views</p><p>&nbsp; .2days ago</p></div>
    </figure>
</div>
</div>
</div>`,
    styleUrls: ['./gallery-list.component.css'],
})
export class ShortsListComponent implements OnInit {
    
  shortVideos!: IVideo[];
  isHoverable: boolean =false

  onMouseover (event: { target: any; }){
        
    setTimeout(() => {
        this.isHoverable = true
        event.target.setAttribute('controls', ' ');
    }, 1000);
    
    setTimeout(() => {
        this.isHoverable = true
        if (this.isHoverable) {
        event.target.muted= true;
        event.target.play();
        this.isHoverable = false
        
}
    }, 1700);
    
}

onMouseout(event: { target: any; }){
    this.isHoverable = false
    if (!this.isHoverable) {
            event.target.pause();     
            event.target.removeAttribute('controls');
        }
        setTimeout(() => {
            this.isHoverable = true
            if (this.isHoverable) {
            event.target.muted= true;
            event.target.pause();
            this.isHoverable = false
            
    }
        }, 1700);
        
    }


    constructor (private galleryservice: GalleryService ) {

    }
  
    ngOnInit() {
      this.galleryservice.shortsVideos().subscribe(videos => {
        this.shortVideos = videos;
        console.log(this.shortVideos);
  
      })
    }
    
}