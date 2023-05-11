import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoserviceService } from '../service/videoservice.service';
import { Video } from '../model/video';

@Component({
  selector: 'app-video',
  templateUrl: './addvideo.component.html',
  
})
export class VideoComponent implements OnInit {
  video!: Video 
  selectnbrshared : any; 
  constructor(private vidser:VideoserviceService,private route:Router) { }

  ngOnInit(): void {
    this.video=new Video();
  }
  add():void
  {
     this.vidser.ajouter(this.video).subscribe(data=> {
      console.log(data);
    });
     this.route.navigateByUrl("/cherchervideo");
  }
}
