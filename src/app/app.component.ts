import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

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
  codeFutureList = ['Python', 'Go', 'C#'];
  speakFutureList = ['Hebrew', 'Spanish', 'French'];
  tooltipMsg = 'Those languages are not supported yet';
  loader = false;
  copyInputMessage(inputElement) {
    inputElement.disabled = false;
    inputElement.select();
    document.execCommand('copy');
    inputElement.disabled = true;
  }
  submitFunction(text) {
    this.loader = true;
    this.http.post('/v1/generate', text, httpOptions).subscribe( data => {
      this.loader = false;
      this.translateResult = JSON.stringify(data);
      // scrolling to the result if small device
      document.getElementById('translation').scrollIntoView({ behavior: 'smooth' });
    }, error1 => {
      alert('Sorry something went wrong :(');
      // this.translateResult = 'function(int Var1,int Var2){return Var1+Var2;}';
      this.loader = false; });


  }

}
