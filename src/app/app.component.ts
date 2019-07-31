import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  @HostListener("window:scroll", ['$event'])
  
  scrollHandler(value:any){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("headerScroll").style.boxShadow = "0 3px 5px 0 rgba(0,0,0,.1)";
    }else{
      document.getElementById("headerScroll").style.boxShadow = "unset";
    }
  }
}
