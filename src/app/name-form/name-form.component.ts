import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss'],
})
export class NameFormComponent  implements OnInit {
@Output() nameSubmitted = new EventEmitter <{name: string, password: string}>();
name: string = '';
password: string = '';

constructor() { }

  ngOnInit() {}

  onSubmit(){
    // if (this.name.trim() !== '') {
      this.nameSubmitted.emit({ name: this.name.trim(), password: this.password.trim() });
   // }  
  }
}
