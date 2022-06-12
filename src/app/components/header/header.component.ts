import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'This is header';
  constructor() {}

  ngOnInit(): void {
    // run code when the page is done loading
  }

  addTask() {
    console.log('The button has been pressed');
  }
}
