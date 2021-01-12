/* <div class="comment">

</div> */
const apiURL = 'http://localhost:4000';
export class CommentItem {
  /**
   * JSDOC
   * @param {HTMLElement} root
   * @param {{title: string, author: string; avatarUrl: string; id: number;text: string}} data
   */
  constructor(root, data) {
    this.root = root;
    this.data = data;
    this.render();
  }

  render() {
    this.domElement = document.createElement('div');
    this.domElement.classList.add('comment');
    this.domElement.innerHTML = `
      <h2 class="comment__title">${this.data.title}</h2>
      <p class="comment__text">${this.data.text}</p>
      <div class="comment__author">${this.data.author}</div>
      <img src="${apiURL}/${this.data.avatarUrl}" class="comment__avatar"/>
    `;
    this.root.append(this.domElement);
  }
}
