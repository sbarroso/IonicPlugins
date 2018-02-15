import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SqlitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sqlite',
  templateUrl: 'sqlite.html',
})
export class SqlitePage {

  posts: string

  constructor(private database: DatabaseProvider) {
  }

  async getAllPosts() {
    this.posts = JSON.stringify(await this.database.getAllPosts())
    console.log('posts ', this.posts)
  }

  async createPost() {
    await this.database.createPostsTable();
    await this.database.createPost({title: 'myTitle', content: 'myContent'});
  }

}
