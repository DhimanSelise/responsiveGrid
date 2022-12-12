import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-nameform',
  templateUrl: './nameform.component.html',
  styleUrls: ['./nameform.component.scss']
})
export class NameformComponent implements OnInit {
  playerNames!:FormGroup;
  constructor(public dialogRef: MatDialogRef<NameformComponent>) {
    this.playerNames = new FormGroup({
      player1:new FormControl("x"),
      player2:new FormControl("o")
    })
  }

  ngOnInit(): void {
  }

  dialogClose(){
    //this.dialogRef.close();
  }

  submitPlayerName(){
    // this.dialogClose();
  }

  playAsGuest(){
    this.playerNames = new FormGroup({
      player1:new FormControl("x"),
      player2:new FormControl("o")
    }) ; 
    this.dialogClose(); 
  }

}
