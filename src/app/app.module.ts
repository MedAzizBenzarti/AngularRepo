import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AddVideoComponent } from './add-video/addvideo.component';
import { VideoComponent } from './add-video/addvideo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ListvideoComponent } from './listvideo/listvideo.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    NavbarComponent, 
    VideoComponent, ListvideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
