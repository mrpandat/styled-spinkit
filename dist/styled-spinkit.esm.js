import React from 'react';
import styled, { css, keyframes } from 'styled-components';

var DEFAULT_SIZE = 40;
var DEFAULT_COLOR = '#333';

var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var roundTo = function (n, precision) { return (Math.round((n * Math.pow(10, precision))) / Math.pow(10, precision)); };
var size = function (width, height) {
    if (height === void 0) { height = width; }
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n"])), width, height);
};
var sizePx = function (n) { return size(n + "px"); };
// eslint-disable-next-line no-shadow
var propSize = function (_a) {
    var size = _a.size;
    return sizePx(size);
};
var propBgColor = function (_a) {
    var color = _a.color;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), color);
};
// eslint-disable-next-line no-shadow
var propMargin = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 0 : _b;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: ", "px auto;\n"], ["\n  margin: ", "px auto;\n"])), size);
};
var animationDelay = function (n) {
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    animation-delay: ", "s;\n  "], ["\n    animation-delay: ", "s;\n  "])), n);
};
var propDelay = function (_a) {
    var delay = _a.delay;
    return animationDelay(delay);
};
var getRange = function (n) {
    return Array.from(new Array(n).keys());
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var __makeTemplateObject$1 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var rotate = keyframes(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject$1(["\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var bounce = keyframes(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject$1(["\n  0%,\n  100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n"], ["\n  0%,\n  100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n"])));
var duration = 2;
var Child = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject$1(["\n  ", ";\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  border-radius: 100%;\n  animation: ", " ", "s infinite ease-in-out;\n  ", ";\n"], ["\n  ", ";\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  border-radius: 100%;\n  animation: ", " ", "s infinite ease-in-out;\n  ",
    ";\n"])), size('60%'), bounce, duration, function (p) {
    return p.second && css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject$1(["\n      top: auto;\n      bottom: 0;\n      ", ";\n    "], ["\n      top: auto;\n      bottom: 0;\n      ", ";\n    "])), animationDelay(-duration / 2));
});
var StyledChangeDots = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject$1(["\n  ", ";\n  ", ";\n  position: relative;\n  text-align: center;\n  animation: ", " ", "s infinite linear;\n\n  > ", " {\n    ", ";\n  }\n"], ["\n  ", ";\n  ", ";\n  position: relative;\n  text-align: center;\n  animation: ", " ", "s infinite linear;\n\n  > ", " {\n    ", ";\n  }\n"])), propSize, propMargin, rotate, duration, Child, propBgColor);
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5;

var ChangeDots = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    return (React.createElement(StyledChangeDots, { className: className, size: size, color: color },
        React.createElement(Child, null),
        React.createElement(Child, { second: true })));
};

var __makeTemplateObject$2 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var opacity = keyframes(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject$2(["\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n"], ["\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n"])));
var Child$1 = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject$2(["\n  ", ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform: rotate(", "deg);\n  &::before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    ", ";\n    border-radius: 100%;\n    animation: ", " 1.2s infinite ease-in-out both -", "s;\n  }\n"], ["\n  ", ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform: rotate(", "deg);\n  &::before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    ", ";\n    border-radius: 100%;\n    animation: ", " 1.2s infinite ease-in-out both -", "s;\n  }\n"])), size('100%'), function (p) { return p.rotate; }, size('15%'), opacity, function (p) { return p.delay; });
var StyledForldingCircle = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject$2(["\n  ", ";\n  ", ";\n  position: relative;\n\n  > ", " {\n    &::before {\n      ", ";\n    }\n  }\n"], ["\n  ", ";\n  ", ";\n  position: relative;\n\n  > ", " {\n    &::before {\n      ", ";\n    }\n  }\n"])), propSize, propMargin, Child$1, propBgColor);
var templateObject_1$2, templateObject_2$2, templateObject_3$2;

var ForldingCircle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    var count = 12;
    var range = 1.2;
    var circles = getRange(count).map(function (v) { return (React.createElement(Child$1, { key: v, rotate: roundTo((360 / count) * v, 1), delay: roundTo(range - (range / count) * v, 2) })); });
    return (React.createElement(StyledForldingCircle, { className: className, size: size, color: color }, circles));
};

