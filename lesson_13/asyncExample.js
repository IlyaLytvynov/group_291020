fetch('https://boring-fe.herokuapp.com/shop')
  .then((resp) => {
    console.log('2', resp);
    return resp.json();
  })
  .then((data) => {
    const root = document.querySelector('body');
    for (let product of data.products) {
      const img = document.createElement('img');
      img.src = product.media[0].fullUrl;
      img.alt = product.title;
      root.append(img);
    }
    console.log('MY DATA::', data);
  });
