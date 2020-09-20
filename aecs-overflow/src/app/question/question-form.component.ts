import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Question} from './question-model';
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
  const q = new Question (
    form.value.title,
    form.value.description
  );
  console.log(q);
}
}
