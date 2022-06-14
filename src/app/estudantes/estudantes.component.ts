import { Component, OnInit } from '@angular/core';

import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {

  estudantes: Estudante[] = [];

  estudante: Estudante = {
    id: 1,
    nome: 'Lucas',
    sobrenome:'Godoy',
    idade: 18,
    CPF: '78945675',
    Telefone: '12345678',
  }

  selectedEstudante?: Estudante;
  onSelect(estudante: Estudante): void {
  this.selectedEstudante = estudante;
  this.messageService.add('EstudantesComponent: Um estudante foi selecionado');
}

  constructor(private estudanteService: EstudanteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
        .subscribe(estudantes => this.estudantes = estudantes);
  }



}

  


