import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup } from '@angular/forms'; // Importa FormBuilder y FormGroup desde '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule






@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone:true,
  imports: [MatSidenavModule, NgIf, MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatToolbarModule,MatInputModule,ReactiveFormsModule],


})

export class NavComponent {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
