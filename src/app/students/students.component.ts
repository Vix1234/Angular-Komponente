import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  //template:'<app-student></app-student>',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  allowNewStudent = false;
  studetnAddingStatus = "Nije dodat ni jedan student!";
  studentIme = "Nikola";
  studentAdded = false;

  students=['Marko'];

  constructor() 
  {
    setTimeout(() => {
      this.allowNewStudent = true;
    }, 3000);
   }

  ngOnInit() {
  }

  onAddingStudent(){
    this.studentAdded = true;
    this.students.push(this.studentIme);
    console.log(this.students);
    this.studetnAddingStatus = "Dodat je student!";
    
  }

  onUpdateStudentName(event: Event){
    this.studentIme = (<HTMLInputElement>event.target).value;
  }

}
