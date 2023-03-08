import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
})
export class GenderComponent  implements OnInit {

  name: string = '';
  gender: string = '';
  isMale: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  predictGender() {
    this.http.get(`https://api.genderize.io/?name=${this.name}`)
      .pipe(
        catchError((error: any) => {
          console.error(error);
          return error;
        })
      )
      .subscribe((res: any) => {
        this.gender = res.gender;
        this.isMale = res.gender === 'male';
      });
  }
}
