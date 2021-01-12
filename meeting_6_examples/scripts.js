import { createLamp } from './lamp.js';
import { christmasLights } from './lamps.js';
import { createBlogPost } from './post.js';

const body = document.querySelector('body');

createLamp(body, 'green', 100);
createLamp(body);
createLamp(body, 'rgba(0,255,56, 0.3)', 78);
christmasLights(body, 40);

createBlogPost(
  body,
  'Hello',
  `
    Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Culpa quis id laboriosam 
    inventore delectus dolor dolore eveniet 
    sapiente quam officiis rerum repellat 
    architecto doloribus expedita, sequi 
    neque commodi, facere praesentium?
  `
);

createBlogPostCollapsible(
  body,
  'Hello',
  `
    Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Culpa quis id laboriosam 
    inventore delectus dolor dolore eveniet 
    sapiente quam officiis rerum repellat 
    architecto doloribus expedita, sequi 
    neque commodi, facere praesentium?
  `
);
