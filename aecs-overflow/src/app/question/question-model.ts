/*Esta clase representa las preguntas*/
import {Answer} from '../answer/answer.model';
export class Question {
  title:string;
  description:string;
  createdAt?:Date;
  icon?:string;
  answers:Answer[];

  constructor(
    title:string,
    description:string,
    createdAt?:Date,
    icon?:string,
    answers?:Answer[]
  ){
    this.title=title;
    this.description=description;
    this.createdAt=createdAt;
    this.icon=icon;
    this.answers=[];
  }
}
