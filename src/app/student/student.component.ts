import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input('student') ime: string
  //Otkomentarisati za @Input i @Output primjer
  //@Input() student: { tip:string, ime:string};
  studentId: number = 2;
  studentStatus: string = 'online';


  constructor(){
    this.studentStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getStudentStatus(){
    return this.studentStatus;
  }
  
  getColor(){
    return this.studentStatus === 'online' ? 'green' : 'red';
  }

}
