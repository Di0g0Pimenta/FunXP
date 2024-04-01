import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonGrid } from '@ionic/angular/standalone';
import { PostService } from '../../services/posts.service';
import { Observable } from 'rxjs';

interface Post {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  yoast_head_json: {
    og_image: {
      url: string;
    }[];
  };
  link: string;
}



@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonGrid, IonCol, IonRow, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewsPage implements OnInit {

  currentPage = 1;
  totalPages = 1;
  posts$: Observable<Post[]> | undefined;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.displayPosts();
    this.updateTotalPages();
  }

  displayPosts(): void {
    this.posts$ = this.postService.fetchPosts(this.currentPage);
  }

  updateTotalPages(): void {
    // Implementar lógica para atualizar o número total de páginas
  }

  formatarData(data: string): string {
    // Implementar lógica para formatar a data
    return data; // Por enquanto, apenas retorna a data sem formatar
  }

  async prevPage(): Promise<void> {
    // Implementar lógica para navegar para a página anterior
  }

  async nextPage(): Promise<void> {
    // Implementar lógica para navegar para a próxima página
  }

  openPost(link: string): void {
    window.open(link, '_blank'); // Abrir o link da notícia em uma nova aba
  }
}
