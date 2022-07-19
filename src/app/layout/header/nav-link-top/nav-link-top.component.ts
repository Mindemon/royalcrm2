import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link-top',
  templateUrl: './nav-link-top.component.html',
  styleUrls: ['./nav-link-top.component.css']
})
export class NavLinkTopComponent  {
  @Input() to : string = '';
  @Input() text: string = '';
  @Input() className: string = '';
  

  

}
