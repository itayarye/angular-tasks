import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() searchString: string;
  @ViewChild('clientInputString') inputString: ElementRef<HTMLInputElement>
  constructor() { }

  ngOnInit(): void {
  }

  clearText(): void {
    this.inputString.nativeElement.value = '';
    console.log('clear text');
  }

  clickFocusOut(event: any):void{
    console.log('Focus Out Clicked');
    console.log(`${event.relatedTarget?.className} class`);
    //console.log(event);
  }

}
