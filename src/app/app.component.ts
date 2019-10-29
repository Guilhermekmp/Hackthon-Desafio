import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj';
  icon = 'information';
  mudar() {
    if (this.icon === 'home'){
      this.icon = 'information';
    } else {
      this.icon = 'home';
    }
  }
}
