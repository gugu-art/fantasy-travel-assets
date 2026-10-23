var XinghaiMessageHandbook = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/ui/message-handbook.mjs
  var message_handbook_exports = {};
  __export(message_handbook_exports, {
    mountMessageHandbook: () => mountMessageHandbook,
    mountMessagePovHeader: () => mountMessagePovHeader,
    mountRegionArrival: () => mountRegionArrival
  });

  // src/ui/assets/notebook/frame-v1.png
  var frame_v1_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/revision/revision__notebook-frame-v1.png";

  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names3, func) {
    return (names3 = names3.split(",")).forEach(func) || names3;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
    }
    return i < l;
  };
  var _lazyRender = function _lazyRender2() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _isRevertWorthy = function _isRevertWorthy2(animation) {
    return !!(animation._initted || animation._startAt || animation.add);
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || !!(_reverting && time < 0 && _isRevertWorthy(animation)));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p) {
    return p;
  };
  var _setDefaults = function _setDefaults2(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || (obj[p] = defaults2[p]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy2 = {}, p;
    for (p in obj) {
      p in excluding || (copy2[p] = obj[p]);
    }
    return copy2;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {
    }
    return i < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t = timeline2;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position2, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position2) ? position2 : position2 || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position2, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position2, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString(position2) && (isNaN(position2) || position2 in labels)) {
      offset = position2.charAt(0);
      isPercent = position2.substr(-1) === "%";
      i = position2.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position2 = position2.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position2.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position2 in labels || (labels[position2] = clippedDuration);
        return labels[position2];
      }
      offset = parseFloat(position2.charAt(i - 1) + position2.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition2(animation, position2.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position2 == null ? clippedDuration : +position2;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
          }
          wrapAt < l && wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f) {
        return f(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s = "", i, nums, end, isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p2) {
      return (1 - p2) * start + p2 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate2(start[i - 1], start[i]));
        }
        l--;
        func = function func2(p2) {
          p2 *= l;
          var i2 = Math.min(il, ~~p2);
          return interpolators[i2](p2 - i2);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func2(p2) {
          return _renderPropTweens(p2, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!config3) return;
    config3 = !config3.name && config3["default"] || config3;
    if (_windowExists() || config3.headless) {
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s * 100 + 0.5);
      a[2] = ~~(l * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  };
  var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  };
  var _colorExp = (function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  })();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = (function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
      var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i = 0; _i < _listeners2.length; _i++) {
          _listeners2[_i](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id && _self.sleep();
          _req = _raf || function(f) {
            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t, d, f, v) {
          callback(t, d, f, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners2[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners2.indexOf(callback)) && _listeners2.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners2
    };
    return _self;
  })();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p) {
      return 1 - ease(1 - p);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names3, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names3, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p) {
      return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
      return Math.pow(p, power);
    } : function(p) {
      return p;
    }, function(p) {
      return 1 - Math.pow(1 - p, power);
    }, function(p) {
      return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p) {
    return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
  });
  _insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ (function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (_isRevertWorthy(this)) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position2, suppressEvents) {
      return this.totalTime(_parsePosition(this, position2), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
      this._dur || (this._zTime = -_tinyNum);
      return this;
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function(resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  })();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ (function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position2) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position2);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position2) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position2) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position2) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position2) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position2), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position2) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position2);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position2, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position2));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position2, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position2, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position2, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position2, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && tTime && !suppressEvents && !prevIteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position2) {
      var _this2 = this;
      _isNumber(position2) || (position2 = _parsePosition(this, position2, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position2);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position2);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position2) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      child.parent === this && _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position2) {
      this.labels[label] = _parsePosition(this, position2);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position2, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position2));
    };
    _proto2.removePause = function removePause(position2) {
      var child = this._first;
      position2 = _parsePosition(this, position2);
      while (child) {
        if (child._start === position2 && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position2, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position2), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  })(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy2 = {}, p;
    for (p in vars) {
      copy2[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy2;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function() {
            return _callback(tween, "onUpdate");
          },
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;
      while (i--) {
        pt = lookup[i][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property + " not eligible for reset") : 1;
        }
        ptCache.push(pt);
      }
    }
    i = ptCache.length;
    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy2, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy2 = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy2) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy2[aliases[i]] = copy2[p];
        }
      }
    }
    return copy2;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ (function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position2, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position2.duration = vars;
        vars = position2;
        position2 = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy2, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy2 = _copyExcluding(vars, _staggerPropsToSkip);
            copy2.stagger = 0;
            yoyoEase && (copy2.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy2, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy2.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy2.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy2.delay) {
              _this3._delay = delay = copy2.delay;
              _this3._start += delay;
              copy2.delay = 0;
            }
            tl.to(curTarget, copy2, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy2 = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy2, keyframes.easeEach);
            }
            for (p in copy2) {
              a = copy2[p].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position2);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time = dur;
              iteration--;
            } else if (time > dur) {
              time = dur;
            }
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted && iteration === prevIteration) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (!prevTime && tTime && !suppressEvents && !prevIteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
        return this.resetTo(property, value, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
        return this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function(name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  })(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
        pt = pt._next;
      }
      s += data.c;
    }
    data.set(data.t, data.p, s, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ (function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  })();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
      return f();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c) {
        var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c) {
        return c.onMatch(c, function(func) {
          return c.add(null, func);
        });
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ (function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self = this, f = function f2() {
        var prev = _context, prevSelector = self.selector, result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
      self.last = f;
      return name === _isFunction ? f(self, function(func2) {
        return self.add(null, func2);
      }) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e) {
        return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia3) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
          while (i2--) {
            t = _this4.data[i2];
            if (t.data === "isFlip") {
              t.revert();
              t.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t2) {
            return {
              g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
              t: t2
            };
          }).sort(function(a, b) {
            return b.g - a.g || -Infinity;
          }).forEach(function(o) {
            return o.t.revert(revert);
          });
          i2 = _this4.data.length;
          while (i2--) {
            t = _this4.data[i2];
            if (t instanceof Timeline) {
              if (t.data !== "nested") {
                t.scrollTrigger && t.scrollTrigger.revert();
                t.kill();
              }
            } else {
              !(t instanceof Tween) && t.revert && t.revert(revert);
            }
          }
          _this4._r.forEach(function(f) {
            return f(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e) {
          return e.kill && e.kill();
        });
      }
      this.clear();
      if (matchMedia3) {
        var i = _media.length;
        while (i--) {
          _media[i].id === this.id && _media.splice(i, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  })();
  var MatchMedia = /* @__PURE__ */ (function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3, function(f) {
        return context3.add(null, f);
      });
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c) {
        return c.kill(revert, true);
      });
    };
    return MatchMedia2;
  })();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t) {
          return gsap.quickSetter(t, property, unit);
        }), l = setters.length;
        return function(value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p2 = new Plugin();
        _quickTween._pt = 0;
        p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p2.render(1, p2);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function(value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _setDefaults22;
      var tween = gsap.to(target, _setDefaults((_setDefaults22 = {}, _setDefaults22[property] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position2) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position2 = vars) && {}, this), position2);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia2(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c) {
        var cond = c.conditions, found, p;
        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }
        found && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type], i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      headless: 1,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init4(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;
      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;
        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    headless: 1,
    init: function init2(target, value) {
      var i = value.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.13.0";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/gsap/CSSPlugin.js
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style2 = target.style, cache = target._gsap;
    if (property in _transformProps && style2) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
        property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p) {
          return _saveStyle2.call(_this, p, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style2 || isNotCSS) && this.props.push(property, isNotCSS, style2[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style2) {
    if (style2.translate) {
      style2.removeProperty("translate");
      style2.removeProperty("scale");
      style2.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style2 = target.style, cache = target._gsap, i, p;
    for (i = 0; i < props.length; i += 3) {
      if (!props[i + 1]) {
        props[i + 2] ? style2[props[i]] = props[i + 2] : style2.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
      } else if (props[i + 1] === 2) {
        target[props[i]](props[i + 2]);
      } else {
        target[props[i]] = props[i + 2];
      }
    }
    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i = _reverting2();
      if ((!i || !i.isStart) && !style2[_transformProp]) {
        _removeIndependentTransforms(style2);
        if (cache.zOrigin && style2[_transformOriginProp]) {
          style2[_transformOriginProp] += " " + cache.zOrigin + "px";
          cache.zOrigin = 0;
          cache.renderTransform();
        }
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
      return saver.save(p);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns2) {
    var e = _doc2.createElementNS ? _doc2.createElementNS((ns2 || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e && e.style ? e : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) {
    }
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
    var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
    clone.style.display = "block";
    svg.appendChild(clone);
    _docElement.appendChild(svg);
    try {
      bbox = clone.getBBox();
    } catch (e) {
    }
    svg.removeChild(clone);
    _docElement.removeChild(svg);
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds, cloned;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getReparentedCloneBBox(target);
      cloned = 1;
    }
    bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style2 = target.style, first2Chars;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style2.removeProperty) {
        first2Chars = property.substr(0, 2);
        if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style2.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style2.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style2 = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style2[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      if (toPercent && (property === "height" || property === "width")) {
        var v = target.style[property];
        target.style[property] = amount + unit;
        px = target[measureProperty];
        v ? target.style[property] = v : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style2.position = _getComputedProperty(target, "position"));
        parent === target && (style2.position = "static");
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style2.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end.substring(0, 6) === "var(--") {
      end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
    }
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style2 = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style2.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          style2.scale = style2.rotate = style2.translate = "none";
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style2);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style2 = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style2.display;
      style2.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style2.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style2 = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style2[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style2.scale = style2.rotate = style2.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
      style2[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style2 = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style2[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style2[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style2[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style2 = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style2, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style2[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style2.visibility);
              _addNonTweeningPT(this, style2, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (type === "string" && endValue.substring(0, 6) === "var(--") {
              endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
              endNum = parseFloat(endValue);
            }
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style2, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style2[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style2, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style2)) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style2) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style2, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style2)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p in style2 ? inlineProps.push(p, 0, style2[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // src/ui/region-art.mjs
  var REGION_ART = {
    "REG-01": {
      "name": "\u7EF4\u5C14\u767B\u6CB3\u8C37",
      "asset": "region-reg-01",
      "file": "../regions/reg-01-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u6E29\u548C\u6CB3\u8C37\u3001\u6CB3\u5E02\u4E0E\u77F3\u62F1\u6C34\u5ECA"
    },
    "REG-02": {
      "name": "\u585E\u4F26\u8FBE\u4E18\u9675",
      "asset": "region-reg-02",
      "file": "../regions/reg-02-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u82B1\u6D77\u3001\u8461\u8404\u56ED\u4E0E\u7267\u573A\u4E18\u9675"
    },
    "REG-03": {
      "name": "\u963F\u5C14\u7EF4\u514B",
      "asset": "region-reg-03",
      "file": "../regions/reg-03-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u5C42\u53E0\u6865\u8857\u4E0E\u6CB3\u9646\u8F6C\u8FD0\u6E2F"
    },
    "REG-04": {
      "name": "\u5361\u5FB7\u6E29\u6D77\u6E7E",
      "asset": "region-reg-04",
      "file": "../regions/reg-04-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u6D77\u6E7E\u3001\u6E14\u6E2F\u4E0E\u6F6E\u6C50\u5CA9\u5CB8"
    },
    "REG-05": {
      "name": "\u970D\u5C14\u4E39\u5E73\u539F",
      "asset": "region-reg-05",
      "file": "../regions/reg-05-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u65F7\u91CE\u7267\u573A\u4E0E\u51EF\u5C14\u8428\u77F3\u73AF"
    },
    "REG-06": {
      "name": "\u5E03\u96F7\u5361\u9AD8\u5730",
      "asset": "region-reg-06",
      "file": "../regions/reg-06-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u4E91\u6D77\u5CE1\u8C37\u4E0E\u60AC\u53F0\u53E4\u57CE"
    },
    "REG-07": {
      "name": "\u675C\u5C14\u6587\u5C71\u8109",
      "asset": "region-reg-07",
      "file": "../regions/reg-07-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u5C71\u8109\u77F3\u5385\u4E0E\u5730\u4E0B\u6676\u6E56"
    },
    "REG-08": {
      "name": "\u7EF4\u65AF\u5361\u68EE\u6797",
      "asset": "region-reg-08",
      "file": "../regions/reg-08-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u5DE8\u6811\u3001\u6EAA\u8C37\u4E0E\u6797\u95F4\u805A\u843D"
    },
    "REG-09": {
      "name": "\u6D1B\u65AF\u6587\u6E56\u533A",
      "asset": "region-reg-09",
      "file": "../regions/reg-09-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u6E56\u6CCA\u3001\u821F\u5E02\u4E0E\u6C34\u4E0A\u6D6E\u5C9B"
    },
    "REG-10": {
      "name": "\u57C3\u65AF\u51EF\u5C14\u8352\u539F",
      "asset": "region-reg-10",
      "file": "../regions/reg-10-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u783E\u5730\u5CA9\u53F0\u4E0E\u534A\u57CB\u9636\u57CE"
    },
    "REG-11": {
      "name": "\u7D22\u62C9\u6069\u6C99\u6D77",
      "asset": "region-reg-11",
      "file": "../regions/reg-11-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u91D1\u8272\u6C99\u6D77\u3001\u7EFF\u6D32\u4E0E\u73BB\u7483\u5CE1\u8C37"
    },
    "REG-12": {
      "name": "\u8BFA\u5C14\u7EF4\u514B\u51BB\u539F",
      "asset": "region-reg-12",
      "file": "../regions/reg-12-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u51BB\u539F\u3001\u51AC\u5385\u4E0E\u6781\u5149\u51B0\u6E56"
    },
    "REG-13": {
      "name": "\u74E6\u8428\u6069\u706B\u5C71\u533A",
      "asset": "region-reg-13",
      "file": "../regions/reg-13-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u96EA\u5761\u706B\u5C71\u4E0E\u6E29\u6CC9\u6696\u8C37"
    },
    "REG-14": {
      "name": "\u827E\u65AF\u5854\u6069\u5D16\u5CB8",
      "asset": "region-reg-14",
      "file": "../regions/reg-14-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u6D77\u98CE\u5D16\u5CB8\u4E0E\u5012\u60AC\u661F\u6D77"
    }
  };

  // src/ui/regional-item-art.mjs
  var REGIONAL_ITEM_ART = [
    {
      "id": "GOODS-V2-VIR-E01",
      "name": "\u5B88\u6865\u4EBA\u957F\u5251",
      "region": "REG-01",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vir-e01-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIR-E02",
      "name": "\u94F6\u9E6D\u523A\u5251",
      "region": "REG-01",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vir-e02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIR-E03",
      "name": "\u96F7\u6587\u7EB3\u9A91\u58EB\u7532",
      "region": "REG-01",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vir-e03-v1.png",
      "width": 1707,
      "height": 921
    },
    {
      "id": "GOODS-V2-VIR-E04",
      "name": "\u66AE\u6E21",
      "region": "REG-01",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vir-e04-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIR-E05",
      "name": "\u96FE\u4E2D\u70DB\u706B",
      "region": "REG-01",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vir-e05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIR-E06",
      "name": "\u767D\u6865\u5B88\u671B",
      "region": "REG-01",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vir-e06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-E07",
      "name": "\u9E22\u5C3E\u738B\u5EAD",
      "region": "REG-01",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vir-e07-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-E08",
      "name": "\u738B\u8A93\xB7\u96F7\u6587\u7EB3\u4E4B\u950B",
      "region": "REG-01",
      "tier": "\u4F20\u8BF4",
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vir-e08-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-U01",
      "name": "\u5B88\u591C\u4EBA\u7684\u63D0\u706F",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vir-u01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-U02",
      "name": "\u65C5\u4EBA\u4E4B\u684C",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vir-u02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIR-U03",
      "name": "\u6E21\u9E26\u4FE1\u5323",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vir-u03-v1.png",
      "width": 1727,
      "height": 911
    },
    {
      "id": "GOODS-V2-VIR-U04",
      "name": "\u5F52\u5CB8\u7F57\u76D8",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vir-u04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-F01",
      "name": "\u6CB3\u8C37\u5976\u6CB9\u9C7C\u6C64",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vir-f01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-F02",
      "name": "\u6885\u91CC\u5B89\u7117\u8C46",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vir-f02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-F03",
      "name": "\u78E8\u574A\u54B8\u6D3E",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vir-f03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-F04",
      "name": "\u8702\u871C\u70E4\u68A8",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vir-f04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-F05",
      "name": "\u8239\u592B\u9ED1\u9EA6\u8106\u997C",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vir-f05-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-F06",
      "name": "\u6CB3\u7554\u6885\u5B50\u8336",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vir-f06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-M01",
      "name": "\u6CB3\u8C37\u4E9A\u9EBB",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vir-m01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-M02",
      "name": "\u7070\u67F3\u5FC3\u6728",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vir-m02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIR-M03",
      "name": "\u6708\u6C50\u73E0",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vir-m03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIR-M04",
      "name": "\u94F6\u9E6D\u94A2",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vir-m04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-M05",
      "name": "\u9E22\u5C3E\u8F89\u6676",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vir-m05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-M06",
      "name": "\u8A93\u94F6",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vir-m06-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIR-S01",
      "name": "\u767D\u6865\u6668\u5149",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vir-s01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-S02",
      "name": "\u5F52\u822A\u7ED3",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vir-s02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-S03",
      "name": "\u6885\u91CC\u5B89\u7684\u5C0F\u767D\u9E45",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vir-s03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIR-S04",
      "name": "\u6CB3\u8C37\u65C5\u672D",
      "region": "REG-01",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-01/goods-v2-vir-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vir-s04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-E01",
      "name": "\u8D1D\u5C14\u8499\u7279\u730E\u5F13",
      "region": "REG-02",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-ser-e01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-E02",
      "name": "\u8537\u8587\u523A\u5251",
      "region": "REG-02",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-ser-e02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SER-E03",
      "name": "\u5E84\u56ED\u9A91\u88C5",
      "region": "REG-02",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-ser-e03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SER-E04",
      "name": "\u665A\u98CE\u4E4B\u7EB1",
      "region": "REG-02",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-ser-e04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SER-E05",
      "name": "\u5965\u96F7\u65AF\u7684\u5FAE\u5149",
      "region": "REG-02",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-ser-e05-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-SER-E06",
      "name": "\u91D1\u7A57\u4E4B\u5FC3",
      "region": "REG-02",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-ser-e06-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SER-E07",
      "name": "\u66AE\u82B1\u633D\u6B4C",
      "region": "REG-02",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-ser-e07-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-E08",
      "name": "\u7F57\u745F\u6069\u7684\u767D\u8346",
      "region": "REG-02",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-ser-e08-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-U01",
      "name": "\u83F2\u4F26\u7684\u91CE\u9910\u7BEE",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-ser-u01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-U02",
      "name": "\u82B1\u7720\u9999\u818F",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-ser-u02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-U03",
      "name": "\u66AE\u82B1\u7559\u5F71\u518C",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-ser-u03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-SER-U04",
      "name": "\u6625\u5BB4\u9152\u76CF",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-ser-u04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-F01",
      "name": "\u8461\u53F6\u9999\u8349\u996D",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-ser-f01-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-SER-F02",
      "name": "\u7267\u573A\u871C\u916A\u5410\u53F8",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-ser-f02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-F03",
      "name": "\u83F2\u4F26\u8461\u9999\u7096\u8089",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-ser-f03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-F04",
      "name": "\u4E18\u9675\u9999\u8349\u9C9C\u916A",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-ser-f04-v1.png",
      "width": 1731,
      "height": 908
    },
    {
      "id": "GOODS-V2-SER-F05",
      "name": "\u871C\u91D1\u5343\u5C42\u9165",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-ser-f05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-F06",
      "name": "\u8584\u8377\u9752\u8461\u679C\u9732",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-ser-f06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-M01",
      "name": "\u5E84\u56ED\u719F\u76AE",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-ser-m01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-M02",
      "name": "\u91D1\u9732\u871C\u8721",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-ser-m02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-M03",
      "name": "\u66AE\u843C\u82B1\u7C89",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-ser-m03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-M04",
      "name": "\u98CE\u94C3\u4E1D",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-ser-m04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-M05",
      "name": "\u767D\u8346\u5FC3\u6728",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-ser-m05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SER-M06",
      "name": "\u5965\u96F7\u65AF\u6CEA\u6676",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-ser-m06-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SER-S01",
      "name": "\u5965\u96F7\u65AF\u82B1\u7B3A",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-ser-s01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-S02",
      "name": "\u66AE\u82B1\u4E66\u8863",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-ser-s02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-S03",
      "name": "\u83F2\u4F26\u85E4\u676F",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-ser-s03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-SER-S04",
      "name": "\u82B1\u7720\u8721\u70DB",
      "region": "REG-02",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-02/goods-v2-ser-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-ser-s04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-E01",
      "name": "\u81EA\u7531\u6C11\u77ED\u5251",
      "region": "REG-03",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-alv-e01-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ALV-E02",
      "name": "\u591A\u4F26\u51B3\u6597\u5251",
      "region": "REG-03",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-alv-e02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ALV-E03",
      "name": "\u6E21\u9E26\u76AE\u7532",
      "region": "REG-03",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-alv-e03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ALV-E04",
      "name": "\u94F6\u820C",
      "region": "REG-03",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-alv-e04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-E05",
      "name": "\u591C\u83BA\u98DE\u5203",
      "region": "REG-03",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-alv-e05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ALV-E06",
      "name": "\u6D41\u6D6A\u8D24\u8005",
      "region": "REG-03",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-alv-e06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-E07",
      "name": "\u5343\u9762\u5BA2",
      "region": "REG-03",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-alv-e07-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-ALV-E08",
      "name": "\u65E0\u5195\u8005\xB7\u5951\u7EA6\u4E4B\u79E4",
      "region": "REG-03",
      "tier": "\u4F20\u8BF4",
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-alv-e08-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ALV-U01",
      "name": "\u65C5\u5546\u767E\u5B9D\u5323",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-alv-u01-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-U02",
      "name": "\u4FE1\u4F7F\u53CC\u955C",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-alv-u02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-U03",
      "name": "\u70BC\u91D1\u5E08\u7684\u96F6\u94B1\u888B",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-alv-u03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-U04",
      "name": "\u66AE\u5E02\u5E7B\u5F69\u58A8",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-alv-u04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-F01",
      "name": "\u591A\u4F26\u53CC\u9985\u70E4\u997C",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-alv-f01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-F02",
      "name": "\u65C5\u5546\u9999\u6599\u7096\u9505",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-alv-f02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-F03",
      "name": "\u70E4\u6912\u5BBD\u9762",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-alv-f03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ALV-F04",
      "name": "\u7EF4\u7279\u62C9\u4E73\u916A\u5854",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-alv-f04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-F05",
      "name": "\u5357\u5CB8\u6A58\u76AE\u7CD6",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-alv-f05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ALV-F06",
      "name": "\u66AE\u5E02\u53CC\u8272\u679C\u8336",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-alv-f06-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ALV-M01",
      "name": "\u591A\u4F26\u7CBE\u94A2",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-alv-m01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-M02",
      "name": "\u6E21\u9E26\u97A3\u9769",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-alv-m02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-M03",
      "name": "\u56DE\u97F3\u6C34\u6676",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-alv-m03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-M04",
      "name": "\u5E7B\u8776\u9CDE\u7C89",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-alv-m04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-M05",
      "name": "\u7EC7\u5F71\u94F6\u4E1D",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-alv-m05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ALV-M06",
      "name": "\u65E0\u8272\u68F1\u6676",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-alv-m06-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-S01",
      "name": "\u6865\u95F4\u5C0F\u57CE",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-alv-s01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-S02",
      "name": "\u53CC\u6865\u68CB",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-alv-s02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-S03",
      "name": "\u81EA\u7531\u5E02\u624B\u672D\u5939",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-alv-s03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ALV-S04",
      "name": "\u767E\u8272\u73D0\u7405\u6263",
      "region": "REG-03",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-03/goods-v2-alv-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-alv-s04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-E01",
      "name": "\u6C34\u624B\u5F2F\u5200",
      "region": "REG-04",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-cad-e01-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-E02",
      "name": "\u6D77\u71D5",
      "region": "REG-04",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-cad-e02-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-E03",
      "name": "\u8D1D\u8428\u5C14\u62A4\u822A\u7532",
      "region": "REG-04",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-cad-e03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-E04",
      "name": "\u8E0F\u6D6A\u8005",
      "region": "REG-04",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-cad-e04-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-E05",
      "name": "\u96FE\u5E06",
      "region": "REG-04",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-cad-e05-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-E06",
      "name": "\u6C89\u6F6E\u4E4B\u7259",
      "region": "REG-04",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-cad-e06-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-E07",
      "name": "\u98CE\u66B4\u4FE1\u4F7F",
      "region": "REG-04",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-cad-e07-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-E08",
      "name": "\u6DF1\u84DD\u5E87\u62A4",
      "region": "REG-04",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-cad-e08-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-U01",
      "name": "\u6D77\u96FE\u660E\u706F",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-cad-u01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-U02",
      "name": "\u6F6E\u58F0\u6D77\u56FE",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-cad-u02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-U03",
      "name": "\u73CD\u73E0\u606F\u9732",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-cad-u03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-U04",
      "name": "\u6C34\u624B\u5F52\u7EF3",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-cad-u04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-F01",
      "name": "\u8D1D\u8428\u5C14\u767D\u9C7C\u6D53\u6C64",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-cad-f01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-F02",
      "name": "\u6D77\u76D0\u70E4\u94F6\u9C7C",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-cad-f02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-F03",
      "name": "\u6D77\u82D4\u8584\u8106\u997C",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-cad-f03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-F04",
      "name": "\u6F6E\u6C50\u7126\u7CD6\u5976\u51BB",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-cad-f04-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-F05",
      "name": "\u5854\u5C14\u8428\u98CE\u5E72\u9C7C",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-cad-f05-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-F06",
      "name": "\u67E0\u9999\u8584\u8377\u9732",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-cad-f06-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-M01",
      "name": "\u6D77\u6E7E\u8239\u9EBB",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-cad-m01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-M02",
      "name": "\u5854\u5C14\u8428\u73E0\u6BCD",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-cad-m02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-M03",
      "name": "\u6DF1\u6F6E\u73CD\u73E0",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-cad-m03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-M04",
      "name": "\u98CE\u66B4\u7425\u73C0",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-cad-m04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-M05",
      "name": "\u84DD\u810A\u6D77\u517D\u7259",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-cad-m05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-M06",
      "name": "\u6F6E\u6C50\u79D8\u94F6",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-cad-m06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-S01",
      "name": "\u6D77\u6E7E\u4E4B\u543B",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-cad-s01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-S02",
      "name": "\u6F6E\u58F0\u5C0F\u94C3",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-cad-s02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-CAD-S03",
      "name": "\u767D\u5E06\u5F52\u6E2F",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-cad-s03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-CAD-S04",
      "name": "\u6D77\u9E25\u8239\u65D7",
      "region": "REG-04",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-04/goods-v2-cad-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-cad-s04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-E01",
      "name": "\u8349\u539F\u730E\u77DB",
      "region": "REG-05",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-hor-e01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-E02",
      "name": "\u8D64\u9B03\u6218\u65A7",
      "region": "REG-05",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-hor-e02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-HOR-E03",
      "name": "\u4E4C\u5C14\u8FBE\u514B\u94C1\u536B\u7532",
      "region": "REG-05",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-hor-e03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-HOR-E04",
      "name": "\u9010\u98CE\u730E\u624B",
      "region": "REG-05",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-hor-e04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-HOR-E05",
      "name": "\u5927\u5730\u884C\u8005",
      "region": "REG-05",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-hor-e05-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-HOR-E06",
      "name": "\u88C2\u9635\u8005",
      "region": "REG-05",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-hor-e06-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-HOR-E07",
      "name": "\u957F\u98CE\u65CC\u65D7",
      "region": "REG-05",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-hor-e07-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-HOR-E08",
      "name": "\u72EE\u738B\u7684\u88C1\u51B3",
      "region": "REG-05",
      "tier": "\u4F20\u8BF4",
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-hor-e08-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-U01",
      "name": "\u7267\u6B4C\u884C\u56CA",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-hor-u01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-U02",
      "name": "\u72EE\u9B03\u9192\u795E\u8336",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-hor-u02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-U03",
      "name": "\u957F\u8DEF\u53F7\u89D2",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-hor-u03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-U04",
      "name": "\u77F3\u73AF\u5B88\u8425\u7B26",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-hor-u04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-F01",
      "name": "\u4E4C\u5C14\u8FBE\u514B\u4E30\u6536\u9505",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-hor-f01-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-HOR-F02",
      "name": "\u7267\u4EBA\u8C46\u997C",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-hor-f02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-F03",
      "name": "\u91D1\u9EA6\u8089\u916A\u997C",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-hor-f03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-F04",
      "name": "\u871C\u916A\u70E4\u6839\u83DC",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-hor-f04-v1.png",
      "width": 1731,
      "height": 908
    },
    {
      "id": "GOODS-V2-HOR-F05",
      "name": "\u8FDC\u884C\u8005\u8089\u5E72",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-hor-f05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-F06",
      "name": "\u9EA6\u7A57\u679C\u8336",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-hor-f06-v1.png",
      "width": 1726,
      "height": 911
    },
    {
      "id": "GOODS-V2-HOR-M01",
      "name": "\u5E73\u539F\u719F\u725B\u9769",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-hor-m01-v1.png",
      "width": 1727,
      "height": 911
    },
    {
      "id": "GOODS-V2-HOR-M02",
      "name": "\u4E4C\u5C14\u8FBE\u514B\u953B\u94A2",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-hor-m02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-M03",
      "name": "\u98CE\u9B03\u6BDB",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-hor-m03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-M04",
      "name": "\u9E23\u96F7\u89D2",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-hor-m04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-M05",
      "name": "\u77F3\u73AF\u8F89\u7389",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-hor-m05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-HOR-M06",
      "name": "\u72EE\u5FC3\u91D1",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-hor-m06-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-S01",
      "name": "\u957F\u98CE\u80A9\u7AE0",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-hor-s01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-S02",
      "name": "\u7267\u573A\u6295\u73AF",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-hor-s02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-S03",
      "name": "\u91D1\u9EA6\u5C0F\u7F8A",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-hor-s03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-HOR-S04",
      "name": "\u4E4C\u5C14\u8FBE\u514B\u5BB6\u5BB4\u96C6",
      "region": "REG-05",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-05/goods-v2-hor-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-hor-s04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-BRE-E01",
      "name": "\u9AD8\u5730\u62A4\u624B\u5251",
      "region": "REG-06",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-bre-e01-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-BRE-E02",
      "name": "\u5CA9\u9E70\u8F7B\u5F29",
      "region": "REG-06",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-bre-e02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-E03",
      "name": "\u79D1\u5C14\u74E6\u6069\u5B88\u5907\u7532",
      "region": "REG-06",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-bre-e03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-BRE-E04",
      "name": "\u4E91\u96BC\u7FBD\u8863",
      "region": "REG-06",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-bre-e04-v1.png",
      "width": 1733,
      "height": 908
    },
    {
      "id": "GOODS-V2-BRE-E05",
      "name": "\u7FA4\u661F\u4F4E\u8BED",
      "region": "REG-06",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-bre-e05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-E06",
      "name": "\u96F7\u9706\u56DE\u5ECA",
      "region": "REG-06",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-bre-e06-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-BRE-E07",
      "name": "\u82CD\u7A79\u4E4B\u8A93",
      "region": "REG-06",
      "tier": "\u4F20\u8BF4",
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-bre-e07-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-BRE-E08",
      "name": "\u57C3\u5229\u897F\u6602\xB7\u5929\u7A79\u738B\u51A0",
      "region": "REG-06",
      "tier": "\u795E\u5668",
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-bre-e08-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-BRE-U01",
      "name": "\u5BFB\u661F\u4EEA",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-bre-u01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-U02",
      "name": "\u4E91\u7AEF\u4FE1\u7B3A",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-bre-u02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-U03",
      "name": "\u6696\u7089\u94F6\u58F6",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-bre-u03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-U04",
      "name": "\u53E4\u57CE\u56DE\u58F0\u7247",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-bre-u04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-BRE-F01",
      "name": "\u9AD8\u5730\u83CC\u83C7\u70E9\u9EA6",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-bre-f01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-F02",
      "name": "\u79D1\u5C14\u74E6\u6069\u8089\u9985\u85AF\u997C",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-bre-f02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-F03",
      "name": "\u7089\u8FB9\u5976\u916A\u9762\u5305",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-bre-f03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-F04",
      "name": "\u5C71\u8393\u71D5\u9EA6\u9165",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-bre-f04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-F05",
      "name": "\u9AD8\u5730\u9648\u5E74\u4E73\u916A",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-bre-f05-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-BRE-F06",
      "name": "\u4E91\u9636\u5976\u8336",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-bre-f06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-M01",
      "name": "\u9AD8\u5730\u7F8A\u7ED2",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-bre-m01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-M02",
      "name": "\u5CA9\u9E70\u94A2",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-bre-m02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-M03",
      "name": "\u4E91\u7EE2",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-bre-m03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-BRE-M04",
      "name": "\u96F7\u75D5\u6C34\u6676",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-bre-m04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-M05",
      "name": "\u82CD\u7A79\u6D6E\u6676",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-bre-m05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-M06",
      "name": "\u53E4\u4EE3\u5929\u94F6",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-bre-m06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-S01",
      "name": "\u5929\u57CE\u526A\u5F71",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-bre-s01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-S02",
      "name": "\u9AD8\u5730\u683C\u7EB9\u5E26",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-bre-s02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-BRE-S03",
      "name": "\u7FA4\u661F\u4E4B\u9875",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-bre-s03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-BRE-S04",
      "name": "\u98CE\u96BC\u80F8\u9488",
      "region": "REG-06",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-06/goods-v2-bre-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-bre-s04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-DUR-E01",
      "name": "\u5C71\u6C11\u6218\u9524",
      "region": "REG-07",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-dur-e01-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-DUR-E02",
      "name": "\u94C1\u7827\u536B\u58EB",
      "region": "REG-07",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-dur-e02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-DUR-E03",
      "name": "\u77F3\u5385\u91CD\u5F29",
      "region": "REG-07",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-dur-e03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-DUR-E04",
      "name": "\u88C2\u6676",
      "region": "REG-07",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-dur-e04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-E05",
      "name": "\u7089\u8A93\u62A4\u8155",
      "region": "REG-07",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-dur-e05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-E06",
      "name": "\u6DF1\u5CA9\u58C1\u5792",
      "region": "REG-07",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-dur-e06-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-DUR-E07",
      "name": "\u4E5D\u7089\u4E4B\u8A93",
      "region": "REG-07",
      "tier": "\u4F20\u8BF4",
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-dur-e07-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-DUR-E08",
      "name": "\u7EF4\u683C\u5170\u7279\xB7\u7FA4\u5C71\u4E4B\u5FC3",
      "region": "REG-07",
      "tier": "\u795E\u5668",
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-dur-e08-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-DUR-U01",
      "name": "\u77F3\u5385\u660E\u73E0",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-dur-u01-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-U02",
      "name": "\u5320\u5E08\u4E4B\u773C",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-dur-u02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-U03",
      "name": "\u94C1\u7827\u884C\u7BB1",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-dur-u03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-U04",
      "name": "\u56DE\u58F0\u6D4B\u7ED8\u77F3",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-dur-u04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-DUR-F01",
      "name": "\u54C8\u5FB7\u6797\u83CC\u83C7\u7117\u9EA6",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-dur-f01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-F02",
      "name": "\u953B\u7089\u9999\u80A0\u9505",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-dur-f02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-F03",
      "name": "\u77F3\u5385\u76D0\u7ED3\u9762\u5305",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-dur-f03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-F04",
      "name": "\u9ED1\u7CD6\u80E1\u6843\u5377",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-dur-f04-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-F05",
      "name": "\u94C1\u9505\u70E4\u6839\u83DC",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-dur-f05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-F06",
      "name": "\u77F3\u5385\u9EA6\u82BD\u917F",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-dur-f06-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-DUR-M01",
      "name": "\u77F3\u5385\u7CBE\u94C1",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-dur-m01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-M02",
      "name": "\u706B\u987B\u7126\u70AD",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-dur-m02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-M03",
      "name": "\u9E23\u6676",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-dur-m03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-M04",
      "name": "\u6DF1\u5CA9\u79D8\u94F6",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-dur-m04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-M05",
      "name": "\u8D64\u7089\u7CBE\u91D1",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-dur-m05-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-M06",
      "name": "\u539F\u521D\u7089\u6676",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-dur-m06-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-DUR-S01",
      "name": "\u6676\u6E56\u5FAE\u5149",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-dur-s01-v1.png",
      "width": 1727,
      "height": 911
    },
    {
      "id": "GOODS-V2-DUR-S02",
      "name": "\u94C1\u7827\u5C0F\u591C\u66F2",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-dur-s02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-S03",
      "name": "\u5C71\u95E8\u4E4B\u94A5",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-dur-s03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-DUR-S04",
      "name": "\u953B\u5E08\u7684\u5370\u8BB0",
      "region": "REG-07",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-07/goods-v2-dur-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-dur-s04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-E01",
      "name": "\u6797\u5730\u730E\u5F13",
      "region": "REG-08",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vis-e01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-E02",
      "name": "\u68D5\u9E7F\u6E38\u4FA0\u7532",
      "region": "REG-08",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vis-e02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-E03",
      "name": "\u4E4C\u6728\u730E\u5203",
      "region": "REG-08",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vis-e03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIS-E04",
      "name": "\u82D4\u5F71",
      "region": "REG-08",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vis-e04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-E05",
      "name": "\u9E7F\u89D2\u56DE\u58F0",
      "region": "REG-08",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vis-e05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-E06",
      "name": "\u6797\u95F4\u65E0\u58F0",
      "region": "REG-08",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vis-e06-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIS-E07",
      "name": "\u57C3\u5C14\u5FB7\u6797\u7684\u5B88\u671B",
      "region": "REG-08",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vis-e07-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-E08",
      "name": "\u767D\u9E7F\u4E4B\u7EA6",
      "region": "REG-08",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vis-e08-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIS-U01",
      "name": "\u6797\u8DEF\u8424\u706F",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vis-u01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-U02",
      "name": "\u7EFF\u606F\u836F\u818F",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vis-u02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIS-U03",
      "name": "\u82D4\u95F4\u5C0F\u5C4B",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vis-u03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIS-U04",
      "name": "\u6811\u8BED\u7B14\u8BB0",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vis-u04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-F01",
      "name": "\u6797\u95F4\u5976\u6CB9\u83C7\u6C64",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vis-f01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-F02",
      "name": "\u7EFF\u5ECA\u9999\u8349\u7117\u8C46",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vis-f02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-F03",
      "name": "\u677E\u7C7D\u8584\u997C",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vis-f03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-F04",
      "name": "\u8393\u679D\u9165",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vis-f04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-F05",
      "name": "\u6797\u8393\u679C\u5E72",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vis-f05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-F06",
      "name": "\u7EFF\u836B\u8584\u8377\u8336",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vis-f06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-M01",
      "name": "\u6797\u5730\u8D64\u6749",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vis-m01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-M02",
      "name": "\u6E05\u7425\u73C0\u8102",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vis-m02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-M03",
      "name": "\u6708\u53F6\u94F6\u4E1D",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vis-m03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-M04",
      "name": "\u56DE\u58F0\u5FC3\u6728",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vis-m04-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIS-M05",
      "name": "\u767D\u9E7F\u7075\u6676",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vis-m05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIS-M06",
      "name": "\u53E4\u6839\u7425\u73C0",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vis-m06-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-S01",
      "name": "\u4E00\u53F6\u6765\u4FE1",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vis-s01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VIS-S02",
      "name": "\u6797\u95F4\u7425\u73C0",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vis-s02-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIS-S03",
      "name": "\u8611\u83C7\u5C0F\u9547",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vis-s03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VIS-S04",
      "name": "\u5DE8\u6811\u4E4B\u4E0B",
      "region": "REG-08",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-08/goods-v2-vis-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vis-s04-v1.png",
      "width": 1727,
      "height": 911
    },
    {
      "id": "GOODS-V2-LOS-E01",
      "name": "\u6E56\u536B\u77ED\u5251",
      "region": "REG-09",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-los-e01-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-LOS-E02",
      "name": "\u94F6\u9CDF\u523A\u5251",
      "region": "REG-09",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-los-e02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-E03",
      "name": "\u821F\u884C\u8005\u9CDE\u7532",
      "region": "REG-09",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-los-e03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-LOS-E04",
      "name": "\u6D9F\u6F2A",
      "region": "REG-09",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-los-e04-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-LOS-E05",
      "name": "\u6C89\u57CE\u8BBF\u5BA2",
      "region": "REG-09",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-los-e05-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-LOS-E06",
      "name": "\u6708\u4E0B\u6C34\u5EAD",
      "region": "REG-09",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-los-e06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-E07",
      "name": "\u955C\u6E56\u8A93\u7EA6",
      "region": "REG-09",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-los-e07-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-E08",
      "name": "\u4F0A\u745F\u6587\u7684\u7B2C\u4E03\u4E50\u7AE0",
      "region": "REG-09",
      "tier": "\u4F20\u8BF4",
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-los-e08-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-LOS-U01",
      "name": "\u821F\u5BA2\u8336\u58F6",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-los-u01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-U02",
      "name": "\u6D9F\u5149\u7ED8\u7B14",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-los-u02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-U03",
      "name": "\u5F52\u821F\u94C3",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-los-u03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-U04",
      "name": "\u6C89\u57CE\u7AA5\u955C",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-los-u04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-F01",
      "name": "\u6885\u745E\u767B\u5976\u916A\u70E9\u9762",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-los-f01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-F02",
      "name": "\u821F\u5E02\u5C0F\u9985\u997C",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-los-f02-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-F03",
      "name": "\u94F6\u9C7C\u714E\u997C",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-los-f03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-F04",
      "name": "\u6C34\u6817\u5976\u5E03\u4E01",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-los-f04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-F05",
      "name": "\u8239\u5BB6\u54B8\u916A\u997C",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-los-f05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-LOS-F06",
      "name": "\u8584\u8377\u96EA\u68A8\u9732",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-los-f06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-M01",
      "name": "\u6E56\u6E7E\u82A6\u7EA4",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-los-m01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-M02",
      "name": "\u6885\u745E\u767B\u73E0\u6BCD",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-los-m02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-M03",
      "name": "\u6D9F\u5149\u73E0",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-los-m03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-M04",
      "name": "\u955C\u6E56\u6676",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-los-m04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-LOS-M05",
      "name": "\u6C34\u5EAD\u79D8\u94F6",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-los-m05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-M06",
      "name": "\u6C89\u57CE\u6708\u77F3",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-los-m06-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-S01",
      "name": "\u6C34\u57CE\u4E4B\u706F",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-los-s01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-S02",
      "name": "\u638C\u5FC3\u6D6E\u5C9B",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-los-s02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-LOS-S03",
      "name": "\u6E56\u6708\u53D1\u68B3",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-los-s03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-LOS-S04",
      "name": "\u821F\u5C45\u56DB\u5B63",
      "region": "REG-09",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-09/goods-v2-los-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-los-s04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-E01",
      "name": "\u9A7F\u8DEF\u77ED\u5200",
      "region": "REG-10",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-esk-e01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-E02",
      "name": "\u5CA9\u96BC\u957F\u5F13",
      "region": "REG-10",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-esk-e02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ESK-E03",
      "name": "\u7070\u96BC\u65C5\u7532",
      "region": "REG-10",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-esk-e03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ESK-E04",
      "name": "\u65E7\u8DEF\u4E4B\u706F",
      "region": "REG-10",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-esk-e04-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-ESK-E05",
      "name": "\u957F\u9014\u5BA2",
      "region": "REG-10",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-esk-e05-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-E06",
      "name": "\u65AD\u5D16\u56DE\u54CD",
      "region": "REG-10",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-esk-e06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-E07",
      "name": "\u6B8B\u9633\u5B88\u536B",
      "region": "REG-10",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-esk-e07-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-ESK-E08",
      "name": "\u963F\u65AF\u5361\u4F26\u7684\u4F59\u70EC",
      "region": "REG-10",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-esk-e08-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-U01",
      "name": "\u65C5\u4EBA\u7089\u7F50",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-esk-u01-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-U02",
      "name": "\u5BFB\u6CC9\u9488",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-esk-u02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-U03",
      "name": "\u65E7\u8DEF\u7559\u8BB0\u77F3",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-esk-u03-v1.png",
      "width": 1721,
      "height": 914
    },
    {
      "id": "GOODS-V2-ESK-U04",
      "name": "\u6C99\u5C18\u9759\u606F\u7B26",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-esk-u04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-F01",
      "name": "\u9A7F\u9986\u6241\u8C46\u7096\u8089",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-esk-f01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-F02",
      "name": "\u9676\u7089\u9EA6\u997C",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-esk-f02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-F03",
      "name": "\u8352\u8DEF\u9178\u4E73\u70E4\u852C",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-esk-f03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-F04",
      "name": "\u91D1\u829D\u871C\u8106",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-esk-f04-v1.png",
      "width": 1727,
      "height": 911
    },
    {
      "id": "GOODS-V2-ESK-F05",
      "name": "\u65C5\u5546\u54B8\u4E73\u916A",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-esk-f05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-F06",
      "name": "\u65E7\u9053\u9999\u6599\u8336",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-esk-f06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-M01",
      "name": "\u9A7F\u8DEF\u719F\u9769",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-esk-m01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-M02",
      "name": "\u8D6D\u5CA9\u9676\u571F",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-esk-m02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-M03",
      "name": "\u56DE\u54CD\u77F3",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-esk-m03-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-M04",
      "name": "\u7070\u96BC\u94A2",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-esk-m04-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-M05",
      "name": "\u6B8B\u9633\u8D64\u6676",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-esk-m05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-M06",
      "name": "\u9636\u57CE\u7130\u94DC",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-esk-m06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-S01",
      "name": "\u8FDC\u8DEF\u4E4B\u77F3",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-esk-s01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-S02",
      "name": "\u843D\u65E5\u5CA9\u676F",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-esk-s02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-ESK-S03",
      "name": "\u9636\u57CE\u4E4B\u95E8",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-esk-s03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-ESK-S04",
      "name": "\u9A7C\u94C3\u65C5\u4F34",
      "region": "REG-10",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-10/goods-v2-esk-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-esk-s04-v1.png",
      "width": 1727,
      "height": 911
    },
    {
      "id": "GOODS-V2-SOL-E01",
      "name": "\u7EFF\u6D32\u5F2F\u5200",
      "region": "REG-11",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-sol-e01-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-SOL-E02",
      "name": "\u8428\u7EF4\u5170\u9576\u94F6\u5200",
      "region": "REG-11",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-sol-e02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SOL-E03",
      "name": "\u6C99\u96BC\u8F7B\u7532",
      "region": "REG-11",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-sol-e03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-SOL-E04",
      "name": "\u8703\u5F71",
      "region": "REG-11",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-sol-e04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-E05",
      "name": "\u5BD2\u6708",
      "region": "REG-11",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-sol-e05-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-SOL-E06",
      "name": "\u5343\u591C\u4E4B\u5203",
      "region": "REG-11",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-sol-e06-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SOL-E07",
      "name": "\u6CD5\u5C14\u745F\u7684\u9057\u54CD",
      "region": "REG-11",
      "tier": "\u4F20\u8BF4",
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-sol-e07-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SOL-E08",
      "name": "\u963F\u5179\u62C9\u8F9B\xB7\u767D\u663C\u738B\u6743",
      "region": "REG-11",
      "tier": "\u795E\u5668",
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-sol-e08-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SOL-U01",
      "name": "\u7EFF\u6D32\u6C34\u56CA",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-sol-u01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-U02",
      "name": "\u591C\u5BB4\u51C9\u58F6",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-sol-u02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-SOL-U03",
      "name": "\u8703\u697C\u6C99\u76D8",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-sol-u03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-U04",
      "name": "\u6708\u6842\u51C0\u6C34\u73E0",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-sol-u04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-F01",
      "name": "\u8428\u7EF4\u5170\u9999\u6599\u996D",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-sol-f01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-F02",
      "name": "\u6708\u4E0B\u8C46\u6CE5\u997C",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-sol-f02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-F03",
      "name": "\u6C99\u6D77\u70E4\u8089\u4E32",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-sol-f03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-F04",
      "name": "\u73AB\u7470\u67A3\u871C\u7CD5",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-sol-f04-v1.png",
      "width": 1732,
      "height": 908
    },
    {
      "id": "GOODS-V2-SOL-F05",
      "name": "\u5546\u961F\u575A\u679C\u8106",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-sol-f05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-F06",
      "name": "\u7EFF\u6D32\u8584\u8377\u679C\u9732",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-sol-f06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-M01",
      "name": "\u7EFF\u6D32\u7EC6\u68C9",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-sol-m01-v1.png",
      "width": 1726,
      "height": 911
    },
    {
      "id": "GOODS-V2-SOL-M02",
      "name": "\u6708\u767D\u73BB\u7483",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-sol-m02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-M03",
      "name": "\u5E7B\u8703\u7802",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-sol-m03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-M04",
      "name": "\u5BD2\u6708\u77F3",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-sol-m04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-M05",
      "name": "\u5DE8\u9AB8\u9AA8\u7389",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-sol-m05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-M06",
      "name": "\u65E5\u5195\u6676",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-sol-m06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-S01",
      "name": "\u638C\u5FC3\u7684\u5BAB\u7A97",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-sol-s01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-S02",
      "name": "\u5343\u591C\u7EE3\u5DFE",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-sol-s02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-SOL-S03",
      "name": "\u6D41\u6C99\u4E4B\u68A6",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-sol-s03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-SOL-S04",
      "name": "\u6C34\u5EAD\u82B1\u789F",
      "region": "REG-11",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-11/goods-v2-sol-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-sol-s04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-E01",
      "name": "\u5317\u5883\u730E\u65A7",
      "region": "REG-12",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-nor-e01-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-NOR-E02",
      "name": "\u8D6B\u5C14\u65AF\u5854\u5FB7\u94C1\u7532",
      "region": "REG-12",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-nor-e02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-E03",
      "name": "\u96EA\u9E2E\u957F\u5F13",
      "region": "REG-12",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-nor-e03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-NOR-E04",
      "name": "\u7089\u706B\u4E4B\u62E5",
      "region": "REG-12",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-nor-e04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-NOR-E05",
      "name": "\u8E0F\u96EA\u65E0\u75D5",
      "region": "REG-12",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-nor-e05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-NOR-E06",
      "name": "\u51DB\u51AC\u88C1\u51B3",
      "region": "REG-12",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-nor-e06-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-E07",
      "name": "\u6781\u5149\u7EC7\u68A6\u8005",
      "region": "REG-12",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-nor-e07-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-NOR-E08",
      "name": "\u51AC\u5385\u4E0D\u706D\u4E4B\u706B",
      "region": "REG-12",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-nor-e08-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-U01",
      "name": "\u51AC\u5385\u6696\u58F6",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-nor-u01-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-U02",
      "name": "\u7089\u8FB9\u591C\u706F",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-nor-u02-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-U03",
      "name": "\u971C\u8DEF\u6307\u661F\u9488",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-nor-u03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-NOR-U04",
      "name": "\u7EC7\u68A6\u6BEF",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-nor-u04-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-NOR-F01",
      "name": "\u8D6B\u5C14\u65AF\u5854\u5FB7\u70DF\u9C7C\u6C64",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-nor-f01-v1.png",
      "width": 1727,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-F02",
      "name": "\u51AC\u5385\u70ED\u9505",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-nor-f02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-F03",
      "name": "\u96EA\u4E61\u5976\u916A\u85AF\u997C",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-nor-f03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-NOR-F04",
      "name": "\u878D\u96EA\u8393\u679C\u9165",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-nor-f04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-F05",
      "name": "\u5317\u5883\u70DF\u9C7C\u7247",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-nor-f05-v1.png",
      "width": 1727,
      "height": 911
    },
    {
      "id": "GOODS-V2-NOR-F06",
      "name": "\u7089\u8FB9\u871C\u8393\u996E",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-nor-f06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-M01",
      "name": "\u5317\u5883\u539A\u7ED2",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-nor-m01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-M02",
      "name": "\u5BD2\u5730\u97A3\u9769",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-nor-m02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-M03",
      "name": "\u971C\u7EB9\u94A2",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-nor-m03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-M04",
      "name": "\u96EA\u8F89\u77F3",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-nor-m04-v1.png",
      "width": 1731,
      "height": 908
    },
    {
      "id": "GOODS-V2-NOR-M05",
      "name": "\u6781\u5149\u7EB1",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-nor-m05-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-NOR-M06",
      "name": "\u6C38\u51AC\u6676\u6838",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-nor-m06-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-S01",
      "name": "\u6781\u5149\u6307\u95F4",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-nor-s01-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-NOR-S02",
      "name": "\u51AC\u5385\u5C0F\u68CB\u5C40",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-nor-s02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-S03",
      "name": "\u6E56\u51B0\u4E4B\u8BD7",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-nor-s03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-NOR-S04",
      "name": "\u878D\u96EA\u82B1\u7B3A",
      "region": "REG-12",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-12/goods-v2-nor-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-nor-s04-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-E01",
      "name": "\u9ED1\u5CA9\u77ED\u5251",
      "region": "REG-13",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vas-e01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-E02",
      "name": "\u7089\u536B\u6218\u9524",
      "region": "REG-13",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vas-e02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-E03",
      "name": "\u5965\u5C14\u745F\u59C6\u9CDE\u7532",
      "region": "REG-13",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vas-e03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-E04",
      "name": "\u4F59\u70EC\u62A4\u624B",
      "region": "REG-13",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vas-e04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-E05",
      "name": "\u9ED1\u66DC\u4E4B\u5E55",
      "region": "REG-13",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vas-e05-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-E06",
      "name": "\u7194\u661F\u8005",
      "region": "REG-13",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vas-e06-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-E07",
      "name": "\u5361\u5C14\u7EF4\u65AF\u7684\u5FC3\u8DF3",
      "region": "REG-13",
      "tier": "\u4F20\u8BF4",
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vas-e07-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-E08",
      "name": "\u4F0A\u683C\u7EB3\u745E\u65AF\xB7\u521B\u4E16\u4F59\u70EC",
      "region": "REG-13",
      "tier": "\u795E\u5668",
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-vas-e08-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-U01",
      "name": "\u6696\u6EAA\u6D74\u76D0",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vas-u01-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-U02",
      "name": "\u9676\u5320\u8BD5\u706B\u73E0",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vas-u02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-U03",
      "name": "\u4F59\u70EC\u7089\u76D2",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vas-u03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-U04",
      "name": "\u6E29\u5BA4\u6625\u9732",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-vas-u04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-F01",
      "name": "\u6696\u8C37\u7EA2\u9171\u7096\u8C46",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vas-f01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-F02",
      "name": "\u9676\u7089\u7F8A\u8089\u996D",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vas-f02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-F03",
      "name": "\u7A91\u706B\u83CC\u83C7\u4E32",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vas-f03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-F04",
      "name": "\u6E29\u5BA4\u679C\u9171\u5377",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vas-f04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-F05",
      "name": "\u56ED\u5703\u852C\u83DC\u8106",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vas-f05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-F06",
      "name": "\u6696\u6EAA\u82F9\u679C\u996E",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-vas-f06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-M01",
      "name": "\u5965\u5C14\u745F\u59C6\u9ED1\u94C1",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vas-m01-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-M02",
      "name": "\u6696\u8C37\u767D\u9676\u571F",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vas-m02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-M03",
      "name": "\u9ED1\u66DC\u6676",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vas-m03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-M04",
      "name": "\u7130\u7EB9\u94DC",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vas-m04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-M05",
      "name": "\u7194\u661F\u7CBE\u91D1",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vas-m05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-M06",
      "name": "\u5730\u8109\u706B\u6838",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-vas-m06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-S01",
      "name": "\u7A91\u706B\u5C0F\u517D",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vas-s01-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-S02",
      "name": "\u9ED1\u5CA9\u4E4B\u73AF",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vas-s02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-VAS-S03",
      "name": "\u6696\u6EAA\u7682\u9999",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vas-s03-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-VAS-S04",
      "name": "\u9676\u5320\u98CE\u94C3",
      "region": "REG-13",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-13/goods-v2-vas-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-vas-s04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-E01",
      "name": "\u6D77\u5D16\u536B\u5251",
      "region": "REG-14",
      "tier": "\u666E\u901A",
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-e01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-est-e01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-E02",
      "name": "\u94F6\u9E25\u793C\u5251",
      "region": "REG-14",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-e02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-est-e02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-EST-E03",
      "name": "\u516C\u56FD\u9A91\u58EB\u7532",
      "region": "REG-14",
      "tier": "\u7CBE\u826F",
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-e03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-est-e03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-EST-E04",
      "name": "\u6D77\u98CE\u79C1\u8BED",
      "region": "REG-14",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-e04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-est-e04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-E05",
      "name": "\u767D\u5D16\u7FBD\u8863",
      "region": "REG-14",
      "tier": "\u7A00\u6709",
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-e05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-est-e05-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-EST-E06",
      "name": "\u843D\u65E5\u5723\u548F",
      "region": "REG-14",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-e06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-est-e06-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-EST-E07",
      "name": "\u6CD5\u5C14\u6E29\u7684\u6700\u540E\u5B88\u591C",
      "region": "REG-14",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-e07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-est-e07-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-EST-E08",
      "name": "\u8FDC\u5CB8\u661F\u56FE",
      "region": "REG-14",
      "tier": "\u53F2\u8BD7",
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-e08-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/equipment/goods-v2-est-e08-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-U01",
      "name": "\u6D77\u9E25\u4FE1\u5C01",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-u01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-est-u01-v1.png",
      "width": 1725,
      "height": 912
    },
    {
      "id": "GOODS-V2-EST-U02",
      "name": "\u665A\u7977\u516B\u97F3\u76D2",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-u02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-est-u02-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-EST-U03",
      "name": "\u767D\u5E06\u62A4\u7B26",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-u03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-est-u03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-U04",
      "name": "\u65C5\u9014\u85CF\u4E66\u5323",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-u04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/utilities/goods-v2-est-u04-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-F01",
      "name": "\u7EF4\u5C14\u745F\u7267\u573A\u54B8\u6D3E",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-f01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-est-f01-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-F02",
      "name": "\u8D1D\u4F26\u7EB3\u6D77\u9C9C\u9505",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-f02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-est-f02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-F03",
      "name": "\u5976\u6CB9\u97ED\u8471\u5410\u53F8",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-f03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-est-f03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-F04",
      "name": "\u767D\u5E06\u9EC4\u6CB9\u9165",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-f04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-est-f04-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-EST-F05",
      "name": "\u8349\u5761\u871C\u68A8\u812F",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-f05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-est-f05-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-F06",
      "name": "\u7267\u573A\u8393\u916A\u996E",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-f06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/food-drink/goods-v2-est-f06-v1.png",
      "width": 1731,
      "height": 909
    },
    {
      "id": "GOODS-V2-EST-M01",
      "name": "\u827E\u6587\u91CC\u7F8A\u6BDB",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-m01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-est-m01-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-EST-M02",
      "name": "\u516C\u56FD\u94F6\u94A2",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-m02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-est-m02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-M03",
      "name": "\u9E25\u7FBD\u7EE2",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-m03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-est-m03-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-V2-EST-M04",
      "name": "\u66AE\u5149\u77F3",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-m04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-est-m04-v1.png",
      "width": 1727,
      "height": 911
    },
    {
      "id": "GOODS-V2-EST-M05",
      "name": "\u5B88\u591C\u79D8\u94F6",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-m05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-est-m05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-M06",
      "name": "\u661F\u7EB9\u84DD\u6676",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-m06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/materials/goods-v2-est-m06-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-S01",
      "name": "\u6D77\u5D16\u957F\u5377",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-s01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-est-s01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-S02",
      "name": "\u827E\u6587\u91CC\u7684\u5C0F\u7F8A",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-s02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-est-s02-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-S03",
      "name": "\u54C8\u5C14\u7EF4\u65AF\u4E4B\u62F1",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-s03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-est-s03-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-V2-EST-S04",
      "name": "\u8FDC\u5CB8\u672A\u5BC4\u7684\u4FE1",
      "region": "REG-14",
      "tier": null,
      "file": "src/ui/assets/regional-items/REG-14/goods-v2-est-s04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/souvenirs/goods-v2-est-s04-v1.png",
      "width": 1730,
      "height": 909
    },
    {
      "id": "GOODS-ACC-01",
      "name": "\u666E\u901A\u7BAD",
      "region": "ACCESSORIES",
      "tier": null,
      "file": "src/ui/assets/regional-items/ACCESSORIES/goods-acc-01-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/accessories/goods-acc-01-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-ACC-02",
      "name": "\u666E\u901A\u8F7B\u5F29\u77E2",
      "region": "ACCESSORIES",
      "tier": null,
      "file": "src/ui/assets/regional-items/ACCESSORIES/goods-acc-02-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/accessories/goods-acc-02-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-ACC-03",
      "name": "\u666E\u901A\u91CD\u5F29\u77E2",
      "region": "ACCESSORIES",
      "tier": null,
      "file": "src/ui/assets/regional-items/ACCESSORIES/goods-acc-03-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/accessories/goods-acc-03-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-ACC-04",
      "name": "\u5171\u632F\u91CD\u77E2",
      "region": "ACCESSORIES",
      "tier": null,
      "file": "src/ui/assets/regional-items/ACCESSORIES/goods-acc-04-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/accessories/goods-acc-04-v1.png",
      "width": 1728,
      "height": 910
    },
    {
      "id": "GOODS-ACC-05",
      "name": "\u66AE\u82B1\u7559\u5F71\u518C\u8865\u9875",
      "region": "ACCESSORIES",
      "tier": null,
      "file": "src/ui/assets/regional-items/ACCESSORIES/goods-acc-05-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/accessories/goods-acc-05-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-ACC-06",
      "name": "\u6D9F\u5149\u7ED8\u7B14\u8865\u58A8",
      "region": "ACCESSORIES",
      "tier": null,
      "file": "src/ui/assets/regional-items/ACCESSORIES/goods-acc-06-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/accessories/goods-acc-06-v1.png",
      "width": 1729,
      "height": 910
    },
    {
      "id": "GOODS-ACC-07",
      "name": "\u6811\u8BED\u7B14\u8BB0\u538B\u9875",
      "region": "ACCESSORIES",
      "tier": null,
      "file": "src/ui/assets/regional-items/ACCESSORIES/goods-acc-07-v1.png",
      "src": "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/regional-items/accessories/goods-acc-07-v1.png",
      "width": 1729,
      "height": 910
    }
  ];
  var byId = new Map(REGIONAL_ITEM_ART.map((x) => [x.id, x]));
  var byName = new Map(REGIONAL_ITEM_ART.map((x) => [x.name, x]));
  function resolveRegionalItemArt(name, id) {
    return byId.get(id) ?? byName.get(String(name ?? "").trim()) ?? null;
  }

  // src/ui/generic-item-art-data.json
  var generic_item_art_data_default = [
    {
      id: "longsword",
      label: "\u957F\u5251",
      group: "weapons",
      file: "weapons/generic-longsword.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-longsword.png"
    },
    {
      id: "greatsword",
      label: "\u5DE8\u5251",
      group: "weapons",
      file: "weapons/generic-greatsword.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-greatsword.png"
    },
    {
      id: "rapier",
      label: "\u7EC6\u5251",
      group: "weapons",
      file: "weapons/generic-rapier.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-rapier.png"
    },
    {
      id: "shortsword",
      label: "\u77ED\u5251",
      group: "weapons",
      file: "weapons/generic-shortsword.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-shortsword.png"
    },
    {
      id: "dagger",
      label: "\u5315\u9996",
      group: "weapons",
      file: "weapons/generic-dagger.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-dagger.png"
    },
    {
      id: "scimitar",
      label: "\u5F2F\u5200",
      group: "weapons",
      file: "weapons/generic-scimitar.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-scimitar.png"
    },
    {
      id: "battleaxe",
      label: "\u6218\u65A7",
      group: "weapons",
      file: "weapons/generic-battleaxe.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-battleaxe.png"
    },
    {
      id: "warhammer",
      label: "\u6218\u9524",
      group: "weapons",
      file: "weapons/generic-warhammer.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-warhammer.png"
    },
    {
      id: "spear",
      label: "\u957F\u67AA\u957F\u77DB",
      group: "weapons",
      file: "weapons/generic-spear.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-spear.png"
    },
    {
      id: "bow",
      label: "\u5F13",
      group: "weapons",
      file: "weapons/generic-bow.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-bow.png"
    },
    {
      id: "crossbow",
      label: "\u5F29",
      group: "weapons",
      file: "weapons/generic-crossbow.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-crossbow.png"
    },
    {
      id: "staff",
      label: "\u6CD5\u6756",
      group: "weapons",
      file: "weapons/generic-staff.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-staff.png"
    },
    {
      id: "wand-scepter",
      label: "\u77ED\u6756\u6743\u6756",
      group: "weapons",
      file: "weapons/generic-wand-scepter.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-wand-scepter.png"
    },
    {
      id: "spellbook",
      label: "\u6CD5\u4E66",
      group: "weapons",
      file: "weapons/generic-spellbook.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-spellbook.png"
    },
    {
      id: "orb",
      label: "\u9B54\u6CD5\u5B9D\u73E0",
      group: "weapons",
      file: "weapons/generic-orb.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-orb.png"
    },
    {
      id: "shield",
      label: "\u76FE\u724C",
      group: "weapons",
      file: "weapons/generic-shield.png",
      width: 1730,
      height: 909,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/weapons/generic-shield.png"
    },
    {
      id: "cloak",
      label: "\u62AB\u98CE",
      group: "clothing",
      file: "clothing/generic-cloak.png",
      width: 1727,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-cloak.png"
    },
    {
      id: "robe",
      label: "\u6CD5\u888D",
      group: "clothing",
      file: "clothing/generic-robe.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-robe.png"
    },
    {
      id: "casual-outfit",
      label: "\u4FBF\u88C5",
      group: "clothing",
      file: "clothing/generic-casual-outfit.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-casual-outfit.png"
    },
    {
      id: "dress",
      label: "\u88D9\u88C5",
      group: "clothing",
      file: "clothing/generic-dress.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-dress.png"
    },
    {
      id: "leather-armor",
      label: "\u76AE\u7532",
      group: "clothing",
      file: "clothing/generic-leather-armor.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-leather-armor.png"
    },
    {
      id: "chainmail",
      label: "\u9501\u7532",
      group: "clothing",
      file: "clothing/generic-chainmail.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-chainmail.png"
    },
    {
      id: "plate-armor",
      label: "\u677F\u7532",
      group: "clothing",
      file: "clothing/generic-plate-armor.png",
      width: 1727,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-plate-armor.png"
    },
    {
      id: "hat",
      label: "\u5E3D\u5B50",
      group: "clothing",
      file: "clothing/generic-hat.png",
      width: 1727,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-hat.png"
    },
    {
      id: "helmet",
      label: "\u5934\u76D4",
      group: "clothing",
      file: "clothing/generic-helmet.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-helmet.png"
    },
    {
      id: "gloves",
      label: "\u624B\u5957\u62A4\u8155",
      group: "clothing",
      file: "clothing/generic-gloves.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-gloves.png"
    },
    {
      id: "boots",
      label: "\u9774\u978B",
      group: "clothing",
      file: "clothing/generic-boots.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-boots.png"
    },
    {
      id: "belt",
      label: "\u8170\u5E26",
      group: "clothing",
      file: "clothing/generic-belt.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/clothing/generic-belt.png"
    },
    {
      id: "ring",
      label: "\u6212\u6307",
      group: "jewelry",
      file: "jewelry/generic-ring.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/jewelry/generic-ring.png"
    },
    {
      id: "necklace",
      label: "\u9879\u94FE\u62A4\u7B26",
      group: "jewelry",
      file: "jewelry/generic-necklace.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/jewelry/generic-necklace.png"
    },
    {
      id: "earrings",
      label: "\u8033\u9970",
      group: "jewelry",
      file: "jewelry/generic-earrings.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/jewelry/generic-earrings.png"
    },
    {
      id: "brooch",
      label: "\u80F8\u9488",
      group: "jewelry",
      file: "jewelry/generic-brooch.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/jewelry/generic-brooch.png"
    },
    {
      id: "diadem",
      label: "\u51A0\u5195",
      group: "jewelry",
      file: "jewelry/generic-diadem.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/jewelry/generic-diadem.png"
    },
    {
      id: "bread",
      label: "\u9762\u5305",
      group: "food-drink",
      file: "food-drink/generic-bread.png",
      width: 1726,
      height: 911,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-bread.png"
    },
    {
      id: "savory-pie",
      label: "\u54B8\u6D3E\u70E4\u997C",
      group: "food-drink",
      file: "food-drink/generic-savory-pie.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-savory-pie.png"
    },
    {
      id: "pastries-sweets",
      label: "\u7CD5\u70B9\u7CD6\u679C",
      group: "food-drink",
      file: "food-drink/generic-pastries-sweets.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-pastries-sweets.png"
    },
    {
      id: "soup",
      label: "\u6C64",
      group: "food-drink",
      file: "food-drink/generic-soup.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-soup.png"
    },
    {
      id: "stew",
      label: "\u7096\u83DC",
      group: "food-drink",
      file: "food-drink/generic-stew.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-stew.png"
    },
    {
      id: "meat",
      label: "\u8089\u98DF",
      group: "food-drink",
      file: "food-drink/generic-meat.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-meat.png"
    },
    {
      id: "fish",
      label: "\u9C7C\u9C9C",
      group: "food-drink",
      file: "food-drink/generic-fish.png",
      width: 1727,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-fish.png"
    },
    {
      id: "rice-noodles",
      label: "\u7C73\u9762\u6599\u7406",
      group: "food-drink",
      file: "food-drink/generic-rice-noodles.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-rice-noodles.png"
    },
    {
      id: "cheese-dairy",
      label: "\u5976\u916A\u4E73\u54C1",
      group: "food-drink",
      file: "food-drink/generic-cheese-dairy.png",
      width: 1730,
      height: 909,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-cheese-dairy.png"
    },
    {
      id: "produce",
      label: "\u679C\u852C",
      group: "food-drink",
      file: "food-drink/generic-produce.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-produce.png"
    },
    {
      id: "rations",
      label: "\u5E72\u7CAE",
      group: "food-drink",
      file: "food-drink/generic-rations.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-rations.png"
    },
    {
      id: "water",
      label: "\u6E05\u6C34",
      group: "food-drink",
      file: "food-drink/generic-water.png",
      width: 1726,
      height: 911,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-water.png"
    },
    {
      id: "tea-fruit-drink",
      label: "\u8336\u4E0E\u679C\u996E",
      group: "food-drink",
      file: "food-drink/generic-tea-fruit-drink.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-tea-fruit-drink.png"
    },
    {
      id: "wine",
      label: "\u9152",
      group: "food-drink",
      file: "food-drink/generic-wine.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/food-drink/generic-wine.png"
    },
    {
      id: "herbs",
      label: "\u8349\u836F\u82B1\u6750",
      group: "materials",
      file: "materials/generic-herbs.png",
      width: 1726,
      height: 911,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-herbs.png"
    },
    {
      id: "mushrooms",
      label: "\u83CC\u83C7",
      group: "materials",
      file: "materials/generic-mushrooms.png",
      width: 1731,
      height: 909,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-mushrooms.png"
    },
    {
      id: "timber",
      label: "\u6728\u6750",
      group: "materials",
      file: "materials/generic-timber.png",
      width: 1726,
      height: 911,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-timber.png"
    },
    {
      id: "ore",
      label: "\u77FF\u77F3",
      group: "materials",
      file: "materials/generic-ore.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-ore.png"
    },
    {
      id: "metal-ingots",
      label: "\u91D1\u5C5E\u952D",
      group: "materials",
      file: "materials/generic-metal-ingots.png",
      width: 1730,
      height: 909,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-metal-ingots.png"
    },
    {
      id: "gems-pearls",
      label: "\u5B9D\u77F3\u73CD\u73E0",
      group: "materials",
      file: "materials/generic-gems-pearls.png",
      width: 1726,
      height: 911,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-gems-pearls.png"
    },
    {
      id: "magic-crystal",
      label: "\u9B54\u6CD5\u6C34\u6676",
      group: "materials",
      file: "materials/generic-magic-crystal.png",
      width: 1727,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-magic-crystal.png"
    },
    {
      id: "leather",
      label: "\u76AE\u9769",
      group: "materials",
      file: "materials/generic-leather.png",
      width: 1726,
      height: 911,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-leather.png"
    },
    {
      id: "fur",
      label: "\u6BDB\u76AE",
      group: "materials",
      file: "materials/generic-fur.png",
      width: 1731,
      height: 908,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-fur.png"
    },
    {
      id: "feathers",
      label: "\u7FBD\u6BDB",
      group: "materials",
      file: "materials/generic-feathers.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-feathers.png"
    },
    {
      id: "fabric-thread",
      label: "\u5E03\u6599\u4E1D\u7EBF",
      group: "materials",
      file: "materials/generic-fabric-thread.png",
      width: 1727,
      height: 911,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-fabric-thread.png"
    },
    {
      id: "bone-fang-scale-horn",
      label: "\u9AA8\u7259\u9CDE\u89D2",
      group: "materials",
      file: "materials/generic-bone-fang-scale-horn.png",
      width: 1730,
      height: 909,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-bone-fang-scale-horn.png"
    },
    {
      id: "resin-wax",
      label: "\u6811\u8102\u8702\u8721",
      group: "materials",
      file: "materials/generic-resin-wax.png",
      width: 1726,
      height: 911,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-resin-wax.png"
    },
    {
      id: "alchemy-ingredients",
      label: "\u70BC\u91D1\u539F\u6599",
      group: "materials",
      file: "materials/generic-alchemy-ingredients.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/materials/generic-alchemy-ingredients.png"
    },
    {
      id: "potion",
      label: "\u836F\u5242",
      group: "travel-magic",
      file: "travel-magic/generic-potion.png",
      width: 1727,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-potion.png"
    },
    {
      id: "medical-supplies",
      label: "\u533B\u7597\u7528\u54C1",
      group: "travel-magic",
      file: "travel-magic/generic-medical-supplies.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-medical-supplies.png"
    },
    {
      id: "scroll",
      label: "\u5377\u8F74",
      group: "travel-magic",
      file: "travel-magic/generic-scroll.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-scroll.png"
    },
    {
      id: "book",
      label: "\u4E66\u7C4D",
      group: "travel-magic",
      file: "travel-magic/generic-book.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-book.png"
    },
    {
      id: "stationery",
      label: "\u6587\u5177",
      group: "travel-magic",
      file: "travel-magic/generic-stationery.png",
      width: 1727,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-stationery.png"
    },
    {
      id: "map-compass",
      label: "\u5730\u56FE\u7F57\u76D8",
      group: "travel-magic",
      file: "travel-magic/generic-map-compass.png",
      width: 1727,
      height: 911,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-map-compass.png"
    },
    {
      id: "lantern",
      label: "\u63D0\u706F",
      group: "travel-magic",
      file: "travel-magic/generic-lantern.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-lantern.png"
    },
    {
      id: "rope",
      label: "\u7EF3\u7D22",
      group: "travel-magic",
      file: "travel-magic/generic-rope.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-rope.png"
    },
    {
      id: "camping-kit",
      label: "\u9732\u8425\u7528\u54C1",
      group: "travel-magic",
      file: "travel-magic/generic-camping-kit.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-camping-kit.png"
    },
    {
      id: "hand-tools",
      label: "\u624B\u5DE5\u5177",
      group: "travel-magic",
      file: "travel-magic/generic-hand-tools.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-hand-tools.png"
    },
    {
      id: "bags-containers",
      label: "\u5305\u4E0E\u5BB9\u5668",
      group: "travel-magic",
      file: "travel-magic/generic-bags-containers.png",
      width: 1727,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-bags-containers.png"
    },
    {
      id: "runestone",
      label: "\u7B26\u77F3",
      group: "travel-magic",
      file: "travel-magic/generic-runestone.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/travel-magic/generic-runestone.png"
    },
    {
      id: "bookmark-cards",
      label: "\u4E66\u7B7E\u5361\u7247",
      group: "souvenirs",
      file: "souvenirs/generic-bookmark-cards.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/souvenirs/generic-bookmark-cards.png"
    },
    {
      id: "doll",
      label: "\u73A9\u5076",
      group: "souvenirs",
      file: "souvenirs/generic-doll.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/souvenirs/generic-doll.png"
    },
    {
      id: "carved-figurine",
      label: "\u96D5\u523B\u6446\u4EF6",
      group: "souvenirs",
      file: "souvenirs/generic-carved-figurine.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/souvenirs/generic-carved-figurine.png"
    },
    {
      id: "badge-coins",
      label: "\u5FBD\u7AE0\u7EAA\u5FF5\u5E01",
      group: "souvenirs",
      file: "souvenirs/generic-badge-coins.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/souvenirs/generic-badge-coins.png"
    },
    {
      id: "music-box",
      label: "\u94C3\u94DB\u97F3\u4E50\u76D2",
      group: "souvenirs",
      file: "souvenirs/generic-music-box.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/souvenirs/generic-music-box.png"
    },
    {
      id: "cups-dishes",
      label: "\u676F\u76BF",
      group: "souvenirs",
      file: "souvenirs/generic-cups-dishes.png",
      width: 1728,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/souvenirs/generic-cups-dishes.png"
    },
    {
      id: "sachet-candle",
      label: "\u9999\u56CA\u8721\u70DB",
      group: "souvenirs",
      file: "souvenirs/generic-sachet-candle.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/souvenirs/generic-sachet-candle.png"
    },
    {
      id: "tapestry",
      label: "\u65D7\u5E1C\u6302\u6BEF",
      group: "souvenirs",
      file: "souvenirs/generic-tapestry.png",
      width: 1729,
      height: 910,
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/098b1479e3e82e6a80320056169ce8f2518f9e46/handbook/images/generic-items/souvenirs/generic-tapestry.png"
    }
  ];

  // src/ui/generic-item-art.mjs
  var byId2 = new Map(generic_item_art_data_default.map((item) => [item.id, item]));
  var byLabel = new Map(generic_item_art_data_default.map((item) => [item.label, item]));
  var types = [
    ["greatsword", /巨剑|重剑|双手剑/],
    ["rapier", /细剑|刺剑|迅捷剑/],
    ["shortsword", /短剑/],
    ["dagger", /匕首|短刀/],
    ["scimitar", /弯刀|马刀/],
    ["longsword", /长剑|直剑|骑士剑|剑/],
    ["battleaxe", /战斧|巨斧|手斧|斧/],
    ["warhammer", /战锤|重锤|巨锤/],
    ["spear", /长枪|长矛|战矛|投矛|骑枪/],
    ["crossbow", /弩/],
    ["bow", /弓/],
    ["wand-scepter", /短杖|权杖|魔棒/],
    ["staff", /法杖|长杖|手杖|魔杖/],
    ["spellbook", /法书|魔导书|魔法书|魔典|法典/],
    ["orb", /魔法宝珠|宝珠|法球|水晶球/],
    ["shield", /盾/],
    ["cloak", /披风|斗篷|披肩/],
    ["robe", /法袍|祭袍/],
    ["dress", /裙/],
    ["leather-armor", /皮甲|皮革护具|皮护甲/],
    ["chainmail", /锁甲|锁子甲|链甲|链衫/],
    ["plate-armor", /板甲|胸甲|重甲|铠甲|盔甲|护甲/],
    ["helmet", /头盔|战盔|兜鍪/],
    ["hat", /帽/],
    ["gloves", /手套|护腕|护臂|护手/],
    ["boots", /靴|鞋/],
    ["belt", /腰带|束带/],
    ["casual-outfit", /便装|常服|衬衫|上衣|外衣|外套|长裤|短裤|衣服/],
    ["ring", /戒指|指环|印戒/],
    ["necklace", /项链|护符|吊坠|项坠/],
    ["earrings", /耳饰|耳环|耳坠|耳钉/],
    ["brooch", /胸针/],
    ["diadem", /冠冕|王冠|头冠|额冠/],
    ["potion", /药剂|药水|灵药/],
    ["medical-supplies", /医疗用品|绷带|纱布|药膏|医药包/],
    ["scroll", /卷轴/],
    ["bookmark-cards", /书签|卡片|明信片|贺卡/],
    ["book", /书籍|抄本|笔记本|日记本|典籍|手册|图鉴|诗集|绘本/],
    ["stationery", /文具|羽毛笔|钢笔|墨水|信纸|稿纸|绘笔|画笔/],
    ["map-compass", /地图|罗盘|指南针/],
    ["lantern", /提灯|油灯|风灯|灯笼/],
    ["rope", /绳索|绳子|麻绳|缆绳/],
    ["camping-kit", /露营|帐篷|睡袋|野营|炊具/],
    ["hand-tools", /手工具|工具|铁锤|木锤|锻锤|凿子|锯子|剪刀|钳子|铲子|镐/],
    ["bags-containers", /行囊|背包|腰包|布袋|皮袋|钱袋|背篓|容器|木箱|铁箱|收纳盒|水壶|空瓶|空罐/],
    ["runestone", /符石|符文石|符印石/],
    ["doll", /玩偶|布偶|布娃娃|人偶/],
    ["carved-figurine", /雕刻|雕像|雕塑|摆件|木雕|石雕/],
    ["badge-coins", /徽章|纪念币|徽记/],
    ["music-box", /铃铛|音乐盒|八音盒|风铃|铜铃|银铃/],
    ["cups-dishes", /杯皿|杯|餐盘|碟|餐碗|瓷碗/],
    ["sachet-candle", /香囊|香袋|蜡烛|香烛/],
    ["tapestry", /旗帜|旗子|挂毯|壁毯/],
    ["savory-pie", /咸派|肉派|馅饼|烤饼/],
    ["pastries-sweets", /糕点|糖果|蛋糕|甜点|饼干|曲奇|布丁|巧克力|甜派/],
    ["bread", /面包/],
    ["soup", /汤|浓汤/],
    ["stew", /炖菜|炖肉|炖豆|焖肉|焖菜/],
    ["rice-noodles", /米面料理|米饭|炒饭|烩饭|面条|意面|通心粉|面食|粥/],
    ["cheese-dairy", /奶酪|乳品|牛奶|羊奶|酸奶|乳酪|奶油/],
    ["tea-fruit-drink", /果饮|果汁|花茶|红茶|绿茶|奶茶|茶/],
    ["wine", /酒/],
    ["water", /清水|饮用水|泉水|净水|水袋|皮囊/],
    ["rations", /干粮|口粮|压缩饼|行军粮/],
    ["fish", /鱼鲜|鱼肉|烤鱼|熏鱼|咸鱼|鱼干|海鲜|虾|蟹|贝肉/],
    ["meat", /肉食|肉干|烤肉|熏肉|香肠|火腿|牛排|羊排|鸡腿|肉/],
    ["produce", /果蔬|蔬菜|水果|苹果|梨|葡萄|橙子|柠檬|桃|莓|萝卜|土豆|番茄|南瓜|生菜/],
    ["herbs", /草药|花材|药草|花束|花草|干花|花瓣/],
    ["mushrooms", /菌菇|蘑菇|松露|菌/],
    ["timber", /木材|原木|木料|木板|心木/],
    ["ore", /矿石|原矿|矿砂/],
    ["metal-ingots", /金属锭|铁锭|钢锭|铜锭|银锭|金锭|秘银锭/],
    ["magic-crystal", /魔法水晶|魔晶|辉晶|灵晶|魔力结晶/],
    ["gems-pearls", /宝石|珍珠|玛瑙|翡翠|琥珀|水晶/],
    ["fur", /毛皮|皮毛|兽皮/],
    ["leather", /皮革|鞣皮/],
    ["feathers", /羽毛|翎羽|羽翎/],
    ["fabric-thread", /布料|丝线|丝绸|亚麻|棉布|绒布|毛线|纱线/],
    ["bone-fang-scale-horn", /骨牙鳞角|兽骨|骨片|骨粉|獠牙|尖牙|鳞片|龙鳞|鹿角|兽角/],
    ["resin-wax", /树脂|蜂蜡|松脂/],
    ["alchemy-ingredients", /炼金原料|炼金粉|硫磺|硝石|盐晶|药粉/]
  ];
  function resolveGenericItemArt(name, item = {}) {
    for (const value of [item.\u7C7B\u578B, item.\u79CD\u7C7B, name]) {
      if (!value) continue;
      const exact = byId2.get(value) ?? byLabel.get(value);
      if (exact) return exact;
      const match = types.find(([, pattern]) => pattern.test(value));
      if (match) return byId2.get(match[0]);
    }
    return null;
  }

  // src/ui/item-art.mjs
  var ITEM_ART = {
    astreya: { file: "astreya-crown-of-stars-v2.png", src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/items/astreya-crown-of-stars-v2.png", width: 1672, height: 941, match: /^阿斯特蕾雅(?:\s*[·・•：:]\s*群星之冕)?$|^群星之冕$/ },
    bread: { file: "bread-v2.png", width: 1729, height: 910, match: /^(?:面包|普通面包|新鲜面包)$/ },
    ration: { file: "ration-v2.png", width: 1728, height: 910, match: /^旅行口粮$/ },
    water: { file: "water-v2.png", width: 1727, height: 911, match: /^清水皮囊$/ },
    potion: { file: "potion-v2.png", width: 1727, height: 911, match: /^治疗药剂$/ },
    camp: { file: "camp-v2.png", width: 1727, height: 911, match: /^露营用具$/ },
    herb: { file: "herb-v2.png", width: 1727, height: 911, match: /^花草素材$/ },
    bookmark: { file: "bookmark-v2.png", width: 1727, height: 911, match: /^压花书签$/ },
    staff: { file: "staff-v2.png", width: 1731, height: 909, match: /^旅人短杖$/ },
    cloak: { file: "cloak-v2.png", width: 1726, height: 911, match: /^轻便披风$/ },
    sword: { file: "sword-v2.png", width: 1731, height: 909, match: /^银纹短剑$/ },
    armor: { file: "armor-v2.png", width: 1728, height: 910, match: /^皮革护具$/ }
  };
  var itemArtKey = (name) => Object.keys(ITEM_ART).find((key) => ITEM_ART[key].match.test(name)) ?? null;
  var itemImageURL = (value) => value?.trim() || null;
  function resolveItemArt(name, id, catalogues = [], assets = {}, item = {}) {
    const key = itemArtKey(name);
    for (const catalogue of catalogues) {
      if (!catalogue || typeof catalogue !== "object" || Array.isArray(catalogue)) continue;
      for (const lookup of [id, name]) if (lookup && Object.hasOwn(catalogue, lookup)) {
        const src = itemImageURL(catalogue[lookup]);
        if (src) return { key: "custom", src };
      }
    }
    for (const lookup of [id, name]) {
      const src = itemImageURL(assets["item:" + lookup]);
      if (src) return { key: "custom", src };
    }
    const regional = resolveRegionalItemArt(name, id);
    if (regional) return { key: regional.id, src: regional.src };
    if (key) return { key, src: assets["original-item-" + key] ?? ITEM_ART[key].src ?? "assets/items/" + ITEM_ART[key].file };
    const generic = resolveGenericItemArt(name, item);
    return generic ? { key: "generic-" + generic.id, src: generic.src } : null;
  }

  // src/ui/place-art.json
  var place_art_default = {
    "LOC-VIR-001": {
      file: "loc-vir-001-v1.png",
      region: "REG-01",
      name: "\u8FBE\u4F26\u798F\u5FB7",
      width: 1902,
      height: 827
    },
    "LOC-SER-001": {
      file: "loc-ser-001-v1.png",
      region: "REG-02",
      name: "\u8D1D\u5C14\u8499\u7279",
      width: 1902,
      height: 827
    },
    "LOC-ALV-001": {
      file: "loc-alv-001-v1.png",
      region: "REG-03",
      name: "\u963F\u5C14\u7EF4\u514B\u81EA\u7531\u5E02",
      width: 1902,
      height: 827
    },
    "LOC-CAD-001": {
      file: "loc-cad-001-v2.png",
      region: "REG-04",
      name: "\u8D1D\u8428\u5C14\u6E2F",
      width: 1902,
      height: 827
    },
    "LOC-HOR-001": {
      file: "loc-hor-001-v1.png",
      region: "REG-05",
      name: "\u4E4C\u5C14\u8FBE\u514B",
      width: 1902,
      height: 827
    },
    "LOC-BRE-001": {
      file: "loc-bre-001-v1.png",
      region: "REG-06",
      name: "\u79D1\u5C14\u74E6\u6069",
      width: 1902,
      height: 827
    },
    "LOC-DUR-001": {
      file: "loc-dur-001-v1.png",
      region: "REG-07",
      name: "\u6258\u5C14\u6587",
      width: 1900,
      height: 828
    },
    "LOC-VIS-001": {
      file: "loc-vis-001-v1.png",
      region: "REG-08",
      name: "\u5E03\u4F26\u7EF4\u5C14",
      width: 1774,
      height: 887
    },
    "LOC-LOS-001": {
      file: "loc-los-001-v1.png",
      region: "REG-09",
      name: "\u6885\u745E\u767B",
      width: 1774,
      height: 887
    },
    "LOC-ESK-001": {
      file: "loc-esk-001-v1.png",
      region: "REG-10",
      name: "\u5FB7\u5170\u745F",
      width: 1774,
      height: 887
    },
    "LOC-SOL-001": {
      file: "loc-sol-001-v1.png",
      region: "REG-11",
      name: "\u8428\u7EF4\u5170",
      width: 1774,
      height: 887
    },
    "LOC-NOR-001": {
      file: "loc-nor-001-v1.png",
      region: "REG-12",
      name: "\u8D6B\u5C14\u65AF\u5854\u5FB7",
      width: 1774,
      height: 887
    },
    "LOC-VAS-001": {
      file: "loc-vas-001-v1.png",
      region: "REG-13",
      name: "\u5965\u5C14\u745F\u59C6",
      width: 1774,
      height: 887
    },
    "LOC-EST-001": {
      file: "loc-est-001-v1.png",
      region: "REG-14",
      name: "\u54C8\u5C14\u7EF4\u65AF",
      width: 1774,
      height: 887
    }
  };

  // src/ui/skill-art.mjs
  var SKILL_CATEGORIES = ["\u751F\u6D3B", "\u98DE\u884C", "\u653B\u51FB", "\u9632\u5FA1", "\u6CBB\u7597"];
  function skillImageURL(value) {
    const image = itemImageURL(value);
    if (!image) return null;
    if (image.startsWith("https://")) {
      const url = new URL(image), parts = url.pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/(.+)$/);
      if (url.hostname === "github.com" && parts) return "https://raw.githubusercontent.com/" + parts[1] + "/" + parts[2] + "/" + parts[3];
    }
    return image;
  }
  function skillEntry(catalogue, character, id, name) {
    if (!catalogue || typeof catalogue !== "object" || Array.isArray(catalogue)) return void 0;
    const local = catalogue[character];
    if (local && typeof local === "object" && !Array.isArray(local)) {
      for (const key of [id, name]) if (key && Object.hasOwn(local, key)) return local[key];
    }
    for (const key of [character + ":" + id, id, name]) if (key && Object.hasOwn(catalogue, key)) return catalogue[key];
  }
  function skillDetails(character, id, record, catalogues = []) {
    for (const catalogue of catalogues) {
      const entry = skillEntry(catalogue, character, id, record?.\u540D\u79F0);
      if (entry && typeof entry === "object" && !Array.isArray(entry)) return entry;
    }
    return {};
  }
  function skillCategory(details) {
    return typeof details.category === "string" && details.category.trim() ? details.category.trim() : "\u672A\u5206\u7C7B";
  }
  function skillImage(character, id, record, catalogues = [], details = {}) {
    for (const catalogue of catalogues) {
      const src = skillImageURL(skillEntry(catalogue, character, id, record?.\u540D\u79F0));
      if (src) return src;
    }
    return skillImageURL(details.image);
  }
  function learningStages(details) {
    if (!details.stages?.length) return null;
    const stages = details.stages.map((s) => s.trim()), active = stages.indexOf(details.activeStage);
    return { stages, active };
  }

  // src/ui/place-art.mjs
  var PLACE_ART = place_art_default;
  function resolvePlaceArt(id, region, catalogues = [], assets = {}, regionCatalogues = []) {
    for (const catalogue of catalogues) {
      const src = skillImageURL(catalogue?.[id]);
      if (src) return { src, kind: "place", label: "\u5730\u70B9\u914D\u56FE" };
    }
    const local = PLACE_ART[id];
    if (local) return { src: assets["original-place-" + id] ?? "assets/places/" + local.file, kind: "place", label: "\u5730\u70B9\u666F\u89C2\u793A\u610F" };
    for (const catalogue of regionCatalogues) {
      const src = skillImageURL(catalogue?.[region]);
      if (src) return { src, kind: "region", label: "\u6240\u5C5E\u5730\u533A\u98CE\u666F" };
    }
    const r = REGION_ART[region];
    return r ? { src: assets["original-" + r.asset] ?? "assets/original/" + r.file, kind: "region", label: "\u6240\u5C5E\u5730\u533A\u98CE\u666F" } : null;
  }

  // src/ui/map-directory-art.json
  var map_directory_art_default = {
    "mapdir-ornament-reg-01": {
      file: "reg-01-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-03": {
      file: "reg-03-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-04": {
      file: "reg-04-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-05": {
      file: "reg-05-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-06": {
      file: "reg-06-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-07": {
      file: "reg-07-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-08": {
      file: "reg-08-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-09": {
      file: "reg-09-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-10": {
      file: "reg-10-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-11": {
      file: "reg-11-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-12": {
      file: "reg-12-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-13": {
      file: "reg-13-ornament-v1.png",
      width: 1536,
      height: 1024
    },
    "mapdir-ornament-reg-14": {
      file: "reg-14-ornament-v1.png",
      width: 1536,
      height: 1024
    }
  };

  // src/ui/mobile-reference-art.json
  var mobile_reference_art_default = [
    {
      id: "01",
      file: "reference-01.png",
      reference: "01-journey-xingxing.png",
      sha256: "16ff0c7fef297d306ed0d51f59ac0e39fc1ff52a67565e89e70469037ce7c084"
    },
    {
      id: "02",
      file: "reference-02.png",
      reference: "02-journey-xiaogai.png",
      sha256: "354e513ae77f46e3043b7cd4165f2886dddad137175ce40b3fe7bbc0e65a7a57"
    },
    {
      id: "03",
      file: "reference-03.png",
      reference: "03-journey-memo.png",
      sha256: "af678852cf4e78785ba87db9d08fc913ed57256622bfe29ac0abca2def117d7a"
    },
    {
      id: "12",
      file: "reference-12.png",
      reference: "12-inventory-items-v2.png",
      sha256: "b51e4893dc857d4b42b374448bb89164fe3d6777bc68105b223390777583beb0"
    },
    {
      id: "13",
      file: "reference-13.png",
      reference: "13-inventory-equipment-v2.png",
      sha256: "c3b6aac8dc77079d4e8a7ce851575c6887c95a4014b9106cfe9d596eecb2a2ed"
    },
    {
      id: "14",
      file: "reference-14.png",
      reference: "14-item-ration-detail-v2.png",
      sha256: "e51347c4b301571e7796f35305620f9f16549b02fe36fb6c9bd9109a99de0ae1"
    },
    {
      id: "15",
      file: "reference-15.png",
      reference: "15-ledger-records-v2.png",
      sha256: "357403f946d4c2b13075bfabcfa9786349ce3ee87dbf4c80a210bdb6c1c1d3c6"
    },
    {
      id: "16",
      file: "reference-16.png",
      reference: "16-ledger-commissions-v2.png",
      sha256: "34a40c02df3cc0d41075ed8b0ad29305a626cb03f7452f80f4ab82138ca005de"
    },
    {
      id: "17",
      file: "reference-17.png",
      reference: "17-bonds-illustration-v2.png",
      sha256: "d043ba61fc49e57158ea64310f595879cb0adfd990ba865a1eb573fdda8b322a"
    },
    {
      id: "18",
      file: "reference-18.png",
      reference: "18-bonds-relationship.png",
      sha256: "6bb5d31763e6c6d6957cc8e7c49d29b7e6fa1686548b4532b91cee9166235318"
    },
    {
      id: "19",
      file: "reference-19.png",
      reference: "19-bonds-memories.png",
      sha256: "eb6e3a3fed95534468bed53f7d4676e95d1ad591483a91d0fdb11c5bc2e6d4c5"
    },
    {
      id: "22",
      file: "reference-22.png",
      reference: "22-notebook-sights-v2.png",
      sha256: "ee24f91bb10fa966213755d06949bc539154cf82a6314206d049cca077fe93f4"
    },
    {
      id: "23",
      file: "reference-23.png",
      reference: "23-notebook-commission-v2.png",
      sha256: "f5eaf5cc8977654b0e169a554fd528c4771628351446dfac2eff64addd9ebe27"
    },
    {
      id: "24",
      file: "reference-24.png",
      reference: "24-notebook-clues-v2.png",
      sha256: "fa4b2a10041931840d6f624415569d4c14cd596de7e7a6c64718b620effa8b0b"
    },
    {
      id: "25",
      file: "reference-25.png",
      reference: "25-notebook-learning-v2.png",
      sha256: "d1fc032af24b6ae779cbe52ad3c4823b52149ec6338e94e159e6844c7dc947b9"
    },
    {
      id: "26",
      file: "reference-26.png",
      reference: "26-notebook-scraps-v2.png",
      sha256: "50b0368ac7c7d93eacb2973da2ac0be59de9235b52ad495b2319b885faf10844"
    },
    {
      id: "29",
      file: "reference-29.png",
      reference: "29-continent-map-v2.png",
      sha256: "c36eddf0f68be12765981927b3780176baa63be90fd1b84dfe7202219ac18792"
    }
  ];

  // src/ui/mobile-layer-art.json
  var mobile_layer_art_default = [
    {
      id: "clue-compass",
      file: "clue-compass-v1.png",
      width: 1254,
      height: 1254,
      transparentPixels: 800393,
      centerAlpha: 253
    },
    {
      id: "guild-ribbon",
      file: "guild-ribbon-v1.png",
      width: 793,
      height: 1983,
      transparentPixels: 937386,
      centerAlpha: 253
    },
    {
      id: "header-sky",
      file: "header-sky-v1.png",
      width: 2172,
      height: 724,
      transparentPixels: 1120545,
      centerAlpha: 0
    },
    {
      id: "landscape-frame",
      file: "landscape-frame-v1.png",
      width: 1611,
      height: 976,
      transparentPixels: 971677,
      centerAlpha: 0
    },
    {
      id: "ledger-foot",
      file: "ledger-foot-v1.png",
      width: 2172,
      height: 724,
      transparentPixels: 1028410,
      centerAlpha: 0
    },
    {
      id: "letter-ornament",
      file: "letter-ornament-v1.png",
      width: 1586,
      height: 992,
      transparentPixels: 664586,
      centerAlpha: 252
    },
    {
      id: "page-border",
      file: "page-border-v1.png",
      width: 984,
      height: 1599,
      transparentPixels: 1349175,
      centerAlpha: 0
    },
    {
      id: "paper-rim",
      file: "paper-rim-v1.png",
      width: 1484,
      height: 1060,
      transparentPixels: 1117397,
      centerAlpha: 0
    },
    {
      id: "portrait-blue",
      file: "portrait-blue-v1.png",
      width: 1254,
      height: 1254,
      transparentPixels: 1062418,
      centerAlpha: 0
    },
    {
      id: "portrait-frame",
      file: "portrait-frame-v1.png",
      width: 1122,
      height: 1402,
      transparentPixels: 1087457,
      centerAlpha: 0
    },
    {
      id: "portrait-pink",
      file: "portrait-pink-v1.png",
      width: 1254,
      height: 1254,
      transparentPixels: 1136556,
      centerAlpha: 0
    },
    {
      id: "promise-letter",
      file: "promise-letter-v1.png",
      width: 2098,
      height: 749,
      transparentPixels: 356307,
      centerAlpha: 253
    },
    {
      id: "relation-ribbon",
      file: "relation-ribbon-v1.png",
      width: 2172,
      height: 724,
      transparentPixels: 1052721,
      centerAlpha: 253
    },
    {
      id: "chrome-rich",
      file: "chrome-rich-v2.png",
      width: 984,
      height: 1599,
      transparentPixels: 1282212,
      centerAlpha: 0
    },
    {
      id: "journal-masthead",
      file: "journal-masthead-v2.png",
      width: 2170,
      height: 725,
      transparentPixels: 1120240,
      centerAlpha: 1
    },
    {
      id: "journal-sights-rich",
      file: "journal-sights-rich-v2.png",
      width: 1004,
      height: 1567,
      transparentPixels: 1111798,
      centerAlpha: 0
    },
    {
      id: "journal-learning-rich",
      file: "journal-learning-rich-v2.png",
      width: 984,
      height: 1599,
      transparentPixels: 978846,
      centerAlpha: 0
    },
    {
      id: "journal-commission-rich",
      file: "journal-commission-rich-v3.png",
      width: 1413,
      height: 1113,
      transparentPixels: 488269,
      centerAlpha: 253
    },
    {
      id: "journal-clues-rich",
      file: "journal-clues-rich-v2.png",
      width: 984,
      height: 1599,
      transparentPixels: 1217762,
      centerAlpha: 0
    },
    {
      id: "journey-rich",
      file: "journey-rich-v2.png",
      width: 984,
      height: 1599,
      transparentPixels: 1193371,
      centerAlpha: 0
    },
    {
      id: "inventory-rich",
      file: "inventory-rich-v2.png",
      width: 984,
      height: 1598,
      transparentPixels: 867890,
      centerAlpha: 3
    },
    {
      id: "bonds-rich",
      file: "bonds-rich-v2.png",
      width: 1004,
      height: 1567,
      transparentPixels: 919568,
      centerAlpha: 0
    },
    {
      id: "character-switch-rich",
      file: "character-switch-rich-v2.png",
      width: 2202,
      height: 714,
      transparentPixels: 1162389,
      centerAlpha: 253
    },
    {
      id: "bonds-memories-rich",
      file: "bonds-memories-rich-v2.png",
      width: 1004,
      height: 1567,
      transparentPixels: 890918,
      centerAlpha: 1
    },
    {
      id: "journal-scraps-rich",
      file: "journal-scraps-rich-v2.png",
      width: 1246,
      height: 1263,
      transparentPixels: 596800,
      centerAlpha: 252
    },
    {
      id: "journey-person-pink",
      file: "journey-person-pink-v3.png",
      width: 984,
      height: 1599
    },
    {
      id: "journey-person-blue",
      file: "journey-person-blue-v3.png",
      width: 984,
      height: 1599
    },
    {
      id: "journey-record-tabs",
      file: "journey-record-tabs-v3.png",
      width: 984,
      height: 1599
    },
    {
      id: "journey-route",
      file: "journey-route-v5.png",
      width: 1575,
      height: 999
    }
  ];

  // src/ui/original-art.mjs
  var ORIGINALS = {
    ...Object.fromEntries(mobile_layer_art_default.map((v) => ["phone-layer-" + v.id, ["../mobile-layers/" + v.file, v.width, v.height]])),
    ...Object.fromEntries(["01", "02", "03", "14", "18", "15", "16", "19", "22", "23", "24", "25", "26"].map((id) => ["phone-ref-" + id + "-fill", ["../mobile-fill/fill-" + id + "-v1.png", 984, 1599]])),
    ...Object.fromEntries(mobile_reference_art_default.map((v) => ["phone-ref-" + v.id, ["../mobile-reference/" + v.file, 984, 1599]])),
    ...Object.fromEntries(["journey", "inventory", "bonds", "notebook", "map"].map((name) => ["phone-home-" + name, ["../mobile-home/" + name + "-clean-v1.png", 984, 1599]])),
    "mobile-chrome": ["../mobile/chrome-v1.png", 984, 1599],
    "ledger-approved": ["../ledger-scenes/approved-ledger-v3.png", 1834, 858],
    "scene-approved": ["../ledger-scenes/approved-scene-v2.png", 1834, 858],
    "picker-approved-xingxing": ["../portraits/approved-xingxing-v2.png", 1835, 857],
    "picker-approved-xiaogai": ["../portraits/approved-xiaogai-v3.png", 1835, 857],
    "mapdir-overview": ["../map-directory/approved-overview-v1.png", 1838, 856],
    "mapdir-place": ["../map-directory/approved-place-v1.png", 1837, 856],
    "mapdir-paper": ["../map-directory/paper-fill-v1.png", 1837, 856],
    ...Object.fromEntries(Object.entries(map_directory_art_default).map(([key, v]) => [key, ["../map-directory/" + v.file, v.width, v.height]])),
    ...Object.fromEntries(Object.entries(PLACE_ART).map(([id, v]) => ["place-" + id, ["../places/" + v.file, v.width, v.height]])),
    "profile-approved-xingxing": ["../profiles/approved-xingxing-v4.png", 1836, 856],
    "profile-approved-xiaogai": ["../profiles/approved-xiaogai-v4.png", 1836, 857],
    "profile-learning-target": ["../profiles/learning-target-xingxing-v1.png", 575, 226],
    "profile-paper-xingxing": ["../profiles/xingxing-paper-v1.png", 1836, 857],
    "profile-paper-xiaogai": ["../profiles/xiaogai-paper-v1.png", 1834, 858],
    "profile-study-control": ["../profiles/control-study-v1.png", 1536, 1024],
    "profile-study-wind": ["../profiles/wind-study-v1.png", 1774, 887],
    "profile-icons-xingxing": ["../profiles/skills-xingxing-v1.png", 2172, 724],
    "profile-icons-xiaogai": ["../profiles/skills-xiaogai-v1.png", 2172, 724],
    ...Object.fromEntries(Object.entries(ITEM_ART).map(([key, v]) => ["item-" + key, ["../items/" + v.file, v.width, v.height]])),
    ...Object.fromEntries(Object.values(REGION_ART).map((r) => [r.asset, [r.file, r.width, r.height]])),
    journey: ["01-journey-v4.png", 1839, 855],
    inventory: ["02-inventory-v3.png", 1839, 855],
    bonds: ["03-bonds-v4.png", 1839, 855],
    notebook: ["04-notebook-v4.png", 1836, 857],
    map: ["05-map-v3.png", 1840, 855],
    "map-card": ["05-map-v3.png", 1840, 855],
    "map-card-fill": ["map-text-fill.png", 1840, 855],
    terrain: ["map-terrain-fill.png", 1840, 855],
    route: ["journey-route-fill.png", 1839, 855],
    "journey-fill": ["journey-text-fill.png", 1839, 855],
    "inventory-fill": ["inventory-text-fill.png", 1839, 855],
    "bonds-fill": ["bonds-text-fill.png", 1839, 855],
    "notebook-fill": ["notebook-text-fill.png", 1836, 857],
    "inventory-neutral": ["../interaction/inventory-neutral.png", 1839, 855],
    "item-alpha": ["../interaction/items-alpha.png", 1983, 793],
    "equipment-alpha": ["../interaction/equipment-alpha.png", 1619, 971],
    "map-chrome": ["../interaction/map-chrome.png", 1839, 855],
    "journey-matte": ["../interaction/journey-photo-overlay.png", 1839, 855],
    "bonds-matte": ["../interaction/bonds-photo-overlay.png", 1839, 855],
    "bonds-name-paper": ["../interaction/bonds-name-paper-v1.png", 1839, 855],
    "bonds-portrait-stencil": ["../interaction/bonds-portrait-stencil-v1.png", 1839, 855],
    "notebook-matte": ["../interaction/notebook-photo-overlay.png", 1835, 857],
    "memory-scenes": ["../interaction/memory-scenes.png", 2036, 772],
    "bond-scene": ["../interaction/bond-scene.png", 1344, 1170],
    "smile-hd": ["../interaction/xingxing-smile-hd.png", 1254, 1254],
    "selection-matte": ["../interaction/item-selected-frame.png", 1839, 855],
    "journey-summary": ["../revision/journey-summary-v1.png", 1836, 857],
    "travel-memo": ["../revision/travel-memo-approved-v1.png", 1825, 862],
    "travel-memo-fill": ["../revision/travel-memo-fill-v1.png", 1824, 862],
    "journey-approved": ["../revision/journey-approved-v2.png", 1836, 857],
    "journey-approved-fill": ["../revision/journey-approved-fill-v1.png", 1836, 857],
    "journey-aperture": ["../revision/journey-aperture-v1.png", 1839, 855],
    "item-detail-stencil": ["../revision/item-detail-aperture-v1.png", 1839, 855]
  };
  var PORTRAIT_WINDOWS = { journey: [[255, 258, 178, 164], [1116, 258, 170, 164]], bonds: [[1171, 207, 106, 104], [1508, 208, 109, 105]] };
  function portraitWindow(asset, box) {
    return PORTRAIT_WINDOWS[asset]?.[box[0] < (asset === "journey" ? 600 : 1300) ? 0 : 1] ?? null;
  }
  function portraitForeground(asset, box, cls = "", assets = {}, holes = [], withFill = true) {
    const e = originalWindow(asset, box, holes, cls, assets, [], withFill), kind = asset === "bonds-name-paper" ? "bonds" : asset;
    const stencil = kind === "journey" ? "journey-aperture" : "bonds-portrait-stencil", [file, width, height] = ORIGINALS[stencil], [x, y, w, h] = box;
    const ellipses = PORTRAIT_WINDOWS[kind].map(([a, b, c, d]) => `<ellipse cx="${a - x}" cy="${b - y}" rx="${c}" ry="${d}" fill="black"/>`).join("");
    const outside = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><mask id="m"><rect width="100%" height="100%" fill="white"/>${ellipses}</mask><rect width="100%" height="100%" fill="white" mask="url(#m)"/></svg>`;
    e.style.maskImage = e.style.webkitMaskImage = `url("${assets["original-" + stencil] ?? "assets/original/" + file}"),url("data:image/svg+xml,${encodeURIComponent(outside)}")`;
    e.style.maskSize = `${width / w * 100}% ${height / h * 100}%,100% 100%`;
    e.style.maskPosition = `${maskPosition(x, width, w)} ${maskPosition(y, height, h)},0 0`;
    e.style.maskRepeat = "no-repeat";
    e.style.maskMode = "luminance,alpha";
    e.style.maskComposite = "add";
    return e;
  }
  function position(element, [x, y, w, h]) {
    element.style.setProperty("--x", x + "px");
    element.style.setProperty("--y", y + "px");
    element.style.setProperty("--w", w + "px");
    element.style.setProperty("--h", h + "px");
    element.classList.add("xh-positioned");
    return element;
  }
  var maskPosition = (offset, total, size) => total === size ? "0%" : offset / (total - size) * 100 + "%";
  function foregroundWindow(asset, box, matte, cls = "", assets = {}, holes = [], matteBox = box, cleanupMatte = null) {
    const e = originalWindow(asset, box, holes, cls, assets), [file, width, height] = ORIGINALS[matte], [x, y, w, h] = matteBox;
    e.style.maskImage = e.style.webkitMaskImage = `url("${assets["original-" + matte] ?? "assets/original/" + file}")`;
    e.style.maskSize = `${width / w * 100}% ${height / h * 100}%`;
    e.style.maskPosition = `${maskPosition(x, width, w)} ${maskPosition(y, height, h)}`;
    e.style.maskRepeat = "no-repeat";
    if (cleanupMatte) {
      const [cleanFile, cw, ch] = ORIGINALS[cleanupMatte];
      e.style.maskImage = e.style.webkitMaskImage += `,url("${assets["original-" + cleanupMatte] ?? "assets/original/" + cleanFile}")`;
      e.style.maskSize += `,${cw / w * 100}% ${ch / h * 100}%`;
      e.style.maskPosition += `,${maskPosition(x, cw, w)} ${maskPosition(y, ch, h)}`;
      e.style.maskMode = "alpha,luminance";
      e.style.maskComposite = "intersect";
    }
    return e;
  }
  function originalWindow(asset, box, holes = [], cls = "", assets = {}, pathHoles = [], withFill = true) {
    const [file, width, height] = ORIGINALS[asset], [x, y, w, h] = box;
    const outer = document.createElement("span");
    outer.className = "xh-original-art " + cls;
    outer.dataset.originalSource = asset;
    outer.setAttribute("aria-hidden", "true");
    outer.style.setProperty("--art-ratio", w / h);
    const image = document.createElement("img");
    image.src = assets["original-" + asset] ?? "assets/original/" + file;
    image.alt = "";
    image.draggable = false;
    image.decoding = asset.startsWith("phone-ref-") ? "sync" : "async";
    image.addEventListener("error", () => {
      image.hidden = true;
      outer.classList.add("xh-art-missing");
      assets.__onArtError?.();
    }, { once: true });
    Object.assign(image.style, { width: width / w * 100 + "%", height: height / h * 100 + "%", left: -x / w * 100 + "%", top: -y / h * 100 + "%" });
    if (holes.length || pathHoles.length) {
      const rectangles = holes.map((v) => {
        if (v.type === "ellipse") return `<ellipse cx="${v.cx - x}" cy="${v.cy - y}" rx="${v.rx}" ry="${v.ry}" fill="black"/>`;
        const [a, b, c, d] = v.rect ?? v;
        return `<rect x="${a - x}" y="${b - y}" width="${c}" height="${d}" fill="black"/>`;
      }).join("");
      const paths2 = pathHoles.map(([d, size]) => `<path d="${d}" transform="translate(${-x} ${-y})" fill="none" stroke="black" stroke-width="${size}" stroke-linecap="round" stroke-linejoin="round"/>`).join("");
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><mask id="m"><rect width="${w}" height="${h}" fill="white"/>${rectangles}${paths2}</mask><rect width="${w}" height="${h}" fill="white" mask="url(#m)"/></svg>`;
      image.style.maskImage = image.style.webkitMaskImage = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
      image.style.maskSize = width / w * 100 + "% " + height / h * 100 + "%";
      const layer = document.createElement("span");
      layer.className = "xh-ink-layer";
      layer.style.maskImage = layer.style.webkitMaskImage = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
      layer.style.maskSize = "100% 100%";
      image.style.maskImage = image.style.webkitMaskImage = "none";
      if (withFill && ORIGINALS[asset + "-fill"]) {
        const fill = image.cloneNode(false);
        fill.src = assets["original-" + asset + "-fill"] ?? "assets/original/" + ORIGINALS[asset + "-fill"][0];
        fill.className = "xh-text-fill";
        fill.addEventListener("error", () => {
          fill.hidden = true;
          assets.__onArtError?.();
        }, { once: true });
        if (asset.startsWith("phone-ref-")) {
          const patches = holes.filter(Array.isArray).map(([a, b, c, d]) => `<rect x="${a - x}" y="${b - y}" width="${c}" height="${d}" fill="white"/>`).join("");
          const mask = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${patches}</svg>`;
          const backing = document.createElement("span");
          backing.className = "xh-ink-layer xh-phone-text-backing";
          backing.style.maskImage = backing.style.webkitMaskImage = `url("data:image/svg+xml,${encodeURIComponent(mask)}")`;
          backing.style.maskSize = "100% 100%";
          backing.append(fill);
          outer.append(backing);
        } else outer.append(fill);
      }
      layer.append(image);
      outer.append(layer);
      return outer;
    }
    outer.append(image);
    return outer;
  }
  var ITEM_WINDOWS = {
    ration: [39, 339, 320, 174],
    water: [374, 339, 321, 174],
    potion: [710, 339, 312, 174],
    camp: [39, 526, 320, 198],
    herb: [374, 526, 321, 198],
    bookmark: [710, 526, 312, 198],
    staff: [1365, 177, 201, 142],
    cloak: [1578, 177, 201, 142],
    sword: [1365, 334, 201, 143],
    armor: [1578, 334, 201, 143]
  };
  function paperFrame(assets = {}, cls = "", blue = false) {
    const frame = document.createElement("span");
    frame.className = "xh-pc-paper-frame " + cls;
    frame.setAttribute("aria-hidden", "true");
    const key = "journey-approved";
    const [x, y, w, h] = [15, 450, 1024, 373], s = 46;
    const windows = { tl: [x, y, s, s], t: [x + s, y, w - s * 2, 8], tr: [x + w - s, y, s, s], l: [x, y + s, 8, h - s * 2], r: [x + w - 8, y + s, 8, h - s * 2], bl: [x, y + h - s, s, s], b: [x + s, y + h - 8, w - s * 2, 8], br: [x + w - s, y + h - s, s, s] };
    for (const [part, rect] of Object.entries(windows)) frame.append(originalWindow(key, rect, [], "xh-pc-paper-edge " + part, assets, [], false));
    return frame;
  }
  var PHOTO_BOUNDS = {
    "bonds:0,88,967,751": [247, 34, 720, 635],
    "bonds:975,574,254,239": [0, 10, 236, 133],
    "bonds:1234,570,280,244": [10, 9, 252, 139],
    "bonds:1524,575,285,239": [11, 6, 260, 145],
    "notebook:537,155,690,466": [10, 11, 596, 429],
    "notebook:148,624,240,202": [2, 1, 238, 193]
  };
  function clipPhoto(element, asset, rect, matte, assets = {}) {
    const bounds = PHOTO_BOUNDS[asset + ":" + rect.join(",")];
    if (!bounds || !ORIGINALS[matte]) return null;
    const [file, width, height] = ORIGINALS[matte], [x, y, w, h] = rect;
    element.style.maskImage = element.style.webkitMaskImage = `linear-gradient(#000,#000),url("${assets["original-" + matte] ?? "assets/original/" + file}")`;
    element.style.maskSize = `100% 100%,${width / w * 100}% ${height / h * 100}%`;
    element.style.maskPosition = `0 0,${maskPosition(x, width, w)} ${maskPosition(y, height, h)}`;
    element.style.maskRepeat = "no-repeat";
    element.style.maskComposite = "subtract";
    element.style.maskMode = "alpha,alpha";
    element.dataset.photoAperture = "original-png";
    return bounds;
  }

  // build/world-catalog.mjs
  var WORLD = {
    "regions": {
      "REG-01": {
        "name": "\u7EF4\u5C14\u767B\u6CB3\u8C37"
      },
      "REG-02": {
        "name": "\u585E\u4F26\u8FBE\u4E18\u9675"
      },
      "REG-03": {
        "name": "\u963F\u5C14\u7EF4\u514B"
      },
      "REG-04": {
        "name": "\u5361\u5FB7\u6E29\u6D77\u6E7E"
      },
      "REG-05": {
        "name": "\u970D\u5C14\u4E39\u5E73\u539F"
      },
      "REG-06": {
        "name": "\u5E03\u96F7\u5361\u9AD8\u5730"
      },
      "REG-07": {
        "name": "\u675C\u5C14\u6587\u5C71\u8109"
      },
      "REG-08": {
        "name": "\u7EF4\u65AF\u5361\u68EE\u6797"
      },
      "REG-09": {
        "name": "\u6D1B\u65AF\u6587\u6E56\u533A"
      },
      "REG-10": {
        "name": "\u57C3\u65AF\u51EF\u5C14\u8352\u539F"
      },
      "REG-11": {
        "name": "\u7D22\u62C9\u6069\u6C99\u6D77"
      },
      "REG-12": {
        "name": "\u8BFA\u5C14\u7EF4\u514B\u51BB\u539F"
      },
      "REG-13": {
        "name": "\u74E6\u8428\u6069\u706B\u5C71\u533A"
      },
      "REG-14": {
        "name": "\u827E\u65AF\u5854\u6069\u5D16\u5CB8"
      }
    },
    "places": {
      "LOC-VIR-001": {
        "name": "\u8FBE\u4F26\u798F\u5FB7",
        "region": "REG-01"
      },
      "LOC-VIR-002": {
        "name": "\u7EF4\u65AF\u7279\u65C5\u5E97",
        "region": "REG-01"
      },
      "LOC-VIR-003": {
        "name": "\u8FBE\u4F26\u798F\u5FB7\u6CB3\u5E02\u4E0E\u7801\u5934",
        "region": "REG-01"
      },
      "LOC-VIR-004": {
        "name": "\u683C\u4F26\u4FEE\u5177\u94FA",
        "region": "REG-01"
      },
      "LOC-VIR-005": {
        "name": "\u79D1\u5C14\u6587\u77F3\u6865",
        "region": "REG-01"
      },
      "LOC-VIR-006": {
        "name": "\u963F\u65AF\u7279\u5C14\u65E7\u95F8\u4E0E\u6C34\u5ECA",
        "region": "REG-01"
      },
      "LOC-VIR-007": {
        "name": "\u6885\u91CC\u5B89\u6751",
        "region": "REG-01"
      },
      "LOC-VIR-008": {
        "name": "\u96F7\u6587\u7EB3",
        "region": "REG-01"
      },
      "LOC-VIR-009": {
        "name": "\u8FBE\u4F26\u798F\u5FB7\u5192\u9669\u5BB6\u534F\u4F1A",
        "region": "REG-01"
      },
      "LOC-SER-001": {
        "name": "\u8D1D\u5C14\u8499\u7279",
        "region": "REG-02"
      },
      "LOC-SER-002": {
        "name": "\u8D1D\u5C14\u8499\u7279\u5192\u9669\u5BB6\u534F\u4F1A",
        "region": "REG-02"
      },
      "LOC-SER-003": {
        "name": "\u83F2\u4F26\u5E84\u56ED",
        "region": "REG-02"
      },
      "LOC-SER-004": {
        "name": "\u5965\u96F7\u65AF\u82B1\u6D77",
        "region": "REG-02"
      },
      "LOC-SER-005": {
        "name": "\u7F57\u745F\u6069\u5821",
        "region": "REG-02"
      },
      "LOC-SER-006": {
        "name": "\u7EF4\u6069\u5BA2\u820D",
        "region": "REG-02"
      },
      "LOC-ALV-001": {
        "name": "\u963F\u5C14\u7EF4\u514B\u81EA\u7531\u5E02",
        "region": "REG-03"
      },
      "LOC-ALV-002": {
        "name": "\u963F\u5C14\u7EF4\u514B\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
        "region": "REG-03"
      },
      "LOC-ALV-003": {
        "name": "\u591A\u4F26\u8857",
        "region": "REG-03"
      },
      "LOC-ALV-004": {
        "name": "\u963F\u4F26\u8428\u6D74\u573A",
        "region": "REG-03"
      },
      "LOC-ALV-005": {
        "name": "\u7EF4\u7279\u62C9\u6865\u7FA4",
        "region": "REG-03"
      },
      "LOC-ALV-006": {
        "name": "\u6D1B\u6885\u65AF\u65E7\u8857",
        "region": "REG-03"
      },
      "LOC-CAD-001": {
        "name": "\u8D1D\u8428\u5C14\u6E2F",
        "region": "REG-04"
      },
      "LOC-CAD-002": {
        "name": "\u8D1D\u8428\u5C14\u6E2F\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
        "region": "REG-04"
      },
      "LOC-CAD-003": {
        "name": "\u9A6C\u96F7\u65AF\u8239\u575E",
        "region": "REG-04"
      },
      "LOC-CAD-004": {
        "name": "\u5854\u5C14\u8428\u5C9B",
        "region": "REG-04"
      },
      "LOC-CAD-005": {
        "name": "\u57C3\u65AF\u4F26\u6D77\u8680\u6D1E",
        "region": "REG-04"
      },
      "LOC-CAD-006": {
        "name": "\u7EF4\u8428\u6069\u65E7\u5824\u9053",
        "region": "REG-04"
      },
      "LOC-HOR-001": {
        "name": "\u4E4C\u5C14\u8FBE\u514B",
        "region": "REG-05"
      },
      "LOC-HOR-002": {
        "name": "\u4E4C\u5C14\u8FBE\u514B\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
        "region": "REG-05"
      },
      "LOC-HOR-003": {
        "name": "\u5361\u5C14\u7EB3\u96C6\u5E02",
        "region": "REG-05"
      },
      "LOC-HOR-004": {
        "name": "\u591A\u62C9\u6069\u7ADE\u6280\u573A",
        "region": "REG-05"
      },
      "LOC-HOR-005": {
        "name": "\u51EF\u5C14\u8428\u77F3\u73AF",
        "region": "REG-05"
      },
      "LOC-HOR-006": {
        "name": "\u5854\u4F26\u6CB3\u6E21\u573A",
        "region": "REG-05"
      },
      "LOC-HOR-007": {
        "name": "\u7EB3\u7EF4\u5C14\u5824\u7267\u533A",
        "region": "REG-05"
      },
      "LOC-HOR-008": {
        "name": "\u8428\u96F7\u514B\u65C5\u820D",
        "region": "REG-05"
      },
      "LOC-BRE-001": {
        "name": "\u79D1\u5C14\u74E6\u6069",
        "region": "REG-06"
      },
      "LOC-BRE-002": {
        "name": "\u79D1\u5C14\u74E6\u6069\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
        "region": "REG-06"
      },
      "LOC-BRE-003": {
        "name": "\u8D1D\u4F26\u5FB7\u5ECA\u5E02",
        "region": "REG-06"
      },
      "LOC-BRE-004": {
        "name": "\u7EF4\u5FB7\u62C9\u5347\u964D\u7AD9",
        "region": "REG-06"
      },
      "LOC-BRE-005": {
        "name": "\u827E\u745E\u745F\u5C14\u53E4\u57CE",
        "region": "REG-06"
      },
      "LOC-BRE-006": {
        "name": "\u8D6B\u5C14\u739B\u89C2\u4E91\u53F0",
        "region": "REG-06"
      },
      "LOC-BRE-007": {
        "name": "\u514B\u96F7\u65AF\u5C71\u9053",
        "region": "REG-06"
      },
      "LOC-BRE-008": {
        "name": "\u591A\u6069\u9A7F\u820D",
        "region": "REG-06"
      },
      "LOC-DUR-001": {
        "name": "\u6258\u5C14\u6587",
        "region": "REG-07"
      },
      "LOC-DUR-002": {
        "name": "\u6258\u5C14\u6587\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
        "region": "REG-07"
      },
      "LOC-DUR-003": {
        "name": "\u54C8\u5FB7\u6797\u77F3\u5385",
        "region": "REG-07"
      },
      "LOC-DUR-004": {
        "name": "\u745F\u62C9\u8FEA\u6069\u6676\u6E56",
        "region": "REG-07"
      },
      "LOC-DUR-005": {
        "name": "\u8D1D\u6D1B\u514B\u5DE5\u574A\u8857",
        "region": "REG-07"
      },
      "LOC-DUR-006": {
        "name": "\u4F0A\u5C14\u8FBE\u6E29\u6CC9\u9662",
        "region": "REG-07"
      },
      "LOC-DUR-007": {
        "name": "\u5361\u5C14\u5FB7\u65E7\u77FF\u9053",
        "region": "REG-07"
      },
      "LOC-DUR-008": {
        "name": "\u5965\u5C14\u82AC\u5C71\u53E3",
        "region": "REG-07"
      },
      "LOC-DUR-009": {
        "name": "\u6797\u5FB7\u65C5\u820D",
        "region": "REG-07"
      },
      "LOC-VIS-001": {
        "name": "\u5E03\u4F26\u7EF4\u5C14",
        "region": "REG-08"
      },
      "LOC-VIS-002": {
        "name": "\u5E03\u4F26\u7EF4\u5C14\u5192\u9669\u5BB6\u534F\u4F1A",
        "region": "REG-08"
      },
      "LOC-VIS-003": {
        "name": "\u5965\u514B\u4F26\u6728\u5ECA\u5E02",
        "region": "REG-08"
      },
      "LOC-VIS-004": {
        "name": "\u57C3\u5C14\u5FB7\u6797\u5DE8\u6811",
        "region": "REG-08"
      },
      "LOC-VIS-005": {
        "name": "\u745F\u7EF4\u5C14\u6839\u62F1\u9053",
        "region": "REG-08"
      },
      "LOC-VIS-006": {
        "name": "\u6258\u5170\u65E7\u836F\u5703",
        "region": "REG-08"
      },
      "LOC-VIS-007": {
        "name": "\u745E\u65AF\u6797\u6811\u8102\u56ED",
        "region": "REG-08"
      },
      "LOC-VIS-008": {
        "name": "\u8D1D\u4F26\u6797\u820D",
        "region": "REG-08"
      },
      "LOC-VIS-009": {
        "name": "\u74E6\u4F26\u6EAA\u8425\u5730",
        "region": "REG-08"
      },
      "LOC-LOS-001": {
        "name": "\u6885\u745E\u767B",
        "region": "REG-09"
      },
      "LOC-LOS-002": {
        "name": "\u6885\u745E\u767B\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
        "region": "REG-09"
      },
      "LOC-LOS-003": {
        "name": "\u83F2\u5965\u62C9\u821F\u5E02",
        "region": "REG-09"
      },
      "LOC-LOS-004": {
        "name": "\u7EF4\u7EB3\u5C14\u6E56",
        "region": "REG-09"
      },
      "LOC-LOS-005": {
        "name": "\u5965\u857E\u6069\u6D6E\u5C9B\u7FA4",
        "region": "REG-09"
      },
      "LOC-LOS-006": {
        "name": "\u74E6\u96F7\u8428\u6C89\u57CE",
        "region": "REG-09"
      },
      "LOC-LOS-007": {
        "name": "\u5361\u585E\u62C9\u9547",
        "region": "REG-09"
      },
      "LOC-LOS-008": {
        "name": "\u585E\u62C9\u6587\u7011\u5E03",
        "region": "REG-09"
      },
      "LOC-LOS-009": {
        "name": "\u827E\u6587\u8FBE\u8239\u5C4B\u6CCA\u533A",
        "region": "REG-09"
      },
      "LOC-LOS-010": {
        "name": "\u83AB\u5170\u6E56\u5CB8\u5BA2\u6808",
        "region": "REG-09"
      },
      "LOC-LOS-011": {
        "name": "\u4F0A\u745F\u6587\u7814\u4E60\u9662",
        "region": "REG-09"
      },
      "LOC-LOS-012": {
        "name": "\u4F0A\u745F\u6587\u6C34\u5EAD\u7EC3\u4E60\u573A",
        "region": "REG-09"
      },
      "LOC-ESK-001": {
        "name": "\u5FB7\u5170\u745F",
        "region": "REG-10"
      },
      "LOC-ESK-002": {
        "name": "\u5FB7\u5170\u745F\u5192\u9669\u5BB6\u534F\u4F1A",
        "region": "REG-10"
      },
      "LOC-ESK-003": {
        "name": "\u7EF4\u4F26\u5FB7\u9A7F\u5E02",
        "region": "REG-10"
      },
      "LOC-ESK-004": {
        "name": "\u5361\u6D1B\u6E29\u5BA2\u820D",
        "region": "REG-10"
      },
      "LOC-ESK-005": {
        "name": "\u963F\u65AF\u5361\u4F26\u9636\u57CE",
        "region": "REG-10"
      },
      "LOC-ESK-006": {
        "name": "\u7EF4\u96F7\u6069\u65AD\u5D16",
        "region": "REG-10"
      },
      "LOC-ESK-007": {
        "name": "\u8BFA\u7EF4\u6069\u4E95\u7AD9",
        "region": "REG-10"
      },
      "LOC-ESK-008": {
        "name": "\u8D6B\u7F57\u6069\u65E7\u6CB3\u5E8A",
        "region": "REG-10"
      },
      "LOC-ESK-009": {
        "name": "\u74E6\u5C14\u5FB7\u89C2\u666F\u5761",
        "region": "REG-10"
      },
      "LOC-SOL-001": {
        "name": "\u8428\u7EF4\u5170",
        "region": "REG-11"
      },
      "LOC-SOL-002": {
        "name": "\u8428\u7EF4\u5170\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
        "region": "REG-11"
      },
      "LOC-SOL-003": {
        "name": "\u83B1\u745F\u6069\u591C\u5E02",
        "region": "REG-11"
      },
      "LOC-SOL-004": {
        "name": "\u74E6\u4F26\u5A1C\u5EAD\u9662\u5BA2\u6808",
        "region": "REG-11"
      },
      "LOC-SOL-005": {
        "name": "\u963F\u7EF4\u745F\u5C14\u73BB\u7483\u5CE1\u8C37",
        "region": "REG-11"
      },
      "LOC-SOL-006": {
        "name": "\u5965\u745E\u6069\u6C99\u4E18",
        "region": "REG-11"
      },
      "LOC-SOL-007": {
        "name": "\u6CD5\u5C14\u745F\u5DE8\u9AB8",
        "region": "REG-11"
      },
      "LOC-SOL-008": {
        "name": "\u745F\u5170\u5FB7\u6C34\u5EAD",
        "region": "REG-11"
      },
      "LOC-SOL-009": {
        "name": "\u79D1\u745E\u6069\u7EFF\u6D32\u6751",
        "region": "REG-11"
      },
      "LOC-SOL-010": {
        "name": "\u57C3\u5C14\u6E29\u5546\u961F\u9662",
        "region": "REG-11"
      },
      "LOC-NOR-001": {
        "name": "\u8D6B\u5C14\u65AF\u5854\u5FB7",
        "region": "REG-12"
      },
      "LOC-NOR-002": {
        "name": "\u8D6B\u5C14\u65AF\u5854\u5FB7\u5192\u9669\u5BB6\u534F\u4F1A",
        "region": "REG-12"
      },
      "LOC-NOR-003": {
        "name": "\u5E03\u5170\u7279\u51AC\u5385",
        "region": "REG-12"
      },
      "LOC-NOR-004": {
        "name": "\u827E\u683C\u59AE\u65C5\u820D",
        "region": "REG-12"
      },
      "LOC-NOR-005": {
        "name": "\u4F0A\u5C14\u74E6\u6069\u6E56",
        "region": "REG-12"
      },
      "LOC-NOR-006": {
        "name": "\u7EF4\u65AF\u5854\u89C2\u666F\u53F0",
        "region": "REG-12"
      },
      "LOC-NOR-007": {
        "name": "\u6258\u5C14\u8D5B\u6069\u5DE8\u77F3\u5ECA",
        "region": "REG-12"
      },
      "LOC-NOR-008": {
        "name": "\u8FBE\u5C14\u7EB3\u6CB3\u6BB5",
        "region": "REG-12"
      },
      "LOC-NOR-009": {
        "name": "\u827E\u6587\u8D6B\u907F\u98CE\u9A7F",
        "region": "REG-12"
      },
      "LOC-NOR-010": {
        "name": "\u7F57\u5FB7\u5170\u7EC7\u4F5C\u9662",
        "region": "REG-12"
      },
      "LOC-VAS-001": {
        "name": "\u5965\u5C14\u745F\u59C6",
        "region": "REG-13"
      },
      "LOC-VAS-002": {
        "name": "\u5965\u5C14\u745F\u59C6\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
        "region": "REG-13"
      },
      "LOC-VAS-003": {
        "name": "\u8D39\u4F26\u9676\u5E02",
        "region": "REG-13"
      },
      "LOC-VAS-004": {
        "name": "\u7F57\u8587\u5A1C\u6E29\u6CC9\u9662",
        "region": "REG-13"
      },
      "LOC-VAS-005": {
        "name": "\u739B\u745F\u6069\u6E29\u5BA4\u7FA4",
        "region": "REG-13"
      },
      "LOC-VAS-006": {
        "name": "\u5E03\u96F7\u6069\u6751",
        "region": "REG-13"
      },
      "LOC-VAS-007": {
        "name": "\u5361\u5C14\u7EF4\u65AF\u706B\u5C71",
        "region": "REG-13"
      },
      "LOC-VAS-008": {
        "name": "\u4F0A\u65AF\u5FB7\u62C9\u9ED1\u5CA9\u9636\u5730",
        "region": "REG-13"
      },
      "LOC-VAS-009": {
        "name": "\u5854\u7EF4\u6069\u6696\u6EAA",
        "region": "REG-13"
      },
      "LOC-VAS-010": {
        "name": "\u7EF4\u6D1B\u65AF\u5CA9\u53F0",
        "region": "REG-13"
      },
      "LOC-VAS-011": {
        "name": "\u5FB7\u5C14\u6587\u89C2\u706B\u53F0",
        "region": "REG-13"
      },
      "LOC-EST-001": {
        "name": "\u54C8\u5C14\u7EF4\u65AF",
        "region": "REG-14"
      },
      "LOC-EST-002": {
        "name": "\u54C8\u5C14\u7EF4\u65AF\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
        "region": "REG-14"
      },
      "LOC-EST-003": {
        "name": "\u827E\u5FB7\u6E29\u62F1\u5ECA",
        "region": "REG-14"
      },
      "LOC-EST-004": {
        "name": "\u739B\u8482\u5C14\u8FBE\u65C5\u9986",
        "region": "REG-14"
      },
      "LOC-EST-005": {
        "name": "\u7EF4\u5C14\u745F\u9547",
        "region": "REG-14"
      },
      "LOC-EST-006": {
        "name": "\u7EF4\u5C14\u745F\u5192\u9669\u5BB6\u534F\u4F1A",
        "region": "REG-14"
      },
      "LOC-EST-007": {
        "name": "\u7F57\u745F\u7433\u5BA2\u820D",
        "region": "REG-14"
      },
      "LOC-EST-008": {
        "name": "\u827E\u6587\u91CC\u7267\u573A",
        "region": "REG-14"
      },
      "LOC-EST-009": {
        "name": "\u6CD5\u5C14\u6E29\u65E7\u5821",
        "region": "REG-14"
      },
      "LOC-EST-010": {
        "name": "\u8D1D\u4F26\u7EB3\u6E2F\u6751",
        "region": "REG-14"
      },
      "LOC-EST-011": {
        "name": "\u83B1\u65AF\u6587\u6D77\u5D16",
        "region": "REG-14"
      },
      "LOC-EST-012": {
        "name": "\u4F0A\u65AF\u5854\u7EF4\u5C14\u5CAC",
        "region": "REG-14"
      },
      "LOC-EST-013": {
        "name": "\u5965\u5C14\u5FB7\u89C2\u666F\u9636\u5730",
        "region": "REG-14"
      },
      "LOC-EST-014": {
        "name": "\u57C3\u5F17\u987F\u5EAD\u9662",
        "region": "REG-14"
      },
      "LOC-EST-015": {
        "name": "\u96F7\u5FB7\u6E29\u5267\u9662",
        "region": "REG-14"
      }
    },
    "roads": {
      "ROAD-01": {
        "from": "REG-01",
        "to": "REG-02",
        "description": "\u6CB3\u8C37\u652F\u8DEF\u4E0E\u7F13\u5761\uFF0C\u6B65\u884C\u3001\u9A6C\u5339\u6216\u8F66"
      },
      "ROAD-02": {
        "from": "REG-02",
        "to": "REG-04",
        "description": "\u4E18\u9675\u4E0B\u884C\u5230\u6E2F\u6E7E\uFF0C\u516C\u8DEF\u4E0E\u5730\u65B9\u8F66\u8239"
      },
      "ROAD-03": {
        "from": "REG-01",
        "to": "REG-03",
        "description": "\u4E3B\u6CB3\u4E24\u5CB8\u9053\u8DEF\uFF1B\u9002\u822A\u6CB3\u6BB5\u53EF\u6362\u8239"
      },
      "ROAD-04": {
        "from": "REG-03",
        "to": "REG-05",
        "description": "\u5E73\u539F\u5E72\u9053\u3001\u6CB3\u6E2F\u4E0E\u519C\u7267\u805A\u843D"
      },
      "ROAD-05": {
        "from": "REG-05",
        "to": "REG-06",
        "description": "\u7531\u5E73\u539F\u5165\u5C71\uFF0C\u5761\u9053\u4E0E\u9AD8\u5730\u9A7F\u7AD9"
      },
      "ROAD-06": {
        "from": "REG-06",
        "to": "REG-12",
        "description": "\u7ECF\u77EE\u6797\u3001\u82D4\u5730\u8FDB\u5165\u5317\u65B9\uFF0C\u9002\u5408\u968F\u5B63\u8282\u6362\u4EA4\u901A"
      },
      "ROAD-07": {
        "from": "REG-12",
        "to": "REG-13",
        "description": "\u7531\u51BB\u539F\u8F6C\u5165\u4E1C\u5357\u5C71\u8C37\uFF0C\u5730\u70ED\u6696\u533A\u5206\u6563\u51FA\u73B0"
      },
      "ROAD-08": {
        "from": "REG-13",
        "to": "REG-14",
        "description": "\u5C71\u5730\u5357\u4E0B\uFF0C\u518D\u8F6C\u5165\u4E1C\u90E8\u4F4E\u5730\u4E0E\u5D16\u5CB8"
      },
      "ROAD-09": {
        "from": "REG-03",
        "to": "REG-07",
        "description": "\u5546\u8DEF\u3001\u5C71\u53E3\u4E0E\u77FF\u4E1A\u57CE\u9547"
      },
      "ROAD-10": {
        "from": "REG-07",
        "to": "REG-06",
        "description": "\u5C71\u5730\u7EB5\u5411\u9053\u8DEF\uFF0C\u907F\u514D\u91CD\u590D\u56DE\u5230\u897F\u90E8\u5E73\u539F"
      },
      "ROAD-11": {
        "from": "REG-07",
        "to": "REG-10",
        "description": "\u8D8A\u8FC7\u5C71\u53E3\uFF0C\u9010\u6E10\u8FDB\u5165\u80CC\u98CE\u5E72\u5730"
      },
      "ROAD-12": {
        "from": "REG-10",
        "to": "REG-13",
        "description": "\u53E4\u9053\u4E95\u7AD9\u63A5\u74E6\u8428\u6069\u5357\u90E8\u8C37\u53E3"
      },
      "ROAD-13": {
        "from": "REG-04",
        "to": "REG-08",
        "description": "\u6CBF\u6D77\u9053\u8DEF\u8FDB\u5165\u6E7F\u6DA6\u6797\u5730\uFF0C\u6CB3\u53E3\u9700\u6E21\u8239"
      },
      "ROAD-14": {
        "from": "REG-08",
        "to": "REG-09",
        "description": "\u7ED5\u8FC7\u5C71\u8109\u5357\u7AEF\uFF0C\u6CBF\u6C34\u7F51\u8FDB\u5165\u6E56\u7FA4"
      },
      "ROAD-15": {
        "from": "REG-07",
        "to": "REG-09",
        "description": "\u5C71\u8C37\u4E0B\u884C\uFF1B\u90E8\u5206\u6CB3\u6BB5\u53EF\u6362\u8239\uFF0C\u4E0D\u5047\u5B9A\u5168\u7A0B\u901A\u822A"
      },
      "ROAD-16": {
        "from": "REG-09",
        "to": "REG-11",
        "description": "\u6E56\u533A\u4E1C\u7F18\u3001\u704C\u6E89\u57CE\u9547\u3001\u5E72\u8349\u5730\u518D\u5230\u7EFF\u6D32"
      },
      "ROAD-17": {
        "from": "REG-10",
        "to": "REG-11",
        "description": "\u8352\u539F\u4E95\u7AD9\u4E0E\u6C99\u6F20\u5317\u7F18\u5546\u8DEF"
      },
      "ROAD-18": {
        "from": "REG-11",
        "to": "REG-14",
        "description": "\u79BB\u5F00\u6C99\u4E18\uFF0C\u7A7F\u8FC7\u53F0\u5730\u548C\u96FE\u5730\u8FDB\u5165\u5D16\u5CB8\u540E\u65B9"
      },
      "ROAD-19": {
        "from": "REG-04",
        "to": "REG-09",
        "description": "\u6CBF\u5357\u90E8\u666E\u901A\u6D77\u5CB8\u822A\u884C\uFF0C\u518D\u7ECF\u6E56\u533A\u51FA\u6C34\u6CB3\u5165\u6E56\uFF1B\u7ED5\u8FC7\u68EE\u6797\u9646\u8DEF\u4F46\u5E76\u975E\u66F4\u77ED"
      }
    },
    "names": {
      "REG-01": "\u7EF4\u5C14\u767B\u6CB3\u8C37",
      "REG-02": "\u585E\u4F26\u8FBE\u4E18\u9675",
      "REG-03": "\u963F\u5C14\u7EF4\u514B",
      "REG-04": "\u5361\u5FB7\u6E29\u6D77\u6E7E",
      "REG-05": "\u970D\u5C14\u4E39\u5E73\u539F",
      "REG-06": "\u5E03\u96F7\u5361\u9AD8\u5730",
      "REG-07": "\u675C\u5C14\u6587\u5C71\u8109",
      "REG-08": "\u7EF4\u65AF\u5361\u68EE\u6797",
      "REG-09": "\u6D1B\u65AF\u6587\u6E56\u533A",
      "REG-10": "\u57C3\u65AF\u51EF\u5C14\u8352\u539F",
      "REG-11": "\u7D22\u62C9\u6069\u6C99\u6D77",
      "REG-12": "\u8BFA\u5C14\u7EF4\u514B\u51BB\u539F",
      "REG-13": "\u74E6\u8428\u6069\u706B\u5C71\u533A",
      "REG-14": "\u827E\u65AF\u5854\u6069\u5D16\u5CB8",
      "LOC-VIR-001": "\u8FBE\u4F26\u798F\u5FB7",
      "LOC-VIR-002": "\u7EF4\u65AF\u7279\u65C5\u5E97",
      "LOC-VIR-003": "\u8FBE\u4F26\u798F\u5FB7\u6CB3\u5E02\u4E0E\u7801\u5934",
      "LOC-VIR-004": "\u683C\u4F26\u4FEE\u5177\u94FA",
      "LOC-VIR-005": "\u79D1\u5C14\u6587\u77F3\u6865",
      "LOC-VIR-006": "\u963F\u65AF\u7279\u5C14\u65E7\u95F8\u4E0E\u6C34\u5ECA",
      "LOC-VIR-007": "\u6885\u91CC\u5B89\u6751",
      "LOC-VIR-008": "\u96F7\u6587\u7EB3",
      "LOC-VIR-009": "\u8FBE\u4F26\u798F\u5FB7\u5192\u9669\u5BB6\u534F\u4F1A",
      "LOC-SER-001": "\u8D1D\u5C14\u8499\u7279",
      "LOC-SER-002": "\u8D1D\u5C14\u8499\u7279\u5192\u9669\u5BB6\u534F\u4F1A",
      "LOC-SER-003": "\u83F2\u4F26\u5E84\u56ED",
      "LOC-SER-004": "\u5965\u96F7\u65AF\u82B1\u6D77",
      "LOC-SER-005": "\u7F57\u745F\u6069\u5821",
      "LOC-SER-006": "\u7EF4\u6069\u5BA2\u820D",
      "LOC-ALV-001": "\u963F\u5C14\u7EF4\u514B\u81EA\u7531\u5E02",
      "LOC-ALV-002": "\u963F\u5C14\u7EF4\u514B\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "LOC-ALV-003": "\u591A\u4F26\u8857",
      "LOC-ALV-004": "\u963F\u4F26\u8428\u6D74\u573A",
      "LOC-ALV-005": "\u7EF4\u7279\u62C9\u6865\u7FA4",
      "LOC-ALV-006": "\u6D1B\u6885\u65AF\u65E7\u8857",
      "LOC-CAD-001": "\u8D1D\u8428\u5C14\u6E2F",
      "LOC-CAD-002": "\u8D1D\u8428\u5C14\u6E2F\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "LOC-CAD-003": "\u9A6C\u96F7\u65AF\u8239\u575E",
      "LOC-CAD-004": "\u5854\u5C14\u8428\u5C9B",
      "LOC-CAD-005": "\u57C3\u65AF\u4F26\u6D77\u8680\u6D1E",
      "LOC-CAD-006": "\u7EF4\u8428\u6069\u65E7\u5824\u9053",
      "LOC-HOR-001": "\u4E4C\u5C14\u8FBE\u514B",
      "LOC-HOR-002": "\u4E4C\u5C14\u8FBE\u514B\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "LOC-HOR-003": "\u5361\u5C14\u7EB3\u96C6\u5E02",
      "LOC-HOR-004": "\u591A\u62C9\u6069\u7ADE\u6280\u573A",
      "LOC-HOR-005": "\u51EF\u5C14\u8428\u77F3\u73AF",
      "LOC-HOR-006": "\u5854\u4F26\u6CB3\u6E21\u573A",
      "LOC-HOR-007": "\u7EB3\u7EF4\u5C14\u5824\u7267\u533A",
      "LOC-HOR-008": "\u8428\u96F7\u514B\u65C5\u820D",
      "SHOP-HOR-001": "\u8FBE\u5C14\u514B\u5175\u7532\u94FA",
      "SHOP-HOR-002": "\u739B\u857E\u838E\u836F\u5242\u6240",
      "SHOP-HOR-003": "\u6C83\u4F26\u65C5\u884C\u7528\u54C1\u5E97",
      "SHOP-HOR-004": "\u8428\u6069\u978D\u5177\u4E0E\u9A6C\u53A9",
      "SHOP-HOR-005": "\u4F0A\u745F\u62C9\u4E66\u5377\u94FA",
      "SHOP-HOR-006": "\u83AB\u4F26\u88C1\u8863\u574A",
      "SHOP-HOR-007": "\u54C8\u7EF4\u514B\u8336\u70B9\u5C4B",
      "SHOP-HOR-008": "\u53E4\u5C14\u8FBE\u7B26\u6587\u5DE5\u623F",
      "SHOP-HOR-009": "\u745F\u62C9\u6069\u9B54\u6CD5\u7528\u54C1\u884C",
      "SHOP-HOR-010": "\u8FBE\u7EF4\u5A1C\u533B\u9986",
      "LOC-BRE-001": "\u79D1\u5C14\u74E6\u6069",
      "LOC-BRE-002": "\u79D1\u5C14\u74E6\u6069\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "LOC-BRE-003": "\u8D1D\u4F26\u5FB7\u5ECA\u5E02",
      "LOC-BRE-004": "\u7EF4\u5FB7\u62C9\u5347\u964D\u7AD9",
      "LOC-BRE-005": "\u827E\u745E\u745F\u5C14\u53E4\u57CE",
      "LOC-BRE-006": "\u8D6B\u5C14\u739B\u89C2\u4E91\u53F0",
      "LOC-BRE-007": "\u514B\u96F7\u65AF\u5C71\u9053",
      "LOC-BRE-008": "\u591A\u6069\u9A7F\u820D",
      "SHOP-BRE-001": "\u8BFA\u8299\u62C9\u7EC7\u574A",
      "SHOP-BRE-002": "\u963F\u4F26\u5FB7\u767B\u5C71\u94FA",
      "SHOP-BRE-003": "\u585E\u5F17\u91CC\u836F\u8349\u94FA",
      "SHOP-BRE-004": "\u5965\u4F26\u661F\u4EEA\u94FA",
      "SHOP-BRE-005": "\u51EF\u65AF\u987F\u7B26\u6587\u706F\u4F5C\u574A",
      "SHOP-BRE-006": "\u5E03\u4F26\u6258\u9762\u5305\u623F",
      "SHOP-BRE-007": "\u7EF4\u62C9\u514B\u72EE\u9E6B\u9A7F\u573A",
      "SHOP-BRE-008": "\u8D6B\u83B1\u96C5\u65E7\u7269\u4E0E\u62D3\u5370\u94FA",
      "SHOP-BRE-009": "\u52A0\u96F7\u65AF\u94C1\u5320\u4E0E\u5175\u7532\u94FA",
      "SHOP-BRE-010": "\u4F69\u6797\u6742\u8D27\u94FA",
      "SHOP-BRE-011": "\u57C3\u8499\u8F66\u9A6C\u9662",
      "SHOP-BRE-012": "\u7EF4\u5B89\u5A1C\u9B54\u6CD5\u7528\u54C1\u94FA",
      "LOC-DUR-001": "\u6258\u5C14\u6587",
      "LOC-DUR-002": "\u6258\u5C14\u6587\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "LOC-DUR-003": "\u54C8\u5FB7\u6797\u77F3\u5385",
      "LOC-DUR-004": "\u745F\u62C9\u8FEA\u6069\u6676\u6E56",
      "LOC-DUR-005": "\u8D1D\u6D1B\u514B\u5DE5\u574A\u8857",
      "LOC-DUR-006": "\u4F0A\u5C14\u8FBE\u6E29\u6CC9\u9662",
      "LOC-DUR-007": "\u5361\u5C14\u5FB7\u65E7\u77FF\u9053",
      "LOC-DUR-008": "\u5965\u5C14\u82AC\u5C71\u53E3",
      "LOC-DUR-009": "\u6797\u5FB7\u65C5\u820D",
      "SHOP-DUR-001": "\u5E03\u4F26\u5A1C\u5175\u7532\u574A",
      "SHOP-DUR-002": "\u591A\u7EF4\u514B\u7B26\u6587\u523B\u5370\u6240",
      "SHOP-DUR-003": "\u7EF4\u745F\u6676\u6750\u94FA",
      "SHOP-DUR-004": "\u83B1\u59B2\u70BC\u91D1\u5C4B",
      "SHOP-DUR-005": "\u7D22\u4F26\u6D4B\u7ED8\u94FA",
      "SHOP-DUR-006": "\u54C8\u5FB7\u6797\u7EDE\u5177\u94FA",
      "SHOP-DUR-007": "\u8D1D\u62C9\u77F3\u9970\u94FA",
      "SHOP-DUR-008": "\u5965\u5FB7\u9762\u5305\u4E0E\u7096\u9505\u5E97",
      "SHOP-DUR-009": "\u7EF4\u65AF\u7279\u6069\u6742\u8D27\u94FA",
      "SHOP-DUR-010": "\u827E\u8FBE\u5C14\u88C1\u8863\u4E0E\u76AE\u9769\u94FA",
      "SHOP-DUR-011": "\u535A\u4F26\u8F66\u9A6C\u9662",
      "SHOP-DUR-012": "\u827E\u857E\u5A1C\u533B\u9986",
      "SHOP-DUR-013": "\u83AB\u5C14\u767B\u5BA2\u820D",
      "SHOP-DUR-014": "\u5FB7\u6797\u6742\u8D27\u94FA",
      "SHOP-DUR-015": "\u8299\u857E\u5A05\u88C1\u8863\u4E0E\u9774\u94FA",
      "SHOP-DUR-016": "\u8D1D\u5C14\u5A1C\u836F\u5242\u4E0E\u8BCA\u7597\u6240",
      "SHOP-DUR-017": "\u6258\u6797\u5175\u7532\u574A",
      "SHOP-DUR-018": "\u675C\u5170\u5FB7\u4E66\u5377\u94FA",
      "SHOP-DUR-019": "\u683C\u96F7\u59C6\u9A6E\u8FD0\u9662",
      "LOC-VIS-001": "\u5E03\u4F26\u7EF4\u5C14",
      "LOC-VIS-002": "\u5E03\u4F26\u7EF4\u5C14\u5192\u9669\u5BB6\u534F\u4F1A",
      "LOC-VIS-003": "\u5965\u514B\u4F26\u6728\u5ECA\u5E02",
      "LOC-VIS-004": "\u57C3\u5C14\u5FB7\u6797\u5DE8\u6811",
      "LOC-VIS-005": "\u745F\u7EF4\u5C14\u6839\u62F1\u9053",
      "LOC-VIS-006": "\u6258\u5170\u65E7\u836F\u5703",
      "LOC-VIS-007": "\u745E\u65AF\u6797\u6811\u8102\u56ED",
      "LOC-VIS-008": "\u8D1D\u4F26\u6797\u820D",
      "LOC-VIS-009": "\u74E6\u4F26\u6EAA\u8425\u5730",
      "SHOP-VIS-001": "\u5E03\u96F7\u6069\u6728\u5668\u574A",
      "SHOP-VIS-002": "\u8D39\u6069\u8349\u836F\u94FA",
      "SHOP-VIS-003": "\u96F7\u7279\u6811\u8102\u4E0E\u9999\u6599\u5E97",
      "SHOP-VIS-004": "\u8BFA\u62C9\u6597\u7BF7\u4E0E\u9774\u5E97",
      "SHOP-VIS-005": "\u5F17\u5170\u5FB7\u6797\u5177\u94FA",
      "SHOP-VIS-006": "\u5E2D\u6069\u6807\u672C\u4E0E\u4E66\u5377\u94FA",
      "SHOP-VIS-007": "\u5361\u7EF4\u5C14\u5F13\u5320\u94FA",
      "SHOP-VIS-008": "\u963F\u8389\u5A05\u6728\u9970\u94FA",
      "SHOP-VIS-009": "\u7A46\u6069\u8611\u83C7\u98DF\u94FA",
      "SHOP-VIS-010": "\u5DF4\u6D1B\u94C1\u5320\u4E0E\u5175\u7532\u94FA",
      "SHOP-VIS-011": "\u827E\u9ED8\u91CC\u9A6C\u53A9",
      "SHOP-VIS-012": "\u745F\u7433\u9B54\u6CD5\u7528\u54C1\u94FA",
      "SHOP-VIS-013": "\u5B89\u5FB7\u8389\u4E9A\u533B\u9986",
      "LOC-LOS-001": "\u6885\u745E\u767B",
      "LOC-LOS-002": "\u6885\u745E\u767B\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "LOC-LOS-003": "\u83F2\u5965\u62C9\u821F\u5E02",
      "LOC-LOS-004": "\u7EF4\u7EB3\u5C14\u6E56",
      "LOC-LOS-005": "\u5965\u857E\u6069\u6D6E\u5C9B\u7FA4",
      "LOC-LOS-006": "\u74E6\u96F7\u8428\u6C89\u57CE",
      "LOC-LOS-007": "\u5361\u585E\u62C9\u9547",
      "LOC-LOS-008": "\u585E\u62C9\u6587\u7011\u5E03",
      "LOC-LOS-009": "\u827E\u6587\u8FBE\u8239\u5C4B\u6CCA\u533A",
      "LOC-LOS-010": "\u83AB\u5170\u6E56\u5CB8\u5BA2\u6808",
      "LOC-LOS-011": "\u4F0A\u745F\u6587\u7814\u4E60\u9662",
      "LOC-LOS-012": "\u4F0A\u745F\u6587\u6C34\u5EAD\u7EC3\u4E60\u573A",
      "SHOP-LOS-001": "\u5854\u7EF4\u5A05\u8239\u5177\u4E0E\u79DF\u821F\u884C",
      "SHOP-LOS-002": "\u8D5B\u7433\u836F\u5242\u94FA",
      "SHOP-LOS-003": "\u963F\u52D2\u65AF\u7B26\u6587\u4F5C\u574A",
      "SHOP-LOS-004": "\u8D1D\u4E3D\u65AF\u5E03\u5E06\u4E0E\u8863\u94FA",
      "SHOP-LOS-005": "\u5F17\u96F7\u6069\u6E14\u5177\u94FA",
      "SHOP-LOS-006": "\u5362\u6587\u5730\u56FE\u4E0E\u4E66\u5377\u5E97",
      "SHOP-LOS-007": "\u5E03\u6797\u8BFA\u6F5C\u6C34\u5668\u5177\u5E97",
      "SHOP-LOS-008": "\u83B1\u8BFA\u9676\u5668\u94FA",
      "SHOP-LOS-009": "\u7EF4\u62C9\u8D1D\u73E0\u5B9D\u94FA",
      "SHOP-LOS-010": "\u745E\u5A1C\u6E56\u9C9C\u98DF\u9986",
      "SHOP-LOS-011": "\u57C3\u4F26\u5FB7\u5175\u7532\u94FA",
      "SHOP-LOS-012": "\u83AB\u91CC\u65AF\u6742\u8D27\u94FA",
      "SHOP-LOS-013": "\u4E39\u7EF4\u5C14\u8F66\u9A6C\u9662",
      "SHOP-LOS-014": "\u5965\u8389\u5A1C\u533B\u9986",
      "SHOP-LOS-015": "\u5E0C\u5C14\u6587\u9B54\u6CD5\u6750\u6599\u94FA",
      "SHOP-LOS-016": "\u827E\u65AF\u6797\u5BA2\u820D",
      "SHOP-LOS-017": "\u5965\u7279\u94C1\u5320\u94FA",
      "SHOP-LOS-018": "\u9A6C\u4F26\u6742\u8D27\u94FA",
      "SHOP-LOS-019": "\u8482\u5C14\u5A1C\u836F\u5242\u4E0E\u8BCA\u7597\u6240",
      "SHOP-LOS-020": "\u7EF4\u8FBE\u4E66\u5377\u4E0E\u9B54\u6CD5\u5C0F\u94FA",
      "SHOP-LOS-021": "\u51EF\u745E\u8863\u9774\u94FA",
      "LOC-ESK-001": "\u5FB7\u5170\u745F",
      "LOC-ESK-002": "\u5FB7\u5170\u745F\u5192\u9669\u5BB6\u534F\u4F1A",
      "LOC-ESK-003": "\u7EF4\u4F26\u5FB7\u9A7F\u5E02",
      "LOC-ESK-004": "\u5361\u6D1B\u6E29\u5BA2\u820D",
      "LOC-ESK-005": "\u963F\u65AF\u5361\u4F26\u9636\u57CE",
      "LOC-ESK-006": "\u7EF4\u96F7\u6069\u65AD\u5D16",
      "LOC-ESK-007": "\u8BFA\u7EF4\u6069\u4E95\u7AD9",
      "LOC-ESK-008": "\u8D6B\u7F57\u6069\u65E7\u6CB3\u5E8A",
      "LOC-ESK-009": "\u74E6\u5C14\u5FB7\u89C2\u666F\u5761",
      "SHOP-ESK-001": "\u827E\u5FB7\u8499\u5175\u7532\u94FA",
      "SHOP-ESK-002": "\u5854\u4F26\u65AF\u884C\u65C5\u6742\u8D27\u94FA",
      "SHOP-ESK-003": "\u7EF4\u5C14\u5A1C\u8863\u9774\u94FA",
      "SHOP-ESK-004": "\u7F57\u8428\u7433\u836F\u5242\u94FA",
      "SHOP-ESK-005": "\u57C3\u91CC\u5B89\u533B\u9986",
      "SHOP-ESK-006": "\u585E\u7EF4\u514B\u9B54\u6CD5\u7528\u54C1\u94FA",
      "SHOP-ESK-007": "\u5965\u5FB7\u5170\u5730\u56FE\u4E0E\u4E66\u5377\u94FA",
      "SHOP-ESK-008": "\u683C\u96F7\u6E29\u8F66\u9A6C\u9662",
      "SHOP-ESK-009": "\u8D1D\u5C14\u8FBE\u9762\u5305\u4E0E\u7096\u8089\u94FA",
      "SHOP-ESK-010": "\u7C73\u857E\u65AF\u9676\u5668\u94FA",
      "SHOP-ESK-011": "\u591A\u6797\u8F66\u8F6E\u5DE5\u574A",
      "SHOP-ESK-012": "\u5F17\u96F7\u5FB7\u77F3\u96D5\u94FA",
      "SHOP-ESK-013": "\u8BFA\u7EF4\u6069\u4E95\u7AD9\u8865\u7ED9\u95F4",
      "LOC-SOL-001": "\u8428\u7EF4\u5170",
      "LOC-SOL-002": "\u8428\u7EF4\u5170\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "LOC-SOL-003": "\u83B1\u745F\u6069\u591C\u5E02",
      "LOC-SOL-004": "\u74E6\u4F26\u5A1C\u5EAD\u9662\u5BA2\u6808",
      "LOC-SOL-005": "\u963F\u7EF4\u745F\u5C14\u73BB\u7483\u5CE1\u8C37",
      "LOC-SOL-006": "\u5965\u745E\u6069\u6C99\u4E18",
      "LOC-SOL-007": "\u6CD5\u5C14\u745F\u5DE8\u9AB8",
      "LOC-SOL-008": "\u745F\u5170\u5FB7\u6C34\u5EAD",
      "LOC-SOL-009": "\u79D1\u745E\u6069\u7EFF\u6D32\u6751",
      "LOC-SOL-010": "\u57C3\u5C14\u6E29\u5546\u961F\u9662",
      "SHOP-SOL-001": "\u5DF4\u96F7\u6069\u5175\u7532\u94FA",
      "SHOP-SOL-002": "\u79D1\u6797\u5FB7\u6742\u8D27\u94FA",
      "SHOP-SOL-003": "\u7EF4\u8428\u745E\u8863\u6599\u4E0E\u67D3\u574A",
      "SHOP-SOL-004": "\u8BFA\u7EF4\u5A1C\u76AE\u9769\u4E0E\u9774\u94FA",
      "SHOP-SOL-005": "\u4F0A\u745F\u7433\u836F\u5242\u94FA",
      "SHOP-SOL-006": "\u739B\u857E\u5A1C\u533B\u9986",
      "SHOP-SOL-007": "\u535A\u6797\u6CD5\u5668\u4E0E\u7B26\u6587\u5DE5\u574A",
      "SHOP-SOL-008": "\u5965\u96F7\u5FB7\u9B54\u6CD5\u6750\u6599\u884C",
      "SHOP-SOL-009": "\u4F69\u91CC\u6069\u4E66\u5377\u4E0E\u6284\u5199\u6240",
      "SHOP-SOL-010": "\u79D1\u6069\u8F66\u9A6C\u4E0E\u9A7C\u961F\u884C",
      "SHOP-SOL-011": "\u827E\u857E\u5A05\u73BB\u7483\u5DE5\u574A",
      "SHOP-SOL-012": "\u745F\u7EF4\u5A1C\u9999\u6599\u94FA",
      "SHOP-SOL-013": "\u82AC\u5FB7\u5C14\u70E4\u997C\u4E0E\u7096\u9505\u5E97",
      "SHOP-SOL-014": "\u4F0A\u83B1\u65AF\u51C9\u996E\u4E0E\u679C\u812F\u94FA",
      "SHOP-SOL-015": "\u5854\u745E\u5C14\u94F6\u9970\u94FA",
      "SHOP-SOL-016": "\u6885\u8FBE\u6742\u8D27\u94FA",
      "SHOP-SOL-017": "\u827E\u7433\u5FB7\u5BA2\u820D",
      "LOC-NOR-001": "\u8D6B\u5C14\u65AF\u5854\u5FB7",
      "LOC-NOR-002": "\u8D6B\u5C14\u65AF\u5854\u5FB7\u5192\u9669\u5BB6\u534F\u4F1A",
      "LOC-NOR-003": "\u5E03\u5170\u7279\u51AC\u5385",
      "LOC-NOR-004": "\u827E\u683C\u59AE\u65C5\u820D",
      "LOC-NOR-005": "\u4F0A\u5C14\u74E6\u6069\u6E56",
      "LOC-NOR-006": "\u7EF4\u65AF\u5854\u89C2\u666F\u53F0",
      "LOC-NOR-007": "\u6258\u5C14\u8D5B\u6069\u5DE8\u77F3\u5ECA",
      "LOC-NOR-008": "\u8FBE\u5C14\u7EB3\u6CB3\u6BB5",
      "LOC-NOR-009": "\u827E\u6587\u8D6B\u907F\u98CE\u9A7F",
      "LOC-NOR-010": "\u7F57\u5FB7\u5170\u7EC7\u4F5C\u9662",
      "SHOP-NOR-001": "\u54C8\u5C14\u6587\u5175\u7532\u94FA",
      "SHOP-NOR-002": "\u57C3\u5FB7\u62C9\u884C\u65C5\u6742\u8D27\u94FA",
      "SHOP-NOR-003": "\u7F57\u5FB7\u5170\u7EC7\u8863\u574A",
      "SHOP-NOR-004": "\u8D1D\u4E3D\u59B2\u76AE\u9769\u4E0E\u9774\u94FA",
      "SHOP-NOR-005": "\u8D5B\u5C14\u6E29\u836F\u5242\u94FA",
      "SHOP-NOR-006": "\u4F0A\u857E\u8FBE\u533B\u9986",
      "SHOP-NOR-007": "\u5965\u5C14\u6587\u9B54\u6CD5\u7528\u54C1\u94FA",
      "SHOP-NOR-008": "\u6885\u5C14\u7279\u4E66\u5377\u94FA",
      "SHOP-NOR-009": "\u4E4C\u5C14\u59B2\u7EC7\u5177\u4E0E\u7EBF\u6750\u94FA",
      "SHOP-NOR-010": "\u57C3\u65AF\u7279\u96EA\u6A47\u4E0E\u8F66\u5177\u574A",
      "SHOP-NOR-011": "\u79D1\u5C14\u66FC\u8F66\u9A6C\u9662",
      "SHOP-NOR-012": "\u683C\u857E\u5854\u70DF\u718F\u4E0E\u70ED\u6C64\u94FA",
      "SHOP-NOR-013": "\u963F\u4F26\u7279\u6728\u5668\u4E0E\u68CB\u5177\u94FA",
      "SHOP-NOR-014": "\u827E\u6587\u8D6B\u9A7F\u7AD9\u8865\u7ED9\u95F4",
      "LOC-VAS-001": "\u5965\u5C14\u745F\u59C6",
      "LOC-VAS-002": "\u5965\u5C14\u745F\u59C6\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "LOC-VAS-003": "\u8D39\u4F26\u9676\u5E02",
      "LOC-VAS-004": "\u7F57\u8587\u5A1C\u6E29\u6CC9\u9662",
      "LOC-VAS-005": "\u739B\u745F\u6069\u6E29\u5BA4\u7FA4",
      "LOC-VAS-006": "\u5E03\u96F7\u6069\u6751",
      "LOC-VAS-007": "\u5361\u5C14\u7EF4\u65AF\u706B\u5C71",
      "LOC-VAS-008": "\u4F0A\u65AF\u5FB7\u62C9\u9ED1\u5CA9\u9636\u5730",
      "LOC-VAS-009": "\u5854\u7EF4\u6069\u6696\u6EAA",
      "LOC-VAS-010": "\u7EF4\u6D1B\u65AF\u5CA9\u53F0",
      "LOC-VAS-011": "\u5FB7\u5C14\u6587\u89C2\u706B\u53F0",
      "SHOP-VAS-001": "\u5361\u65AF\u987F\u5175\u7532\u94FA",
      "SHOP-VAS-002": "\u8D39\u5C14\u7EB3\u6742\u8D27\u94FA",
      "SHOP-VAS-003": "\u4F0A\u5FB7\u7433\u88C1\u8863\u574A",
      "SHOP-VAS-004": "\u7F57\u6069\u7279\u76AE\u9769\u4E0E\u9774\u94FA",
      "SHOP-VAS-005": "\u6885\u7EF4\u96C5\u836F\u5242\u94FA",
      "SHOP-VAS-006": "\u827E\u5C14\u5A1C\u533B\u9986",
      "SHOP-VAS-007": "\u5965\u4F26\u65AF\u9B54\u6CD5\u7528\u54C1\u4E0E\u4FEE\u62A4\u94FA",
      "SHOP-VAS-008": "\u5FB7\u7EF4\u6069\u4E66\u5377\u4E0E\u5730\u56FE\u94FA",
      "SHOP-VAS-009": "\u5DF4\u5C14\u5FB7\u8F66\u9A6C\u9662",
      "SHOP-VAS-010": "\u7EF4\u5965\u5A1C\u9676\u574A",
      "SHOP-VAS-011": "\u79D1\u857E\u5A05\u9762\u5305\u4E0E\u7096\u9505\u94FA",
      "SHOP-VAS-012": "\u739B\u745F\u6069\u56ED\u5703\u94FA",
      "SHOP-VAS-013": "\u963F\u7EF4\u5FB7\u77F3\u9970\u94FA",
      "SHOP-VAS-014": "\u8428\u857E\u5C14\u917F\u9020\u5C4B",
      "SHOP-VAS-015": "\u5E03\u96F7\u6069\u6751\u6742\u8D27\u95F4",
      "SHOP-VAS-016": "\u970D\u6069\u5BA2\u820D",
      "LOC-EST-001": "\u54C8\u5C14\u7EF4\u65AF",
      "LOC-EST-002": "\u54C8\u5C14\u7EF4\u65AF\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "LOC-EST-003": "\u827E\u5FB7\u6E29\u62F1\u5ECA",
      "LOC-EST-004": "\u739B\u8482\u5C14\u8FBE\u65C5\u9986",
      "LOC-EST-005": "\u7EF4\u5C14\u745F\u9547",
      "LOC-EST-006": "\u7EF4\u5C14\u745F\u5192\u9669\u5BB6\u534F\u4F1A",
      "LOC-EST-007": "\u7F57\u745F\u7433\u5BA2\u820D",
      "LOC-EST-008": "\u827E\u6587\u91CC\u7267\u573A",
      "LOC-EST-009": "\u6CD5\u5C14\u6E29\u65E7\u5821",
      "LOC-EST-010": "\u8D1D\u4F26\u7EB3\u6E2F\u6751",
      "LOC-EST-011": "\u83B1\u65AF\u6587\u6D77\u5D16",
      "LOC-EST-012": "\u4F0A\u65AF\u5854\u7EF4\u5C14\u5CAC",
      "LOC-EST-013": "\u5965\u5C14\u5FB7\u89C2\u666F\u9636\u5730",
      "LOC-EST-014": "\u57C3\u5F17\u987F\u5EAD\u9662",
      "LOC-EST-015": "\u96F7\u5FB7\u6E29\u5267\u9662",
      "SHOP-EST-001": "\u683C\u96F7\u6E29\u5175\u7532\u884C",
      "SHOP-EST-002": "\u8D1D\u5FB7\u91CC\u514B\u6742\u8D27\u884C",
      "SHOP-EST-003": "\u857E\u7F07\u5A05\u88C1\u8863\u574A",
      "SHOP-EST-004": "\u963F\u5C14\u767B\u76AE\u9769\u4E0E\u9774\u94FA",
      "SHOP-EST-005": "\u57C3\u4E3D\u838E\u836F\u5242\u884C",
      "SHOP-EST-006": "\u6E29\u5FB7\u91CC\u533B\u9986",
      "SHOP-EST-007": "\u585E\u5FB7\u6E29\u6CD5\u5668\u4E0E\u6750\u6599\u884C",
      "SHOP-EST-008": "\u7EF4\u514B\u4E66\u5377\u94FA",
      "SHOP-EST-009": "\u96F7\u6069\u8F66\u9A6C\u9662",
      "SHOP-EST-010": "\u8D1D\u5170\u59AE\u9762\u5305\u4E0E\u54B8\u6D3E\u94FA",
      "SHOP-EST-011": "\u6885\u7F57\u6E29\u4E50\u5668\u574A",
      "SHOP-EST-012": "\u963F\u857E\u96C5\u7682\u9999\u94FA",
      "SHOP-EST-013": "\u5965\u65AF\u987F\u88C5\u8BA2\u4E0E\u5BC4\u4FE1\u6240",
      "SHOP-EST-014": "\u8D6B\u7EF4\u6069\u91D1\u94F6\u5DE5\u574A",
      "SHOP-EST-015": "\u6258\u96F7\u5C14\u5175\u7532\u4E0E\u4FEE\u5177\u94FA",
      "SHOP-EST-016": "\u57C3\u5C14\u59B2\u6742\u8D27\u94FA",
      "SHOP-EST-017": "\u7C73\u857E\u7279\u8863\u9774\u574A",
      "SHOP-EST-018": "\u827E\u8587\u7433\u836F\u5242\u4E0E\u8BCA\u7597\u6240",
      "SHOP-EST-019": "\u745F\u5FB7\u91CC\u9B54\u6CD5\u5C0F\u94FA",
      "SHOP-EST-020": "\u8D39\u5185\u5C14\u4E66\u5377\u4E0E\u5730\u56FE\u94FA",
      "SHOP-EST-021": "\u5965\u5170\u5FB7\u8F66\u9A6C\u9662",
      "SHOP-EST-022": "\u5E03\u857E\u5A1C\u6C64\u5C4B",
      "SHOP-EST-023": "\u79D1\u96F7\u6069\u6728\u4F5C\u94FA",
      "SHOP-EST-024": "\u827E\u6587\u91CC\u5976\u916A\u4E0E\u6BDB\u7EBA\u94FA",
      "SHOP-EST-025": "\u8D1D\u4F26\u7EB3\u6E2F\u6751\u6742\u8D27\u94FA",
      "SHOP-EST-026": "\u591A\u857E\u6069\u5BA2\u820D",
      "ROAD-01": "\u7EF4\u5C14\u767B\u6CB3\u8C37\u81F3\u585E\u4F26\u8FBE\u4E18\u9675\u9053\u8DEF",
      "ROAD-02": "\u585E\u4F26\u8FBE\u4E18\u9675\u81F3\u5361\u5FB7\u6E29\u6D77\u6E7E\u9053\u8DEF",
      "ROAD-03": "\u7EF4\u5C14\u767B\u6CB3\u8C37\u81F3\u963F\u5C14\u7EF4\u514B\u9053\u8DEF",
      "ROAD-04": "\u963F\u5C14\u7EF4\u514B\u81F3\u970D\u5C14\u4E39\u5E73\u539F\u9053\u8DEF",
      "ROAD-05": "\u970D\u5C14\u4E39\u5E73\u539F\u81F3\u5E03\u96F7\u5361\u9AD8\u5730\u9053\u8DEF",
      "ROAD-06": "\u5E03\u96F7\u5361\u9AD8\u5730\u81F3\u8BFA\u5C14\u7EF4\u514B\u51BB\u539F\u9053\u8DEF",
      "ROAD-07": "\u8BFA\u5C14\u7EF4\u514B\u51BB\u539F\u81F3\u74E6\u8428\u6069\u706B\u5C71\u533A\u9053\u8DEF",
      "ROAD-08": "\u74E6\u8428\u6069\u706B\u5C71\u533A\u81F3\u827E\u65AF\u5854\u6069\u5D16\u5CB8\u9053\u8DEF",
      "ROAD-09": "\u963F\u5C14\u7EF4\u514B\u81F3\u675C\u5C14\u6587\u5C71\u8109\u9053\u8DEF",
      "ROAD-10": "\u675C\u5C14\u6587\u5C71\u8109\u81F3\u5E03\u96F7\u5361\u9AD8\u5730\u9053\u8DEF",
      "ROAD-11": "\u675C\u5C14\u6587\u5C71\u8109\u81F3\u57C3\u65AF\u51EF\u5C14\u8352\u539F\u9053\u8DEF",
      "ROAD-12": "\u57C3\u65AF\u51EF\u5C14\u8352\u539F\u81F3\u74E6\u8428\u6069\u706B\u5C71\u533A\u9053\u8DEF",
      "ROAD-13": "\u5361\u5FB7\u6E29\u6D77\u6E7E\u81F3\u7EF4\u65AF\u5361\u68EE\u6797\u9053\u8DEF",
      "ROAD-14": "\u7EF4\u65AF\u5361\u68EE\u6797\u81F3\u6D1B\u65AF\u6587\u6E56\u533A\u9053\u8DEF",
      "ROAD-15": "\u675C\u5C14\u6587\u5C71\u8109\u81F3\u6D1B\u65AF\u6587\u6E56\u533A\u9053\u8DEF",
      "ROAD-16": "\u6D1B\u65AF\u6587\u6E56\u533A\u81F3\u7D22\u62C9\u6069\u6C99\u6D77\u9053\u8DEF",
      "ROAD-17": "\u57C3\u65AF\u51EF\u5C14\u8352\u539F\u81F3\u7D22\u62C9\u6069\u6C99\u6D77\u9053\u8DEF",
      "ROAD-18": "\u7D22\u62C9\u6069\u6C99\u6D77\u81F3\u827E\u65AF\u5854\u6069\u5D16\u5CB8\u9053\u8DEF",
      "ROAD-19": "\u5361\u5FB7\u6E29\u6D77\u6E7E\u81F3\u6D1B\u65AF\u6587\u6E56\u533A\u9053\u8DEF",
      "SHOP-VIR-001": "\u683C\u4F26\u4FEE\u5177\u94FA",
      "SHOP-VIR-002": "\u4F69\u6069\u836F\u8349\u94FA",
      "SHOP-VIR-003": "\u963F\u5FB7\u52D2\u4E66\u94FA",
      "SHOP-VIR-004": "\u7EF4\u5170\u88C1\u7F1D\u94FA",
      "SHOP-VIR-005": "\u79D1\u6069\u884C\u65C5\u94FA",
      "SHOP-VIR-006": "\u5854\u7EF4\u514B\u9A6C\u53A9",
      "SHOP-VIR-007": "\u9A6C\u6D1B\u5C0F\u98DF\u5E97",
      "SHOP-VIR-008": "\u5E03\u4F26\u7EB3\u5175\u7532\u94FA",
      "SHOP-VIR-009": "\u57C3\u6587\u65AF\u533B\u9986",
      "SHOP-VIR-010": "\u7EF4\u745E\u5C14\u9B54\u6CD5\u7528\u54C1\u94FA",
      "SHOP-VIR-011": "\u963F\u65AF\u987F\u5175\u5668\u4E0E\u94E0\u7532\u884C",
      "SHOP-VIR-012": "\u6E29\u5FB7\u5C14\u6742\u8D27\u94FA",
      "SHOP-VIR-013": "\u5965\u5FB7\u91CC\u514B\u6CD5\u5668\u884C",
      "SHOP-VIR-014": "\u5361\u6D1B\u5A1C\u836F\u5242\u884C",
      "SHOP-VIR-015": "\u585E\u5C14\u6587\u533B\u9986",
      "SHOP-VIR-016": "\u827E\u5FB7\u91CC\u5B89\u4E66\u5377\u4E0E\u6284\u5199\u6240",
      "SHOP-VIR-017": "\u6885\u745E\u5C14\u88C1\u8863\u574A",
      "SHOP-VIR-018": "\u5E03\u7F57\u59C6\u76AE\u9769\u94FA",
      "SHOP-VIR-019": "\u7F57\u5FB7\u6E29\u8F66\u9A6C\u884C",
      "SHOP-VIR-020": "\u5965\u65AF\u7279\u65C5\u9986",
      "SHOP-VIR-021": "\u8D1D\u4F26\u65AF\u9762\u5305\u94FA",
      "SHOP-VIR-022": "\u5E03\u83B1\u5C14\u6742\u8D27\u94FA",
      "SHOP-VIR-023": "\u7C73\u857E\u5A1C\u5BA2\u820D",
      "SHOP-SER-001": "\u6885\u6D1B\u8702\u8721\u4E0E\u9999\u8349\u5E97",
      "SHOP-SER-002": "\u963F\u7EF4\u6069\u82B1\u5E97",
      "SHOP-SER-003": "\u8D6B\u65AF\u7279\u65C5\u884C\u94FA",
      "SHOP-SER-004": "\u5E03\u83B1\u6069\u88C1\u8863\u574A",
      "SHOP-SER-005": "\u8D39\u5C14\u987F\u4E66\u644A",
      "SHOP-SER-006": "\u8FBE\u7EF4\u5C14\u9A6C\u53A9",
      "SHOP-SER-007": "\u83F2\u4F26\u5E84\u56ED\u9152\u7A96",
      "SHOP-SER-008": "\u5361\u4F26\u94C1\u5320\u94FA",
      "SHOP-SER-009": "\u8FBE\u8299\u59AE\u836F\u5242\u4E0E\u8BCA\u7597\u6240",
      "SHOP-SER-010": "\u5965\u5FB7\u6587\u9B54\u6CD5\u5C0F\u94FA",
      "SHOP-ALV-001": "\u51EF\u6069\u70E4\u997C\u94FA",
      "SHOP-ALV-002": "\u74E6\u65AF\u8BD1\u5199\u94FA",
      "SHOP-ALV-003": "\u675C\u5170\u9B54\u6CD5\u6750\u6599\u884C",
      "SHOP-ALV-004": "\u5E03\u83B1\u514B\u5175\u5668\u884C",
      "SHOP-ALV-005": "\u6885\u5C14\u6587\u65E7\u4E66\u5E97",
      "SHOP-ALV-006": "\u6D1B\u7EF4\u5A1C\u836F\u5242\u94FA",
      "SHOP-ALV-007": "\u745F\u6069\u8863\u5E3D\u5E97",
      "SHOP-ALV-008": "\u827E\u7EF4\u514B\u53E4\u7269\u94FA",
      "SHOP-ALV-009": "\u8303\u6069\u5BA2\u6808",
      "SHOP-ALV-010": "\u54C8\u5C14\u767B\u6742\u8D27\u884C",
      "SHOP-ALV-011": "\u8D1D\u514B\u5C14\u8F66\u9A6C\u9662",
      "SHOP-ALV-012": "\u7EF4\u5965\u62C9\u533B\u9986",
      "SHOP-ALV-013": "\u5854\u5C14\u6587\u9644\u9B54\u5DE5\u574A",
      "SHOP-CAD-001": "\u54C8\u5FB7\u8239\u5177\u94FA",
      "SHOP-CAD-002": "\u6C83\u6069\u7EF3\u7F51\u94FA",
      "SHOP-CAD-003": "\u585E\u7EF4\u5C14\u6D77\u56FE\u5E97",
      "SHOP-CAD-004": "\u83AB\u857E\u6D77\u836F\u94FA",
      "SHOP-CAD-005": "\u7F57\u5FB7\u91CC\u514B\u8863\u94FA",
      "SHOP-CAD-006": "\u8D6B\u5C14\u6587\u7B26\u706F\u94FA",
      "SHOP-CAD-007": "\u4F69\u62C9\u8D1D\u58F3\u5DE5\u827A\u5E97",
      "SHOP-CAD-008": "\u5C24\u5229\u5A05\u9C7C\u6C64\u5E97",
      "SHOP-CAD-009": "\u5965\u5C14\u987F\u5175\u7532\u94FA",
      "SHOP-CAD-010": "\u52A0\u6587\u6742\u8D27\u94FA",
      "SHOP-CAD-011": "\u6CD5\u745E\u5C14\u9B54\u6CD5\u7528\u54C1\u5E97",
      "SHOP-CAD-012": "\u57C3\u7433\u5A1C\u533B\u9986",
      "SHOP-CAD-013": "\u5E03\u83B1\u65AF\u8F66\u9A6C\u9662",
      "SHOP-CAD-014": "\u5FB7\u91CC\u5B89\u4E66\u5377\u94FA",
      "SHOP-CAD-015": "\u7D22\u83F2\u5A05\u6742\u8D27\u5E97",
      "SHOP-CAD-016": "\u5965\u4F26\u8FBE\u5BA2\u820D",
      "SPL-001": "\u5F15\u706F\u672F",
      "SPL-002": "\u5F15\u706B\u672F",
      "SPL-003": "\u6E29\u7269\u672F",
      "SPL-014": "\u8FD1\u706F\u8C03\u5149\u672F",
      "SPL-017": "\u676F\u4E2D\u5C0F\u96EA\u672F",
      "SPL-020": "\u9762\u5305\u56DE\u9165\u672F",
      "SPL-004": "\u62C2\u5C18\u672F",
      "SPL-013": "\u7EB8\u9875\u907F\u6F6E\u672F",
      "SPL-015": "\u5E72\u723D\u978B\u889C\u672F",
      "SPL-018": "\u7406\u987A\u7EBF\u56E2\u672F",
      "SPL-019": "\u7559\u9999\u672F",
      "SPL-025": "\u6E05\u6D01\u8863\u7269",
      "SPL-026": "\u53BB\u9664\u6CB9\u6C61",
      "SPL-016": "\u82B1\u5F71\u5165\u7B3A\u672F",
      "SPL-027": "\u82B1\u7530\u9B54\u6CD5",
      "SPL-028": "\u624B\u7ED8\u661F\u7A7A",
      "SPL-029": "\u8D1D\u58F3\u7559\u58F0",
      "SPL-030": "\u7EB8\u666F\u6D3B\u52A8",
      "SPL-032": "\u65E7\u58A8\u590D\u663E",
      "SPL-005": "\u8F7B\u7269\u7275\u5F15\u672F",
      "SPL-006": "\u63A2\u6D41\u672F",
      "SPL-007": "\u663E\u75D5\u672F",
      "SPL-010": "\u8F7B\u7269\u7F13\u843D\u672F",
      "SPL-031": "\u9B54\u529B\u5BFB\u8FF9",
      "SPL-033": "\u98CE\u8DEF\u663E\u5F62",
      "SPL-034": "\u77F3\u5C42\u56DE\u54CD",
      "SPL-035": "\u64CD\u7EB5\u6C34\u6D41",
      "SPL-036": "\u5851\u9020\u5CA9\u77F3",
      "SPL-037": "\u7EF3\u7D22\u5BFB\u5F84",
      "SPL-008": "\u504F\u98CE\u672F",
      "SPL-009": "\u62A4\u8EAB\u8584\u5E55",
      "SPL-011": "\u9B54\u529B\u5F39",
      "SPL-012": "\u7F1A\u8DB3\u672F",
      "SPL-038": "\u8D2F\u7A7F\u672F",
      "SPL-039": "\u767D\u971C\u5C01\u6CB3",
      "SPL-040": "\u6298\u94C1\u4E4B\u73AF",
      "SPL-041": "\u672F\u5F0F\u89E3\u6784",
      "SPL-042": "\u6D6E\u5EAD\u4E4B\u672F",
      "SPL-021": "\u6D45\u4F24\u6108\u5408\u672F",
      "SPL-022": "\u590D\u539F\u672F",
      "SPL-023": "\u6DF1\u5C42\u590D\u539F\u672F",
      "SPL-024": "\u795B\u6BD2\u672F",
      "POT-001": "\u6108\u5408\u836F\u5242",
      "POT-002": "\u590D\u539F\u836F\u5242",
      "POT-003": "\u9B54\u529B\u56DE\u590D\u5242",
      "POT-004": "\u6D53\u7F29\u9B54\u529B\u56DE\u590D\u5242",
      "POT-005": "\u5B9A\u5411\u795B\u6BD2\u5242",
      "SCR-001": "\u5F15\u706B\u5377",
      "SCR-002": "\u65C5\u706F\u5377",
      "SCR-003": "\u5E94\u6025\u6108\u5408\u5377",
      "SCR-004": "\u62A4\u5E55\u5BFC\u5F15\u5377",
      "ART-001": "\u65C5\u706F",
      "ART-002": "\u6696\u996E\u58F6",
      "ART-003": "\u62A4\u5E55\u62A4\u7B26",
      "ART-004": "\u57FA\u7840\u5F15\u5BFC\u6CD5\u6756",
      "MNT-001": "\u666E\u901A\u9A6C\u5339",
      "MNT-002": "\u76D8\u89D2\u5C71\u7F8A",
      "MNT-003": "\u6797\u5730\u5DE8\u9E7F",
      "MNT-004": "\u51A0\u7FBD\u9646\u884C\u9E1F",
      "MNT-005": "\u6C99\u5730\u9A7C\u517D",
      "MNT-006": "\u6C99\u5730\u884C\u8725",
      "MNT-007": "\u51BB\u539F\u5927\u9A6F\u9E7F",
      "MNT-008": "\u6E56\u5730\u5DE8\u6C34\u736D",
      "MNT-009": "\u957F\u8DB3\u6D89\u6C34\u9E1F",
      "MNT-010": "\u8349\u539F\u5DE8\u72FC",
      "MNT-011": "\u5CA9\u80CC\u5730\u8725",
      "MNT-012": "\u72EE\u9E6B",
      "MNT-013": "\u9E70\u9A6C\u517D",
      "MNT-014": "\u7FFC\u9A6C",
      "MNT-015": "\u9AD8\u5C71\u5DE8\u9E70",
      "MNT-016": "\u72EC\u89D2\u517D",
      "MNT-017": "\u5DE8\u9F99",
      "RMT-001": "\u5BBD\u89D2\u6CB3\u725B",
      "RMT-002": "\u6CB3\u8C37\u6591\u7FBD\u9E70\u9A6C\u517D",
      "RMT-003": "\u585E\u4F26\u8FBE\u7EF8\u51A0\u9646\u884C\u9E1F",
      "RMT-004": "\u5F69\u7FC5\u5DE8\u86FE",
      "RMT-005": "\u963F\u5C14\u7EF4\u514B\u957F\u8033\u9AA1",
      "RMT-006": "\u963F\u5C14\u7EF4\u514B\u9A7F\u8DEF\u9E70\u9A6C\u517D",
      "RMT-007": "\u5361\u5FB7\u6E29\u783E\u5CB8\u884C\u8725",
      "RMT-008": "\u6D77\u5D16\u5DE8\u9E2C\u9E5A",
      "RMT-009": "\u970D\u5C14\u4E39\u957F\u9B03\u725B",
      "RMT-010": "\u970D\u5C14\u4E39\u957F\u7FFC\u9E70\u9A6C\u517D",
      "RMT-011": "\u5E03\u96F7\u5361\u94F6\u9B03\u5C71\u7F8A",
      "RMT-012": "\u5E03\u96F7\u5361\u9614\u7FFC\u72EE\u9E6B",
      "RMT-013": "\u675C\u5C14\u6587\u5CA9\u7532\u5DE8\u7532\u866B",
      "RMT-014": "\u675C\u5C14\u6587\u819C\u7FFC\u9F99\u8725",
      "RMT-015": "\u7EF4\u65AF\u5361\u82D4\u6591\u5DE8\u9E7F",
      "RMT-016": "\u7EF4\u65AF\u5361\u9614\u7FFC\u98DE\u72D0",
      "RMT-017": "\u6D1B\u65AF\u6587\u82C7\u539F\u6D89\u6C34\u9E1F",
      "RMT-018": "\u6D1B\u65AF\u6587\u94F6\u5589\u5DE8\u5929\u9E45",
      "RMT-019": "\u57C3\u65AF\u51EF\u5C14\u957F\u817F\u9A7C\u517D",
      "RMT-020": "\u57C3\u65AF\u51EF\u5C14\u8910\u80CC\u5DE8\u9E6B",
      "RMT-021": "\u7D22\u62C9\u6069\u6247\u8DBE\u884C\u8725",
      "RMT-022": "\u7D22\u62C9\u6069\u6C99\u5E06\u9CD0",
      "RMT-023": "\u8BFA\u5C14\u7EF4\u514B\u971C\u89D2\u9A6F\u9E7F",
      "RMT-024": "\u8BFA\u5C14\u7EF4\u514B\u96EA\u539F\u5DE8\u9E2E",
      "RMT-025": "\u74E6\u8428\u6069\u94DC\u810A\u5730\u8725",
      "RMT-026": "\u74E6\u8428\u6069\u8D64\u7FFC\u9F99\u8725",
      "RMT-027": "\u827E\u65AF\u5854\u6069\u6D77\u98CE\u957F\u9014\u9A6C",
      "RMT-028": "\u827E\u65AF\u5854\u6069\u5CAC\u89D2\u7FFC\u9A6C",
      "MNT-018": "\u5BBD\u89D2\u6CB3\u725B",
      "MNT-019": "\u5F69\u7FC5\u5DE8\u86FE",
      "MNT-020": "\u957F\u8033\u9AA1",
      "MNT-021": "\u783E\u5CB8\u884C\u8725",
      "MNT-022": "\u6D77\u5D16\u5DE8\u9E2C\u9E5A",
      "MNT-023": "\u957F\u9B03\u725B",
      "MNT-024": "\u5CA9\u7532\u5DE8\u7532\u866B",
      "MNT-025": "\u819C\u7FFC\u9F99\u8725",
      "MNT-026": "\u9614\u7FFC\u98DE\u72D0",
      "MNT-027": "\u5DE8\u5929\u9E45",
      "MNT-028": "\u8910\u80CC\u5DE8\u9E6B",
      "MNT-029": "\u6C99\u5E06\u9CD0",
      "MNT-030": "\u96EA\u539F\u5DE8\u9E2E",
      "VEH-001": "\u8F7B\u4FBF\u53CC\u8F6E\u655E\u8F66\uFF1A2 \u4EBA\u5EA7\uFF0C\u5EA7\u540E\u5C0F\u884C\u674E\u683C\uFF0C\u53EF\u52A0\u8F7B\u96E8\u7BF7",
      "VEH-002": "\u56DB\u8F6E\u65C5\u884C\u7BF7\u8F66\uFF1A4 \u4EBA\u5EA7\uFF0C\u53EF\u6536\u8D77\u90E8\u5206\u5EA7\u6905\u653E\u884C\u674E\uFF0C\u786C\u9876\u6216\u7ED3\u5B9E\u7BF7\u9876",
      "VEH-003": "\u5C45\u4F4F\u65C5\u884C\u7BF7\u8F66\uFF1A2\u20143 \u4EBA\u4E58\u5750\uFF0C\u505C\u8F66\u540E\u5C55\u5F00 2 \u4EBA\u5367\u94FA\u3001\u6298\u684C\u4E0E\u67DC\u683C",
      "VEH-004": "\u5B9A\u7EBF\u9A7F\u7AD9\u5BA2\u8F66\uFF1A6\u20148 \u4EBA\u5EA7\uFF0C\u542B\u8F66\u592B\uFF0C\u56FA\u5B9A\u7EBF\u8DEF\u4E0E\u505C\u9760\u70B9",
      "VEH-005": "\u4F4E\u53A2\u8D27\u8F66\uFF1A\u4F4E\u8D27\u53F0\u3001\u7ED1\u624E\u70B9\u3001\u53F8\u673A\u4E0E\u968F\u8F66\u52A9\u624B\u5171 2 \u4E2A\u5EA7\u4F4D",
      "VEH-006": "\u5C71\u9053\u77ED\u8F74\u8F66\uFF1A\u77ED\u8F66\u8EAB\u3001\u8F83\u7A84\u8F66\u9053\u9700\u6C42\uFF0C1\u20142 \u4EBA\u5EA7\uFF0C\u8D27\u7269\u5C31\u4F4E\u56FA\u5B9A",
      "VEH-007": "\u6C99\u5730\u5BBD\u8F6E\u8F66\uFF1A\u5BBD\u8F6E\u3001\u906E\u9633\u7BF7\u3001\u4F4E\u91CD\u5FC3\u30012\u20143 \u4EBA\u5EA7\u4E0E\u5C01\u597D\u7684\u6C34\u7F50",
      "VEH-008": "\u51BB\u539F\u65C5\u884C\u96EA\u6A47\uFF1A2\u20143 \u4EBA\u5EA7\uFF0C\u6BEF\u7BB1\u3001\u5C0F\u884C\u674E\u67B6\u548C\u9632\u98CE\u4FA7\u6321",
      "BAG-SMALL": "\u5C0F\u578B\u79D8\u6CD5\u884C\u56CA",
      "BAG-TRAVEL": "\u65C5\u884C\u79D8\u6CD5\u884C\u56CA",
      "BAG-LARGE": "\u5927\u5BB9\u91CF\u79D8\u6CD5\u884C\u56CA"
    }
  };

  // src/world/locations.mjs
  var placeName = (id, state) => WORLD.places[id]?.name ?? state?.\u73A9\u6CD5?.\u5C0F\u5730\u70B9[id]?.\u540D\u79F0 ?? WORLD.names[id] ?? id;
  var regionName = (id) => WORLD.regions[id]?.name ?? id;

  // src/ui/mobile-layers.mjs
  function mobileLayer(id, assets = {}, cls = "") {
    const record = mobile_layer_art_default.find((v) => v.id === id), img = document.createElement("img");
    img.className = "xh-mp-layer " + cls;
    img.src = assets["original-phone-layer-" + id] ?? "assets/mobile-layers/" + record.file;
    img.alt = "";
    img.draggable = false;
    img.dataset.layer = id;
    img.decoding = "async";
    return img;
  }
  function mobileLayerChrome(assets = {}, tab = 0) {
    const frame = document.createElement("div");
    frame.className = "xh-mobile-frame xh-mp-chrome";
    frame.dataset.nav = String(tab);
    frame.setAttribute("aria-hidden", "true");
    frame.append(mobileLayer("chrome-rich", assets, "xh-mp-outer-border"));
    return frame;
  }
  var mobilePlaceTitle = (id) => placeName(id === "LOC-VIR-003" ? "LOC-VIR-001" : id);
  function createMobileKit(c) {
    const { node: node3, button: button2, icon: icon3, assets, content, render: render3, gallery } = c;
    const at = (e, [x, y, w, h]) => {
      for (const [key, v] of Object.entries({ left: x, top: y, width: w, height: h })) e.style.setProperty(key, v + "px");
      e.classList.add("xh-mp-position");
      return e;
    };
    const page = (name) => {
      const p = node3("div", void 0, "xh-mp xh-mp-" + name);
      p.dataset.layered = "true";
      p.classList.add("xh-mp-rich");
      content.append(p);
      return p;
    };
    const art2 = (id, cls = "") => mobileLayer(id, assets, cls);
    const copy2 = (p, tag, value, rect, cls = "") => {
      const e = at(node3(tag, value, "xh-mp-copy " + cls), rect);
      e.title = String(value ?? "");
      if (tag === "p") e.tabIndex = 0;
      p.append(e);
      return e;
    };
    const control = (p, label, run, rect, ico, cls = "") => {
      const b = at(button2(label, run, ico, "xh-mp-button " + cls), rect);
      p.append(b);
      return b;
    };
    function panel(p, rect, cls = "") {
      const f = at(node3("section", void 0, "xh-mp-paper " + cls), rect);
      f.style.setProperty("--mp-paper-rim", `url("${assets["original-phone-layer-paper-rim"] ?? "assets/mobile-layers/paper-rim-v1.png"}")`);
      p.append(f);
      return f;
    }
    function fragment(id, rect, cls = "") {
      const e = originalWindow("phone-layer-" + id, rect, [], "xh-mp-grouped-art " + cls, assets, [], false);
      e.dataset.layer = id;
      return e;
    }
    function ornament(p, id, source, target, cls = "") {
      const e = at(fragment(id, source, cls), target);
      p.append(e);
      return e;
    }
    function flourish(cls = "") {
      return fragment("inventory-rich", [27, 206, 300, 114], "xh-mp-flourish " + cls);
    }
    function heading(p, title, script, rect = [0, 0, 404, 59]) {
      const h = at(node3("header", void 0, "xh-mp-heading"), rect);
      if (script === "Our Story") {
        h.classList.add("xh-mp-painted-heading");
        h.append(at(fragment("bonds-rich", [0, 64, 1004, 192]), [0, -3, 404, 77]));
      } else if (script === "Our Satchel") {
        h.classList.add("xh-mp-painted-heading");
        h.append(at(fragment("inventory-rich", [0, 204, 984, 116]), [0, 0, 404, 52]));
      } else h.append(node3("span", script, "xh-mp-script"), flourish(), flourish("xh-mp-flourish-right"));
      h.prepend(node3("h2", title));
      p.append(h);
      return h;
    }
    function tabs(p, label, choices, current, set, rect, cls = "") {
      const nav = at(node3("nav", void 0, "xh-mp-tabs " + cls), rect);
      nav.setAttribute("aria-label", label);
      for (const [id, title, glyph] of choices) {
        const b = button2(title, () => {
          set(id);
          render3();
          content.querySelector('[data-phone-control="' + label + "-" + id + '"]')?.focus({ preventScroll: true });
        }, glyph, "xh-mp-tab");
        b.dataset.phoneControl = label + "-" + id;
        b.setAttribute("aria-pressed", String(id === current));
        nav.append(b);
      }
      p.append(nav);
      return nav;
    }
    function pager(p, label, current, count, set, rect = [76, 511, 254, 33]) {
      const nav = at(node3("nav", void 0, "xh-mp-pager"), rect);
      nav.setAttribute("aria-label", label);
      const a = button2("\u4E0A\u4E00\u9875" + label, () => {
        set(current - 1);
        render3();
      }, "arrow", "xh-mp-prev"), b = button2("\u4E0B\u4E00\u9875" + label, () => {
        set(current + 1);
        render3();
      }, "arrow", "xh-mp-next");
      a.querySelector("span").textContent = "\u4E0A\u4E00\u9875";
      b.querySelector("span").textContent = "\u4E0B\u4E00\u9875";
      a.disabled = current <= 0;
      b.disabled = current >= count - 1;
      nav.append(a, node3("span", (count ? current + 1 : 0) + " / " + count), b);
      p.append(nav);
      return nav;
    }
    function media(id, cls = "", character) {
      const wrap3 = node3("div", void 0, "xh-mp-media " + cls), entry = gallery.entry(id, character), image = gallery.image(id, "", character);
      if (image) {
        image.classList.add("xh-mp-media-image");
        if (entry?.box) wrap3.style.setProperty("--photo-ratio", entry.box[2] / entry.box[3]);
        wrap3.append(image);
      } else wrap3.append(node3("span", "\u914D\u56FE\u5F85\u8865"));
      return wrap3;
    }
    function portrait(id, cls = "") {
      const wrap3 = node3("div", void 0, "xh-mp-portrait " + cls);
      wrap3.dataset.character = id;
      const pic = c.mobilePortrait?.(id) ?? c.face(id, "xh-phone-portrait");
      pic.classList.add("xh-mp-portrait-image");
      wrap3.append(pic, art2(id === "xiaogai" ? "portrait-blue" : "portrait-pink", "xh-mp-portrait-frame"));
      return wrap3;
    }
    function placePicture(s, cls = "") {
      const id = s.\u573A\u666F.\u5730\u70B9, region = WORLD.places[id]?.region ?? s.\u573A\u666F.\u5730\u533A;
      const record = resolvePlaceArt(id, region, c.getPlaceImages?.() ?? [], assets, c.getRegionImages?.() ?? []), wrap3 = node3("div", void 0, "xh-mp-media " + cls);
      if (!record) {
        wrap3.append(node3("span", "\u5730\u70B9\u914D\u56FE\u5F85\u8865"));
        return wrap3;
      }
      const image = node3("img");
      image.src = record.src;
      image.alt = mobilePlaceTitle(id) + "\u666F\u89C2";
      image.draggable = false;
      image.addEventListener("error", () => {
        wrap3.replaceChildren(node3("span", "\u5730\u70B9\u914D\u56FE\u5F85\u8865"));
      }, { once: true });
      wrap3.append(image);
      return wrap3;
    }
    return { node: node3, button: button2, icon: icon3, at, page, art: art2, copy: copy2, control, panel, heading, tabs, pager, media, portrait, placePicture, flourish, fragment, ornament };
  }

  // src/state/magic-state.mjs
  function manaDescription(value) {
    if (typeof value === "string" || value === null) return value;
    if (value.\u5F53\u524D === null) return null;
    if (value.\u5F53\u524D === 0) return "\u9B54\u529B\u8017\u5C3D";
    return value.\u4E0A\u9650 !== null && value.\u5F53\u524D < value.\u4E0A\u9650 ? "\u6709\u6240\u6D88\u8017" : "\u9B54\u529B\u5145\u8DB3";
  }

  // build/gameplay-rules.mjs
  var RULES = {
    "spells": {
      "SPL-001": {
        "name": "\u5F15\u706F\u672F",
        "kind": "spell"
      },
      "SPL-002": {
        "name": "\u5F15\u706B\u672F",
        "kind": "spell"
      },
      "SPL-003": {
        "name": "\u6E29\u7269\u672F",
        "kind": "spell"
      },
      "SPL-004": {
        "name": "\u62C2\u5C18\u672F",
        "kind": "spell"
      },
      "SPL-005": {
        "name": "\u8F7B\u7269\u7275\u5F15\u672F",
        "kind": "spell"
      },
      "SPL-006": {
        "name": "\u63A2\u6D41\u672F",
        "kind": "spell"
      },
      "SPL-007": {
        "name": "\u663E\u75D5\u672F",
        "kind": "spell"
      },
      "SPL-008": {
        "name": "\u504F\u98CE\u672F",
        "kind": "spell"
      },
      "SPL-009": {
        "name": "\u62A4\u8EAB\u8584\u5E55",
        "kind": "spell"
      },
      "SPL-010": {
        "name": "\u8F7B\u7269\u7F13\u843D\u672F",
        "kind": "spell"
      },
      "SPL-011": {
        "name": "\u9B54\u529B\u5F39",
        "kind": "spell"
      },
      "SPL-012": {
        "name": "\u7F1A\u8DB3\u672F",
        "kind": "spell"
      },
      "SPL-013": {
        "name": "\u7EB8\u9875\u907F\u6F6E\u672F",
        "kind": "spell"
      },
      "SPL-014": {
        "name": "\u8FD1\u706F\u8C03\u5149\u672F",
        "kind": "spell"
      },
      "SPL-015": {
        "name": "\u5E72\u723D\u978B\u889C\u672F",
        "kind": "spell"
      },
      "SPL-016": {
        "name": "\u82B1\u5F71\u5165\u7B3A\u672F",
        "kind": "spell"
      },
      "SPL-017": {
        "name": "\u676F\u4E2D\u5C0F\u96EA\u672F",
        "kind": "spell"
      },
      "SPL-018": {
        "name": "\u7406\u987A\u7EBF\u56E2\u672F",
        "kind": "spell"
      },
      "SPL-019": {
        "name": "\u7559\u9999\u672F",
        "kind": "spell"
      },
      "SPL-020": {
        "name": "\u9762\u5305\u56DE\u9165\u672F",
        "kind": "spell"
      },
      "SPL-021": {
        "name": "\u6D45\u4F24\u6108\u5408\u672F",
        "kind": "heal"
      },
      "SPL-022": {
        "name": "\u590D\u539F\u672F",
        "kind": "heal"
      },
      "SPL-023": {
        "name": "\u6DF1\u5C42\u590D\u539F\u672F",
        "kind": "heal"
      },
      "SPL-024": {
        "name": "\u795B\u6BD2\u672F",
        "kind": "dispel"
      }
    },
    "potions": {
      "POT-001": {
        "name": "\u6108\u5408\u836F\u5242",
        "kind": "heal"
      },
      "POT-002": {
        "name": "\u590D\u539F\u836F\u5242",
        "kind": "heal"
      },
      "POT-003": {
        "name": "\u9B54\u529B\u56DE\u590D\u5242",
        "kind": "mana"
      },
      "POT-004": {
        "name": "\u6D53\u7F29\u9B54\u529B\u56DE\u590D\u5242",
        "kind": "mana"
      },
      "POT-005": {
        "name": "\u5B9A\u5411\u795B\u6BD2\u5242",
        "kind": "dispel"
      }
    },
    "scrolls": {
      "SCR-001": {},
      "SCR-002": {},
      "SCR-003": {},
      "SCR-004": {}
    },
    "artifacts": {
      "ART-001": {
        "name": "\u65C5\u706F"
      },
      "ART-002": {
        "name": "\u6696\u996E\u58F6"
      },
      "ART-003": {
        "name": "\u62A4\u5E55\u62A4\u7B26"
      },
      "ART-004": {
        "name": "\u57FA\u7840\u5F15\u5BFC\u6CD5\u6756"
      }
    },
    "bags": {
      "BAG-SMALL": {
        "name": "\u5C0F\u578B\u79D8\u6CD5\u884C\u56CA",
        "volume": 60,
        "weight": 0.4
      },
      "BAG-TRAVEL": {
        "name": "\u65C5\u884C\u79D8\u6CD5\u884C\u56CA",
        "volume": 200,
        "weight": 0.6
      },
      "BAG-LARGE": {
        "name": "\u5927\u5BB9\u91CF\u79D8\u6CD5\u884C\u56CA",
        "volume": 1e3,
        "weight": 0.8
      }
    }
  };

  // src/ui/gameplay-view.mjs
  var names = { xingxing: "\u9192\u9192", xiaogai: "\u5C0F\u76D6", shared: "\u5171\u540C" };
  var numberText = (v) => v == null ? "\u5F85\u8865" : new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 9 }).format(v);
  var entityName = (s, id) => id == null ? "\u672A\u8BB0\u5F55" : names[id] ?? s.\u73A9\u6CD5?.\u4EA4\u901A\u4E2A\u4F53[id]?.\u540D\u79F0 ?? s.\u73A9\u6CD5?.\u6863\u6848[id]?.\u540D\u79F0 ?? placeName(id, s);
  function taskDetails(s, v) {
    return [v?.\u59D4\u6258\u65B9 && "\u59D4\u6258\u65B9\uFF1A" + entityName(s, v.\u59D4\u6258\u65B9), v?.\u5730\u533A && "\u5730\u533A\uFF1A" + regionName(v.\u5730\u533A), v?.\u5730\u70B9 && "\u5730\u70B9\uFF1A" + placeName(v.\u5730\u70B9, s), v?.\u5185\u5BB9, v?.\u5B8C\u6210\u6761\u4EF6 && "\u5B8C\u6210\u6761\u4EF6\uFF1A" + v.\u5B8C\u6210\u6761\u4EF6, v?.\u62A5\u916C\u7EA6\u5B9A && "\u62A5\u916C\u7EA6\u5B9A\uFF1A" + v.\u62A5\u916C\u7EA6\u5B9A, v?.\u8D39\u7528\u7EA6\u5B9A && "\u8D39\u7528\u7EA6\u5B9A\uFF1A" + v.\u8D39\u7528\u7EA6\u5B9A, v?.\u9000\u51FA\u7EA6\u5B9A && "\u9000\u51FA\u7EA6\u5B9A\uFF1A" + v.\u9000\u51FA\u7EA6\u5B9A].filter(Boolean);
  }
  var placeRecord = (s, id) => WORLD.places[id] ?? (s.\u73A9\u6CD5?.\u5C0F\u5730\u70B9[id] && { name: s.\u73A9\u6CD5.\u5C0F\u5730\u70B9[id].\u540D\u79F0, region: s.\u73A9\u6CD5.\u5C0F\u5730\u70B9[id].\u5730\u533A });
  function placeLabel(s, id) {
    return id == null ? "\u5730\u70B9\u672A\u8BB0\u5F55" : placeName(id, s);
  }
  function facts(s) {
    const result = [], seen = /* @__PURE__ */ new Set();
    const append = (id, v, title, subject, highlight) => {
      const key = [v.\u5730\u70B9 ?? "", v.\u5185\u5BB9, v.\u4F9D\u636E].join("\0");
      if (seen.has(key)) return;
      seen.add(key);
      result.push({ id, \u5185\u5BB9: v.\u5185\u5BB9, \u4F9D\u636E: v.\u4F9D\u636E, \u5730\u70B9: v.\u5730\u70B9 ?? null, \u4E3B\u4F53: subject, \u6807\u9898: title, \u91CD\u70B9: highlight });
    };
    for (const [i, v] of (s.\u65C5\u7A0B?.\u91CD\u8981\u4E8B\u5B9E ?? []).entries()) append(v.\u8BB0\u5F55ID ?? "highlight_" + i, v, v.\u5185\u5BB9.split("\n")[0], null, true);
    for (const [subject, a] of Object.entries(s.\u73A9\u6CD5?.\u6863\u6848 ?? {})) for (const [id, v] of Object.entries(a.\u4E8B\u5B9E)) append(subject + ":" + id, { ...v, \u5730\u70B9: a.\u5730\u70B9 }, a.\u540D\u79F0, subject, false);
    return result;
  }
  function availableItems(s) {
    return Object.entries(s.\u7269\u54C1 ?? {}).filter(([, v]) => {
      const st = s.\u50A8\u4F4D?.[v.storage_id];
      return st?.\u53EF\u7528 && st.\u5730\u70B9 === s.\u573A\u666F.\u5730\u70B9 && ["xingxing", "xiaogai"].includes(v.holder) && ["xingxing", "xiaogai", "shared"].includes(st.\u4FDD\u7BA1\u8005);
    });
  }
  function bagView(s, storageId) {
    const st = s.\u50A8\u4F4D?.[storageId], b = s.\u73A9\u6CD5?.\u50A8\u7269[storageId];
    if (!b) return null;
    let used = 0, known = true;
    for (const [id, v] of Object.entries(s.\u7269\u54C1 ?? {})) if (v.storage_id === storageId) {
      const volume = s.\u73A9\u6CD5?.\u7269\u8D44[id]?.\u5355\u4F4D\u5BB9\u79EF;
      if (volume == null) known = false;
      else used += volume * v.\u6570\u91CF;
    }
    const status = st.\u53EF\u7528 ? "\u53EF\u7528" : "\u6682\u4E0D\u53EF\u7528";
    return { ...b, \u540D\u79F0: s.\u7269\u54C1?.[st?.\u7269\u54C1\u5F15\u7528]?.\u540D\u79F0 ?? st?.\u7C7B\u578B, \u5DF2\u7528\u5BB9\u79EF: known ? used : null, \u72B6\u6001: status };
  }
  function resourceRows(s, itemId) {
    const item = s.\u7269\u54C1?.[itemId], m = s.\u73A9\u6CD5?.\u7269\u8D44[itemId], rows3 = [];
    if (m) {
      rows3.push(["\u5355\u4EFD\u91CD\u91CF", m.\u5355\u4F4D\u91CD\u91CF == null ? "\u5F85\u8865" : numberText(m.\u5355\u4F4D\u91CD\u91CF) + " \u516C\u65A4"], ["\u5355\u4EFD\u5BB9\u79EF", m.\u5355\u4F4D\u5BB9\u79EF == null ? "\u5F85\u8865" : numberText(m.\u5355\u4F4D\u5BB9\u79EF) + " \u5347"]);
    }
    const ownStorage = Object.entries(s.\u50A8\u4F4D ?? {}).find(([, v]) => v.\u7269\u54C1\u5F15\u7528 === itemId);
    if (ownStorage) {
      const b = bagView(s, ownStorage[0]);
      if (b) {
        rows3.push(["\u5BB9\u5668\u5BB9\u91CF", numberText(b.\u5DF2\u7528\u5BB9\u79EF) + " / " + numberText(b.\u5BB9\u91CF) + " \u5347"]);
      }
    }
    const enclosing = bagView(s, item?.storage_id);
    if (enclosing && s.\u50A8\u4F4D[item.storage_id].\u7C7B\u578B === "\u79D8\u6CD5\u884C\u56CA") rows3.push(["\u6240\u5728\u884C\u56CA", enclosing.\u540D\u79F0 + " \xB7 " + enclosing.\u72B6\u6001]);
    return rows3;
  }
  function effectsFor(s, actor) {
    return Object.entries(s.\u73A9\u6CD5?.\u6548\u679C ?? {}).filter(([, e]) => e.\u4EBA\u7269 === actor || e.\u65BD\u672F\u8005 === actor);
  }
  var ruleName = (id) => RULES.spells[id]?.name ?? RULES.potions[id]?.name ?? RULES.artifacts[id]?.name ?? RULES.bags[id]?.name ?? id;
  function conditionText(s, actor) {
    const p = s.\u4EBA\u7269[actor], other = p.\u5176\u4ED6\u5F71\u54CD, parts = [];
    if (other == null) parts.push("\u5176\u4ED6\u5F71\u54CD\uFF1A\u8D44\u6599\u5F85\u8865");
    else parts.push("\u5176\u4ED6\u5F71\u54CD\uFF1A" + (Object.values(other).map((v) => v.\u90E8\u4F4D + " \xB7 " + v.\u5F71\u54CD + (v.\u6062\u590D\u4E8B\u5B9E ? "\uFF1B" + v.\u6062\u590D\u4E8B\u5B9E : "")).join("\n") || "\u6682\u65E0\u8BB0\u5F55"));
    const effects = effectsFor(s, actor);
    parts.push("\u8FDB\u884C\u4E2D\u7684\u6548\u679C\uFF1A" + (effects.map(([, e]) => ruleName(e.\u89C4\u5219ID) + " \xB7 " + e.\u7C7B\u578B + "\n" + (e.\u8BF4\u660E ?? e.\u4F9D\u636E)).join("\n") || "\u6682\u65E0\u8BB0\u5F55"));
    return parts.join("\n\n");
  }
  var openObligations = (s) => Object.entries(s.\u73A9\u6CD5?.\u672A\u7ED3\u4E8B\u9879 ?? {}).filter(([, v]) => v.\u672A\u7ED3\u91D1\u989D > 0 || v.\u62BC\u91D1\u4F59\u989D > 0 || v.\u9884\u4ED8\u4F59\u989D > 0);
  function flowNature(v) {
    return v.\u6027\u8D28 ?? (v.\u7C7B\u578B === "\u6536\u5165" ? "\u5B9E\u9645\u6536\u5165" : "\u5B9E\u9645\u652F\u51FA");
  }
  function flowSummary(s, v) {
    const reason = typeof v.\u8BF4\u660E === "string" ? v.\u8BF4\u660E : "", who = Object.values(names).find((name) => reason.startsWith(name)) ?? names[v.\u94B1\u5305] ?? "\u94B1\u5305\u5F85\u8865";
    const purchase = v.\u7C7B\u578B === "\u652F\u51FA" && [void 0, "\u6536\u652F", "\u6D88\u8D39", "\u4E00\u822C\u6536\u652F", "\u8D2D\u4E70"].includes(v.\u6027\u8D28) && /(?:购买|买下|买了|购入)/.test(reason);
    if (purchase) {
      const match = reason.match(/(?:购买|买下|买了|购入)\s*([0-9一二两三四五六七八九十百.]+)\s*(?:个|件|份|瓶|把|本|袋|支|套|张|匹|只|双|束)\s*(.+?)(?:并|[，。；]|$)/), item = s.\u7269\u54C1?.[v.\u7269\u54C1ID]?.\u540D\u79F0;
      if (match || item) {
        const name = match?.[2] ?? item, quantity = v.\u6570\u91CF ?? (match ? { \u4E00: 1, \u4E8C: 2, \u4E24: 2, \u4E09: 3, \u56DB: 4, \u4E94: 5, \u516D: 6, \u4E03: 7, \u516B: 8, \u4E5D: 9, \u5341: 10 }[match[1]] ?? match[1] : null);
        return who + " \xB7 \u8D2D\u4E70 \xB7 " + name + (quantity == null ? "" : "*" + quantity);
      }
    }
    const action = v.\u6027\u8D28 === "\u5185\u90E8\u8F6C\u8D26" ? v.\u7C7B\u578B === "\u6536\u5165" ? "\u8F6C\u5165" : "\u8F6C\u51FA" : !v.\u6027\u8D28 || ["\u6536\u652F", "\u4E00\u822C\u6536\u652F"].includes(v.\u6027\u8D28) ? v.\u7C7B\u578B : flowNature(v);
    return who + " \xB7 " + (action ?? "\u6536\u652F");
  }
  function archiveText(v, coins2) {
    return v.\u7B14\u6570 + " \u7B14 \xB7 \u6D88\u8D39 " + coins2(v.\u652F\u51FA) + (v.\u652F\u51FA\u9000\u6B3E ? " \xB7 \u6D88\u8D39\u9000\u6B3E " + coins2(v.\u652F\u51FA\u9000\u6B3E) : "") + (v.\u6536\u5165 != null ? " \xB7 \u6536\u5165 " + coins2(v.\u6536\u5165) : "") + (v.\u5176\u4ED6\u6D41\u5165 ? " \xB7 \u5176\u4ED6\u6D41\u5165 " + coins2(v.\u5176\u4ED6\u6D41\u5165) : "") + (v.\u5176\u4ED6\u6D41\u51FA ? " \xB7 \u5176\u4ED6\u6D41\u51FA " + coins2(v.\u5176\u4ED6\u6D41\u51FA) : "");
  }
  function journalFacts(s) {
    return facts(s).map((v) => ({ key: v.id, title: v.\u5185\u5BB9.includes("\n") ? v.\u5185\u5BB9.split("\n")[0] : v.\u6807\u9898 ?? placeLabel(s, v.\u5730\u70B9), loc: (placeRecord(s, v.\u5730\u70B9)?.region ? regionName(placeRecord(s, v.\u5730\u70B9).region) + " \xB7 " : "") + placeLabel(s, v.\u5730\u70B9), body: v.\u5185\u5BB9.includes("\n") ? v.\u5185\u5BB9.split("\n").slice(1).join("\n") : v.\u5185\u5BB9, source: v.\u4F9D\u636E }));
  }

  // src/ui/notebook-desktop.mjs
  var rows = (value) => Object.entries(value ?? {});
  var copy = (value, fallback) => typeof value === "string" && value.trim() ? value : fallback;
  var NOTE_KINDS = ["\u59D4\u6258", "\u7EBF\u7D22", "\u5B66\u4E60", "\u89C1\u95FB"];
  function notebookRecords(s, coins2, NAMES2) {
    const kinds = Object.fromEntries(NOTE_KINDS.map((kind) => [kind, []]));
    const add = (kind, key, v) => kinds[kind].push({ key, ...v, title: copy(v.title, "\u672A\u547D\u540D\u8BB0\u5F55"), body: copy(v.body, "\u5185\u5BB9\u5C1A\u672A\u8BB0\u5F55\u3002"), source: copy(v.source, "\u6765\u6E90\u5C1A\u672A\u8BB0\u5F55\u3002"), loc: copy(v.loc, "\u5730\u70B9\u672A\u8BB0\u5F55") });
    const loc = (id) => id == null ? "\u5730\u70B9\u672A\u8BB0\u5F55" : (placeRecord(s, id)?.region ? regionName(placeRecord(s, id).region) + " \xB7 " : "") + placeName(id, s);
    for (const [id, v] of rows(s.\u65C5\u7A0B?.\u59D4\u6258)) add("\u59D4\u6258", id, { title: v.\u540D\u79F0, place: v.\u5730\u70B9, loc: loc(v.\u5730\u70B9), body: [...taskDetails(s, v), v.\u672A\u6536\u62A5\u916C != null ? "\u5F85\u6536\u62A5\u916C\uFF1A" + coins2(v.\u672A\u6536\u62A5\u916C) : "\u62A5\u916C\u5C1A\u672A\u8BB0\u5F55\u3002"].join("\n"), source: v.\u4F9D\u636E, badge: copy(v.\u72B6\u6001, "\u59D4\u6258\u8BB0\u5F55"), date: v.\u65E5\u671F });
    for (const [id, v] of rows(s.\u65C5\u7A0B?.\u5DF2\u77E5\u7EBF\u7D22)) add("\u7EBF\u7D22", id, { title: v.\u540D\u79F0 ?? (/\p{Script=Han}/u.test(id) ? id : v.\u5730\u70B9 ? placeName(v.\u5730\u70B9, s) : "\u6CBF\u9014\u7EBF\u7D22"), place: v.\u5730\u70B9, loc: loc(v.\u5730\u70B9), body: v.\u5185\u5BB9, source: v.\u4F9D\u636E, badge: "\u5DF2\u77E5\u7EBF\u7D22", date: v.\u65E5\u671F });
    for (const character of ["xingxing", "xiaogai"]) for (const [id, v] of rows(s.\u4EBA\u7269?.[character]?.\u5B66\u4E60\u4E2D)) add("\u5B66\u4E60", character + ":" + id, { title: v.\u540D\u79F0, loc: NAMES2[character] + " \xB7 \u5B66\u4E60\u4E2D\u7684\u80FD\u529B", body: v.\u6700\u8FD1\u6210\u679C, source: v.\u6765\u6E90, badge: "\u5B66\u4E60\u4E2D", date: v.\u65E5\u671F });
    const originals = new Map(facts(s).map((v) => [v.id, v]));
    for (const v of journalFacts(s)) {
      const original = originals.get(v.key), named = original?.\u91CD\u70B9 && /\p{Script=Han}/u.test(v.key);
      add("\u89C1\u95FB", v.key, { ...v, title: named ? v.key : v.title, body: named ? original.\u5185\u5BB9 : v.body, place: original?.\u5730\u70B9, badge: "\u89C1\u95FB\u8BB0\u5F55" });
    }
    return kinds;
  }
  function createDesktopNotebook(c) {
    const { node: node3, button: button2, icon: icon3, coins: coins2, NAMES: NAMES2, content, view, render: render3, gallery } = c;
    let scope, selection = {}, mobilePanel = "records";
    const focus = (id) => {
      let target = content.querySelector('[data-note-focus="' + id + '"]');
      if (target?.disabled) target = content.querySelector('[data-note-focus="' + (id === "next" ? "previous" : "next") + '"]');
      target?.focus({ preventScroll: true });
    };
    const heading = (value, ico, cls) => {
      const e = node3("h3", void 0, cls);
      if (ico) e.append(icon3(ico));
      e.append(node3("span", value), icon3("star"));
      return e;
    };
    function picture(s, v, cls) {
      const wrap3 = node3("div", void 0, cls), scene = v.place && gallery.location(v.place);
      if (scene) {
        const img = gallery.image(scene, "xh-notebook-scene");
        wrap3.append(img);
        wrap3.setAttribute("aria-label", gallery.entry(scene)?.title ?? "\u8BB0\u5F55\u914D\u56FE");
      } else {
        const image = resolvePlaceArt(v.place, placeRecord(s, v.place)?.region, c.getPlaceImages?.(), c.assets, c.getRegionImages?.());
        if (image) {
          const img = node3("img");
          img.src = image.src;
          img.alt = image.label;
          wrap3.append(img);
          wrap3.dataset.imageKind = image.kind;
          wrap3.title = image.label;
        } else {
          wrap3.append(icon3(view.noteFilter === "\u5B66\u4E60" ? "book" : "feather"));
          wrap3.dataset.imageKind = "none";
        }
      }
      return wrap3;
    }
    function show(s) {
      const currentScope = c.snapshot?.().scope ?? "";
      if (scope !== currentScope) {
        scope = currentScope;
        selection = {};
        mobilePanel = "records";
      }
      const mobile = c.isMobileNotebook?.();
      const p = node3("div", void 0, "xh-page xh-notebook-v2");
      p.dataset.mobilePanel = mobilePanel;
      const frame = node3("img", void 0, "xh-notebook-frame");
      frame.src = c.notebookFrame;
      frame.alt = "";
      frame.setAttribute("aria-hidden", "true");
      p.append(frame);
      p.append(heading("\u65C5\u9014\u624B\u8BB0", null, "xh-notebook-title"));
      if (mobile) p.append(c.mobileSwitch("\u624B\u8BB0\u5206\u533A", [["records", "\u624B\u8BB0\u76EE\u5F55"], ["detail", "\u8BB0\u5F55\u8BE6\u60C5"]], mobilePanel, (id) => mobilePanel = id));
      const kinds = notebookRecords(s, coins2, NAMES2), kind = view.noteFilter, records2 = kinds[kind];
      const filters = node3("nav", void 0, "xh-notebook-filters");
      filters.setAttribute("aria-label", "\u624B\u8BB0\u5206\u7C7B");
      NOTE_KINDS.forEach((label, i) => {
        const b = button2(label, () => {
          view.noteFilter = label;
          view.notePage = Math.floor(Math.max(0, kinds[label].findIndex((v) => v.key === selection[label])) / 3);
          mobilePanel = "records";
          render3();
          focus("kind-" + i);
        }, ["bag", "target", "book", "star"][i]);
        b.dataset.noteKind = label;
        b.dataset.noteFocus = "kind-" + i;
        b.setAttribute("aria-pressed", String(kind === label));
        filters.append(b);
      });
      p.append(filters);
      let selected = records2.find((v) => v.key === selection[kind]);
      if (!selected && records2.length) {
        selected = records2.at(-1);
        selection[kind] = selected.key;
        view.notePage = Math.floor((records2.length - 1) / 3);
      }
      const pageCount = Math.ceil(records2.length / 3);
      view.notePage = Math.max(0, Math.min(view.notePage, pageCount - 1));
      const panel = node3("section", void 0, "xh-notebook-list");
      panel.setAttribute("aria-label", kind + "\u8BB0\u5F55");
      function paper(parent) {
        const wrap3 = node3("div", void 0, "xh-notebook-mobile-paper"), image = node3("img");
        image.src = c.notebookFrame;
        image.alt = "";
        wrap3.setAttribute("aria-hidden", "true");
        wrap3.append(image);
        parent.append(wrap3);
      }
      if (mobile) paper(panel);
      const listHead = node3("div", void 0, "xh-notebook-list-heading");
      listHead.append(heading(kind + "\u8BB0\u5F55", null), node3("span", "\u5171 " + records2.length + " \u6761", "xh-notebook-count"));
      panel.append(listHead);
      const unknown = kind === "\u59D4\u6258" && s.\u65C5\u7A0B?.\u59D4\u6258 == null || kind === "\u5B66\u4E60" && ["xingxing", "xiaogai"].some((id) => s.\u4EBA\u7269?.[id]?.\u5B66\u4E60\u4E2D == null);
      const none = unknown ? kind + "\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002" : { \u59D4\u6258: "\u5C1A\u672A\u63A5\u53D6\u59D4\u6258\u3002", \u7EBF\u7D22: "\u5C1A\u65E0\u5DF2\u8BB0\u4E0B\u7684\u7EBF\u7D22\u3002", \u5B66\u4E60: "\u6682\u65E0\u8FDB\u884C\u4E2D\u7684\u5B66\u4E60\u3002", \u89C1\u95FB: "\u8FD8\u6CA1\u6709\u8BB0\u4E0B\u91CD\u8981\u7ECF\u5386\u3002" }[kind];
      const list = node3("div", void 0, "xh-notebook-rows");
      for (const [i, v] of records2.slice(view.notePage * 3, view.notePage * 3 + 3).entries()) {
        const b = button2("\u67E5\u770B\u8BB0\u5F55\uFF1A" + v.title, () => {
          selection[kind] = v.key;
          if (mobile) mobilePanel = "detail";
          render3();
          if (mobile) content.querySelector('[data-mobile-switch="\u624B\u8BB0\u5206\u533A-detail"]')?.focus({ preventScroll: true });
          else focus("row-" + i);
        }, null, "xh-notebook-row");
        b.dataset.noteRecord = v.key;
        b.dataset.noteFocus = "row-" + i;
        b.setAttribute("aria-pressed", String(selected?.key === v.key));
        b.replaceChildren(picture(s, v, "xh-notebook-thumbnail"));
        const text2 = node3("div", void 0, "xh-notebook-row-copy"), location = node3("p", void 0, "xh-notebook-row-location");
        location.append(icon3("pin"), node3("span", v.loc));
        text2.append(node3("h4", v.title), location, node3("p", v.body, "xh-notebook-summary"));
        b.append(text2);
        list.append(b);
      }
      if (!records2.length) list.append(node3("p", none, "xh-notebook-empty"));
      panel.append(list);
      const pager = node3("nav", void 0, "xh-notebook-pager");
      pager.setAttribute("aria-label", "\u624B\u8BB0\u7FFB\u9875");
      for (const direction of [-1, 1]) {
        const b = button2(direction < 0 ? "\u4E0A\u4E00\u9875\u624B\u8BB0" : "\u4E0B\u4E00\u9875\u624B\u8BB0", () => {
          view.notePage += direction;
          const v = records2[view.notePage * 3];
          selection[kind] = v.key;
          render3();
          focus(direction < 0 ? "previous" : "next");
        }, null);
        b.replaceChildren(icon3("arrow"), node3("span", direction < 0 ? "\u4E0A\u4E00\u9875" : "\u4E0B\u4E00\u9875"));
        b.dataset.noteFocus = direction < 0 ? "previous" : "next";
        b.disabled = direction < 0 ? view.notePage === 0 : !pageCount || view.notePage === pageCount - 1;
        if (direction < 0) b.className = "xh-notebook-previous";
        else b.className = "xh-notebook-next";
        pager.append(b);
        if (direction < 0) pager.append(node3("span", (pageCount ? view.notePage + 1 : 0) + " / " + pageCount, "xh-notebook-page-number"));
      }
      panel.append(pager);
      p.append(panel);
      const detail = node3("article", void 0, "xh-notebook-detail");
      detail.setAttribute("aria-label", "\u8BB0\u5F55\u8BE6\u60C5");
      detail.append(heading("\u8BB0\u5F55\u8BE6\u60C5", null, "xh-notebook-detail-heading"));
      if (mobile) paper(detail);
      if (selected) {
        detail.dataset.noteDetail = selected.key;
        detail.append(picture(s, selected, "xh-notebook-landscape"));
        const title = node3("div", void 0, "xh-notebook-detail-title");
        title.append(node3("h2", selected.title), node3("span", selected.badge, "xh-notebook-badge"));
        title.tabIndex = 0;
        detail.append(title);
        const meta = node3("div", void 0, "xh-notebook-meta");
        const date = node3("p");
        date.append(icon3("calendar"), node3("span", selected.date ?? "\u65E5\u671F\u672A\u8BB0\u5F55"));
        const location = node3("p");
        location.append(icon3("pin"), node3("span", selected.loc));
        meta.append(date, location);
        meta.tabIndex = 0;
        detail.append(meta);
        detail.append(heading("\u8BB0\u5F55\u5185\u5BB9", "feather", "xh-notebook-body-heading"));
        const body = node3("div", selected.body, "xh-notebook-body");
        body.tabIndex = 0;
        body.setAttribute("aria-label", "\u5B8C\u6574\u8BB0\u5F55\u5185\u5BB9");
        detail.append(body);
        detail.append(heading("\u8BB0\u5F55\u6765\u6E90", "book", "xh-notebook-source-heading"));
        const source = node3("div", selected.source, "xh-notebook-source");
        source.tabIndex = 0;
        source.setAttribute("aria-label", "\u5B8C\u6574\u8BB0\u5F55\u6765\u6E90");
        detail.append(source);
      } else {
        detail.append(node3("p", none, "xh-notebook-detail-empty"));
      }
      p.append(detail);
      content.append(p);
    }
    return { render: show };
  }

  // src/ui/bonds-desktop.mjs
  var BONDS_C_ART = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/bonds/bonds-desktop-c-v1.png";
  var BONDS_C_MOBILE_ART = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/bonds/bonds-mobile-c-v1.png";
  function createDesktopBonds(c) {
    const { node: node3, button: button2, icon: icon3, gallery, render: render3, open } = c;
    let scope, selectedMemory = null;
    const box = (e, r) => position(e, r);
    function art2([x, y, w, h]) {
      const window2 = node3("span", void 0, "xh-original-art xh-bonds-c-paper"), image = node3("img");
      window2.dataset.originalSource = "bonds-c";
      window2.setAttribute("aria-hidden", "true");
      image.src = c.assets["original-bonds-c"] ?? BONDS_C_ART;
      image.alt = "";
      image.draggable = false;
      image.decoding = "async";
      Object.assign(image.style, { width: 1374 / w * 100 + "%", height: 1145 / h * 100 + "%", left: -x / w * 100 + "%", top: -y / h * 100 + "%" });
      window2.append(image);
      return window2;
    }
    function heading(parent, value, r, level = "h3") {
      const h = box(node3(level, value), r);
      parent.append(h);
      return h;
    }
    function recordPanel(parent, spec, value, unknown, none) {
      const panel = box(node3("section", void 0, "xh-bonds-c-record"), spec.rect);
      panel.append(art2(spec.source));
      heading(panel, spec.title, [340, 34, 850, 70]);
      const body = box(node3("div", void 0, "xh-bonds-c-copy"), [345, 128, 835, 112]);
      body.tabIndex = 0;
      body.setAttribute("aria-label", spec.title + "\u5B8C\u6574\u8BB0\u5F55");
      const rows3 = Object.entries(value ?? {}).reverse();
      if (!rows3.length) body.append(node3("p", value == null ? unknown : none));
      for (const [id, copy2] of rows3) {
        const p = node3("p", copy2);
        p.dataset.recordId = id;
        body.append(p);
      }
      panel.append(body);
      parent.append(panel);
    }
    function renderRight(s) {
      const next = c.snapshot().scope;
      if (next !== scope) {
        scope = next;
        selectedMemory = null;
      }
      const right = box(node3("section", void 0, "xh-bonds-c"), [967, 88, 861, 735]);
      right.setAttribute("aria-label", "\u5173\u7CFB\u3001\u7EA6\u5B9A\u4E0E\u5171\u540C\u7ECF\u5386");
      const stage = node3("div", void 0, "xh-bonds-c-stage");
      right.append(stage);
      const header = box(node3("header", void 0, "xh-bonds-c-header"), [0, 0, 1374, 180]);
      header.append(art2([0, 0, 1374, 180]));
      heading(header, "\u5173\u7CFB\u4E0E\u7EA6\u5B9A", [190, 63, 316, 95], "h2");
      stage.append(header);
      recordPanel(stage, { title: "\u5DF2\u786E\u8BA4\u7684\u5173\u7CFB", rect: [0, 180, 1374, 258], source: [0, 180, 1374, 258] }, s.\u5173\u7CFB?.\u660E\u786E\u4E8B\u5B9E, "\u5173\u7CFB\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002", "\u5C1A\u672A\u8BB0\u5F55\u660E\u786E\u7684\u5173\u7CFB\u3002");
      recordPanel(stage, { title: "\u540C\u884C\u7EA6\u5B9A", rect: [0, 438, 1374, 252], source: [0, 438, 1374, 252] }, s.\u65C5\u7A0B?.\u7EA6\u5B9A, "\u7EA6\u5B9A\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002", "\u76EE\u524D\u6CA1\u6709\u5DF2\u8BB0\u5F55\u7684\u7EA6\u5B9A\u3002");
      const memories = box(node3("section", void 0, "xh-bonds-c-memories"), [0, 690, 1374, 455]);
      memories.append(art2([0, 690, 1374, 455]));
      heading(memories, "\u5171\u540C\u8D70\u8FC7\u7684\u65F6\u523B", [155, 27, 345, 73]);
      const script = box(node3("span", "Memories", "xh-bonds-c-script"), [915, 8, 210, 85]);
      script.setAttribute("aria-hidden", "true");
      memories.append(script);
      const recent = gallery.latest();
      if (!recent.includes(selectedMemory)) selectedMemory = recent[0] ?? null;
      const index = recent.indexOf(selectedMemory), entry = selectedMemory && gallery.entry(selectedMemory);
      if (entry) {
        memories.dataset.memory = selectedMemory;
        const photo = box(node3("span", void 0, "xh-bonds-c-photo"), [165, 133, 453, 231]);
        const picture = gallery.image(selectedMemory, "xh-bonds-c-picture");
        const ratio = entry.box[2] / entry.box[3], width = Math.max(453, 231 * ratio), height = width / ratio;
        Object.assign(picture.style, { width: width + "px", height: height + "px", left: "50%", top: "50%", transform: "translate(-50%,-50%)" });
        photo.append(picture);
        memories.append(photo);
        const stamp = box(art2([548, 965, 115, 108]), [548, 275, 115, 108]);
        stamp.classList.add("xh-bonds-c-stamp");
        memories.append(stamp);
        const title = heading(memories, entry.title, [665, 151, 465, 76]);
        title.classList.add("xh-bonds-c-memory-title");
        title.tabIndex = 0;
        const caption = box(node3("p", "\u5DF2\u89E3\u9501\u7684\u5171\u540C\u56DE\u5FC6\u3002", "xh-bonds-c-memory-caption"), [670, 244, 445, 52]);
        memories.append(caption);
        const choose = box(button2(gallery.selected("scene") === selectedMemory ? "\u5F53\u524D\u7F81\u7ECA\u63D2\u56FE" : "\u8BBE\u4E3A\u7F81\u7ECA\u63D2\u56FE", () => gallery.choose("scene", null, selectedMemory), null, "xh-bonds-c-choose"), [668, 309, 300, 56]);
        choose.disabled = gallery.selected("scene") === selectedMemory;
        memories.append(choose);
        if (recent.length > 1) {
          const pager = box(node3("nav", void 0, "xh-bonds-c-pager"), [158, 385, 470, 48]);
          pager.setAttribute("aria-label", "\u5171\u540C\u56DE\u5FC6\u5207\u6362");
          for (const direction of [-1, 1]) {
            const b = button2(direction < 0 ? "\u4E0A\u4E00\u6BB5\u5171\u540C\u56DE\u5FC6" : "\u4E0B\u4E00\u6BB5\u5171\u540C\u56DE\u5FC6", () => {
              selectedMemory = recent[index + direction];
              render3();
              c.content.querySelector('[data-bonds-memory-direction="' + direction + '"]')?.focus({ preventScroll: true });
            }, null);
            b.replaceChildren(icon3("arrow"));
            b.dataset.bondsMemoryDirection = direction;
            b.disabled = direction < 0 ? index === 0 : index === recent.length - 1;
            pager.append(b);
            if (direction < 0) pager.append(node3("span", index + 1 + " / " + recent.length));
          }
          memories.append(pager);
        }
      } else {
        const empty = box(node3("p", "\u5C1A\u65E0\u5DF2\u89E3\u9501\u7684\u5267\u60C5\u63D2\u753B\u3002\u5171\u540C\u7ECF\u5386\u53EF\u4ECE\u8BB0\u5F55\u6765\u6E90\u67E5\u770B\u3002", "xh-bonds-c-empty"), [665, 155, 475, 118]);
        memories.append(empty);
      }
      const source = box(button2("\u67E5\u770B\u7ECF\u5386\u8BB0\u5F55", () => open("memories"), null, "xh-bonds-c-source"), [1006, 285, 316, 74]);
      source.replaceChildren(icon3("book"), node3("span", "\u67E5\u770B\u7ECF\u5386\u8BB0\u5F55"), icon3("arrow"));
      memories.append(source);
      stage.append(memories);
      return right;
    }
    function mobileArt([x, y, w, h], photo = false) {
      const window2 = node3("span", void 0, "xh-original-art xh-mobile-bonds-c-art"), image = node3("img");
      window2.dataset.originalSource = "bonds-mobile-c";
      window2.setAttribute("aria-hidden", "true");
      image.src = c.assets["original-bonds-mobile-c"] ?? BONDS_C_MOBILE_ART;
      image.alt = "";
      image.draggable = false;
      image.decoding = "async";
      Object.assign(image.style, { width: 1808 / w * 100 + "%", height: 879 * 1808 / 1789 / h * 100 + "%", left: -x / w * 100 + "%", top: -y / h * 100 + "%" });
      if (photo) {
        const mask = '<svg xmlns="http://www.w3.org/2000/svg" width="904" height="758" viewBox="0 0 904 758"><mask id="m"><rect width="904" height="758" fill="white"/><rect x="142" y="60" width="614" height="296" fill="black"/><circle cx="737" cy="332" r="57" fill="white"/></mask><rect width="904" height="758" fill="white" mask="url(#m)"/></svg>';
        window2.style.maskImage = window2.style.webkitMaskImage = 'url("data:image/svg+xml,' + encodeURIComponent(mask) + '")';
        window2.style.maskSize = "100% 100%";
      }
      window2.append(image);
      return window2;
    }
    function mobileRecords(parent, title, value, rect, bodyRect, unknown, none) {
      const h = box(node3("h3", title, "xh-mobile-bonds-c-record-title"), rect), body = box(node3("div", void 0, "xh-mobile-bonds-c-copy"), bodyRect);
      body.tabIndex = 0;
      body.setAttribute("aria-label", title + "\u5B8C\u6574\u8BB0\u5F55");
      const rows3 = Object.entries(value ?? {}).reverse();
      if (!rows3.length) body.append(node3("p", value == null ? unknown : none));
      for (const [id, copy2] of rows3) {
        const p = node3("p", copy2);
        p.dataset.recordId = id;
        body.append(p);
      }
      parent.append(h, body);
    }
    function renderMobile(s, panel) {
      const next = c.snapshot().scope;
      if (next !== scope) {
        scope = next;
        selectedMemory = null;
      }
      const page = box(node3("section", void 0, "xh-mobile-bonds-c"), [0, 112, 904, 888]);
      page.dataset.bondsCPanel = panel;
      const header = box(node3("header", void 0, "xh-mobile-bonds-c-header"), [0, 0, 904, 130]);
      header.append(mobileArt([panel === "relationship" ? 0 : 904, 0, 904, 130]));
      heading(header, panel === "relationship" ? "\u5173\u7CFB\u4E0E\u7EA6\u5B9A" : "\u5171\u540C\u8D70\u8FC7\u7684\u65F6\u523B", [185, 32, 535, 58], "h2");
      page.append(header);
      if (panel === "relationship") {
        const relation = box(node3("article", void 0, "xh-mobile-bonds-c-record"), [0, 130, 904, 320]);
        relation.append(mobileArt([0, 130, 904, 320]));
        mobileRecords(relation, "\u5DF2\u786E\u8BA4\u7684\u5173\u7CFB", s.\u5173\u7CFB?.\u660E\u786E\u4E8B\u5B9E, [350, 49, 445, 64], [350, 128, 448, 160], "\u5173\u7CFB\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002", "\u5C1A\u672A\u8BB0\u5F55\u660E\u786E\u7684\u5173\u7CFB\u3002");
        const promise = box(node3("article", void 0, "xh-mobile-bonds-c-record"), [0, 450, 904, 330]);
        promise.append(mobileArt([0, 450, 904, 330]));
        mobileRecords(promise, "\u540C\u884C\u7EA6\u5B9A", s.\u65C5\u7A0B?.\u7EA6\u5B9A, [350, 47, 445, 64], [350, 124, 382, 160], "\u7EA6\u5B9A\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002", "\u5C1A\u672A\u8BB0\u5F55\u540C\u884C\u7EA6\u5B9A\u3002");
        const foot = box(mobileArt([0, 780, 904, 108]), [0, 780, 904, 108]);
        page.append(relation, promise, foot);
      } else {
        const recent = gallery.latest();
        if (!recent.includes(selectedMemory)) selectedMemory = recent[0] ?? null;
        const index = recent.indexOf(selectedMemory), entry = selectedMemory && gallery.entry(selectedMemory);
        if (entry) {
          page.dataset.memory = selectedMemory;
          const photo = box(node3("span", void 0, "xh-mobile-bonds-c-photo"), [132, 180, 628, 315]), picture = gallery.image(selectedMemory, "xh-bonds-c-picture");
          const ratio = entry.box[2] / entry.box[3], width = Math.max(628, 315 * ratio), height = width / ratio;
          Object.assign(picture.style, { width: width + "px", height: height + "px", left: "50%", top: "50%", transform: "translate(-50%,-50%)" });
          photo.append(picture);
          page.append(photo);
        }
        const paper = box(mobileArt([904, 130, 904, 758], !!entry), [0, 130, 904, 758]);
        page.append(paper);
        if (entry) {
          const title = box(node3("h3", entry.title, "xh-mobile-bonds-c-memory-title"), [132, 548, 648, 70]);
          title.tabIndex = 0;
          page.append(title, box(node3("p", "\u5DF2\u89E3\u9501\u7684\u5171\u540C\u56DE\u5FC6\u3002", "xh-mobile-bonds-c-caption"), [132, 624, 648, 48]));
          const pager = box(node3("nav", void 0, "xh-mobile-bonds-c-pager"), [144, 665, 624, 72]);
          pager.setAttribute("aria-label", "\u5171\u540C\u56DE\u5FC6\u5207\u6362");
          for (const direction of [-1, 1]) {
            const b = button2(direction < 0 ? "\u4E0A\u4E00\u6BB5\u5171\u540C\u56DE\u5FC6" : "\u4E0B\u4E00\u6BB5\u5171\u540C\u56DE\u5FC6", () => {
              selectedMemory = recent[index + direction];
              render3();
              const buttons = [...c.content.querySelectorAll("[data-bonds-mobile-direction]")];
              const available = buttons.find((b2) => b2.dataset.bondsMobileDirection === String(direction) && !b2.disabled) ?? buttons.find((b2) => !b2.disabled);
              available?.focus({ preventScroll: true });
            }, null);
            b.replaceChildren(icon3("arrow"));
            b.dataset.bondsMobileDirection = direction;
            b.disabled = direction < 0 ? index === 0 : index === recent.length - 1;
            pager.append(b);
            if (direction < 0) pager.append(node3("span", index + 1 + " / " + recent.length));
          }
          page.append(pager);
        } else page.append(box(node3("p", "\u5C1A\u65E0\u5DF2\u89E3\u9501\u7684\u5267\u60C5\u63D2\u753B\u3002\n\u5171\u540C\u7ECF\u5386\u53EF\u4ECE\u4E0B\u65B9\u8BB0\u5F55\u67E5\u770B\u3002", "xh-mobile-bonds-c-empty"), [160, 280, 570, 180]));
        const choose = box(button2(entry ? gallery.selected("scene") === selectedMemory ? "\u5F53\u524D\u7F81\u7ECA\u63D2\u56FE" : "\u8BBE\u4E3A\u7F81\u7ECA\u63D2\u56FE" : "\u9009\u62E9\u7F81\u7ECA\u63D2\u56FE", () => entry ? gallery.choose("scene", null, selectedMemory) : open("artbook", "scene"), null, "xh-mobile-bonds-c-button"), [52, 723, 358, 112]);
        choose.disabled = !!entry && gallery.selected("scene") === selectedMemory;
        const source = box(button2("\u67E5\u770B\u7ECF\u5386\u8BB0\u5F55", () => open("memories"), null, "xh-mobile-bonds-c-button"), [427, 723, 414, 112]);
        source.replaceChildren(icon3("book"), node3("span", "\u67E5\u770B\u7ECF\u5386\u8BB0\u5F55"));
        page.append(choose, source);
      }
      return page;
    }
    return { render: renderRight, renderMobile };
  }

  // src/ui/portrait-reference.mjs
  var shared = { width: 1835, height: 857, tabEdges: [47, 235, 415, 591, 767, 941], back: [59, 94, 133, 47], banner: [0, 86, 1835, 144], bio: [222, 230, 514, 525], album: [761, 230, 853, 525], face: [480, 465, 167], caption: [395, 697, 172, 34], grid: [807, 289, 753, 375], tile: [1001, 289, 172, 184], tileHoles: [[1008, 294, 158, 146], [1007, 443, 160, 29]], demoPictures: [[1203, 296, 153, 143], [1397, 296, 153, 143], [816, 487, 153, 145], [1010, 487, 153, 145], [1203, 487, 153, 145], [1397, 487, 153, 145]] };
  var PORTRAIT_REFERENCE = {
    xingxing: { ...shared, art: "picker-approved-xingxing", accent: "#b97b38", wash: "#fff0da" },
    xiaogai: { ...shared, art: "picker-approved-xiaogai", accent: "#315cbb", wash: "#eaf1ff" }
  };

  // src/ui/ledger-scene-reference.mjs
  var BOOK_PAPER_WINDOW = [400, 160, 1320, 550];
  var LEDGER_REFERENCE = { art: "ledger-approved", width: 1834, height: 858, tabEdges: [47, 229, 416, 593, 769, 944], back: [59, 96, 134, 48], banner: [0, 86, 1834, 107], wallets: [[225, 194, 500, 138], [725, 194, 489, 138], [1214, 194, 500, 138]], walletAmounts: [[430, 276, 243, 38], [900, 276, 260, 38], [1430, 276, 232, 38]], walletFaces: [[338, 264, 61], [815, 264, 61]], records: [225, 343, 965, 430], recordHoles: [[270, 449, 884, 195], [329, 703, 804, 45]], commissions: [1212, 344, 602, 430], commissionHoles: [[1400, 451, 388, 155]] };
  var SCENE_REFERENCE = { art: "scene-approved", width: 1834, height: 858, tabEdges: [48, 238, 428, 607, 786, 945], back: [50, 87, 143, 54], banner: [0, 86, 1834, 107], current: [240, 194, 491, 560], currentPicture: [347, 260, 284, 378], currentCaption: [414, 655, 190, 35], album: [744, 194, 924, 560], grid: [780, 252, 836, 400], tile: [1353, 252, 265, 193], tileHoles: [[1359, 258, 252, 148], [1358, 408, 254, 35]], demoPictures: [[1360, 466, 249, 141], [789, 260, 246, 142], [1076, 260, 242, 141], [1360, 260, 249, 142], [789, 467, 246, 141], [1076, 467, 242, 141]] };

  // src/state/media.mjs
  var MEDIA_ART = {
    "xingxing-default": { kind: "\u5934\u50CF", character: "xingxing", name: "\u9192\u9192 \xB7 \u9ED8\u8BA4\u5934\u50CF", default: true },
    "xiaogai-default": { kind: "\u5934\u50CF", character: "xiaogai", name: "\u5C0F\u76D6 \xB7 \u9ED8\u8BA4\u5934\u50CF", default: true },
    "scene-default": { kind: "\u63D2\u753B", name: "\u4E24\u4EBA\u7684\u65C5\u9014 \xB7 \u9ED8\u8BA4\u914D\u56FE", default: true },
    "xingxing-smile": { kind: "\u5934\u50CF", character: "xingxing", name: "\u9192\u9192 \xB7 \u82B1\u95F4\u7B11\u989C", condition: "\u9192\u9192\u5B9E\u9645\u5728\u82B1\u4E1B\u3001\u82B1\u7530\u6216\u82B1\u56ED\u505C\u7559\uFF0C\u5E76\u5728\u672C\u8F6E\u9732\u51FA\u7B11\u5BB9" },
    "xiaogai-travel": { kind: "\u5934\u50CF", character: "xiaogai", name: "\u5C0F\u76D6 \xB7 \u65C5\u9014\u4E2D", condition: "\u5C0F\u76D6\u5B9E\u9645\u968F\u961F\u8D70\u5B8C\u4E00\u6BB5\u884C\u7A0B\uFF0C\u62B5\u8FBE\u4E0E\u51FA\u53D1\u5904\u4E0D\u540C\u7684\u5730\u70B9" },
    "river-day": { kind: "\u63D2\u753B", name: "\u6CB3\u5E02\u7684\u5348\u540E", condition: "\u767D\u5929\u4E24\u4EBA\u5728\u6CB3\u5E02\u3001\u7801\u5934\u3001\u6E21\u53E3\u6216\u6CB3\u5CB8\u5B9E\u9645\u505C\u7559\uFF0C\u770B\u8239\u53EA\u6216\u6C34\u9762" },
    "flower-stop": { kind: "\u63D2\u753B", name: "\u82B1\u6D77\u8FB9\u7684\u505C\u7559", condition: "\u4E24\u4EBA\u5B9E\u9645\u5728\u82B1\u7530\u3001\u82B1\u6D77\u6216\u6210\u7247\u82B1\u4E1B\u8FB9\u505C\u7559" },
    "camp-night": { kind: "\u63D2\u753B", name: "\u7BDD\u706B\u65C1\u7684\u591C\u8272", condition: "\u5165\u591C\u540E\u4E24\u4EBA\u5B9E\u9645\u5728\u7BDD\u706B\u65C1\u505C\u7559\u6216\u4F11\u606F" },
    "sunset-view": { kind: "\u63D2\u753B", name: "\u65E5\u66AE\u8FDC\u773A", condition: "\u65E5\u843D\u65F6\u4E24\u4EBA\u5B9E\u9645\u4E00\u8D77\u505C\u7559\u8FDC\u773A\u666F\u8272" }
  };

  // src/ui/artbook.mjs
  var DEFAULT_PORTRAIT_CROPS = { xingxing: [1100, 183, 132, 132], xiaogai: [1100, 343, 132, 132] };
  var ART_CATALOG = {
    "xingxing-default": { kind: "portrait", character: "xingxing", title: "\u9192\u9192 \xB7 \u9ED8\u8BA4\u5934\u50CF", asset: "inventory", box: [1091, 176, 153, 148], default: true },
    "xiaogai-default": { kind: "portrait", character: "xiaogai", title: "\u5C0F\u76D6 \xB7 \u9ED8\u8BA4\u5934\u50CF", asset: "inventory", box: [1091, 333, 153, 148], default: true },
    "xingxing-smile": { kind: "portrait", character: "xingxing", title: "\u9192\u9192 \xB7 \u82B1\u95F4\u7B11\u989C", asset: "smile-hd", box: [0, 0, 1254, 1254] },
    "xiaogai-travel": { kind: "portrait", character: "xiaogai", title: "\u5C0F\u76D6 \xB7 \u65C5\u9014\u4E2D", asset: "journey", box: [955, 97, 327, 328] },
    "scene-default": { kind: "scene", title: "\u4E24\u4EBA\u7684\u65C5\u9014 \xB7 \u9ED8\u8BA4\u914D\u56FE", asset: "bonds", box: [268, 143, 654, 598], default: true },
    "river-day": { kind: "scene", title: "\u6CB3\u5E02\u7684\u5348\u540E", asset: "memory-scenes", box: [0, 0, 678, 772] },
    "flower-stop": { kind: "scene", title: "\u82B1\u6D77\u8FB9\u7684\u505C\u7559", asset: "bond-scene", box: [0, 0, 1344, 1170] },
    "camp-night": { kind: "scene", title: "\u7BDD\u706B\u65C1\u7684\u591C\u8272", asset: "memory-scenes", box: [1358, 0, 678, 772] },
    "sunset-view": { kind: "scene", title: "\u65E5\u66AE\u8FDC\u773A", asset: "memory-scenes", box: [679, 0, 678, 772] }
  };
  for (const [id, row] of Object.entries(ART_CATALOG)) row.title = MEDIA_ART[id].name;
  function createArtbook({ snapshot, assets, changed, getPortraitImages = () => [], getSceneImages = () => [] }) {
    let preferences = {};
    let preferenceScope = "";
    const ledger = () => {
      const v = snapshot().artbook;
      return v && typeof v === "object" && !Array.isArray(v) ? v : {};
    };
    const own = (v, k) => v && typeof v === "object" && !Array.isArray(v) && Object.hasOwn(v, k) ? v[k] : void 0;
    function sceneRecords() {
      const records2 = new Map(Object.entries(ART_CATALOG).filter(([, v]) => v.kind === "scene" && v.default));
      for (const row of ledger().scenes ?? []) {
        const id = typeof row === "string" ? row : own(row, "id");
        if (records2.has(id)) continue;
        const known = own(ART_CATALOG, id);
        if (known && known.kind !== "scene") continue;
        const supplied = typeof row === "object" && row !== null ? row : {};
        records2.set(id, known ?? { kind: "scene", title: typeof supplied.title === "string" && supplied.title.trim() ? supplied.title : id, box: [0, 0, 1, 1], image: supplied.image, demoIndex: supplied.demoIndex });
      }
      return records2;
    }
    function portraitRecords(character) {
      const records2 = new Map(Object.entries(ART_CATALOG).filter(([, v]) => v.kind === "portrait" && v.character === character && v.default));
      const rows3 = ledger().portraits?.[character] ?? [];
      for (const row of rows3) {
        const id = typeof row === "string" ? row : own(row, "id");
        if (records2.has(id)) continue;
        const known = own(ART_CATALOG, id);
        if (known && (known.kind !== "portrait" || known.character !== character)) continue;
        const supplied = typeof row === "object" && row !== null ? row : {};
        records2.set(id, known ?? { kind: "portrait", character, title: typeof supplied.title === "string" && supplied.title.trim() ? supplied.title : id, box: [0, 0, 1, 1], image: supplied.image, demoIndex: supplied.demoIndex });
      }
      return records2;
    }
    function entry(id, character) {
      const known = own(ART_CATALOG, id);
      if (!character) {
        const record2 = sceneRecords().get(id);
        if (record2) {
          let src2;
          for (const catalogue of getSceneImages() ?? []) {
            src2 = skillImageURL(own(catalogue, id));
            if (src2) break;
          }
          const demo = snapshot().sceneDemo === true && Number.isInteger(record2.demoIndex) && record2.demoIndex >= 0 && record2.demoIndex < 6;
          return { ...record2, box: demo ? SCENE_REFERENCE.demoPictures[record2.demoIndex] : record2.box, imageSrc: src2 ?? skillImageURL(record2.image) };
        }
      }
      character ??= known?.character;
      if (!PORTRAIT_REFERENCE[character]) return null;
      const record = portraitRecords(character).get(id);
      if (!record) return null;
      let src;
      for (const catalogue of getPortraitImages() ?? []) {
        const local = own(catalogue, character);
        src = skillImageURL(own(local, id)) ?? skillImageURL(own(catalogue, character + ":" + id)) ?? skillImageURL(own(catalogue, id));
        if (src) break;
      }
      return { ...record, imageSrc: src ?? skillImageURL(record.image) };
    }
    const available = (kind, character) => {
      if (kind === "portrait") return [...portraitRecords(character).keys()];
      return kind === "scene" ? [...sceneRecords().keys()] : [];
    };
    function sync() {
      const raw = snapshot().scope ?? "";
      let identity = raw;
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && typeof parsed[0] === "string") identity = parsed[0];
      } catch {
      }
      const key = "xinghai-art-choice-v1:" + identity;
      preferenceScope = key;
      preferences = {};
      try {
        const value = JSON.parse(localStorage.getItem(key) ?? "{}");
        if (value && typeof value === "object" && !Array.isArray(value)) preferences = value;
      } catch {
      }
    }
    const selected = (kind, character) => {
      sync();
      const ids = available(kind, character);
      return ids.includes(preferences[character ?? "scene"]) ? preferences[character ?? "scene"] : ids[0];
    };
    function choose(kind, character, id) {
      if (!available(kind, character).includes(id)) return false;
      sync();
      preferences[character ?? "scene"] = id;
      localStorage.setItem(preferenceScope, JSON.stringify(preferences));
      changed();
      return true;
    }
    function missing(cls) {
      const e = document.createElement("span");
      e.className = "xh-gallery-image xh-portrait-missing " + cls;
      e.dataset.imageMissing = "true";
      e.textContent = "\u914D\u56FE\u5F85\u8865";
      return e;
    }
    function image(id, cls = "", character) {
      const record = entry(id, character);
      if (!record) return null;
      if (record.imageSrc) {
        const frame = document.createElement("span"), img = document.createElement("img");
        frame.className = "xh-gallery-image xh-portrait-external " + cls;
        img.src = record.imageSrc;
        img.alt = "";
        img.draggable = false;
        img.decoding = "async";
        img.addEventListener("error", () => {
          frame.replaceChildren(missing(""));
          frame.dataset.imageMissing = "true";
          assets.__onArtError?.();
        }, { once: true });
        frame.append(img);
        return frame;
      }
      if (record.asset) return originalWindow(record.asset, record.box, [], "xh-gallery-image " + cls, assets);
      if (record.kind === "scene" && snapshot().sceneDemo === true && Number.isInteger(record.demoIndex) && record.demoIndex >= 0 && record.demoIndex < 6) return originalWindow(SCENE_REFERENCE.art, record.box, [], "xh-gallery-image " + cls, assets);
      if (record.kind === "portrait" && snapshot().portraitDemo === true && Number.isInteger(record.demoIndex) && record.demoIndex >= 0 && record.demoIndex < 6) {
        const r = PORTRAIT_REFERENCE[character];
        return originalWindow(r.art, r.demoPictures[record.demoIndex], [], "xh-gallery-image " + cls, assets);
      }
      return missing(cls);
    }
    function photo(asset, rect, matte, id, cls = "", fallback = true, holes = [], cleanupMatte = null, character) {
      const slot = document.createElement("span");
      slot.className = "xh-photo-slot " + cls;
      slot.dataset.art = id ?? "";
      const record = entry(id, character), replace = record && (!record.default || record.imageSrc);
      const picture = replace ? image(id, "xh-photo-image", character) : fallback ? originalWindow(asset, rect, [], "xh-photo-image", assets) : null;
      const aperture = record?.kind === "portrait" ? portraitWindow(asset, rect) : null;
      if (aperture) {
        const [cx, cy, rx, ry] = aperture, window2 = document.createElement("span");
        window2.className = "xh-portrait-window";
        window2.style.clipPath = `ellipse(${rx / rect[2] * 100}% ${ry / rect[3] * 100}% at ${(cx - rect[0]) / rect[2] * 100}% ${(cy - rect[1]) / rect[3] * 100}%)`;
        slot.dataset.aperture = aperture.join(",");
        if (picture && replace) {
          const ratio = record.box[2] / record.box[3], w = Math.max(rx * 2, ry * 2 * ratio), h = w / ratio;
          picture.style.width = w / rect[2] * 100 + "%";
          picture.style.height = h / rect[3] * 100 + "%";
          picture.style.left = (cx - rect[0]) / rect[2] * 100 + "%";
          picture.style.top = (cy - rect[1]) / rect[3] * 100 + "%";
          picture.style.transform = "translate(-50%,-50%)";
        }
        if (picture) window2.append(picture);
        slot.append(window2);
        if (!["journey", "bonds"].includes(asset)) slot.append(portraitForeground(asset, rect, "xh-photo-ornaments", assets, holes));
      } else {
        const window2 = document.createElement("span");
        window2.className = "xh-scene-aperture";
        Object.assign(window2.style, { position: "absolute", overflow: "hidden", inset: "0" });
        const bounds = clipPhoto(window2, asset, rect, matte, assets) ?? [0, 0, rect[2], rect[3]];
        if (picture && replace) {
          const [x, y, w, h] = bounds, a = record.box[2] / record.box[3], pw = Math.max(w, h * a), ph = pw / a;
          picture.style.width = pw / rect[2] * 100 + "%";
          picture.style.height = ph / rect[3] * 100 + "%";
          picture.style.left = (x + w / 2) / rect[2] * 100 + "%";
          picture.style.top = (y + h / 2) / rect[3] * 100 + "%";
          picture.style.transform = "translate(-50%,-50%)";
        }
        if (picture) window2.append(picture);
        slot.append(window2);
        if (asset !== "notebook") slot.append(foregroundWindow(asset, rect, matte, "xh-photo-ornaments", assets, holes, rect, cleanupMatte));
      }
      return slot;
    }
    const latest = () => (ledger().scenes ?? []).map((v) => typeof v === "string" ? v : v.id).filter((id) => id !== "scene-default").slice(-3).reverse();
    const location = (place) => {
      const id = ledger().locations?.[place];
      return sceneRecords().has(id) ? id : null;
    };
    return { available, selected, choose, image, photo, latest, location, entry };
  }

  // src/ui/map-surface.mjs
  var MAP_LABELS = { "REG-01": [379, 306, 176, 43], "REG-02": [376, 481, 209, 60], "REG-03": [224, 668, 194, 58], "REG-04": [68, 384, 205, 60], "REG-05": [767, 291, 194, 46], "REG-06": [1090, 306, 227, 57], "REG-07": [899, 211, 205, 47], "REG-08": [645, 427, 197, 61], "REG-09": [902, 529, 204, 57], "REG-10": [1224, 459, 212, 62], "REG-11": [1141, 628, 206, 58], "REG-12": [1300, 124, 275, 54], "REG-13": [1450, 314, 228, 57], "REG-14": [1652, 463, 168, 63] };
  var MAP_POS = Object.fromEntries(Object.entries(MAP_LABELS).map(([id, [x, y, w, h]]) => [id, [(x + w / 2 - 15) / 18.1, (y + h / 2 - 90) / 7.34]]));
  var MAP_LABEL_HOLES = [[35, 109, 422, 129], [68, 384, 205, 60], [379, 306, 176, 43], [767, 291, 194, 46], [899, 211, 205, 47], [1300, 124, 275, 54], [1090, 306, 227, 57], [1450, 314, 228, 57], [1224, 459, 212, 62], [1652, 463, 168, 63], [1141, 628, 206, 58], [902, 529, 204, 57], [645, 427, 197, 61], [376, 481, 209, 60], [224, 668, 194, 58], [438, 425, 65, 80], [1725, 104, 93, 306], [1380, 631, 440, 176]];
  var MAP_ROAD_HOLES = [
    // The north-west route curves differently from the old approximate trace.
    // Follow its white casing so no red dashes remain beside the river city.
    ["M220 480 C244 462 271 456 300 462 S369 464 410 452 L433 442 C474 436 500 453 550 443 S604 415 635 405 Q662 394 657 378 Q655 361 692 359 L720 355 Q747 352 735 335 L715 319 Q708 310 704 300 L670 278 L640 260", 24],
    ["M405 407 C427 412 432 425 449 423 C464 420 477 419 484 429 M480 431 C501 412 524 409 550 402", 24],
    ["M503 389 C515 403 503 416 485 430", 24],
    ["M220 447 C300 439 330 464 365 461 S421 449 467 449 S523 478 570 454 S636 421 648 386 S665 355 689 352 S697 322 730 322 S740 293 715 284 L660 262", 48],
    ["M460 467 C529 500 585 518 641 526 L681 539 C712 547 733 566 739 600 C751 635 785 644 850 661 C892 679 928 681 976 673 L1079 652 C1157 640 1187 642 1203 620 C1221 603 1227 587 1252 584 L1274 573 C1298 549 1290 518 1320 512 L1417 480", 46],
    ["M1173 635 C1102 692 1109 718 1159 740 C1229 770 1310 764 1390 737", 46],
    // Remaining white-cased routes identified by the independent original-comp review.
    ["M220 480 C244 449 290 458 350 462 C402 452 447 444 485 453 C528 449 592 457 581 485 C569 510 505 515 450 521 C405 539 366 529 320 519 C267 533 216 508 220 480", 40],
    ["M780 512 C848 527 903 512 963 480 C1010 461 1100 463 1168 460 C1212 471 1222 489 1257 479 C1304 486 1333 464 1363 452", 44],
    ["M920 671 C989 682 1069 671 1120 705 C1177 742 1196 747 1240 739", 52],
    ["M1157 620 C1215 606 1268 612 1332 609", 48],
    ["M1095 650 C1119 669 1147 676 1156 707 C1167 736 1207 752 1240 744 C1276 731 1302 751 1325 749 S1362 738 1390 737", 40],
    // Fix2 residuals: trace only the old white-cased ink, not the valley/oasis panels.
    ["M939 517 C970 502 995 490 1028 481 C1074 470 1116 474 1156 478 C1195 480 1226 473 1260 465", 32],
    ["M1120 468 C1139 490 1149 501 1174 513 C1194 525 1216 536 1242 530 L1280 514", 32],
    ["M887 698 C922 709 948 725 982 730 C1035 735 1081 733 1126 738 C1170 742 1210 742 1247 732", 32]
  ];
  var MAP_FOOTER_HOLES = [[15, 800, 282, 55], [1558, 800, 267, 55]];
  function appendMapSurface(plane, assets, classes = ["xh-shared-map-terrain", "xh-shared-map-original"]) {
    for (const [x, y, w, h] of MAP_FOOTER_HOLES) {
      const paper = originalWindow("map", [970, 0, 180, 70], [], "xh-map-edge-paper", assets);
      Object.assign(paper.style, { position: "absolute", left: (x - 15) / 1810 * 100 + "%", top: (y - 90) / 734 * 100 + "%", width: w / 1810 * 100 + "%", height: h / 734 * 100 + "%" });
      plane.append(paper);
    }
    plane.append(originalWindow("terrain", [15, 90, 1810, 734], MAP_FOOTER_HOLES, classes[0], assets), originalWindow("map", [15, 90, 1810, 734], [...MAP_LABEL_HOLES, ...MAP_FOOTER_HOLES], classes[1], assets, MAP_ROAD_HOLES));
  }

  // src/ui/mobile-layered-notebook.mjs
  function createMobileLayeredNotebook(c, k) {
    const { node: node3, icon: icon3, coins: coins2, NAMES: NAMES2, assets, gallery, view } = c;
    const { at, page, copy: copy2, panel, tabs, pager, media, placePicture, ornament } = k;
    let mode = "records", scrapPage = 0;
    const value = (v, f = "\u5C1A\u672A\u8BB0\u5F55") => v == null || v === "" ? f : String(v), entries2 = (v) => v && typeof v === "object" ? Object.entries(v) : [];
    function records2(s) {
      const r = { \u59D4\u6258: [], \u7EBF\u7D22: [], \u5B66\u4E60: [], \u89C1\u95FB: [] };
      for (const [id, v] of entries2(s.\u65C5\u7A0B?.\u59D4\u6258)) r.\u59D4\u6258.push({ id, title: value(v.\u540D\u79F0), state: value(v.\u72B6\u6001), body: value(v.\u8BF4\u660E ?? v.\u5185\u5BB9, "\u59D4\u6258\u5185\u5BB9\u5F85\u8865\u3002"), reward: v.\u672A\u6536\u62A5\u916C, source: value(v.\u4F9D\u636E) });
      for (const [id, v] of entries2(s.\u65C5\u7A0B?.\u5DF2\u77E5\u7EBF\u7D22)) r.\u7EBF\u7D22.push({ id, title: "\u6CBF\u9014\u7EBF\u7D22", body: value(v.\u5185\u5BB9), source: value(v.\u4F9D\u636E), place: v.\u5730\u70B9 });
      for (const character of ["xingxing", "xiaogai"]) for (const [id, v] of entries2(s.\u4EBA\u7269?.[character]?.\u5B66\u4E60\u4E2D)) r.\u5B66\u4E60.push({ id, character, record: v, title: value(v.\u540D\u79F0), body: value(v.\u6700\u8FD1\u6210\u679C), source: value(v.\u6765\u6E90) });
      for (const [i, v] of (s.\u65C5\u7A0B?.\u91CD\u8981\u4E8B\u5B9E ?? []).entries()) r.\u89C1\u95FB.push({ id: String(i), title: mobilePlaceTitle(v.\u5730\u70B9), place: v.\u5730\u70B9, body: value(v.\u5185\u5BB9), source: value(v.\u4F9D\u636E) });
      return r;
    }
    function noteBody(p, record, rect) {
      const e = at(node3("div", void 0, "xh-mp-note-body"), rect);
      e.tabIndex = 0;
      e.append(node3("p", record.body));
      p.append(e);
      return e;
    }
    function noteSource(p, record, rect) {
      const e = at(node3("div", void 0, "xh-mp-note-source"), rect);
      e.tabIndex = 0;
      e.append(node3("span", "\u8BB0\u5F55\u6765\u6E90", "xh-sr-only"), node3("p", record.source));
      p.append(e);
      return e;
    }
    function badge(p, label, glyph, rect) {
      const e = at(node3("h3", void 0, "xh-mp-record-badge"), rect);
      e.append(icon3(glyph), node3("span", label));
      p.append(e);
      return e;
    }
    function locationImage(p, s, record, rect, cls = "") {
      const e = at(placePicture({ ...s, \u573A\u666F: { ...s.\u573A\u666F, \u5730\u70B9: record.place ?? s.\u573A\u666F.\u5730\u70B9, \u5730\u533A: WORLD.places[record.place]?.region ?? s.\u573A\u666F.\u5730\u533A } }), rect);
      e.classList.add("xh-mp-record-picture", cls);
      p.append(e);
      return e;
    }
    function renderPage(s) {
      const p = page("notebook");
      p.dataset.panel = mode;
      p.dataset.kind = view.noteFilter;
      ornament(p, "journal-masthead", [0, 115, 2170, 500], [-7, -12, 418, 96], "xh-mp-masthead");
      tabs(p, "\u624B\u8BB0\u5206\u533A", [["records", "\u65C5\u9014\u624B\u8BB0", "book"], ["scraps", "\u968F\u884C\u672D\u8BB0", "feather"]], mode, (v) => mode = v, [12, 65, 380, 34], "xh-mp-notebook-switch");
      if (mode === "scraps") {
        const facts2 = s.\u65C5\u7A0B?.\u91CD\u8981\u4E8B\u5B9E ?? [], count = Math.max(1, facts2.length);
        scrapPage = Math.max(0, Math.min(scrapPage, count - 1));
        const fact = facts2[facts2.length - 1 - scrapPage];
        ornament(p, "journal-scraps-rich", [0, 0, 1246, 1263], [-4, 104, 412, 409]);
        copy2(p, "h3", "\u9192\u9192\u7684\u672D\u8BB0", [124, 123, 134, 28], "xh-mp-centered");
        const face = at(media(gallery.selected("portrait", "xingxing"), "xh-mp-scrap-live", "xingxing"), [25, 157, 172, 194]);
        p.append(face);
        copy2(p, "h2", "\u6CBF\u9014\u7684\u8BB0\u5FC6", [230, 171, 143, 34], "xh-mp-scrap-title");
        copy2(p, "p", value(fact?.\u5185\u5BB9, "\u5C1A\u65E0\u5171\u540C\u7ECF\u5386\u8BB0\u5F55\u3002"), [230, 215, 133, 71]);
        copy2(p, "p", value(fact?.\u4F9D\u636E, "\u8BB0\u5F55\u4F9D\u636E\u5F85\u8865\u3002"), [230, 300, 145, 42], "xh-mp-small");
        copy2(p, "h2", "\u8349\u6728\u6536\u96C6", [48, 374, 161, 32]);
        const rows4 = entries2(s.\u7269\u54C1).filter(([, v]) => /花草|草药|药草|花束|花瓣|树叶|枝叶|树脂|种子|植物|标本/.test(v.\u540D\u79F0));
        copy2(p, "p", "\u5728\u65C5\u9014\u4E2D\u6536\u96C6\u7684\u82B1\u8349\uFF0C\u85CF\u7740\u8FD9\u4E2A\u4E16\u754C\u72EC\u6709\u7684\u6E29\u67D4\u3002", [19, 410, 163, 36], "xh-mp-small");
        copy2(p, "p", rows4.map(([, v]) => v.\u540D\u79F0 + " \xD7 " + value(v.\u6570\u91CF) + " " + value(v.\u5355\u4F4D, "")).join("\n") || (s.\u7269\u54C1 == null ? "\u884C\u56CA\u8BB0\u5F55\u5F85\u8865\u3002" : "\u6682\u65E0\u8349\u6728\u91C7\u96C6\u7269\u3002"), [67, 449, 108, 24], "xh-mp-small");
        if (rows4.length) {
          const [id, v] = rows4[0];
          p.append(at(c.itemArtwork(v.\u540D\u79F0, "xh-mp-botany-art", id), [183, 398, 138, 106]), at(c.itemArtwork(v.\u540D\u79F0, "xh-mp-botany-art", id), [329, 391, 59, 60]));
        }
        pager(p, "\u968F\u884C\u672D\u8BB0", scrapPage, count, (v) => scrapPage = v);
        return;
      }
      const kind = view.noteFilter;
      tabs(p, "\u624B\u8BB0\u5206\u7C7B", ["\u59D4\u6258", "\u7EBF\u7D22", "\u5B66\u4E60", "\u89C1\u95FB"].map((v, i) => [v, v, ["note", "search", "star", "flower"][i]]), kind, (v) => {
        view.noteFilter = v;
        view.notePage = 0;
      }, [12, 105, 380, 32], "xh-mp-bookmarks");
      const rows3 = records2(s)[kind];
      view.notePage = Math.max(0, Math.min(view.notePage, rows3.length - 1));
      const record = rows3[view.notePage];
      if (!record) {
        const unknown = kind === "\u5B66\u4E60" ? ["xingxing", "xiaogai"].some((id) => s.\u4EBA\u7269?.[id]?.\u5B66\u4E60\u4E2D == null) : kind === "\u59D4\u6258" ? s.\u65C5\u7A0B?.\u59D4\u6258 == null : kind === "\u7EBF\u7D22" ? s.\u65C5\u7A0B?.\u5DF2\u77E5\u7EBF\u7D22 == null : s.\u65C5\u7A0B?.\u91CD\u8981\u4E8B\u5B9E == null;
        const f = panel(p, [8, 151, 388, 350]);
        copy2(f, "p", unknown ? "\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u8BB0\u5F55\u3002" : "\u6682\u65E0\u8FD9\u7C7B\u65C5\u9014\u8BB0\u5F55\u3002", [28, 102, 320, 79]);
        pager(p, "\u624B\u8BB0", 0, 0, (v) => view.notePage = v);
        return;
      }
      if (kind === "\u89C1\u95FB") {
        locationImage(p, s, record, [17, 157, 371, 185], "xh-mp-sights-picture");
        ornament(p, "journal-sights-rich", [0, 470, 1004, 1e3], [-7, 139, 418, 410]);
        p.append(at(icon3("pin"), [14, 345, 27, 30]));
        copy2(p, "h2", record.title, [45, 343, 207, 35], "xh-mp-location-title");
        copy2(p, "p", regionName(WORLD.places[record.place]?.region ?? s.\u573A\u666F.\u5730\u533A) + " \xB7 " + placeName(record.place), [46, 379, 205, 23], "xh-mp-small");
        copy2(p, "p", record.body, [31, 405, 201, 24], "xh-mp-small");
        badge(p, "\u4EB2\u773C\u6240\u89C1", "eye", [30, 438, 154, 25]);
        badge(p, "\u8BB0\u5F55\u6765\u6E90", "note", [213, 438, 156, 25]);
        noteBody(p, record, [30, 465, 154, 33]);
        noteSource(p, record, [215, 465, 143, 33]);
      } else if (kind === "\u59D4\u6258") {
        copy2(p, "h2", "\u63A5\u53D6\u7684\u59D4\u6258", [34, 145, 309, 34]);
        copy2(p, "span", "Accepted Commissions", [38, 179, 267, 24], "xh-mp-script");
        locationImage(p, s, record, [76, 374, 301, 122], "xh-mp-commission-picture");
        ornament(p, "journal-commission-rich", [0, 0, 1413, 1113], [0, 192, 404, 328]);
        copy2(p, "h2", record.title, [105, 216, 194, 34], "xh-mp-centered");
        copy2(p, "span", record.state, [130, 253, 155, 23], "xh-mp-status");
        badge(p, "\u59D4\u6258\u5185\u5BB9", "note", [76, 278, 98, 23]);
        noteBody(p, record, [176, 279, 131, 23]);
        badge(p, "\u5F85\u6536\u62A5\u916C", "coin", [76, 310, 98, 23]);
        copy2(p, "p", record.reward == null ? "\u62A5\u916C\u8D44\u6599\u5F85\u8865" : coins2(record.reward), [176, 310, 131, 24]);
        badge(p, "\u8BB0\u5F55\u4F9D\u636E", "book", [76, 342, 98, 23]);
        noteSource(p, record, [176, 343, 131, 26]);
      } else if (kind === "\u7EBF\u7D22") {
        locationImage(p, s, record, [252, 211, 135, 173], "xh-mp-clue-live");
        ornament(p, "journal-clues-rich", [0, 525, 984, 948], [-7, 143, 418, 363]);
        copy2(p, "h3", "\u7EBF\u7D22\u8BB0\u5F55", [52, 162, 135, 27]);
        copy2(p, "h2", "\u6CBF\u9014\u7EBF\u7D22", [34, 205, 196, 37]);
        badge(p, "\u7EBF\u7D22\u5185\u5BB9", "eye", [30, 264, 154, 27]);
        noteBody(p, record, [33, 298, 190, 74]);
        badge(p, "\u8BB0\u5F55\u5730\u70B9", "pin", [30, 382, 149, 25]);
        copy2(p, "p", placeName(record.place), [33, 414, 181, 24]);
        badge(p, "\u8BB0\u5F55\u4F9D\u636E", "note", [30, 449, 149, 25]);
        noteSource(p, record, [33, 481, 185, 26]);
      } else {
        p.dataset.person = record.character;
        ornament(p, "journal-learning-rich", [0, 500, 984, 976], [-7, 138, 418, 376]);
        copy2(p, "h2", record.title, [33, 145, 239, 35], "xh-mp-skill-title");
        copy2(p, "p", NAMES2[record.character] + " \xB7 \u6B63\u5728\u5B66\u4E60", [267, 152, 130, 26], "xh-mp-skill-person");
        copy2(p, "p", record.body, [33, 182, 344, 25], "xh-mp-skill-caption");
        const details = skillDetails(record.character, record.id, record.record, c.getSkillDetails?.() ?? []), url = skillImage(record.character, record.id, record.record, c.getSkillImages?.() ?? [], details), known = record.title === "\u9B54\u529B\u63A7\u5236\u57FA\u7840" ? "control" : record.title === "\u98CE\u606F\u5F15\u5BFC" ? "wind" : c.snapshot?.().skillDemo === true ? details.demoStudy : null;
        const figure = at(node3("div", void 0, "xh-mp-study-art"), [38, 199, 338, 199]);
        if (url || known) {
          const img = node3("img");
          img.src = url ?? assets["original-profile-study-" + known] ?? "assets/profiles/" + known + "-study-v1.png";
          img.alt = record.title;
          img.draggable = false;
          img.addEventListener("error", () => {
            figure.replaceChildren(node3("span", "\u5B66\u4E60\u914D\u56FE\u5F85\u8865"));
          }, { once: true });
          figure.append(img);
        } else figure.append(node3("span", "\u5B66\u4E60\u914D\u56FE\u5F85\u8865"));
        p.append(figure);
        badge(p, "\u6700\u8FD1\u6210\u679C", "flower", [24, 373, 228, 26]);
        noteBody(p, record, [49, 402, 214, 22]);
        badge(p, "\u8BB0\u5F55\u6765\u6E90", "note", [24, 426, 228, 26]);
        noteSource(p, record, [49, 454, 221, 22]);
        const stages = learningStages(details), stageRow = at(node3("div", void 0, "xh-mp-learning-stages"), [28, 480, 348, 42]);
        if (stages) for (const [i, label] of stages.stages.entries()) {
          const cell = node3("span", label);
          cell.dataset.active = String(i === stages.active);
          cell.prepend(icon3(i === 0 ? "eye" : i === stages.stages.length - 1 ? "lock" : "star"));
          stageRow.append(cell);
        }
        else stageRow.append(node3("span", "\u5B66\u4E60\u9636\u6BB5\u5F85\u8865"));
        p.append(stageRow);
      }
      pager(p, "\u624B\u8BB0", view.notePage, rows3.length, (v) => view.notePage = v, [76, 518, 254, 30]);
    }
    return { render: renderPage, reset() {
      mode = "records";
      scrapPage = 0;
    } };
  }

  // src/ui/mobile-layered-pages.mjs
  function createMobileReferencePages(c) {
    const { node: node3, button: button2, icon: icon3, coins: coins2, NAMES: NAMES2, assets, view, render: render3, open, select, gallery, itemArtwork } = c;
    const k = createMobileKit(c), { at, page, art: art2, copy: copy2, control, panel, heading, tabs, pager, media, portrait, placePicture, flourish, fragment, ornament } = k;
    let person = null, journeyPanel = "here", inventoryPanel = "items", bondPanel = "story", memoryPage = 0, sourcePage = 0, gearPages = { xingxing: 0, xiaogai: 0 };
    const entries2 = (v) => v && typeof v === "object" ? Object.entries(v) : [], value = (v, f = "\u5C1A\u672A\u8BB0\u5F55") => v == null || v === "" ? f : String(v);
    const category = (n) => /面包|口粮|清水|水袋|皮囊|药剂|食物|药水/.test(n) ? "\u8865\u7ED9" : /阿斯特蕾雅|群星之冕|剑|杖|披风|护具|装备/.test(n) ? "\u88C5\u5907" : /草|矿|材料|树脂/.test(n) ? "\u7D20\u6750" : /书签|纪念|压花/.test(n) ? "\u7EAA\u5FF5" : "\u5176\u4ED6";
    const notebook = createMobileLayeredNotebook(c, k);
    function journey(s) {
      const p = page("journey"), id = person ?? s.\u626E\u6F14, d = s.\u4EBA\u7269[id];
      p.dataset.person = id;
      p.dataset.panel = journeyPanel;
      const people = tabs(p, "\u65C5\u9014\u4EBA\u7269", [["xingxing", "\u9192\u9192"], ["xiaogai", "\u5C0F\u76D6"]], id, (v) => person = v, [17, 1, 370, 40], "xh-mp-people");
      [...people.children].forEach((b2, i) => {
        const who = i ? "xiaogai" : "xingxing";
        b2.dataset.person = who;
        if (who === id) b2.append(node3("small", "\u67E5\u770B\u4E2D", "xh-mp-viewing xh-sr-only"));
      });
      ornament(p, "character-switch-rich", [60, 229, 2080, 254], [-7, -2, 418, 49], "xh-mp-people-strip");
      const card = panel(p, [0, 42, 404, 205], "xh-mp-person-card");
      ornament(card, id === "xingxing" ? "journey-person-pink" : "journey-person-blue", [17, 474, 953, 493], [0, 0, 404, 205]);
      const b = control(card, "\u67E5\u770B" + NAMES2[id], () => open("person", id), [16, 12, 184, 175], null, "xh-mp-portrait-action");
      b.replaceChildren(c.mobileJourneyPortrait?.(id) ?? c.face(id, "xh-phone-portrait xh-mp-journey-photo"));
      copy2(card, "h2", NAMES2[id], [210, 17, 76, 37], "xh-mp-person-name");
      copy2(card, "span", "\u2726", [267, 19, 24, 28], "xh-mp-person-accent");
      copy2(card, "span", id === "xingxing" ? "naiv31y" : "gatsby", [247, 43, 140, 28], "xh-mp-signature");
      const role = copy2(card, "span", s.\u626E\u6F14 === id ? "\u6B63\u5728\u626E\u6F14" : "\u540C\u884C\u4E3B\u89D2", [297, 20, 93, 28], "xh-mp-role");
      role.dataset.played = String(s.\u626E\u6F14 === id);
      role.prepend(node3("span", void 0, "xh-mp-role-icon"));
      const stats = at(node3("div", void 0, "xh-mp-stats"), [211, 71, 180, 91]);
      for (const [label, text2, glyph] of [["\u8EAB\u4F53", d.\u4F24\u52BF == null ? "\u8D44\u6599\u5F85\u8865" : Object.keys(d.\u4F24\u52BF).length ? "\u6709\u4F24\u52BF\u8BB0\u5F55" : "\u6682\u65E0\u4F24\u52BF", "heart"], ["\u75B2\u52B3", value(d.\u75B2\u52B3), "runner"]]) {
        const row2 = node3("div");
        row2.append(icon3(glyph), node3("span", label), node3("strong", text2));
        stats.append(row2);
      }
      const row = node3("div");
      row.append(icon3("star"), node3("span", "\u9B54\u529B"), node3("strong", manaDescription(d.\u9B54\u529B) ?? "\u5F85\u8BB0\u5F55"));
      stats.append(row);
      card.append(stats);
      const learning = copy2(card, "p", "\u6B63\u5728\u5B66\u4E60 \xB7 " + value(Object.values(d.\u5B66\u4E60\u4E2D ?? {})[0]?.\u540D\u79F0, "\u5C1A\u65E0\u8BB0\u5F55"), [211, 175, 180, 25], "xh-mp-study-summary");
      learning.prepend(icon3("book"));
      ornament(p, "journey-record-tabs", [13, 712, 959, 105], [0, 250, 404, 44], "xh-mp-journey-tab-art");
      tabs(p, "\u65C5\u9014\u8BB0\u5F55", [["here", "\u6B64\u523B\u65C5\u7A0B", "compass"], ["memo", "\u65C5\u9014\u5907\u5FD8", "book"]], journeyPanel, (v) => journeyPanel = v, [35, 254, 334, 34], "xh-mp-journey-tabs");
      const route = panel(p, [0, 294, 404, 254], "xh-mp-route");
      ornament(route, "journey-route", [0, 0, 1575, 815], [0, 0, 404, 209], "xh-mp-route-frame");
      const scene = placePicture(s, "xh-mp-route-scene");
      if (journeyPanel === "memo") {
        scene.replaceChildren(originalWindow("travel-memo", [805, 174, 1020, 688], [], "xh-mp-media-image", assets, [], false));
        scene.style.setProperty("--photo-ratio", 1020 / 688);
      }
      route.append(scene, node3("span", void 0, "xh-mp-route-wash"));
      copy2(route, "h2", journeyPanel === "here" ? "\u6B64\u523B\u7684\u65C5\u7A0B" : "\u65C5\u9014\u5907\u5FD8", [26, 13, 161, 37]);
      copy2(route, "span", journeyPanel === "here" ? "Here & Now" : "Travel Notes", [172, 7, 202, 42], "xh-mp-script");
      if (journeyPanel === "here") {
        route.append(at(icon3("pin"), [17, 58, 24, 29]), at(icon3("compass"), [18, 96, 19, 21]));
        copy2(route, "h3", mobilePlaceTitle(s.\u573A\u666F.\u5730\u70B9), [46, 58, 183, 34], "xh-mp-place-title");
        copy2(route, "p", regionName(s.\u573A\u666F.\u5730\u533A), [45, 96, 166, 27], "xh-mp-route-region");
        copy2(route, "p", REGION_ART[s.\u573A\u666F.\u5730\u533A]?.summary ?? "\u5730\u533A\u8BB0\u5F55\u5F85\u8865", [23, 132, 115, 72], "xh-mp-region-copy");
        const totals = Object.entries(Object.values(s.\u7269\u54C1 ?? {}).filter((v) => /口粮|面包|干粮/.test(v.\u540D\u79F0)).reduce((a, v) => (a[v.\u5355\u4F4D] = (a[v.\u5355\u4F4D] ?? 0) + v.\u6570\u91CF, a), {}));
        control(route, "\u67E5\u770B\u5730\u56FE", () => select(4), [13, 211, 121, 32], "map");
        control(route, "\u65C5\u8D39 " + coins2(s.\u94B1\u5305.shared), () => open("ledger"), [145, 211, 121, 32], "coin");
        control(route, "\u53E3\u7CAE " + (totals.map(([u, n]) => n + " " + u).join("+") || "\u6682\u65E0"), () => {
          view.ownerFilter = "shared";
          view.itemCategory = "\u8865\u7ED9";
          view.itemPage = 0;
          inventoryPanel = "items";
          select(1);
        }, [277, 211, 114, 32], "bag");
      } else {
        copy2(route, "h3", "\u6700\u8FD1\u53D1\u751F", [22, 57, 145, 28], "xh-mp-memo-label");
        copy2(route, "p", value(s.\u65C5\u7A0B.\u91CD\u8981\u4E8B\u5B9E?.at(-1)?.\u5185\u5BB9), [22, 91, 145, 44], "xh-mp-memo-copy");
        copy2(route, "h3", "\u8BB0\u4E0B\u7684\u7EA6\u5B9A", [22, 141, 145, 28], "xh-mp-memo-label");
        copy2(route, "p", value(Object.values(s.\u65C5\u7A0B.\u7EA6\u5B9A ?? {}).at(-1)), [22, 175, 172, 30], "xh-mp-memo-copy");
        control(route, "\u67E5\u770B\u624B\u8BB0", () => select(3), [22, 211, 145, 33], "book");
      }
    }
    function inventoryNav(p) {
      const nav = tabs(p, "\u884C\u56CA\u5206\u533A", [["items", "\u7269\u54C1", "bag"], ["gear", "\u7A7F\u6234", "star"], ["detail", "\u8BE6\u60C5", "book"]], inventoryPanel, (v) => inventoryPanel = v, [11, 56, 382, 34]);
      nav.append(button2("\u8D26\u672C", () => open("ledger"), "coin", "xh-mp-tab"));
    }
    function itemButton(s, id, count = true) {
      const item = s.\u7269\u54C1?.[id], b = button2("\u67E5\u770B\u7269\u54C1\uFF1A" + value(item?.\u540D\u79F0), () => {
        view.selectedItem = id;
        inventoryPanel = "detail";
        render3();
      }, null, "xh-mp-item");
      b.replaceChildren(fragment("inventory-rich", [40, 517, 445, 266], "xh-mp-item-frame"), itemArtwork(item?.\u540D\u79F0 ?? "", "xh-mp-item-art", id), node3("span", value(item?.\u540D\u79F0) + (count ? " \xD7 " + item?.\u6570\u91CF : ""), "xh-mp-item-name"));
      b.dataset.item = id;
      b.setAttribute("aria-pressed", String(view.selectedItem === id));
      return b;
    }
    function inventory(s) {
      const p = page("inventory");
      p.dataset.panel = inventoryPanel;
      heading(p, inventoryPanel === "gear" ? "\u968F\u8EAB\u88C5\u5907" : "\u968F\u8EAB\u884C\u56CA", inventoryPanel === "gear" ? "Equipment" : "Our Satchel");
      inventoryNav(p);
      if (inventoryPanel === "items") {
        const owners = tabs(p, "\u884C\u56CA\u5F52\u5C5E", [["shared", "\u5171\u540C", "bag"], ["xingxing", "\u9192\u9192"], ["xiaogai", "\u5C0F\u76D6"]], view.ownerFilter, (v) => {
          view.ownerFilter = v;
          view.itemPage = 0;
        }, [12, 94, 380, 35], "xh-mp-owners");
        [...owners.children].slice(1).forEach((b, i) => b.prepend(c.face(i ? "xiaogai" : "xingxing", "xh-mp-tab-face")));
        tabs(p, "\u7269\u54C1\u7C7B\u522B", ["\u5168\u90E8", "\u8865\u7ED9", "\u88C5\u5907", "\u7D20\u6750", "\u7EAA\u5FF5"].map((v) => [v, v]), view.itemCategory, (v) => {
          view.itemCategory = v;
          view.itemPage = 0;
        }, [8, 135, 388, 26], "xh-mp-categories");
        const list = entries2(s.\u7269\u54C1).filter(([, v]) => (view.ownerFilter === "shared" || v.owner === view.ownerFilter) && (view.itemCategory === "\u5168\u90E8" || category(v.\u540D\u79F0) === view.itemCategory)), count = Math.max(1, Math.ceil(list.length / 6));
        view.itemPage = Math.max(0, Math.min(view.itemPage, count - 1));
        const grid = at(node3("div", void 0, "xh-mp-items"), [7, 167, 390, 307]);
        for (const [id] of list.slice(view.itemPage * 6, view.itemPage * 6 + 6)) grid.append(itemButton(s, id));
        if (!list.length) grid.append(node3("p", s.\u7269\u54C1 == null ? "\u7269\u54C1\u8D44\u6599\u5F85\u8865\u3002" : "\u6B64\u5206\u7C7B\u6682\u65E0\u7269\u54C1\u3002"));
        p.append(grid);
        pager(p, "\u7269\u54C1", view.itemPage, count, (v) => view.itemPage = v, [121, 477, 162, 28]);
        const line = panel(p, [0, 502, 404, 43], "xh-mp-wallet-line");
        copy2(line, "p", (view.ownerFilter === "shared" ? "\u5171\u540C\u65C5\u8D39" : NAMES2[view.ownerFilter]) + " \xB7 " + coins2(s.\u94B1\u5305[view.ownerFilter]), [15, 7, 219, 30]);
        control(line, "\u67E5\u770B\u8D26\u672C", () => open("ledger"), [237, 4, 154, 32], "coin");
      } else if (inventoryPanel === "gear") {
        ["xingxing", "xiaogai"].forEach((id, n) => {
          const group = panel(p, [0, 100 + n * 214, 404, 208], "xh-mp-gear-group");
          group.dataset.person = id;
          ornament(group, "journey-rich", [0, 182, 984, 595], [0, 0, 404, 208]);
          const who = control(group, "\u67E5\u770B" + NAMES2[id], () => open("person", id), [6, 0, 190, 66], null, "xh-mp-gear-person");
          who.replaceChildren(portrait(id), node3("strong", NAMES2[id]));
          const equipped = entries2(s.\u4EBA\u7269[id].\u88C5\u5907).map(([, item]) => item), count = Math.max(1, Math.ceil(equipped.length / 2));
          gearPages[id] = Math.min(gearPages[id], count - 1);
          const grid = at(node3("div", void 0, "xh-mp-gear-grid"), [10, 68, 383, 130]);
          for (const item of equipped.slice(gearPages[id] * 2, gearPages[id] * 2 + 2)) grid.append(itemButton(s, item, false));
          if (!equipped.length) grid.append(node3("p", "\u5C1A\u672A\u8BB0\u5F55\u7A7F\u6234\u88C5\u5907\u3002"));
          group.append(grid);
          if (count > 1) pager(group, NAMES2[id] + "\u88C5\u5907", gearPages[id], count, (v) => gearPages[id] = v, [226, 24, 151, 30]);
        });
      } else {
        const id = s.\u7269\u54C1?.[view.selectedItem] ? view.selectedItem : Object.keys(s.\u7269\u54C1 ?? {})[0], item = s.\u7269\u54C1?.[id];
        if (!item) {
          copy2(p, "p", "\u8BF7\u5148\u5728\u7269\u54C1\u9875\u9009\u62E9\u4E00\u4EF6\u7269\u54C1\u3002", [25, 180, 354, 80]);
          return;
        }
        const ids = Object.keys(s.\u7269\u54C1), n = ids.indexOf(id);
        copy2(p, "h2", item.\u540D\u79F0, [31, 108, 342, 37], "xh-mp-item-detail-title");
        copy2(p, "p", category(item.\u540D\u79F0), [33, 149, 340, 23], "xh-mp-centered");
        p.append(at(itemArtwork(item.\u540D\u79F0, "xh-mp-detail-art", id), [19, 179, 366, 203]));
        copy2(p, "p", item.\u89C4\u683C\u5F15\u7528 ?? "\u65C5\u884C\u7269\u54C1", [27, 383, 350, 31], "xh-mp-centered");
        const fields = at(node3("dl", void 0, "xh-mp-detail-fields"), [10, 420, 384, 74]);
        for (const [label, v] of [["\u6570\u91CF", item.\u6570\u91CF + " " + item.\u5355\u4F4D], ["\u5F52\u5C5E", NAMES2[item.owner] ?? "\u672A\u8BB0\u5F55"], ["\u6301\u6709\u8005", NAMES2[item.holder] ?? "\u672A\u8BB0\u5F55"], ["\u5B58\u653E", s.\u50A8\u4F4D?.[item.storage_id]?.\u7C7B\u578B ?? "\u672A\u8BB0\u5F55"]]) {
          const row = node3("div");
          row.append(node3("dt", label), node3("dd", v));
          fields.append(row);
        }
        p.append(fields);
        const previous = control(p, "\u4E0A\u4E00\u4EF6\u7269\u54C1", () => {
          view.selectedItem = ids[n - 1];
          render3();
        }, [61, 504, 125, 32], "arrow", "xh-mp-prev"), next = control(p, "\u4E0B\u4E00\u4EF6\u7269\u54C1", () => {
          view.selectedItem = ids[n + 1];
          render3();
        }, [218, 504, 125, 32], "arrow");
        previous.disabled = n <= 0;
        next.disabled = n >= ids.length - 1;
      }
    }
    function bonds(s) {
      const p = page("bonds");
      p.dataset.panel = bondPanel;
      heading(p, "\u6211\u4EEC\u7684\u6545\u4E8B", "Our Story", [0, 0, 404, 66]);
      tabs(p, "\u7F81\u7ECA\u5206\u533A", [["story", "\u63D2\u753B", "feather"], ["relationship", "\u5173\u7CFB\u4E0E\u7EA6\u5B9A", "heart"], ["memories", "\u5171\u540C\u8BB0\u5FC6", "book"]], bondPanel, (v) => bondPanel = v, [0, 71, 404, 34]);
      if (bondPanel === "story") {
        const f = panel(p, [0, 115, 404, 425], "xh-mp-story");
        f.append(at(media(gallery.selected("scene")), [8, 9, 384, 341]));
        ornament(f, "journey-rich", [0, 874, 984, 655], [0, 0, 404, 369]);
        copy2(f, "span", "Along the way, with you", [35, 355, 334, 31], "xh-mp-script xh-mp-centered");
        control(f, "\u5207\u6362\u65C5\u9014\u63D2\u753B", () => open("artbook", "scene"), [92, 387, 219, 32], "book");
      } else if (bondPanel === "relationship") {
        for (const [id, x] of [["xingxing", 14], ["xiaogai", 222]]) {
          const b = control(p, "\u67E5\u770B" + NAMES2[id], () => open("person", id), [x, 107, 168, 162], null, "xh-mp-portrait-action");
          b.replaceChildren(portrait(id));
          copy2(p, "h3", NAMES2[id], [x, 263, 168, 27], "xh-mp-centered");
        }
        ornament(p, "bonds-rich", [441, 517, 125, 159], [176, 150, 52, 67]);
        ornament(p, "bonds-rich", [36, 782, 939, 245], [1, 285, 402, 90]);
        copy2(p, "h3", "\u5DF2\u7ECF\u660E\u786E\u7684\u5173\u7CFB", [112, 291, 188, 28], "xh-mp-centered");
        const relation = panel(p, [31, 321, 343, 46], "xh-mp-relation");
        copy2(relation, "p", entries2(s.\u5173\u7CFB?.\u660E\u786E\u4E8B\u5B9E).map(([, v]) => value(v)).join("\n") || (s.\u5173\u7CFB?.\u660E\u786E\u4E8B\u5B9E == null ? "\u8D44\u6599\u5F85\u8865\u3002" : "\u5C1A\u65E0\u660E\u786E\u5173\u7CFB\u8BB0\u5F55\u3002"), [4, 7, 335, 38], "xh-mp-centered");
        ornament(p, "bonds-rich", [18, 1026, 969, 340], [0, 381, 404, 131]);
        copy2(p, "h3", "\u4E24\u4EBA\u7684\u7EA6\u5B9A", [170, 396, 202, 29], "xh-mp-centered");
        copy2(p, "p", entries2(s.\u65C5\u7A0B?.\u7EA6\u5B9A).map(([, v]) => value(v)).join("\n") || (s.\u65C5\u7A0B?.\u7EA6\u5B9A == null ? "\u8D44\u6599\u5F85\u8865\u3002" : "\u5C1A\u65E0\u7EA6\u5B9A\u8BB0\u5F55\u3002"), [172, 433, 193, 48]);
        control(p, "\u67E5\u770B\u8BB0\u5F55\u6765\u6E90", () => open("memories"), [247, 513, 153, 31], "search");
      } else {
        copy2(p, "h3", "\u5171\u540C\u8D70\u8FC7\u7684\u65F6\u523B", [11, 117, 220, 30]);
        control(p, "\u67E5\u770B\u8BB0\u5F55\u6765\u6E90", () => open("memories"), [257, 116, 141, 30], "book");
        const ids = gallery.available("scene").filter((id) => id !== "scene-default").reverse(), count = Math.max(1, Math.ceil(ids.length / 3));
        memoryPage = Math.max(0, Math.min(memoryPage, count - 1));
        ornament(p, "bonds-memories-rich", [0, 332, 1004, 1075], [0, 149, 404, 358]);
        ids.slice(memoryPage * 3, memoryPage * 3 + 3).forEach((id, i) => {
          const row = panel(p, [0, 151 + i * 119, 404, 114], "xh-mp-memory-row");
          row.append(at(media(id), [16, 8, 220, 98]));
          copy2(row, "h3", gallery.entry(id)?.title ?? "\u65C5\u9014\u63D2\u753B", [246, 21, 111, 41]);
          copy2(row, "p", "\u5DF2\u8BB0\u5F55\u7684\u65C5\u9014\u63D2\u753B", [247, 67, 118, 31], "xh-mp-small");
          const b = control(row, "\u9009\u62E9\u8FD9\u5E45\u63D2\u753B\uFF1A" + gallery.entry(id)?.title, () => gallery.choose("scene", null, id), [7, 7, 226, 98], null, "xh-mp-picture-action");
          b.dataset.artId = id;
        });
        if (!ids.length) copy2(p, "p", "\u5C1A\u65E0\u5DF2\u8BB0\u5F55\u7684\u5267\u60C5\u63D2\u753B\u3002", [27, 195, 350, 55]);
        pager(p, "\u5171\u540C\u8BB0\u5FC6", memoryPage, count, (v) => memoryPage = v);
      }
    }
    function memorySources(s) {
      const p = page("sources");
      heading(p, "\u5171\u540C\u7ECF\u5386", "Memories");
      control(p, "\u8FD4\u56DE", () => select(2), [5, 3, 69, 29], "arrow", "xh-mp-prev");
      const rows3 = s.\u65C5\u7A0B?.\u91CD\u8981\u4E8B\u5B9E ?? [];
      sourcePage = Math.max(0, Math.min(sourcePage, rows3.length - 1));
      const r = rows3[sourcePage];
      if (r) {
        p.append(at(placePicture({ ...s, \u573A\u666F: { ...s.\u573A\u666F, \u5730\u70B9: r.\u5730\u70B9 } }), [15, 70, 374, 201]));
        copy2(p, "h2", mobilePlaceTitle(r.\u5730\u70B9), [20, 282, 365, 39]);
        copy2(p, "p", value(r.\u5185\u5BB9), [23, 333, 358, 93]);
        copy2(p, "h3", "\u8BB0\u5F55\u4F9D\u636E", [23, 435, 358, 25]);
        copy2(p, "p", value(r.\u4F9D\u636E), [23, 463, 358, 44]);
      } else copy2(p, "p", "\u8FD8\u6CA1\u6709\u5171\u540C\u7ECF\u5386\u8BB0\u5F55\u3002", [25, 120, 350, 60]);
      pager(p, "\u5171\u540C\u7ECF\u5386", sourcePage, rows3.length, (v) => sourcePage = v);
    }
    function transit(s) {
      const p = page("transit");
      heading(p, "\u6B64\u523B\u7684\u65C5\u7A0B", "Here & Now");
      control(p, "\u8FD4\u56DE", () => select(0), [5, 3, 69, 29], "arrow", "xh-mp-prev");
      p.append(at(placePicture(s), [12, 68, 380, 202]));
      copy2(p, "h2", mobilePlaceTitle(s.\u573A\u666F.\u5730\u70B9), [24, 279, 357, 38]);
      copy2(p, "p", regionName(s.\u573A\u666F.\u5730\u533A), [24, 324, 357, 28]);
      const list = at(node3("dl", void 0, "xh-mp-transit-fields"), [24, 361, 355, 169]);
      for (const [key, v] of [["\u65E5\u671F", s.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F], ["\u5929\u6C14", s.\u573A\u666F.\u5929\u6C14], ["\u5B63\u8282", s.\u573A\u666F.\u65F6\u95F4.\u5B63\u8282], ["\u4EA4\u901A", s.\u65C5\u7A0B.\u4EA4\u901A?.\u63CF\u8FF0], ["\u65F6\u6BB5", s.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5], ["\u8DEF\u51B5", s.\u65C5\u7A0B.\u4EA4\u901A?.\u8DEF\u51B5]]) {
        const row = node3("div");
        row.append(node3("dt", key), node3("dd", value(v)));
        list.append(row);
      }
      p.append(list);
    }
    return { journey, inventory, bonds, notebook: notebook.render, memorySources, transit, openItem(id) {
      inventoryPanel = "detail";
      view.selectedItem = id;
    }, reset() {
      person = null;
      journeyPanel = "here";
      inventoryPanel = "items";
      bondPanel = "story";
      memoryPage = 0;
      sourcePage = 0;
      gearPages = { xingxing: 0, xiaogai: 0 };
      notebook.reset();
    } };
  }

  // src/ui/map-themes.mjs
  var rows2 = [
    ["REG-01", "river", "water", "#557d8f", "#edf5f6", "22px", "\u82A6\u82C7\u4E0E\u6CB3\u821F"],
    ["REG-02", "meadow", "feather", "#bd8247", "#fff1df", "18px 7px 18px 7px", "\u7C89\u84DD\u82B1\u679D"],
    ["REG-03", "city", "castle", "#896c50", "#f6eee3", "5px", "\u77F3\u62F1\u4E0E\u5C01\u5370"],
    ["REG-04", "coast", "ship", "#447f9a", "#eaf5fa", "8px 22px 8px 22px", "\u8D1D\u58F3\u4E0E\u7EF3\u7ED3"],
    ["REG-05", "prairie", "wheat", "#88743b", "#f8f1db", "16px", "\u9EA6\u7A57\u4E0E\u7FBD\u8349"],
    ["REG-06", "highland", "mountain", "#776a94", "#f1edf8", "7px 20px", "\u77F3\u6960\u4E0E\u98CE\u706F"],
    ["REG-07", "mountain", "mountain", "#5c738c", "#edf2f7", "6px", "\u6676\u77F3\u4E0E\u82D4\u8349"],
    ["REG-08", "forest", "forest", "#4f795d", "#edf5e9", "20px 5px", "\u8568\u53F6\u4E0E\u6A61\u679D"],
    ["REG-09", "lake", "water", "#497f84", "#e9f7f5", "24px", "\u7761\u83B2\u4E0E\u6C34\u7EB9"],
    ["REG-10", "badland", "sun", "#97724b", "#f7eddf", "7px 16px 7px 16px", "\u7802\u5CA9\u4E0E\u5E72\u8349"],
    ["REG-11", "desert", "palm", "#aa793b", "#fff1d9", "20px 20px 6px 6px", "\u68D5\u6988\u4E0E\u73BB\u7483\u6676"],
    ["REG-12", "tundra", "snow", "#607f9c", "#eef7ff", "10px", "\u971C\u679D\u4E0E\u96EA\u82B1"],
    ["REG-13", "volcanic", "volcano", "#94634c", "#f7ece3", "6px 18px", "\u9ED1\u5CA9\u4E0E\u9676\u7247"],
    ["REG-14", "cliff", "star", "#71628f", "#f1ecfc", "22px 6px 22px 6px", "\u6D77\u5D16\u8349\u53F6\u4E0E\u661F\u5149"]
  ];
  var MAP_THEMES = Object.fromEntries(rows2.map(([id, key, icon3, accent, wash, radius, motif]) => [id, { key, icon: icon3, accent, wash, radius, motif, ornament: id === "REG-02" ? null : "mapdir-ornament-" + id.toLowerCase() }]));
  var MAP_DIRECTORY_REFERENCE = { art: "mapdir-overview", width: 1838, height: 856, tabEdges: [45, 237, 408, 577, 756, 939], back: [1633, 108, 176, 47] };

  // src/ui/mobile-map-home.mjs
  var MOBILE_MAP_POINTS = MAP_POS;
  var PLANE_HEIGHT = 329;
  var PLANE_WIDTH = PLANE_HEIGHT * 1810 / 734;
  var VIEW_WIDTH = 404;
  function createMobileMapHome(c) {
    const { node: node3, button: button2, icon: icon3, content, assets, view, render: render3, open } = c;
    let camera = { zoom: 1, x: 0, y: 0, initialized: false }, resize = () => {
    };
    function mapPage(s) {
      const p = node3("div", void 0, "xh-phone-page xh-phone-map");
      const heading = node3("header", void 0, "xh-phone-map-heading");
      heading.append(icon3("compass"), node3("h2", "\u57C3\u5C14\u745F\u4E9A \xB7 \u65C5\u9014\u5730\u56FE"), node3("span", "Aeltheria", "xh-phone-map-script"));
      const legend = node3("div", void 0, "xh-phone-map-legend");
      for (const [text2, type] of [["\u5F53\u524D\u6240\u5728", "pin"], ["\u5DF2\u5230\u8BBF", "star"]]) {
        const e = node3("span");
        e.append(icon3(type), node3("span", text2));
        legend.append(e);
      }
      heading.append(legend);
      p.append(heading);
      const viewport = node3("div", void 0, "xh-phone-map-viewport");
      viewport.tabIndex = 0;
      viewport.setAttribute("aria-label", "\u5927\u9646\u5730\u56FE\uFF0C\u53EF\u7528\u65B9\u5411\u952E\u5E73\u79FB\uFF0C\u4F7F\u7528\u52A0\u51CF\u6309\u94AE\u7F29\u653E");
      const plane = node3("div", void 0, "xh-phone-map-plane");
      plane.style.width = PLANE_WIDTH + "px";
      plane.style.height = PLANE_HEIGHT + "px";
      plane.style.left = (VIEW_WIDTH - PLANE_WIDTH) / 2 + "px";
      plane.dataset.mapSource = "pc-original";
      appendMapSurface(plane, assets);
      const visited = new Set(Object.keys(s.\u65C5\u7A0B?.\u5230\u8BBF ?? {}).map((id) => WORLD.places[id]?.region));
      const selected = WORLD.regions[view.map.region] ? view.map.region : s.\u573A\u666F.\u5730\u533A;
      for (const [id, [x, y]] of Object.entries(MOBILE_MAP_POINTS)) {
        const b = button2("\u67E5\u770B\u5730\u533A\uFF1A" + regionName(id), () => {
          view.map.region = id;
          render3();
          content.querySelector('[data-region="' + id + '"]')?.focus({ preventScroll: true });
        }, null, "xh-phone-map-marker");
        b.replaceChildren(icon3(MAP_THEMES[id].icon), node3("span", regionName(id)));
        b.dataset.region = id;
        b.dataset.current = String(id === s.\u573A\u666F.\u5730\u533A);
        b.dataset.visited = String(visited.has(id));
        b.setAttribute("aria-pressed", String(id === selected));
        b.style.left = x + "%";
        b.style.top = y + "%";
        b.style.setProperty("--region-accent", MAP_THEMES[id].accent);
        if (id === s.\u573A\u666F.\u5730\u533A) {
          const pin = node3("span", void 0, "xh-phone-map-pin");
          pin.append(icon3("pin"));
          b.prepend(pin);
        }
        plane.append(b);
      }
      viewport.append(plane);
      p.append(viewport);
      let amount;
      function transform() {
        camera.zoom = Math.max(1, Math.min(2.5, camera.zoom));
        const maxX = Math.max(0, (PLANE_WIDTH * camera.zoom - VIEW_WIDTH) / 2), maxY = Math.max(0, (PLANE_HEIGHT * camera.zoom - PLANE_HEIGHT) / 2);
        camera.x = Math.max(-maxX, Math.min(maxX, camera.x));
        camera.y = Math.max(-maxY, Math.min(maxY, camera.y));
        plane.style.transform = `translate(${camera.x}px,${camera.y}px) scale(${camera.zoom})`;
        if (amount) amount.textContent = Math.round(camera.zoom * 100) + "%";
      }
      resize = transform;
      function zoom(next) {
        const old = camera.zoom;
        camera.zoom = Math.max(1, Math.min(2.5, next));
        camera.x *= camera.zoom / old;
        camera.y *= camera.zoom / old;
        transform();
      }
      function locate() {
        camera.zoom = 1.6;
        const [x, y] = MOBILE_MAP_POINTS[s.\u573A\u666F.\u5730\u533A];
        camera.x = (0.5 - x / 100) * PLANE_WIDTH * camera.zoom;
        camera.y = (0.5 - y / 100) * PLANE_HEIGHT * camera.zoom;
        transform();
      }
      const controls = node3("nav", void 0, "xh-phone-map-controls");
      controls.setAttribute("aria-label", "\u5730\u56FE\u5DE5\u5177");
      for (const [label, glyph, run] of [["\u653E\u5927\u5730\u56FE", "+", () => zoom(camera.zoom + 0.25)], ["\u7F29\u5C0F\u5730\u56FE", "\u2212", () => zoom(camera.zoom - 0.25)], ["\u56DE\u5230\u5F53\u524D\u4F4D\u7F6E", null, locate], ["\u91CD\u7F6E\u5730\u56FE\u89C6\u56FE", null, () => {
        camera = { zoom: 1, x: 0, y: 0, initialized: true };
        transform();
      }]]) {
        const b = button2(label, run, null);
        b.replaceChildren(glyph ? node3("span", glyph) : icon3(label === "\u91CD\u7F6E\u5730\u56FE\u89C6\u56FE" ? "map" : "compass"));
        controls.append(b);
      }
      p.append(controls);
      const hint = node3("p", void 0, "xh-phone-map-hint");
      amount = node3("span", "100%");
      hint.append(amount, node3("span", " \xB7 \u62D6\u52A8\u67E5\u770B \xB7 \u53CC\u6307\u7F29\u653E"));
      p.append(hint);
      const card = node3("section", void 0, "xh-phone-map-region xh-mp-paper");
      card.dataset.region = selected;
      card.style.setProperty("--region-accent", MAP_THEMES[selected].accent);
      card.style.setProperty("--mp-paper-rim", `url("${assets["original-phone-layer-paper-rim"] ?? "assets/mobile-layers/paper-rim-v1.png"}")`);
      const figure = node3("div", void 0, "xh-phone-map-thumbnail"), img = node3("img"), record = REGION_ART[selected];
      let src;
      for (const images of c.getRegionImages?.() ?? []) {
        src = skillImageURL(images?.[selected]);
        if (src) break;
      }
      img.src = src ?? assets["original-" + record.asset] ?? "assets/original/" + record.file;
      img.alt = regionName(selected) + "\u5730\u533A\u98CE\u666F";
      img.draggable = false;
      img.decoding = "async";
      img.addEventListener("error", () => {
        img.remove();
        figure.append(node3("span", "\u5730\u533A\u914D\u56FE\u5F85\u8865"));
      }, { once: true });
      figure.append(img);
      const copy2 = node3("div", void 0, "xh-phone-map-region-copy");
      copy2.append(node3("h3", regionName(selected)), node3("p", selected === s.\u573A\u666F.\u5730\u533A ? "\u5F53\u524D\u6240\u5728" : visited.has(selected) ? "\u5DF2\u5230\u8BBF" : "\u5C1A\u672A\u5230\u8BBF", "xh-phone-map-visited"), node3("p", record.summary, "xh-phone-map-description"), button2("\u67E5\u770B\u5730\u533A\u4E0E\u5730\u70B9", () => open("map-directory", selected), "arrow", "xh-phone-map-open"));
      card.append(figure, copy2, button2("\u5730\u533A\u76EE\u5F55", () => open("map-directory", selected), "map", "xh-phone-map-directory"));
      p.append(card);
      content.append(p);
      if (!camera.initialized) {
        const [x] = MOBILE_MAP_POINTS[s.\u573A\u666F.\u5730\u533A];
        camera.x = (0.5 - x / 100) * PLANE_WIDTH;
        camera.initialized = true;
      }
      transform();
      const pointers = /* @__PURE__ */ new Map();
      let span = null;
      viewport.addEventListener("pointerdown", (e) => {
        if (e.target.closest("button")) return;
        viewport.setPointerCapture?.(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        span = null;
      });
      viewport.addEventListener("pointermove", (e) => {
        if (!pointers.has(e.pointerId)) return;
        const prev = pointers.get(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pointers.size === 1) {
          const scale = c.getScale();
          camera.x += (e.clientX - prev.x) / scale;
          camera.y += (e.clientY - prev.y) / scale;
          transform();
        } else {
          const [a, b] = [...pointers.values()], next = Math.hypot(a.x - b.x, a.y - b.y);
          if (span) zoom(camera.zoom * next / span);
          span = next;
        }
      });
      const end = (e) => {
        pointers.delete(e.pointerId);
        span = null;
      };
      viewport.addEventListener("pointerup", end);
      viewport.addEventListener("pointercancel", end);
      viewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        zoom(camera.zoom + (e.deltaY < 0 ? 0.15 : -0.15));
      }, { passive: false });
      viewport.addEventListener("keydown", (e) => {
        if (e.target !== viewport || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "+", "-"].includes(e.key)) return;
        e.preventDefault();
        if (e.key === "+") zoom(camera.zoom + 0.25);
        else if (e.key === "-") zoom(camera.zoom - 0.25);
        else {
          camera.x += e.key === "ArrowLeft" ? 30 : e.key === "ArrowRight" ? -30 : 0;
          camera.y += e.key === "ArrowUp" ? 30 : e.key === "ArrowDown" ? -30 : 0;
          transform();
        }
      });
    }
    return { mapPage, resize: () => resize(), reset() {
      camera = { zoom: 1, x: 0, y: 0, initialized: false };
    } };
  }

  // src/world/atlas.json
  var atlas_default = {
    authority: "driver-approved-trial",
    approvalEvidence: "EVD-USER-041",
    excludes: [
      "unapproved-prices",
      "OC-details",
      "quest-progress"
    ],
    regions: [
      {
        id: "REG-01",
        name: "\u7EF4\u5C14\u767B\u6CB3\u8C37",
        prefix: "VIR",
        source: "world/regions/REG-01_VIRDEN.md",
        life: "\u7EF4\u5C14\u767B\u5C5E\u4E8E\u74E6\u5C14\u767B\u738B\u56FD\uFF0C\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u517D\u4EBA\u5BB6\u5EAD\u3002\u5C45\u6C11\u4ECE\u4E8B\u6CB3\u8FD0\u3001\u519C\u4E1A\u3001\u4FEE\u5177\u548C\u5546\u4E1A\uFF0C\u96F7\u6587\u7EB3\u4E3A\u738B\u56FD\u9996\u90FD\u3002",
        sight: "\u65E7\u95F8\u4F4D\u4E8E\u5854\u4F26\u6CB3\u652F\u6E20\u65C1\uFF0C\u4F7F\u7528\u6C34\u5DE5\u9B54\u6CD5\u5C06\u6C34\u62AC\u5165\u9AD8\u5904\u8F93\u6C34\u69FD\u3002\u65B0\u5F0F\u5206\u6D41\u8BBE\u65BD\u627F\u62C5\u4E3B\u8981\u4F9B\u6C34\uFF0C\u90E8\u5206\u65E7\u8BBE\u5907\u4ECD\u5728\u7EF4\u62A4\u3002\u79BB\u5730\u6570\u7C73\u7684\u77F3\u62F1\u95F4\u6709\u8FDE\u7EED\u900F\u660E\u6C34\u5E26\uFF0C\u6C34\u6D41\u6700\u7EC8\u8FDB\u5165\u77F3\u6E20\uFF0C\u6D6E\u53F6\u3001\u5C0F\u9C7C\u548C\u7EC6\u6C99\u53EF\u968F\u6C34\u7ECF\u8FC7\u3002\u516C\u5171\u6B65\u9053\u4E0E\u65E7\u5DE5\u4F5C\u95F4\u5206\u5F00\uFF1B\u5DE5\u4F5C\u95F4\u5B58\u5728\u6E7F\u6ED1\u53F0\u9636\u3001\u677E\u52A8\u683C\u6805\u548C\u627F\u538B\u7BA1\u9053\u3002\u5F00\u653E\u8303\u56F4\u968F\u8BBE\u5907\u7EF4\u62A4\u72B6\u6001\u8C03\u6574\u3002",
        risk: "\u65E7\u95F8\u5DE5\u4F5C\u95F4\u6709\u6E7F\u6ED1\u53F0\u9636\u3001\u677E\u52A8\u683C\u6805\u548C\u627F\u538B\u7BA1\u9053\uFF1B\u65E7\u62D6\u8239\u9053\u6709\u6D2A\u6C34\u635F\u574F\u53CA\u68D8\u7532\u6CB3\u8725\u3002",
        travel: "\u5317\u63A5\u963F\u5C14\u7EF4\u514B\uFF0C\u5357\u63A5\u585E\u4F26\u8FBE\u3002\u6CB3\u5CB8\u5E72\u9053\u53EF\u6B65\u884C\u3001\u9A91\u9A6C\u53CA\u4F7F\u7528\u9002\u7528\u8F66\u8F86\uFF1B\u821F\u8239\u53D7\u6C34\u4F4D\u548C\u6CB3\u6BB5\u6761\u4EF6\u9650\u5236\u3002"
      },
      {
        id: "REG-02",
        name: "\u585E\u4F26\u8FBE\u4E18\u9675",
        prefix: "SER",
        source: "world/regions/REG-02_SERENDA.md",
        life: "\u8D1D\u5C14\u8499\u7279\u5C5E\u4E8E\u74E6\u5C14\u767B\uFF0C\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u517D\u4EBA\u5BB6\u5EAD\u3002\u5468\u56F4\u7ECF\u8425\u8461\u8404\u56ED\u3001\u679C\u56ED\u548C\u7267\u573A\uFF0C\u4F9B\u5E94\u9762\u5305\u3001\u5976\u916A\u3001\u7096\u8C46\u548C\u679C\u54C1\u3002",
        sight: "\u5965\u96F7\u65AF\u82B1\u6D77\u4E0E\u5965\u96F7\u65AF\u5761\u5730\u6307\u540C\u4E00\u5730\u70B9 LOC-SER-004\u3002\u4E3B\u4F53\u957F\u7EA612\u516C\u91CC\uFF0C\u5BBD\u7EA63\u20145\u516C\u91CC\uFF0C\u5206\u5E03\u4E8E\u4F4E\u7F13\u5C71\u810A\u4E0E\u6D45\u8C37\u3002\u5176\u95F4\u6709\u7EC6\u6EAA\u3001\u8349\u5F84\u3001\u77EE\u6797\u548C\u8349\u5761\uFF0C\u5916\u56F4\u4E3A\u7267\u573A\u3001\u8461\u8404\u56ED\u4E0E\u519C\u5E84\u3002",
        risk: "\u79C1\u4EBA\u7530\u5730\u548C\u517B\u62A4\u533A\u91C7\u96C6\u9700\u8BB8\u53EF\uFF1B\u65E7\u5821\u5730\u7A96\u3001\u677E\u52A8\u697C\u677F\u4E0E\u77F3\u7FFC\u8760\u6816\u606F\u533A\u5B58\u5728\u98CE\u9669\u3002",
        travel: "\u5317\u63A5\u7EF4\u5C14\u767B\uFF0C\u5357\u63A5\u5361\u5FB7\u6E29\u3002\u7F13\u5761\u5E72\u9053\u901A\u666E\u901A\u8F66\u9A6C\uFF0C\u82B1\u6D77\u5185\u4E3A\u8349\u5F84\u548C\u6B65\u9053\u3002\u82B1\u6D77\u5165\u53E3\u8DDD\u8D1D\u5C14\u8499\u7279\u7EA611\u516C\u91CC\u3002"
      },
      {
        id: "REG-03",
        name: "\u963F\u5C14\u7EF4\u514B",
        prefix: "ALV",
        source: "world/regions/REG-03_ALVIK.md",
        life: "\u963F\u5C14\u7EF4\u514B\u4E3A\u5854\u4F26\u6CB3\u4E0A\u6E38\u8F6C\u8FD0\u81EA\u7531\u5E02\uFF0C\u4EBA\u7C7B\u4E0E\u517D\u4EBA\u6570\u91CF\u63A5\u8FD1\u3002\u57CE\u5185\u6709\u5546\u8D38\u3001\u8BD1\u5199\u3001\u624B\u5DE5\u4E1A\u3001\u533B\u836F\u53CA\u8F66\u9A6C\u670D\u52A1\u3002",
        sight: "\u90E8\u5206\u8001\u6865\u4EE5\u5B9A\u671F\u7EF4\u62A4\u7684\u7B26\u6587\u88C5\u7F6E\u8F85\u52A9\u627F\u91CD\u548C\u5F00\u5408\u3002\u7EF4\u7279\u62C9\u6865\u7FA4\u8FDE\u63A5\u6CB3\u5CB8\u4E0E\u9AD8\u4F4E\u8857\u9053\uFF0C\u90E8\u5206\u65E7\u8DEF\u4F4D\u4E8E\u65B0\u8DEF\u4E0B\u65B9\u3002\u591A\u4F26\u8857\u8BBE\u98DF\u94FA\u3001\u4FEE\u8865\u94FA\u53CA\u8BD1\u5199\u670D\u52A1\u3002\u963F\u4F26\u8428\u6D74\u573A\u63D0\u4F9B\u516C\u5171\u7A7A\u95F4\u3001\u72EC\u7ACB\u5C0F\u95F4\u3001\u6D17\u8863\u4E0E\u70ED\u6C34\u670D\u52A1\uFF0C\u5404\u9879\u670D\u52A1\u6309\u4EF7\u6536\u8D39\u3002",
        risk: "\u65E7\u8857\u6697\u5C94\u548C\u6865\u8DEF\u7ED3\u6784\u7EF4\u62A4\u7A0B\u5EA6\u4E0D\u540C\uFF0C\u5F00\u653E\u8303\u56F4\u6309\u8DEF\u51B5\u7BA1\u7406\u3002",
        travel: "\u897F\u5357\u63A5\u7EF4\u5C14\u767B\uFF0C\u5317\u63A5\u970D\u5C14\u4E39\uFF0C\u4E1C\u63A5\u675C\u5C14\u6587\u3002\u57CE\u5E02\u8FDE\u63A5\u9646\u8FD0\u548C\u6CB3\u8FD0\u3002"
      },
      {
        id: "REG-04",
        name: "\u5361\u5FB7\u6E29\u6D77\u6E7E",
        prefix: "CAD",
        source: "world/regions/REG-04_CADWEN.md",
        life: "\u8D1D\u8428\u5C14\u6E2F\u5C5E\u4E8E\u74E6\u5C14\u767B\uFF0C\u4F4D\u4E8E\u5854\u4F26\u6CB3\u5165\u6D77\u4E00\u5E26\uFF0C\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u517D\u4EBA\u5BB6\u5EAD\u3002\u5C45\u6C11\u4ECE\u4E8B\u9020\u8239\u3001\u6355\u9C7C\u3001\u4FEE\u7F51\u3001\u88C5\u5378\u53CA\u8D38\u6613\u3002",
        sight: "\u57C3\u65AF\u4F26\u6D77\u8680\u6D1E\u77F3\u58C1\u4E2D\u6709\u53E4\u8001\u6D77\u517D\u9AA8\u9ABC\uFF0C\u9732\u51FA\u7684\u808B\u9AA8\u4F4D\u4E8E\u6D1E\u9876\u3002\u4F4E\u6F6E\u65F6\u5F00\u653E\u6B65\u9053\u53EF\u89C1\u9AA8\u9ABC\uFF0C\u6D1E\u5185\u76D0\u6676\u968F\u6F6E\u58F0\u5171\u9E23\u3002\u6D1E\u5185\u5B58\u5728\u6DA8\u6F6E\u3001\u6E7F\u6ED1\u548C\u8FF7\u8DEF\u98CE\u9669\u3002\u7EF4\u8428\u6069\u65E7\u5824\u9000\u6F6E\u65F6\u9732\u51FA\u77F3\u8DEF\u548C\u79EF\u6C34\u6D3C\uFF0C\u90E8\u5206\u5824\u6BB5\u88AB\u6D77\u6C34\u7834\u574F\uFF0C\u8FDE\u63A5\u8FD1\u5CB8\u7901\u53F0\u3002",
        risk: "\u6D77\u8680\u6D1E\u548C\u65E7\u5824\u5B58\u5728\u6DA8\u6F6E\u3001\u6ED1\u77F3\u3001\u8FF7\u8DEF\u53CA\u635F\u6BC1\u8DEF\u6BB5\u3002",
        travel: "\u5185\u9646\u63A5\u585E\u4F26\u8FBE\uFF0C\u6CBF\u6D77\u4E1C\u63A5\u7EF4\u65AF\u5361\uFF0C\u6CBF\u5CB8\u8239\u4E0E\u51FA\u5165\u6E56\u6C34\u7CFB\u8FDE\u63A5\u6D1B\u65AF\u6587\u3002\u822A\u8FD0\u53D7\u6F6E\u6C50\u3001\u8239\u671F\u53CA\u5177\u4F53\u822A\u7EBF\u9650\u5236\u3002"
      },
      {
        id: "REG-05",
        name: "\u970D\u5C14\u4E39\u5E73\u539F",
        prefix: "HOR",
        source: "world/regions/REG-05_HORDAN.md",
        life: "\u970D\u5C14\u4E39\u4E3A\u683C\u62C9\u591A\u514B\u6838\u5FC3\u5E73\u539F\u3002\u4E4C\u5C14\u8FBE\u514B\u4EE5\u517D\u4EBA\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u4EBA\u7C7B\u548C\u534A\u517D\u4EBA\u5BB6\u5EAD\uFF0C\u519C\u4E1A\u3001\u7267\u4E1A\u3001\u8FD0\u8F93\u548C\u57CE\u5E02\u5546\u4E1A\u53D1\u8FBE\u3002",
        sight: "\u77F3\u73AF\u7531\u6570\u5341\u5EA7\u53E4\u4EE3\u7ACB\u77F3\u7EC4\u6210\uFF0C\u4E3B\u4F53\u8DE8\u7EA62\u516C\u91CC\uFF0C\u6700\u9AD8\u7ACB\u77F3\u8FD140\u7C73\u3002\u77F3\u9762\u4E3A\u6DF1\u7070\u8272\uFF0C\u6709\u98CE\u8680\u69FD\u3001\u52A0\u5DE5\u75D5\u8FF9\u3001\u5730\u8863\u53CA\u9E1F\u5DE2\u3002\u5B8C\u6574\u5EFA\u9020\u5DE5\u6CD5\u5C1A\u65E0\u5B9A\u8BBA\u3002\u8D77\u98CE\u65F6\u69FD\u9699\u548C\u77F3\u95F4\u7A7A\u8154\u53D1\u58F0\uFF0C\u98CE\u505C\u540E\u505C\u6B62\u3002\u7EF4\u62A4\u6B65\u9053\u7ECF\u8FC7\u5916\u73AF\u548C\u89C2\u666F\u5761\uFF0C\u90E8\u5206\u77F3\u5EA7\u677E\u52A8\uFF0C\u9876\u90E8\u4E0E\u52A8\u7269\u5DE2\u533A\u672A\u5217\u5165\u666E\u901A\u6B65\u9053\u3002",
        risk: "\u77F3\u73AF\u90E8\u5206\u77F3\u5EA7\u677E\u52A8\uFF0C\u9876\u90E8\u53CA\u9E1F\u7C7B\u5DE2\u533A\u4E0D\u5C5E\u4E8E\u666E\u901A\u7EF4\u62A4\u6B65\u9053\u3002",
        travel: "\u5357\u63A5\u963F\u5C14\u7EF4\u514B\uFF0C\u4E1C\u5317\u63A5\u5E03\u96F7\u5361\u3002\u5E72\u9053\u9002\u7528\u666E\u901A\u8F66\u9A6C\uFF0C\u53EF\u822A\u6CB3\u6BB5\u6709\u6E21\u8239\u3002"
      },
      {
        id: "REG-06",
        name: "\u5E03\u96F7\u5361\u9AD8\u5730",
        prefix: "BRE",
        source: "world/regions/REG-06_BREKA.md",
        life: "\u79D1\u5C14\u74E6\u6069\u5C5E\u4E8E\u683C\u62C9\u591A\u514B\u9AD8\u5730\u805A\u5C45\u533A\uFF0C\u4EE5\u517D\u4EBA\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u4EBA\u7C7B\u4E0E\u6DF7\u8840\u5C45\u6C11\u3002\u5C45\u6C11\u4ECE\u4E8B\u7EC7\u9020\u3001\u8FD0\u8F93\u3001\u5C71\u9053\u670D\u52A1\u548C\u53E4\u57CE\u7EF4\u62A4\u3002",
        sight: "\u53E4\u57CE\u5BBD\u7EA61.5\u516C\u91CC\uFF0C\u5EFA\u4E8E\u5CE1\u8C37\u4E0A\u7A7A\u7684\u60AC\u6D6E\u5CA9\u53F0\uFF0C\u7531\u53E4\u4EE3\u9635\u5217\u627F\u6258\uFF0C\u4F5C\u7528\u8303\u56F4\u56FA\u5B9A\u4E8E\u8BE5\u5CE1\u8C37\u3002\u57CE\u5185\u4FDD\u7559\u6B8B\u5899\u3001\u77F3\u697C\u3001\u65AD\u6865\u548C\u9AD8\u5854\uFF0C\u591A\u6570\u5EFA\u7B51\u5C4B\u9876\u635F\u574F\uFF0C\u5916\u73AF\u90E8\u5206\u533A\u57DF\u53D7\u5230\u7EF4\u62A4\u3002\u7EF4\u62A4\u8005\u638C\u63E1\u5DF2\u77E5\u88C5\u7F6E\u7684\u68C0\u67E5\u65B9\u6CD5\uFF0C\u5B8C\u6574\u5EFA\u9020\u6280\u672F\u672A\u77E5\u3002\u7528\u6C34\u6765\u81EA\u84C4\u6C34\u8BBE\u65BD\uFF0C\u96E8\u540E\u591A\u4F59\u6C34\u6CBF\u5CA9\u53F0\u5916\u7F18\u6392\u5165\u4E0B\u65B9\u6EAA\u8C37\u3002",
        risk: "\u53E4\u57CE\u5185\u5385\u3001\u65AD\u5ECA\u3001\u5730\u4E0B\u88C5\u7F6E\u548C\u65E7\u5B88\u536B\u5B58\u5728\u98CE\u9669\uFF0C\u5927\u98CE\u53EF\u80FD\u6682\u505C\u5347\u964D\u8231\u53CA\u98DE\u884C\u5BA2\u8FD0\u3002",
        travel: "\u897F\u63A5\u970D\u5C14\u4E39\uFF0C\u5357\u63A5\u675C\u5C14\u6587\uFF0C\u4E1C\u5317\u63A5\u8BFA\u5C14\u7EF4\u514B\u3002\u7EF4\u5FB7\u62C9\u7AD9\u4EE5\u5347\u964D\u8231\u8FDE\u63A5\u53E4\u57CE\uFF0C\u72EE\u9E6B\u9A7F\u573A\u7ECF\u8425\u6709\u6761\u4EF6\u7684\u77ED\u7A0B\u642D\u4E58\uFF0C\u90E8\u5206\u5C71\u5F84\u4E0D\u901A\u8F66\u8F86\u3002"
      },
      {
        id: "REG-07",
        name: "\u675C\u5C14\u6587\u5C71\u8109",
        prefix: "DUR",
        source: "world/regions/REG-07_DURVEN.md",
        life: "\u6258\u5C14\u6587\u4EE5\u4EBA\u7C7B\u548C\u517D\u4EBA\u4E3A\u4E3B\uFF0C\u54C8\u5FB7\u6797\u77F3\u5385\u4E3A\u77EE\u4EBA\u81EA\u6CBB\u805A\u843D\u3002\u4E24\u5730\u4EA4\u6362\u98DF\u54C1\u3001\u91D1\u5C5E\u3001\u5668\u5177\u548C\u6280\u672F\uFF0C\u77F3\u5385\u8BBE\u901A\u98CE\u3001\u4F9B\u6392\u6C34\u53CA\u516C\u5171\u901A\u9053\u3002",
        sight: "\u6676\u6E56\u5CA9\u5385\u957F\u7EA61400\u7C73\uFF0C\u6700\u9AD8\u5904\u8DDD\u6C34\u9762\u8D85\u8FC7100\u7C73\u3002\u6D45\u8272\u6676\u7C07\u751F\u4E8E\u5CA9\u58C1\u53CA\u7A79\u9876\uFF0C\u90E8\u5206\u6676\u67F1\u5EF6\u4F38\u81F3\u6E56\u8FB9\u3002\u6E56\u6C34\u6E05\u6F88\uFF0C\u6DF1\u6C34\u5448\u84DD\u8272\u3002\u7A79\u9876\u88C2\u9699\u4E0E\u5CA9\u5B54\u901A\u5411\u5C71\u5761\uFF0C\u65E5\u95F4\u5149\u7EBF\u7ECF\u6676\u9762\u6298\u5C04\u8FDB\u5165\u5CA9\u5385\uFF0C\u591C\u95F4\u7167\u660E\u7531\u6B65\u9053\u706F\u5177\u63D0\u4F9B\u3002\u7EF4\u62A4\u533A\u6709\u5165\u53E3\u3001\u5CB8\u8FB9\u6B65\u9053\u548C\u89C2\u89C8\u5C0F\u8239\uFF0C\u8239\u53EA\u53D7\u6C34\u60C5\u4E0E\u8F7D\u91CD\u9650\u5236\u3002\u975E\u7EF4\u62A4\u533A\u6709\u6DF1\u6C34\u3001\u6E7F\u6ED1\u5CA9\u9762\u548C\u672A\u6D4B\u652F\u6D1E\uFF0C\u91C7\u96C6\u6676\u7C07\u9700\u8BB8\u53EF\u3002",
        risk: "\u975E\u7EF4\u62A4\u5730\u4E0B\u533A\u5B58\u5728\u6DF1\u6C34\u3001\u6E7F\u5CA9\u3001\u7A7A\u6C14\u4E0E\u652F\u62A4\u95EE\u9898\uFF0C\u6676\u7C07\u91C7\u96C6\u53D7\u7BA1\u7406\u3002",
        travel: "\u897F\u63A5\u963F\u5C14\u7EF4\u514B\uFF0C\u5317\u63A5\u5E03\u96F7\u5361\uFF0C\u4E1C\u7ECF\u5965\u5C14\u82AC\u5C71\u53E3\u63A5\u57C3\u65AF\u51EF\u5C14\uFF0C\u5357\u63A5\u6D1B\u65AF\u6587\u3002\u5730\u9762\u5546\u8DEF\u548C\u53EF\u7528\u96A7\u9053\u6784\u6210\u4EA4\u901A\u7F51\u7EDC\u3002"
      },
      {
        id: "REG-08",
        name: "\u7EF4\u65AF\u5361\u68EE\u6797",
        prefix: "VIS",
        source: "world/regions/REG-08_VISKA.md",
        life: "\u897F\u90E8\u5E03\u4F26\u7EF4\u5C14\u5C5E\u4E8E\u74E6\u5C14\u767B\uFF0C\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u5C11\u91CF\u517D\u4EBA\u3001\u534A\u517D\u4EBA\u548C\u5176\u4ED6\u5C45\u6C11\u3002\u4E1C\u90E8\u6797\u95F4\u6751\u843D\u5171\u540C\u7EF4\u62A4\u9053\u8DEF\u3002\u4E3B\u8981\u4EA7\u4E1A\u4E3A\u6728\u6750\u3001\u6811\u8102\u3001\u836F\u8349\u548C\u6728\u5668\u3002",
        sight: "\u5DE8\u6811\u9AD8\u7EA6650\u7C73\uFF0C\u6811\u5E72\u6700\u5BBD\u5904\u8FD1100\u7C73\uFF0C\u6811\u51A0\u5C55\u5F00\u7EA62\u516C\u91CC\uFF0C\u9AD8\u4E8E\u9644\u8FD1\u5C71\u810A\u3002\u677F\u6839\u5411\u5468\u56F4\u6797\u5730\u5EF6\u4F38\uFF0C\u90E8\u5206\u677F\u6839\u9AD8\u4E8E\u623F\u5C4B\uFF0C\u6839\u95F4\u5206\u5E03\u8349\u5761\u3001\u6EAA\u6D41\u548C\u6797\u6728\u3002\u6811\u6839\u751F\u957F\u4F7F\u90E8\u5206\u65E7\u8DEF\u62AC\u5347\u6216\u6539\u7EBF\uFF0C\u6728\u6808\u9053\u6CBF\u7A33\u5B9A\u90E8\u4F4D\u4FEE\u5EFA\u3002",
        risk: "\u65E7\u836F\u5703\u6709\u7834\u635F\u6E29\u5BA4\uFF0C\u6DF1\u6797\u90E8\u5206\u9053\u8DEF\u7F3A\u5C11\u7EF4\u62A4\uFF1B\u6797\u5730\u53D6\u6750\u53CA\u91C7\u96C6\u9700\u8BB8\u53EF\u3002",
        travel: "\u897F\u63A5\u5361\u5FB7\u6E29\uFF0C\u4E1C\u63A5\u6D1B\u65AF\u6587\u3002\u6B63\u5F0F\u6797\u9053\u90E8\u5206\u901A\u8F66\uFF0C\u6839\u95F4\u5C0F\u8DEF\u9002\u7528\u6B65\u884C\u53CA\u5408\u9002\u9A91\u4E58\uFF0C\u74E6\u4F26\u6EAA\u8425\u5730\u63D0\u4F9B\u6709\u9650\u8425\u4F4D\u3002"
      },
      {
        id: "REG-09",
        name: "\u6D1B\u65AF\u6587\u6E56\u533A",
        prefix: "LOS",
        source: "world/regions/REG-09_LOSVEN.md",
        life: "\u6885\u745E\u767B\u4F4D\u4E8E\u7EF4\u7EB3\u5C14\u6E56\u7554\uFF0C\u4EBA\u7C7B\u4E0E\u517D\u4EBA\u6570\u91CF\u63A5\u8FD1\uFF0C\u5361\u585E\u62C9\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\u3002\u6E56\u57CE\u4EE5\u822A\u9053\u548C\u5824\u5CB8\u7EA6\u5B9A\u534F\u4F5C\uFF0C\u821F\u5E02\u3001\u7801\u5934\u548C\u8239\u5C4B\u63D0\u4F9B\u8FD0\u8F93\u3001\u8D38\u6613\u53CA\u5C45\u4F4F\u670D\u52A1\u3002",
        sight: "\u6D6E\u5C9B\u4F4D\u4E8E\u6E56\u9762\uFF0C\u6700\u5927\u7684\u5BBD\u8FD1100\u7C73\u3002\u6C34\u751F\u690D\u7269\u6839\u5C42\u4EA4\u7EC7\u5E76\u5939\u6301\u6CE5\u571F\u548C\u843D\u53F6\uFF0C\u90E8\u5206\u690D\u7269\u5177\u6709\u50A8\u6C14\u7EC4\u7EC7\uFF0C\u81EA\u7136\u9B54\u529B\u589E\u5F3A\u6839\u5C42\u5F3A\u5EA6\u4E0E\u6D6E\u529B\u3002\u5C9B\u4E0A\u751F\u957F\u82A6\u82C7\u3001\u4F4E\u77EE\u704C\u6728\u548C\u94F6\u80CC\u53F6\u5C0F\u6811\u3002\u5C9B\u5C7F\u968F\u98CE\u548C\u6C34\u6D41\u7F13\u6162\u79FB\u52A8\uFF0C\u53D7\u6D45\u6EE9\u53CA\u5C9B\u6839\u9650\u5236\uFF1B\u5927\u5C9B\u7684\u6DF1\u6839\u4F7F\u5176\u7559\u5728\u672C\u5730\u6E56\u76C6\u3002\u7EF4\u62A4\u8005\u6838\u5B9A\u767B\u4E34\u5904\u4E0E\u627F\u8F7D\u9650\u5236\uFF0C\u90E8\u5206\u5C0F\u5C9B\u4EC5\u4F9B\u8239\u4E0A\u89C2\u5BDF\u3002",
        risk: "\u6D6E\u5C9B\u53D7\u98CE\u3001\u6C34\u6D41\u3001\u6D45\u6EE9\u548C\u6839\u5C42\u9650\u5236\uFF0C\u767B\u5C9B\u6709\u627F\u8F7D\u8981\u6C42\uFF1B\u6C89\u57CE\u6C34\u4E0B\u8FDB\u5165\u9700\u9002\u7528\u88C5\u5907\u548C\u8DEF\u7EBF\u4FDD\u969C\u3002",
        travel: "\u897F\u63A5\u7EF4\u65AF\u5361\uFF0C\u5317\u63A5\u675C\u5C14\u6587\uFF0C\u4E1C\u63A5\u7D22\u62C9\u6069\uFF0C\u5357\u90E8\u51FA\u6D77\u6C34\u7CFB\u8FDE\u63A5\u5361\u5FB7\u6E29\u3002\u5CB8\u8DEF\u3001\u6C34\u8DEF\u548C\u5BC4\u517B\u670D\u52A1\u5206\u522B\u7ECF\u8425\u3002"
      },
      {
        id: "REG-10",
        name: "\u57C3\u65AF\u51EF\u5C14\u8352\u539F",
        prefix: "ESK",
        source: "world/regions/REG-10_ESKEL.md",
        life: "\u5FB7\u5170\u745F\u4F4D\u4E8E\u675C\u5C14\u6587\u80CC\u98CE\u4FA7\uFF0C\u4EE5\u4E95\u6C34\u3001\u84C4\u6C34\u548C\u7530\u5703\u7EF4\u6301\u805A\u843D\uFF0C\u4EBA\u7C7B\u4E0E\u517D\u4EBA\u6570\u91CF\u63A5\u8FD1\u3002\u5C45\u6C11\u4ECE\u4E8B\u8F6C\u8FD0\u3001\u4FEE\u8F66\u3001\u517B\u755C\u3001\u77F3\u5DE5\u53CA\u5411\u5BFC\u670D\u52A1\u3002",
        sight: "\u9636\u57CE\u4E3A\u5E9F\u5F03\u516C\u5171\u5EFA\u7B51\u7FA4\uFF0C\u6CBF\u5CA9\u53F0\u5EF6\u4F38\u7EA61.2\u516C\u91CC\uFF0C\u4E2D\u592E\u5DE8\u95E8\u9732\u51FA\u5730\u9762\u7684\u90E8\u5206\u8FD150\u7C73\u9AD8\uFF0C\u8F83\u4F4E\u9662\u573A\u53CA\u90E8\u5206\u5E93\u5BA4\u88AB\u6C99\u571F\u63A9\u57CB\u3002\u9053\u8DEF\u6539\u7EBF\u3001\u6765\u6C34\u53D8\u5316\u548C\u98CE\u79EF\u5BFC\u81F4\u4F4E\u5904\u7A7A\u95F4\u505C\u7528\u3002\u9057\u5B58\u663E\u793A\u5176\u66FE\u7528\u4E8E\u96C6\u4F1A\u3001\u50A8\u8FD0\u53CA\u84C4\u6C34\uFF0C\u7ED3\u6784\u542B\u53E4\u4EE3\u5DE5\u7A0B\u548C\u9B54\u6CD5\u6784\u4EF6\uFF0C\u5177\u4F53\u5EFA\u9020\u5E74\u4EE3\u672A\u786E\u5B9A\u3002\u7EF4\u62A4\u533A\u5305\u62EC\u4E0A\u5C42\u5916\u5ECA\u548C\u89C2\u666F\u9662\uFF0C\u534A\u57CB\u5E93\u5BA4\u3001\u677E\u52A8\u9636\u57FA\u53CA\u4F4E\u5904\u901A\u9053\u9700\u8981\u8FDB\u5165\u8BB8\u53EF\u4E0E\u7167\u660E\u3002",
        risk: "\u65E7\u5740\u534A\u57CB\u5E93\u5BA4\u3001\u677E\u52A8\u9636\u57FA\u548C\u4F4E\u901A\u9053\u9700\u8FDB\u5165\u8BB8\u53EF\u4E0E\u7167\u660E\uFF0C\u5E72\u6CB3\u5E8A\u53EF\u5728\u964D\u96E8\u540E\u8FC7\u6C34\u3002",
        travel: "\u897F\u63A5\u675C\u5C14\u6587\uFF0C\u4E1C\u63A5\u74E6\u8428\u6069\u5357\u90E8\u901A\u9053\uFF0C\u5357\u63A5\u7D22\u62C9\u6069\u3002\u53E4\u9053\u90E8\u5206\u901A\u666E\u901A\u8F66\u8F86\uFF0C\u8BFA\u7EF4\u6069\u4E95\u7AD9\u63D0\u4F9B\u6709\u9650\u8865\u7ED9\u3002"
      },
      {
        id: "REG-11",
        name: "\u7D22\u62C9\u6069\u6C99\u6D77",
        prefix: "SOL",
        source: "world/regions/REG-11_SORAN.md",
        life: "\u8428\u7EF4\u5170\u4E3A\u7EFF\u6D32\u57CE\uFF0C\u4EE5\u6CC9\u773C\u3001\u5730\u4E0B\u4E95\u3001\u84C4\u6C34\u6C60\u548C\u6C34\u6E20\u4F9B\u6C34\u3002\u4EBA\u7C7B\u4E0E\u517D\u4EBA\u6570\u91CF\u63A5\u8FD1\uFF0C\u5C45\u6C11\u4ECE\u4E8B\u5546\u961F\u3001\u67D3\u7EC7\u3001\u73BB\u7483\u3001\u78E8\u574A\u53CA\u56ED\u5703\u751F\u4EA7\u3002",
        sight: "\u4E3B\u8981\u5CE1\u6BB5\u957F\u7EA67\u516C\u91CC\uFF0C\u8C37\u58C1\u9AD8\u7EA660\u2014120\u7C73\uFF0C\u6700\u5BBD\u8C37\u6BB5\u8FD1200\u7C73\u3002\u5CA9\u4F53\u4E2D\u5206\u5E03\u6D45\u91D1\u3001\u7070\u7EFF\u548C\u70DF\u84DD\u8272\u73BB\u7483\u8D28\u5C42\uFF0C\u7531\u53E4\u8001\u5730\u706B\u4E0E\u5F53\u5730\u9B54\u529B\u5171\u540C\u4F5C\u7528\u5F62\u6210\u3002\u9633\u5149\u7A7F\u8FC7\u8584\u5C42\u5F62\u6210\u5149\u5E26\uFF0C\u9002\u5F53\u659C\u7167\u89D2\u5EA6\u4E0B\uFF0C\u90E8\u5206\u6298\u5C04\u5149\u53D7\u81EA\u7136\u9B54\u529B\u5F71\u54CD\u5F62\u6210\u60AC\u7A7A\u5149\u5F27\u3002\u5149\u5F27\u6CA1\u6709\u627F\u91CD\u80FD\u529B\u3002\u5165\u53E3\u6709\u5C55\u53F0\u548C\u7EF4\u62A4\u6B65\u9053\uFF0C\u4E0B\u5C42\u788E\u73BB\u7483\u5761\u3001\u7A84\u7F1D\u53CA\u672A\u7EF4\u62A4\u53F0\u5730\u5B58\u5728\u53CD\u5149\u3001\u5272\u4F24\u548C\u843D\u7247\u98CE\u9669\u3002\u6750\u6599\u91C7\u96C6\u9700\u8BB8\u53EF\u3002",
        risk: "\u73BB\u7483\u5CE1\u8C37\u672A\u7EF4\u62A4\u533A\u6709\u5F3A\u53CD\u5149\u3001\u950B\u5229\u65AD\u9762\u548C\u843D\u7247\u98CE\u9669\uFF0C\u666F\u89C2\u6750\u6599\u91C7\u96C6\u9700\u8BB8\u53EF\u3002",
        travel: "\u897F\u63A5\u6D1B\u65AF\u6587\uFF0C\u5317\u63A5\u57C3\u65AF\u51EF\u5C14\uFF0C\u4E1C\u5317\u7ECF\u53F0\u5730\u63A5\u827E\u65AF\u5854\u6069\u3002\u786C\u5B9E\u5546\u8DEF\u3001\u677E\u6C99\u548C\u7EFF\u6D32\u95F4\u7EBF\u8DEF\u9002\u7528\u4E0D\u540C\u8F66\u8F86\u4E0E\u9A6E\u755C\u3002"
      },
      {
        id: "REG-12",
        name: "\u8BFA\u5C14\u7EF4\u514B\u51BB\u539F",
        prefix: "NOR",
        source: "world/regions/REG-12_NORVIK.md",
        life: "\u8BFA\u5C14\u7EF4\u514B\u805A\u843D\u4EE5\u51AC\u5385\u8BAE\u4E8B\u81EA\u6CBB\u3002\u8D6B\u5C14\u65AF\u5854\u5FB7\u517D\u4EBA\u4E0E\u4EBA\u7C7B\u6570\u91CF\u63A5\u8FD1\uFF0C\u517D\u4EBA\u7565\u591A\uFF0C\u5C45\u6C11\u4ECE\u4E8B\u6E14\u4E1A\u3001\u7EC7\u9020\u3001\u755C\u517B\u3001\u70DF\u718F\u98DF\u54C1\u548C\u8D38\u6613\u3002",
        sight: "\u6781\u5149\u4E0E\u5317\u90E8\u9AD8\u7A7A\u9B54\u529B\u6D41\u53D8\u5316\u76F8\u5173\uFF0C\u5E38\u89C1\u6D45\u7EFF\u3001\u84DD\u7EFF\u3001\u94F6\u767D\u53CA\u7D2B\u8272\u5149\u5E26\u3002\u5F3A\u5149\u65F6\u53EF\u5728\u96EA\u9762\u3001\u971C\u9762\u6216\u6E05\u51B0\u4E0A\u5F62\u6210\u53CD\u5149\uFF0C\u4E91\u5C42\u3001\u591C\u8272\u548C\u89C6\u91CE\u5F71\u54CD\u53EF\u89C1\u7A0B\u5EA6\u3002\u90E8\u5206\u6E05\u51B0\u53D7\u5F3A\u5149\u540E\u4F1A\u77ED\u6682\u4FDD\u7559\u5F69\u7EB9\uFF0C\u968F\u540E\u6D88\u9000\u3002\u6781\u5149\u53CD\u590D\u51FA\u73B0\uFF0C\u5177\u4F53\u51FA\u73B0\u65F6\u95F4\u65E0\u6CD5\u4FDD\u8BC1\u3002\u7EF4\u65AF\u5854\u89C2\u666F\u53F0\u8BBE\u907F\u98CE\u4F11\u606F\u5904\uFF0C\u9547\u8FB9\u548C\u6E56\u5CB8\u4E5F\u6709\u5F00\u9614\u89C6\u91CE\u3002",
        risk: "\u51B0\u9762\u627F\u91CD\u3001\u6DF1\u96EA\u4E0E\u5DE8\u77F3\u5ECA\u672A\u7EF4\u62A4\u7ED3\u6784\u5B58\u5728\u98CE\u9669\uFF0C\u6781\u5149\u53EF\u89C1\u7A0B\u5EA6\u53D7\u9AD8\u7A7A\u5149\u3001\u4E91\u5C42\u548C\u591C\u8272\u5F71\u54CD\u3002",
        travel: "\u897F\u5357\u63A5\u5E03\u96F7\u5361\uFF0C\u4E1C\u5357\u63A5\u74E6\u8428\u6069\u3002\u5BD2\u5B63\u4F7F\u7528\u9002\u7528\u96EA\u5730\u4EA4\u901A\uFF0C\u878D\u96EA\u5B63\u6309\u9053\u8DEF\u53CA\u6C34\u9762\u60C5\u51B5\u6362\u4E58\uFF0C\u9A7F\u7AD9\u4F9B\u5E94\u6709\u9650\u3002"
      },
      {
        id: "REG-13",
        name: "\u74E6\u8428\u6069\u706B\u5C71\u533A",
        prefix: "VAS",
        source: "world/regions/REG-13_VASAN.md",
        life: "\u5357\u90E8\u5965\u5C14\u745F\u59C6\u5C5E\u4E8E\u5965\u65AF\u7EF4\u6069\uFF0C\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u5317\u90E8\u5E03\u96F7\u6069\u4E3A\u6DF7\u5C45\u81EA\u6CBB\u6751\u3002\u6E29\u6CC9\u3001\u9676\u5668\u3001\u6E29\u5BA4\u3001\u8FD0\u8F93\u548C\u5C71\u5730\u670D\u52A1\u4E3A\u4E3B\u8981\u4EA7\u4E1A\uFF0C\u591A\u6570\u5C71\u5761\u51C9\u51B7\uFF0C\u5730\u70ED\u96C6\u4E2D\u4E8E\u90E8\u5206\u8C37\u5730\u3002",
        sight: "\u5361\u5C14\u7EF4\u65AF\u9AD8\u51FA\u5468\u56F4\u4E3B\u8981\u8C37\u5730\u7EA61700\u7C73\uFF0C\u9AD8\u5904\u548C\u80CC\u9634\u51F9\u69FD\u53EF\u79EF\u96EA\uFF0C\u6D3B\u52A8\u88C2\u9699\u5728\u9002\u5F53\u6761\u4EF6\u4E0B\u53EF\u89C1\u6697\u7EA2\u5149\u53CA\u84B8\u6C14\u3002\u5FB7\u5C14\u6587\u89C2\u706B\u53F0\u4F4D\u4E8E\u7A33\u5B9A\u5CA9\u810A\uFF0C\u8BBE\u98CE\u6321\u548C\u7B80\u6613\u4F11\u606F\u5904\uFF0C\u706B\u5C71\u4F5C\u4E1A\u533A\u53E6\u884C\u7BA1\u7406\u3002\u4F0A\u65AF\u5FB7\u62C9\u9ED1\u5CA9\u9636\u5730\u6CBF\u4FA7\u8C37\u5C55\u5F00\u8FD11\u516C\u91CC\uFF0C\u67F1\u5CA9\u6709\u76F4\u7ACB\u53CA\u6247\u5F62\u503E\u659C\u5206\u5E03\uFF0C\u5CA9\u53F0\u843D\u5DEE\u7EA620\u201430\u7C73\u3002\u516C\u5171\u6B65\u9053\u7ECF\u8FC7\u7EF4\u62A4\u6BB5\uFF0C\u65AD\u88C2\u8FB9\u7F18\u3001\u8584\u5CA9\u58F3\u53CA\u672A\u68C0\u67E5\u6D1E\u9699\u5B58\u5728\u98CE\u9669\u3002",
        risk: "\u55B7\u53E3\u3001\u8584\u5CA9\u58F3\u3001\u65AD\u88C2\u8FB9\u7F18\u548C\u672A\u68C0\u67E5\u6D1E\u9699\u5B58\u5728\u98CE\u9669\uFF0C\u5DE8\u9F99\u5DE2\u5730\u53CA\u4F1A\u9762\u5747\u9700\u672C\u4EBA\u540C\u610F\u3002",
        travel: "\u5317\u63A5\u8BFA\u5C14\u7EF4\u514B\uFF0C\u897F\u5357\u63A5\u57C3\u65AF\u51EF\u5C14\uFF0C\u4E1C\u5357\u63A5\u827E\u65AF\u5854\u6069\u3002\u51C9\u51B7\u5C71\u5F84\u4E0E\u5730\u70ED\u8C37\u5730\u4E3B\u8DEF\u6761\u4EF6\u4E0D\u540C\uFF1B\u5DE8\u9F99\u642D\u4E58\u9700\u53CC\u65B9\u540C\u610F\u53CA\u660E\u786E\u5F80\u8FD4\u5B89\u6392\u3002"
      },
      {
        id: "REG-14",
        name: "\u827E\u65AF\u5854\u6069\u5D16\u5CB8",
        prefix: "EST",
        source: "world/regions/REG-14_ESTAEN.md",
        life: "\u54C8\u5C14\u7EF4\u65AF\u4E3A\u5965\u65AF\u7EF4\u6069\u516C\u56FD\u9996\u5E9C\uFF0C\u7EF4\u5C14\u745F\u4E3A\u4E1C\u90E8\u6CBF\u5D16\u9547\uFF0C\u4EBA\u53E3\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\u3002\u5C45\u6C11\u4ECE\u4E8B\u884C\u653F\u3001\u5546\u4E1A\u3001\u7267\u4E1A\u3001\u5976\u916A\u3001\u4FEE\u8865\u548C\u4F4F\u5BBF\u7ECF\u8425\uFF0C\u8D1D\u4F26\u7EB3\u6E2F\u6751\u4ECD\u4F7F\u7528\u6B63\u5E38\u6D77\u6C34\u822A\u9053\u3002",
        sight: "\u4F0A\u65AF\u5854\u7EF4\u5C14\u5CAC\u5916\u4FA7\u4E3A\u5C40\u90E8\u7A7A\u95F4\u5F02\u5E38\uFF0C\u5D16\u5916\u5448\u6DF1\u84DD\u661F\u5E55\u3001\u661F\u70B9\u53CA\u94F6\u84DD\u8272\u5149\u6D6A\uFF0C\u7F3A\u5C11\u666E\u901A\u6C34\u9762\u548C\u6D77\u5E73\u7EBF\u3002\u5149\u6D6A\u7167\u4EAE\u8FD1\u5CB8\u5CA9\u9762\u3001\u4F4E\u5899\u548C\u8349\u53F6\uFF0C\u663C\u591C\u5747\u53EF\u89C1\uFF0C\u591C\u95F4\u7EC6\u8282\u8F83\u6E05\u695A\u3002\u90E8\u5206\u91CD\u53E0\u5149\u6D6A\u77ED\u6682\u5448\u73B0\u5176\u4ED6\u4E16\u754C\u7684\u8F6E\u5ED3\u4E0E\u6D3B\u52A8\uFF0C\u5F71\u50CF\u6765\u6E90\u548C\u51FA\u73B0\u65F6\u523B\u4E0D\u53D7\u89C2\u8005\u63A7\u5236\u3002\u5F71\u50CF\u53EF\u80FD\u5305\u542B\u6C7D\u8F66\u3001\u98DE\u673A\u3001\u624B\u673A\u6216\u5176\u4ED6\u964C\u751F\u4E8B\u7269\uFF0C\u5F53\u5730\u5C45\u6C11\u4EC5\u638C\u63E1\u5176\u6240\u89C2\u5BDF\u5230\u7684\u5916\u5F62\u4E0E\u884C\u4E3A\u3002\u5F71\u50CF\u4E0E\u9192\u9192\u539F\u5C5E\u4E16\u754C\u7684\u5BF9\u5E94\u5173\u7CFB\u6CA1\u6709\u786E\u5B9A\u8BC1\u636E\u3002",
        risk: "\u661F\u6D77\u8FB9\u754C\u7F3A\u5C11\u53EF\u9760\u822A\u8DEF\u8D44\u6599\uFF0C\u661F\u6865\u901A\u884C\u6761\u4EF6\u5C1A\u672A\u4E3A\u5F53\u5730\u5C45\u6C11\u6240\u77E5\uFF0C\u672A\u6709\u53EF\u9760\u7684\u6210\u529F\u8DE8\u754C\u8BB0\u5F55\u3002",
        travel: "\u897F\u5317\u63A5\u74E6\u8428\u6069\uFF0C\u897F\u5357\u63A5\u7D22\u62C9\u6069\uFF0C\u53F0\u5730\u3001\u4E18\u9675\u4E0E\u4F4E\u5730\u8FDE\u63A5\u6CBF\u5D16\u9053\u8DEF\u3002\u6B63\u5E38\u7A7A\u57DF\u53EF\u4EE5\u98DE\u884C\uFF0C\u5177\u4F53\u661F\u6865\u8DE8\u754C\u6309\u72EC\u7ACB\u89C4\u5219\u5904\u7406\u3002"
      }
    ]
  };

  // src/ui/equipment-copy.json
  var equipment_copy_default = [
    {
      id: "GOODS-V2-VIR-E01",
      name: "\u5B88\u6865\u4EBA\u957F\u5251",
      tier: "\u666E\u901A",
      kind: "\u5355\u624B\u5251",
      summary: "\u957F\u6865\u5728\u540E\uFF0C\u950B\u5203\u5411\u524D\u3002"
    },
    {
      id: "GOODS-V2-VIR-E02",
      name: "\u94F6\u9E6D\u523A\u5251",
      tier: "\u7CBE\u826F",
      kind: "\u523A\u5251",
      summary: "\u94F6\u7FFC\u655B\u5904\uFF0C\u51B3\u6597\u65B9\u59CB\u3002"
    },
    {
      id: "GOODS-V2-VIR-E03",
      name: "\u96F7\u6587\u7EB3\u9A91\u58EB\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u534A\u8EAB\u677F\u7532",
      summary: "\u94C1\u7532\u627F\u950B\uFF0C\u9A91\u8A93\u4E0D\u6298\u3002"
    },
    {
      id: "GOODS-V2-VIR-E04",
      name: "\u66AE\u6E21",
      tier: "\u7A00\u6709",
      kind: "\u6597\u7BF7",
      summary: "\u66AE\u8272\u65E0\u58F0\uFF0C\u6E21\u5F71\u65E0\u75D5\u3002"
    },
    {
      id: "GOODS-V2-VIR-E05",
      name: "\u96FE\u4E2D\u70DB\u706B",
      tier: "\u7A00\u6709",
      kind: "\u6CD5\u6756",
      summary: "\u96FE\u6D77\u6DF1\u5904\uFF0C\u5C1A\u6709\u70DB\u706B\u3002"
    },
    {
      id: "GOODS-V2-VIR-E06",
      name: "\u767D\u6865\u5B88\u671B",
      tier: "\u53F2\u8BD7",
      kind: "\u5854\u76FE",
      summary: "\u957F\u6865\u672A\u6E21\uFF0C\u5B88\u671B\u4E0D\u4F11\u3002"
    },
    {
      id: "GOODS-V2-VIR-E07",
      name: "\u9E22\u5C3E\u738B\u5EAD",
      tier: "\u53F2\u8BD7",
      kind: "\u5370\u6212",
      summary: "\u738B\u5EAD\u53EF\u8FDC\uFF0C\u9E22\u5C3E\u5E38\u5F00\u3002"
    },
    {
      id: "GOODS-V2-VIR-E08",
      name: "\u738B\u8A93\xB7\u96F7\u6587\u7EB3\u4E4B\u950B",
      tier: "\u4F20\u8BF4",
      kind: "\u957F\u5251",
      summary: "\u738B\u8A93\u72B9\u5728\uFF0C\u82CD\u94F6\u88C1\u591C\u3002"
    },
    {
      id: "GOODS-V2-SER-E01",
      name: "\u8D1D\u5C14\u8499\u7279\u730E\u5F13",
      tier: "\u666E\u901A",
      kind: "\u77ED\u5F13",
      summary: "\u4E18\u9675\u5C1A\u8FDC\uFF0C\u5F13\u5F26\u5DF2\u5F20\u3002"
    },
    {
      id: "GOODS-V2-SER-E02",
      name: "\u8537\u8587\u523A\u5251",
      tier: "\u7CBE\u826F",
      kind: "\u7EC6\u5251",
      summary: "\u8537\u8587\u6709\u523A\uFF0C\u793C\u4EA6\u6709\u950B\u3002"
    },
    {
      id: "GOODS-V2-SER-E03",
      name: "\u5E84\u56ED\u9A91\u88C5",
      tier: "\u7CBE\u826F",
      kind: "\u8F7B\u7532",
      summary: "\u7B56\u9A6C\u4E4B\u5904\uFF0C\u4ECD\u6709\u8363\u5149\u3002"
    },
    {
      id: "GOODS-V2-SER-E04",
      name: "\u665A\u98CE\u4E4B\u7EB1",
      tier: "\u7A00\u6709",
      kind: "\u62AB\u80A9",
      summary: "\u665A\u98CE\u8212\u7FBD\uFF0C\u8584\u7EB1\u6D41\u5149\u3002"
    },
    {
      id: "GOODS-V2-SER-E05",
      name: "\u5965\u96F7\u65AF\u7684\u5FAE\u5149",
      tier: "\u7A00\u6709",
      kind: "\u6212\u6307",
      summary: "\u5FAE\u5149\u6240\u89C1\uFF0C\u5965\u672F\u7559\u75D5\u3002"
    },
    {
      id: "GOODS-V2-SER-E06",
      name: "\u91D1\u7A57\u4E4B\u5FC3",
      tier: "\u7A00\u6709",
      kind: "\u62A4\u7B26",
      summary: "\u91D1\u7A57\u4F4E\u5782\uFF0C\u5E87\u62A4\u957F\u5B58\u3002"
    },
    {
      id: "GOODS-V2-SER-E07",
      name: "\u66AE\u82B1\u633D\u6B4C",
      tier: "\u53F2\u8BD7",
      kind: "\u6CD5\u6756",
      summary: "\u82B1\u8C22\u4E4B\u65F6\uFF0C\u5B88\u671B\u672A\u7EC8\u3002"
    },
    {
      id: "GOODS-V2-SER-E08",
      name: "\u7F57\u745F\u6069\u7684\u767D\u8346",
      tier: "\u53F2\u8BD7",
      kind: "\u957F\u5251",
      summary: "\u8346\u51A0\u94ED\u8A93\uFF0C\u767D\u5203\u65AD\u7F1A\u3002"
    },
    {
      id: "GOODS-V2-ALV-E01",
      name: "\u81EA\u7531\u6C11\u77ED\u5251",
      tier: "\u666E\u901A",
      kind: "\u77ED\u5251",
      summary: "\u65E0\u5FBD\u4E4B\u5203\uFF0C\u4EA6\u8F7D\u81EA\u7531\u3002"
    },
    {
      id: "GOODS-V2-ALV-E02",
      name: "\u591A\u4F26\u51B3\u6597\u5251",
      tier: "\u7CBE\u826F",
      kind: "\u62A4\u624B\u5251",
      summary: "\u51B3\u6597\u4EE5\u950B\uFF0C\u793C\u4EEA\u4EE5\u9798\u3002"
    },
    {
      id: "GOODS-V2-ALV-E03",
      name: "\u6E21\u9E26\u76AE\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u8F7B\u7532",
      summary: "\u9ED1\u7FBD\u8986\u8EAB\uFF0C\u94A2\u9AA8\u65E0\u58F0\u3002"
    },
    {
      id: "GOODS-V2-ALV-E04",
      name: "\u94F6\u820C",
      tier: "\u7A00\u6709",
      kind: "\u6212\u6307",
      summary: "\u4E07\u90A6\u5F02\u8BED\uFF0C\u540C\u5F52\u94F6\u73AF\u3002"
    },
    {
      id: "GOODS-V2-ALV-E05",
      name: "\u591C\u83BA\u98DE\u5203",
      tier: "\u7A00\u6709",
      kind: "\u6210\u5BF9\u98DE\u5200",
      summary: "\u591C\u83BA\u4E0D\u6B4C\uFF0C\u53CC\u7FFC\u4ECD\u5F52\u3002"
    },
    {
      id: "GOODS-V2-ALV-E06",
      name: "\u6D41\u6D6A\u8D24\u8005",
      tier: "\u53F2\u8BD7",
      kind: "\u6CD5\u6756",
      summary: "\u9053\u8DEF\u65E0\u5C3D\uFF0C\u6C42\u77E5\u4E0D\u606F\u3002"
    },
    {
      id: "GOODS-V2-ALV-E07",
      name: "\u5343\u9762\u5BA2",
      tier: "\u53F2\u8BD7",
      kind: "\u6597\u7BF7",
      summary: "\u5343\u9762\u7686\u5BA2\uFF0C\u65E0\u540D\u4E3A\u51A0\u3002"
    },
    {
      id: "GOODS-V2-ALV-E08",
      name: "\u65E0\u5195\u8005\xB7\u5951\u7EA6\u4E4B\u79E4",
      tier: "\u4F20\u8BF4",
      kind: "\u6CD5\u5668",
      summary: "\u65E0\u5195\u4E4B\u4E0B\uFF0C\u5951\u7EA6\u4E3A\u738B\u3002"
    },
    {
      id: "GOODS-V2-CAD-E01",
      name: "\u6C34\u624B\u5F2F\u5200",
      tier: "\u666E\u901A",
      kind: "\u5F2F\u5200",
      summary: "\u6D77\u8DEF\u6F2B\u957F\uFF0C\u94A2\u5203\u968F\u884C\u3002"
    },
    {
      id: "GOODS-V2-CAD-E02",
      name: "\u6D77\u71D5",
      tier: "\u7CBE\u826F",
      kind: "\u8F7B\u5F29",
      summary: "\u6D77\u71D5\u63A0\u5904\uFF0C\u5F26\u58F0\u5DF2\u8FDF\u3002"
    },
    {
      id: "GOODS-V2-CAD-E03",
      name: "\u8D1D\u8428\u5C14\u62A4\u822A\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u8F7B\u578B\u80F8\u7532",
      summary: "\u6F6E\u58F0\u4E0D\u606F\uFF0C\u62A4\u822A\u4E0D\u6B62\u3002"
    },
    {
      id: "GOODS-V2-CAD-E04",
      name: "\u8E0F\u6D6A\u8005",
      tier: "\u7A00\u6709",
      kind: "\u957F\u9774",
      summary: "\u6D6A\u810A\u7559\u75D5\uFF0C\u6F6E\u5934\u62D3\u5F84\u3002"
    },
    {
      id: "GOODS-V2-CAD-E05",
      name: "\u96FE\u5E06",
      tier: "\u7A00\u6709",
      kind: "\u6597\u7BF7",
      summary: "\u96FE\u4E2D\u65E0\u65D7\uFF0C\u5F52\u822A\u6709\u8DEF\u3002"
    },
    {
      id: "GOODS-V2-CAD-E06",
      name: "\u6C89\u6F6E\u4E4B\u7259",
      tier: "\u53F2\u8BD7",
      kind: "\u957F\u67AA",
      summary: "\u6DF1\u6F6E\u85CF\u7259\uFF0C\u91CD\u7532\u5F53\u88C2\u3002"
    },
    {
      id: "GOODS-V2-CAD-E07",
      name: "\u98CE\u66B4\u4FE1\u4F7F",
      tier: "\u53F2\u8BD7",
      kind: "\u957F\u5F13",
      summary: "\u4EE5\u96F7\u4E3A\u8BAF\uFF0C\u98CE\u66B4\u4E3A\u5F26\u3002"
    },
    {
      id: "GOODS-V2-CAD-E08",
      name: "\u6DF1\u84DD\u5E87\u62A4",
      tier: "\u53F2\u8BD7",
      kind: "\u80F8\u9488",
      summary: "\u6DF1\u84DD\u4E4B\u4E0B\uFF0C\u72B9\u6709\u6674\u7A7A\u3002"
    },
    {
      id: "GOODS-V2-HOR-E01",
      name: "\u8349\u539F\u730E\u77DB",
      tier: "\u666E\u901A",
      kind: "\u957F\u77DB",
      summary: "\u65F7\u91CE\u65E0\u95E8\uFF0C\u957F\u77DB\u4E3A\u754C\u3002"
    },
    {
      id: "GOODS-V2-HOR-E02",
      name: "\u8D64\u9B03\u6218\u65A7",
      tier: "\u7CBE\u826F",
      kind: "\u6218\u65A7",
      summary: "\u8D64\u9B03\u626C\u5904\uFF0C\u76FE\u6728\u5F53\u6298\u3002"
    },
    {
      id: "GOODS-V2-HOR-E03",
      name: "\u4E4C\u5C14\u8FBE\u514B\u94C1\u536B\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u91CD\u7532",
      summary: "\u94C1\u536B\u6210\u5217\uFF0C\u9635\u7EBF\u4E0D\u79FB\u3002"
    },
    {
      id: "GOODS-V2-HOR-E04",
      name: "\u9010\u98CE\u730E\u624B",
      tier: "\u7A00\u6709",
      kind: "\u957F\u5F13",
      summary: "\u957F\u98CE\u5148\u81F3\uFF0C\u7FBD\u7BAD\u7EE7\u4E4B\u3002"
    },
    {
      id: "GOODS-V2-HOR-E05",
      name: "\u5927\u5730\u884C\u8005",
      tier: "\u7A00\u6709",
      kind: "\u6218\u9774",
      summary: "\u5927\u5730\u5728\u8DB3\uFF0C\u7ACB\u8A93\u4E8E\u65AF\u3002"
    },
    {
      id: "GOODS-V2-HOR-E06",
      name: "\u88C2\u9635\u8005",
      tier: "\u53F2\u8BD7",
      kind: "\u53CC\u624B\u65A7",
      summary: "\u91D1\u77B3\u521D\u542F\uFF0C\u94C1\u9635\u5C3D\u88C2\u3002"
    },
    {
      id: "GOODS-V2-HOR-E07",
      name: "\u957F\u98CE\u65CC\u65D7",
      tier: "\u53F2\u8BD7",
      kind: "\u80CC\u65D7\u5F0F\u6218\u5177",
      summary: "\u65D7\u672A\u5012\u4E0B\uFF0C\u6218\u7EBF\u72B9\u5B58\u3002"
    },
    {
      id: "GOODS-V2-HOR-E08",
      name: "\u72EE\u738B\u7684\u88C1\u51B3",
      tier: "\u4F20\u8BF4",
      kind: "\u53CC\u624B\u6218\u65A7",
      summary: "\u72EE\u543C\u9707\u91CE\uFF0C\u738B\u950B\u88C2\u5730\u3002"
    },
    {
      id: "GOODS-V2-BRE-E01",
      name: "\u9AD8\u5730\u62A4\u624B\u5251",
      tier: "\u666E\u901A",
      kind: "\u5355\u624B\u5251",
      summary: "\u77F3\u5F84\u5728\u4FA7\uFF0C\u94A2\u950B\u5728\u524D\u3002"
    },
    {
      id: "GOODS-V2-BRE-E02",
      name: "\u5CA9\u9E70\u8F7B\u5F29",
      tier: "\u7CBE\u826F",
      kind: "\u8F7B\u5F29",
      summary: "\u5CA9\u9E70\u655B\u7FFC\uFF0C\u5F29\u77E2\u51CC\u7A7A\u3002"
    },
    {
      id: "GOODS-V2-BRE-E03",
      name: "\u79D1\u5C14\u74E6\u6069\u5B88\u5907\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u4E2D\u7532",
      summary: "\u7FA4\u5CF0\u4E4B\u540E\uFF0C\u5C1A\u6709\u5BB6\u56ED\u3002"
    },
    {
      id: "GOODS-V2-BRE-E04",
      name: "\u4E91\u96BC\u7FBD\u8863",
      tier: "\u7A00\u6709",
      kind: "\u62AB\u98CE",
      summary: "\u4E91\u6D77\u4E4B\u4E0A\uFF0C\u7FBD\u7FFC\u65E0\u58F0\u3002"
    },
    {
      id: "GOODS-V2-BRE-E05",
      name: "\u7FA4\u661F\u4F4E\u8BED",
      tier: "\u7A00\u6709",
      kind: "\u6CD5\u6756",
      summary: "\u8BF8\u661F\u4F4E\u8BED\uFF0C\u5965\u672F\u5FAA\u5149\u3002"
    },
    {
      id: "GOODS-V2-BRE-E06",
      name: "\u96F7\u9706\u56DE\u5ECA",
      tier: "\u53F2\u8BD7",
      kind: "\u957F\u67AA",
      summary: "\u94F6\u67AA\u5C01\u7A79\uFF0C\u96F7\u5149\u8D2F\u9635\u3002"
    },
    {
      id: "GOODS-V2-BRE-E07",
      name: "\u82CD\u7A79\u4E4B\u8A93",
      tier: "\u4F20\u8BF4",
      kind: "\u957F\u5251",
      summary: "\u6D41\u4E91\u6620\u5203\uFF0C\u5929\u5E55\u94ED\u8A93\u3002"
    },
    {
      id: "GOODS-V2-BRE-E08",
      name: "\u57C3\u5229\u897F\u6602\xB7\u5929\u7A79\u738B\u51A0",
      tier: "\u795E\u5668",
      kind: "\u51A0\u5195",
      summary: "\u738B\u51A0\u6240\u4E34\uFF0C\u7FA4\u5CF0\u79BB\u5EA7\u3002"
    },
    {
      id: "GOODS-V2-DUR-E01",
      name: "\u5C71\u6C11\u6218\u9524",
      tier: "\u666E\u901A",
      kind: "\u5355\u624B\u9524",
      summary: "\u9524\u58F0\u843D\u5904\uFF0C\u987D\u7532\u4F4E\u9E23\u3002"
    },
    {
      id: "GOODS-V2-DUR-E02",
      name: "\u94C1\u7827\u536B\u58EB",
      tier: "\u7CBE\u826F",
      kind: "\u677F\u7532",
      summary: "\u94C1\u7827\u5E38\u5728\uFF0C\u91CD\u51FB\u6709\u7EC8\u3002"
    },
    {
      id: "GOODS-V2-DUR-E03",
      name: "\u77F3\u5385\u91CD\u5F29",
      tier: "\u7CBE\u826F",
      kind: "\u91CD\u5F29",
      summary: "\u77F3\u5385\u65E0\u8A00\uFF0C\u91CD\u77E2\u4F5C\u7B54\u3002"
    },
    {
      id: "GOODS-V2-DUR-E04",
      name: "\u88C2\u6676",
      tier: "\u7A00\u6709",
      kind: "\u6218\u9550",
      summary: "\u6676\u9E23\u4E00\u7EBF\uFF0C\u987D\u5CA9\u6210\u9699\u3002"
    },
    {
      id: "GOODS-V2-DUR-E05",
      name: "\u7089\u8A93\u62A4\u8155",
      tier: "\u7A00\u6709",
      kind: "\u62A4\u8155",
      summary: "\u8D64\u7EB9\u5C01\u7130\uFF0C\u94C1\u8155\u64CE\u950B\u3002"
    },
    {
      id: "GOODS-V2-DUR-E06",
      name: "\u6DF1\u5CA9\u58C1\u5792",
      tier: "\u53F2\u8BD7",
      kind: "\u5DE8\u76FE",
      summary: "\u6DF1\u5CA9\u4E0D\u8BED\uFF0C\u58C1\u5792\u4E3A\u8A93\u3002"
    },
    {
      id: "GOODS-V2-DUR-E07",
      name: "\u4E5D\u7089\u4E4B\u8A93",
      tier: "\u4F20\u8BF4",
      kind: "\u53CC\u624B\u9524",
      summary: "\u4E5D\u7089\u5171\u9E23\uFF0C\u7FA4\u5CA9\u542C\u8A93\u3002"
    },
    {
      id: "GOODS-V2-DUR-E08",
      name: "\u7EF4\u683C\u5170\u7279\xB7\u7FA4\u5C71\u4E4B\u5FC3",
      tier: "\u795E\u5668",
      kind: "\u953B\u9524",
      summary: "\u9524\u9E23\u5851\u5CB3\uFF0C\u7089\u706B\u94F8\u57CE\u3002"
    },
    {
      id: "GOODS-V2-VIS-E01",
      name: "\u6797\u5730\u730E\u5F13",
      tier: "\u666E\u901A",
      kind: "\u77ED\u5F13",
      summary: "\u6B62\u6B65\u4E8E\u5F26\uFF0C\u4E0D\u6270\u6797\u7720\u3002"
    },
    {
      id: "GOODS-V2-VIS-E02",
      name: "\u68D5\u9E7F\u6E38\u4FA0\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u8F7B\u7532",
      summary: "\u68D5\u9E7F\u8FC7\u5F84\uFF0C\u94C1\u53F6\u62A4\u8EAB\u3002"
    },
    {
      id: "GOODS-V2-VIS-E03",
      name: "\u4E4C\u6728\u730E\u5203",
      tier: "\u7CBE\u826F",
      kind: "\u957F\u5315\u9996",
      summary: "\u4E4C\u6728\u6709\u5E74\uFF0C\u730E\u5203\u65E0\u9970\u3002"
    },
    {
      id: "GOODS-V2-VIS-E04",
      name: "\u82D4\u5F71",
      tier: "\u7A00\u6709",
      kind: "\u6597\u7BF7",
      summary: "\u82D4\u75D5\u8986\u5904\uFF0C\u6797\u5F71\u65E0\u540D\u3002"
    },
    {
      id: "GOODS-V2-VIS-E05",
      name: "\u9E7F\u89D2\u56DE\u58F0",
      tier: "\u7A00\u6709",
      kind: "\u6CD5\u6756",
      summary: "\u94F6\u94C3\u53E9\u591C\uFF0C\u53E4\u6839\u8046\u58F0\u3002"
    },
    {
      id: "GOODS-V2-VIS-E06",
      name: "\u6797\u95F4\u65E0\u58F0",
      tier: "\u53F2\u8BD7",
      kind: "\u957F\u5F13",
      summary: "\u65E0\u58F0\u4E4B\u5F26\uFF0C\u8D2F\u7A7F\u957F\u591C\u3002"
    },
    {
      id: "GOODS-V2-VIS-E07",
      name: "\u57C3\u5C14\u5FB7\u6797\u7684\u5B88\u671B",
      tier: "\u53F2\u8BD7",
      kind: "\u957F\u6756",
      summary: "\u53E4\u6728\u672A\u673D\uFF0C\u5B88\u671B\u672A\u4F11\u3002"
    },
    {
      id: "GOODS-V2-VIS-E08",
      name: "\u767D\u9E7F\u4E4B\u7EA6",
      tier: "\u53F2\u8BD7",
      kind: "\u80F8\u9488",
      summary: "\u767D\u9E7F\u8FC7\u5904\uFF0C\u8BF8\u58F0\u5F52\u6797\u3002"
    },
    {
      id: "GOODS-V2-LOS-E01",
      name: "\u6E56\u536B\u77ED\u5251",
      tier: "\u666E\u901A",
      kind: "\u77ED\u5251",
      summary: "\u6E56\u821F\u4E3A\u5BB6\uFF0C\u77ED\u950B\u4E3A\u536B\u3002"
    },
    {
      id: "GOODS-V2-LOS-E02",
      name: "\u94F6\u9CDF\u523A\u5251",
      tier: "\u7CBE\u826F",
      kind: "\u523A\u5251",
      summary: "\u94F6\u9CDE\u7834\u6C34\uFF0C\u950B\u8292\u65E0\u6CE2\u3002"
    },
    {
      id: "GOODS-V2-LOS-E03",
      name: "\u821F\u884C\u8005\u9CDE\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u8F7B\u7532",
      summary: "\u9CDE\u7247\u76F8\u53E0\uFF0C\u6E56\u98CE\u65E0\u9699\u3002"
    },
    {
      id: "GOODS-V2-LOS-E04",
      name: "\u6D9F\u6F2A",
      tier: "\u7A00\u6709",
      kind: "\u6212\u6307",
      summary: "\u4E00\u73AF\u8F7B\u6F3E\uFF0C\u6765\u950B\u504F\u822A\u3002"
    },
    {
      id: "GOODS-V2-LOS-E05",
      name: "\u6C89\u57CE\u8BBF\u5BA2",
      tier: "\u7A00\u6709",
      kind: "\u62A4\u7B26",
      summary: "\u65E7\u57CE\u6C89\u68A6\uFF0C\u6DF1\u6C34\u85CF\u95E8\u3002"
    },
    {
      id: "GOODS-V2-LOS-E06",
      name: "\u6708\u4E0B\u6C34\u5EAD",
      tier: "\u53F2\u8BD7",
      kind: "\u6CD5\u6756",
      summary: "\u6708\u51A0\u4E4B\u4E0B\uFF0C\u8BF8\u6C34\u6210\u5EAD\u3002"
    },
    {
      id: "GOODS-V2-LOS-E07",
      name: "\u955C\u6E56\u8A93\u7EA6",
      tier: "\u53F2\u8BD7",
      kind: "\u6CD5\u888D",
      summary: "\u955C\u6E56\u65E0\u5203\uFF0C\u4ECD\u53EF\u8FD8\u950B\u3002"
    },
    {
      id: "GOODS-V2-LOS-E08",
      name: "\u4F0A\u745F\u6587\u7684\u7B2C\u4E03\u4E50\u7AE0",
      tier: "\u4F20\u8BF4",
      kind: "\u4E03\u73AF\u6CD5\u6756",
      summary: "\u4E03\u73AF\u9F50\u9E23\uFF0C\u4E07\u6D41\u5171\u5F8B\u3002"
    },
    {
      id: "GOODS-V2-ESK-E01",
      name: "\u9A7F\u8DEF\u77ED\u5200",
      tier: "\u666E\u901A",
      kind: "\u77ED\u5200",
      summary: "\u9A7F\u706F\u53EF\u706D\uFF0C\u77ED\u950B\u72B9\u5728\u3002"
    },
    {
      id: "GOODS-V2-ESK-E02",
      name: "\u5CA9\u96BC\u957F\u5F13",
      tier: "\u7CBE\u826F",
      kind: "\u957F\u5F13",
      summary: "\u8352\u5929\u65E0\u57A3\uFF0C\u98DE\u77E2\u65E0\u6B67\u3002"
    },
    {
      id: "GOODS-V2-ESK-E03",
      name: "\u7070\u96BC\u65C5\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u8F7B\u7532",
      summary: "\u5C18\u9014\u672A\u6B62\uFF0C\u5B88\u5907\u4E0D\u5378\u3002"
    },
    {
      id: "GOODS-V2-ESK-E04",
      name: "\u65E7\u8DEF\u4E4B\u706F",
      tier: "\u7A00\u6709",
      kind: "\u624B\u6756",
      summary: "\u65E7\u8DEF\u6709\u706F\uFF0C\u5E9F\u589F\u65E0\u8A00\u3002"
    },
    {
      id: "GOODS-V2-ESK-E05",
      name: "\u957F\u9014\u5BA2",
      tier: "\u7A00\u6709",
      kind: "\u957F\u9774",
      summary: "\u98CE\u5C18\u65E0\u7586\uFF0C\u6B65\u5C65\u4E0D\u8F8D\u3002"
    },
    {
      id: "GOODS-V2-ESK-E06",
      name: "\u65AD\u5D16\u56DE\u54CD",
      tier: "\u53F2\u8BD7",
      kind: "\u91CD\u5F29",
      summary: "\u65AD\u5D16\u65E0\u58F0\uFF0C\u91CD\u77E2\u5524\u9192\u3002"
    },
    {
      id: "GOODS-V2-ESK-E07",
      name: "\u6B8B\u9633\u5B88\u536B",
      tier: "\u53F2\u8BD7",
      kind: "\u5854\u76FE",
      summary: "\u65E5\u8F6E\u5C06\u6C89\uFF0C\u76FE\u8A93\u4E0D\u6C89\u3002"
    },
    {
      id: "GOODS-V2-ESK-E08",
      name: "\u963F\u65AF\u5361\u4F26\u7684\u4F59\u70EC",
      tier: "\u53F2\u8BD7",
      kind: "\u5F2F\u5203\u957F\u5251",
      summary: "\u4F59\u70EC\u4E4B\u4E2D\uFF0C\u67B7\u9501\u4EA6\u711A\u3002"
    },
    {
      id: "GOODS-V2-SOL-E01",
      name: "\u7EFF\u6D32\u5F2F\u5200",
      tier: "\u666E\u901A",
      kind: "\u5F2F\u5200",
      summary: "\u7EFF\u6D32\u5728\u540E\uFF0C\u98CE\u6C99\u5728\u524D\u3002"
    },
    {
      id: "GOODS-V2-SOL-E02",
      name: "\u8428\u7EF4\u5170\u9576\u94F6\u5200",
      tier: "\u7CBE\u826F",
      kind: "\u5F2F\u5200",
      summary: "\u94F6\u7EB9\u5FAA\u6708\uFF0C\u5200\u950B\u5FAA\u8A93\u3002"
    },
    {
      id: "GOODS-V2-SOL-E03",
      name: "\u6C99\u96BC\u8F7B\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u8F7B\u7532",
      summary: "\u6C99\u6D77\u708E\u663C\uFF0C\u94C1\u7FBD\u4E0D\u6298\u3002"
    },
    {
      id: "GOODS-V2-SOL-E04",
      name: "\u8703\u5F71",
      tier: "\u7A00\u6709",
      kind: "\u9762\u7EB1",
      summary: "\u91D1\u7EB1\u63A9\u9762\uFF0C\u8703\u8272\u79FB\u5F62\u3002"
    },
    {
      id: "GOODS-V2-SOL-E05",
      name: "\u5BD2\u6708",
      tier: "\u7A00\u6709",
      kind: "\u62A4\u7B26",
      summary: "\u94F6\u6708\u4E0D\u8BED\uFF0C\u5BD2\u8F89\u81EA\u5B88\u3002"
    },
    {
      id: "GOODS-V2-SOL-E06",
      name: "\u5343\u591C\u4E4B\u5203",
      tier: "\u53F2\u8BD7",
      kind: "\u5F2F\u5200",
      summary: "\u5343\u591C\u672A\u5C3D\uFF0C\u8BF8\u5203\u5DF2\u4E34\u3002"
    },
    {
      id: "GOODS-V2-SOL-E07",
      name: "\u6CD5\u5C14\u745F\u7684\u9057\u54CD",
      tier: "\u4F20\u8BF4",
      kind: "\u957F\u67AA",
      summary: "\u5DE8\u9AB8\u6C89\u5BC2\uFF0C\u67AA\u8A93\u4ECD\u9E23\u3002"
    },
    {
      id: "GOODS-V2-SOL-E08",
      name: "\u963F\u5179\u62C9\u8F9B\xB7\u767D\u663C\u738B\u6743",
      tier: "\u795E\u5668",
      kind: "\u6743\u6756",
      summary: "\u767D\u663C\u4E4B\u51A0\uFF0C\u738B\u6743\u4E4B\u5370\u3002"
    },
    {
      id: "GOODS-V2-NOR-E01",
      name: "\u5317\u5883\u730E\u65A7",
      tier: "\u666E\u901A",
      kind: "\u624B\u65A7",
      summary: "\u5317\u98CE\u78E8\u67C4\uFF0C\u5BD2\u94C1\u6210\u5203\u3002"
    },
    {
      id: "GOODS-V2-NOR-E02",
      name: "\u8D6B\u5C14\u65AF\u5854\u5FB7\u94C1\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u4E2D\u7532",
      summary: "\u94C1\u7532\u4E4B\u5916\uFF0C\u5C3D\u662F\u5BD2\u51AC\u3002"
    },
    {
      id: "GOODS-V2-NOR-E03",
      name: "\u96EA\u9E2E\u957F\u5F13",
      tier: "\u7CBE\u826F",
      kind: "\u957F\u5F13",
      summary: "\u96EA\u539F\u65E0\u58F0\uFF0C\u5F13\u5F26\u6709\u4FE1\u3002"
    },
    {
      id: "GOODS-V2-NOR-E04",
      name: "\u7089\u706B\u4E4B\u62E5",
      tier: "\u7A00\u6709",
      kind: "\u6597\u7BF7",
      summary: "\u62AB\u4E0A\u4F59\u706B\uFF0C\u957F\u591C\u53EF\u6E21\u3002"
    },
    {
      id: "GOODS-V2-NOR-E05",
      name: "\u8E0F\u96EA\u65E0\u75D5",
      tier: "\u7A00\u6709",
      kind: "\u957F\u9774",
      summary: "\u8F7B\u5C65\u6E21\u96EA\uFF0C\u5BD2\u5DDD\u9690\u8E2A\u3002"
    },
    {
      id: "GOODS-V2-NOR-E06",
      name: "\u51DB\u51AC\u88C1\u51B3",
      tier: "\u53F2\u8BD7",
      kind: "\u53CC\u624B\u5251",
      summary: "\u971C\u5203\u65AD\u7F6A\uFF0C\u5BD2\u6F6E\u8986\u519B\u3002"
    },
    {
      id: "GOODS-V2-NOR-E07",
      name: "\u6781\u5149\u7EC7\u68A6\u8005",
      tier: "\u53F2\u8BD7",
      kind: "\u6CD5\u6756",
      summary: "\u6781\u5149\u7EC7\u5E55\uFF0C\u971C\u591C\u5782\u5E37\u3002"
    },
    {
      id: "GOODS-V2-NOR-E08",
      name: "\u51AC\u5385\u4E0D\u706D\u4E4B\u706B",
      tier: "\u53F2\u8BD7",
      kind: "\u63D0\u706F\u5F0F\u6CD5\u5668",
      summary: "\u957F\u591C\u53EF\u4E34\uFF0C\u7089\u706B\u4E0D\u706D\u3002"
    },
    {
      id: "GOODS-V2-VAS-E01",
      name: "\u9ED1\u5CA9\u77ED\u5251",
      tier: "\u666E\u901A",
      kind: "\u77ED\u5251",
      summary: "\u9ED1\u5CA9\u65E0\u9970\uFF0C\u94A2\u5203\u4E0D\u6020\u3002"
    },
    {
      id: "GOODS-V2-VAS-E02",
      name: "\u7089\u536B\u6218\u9524",
      tier: "\u7CBE\u826F",
      kind: "\u6218\u9524",
      summary: "\u9524\u97F3\u9707\u7532\uFF0C\u94C1\u9762\u6467\u575A\u3002"
    },
    {
      id: "GOODS-V2-VAS-E03",
      name: "\u5965\u5C14\u745F\u59C6\u9CDE\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u4E2D\u7532",
      summary: "\u6697\u94C1\u4E3A\u7532\uFF0C\u5B88\u8A93\u5982\u521D\u3002"
    },
    {
      id: "GOODS-V2-VAS-E04",
      name: "\u4F59\u70EC\u62A4\u624B",
      tier: "\u7A00\u6709",
      kind: "\u62A4\u624B",
      summary: "\u4F59\u70EC\u672A\u51B7\uFF0C\u5203\u8A93\u6B63\u70BD\u3002"
    },
    {
      id: "GOODS-V2-VAS-E05",
      name: "\u9ED1\u66DC\u4E4B\u5E55",
      tier: "\u7A00\u6709",
      kind: "\u80F8\u9488",
      summary: "\u9ED1\u66DC\u6210\u5E55\uFF0C\u70C8\u7130\u6B62\u6B65\u3002"
    },
    {
      id: "GOODS-V2-VAS-E06",
      name: "\u7194\u661F\u8005",
      tier: "\u53F2\u8BD7",
      kind: "\u5DE8\u5251",
      summary: "\u6697\u5203\u85CF\u7130\uFF0C\u8D64\u5F27\u711A\u7A7A\u3002"
    },
    {
      id: "GOODS-V2-VAS-E07",
      name: "\u5361\u5C14\u7EF4\u65AF\u7684\u5FC3\u8DF3",
      tier: "\u4F20\u8BF4",
      kind: "\u6218\u9524",
      summary: "\u7FA4\u5CA9\u4E4B\u4E0B\uFF0C\u706B\u5FC3\u672A\u7720\u3002"
    },
    {
      id: "GOODS-V2-VAS-E08",
      name: "\u4F0A\u683C\u7EB3\u745E\u65AF\xB7\u521B\u4E16\u4F59\u70EC",
      tier: "\u795E\u5668",
      kind: "\u62A4\u81C2",
      summary: "\u4E07\u7130\u5F52\u70EC\uFF0C\u521D\u706B\u5E38\u660E\u3002"
    },
    {
      id: "GOODS-V2-EST-E01",
      name: "\u6D77\u5D16\u536B\u5251",
      tier: "\u666E\u901A",
      kind: "\u5355\u624B\u5251",
      summary: "\u767D\u5D16\u4E3A\u754C\uFF0C\u5B88\u5203\u4E34\u98CE\u3002"
    },
    {
      id: "GOODS-V2-EST-E02",
      name: "\u94F6\u9E25\u793C\u5251",
      tier: "\u7CBE\u826F",
      kind: "\u7EC6\u5251",
      summary: "\u94F6\u7FFC\u51DD\u8F89\uFF0C\u5251\u950B\u85CF\u9510\u3002"
    },
    {
      id: "GOODS-V2-EST-E03",
      name: "\u516C\u56FD\u9A91\u58EB\u7532",
      tier: "\u7CBE\u826F",
      kind: "\u534A\u8EAB\u677F\u7532",
      summary: "\u516C\u56FD\u4E4B\u8A93\uFF0C\u94F8\u4E8E\u94F6\u7532\u3002"
    },
    {
      id: "GOODS-V2-EST-E04",
      name: "\u6D77\u98CE\u79C1\u8BED",
      tier: "\u7A00\u6709",
      kind: "\u8033\u5760",
      summary: "\u4E07\u91CD\u98CE\u6D6A\uFF0C\u5171\u95FB\u4E00\u58F0\u3002"
    },
    {
      id: "GOODS-V2-EST-E05",
      name: "\u767D\u5D16\u7FBD\u8863",
      tier: "\u7A00\u6709",
      kind: "\u62AB\u98CE",
      summary: "\u767D\u7FBD\u8FCE\u5C9A\uFF0C\u8F7B\u8863\u5FA1\u98CE\u3002"
    },
    {
      id: "GOODS-V2-EST-E06",
      name: "\u843D\u65E5\u5723\u548F",
      tier: "\u53F2\u8BD7",
      kind: "\u957F\u5251",
      summary: "\u843D\u65E5\u4E4B\u540E\uFF0C\u5723\u548F\u672A\u7EDD\u3002"
    },
    {
      id: "GOODS-V2-EST-E07",
      name: "\u6CD5\u5C14\u6E29\u7684\u6700\u540E\u5B88\u591C",
      tier: "\u53F2\u8BD7",
      kind: "\u80F8\u7532",
      summary: "\u5821\u706F\u5C06\u5C3D\uFF0C\u5B88\u591C\u672A\u7EC8\u3002"
    },
    {
      id: "GOODS-V2-EST-E08",
      name: "\u8FDC\u5CB8\u661F\u56FE",
      tier: "\u53F2\u8BD7",
      kind: "\u6CD5\u4E66",
      summary: "\u8FDC\u5CB8\u5165\u5377\uFF0C\u7FA4\u661F\u7559\u94ED\u3002"
    }
  ];

  // src/state/equipment-slots.mjs
  var weaponSlots = /* @__PURE__ */ new Set(["\u624B\u6301", "\u6B66\u5668", "\u4E3B\u624B", "\u6CD5\u6756", "tool"]);
  var bodySlots = /* @__PURE__ */ new Set(["\u5916\u8863", "\u62A4\u5177", "\u62A4\u7532", "\u76D4\u7532", "\u62AB\u98CE", "outer", "armor"]);
  var equipmentSlotGroup = (slot) => weaponSlots.has(slot) ? "weapon" : bodySlots.has(slot) ? "body" : slot;
  var equipmentSlotLabel = (slot) => ({ tool: "\u624B\u6301", outer: "\u5916\u8863", armor: "\u62A4\u5177" })[slot] ?? slot;

  // src/ui/equipment-view.mjs
  var equipmentDisplayName = (name) => String(name ?? "").split(/[·・•]/).at(-1).trim();
  var records = new Map(equipment_copy_default.flatMap((x) => [[x.id, x], [x.name, x]]));
  var basics = { "staff": ["\u6CD5\u6756", "\u8FDC\u884C\u4E4B\u59CB\uFF0C\u5FAE\u5149\u76F8\u968F\u3002"], "cloak": ["\u62AB\u98CE", "\u661F\u4E0B\u884C\u65C5\uFF0C\u98CE\u4E2D\u4E3A\u5BB6\u3002"], "sword": ["\u77ED\u5251", "\u4EE5\u94F6\u94ED\u8A93\uFF0C\u4EE5\u5203\u5B88\u7EA6\u3002"], "armor": ["\u62A4\u5177", "\u7D20\u9769\u627F\u950B\uFF0C\u575A\u6263\u5B88\u8A93\u3002"], "\u6DF1\u7EFF\u65C5\u884C\u62AB\u98CE": ["\u62AB\u98CE", "\u98CE\u5C18\u8986\u80A9\uFF0C\u8FDC\u884C\u672A\u6B62\u3002"] };
  var kindIn = (name) => String(name ?? "").match(/长剑|短剑|刺剑|细剑|弯刀|短刀|匕首|法杖|长杖|短杖|权杖|手杖|魔杖|长枪|长矛|长弓|短弓|弓|重弩|轻弩|弩|战斧|巨剑|重剑|战锤|锻锤|战镐|披风|斗篷|披肩|法袍|轻甲|中甲|重甲|板甲|胸甲|皮甲|锁甲|护具|长靴|战靴|护腕|护臂|护手|戒指|印戒|胸针|护符|项链|耳坠|冠冕|头盔|面纱|塔盾|巨盾|盾牌|法书|魔导书|魔法宝珠|宝珠|法器/)?.[0];
  function equipmentInfo(item, id, slot) {
    if (!item) return null;
    if (id === "astreya" || /阿斯特蕾雅|群星之冕/.test(item.\u540D\u79F0 ?? "")) return { kind: "\u6CD5\u6756", tier: "\u795E\u5668", lines: ["\u5C0F\u76D6\u7684\u4E13\u5C5E\u795E\u5668", "\u5723\u94F6\u4E3A\u8A93\uFF0C\u7FA4\u661F\u4E3A\u8BC1\u3002"] };
    const record = records.get(id) ?? records.get(item.\u540D\u79F0);
    if (record) return { ...record, lines: [record.tier + " \xB7 " + record.kind, record.summary] };
    const basic = basics[item.\u540D\u79F0] ?? basics[itemArtKey(item.\u540D\u79F0)], generic = resolveGenericItemArt(item.\u540D\u79F0, item);
    const kind = basic?.[0] ?? kindIn(item.\u7C7B\u578B ?? item.\u79CD\u7C7B ?? item.\u540D\u79F0 ?? "") ?? (generic && ["weapons", "clothing", "jewelry"].includes(generic.group) ? generic.label : null) ?? (slot ? equipmentSlotLabel(slot) : null);
    if (!kind) return null;
    const tier = item.\u54C1\u7EA7 ?? item.\u7A00\u6709\u5EA6;
    return { kind, tier, lines: [tier ? tier + " \xB7 " + kind : kind, basic?.[1] ?? (/剑|刀|矛|枪|斧|锤|镐/.test(kind) ? "\u63E1\u6301\u7A33\u56FA\uFF0C\u4FBF\u4E8E\u8FD1\u8EAB\u4EA4\u950B\u3002" : /杖|书|法器/.test(kind) ? "\u4FBF\u4E8E\u5F15\u5BFC\u4E0E\u65BD\u653E\u6CD5\u672F\u3002" : /弓|弩/.test(kind) ? "\u63E1\u6301\u7A33\u5B9A\uFF0C\u4FBF\u4E8E\u7784\u51C6\u5C04\u51FB\u3002" : /甲|衣|袍|披|具/.test(kind) ? "\u8D34\u8EAB\u7A7F\u6234\uFF0C\u517C\u987E\u884C\u52A8\u9632\u62A4\u3002" : "\u968F\u8EAB\u4F69\u6234\uFF0C\u53D1\u6325\u5668\u7269\u6548\u7528\u3002")] };
  }
  function equipmentTargetSlot(info) {
    const kind = info.kind;
    if (/盾/.test(kind)) return "\u526F\u624B";
    if (/剑|刀|匕首|杖|枪|矛|弓|弩|斧|锤|镐|飞刃|法器|法书|魔导书|宝珠/.test(kind)) return "\u624B\u6301";
    if (/冠|盔|帽|面纱/.test(kind)) return "\u5934\u90E8";
    if (/靴|鞋/.test(kind)) return "\u8DB3\u90E8";
    if (/护腕|护手|护臂|手套/.test(kind)) return "\u624B\u90E8";
    if (/甲|护具/.test(kind)) return "\u62A4\u5177";
    if (/斗篷|披风|披肩|衣|袍|便装|裙装|背旗/.test(kind)) return "\u5916\u8863";
    return "\u9970\u54C1";
  }
  function equipmentEntries(state, actor) {
    const all = Object.entries(state.\u4EBA\u7269[actor].\u88C5\u5907 ?? {}).filter(([, id]) => state.\u7269\u54C1?.[id]);
    const weapon = all.filter(([slot]) => equipmentSlotGroup(slot) === "weapon").at(-1), body = all.filter(([slot]) => equipmentSlotGroup(slot) === "body").at(-1);
    return [weapon ?? ["\u624B\u6301", null], body ?? ["\u5916\u8863", null], ...all.filter(([slot]) => !["weapon", "body"].includes(equipmentSlotGroup(slot)))];
  }
  function equipmentPlan(state, id) {
    const item = state.\u7269\u54C1?.[id], actor = item?.holder;
    if (!["xingxing", "xiaogai"].includes(actor)) return { disabled: true, reason: "\u8BF7\u5148\u9009\u62E9\u4EBA\u7269\u968F\u8EAB\u6301\u6709\u7684\u88C5\u5907\u3002" };
    const worn = Object.entries(state.\u4EBA\u7269[actor].\u88C5\u5907 ?? {}).find(([, value]) => value === id), info = equipmentInfo(item, id, worn?.[0]);
    if (!info || item.\u6D3B\u7269 || !(item.\u6570\u91CF > 0)) return { disabled: true, reason: "\u8BF7\u5148\u9009\u62E9\u4E00\u4EF6\u88C5\u5907\u3002" };
    const storage = state.\u50A8\u4F4D?.[item.storage_id];
    const available = storage?.\u7C7B\u578B === "\u968F\u8EAB" && storage.\u53EF\u7528 && storage.\u5730\u70B9 === state.\u573A\u666F.\u5730\u70B9 && storage.\u4FDD\u7BA1\u8005 === actor;
    return { actor, slot: worn?.[0] ?? equipmentTargetSlot(info), itemId: worn ? null : id, removing: !!worn, disabled: !available, reason: available ? "" : "\u9700\u5148\u628A\u88C5\u5907\u4ECE\u5BB9\u5668\u4E2D\u53D6\u51FA\u3002", info };
  }

  // src/ui/reference-pages.mjs
  var headingPlaceName = (id, state) => placeName(id === "LOC-VIR-003" ? "LOC-VIR-001" : id, state);
  var manaFormat = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2, useGrouping: false });
  function referencePages(c) {
    const { node: node3, button: button2, icon: icon3, coins: coins2, text: text2, NAMES: NAMES2, content, assets, view, render: render3, open, select, action, row, list, empty, gallery } = c;
    const box = (e, r) => position(e, r);
    const art2 = (key, r, holes = [], cls = "", paths2 = []) => originalWindow(key, r, holes, cls, assets, paths2);
    const page = (cls) => node3("div", void 0, "xh-page " + cls);
    const painted = (parent, key, r, holes = [], cls = "", paths2 = []) => {
      const a = box(art2(key, r, holes, cls, paths2), r);
      parent.append(a);
      return a;
    };
    const sr = (tag, value) => node3(tag, value, "xh-sr-only");
    let mobilePerson = null, mobileJourney = "here", mobileInventory = "items", mobileBonds = "story", mobileNotebook = "records";
    function mobileSwitch(name, choices, selected, choose) {
      const nav = node3("nav", void 0, "xh-mobile-switch");
      nav.setAttribute("aria-label", name);
      const inventory2 = c.isMobileInventory?.(), notebook2 = c.isMobileNotebook?.(), bonds2 = c.isMobileBonds?.(), illustrated = c.isMobileJourney?.() || inventory2 || notebook2 || bonds2, people = name === "\u65C5\u9014\u4EBA\u7269";
      if (illustrated) {
        nav.classList.add("xh-mobile-icon-switch", people ? "xh-mobile-person-switch" : inventory2 ? "xh-mobile-inventory-switch" : notebook2 ? "xh-mobile-notebook-switch" : bonds2 ? "xh-mobile-bonds-switch" : "xh-mobile-record-switch");
      }
      for (const [index, [id, label]] of choices.entries()) {
        const b = button2(label, () => {
          choose(id);
          render3();
          content.querySelector('[data-mobile-switch="' + name + "-" + id + '"]')?.focus({ preventScroll: true });
        }, null);
        b.dataset.mobileSwitch = name + "-" + id;
        b.setAttribute("aria-pressed", String(selected === id));
        if (illustrated) {
          b.replaceChildren(art2("phone-layer-journey-record-tabs", [110 + Math.min(index, 1) * 384, 727, 384, 88], [], "xh-mobile-switch-plate"));
          b.title = label;
          if (people) b.append(art2("phone-layer-character-switch-rich", index ? [1292, 268, 170, 158] : [446, 271, 179, 151], [], "xh-mobile-switch-face"), icon3("star"));
          else if (inventory2) b.append(icon3(index ? "star" : "bag"));
          else if (notebook2) b.append(icon3(index ? "feather" : "book"));
          else if (bonds2) b.append(icon3(["heart", "feather", "book"][index]));
          else {
            b.append(icon3(index ? "note" : "compass"));
            if (index) {
              const feather = icon3("feather");
              feather.classList.add("xh-mobile-switch-feather");
              b.append(feather);
            }
          }
          b.append(node3("span", label, "xh-mobile-switch-label"));
        }
        nav.append(b);
      }
      return nav;
    }
    const fixed = (parent, tag, value, r, cls = "") => {
      const e = box(node3(tag, value, cls), r);
      parent.append(e);
      return e;
    };
    const recordRows = (value) => value && typeof value === "object" && !Array.isArray(value) ? Object.entries(value) : [];
    const copy2 = (value, fallback = "\u8D44\u6599\u5F85\u8865\u3002") => typeof value === "string" && value.trim() ? value : fallback;
    function paperRecords(parent, value, unknown, none) {
      parent.tabIndex = 0;
      if (value == null) {
        empty(parent, unknown);
        return;
      }
      const rows3 = recordRows(value);
      if (!rows3.length) {
        empty(parent, none);
        return;
      }
      for (const [id, v] of rows3.reverse()) {
        const p = node3("p", copy2(v));
        p.dataset.recordId = id;
        parent.append(p);
      }
    }
    function nativeButton(parent, label, run, r, ico, cls = "") {
      const b = box(button2(label, run, ico, cls), r);
      parent.append(b);
      return b;
    }
    function face(id, cls = "", round2 = false) {
      const chosen = gallery.selected("portrait", id);
      let portrait;
      if (round2) {
        const record = gallery.entry(chosen, id);
        portrait = node3("span", void 0, "xh-portrait " + cls);
        portrait.append(record?.default && !record.imageSrc ? originalWindow(record.asset, DEFAULT_PORTRAIT_CROPS[id], [], "xh-gallery-image", assets) : gallery.image(chosen, "", id));
      } else portrait = gallery.image(chosen, "xh-portrait " + cls, id);
      portrait.dataset.character = id;
      return portrait;
    }
    function mobilePortrait(id) {
      const rect = id === "xingxing" ? [77, 94, 356, 328] : [946, 94, 340, 328];
      const portrait = node3("span", void 0, "xh-gallery-image xh-phone-portrait");
      portrait.dataset.character = id;
      portrait.append(gallery.photo("journey", rect, "journey-matte", gallery.selected("portrait", id), "xh-phone-portrait-photo", true, [], null, id));
      return portrait;
    }
    function mobileJourneyPortrait(id) {
      const chosen = gallery.selected("portrait", id), record = gallery.entry(chosen, id);
      const rect = id === "xingxing" ? [77, 94, 356, 328] : [946, 94, 340, 328];
      const useChoice = record && (!record.default || record.imageSrc);
      const portrait = node3("span", void 0, "xh-gallery-image xh-phone-portrait xh-mp-journey-photo");
      portrait.dataset.character = id;
      portrait.dataset.art = chosen;
      const picture = useChoice ? gallery.image(chosen, "xh-mp-journey-picture", id) : originalWindow("journey", rect, [], "xh-mp-journey-picture", assets, [], false);
      const box2 = useChoice ? record.box : rect;
      portrait.style.setProperty("--portrait-ratio", box2[2] / box2[3]);
      portrait.append(picture);
      return portrait;
    }
    function itemArtwork(name, cls = "", id) {
      const artwork = resolveItemArt(name, id, c.getItemImages?.() ?? [], assets, c.snapshot?.().state?.\u7269\u54C1?.[id]);
      if (!artwork) {
        const e2 = node3("span", void 0, "xh-generic-item " + cls);
        e2.append(icon3(/书|抄本/.test(name) ? "book" : "bag"));
        return e2;
      }
      const e = node3("span", void 0, "xh-item-art " + cls), image = node3("img");
      image.src = artwork.src;
      image.alt = "";
      image.draggable = false;
      image.decoding = "async";
      image.addEventListener("error", () => {
        image.remove();
        e.append(icon3("bag"));
        e.classList.add("xh-item-image-missing");
      }, { once: true });
      e.append(image);
      e.dataset.transparentItem = artwork.key;
      return e;
    }
    const itemFrame = (cls) => foregroundWindow("inventory-neutral", ITEM_WINDOWS.ration, "selection-matte", cls, assets, [[80, 482, 245, 30]], [56, 204, 1188, 501]);
    function emptySlot(cls) {
      const slot = node3("div", void 0, cls + " xh-empty-slot");
      slot.setAttribute("aria-hidden", "true");
      slot.append(itemFrame("xh-item-card-frame"));
      return slot;
    }
    function personCard(s, id) {
      const small = id === "xingxing", ox = small ? 0 : 912, p = s.\u4EBA\u7269[id], card = box(node3("section", void 0, "xh-person " + id), [12 + ox, 87, 904, 353]);
      if (c.mobilePreview) {
        card.append(art2("profile-paper-" + id, small ? [0, 110, 557, 65] : [1260, 100, 576, 70], [], "xh-mobile-person-edge"), art2("profile-paper-" + id, small ? [0, 757, 557, 80] : [1260, 767, 576, 90], [], "xh-mobile-person-edge xh-mobile-person-edge-bottom"));
      }
      const holes = small ? [[595, 218, 266, 29], [595, 272, 266, 29], [584, 329, 195, 25], [792, 331, 77, 29], [731, 132, 129, 32], [527, 389, 310, 32]] : [[1464, 218, 269, 29], [1464, 272, 269, 29], [1443, 329, 195, 25], [1639, 329, 91, 31], [1604, 132, 129, 32], [1418, 389, 317, 32], [1735, 212, 88, 88]];
      card.append(portraitForeground("journey", [12 + ox, 87, 904, 353], "xh-component-art xh-person-foreground", assets, holes), sr("h2", NAMES2[id]));
      const portraitRect = small ? [38, 94, 406, 338] : [930, 94, 406, 338];
      const faceButton = box(button2("\u67E5\u770B" + NAMES2[id], () => open("person", id), null, "xh-face-button"), [portraitRect[0] - 12 - ox, 7, 406, 338]);
      faceButton.replaceChildren(gallery.photo("journey", portraitRect, "journey-matte", gallery.selected("portrait", id), "xh-portrait xh-desktop-portrait", true, [], null, id), face(id, "xh-mobile-portrait"));
      card.append(faceButton);
      card.append(box(art2("journey", small ? [550, 190, 132, 26] : [1410, 190, 140, 26], [], "xh-id-paper"), [small ? 536 : 486, 60, 145, 47]));
      fixed(card, "span", small ? "naiv31y" : "gatsby", [small ? 545 : 495, 60, 138, 47], "xh-character-id");
      const badge = box(node3("span", s.\u626E\u6F14 === id ? "\u6B63\u5728\u626E\u6F14" : "\u540C\u884C\u4E3B\u89D2", "xh-badge"), [small ? 663 - 12 : 1536 - 924, 29, 213, 71]);
      badge.replaceChildren(art2("journey", small ? [663, 116, 213, 71] : [1536, 116, 213, 71], small ? [[731, 132, 129, 32]] : [[1604, 132, 129, 32]], "xh-badge-art"), node3("span", s.\u626E\u6F14 === id ? "\u6B63\u5728\u626E\u6F14" : "\u540C\u884C\u4E3B\u89D2"));
      card.append(badge);
      const stats = box(node3("div", void 0, "xh-person-body"), [small ? 469 - 12 : 1327 - 924, 121, 438, 165]);
      const health = p.\u4F24\u52BF == null ? "\u5F85\u8865\u8D44\u6599" : Object.keys(p.\u4F24\u52BF).length ? "\u6709\u4F24\u52BF\u8BB0\u5F55" : "\u6682\u65E0\u4F24\u52BF";
      for (const [label, value, ico] of [["\u8EAB\u4F53", health, "heart"], ["\u75B2\u52B3", text2(p.\u75B2\u52B3), "runner"], ["\u9B54\u529B", manaDescription(p.\u9B54\u529B) ?? "\u5F85\u8BB0\u5F55", "star"]]) {
        const r = node3("div", void 0, "xh-stat");
        r.append(icon3(ico), node3("span", label));
        const shown = value;
        const compact = label === "\u9B54\u529B" && shown.length > 7;
        const numeric = node3("strong", compact ? shown.replace(" / ", "/") : shown);
        if (label === "\u9B54\u529B") {
          numeric.className = "xh-journey-mana-value";
          numeric.dataset.compact = String(compact);
          numeric.title = value;
          numeric.setAttribute("aria-label", "\u9B54\u529B\uFF1A" + value);
        }
        r.append(numeric);
        stats.append(r);
      }
      card.append(stats);
      const learning = Object.values(p.\u5B66\u4E60\u4E2D ?? {})[0];
      fixed(card, "p", learning ? "\u6B63\u5728\u5B66\u4E60 \xB7 " + learning.\u540D\u79F0 : small ? "\u4ECE\u65C5\u9014\u4E2D\u7684\u7B2C\u4E00\u6B65\u5F00\u59CB\u3002" : "\u80FD\u529B\u8D44\u6599\u5F85\u8865\u3002", [small ? 515 : 491, 301, 319, 36], "xh-person-note");
      return card;
    }
    function journey(s) {
      const p = page("xh-travel");
      p.dataset.mobilePerson = mobilePerson ?? s.\u626E\u6F14;
      p.dataset.mobileJourney = mobileJourney;
      if (c.mobilePreview || c.isMobileJourney?.()) p.append(mobileSwitch("\u65C5\u9014\u4EBA\u7269", [["xingxing", "\u9192\u9192"], ["xiaogai", "\u5C0F\u76D6"]], mobilePerson ?? s.\u626E\u6F14, (id) => mobilePerson = id));
      p.append(personCard(s, "xingxing"), personCard(s, "xiaogai"));
      if (c.mobilePreview || c.isMobileJourney?.()) p.append(mobileSwitch("\u65C5\u9014\u8BB0\u5F55", [["here", "\u6B64\u523B\u7684\u65C5\u7A0B"], ["memo", "\u65C5\u9014\u5907\u5FD8"]], mobileJourney, (id) => mobileJourney = id));
      const route = box(node3("section", void 0, "xh-route-overview"), [15, 450, 1024, 373]);
      const summaryHoles = [[112, 552, 163, 49], [112, 635, 184, 32], [112, 676, 205, 31], [158, 746, 127, 33], [529, 746, 140, 33], [820, 746, 136, 33]];
      route.append(box(art2("journey-approved", [355, 535, 664, 177], [], "xh-route-illustration"), [340, 85, 664, 177]));
      route.append(art2("journey-approved", [15, 450, 1024, 373], summaryHoles, "xh-component-art"), sr("h2", "\u6B64\u523B\u7684\u65C5\u7A0B"));
      if (c.mobilePreview) route.append(art2("journey-approved", [15, 450, 1024, 80], [], "xh-mobile-route-title"), art2("journey-approved", [360, 530, 650, 177], [], "xh-mobile-route-scene"));
      const here = box(node3("div", void 0, "xh-current-place"), [100, 102, 250, 157]);
      here.append(node3("h3", headingPlaceName(s.\u573A\u666F.\u5730\u70B9, s)), sr("span", "\u6240\u5C5E\u5730\u533A"), node3("p", regionName(s.\u573A\u666F.\u5730\u533A)), node3("span", [s.\u573A\u666F.\u65F6\u95F4.\u5B63\u8282, s.\u573A\u666F.\u5929\u6C14, s.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5].filter(Boolean).join(" \xB7 ") || "\u65F6\u4EE4\u8D44\u6599\u5F85\u8865", "xh-current-weather"));
      for (const e of here.children) e.title = e.textContent;
      route.append(here);
      const meta = box(node3("div", void 0, "xh-route-meta"), [12, 273, 998, 84]);
      const loc = button2("\u67E5\u770B\u5730\u56FE \u203A", () => select(4), null);
      const money = button2("\u65C5\u8D39\u3000" + coins2(s.\u94B1\u5305.shared), () => open("ledger"), null);
      const foodItems = availableItems(s).map(([, v]) => v).filter((v) => /口粮|面包|干粮/.test(v.\u540D\u79F0));
      const ration = s.\u7269\u54C1 == null ? "\u5F85\u8865\u8D44\u6599" : foodItems.reduce((total, item) => total + item.\u6570\u91CF, 0);
      const food = button2("\u53E3\u7CAE\u3000" + ration, () => {
        view.ownerFilter = "shared";
        view.itemCategory = "\u8865\u7ED9";
        view.itemPage = 0;
        view.selectedItem = null;
        mobileInventory = "items";
        select(1);
      }, null);
      meta.append(loc, money, food);
      route.append(meta);
      p.append(route);
      const bond = box(node3("section", void 0, "xh-bond-preview"), [1049, 454, 773, 365]);
      bond.append(box(art2("travel-memo", [805, 174, 1020, 688], [], "xh-memo-illustration"), [341, 74, 432, 291]));
      bond.append(art2("travel-memo", [0, 0, 1825, 862], [[126, 305, 590, 63], [126, 495, 590, 112]], "xh-component-art"), sr("h2", "\u65C5\u9014\u5907\u5FD8"), sr("h3", "\u6700\u8FD1\u53D1\u751F"));
      if (c.mobilePreview) {
        const title = art2("travel-memo", [0, 0, 1825, 185], [], "xh-mobile-memo-title"), scene = art2("travel-memo", [805, 174, 1020, 688], [], "xh-mobile-memo-scene");
        bond.insertBefore(title, bond.lastChild);
        bond.insertBefore(scene, bond.lastChild);
      }
      const latest = facts(s).filter((v) => v.\u5730\u70B9 === s.\u573A\u666F.\u5730\u70B9).at(-1)?.\u5185\u5BB9 ?? s.\u65C5\u7A0B.\u91CD\u8981\u4E8B\u5B9E?.at(-1)?.\u5185\u5BB9 ?? Object.values(s.\u5173\u7CFB.\u660E\u786E\u4E8B\u5B9E ?? {}).at(-1) ?? "\u6682\u672A\u8BB0\u5F55\u3002";
      fixed(bond, "p", latest.split("\n")[0], [56, 126, 250, 42], "xh-travel-note-copy").title = latest;
      bond.append(sr("h3", "\u8BB0\u4E0B\u7684\u7EA6\u5B9A"));
      const promise = Object.values(s.\u65C5\u7A0B.\u7EA6\u5B9A ?? {}).at(-1) ?? "\u6682\u672A\u8BB0\u5F55\u3002";
      fixed(bond, "p", promise, [56, 211, 250, 49], "xh-travel-note-copy").title = promise;
      const journal = nativeButton(bond, "\u67E5\u770B\u624B\u8BB0 \u203A", () => select(3), [48, 271, 202, 54], null, "xh-travel-note-button");
      journal.replaceChildren(sr("span", "\u67E5\u770B\u624B\u8BB0 \u203A"));
      p.append(bond);
      if (c.isMobileJourney?.()) {
        const lower = node3("section", void 0, "xh-mobile-journey-panel");
        lower.setAttribute("aria-label", "\u65C5\u9014\u8BB0\u5F55");
        const filler = node3("div", void 0, "xh-mobile-route-filler");
        filler.setAttribute("aria-hidden", "true");
        filler.append(icon3("star"), icon3("compass"), icon3("star"));
        lower.append(route, bond, filler);
        p.append(lower);
      }
      content.append(p);
    }
    function equipment(s, id) {
      const wrap3 = node3("div", void 0, "xh-equipment-row"), who = button2(NAMES2[id] + "\u7684\u884C\u56CA", () => {
        view.ownerFilter = id;
        view.itemCategory = "\u5168\u90E8";
        view.itemPage = 0;
        view.selectedItem = null;
        if (c.mobilePreview || c.isMobileInventory?.()) mobileInventory = "items";
        render3();
      }, null, "xh-equipment-owner");
      who.replaceChildren(art2("inventory", id === "xingxing" ? [1082, 173, 270, 149] : [1082, 332, 270, 149], [], "xh-owner-art"), sr("strong", NAMES2[id]), face(id, "xh-equipment-owner-face"));
      who.setAttribute("aria-pressed", String(view.ownerFilter === id));
      wrap3.append(who);
      const items = node3("div", void 0, "xh-equipment-items");
      for (const [slot, key] of equipmentEntries(s, id).slice(0, 2)) {
        const v = s.\u7269\u54C1?.[key];
        if (!v) {
          const blank = emptySlot("xh-equipment-tile");
          blank.dataset.equipmentSlot = slot;
          items.append(blank);
          continue;
        }
        const b = button2(equipmentDisplayName(v.\u540D\u79F0), () => {
          view.selectedItem = key;
          if (c.mobilePreview) mobileInventory = "detail";
          else if (c.isMobileInventory?.()) mobileInventory = "gear";
          render3();
          content.scrollTop = 0;
        }, null, "xh-equipment-tile");
        b.prepend(itemArtwork(v.\u540D\u79F0, "", key), itemFrame("xh-item-card-frame"));
        b.title = slot + " \xB7 " + v.\u540D\u79F0;
        b.dataset.equipment = key;
        b.setAttribute("aria-pressed", String(view.selectedItem === key));
        items.append(b);
      }
      while (items.children.length < 2) items.append(emptySlot("xh-equipment-tile"));
      wrap3.append(items);
      return wrap3;
    }
    function inventory(s) {
      const ownerBoxes = { shared: [167, 172, 222, 70], xingxing: [421, 170, 225, 74], xiaogai: [690, 170, 225, 74] };
      const ownerPortraits = { xingxing: [433, 168, 80, 80], xiaogai: [697, 168, 80, 80] };
      const portraitHole = ([x, y, w, h]) => ({ type: "ellipse", cx: x + w / 2, cy: y + h / 2, rx: w / 2, ry: h / 2 });
      const portraitHoles = c.mobilePreview ? [] : Object.values(ownerPortraits).map(portraitHole);
      const p = page("xh-inventory-layout"), left = box(node3("section", void 0, "xh-inventory-main"), [15, 88, 1029, 742]);
      left.append(art2("inventory-neutral", [15, 88, 1029, 742], [[365, 249, 420, 26], [35, 336, 990, 437], [194, 790, 171, 29], [516, 790, 116, 29], ...portraitHoles], "xh-component-art"), sr("h2", "Our Satchel"));
      p.dataset.mobileInventory = mobileInventory;
      if (c.isMobileInventory?.()) p.append(mobileSwitch("\u884C\u56CA\u5206\u533A", [["items", "\u7269\u54C1"], ["gear", "\u88C5\u5907\u4E0E\u8BE6\u60C5"]], mobileInventory, (id) => mobileInventory = id));
      if (c.mobilePreview) {
        const nav = mobileSwitch("\u884C\u56CA\u5206\u533A", [["items", "\u7269\u54C1"], ["gear", "\u7A7F\u6234"], ["detail", "\u8BE6\u60C5"]], mobileInventory, (id) => mobileInventory = id);
        nav.append(button2("\u8D26\u672C", () => open("ledger"), null));
        p.append(nav);
      }
      left.append(art2("inventory", [125, 100, 720, 66], [], "xh-mobile-heading"));
      const owners = box(node3("div", void 0, "xh-owner-tabs"), [47, 84, 944, 70]);
      for (const id of ["shared", "xingxing", "xiaogai"]) {
        const b = button2(NAMES2[id], () => {
          view.ownerFilter = id;
          view.itemPage = 0;
          view.selectedItem = null;
          render3();
        }, null), r = ownerBoxes[id];
        b.replaceChildren(art2("inventory-neutral", r, id === "shared" ? [] : c.mobilePreview ? [[r[0] + 2, r[1], 84, 74]] : [portraitHole(ownerPortraits[id])], "xh-owner-tab-art"), sr("span", NAMES2[id]));
        if (id !== "shared") {
          const portrait = face(id, "xh-owner-tab-face", !c.mobilePreview);
          if (!c.mobilePreview) {
            const [x, y, w, h] = ownerPortraits[id];
            Object.assign(portrait.style, { left: x - r[0] - 1 + "px", top: y - r[1] - 1 + "px", width: w + "px", height: h + "px" });
          }
          b.append(portrait);
        }
        b.dataset.owner = id;
        b.setAttribute("aria-pressed", String(view.ownerFilter === id));
        owners.append(b);
      }
      left.append(owners);
      fixed(left, "p", view.ownerFilter === "shared" ? "\u5171\u540C\u603B\u89C8 \xB7 \u5305\u542B\u4E24\u4EBA\u7684\u5168\u90E8\u7269\u54C1" : NAMES2[view.ownerFilter] + "\u7684\u884C\u56CA", [48, 157, 941, 34], "xh-inventory-caption");
      const cats = box(node3("div", void 0, "xh-categories"), [43, 189, 945, 51]);
      const catBoxes = [[59, 277, 183, 50], [253, 277, 170, 50], [425, 277, 179, 50], [606, 277, 188, 50], [795, 277, 207, 50]];
      ["\u5168\u90E8", "\u8865\u7ED9", "\u88C5\u5907", "\u7D20\u6750", "\u7EAA\u5FF5"].forEach((label, i) => {
        const b = button2(label, () => {
          view.itemCategory = label;
          view.itemPage = 0;
          view.selectedItem = null;
          render3();
        }, null);
        b.replaceChildren(art2("inventory-neutral", catBoxes[i], [], "xh-control-art"), sr("span", label));
        b.setAttribute("aria-pressed", String(view.itemCategory === label));
        b.dataset.category = label;
        cats.append(b);
      });
      left.append(cats);
      const category = (n) => /面包|口粮|清水|水袋|皮囊|药剂|食物|药水/.test(n) ? "\u8865\u7ED9" : /阿斯特蕾雅|群星之冕|剑|杖|披风|护具|装备|露营|用具|工具/.test(n) ? "\u88C5\u5907" : /草|矿|材料|树脂/.test(n) ? "\u7D20\u6750" : /书签|纪念|压花/.test(n) ? "\u7EAA\u5FF5" : "\u5176\u4ED6";
      const items = Object.entries(s.\u7269\u54C1 ?? {}).filter(([, v2]) => (view.ownerFilter === "shared" || view.ownerFilter === v2.owner) && (view.itemCategory === "\u5168\u90E8" || category(v2.\u540D\u79F0) === view.itemCategory));
      const pages = Math.max(1, Math.ceil(items.length / 6));
      view.itemPage = Math.max(0, Math.min(view.itemPage, pages - 1));
      const current = items.slice(view.itemPage * 6, view.itemPage * 6 + 6);
      if (!s.\u7269\u54C1?.[view.selectedItem]) view.selectedItem = current[0]?.[0] ?? null;
      const grid = box(node3("div", void 0, "xh-item-grid"), [22, 250, 986, 389]);
      grid.dataset.turn = view.itemPage > view.renderedItemPage ? "next" : "previous";
      view.renderedItemPage = view.itemPage;
      for (const [id, v2] of current) {
        const b = button2("", () => {
          view.selectedItem = id;
          if (c.mobilePreview) mobileInventory = "detail";
          else if (c.isMobileInventory?.()) mobileInventory = "gear";
          render3();
          content.scrollTop = 0;
        }, null, "xh-item-tile");
        b.replaceChildren(itemArtwork(v2.\u540D\u79F0, "", id), itemFrame("xh-item-card-frame"), node3("span", v2.\u540D\u79F0 + " \xD7 " + v2.\u6570\u91CF, "xh-item-caption"));
        if (view.selectedItem === id) b.append(foregroundWindow("inventory", ITEM_WINDOWS.ration, "selection-matte", "xh-selected-floral-frame", assets, [[80, 482, 245, 30]], [56, 204, 1188, 501]));
        b.setAttribute("aria-label", "\u9009\u62E9\u7269\u54C1\uFF1A" + v2.\u540D\u79F0);
        b.title = v2.\u540D\u79F0 + " \xD7 " + v2.\u6570\u91CF;
        b.setAttribute("aria-pressed", String(view.selectedItem === id));
        b.dataset.item = id;
        grid.append(b);
      }
      while (grid.children.length < 6) grid.append(emptySlot("xh-item-tile"));
      left.append(grid);
      const pager = box(node3("nav", void 0, "xh-item-pagination"), [245, 646, 730, 40]);
      pager.setAttribute("aria-label", "\u7269\u54C1\u5206\u9875");
      const prev = button2("\u4E0A\u4E00\u9875\u7269\u54C1", () => {
        view.itemPage--;
        view.selectedItem = null;
        render3();
      }, null, "xh-page-prev"), next = button2("\u4E0B\u4E00\u9875\u7269\u54C1", () => {
        view.itemPage++;
        view.selectedItem = null;
        render3();
      }, null);
      prev.replaceChildren(art2("inventory", [425, 734, 52, 36], [], "xh-control-art"), sr("span", "\u4E0A\u4E00\u9875\u7269\u54C1"));
      next.replaceChildren(art2("inventory", [577, 734, 52, 36], [], "xh-control-art"), sr("span", "\u4E0B\u4E00\u9875\u7269\u54C1"));
      prev.disabled = view.itemPage === 0;
      next.disabled = view.itemPage === pages - 1;
      pager.append(prev, node3("strong", view.itemPage + 1 + " / " + pages), next, node3("span", "\u5171 " + items.length + " \u4EF6\u7269\u54C1"));
      left.append(pager);
      if (!c.isMobileInventory?.()) pager.append(c.equipmentButton(view.selectedItem));
      const wallet = box(node3("div", void 0, "xh-inventory-wallet"), [122, 691, 865, 45]);
      wallet.append(node3("span", (view.ownerFilter === "shared" ? "\u5171\u540C\u65C5\u8D39" : NAMES2[view.ownerFilter] + "\u7684\u94B1\u5305") + " \xB7 " + (s.\u94B1\u5305[view.ownerFilter] == null ? "\u2014" : coins2(s.\u94B1\u5305[view.ownerFilter]))));
      const ledgerButton = button2("\u67E5\u770B\u8D26\u672C", () => open("ledger"), null);
      wallet.append(ledgerButton);
      left.append(wallet);
      p.append(left);
      const side = box(node3("div", void 0, "xh-inventory-side"), [1057, 89, 772, 736]), gear = box(node3("section", void 0, "xh-gear"), [0, 0, 772, 403]);
      gear.append(originalWindow("inventory", [1057, 89, 772, 403], [[1360, 174, 425, 306], [1561, 111, 218, 54]], "xh-component-art", assets, [], c.mobilePreview === true), sr("h2", "\u968F\u8EAB\u88C5\u5907"));
      if (c.mobilePreview) gear.append(art2("inventory", [1057, 89, 772, 84], [], "xh-mobile-gear-title"));
      gear.append(box(node3("span", void 0, "xh-quote-paper"), [475, 17, 265, 59]));
      fixed(gear, "p", "Carry what feels like home,\nand wander farther.", [475, 17, 265, 59], "xh-equipment-quote");
      const rows3 = box(node3("div", void 0, "xh-equipment-rows"), [25, 84, 700, 306]);
      rows3.append(equipment(s, "xingxing"), equipment(s, "xiaogai"));
      gear.append(rows3);
      side.append(gear);
      const v = s.\u7269\u54C1?.[view.selectedItem];
      const info = box(node3("section", void 0, "xh-item-info"), [0, 414, 772, 322]);
      fixed(info, "h2", "\u7269\u54C1\u8BE6\u60C5", [84, 10, 205, 52], "xh-detail-heading");
      fixed(info, "span", "Item Details", [275, 12, 123, 45], "xh-detail-script").setAttribute("aria-hidden", "true");
      info.append(box(icon3("star"), [246, 20, 23, 28]), box(icon3("feather"), [405, 19, 30, 30]));
      let equipmentDetail = false;
      if (v) {
        const a = box(node3("div", void 0, "xh-detail-art-slot"), [27, 62, 400, 241]);
        a.append(itemArtwork(v.\u540D\u79F0, "xh-detail-art", view.selectedItem));
        info.append(a);
        const body = box(node3("div", void 0, "xh-item-detail-copy"), [441, 15, 282, 285]), wornSlot = Object.values(s.\u4EBA\u7269).flatMap((p2) => Object.entries(p2.\u88C5\u5907 ?? {})).find(([, id]) => id === view.selectedItem)?.[0], brief = equipmentInfo(v, view.selectedItem, wornSlot);
        equipmentDetail = !!brief;
        body.dataset.equipmentItem = String(!!brief);
        const title = node3("h3", v.\u540D\u79F0);
        title.title = v.\u540D\u79F0;
        body.append(title);
        const description = node3("p", brief ? void 0 : v.\u63CF\u8FF0 ?? (v.\u89C4\u683C\u5F15\u7528 ? "\u89C4\u683C\uFF1A" + ruleName(v.\u89C4\u683C\u5F15\u7528) : ""), "xh-item-description");
        if (brief) for (const line of brief.lines) description.append(node3("span", line, "xh-equipment-copy-line"));
        body.append(description);
        const metadata = node3("div", void 0, "xh-item-metadata");
        body.append(metadata);
        const detailRow = (label, value, ico) => {
          const r = row(metadata, label, value);
          r.classList.add("xh-item-meta-row");
          r.prepend(icon3(ico));
          return r;
        };
        detailRow("\u6570\u91CF", v.\u6570\u91CF + " " + v.\u5355\u4F4D, "box");
        detailRow("\u5F52\u5C5E", entityName(s, v.owner), "heart");
        const holder = detailRow("\u6301\u6709\u8005", entityName(s, v.holder), "person");
        holder.classList.add("xh-holder-row");
        if (["xingxing", "xiaogai"].includes(v.holder)) holder.lastElementChild.prepend(face(v.holder, "xh-holder-face"));
        const storage = s.\u50A8\u4F4D?.[v.storage_id];
        detailRow("\u5B58\u653E", storage?.\u7C7B\u578B, "bag");
        for (const [key, value] of resourceRows(s, view.selectedItem).filter(([key2]) => key2 === "\u5BB9\u5668\u5BB9\u91CF")) detailRow(key, value, "star");
        info.append(body);
      }
      const foreground = foregroundWindow("inventory-neutral", [1057, 503, 772, 322], "item-detail-stencil", "xh-detail-foreground", assets);
      foreground.style.maskMode = "luminance";
      info.append(foreground);
      if (equipmentDetail && c.isMobileInventory?.()) info.append(c.equipmentButton(view.selectedItem));
      side.append(info);
      p.append(side);
      if (c.isMobileInventory?.()) {
        const filler = node3("div", void 0, "xh-mobile-route-filler xh-mobile-inventory-filler");
        filler.setAttribute("aria-hidden", "true");
        filler.append(icon3("star"), icon3("bag"), icon3("star"));
        p.append(filler);
      }
      content.append(p);
    }
    function bonds(s) {
      const p = page("xh-bonds");
      p.dataset.mobileBonds = mobileBonds;
      if (c.mobilePreview || c.isMobileBonds?.()) p.append(mobileSwitch("\u7F81\u7ECA\u5206\u533A", [["story", "\u63D2\u753B"], ["relationship", "\u5173\u7CFB\u4E0E\u7EA6\u5B9A"], ["memories", "\u5171\u540C\u8BB0\u5FC6"]], mobileBonds, (id) => mobileBonds = id));
      const story = box(node3("section", void 0, "xh-story"), [0, 88, 967, 751]);
      const storyButton = button2("\u9009\u62E9\u5DF2\u89E3\u9501\u7684\u7F81\u7ECA\u63D2\u753B", () => open("artbook", "scene"), null, "xh-art-surface");
      storyButton.replaceChildren(gallery.photo("bonds", [0, 88, 967, 751], "bonds-matte", gallery.selected("scene"), ""));
      story.append(storyButton, sr("h2", "Our Story"));
      p.append(story);
      if (c.isDesktop?.()) {
        p.append(desktopBonds.render(s));
        content.append(p);
        return;
      }
      if (c.isMobileBonds?.() && mobileBonds !== "story") {
        p.append(desktopBonds.renderMobile(s, mobileBonds));
        content.append(p);
        return;
      }
      const right = box(node3("div", void 0, "xh-bond-right"), [967, 88, 861, 735]), pair = box(node3("div", void 0, "xh-bond-faces"), [0, 5, 861, 235]);
      pair.append(portraitForeground("bonds", [967, 93, 861, 235], "xh-component-art", assets));
      for (const [id, r] of [["xingxing", [76, 7, 258, 227]], ["xiaogai", [422, 7, 258, 227]]]) {
        const b = box(button2("\u67E5\u770B" + NAMES2[id], () => open("person", id), null, "xh-bond-person"), r);
        b.replaceChildren(gallery.photo("bonds", [967 + r[0], 93 + r[1], r[2], r[3]], "bonds-matte", gallery.selected("portrait", id), "xh-portrait", true, [], null, id));
        pair.append(b);
      }
      for (const [id, x] of [["xingxing", 0], ["xiaogai", 740]]) {
        pair.append(box(art2("bonds-name-paper", [1340, 260, 24, 24], [], "xh-id-paper"), [x, 157, 116, 48]));
        fixed(pair, "span", id === "xingxing" ? "naiv31y" : "gatsby", [x, 160, 116, 45], "xh-character-id " + id);
      }
      right.append(pair);
      const facts2 = box(node3("section", void 0, "xh-relationship-paper"), [10, 241, 395, 174]);
      facts2.append(art2("bonds", [977, 329, 395, 174], [[1049, 415, 275, 36]], "xh-component-art"), sr("h2", "\u5DF2\u7ECF\u660E\u786E\u7684\u5173\u7CFB"));
      const fs = box(node3("div", void 0, "xh-paper-facts"), [40, 74, 315, 85]);
      fs.setAttribute("aria-label", "\u5DF2\u7ECF\u660E\u786E\u7684\u5173\u7CFB");
      paperRecords(fs, s.\u5173\u7CFB?.\u660E\u786E\u4E8B\u5B9E, "\u5173\u7CFB\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002", "\u5C1A\u672A\u8BB0\u4E0B\u660E\u786E\u7684\u5173\u7CFB\u3002");
      facts2.append(fs);
      right.append(facts2);
      const promises = box(node3("section", void 0, "xh-promise-paper"), [407, 218, 441, 202]);
      promises.append(art2("bonds", [1374, 306, 441, 202], [[1550, 402, 226, 72]], "xh-component-art"), sr("h2", "\u4E24\u4EBA\u7684\u7EA6\u5B9A"));
      const ps = box(node3("div", void 0, "xh-paper-facts"), [174, 97, 231, 78]);
      ps.setAttribute("aria-label", "\u4E24\u4EBA\u7684\u7EA6\u5B9A");
      paperRecords(ps, s.\u65C5\u7A0B?.\u7EA6\u5B9A, "\u7EA6\u5B9A\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002", "\u76EE\u524D\u6CA1\u6709\u5DF2\u8BB0\u5F55\u7684\u7EA6\u5B9A\u3002");
      promises.append(ps);
      right.append(promises);
      const memories = box(node3("section", void 0, "xh-memory-section"), [0, 422, 850, 307]);
      memories.append(originalWindow("bonds", [967, 510, 850, 307], [[975, 570, 837, 247], [1648, 517, 163, 46]], "xh-component-art", assets, [], false), sr("h2", "\u5171\u540C\u8D70\u8FC7\u7684\u65F6\u523B"));
      nativeButton(memories, "\u67E5\u770B\u8BB0\u5F55\u6765\u6E90", () => open("memories"), [675, 7, 166, 44], "book", "xh-memory-source-button");
      const cards = box(node3("div", void 0, "xh-memory-cards"), [8, 63, 835, 242]), recent = gallery.latest();
      if (!recent.length) empty(cards, "\u5C1A\u65E0\u5DF2\u89E3\u9501\u7684\u5267\u60C5\u63D2\u753B\u3002\u5171\u540C\u7ECF\u5386\u4ECD\u53EF\u4ECE\u8BB0\u5F55\u6765\u6E90\u67E5\u770B\u3002");
      recent.forEach((id, i) => {
        const entry = gallery.entry(id), card = node3("details", void 0, "xh-memory-card"), sum = node3("summary"), r = [[975, 574, 254, 239], [1234, 570, 280, 244], [1524, 575, 285, 239]][i], holes = [[[989, 710, 176, 37], [991, 749, 170, 56]], [[1269, 723, 203, 31], [1269, 748, 192, 61]], [[1550, 724, 192, 33], [1552, 754, 183, 58]]][i];
        const image = gallery.photo("bonds", r, "bonds-matte", id, "xh-memory-art", true, holes);
        sum.append(image, node3("strong", entry.title), node3("span", "\u5DF2\u89E3\u9501 \xB7 \u53EF\u5728\u5927\u56FE\u753B\u518C\u4E2D\u9009\u62E9", "xh-memory-preview"));
        card.style.setProperty("--xh-memory-ratio", r[2] + "/" + r[3]);
        card.dataset.artId = id;
        card.append(sum, node3("p", entry.title, "xh-muted"), button2("\u5C06" + entry.title + "\u8BBE\u4E3A\u7F81\u7ECA\u5927\u56FE", () => gallery.choose("scene", null, id), null));
        cards.append(card);
      });
      memories.append(cards);
      right.append(memories);
      p.append(right);
      content.append(p);
    }
    function notebook(s) {
      const p = page("xh-notebook");
      p.dataset.mobileNotebook = mobileNotebook;
      if (c.mobilePreview) p.append(mobileSwitch("\u624B\u8BB0\u5206\u533A", [["records", "\u65C5\u9014\u624B\u8BB0"], ["scraps", "\u968F\u884C\u672D\u8BB0"]], mobileNotebook, (id) => mobileNotebook = id));
      const notes = box(node3("section", void 0, "xh-notes"), [0, 88, 1230, 751]);
      notes.append(art2("notebook", [0, 88, 1230, 751], [[226, 300, 310, 40], [207, 356, 342, 31], [182, 405, 369, 27], [182, 435, 369, 38], [170, 545, 238, 69], [443, 545, 242, 70], [178, 500, 151, 38], [440, 500, 148, 38], [388, 639, 150, 158], [789, 630, 230, 152]], "xh-component-art"), sr("h2", "Traveler\u2019s Journal"));
      notes.append(art2("notebook", [112, 104, 448, 95], [], "xh-mobile-heading"));
      const locationImage = gallery.location(s.\u573A\u666F.\u5730\u70B9), postcard = box(gallery.photo("notebook", [537, 155, 690, 466], "notebook-matte", locationImage, "xh-location-postcard", s.\u573A\u666F.\u5730\u70B9 === "LOC-SER-001", [[537, 545, 148, 70]]), [537, 67, 690, 466]);
      postcard.dataset.location = s.\u573A\u666F.\u5730\u70B9;
      if (!locationImage && s.\u573A\u666F.\u5730\u70B9 !== "LOC-SER-001") {
        const missing = node3("span", "\u5F53\u524D\u5730\u70B9\u63D2\u753B\u5F85\u8865", "xh-picture-missing");
        postcard.prepend(missing);
      }
      notes.append(postcard);
      for (const x of [168, 440]) notes.append(box(art2("notebook-fill", [245, 482, 64, 13], [], "xh-note-caption-paper"), [x, 412, 163, 40]));
      const filters = box(node3("div", void 0, "xh-bookmarks"), [123, 128, 550, 51]);
      filters.setAttribute("aria-label", "\u624B\u8BB0\u5206\u7C7B");
      ["\u59D4\u6258", "\u7EBF\u7D22", "\u5B66\u4E60", "\u89C1\u95FB"].forEach((label, i) => {
        const selected = view.noteFilter === label, b = button2(label, () => {
          view.noteFilter = label;
          view.notePage = 0;
          render3();
        }, null);
        b.dataset.noteKind = label;
        b.setAttribute("aria-pressed", String(selected));
        b.replaceChildren(selected ? originalWindow("notebook-fill", [551, 215, 122, 51], [[561, 222, 33, 29]], "xh-bookmark-paint", assets, [], false) : art2("notebook-fill", [166, 217, 53, 43], [], "xh-bookmark-paint"), icon3(["bag", "target", "book", "star"][i]), node3("span", label));
        filters.append(b);
      });
      notes.append(filters);
      notes.append(art2("notebook", [675, 215, 489, 327], [], "xh-mobile-postcard"));
      const records2 = box(node3("div", void 0, "xh-journal-records"), [128, 191, 532, 317]);
      records2.tabIndex = -1;
      records2.setAttribute("aria-label", "\u624B\u8BB0\u8BB0\u5F55\u6B63\u6587");
      records2.dataset.kind = view.noteFilter;
      const kinds = { \u59D4\u6258: [], \u7EBF\u7D22: [], \u5B66\u4E60: [], \u89C1\u95FB: [] };
      const entry = (kind, key, title, loc, body, source, extra = {}) => kinds[kind].push({ key, title: copy2(title), loc: copy2(loc), body: copy2(body), source: copy2(source, "\u6765\u6E90\u5C1A\u672A\u8BB0\u5F55\u3002"), ...extra });
      for (const [id, v] of recordRows(s.\u65C5\u7A0B?.\u59D4\u6258)) entry("\u59D4\u6258", id, v?.\u540D\u79F0, "\u59D4\u6258\u72B6\u6001 \xB7 " + copy2(v?.\u72B6\u6001, "\u5C1A\u672A\u8BB0\u5F55"), [...taskDetails(s, v), v?.\u672A\u6536\u62A5\u916C != null ? "\u5F85\u6536\u62A5\u916C\uFF1A" + coins2(v.\u672A\u6536\u62A5\u916C) : "\u62A5\u916C\u5C1A\u672A\u8BB0\u5F55\u3002"].join("\n"), v?.\u4F9D\u636E, { status: copy2(v?.\u72B6\u6001, "\u72B6\u6001\u5F85\u8865") });
      for (const [id, v] of recordRows(s.\u65C5\u7A0B?.\u5DF2\u77E5\u7EBF\u7D22)) entry("\u7EBF\u7D22", id, "\u6CBF\u9014\u7EBF\u7D22", placeName(v?.\u5730\u70B9, s), v?.\u5185\u5BB9, v?.\u4F9D\u636E);
      const learningUnknown = ["xingxing", "xiaogai"].some((id) => s.\u4EBA\u7269?.[id]?.\u5B66\u4E60\u4E2D == null);
      for (const character of ["xingxing", "xiaogai"]) for (const [id, v] of recordRows(s.\u4EBA\u7269?.[character]?.\u5B66\u4E60\u4E2D)) entry("\u5B66\u4E60", character + ":" + id, v?.\u540D\u79F0, NAMES2[character] + " \xB7 \u5B66\u4E60\u4E2D\u7684\u80FD\u529B", v?.\u6700\u8FD1\u6210\u679C, v?.\u6765\u6E90, { character });
      const memories = facts(s);
      for (const v of journalFacts(s)) entry("\u89C1\u95FB", v.key, v.title, v.loc, v.body, v.source);
      function chunks(value, columns, rows3) {
        const out = [];
        let part = "", line = 1, col = 0;
        const flush = () => {
          out.push(part);
          part = "";
          line = 1;
          col = 0;
        };
        for (const ch of Array.from(value)) {
          if (ch !== "\n" && col === columns) {
            if (line === rows3) flush();
            else {
              line++;
              col = 0;
            }
          }
          part += ch;
          if (ch === "\n") {
            if (line === rows3) flush();
            else {
              line++;
              col = 0;
            }
          } else col++;
        }
        if (part || !out.length) out.push(part);
        return out;
      }
      const pagesByKind = Object.fromEntries(Object.entries(kinds).map(([kind, entries2]) => [kind, entries2.flatMap((v, record) => {
        const t = chunks(v.title, 11, 2), l = chunks(v.loc, 16, 2), b = chunks(v.body, 17, 2), f = chunks(v.source, 10, 2), count = Math.max(t.length, l.length, b.length, f.length);
        return Array.from({ length: count }, (_, i) => ({ ...v, title: t[i] ?? (i ? "\u7EED\u9875" : ""), loc: l[i] ?? "", body: b[i] ?? "", source: f[i] ?? "", record, continuation: i > 0 }));
      })]));
      const sheets = pagesByKind[view.noteFilter] ?? [];
      view.notePage = Math.max(0, Math.min(view.notePage, sheets.length - 1));
      const current = sheets[view.notePage];
      if (!current) empty(records2, view.noteFilter === "\u59D4\u6258" && s.\u65C5\u7A0B?.\u59D4\u6258 == null ? "\u59D4\u6258\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002" : view.noteFilter === "\u5B66\u4E60" && learningUnknown ? "\u5B66\u4E60\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002" : { \u59D4\u6258: "\u5C1A\u672A\u63A5\u53D6\u59D4\u6258\u3002", \u7EBF\u7D22: "\u5C1A\u65E0\u5DF2\u8BB0\u4E0B\u7684\u7EBF\u7D22\u3002", \u5B66\u4E60: "\u6682\u65E0\u8FDB\u884C\u4E2D\u7684\u5B66\u4E60\u3002", \u89C1\u95FB: "\u8FD8\u6CA1\u6709\u8BB0\u4E0B\u91CD\u8981\u7ECF\u5386\u3002" }[view.noteFilter]);
      else {
        const e = node3("article", void 0, "xh-note-entry"), heading = node3("h3", current.title);
        e.dataset.recordId = current.key;
        heading.classList.toggle("xh-long-title", Array.from(current.title).length > 10);
        e.append(heading);
        const loc = node3("p", current.loc, "xh-note-location");
        e.append(loc, node3("p", current.body, "xh-note-body"));
        const cols = node3("div", void 0, "xh-note-columns"), record = node3("div"), from = node3("div", void 0, "xh-note-source"), recordLabel = node3("h4"), sourceLabel = node3("h4");
        recordLabel.append(icon3(view.noteFilter === "\u89C1\u95FB" ? "eye" : "book"), node3("span", view.noteFilter === "\u89C1\u95FB" ? "\u7ECF\u5386\u8BB0\u5F55" : view.noteFilter === "\u5B66\u4E60" ? "\u5B66\u4E60\u8BB0\u5F55" : view.noteFilter === "\u59D4\u6258" ? "\u59D4\u6258\u8BB0\u5F55" : "\u7EBF\u7D22\u8BB0\u5F55"));
        sourceLabel.append(icon3("book"), node3("span", "\u67E5\u770B\u6765\u6E90"));
        record.append(recordLabel, node3("p", { \u89C1\u95FB: "\u6CBF\u9014\u6240\u89C1\uFF0C\u8BB0\u5728\u6B64\u9875\u3002", \u5B66\u4E60: "\u5B66\u4E60\u6210\u679C\u4EE5\u6B63\u6587\u8BB0\u5F55\u4E3A\u51C6\u3002", \u59D4\u6258: "\u72B6\u6001\u4E0E\u62A5\u916C\u4EE5\u8BB0\u5F55\u4E3A\u51C6\u3002", \u7EBF\u7D22: "\u4F20\u95FB\u4E0E\u4EB2\u773C\u6240\u89C1\u5206\u522B\u8BB0\u5F55\u3002" }[view.noteFilter], "xh-note-observation"));
        from.append(sourceLabel, node3("p", current.source));
        cols.append(record, from);
        e.append(cols);
        records2.append(e);
      }
      notes.append(records2);
      const pager = box(node3("nav", void 0, "xh-note-pagination"), [232, 511, 370, 27]);
      pager.setAttribute("aria-label", "\u624B\u8BB0\u7FFB\u9875");
      const previous = button2("\u4E0A\u4E00\u9875\u624B\u8BB0", () => {
        view.notePage--;
        render3();
      }, "arrow"), next = button2("\u4E0B\u4E00\u9875\u624B\u8BB0", () => {
        view.notePage++;
        render3();
      }, "arrow");
      previous.disabled = view.notePage === 0;
      next.disabled = !sheets.length || view.notePage >= sheets.length - 1;
      pager.append(previous, node3("span", (sheets.length ? view.notePage + 1 : 0) + " / " + sheets.length), next);
      notes.append(pager);
      const memo = box(node3("div", void 0, "xh-journal-memo"), [148, 536, 405, 202]);
      memo.append(art2("notebook", [148, 624, 405, 202], [[388, 639, 150, 158]], "xh-component-art"), box(gallery.photo("notebook", [148, 624, 240, 202], "notebook-matte", gallery.selected("portrait", "xingxing"), "xh-memo-photo", true, [], null, "xingxing"), [0, 0, 240, 202]));
      const memoCopy = fixed(memo, "p", copy2(memories.at(-1)?.\u5185\u5BB9, "\u5C1A\u65E0\u5171\u540C\u7ECF\u5386\u8BB0\u5F55\u3002"), [247, 20, 142, 152], "xh-memo-copy");
      memoCopy.tabIndex = 0;
      notes.append(memo);
      notes.append(box(art2("notebook", [586, 636, 193, 185], [], "xh-plant-illustration"), [586, 548, 193, 185]));
      const plants = recordRows(s.\u7269\u54C1).filter(([, v]) => typeof v?.\u540D\u79F0 === "string" && /花草|草药|药草|花束|花瓣|树叶|枝叶|树脂|种子|植物|标本/.test(v.\u540D\u79F0));
      const plantCopy = fixed(notes, "p", "\u8349\u6728\u6536\u96C6\n" + (s.\u7269\u54C1 == null ? "\u884C\u56CA\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002" : plants.length ? plants.map(([, v]) => v.\u540D\u79F0 + " \xD7 " + (v.\u6570\u91CF ?? "\u6570\u91CF\u5F85\u8865") + " " + copy2(v.\u5355\u4F4D, "")).join("\n") : "\u884C\u56CA\u4E2D\u6682\u65E0\u8349\u6728\u91C7\u96C6\u7269\u3002"), [801, 543, 211, 149], "xh-specimen-copy");
      plantCopy.tabIndex = 0;
      p.append(notes);
      const side = box(node3("div", void 0, "xh-notebook-side"), [1243, 89, 576, 734]);
      const specs = [["\u65C5\u9014\u59D4\u6258", "\u59D4\u6258", [1243, 89, 576, 250], [[1321, 207, 370, 22], [1321, 231, 370, 29], [1406, 283, 123, 30], [1593, 287, 100, 24]]], ["\u9B54\u529B\u4E0E\u5B66\u4E60", "\u5B66\u4E60", [1243, 349, 576, 251], [[1384, 455, 171, 37], [1394, 501, 255, 20], [1394, 526, 255, 24], [1447, 564, 118, 25], [1650, 561, 132, 30]]], ["\u6CBF\u9014\u7EBF\u7D22", "\u7EBF\u7D22", [1243, 610, 576, 213], [[1295, 692, 282, 24], [1295, 714, 282, 30]]]];
      for (const [i, [title, filter, r, holes]] of specs.entries()) {
        const card = box(node3("section", void 0, "xh-journal-card xh-journal-card-" + (i + 1)), [0, r[1] - 89, 576, r[3]]);
        card.append(art2("notebook", r, holes, "xh-component-art"));
        const paper = box(node3("div", void 0, "xh-journal-card-paper"), [0, 0, 576, r[3]]);
        const values = kinds[filter], chosen = (view.noteFilter === filter && current ? values.find((v) => v.key === current.key) : null) ?? values.at(-1);
        card.dataset.recordId = chosen?.key ?? "";
        if (i === 1) {
          const heading = fixed(paper, "h2", chosen?.title ?? title, [141, 106, 171, 34]);
          heading.tabIndex = 0;
          heading.title = chosen?.title ?? title;
        } else paper.append(sr("h2", title));
        const body = chosen ? i === 0 ? chosen.title : chosen.body : i === 0 ? s.\u65C5\u7A0B?.\u59D4\u6258 == null ? "\u59D4\u6258\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002" : "\u5C1A\u672A\u63A5\u53D6\u59D4\u6258\u3002" : i === 1 ? learningUnknown ? "\u5B66\u4E60\u8BB0\u5F55\u5C1A\u5F85\u8865\u5145\u3002" : "\u6682\u65E0\u8FDB\u884C\u4E2D\u7684\u5B66\u4E60\u3002" : "\u5C1A\u65E0\u5DF2\u8BB0\u4E0B\u7684\u7EBF\u7D22\u3002";
        const cardCopy = fixed(paper, "p", body, i === 0 ? [79, 115, 370, 60] : i === 1 ? [151, 152, 255, 50] : [52, 74, 282, 54]);
        cardCopy.tabIndex = 0;
        cardCopy.title = body;
        const showRecords = () => {
          view.noteFilter = filter;
          view.notePage = Math.max(0, pagesByKind[filter].findIndex((v) => v.key === chosen?.key));
          render3();
          const target = content.querySelector(".xh-journal-records");
          if (target) {
            target.scrollTop = 0;
            target.scrollIntoView({ block: "nearest" });
            target.focus({ preventScroll: true });
          }
        };
        const btn = box(button2("\u67E5\u770B" + filter + "\u8BB0\u5F55", showRecords, null, i === 1 ? "xh-study-button" : i === 2 ? "xh-clue-record-button" : ""), i === 0 ? [335, 187, 179, 43] : i === 1 ? [155, 206, 183, 39] : [32, 138, 261, 43]);
        btn.querySelector("span").textContent = i === 0 ? "\u67E5\u770B\u8BB0\u5F55" : i === 1 ? values.length ? "\u5B66\u4E60\u4E2D" : "\u67E5\u770B\u5B66\u4E60" : "\u4F20\u95FB\u4E0E\u89C1\u95FB\u5206\u522B\u8BB0\u5F55";
        if (i > 0) btn.prepend(icon3(i === 1 ? "book" : "compass"));
        paper.append(btn);
        if (i === 0) {
          const status = chosen?.status ?? (s.\u65C5\u7A0B?.\u59D4\u6258 == null ? "\u8BB0\u5F55\u5F85\u8865" : "\u6682\u65E0\u59D4\u6258"), statusButton = nativeButton(paper, "\u67E5\u770B\u59D4\u6258\u72B6\u6001\u5168\u6587\uFF1A" + status, showRecords, [167, 186, 136, 45], null, "xh-guild-status");
          statusButton.querySelector("span").textContent = status;
          statusButton.title = status;
        }
        if (i === 1) fixed(paper, "span", chosen ? NAMES2[chosen.character] + " \xB7 \u5B66\u4E60\u4E2D" : learningUnknown ? "\u5B66\u4E60\u8D44\u6599\u5F85\u8865" : "\u6682\u65E0\u5B66\u4E60\u8BB0\u5F55", [407, 212, 132, 30], "xh-study-guide");
        card.append(paper);
        side.append(card);
      }
      p.append(side);
      const tools = node3("div", void 0, "xh-notebook-tools");
      tools.append(button2("\u6B64\u523B\u7684\u65C5\u7A0B", () => open("transit"), "compass"));
      p.append(tools);
      content.append(p);
    }
    let resizeMap = () => {
    };
    function mapPage(s) {
      const p = page("xh-map-page"), shell = box(node3("div", void 0, "xh-map-shell"), [15, 90, 1810, 734]), viewport = node3("div", void 0, "xh-map-viewport");
      viewport.tabIndex = 0;
      viewport.setAttribute("aria-label", "\u5927\u9646\u5730\u56FE\uFF0C\u53EF\u7528\u65B9\u5411\u952E\u5E73\u79FB\uFF0C\u4F7F\u7528\u52A0\u51CF\u6309\u94AE\u7F29\u653E");
      const plane = node3("div", void 0, "xh-map-plane");
      appendMapSurface(plane, assets, ["xh-map-terrain-fill", "xh-map-original"]);
      const visited = new Set(Object.keys(s.\u65C5\u7A0B.\u5230\u8BBF ?? {}).map((id) => placeRecord(s, id)?.region));
      for (const [id, [x, y]] of Object.entries(MAP_POS)) {
        const b = button2(regionName(id), () => {
          view.map.region = id;
          render3();
        }, null, "xh-map-marker");
        const r = MAP_LABELS[id];
        b.replaceChildren(icon3(MAP_THEMES[id].icon), sr("span", regionName(id)));
        b.style.setProperty("--label-w", r[2] + "px");
        b.style.setProperty("--label-h", r[3] + "px");
        b.style.left = x + "%";
        b.style.top = y + "%";
        b.dataset.region = id;
        b.dataset.current = String(id === s.\u573A\u666F.\u5730\u533A);
        b.dataset.visited = String(visited.has(id));
        b.setAttribute("aria-pressed", String(id === (view.map.region ?? s.\u573A\u666F.\u5730\u533A)));
        b.setAttribute("aria-label", "\u67E5\u770B\u5730\u533A\uFF1A" + regionName(id));
        if (id === s.\u573A\u666F.\u5730\u533A) {
          const pin = node3("span", void 0, "xh-map-current-art xh-map-current-vector");
          pin.append(icon3("pin"));
          b.prepend(pin);
        }
        ;
        plane.append(b);
      }
      viewport.append(plane);
      shell.append(viewport);
      const heading = box(node3("div", void 0, "xh-map-heading"), [20, 21, 419, 131]);
      heading.append(box(foregroundWindow("map", [35, 111, 419, 79], "map-chrome", "xh-fixed-map-title", assets, [], [28, 109, 508, 113]), [0, 0, 419, 79]), sr("h2", "\u57C3\u5C14\u745F\u4E9A \xB7 \u65C5\u9014\u5730\u56FE"));
      const legend = box(node3("div", void 0, "xh-map-status-legend"), [0, 83, 276, 43]);
      for (const [label, type] of [["\u5F53\u524D\u6240\u5728", "pin"], ["\u5DF2\u5230\u8BBF", "star"]]) {
        const mark = node3("span");
        mark.append(icon3(type), node3("span", label));
        legend.append(mark);
      }
      heading.append(legend);
      shell.append(heading);
      const north = box(node3("span", void 0, "xh-map-north"), [1711, 14, 91, 107]);
      north.setAttribute("aria-hidden", "true");
      const compass = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      compass.setAttribute("viewBox", "0 0 91 107");
      compass.setAttribute("fill", "none");
      const compassPart = (tag, attributes) => {
        const part = document.createElementNS("http://www.w3.org/2000/svg", tag);
        for (const [key, value] of Object.entries(attributes)) part.setAttribute(key, value);
        compass.append(part);
        return part;
      };
      compassPart("text", { x: "45.5", y: "18", "text-anchor": "middle", fill: "#254978", "font-size": "17", "font-weight": "600" }).textContent = "\u5317";
      compassPart("circle", { cx: "45.5", cy: "63", r: "32", stroke: "#b39062", "stroke-width": "1.3" });
      compassPart("circle", { cx: "45.5", cy: "63", r: "29.5", stroke: "#d2b48c", "stroke-width": ".5" });
      compassPart("path", { d: "M45.5 25V101M7.5 63H83.5M22 39.5L69 86.5M22 86.5L69 39.5", stroke: "#ac8050", "stroke-width": ".8" });
      compassPart("path", { d: "M45.5 47L69 39.5L61.5 63L69 86.5L45.5 79L22 86.5L29.5 63L22 39.5Z", stroke: "#906033", "stroke-width": "1", fill: "#d9bb8a", "fill-opacity": ".45" });
      compassPart("path", { d: "M45.5 28L54 54.5L80.5 63L54 71.5L45.5 98L37 71.5L10.5 63L37 54.5Z", stroke: "#80552e", "stroke-width": "1.1", fill: "#f4e8d5", "fill-opacity": ".65" });
      compassPart("path", { d: "M45.5 28V63L54 54.5ZM80.5 63H45.5L54 71.5ZM45.5 98V63L37 71.5ZM10.5 63H45.5L37 54.5Z", fill: "#926337" });
      compassPart("circle", { cx: "45.5", cy: "63", r: "3.2", stroke: "#80552e", fill: "#ead1a7", "stroke-width": "1" });
      north.append(compass);
      shell.append(north);
      const tools = box(node3("div", void 0, "xh-map-controls"), [1743, 124, 51, 193]);
      let zoomLabel;
      function transform() {
        if (!viewport.isConnected) return;
        view.map.zoom = Math.max(fitZoom(), view.map.zoom);
        const maxX = Math.max(0, (plane.clientWidth * view.map.zoom - viewport.clientWidth) / 2), maxY = Math.max(0, (plane.clientHeight * view.map.zoom - viewport.clientHeight) / 2);
        view.map.x = Math.max(-maxX, Math.min(maxX, view.map.x));
        view.map.y = Math.max(-maxY, Math.min(maxY, view.map.y));
        plane.style.transform = `translate(${view.map.x}px,${view.map.y}px) scale(${view.map.zoom})`;
        if (zoomLabel) zoomLabel.textContent = Math.round(view.map.zoom * 100) + "%";
      }
      resizeMap = transform;
      function fitZoom() {
        return Math.max(viewport.clientWidth / plane.clientWidth, viewport.clientHeight / plane.clientHeight);
      }
      function zoom(next) {
        const old = view.map.zoom;
        view.map.zoom = Math.max(fitZoom(), Math.min(3, next));
        view.map.x *= view.map.zoom / old;
        view.map.y *= view.map.zoom / old;
        transform();
      }
      function center() {
        view.map.zoom = 1.6;
        const v = MAP_POS[s.\u573A\u666F.\u5730\u533A];
        view.map.x = (0.5 - v[0] / 100) * plane.clientWidth * view.map.zoom;
        view.map.y = (0.5 - v[1] / 100) * plane.clientHeight * view.map.zoom;
        transform();
      }
      const toolWindows = [[1758, 214, 48, 43], [1758, 257, 48, 43], [1758, 306, 48, 47], [1758, 359, 48, 48]];
      for (const [i, [label, run]] of [["\u653E\u5927\u5730\u56FE", () => zoom(view.map.zoom + 0.2)], ["\u7F29\u5C0F\u5730\u56FE", () => zoom(view.map.zoom - 0.2)], ["\u56DE\u5230\u5F53\u524D\u4F4D\u7F6E", center], ["\u67E5\u770B\u5168\u56FE", () => {
        view.map.zoom = fitZoom();
        view.map.x = view.map.y = 0;
        transform();
      }]].entries()) {
        const b = button2(label, run, null);
        b.replaceChildren(art2("map", toolWindows[i], [], "xh-control-art"), sr("span", label));
        tools.append(b);
      }
      shell.append(tools);
      const rid = WORLD.regions[view.map.region] ? view.map.region : s.\u573A\u666F.\u5730\u533A, regionArt = REGION_ART[rid];
      const card = box(node3("section", void 0, "xh-map-details"), [1375, 542, 420, 166]);
      card.dataset.region = rid;
      card.append(art2("map-card-fill", [1390, 632, 420, 166], [], "xh-component-art"));
      const thumbnail = box(node3("div", void 0, "xh-map-region-thumbnail"), [14, 14, 174, 135]), image = node3("img");
      image.alt = regionName(rid) + "\u666F\u89C2\u793A\u610F\u56FE";
      image.src = assets["original-" + regionArt.asset] ?? "assets/original/" + regionArt.file;
      image.draggable = false;
      image.decoding = "async";
      image.dataset.region = rid;
      image.addEventListener("error", () => {
        image.hidden = true;
        thumbnail.append(node3("span", "\u5730\u533A\u63D2\u753B\u672A\u80FD\u52A0\u8F7D"));
        assets.__onArtError?.();
      }, { once: true });
      thumbnail.append(image);
      card.append(thumbnail, originalWindow("map-card", [1390, 632, 420, 166], [[1404, 646, 174, 135], [1590, 649, 191, 31], [1590, 685, 191, 44], [1616, 747, 174, 28]], "xh-component-art", assets, [], false));
      const copy3 = box(node3("div", void 0, "xh-map-card-copy"), [203, 11, 193, 145]);
      copy3.append(node3("h3", regionName(rid)), node3("p", regionArt.summary, "xh-region-summary"), node3("p", rid === s.\u573A\u666F.\u5730\u533A ? "\u5F53\u524D\u6240\u5728\u5927\u5730\u533A" : visited.has(rid) ? "\u5DF2\u5230\u8BBF\u7684\u5927\u5730\u533A" : "\u5730\u56FE\u53EF\u77E5 \xB7 \u5C1A\u672A\u5230\u8BBF", "xh-region-visited"));
      copy3.append(button2("\u67E5\u770B\u5730\u533A\u4E0E\u5730\u70B9", () => open("map-directory", rid), null));
      card.append(copy3);
      shell.append(card);
      zoomLabel = sr("span", Math.round(view.map.zoom * 100) + "%");
      shell.append(zoomLabel);
      p.append(shell);
      content.append(p);
      if (c.isMobileMap?.() && !view.map.initialized) {
        center();
        view.map.initialized = true;
      } else transform();
      const pointers = /* @__PURE__ */ new Map();
      let gesture = null;
      viewport.addEventListener("pointerdown", (e) => {
        if (e.target.closest("button,select,details")) return;
        viewport.setPointerCapture?.(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        gesture = null;
      });
      viewport.addEventListener("pointermove", (e) => {
        if (!pointers.has(e.pointerId)) return;
        const prev = pointers.get(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pointers.size === 1) {
          const scale = c.getScale();
          view.map.x += (e.clientX - prev.x) / scale;
          view.map.y += (e.clientY - prev.y) / scale;
          transform();
        } else {
          const [a, b] = [...pointers.values()], distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (gesture) zoom(view.map.zoom * distance / gesture);
          gesture = distance;
        }
      });
      const end = (e) => {
        pointers.delete(e.pointerId);
        gesture = null;
      };
      viewport.addEventListener("pointerup", end);
      viewport.addEventListener("pointercancel", end);
      viewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        zoom(view.map.zoom + (e.deltaY < 0 ? 0.1 : -0.1));
      }, { passive: false });
      viewport.addEventListener("keydown", (e) => {
        if (e.target !== viewport || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "+", "-"].includes(e.key)) return;
        e.preventDefault();
        if (e.key === "+") zoom(view.map.zoom + 0.2);
        else if (e.key === "-") zoom(view.map.zoom - 0.2);
        else {
          view.map.x += e.key === "ArrowLeft" ? 35 : e.key === "ArrowRight" ? -35 : 0;
          view.map.y += e.key === "ArrowUp" ? 35 : e.key === "ArrowDown" ? -35 : 0;
          transform();
        }
      });
    }
    const desktopNotebook = createDesktopNotebook({ ...c, mobileSwitch });
    const desktopBonds = createDesktopBonds(c);
    const mobile = createMobileReferencePages({ ...c, face, itemArtwork, mobilePortrait, mobileJourneyPortrait });
    const mobileMap = createMobileMapHome(c);
    const phone = () => c.mobilePreview === true && c.isMobile?.() === true;
    return { journey: (s) => phone() ? mobile.journey(s) : journey(s), inventory: (s) => phone() ? mobile.inventory(s) : inventory(s), bonds: (s) => phone() ? mobile.bonds(s) : bonds(s), notebook: (s) => phone() ? mobile.notebook(s) : c.isMobile?.() === false ? desktopNotebook.render(s) : notebook(s), mapPage: (s) => phone() ? mobileMap.mapPage(s) : mapPage(s), face, itemArtwork, mobileJourneyPortrait, mobileTransit: mobile.transit, mobileMemorySources: mobile.memorySources, openMobileItem: (id) => {
      if (c.mobilePreview) mobile.openItem(id);
      else mobileInventory = "gear";
    }, resetMobile() {
      mobile.reset();
      mobileMap.reset();
    }, resizeMap: () => phone() ? mobileMap.resize() : resizeMap() };
  }

  // src/ui/matte-assets.mjs
  var MATTE_ASSETS = {};

  // src/ui/profile-reference.mjs
  var PROFILE_REFERENCE = {
    xingxing: {
      art: "profile-approved-xingxing",
      width: 1836,
      height: 856,
      tabEdges: [57, 246, 430, 614, 795, 959],
      back: [62, 96, 132, 43],
      bio: [64, 143, 473, 650],
      bioHoles: [[241, 532, 263, 40], [243, 583, 263, 38], [245, 633, 263, 40]],
      faceHole: ["M301 333h0.01", 200],
      gear: [1243, 143, 520, 538],
      gearHoles: [[1276, 231, 456, 197], [1276, 452, 456, 216]],
      catalogue: [571, 143, 644, 414],
      catalogueHoles: [[975, 159, 222, 31], [758, 218, 436, 35], [588, 256, 610, 239], [590, 510, 605, 38]],
      icons: { x: [592, 694, 795, 896, 997, 1098], y: [259, 382], w: 94, h: 91, labelY: [351, 475], labelH: 24 },
      learningArt: "profile-learning-target",
      learningSize: [575, 226],
      learningBox: [591, 565, 614, 241],
      learningPicture: [0, 43, 258, 177],
      learningName: [263, 49, 280, 33],
      learningResult: [263, 86, 280, 25],
      learningHoles: [[0, 44, 256, 175], [262, 48, 282, 66], [266, 115, 266, 86]],
      medals: [[269, 115, 59, 64], [361, 111, 70, 73], [468, 116, 59, 64]],
      connectors: [[327, 139, 35, 16], [430, 139, 38, 16]],
      labelsY: 181
    },
    xiaogai: {
      art: "profile-approved-xiaogai",
      width: 1836,
      height: 857,
      tabEdges: [66, 255, 436, 617, 800, 960],
      back: [82, 85, 139, 43],
      bio: [1290, 120, 490, 679],
      bioHoles: [[1473, 599, 276, 41], [1441, 646, 308, 42], [1473, 695, 276, 42]],
      faceHole: ["M1530 353h0.01", 260],
      gear: [99, 127, 474, 608],
      gearHoles: [[118, 208, 435, 236], [118, 483, 435, 248]],
      catalogue: [624, 130, 634, 434],
      catalogueHoles: [[1041, 197, 211, 31], [638, 236, 607, 38], [630, 275, 619, 234], [637, 516, 610, 40]],
      icons: { x: [633, 737, 841, 946, 1050, 1157], y: [280, 399], w: 90, h: 87, labelY: [368, 488], labelH: 24 },
      learningArt: "profile-approved-xiaogai",
      learningSize: [634, 228],
      learningBox: [625, 573, 634, 228],
      learningSource: [625, 573, 634, 228],
      learningPicture: [631, 618, 310, 94],
      learningName: [671, 716, 263, 32],
      learningResult: [674, 752, 277, 27],
      learningHoles: [[631, 617, 310, 94], [671, 713, 280, 69], [947, 637, 295, 111]],
      medals: [[949, 642, 69, 71], [1044, 638, 78, 82], [1158, 642, 69, 71]],
      connectors: [[1018, 671, 26, 18], [1123, 671, 35, 18]],
      labelsY: 719
    }
  };

  // src/ui/profile-pages.mjs
  function createProfilePages(c) {
    const { node: node3, button: button2, icon: icon3, content, assets, NAMES: NAMES2 } = c;
    const fresh = () => ({ category: "\u5168\u90E8", page: 0, selected: null, learning: null, gearPage: 0, mobilePanel: "skills" });
    const views = { xingxing: fresh(), xiaogai: fresh() };
    const box = (el, r) => position(el, r);
    const label = (tag, value, cls = "") => node3(tag, value ?? "\u5F85\u8865\u8D44\u6599", cls);
    const plain2 = (v, fallback = "\u5F85\u8865\u8D44\u6599") => typeof v === "string" || typeof v === "number" ? String(v) : fallback;
    const entries2 = (v) => v && typeof v === "object" && !Array.isArray(v) ? Object.entries(v) : [];
    const mobile = () => c.isMobileProfile?.() === true || c.mobilePreview === true && c.isMobile?.() === true;
    const metadata = (character, id, record) => skillDetails(character, id, record, c.getSkillDetails());
    function change(run, focusKey) {
      run();
      c.render();
      const controls = [...content.querySelectorAll("[data-profile-focus]")];
      const pair = { "skill-next": "skill-prev", "skill-prev": "skill-next", "learning-next": "learning-prev", "learning-prev": "learning-next", "gear-next": "gear-prev", "gear-prev": "gear-next" };
      (controls.find((e) => e.dataset.profileFocus === focusKey && !e.disabled) ?? controls.find((e) => e.dataset.profileFocus === pair[focusKey] && !e.disabled) ?? controls.find((e) => e.dataset.skillId && e.getAttribute("aria-pressed") === "true") ?? controls.find((e) => !e.disabled))?.focus();
    }
    function control(text2, run, cls = "", focusKey, ico) {
      const b = button2(text2, run, ico, cls);
      if (focusKey) b.dataset.profileFocus = focusKey;
      return b;
    }
    function missingArt(cls) {
      const el = node3("span", void 0, "xh-skill-art xh-skill-art-missing " + cls);
      el.append(icon3("book"));
      return el;
    }
    function localArt(key, rect, decoration = false) {
      const el = originalWindow(key, rect, [], decoration ? "xh-learning-vector-icon" : "xh-skill-art", assets);
      el.children[0]?.addEventListener("error", () => {
        el.replaceChildren(icon3("book"));
        el.classList.add("xh-skill-art-missing");
        el.dataset.imageMissing = "true";
      }, { once: true });
      return el;
    }
    function referenceFrame(parent, character, part, extraHoles = []) {
      const r = PROFILE_REFERENCE[character], bounds = r[part], saved = r[part + "Holes"] ?? [], holes = [...part === "catalogue" && c.snapshot().skillDemo === true ? saved.slice(1) : saved, ...extraHoles];
      const art2 = originalWindow(r.art, bounds, holes, "xh-profile-reference-frame", assets, part === "bio" ? [r.faceHole] : [], false);
      parent.prepend(art2);
      return art2;
    }
    function artwork(character, id, record, details, kind = "icon") {
      const src = skillImage(character, id, record, c.getSkillImages(), details);
      if (src) {
        const el = node3("span", void 0, "xh-skill-art"), img = node3("img");
        img.src = src;
        img.alt = "";
        img.draggable = false;
        img.decoding = "async";
        img.addEventListener("error", () => {
          el.replaceChildren(icon3("book"));
          el.classList.add("xh-skill-art-missing");
          el.dataset.imageMissing = "true";
          assets.__onArtError?.();
        }, { once: true });
        el.append(img);
        return el;
      }
      if (c.snapshot().skillDemo === true && kind === "icon" && Number.isInteger(details.demoIcon) && details.demoIcon >= 0 && details.demoIcon < 12) {
        const r = PROFILE_REFERENCE[character], grid = r.icons, index = details.demoIcon;
        return localArt(r.art, [grid.x[index % 6], grid.y[Math.floor(index / 6)], grid.w, grid.h]);
      }
      if (c.snapshot().skillDemo === true && kind === "learning" && ["control", "wind"].includes(details.demoStudy)) {
        const r = PROFILE_REFERENCE[character];
        return localArt(r.learningArt, r.learningPicture);
      }
      if (kind === "learning") {
        const key = { "\u9B54\u529B\u63A7\u5236\u57FA\u7840": "profile-study-control", "\u98CE\u606F\u5F15\u5BFC": "profile-study-wind" }[record?.\u540D\u79F0];
        if (key) return localArt(key, [0, 0, ...ORIGINALS[key].slice(1)]);
      }
      return missingArt("");
    }
    function bio(state, character) {
      const r = PROFILE_REFERENCE[character], p = state.\u4EBA\u7269[character], el = box(node3("section", void 0, "xh-profile-bio"), r.bio);
      const heading = node3("h2", void 0, "xh-profile-name xh-reference-label");
      heading.append(label("span", NAMES2[character]), label("em", character === "xingxing" ? "naiv31y" : "gatsby"));
      el.append(heading, c.face(character, "xh-profile-portrait"));
      const choose = control("\u9009\u62E9" + NAMES2[character] + "\u5934\u50CF", () => c.open("artbook", character), "xh-profile-avatar-select", "avatar", "book"), chooseRect = character === "xingxing" ? [200, 429, 201, 43] : [1430, 488, 203, 45];
      choose.replaceChildren(originalWindow(r.art, chooseRect, [], "xh-profile-control-art", assets), label("span", "\u9009\u62E9" + NAMES2[character] + "\u5934\u50CF", "xh-sr-only"));
      el.append(choose, label("h3", "\u5F53\u524D\u72B6\u51B5", "xh-profile-status-heading xh-reference-label"));
      const statuses = node3("div", void 0, "xh-profile-status");
      for (const [key, value, ico] of [["\u75B2\u52B3", p.\u75B2\u52B3, "runner"], ["\u9B54\u529B", null, "star"], ["\u4F24\u52BF", null, "heart"]]) {
        const row = node3("div", void 0, "xh-profile-stat");
        row.append(icon3(ico), label("strong", key));
        if (key === "\u9B54\u529B") {
          row.append(label("span", manaDescription(p.\u9B54\u529B) ?? "\u5F85\u8BB0\u5F55", "xh-profile-mana-value"));
        } else if (key === "\u4F24\u52BF") {
          const injuries = p.\u4F24\u52BF, copy2 = injuries == null ? "\u4F24\u52BF\u8D44\u6599\u5F85\u8865" : entries2(injuries).map(([, v]) => plain2(v?.\u90E8\u4F4D) + "\uFF1A" + plain2(v?.\u5F71\u54CD)).join("\uFF1B") || "\u6682\u65E0\u4F24\u52BF\u3002";
          const full = node3("details", void 0, "xh-profile-injuries");
          full.append(label("summary", copy2), label("p", copy2 + "\n\n" + conditionText(state, character)));
          row.append(full);
        } else row.append(label("span", value));
        statuses.append(row);
      }
      el.append(statuses);
      referenceFrame(el, character, "bio");
      return el;
    }
    function mobileMaterial(character, wide = false) {
      const r = PROFILE_REFERENCE[character], key = c.isMobileProfile?.() ? "mapdir-paper" : "profile-paper-" + character, el = node3("span", void 0, "xh-profile-mobile-material");
      el.style.display = "none";
      el.setAttribute("aria-hidden", "true");
      el.append(originalWindow(key, wide ? [650, 230, 500, 160] : [650, 205, 500, 350], [], "xh-profile-mobile-texture", assets));
      el.append(paperFrame(assets, "xh-profile-phone-frame", character === "xiaogai"));
      return el;
    }
    function mobileHeader(state, character) {
      const p = state.\u4EBA\u7269[character], el = node3("section", void 0, "xh-profile-compact-header");
      el.style.display = "none";
      const portrait = control("\u9009\u62E9" + NAMES2[character] + "\u5934\u50CF", () => c.open("artbook", character), "xh-profile-compact-portrait", "mobile-avatar");
      portrait.replaceChildren(c.face(character, "xh-profile-compact-face"), label("span", "\u66F4\u6362\u5934\u50CF", "xh-profile-compact-avatar-label"));
      const copy2 = node3("div", void 0, "xh-profile-compact-copy"), name = node3("h2", NAMES2[character]);
      name.append(label("em", character === "xingxing" ? "naiv31y" : "gatsby"));
      const fatigue = node3("p", void 0, "xh-profile-compact-fatigue");
      fatigue.append(icon3("runner"), label("strong", "\u75B2\u52B3"), label("span", plain2(p.\u75B2\u52B3)));
      copy2.append(name, fatigue);
      const mana = node3("div", void 0, "xh-profile-compact-mana");
      mana.append(icon3("star"), label("strong", "\u9B54\u529B"), label("span", manaDescription(p.\u9B54\u529B) ?? "\u5F85\u8BB0\u5F55", "xh-profile-mana-value"));
      copy2.append(mana);
      const injuries = p.\u4F24\u52BF, records2 = entries2(injuries), injuryCopy = injuries == null ? "\u4F24\u52BF\u8D44\u6599\u5F85\u8865" : records2.map(([, v]) => plain2(v?.\u90E8\u4F4D) + "\uFF1A" + plain2(v?.\u5F71\u54CD)).join("\uFF1B") || "\u6682\u65E0\u4F24\u52BF\u3002";
      const status = node3("details", void 0, "xh-profile-compact-status"), summary = node3("summary");
      summary.setAttribute("aria-label", "\u67E5\u770B" + NAMES2[character] + "\u5B8C\u6574\u72B6\u51B5");
      summary.append(icon3("heart"), label("strong", "\u4F24\u52BF"), label("span", injuries == null ? "\u8D44\u6599\u5F85\u8865" : records2.length ? records2.length + " \u5904\u4F24\u52BF" : "\u6682\u65E0\u4F24\u52BF\u3002"));
      copy2.append(status);
      status.append(summary, label("p", "\u75B2\u52B3\uFF1A" + plain2(p.\u75B2\u52B3) + "\n\u9B54\u529B\uFF1A" + (manaDescription(p.\u9B54\u529B) ?? "\u5F85\u8BB0\u5F55") + "\n\u4F24\u52BF\uFF1A" + injuryCopy + "\n\n" + conditionText(state, character)));
      el.append(mobileMaterial(character, true), portrait, copy2);
      return el;
    }
    function mobilePanels(v) {
      const nav = node3("nav", void 0, "xh-profile-mobile-panels xh-mobile-switch");
      nav.style.display = "none";
      nav.setAttribute("aria-label", "\u4EBA\u7269\u8BE6\u60C5\u5185\u5BB9");
      if (c.isMobileProfile?.()) nav.classList.add("xh-mobile-icon-switch");
      for (const [index, [id, name, ico]] of [["skills", "\u5DF2\u5B66\u80FD\u529B", "book"], ["learning", "\u6B63\u5728\u5B66\u4E60", "feather"], ["gear", "\u7A7F\u6234\u88C5\u5907", "bag"]].entries()) {
        const b = control(name, () => change(() => v.mobilePanel = id, "mobile-panel:" + id), "", "mobile-panel:" + id, ico);
        b.dataset.profilePanel = id;
        b.setAttribute("aria-pressed", String(v.mobilePanel === id));
        if (c.isMobileProfile?.()) {
          b.querySelector("span").classList.add("xh-mobile-switch-label");
          b.prepend(originalWindow("phone-layer-journey-record-tabs", [110 + Math.min(index, 1) * 384, 727, 384, 88], [], "xh-mobile-switch-plate", assets));
        }
        nav.append(b);
      }
      return nav;
    }
    function gear(state, character, v) {
      const r = PROFILE_REFERENCE[character], el = box(node3("section", void 0, "xh-profile-gear"), r.gear);
      el.append(label("h2", "\u7A7F\u6234\u88C5\u5907", "xh-reference-label"));
      const all = equipmentEntries(state, character), count = Math.max(1, Math.ceil(all.length / 2));
      v.gearPage = Math.max(0, Math.min(count - 1, v.gearPage));
      const list = node3("div", void 0, "xh-profile-gear-list");
      for (const [slot, id] of all.slice(v.gearPage * 2, v.gearPage * 2 + 2)) {
        const item = state.\u7269\u54C1?.[id], name = plain2(item?.\u540D\u79F0, slot === "\u624B\u6301" ? "\u672A\u7A7F\u6234\u6B66\u5668" : "\u672A\u7A7F\u6234\u5916\u8863\u6216\u62A4\u5177"), b = control(equipmentDisplayName(name), () => c.openItem(id), "xh-profile-equipment", "equipment:" + id);
        b.replaceChildren();
        b.disabled = !item;
        if (item) b.append(c.itemArtwork(name, "", id));
        b.dataset.profileEquipment = id ?? "";
        const copy2 = node3("span", void 0, "xh-profile-equipment-copy");
        copy2.append(label("span", equipmentDisplayName(name), "xh-profile-equipment-name"));
        if (item) copy2.append(label("span", equipmentInfo(item, id, slot).lines[1], "xh-profile-equipment-description"));
        if (mobile()) b.append(mobileMaterial(character, true));
        b.append(copy2);
        list.append(b);
      }
      if (!all.length) list.append(label("p", state.\u4EBA\u7269[character].\u88C5\u5907 == null ? "\u7A7F\u6234\u8D44\u6599\u5F85\u8865\u3002" : "\u5C1A\u672A\u8BB0\u5F55\u7A7F\u6234\u88C5\u5907\u3002", "xh-profile-empty"));
      el.append(list);
      referenceFrame(el, character, "gear");
      if (mobile()) el.prepend(mobileMaterial(character));
      if (count > 1) {
        const pager = node3("nav", void 0, "xh-profile-gear-pagination");
        const prev = control("\u4E0A\u4E00\u9875\u88C5\u5907", () => change(() => v.gearPage--, "gear-prev"), "", "gear-prev", "arrow"), next = control("\u4E0B\u4E00\u9875\u88C5\u5907", () => change(() => v.gearPage++, "gear-next"), "", "gear-next", "arrow");
        prev.disabled = v.gearPage === 0;
        next.disabled = v.gearPage === count - 1;
        pager.append(prev, label("span", v.gearPage + 1 + " / " + count), next);
        el.append(pager);
      }
      return el;
    }
    function catalogue(state, character, v) {
      const r = PROFILE_REFERENCE[character], el = box(node3("section", void 0, "xh-profile-skills"), r.catalogue);
      const heading = node3("div", void 0, "xh-profile-skills-heading");
      heading.append(label("h2", "\u80FD\u529B\u4E0E\u5B66\u4E60", "xh-reference-label"));
      if (c.snapshot().skillDemo === true) heading.append(label("span", "\u80FD\u529B\u6F14\u793A \xB7 \u975E\u6B63\u5F0F\u8BBE\u5B9A", "xh-profile-demo xh-reference-label"));
      el.append(heading);
      const records2 = state.\u4EBA\u7269[character].\u5DF2\u5B66\u80FD\u529B, all = entries2(records2).map(([id, record]) => ({ id, record, details: metadata(character, id, record) }));
      const cats = ["\u5168\u90E8", .../* @__PURE__ */ new Set([...SKILL_CATEGORIES, ...all.map((s) => skillCategory(s.details))])];
      if (!cats.includes(v.category)) v.category = "\u5168\u90E8";
      const bar = node3("div", void 0, "xh-profile-learned-heading");
      bar.append(label("h3", "\u5DF2\u5B66\u80FD\u529B", "xh-reference-label"));
      const filters = node3("nav", void 0, "xh-skill-filters");
      filters.setAttribute("aria-label", "\u5DF2\u5B66\u80FD\u529B\u5206\u7C7B");
      for (const cat of cats) {
        const b = control(cat, () => change(() => {
          v.category = cat;
          v.page = 0;
          v.selected = null;
        }, "category:" + cat), "", "category:" + cat);
        b.dataset.skillCategory = cat;
        b.setAttribute("aria-pressed", String(v.category === cat));
        filters.append(b);
      }
      bar.append(filters);
      el.append(bar);
      const pageSize = mobile() ? 6 : 12;
      const filtered = all.filter((s) => v.category === "\u5168\u90E8" || skillCategory(s.details) === v.category), count = Math.max(1, Math.ceil(filtered.length / pageSize));
      v.page = Math.max(0, Math.min(count - 1, v.page));
      const current = filtered.slice(v.page * pageSize, v.page * pageSize + pageSize);
      if (!current.some((s) => s.id === v.selected)) v.selected = (character === "xiaogai" && c.snapshot().skillDemo === true && v.category === "\u5168\u90E8" && v.page === 0 ? current.find((s) => s.id === "demo_8") : null)?.id ?? current[0]?.id ?? null;
      const grid = node3("div", void 0, "xh-skill-grid");
      grid.setAttribute("role", "group");
      grid.setAttribute("aria-label", NAMES2[character] + "\u7684\u5DF2\u5B66\u80FD\u529B");
      current.forEach((s, i) => {
        const name = plain2(s.record?.\u540D\u79F0), b = control("\u67E5\u770B\u80FD\u529B\uFF1A" + name, () => change(() => v.selected = s.id, "skill:" + s.id), "xh-skill-button", "skill:" + s.id), g = r.icons;
        b.replaceChildren(artwork(character, s.id, s.record, s.details), label("span", name, "xh-skill-name"));
        Object.assign(b.style, { left: g.x[i % 6] - r.catalogue[0] + "px", top: g.y[Math.floor(i / 6)] - r.catalogue[1] + "px", width: g.w + "px", height: g.h + g.labelH + 3 + "px" });
        b.style.setProperty("--reference-icon-height", g.h + "px");
        b.dataset.skillId = s.id;
        b.setAttribute("aria-pressed", String(v.selected === s.id));
        b.title = name;
        grid.append(b);
      });
      if (!current.length) grid.append(label("p", records2 == null ? "\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u80FD\u529B\u8BB0\u5F55\u3002" : all.length ? "\u6B64\u5206\u7C7B\u6682\u65E0\u5DF2\u5B66\u80FD\u529B\u3002" : "\u5C1A\u672A\u8BB0\u5F55\u5DF2\u5B66\u80FD\u529B\u3002", "xh-profile-empty"));
      el.append(grid);
      const selected = current.find((s) => s.id === v.selected), foot = node3("div", void 0, "xh-skill-footer");
      if (selected) {
        const d = node3("details", void 0, "xh-skill-description"), summary = plain2(selected.record.\u540D\u79F0) + " \xB7 " + skillCategory(selected.details) + "\uFF5C" + plain2(selected.record.\u7528\u9014, "\u7528\u9014\u5F85\u8865"), s = label("summary", summary);
        if (mobile()) {
          s.replaceChildren(label("strong", plain2(selected.record.\u540D\u79F0) + " \xB7 " + skillCategory(selected.details)), label("span", plain2(selected.record.\u7528\u9014, "\u7528\u9014\u5F85\u8865"), "xh-skill-use"), label("span", "\u67E5\u770B\u6765\u6E90", "xh-skill-source-label"));
        }
        d.append(s, label("p", summary + "\n\u6765\u6E90\uFF1A" + plain2(selected.record.\u6765\u6E90)));
        d.title = summary;
        foot.append(d);
      } else foot.append(label("span", records2 == null ? "\u5DF2\u5B66\u603B\u6570\u672A\u77E5" : "\u5171 " + filtered.length + " \u9879"));
      const nav = node3("nav", void 0, "xh-skill-pagination");
      nav.setAttribute("aria-label", "\u5DF2\u5B66\u80FD\u529B\u5206\u9875");
      const prev = control("\u4E0A\u4E00\u9875\u80FD\u529B", () => change(() => {
        v.page--;
        v.selected = null;
      }, "skill-prev"), "", "skill-prev", "arrow"), next = control("\u4E0B\u4E00\u9875\u80FD\u529B", () => change(() => {
        v.page++;
        v.selected = null;
      }, "skill-next"), "", "skill-next", "arrow");
      prev.disabled = v.page === 0;
      next.disabled = v.page === count - 1;
      if (selected) nav.append(label("span", "\u5171 " + filtered.length + " \u9879"));
      nav.append(prev, label("strong", v.page + 1 + " / " + count), next);
      foot.append(nav);
      el.append(foot);
      referenceFrame(el, character, "catalogue");
      if (mobile()) el.prepend(mobileMaterial(character));
      return el;
    }
    function learning(state, character, v) {
      const r = PROFILE_REFERENCE[character], sourceBox = r.learningSource ?? [0, 0, ...r.learningSize], el = box(node3("section", void 0, "xh-profile-learning"), r.learningBox);
      if (mobile()) el.append(mobileMaterial(character));
      const canvas = node3("div", void 0, "xh-learning-canvas");
      Object.assign(canvas.style, { width: r.learningSize[0] + "px", height: r.learningSize[1] + "px", transform: "scale(" + r.learningBox[2] / r.learningSize[0] + ")" });
      const local = ([x, y, w, h]) => [x - sourceBox[0], y - sourceBox[1], w, h];
      const place = (e, rect) => {
        const [x, y, w, h] = local(rect);
        Object.assign(e.style, { position: "absolute", left: x + "px", top: y + "px", width: w + "px", height: h + "px" });
        return e;
      };
      canvas.append(originalWindow("profile-paper-" + character, [650, 200, r.learningSize[0], r.learningSize[1]], [], "xh-learning-paper", assets), originalWindow(r.learningArt, sourceBox, r.learningHoles, "xh-profile-reference-frame", assets, [], false));
      const title = node3("div", void 0, "xh-profile-learning-heading");
      title.append(label("h3", "\u6B63\u5728\u5B66\u4E60", "xh-reference-label"));
      const records2 = state.\u4EBA\u7269[character].\u5B66\u4E60\u4E2D, all = entries2(records2);
      if (!all.some(([id2]) => id2 === v.learning)) v.learning = all[0]?.[0] ?? null;
      const index = all.findIndex(([id2]) => id2 === v.learning);
      if (all.length > 1) {
        const nav = node3("nav", void 0, "xh-learning-pagination");
        const prev = control("\u4E0A\u4E00\u9879\u5B66\u4E60", () => change(() => v.learning = all[index - 1][0], "learning-prev"), "", "learning-prev", "arrow"), next = control("\u4E0B\u4E00\u9879\u5B66\u4E60", () => change(() => v.learning = all[index + 1][0], "learning-next"), "", "learning-next", "arrow");
        prev.disabled = index <= 0;
        next.disabled = index === all.length - 1;
        nav.append(prev, label("span", index + 1 + " / " + all.length), next);
        title.append(nav);
      }
      el.append(title);
      const body = node3("div", void 0, "xh-learning-body");
      if (index < 0) {
        body.append(place(missingArt(""), r.learningPicture), place(label("p", records2 == null ? "\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u5B66\u4E60\u8BB0\u5F55\u3002" : "\u76EE\u524D\u6CA1\u6709\u8FDB\u884C\u4E2D\u7684\u5B66\u4E60\u8BB0\u5F55\u3002", "xh-profile-empty"), r.learningName.map((a, i) => i === 3 ? 100 : a)));
        canvas.append(body);
        el.append(canvas);
        return el;
      }
      const [id, record] = all[index], details = metadata(character, id, record), copy2 = node3("div", void 0, "xh-learning-copy");
      body.dataset.learningId = id;
      body.append(place(artwork(character, id, record, details, "learning"), r.learningPicture));
      copy2.append(place(label("h4", record.\u540D\u79F0), r.learningName));
      const result = place(label("p", record.\u6700\u8FD1\u6210\u679C, "xh-learning-result"), r.learningResult);
      result.title = plain2(record.\u6700\u8FD1\u6210\u679C) + "\n\u6765\u6E90\uFF1A" + plain2(record.\u6765\u6E90);
      copy2.append(result);
      const model = learningStages(details);
      if (model) {
        const stages = node3("ol", void 0, "xh-learning-stages");
        stages.style.setProperty("--stage-count", model.stages.length);
        if (model.stages.length === 3) {
          stages.classList.add("xh-learning-reference-stages");
          for (const rect of r.connectors) copy2.append(place(localArt(r.learningArt, rect, true), rect));
        }
        model.stages.forEach((name, i) => {
          const step = node3("li"), role = i === model.active ? 1 : model.active >= 0 && i < model.active ? 0 : 2;
          step.dataset.stage = ["complete", "active", "unknown"][role];
          if (i === model.active) step.setAttribute("aria-current", "step");
          if (model.stages.length === 3) {
            const rect = r.medals[i], medal = localArt(r.learningArt, r.medals[role], true);
            medal.classList.add("xh-learning-medal");
            place(medal, [rect[0] + (rect[2] - r.medals[role][2]) / 2, rect[1] + (rect[3] - r.medals[role][3]) / 2, r.medals[role][2], r.medals[role][3]]);
            step.append(medal, place(label("span", name, "xh-learning-stage-name"), [rect[0] - 10, r.labelsY, rect[2] + 20, 28]));
            if (role === 1) {
              const aura = place(node3("i", void 0, "xh-learning-aura xh-learning-stage-aura"), rect);
              aura.setAttribute("aria-hidden", "true");
              step.append(aura);
            }
          } else {
            const medal = node3("span", void 0, "xh-learning-medal");
            medal.append(icon3(role === 0 ? "check" : role === 1 ? "star" : "book"));
            step.append(medal, label("span", name));
          }
          stages.append(step);
        });
        copy2.append(stages);
        if (model.active < 0) copy2.append(label("small", "\u5F53\u524D\u9636\u6BB5\u5F85\u8865", "xh-learning-unknown"));
      } else copy2.append(label("p", "\u5B66\u4E60\u9636\u6BB5\u5F85\u8865\uFF0C\u4EE5\u4E0B\u65B9\u8BB0\u5F55\u4E3A\u51C6\u3002", "xh-learning-unknown"));
      if (c.snapshot().skillDemo === true && details.demoStudy) {
        const rect = character === "xingxing" ? [111, 61, 72, 90] : [730, 630, 116, 70], aura = place(node3("i", void 0, "xh-learning-aura xh-learning-picture-aura"), rect);
        aura.setAttribute("aria-hidden", "true");
        body.append(aura);
      }
      const source = node3("details", void 0, "xh-learning-source");
      source.append(label("summary", "\u67E5\u770B\u5B66\u4E60\u8BB0\u5F55"), label("p", plain2(record.\u6700\u8FD1\u6210\u679C) + "\n\u6765\u6E90\uFF1A" + plain2(record.\u6765\u6E90)));
      body.append(copy2);
      canvas.append(body);
      el.append(canvas, source);
      return el;
    }
    function render3(state, character) {
      if (!views[character] || !state.\u4EBA\u7269?.[character]) throw Error("\u4EBA\u7269\u8BB0\u5F55\u4E0D\u5B58\u5728");
      const v = views[character], page = node3("div", void 0, "xh-page xh-profile-page " + character);
      const r = PROFILE_REFERENCE[character], key = "profile-paper-" + character, entry = ORIGINALS[key], stage = node3("div", void 0, "xh-profile-stage");
      Object.assign(stage.style, { width: r.width + "px", height: r.height + "px", transform: "scale(" + 1840 / r.width + ")" });
      stage.append(originalWindow(key, [0, 0, entry[1], entry[2]], [], "xh-profile-paper", assets), originalWindow(r.art, [0, 0, r.width, r.height], [r.back, r.bio, r.gear, r.catalogue, r.learningBox], "xh-profile-paper xh-profile-outer-frame", assets, [], false));
      const back = box(control("\u8FD4\u56DE", c.back, "xh-profile-back", "back", "arrow"), r.back);
      back.replaceChildren(originalWindow(r.art, r.back, [], "xh-profile-control-art", assets), label("span", "\u8FD4\u56DE", "xh-sr-only"));
      stage.append(back);
      if (c.mobilePreview === true || c.isMobileProfile?.()) {
        page.dataset.mobileProfilePanel = v.mobilePanel;
        stage.append(mobileHeader(state, character), mobilePanels(v));
      }
      stage.append(bio(state, character), gear(state, character, v), catalogue(state, character, v), learning(state, character, v));
      page.append(stage);
      content.append(page);
    }
    return { render: render3, reset() {
      views.xingxing = fresh();
      views.xiaogai = fresh();
    } };
  }

  // src/ui/profile-motion.mjs
  function startProfileMotion({ gsap: gsap2, scope, document: doc = globalThis.document, window: win = globalThis.window }) {
    const targets = [...scope.querySelectorAll(".xh-learning-aura")];
    if (!targets.length) return () => {
    };
    const media = gsap2.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      let visible = true;
      const pulse = gsap2.fromTo(targets, { opacity: 0, scale: 1 }, { opacity: 0.18, scale: 1.035, duration: 3.6, ease: "sine.inOut", repeat: -1, yoyo: true, stagger: 0.55, paused: doc.hidden });
      const sync = () => pulse.paused(doc.hidden || !visible);
      doc.addEventListener("visibilitychange", sync);
      const observer = win?.IntersectionObserver ? new win.IntersectionObserver((entries2) => {
        visible = entries2.some((e) => e.isIntersecting);
        sync();
      }) : null;
      const section = scope.querySelector(".xh-profile-learning");
      if (section) observer?.observe(section);
      return () => {
        doc.removeEventListener("visibilitychange", sync);
        observer?.disconnect();
        pulse.kill();
        gsap2.set(targets, { clearProps: "opacity,transform" });
      };
    }, scope);
    return () => media.revert();
  }

  // build/ui-place-details.mjs
  var PLACE_DETAILS = {
    "LOC-VIR-001": {
      "name": "\u8FBE\u4F26\u798F\u5FB7",
      "region": "REG-01",
      "position": "\u672C\u5730\u533A\u5F00\u5C40\u843D\u811A\u70B9",
      "description": "\u4F4F\u5BBF\u3001\u5546\u54C1\u4EA4\u6613\u3001\u4FEE\u7406\u3001\u77ED\u7A0B\u8239\u8FD0\u4E0E\u9053\u8DEF\u8F6C\u63A5"
    },
    "LOC-VIR-002": {
      "name": "\u7EF4\u65AF\u7279\u65C5\u5E97",
      "region": "REG-01",
      "position": "\u9547\u5185\uFF0C\u9760\u8FD1\u6CB3\u5E02\u4F46\u4E0E\u5378\u8D27\u5761\u9053\u9694\u7740\u4E00\u6761\u8857",
      "description": "\u9910\u98DF\u3001\u8863\u7269\u70D8\u5E72\u3001\u4F4F\u5BBF\u4E0E\u5BC4\u5B58"
    },
    "LOC-VIR-003": {
      "name": "\u8FBE\u4F26\u798F\u5FB7\u6CB3\u5E02\u4E0E\u7801\u5934",
      "region": "REG-01",
      "position": "\u9547\u5185\uFF0C\u4F4D\u4E8E\u6CB3\u5CB8\u8F83\u5BBD\u7F13\u5904",
      "description": "\u5546\u54C1\u4EA4\u6613\u3001\u5BA2\u8239\u3001\u8DEF\u51B5\u95EE\u8BAF\u4E0E\u884C\u88C5\u4FEE\u8865"
    },
    "LOC-VIR-004": {
      "name": "\u683C\u4F26\u4FEE\u5177\u94FA",
      "region": "REG-01",
      "position": "\u9547\u5185\uFF0C\u9760\u8FD1\u4E0A\u5CB8\u8D27\u7269\u7ECF\u8FC7\u7684\u8857\u9053",
      "description": "\u6263\u4EF6\u3001\u80CC\u5E26\u3001\u63D0\u706F\u4E0E\u666E\u901A\u519C\u5177\u4FEE\u7406\uFF0C\u63D0\u4F9B\u7EF4\u62A4\u8BF4\u660E"
    },
    "LOC-VIR-005": {
      "name": "\u79D1\u5C14\u6587\u77F3\u6865",
      "region": "REG-01",
      "position": "\u4E0A\u6E38\u7EA6 32 \u516C\u91CC\uFF0C\u6CBF\u5317\u5411\u9053\u8DEF\u62B5\u8FBE",
      "description": "\u5CE1\u8C37\u3001\u6865\u5E02\u4E0E\u6C34\u6D41\uFF1B\u65E7\u62D6\u8239\u9053\u6709\u6D2A\u6C34\u635F\u574F\u548C\u9B54\u7269\u6D3B\u52A8"
    },
    "LOC-VIR-006": {
      "name": "\u963F\u65AF\u7279\u5C14\u65E7\u95F8\u4E0E\u6C34\u5ECA",
      "region": "REG-01",
      "position": "\u4E0B\u6E38\u7EA6 12 \u516C\u91CC\uFF0C\u4F4D\u4E8E\u652F\u6E20\u5206\u6D41\u5904",
      "description": "\u53E4\u4EE3\u6C34\u5DE5\u9057\u8FF9\u3001\u60AC\u7A7A\u6C34\u6D41\u53CA\u704C\u6E89\u7EF4\u62A4\u8BBE\u65BD"
    },
    "LOC-VIR-007": {
      "name": "\u6885\u91CC\u5B89\u6751",
      "region": "REG-01",
      "position": "\u9547\u4E1C\u7EA6 18 \u516C\u91CC\uFF0C\u7ECF\u519C\u8DEF\u62B5\u8FBE",
      "description": "\u78E8\u574A\u3001\u5171\u540C\u70D8\u70E4\u3001\u7530\u95F4\u6C34\u6E20\u3001\u77ED\u4F4F\u4E0E\u63A2\u8BBF"
    },
    "LOC-VIR-008": {
      "name": "\u96F7\u6587\u7EB3",
      "region": "REG-01",
      "position": "\u4E0B\u6E38\u7EA6 70 \u516C\u91CC\uFF0C\u987A\u6CB3\u6216\u8D70\u6CB3\u5CB8\u5E72\u9053",
      "description": "\u6CB3\u6E2F\u3001\u516C\u5171\u5824\u5CB8\u3001\u5927\u5E02\u573A\u4E0E\u4E13\u4E1A\u670D\u52A1"
    },
    "LOC-VIR-009": {
      "name": "\u8FBE\u4F26\u798F\u5FB7\u5192\u9669\u5BB6\u534F\u4F1A",
      "region": "REG-01",
      "position": "\u9547\u5185\uFF0C\u53EF\u5411\u5F53\u5730\u4EBA\u95EE\u8DEF\u62B5\u8FBE",
      "description": "\u6709\u507F\u59D4\u6258\u516C\u793A\u3001\u6761\u4EF6\u54A8\u8BE2\u3001\u81EA\u613F\u63A5\u53D6\u4E0E\u4EA4\u63A5"
    },
    "LOC-SER-001": {
      "name": "\u8D1D\u5C14\u8499\u7279",
      "region": "REG-02",
      "position": "REG-02 \u7684\u4EE3\u8868\u843D\u811A\u96C6\u9547",
      "description": "\u96C6\u5E02\u3001\u4F4F\u5BBF\u3001\u8865\u7ED9\u4E0E\u5357\u5317\u9053\u8DEF\u8F6C\u63A5"
    },
    "LOC-SER-002": {
      "name": "\u8D1D\u5C14\u8499\u7279\u5192\u9669\u5BB6\u534F\u4F1A",
      "region": "REG-02",
      "position": "\u9547\u5185\uFF0C\u9760\u8FD1\u8F66\u9A6C\u505C\u9760\u5904",
      "description": "\u6709\u507F\u59D4\u6258\u3001\u5E84\u56ED\u9053\u8DEF\u95EE\u8BAF\u4E0E\u627F\u63A5\u6761\u4EF6\u54A8\u8BE2"
    },
    "LOC-SER-003": {
      "name": "\u83F2\u4F26\u5E84\u56ED",
      "region": "REG-02",
      "position": "\u9547\u897F\u5357\u7EA6 7 \u516C\u91CC",
      "description": "\u8461\u8404\u56ED\u3001\u679C\u996E\u4E0E\u9152\u7A96\u53C2\u89C2\u3001\u5B63\u8282\u52B3\u4F5C\u548C\u805A\u9910"
    },
    "LOC-SER-004": {
      "name": "\u5965\u96F7\u65AF\u82B1\u6D77",
      "region": "REG-02",
      "position": "\u897F\u4FA7\u5165\u53E3\u8DDD\u9547\u4E1C\u7EA6 11 \u516C\u91CC\uFF1B\u8986\u76D6\u5965\u96F7\u65AF\u5761\u5730\u53CA\u76F8\u8FDE\u7684\u6D45\u8C37",
      "description": "\u5EF6\u7EF5\u6570\u9053\u4E18\u9675\u7684\u82B1\u6D77\uFF0C\u508D\u665A\u6709\u82B1\u6F6E\uFF1B\u5F00\u653E\u533A\u57DF\u53EF\u6563\u6B65\u3001\u91CE\u9910"
    },
    "LOC-SER-005": {
      "name": "\u7F57\u745F\u6069\u5821",
      "region": "REG-02",
      "position": "\u9547\u5317\u7EA6 24 \u516C\u91CC\uFF0C\u4E3B\u8DEF\u4E4B\u5916\u7684\u652F\u7EBF",
      "description": "\u5C71\u5761\u57CE\u5821\u3001\u98CE\u8F66\u9057\u5740\u548C\u8F83\u65E7\u7684\u5730\u7A96\uFF0C\u5206\u5F00\u653E\u53C2\u89C2\u4E0E\u9700\u51C6\u5907\u7684\u533A\u57DF"
    },
    "LOC-SER-006": {
      "name": "\u7EF4\u6069\u5BA2\u820D",
      "region": "REG-02",
      "position": "\u8D1D\u5C14\u8499\u7279\u9547\u5185",
      "description": "\u4F4F\u5BBF\u3001\u5EAD\u9662\u9910\u996E\u4E0E\u5730\u65B9\u9053\u8DEF\u8D44\u6599\u501F\u9605"
    },
    "LOC-ALV-001": {
      "name": "\u963F\u5C14\u7EF4\u514B\u81EA\u7531\u5E02",
      "region": "REG-03",
      "position": "REG-03 \u7684\u4E3B\u8981\u57CE\u5E02",
      "description": "\u5927\u5E02\u573A\u3001\u8857\u533A\u751F\u6D3B\u3001\u591A\u79CD\u4F4F\u5BBF\u4E0E\u57CE\u9645\u8865\u7ED9"
    },
    "LOC-ALV-002": {
      "name": "\u963F\u5C14\u7EF4\u514B\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "region": "REG-03",
      "position": "\u9760\u8FD1\u6865\u5934\u8F6C\u8FD0\u533A",
      "description": "\u59D4\u6258\u516C\u793A\u3001\u6761\u4EF6\u54A8\u8BE2\u3001\u672C\u5730\u53CA\u7EA6\u5B9A\u8DE8\u5730\u4EA4\u63A5"
    },
    "LOC-ALV-003": {
      "name": "\u591A\u4F26\u8857",
      "region": "REG-03",
      "position": "\u57CE\u5185\u8FDE\u901A\u4F5C\u574A\u4E0E\u5E02\u573A\u7684\u8857\u9053",
      "description": "\u98DF\u94FA\u3001\u8BD1\u5199\u3001\u4FEE\u8865\u4E0E\u5546\u54C1\u4EA4\u6613"
    },
    "LOC-ALV-004": {
      "name": "\u963F\u4F26\u8428\u6D74\u573A",
      "region": "REG-03",
      "position": "\u8F83\u9AD8\u8857\u533A\uFF0C\u4F9D\u9760\u84C4\u6C34\u548C\u7EF4\u62A4\u8BBE\u65BD\u4F9B\u6C34",
      "description": "\u6C90\u6D74\u3001\u6D17\u8863\u4E0E\u4F11\u606F\uFF1B\u8BBE\u516C\u5171\u7A7A\u95F4\u548C\u72EC\u7ACB\u5C0F\u95F4\uFF0C\u6309\u5404\u81EA\u4F7F\u7528\u89C4\u5219\u5F00\u653E"
    },
    "LOC-ALV-005": {
      "name": "\u7EF4\u7279\u62C9\u6865\u7FA4",
      "region": "REG-03",
      "position": "\u8DE8\u8FC7\u6CB3\u9762\u548C\u4E0D\u540C\u9AD8\u5EA6\u8857\u533A\u7684\u591A\u5C42\u6865\u8DEF",
      "description": "\u591A\u5C42\u901A\u884C\u6865\u8DEF\u3001\u8239\u8FD0\u89C2\u666F\u5904\u4E0E\u6865\u5934\u98DF\u644A"
    },
    "LOC-ALV-006": {
      "name": "\u6D1B\u6885\u65AF\u65E7\u8857",
      "region": "REG-03",
      "position": "\u90E8\u5206\u65E7\u5730\u9762\u4F4E\u4E8E\u540E\u5EFA\u9053\u8DEF\uFF0C\u5165\u53E3\u6563\u5E03\u5728\u6865\u4E0B\u4E0E\u65E7\u4ED3\u5E93\u9644\u8FD1",
      "description": "\u4ECD\u6709\u4EBA\u4F7F\u7528\u7684\u8857\u5DF7\u3001\u65E7\u5E97\u9762\uFF0C\u4EE5\u53CA\u9700\u4E86\u89E3\u8DEF\u51B5\u7684\u5E9F\u5F03\u5C94\u8DEF"
    },
    "LOC-CAD-001": {
      "name": "\u8D1D\u8428\u5C14\u6E2F",
      "region": "REG-04",
      "position": "REG-04 \u7684\u4E3B\u8981\u843D\u811A\u70B9",
      "description": "\u6CB3\u6D77\u8F6C\u8FD0\u3001\u9C7C\u5E02\u3001\u4F4F\u5BBF\u3001\u5403\u996D\u4E0E\u6CBF\u5CB8\u6F2B\u6B65"
    },
    "LOC-CAD-002": {
      "name": "\u8D1D\u8428\u5C14\u6E2F\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "region": "REG-04",
      "position": "\u6E2F\u5185\u9646\u4FA7\uFF0C\u9760\u8FD1\u8FDB\u51FA\u57CE\u9053\u8DEF",
      "description": "\u8239\u5CB8\u59D4\u6258\u3001\u9053\u8DEF\u4E0E\u6F6E\u6C50\u4FE1\u606F\u3001\u73B0\u91D1\u7ED3\u7B97\u548C\u7EA6\u5B9A\u7684\u8DE8\u5730\u4EA4\u63A5"
    },
    "LOC-CAD-003": {
      "name": "\u9A6C\u96F7\u65AF\u8239\u575E",
      "region": "REG-04",
      "position": "\u6E2F\u6E7E\u5185\u4FA7",
      "description": "\u8239\u53EA\u7EF4\u4FEE\u4E0E\u822A\u5177\u4FEE\u6574\uFF1B\u4F5C\u4E1A\u53F0\u548C\u9000\u5F79\u575E\u9053\u5206\u5F00\u7BA1\u7406"
    },
    "LOC-CAD-004": {
      "name": "\u5854\u5C14\u8428\u5C9B",
      "region": "REG-04",
      "position": "\u8DDD\u6E2F\u7EA6 18 \u516C\u91CC\u7684\u8FD1\u6D77\u5C9B\u5C7F",
      "description": "\u6E14\u6751\u3001\u5C9B\u4E0A\u6B65\u9053\u3001\u77ED\u4F4F\u4E0E\u6D77\u666F\uFF0C\u901A\u5E38\u4E58\u8239\u62B5\u8FBE"
    },
    "LOC-CAD-005": {
      "name": "\u57C3\u65AF\u4F26\u6D77\u8680\u6D1E",
      "region": "REG-04",
      "position": "\u6CBF\u5CB8\u7EA6 9 \u516C\u91CC",
      "description": "\u6D1E\u53E3\u6B65\u9053\u3001\u76D0\u6676\u4E0E\u53E4\u8001\u6D77\u517D\u9AA8\u9ABC\uFF0C\u5185\u90E8\u968F\u6F6E\u4F4D\u53D8\u5316"
    },
    "LOC-CAD-006": {
      "name": "\u7EF4\u8428\u6069\u65E7\u5824\u9053",
      "region": "REG-04",
      "position": "\u6CBF\u5CB8\u7EA6 7 \u516C\u91CC\u5230\u8FBE\u9646\u4FA7\u5165\u53E3",
      "description": "\u4F4E\u6F6E\u9732\u51FA\u7684\u65E7\u77F3\u8DEF\uFF0C\u8FDE\u63A5\u540C\u540D\u8FD1\u5CB8\u7901\u53F0"
    },
    "LOC-HOR-001": {
      "name": "\u4E4C\u5C14\u8FBE\u514B",
      "region": "REG-05",
      "position": "\u970D\u5C14\u4E39\u4E3B\u8981\u843D\u811A\u70B9\uFF0C\u683C\u62C9\u591A\u514B\u9996\u90FD",
      "description": "\u5E02\u8857\u3001\u653F\u52A1\u3001\u666E\u901A\u5C45\u6C11\u751F\u6D3B\u4E0E\u9F50\u5168\u7684\u65C5\u884C\u670D\u52A1"
    },
    "LOC-HOR-002": {
      "name": "\u4E4C\u5C14\u8FBE\u514B\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "region": "REG-05",
      "position": "\u57CE\u5185\u9760\u8FD1\u8FD0\u8F93\u8857",
      "description": "\u6709\u507F\u59D4\u6258\u3001\u5730\u65B9\u95EE\u8BAF\u4E0E\u5DE5\u4F5C\u4EA4\u63A5"
    },
    "LOC-HOR-003": {
      "name": "\u5361\u5C14\u7EB3\u96C6\u5E02",
      "region": "REG-05",
      "position": "\u57CE\u5185\u6570\u6761\u76F8\u8FDE\u5546\u8857\u4E0E\u9662\u5E02",
      "description": "\u7CAE\u98DF\u3001\u76AE\u9769\u3001\u6210\u8863\u3001\u624B\u827A\u3001\u836F\u5242\u4E0E\u70ED\u98DF"
    },
    "LOC-HOR-004": {
      "name": "\u591A\u62C9\u6069\u7ADE\u6280\u573A",
      "region": "REG-05",
      "position": "\u57CE\u5185\u9760\u8FD1\u4E1C\u5899",
      "description": "\u6BD4\u8D5B\u3001\u9884\u7EA6\u7EC3\u4E60\u3001\u4F53\u9A8C\u9879\u76EE\u4E0E\u6709\u507F\u5DE5\u4F5C"
    },
    "LOC-HOR-005": {
      "name": "\u51EF\u5C14\u8428\u77F3\u73AF",
      "region": "REG-05",
      "position": "\u57CE\u4E1C\u5317\u7EA6 28 \u516C\u91CC\uFF0C\u5E73\u539F\u652F\u8DEF\u65C1",
      "description": "\u5DE8\u5927\u7ACB\u77F3\u3001\u8349\u6D6A\u4E0E\u98CE\u58F0\uFF0C\u53EF\u8D70\u516C\u5F00\u89C2\u666F\u8DEF\u7EBF"
    },
    "LOC-HOR-006": {
      "name": "\u5854\u4F26\u6CB3\u6E21\u573A",
      "region": "REG-05",
      "position": "\u57CE\u5357\u7EA6 6 \u516C\u91CC",
      "description": "\u6CB3\u8FD0\u3001\u6CCA\u8239\u548C\u6CBF\u5824\u6563\u6B65\uFF1B\u90E8\u5206\u6CB3\u6BB5\u6C34\u4F4D\u5F71\u54CD\u8239\u578B"
    },
    "LOC-HOR-007": {
      "name": "\u7EB3\u7EF4\u5C14\u5824\u7267\u533A",
      "region": "REG-05",
      "position": "\u57CE\u897F\u7EA6 14 \u516C\u91CC",
      "description": "\u519C\u7530\u3001\u7267\u8349\u5730\u548C\u5171\u540C\u4F7F\u7528\u7684\u5206\u6C34\u6E20"
    },
    "LOC-HOR-008": {
      "name": "\u8428\u96F7\u514B\u65C5\u820D",
      "region": "REG-05",
      "position": "\u4E4C\u5C14\u8FBE\u514B\u57CE\u5185",
      "description": "\u98DF\u5BBF\u3001\u70ED\u6C34\u3001\u5BC4\u653E\u884C\u674E\u4E0E\u957F\u671F\u79DF\u4F4F"
    },
    "LOC-BRE-001": {
      "name": "\u79D1\u5C14\u74E6\u6069",
      "region": "REG-06",
      "position": "\u5E03\u96F7\u5361\u4E3B\u8981\u843D\u811A\u5C71\u9547",
      "description": "\u98DF\u5BBF\u3001\u5ECA\u5E02\u3001\u5411\u5BFC\u3001\u5FA1\u5BD2\u4E0E\u767B\u5C71\u51C6\u5907"
    },
    "LOC-BRE-002": {
      "name": "\u79D1\u5C14\u74E6\u6069\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "region": "REG-06",
      "position": "\u9547\u5185\u9760\u8FD1\u51FA\u884C\u5E7F\u573A",
      "description": "\u9AD8\u5730\u5DE5\u4F5C\u3001\u53E4\u57CE\u4FE1\u606F\u4E0E\u73B0\u91D1\u59D4\u6258"
    },
    "LOC-BRE-003": {
      "name": "\u8D1D\u4F26\u5FB7\u5ECA\u5E02",
      "region": "REG-06",
      "position": "\u9547\u5185\u8FDE\u7EED\u5C4B\u6A90\u4E0B",
      "description": "\u8BBE\u906E\u96E8\u5C4B\u6A90\u7684\u7EC7\u7269\u3001\u5C71\u7528\u54C1\u3001\u70ED\u98DF\u53CA\u65E5\u5E38\u5546\u94FA"
    },
    "LOC-BRE-004": {
      "name": "\u7EF4\u5FB7\u62C9\u5347\u964D\u7AD9",
      "region": "REG-06",
      "position": "\u9547\u4E1C\u5317\u7EA6 14 \u516C\u91CC\u7684\u5C71\u80A9",
      "description": "\u901A\u5F80\u53E4\u57CE\u7684\u7B26\u6587\u5347\u964D\u5BA2\u8FD0\u7AD9\uFF0C\u8FD0\u8425\u53D7\u5929\u6C14\u53CA\u8F7D\u91CD\u9650\u5236"
    },
    "LOC-BRE-005": {
      "name": "\u827E\u745E\u745F\u5C14\u53E4\u57CE",
      "region": "REG-06",
      "position": "\u5347\u964D\u7AD9\u524D\u65B9\u5CE1\u8C37\u4E0A\u7A7A",
      "description": "\u60AC\u6D6E\u5CA9\u53F0\u4E0A\u7684\u53E4\u57CE\u3001\u5916\u73AF\u6B65\u9053\u3001\u9057\u8FF9\u4E0E\u7EF4\u62A4\u533A"
    },
    "LOC-BRE-006": {
      "name": "\u8D6B\u5C14\u739B\u89C2\u4E91\u53F0",
      "region": "REG-06",
      "position": "\u9547\u4E1C\u7EA6 9 \u516C\u91CC\u7684\u5C71\u9053\u65C1",
      "description": "\u4E91\u6D77\u3001\u6D6E\u57CE\u4E0E\u5C71\u58C1\u89C2\u666F\uFF0C\u5730\u9762\u6B65\u884C\u53EF\u8FBE"
    },
    "LOC-BRE-007": {
      "name": "\u514B\u96F7\u65AF\u5C71\u9053",
      "region": "REG-06",
      "position": "\u5411\u4E1C\u5317\u5EF6\u4F38\u7684\u51FA\u5C71\u9053\u8DEF",
      "description": "\u53BB\u5317\u65B9\u7684\u9053\u8DEF\u751F\u6D3B\u3001\u9A7F\u7AD9\u4E0E\u53EF\u7ED5\u884C\u7684\u5C0F\u6BB5\u9669\u8DEF"
    },
    "LOC-BRE-008": {
      "name": "\u591A\u6069\u9A7F\u820D",
      "region": "REG-06",
      "position": "\u79D1\u5C14\u74E6\u6069\u9547\u5185",
      "description": "\u70ED\u6C64\u3001\u98DF\u5BBF\u3001\u8863\u9774\u70D8\u5E72\u4E0E\u5B89\u9759\u7684\u5BA4\u5185\u5EA7\u4F4D"
    },
    "LOC-DUR-001": {
      "name": "\u6258\u5C14\u6587",
      "region": "REG-07",
      "position": "\u675C\u5C14\u6587\u4E3B\u8981\u843D\u811A\u5C71\u9547",
      "description": "\u5E02\u573A\u3001\u98DF\u5BBF\u3001\u8865\u7ED9\u3001\u5DE5\u574A\u548C\u9053\u8DEF\u4EA4\u4F1A"
    },
    "LOC-DUR-002": {
      "name": "\u6258\u5C14\u6587\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "region": "REG-07",
      "position": "\u9547\u5185\u9760\u8FD1\u8D27\u8FD0\u9662",
      "description": "\u5730\u65B9\u59D4\u6258\u3001\u5411\u5BFC\u4E0E\u77FF\u9053\u60C5\u51B5\uFF1B\u54C8\u5FB7\u6797\u4E5F\u6709\u5C0F\u578B\u529E\u4E8B\u7A97\u53E3"
    },
    "LOC-DUR-003": {
      "name": "\u54C8\u5FB7\u6797\u77F3\u5385",
      "region": "REG-07",
      "position": "\u6258\u5C14\u6587\u4EE5\u4E1C\u7EA6 16 \u516C\u91CC\uFF0C\u5E38\u7528\u5730\u9762\u4E0E\u96A7\u9053\u7EC4\u5408\u8DEF\u7EBF",
      "description": "\u77EE\u4EBA\u81EA\u6CBB\u805A\u843D\uFF0C\u5546\u8857\u3001\u5DE5\u574A\u3001\u4F4F\u5BB6\u4E0E\u534F\u4F1A\u7A97\u53E3"
    },
    "LOC-DUR-004": {
      "name": "\u745F\u62C9\u8FEA\u6069\u6676\u6E56",
      "region": "REG-07",
      "position": "\u77F3\u5385\u5916\u7EA6 7 \u516C\u91CC\u7684\u7EF4\u62A4\u5730\u4E0B\u6B65\u9053\u5C3D\u5934",
      "description": "\u5DE8\u5927\u6676\u6D1E\u3001\u5730\u4E0B\u6E56\u4E0E\u5F53\u5730\u89C2\u89C8\u5C0F\u8239\uFF1B\u6DF1\u5165\u652F\u6D1E\u9700\u53E6\u4F5C\u51C6\u5907"
    },
    "LOC-DUR-005": {
      "name": "\u8D1D\u6D1B\u514B\u5DE5\u574A\u8857",
      "region": "REG-07",
      "position": "\u6258\u5C14\u6587\u9760\u5C71\u7684\u8F83\u4F4E\u8857\u533A",
      "description": "\u5175\u7532\u3001\u6676\u6750\u3001\u70BC\u91D1\u3001\u9996\u9970\u4E0E\u53EF\u9884\u7EA6\u53C2\u89C2\u7684\u4F5C\u574A"
    },
    "LOC-DUR-006": {
      "name": "\u4F0A\u5C14\u8FBE\u6E29\u6CC9\u9662",
      "region": "REG-07",
      "position": "\u6258\u5C14\u6587\u4EE5\u5357\u7EA6 4 \u516C\u91CC\u7684\u4FA7\u8C37",
      "description": "\u5C40\u90E8\u5730\u70ED\u4F9B\u6C34\u7684\u6C90\u6D74\u3001\u4F11\u606F\u3001\u6D17\u8863\u53CA\u70D8\u5E72\u8BBE\u65BD"
    },
    "LOC-DUR-007": {
      "name": "\u5361\u5C14\u5FB7\u65E7\u77FF\u9053",
      "region": "REG-07",
      "position": "\u77F3\u5385\u4E1C\u5317\u4FA7\u7684\u505C\u7528\u77FF\u652F\u7EBF\uFF0C\u5165\u53E3\u8DDD\u77F3\u5385\u7EA6 5 \u516C\u91CC",
      "description": "\u6709\u660E\u786E\u7BA1\u7406\u8005\u7684\u65E7\u4F5C\u4E1A\u533A\uFF0C\u8FDB\u5165\u524D\u987B\u6838\u5B9E\u7A7A\u6C14\u3001\u652F\u62A4\u4E0E\u9B54\u7269\u6D3B\u52A8"
    },
    "LOC-DUR-008": {
      "name": "\u5965\u5C14\u82AC\u5C71\u53E3",
      "region": "REG-07",
      "position": "\u6258\u5C14\u6587\u4EE5\u4E1C\u7EA6 26 \u516C\u91CC\u7684\u57CE\u9645\u4E3B\u8DEF\u6BB5",
      "description": "\u8D8A\u5411\u57C3\u65AF\u51EF\u5C14\u7684\u5C71\u8DEF\u3001\u8FDC\u666F\u4E0E\u4EA4\u901A\u9A7F\u70B9"
    },
    "LOC-DUR-009": {
      "name": "\u6797\u5FB7\u65C5\u820D",
      "region": "REG-07",
      "position": "\u6258\u5C14\u6587\u9547\u5185",
      "description": "\u98DF\u5BBF\u3001\u70D8\u8863\u3001\u884C\u674E\u5BC4\u653E\u4E0E\u5DE5\u574A\u53D6\u4EF6\u95EE\u8BAF"
    },
    "LOC-VIS-001": {
      "name": "\u5E03\u4F26\u7EF4\u5C14",
      "region": "REG-08",
      "position": "\u68EE\u6797\u897F\u90E8\u7684\u4E3B\u8981\u843D\u811A\u9547",
      "description": "\u98DF\u5BBF\u3001\u6797\u4E1A\u8D38\u6613\u3001\u666E\u901A\u5C45\u6C11\u751F\u6D3B\u4E0E\u884C\u65C5\u8865\u7ED9"
    },
    "LOC-VIS-002": {
      "name": "\u5E03\u4F26\u7EF4\u5C14\u5192\u9669\u5BB6\u534F\u4F1A",
      "region": "REG-08",
      "position": "\u9547\u5185\u9760\u8FD1\u8F66\u9A6C\u9662",
      "description": "\u6709\u507F\u59D4\u6258\u3001\u91C7\u96C6\u8BB8\u53EF\u54A8\u8BE2\u3001\u5411\u5BFC\u53CA\u8DEF\u51B5\u8D44\u6599"
    },
    "LOC-VIS-003": {
      "name": "\u5965\u514B\u4F26\u6728\u5ECA\u5E02",
      "region": "REG-08",
      "position": "\u9547\u5185\u76F8\u8FDE\u7684\u6728\u5ECA\u548C\u94FA\u9762",
      "description": "\u6728\u5668\u3001\u836F\u8349\u3001\u8863\u7269\u3001\u4E66\u5377\u53CA\u98DF\u94FA\u7EC4\u6210\u7684\u6728\u5ECA\u5E02\u573A"
    },
    "LOC-VIS-004": {
      "name": "\u57C3\u5C14\u5FB7\u6797\u5DE8\u6811",
      "region": "REG-08",
      "position": "\u9547\u4E1C\u7EA6 38 \u516C\u91CC\u7684\u6797\u95F4\u8DEF\u7EBF\u5C3D\u5934",
      "description": "\u9AD8\u51FA\u5468\u8FB9\u4F4E\u5C71\u7684\u5DE8\u5927\u6811\u51A0\u3001\u6811\u4E0B\u89C2\u666F\u548C\u6839\u95F4\u6B65\u9053"
    },
    "LOC-VIS-005": {
      "name": "\u745F\u7EF4\u5C14\u6839\u62F1\u9053",
      "region": "REG-08",
      "position": "\u5DE8\u6811\u8FD1\u65C1\uFF0C\u7ED5\u8FC7\u51E0\u9053\u5DE8\u5927\u677F\u6839",
      "description": "\u62AC\u9AD8\u7684\u65E7\u8DEF\u3001\u6839\u4E0B\u7A7A\u9699\u4E0E\u7EF4\u62A4\u6728\u6808\u9053\uFF0C\u5206\u516C\u5171\u8DEF\u548C\u6500\u767B\u6BB5"
    },
    "LOC-VIS-006": {
      "name": "\u6258\u5170\u65E7\u836F\u5703",
      "region": "REG-08",
      "position": "\u5DE8\u6811\u5357\u4FA7\u7EA6 6 \u516C\u91CC\u7684\u4FA7\u7EBF",
      "description": "\u88AB\u82D4\u85D3\u4E0E\u690D\u7269\u5305\u56F4\u7684\u65E7\u77F3\u9662\u3001\u836F\u5703\u548C\u90E8\u5206\u7834\u635F\u6E29\u5BA4"
    },
    "LOC-VIS-007": {
      "name": "\u745E\u65AF\u6797\u6811\u8102\u56ED",
      "region": "REG-08",
      "position": "\u9547\u4E1C\u5317\u7EA6 14 \u516C\u91CC",
      "description": "\u6709\u65E5\u5E38\u7ECF\u8425\u8005\u7684\u6797\u5730\uFF0C\u6811\u8102\u91C7\u6536\u4E0E\u517B\u62A4"
    },
    "LOC-VIS-008": {
      "name": "\u8D1D\u4F26\u6797\u820D",
      "region": "REG-08",
      "position": "\u5E03\u4F26\u7EF4\u5C14\u9547\u5185",
      "description": "\u5BA2\u623F\u3001\u5EAD\u9662\u3001\u5E72\u71E5\u8863\u7269\u548C\u5171\u540C\u7528\u9910"
    },
    "LOC-VIS-009": {
      "name": "\u74E6\u4F26\u6EAA\u8425\u5730",
      "region": "REG-08",
      "position": "\u9547\u4E1C\u7EA6 22 \u516C\u91CC\uFF0C\u901A\u5F80\u5DE8\u6811\u7684\u8DEF\u7EBF\u65C1",
      "description": "\u7EF4\u62A4\u8425\u4F4D\u3001\u6EAA\u8FB9\u4F11\u606F\u548C\u77ED\u9014\u65C5\u4EBA\u7684\u8865\u6C34\u95EE\u8BAF"
    },
    "LOC-LOS-001": {
      "name": "\u6885\u745E\u767B",
      "region": "REG-09",
      "position": "\u7EF4\u7EB3\u5C14\u6E56\u897F\u5317\u5CB8\uFF0C\u6E56\u533A\u4E3B\u8981\u843D\u811A\u57CE\u5E02",
      "description": "\u9646\u8DEF\u4E0E\u6C34\u8DEF\u8F6C\u63A5\u3001\u5546\u8857\u3001\u98DF\u5BBF\u3001\u516C\u5171\u751F\u6D3B"
    },
    "LOC-LOS-002": {
      "name": "\u6885\u745E\u767B\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "region": "REG-09",
      "position": "\u5CB8\u6E2F\u9644\u8FD1\uFF0C\u9646\u884C\u8005\u4E5F\u65B9\u4FBF\u8FDB\u5165",
      "description": "\u6E56\u533A\u73B0\u91D1\u59D4\u6258\u3001\u6E21\u8239\u4FE1\u606F\u3001\u5411\u5BFC\u4E0E\u4EA4\u63A5"
    },
    "LOC-LOS-003": {
      "name": "\u83F2\u5965\u62C9\u821F\u5E02",
      "region": "REG-09",
      "position": "\u6885\u745E\u767B\u8FD1\u5CB8\u516C\u5171\u6CCA\u533A",
      "description": "\u56FA\u5B9A\u644A\u53F0\u548C\u6309\u5B89\u6392\u9760\u6CCA\u7684\u552E\u8D27\u8239\uFF0C\u70ED\u98DF\u3001\u65E5\u7528\u54C1\u4E0E\u5DE5\u827A"
    },
    "LOC-LOS-004": {
      "name": "\u7EF4\u7EB3\u5C14\u6E56",
      "region": "REG-09",
      "position": "\u6E56\u533A\u76F8\u8FDE\u6E56\u7FA4\u4E2D\u7684\u4E3B\u8981\u6E56\u6CCA",
      "description": "\u6700\u957F\u7EA6 70 \u516C\u91CC\u3001\u6700\u5BBD\u7EA6 40 \u516C\u91CC\u7684\u5F00\u9614\u6C34\u9762"
    },
    "LOC-LOS-005": {
      "name": "\u5965\u857E\u6069\u6D6E\u5C9B\u7FA4",
      "region": "REG-09",
      "position": "\u6E56\u57CE\u4EE5\u4E1C\u7EA6 3\u201415 \u516C\u91CC\u7684\u53D7\u5730\u5F62\u7EA6\u675F\u6C34\u57DF",
      "description": "\u771F\u6B63\u6D6E\u5728\u6C34\u4E0A\u7684\u690D\u88AB\u5C9B\uFF0C\u4F4D\u7F6E\u968F\u98CE\u4E0E\u6C34\u6D41\u7F13\u6162\u53D8\u5316"
    },
    "LOC-LOS-006": {
      "name": "\u74E6\u96F7\u8428\u6C89\u57CE",
      "region": "REG-09",
      "position": "\u6E56\u57CE\u4E1C\u5357\u7EA6 18 \u516C\u91CC\u8239\u7A0B\u7684\u4E00\u5904\u65E7\u5CB8\u53F0\u5730",
      "description": "\u6D78\u6CA1\u7684\u65E7\u8857\u3001\u77F3\u6865\u4E0E\u90E8\u5206\u5EFA\u7B51\uFF0C\u89C2\u89C8\u548C\u6C34\u4E0B\u63A2\u7D22\u5206\u5F00"
    },
    "LOC-LOS-007": {
      "name": "\u5361\u585E\u62C9\u9547",
      "region": "REG-09",
      "position": "\u4E3B\u6E56\u4EE5\u5357\u3001\u63A5\u51FA\u6E56\u6C34\u7CFB\u7684\u57CE\u9547\uFF0C\u8DDD\u6885\u745E\u767B\u6CBF\u5CB8\u9053\u8DEF\u7EA6 80 \u516C\u91CC",
      "description": "\u4ED3\u50A8\u3001\u98DF\u5BBF\u3001\u6362\u8239\u548C\u5C0F\u578B\u534F\u4F1A\u7A97\u53E3\uFF1B\u8239\u7A0B\u6309\u822A\u7EBF\u53E6\u8BA1"
    },
    "LOC-LOS-008": {
      "name": "\u585E\u62C9\u6587\u7011\u5E03",
      "region": "REG-09",
      "position": "\u4E3B\u6E56\u4E1C\u5CB8\u4E00\u6761\u5165\u6E56\u652F\u6D41\u7684\u5CA9\u53F0",
      "description": "\u4ECE\u9AD8\u5904\u6811\u6797\u843D\u5411\u6E56\u6E7E\u7684\u5BBD\u7011\uFF0C\u5CB8\u4E0A\u6B65\u9053\u4E0E\u8239\u4E0A\u8FDC\u89C2"
    },
    "LOC-LOS-009": {
      "name": "\u827E\u6587\u8FBE\u8239\u5C4B\u6CCA\u533A",
      "region": "REG-09",
      "position": "\u6885\u745E\u767B\u7684\u907F\u98CE\u5185\u6E7E",
      "description": "\u5E38\u4F4F\u5C45\u6C11\u4E0E\u5C11\u91CF\u53EF\u79DF\u8239\u5C4B\uFF0C\u7532\u677F\u3001\u76C6\u683D\u548C\u90BB\u91CC\u5F80\u6765"
    },
    "LOC-LOS-010": {
      "name": "\u83AB\u5170\u6E56\u5CB8\u5BA2\u6808",
      "region": "REG-09",
      "position": "\u6885\u745E\u767B\u5CB8\u8857",
      "description": "\u666E\u901A\u5BA2\u623F\u3001\u9910\u98DF\u3001\u6D17\u8863\u53CA\u8239\u5C4B\u79DF\u4F4F\u8F6C\u4ECB"
    },
    "LOC-LOS-011": {
      "name": "\u4F0A\u745F\u6587\u7814\u4E60\u9662",
      "region": "REG-09",
      "position": "\u6885\u745E\u767B\u5CB8\u4E0A\u8857\u533A\uFF0C\u9760\u8FD1\u4E66\u5377\u4E0E\u5668\u7269\u5546\u8857",
      "description": "\u9B54\u6CD5\u6559\u5B66\u3001\u4EA4\u6D41\u3001\u81EA\u613F\u8003\u6838\u53CA\u9884\u7EA6\u5355\u9879\u8BC4\u8BAE"
    },
    "LOC-LOS-012": {
      "name": "\u4F0A\u745F\u6587\u6C34\u5EAD\u7EC3\u4E60\u573A",
      "region": "REG-09",
      "position": "\u7814\u4E60\u9662\u9662\u5185\u4E0E\u76F8\u8FDE\u7684\u53D7\u7EF4\u62A4\u8FD1\u5CB8\u573A\u5730",
      "description": "\u6D45\u6E20\u3001\u77F3\u9636\u3001\u53EF\u66F4\u6362\u969C\u788D\u4E0E\u8BAD\u7EC3\u5668\u5177\u7EC4\u6210\u7684\u7EC3\u4E60\u573A"
    },
    "LOC-ESK-001": {
      "name": "\u5FB7\u5170\u745F",
      "region": "REG-10",
      "position": "\u8352\u539F\u897F\u90E8\u7684\u53E4\u9053\u4EA4\u4F1A\u5904\uFF0C\u4E3B\u8981\u843D\u811A\u9547",
      "description": "\u98DF\u5BBF\u3001\u5546\u8857\u3001\u8F66\u961F\u3001\u4E95\u6C34\u4E0E\u5730\u65B9\u751F\u6D3B"
    },
    "LOC-ESK-002": {
      "name": "\u5FB7\u5170\u745F\u5192\u9669\u5BB6\u534F\u4F1A",
      "region": "REG-10",
      "position": "\u9547\u5185\u9760\u8FD1\u51FA\u884C\u9662",
      "description": "\u6709\u507F\u59D4\u6258\u3001\u8DEF\u7EBF\u6D88\u606F\u3001\u5411\u5BFC\u8054\u7EDC\u4E0E\u5DE5\u4F5C\u4EA4\u63A5"
    },
    "LOC-ESK-003": {
      "name": "\u7EF4\u4F26\u5FB7\u9A7F\u5E02",
      "region": "REG-10",
      "position": "\u9547\u5185\u4E00\u7EC4\u76F8\u8FDE\u7684\u77F3\u62F1\u5ECA\u4E0E\u9732\u5929\u8D27\u9662",
      "description": "\u5E38\u8BBE\u5546\u94FA\u3001\u98DF\u54C1\u644A\u53CA\u884C\u5546\u505C\u9760\u5E02\u573A"
    },
    "LOC-ESK-004": {
      "name": "\u5361\u6D1B\u6E29\u5BA2\u820D",
      "region": "REG-10",
      "position": "\u9A7F\u5E02\u65C1\u8F83\u5B89\u9759\u7684\u5185\u8857",
      "description": "\u5BA2\u623F\u3001\u996D\u98DF\u3001\u9152\u9986\u5EA7\u5E2D\u3001\u6D17\u8863\u4E0E\u56F4\u9662\u4F11\u606F"
    },
    "LOC-ESK-005": {
      "name": "\u963F\u65AF\u5361\u4F26\u9636\u57CE",
      "region": "REG-10",
      "position": "\u9547\u4E1C\u7EA6 22 \u516C\u91CC\u7684\u53E4\u9053\u652F\u7EBF",
      "description": "\u534A\u57CB\u7684\u9636\u53F0\u3001\u5DE8\u95E8\u4E0E\u6709\u5206\u533A\u7BA1\u7406\u7684\u65E7\u516C\u5171\u5EFA\u7B51\u7FA4"
    },
    "LOC-ESK-006": {
      "name": "\u7EF4\u96F7\u6069\u65AD\u5D16",
      "region": "REG-10",
      "position": "\u9547\u4E1C\u5357\u7EA6 34 \u516C\u91CC\u7684\u4FA7\u7EBF",
      "description": "\u591A\u8272\u5CA9\u5C42\u3001\u957F\u5D16\u4E0E\u5D16\u9876\u7EF4\u62A4\u6B65\u9053\uFF0C\u5D16\u4E0B\u652F\u6C9F\u53E6\u6709\u98CE\u9669"
    },
    "LOC-ESK-007": {
      "name": "\u8BFA\u7EF4\u6069\u4E95\u7AD9",
      "region": "REG-10",
      "position": "\u9547\u5357\u7EA6 52 \u516C\u91CC\uFF0C\u5728\u901A\u5F80\u7D22\u62C9\u6069\u7684\u65E2\u6709\u5546\u8DEF\u4E0A",
      "description": "\u4E95\u3001\u8865\u7ED9\u95F4\u3001\u8349\u68DA\u3001\u5BA2\u5E8A\u53CA\u9A7B\u8DB3\u9662"
    },
    "LOC-ESK-008": {
      "name": "\u8D6B\u7F57\u6069\u65E7\u6CB3\u5E8A",
      "region": "REG-10",
      "position": "\u9547\u5357\u7EA6 24 \u516C\u91CC\uFF0C\u53E4\u9053\u4E0E\u5176\u6570\u6BB5\u76F8\u90BB",
      "description": "\u5BBD\u9614\u5E72\u6CB3\u5E8A\u3001\u783E\u6EE9\u4E0E\u4F4E\u5904\u652F\u6C9F\uFF0C\u96E8\u540E\u53EF\u80FD\u8FC7\u6C34"
    },
    "LOC-ESK-009": {
      "name": "\u74E6\u5C14\u5FB7\u89C2\u666F\u5761",
      "region": "REG-10",
      "position": "\u9547\u897F\u7EA6 3 \u516C\u91CC\u7684\u7F13\u5761",
      "description": "\u7FA4\u5C71\u3001\u9547\u706F\u4E0E\u5F00\u9614\u591C\u7A7A\u89C2\u666F"
    },
    "LOC-SOL-001": {
      "name": "\u8428\u7EF4\u5170",
      "region": "REG-11",
      "position": "\u7D22\u62C9\u6069\u4E3B\u8981\u7EFF\u6D32\u57CE\uFF0C\u4E09\u5411\u5546\u8DEF\u76F8\u63A5",
      "description": "\u5E38\u8BBE\u5546\u8857\u3001\u4F4F\u5BB6\u3001\u98DF\u5BBF\u3001\u5DE5\u827A\u4E0E\u516C\u5171\u751F\u6D3B"
    },
    "LOC-SOL-002": {
      "name": "\u8428\u7EF4\u5170\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "region": "REG-11",
      "position": "\u57CE\u5185\u9760\u8FD1\u5546\u961F\u51FA\u5165\u8857",
      "description": "\u5730\u65B9\u73B0\u91D1\u59D4\u6258\u3001\u5411\u5BFC\u3001\u51FA\u884C\u4E0E\u4EA4\u63A5"
    },
    "LOC-SOL-003": {
      "name": "\u83B1\u745F\u6069\u591C\u5E02",
      "region": "REG-11",
      "position": "\u57CE\u5185\u906E\u9634\u5546\u5ECA\u4E0E\u76F8\u8FDE\u7684\u5E7F\u573A",
      "description": "\u767D\u5929\u5E38\u8BBE\u5546\u94FA\uFF0C\u508D\u665A\u589E\u52A0\u70ED\u98DF\u3001\u5DE5\u827A\u548C\u884C\u5546\u644A\u4F4D"
    },
    "LOC-SOL-004": {
      "name": "\u74E6\u4F26\u5A1C\u5EAD\u9662\u5BA2\u6808",
      "region": "REG-11",
      "position": "\u5546\u5ECA\u5916\u4FA7\u7684\u5B89\u9759\u5C45\u6C11\u8857",
      "description": "\u5BA2\u623F\u3001\u9910\u98DF\u3001\u9152\u9986\u3001\u6D17\u8863\u4E0E\u53EF\u4F11\u606F\u7684\u5185\u9662"
    },
    "LOC-SOL-005": {
      "name": "\u963F\u7EF4\u745F\u5C14\u73BB\u7483\u5CE1\u8C37",
      "region": "REG-11",
      "position": "\u57CE\u4E1C\u7EA6 27 \u516C\u91CC\u7684\u89C2\u666F\u652F\u7EBF",
      "description": "\u5CA9\u77F3\u4E0E\u73BB\u7483\u8D28\u5D16\u9762\u3001\u5149\u62F1\u3001\u7EF4\u62A4\u6B65\u9053\u53CA\u9700\u51C6\u5907\u7684\u6DF1\u8C37"
    },
    "LOC-SOL-006": {
      "name": "\u5965\u745E\u6069\u6C99\u4E18",
      "region": "REG-11",
      "position": "\u57CE\u5357\u7EA6 18 \u516C\u91CC\u8D77\u7684\u4E00\u7247\u6C99\u4E18\u5730\u5E26",
      "description": "\u8FDE\u7EED\u6C99\u810A\u3001\u9EC4\u660F\u5149\u5F71\u548C\u53EF\u7531\u5411\u5BFC\u5E26\u9886\u7684\u77ED\u9014\u89C2\u666F"
    },
    "LOC-SOL-007": {
      "name": "\u6CD5\u5C14\u745F\u5DE8\u9AB8",
      "region": "REG-11",
      "position": "\u57CE\u4E1C\u5357\u7EA6 43 \u516C\u91CC\u7684\u4FA7\u7EBF\uFF0C\u8FD1\u6C99\u5730\u4E0E\u783E\u5730\u4EA4\u754C",
      "description": "\u5DE8\u517D\u9AA8\u67B6\u3001\u783E\u53F0\u89C2\u666F\u70B9\u4E0E\u6709\u9B54\u7269\u6D3B\u52A8\u7684\u4F4E\u5904\u6C99\u7A9D"
    },
    "LOC-SOL-008": {
      "name": "\u745F\u5170\u5FB7\u6C34\u5EAD",
      "region": "REG-11",
      "position": "\u8428\u7EF4\u5170\u7684\u516C\u5171\u56ED\u5703\u4E0E\u6C34\u6E20\u6B65\u9053",
      "description": "\u679C\u6811\u3001\u906E\u9634\u67B6\u3001\u6D45\u6E20\u3001\u5C45\u6C11\u6563\u6B65\u4E0E\u6C34\u52A1\u5DE5\u4F5C"
    },
    "LOC-SOL-009": {
      "name": "\u79D1\u745E\u6069\u7EFF\u6D32\u6751",
      "region": "REG-11",
      "position": "\u57CE\u897F\u7EA6 65 \u516C\u91CC\uFF0C\u5728\u63A5\u6D1B\u65AF\u6587\u7684\u65E2\u6709\u9053\u8DEF\u4E0A",
      "description": "\u81EA\u6709\u5C0F\u6CC9\u4E0E\u56ED\u5703\uFF0C\u6751\u94FA\u3001\u77ED\u4F4F\u4E0E\u5546\u8DEF\u8865\u7ED9"
    },
    "LOC-SOL-010": {
      "name": "\u57C3\u5C14\u6E29\u5546\u961F\u9662",
      "region": "REG-11",
      "position": "\u8428\u7EF4\u5170\u9646\u8DEF\u51FA\u5165\u53E3\u5185",
      "description": "\u666E\u901A\u9A6C\u5339\u3001\u9A6E\u755C\u4E0E\u9A86\u9A7C\u5206\u533A\u7167\u7BA1\uFF0C\u88C5\u5378\u3001\u96C7\u8F66\u548C\u540C\u884C\u7EA6\u5B9A"
    },
    "LOC-NOR-001": {
      "name": "\u8D6B\u5C14\u65AF\u5854\u5FB7",
      "region": "REG-12",
      "position": "\u51BB\u539F\u5357\u90E8\u7684\u4E3B\u8981\u843D\u811A\u9547",
      "description": "\u65E5\u5E38\u5546\u8857\u3001\u98DF\u5BBF\u3001\u51AC\u5385\u3001\u4EA4\u901A\u4E0E\u6CBF\u6CB3\u751F\u6D3B"
    },
    "LOC-NOR-002": {
      "name": "\u8D6B\u5C14\u65AF\u5854\u5FB7\u5192\u9669\u5BB6\u534F\u4F1A",
      "region": "REG-12",
      "position": "\u9547\u5185\uFF0C\u9760\u8FD1\u8F66\u9A6C\u9662",
      "description": "\u73B0\u91D1\u5DE5\u4F5C\u3001\u9053\u8DEF\u6D88\u606F\u4E0E\u4E13\u4E1A\u4EBA\u5458\u8054\u7EDC"
    },
    "LOC-NOR-003": {
      "name": "\u5E03\u5170\u7279\u51AC\u5385",
      "region": "REG-12",
      "position": "\u9547\u4E2D\u516C\u5171\u5E7F\u573A\u65C1",
      "description": "\u5C45\u6C11\u8BAE\u4E8B\u3001\u516C\u5171\u7528\u9910\u3001\u4FEE\u8865\u684C\u3001\u68CB\u5177\u53CA\u8BB2\u8FF0\u6D3B\u52A8"
    },
    "LOC-NOR-004": {
      "name": "\u827E\u683C\u59AE\u65C5\u820D",
      "region": "REG-12",
      "position": "\u51AC\u5385\u540E\u4FA7\u4E00\u6761\u5B89\u9759\u8857\u9053",
      "description": "\u666E\u901A\u5BA2\u623F\u3001\u9910\u98DF\u3001\u996E\u54C1\u3001\u70ED\u6C34\u3001\u6D17\u70D8\u4E0E\u884C\u674E\u5BC4\u653E"
    },
    "LOC-NOR-005": {
      "name": "\u4F0A\u5C14\u74E6\u6069\u6E56",
      "region": "REG-12",
      "position": "\u9547\u5317\u7EA6 9 \u516C\u91CC\u62B5\u8FBE\u5357\u5CB8",
      "description": "\u957F\u7EA6 24 \u516C\u91CC\u3001\u6700\u5BBD\u7EA6 8 \u516C\u91CC\u7684\u6E56\uFF0C\u5BD2\u5B63\u51B0\u9762\u4E0E\u6696\u5B63\u5F00\u6C34\u5404\u6709\u666F\u8272"
    },
    "LOC-NOR-006": {
      "name": "\u7EF4\u65AF\u5854\u89C2\u666F\u53F0",
      "region": "REG-12",
      "position": "\u9547\u4E1C\u5317\u7EA6 5 \u516C\u91CC\u7684\u4F4E\u4E18",
      "description": "\u9646\u4E0A\u6781\u5149\u89C2\u666F\u70B9\u3001\u5C0F\u578B\u89C2\u6D4B\u5C4B\u548C\u907F\u98CE\u68DA"
    },
    "LOC-NOR-007": {
      "name": "\u6258\u5C14\u8D5B\u6069\u5DE8\u77F3\u5ECA",
      "region": "REG-12",
      "position": "\u9547\u4E1C\u7EA6 26 \u516C\u91CC\u7684\u652F\u7EBF",
      "description": "\u53E4\u8001\u77F3\u677F\u8986\u76D6\u7684\u957F\u5ECA\u3001\u6B8B\u5899\u4E0E\u9732\u5929\u6BB5\uFF0C\u516C\u5171\u7EF4\u62A4\u8DEF\u548C\u6DF1\u96EA\u6BB5\u5206\u5F00"
    },
    "LOC-NOR-008": {
      "name": "\u8FBE\u5C14\u7EB3\u6CB3\u6BB5",
      "region": "REG-12",
      "position": "\u9547\u65C1\u81F3\u4E1C\u5357\u6D45\u8C37",
      "description": "\u63A5\u6E56\u6C34\u7684\u5F53\u5730\u6CB3\u9053\u3001\u5CB8\u8DEF\u3001\u6E14\u4EBA\u6CCA\u4F4D\u4E0E\u5B63\u8282\u6E21\u8FD0"
    },
    "LOC-NOR-009": {
      "name": "\u827E\u6587\u8D6B\u907F\u98CE\u9A7F",
      "region": "REG-12",
      "position": "\u9547\u4E1C\u5357\u7EA6 42 \u516C\u91CC\uFF0C\u5728\u53BB\u74E6\u8428\u6069\u7684\u6B63\u5F0F\u9053\u8DEF\u4E0A",
      "description": "\u5BA2\u5E8A\u3001\u70ED\u98DF\u3001\u5750\u9A91\u7167\u7BA1\u4E0E\u6709\u9650\u8865\u7ED9\uFF0C\u89C4\u6A21\u4E3A\u9A7F\u7AD9"
    },
    "LOC-NOR-010": {
      "name": "\u7F57\u5FB7\u5170\u7EC7\u4F5C\u9662",
      "region": "REG-12",
      "position": "\u9547\u5185\u9760\u8FD1\u51AC\u5385\u7684\u5C45\u6C11\u8857",
      "description": "\u7EC7\u574A\u3001\u88C1\u7247\u95F4\u4E0E\u6309\u7EA6\u5B9A\u5F00\u653E\u7684\u4FEE\u8865\u6559\u5B66"
    },
    "LOC-VAS-001": {
      "name": "\u5965\u5C14\u745F\u59C6",
      "region": "REG-13",
      "position": "\u74E6\u8428\u6069\u5357\u90E8\u8C37\u53E3\uFF0C\u516C\u56FD\u8F96\u5185\u7684\u4E3B\u8981\u843D\u811A\u9547",
      "description": "\u666E\u901A\u5E38\u8BBE\u5546\u94FA\u3001\u6E29\u6CC9\u98DF\u5BBF\u3001\u9676\u4E1A\u3001\u6E29\u5BA4\u8D38\u6613\u4E0E\u8F6C\u8FD0"
    },
    "LOC-VAS-002": {
      "name": "\u5965\u5C14\u745F\u59C6\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "region": "REG-13",
      "position": "\u9547\u5185\u9760\u8FD1\u8F6C\u8FD0\u8857",
      "description": "\u6709\u507F\u5DE5\u4F5C\u3001\u8DEF\u7EBF\u4E0E\u6E29\u6CC9\u5C71\u5730\u7684\u4E13\u4E1A\u670D\u52A1\u4FE1\u606F"
    },
    "LOC-VAS-003": {
      "name": "\u8D39\u4F26\u9676\u5E02",
      "region": "REG-13",
      "position": "\u9547\u5185\u76F8\u8FDE\u7684\u94FA\u9762\u3001\u5ECA\u68DA\u4E0E\u7A91\u574A\u524D\u9662",
      "description": "\u666E\u901A\u5546\u8857\u3001\u9676\u5668\u5C55\u67B6\u3001\u65E5\u5E38\u98DF\u54C1\u548C\u5DE5\u827A\u4F53\u9A8C"
    },
    "LOC-VAS-004": {
      "name": "\u7F57\u8587\u5A1C\u6E29\u6CC9\u9662",
      "region": "REG-13",
      "position": "\u9547\u8FB9\u6709\u7A33\u5B9A\u5F15\u6C34\u7684\u9662\u843D",
      "description": "\u666E\u901A\u5BA2\u623F\u3001\u9910\u98DF\u3001\u6D17\u8863\u4E0E\u5206\u522B\u7BA1\u7406\u7684\u516C\u5171\u6C60\u3001\u72EC\u7ACB\u6D74\u95F4"
    },
    "LOC-VAS-005": {
      "name": "\u739B\u745F\u6069\u6E29\u5BA4\u7FA4",
      "region": "REG-13",
      "position": "\u9547\u5916\u7EA6 4 \u516C\u91CC\u7684\u53D7\u7EF4\u62A4\u6696\u8C37",
      "description": "\u5730\u70ED\u8F85\u52A9\u4F9B\u6696\u7684\u56ED\u5703\u3001\u80B2\u82D7\u5E8A\u548C\u9884\u7EA6\u53C2\u89C2\u8DEF\u5F84"
    },
    "LOC-VAS-006": {
      "name": "\u5E03\u96F7\u6069\u6751",
      "region": "REG-13",
      "position": "\u5965\u5C14\u745F\u59C6\u4EE5\u5317\u7EA6 86 \u516C\u91CC\u7684\u81EA\u6CBB\u8C37\u5730\uFF0C\u5728\u5317\u6765\u4E3B\u8DEF\u4E0A",
      "description": "\u5317\u90E8\u6751\u843D\u751F\u6D3B\u3001\u77ED\u4F4F\u3001\u57FA\u7840\u8865\u7ED9\u4E0E\u6751\u6C11\u8BAE\u4E8B"
    },
    "LOC-VAS-007": {
      "name": "\u5361\u5C14\u7EF4\u65AF\u706B\u5C71",
      "region": "REG-13",
      "position": "\u5965\u5C14\u745F\u59C6\u4E1C\u5317\u7EA6 58 \u516C\u91CC\u7684\u5C71\u4F53",
      "description": "\u9ED1\u8272\u5C71\u810A\u3001\u96EA\u7EBF\u3001\u84B8\u6C14\u548C\u6D3B\u52A8\u88C2\u9699\uFF0C\u55B7\u53E3\u4F4D\u4E8E\u666E\u901A\u8DEF\u7EBF\u4E4B\u5916"
    },
    "LOC-VAS-008": {
      "name": "\u4F0A\u65AF\u5FB7\u62C9\u9ED1\u5CA9\u9636\u5730",
      "region": "REG-13",
      "position": "\u9547\u4E1C\u7EA6 16 \u516C\u91CC\u7684\u652F\u7EBF",
      "description": "\u591A\u5C42\u67F1\u72B6\u5CA9\u58C1\u3001\u6247\u5F62\u77F3\u9636\u4E0E\u6709\u7EF4\u62A4\u7684\u8FDC\u89C2\u8DEF\u5F84"
    },
    "LOC-VAS-009": {
      "name": "\u5854\u7EF4\u6069\u6696\u6EAA",
      "region": "REG-13",
      "position": "\u9547\u897F\u7EA6 6 \u516C\u91CC\u7684\u4FA7\u8C37",
      "description": "\u70ED\u6CC9\u4E0E\u51B7\u6C34\u9010\u6BB5\u6C47\u5408\u7684\u6EAA\u6D41\u3001\u96FE\u6C14\u3001\u971C\u53F6\u548C\u5CB8\u4E0A\u6B65\u9053"
    },
    "LOC-VAS-010": {
      "name": "\u7EF4\u6D1B\u65AF\u5CA9\u53F0",
      "region": "REG-13",
      "position": "\u5E03\u96F7\u6069\u6751\u4EE5\u4E1C\u7EA6 17 \u516C\u91CC\u7684\u9AD8\u5904\u652F\u7EBF",
      "description": "\u9AD8\u5904\u652F\u7EBF\u5C3D\u5934\u7684\u5F00\u9614\u5CA9\u53F0\uFF0C\u6309\u5B9E\u9645\u8DEF\u51B5\u901A\u884C"
    },
    "LOC-VAS-011": {
      "name": "\u5FB7\u5C14\u6587\u89C2\u706B\u53F0",
      "region": "REG-13",
      "position": "\u9547\u4E1C\u5317\u7EA6 21 \u516C\u91CC\uFF0C\u901A\u5F80\u706B\u5C71\u65B9\u5411\u7684\u7A33\u5B9A\u5CA9\u810A",
      "description": "\u5C71\u4F53\u548C\u6D3B\u52A8\u88C2\u9699\u89C2\u6D4B\u53F0\uFF0C\u5F00\u653E\u53D7\u5929\u6C14\u5F71\u54CD"
    },
    "LOC-EST-001": {
      "name": "\u54C8\u5C14\u7EF4\u65AF",
      "region": "REG-14",
      "position": "\u827E\u65AF\u5854\u6069\u897F\u4FA7\u5185\u9646\u4F4E\u5730\uFF0C\u516C\u56FD\u9996\u5E9C",
      "description": "\u4E24\u6761\u9646\u8DEF\u6C47\u5165\u7684\u4E3B\u8981\u843D\u811A\u57CE\uFF0C\u5E02\u573A\u3001\u5DE5\u574A\u3001\u4E66\u5377\u3001\u6F14\u51FA\u4E0E\u5C45\u6C11\u751F\u6D3B"
    },
    "LOC-EST-002": {
      "name": "\u54C8\u5C14\u7EF4\u65AF\u5192\u9669\u5BB6\u534F\u4F1A\u5206\u4F1A",
      "region": "REG-14",
      "position": "\u57CE\u5185\u9760\u8FD1\u8F66\u9A6C\u8F6C\u8FD0\u8857",
      "description": "\u6709\u507F\u5DE5\u4F5C\u3001\u5730\u65B9\u95EE\u8BAF\u4E0E\u8DE8\u57CE\u4EA4\u63A5"
    },
    "LOC-EST-003": {
      "name": "\u827E\u5FB7\u6E29\u62F1\u5ECA",
      "region": "REG-14",
      "position": "\u9996\u5E9C\u5E02\u573A\u65C1\u7684\u76F8\u8FDE\u5546\u8857",
      "description": "\u6709\u906E\u96E8\u5ECA\u7684\u56FA\u5B9A\u5E97\u94FA\uFF0C\u4E66\u5377\u3001\u8863\u7269\u3001\u98DF\u54C1\u4E0E\u624B\u5DE5\u827A"
    },
    "LOC-EST-004": {
      "name": "\u739B\u8482\u5C14\u8FBE\u65C5\u9986",
      "region": "REG-14",
      "position": "\u9996\u5E9C\u4E00\u6761\u8F83\u5B89\u9759\u7684\u5C45\u6C11\u8857",
      "description": "\u666E\u901A\u5BA2\u623F\u3001\u9910\u98DF\u3001\u9152\u9986\u5EA7\u5E2D\u3001\u6D17\u8863\u4E0E\u884C\u674E\u5BC4\u653E"
    },
    "LOC-EST-005": {
      "name": "\u7EF4\u5C14\u745F\u9547",
      "region": "REG-14",
      "position": "\u54C8\u5C14\u7EF4\u65AF\u4EE5\u4E1C\u7EA6 92 \u516C\u91CC\uFF0C\u5D16\u5CB8\u540E\u65B9\u7F13\u5761",
      "description": "\u7267\u4E1A\u3001\u5730\u65B9\u5546\u94FA\u3001\u5BA2\u820D\u4E0E\u957F\u4F4F\u9662\u843D"
    },
    "LOC-EST-006": {
      "name": "\u7EF4\u5C14\u745F\u5192\u9669\u5BB6\u534F\u4F1A",
      "region": "REG-14",
      "position": "\u9547\u5185\u5E02\u573A\u5165\u53E3\u65C1",
      "description": "\u81EA\u9009\u73B0\u91D1\u5DE5\u4F5C\u3001\u7267\u573A\u4E0E\u6CBF\u5D16\u9053\u8DEF\u6D88\u606F"
    },
    "LOC-EST-007": {
      "name": "\u7F57\u745F\u7433\u5BA2\u820D",
      "region": "REG-14",
      "position": "\u7EF4\u5C14\u745F\u9760\u8FD1\u51FA\u9547\u9053\u8DEF\u7684\u80CC\u98CE\u8857",
      "description": "\u98DF\u5BBF\u3001\u70ED\u996E\u3001\u6D17\u8863\u3001\u77ED\u4F4F\u4E0E\u957F\u671F\u6761\u4EF6\u8BE2\u95EE"
    },
    "LOC-EST-008": {
      "name": "\u827E\u6587\u91CC\u7267\u573A",
      "region": "REG-14",
      "position": "\u7EF4\u5C14\u745F\u4EE5\u5357\u7EA6 6 \u516C\u91CC\u7684\u652F\u8DEF",
      "description": "\u653E\u7267\u3001\u7F8A\u6BDB\u3001\u5976\u916A\u3001\u77F3\u5899\u4E0E\u6309\u7EA6\u5F00\u653E\u7684\u8BBF\u5BA2\u5C0F\u5F84"
    },
    "LOC-EST-009": {
      "name": "\u6CD5\u5C14\u6E29\u65E7\u5821",
      "region": "REG-14",
      "position": "\u7EF4\u5C14\u745F\u4EE5\u5317\u7EA6 12 \u516C\u91CC\u7684\u8349\u5761",
      "description": "\u65E7\u9A7F\u9632\u5EFA\u7B51\u3001\u9662\u5899\u3001\u96E8\u5ECA\u53CA\u5730\u65B9\u4FDD\u5B58\u8BB0\u5F55"
    },
    "LOC-EST-010": {
      "name": "\u8D1D\u4F26\u7EB3\u6E2F\u6751",
      "region": "REG-14",
      "position": "\u54C8\u5C14\u7EF4\u65AF\u897F\u5357\u7EA6 38 \u516C\u91CC\u7684\u666E\u901A\u6D77\u6E7E",
      "description": "\u5C0F\u578B\u6CBF\u5CB8\u5BA2\u8D27\u8239\u3001\u6E14\u4E1A\u3001\u4E0A\u5CB8\u8F6C\u8F66\u4E0E\u6709\u9650\u6751\u5185\u8865\u7ED9"
    },
    "LOC-EST-011": {
      "name": "\u83B1\u65AF\u6587\u6D77\u5D16",
      "region": "REG-14",
      "position": "\u7EF4\u5C14\u745F\u897F\u5357\u7EA6 18 \u516C\u91CC\u7684\u652F\u7EBF\uFF0C\u5728\u5F02\u5E38\u5CAC\u5CB8\u4EE5\u5916",
      "description": "\u6709\u666E\u901A\u6D77\u6D6A\u7684\u767D\u7070\u8272\u5CA9\u58C1\u3001\u6D77\u9E1F\u3001\u8349\u5761\u4E0E\u6CBF\u5D16\u6B65\u9053"
    },
    "LOC-EST-012": {
      "name": "\u4F0A\u65AF\u5854\u7EF4\u5C14\u5CAC",
      "region": "REG-14",
      "position": "\u7EF4\u5C14\u745F\u5411\u4E1C\u7684\u5CAC\u89D2\uFF0C\u6CBF\u5CB8\u7EA6 6 \u516C\u91CC\u7684\u4E00\u6BB5\u5F02\u5E38\u5D16\u58C1",
      "description": "\u661F\u6D77\u4E4B\u5CB8\u6240\u5728\u5730\uFF1B\u5D16\u5916\u4E3A\u5012\u60AC\u661F\u6D77\uFF0C\u5165\u591C\u53EF\u89C1\u661F\u6865"
    },
    "LOC-EST-013": {
      "name": "\u5965\u5C14\u5FB7\u89C2\u666F\u9636\u5730",
      "region": "REG-14",
      "position": "\u7EF4\u5C14\u745F\u5411\u4E1C\u7EA6 9 \u516C\u91CC\uFF0C\u4F4D\u4E8E\u4F0A\u65AF\u5854\u7EF4\u5C14\u5CAC\u7684\u9646\u5730\u4E00\u4FA7",
      "description": "\u5BBD\u9614\u77F3\u5730\u3001\u4F4E\u5899\u3001\u907F\u98CE\u4EAD\u4E0E\u89C2\u666F\u6B65\u9053\uFF0C\u524D\u65B9\u5929\u7136\u5CA9\u5507\u53EF\u671B\u89C1\u661F\u6865\u8D77\u70B9"
    },
    "LOC-EST-014": {
      "name": "\u57C3\u5F17\u987F\u5EAD\u9662",
      "region": "REG-14",
      "position": "\u7EF4\u5C14\u745F\u9547\u5185\u7684\u5C45\u6C11\u8857",
      "description": "\u51E0\u95F4\u53EF\u8BE2\u79DF\u7684\u623F\u5C4B\u3001\u5C0F\u53A8\u623F\u3001\u5171\u7528\u667E\u6652\u5904\u4E0E\u90BB\u91CC\u751F\u6D3B"
    },
    "LOC-EST-015": {
      "name": "\u96F7\u5FB7\u6E29\u5267\u9662",
      "region": "REG-14",
      "position": "\u54C8\u5C14\u7EF4\u65AF\u62F1\u5ECA\u5916\u4FA7\u7684\u8857\u533A",
      "description": "\u5BA4\u5185\u6F14\u51FA\u3001\u5C0F\u578B\u4E50\u4F1A\u3001\u5E03\u666F\u4F5C\u574A\u4E0E\u81EA\u9009\u5E55\u540E\u5DE5\u4F5C"
    }
  };

  // src/ui/place-headings.mjs
  var PREFIXES = {
    "LOC-VIR-003": "\u8FBE\u4F26\u798F\u5FB7",
    "LOC-VIR-006": "\u963F\u65AF\u7279\u5C14",
    "LOC-VIR-009": "\u8FBE\u4F26\u798F\u5FB7",
    "LOC-SER-002": "\u8D1D\u5C14\u8499\u7279",
    "LOC-ALV-001": "\u963F\u5C14\u7EF4\u514B",
    "LOC-ALV-002": "\u963F\u5C14\u7EF4\u514B",
    "LOC-CAD-002": "\u8D1D\u8428\u5C14\u6E2F",
    "LOC-HOR-002": "\u4E4C\u5C14\u8FBE\u514B",
    "LOC-BRE-002": "\u79D1\u5C14\u74E6\u6069",
    "LOC-DUR-002": "\u6258\u5C14\u6587",
    "LOC-VIS-002": "\u5E03\u4F26\u7EF4\u5C14",
    "LOC-LOS-002": "\u6885\u745E\u767B",
    "LOC-LOS-009": "\u827E\u6587\u8FBE",
    "LOC-LOS-012": "\u4F0A\u745F\u6587",
    "LOC-ESK-002": "\u5FB7\u5170\u745F",
    "LOC-SOL-002": "\u8428\u7EF4\u5170",
    "LOC-SOL-004": "\u74E6\u4F26\u5A1C",
    "LOC-SOL-005": "\u963F\u7EF4\u745F\u5C14",
    "LOC-NOR-002": "\u8D6B\u5C14\u65AF\u5854\u5FB7",
    "LOC-NOR-007": "\u6258\u5C14\u8D5B\u6069",
    "LOC-VAS-002": "\u5965\u5C14\u745F\u59C6",
    "LOC-VAS-008": "\u4F0A\u65AF\u5FB7\u62C9",
    "LOC-EST-002": "\u54C8\u5C14\u7EF4\u65AF",
    "LOC-EST-006": "\u7EF4\u5C14\u745F",
    "LOC-EST-013": "\u5965\u5C14\u5FB7"
  };
  function placeHeading(place) {
    const full = place?.name ?? "", prefix = PREFIXES[place?.id];
    return prefix && full.startsWith(prefix) && full.length > prefix.length ? { full, main: prefix, detail: full.slice(prefix.length) } : { full, main: full, detail: "" };
  }

  // src/ui/map-directory.mjs
  var instances = 0;
  var regions = atlas_default.regions;
  var knownRegion = (id) => regions.some((r) => r.id === id);
  var clean = (v) => (typeof v === "string" ? v : "\u8D44\u6599\u5F85\u8865\u3002").replace(/\bREG-\d{2}\b/g, (id) => WORLD.regions[id]?.name ?? id);
  var short = (value, max = 52) => {
    const text2 = clean(value);
    return text2.length > max ? text2.slice(0, max) + "\u2026" : text2;
  };
  function createMapDirectory(c) {
    const { node: node3, button: button2, icon: icon3, content, assets } = c, menuId = "xh-atlas-regions-" + ++instances;
    let menuOpen = false, mobileSection = "overview", mobileRegionPage = 0, mobilePlaceTab = "note", mobileRegionTab = "sight";
    const compact = () => c.isMobileDirectory?.() === true;
    const phone = () => compact() || c.mobilePreview === true && c.isMobile?.() === true;
    const box = (e, r) => position(e, r), label = (tag, text2, cls = "") => node3(tag, text2, cls);
    function placeTitle(tag, place, cls) {
      const parts = placeHeading(place), title = label(tag, parts.full, cls);
      title.title = parts.full;
      if (parts.detail) {
        title.dataset.split = "true";
        title.setAttribute("aria-label", parts.full);
        title.replaceChildren(label("span", parts.main, "xh-atlas-title-main"), label("span", parts.detail, "xh-atlas-title-detail"));
      }
      return title;
    }
    const art2 = (key, r, holes = [], cls = "") => originalWindow(key, r, holes, cls, assets, [], false);
    const focus = (key) => {
      const all = [...content.querySelectorAll("[data-atlas-focus]")], pair = key?.endsWith("-next") ? key.replace(/-next$/, "-prev") : key?.endsWith("-prev") ? key.replace(/-prev$/, "-next") : null;
      (all.find((e) => e.dataset.atlasFocus === key && !e.disabled) ?? all.find((e) => e.dataset.atlasFocus === pair && !e.disabled) ?? all.find((e) => e.dataset.atlasFocus === "region-picker"))?.focus();
    };
    function update(run, key) {
      run();
      c.render();
      focus(key);
    }
    function control(text2, run, cls, key, ico) {
      const e = button2(text2, run, ico, cls);
      if (key) e.dataset.atlasFocus = key;
      return e;
    }
    function theme(e, id) {
      const t = MAP_THEMES[id];
      e.dataset.atlasTheme = t.key;
      e.style.setProperty("--atlas-accent", t.accent);
      e.style.setProperty("--atlas-wash", t.wash);
      e.style.setProperty("--atlas-radius", t.radius);
      return t;
    }
    const placesIn = (rid, s) => [...Object.entries(WORLD.places).filter(([, v]) => v.region === rid).map(([id, v]) => ({ id, ...v, ...PLACE_DETAILS[id] })), ...Object.entries(s?.\u73A9\u6CD5?.\u5C0F\u5730\u70B9 ?? {}).filter(([, v]) => v.\u5730\u533A === rid).map(([id, v]) => ({ id, name: v.\u540D\u79F0, region: rid, description: v.\u7279\u5F81, position: "\u6240\u5C5E\u5730\u70B9\uFF1A" + placeName(v.\u6240\u5C5E\u5730\u70B9, s) }))];
    function status(s, id) {
      return id === s.\u573A\u666F.\u5730\u70B9 ? "\u5F53\u524D\u4F4D\u7F6E" : s.\u65C5\u7A0B?.\u5230\u8BBF?.[id] ? "\u5DF2\u5230\u8BBF" : "\u5730\u56FE\u53EF\u77E5 \xB7 \u5C1A\u672A\u5230\u8BBF";
    }
    function selectedRegion(rid) {
      menuOpen = false;
      mobileSection = "overview";
      c.view.map.region = rid;
      c.view.map.directoryMode = "overview";
      c.view.map.placePage = 0;
      c.view.map.relatedPage = 0;
      c.open("map-directory", rid);
      focus("region-picker");
    }
    function selectPlace(id, rid, places) {
      update(() => {
        if (phone()) {
          mobileSection = "place";
          mobilePlaceTab = "note";
        }
        c.view.map.place = id;
        c.view.map.directoryMode = "place";
        c.view.map.region = rid;
        c.view.map.placePage = Math.floor(places.findIndex((p) => p.id === id) / 6);
        c.view.map.relatedPage = 0;
      }, "place:" + id);
    }
    function image(info, cls) {
      const frame = node3("span", void 0, "xh-atlas-image " + cls);
      if (!info) {
        frame.append(icon3("map"));
        frame.dataset.imageMissing = "true";
        return frame;
      }
      const img = node3("img");
      img.src = info.src;
      img.alt = "";
      img.draggable = false;
      img.decoding = "async";
      img.loading = "lazy";
      img.addEventListener("error", () => {
        frame.replaceChildren(icon3("map"));
        frame.dataset.imageMissing = "true";
        assets.__onArtError?.();
      }, { once: true });
      frame.dataset.imageKind = info.kind;
      frame.append(img);
      if (info.kind === "region") frame.append(label("small", "\u5730\u533A\u98CE\u666F", "xh-atlas-image-origin"));
      return frame;
    }
    function regionPicture(rid) {
      for (const catalogue of c.getRegionImages?.() ?? []) {
        const src = skillImageURL(catalogue?.[rid]);
        if (src) return { src, kind: "region", label: "\u5730\u533A\u666F\u89C2\u914D\u56FE" };
      }
      const r = REGION_ART[rid];
      return { src: assets["original-" + r.asset] ?? "assets/original/" + r.file, kind: "region", label: "\u5730\u533A\u666F\u89C2\u793A\u610F" };
    }
    const placePicture = (id, rid) => resolvePlaceArt(id, rid, c.getPlaceImages?.() ?? [], assets, c.getRegionImages?.() ?? []);
    function pager(prevLabel, nextLabel, page, count, run, key, cls) {
      const nav = node3("nav", void 0, cls);
      nav.setAttribute("aria-label", key === "place-page" ? "\u672C\u533A\u5730\u70B9\u5206\u9875" : "\u5730\u70B9\u5361\u7247\u5206\u9875");
      const prev = control(prevLabel, () => update(() => run(page - 1), key + "-prev"), "xh-atlas-page-button", key + "-prev", "arrow"), next = control(nextLabel, () => update(() => run(page + 1), key + "-next"), "xh-atlas-page-button", key + "-next", "arrow");
      prev.disabled = page === 0;
      next.disabled = page === count - 1;
      nav.append(prev, label("span", page + 1 + " / " + count), next);
      return nav;
    }
    function regionMenu(page, rid) {
      const menu = box(node3("section", void 0, "xh-atlas-region-menu"), [24, 193, 660, 546]);
      menu.id = menuId;
      menu.setAttribute("aria-label", "\u5207\u6362\u5730\u533A");
      const h = node3("div", void 0, "xh-atlas-menu-heading");
      h.append(label("h2", "\u9009\u62E9\u5730\u533A"), control("\u5173\u95ED\u5730\u533A\u9009\u62E9", () => update(() => menuOpen = false, "region-picker"), "xh-atlas-menu-close", null, "close"));
      menu.append(h);
      const list = node3("nav", void 0, "xh-atlas-region-options");
      list.setAttribute("aria-label", "\u5341\u56DB\u5730\u533A");
      const controls = [];
      regions.forEach((r, i) => {
        const b = control(r.name, () => selectedRegion(r.id), "xh-atlas-region-option xh-atlas-themed-button", "region:" + r.id);
        theme(b, r.id);
        b.setAttribute("aria-pressed", String(rid === r.id));
        b.dataset.atlasRegion = r.id;
        b.replaceChildren(image(regionPicture(r.id), ""), icon3(MAP_THEMES[r.id].icon), label("span", r.name));
        b.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            update(() => menuOpen = false, "region-picker");
            return;
          }
          let j = e.key === "Home" ? 0 : e.key === "End" ? regions.length - 1 : e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "ArrowDown" ? i + 2 : e.key === "ArrowUp" ? i - 2 : null;
          if (j !== null) {
            e.preventDefault();
            controls[Math.max(0, Math.min(regions.length - 1, j))]?.focus();
          }
        });
        controls.push(b);
        list.append(b);
      });
      menu.append(list);
      page.append(menu);
    }
    function sidebar(page, s, rid, places, selected, overview) {
      const saved = c.view.map, count = Math.max(1, Math.ceil(places.length / 6));
      saved.placePage = Math.max(0, Math.min(count - 1, saved.placePage ?? 0));
      const panel = box(node3("aside", void 0, "xh-atlas-sidebar"), [16, 94, 321, 714]);
      panel.append(art2(MAP_DIRECTORY_REFERENCE.art, [16, 94, 321, 714], [[38, 108, 290, 82], [29, 201, 286, 56], [27, 280, 291, 449]], "xh-atlas-panel-frame"));
      const roman = regions.find((r) => r.id === rid).source.split("_").slice(1).join(" ").replace(/\.md$/, "").toLowerCase().replace(/^\w/, (s2) => s2.toUpperCase());
      const pick = box(control("\u5207\u6362\u5730\u533A\uFF1A" + regionName(rid), () => update(() => menuOpen = !menuOpen, "region-picker"), "xh-atlas-region-picker xh-atlas-themed-button", "region-picker"), [9, 7, 305, 87]);
      pick.setAttribute("aria-expanded", String(menuOpen));
      pick.setAttribute("aria-controls", menuId);
      pick.replaceChildren(icon3(MAP_THEMES[rid].icon), label("span", regionName(rid)), label("span", roman, "xh-atlas-script"), icon3("arrow"));
      panel.append(pick);
      const overviewButton = box(control("\u5730\u533A\u6982\u89C8", () => update(() => {
        saved.directoryMode = "overview";
        saved.relatedPage = 0;
      }, "overview"), "xh-atlas-overview-button xh-atlas-themed-button", "overview", MAP_THEMES[rid].icon), [13, 107, 285, 55]);
      overviewButton.setAttribute("aria-pressed", String(overview));
      if (overview) overviewButton.setAttribute("aria-current", "page");
      panel.append(overviewButton, box(label("h2", "\u672C\u533A\u5730\u70B9", "xh-atlas-index-heading"), [27, 184, 270, 28]));
      const list = box(node3("nav", void 0, "xh-atlas-place-index"), [16, 219, 287, 412]);
      list.setAttribute("aria-label", regionName(rid) + "\u7684\u5730\u70B9");
      for (const p of places.slice(saved.placePage * 6, saved.placePage * 6 + 6)) {
        const active = !overview && selected?.id === p.id, b = control("\u67E5\u770B\u5730\u70B9\uFF1A" + p.name, () => selectPlace(p.id, rid, places), "xh-atlas-place-option xh-atlas-themed-button", "place:" + p.id);
        b.dataset.atlasPlace = p.id;
        b.setAttribute("aria-pressed", String(active));
        if (active) b.setAttribute("aria-current", "page");
        b.replaceChildren(image(placePicture(p.id, rid), ""));
        const copy2 = node3("span", void 0, "xh-atlas-place-label");
        copy2.append(placeTitle("strong", p, ""));
        if (p.id === s.\u573A\u666F.\u5730\u70B9 || s.\u65C5\u7A0B?.\u5230\u8BBF?.[p.id]) {
          const current = p.id === s.\u573A\u666F.\u5730\u70B9, badge = label("small", status(s, p.id), current ? "xh-atlas-current" : "xh-atlas-visited");
          badge.prepend(icon3(current ? "pin" : "check"));
          copy2.append(badge);
        }
        b.append(copy2);
        b.title = p.name + " \xB7 " + status(s, p.id);
        list.append(b);
      }
      panel.append(list);
      if (count > 1) panel.append(box(pager("\u4E0A\u4E00\u9875\u5730\u70B9", "\u4E0B\u4E00\u9875\u5730\u70B9", saved.placePage, count, (p) => saved.placePage = p, "place-page", "xh-atlas-index-pagination"), [28, 639, 265, 34]));
      page.append(panel);
    }
    function infoCard(title, value, ico, r) {
      const d = box(node3("details", void 0, "xh-atlas-info-card"), r), summary = node3("summary");
      summary.append(icon3(ico), label("strong", title), label("span", short(value, 46)), label("small", "\u9605\u8BFB\u5168\u6587"));
      d.append(summary, label("p", clean(value)));
      return d;
    }
    function related(page, s, rid, places, selected, overview) {
      let pool = places.filter((p) => p.id !== selected?.id);
      if (rid === "REG-02") {
        const ids = overview ? ["LOC-SER-001", "LOC-SER-004", "LOC-SER-005"] : ["LOC-SER-003", "LOC-SER-004", "LOC-SER-005"];
        pool = [...ids.map((id) => pool.find((p) => p.id === id)).filter(Boolean), ...pool.filter((p) => !ids.includes(p.id))];
      }
      const saved = c.view.map, count = Math.max(1, Math.ceil(pool.length / 3));
      saved.relatedPage = Math.max(0, Math.min(count - 1, saved.relatedPage ?? 0));
      page.append(box(label("h2", overview ? "\u672C\u533A\u7CBE\u9009\u5730\u70B9" : "\u672C\u533A\u5176\u4ED6\u5730\u70B9", "xh-atlas-related-heading"), [377, 609, 600, 34]));
      if (count > 1) page.append(box(pager("\u4E0A\u4E00\u7EC4\u5730\u70B9\u5361\u7247", "\u4E0B\u4E00\u7EC4\u5730\u70B9\u5361\u7247", saved.relatedPage, count, (p) => saved.relatedPage = p, "related-page", "xh-atlas-related-pagination"), [1594, 611, 200, 29]));
      const boxes = [[361, 646, 434, 157], [818, 646, 447, 157], [1291, 646, 503, 157]];
      pool.slice(saved.relatedPage * 3, saved.relatedPage * 3 + 3).forEach((p, i) => {
        const info = placePicture(p.id, rid), card = box(control("\u67E5\u770B\u5730\u70B9\uFF1A" + p.name, () => selectPlace(p.id, rid, places), "xh-atlas-related-card", "card:" + p.id), boxes[i]);
        card.dataset.atlasRelated = p.id;
        card.replaceChildren(image(info, ""));
        const copy2 = node3("span", void 0, "xh-atlas-related-copy");
        copy2.dataset.split = String(!!placeHeading(p).detail);
        copy2.append(placeTitle("strong", p, ""), label("span", short(p.description, 34), "xh-atlas-card-description"), label("small", p.id === s.\u573A\u666F.\u5730\u70B9 ? "\u5F53\u524D\u4F4D\u7F6E" : info?.label ?? "\u914D\u56FE\u5F85\u8865", "xh-atlas-scene-label"), label("b", "\u67E5\u770B\u5730\u70B9"));
        card.append(copy2);
        card.title = p.name + "\n" + clean(p.position) + "\n" + clean(p.description);
        page.append(card);
      });
    }
    function mobileFrame(parent) {
      parent.style.isolation = "isolate";
      parent.prepend(paperFrame(assets, "xh-mobile-atlas-border"));
      return parent;
    }
    function mobileOrnament(rid, cls) {
      const t = MAP_THEMES[rid];
      if (t.ornament) {
        const size = c.getOrnamentSize?.(t.ornament) ?? [1536, 1024];
        return art2(t.ornament, [0, 0, ...size], [], cls);
      }
      return art2(MAP_DIRECTORY_REFERENCE.art, [532, 476, 105, 114], [], cls);
    }
    function mobileTitle(title, rid, subtitle = "", place = null) {
      const pane = node3("section", void 0, "xh-mobile-atlas-title-panel"), roman = regions.find((r) => r.id === rid).source.split("_").slice(1).join(" ").replace(/\.md$/, "").toLowerCase().replace(/^\w/, (s) => s.toUpperCase());
      const heading = place ? placeTitle("h2", place, "xh-atlas-title") : label("h2", title, "xh-atlas-title");
      if (compact()) {
        if (!placeHeading(place).detail) heading.style.fontSize = Math.max(30, Math.min(43, 700 / title.length)) + "px";
        pane.append(icon3(MAP_THEMES[rid].icon), heading);
        if (subtitle) pane.append(label("p", subtitle, "xh-mobile-atlas-title-script"));
        return pane;
      }
      pane.append(mobileOrnament(rid, "xh-mobile-atlas-title-ornament"), heading, label("p", subtitle || roman, "xh-mobile-atlas-title-script"));
      mobileFrame(pane);
      return pane;
    }
    function mobilePager(prevLabel, nextLabel, page, count, run, key) {
      const nav = pager(prevLabel, nextLabel, page, count, run, key, "xh-atlas-index-pagination");
      for (const b of nav.children) {
        if (b.tagName === "BUTTON") {
          const span = [...b.children].find((e) => e.tagName === "SPAN");
          if (span) span.textContent = b.dataset.atlasFocus.endsWith("prev") ? "\u4E0A\u4E00\u9875" : "\u4E0B\u4E00\u9875";
        }
      }
      return nav;
    }
    function mobileRegions(stage, rid, s) {
      const count = Math.ceil(regions.length / 6);
      mobileRegionPage = Math.max(0, Math.min(count - 1, mobileRegionPage));
      const menu = node3("section", void 0, "xh-atlas-region-menu");
      menu.id = menuId;
      menu.setAttribute("aria-label", "\u5207\u6362\u5730\u533A");
      const heading = node3("div", void 0, "xh-atlas-menu-heading"), back = compact() ? control("\u8FD4\u56DE\u5730\u533A", () => update(() => menuOpen = false, "region-picker"), "xh-atlas-back", "region-close", "arrow") : control("\u8FD4\u56DE\u5730\u56FE", () => {
        menuOpen = false;
        c.back();
      }, "xh-atlas-back", "region-close", "arrow");
      heading.append(back, label("h1", "\u9009\u62E9\u5730\u533A"));
      if (!compact()) heading.append(label("p", "\u5341\u56DB\u7247\u571F\u5730\uFF0C\u5341\u56DB\u6BB5\u65C5\u9014"));
      menu.append(heading);
      const list = node3("nav", void 0, "xh-atlas-region-options");
      list.setAttribute("aria-label", "\u5341\u56DB\u5730\u533A");
      for (const r of regions.slice(mobileRegionPage * 6, mobileRegionPage * 6 + 6)) {
        const b = control(r.name, () => selectedRegion(r.id), "xh-atlas-region-option xh-atlas-themed-button", "region:" + r.id);
        theme(b, r.id);
        b.dataset.atlasRegion = r.id;
        b.setAttribute("aria-pressed", String(rid === r.id));
        b.replaceChildren(image(regionPicture(r.id), ""), label("strong", r.name), label("small", REGION_ART[r.id].summary));
        if (s.\u573A\u666F.\u5730\u533A === r.id) b.append(label("span", "\u5F53\u524D\u5730\u533A", "xh-mobile-atlas-current-ribbon"));
        mobileFrame(b);
        list.append(b);
      }
      menu.append(list, mobilePager("\u4E0A\u4E00\u9875\u5730\u533A", "\u4E0B\u4E00\u9875\u5730\u533A", mobileRegionPage, count, (n) => mobileRegionPage = n, "region-page"));
      stage.append(menu);
    }
    function mobileToolbar(rid, selected) {
      const info = regions.find((r) => r.id === rid), bar = node3("div", void 0, "xh-mobile-atlas-heading");
      const back = selected ? control("\u8FD4\u56DE\u672C\u533A\u5730\u70B9", () => update(() => mobileSection = "places", "mobile-section:places"), "xh-atlas-back", "place-list", "arrow") : control("\u8FD4\u56DE\u5730\u56FE", () => {
        menuOpen = false;
        c.back();
      }, "xh-atlas-back", "back", "arrow");
      const pick = control("\u5207\u6362\u5730\u533A\uFF1A" + info.name, () => update(() => {
        menuOpen = true;
        mobileRegionPage = Math.floor(regions.findIndex((r) => r.id === rid) / 6);
      }, "region-picker"), "xh-atlas-region-picker xh-atlas-themed-button", "region-picker");
      pick.setAttribute("aria-expanded", "false");
      pick.setAttribute("aria-controls", menuId);
      pick.replaceChildren(label("span", info.name), icon3("arrow"));
      bar.append(back, pick);
      return bar;
    }
    function mobileTabs() {
      const nav = node3("nav", void 0, "xh-mobile-switch xh-atlas-mobile-tabs");
      nav.setAttribute("aria-label", "\u5730\u533A\u8BE6\u60C5\u5206\u533A");
      for (const [id, name, ico] of [["overview", "\u5730\u533A\u6982\u89C8", "compass"], ["places", "\u672C\u533A\u5730\u70B9", "pin"]]) {
        const b = control(name, () => update(() => {
          mobileSection = id;
          if (id === "overview") c.view.map.directoryMode = "overview";
        }, "mobile-section:" + id), "xh-atlas-themed-button", "mobile-section:" + id, ico);
        b.setAttribute("aria-pressed", String(id === "overview" ? mobileSection === "overview" : mobileSection !== "overview"));
        mobileFrame(b);
        nav.append(b);
      }
      return nav;
    }
    function mobileHero(shot) {
      const hero = node3("figure", void 0, "xh-atlas-hero");
      hero.append(image(shot, ""), label("figcaption", shot?.label ?? "\u914D\u56FE\u5F85\u8865"));
      mobileFrame(hero);
      return hero;
    }
    function mobileOverview(stage, info, rid) {
      stage.append(mobileTabs(), mobileTitle(info.name, rid), mobileHero(regionPicture(rid)), label("p", REGION_ART[rid].summary, "xh-atlas-subtitle"));
      const notes = node3("section", void 0, "xh-atlas-mobile-notes");
      notes.setAttribute("aria-label", "\u5730\u533A\u8D44\u6599");
      if (compact()) {
        const nav = node3("nav", void 0, "xh-atlas-note-tabs");
        nav.setAttribute("aria-label", "\u5730\u533A\u8D44\u6599\u5206\u7C7B");
        for (const [id, name, ico] of [["sight", "\u98CE\u666F", MAP_THEMES[rid].icon], ["life", "\u751F\u6D3B", "castle"], ["travel", "\u9053\u8DEF", "map"]]) {
          const b = control(name, () => update(() => mobileRegionTab = id, "region-note:" + id), "xh-atlas-note-tab", "region-note:" + id, ico);
          b.setAttribute("aria-pressed", String(mobileRegionTab === id));
          nav.append(b);
        }
        const copy2 = label("p", clean(info[mobileRegionTab]), "xh-atlas-note-copy");
        copy2.tabIndex = 0;
        copy2.setAttribute("aria-label", { sight: "\u5730\u533A\u98CE\u666F", life: "\u5730\u533A\u751F\u6D3B", travel: "\u5730\u533A\u9053\u8DEF" }[mobileRegionTab]);
        notes.append(nav, copy2);
        mobileFrame(notes);
        stage.append(notes);
        return;
      }
      const cards = [["\u98CE\u666F", info.sight, [659, 527, 66, 66]], ["\u751F\u6D3B", info.life, [1032, 526, 65, 68]], ["\u9053\u8DEF", info.travel, [1390, 528, 64, 67]]];
      for (const [title, value, rect] of cards) {
        const d = node3("details", void 0, "xh-atlas-info-card"), summary = node3("summary");
        summary.append(art2(MAP_DIRECTORY_REFERENCE.art, rect, [], "xh-mobile-atlas-info-art"), label("strong", title), label("span", title === "\u98CE\u666F" ? short(value, 36) : "", "xh-mobile-atlas-info-preview"), icon3("arrow"));
        mobileFrame(summary);
        d.append(summary, label("p", clean(value)));
        notes.append(d);
      }
      stage.append(notes);
    }
    function mobilePlaces(stage, s, info, rid, places) {
      const saved = c.view.map, count = Math.max(1, Math.ceil(places.length / 6));
      saved.placePage = Math.max(0, Math.min(count - 1, saved.placePage ?? 0));
      stage.append(mobileTabs(), mobileTitle(info.name + " \xB7 \u5730\u70B9", rid));
      const list = node3("nav", void 0, "xh-atlas-place-index");
      list.setAttribute("aria-label", info.name + "\u7684\u5730\u70B9");
      for (const p of places.slice(saved.placePage * 6, saved.placePage * 6 + 6)) {
        const shot = placePicture(p.id, rid), b = control("\u67E5\u770B\u5730\u70B9\uFF1A" + p.name, () => selectPlace(p.id, rid, places), "xh-atlas-place-option xh-atlas-themed-button", "place:" + p.id), copy2 = node3("span", void 0, "xh-atlas-place-label");
        b.dataset.atlasPlace = p.id;
        b.setAttribute("aria-pressed", String(saved.place === p.id));
        copy2.append(placeTitle("strong", p, ""));
        const current = p.id === s.\u573A\u666F.\u5730\u70B9;
        const badge = label("small", current ? "\u5F53\u524D\u6240\u5728" : s.\u65C5\u7A0B?.\u5230\u8BBF?.[p.id] ? "\u5DF2\u5230\u8BBF" : shot?.kind === "region" ? "\u6240\u5C5E\u5730\u533A\u98CE\u666F" : "\u5730\u70B9\u666F\u89C2\u793A\u610F", current ? "xh-atlas-current" : "");
        if (current) badge.prepend(icon3("pin"));
        copy2.append(badge);
        b.replaceChildren(image(shot, ""), copy2, icon3("arrow"));
        mobileFrame(b);
        list.append(b);
      }
      stage.append(list, mobilePager("\u4E0A\u4E00\u9875\u5730\u70B9", "\u4E0B\u4E00\u9875\u5730\u70B9", saved.placePage, count, (n) => saved.placePage = n, "place-page"));
    }
    function mobilePlace(stage, s, info, rid, selected) {
      const title = mobileTitle(selected.name, rid, info.name + " \xB7 " + clean(selected.position), selected);
      if (selected.id === s.\u573A\u666F.\u5730\u70B9) {
        const current = label("span", "\u5F53\u524D\u6240\u5728", "xh-mobile-atlas-place-current");
        current.prepend(icon3("pin"));
        title.append(current);
      }
      if (compact()) stage.append(mobileTabs());
      stage.append(title, mobileHero(placePicture(selected.id, rid)), label("p", clean(selected.description), "xh-atlas-subtitle"));
      const text2 = clean(selected.description);
      if (!compact()) {
        const services = [];
        if (/采购|补给|买卖|集市|河市/.test(text2)) services.push(["\u8865\u7ED9", "bag"]);
        if (/住宿|旅店|客舍|吃饭/.test(text2)) services.push(["\u98DF\u5BBF", "castle"]);
        if (/修理|修补|修具/.test(text2)) services.push(["\u4FEE\u5177", "bag"]);
        for (const entry of [["\u4F4D\u7F6E", "pin"], ["\u5730\u65B9\u751F\u6D3B", "castle"], ["\u9053\u8DEF", "map"]]) if (services.length < 3) services.push(entry);
        const actions = node3("nav", void 0, "xh-mobile-atlas-services");
        actions.setAttribute("aria-label", "\u5730\u70B9\u8D44\u6599\u5FEB\u6377\u67E5\u770B");
        for (const [name, ico] of services.slice(0, 3)) {
          const b = control(name, () => update(() => mobilePlaceTab = name === "\u9053\u8DEF" ? "roads" : name === "\u5730\u65B9\u751F\u6D3B" ? "life" : name === "\u4F4D\u7F6E" ? "position" : "note", "place-service:" + name), "xh-mobile-atlas-service", "place-service:" + name, ico);
          b.append(icon3("arrow"));
          mobileFrame(b);
          actions.append(b);
        }
        stage.append(actions);
      }
      const nav = node3("nav", void 0, "xh-mobile-switch xh-mobile-atlas-place-tabs");
      nav.setAttribute("aria-label", "\u5730\u70B9\u8BE6\u60C5\u5206\u533A");
      for (const [id, name, ico] of compact() ? [["note", "\u4F4D\u7F6E\u4E0E\u7B80\u4ECB", "pin"], ["life", "\u5730\u65B9\u751F\u6D3B", "castle"], ["roads", "\u9053\u8DEF\u53BB\u5411", "map"]] : [["note", "\u5730\u70B9\u7B80\u8BB0", "book"], ["roads", "\u6765\u5F80\u9053\u8DEF", "map"]]) {
        const b = control(name, () => update(() => mobilePlaceTab = id, "place-note:" + id), "xh-atlas-themed-button", "place-note:" + id, ico);
        b.setAttribute("aria-pressed", String(compact() ? mobilePlaceTab === id : id === "roads" ? mobilePlaceTab === "roads" : mobilePlaceTab !== "roads"));
        if (!compact()) mobileFrame(b);
        nav.append(b);
      }
      const copy2 = node3("section", void 0, "xh-mobile-atlas-place-copy");
      copy2.tabIndex = 0;
      copy2.setAttribute("aria-label", mobilePlaceTab === "roads" ? "\u6765\u5F80\u9053\u8DEF" : "\u5730\u70B9\u7B80\u8BB0");
      if (compact()) copy2.setAttribute("aria-label", { note: "\u4F4D\u7F6E\u4E0E\u7B80\u4ECB", life: "\u5730\u65B9\u751F\u6D3B", roads: "\u9053\u8DEF\u53BB\u5411" }[mobilePlaceTab]);
      const value = mobilePlaceTab === "roads" ? clean(selected.position) + "\n\u5730\u533A\u9053\u8DEF\uFF1A" + clean(info.travel) : mobilePlaceTab === "life" ? "\u5730\u533A\u751F\u6D3B\uFF1A" + clean(info.life) : mobilePlaceTab === "position" ? clean(selected.position) : compact() ? "\u4F4D\u7F6E\uFF1A" + clean(selected.position) + "\n\n" + text2 : text2;
      copy2.append(icon3("feather"), label("p", value));
      mobileFrame(copy2);
      stage.append(nav, copy2);
    }
    function renderMobile(s, rid) {
      const saved = c.view.map, places = placesIn(rid, s), info = regions.find((r) => r.id === rid), selected = mobileSection === "place" ? places.find((p) => p.id === saved.place) : null;
      if (mobileSection === "place" && !selected) mobileSection = "places";
      saved.region = rid;
      const page = node3("div", void 0, "xh-page xh-map-directory-page xh-atlas-mobile-page"), stage = node3("div", void 0, "xh-atlas-stage");
      theme(page, rid);
      page.dataset.atlasRegion = rid;
      page.dataset.atlasMode = selected ? "place" : "overview";
      page.dataset.mobileAtlasSection = menuOpen ? "regions" : mobileSection;
      page.dataset.atlasSplitTitle = String(!!placeHeading(selected).detail);
      if (menuOpen) mobileRegions(stage, rid, s);
      else {
        stage.append(mobileToolbar(rid, selected));
        if (mobileSection === "places") mobilePlaces(stage, s, info, rid, places);
        else if (selected) mobilePlace(stage, s, info, rid, selected);
        else mobileOverview(stage, info, rid);
      }
      page.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menuOpen) {
          e.preventDefault();
          update(() => menuOpen = false, "region-picker");
        }
      });
      page.append(stage);
      content.append(page);
    }
    function render3(s, rid) {
      if (!knownRegion(rid)) rid = knownRegion(s.\u573A\u666F.\u5730\u533A) ? s.\u573A\u666F.\u5730\u533A : regions[0].id;
      if (phone()) return renderMobile(s, rid);
      const saved = c.view.map, places = placesIn(rid, s), overview = saved.directoryMode !== "place", selected = overview ? null : places.find((p) => p.id === saved.place);
      if (!overview && !selected) {
        saved.directoryMode = "overview";
        return render3(s, rid);
      }
      saved.region = rid;
      const info = regions.find((r) => r.id === rid), page = node3("div", void 0, "xh-page xh-map-directory-page");
      page.dataset.atlasRegion = rid;
      page.dataset.atlasMode = overview ? "overview" : "place";
      const t = theme(page, rid), stage = node3("div", void 0, "xh-atlas-stage");
      Object.assign(stage.style, { width: MAP_DIRECTORY_REFERENCE.width + "px", height: MAP_DIRECTORY_REFERENCE.height + "px", transform: "scale(" + 1840 / MAP_DIRECTORY_REFERENCE.width + ")" });
      stage.append(art2("mapdir-paper", [0, 0, 1837, 856], [], "xh-atlas-paper"), box(art2(MAP_DIRECTORY_REFERENCE.art, [337, 94, 1496, 714], [[337, 94, 1496, 421], [655, 524, 1102, 85], [376, 607, 360, 31], [366, 650, 1427, 148]], "xh-atlas-panel-frame"), [337, 94, 1496, 714]), box(art2(MAP_DIRECTORY_REFERENCE.art, [0, 809, 1838, 47], [[27, 815, 230, 25], [1600, 813, 220, 27]], "xh-atlas-panel-frame"), [0, 809, 1838, 47]));
      sidebar(stage, s, rid, places, selected, overview);
      const back = box(control("\u8FD4\u56DE\u5730\u56FE", () => {
        menuOpen = false;
        c.back();
      }, "xh-atlas-back", "back", "arrow"), MAP_DIRECTORY_REFERENCE.back);
      stage.append(back);
      const title = selected?.name ?? info.name, split = !!placeHeading(selected).detail;
      const heading = box(selected ? placeTitle("h1", selected, "xh-atlas-title") : label("h1", title, "xh-atlas-title"), split ? [377, 142, 610, 102] : [377, 148, 610, 83]);
      heading.title = title;
      stage.append(heading, box(label("p", selected ? info.name : REGION_ART[rid].summary, "xh-atlas-subtitle"), [377, 250, 300, 56]), box(label("p", selected ? clean(selected.description) : REGION_ART[rid].summary + "\u3002\n" + short(info.life, 47), "xh-atlas-intro"), [377, 320, 274, 113]));
      if (selected) {
        const position2 = box(node3("details", void 0, "xh-atlas-position"), [372, 422, 265, 80]);
        position2.append(label("summary", "\u6240\u5C5E\u5730\u533A\uFF1A" + info.name + "\n\u4F4D\u7F6E\uFF1A" + short(selected.position, 24)), label("p", clean(selected.position) + "\n" + clean(selected.description)));
        stage.append(position2);
      }
      const shot = selected ? placePicture(selected.id, rid) : regionPicture(rid), hero = box(node3("figure", void 0, "xh-atlas-hero"), [640, 94, 1187, 421]);
      const custom = selected ? (c.getPlaceImages?.() ?? []).some((a) => skillImageURL(a?.[selected.id])) : (c.getRegionImages?.() ?? []).some((a) => skillImageURL(a?.[rid]));
      if (rid === "REG-02" && !custom && (overview || selected?.id === "LOC-SER-001")) hero.append(art2(overview ? MAP_DIRECTORY_REFERENCE.art : "mapdir-place", [640, 94, 1187, 421], overview ? [[640, 148, 70, 82]] : [], "xh-atlas-approved-scene"));
      else hero.append(image(shot, ""));
      hero.append(label("figcaption", selected ? shot?.label ?? "\u914D\u56FE\u5F85\u8865" : "\u5730\u533A\u666F\u89C2\u793A\u610F"));
      stage.append(hero);
      if (t.ornament) {
        const size = c.getOrnamentSize?.(t.ornament) ?? [1536, 1024], decoration = box(art2(t.ornament, [0, 0, ...size], [], "xh-atlas-regional-ornament"), [381, 433, 150 * size[0] / size[1], 150]);
        stage.append(decoration);
      } else stage.append(box(art2(MAP_DIRECTORY_REFERENCE.art, [530, 440, 107, 168], [[530, 440, 24, 120]], "xh-atlas-regional-ornament"), [530, 440, 107, 168]));
      const row = overview ? [["\u98CE\u666F", info.sight, t.icon], ["\u751F\u6D3B", info.life, "castle"], ["\u9053\u8DEF", info.travel, "map"]] : [["\u5730\u70B9\u8D44\u6599", clean(selected.position) + "\u3002" + clean(selected.description), "pin"], ["\u5730\u65B9\u751F\u6D3B", info.life, "castle"], ["\u9053\u8DEF\u4E0E\u53BB\u5411", info.travel, "map"]];
      row.forEach(([name, value, ico], i) => stage.append(infoCard(name, value, ico, [[642, 519, 350, 98], [1016, 519, 333, 98], [1373, 519, 386, 98]][i])));
      related(stage, s, rid, places, selected, overview);
      stage.append(box(label("p", "\u661F\u6D77\u4E4B\u5CB8 \xB7 \u5730\u533A\u56FE\u9274", "xh-atlas-footer"), [40, 817, 400, 25]));
      if (menuOpen) regionMenu(stage, rid);
      page.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menuOpen) {
          e.preventDefault();
          update(() => menuOpen = false, "region-picker");
        }
      });
      page.addEventListener("click", (e) => {
        if (menuOpen && !e.target.closest(".xh-atlas-region-menu,.xh-atlas-region-picker")) update(() => menuOpen = false, "region-picker");
      });
      page.append(stage);
      content.append(page);
    }
    return { render: render3, reset() {
      menuOpen = false;
      mobileSection = "overview";
      mobileRegionPage = 0;
      mobileRegionTab = "sight";
    }, get reference() {
      return MAP_DIRECTORY_REFERENCE;
    } };
  }

  // src/ui/portrait-picker.mjs
  function createPortraitPicker(c) {
    const { node: node3, button: button2, icon: icon3, content, assets, gallery, NAMES: NAMES2 } = c, views = { xingxing: 0, xiaogai: 0 };
    const phone = () => c.mobilePreview === true && c.isMobile?.() === true, pageSize = () => phone() || c.isMobilePicker?.() ? 6 : 8;
    const box = (e, r) => position(e, r), art2 = (r, rect, holes = [], paths2 = [], cls = "") => originalWindow(r.art, rect, holes, cls, assets, paths2, false);
    function focus(key) {
      const controls = [...content.querySelectorAll("[data-picker-focus]")], pair = key === "next" ? "prev" : key === "prev" ? "next" : null;
      (controls.find((e) => e.dataset.pickerFocus === key && !e.disabled) ?? controls.find((e) => e.dataset.pickerFocus === pair && !e.disabled) ?? controls.find((e) => e.getAttribute("aria-pressed") === "true") ?? controls[0])?.focus();
    }
    function control(label, run, key, cls, ico) {
      const b = button2(label, run, ico, cls);
      b.dataset.pickerFocus = key;
      return b;
    }
    const title = (record, name) => record.title.replace(new RegExp("^" + name + "\\s*[\xB7\u30FB]\\s*"), "");
    function picture(id, character, width, height) {
      const image = gallery.image(id, "", character), record = gallery.entry(id, character), r = PORTRAIT_REFERENCE[character];
      const rect = record.asset ? record.box : c.snapshot().portraitDemo === true && Number.isInteger(record.demoIndex) ? r.demoPictures[record.demoIndex] : null, ratio = rect ? rect[2] / rect[3] : 1;
      image.style.width = Math.min(width, height * ratio) + "px";
      image.style.height = Math.min(height, width / ratio) + "px";
      return image;
    }
    function turn(character, page, key) {
      views[character] = page;
      c.render();
      focus(key);
    }
    function mobilePaper(element, r) {
      element.append(paperFrame(assets));
      return element;
    }
    function renderMobile(character) {
      const r = PORTRAIT_REFERENCE[character], ids = gallery.available("portrait", character), selected = gallery.selected("portrait", character), record = gallery.entry(selected, character), count = Math.max(1, Math.ceil(ids.length / 6)), demo = c.snapshot().portraitDemo === true;
      views[character] = Math.max(0, Math.min(count - 1, views[character]));
      const pageNumber = views[character];
      const page = node3("div", void 0, "xh-page xh-picker-page xh-phone-detail xh-phone-portrait-page " + character);
      page.dataset.pickerCharacter = character;
      page.style.setProperty("--picker-accent", r.accent);
      page.style.setProperty("--picker-wash", r.wash);
      const heading = node3("header", void 0, "xh-phone-detail-heading xh-phone-portrait-heading"), back = control("\u8FD4\u56DE\u4EBA\u7269\u8BE6\u60C5", () => c.back(character), "back", "xh-phone-detail-back", "arrow");
      back.replaceChildren(icon3("arrow"), node3("span", "\u8FD4\u56DE"));
      const titleRow = node3("div", void 0, "xh-phone-detail-title");
      titleRow.append(node3("h2", "\u9009\u62E9" + NAMES2[character] + "\u5934\u50CF"), node3("span", character === "xingxing" ? "Choose Her Portrait" : "Choose His Portrait", "xh-phone-detail-script"));
      heading.append(back, titleRow, node3("p", "\u628A\u559C\u6B22\u7684\u753B\u9762\uFF0C\u7559\u5728\u65C5\u9014\u624B\u518C\u91CC\u3002", "xh-phone-detail-subtitle"), art2(r, [322, 113, 104, 105], [], [], "xh-phone-heading-flower"));
      const current = mobilePaper(node3("section", void 0, "xh-phone-paper xh-phone-portrait-current"), r), thumb = node3("span", void 0, "xh-phone-current-portrait"), image = node3("span", void 0, "xh-picker-current-picture xh-phone-current-portrait-picture");
      image.dataset.artId = selected;
      image.append(picture(selected, character, 104, 104));
      const [cx, cy, radius] = r.face;
      thumb.append(image, art2(r, [cx - radius - 38, cy - radius - 28, radius * 2 + 76, radius * 2 + 56], [], [["M" + cx + " " + cy + "h.01", radius * 2]], "xh-phone-current-portrait-frame"));
      const copy2 = node3("div", void 0, "xh-phone-current-copy"), caption = node3("p", record.title, "xh-phone-current-caption");
      caption.title = record.title;
      caption.tabIndex = 0;
      const using = node3("span", "\u4F7F\u7528\u4E2D", "xh-phone-using");
      using.prepend(icon3("check"));
      copy2.append(node3("h3", "\u5F53\u524D\u5934\u50CF"), caption, using);
      const quote = node3("p", character === "xingxing" ? "\u6536\u85CF\u65C5\u9014\u4E2D\u7684\u6BCF\u4E00\u4EFD\u7F8E\u597D\uFF0C\u4E5F\u6536\u85CF\u4E0D\u540C\u65F6\u523B\u7684\u4F60\u3002" : "\u53EA\u8981\u6709\u4F60\uFF0C\u6211\u5C31\u80FD\u518D\u8D70\u4E00\u4F1A\u513F\u3002", "xh-phone-current-quote");
      current.append(thumb, copy2, quote);
      const album = mobilePaper(node3("section", void 0, "xh-phone-paper xh-phone-portrait-album"), r), albumHeading = node3("div", void 0, "xh-phone-album-heading");
      albumHeading.append(node3("h3", "\u5DF2\u89E3\u9501\u5934\u50CF"), node3("p", "\u5171 " + ids.length + " \u5F20" + (demo ? " \xB7 \u793A\u4F8B" : ""), "xh-phone-album-total"));
      album.append(albumHeading);
      if (demo) album.append(node3("small", "\u753B\u518C\u6392\u7248\u793A\u4F8B", "xh-phone-album-demo"));
      const grid = node3("div", void 0, "xh-phone-portrait-grid");
      grid.setAttribute("role", "group");
      grid.setAttribute("aria-label", "\u53EF\u9009\u5934\u50CF");
      for (const id of ids.slice(pageNumber * 6, pageNumber * 6 + 6)) {
        const item = gallery.entry(id, character), active = id === selected, b = control(item.title, () => {
          gallery.choose("portrait", character, id);
          focus("portrait:" + id);
        }, "portrait:" + id, "xh-picker-card xh-phone-portrait-card");
        b.dataset.artId = id;
        b.setAttribute("aria-pressed", String(active));
        b.title = item.title;
        const photo = node3("span", void 0, "xh-phone-card-picture");
        photo.append(picture(id, character, 110, active ? 68 : 80));
        b.replaceChildren(paperFrame(assets, "xh-phone-card-frame"), photo, node3("span", title(item, NAMES2[character]), "xh-phone-card-caption"));
        if (active) {
          const tick = node3("span", void 0, "xh-phone-card-tick");
          tick.append(icon3("check"));
          b.append(tick, node3("span", "\u4F7F\u7528\u4E2D", "xh-phone-card-using"));
        }
        grid.append(b);
      }
      album.append(grid);
      const nav = node3("nav", void 0, "xh-phone-album-pagination");
      nav.setAttribute("aria-label", "\u5934\u50CF\u753B\u518C\u5206\u9875");
      const prev = control("\u4E0A\u4E00\u9875\u5934\u50CF", () => turn(character, pageNumber - 1, "prev"), "prev", "xh-phone-page-prev", "arrow"), next = control("\u4E0B\u4E00\u9875\u5934\u50CF", () => turn(character, pageNumber + 1, "next"), "next", "xh-phone-page-next", "arrow");
      prev.replaceChildren(icon3("arrow"), node3("span", "\u4E0A\u4E00\u9875"));
      next.replaceChildren(node3("span", "\u4E0B\u4E00\u9875"), icon3("arrow"));
      prev.disabled = pageNumber === 0;
      next.disabled = pageNumber === count - 1;
      nav.append(prev);
      const start = Math.max(0, Math.min(count - 4, pageNumber - 1));
      for (let n = start; n < Math.min(count, start + 4); n++) {
        const b = control("\u7B2C " + (n + 1) + " \u9875\u5934\u50CF", () => turn(character, n, "page:" + n), "page:" + n, "xh-phone-page-number");
        b.replaceChildren(node3("span", n + 1));
        b.setAttribute("aria-current", n === pageNumber ? "page" : "false");
        nav.append(b);
      }
      nav.append(next);
      album.append(nav, node3("p", "\u7B2C " + (pageNumber + 1) + " / " + count + " \u9875", "xh-picker-page-count xh-phone-album-count"), node3("p", "\u70B9\u51FB\u5934\u50CF\u5373\u53EF\u66F4\u6362", "xh-phone-album-help"), node3("p", "\u4EC5\u66F4\u6362\u624B\u518C\u5934\u50CF", "xh-phone-album-note"));
      page.append(heading, current, album);
      content.append(page);
    }
    function render3(character) {
      if (phone()) return renderMobile(character);
      const size = pageSize(), r = PORTRAIT_REFERENCE[character], ids = gallery.available("portrait", character), selected = gallery.selected("portrait", character), record = gallery.entry(selected, character), count = Math.max(1, Math.ceil(ids.length / size));
      views[character] = Math.max(0, Math.min(count - 1, views[character]));
      const pageNumber = views[character];
      const page = node3("div", void 0, "xh-page xh-picker-page " + character), stage = node3("div", void 0, "xh-picker-stage");
      page.dataset.pickerCharacter = character;
      page.style.setProperty("--picker-accent", r.accent);
      page.style.setProperty("--picker-wash", r.wash);
      stage.style.width = r.width + "px";
      stage.style.height = r.height + "px";
      stage.style.transform = "scale(" + 1840 / r.width + ")";
      stage.append(originalWindow("mapdir-paper", [0, 0, 1837, 856], [], "xh-picker-paper", assets, [], false));
      for (const rect of [[0, 230, 222, 627], [1614, 230, 221, 627], [222, 755, 1392, 102]]) stage.append(box(art2(r, rect, [], [], "xh-picker-decoration"), rect));
      stage.append(box(art2(r, r.banner, [r.back], [], "xh-picker-decoration"), r.banner));
      const back = box(control("\u8FD4\u56DE\u4EBA\u7269\u8BE6\u60C5", () => c.back(character), "back", "xh-picker-back"), r.back);
      back.replaceChildren(art2(r, r.back, [], [], "xh-picker-control-art"), node3("span", "\u8FD4\u56DE\u4EBA\u7269\u8BE6\u60C5", "xh-sr-only"));
      if (c.isMobilePicker?.()) back.querySelector(".xh-sr-only").textContent = "\u8FD4\u56DE";
      stage.append(back, node3("h2", "\u9009\u62E9" + NAMES2[character] + "\u5934\u50CF", "xh-sr-only"));
      const bio = box(node3("section", void 0, "xh-picker-bio"), r.bio), [cx, cy, radius] = r.face;
      bio.append(node3("h3", "\u5F53\u524D\u5934\u50CF", "xh-sr-only"));
      const current = box(node3("span", void 0, "xh-picker-current-picture"), [cx - radius - r.bio[0], cy - radius - r.bio[1], radius * 2, radius * 2]);
      current.append(picture(selected, character, radius * 2, radius * 2));
      current.dataset.artId = selected;
      bio.append(current);
      const frame = art2(r, r.bio, [r.caption], [["M" + cx + " " + cy + "h.01", radius * 2]], "xh-picker-frame");
      bio.append(frame);
      const caption = box(node3("p", title(record, NAMES2[character]), "xh-picker-current-caption"), [r.caption[0] - r.bio[0], r.caption[1] - r.bio[1], r.caption[2], r.caption[3]]);
      caption.title = record.title;
      bio.append(caption);
      const check = box(node3("span", void 0, "xh-picker-current-check"), [cx - r.bio[0] - 15, cy + radius - r.bio[1] - 14, 30, 30]);
      check.append(icon3("check"));
      bio.append(check);
      stage.append(bio);
      if (c.isMobilePicker?.()) {
        const thumb = node3("span", void 0, "xh-picker-current-thumb"), copy2 = node3("div", void 0, "xh-picker-current-copy");
        thumb.append(current);
        copy2.append(node3("h3", "\u5F53\u524D\u5934\u50CF"), caption, node3("span", "\u4F7F\u7528\u4E2D", "xh-picker-current-status"));
        bio.replaceChildren(thumb, copy2);
      }
      const album = box(node3("section", void 0, "xh-picker-album"), r.album);
      album.append(art2(r, r.album, [[1183, 245, 411, 34], [794, 284, 800, 387], [794, 672, 800, 74]], [], "xh-picker-frame"), node3("h3", "\u5DF2\u89E3\u9501\u5934\u50CF", "xh-sr-only"));
      const demo = c.snapshot().portraitDemo === true, total = box(node3("p", "\u5171 " + ids.length + " \u5F20" + (demo ? " \xB7 \u793A\u4F8B" : ""), "xh-picker-total"), [1182 - r.album[0], 245 - r.album[1], 174, 34]);
      album.append(total);
      if (demo) album.append(box(node3("small", "\u753B\u518C\u6392\u7248\u793A\u4F8B", "xh-picker-demo"), [1360 - r.album[0], 249 - r.album[1], 230, 24]));
      const grid = box(node3("div", void 0, "xh-picker-grid"), [r.grid[0] - r.album[0], r.grid[1] - r.album[1], r.grid[2], r.grid[3]]);
      grid.setAttribute("role", "group");
      grid.setAttribute("aria-label", "\u53EF\u9009\u5934\u50CF");
      ids.slice(pageNumber * size, pageNumber * size + size).forEach((id, i) => {
        const item = gallery.entry(id, character), active = id === selected, b = box(control(item.title, () => {
          gallery.choose("portrait", character, id);
          focus("portrait:" + id);
        }, "portrait:" + id, "xh-picker-card"), [i % 4 * 193, Math.floor(i / 4) * 191, 172, 184]);
        b.dataset.artId = id;
        b.setAttribute("aria-pressed", String(active));
        b.title = item.title;
        b.replaceChildren(art2(r, r.tile, r.tileHoles, [], "xh-picker-card-frame"));
        const image = node3("span", void 0, "xh-picker-card-picture");
        image.append(picture(id, character, 160, active ? 135 : 145));
        b.append(image, node3("span", title(item, NAMES2[character]), "xh-picker-card-caption"));
        if (active) {
          const tick = node3("span", void 0, "xh-picker-tick");
          tick.append(icon3("check"));
          const using = node3("span", "\u4F7F\u7528\u4E2D", "xh-picker-using");
          using.prepend(icon3("check"));
          b.append(tick, using);
        }
        grid.append(b);
      });
      album.append(grid);
      const nav = box(node3("nav", void 0, "xh-picker-pagination"), [870 - r.album[0], 678 - r.album[1], 660, 42]);
      nav.setAttribute("aria-label", "\u5934\u50CF\u753B\u518C\u5206\u9875");
      const prev = control("\u4E0A\u4E00\u9875\u5934\u50CF", () => turn(character, pageNumber - 1, "prev"), "prev", "xh-picker-page-prev", "arrow"), next = control("\u4E0B\u4E00\u9875\u5934\u50CF", () => turn(character, pageNumber + 1, "next"), "next", "xh-picker-page-next", "arrow");
      prev.querySelector?.("span") && (prev.querySelector("span").textContent = "\u4E0A\u4E00\u9875");
      next.querySelector?.("span") && (next.querySelector("span").textContent = "\u4E0B\u4E00\u9875");
      prev.disabled = pageNumber === 0;
      next.disabled = pageNumber === count - 1;
      nav.append(prev);
      const start = Math.max(0, Math.min(count - 5, pageNumber - 2));
      for (let n = start; n < Math.min(count, start + 5); n++) {
        const b = control("\u7B2C " + (n + 1) + " \u9875\u5934\u50CF", () => turn(character, n, "page:" + n), "page:" + n, "xh-picker-page-number");
        b.replaceChildren(node3("span", n + 1));
        b.setAttribute("aria-current", n === pageNumber ? "page" : "false");
        nav.append(b);
      }
      nav.append(next, node3("span", "\u7B2C " + (pageNumber + 1) + " / " + count + " \u9875", "xh-picker-page-count"));
      album.append(nav, box(node3("p", "\u70B9\u51FB\u5934\u50CF\u5373\u53EF\u66F4\u6362", "xh-picker-help"), [1070 - r.album[0], 724 - r.album[1], 290, 24]));
      stage.append(album);
      page.append(stage);
      content.append(page);
    }
    return { render: render3, enter(character) {
      const list = gallery.available("portrait", character);
      views[character] = Math.max(0, Math.floor(list.indexOf(gallery.selected("portrait", character)) / pageSize()));
    }, reset() {
      views.xingxing = 0;
      views.xiaogai = 0;
    } };
  }

  // src/ui/mobile-layered-ledger.mjs
  function createMobileReferenceLedger(c) {
    const { node: node3, coins: coins2, NAMES: NAMES2, gallery, render: render3 } = c, k = createMobileKit(c), { at, page, art: art2, copy: copy2, control, panel, tabs, pager, media, placePicture } = k;
    let mode = "flow", flowPage = 0, taskPage = 0;
    const rows3 = (v) => v && typeof v === "object" ? Object.entries(v) : null, value = (v, f = "\u8D44\u6599\u5F85\u8865") => v == null || v === "" ? f : String(v);
    function ledger(s) {
      const p = page("ledger");
      p.dataset.panel = mode;
      copy2(p, "h2", "\u65C5\u9014\u8D26\u672C", [99, 4, 292, 32]);
      copy2(p, "span", "Travel Ledger", [221, 34, 167, 27], "xh-mp-script");
      const back = control(p, "\u8FD4\u56DE\u624B\u518C", c.back, [4, 5, 83, 31], "arrow", "xh-mp-prev");
      back.querySelector("span").textContent = "\u8FD4\u56DE";
      ["xingxing", "xiaogai", "shared"].forEach((id, i) => {
        const wallet = panel(p, [i * 136, 65, 132, 75], "xh-mp-ledger-wallet");
        if (id !== "shared") {
          wallet.append(at(media(gallery.selected("portrait", id), "xh-mp-wallet-portrait", id), [5, 16, 44, 44]));
        } else wallet.append(at(art2("letter-ornament"), [4, 20, 47, 30]));
        copy2(wallet, "h3", id === "shared" ? "\u5171\u540C\u65C5\u8D39" : NAMES2[id], [52, 12, 70, 26]);
        copy2(wallet, "p", coins2(s.\u94B1\u5305?.[id]), [52, 39, 73, 29], "xh-mp-ledger-value");
      });
      tabs(p, "\u8D26\u672C\u5206\u533A", [["flow", "\u6536\u652F", "coin"], ["tasks", "\u63A5\u53D6\u7684\u59D4\u6258", "book"]], mode, (v) => mode = v, [0, 148, 404, 35]);
      if (mode === "flow") {
        const data = rows3(s.\u8D26\u672C?.\u8FD1\u671F\u6D41\u6C34), count = Math.max(1, Math.ceil((data?.length ?? 0) / 4));
        flowPage = Math.max(0, Math.min(flowPage, count - 1));
        const f = panel(p, [0, 190, 404, 237]);
        copy2(f, "h3", "\u8FD1\u671F\u5B9E\u9645\u6536\u652F", [15, 9, 240, 28]);
        const table = at(node3("table", void 0, "xh-mp-ledger-table"), [12, 45, 378, 174]), thead = node3("thead"), hr = node3("tr");
        ["\u8BF4\u660E", "\u94B1\u5305", "\u6536\u652F"].forEach((t) => hr.append(node3("th", t)));
        thead.append(hr);
        table.append(thead);
        const tbody = node3("tbody");
        if (!data?.length) {
          const tr = node3("tr"), td = node3("td", data == null ? "\u6D41\u6C34\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u8BB0\u5F55\u3002" : "\u5C1A\u65E0\u5B9E\u9645\u6536\u652F\u8BB0\u5F55\u3002");
          td.setAttribute("colspan", "3");
          tr.append(td);
          tbody.append(tr);
        } else for (const [id, v] of data.slice(flowPage * 4, flowPage * 4 + 4)) {
          const tr = node3("tr"), td = node3("td"), text2 = node3("span", value(v.\u8BF4\u660E));
          text2.tabIndex = 0;
          text2.title = value(v.\u8BF4\u660E);
          tr.dataset.flowId = id;
          td.append(text2);
          const amount = node3("td", (v.\u7C7B\u578B === "\u652F\u51FA" ? "\u2212 " : v.\u7C7B\u578B === "\u6536\u5165" ? "+ " : "") + coins2(v.\u91D1\u989D));
          amount.dataset.direction = v.\u7C7B\u578B;
          tr.append(td, node3("td", NAMES2[v.\u94B1\u5305] ?? "\u94B1\u5305\u5F85\u8865"), amount);
          tbody.append(tr);
        }
        table.append(tbody);
        f.append(table);
        copy2(p, "h3", "\u66F4\u65E9\u7684\u5DF2\u7ED3\u6E05\u8BB0\u5F55", [17, 434, 357, 24]);
        const archived = rows3(s.\u8D26\u672C?.\u5F52\u6863\u6458\u8981);
        copy2(p, "p", archived == null ? "\u5F52\u6863\u8D44\u6599\u5F85\u8865\u3002" : archived.filter(([, v]) => v?.\u7B14\u6570 !== 0).map(([id, v]) => (NAMES2[id] ?? "\u94B1\u5305\u5F85\u8865") + " \xB7 " + value(v?.\u7B14\u6570) + " \u7B14 \xB7 \u652F\u51FA " + coins2(v?.\u652F\u51FA) + (v?.\u6536\u5165 != null ? " \xB7 \u6536\u5165 " + coins2(v.\u6536\u5165) : "")).join("\n") || "\u5C1A\u65E0\u5F52\u6863\u8D26\u76EE\u3002", [130, 466, 255, 34], "xh-mp-small");
        p.append(at(art2("ledger-foot"), [0, 414, 404, 134]));
        if (count > 1) pager(p, "\u6D41\u6C34", flowPage, count, (v) => flowPage = v, [258, 397, 135, 28]);
      } else {
        const data = rows3(s.\u65C5\u7A0B?.\u59D4\u6258), count = data?.length ?? 0;
        taskPage = Math.max(0, Math.min(taskPage, count - 1));
        const pair = data?.[taskPage];
        const f = panel(p, [0, 194, 404, 224]);
        f.append(at(art2("letter-ornament"), [6, 25, 125, 81]));
        if (pair) {
          const [id, v] = pair;
          f.dataset.taskId = id;
          copy2(f, "h3", value(v.\u540D\u79F0), [143, 20, 242, 35]);
          copy2(f, "p", value(v.\u72B6\u6001, "\u72B6\u6001\u5F85\u8865"), [146, 58, 237, 26]);
          copy2(f, "p", v.\u672A\u6536\u62A5\u916C == null ? "\u62A5\u916C\u8D44\u6599\u5F85\u8865" : "\u5F85\u6536\u62A5\u916C\uFF1A" + coins2(v.\u672A\u6536\u62A5\u916C), [146, 91, 238, 32]);
          copy2(f, "p", value(v.\u8BF4\u660E ?? v.\u5185\u5BB9, "\u59D4\u6258\u5185\u5BB9\u5F85\u8865\u3002"), [18, 137, 368, 35]);
          copy2(f, "p", "\u8BB0\u5F55\u4F9D\u636E\uFF1A" + value(v.\u4F9D\u636E), [18, 177, 368, 35], "xh-mp-small");
        } else copy2(f, "p", data == null ? "\u59D4\u6258\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u8BB0\u5F55\u3002" : "\u5C1A\u65E0\u63A5\u53D6\u7684\u59D4\u6258\u3002", [144, 40, 240, 120]);
        p.append(at(placePicture(s), [10, 437, 384, 101]));
        pager(p, "\u59D4\u6258", taskPage, count, (v) => taskPage = v, [128, 408, 154, 28]);
      }
    }
    return { ledger, reset() {
      mode = "flow";
      flowPage = 0;
      taskPage = 0;
    } };
  }

  // src/ui/ledger-scene-pages.mjs
  var entries = (v) => v && typeof v === "object" && !Array.isArray(v) ? Object.entries(v) : null;
  var plain = (v, empty = "\u8D44\u6599\u5F85\u8865") => typeof v === "string" || typeof v === "number" ? String(v) : empty;
  function createLedgerScenePages(c) {
    const { node: node3, button: button2, icon: icon3, content, assets, gallery, coins: coins2, NAMES: NAMES2 } = c;
    const referenceLedger = createMobileReferenceLedger(c);
    let flowPage = 0, taskPage = 0, scenePage = 0, ledgerTab = "flow";
    const phone = () => c.mobilePreview === true && c.isMobile?.() === true, scenePhone = () => c.isMobileScenes?.() === true, scenePageSize = () => phone() || scenePhone() ? 4 : 6;
    const box = (e, r) => position(e, r), art2 = (r, rect, holes = [], paths2 = [], cls = "") => originalWindow(r.art, rect, holes, cls, assets, paths2, false);
    function control(text2, run, key, cls = "", ico) {
      const b = button2(text2, run, ico, cls);
      b.dataset.bookDetailFocus = key;
      return b;
    }
    function focus(key) {
      const controls = [...content.querySelectorAll("[data-book-detail-focus]")], pair = key?.endsWith("-next") ? key.replace(/-next$/, "-prev") : key?.endsWith("-prev") ? key.replace(/-prev$/, "-next") : null;
      (controls.find((e) => e.dataset.bookDetailFocus === key && !e.disabled) ?? controls.find((e) => e.dataset.bookDetailFocus === pair && !e.disabled) ?? controls.find((e) => e.getAttribute("aria-pressed") === "true") ?? controls[0])?.focus();
    }
    function change(run, key) {
      run();
      c.render();
      focus(key);
    }
    const clamp3 = (value, count) => Math.max(0, Math.min(count - 1, value));
    function base(r, cls, bannerHoles = []) {
      const page = node3("div", void 0, "xh-page xh-ledger-scene-page " + cls), stage = node3("div", void 0, "xh-ledger-scene-stage");
      stage.style.width = r.width + "px";
      stage.style.height = r.height + "px";
      stage.style.transform = "scale(" + 1840 / r.width + ")";
      if (r === LEDGER_REFERENCE && c.isMobileLedger?.()) {
        page.append(stage);
        content.append(page);
        return stage;
      }
      stage.append(originalWindow("mapdir-paper", BOOK_PAPER_WINDOW, [], "xh-ledger-scene-paper", assets, [], false));
      const left = r === SCENE_REFERENCE ? 240 : 225, right = r === SCENE_REFERENCE ? 1668 : 1814, bottom = r === SCENE_REFERENCE ? 754 : 774;
      const edges = [[0, 193, left, r.height - 193], [right, 193, r.width - right, bottom - 193], [left, bottom, r.width - left, r.height - bottom], ...r === SCENE_REFERENCE ? [[731, 194, 13, 560]] : [[1714, 193, 120, 151], [1190, 343, 22, 431], [225, 332, 1589, 11]]];
      for (const rect of edges) {
        const window2 = phone() && r === LEDGER_REFERENCE && rect[0] === right ? [rect[0], rect[1], rect[2], 120] : rect;
        stage.append(box(art2(r, window2, [], [], "xh-ledger-scene-decoration"), rect));
      }
      stage.append(box(art2(r, r.banner, [r.back, ...bannerHoles], [], "xh-ledger-scene-decoration"), r.banner));
      const back = box(control("\u8FD4\u56DE\u624B\u518C", c.back, "back", "xh-ledger-scene-back"), r.back);
      back.replaceChildren(art2(r, r.back, [], [], "xh-ledger-scene-control-art"), node3("span", "\u8FD4\u56DE", "xh-sr-only"));
      stage.append(back);
      page.append(stage);
      content.append(page);
      return stage;
    }
    function fitted(id, character, width, height) {
      const record = gallery.entry(id, character), image = gallery.image(id, "", character), ratio = record?.box ? record.box[2] / record.box[3] : 1;
      image.style.width = Math.min(width, height * ratio) + "px";
      image.style.height = Math.min(height, width / ratio) + "px";
      return image;
    }
    function pager(page, count, set, key, numbered = false) {
      const nav = node3("nav", void 0, "xh-ledger-scene-pager");
      nav.setAttribute("aria-label", key === "scene" ? "\u65C5\u9014\u63D2\u753B\u5206\u9875" : key === "flow" ? "\u8D26\u672C\u6D41\u6C34\u5206\u9875" : "\u59D4\u6258\u5206\u9875");
      const prev = control("\u4E0A\u4E00\u9875" + (key === "scene" ? "\u63D2\u753B" : key === "flow" ? "\u6D41\u6C34" : "\u59D4\u6258"), () => change(() => set(page - 1), key + "-prev"), key + "-prev", "xh-ledger-scene-prev", "arrow"), next = control("\u4E0B\u4E00\u9875" + (key === "scene" ? "\u63D2\u753B" : key === "flow" ? "\u6D41\u6C34" : "\u59D4\u6258"), () => change(() => set(page + 1), key + "-next"), key + "-next", "xh-ledger-scene-next", "arrow");
      prev.replaceChildren(icon3("arrow"), node3("span", "\u4E0A\u4E00\u9875"));
      next.replaceChildren(node3("span", "\u4E0B\u4E00\u9875"), icon3("arrow"));
      prev.disabled = page === 0;
      next.disabled = page === count - 1;
      nav.append(prev);
      if (numbered) {
        const start = Math.max(0, Math.min(count - 5, page - 2));
        for (let n = start; n < Math.min(count, start + 5); n++) {
          const b = control("\u7B2C " + (n + 1) + " \u9875\u63D2\u753B", () => change(() => set(n), "scene-page:" + n), "scene-page:" + n, "xh-ledger-scene-page-number");
          b.replaceChildren(node3("span", n + 1));
          b.setAttribute("aria-current", n === page ? "page" : "false");
          nav.append(b);
        }
      }
      nav.append(next, node3("span", "\u7B2C " + (page + 1) + " / " + count + " \u9875", "xh-ledger-scene-page-count"));
      return nav;
    }
    function mobilePaper(element, r) {
      element.append(paperFrame(assets));
      return element;
    }
    function mobileHeading(title, script, subtitle) {
      const heading = node3("header", void 0, "xh-phone-detail-heading xh-phone-book-heading"), back = control("\u8FD4\u56DE\u624B\u518C", c.back, "back", "xh-phone-detail-back", "arrow");
      back.replaceChildren(icon3("arrow"), node3("span", "\u8FD4\u56DE"));
      const row = node3("div", void 0, "xh-phone-detail-title");
      row.append(node3("h2", title), node3("span", script, "xh-phone-detail-script"));
      heading.append(back, row);
      if (subtitle) heading.append(node3("p", subtitle, "xh-phone-detail-subtitle"));
      return heading;
    }
    function mobilePager(page, count, set, key, numbered = false) {
      const nav = pager(page, count, set, key, numbered);
      nav.classList.add("xh-phone-album-pagination");
      return nav;
    }
    function ledgerMobile(state) {
      const page = node3("div", void 0, "xh-page xh-ledger-page xh-phone-detail xh-phone-ledger-page"), demo = c.snapshot().ledgerDemo === true;
      page.append(mobileHeading("\u65C5\u9014\u8D26\u672C", "Travel Ledger"));
      const wallets = node3("div", void 0, "xh-phone-wallets");
      ["xingxing", "xiaogai", "shared"].forEach((id) => {
        const wallet = mobilePaper(node3("section", void 0, "xh-phone-paper xh-phone-wallet"), LEDGER_REFERENCE), picture = node3("span", void 0, "xh-phone-wallet-picture");
        picture.append(id === "shared" ? art2(LEDGER_REFERENCE, [1237, 201, 189, 129], [], [], "xh-phone-shared-wallet-art") : fitted(gallery.selected("portrait", id), id, 52, 52));
        const copy2 = node3("div", void 0, "xh-phone-wallet-copy");
        copy2.append(node3("h3", id === "shared" ? "\u5171\u540C\u65C5\u8D39" : NAMES2[id]), node3("strong", coins2(state.\u94B1\u5305?.[id]), "xh-ledger-wallet-value xh-phone-wallet-value"));
        wallet.append(picture, copy2);
        wallets.append(wallet);
      });
      page.append(wallets);
      const tabs = node3("nav", void 0, "xh-mobile-switch xh-phone-ledger-tabs");
      tabs.setAttribute("aria-label", "\u8D26\u672C\u5206\u533A");
      for (const [id, label] of [["flow", "\u6536\u652F"], ["tasks", "\u63A5\u53D6\u7684\u59D4\u6258"]]) {
        const b = control(label, () => change(() => ledgerTab = id, "ledger-tab:" + id), "ledger-tab:" + id);
        b.setAttribute("aria-pressed", String(ledgerTab === id));
        tabs.append(b);
      }
      page.append(tabs);
      if (ledgerTab === "flow") {
        const records2 = mobilePaper(node3("section", void 0, "xh-phone-paper xh-phone-ledger-records"), LEDGER_REFERENCE);
        records2.append(node3("h3", "\u8FD1\u671F\u5B9E\u9645\u6536\u652F"));
        const flows = entries(state.\u8D26\u672C?.\u8FD1\u671F\u6D41\u6C34), count = Math.max(1, Math.ceil((flows?.length ?? 0) / 4));
        flowPage = clamp3(flowPage, count);
        const field = node3("div", void 0, "xh-phone-ledger-table-field"), table = node3("table", void 0, "xh-phone-ledger-table"), head = node3("thead"), hr = node3("tr");
        for (const name of ["\u8BF4\u660E", "\u94B1\u5305", "\u6536\u652F"]) hr.append(node3("th", name));
        head.append(hr);
        table.append(head);
        const body = node3("tbody");
        if (!flows?.length) {
          const tr = node3("tr"), td = node3("td", flows === null ? "\u6D41\u6C34\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u8BB0\u5F55\u3002" : "\u5C1A\u65E0\u5B9E\u9645\u6536\u652F\u8BB0\u5F55\u3002");
          td.setAttribute("colspan", "3");
          tr.append(td);
          body.append(tr);
        } else for (const [id, value] of flows.slice(flowPage * 4, flowPage * 4 + 4)) {
          const v = value && typeof value === "object" ? value : {}, tr = node3("tr");
          tr.dataset.flowId = id;
          const td = node3("td"), copy3 = node3("span", plain(v.\u8BF4\u660E), "xh-phone-flow-copy");
          copy3.title = plain(v.\u8BF4\u660E);
          copy3.tabIndex = 0;
          const item = state.\u7269\u54C1?.[v.\u7269\u54C1ID];
          if (item?.\u540D\u79F0) td.append(c.itemArtwork(item.\u540D\u79F0, "xh-phone-flow-art", v.\u7269\u54C1ID));
          td.append(copy3);
          const settled = v.\u6027\u8D28?.includes("\u6838\u9500"), direction = settled ? "\u6838\u9500 " : v.\u7C7B\u578B === "\u652F\u51FA" ? "\u2212 " : v.\u7C7B\u578B === "\u6536\u5165" ? "+ " : "", amount = node3("td", direction + coins2(v.\u91D1\u989D) + (direction ? "" : " \xB7 \u7C7B\u578B\u5F85\u8865"), "xh-ledger-flow-amount");
          amount.dataset.direction = settled ? "settlement" : v.\u7C7B\u578B === "\u6536\u5165" ? "income" : v.\u7C7B\u578B === "\u652F\u51FA" ? "expense" : "unknown";
          tr.append(td, node3("td", NAMES2[v.\u94B1\u5305] ?? "\u94B1\u5305\u5F85\u8865"), amount);
          body.append(tr);
        }
        table.append(body);
        field.append(table);
        records2.append(field);
        if (count > 1) records2.append(mobilePager(flowPage, count, (n) => flowPage = n, "flow"));
        const archive = node3("section", void 0, "xh-phone-ledger-archive");
        archive.append(node3("h3", "\u66F4\u65E9\u7684\u5DF2\u7ED3\u6E05\u8BB0\u5F55"));
        const copy2 = node3("div", void 0, "xh-phone-archive-copy"), archived = entries(state.\u8D26\u672C?.\u5F52\u6863\u6458\u8981);
        copy2.tabIndex = 0;
        if (archived === null) copy2.append(node3("p", "\u5F52\u6863\u8D44\u6599\u5F85\u8865\u3002"));
        else {
          let any = false;
          for (const [id, v] of archived) {
            if (v?.\u7B14\u6570 === 0) continue;
            any = true;
            copy2.append(node3("p", (NAMES2[id] ?? "\u94B1\u5305\u5F85\u8865") + " \xB7 " + plain(v?.\u7B14\u6570) + " \u7B14 \xB7 \u652F\u51FA " + coins2(v?.\u652F\u51FA) + (v?.\u6536\u5165 != null ? " \xB7 \u6536\u5165 " + coins2(v.\u6536\u5165) : "")));
          }
          if (!any) copy2.append(node3("p", "\u5C1A\u65E0\u5F52\u6863\u8D26\u76EE\u3002"));
        }
        archive.append(copy2);
        records2.append(archive, art2(LEDGER_REFERENCE, [5, 655, 589, 171], [[270, 655, 325, 95]], [], "xh-phone-ledger-foot-art"));
        page.append(records2);
      } else {
        const section = mobilePaper(node3("section", void 0, "xh-phone-paper xh-phone-commissions"), LEDGER_REFERENCE);
        section.append(node3("h3", "\u63A5\u53D6\u7684\u59D4\u6258"));
        const tasks = entries(state.\u65C5\u7A0B?.\u59D4\u6258), count = Math.max(1, tasks?.length ?? 0);
        taskPage = clamp3(taskPage, count);
        const pair = tasks?.[taskPage], v = pair?.[1] && typeof pair[1] === "object" ? pair[1] : {}, isDemo = demo && pair?.[0] === "sample", card = node3("div", void 0, "xh-phone-task-card");
        if (!pair) card.append(node3("p", tasks === null ? "\u59D4\u6258\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u8BB0\u5F55\u3002" : "\u5C1A\u65E0\u63A5\u53D6\u7684\u59D4\u6258\u3002", "xh-phone-task-empty"));
        else {
          card.dataset.taskId = pair[0];
          card.append(art2(LEDGER_REFERENCE, [1239, 441, 163, 155], [], [], "xh-phone-task-envelope"));
          const copy2 = node3("div", void 0, "xh-phone-task-copy"), name = node3("h4", plain(v.\u540D\u79F0)), status = node3("span", plain(v.\u72B6\u6001, "\u72B6\u6001\u5F85\u8865") + (isDemo ? " \xB7 \u793A\u4F8B" : ""), "xh-phone-task-status");
          name.title = plain(v.\u540D\u79F0);
          name.tabIndex = 0;
          status.title = status.textContent;
          const reward = node3("p", v.\u672A\u6536\u62A5\u916C == null ? "\u62A5\u916C\u8D44\u6599\u5F85\u8865" : (isDemo ? "\u62A5\u916C\uFF1A" : "\u5F85\u6536\u62A5\u916C\uFF1A") + coins2(v.\u672A\u6536\u62A5\u916C) + (isDemo ? "\uFF08\u793A\u4F8B\uFF09" : ""), "xh-phone-task-reward"), body = node3("div", void 0, "xh-phone-task-body");
          body.tabIndex = 0;
          body.append(node3("p", plain(v.\u8BF4\u660E ?? v.\u5185\u5BB9, "\u59D4\u6258\u5185\u5BB9\u5F85\u8865\u3002")));
          body.append(node3("p", isDemo ? "\u6392\u7248\u793A\u4F8B \xB7 \u975E\u5B9E\u9645\u59D4\u6258\u8BB0\u5F55\u3002" : "\u8BB0\u5F55\u4F9D\u636E\uFF1A" + plain(v.\u4F9D\u636E, "\u8D44\u6599\u5F85\u8865\u3002")));
          copy2.append(name, status, reward, body);
          card.append(copy2);
        }
        section.append(card, mobilePager(taskPage, count, (n) => taskPage = n, "task"), art2(LEDGER_REFERENCE, [1240, 632, 258, 124], [], [], "xh-phone-commission-scenery"));
        page.append(section);
      }
      content.append(page);
    }
    function scenesMobile() {
      const ids = gallery.available("scene"), selected = gallery.selected("scene"), record = gallery.entry(selected), count = Math.max(1, Math.ceil(ids.length / 4)), demo = c.snapshot().sceneDemo === true;
      scenePage = clamp3(scenePage, count);
      const page = node3("div", void 0, "xh-page xh-scene-page xh-phone-detail xh-phone-scene-page");
      page.append(mobileHeading("\u65C5\u9014\u63D2\u753B\u753B\u518C", "Same journey", "\u628A\u5171\u540C\u7684\u98CE\u666F\uFF0C\u7559\u5728\u624B\u518C\u91CC\u3002"));
      const current = mobilePaper(node3("section", void 0, "xh-phone-paper xh-phone-scene-current"), SCENE_REFERENCE), image = node3("span", void 0, "xh-scene-current-picture xh-phone-scene-current-picture");
      image.dataset.artId = selected;
      image.append(fitted(selected, void 0, 142, 64));
      const copy2 = node3("div", void 0, "xh-phone-current-copy"), caption = node3("p", record.title, "xh-phone-current-caption");
      caption.title = record.title;
      caption.tabIndex = 0;
      const using = node3("span", "\u4F7F\u7528\u4E2D", "xh-phone-using");
      using.prepend(icon3("check"));
      copy2.append(node3("h3", "\u5F53\u524D\u914D\u56FE"), caption, using);
      current.append(image, copy2);
      page.append(current);
      const album = mobilePaper(node3("section", void 0, "xh-phone-paper xh-phone-scene-album"), SCENE_REFERENCE), heading = node3("div", void 0, "xh-phone-album-heading");
      heading.append(node3("h3", "\u5DF2\u89E3\u9501\u63D2\u753B"), node3("p", "\u5171 " + ids.length + " \u5E45" + (demo ? " \xB7 \u5206\u9875\u793A\u4F8B" : ""), "xh-phone-album-total"));
      album.append(heading);
      const grid = node3("div", void 0, "xh-phone-scene-grid");
      grid.setAttribute("role", "group");
      grid.setAttribute("aria-label", "\u53EF\u9009\u65C5\u9014\u63D2\u753B");
      for (const id of ids.slice(scenePage * 4, scenePage * 4 + 4)) {
        const entry = gallery.entry(id), active = id === selected, b = control(entry.title, () => {
          gallery.choose("scene", null, id);
          focus("scene:" + id);
        }, "scene:" + id, "xh-scene-card xh-phone-scene-card");
        b.dataset.artId = id;
        b.setAttribute("aria-pressed", String(active));
        b.title = entry.title;
        const picture = node3("span", void 0, "xh-phone-card-picture");
        picture.append(fitted(id, void 0, 174, 108));
        b.replaceChildren(paperFrame(assets, "xh-phone-card-frame"), picture, node3("span", id === "scene-default" ? "\u9ED8\u8BA4\u63D2\u753B" : entry.title, "xh-phone-card-caption"));
        if (active) {
          const tick = node3("span", void 0, "xh-phone-card-tick");
          tick.append(icon3("check"));
          b.append(tick);
        }
        grid.append(b);
      }
      album.append(grid, mobilePager(scenePage, count, (n) => scenePage = n, "scene"), node3("p", "\u70B9\u51FB\u63D2\u753B\u5373\u53EF\u66F4\u6362", "xh-phone-album-help"));
      page.append(album);
      content.append(page);
    }
    function ledger(state) {
      if (phone()) return referenceLedger.ledger(state);
      const demo = c.snapshot().ledgerDemo === true, stage = base(LEDGER_REFERENCE, "xh-ledger-page", demo ? [] : [[1257, 127, 157, 50]]);
      stage.append(node3("h2", "\u65C5\u9014\u8D26\u672C", "xh-sr-only"));
      ["xingxing", "xiaogai", "shared"].forEach((id, i) => {
        const rect = LEDGER_REFERENCE.wallets[i], wallet = box(node3("section", void 0, "xh-ledger-wallet"), rect), holes = [LEDGER_REFERENCE.walletAmounts[i]], paths2 = [];
        wallet.append(node3("h3", id === "shared" ? "\u5171\u540C\u65C5\u8D39" : NAMES2[id] + "\u7684\u94B1\u5305", "xh-sr-only"));
        if (i < 2) {
          const [x2, y2, r] = LEDGER_REFERENCE.walletFaces[i];
          paths2.push(["M" + x2 + " " + y2 + "h.01", r * 2]);
          const photo = box(node3("span", void 0, "xh-ledger-wallet-picture"), [x2 - r - rect[0], y2 - r - rect[1], r * 2, r * 2]);
          photo.append(fitted(gallery.selected("portrait", id), id, r * 2, r * 2));
          wallet.append(photo);
        }
        wallet.append(art2(LEDGER_REFERENCE, rect, holes, paths2, "xh-ledger-wallet-frame"));
        const [x, y, w, h] = holes[0];
        wallet.append(box(node3("strong", coins2(state.\u94B1\u5305?.[id]), "xh-ledger-wallet-value"), [x - rect[0], y - rect[1], w, h]));
        stage.append(wallet);
      });
      const records2 = box(node3("section", void 0, "xh-ledger-records"), LEDGER_REFERENCE.records);
      records2.append(art2(LEDGER_REFERENCE, LEDGER_REFERENCE.records, [...LEDGER_REFERENCE.recordHoles, [270, 657, 650, 41]], [], "xh-ledger-scene-frame"), node3("h3", "\u8FD1\u671F\u5B9E\u9645\u6536\u652F", "xh-sr-only"));
      const flows = entries(state.\u8D26\u672C?.\u8FD1\u671F\u6D41\u6C34), count = Math.max(1, Math.ceil((flows?.length ?? 0) / 4));
      flowPage = clamp3(flowPage, count);
      const table = box(node3("table", void 0, "xh-ledger-table"), [270 - LEDGER_REFERENCE.records[0], 449 - LEDGER_REFERENCE.records[1], 884, 164]), columns = node3("colgroup"), head = node3("thead", void 0, "xh-sr-only"), hr = node3("tr");
      for (const width of [412, 196, 276]) {
        const col = node3("col");
        col.style.width = width + "px";
        columns.append(col);
      }
      table.append(columns);
      for (const name of ["\u8BF4\u660E", "\u94B1\u5305", "\u6536\u652F"]) hr.append(node3("th", name));
      head.append(hr);
      table.append(head);
      const body = node3("tbody");
      if (!flows?.length) {
        const tr = node3("tr"), td = node3("td", flows === null ? "\u6D41\u6C34\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u8BB0\u5F55\u3002" : "\u5C1A\u65E0\u5B9E\u9645\u6536\u652F\u8BB0\u5F55\u3002");
        td.setAttribute("colspan", "3");
        tr.append(td);
        body.append(tr);
      } else for (const [id, value2] of flows.slice(flowPage * 4, flowPage * 4 + 4)) {
        const v2 = value2 && typeof value2 === "object" ? value2 : {}, tr = node3("tr");
        tr.dataset.flowId = id;
        const td = node3("td"), copy2 = node3("span", flowSummary(state, v2), "xh-ledger-flow-copy");
        copy2.title = (v2.\u8BA1\u5165\u6536\u652F === false ? "\u4E0D\u8BA1\u4F5C\u6536\u5165\u6216\u6D88\u8D39 \xB7 " : "") + (v2.\u6027\u8D28?.includes("\u6838\u9500") ? "\u5DF2\u4ED8\u90E8\u5206\u6838\u9500\uFF0C\u4E0D\u91CD\u590D\u4ED8\u6B3E \xB7 " : "") + flowNature(v2) + " \xB7 " + plain(v2.\u8BF4\u660E);
        copy2.tabIndex = 0;
        const item = state.\u7269\u54C1?.[v2.\u7269\u54C1ID];
        if (item?.\u540D\u79F0) td.append(c.itemArtwork(item.\u540D\u79F0, "xh-ledger-flow-item", v2.\u7269\u54C1ID));
        td.append(copy2);
        const settled = v2.\u6027\u8D28?.includes("\u6838\u9500"), direction = settled ? "\u6838\u9500 " : v2.\u7C7B\u578B === "\u652F\u51FA" ? "\u2212 " : v2.\u7C7B\u578B === "\u6536\u5165" ? "+ " : "", amount = node3("td", direction + coins2(v2.\u91D1\u989D) + (direction ? "" : " \xB7 \u7C7B\u578B\u5F85\u8865"), "xh-ledger-flow-amount");
        amount.dataset.direction = settled ? "settlement" : v2.\u7C7B\u578B === "\u6536\u5165" ? "income" : v2.\u7C7B\u578B === "\u652F\u51FA" ? "expense" : "unknown";
        tr.append(td, node3("td", NAMES2[v2.\u94B1\u5305] ?? "\u94B1\u5305\u5F85\u8865"), amount);
        body.append(tr);
      }
      table.append(body);
      records2.append(table);
      if (count > 1) records2.append(box(pager(flowPage, count, (n) => flowPage = n, "flow"), [328 - LEDGER_REFERENCE.records[0], 614 - LEDGER_REFERENCE.records[1], 776, 30]));
      const archive = box(node3("div", void 0, "xh-ledger-archive"), [329 - LEDGER_REFERENCE.records[0], 703 - LEDGER_REFERENCE.records[1], 804, 45]), archived = entries(state.\u8D26\u672C?.\u5F52\u6863\u6458\u8981);
      records2.append(box(node3("h3", "\u8F83\u65E9\u6D41\u6C34\u6458\u8981", "xh-ledger-archive-heading"), [45, 314, 650, 41]));
      if (archived === null) archive.append(node3("p", "\u5F52\u6863\u8D44\u6599\u5F85\u8865\u3002"));
      else {
        let any = false;
        for (const [id, v2] of archived) {
          if (v2?.\u7B14\u6570 === 0) continue;
          any = true;
          archive.append(node3("p", (NAMES2[id] ?? "\u94B1\u5305\u5F85\u8865") + " \xB7 " + archiveText(v2, coins2)));
        }
        if (!any) archive.append(node3("p", "\u5C1A\u65E0\u5F52\u6863\u8D26\u76EE\u3002"));
      }
      records2.append(archive);
      stage.append(records2);
      const frame = box(node3("section", void 0, "xh-ledger-commissions"), LEDGER_REFERENCE.commissions);
      frame.append(art2(LEDGER_REFERENCE, LEDGER_REFERENCE.commissions, LEDGER_REFERENCE.commissionHoles, [], "xh-ledger-scene-frame"), node3("h3", "\u63A5\u53D6\u7684\u59D4\u6258", "xh-sr-only"));
      const tasks = entries(state.\u65C5\u7A0B?.\u59D4\u6258), taskCount = Math.max(1, tasks?.length ?? 0);
      taskPage = clamp3(taskPage, taskCount);
      const pair = tasks?.[taskPage], value = pair?.[1], v = value && typeof value === "object" ? value : {}, isDemo = demo && pair?.[0] === "sample";
      const text2 = box(node3("div", void 0, "xh-ledger-task-copy"), [1400 - LEDGER_REFERENCE.commissions[0], 451 - LEDGER_REFERENCE.commissions[1], 388, 155]);
      if (!pair) text2.append(node3("p", tasks === null ? "\u59D4\u6258\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u8BB0\u5F55\u3002" : "\u5C1A\u65E0\u63A5\u53D6\u7684\u59D4\u6258\u3002", "xh-ledger-task-empty"));
      else {
        text2.dataset.taskId = pair[0];
        const name = node3("h4", plain(v.\u540D\u79F0), "xh-ledger-task-name");
        name.title = plain(v.\u540D\u79F0);
        const status = node3("span", plain(v.\u72B6\u6001, "\u72B6\u6001\u5F85\u8865") + (isDemo ? " \xB7 \u793A\u4F8B" : ""), "xh-ledger-task-status");
        status.title = status.textContent;
        const reward = node3("p", v.\u672A\u6536\u62A5\u916C == null ? "\u62A5\u916C\u8D44\u6599\u5F85\u8865" : (isDemo ? "\u62A5\u916C\uFF1A" : "\u5F85\u6536\u62A5\u916C\uFF1A") + coins2(v.\u672A\u6536\u62A5\u916C) + (isDemo ? "\uFF08\u793A\u4F8B\uFF09" : ""), "xh-ledger-task-reward"), copy2 = node3("div", void 0, "xh-ledger-task-body");
        copy2.tabIndex = 0;
        const details = taskDetails(state, v);
        for (const line of details.length ? details : ["\u59D4\u6258\u5185\u5BB9\u5F85\u8865\u3002"]) copy2.append(node3("p", line));
        if (isDemo) copy2.append(node3("p", "\u6392\u7248\u793A\u4F8B \xB7 \u975E\u5B9E\u9645\u59D4\u6258\u8BB0\u5F55\u3002"));
        else copy2.append(node3("p", "\u8BB0\u5F55\u4F9D\u636E\uFF1A" + plain(v.\u4F9D\u636E, "\u8D44\u6599\u5F85\u8865\u3002")));
        text2.append(name, status, reward, copy2);
      }
      frame.append(text2);
      if (taskCount > 1) frame.append(box(pager(taskPage, taskCount, (n) => taskPage = n, "task"), [65, 276, 470, 34]));
      frame.append(box(control("\u67E5\u770B\u672A\u7ED3\u4E8B\u9879\uFF08" + openObligations(state).length + "\uFF09", () => c.open("obligations"), "obligations", "xh-obligations-link", "book"), [337, 24, 229, 45]));
      stage.append(frame);
      if (c.isMobileLedger?.()) return ledgerCompact(stage, records2, archive, frame);
      if (phone()) {
        const wallets = node3("div", void 0, "xh-mobile-wallet-summary");
        [...stage.querySelectorAll(".xh-ledger-wallet")].forEach((wallet, i) => {
          const picture = wallet.querySelector(".xh-ledger-wallet-picture"), amount = wallet.querySelector(".xh-ledger-wallet-value");
          wallet.replaceChildren(picture ?? icon3("coin"), node3("h3", i === 2 ? "\u5171\u540C\u65C5\u8D39" : NAMES2[["xingxing", "xiaogai"][i]]), amount);
          wallets.append(wallet);
        });
        stage.insertBefore(wallets, records2);
        const nav = node3("nav", void 0, "xh-mobile-switch xh-ledger-mobile-tabs");
        nav.setAttribute("aria-label", "\u8D26\u672C\u5206\u533A");
        for (const [id, label] of [["flow", "\u6536\u652F"], ["tasks", "\u63A5\u53D6\u7684\u59D4\u6258"]]) {
          const b = control(label, () => change(() => ledgerTab = id, "ledger-tab:" + id), "ledger-tab:" + id);
          b.setAttribute("aria-pressed", String(ledgerTab === id));
          nav.append(b);
        }
        stage.insertBefore(nav, records2);
        records2.hidden = ledgerTab !== "flow";
        frame.hidden = ledgerTab !== "tasks";
        const archiveHeading = records2.querySelectorAll("h3")[1];
        archiveHeading?.remove();
        const disclosure = node3("details", void 0, "xh-ledger-archive-disclosure");
        disclosure.append(node3("summary", "\u66F4\u65E9\u7684\u5DF2\u7ED3\u6E05\u8BB0\u5F55"), archive);
        records2.append(disclosure);
      }
    }
    function ledgerCompact(stage, records2, archive, commissions) {
      stage.parentElement.classList.add("xh-ledger-compact-page");
      stage.style.width = "904px";
      stage.style.height = "1018px";
      stage.style.transform = "none";
      const heading = node3("header", void 0, "xh-scene-compact-heading"), back = control("\u8FD4\u56DE\u624B\u518C", c.back, "back", "xh-scene-compact-back", "arrow");
      back.replaceChildren(icon3("arrow"), node3("span", "\u8FD4\u56DE"));
      heading.append(back, node3("h2", "\u65C5\u9014\u8D26\u672C"));
      const wallets = node3("div", void 0, "xh-ledger-compact-wallets");
      [...stage.querySelectorAll(".xh-ledger-wallet")].forEach((wallet, i) => {
        const id = ["xingxing", "xiaogai", "shared"][i], picture = node3("span", void 0, "xh-ledger-compact-wallet-picture"), value = wallet.querySelector(".xh-ledger-wallet-value");
        picture.append(i < 2 ? fitted(gallery.selected("portrait", id), id, 112, 112) : icon3("coin"));
        wallet.replaceChildren(paperFrame(assets, "xh-scene-compact-border"), picture, node3("h3", id === "shared" ? "\u5171\u540C\u65C5\u8D39" : NAMES2[id]), value);
        wallets.append(wallet);
      });
      const tabs = node3("nav", void 0, "xh-ledger-compact-tabs");
      tabs.setAttribute("aria-label", "\u8D26\u672C\u5206\u533A");
      for (const [id, label, ico] of [["flow", "\u6536\u652F\u8BB0\u5F55", "coin"], ["archive", "\u5F52\u6863\u6458\u8981", "book"], ["tasks", "\u63A5\u53D6\u59D4\u6258", "book"]]) {
        const b = control(label, () => change(() => ledgerTab = id, "ledger-tab:" + id), "ledger-tab:" + id, "", ico);
        b.setAttribute("aria-pressed", String(ledgerTab === id));
        tabs.append(b);
      }
      records2.querySelector(".xh-ledger-scene-frame").remove();
      const recordHeading = records2.querySelector("h3");
      recordHeading.className = "xh-ledger-compact-panel-title";
      const table = records2.querySelector("table");
      table.querySelector("thead").className = "";
      const archiveHeading = records2.querySelector(".xh-ledger-archive-heading"), archived = node3("section", void 0, "xh-ledger-compact-archive");
      archiveHeading.className = "xh-ledger-compact-panel-title";
      archive.tabIndex = 0;
      archived.append(paperFrame(assets, "xh-scene-compact-border"), archiveHeading, archive);
      records2.append(paperFrame(assets, "xh-scene-compact-border"));
      commissions.querySelector(".xh-ledger-scene-frame").remove();
      commissions.querySelector("h3").className = "xh-ledger-compact-panel-title";
      for (const name of commissions.querySelectorAll(".xh-ledger-task-name")) name.tabIndex = 0;
      commissions.append(paperFrame(assets, "xh-scene-compact-border"));
      records2.hidden = ledgerTab !== "flow";
      archived.hidden = ledgerTab !== "archive";
      commissions.hidden = ledgerTab !== "tasks";
      stage.replaceChildren(heading, wallets, tabs, records2, archived, commissions);
    }
    function scenes() {
      if (scenePhone()) return scenesCompact();
      if (phone()) return scenesMobile();
      const size = scenePageSize(), ids = gallery.available("scene"), selected = gallery.selected("scene"), record = gallery.entry(selected), count = Math.max(1, Math.ceil(ids.length / size));
      scenePage = clamp3(scenePage, count);
      const stage = base(SCENE_REFERENCE, "xh-scene-page");
      stage.append(node3("h2", "\u65C5\u9014\u63D2\u753B\u753B\u518C", "xh-sr-only"));
      const current = box(node3("section", void 0, "xh-scene-current"), SCENE_REFERENCE.current);
      current.append(art2(SCENE_REFERENCE, SCENE_REFERENCE.current, [SCENE_REFERENCE.currentPicture, SCENE_REFERENCE.currentCaption], [], "xh-ledger-scene-frame"), node3("h3", "\u5F53\u524D\u914D\u56FE", "xh-sr-only"));
      const picture = box(node3("span", void 0, "xh-scene-current-picture"), [SCENE_REFERENCE.currentPicture[0] - SCENE_REFERENCE.current[0], SCENE_REFERENCE.currentPicture[1] - SCENE_REFERENCE.current[1], SCENE_REFERENCE.currentPicture[2], SCENE_REFERENCE.currentPicture[3]]);
      picture.dataset.artId = selected;
      picture.append(fitted(selected, void 0, SCENE_REFERENCE.currentPicture[2], SCENE_REFERENCE.currentPicture[3]));
      const caption = box(node3("p", record.title, "xh-scene-current-caption"), [SCENE_REFERENCE.currentCaption[0] - SCENE_REFERENCE.current[0], SCENE_REFERENCE.currentCaption[1] - SCENE_REFERENCE.current[1], SCENE_REFERENCE.currentCaption[2], SCENE_REFERENCE.currentCaption[3]]);
      caption.title = record.title;
      current.append(picture, caption, node3("span", "\u6B63\u5728\u4F7F\u7528", "xh-sr-only"));
      stage.append(current);
      if (phone()) {
        const copy2 = node3("div", void 0, "xh-scene-current-copy");
        copy2.append(node3("h3", "\u5F53\u524D\u914D\u56FE"), caption);
        current.replaceChildren(picture, copy2);
      }
      const album = box(node3("section", void 0, "xh-scene-album"), SCENE_REFERENCE.album);
      album.append(art2(SCENE_REFERENCE, SCENE_REFERENCE.album, [[1207, 211, 423, 30], [774, 248, 850, 407], [775, 667, 850, 75]], [], "xh-ledger-scene-frame"), node3("h3", "\u5DF2\u89E3\u9501\u63D2\u753B", "xh-sr-only"));
      const demo = c.snapshot().sceneDemo === true;
      album.append(box(node3("p", "\u5171 " + ids.length + " \u5E45" + (demo ? " \xB7 \u793A\u4F8B" : ""), "xh-scene-total"), [1207 - SCENE_REFERENCE.album[0], 211 - SCENE_REFERENCE.album[1], 174, 30]));
      if (demo) album.append(box(node3("small", "\u5206\u9875\u5BB9\u91CF\u6F14\u793A \xB7 \u975E\u5B9E\u9645\u89E3\u9501\u6570\u91CF", "xh-scene-demo"), [1382 - SCENE_REFERENCE.album[0], 215 - SCENE_REFERENCE.album[1], 244, 24]));
      const grid = box(node3("div", void 0, "xh-scene-grid"), [SCENE_REFERENCE.grid[0] - SCENE_REFERENCE.album[0], SCENE_REFERENCE.grid[1] - SCENE_REFERENCE.album[1], SCENE_REFERENCE.grid[2], SCENE_REFERENCE.grid[3]]);
      grid.setAttribute("role", "group");
      grid.setAttribute("aria-label", "\u53EF\u9009\u65C5\u9014\u63D2\u753B");
      ids.slice(scenePage * size, scenePage * size + size).forEach((id, i) => {
        const entry = gallery.entry(id), active = id === selected, b = box(control(entry.title, () => {
          gallery.choose("scene", null, id);
          focus("scene:" + id);
        }, "scene:" + id, "xh-scene-card"), [i % 3 * 287, Math.floor(i / 3) * 207, 265, 193]);
        b.dataset.artId = id;
        b.setAttribute("aria-pressed", String(active));
        b.title = entry.title;
        b.replaceChildren(art2(SCENE_REFERENCE, SCENE_REFERENCE.tile, SCENE_REFERENCE.tileHoles, [], "xh-scene-card-frame"));
        const image = node3("span", void 0, "xh-scene-card-picture");
        image.append(fitted(id, void 0, 251, active ? 140 : 148));
        b.append(image, node3("span", id === "scene-default" ? "\u9ED8\u8BA4\u63D2\u753B" : entry.title, "xh-scene-card-caption"));
        if (active) {
          const tick = node3("span", void 0, "xh-scene-tick");
          tick.append(icon3("check"));
          b.append(tick, node3("span", "\u4F7F\u7528\u4E2D", "xh-scene-using"));
        }
        grid.append(b);
      });
      album.append(grid, box(pager(scenePage, count, (n) => scenePage = n, "scene", true), [870 - SCENE_REFERENCE.album[0], 672 - SCENE_REFERENCE.album[1], 684, 40]), box(node3("p", "\u70B9\u51FB\u63D2\u753B\u5373\u53EF\u66F4\u6362", "xh-scene-help"), [1045 - SCENE_REFERENCE.album[0], 719 - SCENE_REFERENCE.album[1], 290, 25]));
      stage.append(album);
    }
    function scenesCompact() {
      const ids = gallery.available("scene"), selected = gallery.selected("scene"), record = gallery.entry(selected), count = Math.max(1, Math.ceil(ids.length / 4));
      scenePage = clamp3(scenePage, count);
      const page = node3("div", void 0, "xh-page xh-scene-compact-page"), heading = node3("header", void 0, "xh-scene-compact-heading"), back = control("\u8FD4\u56DE\u624B\u518C", c.back, "back", "xh-scene-compact-back", "arrow");
      back.replaceChildren(icon3("arrow"), node3("span", "\u8FD4\u56DE"));
      heading.append(back, node3("h2", "\u65C5\u9014\u63D2\u753B\u753B\u518C"));
      page.append(heading);
      const current = node3("section", void 0, "xh-scene-compact-current"), picture = node3("span", void 0, "xh-scene-current-picture");
      picture.dataset.artId = selected;
      picture.append(fitted(selected, void 0, 270, 208));
      const copy2 = node3("div", void 0, "xh-scene-compact-copy"), caption = node3("p", record.title, "xh-scene-compact-caption");
      caption.title = record.title;
      caption.tabIndex = 0;
      const using = node3("span", "\u6B63\u5728\u4F7F\u7528", "xh-scene-compact-using");
      using.prepend(icon3("check"));
      copy2.append(node3("h3", "\u5F53\u524D\u914D\u56FE"), caption, using);
      current.append(paperFrame(assets, "xh-scene-compact-border"), picture, copy2);
      page.append(current);
      const album = node3("section", void 0, "xh-scene-compact-album"), title = node3("div", void 0, "xh-scene-compact-album-heading");
      title.append(node3("h3", "\u5DF2\u89E3\u9501\u63D2\u753B"), node3("p", "\u5171 " + ids.length + " \u5E45" + (c.snapshot().sceneDemo ? " \xB7 \u793A\u4F8B" : "")));
      const grid = node3("div", void 0, "xh-scene-compact-grid");
      grid.setAttribute("role", "group");
      grid.setAttribute("aria-label", "\u53EF\u9009\u65C5\u9014\u63D2\u753B");
      for (const id of ids.slice(scenePage * 4, scenePage * 4 + 4)) {
        const entry = gallery.entry(id), active = id === selected, b = control(entry.title, () => {
          gallery.choose("scene", null, id);
          focus("scene:" + id);
        }, "scene:" + id, "xh-scene-compact-card");
        b.dataset.artId = id;
        b.setAttribute("aria-pressed", String(active));
        b.title = entry.title;
        const image = node3("span", void 0, "xh-scene-compact-card-picture");
        image.append(fitted(id, void 0, 350, 164));
        b.replaceChildren(image, node3("span", id === "scene-default" ? "\u9ED8\u8BA4\u63D2\u753B" : entry.title, "xh-scene-compact-card-caption"));
        if (active) {
          const tick = node3("span", void 0, "xh-scene-compact-tick");
          tick.append(icon3("check"));
          b.append(tick);
        }
        grid.append(b);
      }
      album.append(paperFrame(assets, "xh-scene-compact-border"), title, grid, pager(scenePage, count, (n) => scenePage = n, "scene"), node3("p", "\u70B9\u51FB\u63D2\u753B\u5373\u53EF\u66F4\u6362", "xh-scene-compact-help"));
      page.append(album);
      content.append(page);
    }
    return { ledger, scenes, enterScene() {
      const ids = gallery.available("scene");
      scenePage = Math.max(0, Math.floor(ids.indexOf(gallery.selected("scene")) / scenePageSize()));
    }, reset() {
      referenceLedger.reset();
      flowPage = 0;
      taskPage = 0;
      scenePage = 0;
      ledgerTab = "flow";
    } };
  }

  // src/ui/header-weather.mjs
  var HEADER_WEATHER = {
    "ledger-approved": [1402, 39, 169, 26],
    "scene-approved": [1375, 36, 171, 27],
    "picker-approved-xingxing": [1403, 38, 169, 25],
    "picker-approved-xiaogai": [1394, 39, 168, 26],
    "profile-approved-xingxing": [1333, 41, 170, 27],
    "profile-approved-xiaogai": [1355, 38, 176, 27],
    journey: [1404, 37, 166, 25],
    inventory: [1405, 36, 166, 26],
    bonds: [1380, 37, 168, 26],
    notebook: [1403, 36, 164, 26],
    map: [1404, 36, 166, 26],
    "journey-approved": [1403, 37, 164, 26]
  };

  // src/ui/assets/weather/clear.svg
  var clear_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-clear.svg";

  // src/ui/assets/weather/clear-night.svg
  var clear_night_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-clear-night.svg";

  // src/ui/assets/weather/partly-cloudy.svg
  var partly_cloudy_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-partly-cloudy.svg";

  // src/ui/assets/weather/cloudy-night.svg
  var cloudy_night_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-cloudy-night.svg";

  // src/ui/assets/weather/overcast.svg
  var overcast_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-overcast.svg";

  // src/ui/assets/weather/mist.svg
  var mist_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-mist.svg";

  // src/ui/assets/weather/fog.svg
  var fog_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-fog.svg";

  // src/ui/assets/weather/haze.svg
  var haze_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-haze.svg";

  // src/ui/assets/weather/breeze.svg
  var breeze_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-breeze.svg";

  // src/ui/assets/weather/wind.svg
  var wind_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-wind.svg";

  // src/ui/assets/weather/showers.svg
  var showers_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-showers.svg";

  // src/ui/assets/weather/light-rain.svg
  var light_rain_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-light-rain.svg";

  // src/ui/assets/weather/rain.svg
  var rain_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-rain.svg";

  // src/ui/assets/weather/heavy-rain.svg
  var heavy_rain_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-heavy-rain.svg";

  // src/ui/assets/weather/downpour.svg
  var downpour_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-downpour.svg";

  // src/ui/assets/weather/thunder-showers.svg
  var thunder_showers_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-thunder-showers.svg";

  // src/ui/assets/weather/thunderstorm.svg
  var thunderstorm_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-thunderstorm.svg";

  // src/ui/assets/weather/light-snow.svg
  var light_snow_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-light-snow.svg";

  // src/ui/assets/weather/snow.svg
  var snow_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-snow.svg";

  // src/ui/assets/weather/heavy-snow.svg
  var heavy_snow_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-heavy-snow.svg";

  // src/ui/assets/weather/blizzard.svg
  var blizzard_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-blizzard.svg";

  // src/ui/assets/weather/sleet.svg
  var sleet_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-sleet.svg";

  // src/ui/assets/weather/hail.svg
  var hail_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-hail.svg";

  // src/ui/assets/weather/dust.svg
  var dust_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__weather-dust.svg";

  // src/ui/pov-weather.mjs
  var WEATHER_ART = { clear: clear_default, clearNight: clear_night_default, partlyCloudy: partly_cloudy_default, cloudyNight: cloudy_night_default, overcast: overcast_default, mist: mist_default, fog: fog_default, haze: haze_default, breeze: breeze_default, wind: wind_default, showers: showers_default, lightRain: light_rain_default, rain: rain_default, heavyRain: heavy_rain_default, downpour: downpour_default, thunderShowers: thunder_showers_default, thunderstorm: thunderstorm_default, lightSnow: light_snow_default, snow: snow_default, heavySnow: heavy_snow_default, blizzard: blizzard_default, sleet: sleet_default, hail: hail_default, dust: dust_default };
  function weatherView(value, time = {}) {
    const text2 = String(value ?? "").trim(), night = /夜|凌晨|黎明/.test(time.\u65F6\u6BB5 ?? "");
    let key = "overcast", label = text2;
    if (/雨夹雪|雨雪|雪雨/.test(text2)) key = "sleet";
    else if (/冰雹|雹/.test(text2)) key = "hail";
    else if (/暴风雪|暴雪|雪暴/.test(text2)) key = "blizzard";
    else if (/雷暴/.test(text2)) key = "thunderstorm";
    else if (/雷.*雨|雷阵/.test(text2)) key = "thunderShowers";
    else if (/暴雨|倾盆|瓢泼/.test(text2)) key = "downpour";
    else if (/大雨/.test(text2)) key = "heavyRain";
    else if (/中雨/.test(text2)) key = "rain";
    else if (/小雨|细雨|毛毛雨|微雨/.test(text2)) key = "lightRain";
    else if (/阵雨/.test(text2)) key = "showers";
    else if (/雨/.test(text2)) key = "rain";
    else if (/大雪/.test(text2)) key = "heavySnow";
    else if (/小雪|零星.*雪/.test(text2)) key = "lightSnow";
    else if (/雪/.test(text2)) key = "snow";
    else if (/沙|尘/.test(text2)) key = "dust";
    else if (/霾/.test(text2)) key = "haze";
    else if (/浓雾|大雾/.test(text2)) key = "fog";
    else if (/雾/.test(text2)) key = "mist";
    else if (/大风|强风|狂风|风暴/.test(text2)) key = "wind";
    else if (/微风|清风|和风|有风/.test(text2)) key = "breeze";
    else if (/多云|晴.*云|云.*晴/.test(text2)) {
      key = night || /夜/.test(text2) ? "cloudyNight" : "partlyCloudy";
      label = /^(夜间多云|夜多云)$/.test(text2) ? "\u591C\u591A\u4E91" : text2;
    } else if (/阴/.test(text2)) key = "overcast";
    else if (/晴/.test(text2)) {
      key = night || /夜/.test(text2) ? "clearNight" : "clear";
      label = /^(晴和|晴朗|晴天|晴空|晴)$/.test(text2) ? "\u6674" : text2;
    }
    return { key, label, title: text2, src: text2 ? WEATHER_ART[key] : null };
  }
  function fitWeather(field, compact = false) {
    const label = field.querySelector("span"), image = field.querySelector("img"), length = label.textContent.length;
    if (compact) {
      image.style.width = "18px";
      label.style.fontSize = "14px";
      return;
    }
    image.style.width = (length >= 3 ? 28 : length === 2 ? 32 : 37) + "px";
    label.style.fontSize = "26px";
    const available = field.clientWidth - 16 - (image.hidden ? 0 : image.clientWidth + 6);
    if (label.scrollWidth > available) label.style.fontSize = 26 * available / label.scrollWidth + "px";
  }

  // src/ui/handbook-header.mjs
  var EDGES = [45, 238, 418, 584, 754, 945];
  var SELECTED = [["journey", 45, 193], ["inventory", 226, 181], ["bonds", 428, 160], ["notebook", 565, 174], ["map", 756, 179]];
  function createHandbookHeader({ node: node3, top, headerArt, tabButtons, weather, names: names3, assets }) {
    let mounted = false, labels = [], weatherImage, weatherName;
    function mount() {
      top.dataset.independent = "true";
      top.dataset.headerStyle = "journey";
      headerArt.replaceChildren(
        originalWindow("journey", [0, 0, 1839, 86], [[40, 18, 910, 64], [1355, 33, 217, 33]], "xh-component-art", assets, [], false),
        originalWindow("journey", [1153, 31, 58, 52], [], "xh-header-closing-flower", assets, [], false),
        node3("span", void 0, "xh-header-seam")
      );
      headerArt.setAttribute("aria-hidden", "true");
      tabButtons.forEach((button2, i) => {
        position(button2, [EDGES[i] - 45, 0, EDGES[i + 1] - EDGES[i], 61]);
        const normal = i === 0 ? ["inventory", 45, 181] : ["journey", EDGES[i], EDGES[i + 1] - EDGES[i]], active = SELECTED[i];
        button2.replaceChildren(
          originalWindow(normal[0], [normal[1], 18, normal[2], 61], [], "xh-tab-art xh-tab-normal", assets, [], false),
          originalWindow(active[0], [active[1], 18, active[2], 61], [], "xh-tab-art xh-tab-active", assets, [], false),
          node3("span", names3[i], "xh-tab-label")
        );
      });
      const paper = originalWindow("mapdir-paper", [400, 160, 1320, 550], [], "xh-weather-paper", assets, [], false);
      labels = Array.from({ length: 3 }, () => node3("span", void 0, "xh-weather-value"));
      labels[1].classList.add("xh-weather-middle");
      weatherName = node3("span", void 0, "xh-weather-name");
      labels[1].append(node3("span", "\xB7", "xh-weather-dot"), weatherName, node3("span", "\xB7", "xh-weather-dot"));
      weatherImage = node3("img", void 0, "xh-icon");
      weatherImage.alt = "";
      weatherImage.draggable = false;
      weather.replaceChildren(paper, weatherImage, ...labels);
      mounted = true;
    }
    return {
      update(selected, values = [], time = { \u65F6\u6BB5: values[2] }) {
        if (!mounted) mount();
        tabButtons.forEach((button2, i) => {
          button2.setAttribute("aria-selected", String(i === selected));
          button2.tabIndex = i === selected ? 0 : -1;
        });
        const currentWeather = weatherView(values[1], time);
        weather.dataset.weather = currentWeather.key;
        weatherImage.hidden = !currentWeather.src;
        if (currentWeather.src) weatherImage.src = currentWeather.src;
        labels.forEach((label, i) => {
          const value = String(values[i] ?? "");
          if (i === 1) {
            weatherName.textContent = currentWeather.label;
            weatherName.style.paddingInline = currentWeather.label !== value ? (value.length - currentWeather.label.length) / 2 + "em" : "";
          } else label.textContent = i === 0 ? value.replace(/^共历\d+年/, "") : value;
          label.title = value;
          label.setAttribute("aria-label", value);
        });
        weather.dataset.calendar = String(/^共历\d+年/.test(String(values[0] ?? "")));
      },
      reset() {
        mounted = false;
        top.dataset.independent = "false";
      }
    };
  }

  // src/state/time.mjs
  var clockLabel = (time) => time.\u949F\u70B9?.replace(/:00$/, "") ?? null;

  // src/state/gameplay.mjs
  var round = (n) => Math.round(n * 1e9) / 1e9;
  function carriedWeight(s, who) {
    let total = 0, known = true;
    for (const [id, item] of Object.entries(s.\u7269\u54C1 ?? {})) {
      let storage = s.\u50A8\u4F4D?.[item.storage_id], insideMagic = false, held = false;
      const seen = /* @__PURE__ */ new Set();
      while (storage) {
        if (storage.\u7C7B\u578B === "\u79D8\u6CD5\u884C\u56CA") insideMagic = true;
        if (storage.\u7C7B\u578B === "\u968F\u8EAB" && storage.\u4FDD\u7BA1\u8005 === who && storage.\u5730\u70B9 === s.\u573A\u666F.\u5730\u70B9) held = true;
        const parent = s.\u7269\u54C1?.[storage.\u7269\u54C1\u5F15\u7528];
        if (!parent || seen.has(parent.storage_id)) break;
        seen.add(parent.storage_id);
        storage = s.\u50A8\u4F4D?.[parent.storage_id];
      }
      if (!held || insideMagic) continue;
      const weight = s.\u73A9\u6CD5?.\u7269\u8D44[id]?.\u5355\u4F4D\u91CD\u91CF;
      if (weight === null || weight === void 0) known = false;
      else total += weight * item.\u6570\u91CF;
    }
    return { \u5DF2\u77E5\u516C\u65A4: round(total), \u5B8C\u6574: known };
  }

  // src/ui/gameplay-details.mjs
  function createGameplayDetails(c) {
    const { node: node3, button: button2, icon: icon3, content, coins: coins2, row } = c;
    let factPage = 0, factFilter = "all", showClosed = false, obligationPage = 0;
    function panel(title) {
      const p = node3("section", void 0, "xh-panel xh-gameplay-detail"), h = node3("h2");
      h.append(icon3("book"), node3("span", title));
      p.append(h);
      content.append(p);
      return p;
    }
    const paragraph = (p, value) => p.append(node3("p", value));
    const section = (p, title) => {
      const s = node3("section", void 0, "xh-gameplay-section");
      s.append(node3("h3", title));
      p.append(s);
      return s;
    };
    function viewButton(title, run, ico) {
      const b = button2(title, () => {
        run();
        c.render();
        const current = [...content.querySelectorAll("[data-gameplay-focus]")].find((e) => e.dataset.gameplayFocus === title);
        (current?.disabled ? current.closest("nav")?.querySelector("button:not(:disabled)") : current)?.focus({ preventScroll: true });
      }, ico);
      b.dataset.gameplayFocus = title;
      return b;
    }
    function obligations(s, back) {
      const mobile = c.isMobileObligations?.(), p = mobile ? node3("div", void 0, "xh-page xh-obligations-mobile-page") : panel("\u672A\u7ED3\u4E8B\u9879"), nav = node3("nav", void 0, "xh-gameplay-filters");
      if (mobile) {
        const heading = node3("header", void 0, "xh-scene-compact-heading");
        back.classList.add("xh-scene-compact-back");
        heading.append(back, node3("h2", "\u672A\u7ED3\u4E8B\u9879"));
        p.append(heading);
        content.append(p);
      }
      nav.setAttribute("aria-label", "\u6B3E\u9879\u4E8B\u9879\u7B5B\u9009");
      for (const [value, title] of [[false, "\u5C1A\u672A\u7ED3\u6E05"], [true, "\u5168\u90E8\u4E8B\u9879"]]) {
        const b = viewButton(title, () => {
          showClosed = value;
          obligationPage = 0;
        }, null);
        b.setAttribute("aria-pressed", String(showClosed === value));
        nav.append(b);
      }
      p.append(nav);
      const all = showClosed ? Object.entries(s.\u73A9\u6CD5?.\u672A\u7ED3\u4E8B\u9879 ?? {}) : openObligations(s);
      obligationPage = Math.max(0, Math.min(obligationPage, all.length - 1));
      const list = mobile ? node3("section", void 0, "xh-mobile-obligation-list") : p;
      if (mobile) {
        list.append(paperFrame(c.assets, "xh-scene-compact-border"));
        p.append(list);
      }
      if (!all.length) paragraph(list, s.\u73A9\u6CD5 ? "\u76EE\u524D\u6CA1\u6709" + (showClosed ? "\u5DF2\u767B\u8BB0\u4E8B\u9879\u3002" : "\u672A\u7ED3\u6B3E\u9879\u3001\u5F85\u9000\u62BC\u91D1\u6216\u672A\u7ED3\u9884\u4ED8\u3002") : "\u5C1A\u672A\u767B\u8BB0\u6B3E\u9879\u4E8B\u9879\u3002");
      for (const [id, v] of mobile ? all.slice(obligationPage, obligationPage + 1) : all) {
        const d = node3("details", void 0, "xh-gameplay-record");
        d.dataset.obligation = id;
        d.open = true;
        d.append(node3("summary", v.\u540D\u79F0));
        const body = node3("div");
        if (mobile) {
          body.className = "xh-mobile-obligation-body";
          body.tabIndex = 0;
        }
        for (const [key, value] of [["\u7C7B\u522B", v.\u7C7B\u522B + " \xB7 " + v.\u65B9\u5411], ["\u94B1\u5305", entityName(s, v.\u94B1\u5305)], ["\u5BF9\u8C61", entityName(s, v.\u5BF9\u65B9)], ["\u672A\u7ED3\u91D1\u989D", coins2(v.\u672A\u7ED3\u91D1\u989D)], ["\u5F85\u9000\u62BC\u91D1", coins2(v.\u62BC\u91D1\u4F59\u989D)], ["\u672A\u7ED3\u9884\u4ED8", coins2(v.\u9884\u4ED8\u4F59\u989D)], ["\u8BB0\u5F55\u4F9D\u636E", v.\u4F9D\u636E]]) row(body, key, value);
        d.append(body);
        list.append(d);
      }
      if (mobile) {
        const pager = node3("nav", void 0, "xh-mobile-obligation-pager");
        pager.setAttribute("aria-label", "\u6B3E\u9879\u4E8B\u9879\u5206\u9875");
        const prev = viewButton("\u4E0A\u4E00\u9879", () => obligationPage--, "arrow"), next = viewButton("\u4E0B\u4E00\u9879", () => obligationPage++, "arrow");
        prev.disabled = obligationPage === 0;
        next.disabled = obligationPage >= all.length - 1;
        next.replaceChildren(node3("span", "\u4E0B\u4E00\u9879"), icon3("arrow"));
        pager.append(prev, node3("span", (all.length ? obligationPage + 1 : 0) + " / " + all.length), next);
        p.append(pager);
      }
    }
    function memories(s) {
      const p = panel("\u5171\u540C\u7ECF\u5386 \xB7 \u8BB0\u5F55\u6765\u6E90"), all = facts(s), items = all.filter((v) => factFilter === "all" || v.\u91CD\u70B9), pages = Math.max(1, Math.ceil(items.length / 8));
      factPage = Math.min(factPage, pages - 1);
      p.classList.add("xh-memory-sources");
      const nav = node3("nav", void 0, "xh-gameplay-filters");
      for (const [value, title] of [["all", "\u5168\u90E8\u7ECF\u5386\u4E0E\u6863\u6848"], ["highlights", "\u91CD\u70B9\u7ECF\u5386"]]) {
        const b = viewButton(title, () => {
          factFilter = value;
          factPage = 0;
        }, null);
        b.setAttribute("aria-pressed", String(factFilter === value));
        nav.append(b);
      }
      p.append(nav, node3("p", "\u5171 " + items.length + " \u6761\uFF1B\u91CD\u70B9\u680F\u6EE1\u989D\u540E\uFF0C\u65B0\u4E8B\u5B9E\u4ECD\u4FDD\u5B58\u5728\u6863\u6848\u4E2D\u3002", "xh-muted"));
      if (!items.length) paragraph(p, "\u5C1A\u65E0\u5DF2\u8BB0\u5F55\u7684\u7ECF\u5386\u3002");
      for (const v of items.slice(factPage * 8, factPage * 8 + 8)) {
        const article = node3("article", void 0, "xh-gameplay-fact");
        article.dataset.factId = v.id;
        article.append(node3("h3", v.\u6807\u9898 ?? "\u65C5\u9014\u7ECF\u5386"), node3("p", v.\u5185\u5BB9));
        row(article, "\u5730\u70B9", placeLabel(s, v.\u5730\u70B9));
        row(article, "\u8BB0\u5F55\u4F9D\u636E", v.\u4F9D\u636E);
        p.append(article);
      }
      const pager = node3("nav", void 0, "xh-gameplay-pagination");
      pager.setAttribute("aria-label", "\u7ECF\u5386\u6863\u6848\u5206\u9875");
      for (const [label, delta] of [["\u4E0A\u4E00\u9875\u6863\u6848", -1], ["\u4E0B\u4E00\u9875\u6863\u6848", 1]]) {
        const b = viewButton(label, () => {
          factPage += delta;
          content.scrollTop = 0;
        }, "arrow");
        b.disabled = delta < 0 ? factPage === 0 : factPage >= pages - 1;
        pager.append(b);
      }
      pager.insertBefore(node3("span", factPage + 1 + " / " + pages), pager.lastElementChild);
      p.append(pager);
    }
    function transit(s) {
      const p = panel("\u6B64\u523B\u7684\u65C5\u7A0B");
      for (const [key, value] of [["\u6240\u5728", placeLabel(s, s.\u573A\u666F.\u5730\u70B9)], ["\u5730\u533A", c.regionName(s.\u573A\u666F.\u5730\u533A)], ["\u65E5\u671F", s.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? "\u5C1A\u672A\u8BB0\u5F55"], ["\u5B63\u8282", s.\u573A\u666F.\u65F6\u95F4.\u5B63\u8282], ["\u65F6\u6BB5", s.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5], ["\u5929\u6C14", s.\u573A\u666F.\u5929\u6C14 ?? "\u5F85\u8865"], ["\u4EA4\u901A", s.\u65C5\u7A0B.\u4EA4\u901A?.\u63CF\u8FF0 ?? "\u5C1A\u672A\u8BB0\u5F55"], ["\u8DEF\u51B5", s.\u65C5\u7A0B.\u4EA4\u901A?.\u8DEF\u51B5 ?? "\u5C1A\u672A\u8BB0\u5F55"]]) row(p, key, value);
      const companions = section(p, "\u540C\u884C\u4F19\u4F34\u4E0E\u8F66\u8F86"), entries2 = Object.entries(s.\u73A9\u6CD5?.\u4EA4\u901A\u4E2A\u4F53 ?? {});
      if (!entries2.length) paragraph(companions, "\u5C1A\u672A\u767B\u8BB0\u72EC\u7ACB\u4F19\u4F34\u6216\u8F66\u8F86\u3002");
      for (const [id, v] of entries2) {
        const d = node3("details", void 0, "xh-gameplay-record");
        d.dataset.companion = id;
        d.append(node3("summary", v.\u540D\u79F0 + " \xB7 " + v.\u72B6\u6001));
        const body = node3("div");
        for (const [key, value] of [["\u7C7B\u522B", v.\u7C7B\u522B], ["\u6240\u5728", placeLabel(s, v.\u5730\u70B9)], ["\u5F52\u5C5E", v.\u7C7B\u522B === "\u667A\u6167\u540C\u884C\u8005" ? "\u81EA\u4E3B\u540C\u884C\u8005" : entityName(s, v.\u5F52\u5C5E)], ["\u4FDD\u7BA1\u8005", entityName(s, v.\u4FDD\u7BA1\u8005)], ["\u901A\u884C\u65B9\u5F0F", v.\u65B9\u5F0F.join("\u3001") || "\u5C1A\u672A\u8BB0\u5F55"], ["\u5B9E\u9645\u8BAD\u7EC3", v.\u8BAD\u7EC3.join("\u3001") || "\u5C1A\u672A\u8BB0\u5F55"], ["\u540C\u884C\u610F\u613F", v.\u613F\u610F\u540C\u884C ? "\u613F\u610F\u540C\u884C" : "\u672A\u540C\u610F\u540C\u884C"], ["\u5173\u7CFB", v.\u957F\u671F && v.\u5177\u540D ? "\u5177\u540D\u957F\u671F\u4F19\u4F34" : v.\u957F\u671F ? "\u957F\u671F\u5173\u7CFB" : "\u5F53\u524D\u8BB0\u5F55"], ["\u4F9D\u636E", v.\u4F9D\u636E]]) row(body, key, value);
        d.append(body);
        companions.append(d);
      }
      const load = section(p, "\u968F\u8EAB\u7269\u8D44\u4E0E\u884C\u56CA");
      for (const id of ["xingxing", "xiaogai"]) {
        if (s.\u7269\u54C1 == null) {
          row(load, entityName(s, id), "\u7269\u54C1\u4E0E\u91CD\u91CF\u8D44\u6599\u5F85\u8865");
          continue;
        }
        const weight = carriedWeight(s, id);
        row(load, entityName(s, id), weight.\u5B8C\u6574 ? numberText(weight.\u5DF2\u77E5\u516C\u65A4) + " \u516C\u65A4" : "\u5DF2\u77E5\u90E8\u5206 " + numberText(weight.\u5DF2\u77E5\u516C\u65A4) + " \u516C\u65A4\uFF1B\u53E6\u6709\u91CD\u91CF\u5F85\u8865");
      }
      for (const [id, st] of Object.entries(s.\u50A8\u4F4D ?? {})) {
        const b = bagView(s, id);
        if (b && st.\u7C7B\u578B === "\u79D8\u6CD5\u884C\u56CA") {
          const d = node3("div", void 0, "xh-gameplay-bag");
          row(d, b.\u540D\u79F0, b.\u72B6\u6001 + " \xB7 " + numberText(b.\u5DF2\u7528\u5BB9\u79EF) + " / " + numberText(b.\u5BB9\u91CF) + " \u5347");
          row(d, "\u6240\u5728", placeLabel(s, st.\u5730\u70B9));
          load.append(d);
        }
      }
      const effects = section(p, "\u5F53\u524D\u72B6\u51B5\u4E0E\u6301\u7EED\u6548\u679C");
      for (const id of ["xingxing", "xiaogai"]) {
        effects.append(node3("h4", entityName(s, id)), node3("p", conditionText(s, id)));
      }
      p.append(button2("\u67E5\u770B\u672A\u7ED3\u4E8B\u9879\uFF08" + openObligations(s).length + "\uFF09", () => c.open("obligations"), "book"));
      if (s.\u73A9\u6CD5?.\u7EC8\u70B9) {
        const end = section(p, "\u661F\u6865\u8BB0\u5F55");
        row(end, "\u5F53\u524D\u9636\u6BB5", s.\u73A9\u6CD5.\u7EC8\u70B9.\u9636\u6BB5);
        row(end, "\u4F9D\u636E", s.\u73A9\u6CD5.\u7EC8\u70B9.\u4F9D\u636E);
        if (s.\u73A9\u6CD5.\u7EC8\u70B9.\u786E\u8BA4\u539F\u8BDD) row(end, "\u73A9\u5BB6\u9009\u62E9", s.\u73A9\u6CD5.\u7EC8\u70B9.\u786E\u8BA4\u539F\u8BDD);
      }
    }
    return { obligations, memories, transit, reset() {
      factPage = 0;
      factFilter = "all";
      showClosed = false;
      obligationPage = 0;
    } };
  }

  // src/ui/assets/controls/equipment-button-v1.png
  var equipment_button_v1_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/650b6b7606f552736f2604a24fe3081602e3dec9/handbook/images/controls/equipment-button-v1.png";

  // src/ui/equipment-action.mjs
  function createEquipmentAction(c) {
    let pending = false, epoch = 0;
    const reason = (s) => s.historical ? "\u8BF7\u5728\u6700\u65B0\u56DE\u590D\u4E2D\u66F4\u6362\u88C5\u5907\u3002" : s.generating ? "\u56DE\u590D\u751F\u6210\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u66F4\u6362\u3002" : s.recovery ? "\u672C\u6761\u72B6\u6001\u5C1A\u672A\u4FDD\u5B58\uFF0C\u8BF7\u91CD\u65B0\u8BFB\u53D6\u3002" : !c.connected() ? "\u88C5\u5907\u529F\u80FD\u5C1A\u672A\u63A5\u901A\uFF0C\u8BF7\u91CD\u65B0\u8BFB\u53D6\u3002" : "";
    return {
      reset() {
        epoch++;
        pending = false;
      },
      button(itemId) {
        const snapshot = c.snapshot(), plan = equipmentPlan(snapshot.state, itemId), blocked = reason(snapshot) || plan.reason, label = pending ? "\u4FDD\u5B58\u4E2D\u2026" : plan.removing ? "\u5378\u4E0B\u88C5\u5907" : "\u7A7F\u6234\u88C5\u5907";
        const b = c.button(label, async () => {
          if (pending) return;
          const now = c.snapshot(), next = equipmentPlan(now.state, itemId);
          if (reason(now) || next.disabled) return;
          const token = epoch, scope = now.scope, name = equipmentDisplayName(now.state.\u7269\u54C1[itemId].\u540D\u79F0);
          c.clear();
          pending = true;
          c.render();
          try {
            await c.change({ actor: next.actor, slot: next.slot, itemId: next.itemId, version: now.equipmentVersion }, scope);
            if (token !== epoch || scope !== c.snapshot().scope) return;
            c.say((next.removing ? "\u5DF2\u5378\u4E0B" : "\u5DF2\u4E3A" + c.NAMES[next.actor] + "\u7A7F\u6234") + name + "\u3002");
          } catch (error) {
            if (token === epoch && scope === c.snapshot().scope) c.error(error.message || "\u88C5\u5907\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u8BFB\u53D6\u3002");
          } finally {
            if (token === epoch) {
              pending = false;
              c.render();
            }
          }
        }, null, "xh-equip-open");
        const art2 = c.node("img", void 0, "xh-equip-button-art");
        art2.src = equipment_button_v1_default;
        art2.alt = "";
        art2.width = 2172;
        art2.height = 724;
        art2.draggable = false;
        art2.setAttribute("aria-hidden", "true");
        b.prepend(art2);
        b.disabled = pending || !!blocked || plan.disabled;
        b.title = blocked || (plan.actor ? (plan.removing ? "\u5378\u4E0B" : "\u4E3A" + c.NAMES[plan.actor] + "\u7A7F\u6234") + equipmentDisplayName(snapshot.state.\u7269\u54C1[itemId].\u540D\u79F0) : "\u8BF7\u5148\u9009\u62E9\u4E00\u4EF6\u88C5\u5907\u3002");
        b.dataset.equipmentAction = itemId ?? "";
        b.setAttribute("aria-busy", String(pending));
        return b;
      }
    };
  }

  // src/ui/handbook.mjs
  var NAMES = { xingxing: "\u9192\u9192", xiaogai: "\u5C0F\u76D6", shared: "\u5171\u540C" };
  var TABS = ["\u65C5\u9014", "\u884C\u56CA", "\u7F81\u7ECA", "\u624B\u8BB0", "\u5730\u56FE"];
  var MOBILE_PAGE_WIDTH = 904;
  var MOBILE_PAGE_HEIGHT = 1184;
  var PATHS = {
    box: "m3 6 9-4 9 4v13l-9 4-9-4V6Zm0 0 9 4 9-4M12 10v13M7 4l10 4",
    person: "M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4 22v-4a8 8 0 0 1 16 0v4",
    eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Zm10-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    lock: "M6 10h12v12H6V10Zm3 0V6a3 3 0 0 1 6 0v4M12 15v3",
    search: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm5 12 7 7",
    note: "M5 3h14v19H5V3Zm3 5h8M8 12h8M8 16h6M9 1v4m6-4v4",
    mountain: "m1 21 8-17 5 10 3-6 6 13H1ZM6 10l3 3 2-3",
    snow: "M12 1v22M2 6l20 12M2 18 22 6M8 3l4 4 4-4M8 21l4-4 4 4",
    volcano: "m2 22 7-15 4 3 3-3 6 15H2ZM10 5l-1-4m4 4 3-4M7 17l5-6 4 6",
    palm: "M12 22V8M3 10Q5 1 12 8Q20 1 22 10M4 5q5-6 8 3q4-8 9-5M7 22h11",
    wheat: "M12 23V3M12 8Q4 8 5 2q7 1 7 6Zm0 6Q4 14 5 8q7 1 7 6Zm0 4q8 0 7-6-7 1-7 6Zm0-8q8 0 7-6-7 1-7 6Z",
    forest: "m7 2-5 8h3l-4 7h5v5h3v-5h5l-5-7h3L7 2Zm10 1-3 7h2l-3 6h3v6h3v-6h4l-4-6h3l-5-7Z",
    ship: "M2 18h20l-4 4H6l-4-4Zm9-16v14H3L11 2Zm3 3 7 11h-7V5Z",
    castle: "M2 23V9h5V3h4v6h3V1h4v8h4v14H2ZM6 13v3m4-3v3m7-3v3M10 23v-5h5v5",
    expand: "M3 9V3h6m6 0h6v6M3 15v6h6m6 0h6v-6",
    runner: "M16 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7 8l5-2 4 4h5M12 7l-3 6 6 3-2 6M9 13l-4 4-3-1",
    compass: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4 5-2.5 5.5L8 16l2.5-5.5L16 8ZM12 1v2m0 18v2",
    bag: "M8 7V5a4 4 0 0 1 8 0v2M5 7h14l2 14H3L5 7Zm3 0v5m8-5v5M8 17h8",
    heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
    book: "M12 5C8 2 4 3 2 4v16c3-2 7-1 10 1 3-2 7-3 10-1V4c-3-1-7-2-10 1Zm0 0v16",
    map: "m2 5 6-3 8 3 6-3v17l-6 3-8-3-6 3V5Zm6-3v17m8-14v17",
    calendar: "M5 5h14v16H5V5Zm3-3v6m8-6v6M5 10h14M8 14h1m3 0h1m3 0h1m-9 3h1m3 0h1",
    sun: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2",
    moon: "M20 16A9 9 0 0 1 8 4a9 9 0 1 0 12 12Z",
    feather: "M4 21 8 11C13 2 20 2 22 2c0 7-7 13-14 13M4 21 17 7M8 15h6",
    coin: "M4 6c0-4 16-4 16 0s-16 4-16 0Zm0 0v5c0 4 16 4 16 0V6M4 11v5c0 4 16 4 16 0v-5M4 16v4c0 3 16 3 16 0v-4",
    pin: "M12 22s8-8 8-14A8 8 0 0 0 4 8c0 6 8 14 8 14Zm0-17a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
    boot: "M7 2h7v10l7 4v5H2v-5l5-4V2Zm0 5h7M2 18h19",
    star: "m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z",
    target: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM12 1v5m0 12v5M1 12h5m12 0h5",
    plus: "M12 4v16M4 12h16",
    minus: "M4 12h16",
    arrow: "M5 12h14m-6-6 6 6-6 6",
    close: "m6 6 12 12M6 18 18 6",
    flower: "M12 11C5 7 8 1 12 7c4-6 7 0 0 4Zm1 1c7-4 10 2 3 3 6 4 0 8-3 0Zm-2 0c-7-4-10 2-3 3-6 4 0 8 3 0Zm1-1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
    water: "M12 2S4 11 4 16a8 8 0 0 0 16 0c0-5-8-14-8-14Z",
    check: "m4 12 5 5L20 6"
  };
  var text = (v) => v === null || v === void 0 ? "\u5F85\u8865\u8D44\u6599" : String(v);
  var node = (tag, value, cls) => {
    const e = document.createElement(tag);
    if (value !== void 0) e.textContent = text(value);
    if (cls) e.className = cls;
    return e;
  };
  function icon(name) {
    const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    e.setAttribute("viewBox", "0 0 24 24");
    e.setAttribute("aria-hidden", "true");
    e.classList.add("xh-icon");
    const p = document.createElementNS(e.namespaceURI, "path");
    p.setAttribute("d", PATHS[name] ?? PATHS.star);
    e.append(p);
    return e;
  }
  function button(label, run, name, cls = "") {
    const b = node("button", void 0, cls);
    b.type = "button";
    if (label) b.setAttribute("aria-label", label);
    if (name) b.append(icon(name));
    b.append(node("span", label));
    b.addEventListener("click", run);
    return b;
  }
  function coins(v) {
    if (v == null) return "\u5F85\u8865\u8D44\u6599";
    const g = Math.floor(v / 1e4), s = Math.floor(v % 1e4 / 100), c = v % 100;
    return [g ? g + " \u91D1" : "", s ? s + " \u94F6" : "", c || !g && !s ? c + " \u94DC" : ""].filter(Boolean).join(" ");
  }
  var mountCount = 0;
  function mountHandbook(root, adapter = {}) {
    root.__xhHandbook?.destroy();
    const uid = "xh-book-" + ++mountCount, positions = Array(5).fill(0);
    let snapshot = { status: "loading", scope: "", readonly: true, state: null }, tab = 0, detail = null, draft = "", appended = false, pending = false, generation = 0, destroyed = false;
    let ownerFilter = "shared", itemCategory = "\u5168\u90E8", selectedItem = null, itemPage = 0, noteFilter = "\u89C1\u95FB", notePage = 0, renderedTab = null, renderedItemPage = 0;
    const mapState = { zoom: 1, x: 0, y: 0, region: null, place: null, initialized: false, directoryMode: "overview", placePage: 0, relatedPage: 0 };
    const assets = { ...MATTE_ASSETS, ...adapter.assets };
    const host = node("div", void 0, "xh-host"), book = node("section", void 0, "xh-book");
    book.setAttribute("aria-label", "\u65C5\u4EBA\u624B\u518C");
    host.style.setProperty("--xh-mobile-page-height", MOBILE_PAGE_HEIGHT + "px");
    if (adapter.mobilePreview === true) host.dataset.mobilePreview = "true";
    const top = node("header", void 0, "xh-top"), tabs = node("nav", void 0, "xh-tabs");
    tabs.setAttribute("role", "tablist");
    tabs.setAttribute("aria-label", "\u624B\u518C\u5206\u9875");
    const content = node("div", void 0, "xh-content");
    content.id = uid + "-panel";
    content.tabIndex = 0;
    content.setAttribute("role", "tabpanel");
    const weather = node("div", void 0, "xh-weather"), summary = node("p", "\u6B63\u5728\u8BFB\u53D6\u65C5\u9014\u8BB0\u5F55\u2026", "xh-summary");
    const footer = node("footer", "", "xh-sr-only"), footerArt = node("div", void 0, "xh-footer-art");
    footer.setAttribute("role", "status");
    footer.setAttribute("aria-live", "polite");
    const say = (v) => {
      if (!destroyed) footer.textContent = v;
    };
    assets.__onArtError = () => say("\u90E8\u5206\u63D2\u753B\u672A\u80FD\u8F7D\u5165\uFF0C\u6587\u5B57\u8D44\u6599\u4E0E\u6309\u94AE\u4ECD\u53EF\u4F7F\u7528\u3002");
    const theme = button("\u591C\u8272", () => {
      book.dataset.theme = book.dataset.theme === "dark" ? "light" : "dark";
      theme.querySelector("span").textContent = book.dataset.theme === "dark" ? "\u65E5\u5149" : "\u591C\u8272";
    }, "moon", "xh-theme");
    theme.setAttribute("aria-label", "\u5207\u6362\u660E\u6697\u914D\u8272");
    const tabButtons = TABS.map((name, i) => {
      const b = button(name, () => select(i), ["compass", "bag", "heart", "book", "map"][i]);
      b.id = uid + "-tab-" + i;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-controls", content.id);
      b.addEventListener("keydown", (e) => {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
        e.preventDefault();
        const n = e.key === "Home" ? 0 : e.key === "End" ? 4 : (tab + (e.key === "ArrowLeft" ? 4 : 1)) % 5;
        select(n);
        tabButtons[n].focus();
      });
      tabs.append(b);
      return b;
    });
    tabButtons.forEach((b, i) => b.setAttribute("aria-label", TABS[i]));
    const headerArt = node("div", void 0, "xh-header-art");
    top.append(headerArt, tabs, weather, theme);
    const desktopHeader = createHandbookHeader({ node, top, headerArt, tabButtons, weather, names: TABS, assets });
    const summaryToggle = button("\u67E5\u770B\u6B64\u523B\u7684\u65C5\u7A0B", () => open("transit"), "compass", "xh-summary-toggle");
    top.append(summaryToggle);
    let phoneChrome = null;
    const notice = node("div", void 0, "xh-state-notice");
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-live", "polite");
    notice.hidden = true;
    const noticeText = node("span"), retry = button("\u91CD\u65B0\u8BFB\u53D6", () => {
      equipmentError = "";
      adapter.retry?.();
    }, "arrow");
    notice.append(noticeText, retry);
    book.append(top, summary, content, footerArt, footer);
    host.append(book);
    root.replaceChildren(notice, host);
    let scale = 1, motionContext = null, stopProfileMotion = () => {
    }, pages, profiles, directory, picker, bookDetails, gameDetails, renderedRegion = null, equipmentError = "";
    const resize = (redraw = true) => {
      const previousLayout = host.dataset.layout, w = host.getBoundingClientRect().width, mobile = adapter.layout !== "desktop" && w < 1e3, mobileHome = mobile && !adapter.mobilePreview && (!detail || detail.kind === "person" || detail.kind === "map-directory" || detail.kind === "artbook" || detail.kind === "ledger" || detail.kind === "obligations");
      host.dataset.layout = mobileHome ? "mobile-home" : mobile ? "mobile" : "desktop";
      scale = mobileHome ? w / MOBILE_PAGE_WIDTH : mobile ? adapter.mobilePreview ? Math.min(w, 430) / 430 : 1 : w / 1840;
      book.style.marginLeft = mobile && adapter.mobilePreview ? Math.max(0, (w - 430 * scale) / 2) + "px" : "0px";
      book.style.transform = mobile && !adapter.mobilePreview && !mobileHome ? "none" : "scale(" + scale + ")";
      book.style.width = mobileHome ? MOBILE_PAGE_WIDTH + "px" : mobile ? adapter.mobilePreview ? "430px" : "100%" : "1840px";
      host.style.height = mobileHome ? MOBILE_PAGE_HEIGHT * scale + "px" : mobile ? adapter.mobilePreview ? 698.75 * scale + "px" : "560px" : 867 * scale + "px";
      pages?.resizeMap();
      if (redraw && pages && previousLayout !== host.dataset.layout && snapshot.status === "ready") render3();
    };
    const observer = new ResizeObserver(() => resize());
    observer.observe(host);
    resize();
    const view = { get ownerFilter() {
      return ownerFilter;
    }, set ownerFilter(v) {
      ownerFilter = v;
    }, get itemCategory() {
      return itemCategory;
    }, set itemCategory(v) {
      itemCategory = v;
    }, get selectedItem() {
      return selectedItem;
    }, set selectedItem(v) {
      selectedItem = v;
    }, get itemPage() {
      return itemPage;
    }, set itemPage(v) {
      itemPage = v;
    }, get noteFilter() {
      return noteFilter;
    }, set noteFilter(v) {
      if (noteFilter !== v) notePage = 0;
      noteFilter = v;
    }, get notePage() {
      return notePage;
    }, set notePage(v) {
      notePage = v;
    }, get renderedItemPage() {
      return renderedItemPage;
    }, set renderedItemPage(v) {
      renderedItemPage = v;
    }, map: mapState };
    const gallery = createArtbook({ snapshot: () => snapshot, assets, changed: () => render3(), getPortraitImages: () => [snapshot.portraitImages, adapter.portraitImages], getSceneImages: () => [snapshot.sceneImages, adapter.sceneImages] });
    pages = referencePages({ isDesktop: () => host.dataset.layout === "desktop", notebookFrame: frame_v1_default, node, button, icon, coins, text, NAMES, content, assets, view, render: render3, open, select, action, row, list, empty, gallery, mobilePreview: adapter.mobilePreview === true, isMobile: () => host.dataset.layout === "mobile", isMobileJourney: () => host.dataset.layout === "mobile-home" && tab === 0, isMobileInventory: () => host.dataset.layout === "mobile-home" && tab === 1, isMobileNotebook: () => host.dataset.layout === "mobile-home" && tab === 3, isMobileBonds: () => host.dataset.layout === "mobile-home" && tab === 2, isMobileMap: () => host.dataset.layout === "mobile-home" && tab === 4, getPlaceImages: () => [snapshot.placeImages, adapter.placeImages], getRegionImages: () => [snapshot.regionImages, adapter.regionImages], getScale: () => scale, getItemImages: () => [snapshot.itemImages, adapter.itemImages], getSkillImages: () => [snapshot.skillImages, adapter.skillImages], getSkillDetails: () => [snapshot.skillDetails, adapter.skillDetails], snapshot: () => snapshot, equipmentButton: (id) => equipmentAction.button(id) });
    profiles = createProfilePages({
      node,
      button,
      icon,
      NAMES,
      content,
      assets,
      render: render3,
      open,
      isMobileProfile: () => host.dataset.layout === "mobile-home" && detail?.kind === "person",
      mobilePreview: adapter.mobilePreview === true,
      isMobile: () => host.dataset.layout === "mobile",
      snapshot: () => snapshot,
      getSkillImages: () => [snapshot.skillImages, adapter.skillImages],
      getSkillDetails: () => [snapshot.skillDetails, adapter.skillDetails],
      face: (id, cls) => pages.face(id, cls),
      itemArtwork: (name, cls, id) => pages.itemArtwork(name, cls, id),
      back: () => {
        detail = null;
        render3();
        content.scrollTop = positions[tab];
      },
      openItem: (id) => {
        ownerFilter = "shared";
        itemCategory = "\u5168\u90E8";
        selectedItem = id;
        if (adapter.mobilePreview || host.dataset.layout === "mobile-home") pages.openMobileItem(id);
        select(1);
      }
    });
    directory = createMapDirectory({
      node,
      button,
      icon,
      content,
      assets,
      view,
      render: render3,
      open,
      isMobileDirectory: () => host.dataset.layout === "mobile-home" && detail?.kind === "map-directory",
      mobilePreview: adapter.mobilePreview === true,
      isMobile: () => host.dataset.layout === "mobile",
      back: () => {
        detail = null;
        render3();
        content.scrollTop = positions[tab];
      },
      getPlaceImages: () => [snapshot.placeImages, adapter.placeImages],
      getRegionImages: () => [snapshot.regionImages, adapter.regionImages],
      getOrnamentSize: (key) => ORIGINALS[key]?.slice(1)
    });
    picker = createPortraitPicker({ node, button, icon, content, assets, gallery, NAMES, render: render3, isMobilePicker: () => host.dataset.layout === "mobile-home", mobilePreview: adapter.mobilePreview === true, isMobile: () => host.dataset.layout === "mobile", snapshot: () => snapshot, back: (id) => open("person", id) });
    bookDetails = createLedgerScenePages({ node, button, icon, content, assets, gallery, coins, NAMES, render: render3, open, mobilePreview: adapter.mobilePreview === true, isMobile: () => host.dataset.layout === "mobile", isMobileScenes: () => host.dataset.layout === "mobile-home", isMobileLedger: () => host.dataset.layout === "mobile-home", snapshot: () => snapshot, itemArtwork: (name, cls, id) => pages.itemArtwork(name, cls, id), back: () => {
      detail = null;
      render3();
      content.scrollTop = positions[tab];
    } });
    gameDetails = createGameplayDetails({ node, button, icon, content, coins, row, render: render3, open, regionName, assets, isMobileObligations: () => host.dataset.layout === "mobile-home", itemArtwork: (name, cls, id) => pages.itemArtwork(name, cls, id) });
    const equipmentAction = createEquipmentAction({ node, button, NAMES, render: render3, say, snapshot: () => snapshot, connected: () => typeof adapter.changeEquipment === "function", clear: () => {
      equipmentError = "";
    }, change: (request, scope) => adapter.changeEquipment(request, scope), error: (message) => {
      equipmentError = message;
      render3();
    } });
    function settle() {
      stopProfileMotion();
      stopProfileMotion = () => {
      };
      gsapWithCSS.ticker.tick();
      motionContext?.getTweens().forEach((t) => {
        t.totalProgress(1);
        t.kill();
      });
      gsapWithCSS.set(content.querySelectorAll(".xh-page,.xh-item-grid,.xh-panel"), { clearProps: "transform,opacity,filter,clipPath" });
    }
    function animate(kind) {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      motionContext = gsapWithCSS.context(() => {
        if (kind === "atlas") {
          const target = content.querySelector(".xh-map-directory-page");
          if (target) gsapWithCSS.fromTo(target, { opacity: 0.72, clipPath: "inset(0 0 0 2%)" }, { opacity: 1, clipPath: "inset(0 0 0 0%)", duration: 0.32, ease: "expo.out", clearProps: "opacity,clipPath" });
          const stamp = content.querySelector(".xh-atlas-region-picker>.xh-icon");
          if (stamp) gsapWithCSS.fromTo(stamp, { rotation: -8 }, { rotation: 0, duration: 0.32, ease: "expo.out", clearProps: "transform" });
        } else if (kind === "page") {
          const target = content.querySelector(".xh-page");
          if (target) gsapWithCSS.fromTo(target, { y: 12, opacity: 0.65, filter: "blur(1px)", clipPath: "inset(0 0 1.5% 0)" }, { y: 0, opacity: 1, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)", duration: 0.5, ease: "expo.out", clearProps: "transform,opacity,filter,clipPath" });
        } else if (kind === "items") {
          const grid = content.querySelector(".xh-item-grid");
          if (grid) gsapWithCSS.fromTo(grid, { x: grid.dataset.turn === "next" ? 26 : -26, opacity: 0.6 }, { x: 0, opacity: 1, duration: 0.38, ease: "power3.out", clearProps: "transform,opacity" });
        } else if (kind === "detail") {
          const paper = content.querySelector(".xh-panel");
          if (paper) gsapWithCSS.fromTo(paper, { y: 8, opacity: 0.7 }, { y: 0, opacity: 1, duration: 0.35, ease: "expo.out", clearProps: "transform,opacity" });
        }
      }, content);
    }
    const writable = () => snapshot.status === "ready";
    function select(i) {
      equipmentError = "";
      positions[tab] = content.scrollTop;
      tab = i;
      detail = null;
      render3();
      content.scrollTop = positions[i];
    }
    function portrait(id, cls = "") {
      return pages.face(id, cls);
    }
    function panel(title, name, cls = "") {
      const p = node("section", void 0, "xh-panel " + cls), h = node("h2");
      h.append(icon(name), node("span", title));
      p.append(h);
      return p;
    }
    function empty(parent, msg) {
      parent.append(node("p", msg, "xh-empty"));
    }
    function row(parent, label, value) {
      const r = node("div", void 0, "xh-row");
      r.append(node("strong", label), node("span", value));
      parent.append(r);
      return r;
    }
    function list(parent, records2, format, none = "\u6682\u65E0\u8BB0\u5F55\u3002") {
      if (records2 == null) return empty(parent, "\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u8BB0\u5F55\u3002");
      if (!Object.keys(records2).length) return empty(parent, none);
      for (const [k, v] of Object.entries(records2)) format(k, v);
    }
    function open(kind, id) {
      const previous = ["item", "obligations"].includes(kind) ? detail : null;
      if (kind === "artbook") {
        if (PORTRAIT_REFERENCE[id]) picker.enter(id);
        else bookDetails.enterScene();
      }
      if (kind === "map-directory") {
        directory.reset();
        Object.assign(mapState, { region: id, directoryMode: "overview", placePage: 0, relatedPage: 0 });
      }
      detail = { kind, id, ...previous ? { parent: previous } : {} };
      render3();
      content.scrollTop = 0;
      content.focus();
    }
    function back(parent = content) {
      const b = button(detail?.parent?.kind === "ledger" ? "\u8FD4\u56DE\u8D26\u672C" : "\u8FD4\u56DE", () => {
        detail = detail?.parent ?? null;
        render3();
        content.scrollTop = positions[tab];
      }, "arrow", "xh-back");
      parent.append(b);
      return b;
    }
    function action(label, value) {
      const b = button(label, () => {
        if (!writable()) return;
        draft = value;
        appended = false;
        open("draft");
        content.querySelector("textarea")?.focus();
      }, "feather");
      b.disabled = !writable();
      return b;
    }
    function personDetail(state) {
      profiles.render(state, detail.id);
    }
    function memorySources(state) {
      if (adapter.mobilePreview && host.dataset.layout === "mobile") {
        pages.mobileMemorySources(state);
        return;
      }
      back();
      gameDetails.memories(state);
    }
    function draftPanel() {
      back();
      const p = panel("\u5C1A\u672A\u53D1\u9001\u7684\u8349\u7A3F", "feather");
      p.append(node("p", "\u53EF\u4EE5\u4FEE\u6539\u540E\u518D\u653E\u5165\u804A\u5929\u8F93\u5165\u6846\u3002"));
      const area = node("textarea");
      area.setAttribute("aria-label", "\u884C\u52A8\u8349\u7A3F");
      area.value = draft;
      area.addEventListener("input", () => {
        draft = area.value;
        appended = false;
        add.disabled = pending || !draft.trim() || !adapter.appendDraft;
      });
      p.append(area);
      const actions = node("div", void 0, "xh-actions");
      const add = button("\u8FFD\u52A0\u5230\u8F93\u5165\u6846", async () => {
        if (!writable() || pending || appended || !draft.trim()) return;
        const token = generation, scope = snapshot.scope, value = draft;
        pending = true;
        add.disabled = true;
        try {
          const result = await adapter.appendDraft(value, scope);
          if (destroyed || generation !== token) return;
          if (result === false) throw Error("\u804A\u5929\u5DF2\u6539\u53D8\uFF0C\u672A\u8FFD\u52A0");
          appended = draft === value;
          say(appended ? "\u5DF2\u8FFD\u52A0\u5230\u8F93\u5165\u6846\u3002" : "\u5DF2\u8FFD\u52A0\u5148\u524D\u7684\u8349\u7A3F\u3002");
        } catch (e) {
          if (!destroyed && generation === token) say(e.message || "\u8FFD\u52A0\u5931\u8D25\uFF0C\u8BF7\u590D\u5236\u6216\u9009\u53D6\u8349\u7A3F\u3002");
        } finally {
          if (!destroyed && generation === token) {
            pending = false;
            if (detail?.kind === "draft") render3();
          }
        }
      }, "feather");
      add.disabled = pending || appended || !adapter.appendDraft || !writable();
      const copy2 = button("\u590D\u5236\u8349\u7A3F", async () => {
        const token = generation;
        try {
          await navigator.clipboard.writeText(area.value);
          if (!destroyed && generation === token) say("\u8349\u7A3F\u5DF2\u590D\u5236\u3002");
        } catch {
          if (!destroyed && generation === token) {
            area.focus();
            area.select();
            say("\u4E0D\u80FD\u81EA\u52A8\u590D\u5236\uFF0C\u5DF2\u9009\u4E2D\u6587\u5B57\uFF0C\u53EF\u624B\u52A8\u590D\u5236\u3002");
          }
        }
      }, "book");
      copy2.disabled = !writable();
      actions.append(add, copy2);
      p.append(actions);
      if (!adapter.appendDraft) p.append(node("p", "\u8F93\u5165\u6846\u5C1A\u672A\u63A5\u901A\uFF0C\u53EF\u4EE5\u5148\u590D\u5236\u6216\u9009\u53D6\u8349\u7A3F\u3002", "xh-muted"));
      content.append(p);
    }
    function transit(s) {
      if (adapter.mobilePreview && host.dataset.layout === "mobile") {
        pages.mobileTransit(s);
        return;
      }
      back();
      gameDetails.transit(s);
    }
    function render3() {
      resize(false);
      notice.hidden = !(snapshot.warning || equipmentError);
      noticeText.textContent = snapshot.warning ?? equipmentError;
      notice.title = snapshot.recovery?.message ?? "";
      retry.hidden = !adapter.retry;
      stopProfileMotion();
      stopProfileMotion = () => {
      };
      motionContext?.revert();
      motionContext = null;
      const nextRegion = detail?.kind === "map-directory" ? detail.id ?? snapshot.state?.\u573A\u666F.\u5730\u533A : null, transition = nextRegion && nextRegion !== renderedRegion ? "atlas" : detail ? "detail" : renderedTab !== tab ? "page" : renderedItemPage !== itemPage ? "items" : "none";
      renderedRegion = nextRegion;
      content.replaceChildren();
      content.dataset.transition = transition;
      renderedTab = tab;
      content.dataset.page = TABS[tab];
      content.dataset.detail = detail ? "true" : "false";
      content.dataset.profile = detail?.kind === "person" ? "true" : "false";
      content.dataset.directory = detail?.kind === "map-directory" ? "true" : "false";
      content.dataset.obligations = detail?.kind === "obligations" ? "true" : "false";
      content.dataset.picker = detail?.kind === "artbook" && PORTRAIT_REFERENCE[detail.id] ? "true" : "false";
      content.dataset.bookDetails = detail?.kind === "ledger" || detail?.kind === "artbook" && !PORTRAIT_REFERENCE[detail.id] ? "true" : "false";
      const profile = detail?.kind === "person" ? PROFILE_REFERENCE[detail.id] : null;
      book.dataset.home = String(!detail);
      const framed = profile ?? (detail?.kind === "map-directory" ? MAP_DIRECTORY_REFERENCE : detail?.kind === "artbook" ? PORTRAIT_REFERENCE[detail.id] ?? SCENE_REFERENCE : detail?.kind === "ledger" ? LEDGER_REFERENCE : null);
      const source = framed?.art ?? ["journey", "inventory", "bonds", "notebook", "map"][tab], edges = framed?.tabEdges ?? [[45, 238, 418, 584, 754, 945], [45, 226, 407, 584, 762, 944], [45, 238, 428, 588, 762, 946], [45, 222, 404, 565, 739, 915], [45, 238, 409, 587, 756, 935]][tab];
      const sourceWidth = framed?.width ?? (source === "notebook" ? 1836 : source === "map" ? 1840 : 1839);
      const weatherBox = HEADER_WEATHER[source] ?? HEADER_WEATHER.journey, [wx, wy, ww, wh] = weatherBox;
      for (const [key, value] of Object.entries({ x: (wx - 47) * 1840 / sourceWidth, y: wy, w: (ww + 47) * 1840 / sourceWidth, h: wh })) weather.style.setProperty("--weather-" + key, value + "px");
      const phone = adapter.mobilePreview === true && host.dataset.layout === "mobile";
      if (phone && (!phoneChrome || phoneChrome.dataset.nav !== String(tab))) {
        phoneChrome?.remove();
        phoneChrome = mobileLayerChrome(assets, tab);
        book.prepend(phoneChrome);
      } else if (!phone && phoneChrome) {
        phoneChrome.remove();
        phoneChrome = null;
      }
      if (phone) {
        desktopHeader.reset();
        headerArt.replaceChildren();
      } else desktopHeader.update(tab, snapshot.status === "ready" ? [snapshot.state.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? snapshot.state.\u573A\u666F.\u65F6\u95F4.\u5B63\u8282, snapshot.state.\u573A\u666F.\u5929\u6C14 ?? "\u5929\u6C14\u5F85\u8865", snapshot.state.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5] : [], snapshot.state?.\u573A\u666F.\u65F6\u95F4);
      top.querySelector(".xh-mobile-header-paper")?.remove();
      footerArt.replaceChildren(...phone || framed || source === "map" ? [] : [originalWindow(source, [0, 824, sourceWidth, source === "notebook" ? 33 : 31], [[1605, 822, 185, 33]], "xh-component-art", assets, [], false)]);
      if (phone) tabButtons.forEach((b, i) => {
        b.setAttribute("aria-selected", String(i === tab));
        b.tabIndex = i === tab ? 0 : -1;
        position(b, [edges[i] - 45, 0, edges[i + 1] - edges[i], 61]);
        const label = node("span", TABS[i], "xh-tab-label");
        label.prepend(icon(["compass", "bag", "heart", "book", "map"][i]));
        b.replaceChildren(label);
      });
      content.setAttribute("aria-labelledby", tabButtons[tab].id);
      if (snapshot.status !== "ready") {
        summary.textContent = snapshot.status === "loading" ? "\u6B63\u5728\u8BFB\u53D6\u65C5\u9014\u8BB0\u5F55\u2026" : "\u5F53\u524D\u8BB0\u5F55\u4E0D\u53EF\u7528";
        content.dataset.detail = "true";
        if (phone) weather.replaceChildren();
        const p = panel("\u65C5\u9014\u8BB0\u5F55", "book");
        empty(p, snapshot.reason ?? (snapshot.status === "loading" ? "\u6B63\u5728\u8BFB\u53D6\u65C5\u9014\u8BB0\u5F55\u2026" : "\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\u8FD9\u6761\u8BB0\u5F55\u3002"));
        if (adapter.retry && snapshot.status !== "loading") p.append(button("\u91CD\u65B0\u8BFB\u53D6", () => adapter.retry(), "arrow"));
        content.append(p);
        return;
      }
      {
        const s = snapshot.state;
        summary.textContent = [regionName(s.\u573A\u666F.\u5730\u533A), placeName(s.\u573A\u666F.\u5730\u70B9, s), snapshot.historical ? "\u5386\u53F2\u8BB0\u5F55" : "\u6B63\u5728\u626E\u6F14" + NAMES[s.\u626E\u6F14], s._meta.data_kind === "technical-test" ? "\u6280\u672F\u6D4B\u8BD5\u8D44\u6599" : ""].filter(Boolean).join(" \xB7 ");
        const values = [s.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? s.\u573A\u666F.\u65F6\u95F4.\u5B63\u8282, s.\u573A\u666F.\u5929\u6C14 ?? "\u5929\u6C14\u5F85\u8865", s.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5];
        if (phone) {
          weather.dataset.original = String(values.join("|") === "\u521D\u590F|\u6674|\u5348\u540E");
          weather.dataset.calendar = String(!phone && /^共历\d+年/.test(String(values[0])));
          const currentWeather = weatherView(s.\u573A\u666F.\u5929\u6C14, s.\u573A\u666F.\u65F6\u95F4), weatherImage = node("img", void 0, "xh-icon");
          weatherImage.alt = "";
          weatherImage.hidden = !currentWeather.src;
          if (currentWeather.src) weatherImage.src = currentWeather.src;
          weather.dataset.weather = currentWeather.key;
          weather.replaceChildren(weatherImage);
          for (const [i, value] of values.entries()) {
            const visible = i === 1 ? currentWeather.label : !phone && i === 0 ? String(value).replace(/^共历\d+年/, "") : value;
            const label = node("span", visible, "xh-weather-value");
            label.style.paddingRight = i === 1 && currentWeather.label !== String(value) ? String(value).length - currentWeather.label.length + "em" : "";
            label.style.textAlign = i === 1 ? "center" : "";
            label.title = value;
            label.setAttribute("aria-label", value);
            weather.append(label);
          }
        }
        if (detail?.kind === "person") personDetail(s);
        else if (detail?.kind === "artbook") {
          if (PORTRAIT_REFERENCE[detail.id]) picker.render(detail.id);
          else bookDetails.scenes();
        } else if (detail?.kind === "ledger") bookDetails.ledger(s);
        else if (detail?.kind === "memories") memorySources(s);
        else if (detail?.kind === "obligations") {
          const returnButton = back();
          gameDetails.obligations(s, returnButton);
        } else if (detail?.kind === "transit") transit(s);
        else if (detail?.kind === "map-directory") directory.render(s, detail.id ?? s.\u573A\u666F.\u5730\u533A);
        else if (detail?.kind === "draft" && writable()) draftPanel();
        else [pages.journey, pages.inventory, pages.bonds, pages.notebook, pages.mapPage][tab](s);
        animate(transition);
        stopProfileMotion = startProfileMotion({ gsap: gsapWithCSS, scope: content });
      }
    }
    const artStorage = (event) => {
      if (event.key?.startsWith("xinghai-art-choice-v1:")) {
        const scroll = content.scrollTop;
        render3();
        content.scrollTop = scroll;
      }
    };
    globalThis.addEventListener("storage", artStorage);
    const api = {
      settle,
      update(next) {
        if (destroyed) return;
        const changed = next.scope !== snapshot.scope;
        if (changed || next.status !== "ready") {
          generation++;
          draft = "";
          appended = false;
          pending = false;
          if (changed || next.status !== "ready" || detail?.kind === "draft") detail = null;
          if (changed) {
            equipmentAction.reset();
            equipmentError = "";
            pages.resetMobile();
            profiles.reset();
            directory.reset();
            picker.reset();
            bookDetails.reset();
            gameDetails.reset();
            tab = 0;
            positions.fill(0);
            ownerFilter = "shared";
            itemCategory = "\u5168\u90E8";
            noteFilter = "\u89C1\u95FB";
            notePage = 0;
            selectedItem = null;
            itemPage = 0;
            Object.assign(mapState, { zoom: 1, x: 0, y: 0, region: null, place: null, initialized: false, directoryMode: "overview", placePage: 0, relatedPage: 0 });
          }
        }
        const scroll = content.scrollTop;
        snapshot = next;
        render3();
        content.scrollTop = changed ? 0 : scroll;
        say("");
      },
      destroy() {
        destroyed = true;
        generation++;
        equipmentAction.reset();
        equipmentError = "";
        stopProfileMotion();
        motionContext?.revert();
        observer.disconnect();
        globalThis.removeEventListener("storage", artStorage);
        host.remove();
        if (root.__xhHandbook === api) delete root.__xhHandbook;
      }
    };
    root.__xhHandbook = api;
    render3();
    return api;
  }

  // src/ui/assets/pov-header/crystal/reference-xingxing.png
  var reference_xingxing_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/revision/revision__pov-crystal-reference-xingxing.png";

  // src/ui/assets/pov-header/crystal/reference-xiaogai.png
  var reference_xiaogai_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/revision/revision__pov-crystal-reference-xiaogai.png";

  // src/ui/assets/pov-header/crystal/clean-portrait-backdrop-xingxing.png
  var clean_portrait_backdrop_xingxing_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/revision/revision__pov-crystal-clean-portrait-backdrop-xingxing.png";

  // src/ui/assets/pov-header/crystal/clean-portrait-backdrop-xiaogai.png
  var clean_portrait_backdrop_xiaogai_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/revision/revision__pov-crystal-clean-portrait-backdrop-xiaogai.png";

  // src/ui/assets/pov-header/crystal/header-mask.svg
  var header_mask_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c74350632b5d57719da4966037d115e5416defd/handbook/images/interaction/interaction__pov-crystal-header-mask.svg";

  // src/ui/assets/pov-header/crystal/mobile-crystal-master.png
  var mobile_crystal_master_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/641c1b48fcdd77cd3bd014d0270ee69024373bb0/handbook/images/controls/mobile-crystal-master-v1.png";

  // src/ui/pov-crystal-mobile.mjs
  var ns = "http://www.w3.org/2000/svg";
  var svgNode = (tag, attrs = {}) => {
    const e = document.createElementNS(ns, tag);
    for (const [key, value] of Object.entries(attrs)) e.setAttribute(key, value);
    return e;
  };
  function createMobilePovFrame() {
    const element = document.createElement("div");
    element.className = "xh-pov-mobile-crystal";
    element.setAttribute("aria-hidden", "true");
    const definitions = svgNode("svg", { width: 0, height: 0, class: "xh-pov-color-filters" }), defs = svgNode("defs"), filter = svgNode("filter", { id: "xh-pov-crystal-colors", x: 0, y: 0, width: "100%", height: "100%", "color-interpolation-filters": "sRGB" });
    for (const [tag, attrs] of [
      ["feColorMatrix", { in: "SourceGraphic", values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 -16 16 0 0", result: "accent" }],
      ["feColorMatrix", { in: "SourceGraphic", values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  12 -36 24 0 0", result: "warm-color" }],
      ["feColorMatrix", { in: "SourceGraphic", values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  12 0 -12 0 0", result: "warm" }],
      ["feColorMatrix", { in: "SourceGraphic", values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -12 0 12 0 0", result: "cool" }],
      ["feComposite", { in: "warm", in2: "warm-color", operator: "in", result: "warm-accent" }],
      ["feComposite", { in: "cool", in2: "accent", operator: "in", result: "cool-accent" }],
      ["feColorMatrix", { in: "SourceGraphic", type: "hueRotate", values: -145, result: "blue" }],
      ["feColorMatrix", { in: "SourceGraphic", type: "hueRotate", values: 145, result: "pink" }],
      ["feComposite", { in: "blue", in2: "warm-accent", operator: "in", result: "blue-ink" }],
      ["feComposite", { in: "pink", in2: "cool-accent", operator: "in", result: "pink-ink" }]
    ]) filter.append(svgNode(tag, attrs));
    const merge = svgNode("feMerge");
    for (const value of ["SourceGraphic", "blue-ink", "pink-ink"]) merge.append(svgNode("feMergeNode", { in: value }));
    filter.append(merge);
    defs.append(filter);
    definitions.append(defs);
    element.append(definitions);
    const fields = [[310, 73, 390, 49], [410, 130, 276, 34], [302, 177, 586, 42], [814, 88, 143, 40]];
    const holes = fields.map(([x, y, w, h]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="black"/>').join("");
    const mask = '<svg xmlns="' + ns + '" width="1024" height="264"><mask id="cut"><rect width="100%" height="100%" fill="white"/>' + holes + '</mask><rect width="100%" height="100%" fill="white" mask="url(#cut)"/></svg>';
    const tint = document.createElement("div");
    tint.className = "xh-pov-crystal-frame xh-pov-crystal-tint";
    const base = document.createElement("div");
    base.className = "xh-pov-crystal-frame";
    for (const frame of [base, tint]) {
      frame.style.backgroundImage = "url(" + JSON.stringify(mobile_crystal_master_default) + ")";
      frame.style.maskImage = 'url("data:image/svg+xml,' + encodeURIComponent(mask) + '")';
      element.append(frame);
    }
    return { element, tint };
  }

  // src/ui/pov-motion.mjs
  function createPovMotion(stage, portraits, texts, themes, effects, star) {
    const duration = 1.12, awake = portraits.xingxing, cover = portraits.xiaogai;
    const timeline2 = gsapWithCSS.timeline({ paused: true, defaults: { ease: "power2.inOut" }, onComplete: () => {
      stage.dataset.settled = "true";
    }, onReverseComplete: () => {
      stage.dataset.settled = "true";
    } });
    const pose = { p: 0 }, flare = { p: 0 };
    let layout = { front: 152, back: 27, top: 32, arc: 14, sweep: 1825 };
    const placePortraits = () => {
      const p = pose.p, arc = Math.sin(p * Math.PI) * layout.arc;
      gsapWithCSS.set(awake, { x: layout.front + (layout.back - layout.front) * p, y: layout.top + arc, scale: 1 - 0.28 * p, zIndex: p < 0.5 ? 4 : 3 });
      gsapWithCSS.set(cover, { x: layout.back + (layout.front - layout.back) * p, y: layout.top - arc, scale: 0.72 + 0.28 * p, zIndex: p < 0.5 ? 3 : 4 });
    };
    placePortraits();
    timeline2.to(themes.xingxing, { opacity: 0, duration }, 0).to(themes.xiaogai, { opacity: 1, duration }, 0);
    timeline2.to(texts.xingxing, { autoAlpha: 0, y: -6, duration: duration * 0.37, ease: "power2.in" }, 0).fromTo(texts.xiaogai, { autoAlpha: 0, y: 7 }, { autoAlpha: 1, y: 0, duration: duration * 0.5, ease: "power3.out" }, duration * 0.4);
    timeline2.to(pose, { p: 1, duration, ease: "sine.inOut", onUpdate: placePortraits }, 0);
    const sweep = effects.querySelector(".xh-pov-light-sweep"), placeSweep = () => gsapWithCSS.set(sweep, { x: flare.p * layout.sweep });
    timeline2.to(sweep, { opacity: 0.85, duration: 0.14 }, 0.06).to(flare, { p: 1, duration: 0.82, ease: "power2.inOut", onUpdate: placeSweep }, 0.08).to(sweep, { opacity: 0, duration: 0.18 }, 0.78);
    const points = [370, 864, 1470, 1747, 1987].map((x, n) => {
      const point = star();
      point.classList.add("xh-pov-star-particle");
      effects.append(point);
      gsapWithCSS.set(point, { left: x, top: n % 2 ? 195 : 62, scale: 0.25 });
      const t = 0.15 + n * 0.14;
      timeline2.to(point, { opacity: 0.85, scale: 1.2, duration: 0.15 }, t).to(point, { opacity: 0, scale: 0.2, rotation: 35, duration: 0.25 }, t + 0.15);
      return { point, x };
    });
    timeline2.duration(duration);
    timeline2.pause(0);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let current;
    function show(actor, immediate = false) {
      const first = current === void 0;
      current = actor;
      stage.dataset.actor = actor;
      stage.dataset.settled = "false";
      for (const [id, portrait] of Object.entries(portraits)) {
        portrait.classList.toggle("active", id === actor);
        portrait.classList.toggle("companion", id !== actor);
      }
      if (first || immediate || reduced.matches) {
        timeline2.progress(actor === "xiaogai" ? 1 : 0).pause();
        stage.dataset.settled = "true";
      } else if (actor === "xiaogai") timeline2.play();
      else timeline2.reverse();
    }
    const change = () => show(current, true);
    reduced.addEventListener("change", change);
    function resize(width, compact) {
      layout = compact ? { front: 36, back: 0, top: 18, arc: 6, sweep: width - 64 } : { front: 152, back: 27, top: 32, arc: 14, sweep: 1825 };
      placePortraits();
      placeSweep();
      points.forEach(({ point, x }, n) => gsapWithCSS.set(point, { left: compact ? x / 2048 * width : x, top: compact ? n % 2 ? 173 : 22 : n % 2 ? 195 : 62 }));
    }
    return { show, resize, get actor() {
      return current;
    }, destroy() {
      timeline2.kill();
      reduced.removeEventListener("change", change);
    } };
  }

  // src/ui/pov-header.mjs
  var names2 = { xingxing: "\u9192\u9192", xiaogai: "\u5C0F\u76D6" };
  var authors = { xingxing: "naiv31y", xiaogai: "gatsby" };
  var node2 = (tag, cls, text2) => {
    const e = document.createElement(tag);
    e.className = cls;
    if (text2 !== void 0) e.textContent = text2;
    return e;
  };
  var paths = { pin: "M12 23S3.5 14 3.5 8.5a8.5 8.5 0 1 1 17 0C20.5 14 12 23 12 23Z", swap: "M3 7h17m-5-5 5 5-5 5M21 17H4m5-5-5 5 5 5", heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z", star: "m12 1 2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5L12 1Z" };
  function icon2(name) {
    const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    e.setAttribute("viewBox", "0 0 24 24");
    e.setAttribute("aria-hidden", "true");
    for (const d of name === "swap" ? ["M3 7h17m-5-5 5 5-5 5", "M21 17H4m5-5-5 5 5 5"] : [paths[name]]) {
      const p = document.createElementNS(e.namespaceURI, "path");
      p.setAttribute("d", d);
      e.append(p);
    }
    e.classList.add("xh-pov-icon", name);
    return e;
  }
  function art(src, clean2 = false) {
    const image = node2("img", "xh-pov-art" + (clean2 ? " xh-pov-art-clean" : ""));
    image.src = src;
    image.alt = "";
    image.draggable = false;
    if (!clean2) image.style.maskImage = "url(" + JSON.stringify(header_mask_default) + ")";
    return image;
  }
  function mountPovHeader(root, adapter = {}) {
    root.__xhPovHeader?.destroy();
    let snapshot = { status: "loading", state: null }, pending = false, disposed = false;
    const viewport = node2("div", "xh-pov-viewport"), stage = node2("header", "xh-pov-stage");
    stage.setAttribute("aria-label", "\u4E3B\u89C6\u89D2\u4E0E\u65C5\u9014\u4FE1\u606F");
    stage.dataset.design = "crystal";
    const paper = node2("div", "xh-pov-paper"), backdrop = node2("div", "xh-pov-art-clip"), mobileArt = createMobilePovFrame(), themes = { xingxing: [], xiaogai: [] }, portraits = {}, texts = {};
    stage.dataset.mobileDesign = "crystal-1-common-ornament";
    const portraitLayer = node2("div", "xh-pov-portraits");
    for (const [id, frame, clean2] of [["xingxing", reference_xingxing_default, clean_portrait_backdrop_xingxing_default], ["xiaogai", reference_xiaogai_default, clean_portrait_backdrop_xiaogai_default]]) {
      const theme = node2("div", "xh-pov-art-theme " + id);
      theme.append(art(clean2, true), art(frame));
      backdrop.append(theme);
      themes[id].push(theme);
      const portrait = node2("span", "xh-pov-portrait");
      portrait.dataset.character = id;
      portrait.setAttribute("role", "img");
      portrait.setAttribute("aria-label", names2[id] + "\u5934\u50CF");
      portrait.append(node2("span", "xh-pov-portrait-inner"));
      portraitLayer.append(portrait);
      portraits[id] = portrait;
      const other = id === "xingxing" ? "xiaogai" : "xingxing", identity = node2("div", "xh-pov-identity " + id), line = node2("div", "xh-pov-names");
      const current = node2("span", "xh-pov-current"), companion = node2("span", "xh-pov-companion");
      current.append(node2("span", "", "\u626E\u6F14"), node2("strong", "", names2[id]));
      companion.append(icon2("heart"), node2("span", "", "\u540C\u884C"), node2("span", "", names2[other]));
      line.append(current, companion);
      identity.append(line, node2("div", "xh-pov-signature", authors[id] + " \xD7 " + authors[other]));
      texts[id] = identity;
    }
    themes.xiaogai.push(mobileArt.tint);
    const meta = node2("div", "xh-pov-meta"), location = node2("span", "xh-pov-field location"), locationText = node2("span", "");
    location.append(icon2("pin"), locationText);
    const date = node2("span", "xh-pov-field date"), season = node2("span", "xh-pov-field season"), weather = node2("span", "xh-pov-field weather"), weatherImage = node2("img", ""), weatherText = node2("span", ""), time = node2("span", "xh-pov-field clock");
    weatherImage.alt = "";
    weather.append(weatherImage, weatherText);
    const toggle = node2("button", "xh-pov-switch"), toggleText = node2("span", "", "\u5207\u6362\u626E\u6F14");
    toggle.type = "button";
    toggle.append(icon2("swap"), toggleText);
    toggle.disabled = true;
    const effects = node2("div", "xh-pov-motion-fx");
    effects.setAttribute("aria-hidden", "true");
    effects.append(node2("span", "xh-pov-light-sweep"));
    const status = node2("p", "xh-pov-status", "\u6B63\u5728\u8BFB\u53D6\u65C5\u9014\u8BB0\u5F55\u2026");
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    meta.append(location, date, season, weather, time);
    stage.append(paper, backdrop, mobileArt.element, portraitLayer, texts.xingxing, texts.xiaogai, meta, toggle, effects, status);
    viewport.append(stage);
    root.replaceChildren(viewport);
    const motion = createPovMotion(stage, portraits, texts, themes, effects, () => icon2("star"));
    const artbook = createArtbook({ snapshot: () => snapshot, assets: adapter.assets ?? {}, changed: () => render3(), getPortraitImages: () => [snapshot.portraitImages, adapter.portraitImages] });
    const portraitKeys = {};
    function render3() {
      const s = snapshot.state;
      if (!s) {
        status.textContent = snapshot.reason ?? "\u6B63\u5728\u8BFB\u53D6\u65C5\u9014\u8BB0\u5F55\u2026";
        return;
      }
      stage.dataset.ready = "true";
      for (const id of Object.keys(names2)) {
        const selected = artbook.selected("portrait", id), record = artbook.entry(selected, id), key = selected + "|" + (record?.imageSrc ?? "");
        if (portraitKeys[id] !== key) {
          const picture = record?.default && !record.imageSrc ? originalWindow(record.asset, DEFAULT_PORTRAIT_CROPS[id], [], "xh-gallery-image", adapter.assets ?? {}) : artbook.image(selected, "", id);
          portraits[id].querySelector(".xh-pov-portrait-inner").replaceChildren(picture);
          portraits[id].dataset.art = selected;
          portraitKeys[id] = key;
        }
      }
      if (motion.actor !== s.\u626E\u6F14) motion.show(s.\u626E\u6F14);
      const fullPlace = placeName(s.\u573A\u666F.\u5730\u70B9, s), place = WORLD.places[s.\u573A\u666F.\u5730\u70B9]?.settlement ?? fullPlace, town = s.\u573A\u666F.\u5730\u70B9 === "LOC-VIR-003" ? "\u8FBE\u4F26\u798F\u5FB7" : place;
      locationText.textContent = town + " \xB7 " + regionName(s.\u573A\u666F.\u5730\u533A);
      location.title = fullPlace + " \xB7 " + regionName(s.\u573A\u666F.\u5730\u533A);
      date.textContent = s.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? "";
      date.title = date.textContent;
      season.textContent = s.\u573A\u666F.\u65F6\u95F4.\u5B63\u8282;
      const w = weatherView(s.\u573A\u666F.\u5929\u6C14, s.\u573A\u666F.\u65F6\u95F4);
      weatherText.textContent = w.label;
      weather.title = w.title;
      weather.dataset.weather = w.key;
      weatherImage.hidden = !w.src;
      if (w.src) weatherImage.src = w.src;
      fitWeather(weather, false);
      const clock = clockLabel(s.\u573A\u666F.\u65F6\u95F4);
      time.textContent = clock ? clock.slice(0, 5) : s.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5;
      time.title = s.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5 + (clock ? " " + clock + " \xB7 \u7D2F\u8BA1" + s.\u573A\u666F.\u65F6\u95F4.\u7ECF\u8FC7\u5206\u949F + "\u5206\u949F" : "");
      const other = s.\u626E\u6F14 === "xingxing" ? "xiaogai" : "xingxing";
      toggle.disabled = pending;
      toggle.title = "\u6539\u4E3A\u626E\u6F14" + names2[other];
      toggle.setAttribute("aria-label", "\u5207\u6362\u626E\u6F14\uFF0C\u6539\u4E3A" + names2[other]);
      status.textContent = snapshot.warning ?? "";
    }
    toggle.addEventListener("click", async () => {
      pending = true;
      toggle.disabled = true;
      try {
        await adapter.switchViewpoint(snapshot.state.\u626E\u6F14 === "xingxing" ? "xiaogai" : "xingxing", snapshot.scope);
      } catch (error) {
        status.textContent = error.message;
      } finally {
        pending = false;
        toggle.disabled = false;
      }
    });
    const resize = () => {
      const width = root.clientWidth, compact = width <= 600;
      stage.dataset.layout = compact ? "mobile" : "desktop";
      stage.style.transform = "scale(" + width / (compact ? 1024 : 2048) + ")";
      viewport.style.height = (compact ? 264 * width / 1024 : 280 * width / 2048) + "px";
      stage.style.setProperty("--xh-pov-hit-height", Math.max(77, 44 * 1024 / width) + "px");
      toggleText.textContent = compact ? "\u5207\u6362" : "\u5207\u6362\u626E\u6F14";
      motion.resize(width, false);
      fitWeather(weather, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(root);
    resize();
    const storage = (event) => {
      if (event.key?.startsWith("xinghai-art-choice-v1:")) render3();
    };
    globalThis.addEventListener("storage", storage);
    document.fonts.ready.then(() => {
      if (!disposed) fitWeather(weather, false);
    });
    function destroy() {
      disposed = true;
      observer.disconnect();
      motion.destroy();
      globalThis.removeEventListener("storage", storage);
      root.replaceChildren();
      if (root.__xhPovHeader === instance) delete root.__xhPovHeader;
    }
    const instance = { update(value) {
      snapshot = value;
      render3();
    }, destroy };
    root.__xhPovHeader = instance;
    return instance;
  }

  // src/ui/region-arrival-art.json
  var region_arrival_art_default = {
    "REG-02": {
      name: "\u585E\u4F26\u8FBE\u4E18\u9675",
      description: "\u8461\u8404\u56ED\u4E0E\u7267\u573A\u94FA\u6EE1\u7F13\u5761\uFF0C\u82B1\u6D77\u5728\u665A\u98CE\u91CC\u6CDB\u8D77\u5FAE\u5149\u3002",
      url: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e5aa47f9fa95a40f0f6d5ff7b6a40008703e0be3/handbook/images/region-arrival/reg-02-c-v1.png",
      width: 1860,
      height: 846
    }
  };

  // src/ui/region-arrival.mjs
  var REGION_ARRIVAL_ART = region_arrival_art_default;
  function enteredIllustratedRegion(previous, current) {
    const from = previous?.state?.\u573A\u666F?.\u5730\u533A, to = current?.state?.\u573A\u666F?.\u5730\u533A;
    return !current?.recovery && typeof from === "string" && from !== to && region_arrival_art_default[to] ? to : null;
  }
  var style = `
.xh-arrival{container-type:inline-size;box-sizing:border-box;width:100%;margin:18px 0 30px;color:var(--xh-arrival-ink,#454b70);font-family:"Noto Serif SC","SimSun",serif;}
.xh-arrival[hidden]{display:none!important;}
.xh-arrival figure{margin:0;padding:0;border:0;background:transparent;box-shadow:none;}
.xh-arrival img{display:block;width:100%;height:auto;object-fit:contain;border:0;border-radius:0;box-shadow:none;}
.xh-arrival figcaption{margin:0 18%;padding:4px 0 0;}
.xh-arrival h2{margin:0 0 6px;padding:0;border:0;font:500 clamp(22px,3.3cqw,46px)/1.45 "Noto Serif SC","SimSun",serif;letter-spacing:.025em;color:inherit;overflow-wrap:anywhere;}
.xh-arrival p{margin:0;padding:0;font:400 clamp(14px,1.55cqw,22px)/1.85 "Noto Serif SC","SimSun",serif;color:inherit;overflow-wrap:anywhere;}
.xh-arrival .xh-arrival-error{font-size:14px;line-height:1.8;margin:12px 18%;}
@container(max-width:540px){.xh-arrival figcaption{margin-inline:8%;padding-top:6px;}.xh-arrival h2{font-size:23px;}.xh-arrival p{font-size:14px;}.xh-arrival .xh-arrival-error{margin-inline:8%;}}
`;
  function mountRegionArrival(root, { origin, ink } = {}) {
    const doc = root.ownerDocument, css = doc.createElement("style"), figure = doc.createElement("figure"), image = doc.createElement("img"), caption = doc.createElement("figcaption"), title = doc.createElement("h2"), description = doc.createElement("p"), failure = doc.createElement("p");
    css.textContent = style;
    root.classList.add("xh-arrival");
    root.hidden = true;
    if (ink) root.style.setProperty("--xh-arrival-ink", ink);
    image.decoding = "async";
    failure.className = "xh-arrival-error";
    failure.textContent = "\u5730\u533A\u63D2\u753B\u6682\u65F6\u672A\u80FD\u8F7D\u5165\u3002";
    failure.hidden = true;
    caption.append(title, description);
    figure.append(image, failure, caption);
    root.replaceChildren(css, figure);
    image.addEventListener("error", () => {
      image.hidden = true;
      image.style.display = "none";
      failure.hidden = false;
    });
    image.addEventListener("load", () => {
      image.hidden = false;
      image.style.display = "";
      failure.hidden = true;
    });
    let rendered;
    return {
      update(region) {
        const entry = region_arrival_art_default[region];
        root.hidden = !entry;
        if (!entry) {
          delete root.dataset.region;
          return;
        }
        root.dataset.region = region;
        if (rendered === region) return;
        rendered = region;
        title.textContent = entry.name;
        description.textContent = entry.description;
        image.alt = entry.name + "\u7684\u8461\u8404\u56ED\u3001\u7267\u573A\u4E0E\u82B1\u6D77\u98CE\u666F";
        image.width = entry.width;
        image.height = entry.height;
        image.src = origin ? new URL(entry.url, origin).href : entry.url;
      },
      destroy() {
        root.replaceChildren();
        root.classList.remove("xh-arrival");
        root.hidden = false;
      }
    };
  }
  function mountArrivalAndHandbook(root, options, mountHandbook2) {
    const arrivalRoot = root.ownerDocument.createElement("section"), handbookRoot = root.ownerDocument.createElement("div");
    root.replaceChildren(arrivalRoot, handbookRoot);
    const arrival = mountRegionArrival(arrivalRoot, options), handbook = mountHandbook2(handbookRoot, options);
    return { update(result) {
      arrival.update(result.arrivalRegion);
      handbook.update(result);
    }, destroy() {
      arrival.destroy();
      handbook.destroy();
      root.replaceChildren();
    } };
  }

  // src/ui/message-handbook.mjs
  function mountMessageHandbook(root, api = globalThis, parent = api.parent, options = {}) {
    return mountMessageSurface(root, api, parent, options, (node3, settings) => mountArrivalAndHandbook(node3, settings, mountHandbook), true);
  }
  function mountMessagePovHeader(root, api = globalThis, parent = api.parent, options = {}) {
    return mountMessageSurface(root, api, parent, options, mountPovHeader);
  }
  function mountMessageSurface(root, api, parent, options, mount, includeArrival = false) {
    let disposed = false, ticket = 0, unsubscribe, boundService, initialScope, refreshing = false, pendingRefresh = false, refreshTimer;
    root.dataset.xinghaiUiRevision = "test.5-pc7.75-generic-item-art";
    root.dataset.xinghaiRefreshCount = "0";
    const stops = [];
    let lastReadable;
    const handbook = mount(root, {
      origin: parent?.location?.origin,
      ink: api.frameElement?.closest?.(".mes_text") && parent.getComputedStyle?.(api.frameElement.closest(".mes_text")).color,
      get layout() {
        return api.frameElement && parent !== api && parent.innerWidth >= 1e3 ? "desktop" : void 0;
      },
      assets: options.assets,
      itemImages: options.itemImages,
      skillImages: options.skillImages,
      skillDetails: options.skillDetails,
      placeImages: options.placeImages,
      regionImages: options.regionImages,
      portraitImages: options.portraitImages,
      sceneImages: options.sceneImages,
      retry: () => refresh(),
      switchViewpoint: async (actor, scope) => {
        const service = parent.__xinghai_card;
        await service.switchViewpoint(actor, initialScope);
        await refresh();
      },
      changeEquipment: async (request, scope) => {
        const service = parent.__xinghai_card;
        if (typeof service?.changeEquipment !== "function") throw Error("\u88C5\u5907\u529F\u80FD\u5C1A\u672A\u63A5\u901A\uFF0C\u8BF7\u91CD\u65B0\u8BFB\u53D6");
        const result = await service.changeEquipment(request, initialScope);
        await refresh();
        return result;
      },
      appendDraft: async (text2, scope) => {
        const service = parent.__xinghai_card;
        return service.appendDraft(text2, initialScope);
      }
    });
    const snapshotScope = () => JSON.stringify([initialScope.identity, initialScope.message, initialScope.swipe, initialScope.source]);
    async function refresh() {
      if (disposed) return;
      if (refreshing) {
        pendingRefresh = true;
        return;
      }
      refreshing = true;
      root.dataset.xinghaiRefreshState = "reading";
      try {
        await refreshOnce();
      } finally {
        refreshing = false;
        if (pendingRefresh && !disposed) {
          pendingRefresh = false;
          clearTimeout(refreshTimer);
          refreshTimer = setTimeout(() => {
            void refresh();
          }, 50);
        }
      }
    }
    async function refreshOnce() {
      const token = ++ticket;
      try {
        if (!initialScope) {
          const message = api.getCurrentMessageId();
          const row = api.getChatMessages(message, { include_swipes: true })[0];
          initialScope = {
            identity: JSON.stringify([api.getCurrentCharacterId(), api.SillyTavern.getCurrentChatId()]),
            message,
            swipe: row.swipe_id,
            source: row.swipes[row.swipe_id]
          };
        }
        const service = parent.__xinghai_card;
        if (!service) throw Error("\u672C\u5361\u811A\u672C\u5C1A\u672A\u5C31\u7EEA\uFF1B\u8BF7\u542F\u7528\u5361\u5185\u811A\u672C\u540E\u91CD\u65B0\u8BFB\u53D6");
        if (service !== boundService) {
          unsubscribe?.();
          boundService = service;
          unsubscribe = service.subscribe(() => {
            void refresh();
          });
        }
        const result = await service.read(initialScope);
        if (includeArrival) {
          result.arrivalRegion = null;
          if (initialScope.message > 0 && !result.recovery && REGION_ARRIVAL_ART[result.state?.\u573A\u666F?.\u5730\u533A]) {
            const previousRow = api.getChatMessages(initialScope.message - 1, { include_swipes: true })[0];
            if (previousRow) {
              const previous = await service.read({ ...initialScope, message: initialScope.message - 1, swipe: previousRow.swipe_id, source: previousRow.swipes?.[previousRow.swipe_id] ?? previousRow.message });
              result.arrivalRegion = enteredIllustratedRegion(previous, result);
            }
          }
        }
        if (!disposed && ticket === token) {
          handbook.update(result);
          lastReadable = result;
          root.dataset.xinghaiRefreshState = result.recovery ? "retained" : "ready";
          root.dataset.xinghaiRefreshCount = String(Number(root.dataset.xinghaiRefreshCount) + 1);
          root.dataset.xinghaiTransaction = result.state?._meta?.last_commit?.transaction_id ?? "initial";
        }
      } catch (e) {
        if (!disposed && ticket === token) {
          const status = boundService?.getStatus?.();
          root.dataset.xinghaiRuntimeCode = status?.code ?? status?.status ?? "";
          root.dataset.xinghaiRuntimeReason = status?.message ?? "";
          const row = initialScope && api.getChatMessages(initialScope.message, { include_swipes: true })[0];
          const same = initialScope && initialScope.identity === JSON.stringify([api.getCurrentCharacterId(), api.SillyTavern.getCurrentChatId()]) && row?.swipe_id === initialScope.swipe && row?.swipes[row.swipe_id] === initialScope.source;
          handbook.update(same && lastReadable ? { ...lastReadable, readonly: false, recovery: { code: "READ", message: e.message } } : {
            status: "error",
            readonly: true,
            scope: initialScope ? snapshotScope() : "",
            reason: e.message
          });
          root.dataset.xinghaiRefreshState = same && lastReadable ? "retained" : "error";
        }
      }
    }
    function stop() {
      if (disposed) return;
      disposed = true;
      ticket++;
      pendingRefresh = false;
      clearTimeout(refreshTimer);
      unsubscribe?.();
      stops.forEach((s) => s.stop());
      handbook.destroy();
      api.removeEventListener?.("pagehide", stop);
    }
    if (typeof api.eventOn === "function") {
      for (const name of ["CHAT_CHANGED", "MESSAGE_SENT", "MESSAGE_SWIPED", "MESSAGE_UPDATED", "MESSAGE_DELETED", "MESSAGE_SWIPE_DELETED"]) {
        if (api.tavern_events?.[name]) stops.push(api.eventOn(api.tavern_events[name], () => {
          void refresh();
        }));
      }
      stops.push(api.eventOn("xinghai_card_state_changed", () => {
        void refresh();
      }));
    }
    api.addEventListener?.("pagehide", stop, { once: true });
    void refresh();
    return { refresh, stop };
  }
  return __toCommonJS(message_handbook_exports);
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/