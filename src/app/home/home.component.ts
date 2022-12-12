import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NameformComponent } from '../nameform/nameform.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  PlayerNames:any;
  constructor(private dialog:MatDialog,  private dialogRef:MatDialogRef<NameformComponent>) {
    
  }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(){
    this.dialog.open(NameformComponent
      , {
      data:{
        player1:"" , 
        player2:"" , 
      }
    }
    );
    this.dialogRef.afterClosed().subscribe(res => {
      console.log(res, "bal");
      this.PlayerNames = res;
    })
  }

}
