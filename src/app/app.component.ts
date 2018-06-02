import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {logging} from 'selenium-webdriver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private http: HttpClient) {}
  translateResult;
  text = '';
  code = '';
  loader = false;
  submitFunction(text) {
    this.loader = true;
    console.log(text);
    this.http.get('https://conduit.productionready.io/api/profiles/eric').subscribe( data => {
      this.loader = false;
      // alert(JSON.stringify(data));
      this.translateResult = JSON.stringify(data);
    });


  }
}
