import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // important!

@Component({
  selector: 'app-calendrier-rendez-vous',
  templateUrl: './calendrier-rendez-vous.component.html',
  styleUrls: ['./calendrier-rendez-vous.component.css']
})
export class CalendrierRendezVousComponent {

  calendarPlugins = [dayGridPlugin]; // important!
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

}
