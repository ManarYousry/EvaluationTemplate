import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Page ${index}`);
  constructor(public dialogRef: MatDialogRef<PreviewComponent>){
  }

    ngOnInit(){
    }

    form: FormGroup = new FormGroup({
      $key: new FormControl(null),
      NameofSalesManager: new FormControl('', Validators.required),
      Contact: new FormControl('', Validators.required),
      ContactName: new FormControl('', Validators.required),
      CompanyName: new FormControl('', Validators.required),



    });





    onClear(){
      // this.service.form.reset();
      // this.service.initializeFormGroup();
      // this.notificationService.success(':: Submitted successfully');
    }
    onSubmit(){
      // if(this.service.form.valid){

      //   this.service.form.reset();
      // this.service.initializeFormGroup();
      // this.notificationService.success(':: Submitted successfully');
      this.onClose();

      }

    onClose(){

     this.dialogRef.close();
      this.form.reset();



    }

}
