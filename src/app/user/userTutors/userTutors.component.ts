import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/subject';
import { HttpService } from '../../services/http.Service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../models/lesson';

@Component({
  selector: 'app-user-tutors',
  templateUrl: './userTutors.component.html',
  styleUrls: ['./userTutors.component.css'],
})
export class UserTutorsComponent implements OnInit {

  lessons: Lesson[];
  subjects: Subject[];
  writeForm: FormGroup;
  tutorId: number;

  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tutorId = this.activateRoute.snapshot.params['tutor'];
    this.httpService.getViewModel('subjects').subscribe((data: Subject[]) => this.subjects = data);
    this.httpService.getViewModel('lessons/byTutor/' + this.tutorId).subscribe((data: Lesson[]) => this.lessons = data);
    this.writeForm = new FormGroup ({
      subject: new FormControl(),
      timeOfStart: new FormControl(new Date()),
      timeOfEnd: new FormControl(new Date())
    });
  }

  writeLesson() {
    this.httpService.postModel('lessons', {
      tutorId: this.tutorId,
      userId: 'ff0d2e8b-302b-4cec-b807-699ca4f0c7ac',
      subjectId: this.writeForm.get('subject').value,
      timeOfStart: this.writeForm.get('timeOfStart').value,
      timeOfEnd: this.writeForm.get('timeOfEnd').value
    });
  }
}
