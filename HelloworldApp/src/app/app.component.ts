import { Component } from '@angular/core';
import  { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Helloworld";
  imgUrl: string = './assets/logo.jpg';
  url="https://www.bridgelabz.com";
 
  ngOnInit():void{
    this.title="Hello from Bridgelabz";
  }

  onClick(event: Event) {
    console.log("Save button is clicked! ");
    window.open(this.url,"_blank")
  }
}
