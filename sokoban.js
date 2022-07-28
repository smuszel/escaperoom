const codes = {
  ArrowUp: [0, -1],
  ArrowRight: [1, 0],
  ArrowDown: [0, 1],
  ArrowLeft: [-1, 0],
};

export default map => {
  const size = map.size;
  const findObjectByIx = ix =>
    objects.find(obj => obj.x === ixToCoord(ix).x && obj.y === ixToCoord(ix).y);
  const findObjectByCoord = (x, y) => objects.find(obj => obj.x === x && obj.y === y);
  const ixToCoord = ix => ({ x: ix % size, y: Math.floor(ix / size) });

  const move = (obj, dX, dY) => {
    const nextX = obj.x + dX;
    const nextY = obj.y + dY;
    const next2X = obj.x + dX * 2;
    const next2Y = obj.y + dY * 2;
    const nextObject = findObjectByCoord(nextX, nextY);
    const next2Object = findObjectByCoord(next2X, next2Y);
    let objUpdate = null;
    let nextObjUpdate = null;
    let next2ObjUpdate = null;
    let objectsUpdated = objects;

    if (!nextObject) {
      objUpdate = { x: nextX, y: nextY };
    } else if (nextObject.name === 'boulder' && !next2Object) {
      objUpdate = { x: nextX, y: nextY };
      nextObjUpdate = { x: next2X, y: next2Y };
    } else if (nextObject.name === 'boulder' && next2Object.name === 'hole') {
      objUpdate = { x: nextX, y: nextY };
      nextObjUpdate = { x: -1, y: -1 };
      next2ObjUpdate = { x: -1, y: -1 };

      if (map.solutions && map.solutions[next2Object.text] === Number(nextObject.text)) {
        next2ObjUpdate = {
          x: next2X,
          y: next2Y,
          name: 'wall',
          text: Number(nextObject.text) % 2 ? '.' : '-',
        };
      } else if (map.holeFilledCallback) {
        objectsUpdated = map.holeFilledCallback(objects);
      }
    } else if (nextObject.name === 'hole') {
      objUpdate = { x: map.respawn.x, y: map.respawn.y };
    } else if (nextObject.name === 'end') {
      map.onFinish();
    }

    if (objUpdate || nextObjUpdate || next2ObjUpdate) {
      objectsUpdated = objectsUpdated.map(uo => {
        if (uo === obj && objUpdate) {
          return { ...uo, ...objUpdate };
        } else if (uo === nextObject) {
          return { ...uo, ...nextObjUpdate };
        } else if (uo === next2Object) {
          return { ...uo, ...next2ObjUpdate };
        } else {
          return uo;
        }
      });

      history.push(objects);
      objects = objectsUpdated;
      render();
    }
  };

  const undo = () => {
    const state = history.pop();
    state && (objects = state);
    state && render(state);
  };

  const wallsV = map.cornerWalls
    ? Array(size * 2)
        .fill()
        .map((_, ix) => ({
          name: 'wall',
          text: '|',
          x: Math.floor(ix / size) * (size - 1),
          y: ix % size,
        }))
    : [];

  const wallsH = map.cornerWalls
    ? Array((size - 1) * 2)
        .fill()
        .map((_, ix) => ({
          name: 'wall',
          text: '-',
          y: Math.floor((ix + 2) / size) * (size - 1),
          x: (ix + 1) % size,
        }))
    : [];

  let objects = [...map.objects, ...wallsV, ...wallsH];
  const history = [objects];

  const main = document.createElement('main');
  let currRow = null;
  const tiles = Array(size * size)
    .fill()
    .map((_, ix) => {
      if (ix % size === 0) {
        currRow = document.createElement('div');
        main.appendChild(currRow);
      }
      const tile = document.createElement('span');
      currRow.appendChild(tile);

      return { ...ixToCoord(ix), el: tile };
    });

  const render = () => {
    tiles.forEach((tile, ix) => {
      const obj = findObjectByIx(ix);
      tile.el.innerText = obj && obj.text ? obj.text : '';
      obj && obj.name === 'placeholder' && (tile.el.style.color = 'yellow');
    });
  };

  document.body.appendChild(main);
  render();

  window.addEventListener('keydown', ev => {
    const player = objects.find(obj => obj.name === 'player');
    const direction = codes[ev.key];

    if (direction) {
      move(player, ...direction);
    } else if (ev.key === 'z') {
      undo();
    }
  });
};
