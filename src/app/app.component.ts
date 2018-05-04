import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private http: HttpClient) {}
  title = 'Auto Programming Translator';
  translateResult;
  loader = false;
  submitFunction(text) {
    this.loader = true;
    this.http.get('https://conduit.productionready.io/api/profiles/eric').subscribe( data => {
      this.loader = false;
      // alert(JSON.stringify(data));
      this.translateResult = JSON.stringify(data);
    });


  }
}
