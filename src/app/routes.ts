import { Routes } from "@angular/router";
import { GalleryDetailsComponent } from "./gallery/gallery-details/gallery-details.component";
import { GalShortsComponent } from "./gallery/galshorts.component";
import { SideNavBarComponent } from "./nav/side-navbar.component";

export const AppRoutes:Routes = [
    {path: 'vid', component: SideNavBarComponent },
    {path: 'vid/shorts', component: GalShortsComponent },
    {path: 'vid/:id', component: GalleryDetailsComponent },
    {path: '', redirectTo: '/vid', pathMatch: 'full'},
]