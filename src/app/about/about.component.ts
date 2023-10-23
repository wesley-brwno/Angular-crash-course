import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  param: any;
  queryParam: any;

  constructor(
    private activateRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    console.log(this.activateRoute);
    this.param = this.activateRoute.snapshot.params['username'];
    this.queryParam = this.activateRoute.snapshot.queryParams['course']
  }
}
