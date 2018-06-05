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
  langCode='en';
  codeFutureList = ['Python', 'Go', 'C#'];
  speakFutureList = [{label:'Hebrew',val:'iw'}, {label:'Spanish',val:'es'}, {label:'French',val:'fr'}];
  tooltipMsg = 'Those languages are not supported yet';
  loader = false;
  copyInputMessage(inputElement) {
    inputElement.disabled = false;
    inputElement.select();
    document.execCommand('copy');
    inputElement.disabled = true;
  }
  translateText(){
      this.http.get('https://translation.googleapis.com/language/translate/v2/?q=`${this.text}`&source=`${this.langCode}`&target=en&key=YOUR_API_KEY_HERE').subscribe( ({data}) => {
      this.englishText = data.translations.translatedText;
    }, error1 => {
      alert('Sorry something went wrong with translation:(');
    });
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
