import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  dbObject: SQLiteObject

  constructor(private db: SQLite) {
  }
 
  openDatabase() {
    return this.db.create({
    // return this.db.openDatabase({
      name: 'myDatabase.db',
      location: 'default' // the location field is required
    })
    .then( (dbObject: SQLiteObject) => {
      //storage object to property
      this.dbObject = dbObject; 
    });
  }

  createPostsTable() {
    let sql = "CREATE TABLE IF NOT EXISTS posts(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, image TEXT, date DATETIME DEFAULT CURRENT_TIMESTAMP)";
    return this.dbObject.executeSql(sql, []);
  }

  createPost(postData: any) {
    let sql = 'INSERT INTO posts(title, content) VALUES(?,?)';
    return this.dbObject.executeSql(sql, [postData.title, postData.content]);
  }

  getAllPosts() {
    let sql = 'SELECT * FROM posts';
    return this.dbObject.executeSql(sql, [])
      .then(response => {
        let entries = [];
        for (let index = 0; index < response.rows.length; index++) {
          entries.push(response.rows.item(index));
        }
        return Promise.resolve(entries);
      })
  }

  getOnePost(id: number) {
    let sql = 'SELECT * FROM posts WHERE id = ?'
    return this.dbObject.executeSql(sql, [id])
        .then(response => {
            let entries = [];
            for (let index = 0; index < response.rows.length; index++) {
                entries.push(response.rows.item(index));
            }
            return Promise.resolve(entries);
        })
  }

  updatePost(postData: any) {
    let sql = 'UPDATE posts SET title=?, content=? WHERE id=?';
    return this.dbObject.executeSql(sql, [postData.title, postData.content, postData.id]);
  }

  deletePost(id: number) {
    return this.dbObject.transaction((tx) => {
      let sql = 'DELETE FROM posts WHERE id=?';
      tx.executeSql(sql, [id], function (tx, res) {
        console.log("ID removed: " + res.insertId);
        console.log("Affected rows: " + res.rowsAffected);
      },
        function (tx, error) {
          console.log('Error: ' + error.message);
        })
    })
  }

}
