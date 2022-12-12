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

  constructor(private dialog:MatDialog) {

  }

  ngOnInit(): void {
    // this.openDialog();
    this.PlayerNames = {
      player1 :'x',
      player2: 'y'
    }
  }

  openDialog(){
    const dialogRef = this.dialog.open(NameformComponent
      , {
      data:{
        player1:"" ,
        player2:"" ,
      }
    },

    );
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.PlayerNames = res;
    }

    )
  }

}
