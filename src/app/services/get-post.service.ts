import { Injectable } from '@angular/core';

import { Observable, of, from, interval, throwError, combineLatest, concat } from 'rxjs';
import { tap, map, catchError, retry, take, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPostService {

  constructor(private http: HttpClient) { }

  getString(): Observable<String>{
    return of("soy un Observable")
  }

  getPostsArray(): Observable<Number[]>{
    return of([1,2,3,4,5])
  }

  getPostsArrayTwo(): Observable<Number>{
    return from([1,2,3,4,5])
    .pipe(
      map(x => x * 2)
    )
  }
  
  getPostsPromise(): Observable<String>{
    return from(Promise.resolve("Hola desde promesa"))
  }

  getPostsInterval(): Observable<any>{
    return interval(1000)
  }

  getPostsThrowError(): Observable<any>{
    return throwError(new Error('oops!'))
  }

  getPostsThrowErrorTwo(): Observable<any>{
    return throwError(new Error('oops!'))
              .pipe(
                catchError(error => of(error))
              )
   }

  getPostsRetry(): Observable<any>{
    return throwError(new Error('oops!'))
              .pipe(
                retry(3),
                catchError(error => of("Error despues de 3 intentos"))
              )
  }
  
  combineLatest(): Observable<any>{
    return combineLatest([from([1,2,3,4]), interval(3000).pipe(take(6))])
  }
  
  combineLatestTwo(): Observable<any>{
    return combineLatest([interval(2000).pipe(take(3)), interval(3000).pipe(take(6))])
  }

  concat(): Observable<any>{
    return concat(interval(3000).pipe(take(6)), from([1,2,3,4]))
  }

  merge(): Observable<any>{
    return concat(interval(3000).pipe(take(6)), of("camilo"))
  }

  getHttp(): Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  setPost(name = "camilo", apellido = "colmenares"): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Accept', 'application/json, text/plain, */*');
    headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    const body = `name=${name}&apellido=${apellido}&ciudad=Manizales`;
    return this.http.post("https://jsonplaceholder.typicode.com/posts", body, {headers: headers})
            .pipe( catchError(error => of([])) )

  }

}
