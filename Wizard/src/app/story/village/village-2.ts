import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-village-2',
    imports: [RouterModule],
    templateUrl: './village-2.html',
    styleUrls: ['./village-2.css']
})

export class Village2 {
    @Input() fixed = false;
  year = new Date().getFullYear();
}