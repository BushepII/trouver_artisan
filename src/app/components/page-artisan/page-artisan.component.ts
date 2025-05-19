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

  getFillPercentage(index: number): number {
    if (!this.artisan) {
      return 0;
    }
    const full = Math.floor(this.artisan.note);
    if (index < full) return 100;
    if (index > full) return 0;
    return Math.round((this.artisan.note - full) * 100);
  }
}
