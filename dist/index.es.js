function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

import { Component, createElement } from 'react';

var css = "@keyframes skeleton_loading {\n  from {\n    background-position: -100%;\n  }\n  to {\n    background-position: 0%;\n  }\n}\n";
__$$styleInject(css);

const ANIMATION_NAME = `skeleton_loading`;
const BACKGROUND_WIDTH_SCALE_FACTOR = 6;
const default_props = {
    width: 100,
    height: 10,
    duration: 1.2,
    direction: "ltr",
    colors: ["#29292d", "#35353a"]
};
class Skeleton extends Component {
    constructor() {
        super(...arguments);
        this.renderRow = () => {
            const config = Object.assign({}, default_props, this.props);
            return createElement("div", { style: makeStyles(config), className: this.props.className });
        };
    }
    render() {
        const { count: length } = this.props;
        return length ? Array.from({ length }, this.renderRow) : this.renderRow();
    }
}
function makeStyles({ width, height, count, duration, colors, style, direction }) {
    return Object.assign({}, style, { width,
        height, backgroundImage: `linear-gradient(to left, ${colors[0]} 0%, ${colors[1]} 20%, ${colors[0]} 40%, ${colors[0]} 100%)`, animation: `${ANIMATION_NAME} ${direction === "ltr" ? "reverse" : ""} infinite  ${duration}s  cubic-bezier(0.445, 0.05, 0.55, 0.95)`, backgroundSize: `${width * BACKGROUND_WIDTH_SCALE_FACTOR}px ${height}px` });
}

export { Skeleton };