var __makeTemplateObject$3 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var bounce$1 = keyframes(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject$3(["\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n"], ["\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n"])));
var Child$2 = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject$3(["\n  border-radius: 100%;\n  display: inline-block;\n  animation: ", " 1.4s ease-in-out ", "s infinite both;\n"], ["\n  border-radius: 100%;\n  display: inline-block;\n  animation: ", " 1.4s ease-in-out ", "s infinite both;\n"])), bounce$1, function (p) { return p.delay; });
var StyledThreeBounce = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject$3(["\n  width: ", "px;\n  ", ";\n  text-align: center;\n  border-radius: 100%;\n  > ", " {\n    ", ";\n    ", ";\n  }\n"], ["\n  width: ", "px;\n  ", ";\n  text-align: center;\n  border-radius: 100%;\n  > ", " {\n    ", ";\n    ", ";\n  }\n"])), function (p) { return p.size; }, propMargin, Child$2, function (p) { return sizePx(p.size / 4); }, propBgColor);
var templateObject_1$3, templateObject_2$3, templateObject_3$3;

var ThreeBounce = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    return (React.createElement(StyledThreeBounce, { className: className, size: size, color: color },
        React.createElement(Child$2, { delay: -0.32 }),
        React.createElement(Child$2, { delay: -0.16 }),
        React.createElement(Child$2, { delay: 0 })));
};

var __makeTemplateObject$4 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var scale = keyframes(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject$4(["\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n"], ["\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n"])));
var Child$3 = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject$4(["\n  ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotate(", "deg);\n\n  &::before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    ", ";\n    border-radius: 100%;\n    animation: ", " 1.2s ease-in-out ", "s infinite both;\n  }\n"], ["\n  ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotate(", "deg);\n\n  &::before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    ", ";\n    border-radius: 100%;\n    animation: ", " 1.2s ease-in-out ", "s infinite both;\n  }\n"])), size('100%'), function (p) { return p.transform; }, size('15%'), scale, function (p) { return p.delay; });
var StyledCircle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject$4(["\n  ", ";\n  ", ";\n  position: relative;\n\n  > ", " {\n    &::before {\n      ", ";\n    }\n  }\n"], ["\n  ", ";\n  ", ";\n  position: relative;\n\n  > ", " {\n    &::before {\n      ", ";\n    }\n  }\n"])), propMargin, propSize, Child$3, propBgColor);
var templateObject_1$4, templateObject_2$4, templateObject_3$4;

var Circle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    var count = 12;
    var speed = 1.2;
    var circles = getRange(count).map(function (k) {
        var transform = roundTo((360 / count) * (k + 1), 1);
        var delay = roundTo(-speed + (speed / count) * k, 1);
        return React.createElement(Child$3, { key: delay, delay: delay, transform: transform });
    });
    return (React.createElement(StyledCircle, { className: className, size: size, color: color }, circles));
};

var __makeTemplateObject$5 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var locate = keyframes(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject$5(["\n  0%,\n  10% {\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  }\n  25%,\n  75% {\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  }\n  90%,\n  100% {\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n"], ["\n  0%,\n  10% {\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  }\n  25%,\n  75% {\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  }\n  90%,\n  100% {\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n"])));
var Child$4 = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject$5(["\n  float: left;\n  ", ";\n  position: relative;\n  transform: scale(1.1) rotateZ(", "deg);\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    ", ";\n    animation: ", " ", "s infinite linear both\n      ", "s;\n    transform-origin: 100% 100%;\n  }\n"], ["\n  float: left;\n  ", ";\n  position: relative;\n  transform: scale(1.1) rotateZ(", "deg);\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    ", ";\n    animation: ", " ", "s infinite linear both\n      ", "s;\n    transform-origin: 100% 100%;\n  }\n"])), size('50%'), function (p) { return p.scale; }, size('100%'), locate, function (p) { return p.duration; }, function (p) { return p.delay; });
var StyledFoldingCube = styled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject$5(["\n  ", ";\n  ", ";\n  position: relative;\n  transform: rotateZ(45deg);\n\n  > ", " {\n    &::before {\n      ", ";\n    }\n  }\n"], ["\n  ", ";\n  ", ";\n  position: relative;\n  transform: rotateZ(45deg);\n\n  > ", " {\n    &::before {\n      ", ";\n    }\n  }\n"])), propSize, propMargin, Child$4, propBgColor);
var templateObject_1$5, templateObject_2$5, templateObject_3$5;

