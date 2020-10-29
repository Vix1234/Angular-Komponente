import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-studservis',
  templateUrl: './studservis.component.html',
  styleUrls: ['./studservis.component.css']
})
export class StudservisComponent implements OnInit {
 
  @Output() studentKreiranMed = new EventEmitter<{ime:string, sadrzaj:string}>();
  @Output() studentKreiranPrav = new EventEmitter<{ime:string, sadrzaj:string}>();
  noviSadrzaj = '';

  constructor() { }

  ngOnInit(): void {
  }

  dodajStudentaMed(imeStudenta: HTMLInputElement){
    this.studentKreiranMed.emit({
      ime:imeStudenta.value,
      sadrzaj:this.noviSadrzaj
    });
  }

  dodajStudentaPrav(imeStudenta: HTMLInputElement){
    this.studentKreiranPrav.emit({
      ime:imeStudenta.value,
      sadrzaj:this.noviSadrzaj
    });
  }
}
