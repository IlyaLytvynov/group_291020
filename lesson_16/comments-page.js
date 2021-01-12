import { AddCommentForm } from './add-comment-form.js';
import { CommentsList } from './comments-list.js';
import { Pagination } from './pagination.js';
const apiURL = 'http://localhost:4000';

export class CommentsPage {
  constructor(root) {
    this.root = root;
    this.sortParams = {
      sortBy: 'createdAt',
      order: 'desc',
      limit: 3,
      currentPage: 1,
      totalCount: 0,
    };
    this.init();
  }

  init() {
    this.render();
    this.fetchData();
  }

  render() {
    this.contentEl = document.createElement('div');
    this.contentEl.classList.add('comments-page');
    this.listWrapper = document.createElement('div');
    this.form = new AddCommentForm(
      this.contentEl,
      `${apiURL}/comments`,
      (comment) => {
        this.fetchData();
      }
    );

    this.contentEl.append(this.listWrapper);
    this.root.append(this.contentEl);
  }

  setPage(page) {
    if (typeof page !== 'number') {
      page = parseInt(page);
    }
    this.sortParams.currentPage = page;
    this.fetchData();
  }

  fetchData() {
    const { sortBy, order, currentPage, limit } = this.sortParams;
    fetch(
      `${apiURL}/comments?_sort=${sortBy}&_order=${order}&_limit=${limit}&_page=${currentPage}`
    )
      .then((res) => {
        const totalCount = res.headers.get('X-Total-Count');
        const totalPages = Math.ceil(totalCount / this.sortParams.limit);

        this.pagination = new Pagination(
          this.contentEl,
          totalPages,
          this.sortParams.currentPage,
          (page) => this.setPage(page)
        );
        this.pagination.render();
        console.log();
        return res.json();
      })
      .then((comments) => {
        this.comments = comments;
        this.fixAvatralUrls();
        this.renderList();
      });
  }

  deleteComment(id) {
    console.log('START DELETE', id);
    fetch(`${apiURL}/comments/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (res.status === 200) {
        console.log(this);
        this.fetchData();
      }
      console.log(res);
    });
  }

  renderList() {
    this.list = new CommentsList(this.listWrapper, this.comments, (id) =>
      this.deleteComment(id)
    );
    this.list.render();
  }

  fixAvatralUrls() {
    this.comments.forEach((comment) => {
      this.fixAvatarUrl(comment);
    });
  }

  fixAvatarUrl(comment) {
    comment.avatarUrl = `${apiURL}/${comment.avatarUrl}`;
  }
}
