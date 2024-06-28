import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdvantageType } from 'src/types/advantage.type';
import { AdvantageService } from '../../services/advantage.service';

@Component({
  selector: 'comp-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
  providers: [AdvantageService]
})
export class AdvantagesComponent implements OnInit {
  advantages: AdvantageType[] = [];

  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor(private advantageService: AdvantageService) { }

  ngOnInit(): void {
    this.advantages = this.advantageService.getAdvantages();
  }
}