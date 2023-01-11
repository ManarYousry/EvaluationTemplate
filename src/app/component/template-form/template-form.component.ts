import { animate, state, style, transition, trigger } from '@angular/animations';
import { E } from '@angular/cdk/keycodes';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ToastrService } from 'ngx-toastr';
import { TreeNode } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { QuestionDetails } from 'src/app/shared/model/template';
import { DataFillService } from 'src/app/shared/service/data-fill.service';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TemplateFormComponent implements OnInit {
  tableData: TreeNode[]=[];
  cols: any[]=[];
   TitlePage:string="Page Title";
   selected=" ";
   selectedFiles?: FileList;
   currentFile?: File;
   preview = '../../../assets/image/upload.jpg';
   checked=true
   show=false;
   req=false;
   logic=false;
   date=false;
   selectedCity3: string="";

   range=false;
   site=false;
   upimg=false;
   upfil=false;
   multi=false;
   flage=false
   ResponseType=[{
    type:"Title page information",
    options:[{
      option:"site ", value:"site"
    },
    {
      option:"Inspection Date", value:"InspectionDate"
    },
    {
      option:"Document Number", value:"DocumentNumber"
    },
    {
      option:"Inspection Location", value:"InspectionLocation "
    }]
   },
  {
    type:"Other Response",
    options:[{
      option:"Text Answer ", value:"TextAnswer"
    },
    {
      option:"Number", value:"Number"
    },
    {
      option:"Checkbox", value:"Checkbox"
    },
    {
      option:"Date & Time", value:" DateTime"
    },
    {
      option:"Media", value:"Media"
    },
    {
      option:"Slider", value:"Slider "
    },
    {
      option:"Annotation", value:"Annotation "
    },
    {
      option:"Signature", value:"Signature"
    },
    {
      option:"Location", value:"Location"
    },
    {
      option:"Instruction", value:"Instruction"
    }]


  },
{
  type:"Multiple choice Response",
  options:[{
    option:"Yes | No", value:"Y/N"
  },
{
  option:"Good | Fair| Poor", value:"G/F/P "
},

{
  option:"Safe | At Risk", value:"S/R"
},
{
  option:"Pass | Fail", value:"P/F "
},
{
  option:"Compliant | Non Compliant", value:"C/NC"
}]

}]
displayedColumns: string[] = ['Question', 'Typeofresponse'];
// dataSource:QuestionDetails[]=[];
dataSource = new BehaviorSubject<AbstractControl[]>([]);
  constructor(public dataser:DataFillService,private toastr:ToastrService,private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.dataser.myForm;
    this.dataser.initDetails();
    this.dataser.initQuestDetails();


    //prime table data/////////////////////////////////
    this.cols = [
      { field: 'name', header: 'Question' },
      { field: 'age', header: 'Typeofresponse' },
    ];
    this.tableData = [
      {
        data: {
          name: 'A',
          age: '40',
        },
        children: [
          {
            data: {
              name: 'B',
              age: '16',
            },
          },
          {
            data: {
              name: 'C',
              age: '14',
            },
          },
        ],
      },

    ];


    // ----------------------------------------------------//////////////
  }
  get templateDetails() {
    return ( this.dataser.myForm.get('templateDetails') as FormArray).controls;
  }
  Questions(i:number){



    return (( this.dataser.myForm.get('templateDetails') as FormArray).controls[i].get('Questions') as FormArray).controls;

  }
  Question(page:any) {
    //return(this.dataser.myForm.get('Questions') as FormArray).controls ;
//return(this.dataser.myForm.get('Questions') as FormArray).controls ;
     return (<FormArray>page.controls.Questions).controls
  }

  addQuestion(page:any){

  const control = <FormArray>page.controls.Questions;
  control.push(this.dataser.initQuestDetails());

  }

onchange(e:any){

  this.preview = '';

  this.selectedFiles = e.target.files;

  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);

    if (file) {
      this.preview = '';
      this.currentFile = file;

      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.preview = e.target.result;
      };

      reader.readAsDataURL(this.currentFile);
    }
  }
}




/////////////////////////////////////////
  removequestion(page:any,j:number){

    const control = <FormArray>page.controls.Questions;
    control.removeAt(j);

  }

  EnterTitle(e:Event){
    e.stopPropagation();
    this.show=true;


  }

  onselectOptionChange(e:string){

    switch(e) {
      case 'site': {
        this.site=true;
        this.req=true;
         break;
      }
      case 'InspectionDate': {
        this.req=true;
        this.date=true;
         break;
      }
      case 'DocumentNumber': {
        this.req=true;
        break;
     }
     case 'InspectionLocation': {
      this.req=true;
      this.site=true;
      break;
   }
   case 'TextAnswer': {
    this.req=true;
    this.logic=true
    break;
 }
 case 'Number': {
  this.req=true;
  this.logic=true
  break;
}
case 'Checkbox': {
  this.req=true;
  this.logic=true
  break;
}
case 'DateTime': {
  this.req=true;
  this.date=true
  break;
}
case 'Media': {
  this.req=true;
  this.logic=true;
  this.upfil=true;
  break;
}
case 'Slider': {
  this.req=true;
  this.logic=true;
  this.upfil=true;
  break;
}

case 'Annotation': {
  this.req=true;
  this.logic=true;
  this.upfil=true;
  break;
}
case 'Signature': {
  this.req=true;
  this.logic=true;
  this.upfil=true;
  break;
}
case 'Location': {
  this.req=true;
  this.logic=true;
  this.upfil=true;
  break;
}
case 'Y/N': {
  this.req=true;
  this.logic=true;
  this.upfil=true;
  break;
}
      default: {
         //statements;
         break;
      }
   }

  }


  AddLogic(){

    this._bottomSheet.open(BottomsheetComponent, {
      panelClass: 'custom-width',
      disableClose: true
      }


      );


  }


  ManageSite(){}

  typetitle(e:any){
  e.stopPropagation();
    this.TitlePage= e.target.value;
  }



  save(myform:any){
   console.log('myTemplate data',myform.value)
    this.toastr.success('data Submitted Successfuly');







// upload file

// if (this.selectedFiles) {
//   const file: File | null = this.selectedFiles.item(0);

//   if (file) {
//     this.currentFile = file;

//     this.uploadService.upload(this.currentFile).subscribe({
//       next: (event: any) => {
//         if (event.type === HttpEventType.UploadProgress) {
//           this.progress = Math.round((100 * event.loaded) / event.total);
//         } else if (event instanceof HttpResponse) {
//           this.message = event.body.message;
//           this.imageInfos = this.uploadService.getFiles();
//         }
//       },
//       error: (err: any) => {
//         console.log(err);
//         this.progress = 0;

//         if (err.error && err.error.message) {
//           this.message = err.error.message;
//         } else {
//           this.message = 'Could not upload the image!';
//         }

//         this.currentFile = undefined;
//       },
//     });
//   }

//   this.selectedFiles = undefined;
// }











  }

  toggle(e:Event){
    e.stopPropagation();
    this.show=true;
  }





  AddPage()
  {
    const control = <FormArray>this.dataser.myForm.controls['templateDetails'];
    control.push(this.dataser.initDetails());

  }
  DeletePage(i:number){
    const control = <FormArray>this.dataser.myForm.controls['templateDetails'];

    control.removeAt(i);

  }












}
