import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/subject';
import { HttpService } from '../../services/http.Service';
import { Tutor } from '../../models/tutor';

@Component({
  selector: 'app-user-subjects',
  templateUrl: './userSubjects.component.html',
  styleUrls: ['./userSubjects.component.css']
})
export class UserSubjectsComponent implements OnInit {

  subjects: Subject[];
  tutors: Tutor[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getViewModel('subjects').subscribe((data: Subject[]) => this.subjects = data);
    this.httpService.getViewModel('tutors').subscribe((data: Tutor[]) => this.tutors = data);
  }

}
