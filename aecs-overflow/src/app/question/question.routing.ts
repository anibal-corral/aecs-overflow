//En este archivo se definen las rutas para // QUESTION:
import { QuestionListComponent  } from "./question-list.component";
import { QuestionDetailComponent  } from "./question-detail.component";


export const QUESTION_ROUTES = [
  {path: '', component:QuestionListComponent, pathMatch:'full'},
  {path:':id ', component:QuestionDetailComponent}
];
