import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  template: `
    <h1 class="text-preset-1 text-gold">Titre principal (Preset 1)</h1>

    <p class="text-preset-4">
      Ceci est un paragraphe avec les specs de Preset 4 (14px, regular)
    </p>

    <p class="text-preset-5-bold">Petit texte fort, preset 5 bold</p>
  `
})
export class OverviewPage implements OnInit {
  ngOnInit() {}
}
