import { Component,Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
 
})
export class ResumeComponent {
  constructor(private titleservice: Title,private render: Renderer2) {
    titleservice.setTitle('ahmed attya . resume');
    } 

    DownloadFile(){
      const link = this.render.createElement('a');
      link.setAttribute('target','_blank');
      link.setAttribute('href','../../assets/Resume.pdf');
      link.setAttribute('download', 'A-attyaResume.pdf');
      
      link.click(); 
      link.remove();  
    }
}
