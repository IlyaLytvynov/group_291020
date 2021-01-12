import { toggleColor } from './components/lighter/lighter.js';
import { createSlideShow } from './components/slideShow/slideShow.js';
import {
  createButton,
  createLink,
  BTN_TYPES,
} from './components/button/button.js';
import { list } from './components/list/list.js';

list(document.querySelector('main'), [
  'UKRAINE',
  'USA',
  'CANADA',
  'Greate Britain',
  'France',
  'Italy',
]);

list(document.querySelector('main'), [
  'UAH',
  'USD',
  'CAD',
  'GBP',
  'EUR',
  'EUR',
]);

createSlideShow(document.querySelector('#slideShow2'), 3000);
const btnsRoot = document.querySelector('header');
createButton(btnsRoot, undefined, undefined, () => {
  alert('HELLO WORLD');
});
createButton(btnsRoot, undefined, BTN_TYPES.DANGER, () => {
  console.warn('!!CLICKED!!');
});
createButton(btnsRoot, 'Enable traffic lighter', BTN_TYPES.WARN, () => {
  toggleColor(document.querySelectorAll('.circle'));
});
createButton(btnsRoot, 'Start slide show 1', BTN_TYPES.SUCCESS, () => {
  createSlideShow(document.querySelector('#slideShow1'), 500);
});

createLink(btnsRoot, BTN_TYPES.SUCCESS, undefined, 'https://google.com');
const container = document.querySelector('.hello');
container.insertAdjacentHTML(
  'beforeend',
  `
  <div class="parent">
    <div clarss="child">
      <div class="child">
        <div class="child">
          <div class="h2">HELLO</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            nostrum quia ex ea laboriosam, sunt nesciunt quisquam tempora
            magnam consequatur similique deleniti hic, modi id non cumque
            totam voluptatum eveniet!
          </p>
        </div>
      </div>
    </div>
  </div>
`
);
// const someFn = (onNameEntered) => {
//   const name = prompt('Enter name');
//   onNameEntered(name);
// };

// someFn((name) => {
//   alert(name);
// });

// someFn((name) => {
//   console.log(name);
// });
