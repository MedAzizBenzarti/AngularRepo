import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../model/video';
@Injectable({
  providedIn: 'root'
})
export class VideoserviceService {
  url:string='http://localhost:3000/video';
  constructor(private http:HttpClient) { }
  getVideo() 
  {
    return this.http.get<Video[]>(this.url);
  }

  getProductById(id:number)
  {
    return this.http.get<Video>(this.url+'/'+id);
  }

  ajouter(video:Video)
  {
    return this.http.post<Video>(this.url,video);
  }

  supprimer(id:number)
  {
    return this.http.delete(this.url+'/'+id);
  }

  update(id:number,video:Video)
  {
    return this.http.put(this.url+'/'+id ,video);
  }
}
