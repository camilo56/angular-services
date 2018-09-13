import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetPostService } from '../services/get-post.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'camilo-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  merge$: Observable<any>;
  subscribe: Subscription;
  constructor(private getPostService: GetPostService) { }

  ngOnInit() {
     this.getPostService.getString().subscribe(info => console.log(info));
    this.getPostService.getPostsArray().subscribe(info => console.log(info));
    this.getPostService.getPostsArrayTwo().subscribe(info => console.log(info));
    this.getPostService.getPostsPromise().subscribe(info => console.log(info));
    this.getPostService.getPostsInterval().subscribe(info => console.log(info));
    this.getPostService.getPostsThrowError().subscribe(info => console.log("soy un error", info),
                                                        error => console.log(`Soy catch de susbcribe ${error}`));
    this.getPostService.getPostsThrowErrorTwo().subscribe(info => console.log("soy un error", info),
                                                        error => console.log(`Esto nunca se ejecuta`)); 
     this.getPostService.getPostsRetry().subscribe(info => console.log("soy un error", info));
    this.getPostService.combineLatest().subscribe(([ob1, ob2]) => console.log(`${ob1} + ${ob2}`)); 
    this.getPostService.combineLatestTwo().subscribe(([ob1, ob2]) => console.log(`${ob1} + ${ob2}`));
     this.merge$ = this.getPostService.merge();
    this.subscribe = this.merge$.subscribe(info => console.log(info)); 

    this.getPostService.getHttp().subscribe(post => console.log(post))
    this.getPostService.setPost().subscribe(post => console.log(post))
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
}
