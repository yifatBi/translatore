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
  langCode = 'en';
  codeFutureList = ['Python', 'Go', 'C#'];
  speakList = [{label: 'English', val: 'en'}, {label: 'Hebrew', val: 'he'}, {label: 'Spanish', val: 'es'}, {label: 'French', val: 'fr'}];
  tooltipMsg = 'The language is not supported yet';
  loader = false;

  copyInputMessage(inputElement) {
    inputElement.disabled = false;
    inputElement.select();
    document.execCommand('copy');
    inputElement.disabled = true;
  }
  translateText() {
    if (this.langCode !== 'en') {
    const apiKey = 'trnsl.1.1.20180606T095504Z.451741178e5d8353.0c53ca849af9576d664c91a53a37f7b3cb871f6c';
    this.http.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${this.text}&lang=${this.langCode}-en`).
    subscribe(value => {
      let transText =  value['text'][0];
      console.log(transText);
    this.submitFunction(transText); });
    } else {this.submitFunction(this.text); }
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
