import { Component, OnInit } from '@angular/core';
//must import Router from angular/router to access other components
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//we can use router only with this injection
  constructor(private router: Router) { }

  ngOnInit() {
  }
//lets load a different component here
  onLoadServers(id: number) {
    //navigate takes an argument that points to a new route. takes in an array
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'})
  }
}
