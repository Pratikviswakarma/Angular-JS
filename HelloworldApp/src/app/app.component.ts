import { Component } from '@angular/core';
import  { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Helloworld";
  imgUrl: string = './assets/logo.jpg';
   
  ngOnInit():void{
    this.title="Hello from Bridgelabz";
  }
}
