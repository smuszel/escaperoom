const c = document.createElement('div');
c.style.display = 'grid';
c.style.gridTemplateColumns = '1fr 1fr';
c.style.width = '200px';
ce = () => document.createElement('div');

const xs = [ce(), ce(), ce(), ce()].map((el, ix) => {
  ix === 0 && (el.style.borderTop = '2px solid black');
  ix === 0 && (el.style.borderLeft = '2px solid black');
  ix === 3 && (el.style.borderRight = '2px solid black');
  ix === 3 && (el.style.borderBottom = '2px solid black');
  el.style.height = '100px';
  el.style.width = '100px';
  c.append(el);
});

document.body.append(c);
