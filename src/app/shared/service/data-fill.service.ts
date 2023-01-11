import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Template, TemplateDetails } from '../model/template';

@Injectable({
  providedIn: 'root'
})
export class DataFillService {

  constructor(private formBuilder:FormBuilder) { }

    myForm:FormGroup = this.formBuilder.group({
    templateName: [''],
    templateDesc: [''],
    templateImg: [''],
    templateDetails: this.formBuilder.array([
    this.initDetails(),
    ])
    });

    initDetails() {
    return this.formBuilder.group({
    pageName: [''],
    Questions: this.formBuilder.array([
    this.initQuestDetails()
    ])
    });
    }
    initQuestDetails() {
    return this.formBuilder.group({
    quest: [],
    section: [''],
    responseType: [''],
    required: [''],
    date: [true],
    time: [''],
    multipleSelect: [true],
    flaggedResponse: [true],
    uploadImage: [''],
    uploadfile: [''],
    addLogic: [''],
    manageSite: [''],
    format: [''],
    range: [''],


    })
    }





    getTemplate(obj:any){
      return obj
       }
  getTemplateDetails(obj:TemplateDetails){
   return obj
    }

  getQuestionDetails(obj:any){
      return obj
       }

       getAllTemplates(obj:Template){
        return obj
         }

















}
