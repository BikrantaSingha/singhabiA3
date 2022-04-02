import { Component, OnInit } from '@angular/core';
import { Course } from '../courseInfo';
import { MYCOURSES } from '../../assets/data/CourseData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  courses = MYCOURSES;
  temp: number = 0;
  htmlVariable: string = "<p>Please select a course above. Course data will be displayed here</p>";

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(id:string){
    this.temp = parseInt(id) - 1;
    this.htmlVariable = "<p>Course Code: " + this.courses[this.temp].ccode + "</p>" +
    "<p>Course Title: " + this.courses[this.temp].ctitle + "</p>" +
    "<p>Day of the week: " + this.courses[this.temp].cday + "</p>" +
    "<p>Professor: " + this.courses[this.temp].cprofessor + "</p>";
  }

}
