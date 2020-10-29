import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding primjeri';

  studenti=[{tip:'studentPrava', ime:'Mirko', sadrzaj:'Prva godina.'}];

  dodajStudentaMed(podaciOStudentuMed: {ime:string, sadrzaj:string}){
    this.studenti.push({
      tip:'studentMedicine',
      ime: podaciOStudentuMed.ime,
      sadrzaj: podaciOStudentuMed.sadrzaj
    })
  }

  dodajStudentaPrav(podaciOStudentuMed: {ime:string, sadrzaj:string}){
    this.studenti.push({
      tip:'studentPrava',
      ime: podaciOStudentuMed.ime,
      sadrzaj: podaciOStudentuMed.sadrzaj
    })
  }
}
