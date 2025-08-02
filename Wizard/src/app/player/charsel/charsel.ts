import { Component, Signal } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'
import { Router } from '@angular/router';
import {filter, single} from 'rxjs';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';


interface Pers {
  value: string;
  viewValue: string;
}

interface Agi {
  values: string;
  viewValue: string;
}

interface Str {
  value: string;
  viewValue: string;
}

interface Ints {
  values: string;
  viewValue: string;
}

interface Chas {
  values: string;
  viewValue: string;
}

@Component({
  selector: 'app-charsel',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './charsel.html',
  styleUrl: './charsel.css'
})

export class Charsel {

  charName:string = '';
  role:string = '';
  form: FormGroup;
  readonly charsel: Signal<Charsel[]>
  
  constructor(private api: Api, private fb: FormBuilder, private router: Router) {

    this.charsel = this.api.getCharsel;
    this.form = this.fb.group({
    name: ['', Validators.required],
    role: ['', Validators.required],
    perstat: ['', Validators.required],
    agstat: ['', Validators.required],
    strstat: ['', Validators.required],
    intstat: ['', Validators.required],
    chastat: ['', Validators.required],
  })
  }


  gotoVillage() {
    this.router.navigate(['village'])};

pers: Pers[] = [
  {value: '1-0', viewValue: '1'},
  {value: '2-1', viewValue: '2'},
  {value: '3-2', viewValue: '3'},
  {value: '4-3', viewValue: '4'},
  {value: '5-4', viewValue: '5'}
];

agi: Agi[] = [
  {values: '1-0', viewValue: '1'},
  {values: '2-1', viewValue: '2'},
  {values: '3-2', viewValue: '3'},
  {values: '4-3', viewValue: '4'},
  {values: '5-4', viewValue: '5'}
];

str: Str[] = [
  {value: '1-0', viewValue: '1'},
  {value: '2-1', viewValue: '2'},
  {value: '3-2', viewValue: '3'},
  {value: '4-3', viewValue: '4'},
  {value: '5-4', viewValue: '5'}
];

ints: Ints[] = [
  {values: '1-0', viewValue: '1'},
  {values: '2-1', viewValue: '2'},
  {values: '3-2', viewValue: '3'},
  {values: '4-3', viewValue: '4'},
  {values: '5-4', viewValue: '5'}
];

chas: Chas[] = [
  {values: '1-0', viewValue: '1'},
  {values: '2-1', viewValue: '2'},
  {values: '3-2', viewValue: '3'},
  {values: '4-3', viewValue: '4'},
  {values: '5-4', viewValue: '5'}
];
}
