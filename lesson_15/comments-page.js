import { AddCommentForm } from './add-comment-form.js';
import { CommentsList } from './comments-list.js';

export class CommentsPage {
  constructor(root) {
    this.root = root;
    this.init();
  }

  init() {
    this.render();
    this.fetchData();
  }

  render() {
    this.contentEl = document.createElement('div');
    this.form = new AddCommentForm(this.contentEl, (responseData) => {
      console.log('SUCCCESS RESPONSE', responseData);
      this.list.renderOne(responseData);
    });
    this.root.append(this.contentEl);
  }

  fetchData() {
    fetch('http://localhost:4000/comments')
      .then((res) => res.json())
      .then((comments) => {
        console.log('>>>>>', comments);
        this.comments = comments;
        this.list = new CommentsList(this.contentEl, this.comments);
      });
  }
}
