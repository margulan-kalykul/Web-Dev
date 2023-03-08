import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photo } from '../models';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[];
  albumId: number;

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {
    this.photos = [];
    this.albumId = 0;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.albumId = Number(routeParams.get('albumId'));
    this.loadPhotos(this.albumId);
  }

  loadPhotos(id: number) {
    this.albumsService.getPhotos(id).subscribe((photos) => {
      this.photos = photos;
    })
  }

}
