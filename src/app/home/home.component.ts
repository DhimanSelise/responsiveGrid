import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NameformComponent } from '../nameform/nameform.component';
export interface PlayerName{
  player1:string,
  player2:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {
  PlayerNames?:PlayerName;
  constructor(private dialog:MatDialog,private _snackBar: MatSnackBar) {
    
  }

  ngOnInit(): void {
    this.openDialog();
    this.PlayerNames = {
      player1 :'x',
      player2: 'y'
    }
  }

  openSnackBar(message: string,siteMassage:string) {
    this._snackBar.open(message, siteMassage, {
      duration: 2500
    });
    
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
      this.openSnackBar("Welcome to TicTacToe Multiverse", "Lets Play"); 
      this.PlayerNames = res;
    }

    )
  }

  count:number = 0 ; 

  colnumber?: number ; 

  RunLoop(){
    let nums = this.colnumber;
    return new Array(this.colnumber) ; 
  }

  gerColsSize(n:number){
    this.colnumber = n; 
    return n;
  }

  changeColor():string{
    this.count++;
    if(this.count%2===0){
      return 'player-color-x';
    }
    else {
      return 'player-color-o' ; 
    }
  }

}
