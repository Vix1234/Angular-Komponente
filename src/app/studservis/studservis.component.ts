import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-studservis',
  templateUrl: './studservis.component.html',
  styleUrls: ['./studservis.component.css']
})
export class StudservisComponent implements OnInit {
  @Output() studentKreiranMed = new EventEmitter<{ime:string, sadrzaj:string}>();
  @Output() studentKreiranPrav = new EventEmitter<{ime:string, sadrzaj:string}>();
  @ViewChild('sadrzajStudenta') sadrzajStudenta: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  dodajStudentaMed(imeStudenta: HTMLInputElement){
    this.studentKreiranMed.emit({
      ime:imeStudenta.value,
      sadrzaj:this.sadrzajStudenta.nativeElement.value
    });
  }

  dodajStudentaPrav(imeStudenta: HTMLInputElement){
    this.studentKreiranPrav.emit({
      ime:imeStudenta.value,
      sadrzaj:this.sadrzajStudenta.nativeElement.value
    });
  }
}
