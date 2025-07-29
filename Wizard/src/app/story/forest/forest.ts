import { Component } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-forest',
  imports: [MatRadioButton, MatRadioGroup, RouterModule],
  templateUrl: './forest.html',
  styleUrl: './forest.css'
})
export class Forest {

}
