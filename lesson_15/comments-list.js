import { CommentItem } from './comment-item.js';
const template = `
  <div class="comments-list">
    <div class="comments-list__item">
    
    </div>
  </div>
`;

export class CommentsList {
  constructor(root, data) {
    this.root = root;
    this.data = data;
    this.render();
  }

  render() {
    this.listElement = document.createElement('div');
    this.listElement.classList.add('comments-list');
    for (let comment of this.data) {
      this.renderOne(comment);
    }
    this.root.append(this.listElement);
  }

  renderOne(comment) {
    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('comments-list__item');
    new CommentItem(this.listElement, comment);
  }
}
