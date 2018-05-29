import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './services/http.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  title = 'app';
}
