import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService, Artisan } from '../../services/artisans.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-page-artisan',
  imports: [CommonModule, FormsModule],
  templateUrl: './page-artisan.component.html',
  styleUrl: './page-artisan.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PageArtisanComponent {
  private route = inject(ActivatedRoute);
  private artisanService = inject(ArtisanService);

  artisan: Artisan | undefined;

  form = {
    name: '',
    firstname: '',
    subject: '',
    message: ''
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      const id = idParam ? +idParam : null;
      
      if (id !== null) {
        this.artisanService.getArtisans().subscribe({
          next: (artisans) => {
            this.artisan = artisans.find(artisan => +artisan.id === id);
          },
          error: (err) => console.error('Error loading artisans:', err)
        });
      }
    });
  }

  sendEmail() {
    const serviceID = 'service_wfb160i';
    const templateID = 'template_2dqrnfg';
    const publicKey = 'yeegCZ0xhPB6yMnbD';

    const templateParams = {
      from_name: `${this.form.firstname} ${this.form.name}`,
      subject: this.form.subject,
      message: this.form.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès!');
        this.form = { name: '', firstname: '', subject: '', message: '' }; // Reset
      }, error => {
        console.error('FAILED...', error);
        alert('Erreur, veuillez réessayer.');
      });
  }

  getStarType(index: number): 'full' | 'half' | 'empty' {
    if (!this.artisan) {
      return 'empty';
    }
    
    const fullStars = Math.floor(this.artisan.note);
    const decimal = this.artisan.note - fullStars;

    if (index < fullStars) {
      return 'full';
    }
    if (index === fullStars && decimal > 0.25) {
      return 'half';
    }
    return 'empty';
  }
}
