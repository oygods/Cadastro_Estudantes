import { StudentService } from './../student.service';
import { STUDENTS } from './../mock-students';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  selectedStudent!: Student;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(student: Student): void {    
    this.selectedStudent = student;
  }

  getStudents(): void {
    this.students = this.studentService.getStudents();
  }
  
}
