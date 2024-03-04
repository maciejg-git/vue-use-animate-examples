let translate = (x, unitX, y, unitY) =>
  ` translate(${x}${unitX}, ${y}${unitY}) `;
let translateX = (x, unit) => ` translateX(${x}${unit}) `;
let translateY = (x, unit) => ` translateY(${x}${unit}) `;
let translateZ = (x, unit) => ` translateZ(${x}${unit}) `;
let translate3d = (x, unitX, y, unitY, z, unitZ) =>
  ` translate3d(${x}${unitX}, ${y}${unitY}, ${z}${unitZ}) `;
let rotate = (r, unit) => ` rotate(${r}${unit}) `;
let rotateX = (r, unit) => ` rotateX(${r}${unit}) `;
let rotateY = (r, unit) => ` rotateY(${r}${unit}) `;
let rotateZ = (r, unit) => ` rotateZ(${r}${unit}) `;
let rotate3d = (x, y, z, unit) => ` rotate3d(${x}, ${y}, ${z}, ${unit}) `;
let perspective = (x, unit) => ` perspective(${x}${unit}) `;
let scale = (x, y) => ` scale(${x}, ${y}) `;
let scaleX = (x) => ` scaleX(${x}) `;
let scaleY = (y) => ` scaleY(${y}) `;
let scaleZ = (z) => ` scaleZ(${z}) `;
let scale3d = (x, y, z) => ` scale3d(${x}, ${y}, ${z}) `;
let skew = (x, unitX, y, unitY) => ` skew(${x}${unitX}, ${y}${unitY}) `;
let skewX = (x, unit) => ` skewX(${x}${unit}) `;
let skewY = (y, unit) => ` skewY(${y}${unit}) `;

export {
  translate,
  translateX,
  translateY,
  translateZ,
  translate3d,
  rotate,
  rotateX,
  rotateY,
  rotateZ,
  rotate3d,
  perspective,
  scale,
  scaleX,
  scaleY,
  scaleZ,
  scale3d,
  skew,
  skewX,
  skewY,
};
