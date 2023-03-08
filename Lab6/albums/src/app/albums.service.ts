import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, Photo } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  deleteAlbum(id: number): Observable<unknown> {
    return this.http.delete(`${this.BASE_URL}/albums/${id}`);
  }

  updateAlbum(id: number, newName: string): Observable<unknown> {
    return this.http.patch(`${this.BASE_URL}/albums/${id}`, 
    {
      title: newName,
    });
  }


  getPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
}