var FoldingCube = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    var duration = 2.4;
    var range = duration / 2;
    var cubeCount = 4;
    var cubes = [0, 1, 3, 2].map(function (v) { return (React.createElement(Child$4, { scale: 90 * v, key: v, delay: roundTo((range / cubeCount) * v, 2), duration: duration })); });
    return (React.createElement(StyledFoldingCube, { className: className, size: size, color: color }, cubes));
};

var __makeTemplateObject$6 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var createAnim = function (cubeDistance) {
    if (cubeDistance === void 0) { cubeDistance = 42; }
    return keyframes(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject$6(["\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: translateX(", "px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    /* Hack to make FF rotate in the right direction */\n    transform: translateX(", "px) translateY(", "px) rotate(-179deg);\n  }\n  50.1% {\n    transform: translateX(", "px) translateY(", "px) rotate(-180deg);\n  }\n  75% {\n    transform: translateX(0) translateY(", "px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: translateX(", "px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    /* Hack to make FF rotate in the right direction */\n    transform: translateX(", "px) translateY(", "px) rotate(-179deg);\n  }\n  50.1% {\n    transform: translateX(", "px) translateY(", "px) rotate(-180deg);\n  }\n  75% {\n    transform: translateX(0) translateY(", "px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n"])), cubeDistance, cubeDistance, cubeDistance, cubeDistance, cubeDistance, cubeDistance);
};
var Child$5 = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject$6(["\n  ", ";\n  ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n"], ["\n  ", ";\n  ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n"])), propSize, propDelay);
var StyledWanderingCubes = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject$6(["\n  margin: ", "px auto;\n  ", ";\n  text-align: center;\n  font-size: 10px;\n  position: relative;\n\n  > ", " {\n    ", ";\n    animation-name: ", ";\n    animation-duration: ", "s;\n  }\n"], ["\n  margin: ", "px auto;\n  ", ";\n  text-align: center;\n  font-size: 10px;\n  position: relative;\n\n  > ", " {\n    ", ";\n    animation-name: ", ";\n    animation-duration: ", "s;\n  }\n"])), function (p) { return roundTo(p.size * 0.8, 1); }, propSize, Child$5, propBgColor, function (p) { return createAnim(roundTo(p.size * 0.8, 1)); }, function (p) { return p.speed; });
var templateObject_1$6, templateObject_2$6, templateObject_3$6;

var WanderingCubes = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    var speed = 1.8;
    var cubeSize = roundTo(size / 4, 2);
    return (React.createElement(StyledWanderingCubes, { speed: speed, className: className, size: size, color: color },
        React.createElement(Child$5, { delay: speed, size: cubeSize }),
        React.createElement(Child$5, { delay: speed / 2, size: cubeSize })));
};

var __makeTemplateObject$7 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var scale$1 = keyframes(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject$7(["\n  0%,\n  70%,\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n\n  35% {\n    transform: scale3d(0, 0, 1);\n  }\n"], ["\n  0%,\n  70%,\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n\n  35% {\n    transform: scale3d(0, 0, 1);\n  }\n"])));
var Child$6 = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject$7(["\n  ", ";\n  float: left;\n  animation: ", " 1.3s infinite ease-in-out ", "s;\n"], ["\n  ", ";\n  float: left;\n  animation: ", " 1.3s infinite ease-in-out ", "s;\n"])), size('33.33%'), scale$1, function (p) { return p.delay; });
var StyledCubeGrid = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject$7(["\n  ", ";\n  ", ";\n  > ", " {\n    ", ";\n  }\n"], ["\n  ", ";\n  ", ";\n  > ", " {\n    ", ";\n  }\n"])), propSize, propMargin, Child$6, propBgColor);
var templateObject_1$7, templateObject_2$7, templateObject_3$7;

var CubeGrid = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    var range = 0.4;
    var cubes = [0.5, 0.75, 1, 0.25, 0.5, 0.75, 0, 0.25, 0.5]
        .map(function (v) { return roundTo(range * v, 2); })
        .map(function (v, k) { return React.createElement(Child$6, { key: k, delay: v }); });
    return (React.createElement(StyledCubeGrid, { className: className, size: size, color: color }, cubes));
};

var __makeTemplateObject$8 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var scaleOut = keyframes(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject$8(["\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n"], ["\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n"])));
var StyledPulse = styled.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject$8(["\n  ", ";\n  ", ";\n  ", ";\n  border-radius: 100%;\n  animation: ", " 1s ease-in-out infinite;\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  border-radius: 100%;\n  animation: ", " 1s ease-in-out infinite;\n"])), propSize, propBgColor, propMargin, scaleOut);
var templateObject_1$8, templateObject_2$8;

