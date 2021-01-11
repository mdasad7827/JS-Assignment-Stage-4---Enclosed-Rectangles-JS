//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

// const { Children } = require("react");

// function updateStructure(rec1, rec2) {
//   if (contains(rec1, rec2)) {
//     const relativeDim = relative(rec1, rec2);
//     return { ...rec1, children: [relativeDim] };
//   } else if (contains(rec2, rec1)) {
//     const relativeDim = relative(rec2, rec1);
//     return { ...rec2, children: [relativeDim] };
//   } else {
//     return { ...rec1 };
//   }
// }

// function relative(rec1, rec2) {
//   const rec1n = normalise(rec1);
//   const rec2n = normalise(rec2);

//   const res = {
//     children: rec2.children,
//     // children: [],
//   };

//   if (rec2.top) {
//     res.top = `${rec2n.x1 - rec1n.x1}px`;
//   }
//   if (rec2.left) {
//     res.left = `${rec2n.y1 - rec1n.y1}px`;
//   }
//   if (rec2.height) {
//     res.height = rec2.height;
//   }
//   if (rec2.width) {
//     res.width = rec2.width;
//   }
//   if (rec2.bottom) {
//     res.bottom = `${rec1n.x2 - rec2n.x2}px`;
//   }
//   if (rec2.right) {
//     res.right = `${rec1n.y2 - rec2n.y2}px`;
//   }
//   return res;
// }

// function contains(rec1, rec2) {
//   const rec1n = normalise(rec1);
//   const rec2n = normalise(rec2);

//   if (
//     rec1n.x1 <= rec2n.x1 &&
//     rec1n.y1 <= rec2n.y1 &&
//     rec1n.x2 >= rec2n.x2 &&
//     rec1n.y2 >= rec2n.y2
//   ) {
//     return true;
//   }
//   return false;
// }

// const H = 0;
// const W = 0;
// function normalise(rec) {
//   return {
//     x1: rec.top
//       ? parseInt(rec.top)
//       : H - parseInt(rec.bottom) + parseInt(rec.height),
//     y1: rec.left
//       ? parseInt(rec.left)
//       : W - parseInt(rec.right) + parseInt(rec.width),
//     x2: rec.bottom
//       ? H - parseInt(rec.bottom)
//       : parseInt(rec.top) + parseInt(rec.height),
//     y2: rec.right
//       ? W - parseInt(rec.right)
//       : parseInt(rec.left) + parseInt(rec.width),
//   };
// }

// module.exports = updateStructure;

function updateStructure(rec1, rec2) {
  //write your code
  if (contains(rec1, rec2)) {
    const relativeDim = relative(rec1, rec2);
    return { ...rec1, children: [relativeDim] };
  } else if (contains(rec2, rec1)) {
    const relativeDim = relative(rec2, rec1);
    return { ...rec2, children: [relativeDim] };
  } else {
    return { ...rec1 };
  }
}
//relative dimensions of rec2 w.r.t rec1
function relative(rec1, rec2) {
  const recAn = normalize(rec1);
  const recBn = normalize(rec2);

  const res = {
    children: rec2.children,
  };
  if (rec2.top) {
    res.top = `${recBn.x1 - recAn.x1}px`;
  }
  if (rec2.left) {
    res.left = `${recBn.y1 - recAn.y1}px`;
  }
  if (rec2.height) {
    res.height = rec2.height;
  }
  if (rec2.width) {
    res.width = rec2.width;
  }
  if (rec2.bottom) {
    res.bottom = `${recAn.x2 - recBn.x2}px`;
  }
  if (rec2.right) {
    res.right = `${recAn.y2 - recBn.y2}px`;
  }
  return res;
}

function contains(rec1, rec2) {
  const recAn = normalize(rec1);
  const recBn = normalize(rec2);

  if (
    recAn.x1 <= recBn.x1 &&
    recAn.y1 <= recBn.y1 &&
    recAn.x2 >= recBn.x2 &&
    recAn.y2 >= recBn.y2
  ) {
    return true;
  }
  return false;
}

const T = 0;
const W = 0;

function normalize(rec) {
  return {
    x1: rec.top
      ? parseInt(rec.top)
      : T - (parseInt(rec.bottom) + parseInt(rec.height)),
    y1: rec.left
      ? parseInt(rec.left)
      : W - (parseInt(rec.right) + parseInt(rec.width)),
    x2: rec.bottom
      ? T - parseInt(rec.bottom)
      : parseInt(rec.top) + parseInt(rec.height),
    y2: rec.right
      ? W - parseInt(rec.right)
      : parseInt(rec.left) + parseInt(rec.width),
  };
}

module.exports = updateStructure;
