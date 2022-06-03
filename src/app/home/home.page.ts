import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Charada {
  id: number,
  pergunta: string,
  resp: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pergunta: Charada[] = [];
  resultado: boolean = true;
  url: string = 'http://lucasreno.kinghost.net/charada';

  constructor(
    public http: HttpClient,
  ) {
    this.crh();
  }

  crh(){
    this.http.get<Charada[]>(this.url).subscribe(
      (resp: Charada[]) => {
        this.pergunta = resp;
      }
    );
    this.resultado = true;
  }

  piada(){
    this.resultado = false;
  }

}
