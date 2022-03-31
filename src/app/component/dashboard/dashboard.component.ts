import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudComponent } from 'src/app/service/crud/crud.component'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class ashboardComponent implements OnInit {
taskObj :Task =new Task();
showedit: boolean =false;
taskArr :Task [] =[];
addTaskValue : string ='';
editTaskValue : string = '';

  constructor(private CrudComponent: CrudComponent) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.showedit=false;
    this.taskObj = new Task();
    this.taskArr = [];
    this.getALLTask();
    
  }
  getALLTask() {
    this.CrudComponent.getALLTask() .subscribe ((res) =>{
this.taskArr=res;
    }
      )
  }
  addTask(){

    this.taskObj.name=this.addTaskValue
    this.CrudComponent.addTask(this.taskObj).subscribe ((res) =>{
this.ngOnInit();
this.addTaskValue='';
    })
  }
  editTask(etask:Task){

    this.showedit=false;
    this.taskObj.task_name = this.editTaskValue;
    const updated = {...etask, name: this.editTaskValue};
    this.CrudComponent.editTask(updated).subscribe(res =>{
      this.ngOnInit();

    })
  }
  showTask() {
this.showedit=true;
    
  }
  deleteTask(etask : Task){
    this.CrudComponent.deleteTask(etask).subscribe(res =>{
      this.ngOnInit();
    });


  }

  call(etask : Task) {
    
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }
  
}


