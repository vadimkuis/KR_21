import { Component, Input, OnInit } from '@angular/core';
import { AdvantageType } from 'src/types/advantage.type';

@Component({
  selector: 'advantage-item',
  templateUrl: './advantage-item.component.html',
  styleUrls: ['./advantage-item.component.scss']
})
export class AdvantageItemComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() index: number;
  constructor() {
    this.index = 0;
    this.advantage = {
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
