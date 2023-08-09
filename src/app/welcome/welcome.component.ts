import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-welcome',
//   templateUrl: './welcome.component.html',
//   styleUrls: ['./welcome.component.scss'],
// })
// export class WelcomeComponent  implements OnInit {

//   constructor() { }

//   ngOnInit() {}

// }

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  nameCaught: string | null= '';
  welcomeMessage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   const userName = params['name'];
    //   this.welcomeMessage = `Welcome, ${name}!`;
    // });
    this.nameCaught = this.route.snapshot.queryParamMap.get('name');
    this.welcomeMessage = `Welcome, ${this.nameCaught}!`;
  }
}