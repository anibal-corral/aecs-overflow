import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Answer} from './answer.model';
import {User} from '../auth/user.model';
import {Question} from '../question/question-model';
@Component({
  selector: 'app-answer-form',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
@Input() question:Question;
  constructor() { }

  ngOnInit(): void {
  }

onSubmit(form:NgForm){

  console.log(form.value.description);
  const answer = new Answer(
    form.value.description,
    this.question,
    new Date(),
    new User('Anastasia', 'Anais')
  );
  this.question.answers.unshift(answer);
  form.reset();

}


}
