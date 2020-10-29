import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { StudservisComponent } from './studservis/studservis.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    StudservisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
