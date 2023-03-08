import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss'],
})
export class AgeComponent implements OnInit {
  name: string = '';
  age: number = 0;
  ageMessage: string = '';
  imageUrl: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  determineAge() {
    this.http.get(`https://api.agify.io/?name=${this.name}`)
      .pipe(
        catchError((error: any) => {
          console.error(error);
          return error;
        })
      )
      .subscribe((res: any) => {
        this.age = res.age;
        if (this.age < 18) {
          this.ageMessage = 'Joven';
          this.imageUrl = 'assets/img/young.jpg';
        } else if (this.age >= 18 && this.age < 60) {
          this.ageMessage = 'Adulto';
          this.imageUrl = 'assets/img/adult.jpg';
        } else {
          this.ageMessage = 'Anciano';
          this.imageUrl = 'assets/img/old.jpeg';
        }
      });
  }
}
