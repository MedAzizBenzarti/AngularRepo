import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';
import { VideoserviceService } from '../service/videoservice.service';

@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.component.html',
  styleUrls: ['./listvideo.component.css']
})
export class ListvideoComponent implements OnInit {
  listVideo!: Video[] ;
  constructor(private videoService:VideoserviceService) { }

  ngOnInit(): void {
    this.videoService.getVideo().subscribe(data=> 
      {
        this.listVideo=data
      }); 
  }

  partager(i:number) {
    if(this.listVideo[i].public==true){
    this.listVideo[i].nbshared++ ;
  }}

  modifier(i:number) {
   if(  this.listVideo[i].nbshared==0)
   {
    this.listVideo[i].nbshared++ ;
   }
  }


}
