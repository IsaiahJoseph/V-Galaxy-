import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { IVideo } from "src/app/shared/gal-mode";

import { GalleryService } from "src/app/shared/gallery.service";

@Component({
    templateUrl: './gallery-details.component.html',
    styleUrls: ['./gallery-details.component.css'],
})

export class GalleryDetailsComponent {
    video!: any
    videos!: IVideo[]
   

    constructor( private galleryservice: GalleryService, private route:ActivatedRoute)  {
        
    }
    
    ngOnInit() {

        this.route.params.subscribe((params: Params) => {
            this.video = this.galleryservice.getAVideo(params['id'])
        })

        this.videos = this.galleryservice.getvideos()
        // this.video = this.galleryservice.getAVideo(this.route.snapshot.params['id'])
        
        
    
    }
}