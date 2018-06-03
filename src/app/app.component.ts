import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


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
  tooltipMsg = 'Those languages don\'t supported yet';
  loader = false;
  copyInputMessage(inputElement) {
    inputElement.disabled = false;
    inputElement.select();
    document.execCommand('copy');
    inputElement.disabled = true;
  }
  submitFunction(text) {
    this.loader = true;
    console.log(text);
    this.http.get('https://conduit.productionready.io/api/profiles/eric').subscribe( data => {
      this.loader = false;
      this.translateResult = 'function(int Var1,int Var2){return Var1+Var2}';
      // scrolling to the result if small device
      document.getElementById('translation').scrollIntoView({ behavior: 'smooth' });
    });


  }

}
