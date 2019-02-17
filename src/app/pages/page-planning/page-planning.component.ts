import { Component, OnInit } from '@angular/core';
import { CalendarEvent, DAYS_OF_WEEK } from 'calendar-utils';

import {
  startOfDay,
  subDays,
  addDays,
  endOfDay
} from 'date-fns';

import { CalendarView } from 'angular-calendar';

/*
 * Constantes
 */
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-page-planning',
  templateUrl: './page-planning.component.html',
  styleUrls: ['./page-planning.component.css']
})
export class PagePlanningComponent implements OnInit {

  /*
   * Attributs
   */
  typeCalendarView: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  activeDayIsOpen: Boolean = true;
  locale: String = 'fr-FR';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event'
    }
  ];

  /*
   * Constructeur
   */
  constructor() { }

  /*
   * Methodes
   */
  ngOnInit() {
    console.log(CalendarView.Month);
  }

}
