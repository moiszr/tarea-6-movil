import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
})
export class UniversityComponent implements OnInit {
  country: string = '';
  universities: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  searchUniversities() {
    this.http
      .get(`http://universities.hipolabs.com/search?country=${this.country}`)
      .pipe(
        catchError((error: any) => {
          console.error(error);
          return error;
        })
      )
      .subscribe((res: any) => {
        this.universities = res;
      });
  }
}
