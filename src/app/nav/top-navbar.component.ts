import { Component } from "@angular/core";
import { IVideo } from "../shared/gal-mode";
import { GalleryService } from "../shared/gallery.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './top-navbar.component.html',
    styleUrls: ['./top-navbar.component.css'],
})

export class NavBarComponent {
  searchTerm: string = "";
  foundVideos!: IVideo[];

  constructor (private galleryservice: GalleryService ) {

  }

  searchVideos(searchTerm: string) {
    this.galleryservice.searchVideos(searchTerm).subscribe(videos => {
      this.foundVideos = videos;

    })
  }
          
  }