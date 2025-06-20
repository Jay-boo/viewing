import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Photo} from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  getPhotos(): Observable<Photo[]>{
    return of(this.getMockPhotos())
  }
  private getMockPhotos(): Photo[]{
    return [
      {
        id:'1',
        name:'sunset.jpg',
        src: './assets/sunset.jpg',
        uploadDate: new Date()
      }
    ]
  }
}
