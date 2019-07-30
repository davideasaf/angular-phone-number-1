import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeSandbox';
  public phoneNumber: string = '';

  public onPhoneNumChange(phoneNum: string) {
    const rawNum = this.rawPhoneNumber(phoneNum);
    if (rawNum.length > 10) {
      return;
    }
    this.phoneNumber = rawNum;
  }

  public rawPhoneNumber(formattedPhoneNum: string) {
    const raw = formattedPhoneNum.replace(/[()-]/g, '').replace(/ +/g, '');
    return raw;
  }

  public formatPhoneNumber(phoneNum: string) {
    let cleaned = ('' + phoneNum).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{1,3})(\d{1,3})?(\d{1,4})?(.*)$/);
    if (match) {
      if (match[3] || match[4]) {
        return `(${match[1]}) ${match[2]} - ${match[3]}`;
      } else if (match[2]) {
        return `(${match[1]}) ${match[2]}`;
      } else if (match[1]) {
        return `(${match[1]})`;
      }
    }
    return '';
  }
}
