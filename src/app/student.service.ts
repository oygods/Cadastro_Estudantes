import { STUDENTS } from './mock-students';
import { Student } from './student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {



  constructor() { }

  getStudents(): Student[] {
    return STUDENTS;
  }
}
