import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonGrid, IonButtons } from '@ionic/angular/standalone';
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
  imports: [IonButtons, IonGrid, IonCol, IonRow, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
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
  }

  formatarData(data: string): string {
    return data;
  }

  async prevPage(): Promise<void> {
  }

  async nextPage(): Promise<void> {
  }

  openPost(link: string): void {
    window.open(link, '_blank');
  }
}
