import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,    
    HttpClientModule,
    FormsModule
    
  ],
  providers: [HomeService,],
})
export class HomeModule { }
