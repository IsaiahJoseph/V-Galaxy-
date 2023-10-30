import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryDetailsComponent } from './gallery/gallery-details/gallery-details.component';
import { GalleryListComponent } from './gallery/gallery-list.component';

import { SideNavBarComponent } from './nav/side-navbar.component';
import { NavBarComponent } from './nav/top-navbar.component';
import { GalleryService } from './shared/gallery.service';
import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JQ_TOKEN } from './shared/jQuery.service'
import { SimpleModalComponent } from './shared/simpleModal.component';
import { ModalTriggerDirective } from './shared/modalTrigger.directive';
import { GalShortsComponent } from './gallery/galshorts.component';
import { ShortsListComponent } from './gallery/shortGalList.component';

 declare let jQuery: Object;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavBarComponent,
    GalleryListComponent,
    GalleryDetailsComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    GalShortsComponent,
    ShortsListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [
    GalleryService,
    { provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
