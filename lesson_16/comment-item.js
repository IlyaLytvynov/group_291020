export class CommentItem {
  /**
   * JSDOC
   * @param {HTMLElement} root
   * @param {{title: string, author: string; avatarUrl: string; id: number;text: string}} data
   */
  constructor(root, data, onDelete) {
    this.root = root;
    this.data = data;
    this.onDelete = onDelete;
    this.render();
  }

  render() {
    this.domElement = document.createElement('div');
    this.domElement.classList.add('comment');
    this.domElement.id = this.data.id;
    this.domElement.innerHTML = `
      <h2 class="comment__title">${this.data.title}</h2>
      <p class="comment__text">${this.data.text}</p>
      <div class="comment__author">${this.data.author}</div>
      <img src="${this.data.avatarUrl}" class="comment__avatar"/>
    `;
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      // console.log('REMOVED');
      // this.root.removeChild(this.domElement);
      this.onDelete(this.data.id);
    });
    button.textContent = 'DELETE';
    this.domElement.append(button);
    this.root.append(this.domElement);
  }
}
