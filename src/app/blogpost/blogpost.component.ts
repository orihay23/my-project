import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  reference = 'my reference';
  passage = 'my passage';
  constructor() { }

  ngOnInit() {
  }

}
