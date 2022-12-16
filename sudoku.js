const root = document.querySelector('#root');

const borderSize = 3;

const solution =
  '369175248218496753745832196451736982962185374378429561627813594531649827984257613';

const symbolIxs = [
  0, 1, 2, 9, 10, 11, 18, 19, 20, 23, 26, 47, 50, 49, 48, 41, 40, 39, 31, 30, 32, 33, 54,
  57, 60,
];

const hints = [4, 13, 30, 64, 66, 67, 80, 7, 33];

const cellSize = 60;

const cells = [];

const colors = ['#00feff', 'yellow', 'black', 'red', 'blue'];

document.body.style.display = 'flex';
document.body.style.margin = '20px';
root.style.display = 'grid';
root.style.gridTemplateColumns = '1fr 1fr 1fr';
root.style.border = '3px solid black';

Array(9)
  .fill()
  .forEach(() => {
    const block = document.createElement('div');
    block.style.display = 'grid';
    block.style.gridTemplateColumns = '1fr 1fr 1fr';
    block.style.border = borderSize + 'px solid black';

    Array(9)
      .fill()
      .forEach(() => {
        const cell = document.createElement('div');
        cell.setAttribute('ix', cells.length);
        hints.includes(cells.length)
          ? (cell.innerText = solution[cells.length])
          : (cell.contentEditable = true);
        cells.push(cell);

        cell.className = 'cell';
        cell.style.height = cellSize + 'px';
        cell.style.width = cellSize + 'px';
        cell.style.border = '1px solid black';
        cell.style.display = 'flex';
        cell.style.justifyContent = 'center';
        cell.style.alignItems = 'center';
        cell.style.fontSize = (cellSize * 3) / 4 + 'px';
        cell.style.fontFamily = 'monospace';
        cell.style.position = 'relative';

        block.appendChild(cell);
      });
    root.appendChild(block);
  });

const cages = [
  {
    value: 13,
    origin: 64,
    template: [
      [0, 0],
      [0, 1],
      [-1, 1],
    ],
  },
  {
    value: 10,
    origin: 36,
    color: 'black',
    template: [
      [0, 0],
      [0, 1],
    ],
  },
  {
    value: 16,
    origin: 0,
    template: [
      [0, 0],
      [1, 0],
      [1, 1],
    ],
  },
  {
    value: 16,
    origin: 2,
    template: [
      [0, 0],
      [0, 1],
      [1, 0, 1],
    ],
  },
  {
    value: 14,
    origin: 3,
    template: [
      [0, 0],
      [0, 1],
      [0, 2, 0, 1],
      [0, 3, 0, 1],
    ],
  },
  {
    value: 4,
    origin: 7,
    template: [[0, 0]],
  },
  {
    value: 9,
    origin: 8,
    template: [
      [0, 0],
      [0, 1, 0, 1],
    ],
  },
  {
    value: 14,
    origin: 10,
    template: [
      [0, 0],
      [0, 1],
      [-1, 1],
    ],
  },
  {
    value: 15,
    origin: 11,
    template: [
      [0, 0],
      [1, 0, 1.4],
    ],
  },
  {
    value: 9,
    origin: 14,
    template: [
      [0, 0],
      [0, 1],
    ],
  },
  {
    value: 23,
    origin: 15,
    template: [
      [0, 0],
      [1, 0],
      [1, 1, 0, 1],
      [2, 1, 0, 1],
      [3, 1, 1, 1],
    ],
  },
  {
    value: 9,
    origin: 21,
    template: [
      [0, 0],
      [0, 1],
    ],
  },
  {
    value: 9,
    origin: 19,
    template: [
      [0, 0],
      [1, 0],
    ],
  },
  {
    value: 12,
    origin: 22,
    color: 'blue',
    template: [
      [0, 0],
      [0, 1],
    ],
  },
  {
    value: 8,
    color: 'yellow',
    origin: 23,
    template: [
      [0, 0],
      [0, 1],
    ],
  },
  {
    value: 9,
    origin: 33,
    template: [[0, 0]],
  },
  {
    value: 14,
    origin: 28,
    color: 'red',
    template: [
      [0, 0],
      [0, 1],
      [1, 1],
    ],
  },
  {
    value: 16,
    origin: 34,
    template: [
      [0, 0],
      [0, 1, 0, 1],
      [-1, 1, 0, 1],
    ],
  },
  {
    value: 9,
    color: 'blue',
    origin: 35,
    template: [
      [0, 0],
      [0, 1, 0, 1],
    ],
  },
  {
    value: 15,
    origin: 40,
    template: [
      [0, 0],
      [0, 1],
    ],
  },
  {
    value: 9,
    origin: 41,
    color: 'red',
    template: [
      [0, 0],
      [1, 0, 1],
    ],
  },
  {
    value: 8,
    origin: 42,
    template: [
      [0, 0],
      [0, 1, 0, 1],
    ],
  },
  {
    value: 5,
    origin: 44,
    template: [
      [0, 0],
      [0, 1, 0, 1],
    ],
  },
  {
    value: 9,
    origin: 46,
    color: 'black',
    template: [
      [0, 0],
      [0, 1],
    ],
  },
  {
    value: 18,
    origin: 47,
    template: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
  },
  {
    value: 16,
    origin: 51,
    template: [
      [0, 0],
      [0, 1, 0, 1],
      [0, 2, 0, 1],
    ],
  },
  {
    value: 18,
    origin: 52,
    template: [
      [0, 0],
      [0, 1, 0, 1],
      [1, 1, 0, 1],
    ],
  },
  {
    value: 12,
    origin: 76,
    template: [
      [0, 0],
      [1, 0],
    ],
  },
  {
    value: 7,
    origin: 78,
    template: [
      [0, 0],
      [1, 0],
    ],
  },
  {
    value: 3,
    origin: 80,
    template: [[0, 0]],
  },
  {
    value: 14,
    origin: 57,
    color: 'yellow',
    template: [
      [0, 0],
      [0, 1],
      [1, 0],
    ],
  },
  {
    value: 24,
    origin: 59,
    color: 'red',
    template: [
      [0, 0],
      [0, 1],
      [-1, 1],
      [1, 1, 1],
    ],
  },
  {
    value: 18,
    origin: 68,
    color: 'blue',
    template: [
      [0, 0],
      [0, 1],
      [-1, 1],
    ],
  },
];

