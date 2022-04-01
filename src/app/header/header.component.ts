import { Component, OnInit } from '@angular/core';
import { Singhabi } from '../singhabi';
import { currStudent } from '../../assets/data/Data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  studentDetails = currStudent;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
