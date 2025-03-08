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
  userName: string = '';
  imgUrl: string = './assets/logo.jpg';
  url="https://www.bridgelabz.com";
  nameError: string="";

  ngOnInit():void{
    this.title="Hello from Bridgelabz";
  }

  onClick(event: Event) {
    console.log("Save button is clicked! ");
    window.open(this.url,"_blank")
  }

  onInput($event: any){
    console.log("Change Event Occurred! ",$event.data);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect! ";
  }

}
