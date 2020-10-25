const epslon = 'e';

function check(grammarArray) {

  const isType1 = () => {
    let isType1 = true;
    
    const hasEpslon = grammarArray.find((rule) => {
      return !!rule[1].match(epslon) && !!rule[0].match('S');
    });

    grammarArray.map((rule) => {
      if (hasEpslon && rule[1].match('S')) {
        return isType1 = false;
      }

      if (!(rule[0].length <= rule[1].length)) {
        isType1 = false;
      }
    });

    return isType1;
  }

  const isType2 = () => {
    let isType2 = true;

    grammarArray.map((rule) => {
      if (rule[0].match(/[a-z]/)) {
        isType2 = false;
      }
    });

    return isType2;
  }

  const isType3 = () => {
    let isType3 = true;

    grammarArray.map((rule) => {
      if (!!rule[0].match(/^[A-Z]{1}$/)) {
        if (
          !rule[1].match(/^([a-z][A-Z]){1}$/)
          && !rule[1].match(/^[a-z]{1}$/)
          && !rule[1].match(/^([a-z][A-Z]){1}$/)
        ) {
          isType3 = false;
        }
      }
    });

    return isType3;
  }

  return [1, Number(isType1()), Number(isType2()), Number(isType3())];
}

const values = [
  [
    ["S","aSb"],
    ["S","e"]
  ],
  //0,2
  // EX2
  [
    ["S","aSb"],
    ["S","a"]
  ],
  //0,1,2
  // EX3
  [
    ["S","aS"],
    ["S","bS"],
    ["S","a"]
  ],
  //0,1,2,3
  //EX4
  [
    ["S","Sa"],
    ["S","Sb"],
    ["S","a"]
  ],
  //0,1,2
  //EX5
  [
    ["S","aSBC"],
    ["S", "e"],
    ["CB", "BC"],
    ["aB", "ab"],
    ["bB", "bb"],
    ["bC", "bc"],
    ["cC", "cc"],
  ],
];

const grammar1 = [
  ["S", "X"],
  ["S", "e"],
  ["X", "aXb"],
  ["X", "ab"]
]

const grammar2 = [
  ["S", "aS"],
  ["S", "bS"],
  ["S", "e"]
]

const grammar3 = [
  ["S", "X"],
  ["S", "e"],
  ["X", "aXBC"],
  ["X", "aBC"],
  ["CB", "BC"],
  ["aB", "ab"],
  ["bB", "bb"],
  ["bC", "bc"],
  ["cC", "cc"]
]


// values.map((x) => console.log(check(x)));
console.log(check(grammar3));