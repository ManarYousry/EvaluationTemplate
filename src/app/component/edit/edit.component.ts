import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditComponent>, private router:Router){
  }

    ngOnInit(){
    }


    onClose(){
     this.dialogRef.close();

    }
    editTemplate(){
      this.router.navigateByUrl("/templateForm")
      this.dialogRef.close();
    }
}
