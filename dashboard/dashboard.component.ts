import { Component,Input,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { HttpClient} from '@angular/common/http';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  @Input('url') url_tab : any;


  
  
  constructor(private http: HttpClient,private dialog: MatDialog) { }
  
  public dataSource : any
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'profileImage'];
  jsoninfo : any
  public headername : any
  public headernames : any
  public flag : boolean = false
  public headername_dialog : any
  public result : any
 
  openDialog()
  {
     const dialog_config = new MatDialogConfig();
     dialog_config.disableClose = false;
     dialog_config.autoFocus = true;
     
     console.log(this.headername);
     console.log("dialog_config : ",dialog_config.data);
     console.log("headername : ",this.headername);
     dialog_config.data=this.headername 
     console.log("dialog_config : ",dialog_config.data);
     console.log("headername : ",this.headername);

     this.headername_dialog = dialog_config.data

    //  this.dialog.open(DialogComponent, dialog_config);
     
    const dialogRef = this.dialog.open(DialogComponent, dialog_config);
     
     
     
    dialogRef.afterClosed().subscribe((data:any) =>
     {
            this.result = data;
            console.log("Result : ",this.result)
            if(this.result==undefined)
            {
               this.flag=true;
            }
            else
            {
              this.flag=false;
            this.jsoninfo.push(this.result);
            this.dataSource = new MatTableDataSource(this.jsoninfo);  
             
            // console.log("Result Data : ",this.dataSource.data[this.dataSource.data.length-1]);           
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            }
            // console.log("Result : ",this.dataSource);
      
     })
  
   
  
  
  }

  ngOnInit() {   
    const url : string = this.url_tab;
    this.http.get(url).subscribe((response) => 
    {
         this.jsoninfo = response;
        //  this.jsoninfo.Add(data);
         console.log("json info",this.jsoninfo); 
         this.headername = Object.keys(this.jsoninfo[0]);
       
         this.dataSource =  new MatTableDataSource (this.jsoninfo);
       
         
         console.log("data source",this.dataSource); 
        //  console.log(this.headername);
        //  console.log(typeof(this.headername));
        //  console.log(typeof(this.jsoninfo)); 
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
        
    })
    
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
}


