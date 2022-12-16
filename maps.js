const mapBRaw = `
  ------------------------
  |  XXXXXXXXXXXXXXXXXX $|
  |  --------------------|
---- |    -----           
|  |0--  --   |           
|     |--| 0  |           
| 00  |  |  0 |           
--  00|   00 --           
 |0  0   |0  |            
 | 00 |  |  0|            
 | 0 0---| 0 |            
 |       |  --            
 ---- 0  | --             
    --- -- |              
     | 0   |            
     |@ |  |            
     -------            
`;

const renderChar = (char, x, y) => {
  if (char === ' ') {
    return null;
  } else {
    return {
      name:
        char === '|' || char === '-'
          ? 'wall'
          : char === '@'
          ? 'player'
          : char === '$'
          ? 'end'
          : Number(char) + 1
          ? 'boulder'
          : char === '#'
          ? 'decoration'
          : 'hole',
      text: char,
      x: x + 1,
      y,
    };
  }
};

const parseMap = (...layers) => {
  const xs = layers.map(la => la.split('\n'));

  return xs[0]
    .flatMap((fragment, y) => {
      return Array.from(fragment).map((char, x) => {
        const layerChar = xs[1] && xs[1][y][x];
        return [
          renderChar(char, x, y),
          layerChar && layerChar !== char && renderChar(layerChar, x, y),
        ];
      });
    })
    .flat()
    .filter(Boolean);
};

const placeholders = [
  { name: 'placeholder', text: '|', x: 20, y: 19 },
  { name: 'placeholder', text: '-', x: 18, y: 19 },
  { name: 'placeholder', text: '|', x: 20, y: 18 },
  { name: 'placeholder', text: '-', x: 18, y: 17 },
  { name: 'placeholder', text: '-', x: 19, y: 19 },
  { name: 'placeholder', text: '|', x: 16, y: 20 },
  { name: 'placeholder', text: '-', x: 16, y: 17 },
  { name: 'placeholder', text: '-', x: 20, y: 17 },
  { name: 'placeholder', text: '-', x: 16, y: 19 },
  { name: 'placeholder', text: '-', x: 19, y: 17 },
  { name: 'placeholder', text: '-', x: 17, y: 17 },
  { name: 'placeholder', text: '-', x: 17, y: 19 },
  { name: 'placeholder', text: '|', x: 16, y: 21 },
];

export const mapB = {
  size: 28,
  cornerWalls: false,
  respawn: { x: 7, y: 16 },
  onFinish: () =>
    (window.location.href = window.location.origin + '/escaperoom/sokobanFinal.html'),
  objects: parseMap(mapBRaw),
  // holeFilledCallback: objects => {
  //   const count = objects.reduce(
  //     (acc, obj) => (obj.name === 'placeholder' ? acc + 1 : acc),
  //     0,
  //   );

  //   return count < placeholders.length ? [...objects, placeholders[count]] : objects;
  // },
};

export const mapA = {
  size: 8,
  cornerWalls: true,
  onFinish: () =>
    (window.location.href = window.location.origin + '/escaperoom/sokobanMid.html'),
  respawn: { x: 3, y: 3 },
  objects: [
    {
      name: 'player',
      text: '@',
      x: 3,
      y: 3,
    },
    {
      text: '0',
      name: 'boulder',
      x: 4,
      y: 3,
    },
    {
      text: '0',
      name: 'boulder',
      x: 3,
      y: 4,
    },
    {
      text: '0',
      name: 'boulder',
      x: 6,
      y: 2,
    },
    {
      text: 'X',
      name: 'hole',
      x: 6,
      y: 5,
    },
    {
      text: 'X',
      name: 'hole',
      x: 6,
      y: 4,
    },
    {
      text: '$',
      name: 'end',
      x: 6,
      y: 6,
    },
    {
      text: '|',
      name: 'wall',
      x: 5,
      y: 5,
    },
    {
      text: '|',
      name: 'wall',
      x: 5,
      y: 6,
    },
    {
      text: '|',
      name: 'wall',
      x: 5,
      y: 4,
    },
  ],
};

// .--.  ..-  --..
// --..  .-..  .

const mapCRaw = `
@    |
 |-- |-0 0 00  
-|  00   0      
 |-    000000    
 | 000 |   0 
 | 0 0000   0  
  0XXXXXX0  0  
  XXXX XX0----
 0XX XX X -  
- X0X X X0  0
 0XXXXXX0X  0
  X XX00XX    
 0XXX0XX0X 
        | 
`;

const mapCLayer = `
@    |
  -- 000 0    
    00   0    
  0    00000       
   000 |
   0 0000      
  #XXXXXX0
  #XXX XX0----
 0#X XX X - 
  # X X ##    
 0#XXXX#0#
  # XX#0X#
 0########
           
`;

export const mapC = {
  size: 16,
  cornerWalls: true,
  objects: parseMap(mapCRaw, mapCLayer),
  respawn: { x: 1, y: 1 },
  solutions: {},
};
