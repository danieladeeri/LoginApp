import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nameToSend: string = "";
  constructor(private apiService: ApiService,
    private router: Router
    ) 
    {}

  checkName(name: { name: string, password: string }) {
    if (!name.name || !name.password) {
      alert('Please enter both a name and a password.');
      return;
    }
    this.apiService.checkName().subscribe(
      (response: any[]) => {
        const matchingNames = response.filter(
          item => item.name === name.name 
          && 
          item.password === name.password
        );
      console.log(matchingNames);
      this.nameToSend = matchingNames[0].name;
        // const matchingPassword = response.filter(item2 => item.password === name);
        // if (matchingNames.length > 0 && matchingNames[0].password === name.password) {

          if (matchingNames.length > 0) {
          // alert ('Correct details');
          this.router.navigateByUrl(`/success?name=${this.nameToSend}`);
          // console.log('correct')

        } else {
          alert ('Incorrect details');

          // console.log('incorrect')
        }
      },
    );
  }
}