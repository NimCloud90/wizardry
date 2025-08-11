import { Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


interface Perstat {
  value: string;
  viewValue: string;
}

interface Agstat {
  values: string;
  viewValue: string;
}

interface Strstat {
  value: string;
  viewValue: string;
}

interface Intstat {
  values: string;
  viewValue: string;
}

interface Chastat {
  values: string;
  viewValue: string;
}

@Component({
  selector: 'app-character',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './character.html',
  styleUrl: './character.css'
})

export class Character {

  charName:string = '';
  role:string = '';
  form: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {


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

pers: Perstat[] = [
  {value: '1-0', viewValue: '1'},
  {value: '2-1', viewValue: '2'},
  {value: '3-2', viewValue: '3'},
  {value: '4-3', viewValue: '4'},
  {value: '5-4', viewValue: '5'}
];

agi: Agstat[] = [
  {values: '1-0', viewValue: '1'},
  {values: '2-1', viewValue: '2'},
  {values: '3-2', viewValue: '3'},
  {values: '4-3', viewValue: '4'},
  {values: '5-4', viewValue: '5'}
];

str: Strstat[] = [
  {value: '1-0', viewValue: '1'},
  {value: '2-1', viewValue: '2'},
  {value: '3-2', viewValue: '3'},
  {value: '4-3', viewValue: '4'},
  {value: '5-4', viewValue: '5'}
];

ints: Intstat[] = [
  {values: '1-0', viewValue: '1'},
  {values: '2-1', viewValue: '2'},
  {values: '3-2', viewValue: '3'},
  {values: '4-3', viewValue: '4'},
  {values: '5-4', viewValue: '5'}
];

chas: Chastat[] = [
  {values: '1-0', viewValue: '1'},
  {values: '2-1', viewValue: '2'},
  {values: '3-2', viewValue: '3'},
  {values: '4-3', viewValue: '4'},
  {values: '5-4', viewValue: '5'}
];
}
