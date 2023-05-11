import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './add-video/addvideo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListvideoComponent } from './listvideo/listvideo.component';

const routes: Routes = [

  {path: 'navbar' , component: NavbarComponent } , 
   {path: 'cherchervideo' , component:ListvideoComponent  } , 
  {path: 'addvideo' , component: VideoComponent } , 
 // {path: 'product/:id' , component: DetailproductComponent } ,
  // {path:'**' , component:NotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
