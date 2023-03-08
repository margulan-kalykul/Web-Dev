import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  curAlbum: Album;
  newName: string;

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {
    this.curAlbum = {} as Album;
    this.newName = "";
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id: number = Number(params.get('albumId'));

      this.albumsService.getAlbum(id).subscribe((album) => {
        this.curAlbum = album;
      })
    })
  }

  changeName() {
    this.curAlbum.title = this.newName;
    const id: number = this.curAlbum.id;
    this.albumsService.updateAlbum(id, this.newName).subscribe();
  }

}
