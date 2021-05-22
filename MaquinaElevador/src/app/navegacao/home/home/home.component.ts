import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public maquina: boolean = false;
  public elevador: boolean = false;
  public analisador: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ativaMaquina(){
    this.maquina = true;
  }

  ativaElevador(){
    this.elevador = true;
  }

  ativaAnalisador(){
    this.analisador = true;
  }
}
