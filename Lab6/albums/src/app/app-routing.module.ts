import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'albums/:albumId', component: AlbumDetailComponent },
    { path: 'albums/:albumId/photos', component: AlbumPhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
