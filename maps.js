const mapBRaw = `
  ------------------------
  |  XXXXXXXXXXXXXXXXXX $|
  |  --------------------|
---- |    -----           
|  |1--  --   |           
|     |--| 1  |           
| 11  |  |  1 |           
--  11|   11 --           
 |1  1   |1  |            
 | 11 |  |  1|            
 | 1 1---| 1 |            
 |       |  --            
 ---- 1  | --             
    --- -- |              
     | 1   |            
     |@ |  |            
     -------            
`;

const parseMap = str =>
  str
    .split('\n')
    .flatMap((fragment, y) => {
      return Array.from(fragment).map((char, x) => {
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
                : Number(char)
                ? 'boulder'
                : 'hole',
            text: char,
            x: x + 1,
            y,
          };
        }
      });
    })
    .filter(Boolean);

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
  onFinish: () => (window.location.href = window.location.origin + '/escaperoom/sokobanFinal.html'),
  objects: parseMap(mapBRaw),
  holeFilledCallback: objects => {
    const count = objects.reduce(
      (acc, obj) => (obj.name === 'placeholder' ? acc + 1 : acc),
      0,
    );

    return count < placeholders.length ? [...objects, placeholders[count]] : objects;
  },
};

export const mapA = {
  size: 8,
  cornerWalls: true,
  onFinish: () => (window.location.href = window.location.origin + '/escaperoom/sokobanMid.html'),
  respawn: { x: 3, y: 3 },
  objects: [
    {
      name: 'player',
      text: '@',
      x: 3,
      y: 3,
    },
    {
      text: '1',
      name: 'boulder',
      x: 4,
      y: 3,
    },
    {
      text: '1',
      name: 'boulder',
      x: 3,
      y: 4,
    },
    {
      text: '1',
      name: 'boulder',
      x: 5,
      y: 3,
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
@
 8    
 4  
 497231


 νωγχ  φδϑ  σβμο
    123
 ηπρλ 5εακτ  ζ
   7  4
    3178 8
    5
`;

export const mapC = {
  size: 20,
  cornerWalls: true,
  objects: parseMap(mapCRaw),
  respawn: { x: 1, y: 1 },
  solutions: {
    α: 4,
    β: 8,
    γ: 8,
    δ: 3,
    ζ: 7,
    ϑ: 4,
    ε: 5,
    η: 8,
    π: 2,
    χ: 3,
    φ: 5,
    μ: 7,
    κ: 1,
    ω: 2,
    ο: 9,
    λ: 3,
    ρ: 1,
    ν: 1,
    σ: 4,
    τ: 7,
  },
};
