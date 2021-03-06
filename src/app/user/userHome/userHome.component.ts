import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.Service';
import { Subject } from '../../models/subject';
import { Tutor } from '../../models/tutor';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user-home',
  templateUrl: './userHome.component.html',
  styleUrls: ['./userHome.component.css']
})
export class UserHomeComponent implements OnInit {

  subjects: Subject[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getViewModel('subjects').subscribe((data: Subject[]) => this.subjects = data);
  }

}
