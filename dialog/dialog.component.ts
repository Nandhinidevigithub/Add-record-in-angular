import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  description : string = "Add New Record";
  public header : any
  public head : any 
  public result : any
  form :  any  = this.fb.group({})

  
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private dashboard:DashboardComponent)   
    {

    this.header = data.header_name;
    console.log("this.header",this.header)
   
   }
   ngOnInit()
   {
     
     

    //  for(let h of this.header_name)
    //  {
       
    //  }
    console.log("Data in dialog comp ",this.data)
   //forloop
    // for(let h in this.data)
    // {
    ///   console.log("H Value ",h,this.data)
    //   this.head = 
      

    // }   

    this.data.forEach((value :any,index:any) => {
      console.log("value in dialog",value);
      
      this.form.addControl(value, new FormControl('', Validators.required));
     
          
    });
     
   
    
   }
  save() {
    // this.data.forEach((value :any,index:any) => {
    //   console.log("value in dialog",value);
    
    //  this.form.value.get(value);
    // });

    
    this.result = this.form.value;
      
    console.log("result save ",this.result);
    

    
    

   }
  close() {
    
    if(this.dashboard.flag==false)
    {
      this.dialogRef.close(this.form.value);
    } 
  }
  
}
