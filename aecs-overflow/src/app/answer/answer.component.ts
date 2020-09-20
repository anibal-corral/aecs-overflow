import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-answer-form',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

onSubmit(form:NgForm){
  console.log(form.value.description);

}


}
