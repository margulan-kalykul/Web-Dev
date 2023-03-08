import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  newAlbum = {} as Album;
  deleted: number[];

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.deleted = [];
  }

  ngOnInit() {
    this.loadAlbums();
  }

  check(id: number): boolean {
    return this.deleted.includes(id);
  }

  loadAlbums() {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

  addAlbum() {
    this.albumsService.addAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      this.newAlbum = {} as Album;
    })
  }

  deleteAlbum(id: number) {
    this.deleted.push(id);
    this.albumsService.deleteAlbum(id).subscribe();
  }

}
