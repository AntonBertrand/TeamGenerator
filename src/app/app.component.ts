import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamGenerator';
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";
  numberOfTeams: number |"" = "";
  teams: string[] [] = []

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName)
  }

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number (value);
  }

addMember() {

  if(!this.newMemberName) {
    this.errorMessage = "Error: Name cannot be empty!";
    return
  } 

  this.members.push(this.newMemberName);
  this.newMemberName = "";
  console.log(this.members);
  this.errorMessage = "";
}

generateTeams() {

  if (!this.numberOfTeams || this.numberOfTeams <= 0) {
    this.errorMessage = "Invalid Number of Teams";
    return;
  }

  if (this.numberOfTeams > this.members.length){
    this.errorMessage = "Numbers of teams exceeds number of members"
    return;
  }

  this.errorMessage = "";
  const allMembers = [...this.members]

  while(allMembers.length) {
    for(let i = 0; i < this.numberOfTeams; i++) {
      const randomIndex = Math.floor(Math.random() * allMembers.length)
      const member = allMembers.splice(randomIndex, 1)[0];

      if(!member) break;
  
      if(this.teams[i]) {
        this.teams[i].push(member) 
      } else {
        this.teams[i] = [member]
      }
    }
  }

  console.log(this.teams);
  this.members = [];
  this.numberOfTeams = "";

}

}
