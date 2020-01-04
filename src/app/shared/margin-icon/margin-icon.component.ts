import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fpa-margin-icon',
  templateUrl: './margin-icon.component.html',
  styleUrls: ['./margin-icon.component.css']
})
export class MarginIconComponent implements OnInit {

  @Input()
  nameOfIcon: string;

  constructor() { }

  ngOnInit() {
  }

}