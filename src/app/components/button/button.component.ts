import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() callBackClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  btnClick = (): void => {
    this.callBackClick.emit();
  };
}
