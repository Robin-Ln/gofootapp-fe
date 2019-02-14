import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-planning',
  templateUrl: './page-planning.component.html',
  styleUrls: ['./page-planning.component.css']
})
export class PagePlanningComponent implements OnInit {

  viewDate: Date = new Date();
  events = [];

  constructor() { }

  ngOnInit() {
  }

}
