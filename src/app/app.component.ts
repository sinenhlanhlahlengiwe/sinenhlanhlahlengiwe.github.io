import { Component, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { PortfoliopageComponent } from './components/portfoliopage/portfoliopage.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent, AboutpageComponent, PortfoliopageComponent, ContactpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title: any;

  
ngOnChanges (changes : SimpleChanges) {
  console.log(changes);
  
}

ngOnInit (){
  console.log("initialized");
  
}

}
