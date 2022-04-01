import { Component, OnInit } from '@angular/core';
import { Singhabi } from '../singhabi';
import { currStudent } from '../../assets/data/Data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  studentDetails = currStudent;

  constructor() { }

  ngOnInit(): void {
  }

}
