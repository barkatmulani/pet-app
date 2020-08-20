import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/ApiService';
import { Person } from 'src/models/person.model';
import { Transformed } from 'src/models/transformed.model';
import { Pet } from 'src/models/pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pet App';
  result: Transformed[] = [];

  constructor(private apiService: ApiService) {
  }
  
  ngOnInit() {
    this.apiService.getPeersonAndPets().subscribe((data: Person[]) => {
      this.result = this.transformData(data);
    })
  }

  transformData(persons: Person[]) {
    let transData: Transformed[] = [];
    let recs: Transformed[];
    let rec: Transformed;

    persons.forEach((person: Person) => {
      recs = transData.filter(d => d.gender === person.gender);
      if(recs.length) {
        rec = recs[0];
      }
      else {
        rec = { gender: person.gender, pets: [], cats: [] };
        transData.push(rec);
      }

      if(person.pets) {
        person.pets.forEach((pet: Pet) => {
          rec.pets.push(pet);
        });
      }
    });

    transData.forEach((person: Transformed) => {
      person.cats = person.pets.filter((pet: Pet) => pet.type === 'Cat')
    })

    return transData;
  }
}
