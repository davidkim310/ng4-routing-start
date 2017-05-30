import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      //how we grab the id from route address
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    //create an observable to create asynchronous change
    this.route.params
      .subscribe(
        //takes the updated params
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }
  //we do not want to keep our subscription in memory
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
  }

}
