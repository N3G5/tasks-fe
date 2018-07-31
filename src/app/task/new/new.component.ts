import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../model/task.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


  @Output()
  private addEvent: EventEmitter<Task> = new EventEmitter();

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  public save(value: string): void {
    if (value) {
      const t = new Task();
      t.description = value;
      this.taskService.updateTask(t).subscribe((task: Task) => {
        console.log(task);
        this.addEvent.emit(task);
      });
    }
  }

}
