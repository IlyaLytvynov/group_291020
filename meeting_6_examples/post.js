export const createBlogPost = (root, title, content) => {
  const aside = document.createElement('aside');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  h2.textContent = title;
  p.textContent = content;
  aside.append(h2);
  aside.append(p);
  root.append(aside);
};