const cageEls = [];

setTimeout(() => {
  cages.forEach((props, ix) => {
    const color = props.color || colors[ix % colors.length];
    const cont = document.createElement('div');
    const val = document.createElement('div');
    const cell = cells[props.origin];

    cageEls.push(cont);
    cont.style.position = 'absolute';
    cont.style.top = cell.offsetTop + 'px';
    cont.style.left = cell.offsetLeft + 'px';
    cont.style.zIndex = -1;

    props.template.forEach(([left, top, offsetLeft, offsetTop]) => {
      const cg = document.createElement('div');

      cg.style.position = 'absolute';
      cg.style.backgroundColor = color;
      cg.style.top =
        cellSize * top + borderSize * top + borderSize * (offsetTop || 0) + 'px';
      cg.style.left =
        cellSize * left + borderSize * left + borderSize * (offsetLeft || 0) + 'px';
      cg.style.height = cellSize + borderSize + 'px';
      cg.style.width = cellSize + borderSize + 'px';
      cg.style.opacity = 0.2;

      cont.appendChild(cg);
    });

    val.innerText = props.value;
    val.style.color = 'black';
    val.style.position = 'absolute';
    val.style.top = '0px';
    val.style.left = '2px';
    val.opacity = 1;

    cont.appendChild(val);
    document.body.appendChild(cont);
  });
}, 0);

document.addEventListener('keydown', ev => {
  if (ev.target && ev.target.innerText.length > 0 && ev.code !== 'Backspace') {
    ev.preventDefault();
  }
});

document.addEventListener('input', ev => {
  const fail = () => cells.forEach(cell => (cell.style.backgroundColor = 'red'));
  const reveal = () =>
    cells.forEach((cell, ix) => {
      return symbolIxs.includes(ix) && (cell.style.backgroundColor = 'green');
    });

  const solved = cells.map(c => c.innerText).join('') === solution;

  setTimeout(() => {
    if (cells.every(c => c.innerText) && confirm('Confirm this solution')) {
      solved ? reveal() : fail();
      cells.forEach(cell => (cell.contentEditable = false));
      cageEls.forEach(el => el.remove());
    }
  }, 110);
});

window.solve = () => {
  solution.split('').forEach((sym, ix) => (cells[ix].innerText = sym));
};