var Pulse = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    return React.createElement(StyledPulse, { className: className, size: size, color: color });
};

var __makeTemplateObject$9 = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var anim = keyframes(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject$9(["\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n  }\n"], ["\n  0%,\n  40%,\n  100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n  }\n"])));
var Rect = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject$9(["\n  ", ";\n  margin: 0 3px 0 0;\n  display: inline-block;\n  ", ";\n"], ["\n  ", ";\n  margin: 0 3px 0 0;\n  display: inline-block;\n  ", ";\n"])), size('7px', '100%'), propDelay);
var StyledWave = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject$9(["\n  ", ";\n  ", ";\n  text-align: center;\n  font-size: 10px;\n\n  > ", " {\n    ", ";\n    animation-name: ", ";\n    animation-duration: ", "s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: infinite;\n  }\n"], ["\n  ", ";\n  ", ";\n  text-align: center;\n  font-size: 10px;\n\n  > ", " {\n    ", ";\n    animation-name: ", ";\n    animation-duration: ", "s;\n    animation-timing-function: ease-in-out;\n    animation-iteration-count: infinite;\n  }\n"])), propMargin, function (p) { return size(p.size * 1.25 + "px", p.size + "px"); }, Rect, propBgColor, anim, function (p) { return p.speed; });
var templateObject_1$9, templateObject_2$9, templateObject_3$8;

var speed = 1.2;
var rectCount = 5;
var delayRange = 0.4;
var Wave = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    var rects = getRange(rectCount).map(function (v) { return (React.createElement(Rect, { delay: roundTo(-speed + (delayRange / (rectCount - 1)) * v, 1), key: v })); });
    return (React.createElement(StyledWave, { speed: speed, className: className, size: size, color: color }, rects));
};

var __makeTemplateObject$a = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var debounce = keyframes(templateObject_1$a || (templateObject_1$a = __makeTemplateObject$a(["\n  0%,\n  100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n"], ["\n  0%,\n  100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n"])));
var Child$7 = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject$a(["\n  ", ";\n  border-radius: 50%;\n  position: absolute;\n  opacity: 0.6;\n  top: 0;\n  left: 0;\n  animation: ", " 2s infinite ease-in-out;\n  ", ";\n"], ["\n  ", ";\n  border-radius: 50%;\n  position: absolute;\n  opacity: 0.6;\n  top: 0;\n  left: 0;\n  animation: ", " 2s infinite ease-in-out;\n  ", ";\n"])), size('100%'), debounce, function (p) { return p.isDelay && animationDelay(-1); });
var StyledDoubleBounce = styled.div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject$a(["\n  ", ";\n  position: relative;\n  ", ";\n  > ", " {\n    ", ";\n  }\n"], ["\n  ", ";\n  position: relative;\n  ", ";\n  > ", " {\n    ", ";\n  }\n"])), propSize, propMargin, Child$7, propBgColor);
var templateObject_1$a, templateObject_2$a, templateObject_3$9;

var DoubleBounce = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    return (React.createElement(StyledDoubleBounce, { className: className, size: size, color: color },
        React.createElement(Child$7, null),
        React.createElement(Child$7, { isDelay: true })));
};

var __makeTemplateObject$b = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var spin = keyframes(templateObject_1$b || (templateObject_1$b = __makeTemplateObject$b(["\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n"], ["\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n"])));
var StyledRotaingPlain = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject$b(["\n  ", ";\n  ", ";\n  ", ";\n  animation: ", " ", "s infinite ease-in-out;\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  animation: ", " ", "s infinite ease-in-out;\n"])), propSize, propBgColor, propMargin, spin, function (p) { return p.speed; });
var templateObject_1$b, templateObject_2$b;

var speed$1 = 1.2;
var RotaingPlain = function (_a) {
    var _b = _a.size, size = _b === void 0 ? DEFAULT_SIZE : _b, _c = _a.color, color = _c === void 0 ? DEFAULT_COLOR : _c, className = _a.className;
    return (React.createElement(StyledRotaingPlain, { className: className, size: size, color: color, speed: speed$1 }));
};

export { ChangeDots as ChasingDots, Circle, CubeGrid, DoubleBounce, ForldingCircle as FadingCircle, FoldingCube, Pulse, RotaingPlain as RotaingPlane, ThreeBounce, WanderingCubes, Wave as WaveLoading };
//# sourceMappingURL=styled-spinkit.esm.js.map
