import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-posts',
  templateUrl: './hot-posts.component.html',
  styleUrls: ['./hot-posts.component.scss']
})
export class HotPostsComponent implements OnInit {

  posts = [
    {
      author: 'user1',
      type: 'abstract',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias.'
    },{
      author: 'johndoe123',
      type: 'food',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias.'
    },{
      author: 'mariedoe_asdf',
      type: 'sports',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias.'
    },{
      author: 'asdf-asdf',
      type: 'transport',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias.'
    },{
      author: 'uuser123',
      type: 'nature',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias.'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
