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
    const text = String(value ?? "").trim(), night = /夜|凌晨|黎明/.test(time.\u65F6\u6BB5 ?? "");
    let key = "overcast", label = text;
    if (/雨夹雪|雨雪|雪雨/.test(text)) key = "sleet";
    else if (/冰雹|雹/.test(text)) key = "hail";
    else if (/暴风雪|暴雪|雪暴/.test(text)) key = "blizzard";
    else if (/雷暴/.test(text)) key = "thunderstorm";
    else if (/雷.*雨|雷阵/.test(text)) key = "thunderShowers";
    else if (/暴雨|倾盆|瓢泼/.test(text)) key = "downpour";
    else if (/大雨/.test(text)) key = "heavyRain";
    else if (/中雨/.test(text)) key = "rain";
    else if (/小雨|细雨|毛毛雨|微雨/.test(text)) key = "lightRain";
    else if (/阵雨/.test(text)) key = "showers";
    else if (/雨/.test(text)) key = "rain";
    else if (/大雪/.test(text)) key = "heavySnow";
    else if (/小雪|零星.*雪/.test(text)) key = "lightSnow";
    else if (/雪/.test(text)) key = "snow";
    else if (/沙|尘/.test(text)) key = "dust";
    else if (/霾/.test(text)) key = "haze";
    else if (/浓雾|大雾/.test(text)) key = "fog";
    else if (/雾/.test(text)) key = "mist";
    else if (/大风|强风|狂风|风暴/.test(text)) key = "wind";
    else if (/微风|清风|和风|有风/.test(text)) key = "breeze";
    else if (/多云|晴.*云|云.*晴/.test(text)) {
      key = night || /夜/.test(text) ? "cloudyNight" : "partlyCloudy";
      label = /^(夜间多云|夜多云)$/.test(text) ? "\u591C\u591A\u4E91" : text;
    } else if (/阴/.test(text)) key = "overcast";
    else if (/晴/.test(text)) {
      key = night || /夜/.test(text) ? "clearNight" : "clear";
      label = /^(晴和|晴朗|晴天|晴空|晴)$/.test(text) ? "\u6674" : text;
    }
    return { key, label, title: text, src: text ? WEATHER_ART[key] : null };
  }
  function fitWeather(field2, compact = false) {
    const label = field2.querySelector("span"), image = field2.querySelector("img"), length = label.textContent.length;
    if (compact) {
      image.style.width = "18px";
      label.style.fontSize = "14px";
      return;
    }
    image.style.width = (length >= 3 ? 28 : length === 2 ? 32 : 37) + "px";
    label.style.fontSize = "26px";
    const available = field2.clientWidth - 16 - (image.hidden ? 0 : image.clientWidth + 6);
    if (label.scrollWidth > available) label.style.fontSize = 26 * available / label.scrollWidth + "px";
  }

  // src/ui-geometric/topbar.mjs
  var TOPBAR_PAGES = [["journey", "\u65C5\u9014"], ["inventory", "\u884C\u56CA"], ["bonds", "\u7F81\u7ECA"], ["notebook", "\u624B\u8BB0"], ["map", "\u5730\u56FE"]];
  var node = (tag, cls, text = "") => {
    const n = document.createElement(tag);
    n.className = cls;
    n.textContent = text;
    return n;
  };
  function linework(kind) {
    const n = node("i", "tb-linework tb-linework-" + kind);
    for (let i = 0; i < 18; i++) n.append(node("i"));
    return n;
  }
  function decoration() {
    const layer = node("div", "tb-decoration");
    layer.setAttribute("aria-hidden", "true");
    layer.append(node("i", "tb-frame-outer"), node("i", "tb-frame-inner"), node("i", "tb-frame-light"), node("i", "tb-frame-bottom"));
    for (const side of ["left", "right"]) {
      const corner = node("div", "tb-corner tb-corner-" + side);
      corner.append(node("i", "tb-corner-paint"));
      layer.append(corner, linework("corner-" + side));
    }
    layer.append(linework("crest"), linework("connector"), node("i", "tb-central-mark"));
    return layer;
  }
  function tab(id, label) {
    const b = node("button", "tb-tab");
    b.type = "button";
    b.dataset.page = id;
    b.setAttribute("role", "tab");
    const edge2 = linework("selected"), face = node("span", "tb-tab-face"), paint2 = node("span", "tb-tab-paint"), content = node("span", "tb-tab-content"), icon6 = node("span", "tb-icon tb-icon-" + id);
    edge2.classList.add("tb-tab-edge");
    icon6.setAttribute("aria-hidden", "true");
    icon6.append(node("i"), node("i"));
    content.append(icon6, node("span", "tb-tab-label", label));
    face.append(paint2);
    b.append(face, edge2, content);
    return b;
  }
  function createTopbar({ active, date: date2, weather, period, onSelect, getScene }) {
    const viewport = node("div", "tb-viewport"), header = node("header", "tb-head"), nav = node("nav", "tb-tabs"), controls = /* @__PURE__ */ new Map();
    nav.setAttribute("role", "tablist");
    nav.setAttribute("aria-label", "\u65C5\u884C\u624B\u518C\u9875\u9762");
    for (const [id, label] of TOPBAR_PAGES) {
      const b = tab(id, label);
      b.addEventListener("click", () => {
        setActive(id);
        onSelect(id);
      });
      controls.set(id, b);
      nav.append(b);
    }
    nav.addEventListener("keydown", (event) => {
      const enabled = TOPBAR_PAGES.filter(([id]) => !controls.get(id).disabled), index = enabled.findIndex(([id]) => id === active), destination = { ArrowLeft: (index + enabled.length - 1) % enabled.length, ArrowRight: (index + 1) % enabled.length, Home: 0, End: enabled.length - 1 };
      if (Object.hasOwn(destination, event.key)) {
        event.preventDefault();
        const id = enabled[destination[event.key]][0];
        setActive(id);
        controls.get(id).focus();
        onSelect(id);
      }
    });
    const meta2 = node("div", "tb-meta"), metaEdge = linework("meta"), metaFace = node("span", "tb-meta-face"), weatherImage = node("img", "tb-weather-image");
    metaEdge.classList.add("tb-meta-edge");
    weatherImage.src = weatherView(weather, { \u65F6\u6BB5: period }).src;
    weatherImage.alt = "";
    weatherImage.setAttribute("aria-hidden", "true");
    const text = node("span", "tb-meta-text", date2 + " \xB7 " + weather + " \xB7 " + period);
    meta2.append(metaFace, metaEdge, weatherImage, text);
    header.append(decoration(), nav, meta2);
    viewport.append(header);
    function setActive(id) {
      active = id;
      header.dataset.page = id;
      for (const [key, b] of controls) {
        const chosen = key === id;
        b.setAttribute("aria-selected", String(chosen));
        b.tabIndex = chosen ? 0 : -1;
      }
      if (getScene) {
        const scene = getScene();
        text.textContent = (scene.\u65F6\u95F4.\u65E5\u671F ?? "\u65E5\u671F\u5F85\u8BB0\u5F55").replace(/^共历\d+年/, "") + " \xB7 " + (scene.\u5929\u6C14 ?? "\u5929\u6C14\u5F85\u8BB0\u5F55") + " \xB7 " + scene.\u65F6\u95F4.\u65F6\u6BB5;
        weatherImage.src = weatherView(scene.\u5929\u6C14, scene.\u65F6\u95F4).src;
      }
    }
    function resize() {
      const scale = viewport.clientWidth / 1243;
      header.style.transform = "scale(" + scale + ")";
      viewport.style.height = 81 * scale + "px";
    }
    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    setActive(active);
    return { element: viewport, setActive, destroy() {
      observer.disconnect();
      viewport.remove();
    } };
  }

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
    "REG-15": {
      "name": "\u6258\u4F26\u5CAC\u6D77\u5CB8",
      "asset": "region-reg-04",
      "file": "../regions/reg-04-v1.png",
      "width": 1448,
      "height": 1086,
      "summary": "\u5CAC\u89D2\u3001\u7901\u6EE9\u4E0E\u80CC\u98CE\u6E14\u57E0"
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

  // src/ui/food-art.json
  var food_art_default = [
    {
      id: "FOOD-001",
      name: "\u6CB3\u8C37\u5976\u6CB9\u9C7C\u6C64",
      region: "REG-01",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/840e394a725f43be5f754424cfacd5a015825b0a/handbook/images/foods/REG-01/food-001.png",
      width: 1728,
      height: 910,
      flavor: "\u9C7C\u8089\u677E\u8F6F\uFF0C\u6C64\u6C41\u7A20\u6ED1\uFF0C\u5E26\u5976\u9999\u548C\u83B3\u841D\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-002",
      name: "\u6885\u91CC\u5B89\u7117\u8C46",
      region: "REG-01",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/840e394a725f43be5f754424cfacd5a015825b0a/handbook/images/foods/REG-01/food-002.png",
      width: 1728,
      height: 910,
      flavor: "\u8868\u5C42\u5FAE\u8106\uFF0C\u8C46\u5B50\u8F6F\u7CEF\uFF0C\u9EA6\u7C92\u6709\u56BC\u52B2\uFF0C\u5E26\u9EC4\u6CB9\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-003",
      name: "\u78E8\u574A\u54B8\u6D3E",
      region: "REG-01",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/840e394a725f43be5f754424cfacd5a015825b0a/handbook/images/foods/REG-01/food-003.png",
      width: 1729,
      height: 910,
      flavor: "\u6D3E\u76AE\u9165\u8106\uFF0C\u5185\u9985\u8F6F\u5AE9\uFF0C\u5976\u916A\u5E26\u54B8\u5473\uFF0C\u97ED\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-004",
      name: "\u8702\u871C\u70E4\u68A8",
      region: "REG-01",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/840e394a725f43be5f754424cfacd5a015825b0a/handbook/images/foods/REG-01/food-004.png",
      width: 1729,
      height: 910,
      flavor: "\u68A8\u8089\u8F6F\u5AE9\uFF0C\u871C\u6C41\u751C\uFF0C\u5E95\u90E8\u9762\u5305\u5E26\u70D8\u70E4\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-005",
      name: "\u8239\u592B\u9ED1\u9EA6\u8106\u997C",
      region: "REG-01",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/840e394a725f43be5f754424cfacd5a015825b0a/handbook/images/foods/REG-01/food-005.png",
      width: 1730,
      height: 909,
      flavor: "\u997C\u7247\u5E72\u8106\uFF0C\u5E26\u9ED1\u9EA6\u9999\u6C14\u548C\u5C11\u91CF\u54B8\u5473\u3002"
    },
    {
      id: "FOOD-006",
      name: "\u82F9\u679C\u7096\u732A\u8089",
      region: "REG-01",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/840e394a725f43be5f754424cfacd5a015825b0a/handbook/images/foods/REG-01/food-006.png",
      width: 1729,
      height: 910,
      flavor: "\u8089\u5757\u8F6F\u5AE9\uFF0C\u82F9\u679C\u5E26\u9178\u751C\u5473\uFF0C\u6C64\u6C41\u6709\u6D0B\u8471\u548C\u767E\u91CC\u9999\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-007",
      name: "\u82A5\u7C7D\u70E4\u9E21",
      region: "REG-01",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/840e394a725f43be5f754424cfacd5a015825b0a/handbook/images/foods/REG-01/food-007.png",
      width: 1728,
      height: 910,
      flavor: "\u9E21\u76AE\u5FAE\u8106\uFF0C\u9E21\u8089\u5E26\u82A5\u7C7D\u7684\u8F9B\u9999\u548C\u9EC4\u6CB9\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-008",
      name: "\u97ED\u8471\u85AF\u6CE5",
      region: "REG-01",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/840e394a725f43be5f754424cfacd5a015825b0a/handbook/images/foods/REG-01/food-008.png",
      width: 1729,
      height: 910,
      flavor: "\u85AF\u6CE5\u7EF5\u8F6F\uFF0C\u5E26\u5976\u9999\u548C\u97ED\u8471\u7684\u751C\u5473\u3002"
    },
    {
      id: "FOOD-009",
      name: "\u5976\u6CB9\u8C4C\u8C46\u7117\u86CB",
      region: "REG-01",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/840e394a725f43be5f754424cfacd5a015825b0a/handbook/images/foods/REG-01/food-009.png",
      width: 1729,
      height: 910,
      flavor: "\u86CB\u767D\u67D4\u8F6F\uFF0C\u8C4C\u8C46\u7565\u751C\uFF0C\u8868\u5C42\u5976\u916A\u5E26\u54B8\u9999\u3002"
    },
    {
      id: "FOOD-010",
      name: "\u6885\u9171\u9762\u5305\u5E03\u4E01",
      region: "REG-01",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/840e394a725f43be5f754424cfacd5a015825b0a/handbook/images/foods/REG-01/food-010.png",
      width: 1729,
      height: 910,
      flavor: "\u5E03\u4E01\u677E\u8F6F\u6E7F\u6DA6\uFF0C\u6885\u9171\u9178\u751C\uFF0C\u5E26\u86CB\u5976\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-011",
      name: "\u8461\u53F6\u9999\u8349\u996D",
      region: "REG-02",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ecd798eb455808274eb4635b19139a5f41aabaf3/handbook/images/foods/REG-02/food-011.png",
      width: 1728,
      height: 910,
      flavor: "\u7C73\u996D\u67D4\u8F6F\uFF0C\u767D\u8C46\u7EF5\u8F6F\uFF0C\u8461\u8404\u53F6\u7565\u9178\uFF0C\u5E26\u6B27\u82B9\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-012",
      name: "\u7267\u573A\u871C\u916A\u5410\u53F8",
      region: "REG-02",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ecd798eb455808274eb4635b19139a5f41aabaf3/handbook/images/foods/REG-02/food-012.png",
      width: 1729,
      height: 910,
      flavor: "\u9762\u5305\u8868\u5C42\u5FAE\u8106\uFF0C\u5976\u916A\u67D4\u8F6F\uFF0C\u8702\u871C\u5E26\u751C\u5473\u3002"
    },
    {
      id: "FOOD-013",
      name: "\u83F2\u4F26\u8461\u9999\u7096\u8089",
      region: "REG-02",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ecd798eb455808274eb4635b19139a5f41aabaf3/handbook/images/foods/REG-02/food-013.png",
      width: 1729,
      height: 910,
      flavor: "\u725B\u8089\u8F6F\u5AE9\uFF0C\u8461\u8404\u6C41\u9178\u751C\uFF0C\u7C97\u9EA6\u996D\u6709\u56BC\u52B2\u3002"
    },
    {
      id: "FOOD-014",
      name: "\u4E18\u9675\u9999\u8349\u9C9C\u916A",
      region: "REG-02",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ecd798eb455808274eb4635b19139a5f41aabaf3/handbook/images/foods/REG-02/food-014.png",
      width: 1728,
      height: 910,
      flavor: "\u5976\u916A\u67D4\u8F6F\uFF0C\u5976\u5473\u5E26\u5FAE\u9178\uFF0C\u8868\u9762\u6709\u767E\u91CC\u9999\u548C\u6B27\u82B9\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-015",
      name: "\u871C\u91D1\u5343\u5C42\u9165",
      region: "REG-02",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ecd798eb455808274eb4635b19139a5f41aabaf3/handbook/images/foods/REG-02/food-015.png",
      width: 1729,
      height: 910,
      flavor: "\u9165\u76AE\u5C42\u6B21\u677E\u8106\uFF0C\u80E1\u6843\u6709\u9897\u7C92\u611F\uFF0C\u8702\u871C\u5473\u751C\u3002"
    },
    {
      id: "FOOD-016",
      name: "\u8FF7\u8FED\u9999\u70E4\u7F8A\u6392",
      region: "REG-02",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ecd798eb455808274eb4635b19139a5f41aabaf3/handbook/images/foods/REG-02/food-016.png",
      width: 1729,
      height: 910,
      flavor: "\u7F8A\u6392\u8868\u5C42\u7126\u9999\uFF0C\u8089\u5185\u5E26\u6C41\uFF0C\u5E26\u849C\u9999\u548C\u8FF7\u8FED\u9999\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-017",
      name: "\u82F9\u679C\u80E1\u6843\u631E",
      region: "REG-02",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ecd798eb455808274eb4635b19139a5f41aabaf3/handbook/images/foods/REG-02/food-017.png",
      width: 1730,
      height: 909,
      flavor: "\u631E\u76AE\u9165\u8106\uFF0C\u82F9\u679C\u8F6F\u5AE9\u9178\u751C\uFF0C\u80E1\u6843\u6709\u56BC\u52B2\u3002"
    },
    {
      id: "FOOD-018",
      name: "\u9999\u8349\u70E4\u8611\u83C7",
      region: "REG-02",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ecd798eb455808274eb4635b19139a5f41aabaf3/handbook/images/foods/REG-02/food-018.png",
      width: 1729,
      height: 910,
      flavor: "\u83CC\u83C7\u67D4\u8F6F\u591A\u6C41\uFF0C\u5E26\u9EC4\u6CB9\u548C\u767E\u91CC\u9999\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-019",
      name: "\u8461\u8404\u5E72\u5976\u916A\u5377",
      region: "REG-02",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ecd798eb455808274eb4635b19139a5f41aabaf3/handbook/images/foods/REG-02/food-019.png",
      width: 1729,
      height: 910,
      flavor: "\u5916\u76AE\u5FAE\u8106\uFF0C\u5976\u916A\u9985\u67D4\u8F6F\uFF0C\u8461\u8404\u5E72\u5E26\u9178\u751C\u5473\u3002"
    },
    {
      id: "FOOD-020",
      name: "\u751C\u6912\u917F\u9EA6\u7C92",
      region: "REG-02",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ecd798eb455808274eb4635b19139a5f41aabaf3/handbook/images/foods/REG-02/food-020.png",
      width: 1729,
      height: 910,
      flavor: "\u751C\u6912\u67D4\u8F6F\u5E26\u751C\u5473\uFF0C\u9EA6\u7C92\u6709\u56BC\u52B2\uFF0C\u767D\u8C46\u7EF5\u8F6F\u3002"
    },
    {
      id: "FOOD-021",
      name: "\u591A\u4F26\u53CC\u9985\u70E4\u997C",
      region: "REG-03",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/028b598130f3dad342fa54dbc2be8c393f155f66/handbook/images/foods/REG-03/food-021.png",
      width: 1729,
      height: 910,
      flavor: "\u5916\u76AE\u5FAE\u8106\uFF0C\u8C46\u9985\u7EF5\u8F6F\u504F\u54B8\uFF0C\u8089\u9985\u5E26\u6D0B\u8471\u751C\u5473\u548C\u8089\u6C41\u3002"
    },
    {
      id: "FOOD-022",
      name: "\u65C5\u5546\u9999\u6599\u7096\u9505",
      region: "REG-03",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/028b598130f3dad342fa54dbc2be8c393f155f66/handbook/images/foods/REG-03/food-022.png",
      width: 1729,
      height: 910,
      flavor: "\u6839\u83DC\u8F6F\u70C2\uFF0C\u5357\u74DC\u7565\u751C\uFF0C\u9ED1\u80E1\u6912\u5E26\u8F9B\u9999\u3002"
    },
    {
      id: "FOOD-023",
      name: "\u70E4\u6912\u5BBD\u9762",
      region: "REG-03",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/028b598130f3dad342fa54dbc2be8c393f155f66/handbook/images/foods/REG-03/food-023.png",
      width: 1725,
      height: 912,
      flavor: "\u9762\u6761\u6709\u56BC\u52B2\uFF0C\u751C\u6912\u5E26\u70D8\u70E4\u9999\u6C14\uFF0C\u9178\u83DC\u5E26\u9178\u5473\u3002"
    },
    {
      id: "FOOD-024",
      name: "\u7EF4\u7279\u62C9\u4E73\u916A\u5854",
      region: "REG-03",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/028b598130f3dad342fa54dbc2be8c393f155f66/handbook/images/foods/REG-03/food-024.png",
      width: 1729,
      height: 910,
      flavor: "\u5854\u76AE\u9165\u8106\uFF0C\u5976\u916A\u9985\u7EC6\u8F6F\uFF0C\u8393\u679C\u9171\u9178\u751C\u3002"
    },
    {
      id: "FOOD-025",
      name: "\u5357\u5CB8\u6A58\u76AE\u7CD6",
      region: "REG-03",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/028b598130f3dad342fa54dbc2be8c393f155f66/handbook/images/foods/REG-03/food-025.png",
      width: 1729,
      height: 910,
      flavor: "\u7CD6\u5757\u786C\u8106\uFF0C\u751C\u5473\u4E2D\u5E26\u6A58\u76AE\u7684\u9999\u6C14\u548C\u5FAE\u82E6\u5473\u3002"
    },
    {
      id: "FOOD-026",
      name: "\u6D0B\u8471\u725B\u8089\u957F\u9762\u5305",
      region: "REG-03",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/028b598130f3dad342fa54dbc2be8c393f155f66/handbook/images/foods/REG-03/food-026.png",
      width: 1730,
      height: 909,
      flavor: "\u9762\u5305\u5916\u5C42\u6709\u56BC\u52B2\uFF0C\u725B\u8089\u5E26\u8089\u6C41\uFF0C\u6D0B\u8471\u7565\u751C\uFF0C\u82A5\u7C7D\u9171\u5E26\u8F9B\u9999\u3002"
    },
    {
      id: "FOOD-027",
      name: "\u756A\u8304\u8089\u4E38\u7117\u76D8",
      region: "REG-03",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/028b598130f3dad342fa54dbc2be8c393f155f66/handbook/images/foods/REG-03/food-027.png",
      width: 1728,
      height: 910,
      flavor: "\u8089\u4E38\u7D27\u5B9E\uFF0C\u756A\u8304\u9171\u9178\u751C\uFF0C\u5976\u916A\u5E26\u54B8\u9999\u3002"
    },
    {
      id: "FOOD-028",
      name: "\u9999\u8349\u714E\u571F\u8C46\u56E2",
      region: "REG-03",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/028b598130f3dad342fa54dbc2be8c393f155f66/handbook/images/foods/REG-03/food-028.png",
      width: 1729,
      height: 910,
      flavor: "\u8868\u9762\u5FAE\u8106\uFF0C\u5185\u90E8\u7EF5\u8F6F\uFF0C\u5E26\u9EC4\u6CB9\u548C\u767E\u91CC\u9999\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-029",
      name: "\u8611\u83C7\u5976\u6CB9\u70E9\u996D",
      region: "REG-03",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/028b598130f3dad342fa54dbc2be8c393f155f66/handbook/images/foods/REG-03/food-029.png",
      width: 1729,
      height: 910,
      flavor: "\u7C73\u996D\u7A20\u8F6F\uFF0C\u83CC\u83C7\u5E26\u9C9C\u5473\uFF0C\u5976\u6CB9\u4F7F\u6C64\u6C41\u6ED1\u6DA6\u3002"
    },
    {
      id: "FOOD-030",
      name: "\u674F\u4EC1\u9165\u89D2",
      region: "REG-03",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/028b598130f3dad342fa54dbc2be8c393f155f66/handbook/images/foods/REG-03/food-030.png",
      width: 1729,
      height: 910,
      flavor: "\u9165\u76AE\u677E\u8106\uFF0C\u674F\u4EC1\u9985\u6709\u7EC6\u7C92\u611F\uFF0C\u5473\u751C\u5E76\u5E26\u575A\u679C\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-031",
      name: "\u918B\u7092\u5976\u916A\u9C7C",
      region: "REG-04",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e91e634bb9b8c0943d95d3af143a3f003932da91/handbook/images/foods/REG-04/food-031.png",
      width: 1729,
      height: 910,
      flavor: "\u9C7C\u8089\u677E\u8F6F\uFF0C\u5976\u916A\u67D4\u8F6F\uFF0C\u679C\u918B\u5E26\u9178\u5473\uFF0C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-032",
      name: "\u7CD6\u62CC\u67E0\u6AAC\u867E",
      region: "REG-04",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e91e634bb9b8c0943d95d3af143a3f003932da91/handbook/images/foods/REG-04/food-032.png",
      width: 1729,
      height: 910,
      flavor: "\u867E\u8089\u7D27\u5B9E\u6709\u5F39\u6027\uFF0C\u67E0\u6AAC\u7CD6\u6C41\u9178\u751C\u3002"
    },
    {
      id: "FOOD-033",
      name: "\u8D1D\u8428\u5C14\u767D\u9C7C\u6D53\u6C64",
      region: "REG-04",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e91e634bb9b8c0943d95d3af143a3f003932da91/handbook/images/foods/REG-04/food-033.png",
      width: 1730,
      height: 909,
      flavor: "\u9C7C\u8089\u677E\u8F6F\uFF0C\u8D1D\u8089\u6709\u56BC\u52B2\uFF0C\u6C64\u5473\u9C9C\uFF0C\u70E4\u9EA6\u788E\u5E26\u8106\u611F\u3002"
    },
    {
      id: "FOOD-034",
      name: "\u6D77\u76D0\u70E4\u94F6\u9C7C",
      region: "REG-04",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e91e634bb9b8c0943d95d3af143a3f003932da91/handbook/images/foods/REG-04/food-034.png",
      width: 1729,
      height: 910,
      flavor: "\u9C7C\u76AE\u5FAE\u8106\uFF0C\u9C7C\u8089\u7D27\u5B9E\uFF0C\u6D77\u76D0\u5E26\u54B8\u5473\u3002"
    },
    {
      id: "FOOD-035",
      name: "\u6D77\u82D4\u8584\u8106\u997C",
      region: "REG-04",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e91e634bb9b8c0943d95d3af143a3f003932da91/handbook/images/foods/REG-04/food-035.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u7247\u8584\u8106\uFF0C\u5E26\u6D77\u85FB\u9C9C\u5473\u548C\u86CB\u9999\u3002"
    },
    {
      id: "FOOD-036",
      name: "\u6F6E\u6C50\u7126\u7CD6\u5976\u51BB",
      region: "REG-04",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e91e634bb9b8c0943d95d3af143a3f003932da91/handbook/images/foods/REG-04/food-036.png",
      width: 1729,
      height: 910,
      flavor: "\u5976\u51BB\u7EC6\u8F6F\uFF0C\u7126\u7CD6\u5473\u751C\u4E14\u5FAE\u82E6\uFF0C\u6D77\u76D0\u5E26\u5C11\u91CF\u54B8\u5473\u3002"
    },
    {
      id: "FOOD-037",
      name: "\u5854\u5C14\u8428\u98CE\u5E72\u9C7C",
      region: "REG-04",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e91e634bb9b8c0943d95d3af143a3f003932da91/handbook/images/foods/REG-04/food-037.png",
      width: 1729,
      height: 910,
      flavor: "\u9C7C\u7247\u7D27\u5B9E\u6709\u56BC\u52B2\uFF0C\u54B8\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-038",
      name: "\u9999\u8349\u7117\u6247\u8D1D",
      region: "REG-04",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e91e634bb9b8c0943d95d3af143a3f003932da91/handbook/images/foods/REG-04/food-038.png",
      width: 1729,
      height: 910,
      flavor: "\u8D1D\u8089\u6709\u5F39\u6027\uFF0C\u9762\u5305\u5C51\u5FAE\u8106\uFF0C\u5E26\u9EC4\u6CB9\u548C\u6B27\u82B9\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-039",
      name: "\u87F9\u8089\u70E9\u996D",
      region: "REG-04",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e91e634bb9b8c0943d95d3af143a3f003932da91/handbook/images/foods/REG-04/food-039.png",
      width: 1727,
      height: 910,
      flavor: "\u7C73\u996D\u7A20\u8F6F\uFF0C\u87F9\u8089\u7EC6\u5AE9\uFF0C\u756A\u8304\u5E26\u9178\u5473\uFF0C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-040",
      name: "\u8D1D\u8089\u97ED\u8471\u6D3E",
      region: "REG-04",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/e91e634bb9b8c0943d95d3af143a3f003932da91/handbook/images/foods/REG-04/food-040.png",
      width: 1730,
      height: 909,
      flavor: "\u6D3E\u76AE\u9165\u8106\uFF0C\u8D1D\u8089\u6709\u56BC\u52B2\uFF0C\u97ED\u8471\u5E26\u751C\u5473\u3002"
    },
    {
      id: "FOOD-041",
      name: "\u4E4C\u5C14\u8FBE\u514B\u4E30\u6536\u9505",
      region: "REG-05",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/cd408d98e8793d98ffde9f53475ae0e076e9c74a/handbook/images/foods/REG-05/food-041.png",
      width: 1729,
      height: 910,
      flavor: "\u7F8A\u8089\u8F6F\u5AE9\uFF0C\u9EA6\u7C92\u6709\u56BC\u52B2\uFF0C\u6839\u83DC\u7565\u751C\uFF0C\u6C64\u6C41\u7A20\u539A\u3002"
    },
    {
      id: "FOOD-042",
      name: "\u7267\u4EBA\u8C46\u997C",
      region: "REG-05",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/cd408d98e8793d98ffde9f53475ae0e076e9c74a/handbook/images/foods/REG-05/food-042.png",
      width: 1731,
      height: 909,
      flavor: "\u8C46\u997C\u5916\u5C42\u5FAE\u8106\u3001\u5185\u91CC\u7EF5\u8F6F\uFF0C\u9178\u83DC\u5E26\u9178\u5473\uFF0C\u9EC4\u74DC\u8106\u5AE9\u3002"
    },
    {
      id: "FOOD-043",
      name: "\u91D1\u9EA6\u8089\u916A\u997C",
      region: "REG-05",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/cd408d98e8793d98ffde9f53475ae0e076e9c74a/handbook/images/foods/REG-05/food-043.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u8FB9\u5FAE\u8106\uFF0C\u8089\u6C41\u6D78\u5165\u997C\u5FC3\uFF0C\u5976\u916A\u5473\u54B8\u3002"
    },
    {
      id: "FOOD-044",
      name: "\u871C\u916A\u70E4\u6839\u83DC",
      region: "REG-05",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/cd408d98e8793d98ffde9f53475ae0e076e9c74a/handbook/images/foods/REG-05/food-044.png",
      width: 1732,
      height: 908,
      flavor: "\u6839\u83DC\u8F6F\u5AE9\uFF0C\u9C9C\u5976\u916A\u5E26\u5976\u5473\uFF0C\u8702\u871C\u4F7F\u53E3\u5473\u504F\u751C\u3002"
    },
    {
      id: "FOOD-045",
      name: "\u8FDC\u884C\u8005\u8089\u5E72",
      region: "REG-05",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/cd408d98e8793d98ffde9f53475ae0e076e9c74a/handbook/images/foods/REG-05/food-045.png",
      width: 1730,
      height: 909,
      flavor: "\u8089\u6761\u7D27\u5B9E\u6709\u56BC\u52B2\uFF0C\u70E4\u8C46\u5E72\u8106\uFF0C\u54B8\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-046",
      name: "\u8FF7\u8FED\u9999\u7F8A\u8089\u4E32",
      region: "REG-05",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/cd408d98e8793d98ffde9f53475ae0e076e9c74a/handbook/images/foods/REG-05/food-046.png",
      width: 1729,
      height: 910,
      flavor: "\u7F8A\u8089\u8868\u5C42\u7126\u9999\uFF0C\u6D0B\u8471\u67D4\u8F6F\u7565\u751C\uFF0C\u5E26\u8FF7\u8FED\u9999\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-047",
      name: "\u7267\u573A\u725B\u8089\u9985\u997C",
      region: "REG-05",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/cd408d98e8793d98ffde9f53475ae0e076e9c74a/handbook/images/foods/REG-05/food-047.png",
      width: 1729,
      height: 910,
      flavor: "\u5916\u76AE\u9165\u8106\uFF0C\u8089\u9985\u6E7F\u6DA6\uFF0C\u80E1\u841D\u535C\u548C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-048",
      name: "\u8C4C\u8C46\u7096\u706B\u817F",
      region: "REG-05",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/cd408d98e8793d98ffde9f53475ae0e076e9c74a/handbook/images/foods/REG-05/food-048.png",
      width: 1729,
      height: 910,
      flavor: "\u8C4C\u8C46\u7EF5\u8F6F\uFF0C\u706B\u817F\u5E26\u54B8\u5473\uFF0C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-049",
      name: "\u9178\u4E73\u9EC4\u74DC\u62CC\u83DC",
      region: "REG-05",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/cd408d98e8793d98ffde9f53475ae0e076e9c74a/handbook/images/foods/REG-05/food-049.png",
      width: 1728,
      height: 910,
      flavor: "\u9EC4\u74DC\u8106\u5AE9\uFF0C\u9178\u4E73\u7A20\u6ED1\u5E26\u9178\u5473\uFF0C\u83B3\u841D\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-050",
      name: "\u82F9\u679C\u71D5\u9EA6\u70E4\u5E03\u4E01",
      region: "REG-05",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/cd408d98e8793d98ffde9f53475ae0e076e9c74a/handbook/images/foods/REG-05/food-050.png",
      width: 1729,
      height: 910,
      flavor: "\u86CB\u5976\u90E8\u5206\u67D4\u8F6F\uFF0C\u71D5\u9EA6\u6709\u9897\u7C92\u611F\uFF0C\u82F9\u679C\u9178\u751C\u3002"
    },
    {
      id: "FOOD-051",
      name: "\u9AD8\u5730\u83CC\u83C7\u70E9\u9EA6",
      region: "REG-06",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ce801bf184623f18f7fc550d9cff05264121551d/handbook/images/foods/REG-06/food-051.png",
      width: 1729,
      height: 910,
      flavor: "\u71D5\u9EA6\u7A20\u8F6F\uFF0C\u83CC\u83C7\u6709\u56BC\u52B2\uFF0C\u6D0B\u8471\u5E26\u751C\u5473\u3002"
    },
    {
      id: "FOOD-052",
      name: "\u79D1\u5C14\u74E6\u6069\u8089\u9985\u85AF\u997C",
      region: "REG-06",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ce801bf184623f18f7fc550d9cff05264121551d/handbook/images/foods/REG-06/food-052.png",
      width: 1729,
      height: 910,
      flavor: "\u85AF\u997C\u8868\u5C42\u5FAE\u8106\uFF0C\u5185\u91CC\u7EF5\u8F6F\uFF0C\u98CE\u5E72\u8089\u504F\u54B8\uFF0C\u9178\u4E73\u5E26\u9178\u5473\u3002"
    },
    {
      id: "FOOD-053",
      name: "\u7089\u8FB9\u5976\u916A\u9762\u5305",
      region: "REG-06",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ce801bf184623f18f7fc550d9cff05264121551d/handbook/images/foods/REG-06/food-053.png",
      width: 1729,
      height: 910,
      flavor: "\u5916\u76AE\u5FAE\u8106\uFF0C\u9762\u5305\u5185\u90E8\u677E\u8F6F\uFF0C\u5976\u916A\u9985\u5E26\u54B8\u5473\u548C\u5976\u9999\u3002"
    },
    {
      id: "FOOD-054",
      name: "\u5C71\u8393\u71D5\u9EA6\u9165",
      region: "REG-06",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ce801bf184623f18f7fc550d9cff05264121551d/handbook/images/foods/REG-06/food-054.png",
      width: 1729,
      height: 910,
      flavor: "\u71D5\u9EA6\u9165\u5C42\u677E\u8106\uFF0C\u8393\u679C\u9985\u6E7F\u8F6F\u9178\u751C\u3002"
    },
    {
      id: "FOOD-055",
      name: "\u9AD8\u5730\u9648\u5E74\u4E73\u916A",
      region: "REG-06",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ce801bf184623f18f7fc550d9cff05264121551d/handbook/images/foods/REG-06/food-055.png",
      width: 1731,
      height: 909,
      flavor: "\u5976\u916A\u8D28\u5730\u7D27\u5B9E\uFF0C\u5473\u54B8\uFF0C\u5976\u9999\u8F83\u6D53\u3002"
    },
    {
      id: "FOOD-056",
      name: "\u835E\u9EA6\u7F8A\u8089\u5377",
      region: "REG-06",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ce801bf184623f18f7fc550d9cff05264121551d/handbook/images/foods/REG-06/food-056.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u76AE\u67D4\u97E7\uFF0C\u5E26\u835E\u9EA6\u6C14\u5473\uFF0C\u7F8A\u8089\u9985\u6709\u8089\u6C41\uFF0C\u5377\u5FC3\u83DC\u7565\u751C\u3002"
    },
    {
      id: "FOOD-057",
      name: "\u9999\u8349\u70E4\u9CDF\u9C7C",
      region: "REG-06",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ce801bf184623f18f7fc550d9cff05264121551d/handbook/images/foods/REG-06/food-057.png",
      width: 1729,
      height: 910,
      flavor: "\u9C7C\u76AE\u5FAE\u8106\uFF0C\u9C7C\u8089\u677E\u8F6F\uFF0C\u5E26\u9EC4\u6CB9\u548C\u767E\u91CC\u9999\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-058",
      name: "\u7F8A\u4E73\u7117\u5357\u74DC",
      region: "REG-06",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ce801bf184623f18f7fc550d9cff05264121551d/handbook/images/foods/REG-06/food-058.png",
      width: 1729,
      height: 910,
      flavor: "\u5357\u74DC\u8F6F\u7EF5\u504F\u751C\uFF0C\u86CB\u5976\u90E8\u5206\u67D4\u8F6F\uFF0C\u5976\u916A\u5E26\u54B8\u5473\u3002"
    },
    {
      id: "FOOD-059",
      name: "\u751C\u83DC\u7096\u725B\u8089",
      region: "REG-06",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ce801bf184623f18f7fc550d9cff05264121551d/handbook/images/foods/REG-06/food-059.png",
      width: 1729,
      height: 910,
      flavor: "\u725B\u8089\u8F6F\u5AE9\uFF0C\u571F\u8C46\u7EF5\u8F6F\uFF0C\u751C\u83DC\u548C\u6D0B\u8471\u5E26\u751C\u5473\u3002"
    },
    {
      id: "FOOD-060",
      name: "\u5C71\u8393\u9178\u4E73\u7CD5",
      region: "REG-06",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ce801bf184623f18f7fc550d9cff05264121551d/handbook/images/foods/REG-06/food-060.png",
      width: 1729,
      height: 910,
      flavor: "\u7CD5\u4F53\u677E\u8F6F\u6E7F\u6DA6\uFF0C\u5C71\u8393\u548C\u9178\u4E73\u5E26\u9178\u5473\uFF0C\u679C\u8089\u7565\u751C\u3002"
    },
    {
      id: "FOOD-061",
      name: "\u54C8\u5FB7\u6797\u83CC\u83C7\u7117\u9EA6",
      region: "REG-07",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/4c4a27f94cbef36375202df10ff854aba992e1fe/handbook/images/foods/REG-07/food-061.png",
      width: 1729,
      height: 910,
      flavor: "\u8868\u5C42\u5976\u916A\u5FAE\u8106\uFF0C\u9EA6\u7C92\u6709\u56BC\u52B2\uFF0C\u83CC\u83C7\u5E26\u9C9C\u5473\u3002"
    },
    {
      id: "FOOD-062",
      name: "\u953B\u7089\u9999\u80A0\u9505",
      region: "REG-07",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/4c4a27f94cbef36375202df10ff854aba992e1fe/handbook/images/foods/REG-07/food-062.png",
      width: 1729,
      height: 910,
      flavor: "\u9999\u80A0\u7D27\u5B9E\u504F\u54B8\uFF0C\u571F\u8C46\u7EF5\u8F6F\uFF0C\u6839\u83DC\u6C64\u5E26\u751C\u5473\u3002"
    },
    {
      id: "FOOD-063",
      name: "\u77F3\u5385\u76D0\u7ED3\u9762\u5305",
      region: "REG-07",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/4c4a27f94cbef36375202df10ff854aba992e1fe/handbook/images/foods/REG-07/food-063.png",
      width: 1729,
      height: 910,
      flavor: "\u5916\u76AE\u6709\u56BC\u52B2\uFF0C\u5185\u90E8\u677E\u8F6F\uFF0C\u5CA9\u76D0\u5E26\u54B8\u5473\uFF0C\u9EC4\u6CB9\u5E26\u5976\u9999\u3002"
    },
    {
      id: "FOOD-064",
      name: "\u9ED1\u7CD6\u80E1\u6843\u5377",
      region: "REG-07",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/4c4a27f94cbef36375202df10ff854aba992e1fe/handbook/images/foods/REG-07/food-064.png",
      width: 1729,
      height: 910,
      flavor: "\u9762\u5377\u677E\u8F6F\uFF0C\u80E1\u6843\u6709\u9897\u7C92\u611F\uFF0C\u9ED1\u7CD6\u6D46\u5E26\u751C\u5473\u548C\u7126\u7CD6\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-065",
      name: "\u94C1\u9505\u70E4\u6839\u83DC",
      region: "REG-07",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/4c4a27f94cbef36375202df10ff854aba992e1fe/handbook/images/foods/REG-07/food-065.png",
      width: 1731,
      height: 909,
      flavor: "\u8868\u5C42\u5FAE\u8106\uFF0C\u5185\u90E8\u8F6F\u7EF5\uFF0C\u80E1\u841D\u535C\u548C\u829C\u83C1\u7565\u751C\u3002"
    },
    {
      id: "FOOD-066",
      name: "\u77F3\u7089\u70E4\u732A\u8098",
      region: "REG-07",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/4c4a27f94cbef36375202df10ff854aba992e1fe/handbook/images/foods/REG-07/food-066.png",
      width: 1729,
      height: 910,
      flavor: "\u5916\u76AE\u7126\u8106\uFF0C\u8089\u5185\u8F6F\u5AE9\uFF0C\u5E26\u82A5\u7C7D\u548C\u9ED1\u80E1\u6912\u7684\u8F9B\u9999\u3002"
    },
    {
      id: "FOOD-067",
      name: "\u77F3\u5385\u83CC\u83C7\u997A",
      region: "REG-07",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/4c4a27f94cbef36375202df10ff854aba992e1fe/handbook/images/foods/REG-07/food-067.png",
      width: 1729,
      height: 910,
      flavor: "\u9762\u76AE\u67D4\u97E7\uFF0C\u9985\u6599\u7EC6\u8F6F\uFF0C\u5E26\u83CC\u83C7\u9C9C\u5473\u548C\u5976\u9999\u3002"
    },
    {
      id: "FOOD-068",
      name: "\u5377\u5FC3\u83DC\u8089\u5377",
      region: "REG-07",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/4c4a27f94cbef36375202df10ff854aba992e1fe/handbook/images/foods/REG-07/food-068.png",
      width: 1729,
      height: 910,
      flavor: "\u83DC\u53F6\u67D4\u8F6F\uFF0C\u8089\u9985\u7D27\u5B9E\uFF0C\u9EA6\u7C92\u6709\u56BC\u52B2\uFF0C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-069",
      name: "\u6817\u5B50\u6D53\u6C64",
      region: "REG-07",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/4c4a27f94cbef36375202df10ff854aba992e1fe/handbook/images/foods/REG-07/food-069.png",
      width: 1729,
      height: 910,
      flavor: "\u6C64\u8D28\u7EC6\u7A20\uFF0C\u6817\u5B50\u548C\u725B\u4E73\u7565\u751C\uFF0C\u5E26\u9EC4\u6CB9\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-070",
      name: "\u9EA6\u82BD\u5976\u5E03\u4E01",
      region: "REG-07",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/4c4a27f94cbef36375202df10ff854aba992e1fe/handbook/images/foods/REG-07/food-070.png",
      width: 1729,
      height: 910,
      flavor: "\u5E03\u4E01\u7EC6\u8F6F\uFF0C\u5473\u751C\uFF0C\u5E26\u9EA6\u82BD\u548C\u86CB\u5976\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-071",
      name: "\u6797\u95F4\u5976\u6CB9\u83C7\u6C64",
      region: "REG-08",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/b7730fee274ef26e55563643e4a659a163e40ea8/handbook/images/foods/REG-08/food-071.png",
      width: 1728,
      height: 910,
      flavor: "\u6C64\u6C41\u7A20\u6ED1\uFF0C\u83CC\u83C7\u67D4\u8F6F\uFF0C\u5E26\u5976\u9999\u548C\u83CC\u83C7\u9C9C\u5473\u3002"
    },
    {
      id: "FOOD-072",
      name: "\u7EFF\u5ECA\u9999\u8349\u7117\u8C46",
      region: "REG-08",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/b7730fee274ef26e55563643e4a659a163e40ea8/handbook/images/foods/REG-08/food-072.png",
      width: 1728,
      height: 910,
      flavor: "\u767D\u8C46\u7EF5\u8F6F\uFF0C\u6C64\u6C41\u5E26\u6D0B\u8471\u751C\u5473\u548C\u9999\u8349\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-073",
      name: "\u677E\u7C7D\u8584\u997C",
      region: "REG-08",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/b7730fee274ef26e55563643e4a659a163e40ea8/handbook/images/foods/REG-08/food-073.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u7247\u677E\u8106\uFF0C\u677E\u7C7D\u6709\u9897\u7C92\u611F\uFF0C\u5E26\u575A\u679C\u548C\u9EC4\u6CB9\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-074",
      name: "\u8393\u679D\u9165",
      region: "REG-08",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/b7730fee274ef26e55563643e4a659a163e40ea8/handbook/images/foods/REG-08/food-074.png",
      width: 1729,
      height: 910,
      flavor: "\u9165\u76AE\u677E\u8106\uFF0C\u8393\u9171\u6E7F\u8F6F\uFF0C\u53E3\u5473\u9178\u751C\u3002"
    },
    {
      id: "FOOD-075",
      name: "\u6797\u8393\u679C\u5E72",
      region: "REG-08",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/b7730fee274ef26e55563643e4a659a163e40ea8/handbook/images/foods/REG-08/food-075.png",
      width: 1729,
      height: 910,
      flavor: "\u679C\u5E72\u6709\u56BC\u52B2\uFF0C\u9178\u5473\u548C\u751C\u5473\u8F83\u96C6\u4E2D\u3002"
    },
    {
      id: "FOOD-076",
      name: "\u9999\u8349\u70E4\u5154\u817F",
      region: "REG-08",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/b7730fee274ef26e55563643e4a659a163e40ea8/handbook/images/foods/REG-08/food-076.png",
      width: 1731,
      height: 909,
      flavor: "\u8868\u5C42\u5FAE\u5E72\uFF0C\u8089\u8D28\u7EC6\u5BC6\uFF0C\u5E26\u9EC4\u6CB9\u548C\u767E\u91CC\u9999\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-077",
      name: "\u6817\u5B50\u7096\u9E7F\u8089",
      region: "REG-08",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/b7730fee274ef26e55563643e4a659a163e40ea8/handbook/images/foods/REG-08/food-077.png",
      width: 1729,
      height: 910,
      flavor: "\u9E7F\u8089\u8F6F\u5AE9\uFF0C\u6817\u5B50\u7C89\u7CEF\uFF0C\u80E1\u841D\u535C\u548C\u6D0B\u8471\u5E26\u751C\u5473\u3002"
    },
    {
      id: "FOOD-078",
      name: "\u91CE\u849C\u8611\u83C7\u6D3E",
      region: "REG-08",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/b7730fee274ef26e55563643e4a659a163e40ea8/handbook/images/foods/REG-08/food-078.png",
      width: 1729,
      height: 910,
      flavor: "\u6D3E\u76AE\u9165\u8106\uFF0C\u83CC\u83C7\u9985\u6E7F\u6DA6\uFF0C\u91CE\u849C\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-079",
      name: "\u699B\u5B50\u5976\u6CB9\u5854",
      region: "REG-08",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/b7730fee274ef26e55563643e4a659a163e40ea8/handbook/images/foods/REG-08/food-079.png",
      width: 1729,
      height: 910,
      flavor: "\u5854\u76AE\u9165\u8106\uFF0C\u86CB\u5976\u9985\u7EC6\u8F6F\uFF0C\u699B\u4EC1\u5E26\u8106\u611F\u548C\u575A\u679C\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-080",
      name: "\u9999\u8349\u917F\u5357\u74DC",
      region: "REG-08",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/b7730fee274ef26e55563643e4a659a163e40ea8/handbook/images/foods/REG-08/food-080.png",
      width: 1729,
      height: 910,
      flavor: "\u5357\u74DC\u8F6F\u7EF5\u504F\u751C\uFF0C\u767D\u8C46\u7EF5\u8F6F\uFF0C\u83CC\u83C7\u5E26\u9C9C\u5473\uFF0C\u6B27\u82B9\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-081",
      name: "\u6885\u745E\u767B\u5976\u916A\u70E9\u9762",
      region: "REG-09",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/6d82310e8c4f6991bb31dad45bc74342b9e4e8fa/handbook/images/foods/REG-09/food-081.png",
      width: 1728,
      height: 910,
      flavor: "\u9762\u6761\u67D4\u97E7\uFF0C\u9C7C\u8089\u677E\u8F6F\uFF0C\u9762\u6C41\u7A20\u6ED1\u5E76\u5E26\u5976\u5473\u3002"
    },
    {
      id: "FOOD-082",
      name: "\u821F\u5E02\u5C0F\u9985\u997C",
      region: "REG-09",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/6d82310e8c4f6991bb31dad45bc74342b9e4e8fa/handbook/images/foods/REG-09/food-082.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u76AE\u5FAE\u8106\uFF0C\u8089\u9985\u6E7F\u6DA6\uFF0C\u5377\u5FC3\u83DC\u548C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-083",
      name: "\u94F6\u9C7C\u714E\u997C",
      region: "REG-09",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/6d82310e8c4f6991bb31dad45bc74342b9e4e8fa/handbook/images/foods/REG-09/food-083.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u8FB9\u5FAE\u8106\uFF0C\u5185\u90E8\u67D4\u8F6F\uFF0C\u94F6\u9C7C\u5E26\u9C9C\u5473\uFF0C\u9178\u4E73\u5E26\u9178\u5473\u3002"
    },
    {
      id: "FOOD-084",
      name: "\u6C34\u6817\u5976\u5E03\u4E01",
      region: "REG-09",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/6d82310e8c4f6991bb31dad45bc74342b9e4e8fa/handbook/images/foods/REG-09/food-084.png",
      width: 1764,
      height: 892,
      flavor: "\u5E03\u4E01\u7A20\u8F6F\uFF0C\u6C34\u6817\u788E\u5E26\u9897\u7C92\u611F\uFF0C\u53E3\u5473\u751C\u5E76\u5E26\u5976\u9999\u3002"
    },
    {
      id: "FOOD-085",
      name: "\u8239\u5BB6\u54B8\u916A\u997C",
      region: "REG-09",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/6d82310e8c4f6991bb31dad45bc74342b9e4e8fa/handbook/images/foods/REG-09/food-085.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u76AE\u9165\u8106\uFF0C\u5976\u916A\u9985\u504F\u54B8\uFF0C\u5E26\u9EC4\u6CB9\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-086",
      name: "\u83B3\u841D\u70E4\u6E56\u9C7C",
      region: "REG-09",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/6d82310e8c4f6991bb31dad45bc74342b9e4e8fa/handbook/images/foods/REG-09/food-086.png",
      width: 1728,
      height: 910,
      flavor: "\u9C7C\u76AE\u5FAE\u8106\uFF0C\u9C7C\u8089\u677E\u8F6F\uFF0C\u5E26\u9EC4\u6CB9\u548C\u83B3\u841D\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-087",
      name: "\u6E56\u867E\u70E9\u7C73",
      region: "REG-09",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/6d82310e8c4f6991bb31dad45bc74342b9e4e8fa/handbook/images/foods/REG-09/food-087.png",
      width: 1729,
      height: 910,
      flavor: "\u7C73\u996D\u67D4\u8F6F\uFF0C\u867E\u8089\u6709\u5F39\u6027\uFF0C\u8C4C\u8C46\u7565\u751C\uFF0C\u5E26\u9EC4\u6CB9\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-088",
      name: "\u87AF\u867E\u5976\u6CB9\u6D53\u6C64",
      region: "REG-09",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/6d82310e8c4f6991bb31dad45bc74342b9e4e8fa/handbook/images/foods/REG-09/food-088.png",
      width: 1729,
      height: 910,
      flavor: "\u6C64\u6C41\u7A20\u6ED1\uFF0C\u867E\u8089\u7D27\u5B9E\uFF0C\u5E26\u867E\u7684\u9C9C\u5473\u548C\u5976\u9999\u3002"
    },
    {
      id: "FOOD-089",
      name: "\u6C34\u6817\u4E73\u916A\u9985\u997C",
      region: "REG-09",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/6d82310e8c4f6991bb31dad45bc74342b9e4e8fa/handbook/images/foods/REG-09/food-089.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u76AE\u9165\u8106\uFF0C\u5976\u916A\u9985\u67D4\u8F6F\uFF0C\u6C34\u6817\u788E\u5E26\u9897\u7C92\u611F\u548C\u751C\u5473\u3002"
    },
    {
      id: "FOOD-090",
      name: "\u849C\u9999\u70E4\u9CD7\u6BB5",
      region: "REG-09",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/6d82310e8c4f6991bb31dad45bc74342b9e4e8fa/handbook/images/foods/REG-09/food-090.png",
      width: 1729,
      height: 910,
      flavor: "\u9CD7\u8089\u67D4\u8F6F\u4E14\u6CB9\u8102\u8F83\u591A\uFF0C\u8868\u5C42\u5FAE\u7126\uFF0C\u849C\u9999\u660E\u663E\u3002"
    },
    {
      id: "FOOD-091",
      name: "\u9A7F\u9986\u6241\u8C46\u7096\u8089",
      region: "REG-10",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/5cd548971976be31aff1d22e49fa4a39e5085fdc/handbook/images/foods/REG-10/food-091.png",
      width: 1729,
      height: 910,
      flavor: "\u6241\u8C46\u7EF5\u8F6F\uFF0C\u7F8A\u8089\u8F6F\u5AE9\uFF0C\u6C64\u6C41\u7A20\u539A\uFF0C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-092",
      name: "\u9676\u7089\u9EA6\u997C",
      region: "REG-10",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/5cd548971976be31aff1d22e49fa4a39e5085fdc/handbook/images/foods/REG-10/food-092.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u9762\u5FAE\u8106\uFF0C\u5185\u90E8\u67D4\u97E7\uFF0C\u5E26\u9EA6\u9999\u548C\u70D9\u70E4\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-093",
      name: "\u8352\u8DEF\u9178\u4E73\u70E4\u852C",
      region: "REG-10",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/5cd548971976be31aff1d22e49fa4a39e5085fdc/handbook/images/foods/REG-10/food-093.png",
      width: 1729,
      height: 910,
      flavor: "\u6839\u83DC\u8F6F\u5AE9\uFF0C\u5357\u74DC\u504F\u751C\uFF0C\u9178\u4E73\u7A20\u6ED1\u5E26\u9178\u5473\u3002"
    },
    {
      id: "FOOD-094",
      name: "\u91D1\u829D\u871C\u8106",
      region: "REG-10",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/5cd548971976be31aff1d22e49fa4a39e5085fdc/handbook/images/foods/REG-10/food-094.png",
      width: 1729,
      height: 910,
      flavor: "\u71D5\u9EA6\u548C\u829D\u9EBB\u5E72\u8106\uFF0C\u8702\u871C\u5473\u751C\uFF0C\u5E26\u829D\u9EBB\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-095",
      name: "\u65C5\u5546\u54B8\u4E73\u916A",
      region: "REG-10",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/5cd548971976be31aff1d22e49fa4a39e5085fdc/handbook/images/foods/REG-10/food-095.png",
      width: 1729,
      height: 910,
      flavor: "\u5976\u916A\u8D28\u5730\u7D27\u5B9E\uFF0C\u54B8\u5473\u660E\u663E\uFF0C\u5E26\u5976\u9999\u3002"
    },
    {
      id: "FOOD-096",
      name: "\u5B5C\u7136\u7F8A\u8089\u70D9\u997C",
      region: "REG-10",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/5cd548971976be31aff1d22e49fa4a39e5085fdc/handbook/images/foods/REG-10/food-096.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u76AE\u5FAE\u8106\uFF0C\u8089\u9985\u6E7F\u6DA6\uFF0C\u6D0B\u8471\u7565\u751C\uFF0C\u5B5C\u7136\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-097",
      name: "\u9E70\u5634\u8C46\u8089\u4E38",
      region: "REG-10",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/5cd548971976be31aff1d22e49fa4a39e5085fdc/handbook/images/foods/REG-10/food-097.png",
      width: 1729,
      height: 910,
      flavor: "\u8868\u5C42\u5FAE\u8106\uFF0C\u5185\u90E8\u7D27\u5B9E\uFF0C\u8C46\u6CE5\u7565\u6709\u7C89\u611F\uFF0C\u5E26\u7F8A\u8089\u548C\u6B27\u82B9\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-098",
      name: "\u679C\u5E72\u7096\u7F8A\u8089",
      region: "REG-10",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/5cd548971976be31aff1d22e49fa4a39e5085fdc/handbook/images/foods/REG-10/food-098.png",
      width: 1729,
      height: 910,
      flavor: "\u7F8A\u8089\u8F6F\u5AE9\uFF0C\u679C\u5E72\u67D4\u8F6F\u504F\u751C\uFF0C\u9171\u6C41\u5E26\u8089\u6842\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-099",
      name: "\u9999\u6599\u70E4\u8304\u5B50",
      region: "REG-10",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/5cd548971976be31aff1d22e49fa4a39e5085fdc/handbook/images/foods/REG-10/food-099.png",
      width: 1729,
      height: 910,
      flavor: "\u8304\u8089\u8F6F\u6ED1\uFF0C\u8868\u5C42\u5FAE\u7126\uFF0C\u5E26\u5B5C\u7136\u6C14\u5473\uFF0C\u9178\u4E73\u7565\u9178\u3002"
    },
    {
      id: "FOOD-100",
      name: "\u829D\u9EBB\u67A3\u9985\u9165\u997C",
      region: "REG-10",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/5cd548971976be31aff1d22e49fa4a39e5085fdc/handbook/images/foods/REG-10/food-100.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u76AE\u9165\u8106\uFF0C\u67A3\u9985\u7EF5\u5BC6\u504F\u751C\uFF0C\u5E26\u829D\u9EBB\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-101",
      name: "\u8428\u7EF4\u5170\u9999\u6599\u996D",
      region: "REG-11",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ef5a53465ba752047649a6522e0a26fc251bdac0/handbook/images/foods/REG-11/food-101.png",
      width: 1729,
      height: 910,
      flavor: "\u7C73\u996D\u5438\u6536\u8089\u6C41\uFF0C\u7F8A\u8089\u8F6F\u5AE9\uFF0C\u8461\u8404\u5E72\u504F\u751C\uFF0C\u5E26\u5B5C\u7136\u548C\u756A\u7EA2\u82B1\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-102",
      name: "\u6708\u4E0B\u8C46\u6CE5\u997C",
      region: "REG-11",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ef5a53465ba752047649a6522e0a26fc251bdac0/handbook/images/foods/REG-11/food-102.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u76AE\u67D4\u97E7\uFF0C\u8C46\u6CE5\u7EC6\u8F6F\uFF0C\u9178\u83DC\u5E26\u9178\u5473\uFF0C\u8584\u8377\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-103",
      name: "\u6C99\u6D77\u70E4\u8089\u4E32",
      region: "REG-11",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ef5a53465ba752047649a6522e0a26fc251bdac0/handbook/images/foods/REG-11/food-103.png",
      width: 1729,
      height: 910,
      flavor: "\u7F8A\u8089\u8868\u5C42\u7126\u9999\uFF0C\u751C\u6912\u548C\u6D0B\u8471\u7565\u751C\uFF0C\u5B5C\u7136\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-104",
      name: "\u73AB\u7470\u67A3\u871C\u7CD5",
      region: "REG-11",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ef5a53465ba752047649a6522e0a26fc251bdac0/handbook/images/foods/REG-11/food-104.png",
      width: 1729,
      height: 910,
      flavor: "\u7CD5\u4F53\u7EC6\u5BC6\u6E7F\u8F6F\uFF0C\u67A3\u6CE5\u548C\u8702\u871C\u504F\u751C\uFF0C\u674F\u4EC1\u6709\u9897\u7C92\u611F\uFF0C\u5E26\u73AB\u7470\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-105",
      name: "\u5546\u961F\u575A\u679C\u8106",
      region: "REG-11",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ef5a53465ba752047649a6522e0a26fc251bdac0/handbook/images/foods/REG-11/food-105.png",
      width: 1729,
      height: 910,
      flavor: "\u6210\u54C1\u786C\u8106\uFF0C\u575A\u679C\u6709\u9897\u7C92\u611F\uFF0C\u8702\u871C\u5473\u751C\u3002"
    },
    {
      id: "FOOD-106",
      name: "\u756A\u7EA2\u82B1\u7096\u9E21",
      region: "REG-11",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ef5a53465ba752047649a6522e0a26fc251bdac0/handbook/images/foods/REG-11/food-106.png",
      width: 1731,
      height: 909,
      flavor: "\u9E21\u8089\u8F6F\u5AE9\uFF0C\u9E70\u5634\u8C46\u7EF5\u8F6F\uFF0C\u6C64\u6C41\u5E26\u6D0B\u8471\u751C\u5473\u548C\u756A\u7EA2\u82B1\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-107",
      name: "\u7F8A\u8089\u8304\u5B50\u7117\u76D8",
      region: "REG-11",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ef5a53465ba752047649a6522e0a26fc251bdac0/handbook/images/foods/REG-11/food-107.png",
      width: 1730,
      height: 909,
      flavor: "\u8304\u5B50\u8F6F\u6ED1\uFF0C\u8089\u672B\u6709\u9897\u7C92\u611F\uFF0C\u756A\u8304\u548C\u9178\u4E73\u5E26\u9178\u5473\u3002"
    },
    {
      id: "FOOD-108",
      name: "\u9999\u996D\u5357\u74DC\u76C5",
      region: "REG-11",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ef5a53465ba752047649a6522e0a26fc251bdac0/handbook/images/foods/REG-11/food-108.png",
      width: 1729,
      height: 910,
      flavor: "\u5357\u74DC\u8F6F\u7EF5\uFF0C\u7C73\u996D\u67D4\u8F6F\uFF0C\u9E70\u5634\u8C46\u7C89\u7CEF\uFF0C\u8461\u8404\u5E72\u5E26\u751C\u5473\u3002"
    },
    {
      id: "FOOD-109",
      name: "\u674F\u4EC1\u4E73\u7CD5",
      region: "REG-11",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ef5a53465ba752047649a6522e0a26fc251bdac0/handbook/images/foods/REG-11/food-109.png",
      width: 1729,
      height: 910,
      flavor: "\u7CD5\u4F53\u7EC6\u8F6F\uFF0C\u674F\u4EC1\u788E\u5E26\u7EC6\u7C92\u611F\uFF0C\u53E3\u5473\u751C\u5E76\u5E26\u5976\u9999\u3002"
    },
    {
      id: "FOOD-110",
      name: "\u65E0\u82B1\u679C\u70E4\u916A",
      region: "REG-11",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/ef5a53465ba752047649a6522e0a26fc251bdac0/handbook/images/foods/REG-11/food-110.png",
      width: 1729,
      height: 910,
      flavor: "\u679C\u8089\u8F6F\u5AE9\u5E26\u7C7D\u7C92\u611F\uFF0C\u5976\u916A\u67D4\u8F6F\uFF0C\u8702\u871C\u504F\u751C\uFF0C\u674F\u4EC1\u5E26\u8106\u611F\u3002"
    },
    {
      id: "FOOD-111",
      name: "\u8D6B\u5C14\u65AF\u5854\u5FB7\u70DF\u9C7C\u6C64",
      region: "REG-12",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/c2f42fd6a3469522fc8cfb7d495e22d5439a81c4/handbook/images/foods/REG-12/food-111.png",
      width: 1729,
      height: 910,
      flavor: "\u9C7C\u8089\u504F\u54B8\uFF0C\u9EA6\u7C92\u6709\u56BC\u52B2\uFF0C\u6C64\u6C41\u7A20\u539A\u5E76\u5E26\u70DF\u718F\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-112",
      name: "\u51AC\u5385\u70ED\u9505",
      region: "REG-12",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/c2f42fd6a3469522fc8cfb7d495e22d5439a81c4/handbook/images/foods/REG-12/food-112.png",
      width: 1730,
      height: 909,
      flavor: "\u571F\u8C46\u548C\u767D\u8C46\u7EF5\u8F6F\uFF0C\u5927\u9EA6\u6709\u56BC\u52B2\uFF0C\u829C\u83C1\u7565\u751C\u3002"
    },
    {
      id: "FOOD-113",
      name: "\u96EA\u4E61\u5976\u916A\u85AF\u997C",
      region: "REG-12",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/c2f42fd6a3469522fc8cfb7d495e22d5439a81c4/handbook/images/foods/REG-12/food-113.png",
      width: 1729,
      height: 910,
      flavor: "\u8868\u5C42\u5FAE\u8106\uFF0C\u5185\u90E8\u7EF5\u8F6F\uFF0C\u5976\u916A\u504F\u54B8\uFF0C\u8D8A\u6A58\u9171\u9178\u751C\u3002"
    },
    {
      id: "FOOD-114",
      name: "\u878D\u96EA\u8393\u679C\u9165",
      region: "REG-12",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/c2f42fd6a3469522fc8cfb7d495e22d5439a81c4/handbook/images/foods/REG-12/food-114.png",
      width: 1729,
      height: 910,
      flavor: "\u9165\u76AE\u677E\u8106\uFF0C\u971C\u8393\u9985\u6E7F\u8F6F\u9178\u751C\u3002"
    },
    {
      id: "FOOD-115",
      name: "\u5317\u5883\u70DF\u9C7C\u7247",
      region: "REG-12",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/c2f42fd6a3469522fc8cfb7d495e22d5439a81c4/handbook/images/foods/REG-12/food-115.png",
      width: 1729,
      height: 910,
      flavor: "\u9C7C\u7247\u7D27\u5B9E\uFF0C\u5473\u54B8\uFF0C\u5E26\u70DF\u718F\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-116",
      name: "\u8D8A\u6A58\u9E7F\u8089\u4E38",
      region: "REG-12",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/c2f42fd6a3469522fc8cfb7d495e22d5439a81c4/handbook/images/foods/REG-12/food-116.png",
      width: 1731,
      height: 909,
      flavor: "\u8089\u4E38\u7D27\u5B9E\uFF0C\u6D0B\u8471\u7565\u751C\uFF0C\u8D8A\u6A58\u5E26\u9178\u5473\u3002"
    },
    {
      id: "FOOD-117",
      name: "\u9ED1\u9EA6\u70DF\u9C7C\u5377",
      region: "REG-12",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/c2f42fd6a3469522fc8cfb7d495e22d5439a81c4/handbook/images/foods/REG-12/food-117.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u76AE\u67D4\u97E7\uFF0C\u70DF\u9C7C\u504F\u54B8\uFF0C\u9178\u4E73\u7565\u9178\uFF0C\u5E26\u83B3\u841D\u548C\u70DF\u718F\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-118",
      name: "\u9E7F\u8089\u8611\u83C7\u6D3E",
      region: "REG-12",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/c2f42fd6a3469522fc8cfb7d495e22d5439a81c4/handbook/images/foods/REG-12/food-118.png",
      width: 1729,
      height: 910,
      flavor: "\u6D3E\u76AE\u9165\u8106\uFF0C\u8089\u9985\u6E7F\u6DA6\uFF0C\u83CC\u83C7\u5E26\u9C9C\u5473\u3002"
    },
    {
      id: "FOOD-119",
      name: "\u9EC4\u6CB9\u71D5\u9EA6\u997C",
      region: "REG-12",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/c2f42fd6a3469522fc8cfb7d495e22d5439a81c4/handbook/images/foods/REG-12/food-119.png",
      width: 1728,
      height: 910,
      flavor: "\u997C\u4F53\u677E\u8106\uFF0C\u71D5\u9EA6\u6709\u9897\u7C92\u611F\uFF0C\u8702\u871C\u5E26\u751C\u5473\uFF0C\u9EC4\u6CB9\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-120",
      name: "\u70E4\u9CDF\u9C7C\u86CB\u76D8",
      region: "REG-12",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/c2f42fd6a3469522fc8cfb7d495e22d5439a81c4/handbook/images/foods/REG-12/food-120.png",
      width: 1729,
      height: 910,
      flavor: "\u9C7C\u8089\u677E\u8F6F\uFF0C\u86CB\u767D\u67D4\u5AE9\uFF0C\u97ED\u8471\u7565\u751C\uFF0C\u5E26\u5976\u6CB9\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-121",
      name: "\u6696\u8C37\u7EA2\u9171\u7096\u8C46",
      region: "REG-13",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/422d3b5ad68985040bb5e5d0bdac09809d3e1121/handbook/images/foods/REG-13/food-121.png",
      width: 1729,
      height: 910,
      flavor: "\u767D\u8C46\u7EF5\u8F6F\uFF0C\u756A\u8304\u9171\u9178\u751C\uFF0C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-122",
      name: "\u9676\u7089\u7F8A\u8089\u996D",
      region: "REG-13",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/422d3b5ad68985040bb5e5d0bdac09809d3e1121/handbook/images/foods/REG-13/food-122.png",
      width: 1729,
      height: 910,
      flavor: "\u7C73\u996D\u67D4\u8F6F\u5E76\u5438\u6536\u8089\u6C41\uFF0C\u7F8A\u8089\u8F6F\u5AE9\uFF0C\u80E1\u841D\u535C\u548C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-123",
      name: "\u7A91\u706B\u83CC\u83C7\u4E32",
      region: "REG-13",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/422d3b5ad68985040bb5e5d0bdac09809d3e1121/handbook/images/foods/REG-13/food-123.png",
      width: 1728,
      height: 910,
      flavor: "\u83CC\u83C7\u591A\u6C41\uFF0C\u751C\u6912\u548C\u6D0B\u8471\u67D4\u8F6F\u7565\u751C\uFF0C\u8868\u5C42\u5E26\u70E4\u9999\u3002"
    },
    {
      id: "FOOD-124",
      name: "\u6E29\u5BA4\u679C\u9171\u5377",
      region: "REG-13",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/422d3b5ad68985040bb5e5d0bdac09809d3e1121/handbook/images/foods/REG-13/food-124.png",
      width: 1729,
      height: 910,
      flavor: "\u9762\u5377\u677E\u8F6F\uFF0C\u8349\u8393\u9171\u9178\u751C\uFF0C\u5E26\u725B\u4E73\u548C\u9EC4\u6CB9\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-125",
      name: "\u56ED\u5703\u852C\u83DC\u8106",
      region: "REG-13",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/422d3b5ad68985040bb5e5d0bdac09809d3e1121/handbook/images/foods/REG-13/food-125.png",
      width: 1729,
      height: 910,
      flavor: "\u852C\u83DC\u7247\u5E72\u8106\uFF0C\u751C\u83DC\u548C\u5357\u74DC\u7684\u751C\u5473\u8F83\u96C6\u4E2D\u3002"
    },
    {
      id: "FOOD-126",
      name: "\u9676\u76C5\u7117\u86CB",
      region: "REG-13",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/422d3b5ad68985040bb5e5d0bdac09809d3e1121/handbook/images/foods/REG-13/food-126.png",
      width: 1729,
      height: 910,
      flavor: "\u86CB\u767D\u67D4\u5AE9\uFF0C\u97ED\u8471\u7565\u751C\uFF0C\u5976\u916A\u5E26\u54B8\u5473\uFF0C\u5976\u6CB9\u7A20\u6ED1\u3002"
    },
    {
      id: "FOOD-127",
      name: "\u5CA9\u76D0\u70E4\u9E21",
      region: "REG-13",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/422d3b5ad68985040bb5e5d0bdac09809d3e1121/handbook/images/foods/REG-13/food-127.png",
      width: 1730,
      height: 909,
      flavor: "\u9E21\u76AE\u5FAE\u8106\uFF0C\u8089\u5185\u5E26\u6C41\uFF0C\u5CA9\u76D0\u5E26\u54B8\u5473\uFF0C\u767E\u91CC\u9999\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-128",
      name: "\u70E4\u6912\u5976\u916A\u997C",
      region: "REG-13",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/422d3b5ad68985040bb5e5d0bdac09809d3e1121/handbook/images/foods/REG-13/food-128.png",
      width: 1728,
      height: 910,
      flavor: "\u997C\u76AE\u5FAE\u8106\uFF0C\u5976\u916A\u9985\u67D4\u8F6F\uFF0C\u70E4\u6912\u5E26\u751C\u5473\u548C\u70D8\u70E4\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-129",
      name: "\u756A\u8304\u917F\u83CC\u83C7",
      region: "REG-13",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/422d3b5ad68985040bb5e5d0bdac09809d3e1121/handbook/images/foods/REG-13/food-129.png",
      width: 1734,
      height: 907,
      flavor: "\u756A\u8304\u8F6F\u5AE9\u504F\u9178\uFF0C\u83CC\u83C7\u5E26\u9C9C\u5473\uFF0C\u5927\u9EA6\u6709\u56BC\u52B2\uFF0C\u6B27\u82B9\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-130",
      name: "\u8702\u871C\u5357\u74DC\u4E73\u7CD5",
      region: "REG-13",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/422d3b5ad68985040bb5e5d0bdac09809d3e1121/handbook/images/foods/REG-13/food-130.png",
      width: 1730,
      height: 909,
      flavor: "\u7CD5\u4F53\u7EC6\u8F6F\uFF0C\u5357\u74DC\u548C\u8702\u871C\u504F\u751C\uFF0C\u5E26\u86CB\u5976\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-131",
      name: "\u7EF4\u5C14\u745F\u7267\u573A\u54B8\u6D3E",
      region: "REG-14",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c10cf9f99550f09ad00186a7eb76c45361e0ece/handbook/images/foods/REG-14/food-131.png",
      width: 1729,
      height: 910,
      flavor: "\u6D3E\u76AE\u9165\u8106\uFF0C\u86CB\u5976\u9985\u67D4\u5AE9\uFF0C\u83E0\u83DC\u5E26\u83DC\u53F6\u6C14\u5473\uFF0C\u9C9C\u5976\u916A\u7565\u9178\u3002"
    },
    {
      id: "FOOD-132",
      name: "\u8D1D\u4F26\u7EB3\u6D77\u9C9C\u9505",
      region: "REG-14",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c10cf9f99550f09ad00186a7eb76c45361e0ece/handbook/images/foods/REG-14/food-132.png",
      width: 1730,
      height: 909,
      flavor: "\u9C7C\u8089\u677E\u8F6F\uFF0C\u867E\u548C\u8D1D\u8089\u6709\u5F39\u6027\uFF0C\u6C64\u5473\u9C9C\uFF0C\u80E1\u841D\u535C\u7565\u751C\u3002"
    },
    {
      id: "FOOD-133",
      name: "\u5976\u6CB9\u97ED\u8471\u5410\u53F8",
      region: "REG-14",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c10cf9f99550f09ad00186a7eb76c45361e0ece/handbook/images/foods/REG-14/food-133.png",
      width: 1729,
      height: 910,
      flavor: "\u9762\u5305\u8FB9\u5FAE\u8106\uFF0C\u5185\u91CC\u67D4\u8F6F\uFF0C\u97ED\u8471\u7565\u751C\uFF0C\u5976\u6CB9\u9999\u6C14\u660E\u663E\u3002"
    },
    {
      id: "FOOD-134",
      name: "\u767D\u5E06\u9EC4\u6CB9\u9165",
      region: "REG-14",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c10cf9f99550f09ad00186a7eb76c45361e0ece/handbook/images/foods/REG-14/food-134.png",
      width: 1728,
      height: 910,
      flavor: "\u9165\u76AE\u5206\u5C42\u677E\u8106\uFF0C\u5473\u751C\uFF0C\u9EC4\u6CB9\u9999\u6C14\u660E\u663E\u3002"
    },
    {
      id: "FOOD-135",
      name: "\u8349\u5761\u871C\u68A8\u812F",
      region: "REG-14",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c10cf9f99550f09ad00186a7eb76c45361e0ece/handbook/images/foods/REG-14/food-135.png",
      width: 1729,
      height: 910,
      flavor: "\u68A8\u6761\u6709\u56BC\u52B2\uFF0C\u871C\u5473\u751C\uFF0C\u5E26\u68A8\u7684\u679C\u9999\u3002"
    },
    {
      id: "FOOD-136",
      name: "\u767E\u91CC\u9999\u70E4\u7F8A\u817F",
      region: "REG-14",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c10cf9f99550f09ad00186a7eb76c45361e0ece/handbook/images/foods/REG-14/food-136.png",
      width: 1729,
      height: 910,
      flavor: "\u5916\u5C42\u7126\u9999\uFF0C\u8089\u5185\u8F6F\u5AE9\uFF0C\u5E26\u849C\u9999\u548C\u767E\u91CC\u9999\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-137",
      name: "\u82F9\u679C\u7117\u5976\u916A",
      region: "REG-14",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c10cf9f99550f09ad00186a7eb76c45361e0ece/handbook/images/foods/REG-14/food-137.png",
      width: 1729,
      height: 910,
      flavor: "\u82F9\u679C\u8F6F\u5AE9\u9178\u751C\uFF0C\u5976\u916A\u5E26\u54B8\u5473\u548C\u5976\u9999\u3002"
    },
    {
      id: "FOOD-138",
      name: "\u7267\u573A\u83E0\u83DC\u5377",
      region: "REG-14",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c10cf9f99550f09ad00186a7eb76c45361e0ece/handbook/images/foods/REG-14/food-138.png",
      width: 1731,
      height: 909,
      flavor: "\u5916\u76AE\u5FAE\u8106\uFF0C\u5976\u916A\u9985\u67D4\u8F6F\uFF0C\u83E0\u83DC\u5E26\u83DC\u53F6\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-139",
      name: "\u6D77\u8D1D\u70E4\u9762\u5305",
      region: "REG-14",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c10cf9f99550f09ad00186a7eb76c45361e0ece/handbook/images/foods/REG-14/food-139.png",
      width: 1729,
      height: 910,
      flavor: "\u9762\u5305\u5FAE\u8106\uFF0C\u8D1D\u8089\u6709\u56BC\u52B2\uFF0C\u5E26\u9EC4\u6CB9\u9999\u6C14\u548C\u6B27\u82B9\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-140",
      name: "\u8393\u9171\u5976\u6CB9\u5377",
      region: "REG-14",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/9c10cf9f99550f09ad00186a7eb76c45361e0ece/handbook/images/foods/REG-14/food-140.png",
      width: 1729,
      height: 910,
      flavor: "\u86CB\u7CD5\u677E\u8F6F\uFF0C\u5976\u6CB9\u7EC6\u6ED1\uFF0C\u8393\u9171\u9178\u751C\u3002"
    },
    {
      id: "FOOD-141",
      name: "\u6258\u4F26\u9C7C\u6D3E",
      region: "REG-15",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/2540766f907da641ca18c967f592f0a194db975b/handbook/images/foods/REG-15/food-141.png",
      width: 1729,
      height: 910,
      flavor: "\u85AF\u6CE5\u8868\u5C42\u5FAE\u8106\uFF0C\u5185\u91CC\u7EF5\u8F6F\uFF0C\u9C7C\u8089\u677E\u8F6F\uFF0C\u5976\u6CB9\u6C41\u7A20\u6ED1\u3002"
    },
    {
      id: "FOOD-142",
      name: "\u9999\u8349\u70E4\u9CAD\u9C7C",
      region: "REG-15",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/2540766f907da641ca18c967f592f0a194db975b/handbook/images/foods/REG-15/food-142.png",
      width: 1730,
      height: 909,
      flavor: "\u9C7C\u76AE\u5FAE\u8106\uFF0C\u9C7C\u8089\u6CB9\u8102\u8F83\u591A\uFF0C\u5E26\u849C\u9999\u548C\u767E\u91CC\u9999\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-143",
      name: "\u86E4\u870A\u5927\u9EA6\u6C64",
      region: "REG-15",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/2540766f907da641ca18c967f592f0a194db975b/handbook/images/foods/REG-15/food-143.png",
      width: 1729,
      height: 910,
      flavor: "\u8D1D\u8089\u6709\u56BC\u52B2\uFF0C\u5927\u9EA6\u67D4\u97E7\uFF0C\u6C64\u5473\u9C9C\uFF0C\u852C\u83DC\u7565\u751C\u3002"
    },
    {
      id: "FOOD-144",
      name: "\u87F9\u8089\u571F\u8C46\u997C",
      region: "REG-15",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/2540766f907da641ca18c967f592f0a194db975b/handbook/images/foods/REG-15/food-144.png",
      width: 1730,
      height: 909,
      flavor: "\u8868\u5C42\u5FAE\u8106\uFF0C\u5185\u90E8\u7EF5\u8F6F\uFF0C\u87F9\u8089\u7EC6\u5AE9\u5E26\u9C9C\u5473\u3002"
    },
    {
      id: "FOOD-145",
      name: "\u6D77\u85FB\u71D5\u9EA6\u997C",
      region: "REG-15",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/2540766f907da641ca18c967f592f0a194db975b/handbook/images/foods/REG-15/food-145.png",
      width: 1731,
      height: 909,
      flavor: "\u997C\u4F53\u5E72\u8106\uFF0C\u71D5\u9EA6\u6709\u9897\u7C92\u611F\uFF0C\u5E26\u6D77\u85FB\u9C9C\u5473\u548C\u9EC4\u6CB9\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-146",
      name: "\u6E29\u5FB7\u5C14\u6D0B\u8471\u9762\u5305",
      region: "REG-15",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/2540766f907da641ca18c967f592f0a194db975b/handbook/images/foods/REG-15/food-146.png",
      width: 1729,
      height: 910,
      flavor: "\u5916\u76AE\u5FAE\u8106\uFF0C\u5185\u90E8\u677E\u8F6F\uFF0C\u6D0B\u8471\u7565\u751C\uFF0C\u5E26\u9EC4\u6CB9\u9999\u6C14\u3002"
    },
    {
      id: "FOOD-147",
      name: "\u8D3B\u8D1D\u7096\u97ED\u8471",
      region: "REG-15",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/2540766f907da641ca18c967f592f0a194db975b/handbook/images/foods/REG-15/food-147.png",
      width: 1726,
      height: 911,
      flavor: "\u8D1D\u8089\u6709\u56BC\u52B2\uFF0C\u97ED\u8471\u67D4\u8F6F\u7565\u751C\uFF0C\u6C64\u6C41\u5E26\u5976\u9999\u3002"
    },
    {
      id: "FOOD-148",
      name: "\u70DF\u9C7C\u767D\u8C46\u7172",
      region: "REG-15",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/2540766f907da641ca18c967f592f0a194db975b/handbook/images/foods/REG-15/food-148.png",
      width: 1729,
      height: 910,
      flavor: "\u767D\u8C46\u7EF5\u8F6F\uFF0C\u70DF\u9C7C\u504F\u54B8\uFF0C\u6C64\u6C41\u7A20\u539A\u5E76\u5E26\u70DF\u718F\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-149",
      name: "\u82F9\u679C\u5976\u916A\u6D3E",
      region: "REG-15",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/2540766f907da641ca18c967f592f0a194db975b/handbook/images/foods/REG-15/food-149.png",
      width: 1731,
      height: 909,
      flavor: "\u6D3E\u76AE\u9165\u8106\uFF0C\u82F9\u679C\u8F6F\u5AE9\u9178\u751C\uFF0C\u5976\u916A\u9985\u67D4\u8F6F\u3002"
    },
    {
      id: "FOOD-150",
      name: "\u76D0\u82B1\u9EC4\u6CB9\u997C",
      region: "REG-15",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/2540766f907da641ca18c967f592f0a194db975b/handbook/images/foods/REG-15/food-150.png",
      width: 1729,
      height: 910,
      flavor: "\u997C\u4F53\u9165\u677E\uFF0C\u7CD6\u548C\u6D77\u76D0\u5F62\u6210\u751C\u54B8\u5473\uFF0C\u9EC4\u6CB9\u9999\u6C14\u660E\u663E\u3002"
    },
    {
      id: "FOOD-151",
      name: "\u571F\u8C46\u7096\u725B\u8089",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/51fc4d1f519cb91af63f9db3dd5634a53e21b1a2/handbook/images/foods/COMMON/food-151.png",
      width: 1730,
      height: 909,
      flavor: "\u725B\u8089\u8F6F\u5AE9\uFF0C\u571F\u8C46\u7EF5\u8F6F\uFF0C\u6C64\u6C41\u5E26\u80E1\u841D\u535C\u548C\u6D0B\u8471\u7684\u751C\u5473\u3002"
    },
    {
      id: "FOOD-152",
      name: "\u7EA2\u70E7\u8089",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/51fc4d1f519cb91af63f9db3dd5634a53e21b1a2/handbook/images/foods/COMMON/food-152.png",
      width: 1728,
      height: 910,
      flavor: "\u8089\u76AE\u8F6F\u7CEF\uFF0C\u80A5\u8089\u8F6F\u6ED1\uFF0C\u9171\u6C41\u751C\u54B8\uFF0C\u5E26\u59DC\u7684\u8F9B\u9999\u3002"
    },
    {
      id: "FOOD-153",
      name: "\u751C\u6912\u7092\u8089",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/51fc4d1f519cb91af63f9db3dd5634a53e21b1a2/handbook/images/foods/COMMON/food-153.png",
      width: 1729,
      height: 910,
      flavor: "\u8089\u7247\u5AE9\uFF0C\u751C\u6912\u8106\u5AE9\u7565\u751C\uFF0C\u849C\u9999\u660E\u663E\u3002"
    },
    {
      id: "FOOD-154",
      name: "\u6D0B\u8471\u7092\u725B\u8089",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/51fc4d1f519cb91af63f9db3dd5634a53e21b1a2/handbook/images/foods/COMMON/food-154.png",
      width: 1729,
      height: 910,
      flavor: "\u725B\u8089\u6709\u56BC\u52B2\uFF0C\u6D0B\u8471\u7565\u751C\uFF0C\u9ED1\u80E1\u6912\u5E26\u8F9B\u9999\u3002"
    },
    {
      id: "FOOD-155",
      name: "\u8611\u83C7\u7096\u9E21",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/51fc4d1f519cb91af63f9db3dd5634a53e21b1a2/handbook/images/foods/COMMON/food-155.png",
      width: 1729,
      height: 910,
      flavor: "\u9E21\u8089\u8F6F\u5AE9\uFF0C\u8611\u83C7\u5E26\u9C9C\u5473\uFF0C\u6C64\u4E2D\u6709\u6D0B\u8471\u751C\u5473\u548C\u59DC\u5473\u3002"
    },
    {
      id: "FOOD-156",
      name: "\u829C\u83C1\u7096\u7F8A\u8089",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/51fc4d1f519cb91af63f9db3dd5634a53e21b1a2/handbook/images/foods/COMMON/food-156.png",
      width: 1728,
      height: 910,
      flavor: "\u7F8A\u8089\u8F6F\u5AE9\uFF0C\u6839\u83DC\u67D4\u8F6F\u7565\u751C\uFF0C\u6C64\u4E2D\u7F8A\u8089\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-157",
      name: "\u7EA2\u70E7\u9C7C\u5757",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/51fc4d1f519cb91af63f9db3dd5634a53e21b1a2/handbook/images/foods/COMMON/food-157.png",
      width: 1729,
      height: 910,
      flavor: "\u9C7C\u8089\u677E\u8F6F\uFF0C\u8868\u5C42\u9171\u6C41\u54B8\u9C9C\uFF0C\u5E26\u59DC\u849C\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-158",
      name: "\u8471\u84B8\u9C7C",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/51fc4d1f519cb91af63f9db3dd5634a53e21b1a2/handbook/images/foods/COMMON/food-158.png",
      width: 1730,
      height: 909,
      flavor: "\u9C7C\u8089\u7EC6\u5AE9\uFF0C\u84B8\u6C41\u5473\u9C9C\uFF0C\u5E26\u8471\u59DC\u6C14\u5473\u3002"
    },
    {
      id: "FOOD-159",
      name: "\u756A\u8304\u7096\u9C7C",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/51fc4d1f519cb91af63f9db3dd5634a53e21b1a2/handbook/images/foods/COMMON/food-159.png",
      width: 1731,
      height: 909,
      flavor: "\u9C7C\u8089\u677E\u8F6F\uFF0C\u756A\u8304\u6C64\u6C41\u9178\u751C\uFF0C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-160",
      name: "\u849C\u7092\u867E\u4EC1",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/51fc4d1f519cb91af63f9db3dd5634a53e21b1a2/handbook/images/foods/COMMON/food-160.png",
      width: 1729,
      height: 910,
      flavor: "\u867E\u4EC1\u7D27\u5B9E\u6709\u5F39\u6027\uFF0C\u5473\u9C9C\uFF0C\u849C\u9999\u660E\u663E\u3002"
    },
    {
      id: "FOOD-161",
      name: "\u756A\u8304\u7092\u86CB",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1c762a27d54fff3a96e805d88570528eb9ca7736/handbook/images/foods/COMMON/food-161.png",
      width: 1730,
      height: 909,
      flavor: "\u86CB\u5757\u67D4\u8F6F\uFF0C\u756A\u8304\u591A\u6C41\uFF0C\u53E3\u5473\u9178\u751C\u3002"
    },
    {
      id: "FOOD-162",
      name: "\u97ED\u8471\u7092\u86CB",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1c762a27d54fff3a96e805d88570528eb9ca7736/handbook/images/foods/COMMON/food-162.png",
      width: 1729,
      height: 910,
      flavor: "\u86CB\u5757\u67D4\u8F6F\uFF0C\u97ED\u8471\u7565\u751C\uFF0C\u5E26\u86CB\u9999\u3002"
    },
    {
      id: "FOOD-163",
      name: "\u8089\u672B\u84B8\u86CB",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1c762a27d54fff3a96e805d88570528eb9ca7736/handbook/images/foods/COMMON/food-163.png",
      width: 1730,
      height: 909,
      flavor: "\u86CB\u7FB9\u7EC6\u6ED1\uFF0C\u8089\u672B\u6709\u9897\u7C92\u611F\uFF0C\u5E26\u8089\u9999\u548C\u8471\u9999\u3002"
    },
    {
      id: "FOOD-164",
      name: "\u8C4C\u8C46\u7092\u86CB",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1c762a27d54fff3a96e805d88570528eb9ca7736/handbook/images/foods/COMMON/food-164.png",
      width: 1727,
      height: 910,
      flavor: "\u86CB\u5757\u67D4\u8F6F\uFF0C\u8C4C\u8C46\u7C89\u7CEF\uFF0C\u80E1\u841D\u535C\u7565\u751C\u3002"
    },
    {
      id: "FOOD-165",
      name: "\u5BB6\u5E38\u714E\u8C46\u8150",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1c762a27d54fff3a96e805d88570528eb9ca7736/handbook/images/foods/COMMON/food-165.png",
      width: 1729,
      height: 910,
      flavor: "\u8C46\u8150\u8868\u5C42\u5FAE\u97E7\uFF0C\u5185\u90E8\u67D4\u8F6F\uFF0C\u9171\u6C41\u54B8\u9C9C\u3002"
    },
    {
      id: "FOOD-166",
      name: "\u8089\u672B\u70E7\u8C46\u8150",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1c762a27d54fff3a96e805d88570528eb9ca7736/handbook/images/foods/COMMON/food-166.png",
      width: 1729,
      height: 910,
      flavor: "\u8C46\u8150\u67D4\u8F6F\uFF0C\u8089\u672B\u6709\u9897\u7C92\u611F\uFF0C\u9171\u6C41\u54B8\u9C9C\u5E76\u5E26\u849C\u9999\u3002"
    },
    {
      id: "FOOD-167",
      name: "\u918B\u7092\u571F\u8C46\u4E1D",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1c762a27d54fff3a96e805d88570528eb9ca7736/handbook/images/foods/COMMON/food-167.png",
      width: 1728,
      height: 910,
      flavor: "\u571F\u8C46\u4E1D\u8106\u5AE9\uFF0C\u679C\u918B\u5E26\u9178\u5473\uFF0C\u849C\u9999\u660E\u663E\u3002"
    },
    {
      id: "FOOD-168",
      name: "\u849C\u7092\u83E0\u83DC",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1c762a27d54fff3a96e805d88570528eb9ca7736/handbook/images/foods/COMMON/food-168.png",
      width: 1729,
      height: 910,
      flavor: "\u83DC\u53F6\u67D4\u8F6F\uFF0C\u83DC\u6897\u7A0D\u8106\uFF0C\u5E26\u849C\u9999\u3002"
    },
    {
      id: "FOOD-169",
      name: "\u6E05\u7092\u5377\u5FC3\u83DC",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1c762a27d54fff3a96e805d88570528eb9ca7736/handbook/images/foods/COMMON/food-169.png",
      width: 1730,
      height: 909,
      flavor: "\u83DC\u53F6\u8106\u5AE9\uFF0C\u53E3\u5473\u7565\u751C\uFF0C\u5E26\u849C\u9999\u3002"
    },
    {
      id: "FOOD-170",
      name: "\u849C\u84C9\u84B8\u8304\u5B50",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1c762a27d54fff3a96e805d88570528eb9ca7736/handbook/images/foods/COMMON/food-170.png",
      width: 1729,
      height: 910,
      flavor: "\u8304\u8089\u8F6F\u6ED1\uFF0C\u9171\u6C41\u54B8\u9C9C\uFF0C\u8471\u849C\u6C14\u5473\u660E\u663E\u3002"
    },
    {
      id: "FOOD-171",
      name: "\u8611\u83C7\u7092\u751C\u6912",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/8462e38028d5802ffa57711bcca056cf2d4c84c1/handbook/images/foods/COMMON/food-171.png",
      width: 1729,
      height: 910,
      flavor: "\u8611\u83C7\u67D4\u97E7\u5E26\u9C9C\u5473\uFF0C\u751C\u6912\u8106\u5AE9\uFF0C\u6D0B\u8471\u7565\u751C\u3002"
    },
    {
      id: "FOOD-172",
      name: "\u5357\u74DC\u7116\u767D\u8C46",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/8462e38028d5802ffa57711bcca056cf2d4c84c1/handbook/images/foods/COMMON/food-172.png",
      width: 1729,
      height: 910,
      flavor: "\u5357\u74DC\u548C\u767D\u8C46\u8F6F\u7EF5\uFF0C\u5357\u74DC\u53CA\u6D0B\u8471\u5E26\u751C\u5473\u3002"
    },
    {
      id: "FOOD-173",
      name: "\u51C9\u62CC\u9EC4\u74DC",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/8462e38028d5802ffa57711bcca056cf2d4c84c1/handbook/images/foods/COMMON/food-173.png",
      width: 1729,
      height: 910,
      flavor: "\u9EC4\u74DC\u8106\u5AE9\u591A\u6C41\uFF0C\u679C\u918B\u5E26\u9178\u5473\uFF0C\u751F\u849C\u5E26\u8F9B\u5473\u3002"
    },
    {
      id: "FOOD-174",
      name: "\u80E1\u841D\u535C\u7092\u8C4C\u8C46",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/8462e38028d5802ffa57711bcca056cf2d4c84c1/handbook/images/foods/COMMON/food-174.png",
      width: 1728,
      height: 910,
      flavor: "\u80E1\u841D\u535C\u8106\u5AE9\uFF0C\u8C4C\u8C46\u7C89\u7CEF\uFF0C\u4E24\u8005\u5747\u5E26\u5C11\u91CF\u751C\u5473\u3002"
    },
    {
      id: "FOOD-175",
      name: "\u756A\u8304\u86CB\u6C64",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/8462e38028d5802ffa57711bcca056cf2d4c84c1/handbook/images/foods/COMMON/food-175.png",
      width: 1729,
      height: 910,
      flavor: "\u86CB\u82B1\u67D4\u8F6F\uFF0C\u756A\u8304\u6C64\u6C41\u504F\u9178\uFF0C\u5E26\u8471\u9999\u3002"
    },
    {
      id: "FOOD-176",
      name: "\u5377\u5FC3\u83DC\u8089\u4E38\u6C64",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/8462e38028d5802ffa57711bcca056cf2d4c84c1/handbook/images/foods/COMMON/food-176.png",
      width: 1729,
      height: 910,
      flavor: "\u8089\u4E38\u6709\u5F39\u6027\uFF0C\u5377\u5FC3\u83DC\u67D4\u8F6F\u7565\u751C\uFF0C\u6C64\u6C41\u5E26\u8089\u5473\u3002"
    },
    {
      id: "FOOD-177",
      name: "\u6D77\u85FB\u8C46\u8150\u6C64",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/8462e38028d5802ffa57711bcca056cf2d4c84c1/handbook/images/foods/COMMON/food-177.png",
      width: 1729,
      height: 910,
      flavor: "\u8C46\u8150\u67D4\u8F6F\uFF0C\u6D77\u85FB\u7565\u6709\u56BC\u52B2\uFF0C\u6C64\u5473\u9C9C\u3002"
    },
    {
      id: "FOOD-178",
      name: "\u767D\u8C46\u9AA8\u6C64",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/8462e38028d5802ffa57711bcca056cf2d4c84c1/handbook/images/foods/COMMON/food-178.png",
      width: 1730,
      height: 909,
      flavor: "\u767D\u8C46\u7C89\u7CEF\uFF0C\u80E1\u841D\u535C\u8F6F\u5AE9\u7565\u751C\uFF0C\u6C64\u4E2D\u5E26\u9AA8\u6C64\u7684\u6CB9\u8102\u3002"
    },
    {
      id: "FOOD-179",
      name: "\u8611\u83C7\u86CB\u6C64",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/8462e38028d5802ffa57711bcca056cf2d4c84c1/handbook/images/foods/COMMON/food-179.png",
      width: 1729,
      height: 910,
      flavor: "\u8611\u83C7\u67D4\u97E7\uFF0C\u86CB\u82B1\u67D4\u8F6F\uFF0C\u6C64\u6C41\u5E26\u83CC\u83C7\u9C9C\u5473\u3002"
    },
    {
      id: "FOOD-180",
      name: "\u97ED\u8471\u571F\u8C46\u6C64",
      region: "COMMON",
      src: "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/8462e38028d5802ffa57711bcca056cf2d4c84c1/handbook/images/foods/COMMON/food-180.png",
      width: 1728,
      height: 910,
      flavor: "\u571F\u8C46\u7EF5\u8F6F\uFF0C\u97ED\u8471\u548C\u6D0B\u8471\u67D4\u8F6F\u7565\u751C\uFF0C\u6C64\u6C41\u7A0D\u7A20\u3002"
    }
  ];

  // src/ui/food-materials.json
  var food_materials_default = [
    "\u5C0F\u9EA6\u7C89",
    "\u9ED1\u9EA6\u7C89",
    "\u835E\u9EA6\u7C89",
    "\u9EA6\u7C92",
    "\u7C97\u9EA6\u7C92",
    "\u5927\u9EA6",
    "\u71D5\u9EA6",
    "\u9EA6\u82BD",
    "\u767D\u7C73",
    "\u7C73\u7C89",
    "\u767D\u8C46",
    "\u6241\u8C46",
    "\u9E70\u5634\u8C46",
    "\u8C4C\u8C46",
    "\u9EC4\u8C46",
    "\u8C46\u7C89",
    "\u725B\u8089",
    "\u7F8A\u8089",
    "\u7F8A\u6392",
    "\u7F8A\u817F",
    "\u732A\u8089",
    "\u732A\u4E94\u82B1\u8089",
    "\u732A\u8098",
    "\u732A\u9AA8",
    "\u9E21\u8089",
    "\u5154\u8089",
    "\u9E7F\u8089",
    "\u9E21\u86CB",
    "\u725B\u4E73",
    "\u7F8A\u4E73",
    "\u5976\u6CB9",
    "\u9EC4\u6CB9",
    "\u9C9C\u5976\u916A",
    "\u786C\u5976\u916A",
    "\u9648\u5E74\u5976\u916A",
    "\u9178\u4E73",
    "\u571F\u8C46",
    "\u91D1\u76AE\u85AF",
    "\u80E1\u841D\u535C",
    "\u829C\u83C1",
    "\u751C\u83DC",
    "\u6D0B\u8471",
    "\u97ED\u8471",
    "\u5927\u849C",
    "\u8471",
    "\u59DC",
    "\u5377\u5FC3\u83DC",
    "\u9EC4\u74DC",
    "\u83E0\u83DC",
    "\u5357\u74DC",
    "\u756A\u8304",
    "\u751C\u6912",
    "\u8304\u5B50",
    "\u8461\u8404\u53F6",
    "\u767D\u8611\u83C7",
    "\u8910\u76D6\u83C7",
    "\u6D1E\u4F1E\u83C7",
    "\u725B\u809D\u83CC",
    "\u94F6\u9CDE\u6CB3\u9C7C",
    "\u9CDF\u9C7C",
    "\u6E56\u767D\u9C7C",
    "\u767D\u9CCD\u6D77\u9C7C",
    "\u6D77\u94F6\u9C7C",
    "\u6E56\u94F6\u9C7C",
    "\u6D77\u867E",
    "\u6E56\u867E",
    "\u87AF\u867E",
    "\u6D77\u87F9",
    "\u8D3B\u8D1D",
    "\u86E4\u870A",
    "\u6247\u8D1D",
    "\u6E56\u9CD7",
    "\u9CAD\u9C7C",
    "\u6D77\u85FB",
    "\u9C7C\u8089",
    "\u6574\u9C7C",
    "\u867E\u4EC1",
    "\u82F9\u679C",
    "\u68A8",
    "\u8461\u8404",
    "\u6885\u5B50",
    "\u6797\u8393",
    "\u5C71\u8393",
    "\u971C\u8393",
    "\u8D8A\u6A58",
    "\u8349\u8393",
    "\u67A3",
    "\u65E0\u82B1\u679C",
    "\u67E0\u6AAC",
    "\u67D1\u6A58",
    "\u67D1\u6A58\u76AE",
    "\u80E1\u6843",
    "\u699B\u5B50",
    "\u674F\u4EC1",
    "\u6817\u5B50",
    "\u5CA9\u58F3\u6817",
    "\u677E\u7C7D",
    "\u829D\u9EBB",
    "\u6C34\u6817",
    "\u767E\u91CC\u9999",
    "\u8FF7\u8FED\u9999",
    "\u83B3\u841D",
    "\u6B27\u82B9",
    "\u8584\u8377",
    "\u91CE\u849C",
    "\u82A5\u7C7D",
    "\u9ED1\u80E1\u6912",
    "\u5B5C\u7136",
    "\u8089\u6842",
    "\u756A\u7EA2\u82B1",
    "\u98DF\u7528\u73AB\u7470",
    "\u6D77\u76D0",
    "\u5CA9\u76D0",
    "\u98DF\u7CD6",
    "\u9ED1\u7CD6\u6D46",
    "\u8702\u871C",
    "\u690D\u7269\u6CB9",
    "\u679C\u918B",
    "\u9171\u6CB9",
    "\u8C46\u8150",
    "\u9999\u80A0",
    "\u706B\u817F",
    "\u98CE\u5E72\u8089",
    "\u70DF\u718F\u9C7C\u8089",
    "\u9178\u83DC",
    "\u8461\u8404\u5E72",
    "\u67A3\u6CE5",
    "\u6885\u9171",
    "\u8393\u679C\u9171",
    "\u6797\u8393\u9171",
    "\u8D8A\u6A58\u9171",
    "\u8349\u8393\u9171",
    "\u957F\u9762\u5305",
    "\u9762\u5305\u7247",
    "\u9762\u5305\u4E01",
    "\u9762\u5305\u5C51",
    "\u5C0F\u9EA6\u9762\u6761",
    "\u70E4\u9EA6\u788E"
  ];

  // src/ui/food-art.mjs
  var byId3 = new Map(food_art_default.map((food) => [food.id, food]));
  var byName2 = new Map(food_art_default.map((food) => [food.name, food]));
  var materialNames = new Set(food_materials_default);
  var isFoodMaterial = (name) => materialNames.has(name?.trim());
  function resolveFoodArt(name, id) {
    return byName2.get(name?.trim()) ?? byId3.get(id) ?? null;
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
    const food = resolveFoodArt(name, id);
    if (food) return { key: food.id, src: food.src };
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
  function skillImageURL(value) {
    const image = itemImageURL(value);
    if (!image) return null;
    if (image.startsWith("https://")) {
      const url = new URL(image), parts = url.pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/(.+)$/);
      if (url.hostname === "github.com" && parts) return "https://raw.githubusercontent.com/" + parts[1] + "/" + parts[2] + "/" + parts[3];
    }
    return image;
  }

  // src/ui/place-art.mjs
  var PLACE_ART = place_art_default;

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
      const paths3 = pathHoles.map(([d, size]) => `<path d="${d}" transform="translate(${-x} ${-y})" fill="none" stroke="black" stroke-width="${size}" stroke-linecap="round" stroke-linejoin="round"/>`).join("");
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><mask id="m"><rect width="${w}" height="${h}" fill="white"/>${rectangles}${paths3}</mask><rect width="${w}" height="${h}" fill="white" mask="url(#m)"/></svg>`;
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
      },
      "REG-15": {
        "name": "\u6258\u4F26\u5CAC\u6D77\u5CB8"
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
        "name": "\u4E4C\u5C14\u8FBE\u514B\u6EAA\u6E21\u573A",
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
      "LOC-HOR-009": {
        "name": "\u683C\u5C14\u6C40\u6E14\u6751",
        "region": "REG-05"
      },
      "LOC-HOR-010": {
        "name": "\u767D\u783E\u6E7E",
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
      "LOC-VIS-010": {
        "name": "\u8D5B\u6D1B\u6069\u6E14\u6751",
        "region": "REG-08"
      },
      "LOC-VIS-011": {
        "name": "\u6749\u5F71\u6D77\u6EE9",
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
        "name": "\u74E6\u96F7\u8428\u9057\u5740",
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
      "LOC-LOS-013": {
        "name": "\u5357\u6C50\u6CB3\u53E3\u57E0",
        "region": "REG-09"
      },
      "LOC-LOS-014": {
        "name": "\u9E25\u6E7E\u6D77\u6EE9",
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
      },
      "LOC-TOR-001": {
        "name": "\u6258\u4F26\u6E14\u57E0",
        "region": "REG-15"
      },
      "LOC-TOR-002": {
        "name": "\u6258\u4F26\u5CAC\u89D2",
        "region": "REG-15"
      },
      "LOC-TOR-003": {
        "name": "\u57C3\u6587\u7901\u6EE9",
        "region": "REG-15"
      },
      "LOC-TOR-004": {
        "name": "\u6E29\u5FB7\u5C14\u6751",
        "region": "REG-15"
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
        "description": "\u79D1\u5C14\u74E6\u6069\u5317\u4FA7\u5730\u9762\u5C71\u8DEF\u7ECF\u5CE1\u5317\u56FA\u5B9A\u77F3\u6865\u3001\u8FDC\u4FA7\u5C71\u810A\u4E0E\u514B\u96F7\u65AF\u5C71\u9053\u8FDB\u5165\u51BB\u539F\uFF0C\u4EA4\u901A\u65B9\u5F0F\u968F\u5B63\u8282\u8C03\u6574"
      },
      "ROAD-07": {
        "from": "REG-12",
        "to": "REG-13",
        "description": "\u7531\u51BB\u539F\u8F6C\u5165\u4E1C\u5357\u5C71\u8C37\uFF0C\u5730\u70ED\u6696\u533A\u5206\u6563\u51FA\u73B0"
      },
      "ROAD-08": {
        "from": "REG-13",
        "to": "REG-14",
        "description": "\u5C71\u5730\u5357\u4E0B\uFF0C\u7ECF\u6CB3\u8C37\u4E0E\u8349\u5761\u53F0\u5730\u62B5\u4E1C\u90E8\u6CBF\u5D16\u9053\u8DEF"
      },
      "ROAD-09": {
        "from": "REG-03",
        "to": "REG-07",
        "description": "\u5546\u8DEF\u3001\u5C71\u53E3\u4E0E\u77FF\u4E1A\u57CE\u9547"
      },
      "ROAD-10": {
        "from": "REG-07",
        "to": "REG-06",
        "description": "\u5C71\u5730\u7EB5\u5411\u9053\u8DEF"
      },
      "ROAD-11": {
        "from": "REG-07",
        "to": "REG-10",
        "description": "\u8D8A\u8FC7\u5C71\u53E3\uFF0C\u9010\u6E10\u8FDB\u5165\u80CC\u98CE\u5E72\u5730"
      },
      "ROAD-12": {
        "from": "REG-10",
        "to": "REG-13",
        "description": "\u53E4\u9053\u4E95\u7AD9\u8F6C\u5165\u585E\u62C9\u6587\u6CB3\u8C37\uFF0C\u6CBF\u6CB3\u9636\u9053\u8DEF\u63A5\u74E6\u8428\u6069\u5357\u90E8\u8C37\u53E3"
      },
      "ROAD-13": {
        "from": "REG-04",
        "to": "REG-08",
        "description": "\u6D77\u6E7E\u4E1C\u4FA7\u6CBF\u5CB8\u9053\u8DEF\u8FDB\u5165\u68EE\u6797\u897F\u90E8\uFF0C\u8DE8\u6EAA\u6865\u548C\u5404\u6BB5\u5CB8\u8DEF\u8FDE\u63A5\u6797\u7F18\u805A\u843D"
      },
      "ROAD-14": {
        "from": "REG-08",
        "to": "REG-09",
        "description": "\u7ED5\u8FC7\u5C71\u8109\u5357\u7AEF\uFF0C\u6CBF\u6C34\u7F51\u8FDB\u5165\u6E56\u7FA4"
      },
      "ROAD-15": {
        "from": "REG-07",
        "to": "REG-09",
        "description": "\u5C71\u8C37\u9053\u8DEF\u4E0B\u884C\uFF0C\u53EF\u822A\u6CB3\u6BB5\u8BBE\u7F6E\u821F\u8239\u63A5\u9A73"
      },
      "ROAD-16": {
        "from": "REG-09",
        "to": "REG-11",
        "description": "\u6E56\u4E1C\u5317\u5165\u6E56\u5CA9\u574E\u65C1\u9646\u8DEF\u63A5\u6CB3\u8C37\u7530\u5703\uFF0C\u518D\u7ECF\u5E72\u8349\u5730\u3001\u7EFF\u6D32\u9053\u8DEF\u5165\u7D22\u62C9\u6069"
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
        "description": "\u6CBF\u5357\u90E8\u6D77\u5CB8\u822A\u884C\uFF0C\u518D\u7ECF\u5357\u6C50\u6CB3\u5165\u6E56"
      },
      "ROAD-20": {
        "from": "REG-01",
        "to": "REG-15",
        "description": "\u8FBE\u4F26\u798F\u5FB7\u7ECF\u4F4E\u4E18\u548C\u6E29\u5FB7\u5C14\u6751\u5411\u897F\u62B5\u6258\u4F26\u6E14\u57E0\uFF1B\u6B65\u884C\u3001\u9A91\u4E58\u6216\u9002\u7528\u8F7B\u8F66"
      },
      "ROAD-21": {
        "from": "REG-15",
        "to": "REG-04",
        "description": "\u6258\u4F26\u6E14\u57E0\u6CBF\u897F\u5CB8\u5411\u5357\u81F3\u8D1D\u8428\u5C14\u6E2F\uFF1B\u6CBF\u5CB8\u5BA2\u8D27\u8239\uFF0C\u6309\u5B9E\u9645\u8239\u671F\u3001\u6D77\u51B5\u53CA\u627F\u8FD0\u6761\u4EF6\u5B89\u6392"
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
      "REG-15": "\u6258\u4F26\u5CAC\u6D77\u5CB8",
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
      "LOC-HOR-006": "\u4E4C\u5C14\u8FBE\u514B\u6EAA\u6E21\u573A",
      "LOC-HOR-007": "\u7EB3\u7EF4\u5C14\u5824\u7267\u533A",
      "LOC-HOR-008": "\u8428\u96F7\u514B\u65C5\u820D",
      "LOC-HOR-009": "\u683C\u5C14\u6C40\u6E14\u6751",
      "LOC-HOR-010": "\u767D\u783E\u6E7E",
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
      "LOC-VIS-010": "\u8D5B\u6D1B\u6069\u6E14\u6751",
      "LOC-VIS-011": "\u6749\u5F71\u6D77\u6EE9",
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
      "LOC-LOS-006": "\u74E6\u96F7\u8428\u9057\u5740",
      "LOC-LOS-007": "\u5361\u585E\u62C9\u9547",
      "LOC-LOS-008": "\u585E\u62C9\u6587\u7011\u5E03",
      "LOC-LOS-009": "\u827E\u6587\u8FBE\u8239\u5C4B\u6CCA\u533A",
      "LOC-LOS-010": "\u83AB\u5170\u6E56\u5CB8\u5BA2\u6808",
      "LOC-LOS-011": "\u4F0A\u745F\u6587\u7814\u4E60\u9662",
      "LOC-LOS-012": "\u4F0A\u745F\u6587\u6C34\u5EAD\u7EC3\u4E60\u573A",
      "LOC-LOS-013": "\u5357\u6C50\u6CB3\u53E3\u57E0",
      "LOC-LOS-014": "\u9E25\u6E7E\u6D77\u6EE9",
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
      "LOC-TOR-001": "\u6258\u4F26\u6E14\u57E0",
      "LOC-TOR-002": "\u6258\u4F26\u5CAC\u89D2",
      "LOC-TOR-003": "\u57C3\u6587\u7901\u6EE9",
      "LOC-TOR-004": "\u6E29\u5FB7\u5C14\u6751",
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
      "ROAD-19": "\u5361\u5FB7\u6E29\u6D77\u6E7E\u81F3\u6D1B\u65AF\u6587\u6E56\u533A\u822A\u7EBF",
      "ROAD-20": "\u7EF4\u5C14\u767B\u6CB3\u8C37\u81F3\u6258\u4F26\u5CAC\u6D77\u5CB8\u9053\u8DEF",
      "ROAD-21": "\u6258\u4F26\u5CAC\u6D77\u5CB8\u81F3\u5361\u5FB7\u6E29\u6D77\u6E7E\u822A\u7EBF",
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

  // src/ui-geometric/journey-place-name.mjs
  var townLocations = {
    "LOC-VIR-001": ["002", "003", "004", "009"],
    "LOC-SER-001": ["002", "006"],
    "LOC-ALV-001": ["002", "003", "004", "005", "006"],
    "LOC-CAD-001": ["002", "003"],
    "LOC-HOR-001": ["002", "003", "004", "008"],
    "LOC-BRE-001": ["002", "003", "008"],
    "LOC-DUR-001": ["002", "005", "009"],
    "LOC-VIS-001": ["002", "003", "008"],
    "LOC-LOS-001": ["002", "003", "009", "010", "011", "012"],
    "LOC-ESK-001": ["002", "003", "004"],
    "LOC-SOL-001": ["002", "003", "004", "010"],
    "LOC-NOR-001": ["002", "003", "004", "010"],
    "LOC-VAS-001": ["002", "003", "004"],
    "LOC-EST-001": ["002", "003", "004", "015"],
    "LOC-EST-005": ["006", "007", "014"]
  };
  var townByLocation = Object.fromEntries(Object.entries(townLocations).flatMap(([town, suffixes]) => suffixes.map((suffix) => [town.slice(0, -3) + suffix, town])));
  function journeyPlaceName(id, state) {
    const local = state.\u73A9\u6CD5.\u5C0F\u5730\u70B9;
    while (Object.hasOwn(local, id)) id = local[id].\u6240\u5C5E\u5730\u70B9;
    const town = townByLocation[id] ?? id;
    return town === "LOC-ALV-001" ? "\u963F\u5C14\u7EF4\u514B" : placeName(town, state);
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
    return [v?.\u59D4\u6258\u65B9 && "\u59D4\u6258\u4EBA\uFF1A" + entityName(s, v.\u59D4\u6258\u65B9), v?.\u5730\u70B9 && "\u5730\u70B9\uFF1A" + placeName(v.\u5730\u70B9, s), v?.\u5185\u5BB9, v?.\u62A5\u916C\u7EA6\u5B9A && "\u62A5\u916C\uFF1A" + v.\u62A5\u916C\u7EA6\u5B9A].filter(Boolean);
  }
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
  function archiveText(v, coins) {
    return v.\u7B14\u6570 + " \u7B14 \xB7 \u6D88\u8D39 " + coins(v.\u652F\u51FA) + (v.\u652F\u51FA\u9000\u6B3E ? " \xB7 \u6D88\u8D39\u9000\u6B3E " + coins(v.\u652F\u51FA\u9000\u6B3E) : "") + (v.\u6536\u5165 != null ? " \xB7 \u6536\u5165 " + coins(v.\u6536\u5165) : "") + (v.\u5176\u4ED6\u6D41\u5165 ? " \xB7 \u5176\u4ED6\u6D41\u5165 " + coins(v.\u5176\u4ED6\u6D41\u5165) : "") + (v.\u5176\u4ED6\u6D41\u51FA ? " \xB7 \u5176\u4ED6\u6D41\u51FA " + coins(v.\u5176\u4ED6\u6D41\u51FA) : "");
  }

  // src/state/magic-state.mjs
  function manaDescription(value) {
    if (typeof value === "string" || value === null) return value;
    if (value.\u5F53\u524D === null) return null;
    if (value.\u5F53\u524D === 0) return "\u9B54\u529B\u8017\u5C3D";
    return value.\u4E0A\u9650 !== null && value.\u5F53\u524D < value.\u4E0A\u9650 ? "\u6709\u6240\u6D88\u8017" : "\u9B54\u529B\u5145\u8DB3";
  }

  // src/ui-geometric/desktop-frame.mjs
  function extendDesktopDrawing(body, { selectors: selectors2, width, height, cut, extra }) {
    body.style.height = height + extra + "px";
    for (const selector3 of selectors2) {
      const original = body.querySelector(selector3), zIndex = getComputedStyle(original).zIndex;
      const layers = [original, original.cloneNode(true), original.cloneNode(true)];
      const slices = layers.map((layer, index) => {
        const slice = document.createElement("span");
        slice.className = "desktop-frame-slice";
        slice.setAttribute("aria-hidden", "true");
        Object.assign(slice.style, { position: "absolute", left: "0", width: width + "px", overflow: "hidden", pointerEvents: "none", zIndex, top: [0, cut, cut + extra][index] + "px", height: [cut, extra, height - cut][index] + "px" });
        Object.assign(layer.style, { width: width + "px", height: height + "px", top: [0, -cut * extra, -cut][index] + "px", bottom: "auto" });
        if (index === 1) {
          layer.style.transform = "scaleY(" + extra + ")";
          layer.style.transformOrigin = "0 0";
        }
        return slice;
      });
      original.replaceWith(...slices);
      slices.forEach((slice, index) => slice.append(layers[index]));
    }
  }

  // src/ui-geometric/journey.mjs
  var actors = ["xingxing", "xiaogai"];
  var names2 = { xingxing: "\u9192\u9192", xiaogai: "\u5C0F\u76D6" };
  var node2 = (tag, cls = "", text = "") => {
    const n = document.createElement(tag);
    n.className = cls;
    n.textContent = text;
    return n;
  };
  var control = (label, run, cls) => {
    const b = node2("button", cls, label);
    b.type = "button";
    b.addEventListener("click", run);
    return b;
  };
  function linework2(kind) {
    const n = node2("span", "jt-linework jt-" + kind);
    n.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 18; i++) n.append(node2("i"));
    return n;
  }
  function icon(name, w, h) {
    const n = node2("i", "jt-icon jt-icon-" + name);
    n.setAttribute("aria-hidden", "true");
    n.style.setProperty("--isx", w / 32);
    n.style.setProperty("--isy", h / 36);
    n.style.width = w + "px";
    n.style.height = h + "px";
    for (let i = 0; i < 18; i++) n.append(node2("i"));
    return n;
  }
  var money = (amount) => amount === null ? "\u5F85\u8BB0\u5F55" : [[Math.floor(amount / 1e4), "\u91D1"], [Math.floor(amount % 1e4 / 100), "\u94F6"], [amount % 100, "\u94DC"]].filter(([n]) => n > 0).map(([n, u]) => n + " " + u).join(" ") || "0 \u94DC";
  function mountJourney(target, { state, assets, portraitImages, portraitRenderer = () => null, onOpen, onNavigate, frameHeight = 860.6058, frameExtension = frameHeight - 860.6058 }) {
    const viewport = node2("div", "jt-viewport"), sheet = node2("article", "jt-sheet"), header = node2("div", "jt-header"), body = node2("div", "jt-body");
    sheet.style.height = frameHeight + "px";
    sheet.setAttribute("aria-label", "\u65C5\u9014");
    sheet.append(header, body);
    viewport.append(sheet);
    target.append(viewport);
    let current = state;
    function makeTopbar() {
      const bar = createTopbar({ active: "journey", date: (current.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? "\u65E5\u671F\u5F85\u8BB0\u5F55").replace(/^共历\d+年/, ""), weather: current.\u573A\u666F.\u5929\u6C14, period: current.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5, onSelect(id) {
        onNavigate(id, TOPBAR_PAGES.find(([key]) => key === id)[1]);
      } });
      header.append(bar.element);
      return bar;
    }
    let topbar = makeTopbar();
    function crop(asset, box, w, h, cls, alt = "") {
      const frame4 = node2("span", "jt-photo " + cls), canvas = node2("span", "jt-photo-canvas"), img = node2("img");
      const [, sw, sh] = ORIGINALS[asset], [x, y, cw, ch] = box, scale = Math.max(w / cw, h / ch), rw = cw * scale, rh = ch * scale;
      Object.assign(canvas.style, { width: rw + "px", height: rh + "px", left: (w - rw) / 2 + "px", top: (h - rh) / 2 + "px" });
      Object.assign(img.style, { width: sw / cw * 100 + "%", height: sh / ch * 100 + "%", left: -x / cw * 100 + "%", top: -y / ch * 100 + "%" });
      img.src = assets["original-" + asset];
      img.alt = alt;
      img.draggable = false;
      canvas.append(img);
      frame4.append(canvas);
      return frame4;
    }
    function portrait(actor) {
      const selected = portraitRenderer(actor, "jt-photo jt-portrait");
      if (selected) return selected;
      if (portraitImages[actor]) {
        const p = node2("span", "jt-photo jt-portrait"), img = node2("img");
        img.src = portraitImages[actor];
        img.alt = names2[actor] + "\u5934\u50CF";
        img.draggable = false;
        p.append(img);
        p.classList.add("jt-custom-portrait");
        return p;
      }
      return crop("journey-approved", actor === "xingxing" ? [90, 94, 334, 334] : [940, 94, 334, 334], 286, 280, "jt-portrait", names2[actor] + "\u5934\u50CF");
    }
    function badge2(actor) {
      const playing = current.\u626E\u6F14 === actor, b = node2("span", "jt-role jt-role-" + actor);
      b.append(node2("span", "jt-role-face"), linework2("badge-" + actor), linework2("badge-accent-" + actor), icon(playing ? "person" : "group", 37, 38), node2("span", "jt-role-copy", playing ? "\u6B63\u5728\u626E\u6F14" : "\u540C\u884C\u4E3B\u89D2"));
      return b;
    }
    function person(actor) {
      const p = current.\u4EBA\u7269[actor], card = node2("section", "jt-person jt-person-" + actor);
      card.setAttribute("aria-label", names2[actor] + "\u7684\u72B6\u6001");
      const face = control("", () => onOpen("portraits", { actor }), "jt-portrait-button");
      face.setAttribute("aria-label", "\u66F4\u6362" + names2[actor] + "\u5934\u50CF");
      face.append(portrait(actor));
      const title = node2("h2", "jt-name", names2[actor]), handle = node2("p", "jt-handle", actor === "xingxing" ? "naiv31y" : "gatsby");
      card.append(face, linework2("ring-" + actor), title, handle, badge2(actor));
      const health = p.\u4F24\u52BF === null ? "\u4F24\u52BF\u8D44\u6599\u5F85\u8865" : Object.keys(p.\u4F24\u52BF).length ? Object.values(p.\u4F24\u52BF).map((v) => v.\u90E8\u4F4D + "\uFF1A" + v.\u5F71\u54CD).join("\uFF1B") : "\u6682\u65E0\u4F24\u52BF\u3002";
      const values = [["\u8EAB\u4F53", health, "heart", 40, 35], ["\u75B2\u52B3", p.\u75B2\u52B3, "runner", 42, 39], ["\u9B54\u529B", manaDescription(p.\u9B54\u529B), "mana", 43, 43]];
      const stats = node2("dl", "jt-stats");
      for (const [label, value, ico, w, h] of values) {
        const row = node2("div", "jt-stat"), term = node2("dt", "", label), data = node2("dd", "", value);
        term.prepend(icon(ico, w, h));
        row.append(term, data);
        stats.append(row);
      }
      const records2 = p.\u5B66\u4E60\u4E2D === null ? null : Object.values(p.\u5B66\u4E60\u4E2D), learning = node2("p", "jt-learning", records2 === null ? "\u80FD\u529B\u8D44\u6599\u5F85\u8865\u3002" : records2.length ? "\u6B63\u5728\u5B66\u4E60 \xB7 " + records2[0].\u540D\u79F0 : "\u6682\u65E0\u5B66\u4E60\u5B89\u6392\u3002");
      card.append(stats, learning);
      return card;
    }
    function illustratedButton(kind, label, run) {
      const b = control("", run, "jt-art-button jt-button-" + kind);
      b.append(node2("span", "jt-button-face"), linework2("outline-" + kind), icon(kind === "map" ? "map" : "book", 44, 45), node2("span", "jt-button-label", label));
      return b;
    }
    function here() {
      const panel = node2("section", "jt-here");
      panel.setAttribute("aria-label", "\u6B64\u523B\u7684\u65C5\u7A0B");
      panel.append(crop("journey-approved", [270, 485, 750, 228], 730, 272, "jt-here-art"));
      const title = node2("h2", "jt-here-title", "\u6B64\u523B\u7684\u65C5\u7A0B");
      title.prepend(icon("compass", 67, 68));
      const location = control(journeyPlaceName(current.\u573A\u666F.\u5730\u70B9, current), () => onOpen("transit", {}), "jt-location");
      location.prepend(icon("pin", 41, 46));
      panel.append(title, location, node2("span", "jt-region-label", "\u6240\u5C5E\u5730\u533A"), node2("p", "jt-region", regionName(current.\u573A\u666F.\u5730\u533A)), node2("p", "jt-season", [current.\u573A\u666F.\u65F6\u95F4.\u5B63\u8282, current.\u573A\u666F.\u5929\u6C14, current.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5].join(" \xB7 ")));
      panel.append(illustratedButton("map", "\u67E5\u770B\u5730\u56FE", () => onOpen("map", {})));
      const wallet = control("", () => onOpen("ledger", {}), "jt-wallet");
      wallet.append(icon("coins", 42, 44), node2("span", "", "\u65C5\u8D39 " + money(current.\u94B1\u5305.shared)));
      const ration = availableItems(current).filter(([, v]) => /口粮|面包|干粮/.test(v.\u540D\u79F0)).reduce((sum, [, v]) => sum + v.\u6570\u91CF, 0), food = control("", () => onOpen("inventory", { category: "\u8865\u7ED9" }), "jt-food");
      food.append(icon("bread", 47, 40), node2("span", "", "\u53E3\u7CAE " + ration));
      panel.append(wallet, food);
      return panel;
    }
    function memo() {
      const panel = node2("section", "jt-memo");
      panel.setAttribute("aria-label", "\u65C5\u9014\u5907\u5FD8");
      panel.append(crop("travel-memo", [820, 178, 970, 633], 562, 367, "jt-memo-art"));
      const title = node2("h2", "jt-memo-title", "\u65C5\u9014\u5907\u5FD8");
      title.prepend(icon("memo", 57, 49));
      const recent = facts(current), promises = current.\u65C5\u7A0B.\u7EA6\u5B9A === null ? null : Object.values(current.\u65C5\u7A0B.\u7EA6\u5B9A);
      panel.append(title, node2("h3", "jt-recent-title", "\u6700\u8FD1\u53D1\u751F"), node2("p", "jt-recent-copy", recent.length ? recent.at(-1).\u5185\u5BB9 : "\u6682\u672A\u8BB0\u5F55\u3002"), node2("h3", "jt-promise-title", "\u63A5\u4E0B\u6765"), node2("p", "jt-promise-copy", promises?.length ? promises.at(-1) : "\u6682\u65F6\u6CA1\u6709\u5B89\u6392\u3002"), illustratedButton("notebook", "\u67E5\u770B\u624B\u8BB0", () => onOpen("notebook", {})));
      return panel;
    }
    function render3() {
      body.replaceChildren();
      body.append(linework2("linework-main"), linework2("linework-blue"), linework2("linework-accent"));
      const paints2 = node2("span", "jt-paints");
      paints2.setAttribute("aria-hidden", "true");
      for (const id of ["tl1", "tr1", "bl1", "br1", "tl2", "tr2", "bl2", "br2", "bottom-left", "bottom-right"]) paints2.append(node2("i", "jt-paint jt-paint-" + id));
      body.append(paints2);
      body.append(...actors.map(person), here(), memo());
      for (const text of body.querySelectorAll(".jt-recent-copy,.jt-promise-copy")) text.tabIndex = 0;
      if (frameExtension) extendDesktopDrawing(body, { selectors: [".jt-linework-main", ".jt-linework-blue", ".jt-linework-accent"], width: 1774, height: 887, cut: 735, extra: frameExtension });
      resize();
    }
    function resize() {
      const scale = viewport.clientWidth / 1774;
      sheet.style.transform = "scale(" + scale + ")";
      viewport.style.height = frameHeight * scale + "px";
    }
    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    render3();
    return { element: viewport, refresh(next) {
      current = next;
      topbar.destroy();
      topbar = makeTopbar();
      render3();
    }, setNavigation(id) {
      topbar.setActive(id);
    }, destroy() {
      observer.disconnect();
      topbar.destroy();
      viewport.remove();
    } };
  }

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

  // src/ui/portrait-reference.mjs
  var shared = { width: 1835, height: 857, tabEdges: [47, 235, 415, 591, 767, 941], back: [59, 94, 133, 47], banner: [0, 86, 1835, 144], bio: [222, 230, 514, 525], album: [761, 230, 853, 525], face: [480, 465, 167], caption: [395, 697, 172, 34], grid: [807, 289, 753, 375], tile: [1001, 289, 172, 184], tileHoles: [[1008, 294, 158, 146], [1007, 443, 160, 29]], demoPictures: [[1203, 296, 153, 143], [1397, 296, 153, 143], [816, 487, 153, 145], [1010, 487, 153, 145], [1203, 487, 153, 145], [1397, 487, 153, 145]] };
  var PORTRAIT_REFERENCE = {
    xingxing: { ...shared, art: "picker-approved-xingxing", accent: "#b97b38", wash: "#fff0da" },
    xiaogai: { ...shared, art: "picker-approved-xiaogai", accent: "#315cbb", wash: "#eaf1ff" }
  };

  // src/ui/ledger-scene-reference.mjs
  var SCENE_REFERENCE = { art: "scene-approved", width: 1834, height: 858, tabEdges: [48, 238, 428, 607, 786, 945], back: [50, 87, 143, 54], banner: [0, 86, 1834, 107], current: [240, 194, 491, 560], currentPicture: [347, 260, 284, 378], currentCaption: [414, 655, 190, 35], album: [744, 194, 924, 560], grid: [780, 252, 836, 400], tile: [1353, 252, 265, 193], tileHoles: [[1359, 258, 252, 148], [1358, 408, 254, 35]], demoPictures: [[1360, 466, 249, 141], [789, 260, 246, 142], [1076, 260, 242, 141], [1360, 260, 249, 142], [789, 467, 246, 141], [1076, 467, 242, 141]] };

  // src/state/media.mjs
  var createMedia = () => ({ \u5934\u50CF: { xingxing: {}, xiaogai: {} }, \u63D2\u753B: {}, \u6280\u80FD\u56FE\u7247: { xingxing: {}, xiaogai: {} }, \u7269\u54C1\u56FE\u7247: {}, \u5730\u70B9\u56FE\u7247: {}, \u5730\u533A\u56FE\u7247: {}, \u5730\u70B9\u63D2\u753B: {} });
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
  function mediaSnapshot(state, origin = "") {
    const display = {}, details = { xingxing: {}, xiaogai: {} };
    for (const character of ["xingxing", "xiaogai"]) for (const records2 of [state?.\u4EBA\u7269?.[character]?.\u5DF2\u5B66\u80FD\u529B, state?.\u4EBA\u7269?.[character]?.\u5B66\u4E60\u4E2D]) for (const [id, v] of Object.entries(records2 ?? {})) {
      const value = {};
      if (v.\u5206\u7C7B !== void 0) value.category = v.\u5206\u7C7B;
      if (v.\u9636\u6BB5 !== void 0) value.stages = v.\u9636\u6BB5;
      if (v.\u5F53\u524D\u9636\u6BB5 !== void 0) value.activeStage = v.\u5F53\u524D\u9636\u6BB5;
      if (Object.keys(value).length) details[character][id] = { ...details[character][id], ...value };
    }
    if (Object.keys(details.xingxing).length || Object.keys(details.xiaogai).length) display.skillDetails = details;
    const media = state?.\u5A92\u4F53;
    if (!media) return display;
    const rows2 = (value) => Object.entries(value ?? {}), url = (value) => value?.startsWith("/") && origin ? new URL(value, origin).href : value, pictures = (value) => Object.fromEntries(rows2(value).filter(([, v]) => v.\u56FE\u7247).map(([id, v]) => [id, url(v.\u56FE\u7247)])), images = (value) => Object.fromEntries(rows2(value).map(([id, v]) => [id, url(v)]));
    return { ...display, artbook: { portraits: Object.fromEntries(["xingxing", "xiaogai"].map((id) => [id, rows2(media.\u5934\u50CF[id]).map(([key, v]) => ({ id: key, title: v.\u540D\u79F0 }))])), scenes: rows2(media.\u63D2\u753B).map(([id, v]) => ({ id, title: v.\u540D\u79F0 })), locations: media.\u5730\u70B9\u63D2\u753B }, portraitImages: Object.fromEntries(["xingxing", "xiaogai"].map((id) => [id, pictures(media.\u5934\u50CF[id])])), sceneImages: pictures(media.\u63D2\u753B), skillImages: Object.fromEntries(["xingxing", "xiaogai"].map((id) => [id, images(media.\u6280\u80FD\u56FE\u7247[id])])), itemImages: images(media.\u7269\u54C1\u56FE\u7247), placeImages: images(media.\u5730\u70B9\u56FE\u7247), regionImages: images(media.\u5730\u533A\u56FE\u7247) };
  }

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
      const rows2 = ledger().portraits?.[character] ?? [];
      for (const row of rows2) {
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
        const frame4 = document.createElement("span"), img = document.createElement("img");
        frame4.className = "xh-gallery-image xh-portrait-external " + cls;
        img.src = record.imageSrc;
        img.alt = "";
        img.draggable = false;
        img.decoding = "async";
        img.addEventListener("error", () => {
          frame4.replaceChildren(missing(""));
          frame4.dataset.imageMissing = "true";
          assets.__onArtError?.();
        }, { once: true });
        frame4.append(img);
        return frame4;
      }
      if (record.asset) return originalWindow(record.asset, record.box, [], "xh-gallery-image " + cls, assets);
      if (record.kind === "scene" && snapshot().sceneDemo === true && Number.isInteger(record.demoIndex) && record.demoIndex >= 0 && record.demoIndex < 6) return originalWindow(SCENE_REFERENCE.art, record.box, [], "xh-gallery-image " + cls, assets);
      if (record.kind === "portrait" && snapshot().portraitDemo === true && Number.isInteger(record.demoIndex) && record.demoIndex >= 0 && record.demoIndex < 6) {
        const r = PORTRAIT_REFERENCE[character];
        return originalWindow(r.art, r.demoPictures[record.demoIndex], [], "xh-gallery-image " + cls, assets);
      }
      return missing(cls);
    }
    function photo2(asset, rect, matte, id, cls = "", fallback = true, holes = [], cleanupMatte = null, character) {
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
    return { available, selected, choose, image, photo: photo2, latest, location, entry };
  }

  // src/ui-geometric/inventory.mjs
  var names3 = { shared: "\u5171\u540C", xingxing: "\u9192\u9192", xiaogai: "\u5C0F\u76D6" };
  var categories = [["\u5168\u90E8", "\u6240\u6709\u7269\u54C1", "all"], ["\u8865\u7ED9", "\u8865\u7ED9", "food"], ["\u88C5\u5907", "\u88C5\u5907", "swords"], ["\u7D20\u6750", "\u7D20\u6750", "leaf"], ["\u7EAA\u5FF5", "\u7EAA\u5FF5", "gift"]];
  var categoryOf = (item) => ({ "\u7F8E\u98DF": "\u8865\u7ED9", "\u6750\u6599": "\u7D20\u6750" })[item.\u7C7B\u522B] || item.\u7C7B\u522B || (resolveFoodArt(item.\u540D\u79F0) ? "\u8865\u7ED9" : /口粮|皮囊|药剂/.test(item.\u540D\u79F0) ? "\u8865\u7ED9" : isFoodMaterial(item.\u540D\u79F0) || /素材/.test(item.\u540D\u79F0) ? "\u7D20\u6750" : /书签/.test(item.\u540D\u79F0) ? "\u7EAA\u5FF5" : "\u88C5\u5907");
  var node3 = (tag, cls = "", text = "") => {
    const n = document.createElement(tag);
    n.className = cls;
    n.textContent = text;
    return n;
  };
  var icon2 = (name) => {
    const n = node3("i", "iv-icon iv-icon-" + name);
    n.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 4; i++) n.append(node3("i"));
    return n;
  };
  function control2(label, action, cls = "") {
    const b = node3("button", cls, label);
    b.type = "button";
    b.addEventListener("click", action);
    return b;
  }
  function drawing(name) {
    const n = node3("span", "iv-drawing iv-drawing-" + name);
    n.setAttribute("aria-hidden", "true");
    for (let i = 0; i < (name === "desktop" ? 18 : 12); i++) n.append(node3("i"));
    return n;
  }
  function pcStroke(kind) {
    const n = node3("span", "iv-pc-stroke iv-pc-" + kind);
    n.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 18; i++) n.append(node3("i"));
    return n;
  }
  function sparkle(cls = "") {
    const n = node3("i", "iv-spark " + cls);
    n.setAttribute("aria-hidden", "true");
    return n;
  }
  function heading(label, script, cls) {
    const h = node3("h2", "iv-heading " + cls);
    h.append(node3("span", "", label));
    if (script) h.append(node3("em", "iv-script", script));
    return h;
  }
  function frame(kind = "tile", pc = false) {
    const n = node3("span", "iv-tile-frame");
    n.setAttribute("aria-hidden", "true");
    if (pc) n.append(pcStroke("frame-" + kind));
    else for (const p of ["tl", "tr", "bl", "br"]) n.append(node3("i", "iv-tile-corner iv-" + p));
    return n;
  }
  function mountInventory(target, { state, assets, itemImages, portraitImages, portraitRenderer = () => null, onEquipment, onLedger, onNavigate, mode = "auto", desktopFrameHeight = 887 }) {
    const viewport = node3("div", "iv-viewport"), sheet = node3("article", "iv-sheet"), header = node3("div", "iv-topbar"), body = node3("div", "iv-body");
    const view = { owner: "shared", category: "\u5168\u90E8", page: 0, selected: null, panel: "items" };
    let currentMode = "desktop";
    const topbar = createTopbar({ getScene: () => state.\u573A\u666F, active: "inventory", date: state.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F?.replace(/^共历\d+年/, ""), weather: state.\u573A\u666F.\u5929\u6C14, period: state.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5, onSelect(id) {
      onNavigate(id, TOPBAR_PAGES.find(([key]) => key === id)[1]);
    } });
    header.append(topbar.element);
    sheet.append(header, body);
    viewport.append(sheet);
    target.append(viewport);
    function portrait(actor, cls = "") {
      const selected = portraitRenderer(actor, "iv-portrait " + cls);
      if (selected) return selected;
      const p = node3("span", "iv-portrait " + cls), img = node3("img");
      img.alt = names3[actor] + "\u5934\u50CF";
      img.draggable = false;
      const custom = portraitImages[actor];
      if (custom) {
        img.src = custom;
        img.className = "iv-portrait-custom";
      } else {
        const [x, y, w, h] = DEFAULT_PORTRAIT_CROPS[actor];
        const [, width, height] = ORIGINALS.inventory;
        img.src = assets["original-inventory"];
        Object.assign(img.style, { width: width / w * 100 + "%", height: height / h * 100 + "%", left: -x / w * 100 + "%", top: -y / h * 100 + "%" });
      }
      p.append(img);
      return p;
    }
    function art2(id, cls = "") {
      const p = node3("span", "iv-art " + cls), img = node3("img");
      const item = state.\u7269\u54C1[id], picture = resolveItemArt(item.\u540D\u79F0, id, [itemImages], assets, item);
      if (!picture) {
        p.classList.add("iv-art-missing");
        p.textContent = "\u914D\u56FE\u5F85\u8865";
        return p;
      }
      img.src = picture.src;
      img.alt = "";
      img.draggable = false;
      p.append(img);
      return p;
    }
    function selectedItems() {
      return Object.entries(state.\u7269\u54C1).filter(([, item]) => (view.owner === "shared" || item.owner === view.owner) && (view.category === "\u5168\u90E8" || categoryOf(item) === view.category));
    }
    function select(id) {
      view.selected = id;
      if (currentMode === "mobile") view.panel = "gear";
      render3();
    }
    function tile(id, gear2 = false) {
      const item = state.\u7269\u54C1[id], b = control2("", () => select(id), "iv-item" + (gear2 ? " iv-gear-item" : ""));
      b.dataset.item = id;
      b.setAttribute("aria-label", item.\u540D\u79F0);
      b.setAttribute("aria-pressed", String(view.selected === id));
      b.append(art2(id), node3("span", "iv-item-name", item.\u540D\u79F0 + (gear2 ? "" : " \xD7 " + item.\u6570\u91CF)), frame(gear2 ? "gear" : "tile", currentMode === "desktop"));
      return b;
    }
    function switchOwner(id) {
      view.owner = id;
      view.page = 0;
      const items = selectedItems();
      view.selected = items.length ? items[0][0] : null;
      render3();
    }
    function switchCategory(id, owner = view.owner) {
      view.owner = owner;
      view.category = id;
      view.page = 0;
      const items = selectedItems();
      view.selected = items.length ? items[0][0] : null;
      render3();
    }
    function ownerTabs() {
      const tabs = node3("nav", "iv-owners");
      tabs.setAttribute("aria-label", "\u7269\u54C1\u5F52\u5C5E");
      for (const actor of ["shared", "xingxing", "xiaogai"]) {
        const b = control2("", () => switchOwner(actor), "iv-owner");
        b.dataset.owner = actor;
        b.setAttribute("aria-pressed", String(actor === view.owner));
        b.append(actor === "shared" ? icon2("satchel") : portrait(actor), node3("span", "", names3[actor]));
        tabs.append(b);
      }
      return tabs;
    }
    function categoryTabs() {
      const tabs = node3("nav", "iv-categories");
      tabs.setAttribute("aria-label", "\u7269\u54C1\u7C7B\u522B");
      for (const [id, label, ico] of categories) {
        const b = control2("", () => switchCategory(id), "iv-category");
        b.dataset.category = id;
        b.setAttribute("aria-pressed", String(id === view.category));
        b.append(icon2(ico), node3("span", "", currentMode === "mobile" && id === "\u5168\u90E8" ? "\u5168\u90E8" : label));
        if (currentMode === "desktop") b.append(pcStroke("category"));
        tabs.append(b);
      }
      return tabs;
    }
    function action() {
      const plan = equipmentPlan(state, view.selected), b = control2("", () => onEquipment(view.selected, plan, refresh), "iv-equip-action");
      b.disabled = plan.disabled;
      let ornament;
      if (currentMode === "desktop") {
        ornament = node3("span", "iv-pc-action");
        const face = node3("span", "iv-pc-action-face"), paint2 = node3("span", "iv-pc-action-paint");
        face.append(paint2);
        ornament.append(face, pcStroke("action"));
        ornament.setAttribute("aria-hidden", "true");
      } else {
        ornament = node3("span", "iv-action-ornament tb-tab");
        ornament.setAttribute("aria-selected", "true");
        ornament.setAttribute("aria-hidden", "true");
        const face = node3("span", "tb-tab-face"), paint2 = node3("span", "tb-tab-paint"), edge2 = node3("span", "tb-linework tb-tab-edge");
        face.append(paint2);
        for (let i = 0; i < 18; i++) edge2.append(node3("i"));
        ornament.append(face, edge2);
      }
      b.append(ornament, icon2(currentMode === "desktop" ? "spark" : plan.removing ? "unequip" : "equip"), node3("span", "iv-action-label", plan.removing ? "\u5378\u4E0B\u88C5\u5907" : "\u7A7F\u6234\u88C5\u5907"), sparkle("iv-action-spark"));
      return b;
    }
    function satchel() {
      const main = node3("section", "iv-satchel");
      main.setAttribute("aria-label", "\u968F\u8EAB\u884C\u56CA");
      main.append(heading("\u968F\u8EAB\u884C\u56CA", currentMode === "mobile" ? "Our Satchel" : "", "iv-satchel-heading"), ownerTabs(), categoryTabs());
      main.append(node3("p", "iv-owner-caption", view.owner === "shared" ? "\u5171\u540C\u603B\u89C8 \xB7 \u5305\u542B\u4E24\u4EBA\u7684\u5168\u90E8\u7269\u54C1" : names3[view.owner] + "\u7684\u884C\u56CA"));
      const items = selectedItems(), grid = node3("div", "iv-grid");
      for (const [id] of items.slice(view.page * 6, view.page * 6 + 6)) grid.append(tile(id));
      for (let i = grid.children.length; i < 6; i++) {
        const empty = node3("div", "iv-empty-item");
        empty.append(frame("empty", currentMode === "desktop"), currentMode === "desktop" ? pcStroke("empty-mark") : sparkle());
        grid.append(empty);
      }
      main.append(grid);
      const pages = Math.max(1, Math.ceil(items.length / 6)), pager = node3("nav", "iv-pagination");
      pager.setAttribute("aria-label", "\u884C\u56CA\u7FFB\u9875");
      const changePage = (page) => {
        view.page = page;
        view.selected = items[page * 6][0];
        render3();
      };
      const prev = control2("", () => changePage(view.page - 1), "iv-page-arrow iv-prev"), next = control2("", () => changePage(view.page + 1), "iv-page-arrow iv-next");
      prev.setAttribute("aria-label", "\u4E0A\u4E00\u9875");
      next.setAttribute("aria-label", "\u4E0B\u4E00\u9875");
      prev.disabled = view.page === 0;
      next.disabled = view.page + 1 >= pages;
      if (currentMode === "desktop") {
        prev.append(pcStroke("prev"));
        next.append(pcStroke("next"));
      }
      pager.append(prev, node3("span", "iv-page-count", view.page + 1 + " / " + pages), next, node3("span", "iv-item-count", "\u5171 " + items.length + " \u4EF6\u7269\u54C1"));
      main.append(pager);
      const wallet = node3("div", "iv-wallet"), ledger = control2("", onLedger, "iv-ledger");
      ledger.append(icon2("ledger"), node3("span", "", "\u67E5\u770B\u8D26\u672C"));
      const amount = state.\u94B1\u5305[view.owner], money2 = amount === null ? "\u8D44\u6599\u5F85\u8865" : amount % 100 ? amount + " \u94DC" : amount / 100 + " \u94F6";
      wallet.append(icon2("coins"), node3("span", "", view.owner === "shared" ? "\u5171\u540C\u65C5\u8D39 \xB7 " + money2 : names3[view.owner] + "\u7684\u94B1\u5305 \xB7 " + money2), node3("i", "iv-wallet-divider"), ledger);
      main.append(wallet);
      if (currentMode === "desktop" && view.selected !== null && equipmentInfo(state.\u7269\u54C1[view.selected], view.selected)) main.append(action());
      return main;
    }
    function gear() {
      const p = node3("section", "iv-equipment");
      p.setAttribute("aria-label", "\u968F\u8EAB\u88C5\u5907");
      p.append(heading("\u968F\u8EAB\u88C5\u5907", currentMode === "mobile" ? "Equipment" : "", "iv-gear-heading"));
      for (const actor of ["xingxing", "xiaogai"]) {
        const row = node3("div", "iv-gear-row iv-gear-" + actor), owner = control2("", () => {
          switchOwner(actor);
          view.panel = "items";
          render3();
        }, "iv-gear-owner");
        owner.setAttribute("aria-label", "\u67E5\u770B" + names3[actor] + "\u7684\u7269\u54C1");
        owner.append(portrait(actor), node3("span", "", names3[actor]), sparkle());
        row.append(owner);
        for (const [slot, id] of equipmentEntries(state, actor).slice(0, 2)) {
          if (id === null) {
            const empty = node3("div", "iv-empty-item iv-empty-gear");
            empty.append(frame("gear", currentMode === "desktop"), currentMode === "desktop" ? pcStroke("empty-mark") : sparkle(), node3("span", "", slot));
            row.append(empty);
          } else row.append(tile(id, true));
        }
        p.append(row);
      }
      return p;
    }
    function detail() {
      const p = node3("section", "iv-detail");
      p.setAttribute("aria-label", "\u7269\u54C1\u8BE6\u60C5");
      p.append(heading("\u7269\u54C1\u8BE6\u60C5", currentMode === "mobile" ? "Item Details" : "", "iv-detail-heading"));
      if (view.selected === null) {
        p.append(node3("p", "iv-no-selection", "\u9009\u62E9\u4E00\u4EF6\u7269\u54C1\u67E5\u770B\u8BE6\u60C5\u3002"));
        return p;
      }
      const id = view.selected, item = state.\u7269\u54C1[id], info = equipmentInfo(item, id), image = art2(id, "iv-detail-art");
      image.dataset.kind = id;
      if (currentMode === "mobile") image.append(frame());
      const copy = node3("div", "iv-detail-copy"), description = node3("p", "iv-description");
      copy.append(node3("h3", "iv-detail-name", item.\u540D\u79F0));
      for (const text of info ? info.lines : [item.\u63CF\u8FF0 ?? resolveFoodArt(item.\u540D\u79F0, id)?.flavor]) description.append(node3("span", "", text));
      copy.append(description);
      const rows2 = node3("dl", "iv-facts");
      for (const [label, value, ico] of [["\u6570\u91CF", item.\u6570\u91CF + " " + item.\u5355\u4F4D, "box"], ["\u5F52\u5C5E", names3[item.owner], "heart"], ["\u6301\u6709\u8005", names3[item.holder], "person"], ["\u5B58\u653E", state.\u50A8\u4F4D[item.storage_id].\u7C7B\u578B, "storage"]]) {
        const row = node3("div", "iv-fact"), term = node3("dt", "", label), data = node3("dd", "", value);
        term.prepend(icon2(ico));
        if (label === "\u6301\u6709\u8005") data.prepend(portrait(item.holder, "iv-holder-avatar"));
        row.append(term, data);
        rows2.append(row);
      }
      copy.append(rows2);
      p.append(image, copy);
      if (currentMode === "desktop") {
        const border = frame("detail", true);
        border.classList.add("iv-detail-frame");
        p.append(border);
      }
      if (currentMode === "mobile" && info) p.append(action());
      return p;
    }
    function subTabs() {
      const tabs = node3("nav", "iv-subtabs");
      tabs.setAttribute("aria-label", "\u884C\u56CA\u5206\u680F");
      for (const [id, label, ico] of [["items", "\u7269\u54C1", "bag"], ["gear", "\u88C5\u5907\u4E0E\u8BE6\u60C5", "spark"]]) {
        const b = control2("", () => {
          view.panel = id;
          render3();
        }, "iv-subtab");
        b.dataset.panel = id;
        b.setAttribute("aria-pressed", String(id === view.panel));
        b.append(icon2(ico), node3("span", "", label));
        tabs.append(b);
      }
      return tabs;
    }
    function render3() {
      const items = selectedItems();
      view.page = Math.min(view.page, Math.max(0, Math.ceil(items.length / 6) - 1));
      if (!Object.hasOwn(state.\u7269\u54C1, view.selected)) view.selected = items[view.page * 6]?.[0] ?? null;
      sheet.dataset.panel = view.panel;
      body.replaceChildren();
      body.append(drawing(currentMode === "desktop" ? "desktop" : view.panel === "items" ? "mobile-items" : "mobile-gear"));
      const paints2 = node3("div", "iv-corner-paints");
      for (const p of ["left-top", "middle-top", "gear-left", "gear-right", "left-bottom", "middle-bottom", "right-bottom", ...currentMode === "desktop" ? ["detail-left", "detail-right"] : []]) paints2.append(node3("i", "iv-paint iv-paint-" + p));
      body.append(paints2);
      if (currentMode === "desktop") body.append(pcStroke("ornament-blue"));
      if (currentMode === "mobile") body.append(subTabs());
      if (currentMode === "desktop" || view.panel === "items") body.append(satchel());
      if (currentMode === "desktop" || view.panel === "gear") body.append(gear(), detail());
      if (currentMode === "desktop" && desktopFrameHeight !== 887) extendDesktopDrawing(body, { selectors: [".iv-drawing-desktop", ".iv-pc-ornament-blue"], width: 1774, height: 887, cut: 735, extra: desktopFrameHeight - 887 });
      resize();
    }
    function resize() {
      const next = mode === "auto" ? viewport.clientWidth < 760 ? "mobile" : "desktop" : mode;
      if (next !== currentMode) {
        currentMode = next;
        view.page = 0;
        sheet.classList.toggle("is-mobile", currentMode === "mobile");
        render3();
        return;
      }
      const width = currentMode === "mobile" ? 1021 : 1774, height = currentMode === "mobile" ? 1541 : desktopFrameHeight, scale = viewport.clientWidth / width;
      sheet.style.height = height + "px";
      sheet.style.transform = "scale(" + scale + ")";
      viewport.style.height = height * scale + "px";
    }
    function refresh() {
      render3();
    }
    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    render3();
    return { element: viewport, view, refresh, setCategory: switchCategory, setMode(value) {
      mode = value;
      resize();
    }, setNavigation(id) {
      topbar.setActive(id);
    }, destroy() {
      observer.disconnect();
      topbar.destroy();
      viewport.remove();
    } };
  }

  // src/ui-geometric/bonds-relationship.mjs
  var RELATIONSHIPS = [
    { id: "travelling", label: "\u65C5\u4F34", column: 0, row: 0 },
    { id: "friends", label: "\u670B\u53CB", column: 1, row: 0 },
    { id: "partners", label: "\u642D\u6863", column: 2, row: 0 },
    { id: "confidants", label: "\u77E5\u5DF1", column: 0, row: 1 },
    { id: "lovers", label: "\u604B\u4EBA", column: 1, row: 1 }
  ];
  var labels = new Map(RELATIONSHIPS.map((row) => [row.label, row]));
  for (const [alias, label] of [["\u540C\u884C\u4F19\u4F34", "\u65C5\u4F34"], ["\u540C\u884C\u8005", "\u65C5\u4F34"], ["\u597D\u53CB", "\u670B\u53CB"], ["\u631A\u53CB", "\u670B\u53CB"], ["\u5192\u9669\u642D\u6863", "\u642D\u6863"]]) labels.set(alias, labels.get(label));
  var unrecorded = { id: "unrecorded", label: "\u672A\u8BB0\u5F55" };
  function currentRelationship(records2) {
    if (records2 === null) return unrecorded;
    if (records2.\u5F53\u524D\u5173\u7CFB !== void 0) {
      const label = records2.\u5F53\u524D\u5173\u7CFB.trim();
      return labels.get(label) || { id: "other", label };
    }
    for (const value of Object.values(records2).reverse()) {
      const relation = labels.get(value.trim());
      if (relation) return relation;
    }
    return unrecorded;
  }

  // src/ui/assets/bonds/relationship-emblems-20261028.png
  var relationship_emblems_20261028_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/fb312cb9a274284a44b14660a183fbd9e5cbcd99/handbook/images/bonds/relationship-emblems-20261028.png";

  // src/ui-geometric/bonds.mjs
  var WIDTH = 1775;
  var HEIGHT = 905.671;
  var node4 = (tag, cls = "", text = "") => {
    const e = document.createElement(tag);
    e.className = cls;
    e.textContent = text;
    return e;
  };
  var control3 = (label, cls, run) => {
    const b = node4("button", cls, label);
    b.type = "button";
    b.addEventListener("click", run);
    return b;
  };
  function linework3(kind) {
    const e = node4("span", "bd-linework bd-" + kind);
    e.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 18; i++) e.append(node4("i"));
    return e;
  }
  function icon3(kind, w, h) {
    const e = node4("i", "bd-icon bd-icon-" + kind);
    e.setAttribute("aria-hidden", "true");
    e.style.width = w + "px";
    e.style.height = h + "px";
    e.style.setProperty("--isx", w / 32);
    e.style.setProperty("--isy", h / 36);
    for (let i = 0; i < 18; i++) e.append(node4("i"));
    return e;
  }
  function mountBonds(target, { snapshot, assets, portraitImages = {}, portraitRenderer = () => null, sceneChoice = "scene-default", sceneRenderer = () => null, onChooseScene, onOpen, onNavigate }) {
    let current = snapshot, choice = sceneChoice, selectedMemory = null;
    const viewport = node4("div", "bd-viewport"), sheet = node4("article", "bd-sheet"), header = node4("div", "bd-header"), body = node4("div", "bd-body");
    sheet.setAttribute("aria-label", "\u7F81\u7ECA");
    sheet.append(header, body);
    viewport.append(sheet);
    target.append(viewport);
    function makeTopbar() {
      const s = current.state, bar = createTopbar({ active: "bonds", date: (s.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? "\u65E5\u671F\u5F85\u8BB0\u5F55").replace(/^共历\d+年/, ""), weather: s.\u573A\u666F.\u5929\u6C14, period: s.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5, onSelect(id) {
        onNavigate(id, TOPBAR_PAGES.find(([key]) => key === id)[1]);
      } });
      header.append(bar.element);
      return bar;
    }
    let topbar = makeTopbar();
    function picture(id, cls, alt) {
      const selected = sceneRenderer(id, "bd-picture " + cls, alt);
      if (selected) return selected;
      const frame4 = node4("span", "bd-picture " + cls), img = node4("img");
      img.alt = alt;
      img.draggable = false;
      if (current.sceneImages[id]) {
        img.src = current.sceneImages[id];
        frame4.classList.add("bd-external-picture");
      } else {
        const row = id === "scene-default" ? { asset: "bond-scene", box: [0, 0, 1344, 1170] } : ART_CATALOG[id], [x, y, w, h] = row.box, [, sw, sh] = ORIGINALS[row.asset];
        img.src = assets["original-" + row.asset];
        frame4.style.setProperty("--picture-ratio", w / h);
        Object.assign(img.style, { width: sw / w * 100 + "%", height: sh / h * 100 + "%", left: -x / w * 100 + "%", top: -y / h * 100 + "%" });
      }
      const canvas = node4("span", "bd-picture-canvas");
      canvas.append(img);
      frame4.append(canvas);
      return frame4;
    }
    function button4(kind, label, run) {
      const b = control3("", "bd-art-button bd-button-" + kind, run);
      b.append(node4("span", "bd-button-face"), linework3("outline-" + kind), linework3("outline-accent-" + kind));
      const glyph = { choose: ["image", 25, 24], use: ["image", 24, 22], records: ["book", 32, 28], previous: ["previous", 13, 20], next: ["next", 13, 20] }[kind];
      b.append(icon3(...glyph), node4("span", "bd-button-label", label));
      return b;
    }
    function story() {
      const panel = node4("section", "bd-story");
      panel.setAttribute("aria-label", "\u6211\u4EEC\u7684\u65C5\u9014");
      const art2 = control3("", "bd-story-art", () => onOpen("artbook", { kind: "scene" }));
      art2.setAttribute("aria-label", "\u9009\u62E9\u5DF2\u89E3\u9501\u7684\u7F81\u7ECA\u63D2\u753B");
      art2.dataset.scene = choice;
      art2.append(picture(choice, "bd-story-picture", "\u5F53\u524D\u7F81\u7ECA\u63D2\u753B"));
      const title = node4("h2", "bd-story-title", "\u6211\u4EEC\u7684\u65C5\u9014"), script = node4("p", "bd-story-script", "Our Story");
      script.setAttribute("aria-hidden", "true");
      script.append(linework3("story-signature"));
      panel.append(art2, title, script, button4("choose", "\u9009\u62E9\u65C5\u9014\u63D2\u753B", () => onOpen("artbook", { kind: "scene" })));
      return panel;
    }
    function record(kind, title, records2, unknown, empty) {
      const card = node4("section", "bd-record bd-record-" + kind), face = node4("span", "bd-record-face"), heading3 = node4("h3", "bd-record-title", title), copy = node4("div", "bd-record-copy");
      face.setAttribute("aria-hidden", "true");
      copy.tabIndex = 0;
      copy.setAttribute("aria-label", title + "\u5B8C\u6574\u8BB0\u5F55");
      const rows2 = records2 === null ? null : Object.entries(records2).reverse();
      if (rows2 === null) copy.append(node4("p", "", unknown));
      else if (rows2.length === 0) copy.append(node4("p", "", empty));
      else for (const [id, text] of rows2) {
        const p = node4("p", "", text);
        p.dataset.recordId = id;
        copy.append(p);
      }
      card.append(face, heading3, copy);
      return card;
    }
    function portrait(actor) {
      const cls = "bd-relation-portrait", selected = portraitRenderer(actor, cls);
      if (selected) return selected;
      const frame4 = node4("span", cls), img = node4("img");
      img.alt = (actor === "xingxing" ? "\u9192\u9192" : "\u5C0F\u76D6") + "\u5934\u50CF";
      img.draggable = false;
      if (portraitImages[actor]) {
        img.src = portraitImages[actor];
        frame4.classList.add("bd-relation-external");
      } else {
        const [x, y, w, h] = actor === "xingxing" ? [1091, 176, 153, 148] : [1091, 333, 153, 148], [, sw, sh] = ORIGINALS.inventory;
        img.src = assets["original-inventory"];
        Object.assign(img.style, { width: sw / w * 100 + "%", height: sh / h * 100 + "%", left: -x / w * 100 + "%", top: -y / h * 100 + "%" });
      }
      frame4.append(img);
      return frame4;
    }
    function relationship() {
      const relation = currentRelationship(current.state.\u5173\u7CFB.\u660E\u786E\u4E8B\u5B9E), card = node4("section", "bd-current-relation");
      card.dataset.relationship = relation.id;
      card.setAttribute("aria-label", "\u5F53\u524D\u5173\u7CFB\uFF1A" + relation.label);
      card.append(node4("span", "bd-relation-frame"));
      for (const actor of ["xingxing", "xiaogai"]) {
        const face = control3("", "bd-relation-avatar bd-relation-avatar-" + actor, () => onOpen("portraits", { actor }));
        face.setAttribute("aria-label", "\u66F4\u6362" + (actor === "xingxing" ? "\u9192\u9192" : "\u5C0F\u76D6") + "\u5934\u50CF");
        face.append(portrait(actor));
        card.append(face);
      }
      for (const side of ["left", "right"]) card.append(node4("span", "bd-relation-link bd-relation-link-" + side));
      const symbol2 = node4("span", "bd-relation-symbol");
      symbol2.setAttribute("aria-hidden", "true");
      if (relation.column !== void 0) {
        const crop = node4("span", "bd-relation-emblem"), img = node4("img");
        img.src = relationship_emblems_20261028_default;
        img.alt = "";
        img.draggable = false;
        img.style.left = -relation.column * 100 + "%";
        img.style.top = -relation.row * 100 + "%";
        crop.append(img);
        symbol2.append(crop);
        const effects = node4("span", "bd-relation-effects");
        for (let i = 0; i < 4; i++) effects.append(node4("i"));
        symbol2.append(effects);
      } else symbol2.append(node4("span", "bd-relation-neutral"));
      card.append(symbol2, node4("p", "bd-relation-label", relation.label));
      return card;
    }
    function memories() {
      const panel = node4("section", "bd-memories");
      panel.setAttribute("aria-label", "\u5171\u540C\u8D70\u8FC7\u7684\u65F6\u523B");
      const heading3 = node4("h2", "bd-memories-title", "\u5171\u540C\u8D70\u8FC7\u7684\u65F6\u523B");
      heading3.prepend(icon3("compass", 67, 64));
      panel.append(heading3);
      const entries2 = current.artbook.scenes.slice(-3).reverse();
      if (!entries2.some((row) => row.id === selectedMemory)) selectedMemory = entries2.length ? entries2[0].id : null;
      const index = entries2.findIndex((row) => row.id === selectedMemory), entry = entries2[index];
      const title = node4("h3", "bd-memory-title"), caption = node4("p", "bd-memory-caption");
      if (entry) {
        panel.dataset.memory = entry.id;
        panel.append(picture(entry.id, "bd-memory-picture", entry.title));
        title.textContent = entry.title;
        title.title = entry.title;
        caption.textContent = "\u5DF2\u89E3\u9501\u7684\u5171\u540C\u56DE\u5FC6\u3002";
      } else {
        title.textContent = "\u5C1A\u65E0\u5171\u540C\u56DE\u5FC6";
        caption.textContent = "\u5C1A\u65E0\u5DF2\u89E3\u9501\u7684\u5267\u60C5\u63D2\u753B\u3002";
      }
      panel.append(title, caption);
      const pager = node4("nav", "bd-pager");
      pager.setAttribute("aria-label", "\u5171\u540C\u56DE\u5FC6\u5207\u6362");
      const previous = button4("previous", "\u4E0A\u4E00\u6BB5", () => {
        selectedMemory = entries2[index - 1].id;
        render3();
      }), next = button4("next", "\u4E0B\u4E00\u6BB5", () => {
        selectedMemory = entries2[index + 1].id;
        render3();
      });
      previous.setAttribute("aria-label", "\u4E0A\u4E00\u6BB5\u5171\u540C\u56DE\u5FC6");
      next.setAttribute("aria-label", "\u4E0B\u4E00\u6BB5\u5171\u540C\u56DE\u5FC6");
      previous.disabled = index <= 0;
      next.disabled = index + 1 >= entries2.length;
      pager.append(previous, node4("span", "bd-memory-count", entries2.length ? index + 1 + " / " + entries2.length : "0 / 0"), next);
      const use = button4("use", choice === selectedMemory && entry ? "\u5F53\u524D\u7F81\u7ECA\u63D2\u56FE" : "\u8BBE\u4E3A\u7F81\u7ECA\u63D2\u56FE", () => choose(selectedMemory));
      use.disabled = !entry || choice === selectedMemory;
      panel.append(pager, use, button4("records", "\u67E5\u770B\u7ECF\u5386\u8BB0\u5F55", () => onOpen("memories", {})));
      return panel;
    }
    function render3() {
      const s = current.state;
      body.replaceChildren(linework3("linework-main"), linework3("linework-accent"));
      const paints2 = node4("span", "bd-paints");
      paints2.setAttribute("aria-hidden", "true");
      for (const id of ["top-left", "top-right", "bottom-left", "bottom-middle", "middle-top"]) paints2.append(node4("i", "bd-paint bd-paint-" + id));
      body.append(paints2, story());
      const right = node4("section", "bd-relationship");
      right.setAttribute("aria-label", "\u5173\u7CFB\u4E0E\u7EA6\u5B9A");
      const title = node4("h2", "bd-relationship-title", "\u5173\u7CFB\u4E0E\u7EA6\u5B9A");
      title.prepend(icon3("compass", 67, 64));
      const pact = s.\u5173\u7CFB.\u660E\u786E\u4E8B\u5B9E?.\u540C\u884C\u7EA6\u5B9A;
      right.append(title, relationship(), record("promises", "\u540C\u884C\u7EA6\u5B9A", pact ? { \u540C\u884C\u7EA6\u5B9A: pact } : {}, "", ""), memories());
      body.append(right);
      resize();
    }
    function choose(id) {
      choice = id;
      onChooseScene(id);
      render3();
    }
    function resize() {
      const scale = viewport.clientWidth / WIDTH;
      sheet.style.transform = "scale(" + scale + ")";
      viewport.style.height = HEIGHT * scale + "px";
    }
    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    render3();
    return { element: viewport, get selectedScene() {
      return choice;
    }, get selectedMemory() {
      return selectedMemory;
    }, chooseScene: choose, setNavigation(id) {
      topbar.setActive(id);
    }, refresh(next, scene = choice) {
      if (next.scope !== current.scope) selectedMemory = null;
      choice = scene;
      current = next;
      topbar.destroy();
      topbar = makeTopbar();
      render3();
    }, destroy() {
      observer.disconnect();
      topbar.destroy();
      viewport.remove();
    } };
  }

  // src/ui-geometric/notebook.mjs
  var node5 = (tag, cls = "", text = "") => {
    const e = document.createElement(tag);
    e.className = cls;
    e.textContent = text;
    return e;
  };
  var button = (text, cls, run) => {
    const e = node5("button", cls, text);
    e.type = "button";
    e.addEventListener("click", run);
    return e;
  };
  var paths = {
    book: "M3 6 Q10 3 16 7 Q22 3 29 6 V28 Q22 25 16 29 Q10 25 3 28 Z M16 7 V29",
    commission: "M11 7 H7 V30 H26 V7 H22 M13 3 H20 V11 H13 Z M11 16 H14 M18 16 H22 M11 22 H14 M18 22 H22",
    pin: "M16 31 S6 21 6 12 A10 10 0 0 1 26 12 C26 21 16 31 16 31 Z M20 12 A4 4 0 1 1 12 12 A4 4 0 1 1 20 12",
    flag: "M6 31 V5 M7 7 C13 2 18 12 26 6 L24 19 C18 25 13 15 7 20",
    person: "M21 9 A5 6 0 1 1 11 9 A5 6 0 1 1 21 9 M12 16 C6 18 5 22 5 29 H27 C27 22 26 18 20 16",
    mountain: "M2 28 L12 7 L24 28 Z M16 13 L21 7 L31 28 H24",
    coins: "M27 9 C27 16 5 16 5 9 C5 2 27 2 27 9 Z M5 9 V15 C5 22 27 22 27 15 V9 M5 15 V21 C5 28 27 28 27 21 V15 M5 21 V26 C5 33 27 33 27 26 V21",
    right: "M12 7 L22 17 L12 28",
    left: "M21 6 L10 17 L21 28",
    down: "M6 12 L16 22 L26 12",
    up: "M6 22 L16 12 L26 22"
  };
  function icon4(name, cls = "") {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), path = document.createElementNS(svg.namespaceURI, "path");
    svg.setAttribute("viewBox", "0 0 32 34");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add("nt-icon");
    if (cls) svg.classList.add(cls);
    path.setAttribute("d", paths[name]);
    svg.append(path);
    return svg;
  }
  function star(major = false) {
    const e = node5("i", "nt-star" + (major ? " nt-star-major" : ""));
    e.setAttribute("aria-hidden", "true");
    e.append(node5("i"));
    return e;
  }
  function rule(middle = false) {
    const e = node5("span", "nt-rule");
    e.setAttribute("aria-hidden", "true");
    e.append(star());
    if (middle) {
      const mark = star();
      mark.classList.add("nt-rule-middle");
      e.append(mark);
    }
    e.append(star());
    return e;
  }
  function heading2(text, name, cls = "") {
    const e = node5("h2", "nt-section-heading " + cls);
    if (name) e.append(icon4(name));
    e.append(node5("span", "", text), rule());
    return e;
  }
  function frame2(cls) {
    const e = node5("section", "nt-panel " + cls);
    for (const corner of ["tl", "tr", "bl", "br"]) {
      const c = node5("i", "nt-corner nt-corner-" + corner);
      c.setAttribute("aria-hidden", "true");
      c.append(node5("i", "nt-corner-paint"), node5("i", "nt-corner-inner"), node5("i", "nt-corner-dots"), star());
      e.append(c);
    }
    return e;
  }
  function badge(text) {
    return node5("span", "nt-badge", text);
  }
  var meta = (v) => [v.role, v.relation].filter(Boolean).join(" \xB7 ");
  function mountNotebook(target, { state, data, frameHeight = 887, onNavigate, onOpen }) {
    let current = data, view;
    const viewport = node5("div", "nt-viewport"), sheet = node5("article", "nt-sheet"), header = node5("div", "nt-header"), body = node5("div", "nt-body");
    sheet.style.height = frameHeight + "px";
    sheet.setAttribute("aria-label", "\u624B\u8BB0");
    sheet.append(header, body);
    viewport.append(sheet);
    target.append(viewport);
    const topbar = createTopbar({ getScene: () => state.\u573A\u666F, active: "notebook", date: (state.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? "\u65E5\u671F\u5F85\u8BB0\u5F55").replace(/^共历\d+年/, ""), weather: state.\u573A\u666F.\u5929\u6C14, period: state.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5, onSelect(id) {
      onNavigate(id, TOPBAR_PAGES.find(([key]) => key === id)[1]);
    } });
    header.append(topbar.element);
    function reset() {
      view = { collection: "people", detail: null, commission: current.commissions[0]?.id, expanded: current.initialExpandedPerson ?? null };
    }
    function change(run, focus) {
      run();
      render3();
      if (focus) body.querySelector(focus)?.focus({ preventScroll: true });
    }
    function openDetail(kind, id) {
      change(() => {
        view.detail = { kind, id };
        if (kind === "commission") view.commission = id;
      }, ".nt-detail-title");
    }
    function collapse() {
      change(() => view.detail = null, '[data-collection="' + view.collection + '"]');
    }
    function locationLink(v, label = v.location) {
      const e = button("", "nt-cut nt-place-link", () => onOpen("region", { region: v.region }));
      e.append(icon4("pin"), node5("span", "", label), icon4("right"));
      return e;
    }
    function taskRow(v) {
      const selected = view.commission === v.id, b = button("", "nt-cut nt-task" + (selected ? " is-selected" : ""), () => openDetail("commission", v.id));
      b.dataset.commission = v.id;
      b.setAttribute("aria-pressed", String(view.detail?.kind === "commission" && view.detail.id === v.id));
      if (selected) {
        const ribbon = node5("span", "nt-ribbon");
        ribbon.setAttribute("aria-hidden", "true");
        ribbon.append(star());
        b.append(ribbon);
      }
      const title = node5("strong", "nt-task-title", v.title);
      title.title = v.title;
      b.append(icon4("commission"), title, icon4("right", "nt-row-arrow"));
      if (selected) {
        if (v.status) b.append(badge(v.status));
        if (v.location) {
          const line = node5("span", "nt-task-place");
          line.append(icon4("pin"), node5("span", "", v.location));
          b.append(line);
        }
      }
      return b;
    }
    function leftPane() {
      const panel = frame2("nt-left");
      panel.setAttribute("aria-label", "\u59D4\u6258\u4E0E\u5B66\u4E60");
      panel.append(heading2("\u5F53\u524D\u59D4\u6258", "commission", "nt-commission-heading"));
      const tasks = node5("div", "nt-tasks");
      tasks.dataset.scroll = "tasks";
      tasks.setAttribute("aria-label", "\u5F53\u524D\u59D4\u6258");
      for (const v of current.commissions) tasks.append(taskRow(v));
      if (!current.commissions.length) tasks.append(node5("p", "nt-empty", "\u5C1A\u672A\u63A5\u53D6\u59D4\u6258\u3002"));
      panel.append(tasks);
      const study = node5("section", "nt-study");
      study.append(rule(), heading2("\u5B66\u4E60", "book"));
      const rows2 = node5("div", "nt-learning-rows");
      rows2.dataset.scroll = "learning";
      for (const v of current.learning) {
        const b = button("", "nt-cut nt-learning" + (view.detail?.kind === "learning" && view.detail.id === v.id ? " is-selected" : ""), () => openDetail("learning", v.id));
        b.dataset.learning = v.id;
        b.append(icon4("book"), node5("strong", "", v.title), node5("span", "nt-learning-status", "\xB7 " + v.status), icon4("right", "nt-row-arrow"));
        rows2.append(b);
      }
      if (!current.learning.length) rows2.append(node5("p", "nt-empty", "\u6682\u65E0\u8FDB\u884C\u4E2D\u7684\u5B66\u4E60\u3002"));
      study.append(rows2);
      panel.append(study);
      return panel;
    }
    function tabs() {
      const nav = node5("nav", "nt-collection-tabs");
      nav.setAttribute("aria-label", "\u6536\u96C6\u5206\u7C7B");
      for (const [id, label, name] of [["people", "\u8BA4\u8BC6\u7684\u4EBA", "person"], ["mementos", "\u6CBF\u9014\u7559\u5FF5", "mountain"]]) {
        const b = button("", "nt-cut nt-collection-tab", () => change(() => {
          view.collection = id;
          view.detail = null;
        }, '[data-collection="' + id + '"]'));
        b.dataset.collection = id;
        b.setAttribute("aria-pressed", String(view.collection === id));
        b.classList.toggle("is-selected", view.collection === id);
        b.append(icon4(name), node5("span", "", label));
        nav.append(b);
      }
      return nav;
    }
    function personRow(v) {
      const expanded = view.expanded === v.id, row = node5("article", "nt-cut nt-person-row" + (expanded ? " is-selected is-expanded" : ""));
      row.dataset.person = v.id;
      const open = button("", "nt-person-open", () => openDetail("person", v.id));
      open.append(node5("strong", "", v.title), node5("span", "nt-person-meta", meta(v)));
      row.append(open);
      const toggle = button("", "nt-person-toggle", () => change(() => view.expanded = expanded ? null : v.id, '[data-person="' + v.id + '"] .nt-person-toggle'));
      toggle.setAttribute("aria-label", (expanded ? "\u6536\u8D77" : "\u5C55\u5F00") + v.title + "\u7684\u76F8\u8BC6\u8BB0\u5F55");
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.append(icon4(expanded ? "down" : "right"));
      row.append(toggle);
      if (expanded) row.append(node5("p", "nt-person-summary", v.summary));
      return row;
    }
    function picture(v, cls) {
      const e = node5("span", "nt-content-picture " + cls), img = node5("img");
      img.src = v.image.src;
      img.alt = cls === "nt-memento-art" ? "" : v.title;
      img.draggable = false;
      e.append(img);
      return e;
    }
    function mementoRow(v) {
      const b = button("", "nt-cut nt-memento-row", () => openDetail("memento", v.id));
      b.dataset.memento = v.id;
      if (v.image) b.append(picture(v, "nt-memento-art"));
      else b.classList.add("nt-text-memento");
      const copy = node5("span", "nt-memento-copy");
      copy.append(node5("strong", "", v.title), node5("span", "", v.summary));
      b.append(copy, icon4("right", "nt-row-arrow"));
      return b;
    }
    function collection(panel) {
      panel.append(heading2("\u6536\u96C6", "book", "nt-collection-heading"), tabs());
      const chronicle = node5("div", "nt-chronicle");
      chronicle.dataset.scroll = "collection";
      chronicle.setAttribute("aria-label", view.collection === "people" ? "\u8BA4\u8BC6\u7684\u4EBA" : "\u6CBF\u9014\u7559\u5FF5");
      const groups = /* @__PURE__ */ new Map();
      for (const v of current[view.collection]) {
        const key = [v.date, v.location].filter(Boolean).join(" \xB7 ") || "\u65C5\u9014\u8BB0\u5F55";
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(v);
      }
      for (const [label, records2] of groups) {
        const group = node5("section", "nt-chronicle-group"), head = node5("h3", "nt-group-heading", label);
        head.prepend(star(true));
        head.append(rule());
        const rows2 = node5("div", "nt-chronicle-rows");
        for (const v of records2) {
          const row = view.collection === "people" ? personRow(v) : mementoRow(v), entry = node5("div", "nt-chronicle-entry");
          entry.append(star(), row);
          rows2.append(entry);
        }
        group.append(head, rows2);
        chronicle.append(group);
      }
      if (!groups.size) chronicle.append(node5("p", "nt-empty", view.collection === "people" ? "\u8FD8\u6CA1\u6709\u8BB0\u4E0B\u76F8\u8BC6\u7684\u4EBA\u3002" : "\u8FD8\u6CA1\u6709\u7559\u4E0B\u65C5\u9014\u7559\u5FF5\u3002"));
      panel.append(chronicle);
    }
    function history(records2, cls = "") {
      const list = node5("div", "nt-history " + cls);
      for (const record of records2) {
        const row = node5("p", "nt-history-row");
        row.append(star(cls === "nt-major-history"));
        if (record.date) row.append(node5("span", "nt-history-date", record.date));
        row.append(node5("span", "nt-history-copy", record.text));
        list.append(row);
      }
      return list;
    }
    function back(label) {
      const b = button("", "nt-back", collapse);
      b.append(icon4("left"), node5("span", "", label));
      return b;
    }
    function detailHeading(v, cls = "") {
      const title = node5("h2", "nt-detail-title " + cls, v.title);
      title.tabIndex = -1;
      return title;
    }
    function ornamentedTitle(v) {
      const title = detailHeading(v, "nt-ornamented-title");
      title.append(star());
      return title;
    }
    function detailSection(title, text, cls = "") {
      const section = node5("section", "nt-detail-section " + cls), head = heading2(title);
      head.prepend(star(true));
      section.append(head, node5("p", "nt-detail-copy", text));
      return section;
    }
    function commissionDetail(panel, v) {
      const detail = node5("article", "nt-detail-scroll nt-commission-detail");
      detail.dataset.scroll = "detail";
      detail.dataset.detail = "commission";
      const collapseButton = button("", "nt-cut nt-collapse", collapse);
      collapseButton.append(icon4("up"), node5("span", "", "\u6536\u8D77\u8BE6\u60C5"));
      detail.append(collapseButton);
      const head = node5("div", "nt-commission-title");
      head.append(star(true), ornamentedTitle(v));
      if (v.status) head.append(badge(v.status));
      detail.append(head);
      if (v.sender) detail.append(node5("p", "nt-sender", "\u6258\u4ED8\u4EBA\uFF1A" + v.sender));
      const objective = node5("section", "nt-objective");
      objective.append(star(true), node5("p", "", v.body));
      detail.append(objective);
      const facts2 = node5("dl", "nt-commission-facts");
      for (const [label, value, name] of [["\u5730\u70B9", v.destination ?? v.location, "pin"], ["\u62A5\u916C", v.reward, "coins"]]) {
        if (!value) continue;
        const row = node5("div");
        row.append(icon4(name), node5("dt", "", label), node5("dd", "", value));
        facts2.append(row);
      }
      detail.append(facts2);
      if (v.region && onOpen) detail.append(locationLink(v));
      panel.append(detail);
    }
    function learningDetail(panel, v) {
      const detail = node5("article", "nt-detail-scroll nt-learning-detail");
      detail.dataset.scroll = "detail";
      detail.dataset.detail = "learning";
      const close = button("", "nt-cut nt-collapse", collapse);
      close.append(icon4("up"), node5("span", "", "\u6536\u8D77\u8BE6\u60C5"));
      const head = node5("div", "nt-learning-heading");
      head.append(icon4("book"), detailHeading(v), node5("p", "", v.actor + " \xB7 " + v.status), rule());
      detail.append(close, head, detailSection("\u6700\u8FD1\u6210\u679C", v.body), detailSection("\u5B66\u4E60\u65B9\u5F0F", v.method));
      if (v.history.length) {
        const section = node5("section", "nt-detail-section"), head2 = heading2("\u7EC3\u4E60\u8BB0\u5F55");
        head2.prepend(star(true));
        section.append(head2, history(v.history));
        detail.append(section);
      }
      panel.append(detail);
    }
    function personDetail(panel, v) {
      const detail = node5("article", "nt-detail-scroll nt-person-detail");
      detail.dataset.scroll = "detail";
      detail.dataset.detail = "person";
      detail.append(back("\u8BA4\u8BC6\u7684\u4EBA"), ornamentedTitle(v));
      const info = node5("p", "nt-person-information", [v.role, v.location].filter(Boolean).join(" \xB7 "));
      if (v.relation) info.append(badge(v.relation));
      detail.append(info);
      const facts2 = node5("div", "nt-known-facts");
      for (const text of v.facts) {
        const p = node5("p", "", text);
        p.prepend(star());
        facts2.append(p);
      }
      facts2.append(rule(true));
      detail.append(facts2);
      if (v.history.length) {
        const section = node5("section", "nt-person-history");
        section.append(heading2("\u76F8\u8BC6\u8BB0\u5F55"), history(v.history, "nt-major-history"));
        detail.append(section);
      }
      if (v.related.length) {
        const links = node5("div", "nt-related");
        links.append(rule(true));
        for (const id of v.related) {
          const task = current.commissions.find((row) => row.id === id);
          const b = button("", "nt-cut nt-related-task", () => openDetail("commission", id));
          b.append(icon4("commission"), node5("strong", "", "\u76F8\u5173\u59D4\u6258"), node5("span", "", task.title), icon4("right", "nt-row-arrow"));
          links.append(b);
        }
        detail.append(links);
      }
      panel.append(detail);
    }
    function mementoDetail(panel, v) {
      const detail = node5("article", "nt-detail-scroll nt-memento-detail" + (v.image ? " has-illustration" : ""));
      detail.dataset.scroll = "detail";
      detail.dataset.detail = "memento";
      detail.append(back("\u6CBF\u9014\u7559\u5FF5"));
      const heading3 = ornamentedTitle(v);
      heading3.prepend(star(true));
      detail.append(heading3);
      const info = node5("p", "nt-memento-information", [v.date, v.location].filter(Boolean).join(" \xB7 "));
      info.prepend(star(true));
      info.append(star(), badge("\u7559\u5FF5"));
      detail.append(info, rule(), node5("p", "nt-memento-description", v.body));
      if (v.image) detail.append(picture(v, "nt-memento-large"));
      if (v.region && onOpen) {
        const place = node5("div", "nt-memento-place");
        place.append(rule(), locationLink(v, "\u5173\u8054\u5730\u70B9\u3000" + v.location));
        detail.append(place);
      }
      panel.append(detail);
    }
    function rightPane() {
      const panel = frame2("nt-right");
      panel.setAttribute("aria-label", "\u6536\u96C6\u4E0E\u8BE6\u60C5");
      if (!view.detail) {
        collection(panel);
        return panel;
      }
      const { kind, id } = view.detail;
      const rows2 = { commission: current.commissions, learning: current.learning, person: current.people, memento: current.mementos }, record = rows2[kind].find((v) => v.id === id);
      ({ commission: commissionDetail, learning: learningDetail, person: personDetail, memento: mementoDetail })[kind](panel, record);
      return panel;
    }
    function render3() {
      const scrolls = new Map([...body.querySelectorAll("[data-scroll]")].map((e) => [e.dataset.scroll, e.scrollTop]));
      const masthead = node5("div", "nt-masthead"), title = node5("h1", "nt-title", "\u65C5\u9014\u624B\u8BB0");
      masthead.setAttribute("aria-hidden", "true");
      for (const cls of ["left", "near", "after", "right"]) {
        const s = star(true);
        s.classList.add("nt-title-star-" + cls);
        masthead.append(s);
      }
      masthead.append(rule());
      body.replaceChildren(masthead, title, leftPane(), rightPane());
      for (const e of body.querySelectorAll("[data-scroll]")) e.scrollTop = scrolls.get(e.dataset.scroll) ?? 0;
      resize();
    }
    function resize() {
      const scale = viewport.clientWidth / 1774;
      sheet.style.transform = "scale(" + scale + ")";
      viewport.style.height = frameHeight * scale + "px";
    }
    reset();
    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    render3();
    return { element: viewport, get view() {
      return view;
    }, setKind(kind) {
      change(() => {
        view.collection = kind === "\u6CBF\u9014\u7559\u5FF5" ? "mementos" : "people";
        view.detail = null;
      });
    }, setNavigation(id) {
      topbar.setActive(id);
    }, refresh(next) {
      const changed = current.scope !== next.scope;
      current = next;
      if (changed) reset();
      else {
        if (view.detail) {
          const rows2 = { commission: current.commissions, learning: current.learning, person: current.people, memento: current.mementos };
          if (!rows2[view.detail.kind].some((v) => v.id === view.detail.id)) view.detail = null;
        }
        if (!current.commissions.some((v) => v.id === view.commission)) view.commission = current.commissions[0]?.id;
      }
      render3();
    }, destroy() {
      observer.disconnect();
      topbar.destroy();
      viewport.remove();
    } };
  }

  // src/world/atlas.json
  var atlas_default = {
    authority: "driver-approved-trial",
    approvalEvidence: "EVD-USER-041; EVD-USER-MAP-LORE-20261026; EVD-USER-ATLAS-LORE-SYNC-20261026",
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
        sight: "\u65E7\u95F8\u4F4D\u4E8E\u5854\u4F26\u6CB3\u4E1C\u5CB8\u652F\u6E20\u65C1\u3002\u4F4E\u4F4D\u652F\u6E20\u5F15\u6CB3\u6C34\u8FDB\u5165\u524D\u6C60\uFF0C\u95F8\u5854\u5916\u7684\u7AD6\u5411\u8F93\u6C34\u7BA1\u5C06\u524D\u6C60\u4E0E\u9AD8\u69FD\u76F8\u8FDE\uFF0C\u7531\u6C34\u5DE5\u9B54\u6CD5\u63D0\u5347\u6CB3\u6C34\u3002\u9AD8\u69FD\u79BB\u5730\u6570\u7C73\uFF0C\u7531\u591A\u5B54\u77F3\u62F1\u652F\u627F\uFF0C\u4E1C\u7AEF\u63A5\u843D\u5730\u77F3\u6E20\uFF0C\u5206\u6C34\u6E20\u7ECF\u8FC7\u7530\u5730\uFF0C\u4F4E\u4F4D\u6392\u6C34\u6E20\u56DE\u5165\u96F7\u6587\u7EB3\u4E0A\u6E38\u7684\u5854\u4F26\u4E3B\u6CB3\u3002\u6D6E\u53F6\u3001\u5C0F\u9C7C\u548C\u7EC6\u6C99\u53EF\u968F\u6C34\u7ECF\u8FC7\u3002\u65B0\u5F0F\u5206\u6D41\u8BBE\u65BD\u627F\u62C5\u4E3B\u8981\u4F9B\u6C34\uFF0C\u90E8\u5206\u65E7\u8BBE\u5907\u4ECD\u5728\u7EF4\u62A4\u3002\u516C\u5171\u6B65\u9053\u4E0E\u65E7\u5DE5\u4F5C\u95F4\u5206\u5F00\uFF1B\u5DE5\u4F5C\u95F4\u5B58\u5728\u6E7F\u6ED1\u53F0\u9636\u3001\u677E\u52A8\u683C\u6805\u548C\u627F\u538B\u7BA1\u9053\u3002\u5F00\u653E\u8303\u56F4\u968F\u8BBE\u5907\u7EF4\u62A4\u72B6\u6001\u8C03\u6574\u3002",
        risk: "\u65E7\u95F8\u5DE5\u4F5C\u95F4\u6709\u6E7F\u6ED1\u53F0\u9636\u3001\u677E\u52A8\u683C\u6805\u548C\u627F\u538B\u7BA1\u9053\uFF1B\u65E7\u62D6\u8239\u9053\u6709\u6D2A\u6C34\u635F\u574F\u53CA\u68D8\u7532\u6CB3\u8725\u3002",
        travel: "\u970D\u5C14\u4E39\u6CB3\u63A5\u7EB3\u4E4C\u5C14\u8FBE\u514B\u6EAA\u540E\u79F0\u5854\u4F26\u6CB3\uFF0C\u7ECF\u963F\u5C14\u7EF4\u514B\u4E0A\u4E0B\u6865\u8857\u533A\u3001\u5854\u4F26\u4E0E\u57C3\u91CC\u6851\u4E24\u6CB3\u69FD\u4E4B\u95F4\u7684\u6CB3\u6D32\uFF0C\u5728\u4E24\u69FD\u590D\u6C47\u540E\u5411\u897F\u5357\u8FDB\u5165\u7EF4\u5C14\u767B\u3002\u8FBE\u4F26\u798F\u5FB7\u4F4D\u4E8E\u4E0B\u6E38\u82B1\u7530\u6CB3\u5F2F\u4E1C\u5CB8\uFF0C\u57CE\u897F\u5730\u65B9\u4E3B\u6865\u63A5\u897F\u5CB8\u519C\u5730\u4E0E\u4F4E\u4E18\u9053\u8DEF\uFF1B\u79D1\u5C14\u6587\u77F3\u6865\u5728\u9547\u4E0A\u6E38\u7EA632\u516C\u91CC\uFF0C\u96F7\u6587\u7EB3\u5728\u4E0B\u6E38\u7EA670\u516C\u91CC\u7684\u4E1C\u5CB8\u6CB3\u9636\u3002\u96F7\u6587\u7EB3\u8857\u574A\u548C\u4ED3\u533A\u5EFA\u5728\u9646\u5730\uFF0C\u7801\u5934\u6CBF\u5CB8\u3002\u5854\u4F26\u6CB3\u7EE7\u7EED\u6CBF\u585E\u4F26\u8FBE\u897F\u4FA7\u4F4E\u5730\u6D41\u5165\u5361\u5FB7\u6E29\u6D77\u6E7E\u3002\u5317\u63A5\u963F\u5C14\u7EF4\u514B\uFF0C\u5357\u63A5\u585E\u4F26\u8FBE\uFF0C\u897F\u63A5\u6258\u4F26\u5CAC\u6D77\u5CB8\uFF1B\u8FBE\u4F26\u798F\u5FB7\u7ECF\u6E29\u5FB7\u5C14\u6751\u81F3\u6258\u4F26\u6E14\u57E0\u7EA645\u516C\u91CC\uFF0C\u9002\u7528\u6B65\u884C\u3001\u9A91\u4E58\u548C\u5339\u914D\u8F7B\u8F66\u3002\u65E7\u95F8\u4E0E\u6C34\u5ECA\u5728\u9547\u4E0B\u6E38\u7EA612\u516C\u91CC\u7684\u704C\u6E89\u652F\u6E20\uFF0C\u6CB3\u8239\u6309\u6C34\u4F4D\u548C\u6865\u5B54\u51C0\u7A7A\u9009\u62E9\u822A\u6BB5\u3002",
        geographyKeys: [
          "/\u5854\u4F26\u6CB3(?!\u4E1C\u6C4A)/u",
          "\u83B1\u6C40\u6751",
          "\u9A6C\u7EF4\u5C14\u6751",
          "\u8BFA\u6797\u6751"
        ]
      },
      {
        id: "REG-02",
        name: "\u585E\u4F26\u8FBE\u4E18\u9675",
        prefix: "SER",
        source: "world/regions/REG-02_SERENDA.md",
        life: "\u8D1D\u5C14\u8499\u7279\u5C5E\u4E8E\u74E6\u5C14\u767B\uFF0C\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u517D\u4EBA\u5BB6\u5EAD\u3002\u9547\u4F4D\u4E8E\u82B1\u6D77\u5357\u4FA7\u7684\u6797\u7F18\u8DEF\u53E3\uFF0C\u5468\u56F4\u7ECF\u8425\u8461\u8404\u56ED\u3001\u679C\u56ED\u3001\u7267\u573A\u548C\u98CE\u8F66\u519C\u5E84\uFF0C\u4F9B\u5E94\u9762\u5305\u3001\u5976\u916A\u3001\u7096\u8C46\u548C\u679C\u54C1\u3002",
        sight: "\u5965\u96F7\u65AF\u82B1\u6D77\u4E0E\u5965\u96F7\u65AF\u5761\u5730\u6307\u540C\u4E00\u5730\u70B9LOC-SER-004\uFF0C\u5206\u5E03\u5728\u5854\u4F26\u6CB3\u4E1C\u4FA7\u7F13\u5761\u4E0E\u6D45\u8C37\uFF0C\u8D1D\u5C14\u8499\u7279\u5411\u5317\u504F\u897F\u7EA611\u516C\u91CC\u62B5\u82B1\u6D77\u5357\u4FA7\u5165\u53E3\u3002\u4E3B\u4F53\u957F\u7EA612\u516C\u91CC\u3001\u5BBD\u7EA63\u20145\u516C\u91CC\uFF0C\u5176\u95F4\u6709\u7EC6\u6EAA\u3001\u8349\u5F84\u3001\u77EE\u6797\u548C\u8349\u5761\uFF0C\u5916\u56F4\u4E3A\u7267\u573A\u3001\u8461\u8404\u56ED\u4E0E\u519C\u5E84\u3002",
        risk: "\u79C1\u4EBA\u7530\u5730\u548C\u517B\u62A4\u533A\u7684\u91C7\u96C6\u5B9E\u884C\u8BB8\u53EF\u7BA1\u7406\uFF1B\u65E7\u5821\u5730\u7A96\u6709\u677E\u52A8\u697C\u677F\uFF0C\u77F3\u7FFC\u8760\u5728\u5730\u7A96\u4E2D\u6816\u606F\u3002",
        travel: "\u5317\u63A5\u7EF4\u5C14\u767B\uFF0C\u897F\u5357\u63A5\u5361\u5FB7\u6E29\uFF0C\u4E1C\u5357\u6797\u9053\u63A5\u7EF4\u65AF\u5361\u3002\u5854\u4F26\u6CB3\u6CBF\u4E18\u9675\u897F\u4FA7\u4F4E\u5730\u5411\u897F\u5357\u6D41\uFF0C\u8D1D\u5C14\u8499\u7279\u4F4D\u4E8E\u4E1C\u4FA7\u82B1\u7530\u4E0E\u6797\u5730\u9053\u8DEF\u4EA4\u4F1A\u5904\u3002\u7F13\u5761\u5E72\u9053\u901A\u666E\u901A\u8F66\u9A6C\uFF1B\u9547\u5317\u504F\u897F\u7EA611\u516C\u91CC\u62B5\u5965\u96F7\u65AF\u82B1\u6D77\u5357\u4FA7\u5165\u53E3\uFF0C\u82B1\u6D77\u5185\u90E8\u4EE5\u8349\u5F84\u548C\u6B65\u9053\u76F8\u63A5\u3002",
        geographyKeys: [
          "\u6D1B\u745E\u6069\u6751",
          "\u5361\u5C14\u6C40\u6751",
          "\u827E\u6587\u8BFA\u6751"
        ]
      },
      {
        id: "REG-03",
        name: "\u963F\u5C14\u7EF4\u514B",
        prefix: "ALV",
        source: "world/regions/REG-03_ALVIK.md",
        life: "\u963F\u5C14\u7EF4\u514B\u4E3A\u5854\u4F26\u6CB3\u4E2D\u4E0A\u6E38\u8F6C\u8FD0\u81EA\u7531\u5E02\uFF0C\u4EBA\u7C7B\u4E0E\u517D\u4EBA\u6570\u91CF\u63A5\u8FD1\u3002\u5317\u90E8\u4E3B\u57CE\u3001\u5357\u6865\u591A\u4F26\u8857\u548C\u6865\u5934\u8857\u533A\u5171\u540C\u7EC4\u6210\u6CBF\u6CB3\u57CE\u5E02\uFF0C\u5C45\u6C11\u7ECF\u8425\u5546\u8D38\u3001\u8BD1\u5199\u3001\u624B\u5DE5\u4E1A\u3001\u533B\u836F\u4E0E\u8F66\u9A6C\u670D\u52A1\u3002",
        sight: "\u7EF4\u7279\u62C9\u6865\u7FA4\u7684\u4E0A\u4E0B\u4E24\u7EC4\u77F3\u62F1\u6865\u8FDE\u63A5\u9646\u5CB8\u3001\u6865\u5934\u8857\u533A\u548C\u4E1C\u4FA7\u6CB3\u6D32\u3002\u5317\u4E3B\u57CE\u4EE5\u897F\u5317\u5CB8\u4E3A\u4E2D\u5FC3\uFF0C\u5357\u6865\u4E0E\u591A\u4F26\u8857\u6CBF\u5CB8\u5C55\u5F00\uFF1B\u623F\u5C4B\u5EFA\u5728\u6CB3\u9636\u548C\u6D32\u5730\uFF0C\u6C34\u9762\u4ECE\u6865\u5B54\u4E0E\u6CB3\u69FD\u901A\u8FC7\u3002\u90E8\u5206\u8001\u6865\u4EE5\u5B9A\u671F\u7EF4\u62A4\u7684\u7B26\u6587\u88C5\u7F6E\u8F85\u52A9\u627F\u91CD\u548C\u5F00\u5408\uFF0C\u90E8\u5206\u65E7\u8DEF\u4F4D\u4E8E\u65B0\u8DEF\u4E0B\u65B9\u3002\u963F\u4F26\u8428\u6D74\u573A\u63D0\u4F9B\u516C\u5171\u7A7A\u95F4\u3001\u72EC\u7ACB\u5C0F\u95F4\u3001\u6D17\u8863\u548C\u70ED\u6C34\u670D\u52A1\uFF0C\u5404\u9879\u6309\u4EF7\u6536\u8D39\u3002",
        risk: "\u65E7\u8857\u6697\u5C94\u548C\u6865\u8DEF\u7ED3\u6784\u7EF4\u62A4\u7A0B\u5EA6\u4E0D\u540C\uFF0C\u5F00\u653E\u8303\u56F4\u6309\u8DEF\u51B5\u7BA1\u7406\u3002",
        travel: "\u5317\u5411\u63A5\u970D\u5C14\u4E39\u6CB3\u4E0E\u4E4C\u5C14\u8FBE\u514B\u6EAA\u7684\u6C47\u6D41\u5E73\u539F\uFF0C\u897F\u5357\u6CBF\u5854\u4F26\u6CB3\u63A5\u7EF4\u5C14\u767B\uFF0C\u4E1C\u63A5\u675C\u5C14\u6587\u5C71\u53E3\u9053\u8DEF\u3002\u5854\u4F26\u6CB3\u5728\u57CE\u5317\u5C71\u524D\u6CB3\u5F2F\u5411\u4E1C\u5206\u51FA\u57C3\u91CC\u6851\u6CB3\uFF1B\u57C3\u91CC\u6851\u6CB3\u6CBF\u6CB3\u6D32\u4E1C\u4FA7\u5411\u5357\u6D41\uFF0C\u63A5\u7EB3\u897F\u5761\u5C71\u6EAA\u540E\u5728\u5357\u6865\u4E0B\u6E38\u590D\u5165\u5854\u4F26\u4E3B\u69FD\uFF0C\u4E24\u6761\u6CB3\u69FD\u4E4B\u95F4\u5206\u5E03\u963F\u5C14\u7EF4\u514B\u6CB3\u6D32\u7684\u7530\u5730\u3001\u6797\u5730\u4E0E\u6865\u5934\u9053\u8DEF\u3002\u4E24\u7EC4\u6865\u8DEF\u5747\u5C5E\u81EA\u7531\u5E02\uFF1B\u66F4\u4E0B\u6E38\u82B1\u7530\u6CB3\u5F2F\u7684\u8FBE\u4F26\u798F\u5FB7\u53E6\u4E3A\u7EF4\u5C14\u767B\u57CE\u9547\u3002\u7801\u5934\u3001\u6CB3\u5CB8\u5E72\u9053\u4E0E\u6865\u8DEF\u5171\u540C\u8854\u63A5\u9646\u8FD0\u548C\u9002\u7528\u6CB3\u6BB5\u7684\u821F\u8FD0\u3002",
        geographyKeys: [
          "\u5854\u4F26\u6CB3\u4E1C\u6C4A",
          "\u963F\u5C14\u7EF4\u514B\u6CB3\u6D32",
          "\u57C3\u5FB7\u6797\u6751",
          "\u745F\u5170\u6C40\u6751",
          "\u57C3\u91CC\u6851\u6CB3"
        ]
      },
      {
        id: "REG-04",
        name: "\u5361\u5FB7\u6E29\u6D77\u6E7E",
        prefix: "CAD",
        source: "world/regions/REG-04_CADWEN.md",
        life: "\u8D1D\u8428\u5C14\u6E2F\u5C5E\u4E8E\u74E6\u5C14\u767B\uFF0C\u4E3B\u6E2F\u4F4D\u4E8E\u5854\u4F26\u6CB3\u53E3\u4E1C\u5CB8\u4E0E\u5185\u6E7E\u5317\u5CB8\u7684\u9646\u5730\uFF0C\u897F\u5CB8\u5CAC\u89D2\u53E6\u6709\u706F\u5854\u3001\u6CCA\u4F4D\u548C\u6E2F\u5C45\u8857\u533A\u3002\u5C45\u6C11\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u517D\u4EBA\u5BB6\u5EAD\uFF0C\u7ECF\u8425\u9020\u8239\u3001\u6355\u9C7C\u3001\u4FEE\u7F51\u3001\u88C5\u5378\u4E0E\u8D38\u6613\uFF1B\u6E7E\u53E3\u5357\u4FA7\u5854\u5C14\u8428\u5C9B\u6709\u8FD1\u5CB8\u6E14\u6751\u3002",
        sight: "\u57C3\u65AF\u4F26\u6D77\u8680\u6D1E\u77F3\u58C1\u4E2D\u6709\u53E4\u8001\u6D77\u517D\u9AA8\u9ABC\uFF0C\u9732\u51FA\u7684\u808B\u9AA8\u4F4D\u4E8E\u6D1E\u9876\u3002\u4F4E\u6F6E\u65F6\u5F00\u653E\u6B65\u9053\u53EF\u89C1\u9AA8\u9ABC\uFF0C\u6D1E\u5185\u76D0\u6676\u968F\u6F6E\u58F0\u5171\u9E23\u3002\u6D1E\u5185\u5B58\u5728\u6DA8\u6F6E\u3001\u6E7F\u6ED1\u548C\u8FF7\u8DEF\u98CE\u9669\u3002\u7EF4\u8428\u6069\u65E7\u5824\u9000\u6F6E\u65F6\u9732\u51FA\u77F3\u8DEF\u548C\u79EF\u6C34\u6D3C\uFF0C\u90E8\u5206\u5824\u6BB5\u88AB\u6D77\u6C34\u7834\u574F\uFF0C\u8FDE\u63A5\u8FD1\u5CB8\u7901\u53F0\u3002",
        risk: "\u6D77\u8680\u6D1E\u548C\u65E7\u5824\u53D7\u6F6E\u4F4D\u5F71\u54CD\uFF0C\u5CA9\u9762\u6709\u79EF\u6C34\u548C\u76D0\u5206\uFF0C\u6D1E\u5185\u6709\u5C94\u9053\uFF0C\u90E8\u5206\u5824\u6BB5\u635F\u6BC1\u3002",
        travel: "\u5854\u4F26\u6CB3\u81EA\u4E1C\u5317\u4F4E\u5730\u4E0B\u884C\uFF0C\u5728\u6E7E\u5934\u5165\u6D77\uFF1B\u4E1C\u5CB8\u6CB3\u6E2F\u3001\u5185\u6E7E\u6D77\u8239\u6CCA\u4F4D\u548C\u897F\u5CB8\u706F\u5854\u6E2F\u533A\u4E4B\u95F4\u4EE5\u5CB8\u8DEF\u3001\u6E21\u8239\u548C\u5730\u65B9\u821F\u8239\u63A5\u9A73\u3002\u5185\u9646\u63A5\u585E\u4F26\u8FBE\uFF0C\u6CBF\u6D77\u4E1C\u63A5\u7EF4\u65AF\u5361\uFF1B\u6CBF\u5CB8\u8239\u81F3\u5357\u6C50\u6CB3\u53E3\u57E0\u6362\u9002\u7528\u6CB3\u8239\uFF0C\u53EF\u7ECF\u5357\u6C50\u6CB3\u8FDB\u5165\u6D1B\u65AF\u6587\u3002\u5317\u5411\u6CBF\u5CB8\u8239\u63A5\u6258\u4F26\u5CAC\uFF0C\u8D1D\u8428\u5C14\u81F3\u6258\u4F26\u6E14\u57E0\u4EE3\u8868\u822A\u7A0B\u7EA6300\u516C\u91CC\uFF1B\u5854\u5C14\u8428\u7531\u6E7E\u5185\u8239\u8DEF\u63A5\u6E2F\u3002\u5B9E\u9645\u822A\u884C\u6309\u6F6E\u6C50\u3001\u6D77\u51B5\u3001\u8239\u671F\u548C\u627F\u8FD0\u6761\u4EF6\u5B89\u6392\u3002",
        geographyKeys: [
          "\u5965\u5FB7\u91CC\u6751",
          "\u7EF4\u5170\u8BFA\u6751"
        ]
      },
      {
        id: "REG-05",
        name: "\u970D\u5C14\u4E39\u5E73\u539F",
        prefix: "HOR",
        source: "world/regions/REG-05_HORDAN.md",
        life: "\u970D\u5C14\u4E39\u4E3A\u683C\u62C9\u591A\u514B\u6838\u5FC3\u5E73\u539F\u3002\u4E4C\u5C14\u8FBE\u514B\u4F4D\u4E8E\u970D\u5C14\u4E39\u6CB3\u4EE5\u897F\u7684\u9646\u5730\u6CB3\u9636\uFF0C\u4EE5\u517D\u4EBA\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u4EBA\u7C7B\u548C\u534A\u517D\u4EBA\u5BB6\u5EAD\uFF1B\u5468\u56F4\u5206\u5E03\u519C\u7267\u7530\u5730\u3001\u5854\u697C\u6751\u843D\u548C\u9053\u8DEF\u96C6\u5E02\u3002\u897F\u5317\u666E\u901A\u6D77\u6E7E\u7684\u683C\u5C14\u6C40\u6E14\u6751\u7ECF\u8425\u6355\u9C7C\u3001\u6652\u7F51\u548C\u519C\u7267\u7269\u8D44\u4EA4\u6362\uFF0C\u63D0\u4F9B\u6751\u7EA7\u98DF\u5BBF\u4E0E\u57FA\u672C\u8865\u7ED9\u3002",
        sight: "\u77F3\u73AF\u7531\u6570\u5341\u5EA7\u53E4\u4EE3\u7ACB\u77F3\u7EC4\u6210\uFF0C\u4E3B\u4F53\u8DE8\u7EA62\u516C\u91CC\uFF0C\u6700\u9AD8\u7ACB\u77F3\u8FD140\u7C73\u3002\u77F3\u9762\u4E3A\u6DF1\u7070\u8272\uFF0C\u6709\u98CE\u8680\u69FD\u3001\u52A0\u5DE5\u75D5\u8FF9\u3001\u5730\u8863\u53CA\u9E1F\u5DE2\u3002\u5B8C\u6574\u5EFA\u9020\u5DE5\u6CD5\u5C1A\u65E0\u5B9A\u8BBA\u3002\u8D77\u98CE\u65F6\u69FD\u9699\u548C\u77F3\u95F4\u7A7A\u8154\u53D1\u58F0\uFF0C\u98CE\u505C\u540E\u505C\u6B62\u3002\u7EF4\u62A4\u6B65\u9053\u7ECF\u8FC7\u5916\u73AF\u548C\u89C2\u666F\u5761\uFF0C\u90E8\u5206\u77F3\u5EA7\u677E\u52A8\uFF0C\u9876\u90E8\u4E0E\u52A8\u7269\u5DE2\u533A\u672A\u5217\u5165\u666E\u901A\u6B65\u9053\u3002",
        risk: "\u77F3\u73AF\u90E8\u5206\u77F3\u5EA7\u677E\u52A8\uFF0C\u9876\u90E8\u53CA\u9E1F\u7C7B\u5DE2\u533A\u4E0D\u5C5E\u4E8E\u666E\u901A\u7EF4\u62A4\u6B65\u9053\u3002",
        travel: "\u970D\u5C14\u4E39\u6CB3\u4ECE\u5317\u90E8\u5185\u9646\u4E18\u5730\u6CBF\u9636\u5730\u5411\u5357\u6D41\uFF1B\u4E4C\u5C14\u8FBE\u514B\u6EAA\u7A7F\u8FC7\u9996\u90FD\u5357\u4FA7\u519C\u7267\u5E73\u539F\u5411\u4E1C\u6C47\u5165\uFF0C\u6C47\u53E3\u4EE5\u4E0B\u79F0\u5854\u4F26\u6CB3\uFF0C\u518D\u901A\u5F80\u963F\u5C14\u7EF4\u514B\u3002\u4E4C\u5C14\u8FBE\u514B\u6EAA\u6E21\u573A\u5728\u57CE\u5357\u7EA66\u516C\u91CC\u3002\u5357\u63A5\u963F\u5C14\u7EF4\u514B\uFF0C\u4E1C\u5317\u63A5\u5E03\u96F7\u5361\uFF1B\u5E72\u9053\u9002\u7528\u666E\u901A\u8F66\u9A6C\uFF0C\u53EF\u822A\u6CB3\u6BB5\u6709\u5730\u65B9\u6E21\u8239\u3002\u4E4C\u5C14\u8FBE\u514B\u5411\u897F\u5317\u6CBF\u519C\u7267\u652F\u8DEF\u7EA685\u516C\u91CC\u81F3\u683C\u5C14\u6C40\uFF0C\u518D\u6CBF\u540C\u5CB8\u7EA64\u516C\u91CC\u81F3\u767D\u783E\u6E7E\uFF0C\u6D77\u6EE9\u672B\u6BB5\u6B65\u884C\u3002",
        geographyKeys: [
          "\u970D\u5C14\u4E39\u6CB3",
          "\u4E4C\u5C14\u8FBE\u514B\u6EAA",
          "\u5E03\u4F26\u8FBE\u6751",
          "\u51EF\u5FB7\u6069\u6751"
        ]
      },
      {
        id: "REG-06",
        name: "\u5E03\u96F7\u5361\u9AD8\u5730",
        prefix: "BRE",
        source: "world/regions/REG-06_BREKA.md",
        life: "\u79D1\u5C14\u74E6\u6069\u4E3A\u5E03\u96F7\u5361\u9646\u4E0A\u5C71\u80A9\u53F0\u5730\u7684\u683C\u62C9\u591A\u514B\u805A\u5C45\u9547\uFF0C\u4F4D\u4E8E\u60AC\u57CE\u897F\u5357\u4E0B\u65B9\uFF0C\u4EE5\u517D\u4EBA\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u4EBA\u7C7B\u4E0E\u6DF7\u8840\u5C45\u6C11\u3002\u5C45\u6C11\u7ECF\u8425\u7EC7\u9020\u3001\u8FD0\u8F93\u3001\u5C71\u9053\u670D\u52A1\u548C\u53E4\u57CE\u7EF4\u62A4\uFF0C\u8C37\u5730\u7530\u5703\u4E0E\u5C71\u524D\u9053\u8DEF\u63D0\u4F9B\u65E5\u5E38\u8865\u7ED9\u3002",
        sight: "\u827E\u745E\u745F\u5C14\u53E4\u57CE\u5BBD\u7EA61.5\u516C\u91CC\uFF0C\u5EFA\u4E8E\u5CE1\u8C37\u4E0A\u7A7A\u7684\u60AC\u6D6E\u5CA9\u53F0\uFF0C\u7531\u53E4\u4EE3\u9635\u5217\u627F\u6258\uFF0C\u4F5C\u7528\u8303\u56F4\u56FA\u5B9A\u4E8E\u8BE5\u5CE1\u8C37\u3002\u4E2D\u592E\u9AD8\u5854\u3001\u77F3\u697C\u53CA\u90E8\u5206\u5C4B\u9876\u4ECD\u5B8C\u6574\uFF0C\u5916\u7F18\u53EF\u89C1\u6B8B\u5899\u3001\u65AD\u5ECA\u4E0E\u65AD\u6865\uFF1B\u7EF4\u62A4\u533A\u5206\u5E03\u5728\u5916\u73AF\u3002\u7EF4\u62A4\u8005\u638C\u63E1\u5DF2\u77E5\u88C5\u7F6E\u7684\u68C0\u67E5\u65B9\u6CD5\uFF0C\u5B8C\u6574\u5EFA\u9020\u6280\u672F\u672A\u77E5\u3002\u5730\u9762\u79D1\u5C14\u74E6\u6069\u7531\u5C71\u6CC9\u3001\u4E95\u6C34\u4E0E\u77ED\u5F15\u6C34\u6C9F\u4F9B\u6C34\u3002\u60AC\u57CE\u5C4B\u9762\u96C6\u96E8\u6D41\u5165\u84C4\u6C34\u6C60\uFF0C\u65F1\u65F6\u7531\u5347\u964D\u8BBE\u65BD\u8865\u8FD0\u996E\u6C34\uFF1B\u591A\u4F59\u6C34\u6392\u5165\u4E0B\u65B9\u897F\u4FA7\u6EAA\u8C37\uFF0C\u6C47\u5165\u970D\u5C14\u4E39\u2014\u5854\u4F26\u6C34\u7CFB\u3002",
        risk: "\u53E4\u57CE\u5185\u6709\u65AD\u5ECA\u3001\u5730\u4E0B\u88C5\u7F6E\u53CA\u4F1A\u5BF9\u8FDB\u5165\u8005\u4F5C\u51FA\u53CD\u5E94\u7684\u65E7\u5B88\u536B\uFF1B\u5927\u98CE\u53EF\u80FD\u5BFC\u81F4\u5347\u964D\u8231\u548C\u98DE\u884C\u5BA2\u8FD0\u505C\u8FD0\u3002",
        travel: "\u897F\u63A5\u970D\u5C14\u4E39\uFF0C\u5357\u63A5\u675C\u5C14\u6587\uFF0C\u4E1C\u5317\u63A5\u8BFA\u5C14\u7EF4\u514B\u3002\u79D1\u5C14\u74E6\u6069\u5317\u4FA7\u7684\u76D8\u5C71\u9053\u8DEF\u7ECF\u5CE1\u5317\u56FA\u5B9A\u77F3\u6865\u548C\u8FDC\u4FA7\u5730\u9762\u5C71\u810A\u63A5\u514B\u96F7\u65AF\u5C71\u9053\uFF0C\u518D\u8FDB\u5165\u51BB\u539F\u5357\u7F18\u3002\u6D6E\u57CE\u60AC\u4E8E\u5CE1\u8C37\u5185\uFF0C\u5730\u9762\u8DEF\u7EBF\u4ECE\u5176\u5317\u4FA7\u5C71\u810A\u7ECF\u8FC7\u3002\u7EF4\u5FB7\u62C9\u7AD9\u4EE5\u5347\u964D\u8231\u8FDE\u63A5\u53E4\u57CE\uFF0C\u72EE\u9E6B\u9A7F\u573A\u7ECF\u8425\u6709\u6761\u4EF6\u7684\u77ED\u7A0B\u642D\u4E58\uFF1B\u90E8\u5206\u5C71\u5F84\u4E0D\u901A\u8F66\u8F86\u3002",
        geographyKeys: [
          "\u74E6\u5C14\u6069\u6751",
          "\u591A\u96F7\u6069\u6751"
        ]
      },
      {
        id: "REG-07",
        name: "\u675C\u5C14\u6587\u5C71\u8109",
        prefix: "DUR",
        source: "world/regions/REG-07_DURVEN.md",
        life: "\u6258\u5C14\u6587\u4EE5\u4EBA\u7C7B\u548C\u517D\u4EBA\u4E3A\u4E3B\uFF0C\u54C8\u5FB7\u6797\u77F3\u5385\u4E3A\u77EE\u4EBA\u81EA\u6CBB\u805A\u843D\u3002\u4E24\u5730\u4EA4\u6362\u98DF\u54C1\u3001\u91D1\u5C5E\u3001\u5668\u5177\u548C\u6280\u672F\uFF0C\u77F3\u5385\u8BBE\u901A\u98CE\u3001\u4F9B\u6392\u6C34\u53CA\u516C\u5171\u901A\u9053\u3002",
        sight: "\u6676\u6E56\u5CA9\u5385\u957F\u7EA61400\u7C73\uFF0C\u6700\u9AD8\u5904\u8DDD\u6C34\u9762\u8D85\u8FC7100\u7C73\u3002\u6D45\u8272\u6676\u7C07\u751F\u4E8E\u5CA9\u58C1\u53CA\u7A79\u9876\uFF0C\u90E8\u5206\u6676\u67F1\u5EF6\u4F38\u81F3\u6E56\u8FB9\u3002\u6E56\u6C34\u6E05\u6F88\uFF0C\u6DF1\u6C34\u5448\u84DD\u8272\u3002\u7A79\u9876\u88C2\u9699\u4E0E\u5CA9\u5B54\u901A\u5411\u5C71\u5761\uFF0C\u65E5\u95F4\u5149\u7EBF\u7ECF\u6676\u9762\u6298\u5C04\u8FDB\u5165\u5CA9\u5385\uFF0C\u591C\u95F4\u7167\u660E\u7531\u6B65\u9053\u706F\u5177\u63D0\u4F9B\u3002\u7EF4\u62A4\u533A\u6709\u5165\u53E3\u3001\u5CB8\u8FB9\u6B65\u9053\u548C\u89C2\u89C8\u5C0F\u8239\uFF0C\u8239\u53EA\u53D7\u6C34\u60C5\u4E0E\u8F7D\u91CD\u9650\u5236\u3002\u975E\u7EF4\u62A4\u533A\u6709\u6DF1\u6C34\u3001\u6E7F\u6ED1\u5CA9\u9762\u548C\u672A\u6D4B\u652F\u6D1E\uFF0C\u91C7\u96C6\u6676\u7C07\u9700\u8BB8\u53EF\u3002",
        risk: "\u975E\u7EF4\u62A4\u5730\u4E0B\u533A\u5B58\u5728\u6DF1\u6C34\u3001\u6E7F\u5CA9\u3001\u7A7A\u6C14\u4E0E\u652F\u62A4\u95EE\u9898\uFF0C\u6676\u7C07\u91C7\u96C6\u53D7\u7BA1\u7406\u3002",
        travel: "\u5317\u63A5\u5E03\u96F7\u5361\uFF0C\u897F\u63A5\u963F\u5C14\u7EF4\u514B\uFF0C\u4E1C\u7ECF\u5965\u5C14\u82AC\u5C71\u53E3\u63A5\u57C3\u65AF\u51EF\u5C14\uFF0C\u5357\u63A5\u6D1B\u65AF\u6587\u3002\u675C\u5C14\u6587\u4E3B\u810A\u5206\u9694\u4E1C\u897F\u6D41\u57DF\uFF1A\u897F\u5761\u5C71\u6EAA\u5165\u5854\u4F26\u6CB3\u53CA\u57C3\u91CC\u6851\u6CB3\uFF0C\u4E1C\u9E93\u8FBE\u5C14\u7EB3\u6CB3\u6C47\u96C6\u51BB\u539F\u5357\u7F18\u6765\u6C34\uFF0C\u6CBF\u8352\u539F\u897F\u7F18\u6CB3\u8C37\u5357\u4E0B\uFF0C\u5728\u6E56\u5317\u5CB8\u9AD8\u4F4D\u5CA9\u53F0\u5206\u4E3A\u77ED\u6025\u6D41\u5317\u53E3\u4E0E\u827E\u6D1B\u6069\u6CB3\uFF1B\u827E\u6D1B\u6069\u6CB3\u6CBF\u6797\u7F18\u53F0\u5730\u6C47\u585E\u62C9\u6587\u6CB3\uFF0C\u518D\u5171\u540C\u7ECF\u585E\u62C9\u6587\u7011\u5E03\u5165\u6E56\u3002\u6258\u5C14\u6587\u5750\u843D\u53EF\u901A\u5546\u8DEF\u7684\u5C71\u524D\u5BBD\u8C37\uFF0C\u54C8\u5FB7\u6797\u77F3\u5385\u7684\u5730\u9762\u5165\u53E3\u5728\u5CA9\u5761\uFF1B\u5730\u9762\u5546\u8DEF\u4E0E\u7EF4\u62A4\u96A7\u9053\u8FDE\u63A5\u805A\u843D\uFF0C\u821F\u8239\u6309\u5404\u6CB3\u6BB5\u6C34\u4F4D\u3001\u6D41\u901F\u548C\u51C0\u7A7A\u63A5\u9A73\u3002",
        geographyKeys: [
          "\u8FBE\u5C14\u7EB3\u6CB3",
          "\u82AC\u5FB7\u91CC\u6751",
          "\u963F\u7EF4\u5C14\u6751"
        ]
      },
      {
        id: "REG-08",
        name: "\u7EF4\u65AF\u5361\u68EE\u6797",
        prefix: "VIS",
        source: "world/regions/REG-08_VISKA.md",
        life: "\u897F\u90E8\u5E03\u4F26\u7EF4\u5C14\u5C5E\u4E8E\u74E6\u5C14\u767B\uFF0C\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u5C11\u91CF\u517D\u4EBA\u3001\u534A\u517D\u4EBA\u548C\u5176\u4ED6\u5C45\u6C11\u3002\u4E1C\u90E8\u6797\u95F4\u6751\u843D\u5171\u540C\u7EF4\u62A4\u9053\u8DEF\u3002\u4E3B\u8981\u4EA7\u4E1A\u4E3A\u6728\u6750\u3001\u6811\u8102\u3001\u836F\u8349\u548C\u6728\u5668\u3002\u897F\u90E8\u68EE\u6797\u5357\u7F18\u7684\u8D5B\u6D1B\u6069\u6E14\u6751\u4EE5\u8FD1\u5CB8\u6355\u9C7C\u3001\u4FEE\u7F51\u548C\u6728\u8239\u4FEE\u8865\u4E3A\u751F\uFF0C\u6751\u7EA7\u98DF\u5BBF\u8865\u7ED9\u6709\u9650\u3002",
        sight: "\u5DE8\u6811\u9AD8\u7EA6650\u7C73\uFF0C\u6811\u5E72\u6700\u5BBD\u5904\u8FD1100\u7C73\uFF0C\u6811\u51A0\u5C55\u5F00\u7EA62\u516C\u91CC\uFF0C\u9AD8\u4E8E\u9644\u8FD1\u5C71\u810A\u3002\u677F\u6839\u5411\u5468\u56F4\u6797\u5730\u5EF6\u4F38\uFF0C\u90E8\u5206\u677F\u6839\u9AD8\u4E8E\u623F\u5C4B\uFF0C\u6839\u95F4\u5206\u5E03\u8349\u5761\u3001\u6EAA\u6D41\u548C\u6797\u6728\u3002\u6811\u6839\u751F\u957F\u4F7F\u90E8\u5206\u65E7\u8DEF\u62AC\u5347\u6216\u6539\u7EBF\uFF0C\u6728\u6808\u9053\u6CBF\u7A33\u5B9A\u90E8\u4F4D\u4FEE\u5EFA\u3002",
        risk: "\u65E7\u836F\u5703\u6709\u7834\u635F\u6E29\u5BA4\uFF0C\u6DF1\u6797\u90E8\u5206\u9053\u8DEF\u7F3A\u5C11\u7EF4\u62A4\uFF1B\u6797\u5730\u53D6\u6750\u53CA\u91C7\u96C6\u9700\u8BB8\u53EF\u3002",
        travel: "\u897F\u63A5\u5361\u5FB7\u6E29\uFF0C\u897F\u5317\u6797\u7F18\u90BB\u585E\u4F26\u8FBE\uFF0C\u4E1C\u5317\u5C40\u90E8\u6797\u7F18\u90BB\u7EF4\u7EB3\u5C14\u6E56\u897F\u5CB8\uFF1B\u4E1C\u90E8\u4E0E\u4E1C\u5357\u90E8\u7684\u6797\u5730\u9646\u8DEF\u63A5\u6D1B\u65AF\u6587\u897F\u5357\u4F4E\u4E18\u53CA\u5361\u585E\u62C9\u3002\u5DE8\u6811\u6839\u95F4\u6CC9\u6EAA\u4E0E\u6797\u5761\u6765\u6C34\u6CBF\u5357\u5411\u4F4E\u5730\u5165\u6D77\uFF0C\u6797\u5730\u6CB3\u53E3\u3001\u6C99\u5CB8\u548C\u6797\u7F18\u6751\u843D\u7531\u6CBF\u6D77\u9053\u8DEF\u76F8\u8FDE\u3002\u6B63\u5F0F\u6797\u9053\u90E8\u5206\u901A\u8F66\uFF0C\u6839\u95F4\u5C0F\u8DEF\u9002\u7528\u6B65\u884C\u53CA\u5408\u9002\u9A91\u4E58\uFF0C\u74E6\u4F26\u6EAA\u8425\u5730\u63D0\u4F9B\u8425\u4F4D\u3002\u5E03\u4F26\u7EF4\u5C14\u5357\u504F\u897F\u6CBF\u6797\u9053\u7EA636\u516C\u91CC\u81F3\u8D5B\u6D1B\u6069\u6E14\u6751\uFF0C\u518D\u6CBF\u540C\u5CB8\u7EA63\u516C\u91CC\u81F3\u6749\u5F71\u6D77\u6EE9\uFF1B\u6D77\u5CB8\u652F\u7EBF\u4E0E\u6797\u9053\u76F8\u63A5\u3002",
        geographyKeys: [
          "\u6D1B\u745F\u6069\u6751",
          "\u827E\u5170\u5FB7\u6751"
        ]
      },
      {
        id: "REG-09",
        name: "\u6D1B\u65AF\u6587\u6E56\u533A",
        prefix: "LOS",
        source: "world/regions/REG-09_LOSVEN.md",
        life: "\u6885\u745E\u767B\u4E3A\u7EF4\u7EB3\u5C14\u6E56\u4E2D\u90E8\u504F\u897F\u7684\u56FA\u5B9A\u5CA9\u571F\u5C9B\u57CE\uFF0C\u4EBA\u7C7B\u4E0E\u517D\u4EBA\u6570\u91CF\u63A5\u8FD1\uFF1B\u8857\u574A\u3001\u5E02\u573A\u548C\u516C\u5171\u7A7A\u95F4\u5EFA\u4E8E\u5C9B\u4E0A\u9646\u5730\uFF0C\u7801\u5934\u6CBF\u5C9B\u5CB8\u8BBE\u7F6E\u3002\u5361\u585E\u62C9\u5728\u6E56\u897F\u5357\u81F3\u5357\u6D77\u4E4B\u95F4\u7684\u6797\u7F18\u53F0\u5730\u6E2F\u6E7E\uFF0C\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u7ECF\u8425\u4ED3\u50A8\u3001\u98DF\u5BBF\u548C\u5730\u65B9\u8239\u8D27\u4EA4\u63A5\u3002\u5357\u6C50\u6CB3\u53E3\u57E0\u53E6\u5728\u4E3B\u51FA\u6E56\u6CB3\u897F\u5CB8\uFF0C\u627F\u62C5\u6CB3\u6D77\u6362\u8239\u4E0E\u6E14\u76D0\u8F6C\u8FD0\u3002",
        sight: "\u8FBE\u5C14\u7EB3\u6CB3\u6CBF\u5317\u4FA7\u5C71\u524D\u6CB3\u8C37\u62B5\u6E56\u5317\u5CB8\u9AD8\u4F4D\u5CA9\u53F0\uFF0C\u4E00\u80A1\u7ECF\u77ED\u6025\u6D41\u5317\u53E3\u5165\u6E56\uFF0C\u827E\u6D1B\u6069\u6CB3\u6CBF\u6797\u7F18\u53F0\u5730\u5411\u4E1C\uFF1B\u74E6\u8428\u6069\u5357\u9E93\u7684\u585E\u62C9\u6587\u6CB3\u63A5\u7EB3\u827E\u6D1B\u6069\u6CB3\u540E\uFF0C\u4ECE\u4E1C\u5317\u5CA9\u574E\u7ECF\u585E\u62C9\u6587\u7011\u5E03\u5171\u540C\u8DCC\u5165\u6E56\u76C6\uFF0C\u6797\u6728\u4E0E\u7530\u5703\u6CBF\u6CB3\u8C37\u5206\u5E03\u3002\u6885\u745E\u767B\u5C9B\u57CE\u7ECF\u4F4E\u5E73\u7F13\u5F27\u591A\u5B54\u77F3\u62F1\u6865\u53CA\u5CB8\u4E0A\u5F15\u9053\u63A5\u897F\u5317\u5CB8\u5165\u53E3\u3002\u5965\u857E\u6069\u6D6E\u5C9B\u7FA4\u4E0E\u56FA\u5B9A\u5C9B\u57CE\u5206\u5F00\uFF0C\u662F\u6839\u5C42\u5939\u6301\u6CE5\u571F\u548C\u843D\u53F6\u7684\u5C0F\u578B\u690D\u88AB\u5C9B\uFF0C\u6700\u5927\u5BBD\u8FD1100\u7C73\uFF1B\u50A8\u6C14\u7EC4\u7EC7\u4E0E\u81EA\u7136\u9B54\u529B\u589E\u5F3A\u6D6E\u529B\u548C\u6839\u5C42\u5F3A\u5EA6\uFF0C\u5C9B\u5C7F\u968F\u98CE\u3001\u6C34\u6D41\u548C\u6D45\u6EE9\u7F13\u6162\u79FB\u52A8\uFF0C\u5927\u5C9B\u53D7\u6DF1\u6839\u9650\u5236\u7559\u5728\u6E56\u76C6\uFF0C\u7EF4\u62A4\u8005\u6838\u5B9A\u767B\u4E34\u5904\u4E0E\u627F\u8F7D\u3002",
        risk: "\u6D6E\u5C9B\u53D7\u98CE\u3001\u6C34\u6D41\u3001\u6D45\u6EE9\u548C\u6839\u5C42\u9650\u5236\uFF0C\u767B\u5C9B\u6709\u627F\u8F7D\u8981\u6C42\uFF1B\u74E6\u96F7\u8428\u9057\u5740\u6C34\u4E0B\u8FDB\u5165\u9700\u9002\u7528\u88C5\u5907\u548C\u8DEF\u7EBF\u4FDD\u969C\u3002",
        travel: "\u897F\u63A5\u7EF4\u65AF\u5361\uFF0C\u5317\u63A5\u675C\u5C14\u6587\uFF0C\u4E1C\u63A5\u7D22\u62C9\u6069\uFF1B\u5317\u53E3\u5165\u8FBE\u5C14\u7EB3\u6CB3\u7684\u4E00\u80A1\u6765\u6C34\uFF0C\u827E\u6D1B\u6069\u6CB3\u5728\u9AD8\u4F4D\u5CA9\u53F0\u4E0E\u585E\u62C9\u6587\u6CB3\u6C47\u6D41\u540E\u4ECE\u4E1C\u5317\u7011\u5E03\u5165\u6E56\uFF0C\u6E56\u6C34\u7ECF\u5357\u6C50\u6CB3\u5411\u5357\u7A7F\u8FC7\u4F4E\u5730\u5165\u666E\u901A\u6D77\u6E7E\u3002\u4F4E\u5E73\u591A\u5B54\u77F3\u62F1\u6865\u8FDE\u63A5\u5C9B\u897F\u5317\u7AEF\u4E0E\u6E56\u897F\u5317\u5CB8\uFF0C\u6B65\u884C\u3001\u9002\u7528\u9A91\u4E58\u4E0E\u8F66\u8F86\u6CBF\u6865\u8DEF\u8FDB\u51FA\uFF1B\u5C9B\u5CB8\u3001\u6865\u5B54\u4E0E\u5357\u4FA7\u51FA\u6C34\u822A\u9053\u76F8\u901A\u3002\u6885\u745E\u767B\u7ECF\u6865\u8DEF\u53CA\u6E56\u5CB8\u9053\u8DEF\u81F3\u5361\u585E\u62C9\u7EA680\u516C\u91CC\u4E3A\u603B\u9646\u7A0B\uFF0C\u5361\u585E\u62C9\u5411\u4E1C\u6CBF\u5357\u5CB8\u9053\u8DEF\u7EA645\u516C\u91CC\u81F3\u5357\u6C50\u6CB3\u53E3\u57E0\uFF1B\u9E25\u6E7E\u6D77\u6EE9\u5728\u57E0\u5934\u4EE5\u5357\u7684\u6CB3\u53E3\u897F\u5CB8\uFF0C\u6CBF\u540C\u5CB8\u6D77\u4FA7\u7EA64\u516C\u91CC\u3002\u5361\u5FB7\u6E29\u6CBF\u6D77\u8F6C\u5357\u6C50\u6CB3\u5230\u6885\u745E\u767B\u7EA6900\u516C\u91CC\u4E3A\u5B8C\u6574\u6C34\u8DEF\uFF0C\u6CB3\u6D77\u6309\u8239\u578B\u6362\u4E58\u3002\u585E\u62C9\u6587\u7011\u5E03\u5728\u4E1C\u5317\u5165\u6E56\u53E3\uFF0C\u4E0A\u6E38\u6CB3\u8C37\u4E0E\u6E56\u9762\u4E4B\u95F4\u7ECF\u9646\u8DEF\u63A5\u9A73\u3002",
        geographyKeys: [
          "\u7EF4\u7EB3\u5C14\u6E56",
          "\u5357\u6C50\u6CB3",
          "\u8D1D\u745E\u6069\u6751",
          "\u7EF4\u5170\u745F\u6751",
          "\u827E\u6D1B\u6069\u6CB3"
        ]
      },
      {
        id: "REG-10",
        name: "\u57C3\u65AF\u51EF\u5C14\u8352\u539F",
        prefix: "ESK",
        source: "world/regions/REG-10_ESKEL.md",
        life: "\u5FB7\u5170\u745F\u4F4D\u4E8E\u8FBE\u5C14\u7EB3\u6CB3\u4E1C\u4FA7\u8F83\u9AD8\u7684\u6CB3\u9636\uFF0C\u4EE5\u4E95\u6C34\u3001\u84C4\u6C34\u4E0E\u5F15\u6C34\u7530\u5703\u7EF4\u6301\u805A\u843D\uFF0C\u4EBA\u7C7B\u4E0E\u517D\u4EBA\u6570\u91CF\u63A5\u8FD1\u3002\u5C45\u6C11\u7ECF\u8425\u8F6C\u8FD0\u3001\u4FEE\u8F66\u3001\u517B\u755C\u3001\u77F3\u5DE5\u548C\u5411\u5BFC\u670D\u52A1\u3002\u8352\u539F\u897F\u7F18\u8FBE\u5C14\u7EB3\u6CB3\u3001\u4E1C\u7F18\u585E\u62C9\u6587\u6CB3\u65C1\u6709\u7EFF\u5E26\u3001\u6751\u843D\u4E0E\u9A7F\u9053\uFF0C\u6CB3\u95F4\u5CA9\u53F0\u4E0E\u534A\u57CB\u65E7\u57CE\u7684\u8179\u5730\u8F83\u5E72\u71E5\u3002",
        sight: "\u9636\u57CE\u4E3A\u5E9F\u5F03\u516C\u5171\u5EFA\u7B51\u7FA4\uFF0C\u6CBF\u5CA9\u53F0\u5EF6\u4F38\u7EA61.2\u516C\u91CC\uFF0C\u4E2D\u592E\u5DE8\u95E8\u9732\u51FA\u5730\u9762\u7684\u90E8\u5206\u8FD150\u7C73\u9AD8\uFF0C\u8F83\u4F4E\u9662\u573A\u53CA\u90E8\u5206\u5E93\u5BA4\u88AB\u6C99\u571F\u63A9\u57CB\u3002\u9053\u8DEF\u6539\u7EBF\u3001\u6765\u6C34\u53D8\u5316\u548C\u98CE\u79EF\u5BFC\u81F4\u4F4E\u5904\u7A7A\u95F4\u505C\u7528\u3002\u9057\u5B58\u663E\u793A\u5176\u66FE\u7528\u4E8E\u96C6\u4F1A\u3001\u50A8\u8FD0\u53CA\u84C4\u6C34\uFF0C\u7ED3\u6784\u542B\u53E4\u4EE3\u5DE5\u7A0B\u548C\u9B54\u6CD5\u6784\u4EF6\uFF0C\u5177\u4F53\u5EFA\u9020\u5E74\u4EE3\u672A\u786E\u5B9A\u3002\u7EF4\u62A4\u533A\u5305\u62EC\u4E0A\u5C42\u5916\u5ECA\u548C\u89C2\u666F\u9662\uFF0C\u534A\u57CB\u5E93\u5BA4\u3001\u677E\u52A8\u9636\u57FA\u53CA\u4F4E\u5904\u901A\u9053\u9700\u8981\u8FDB\u5165\u8BB8\u53EF\u4E0E\u7167\u660E\u3002",
        risk: "\u65E7\u5740\u534A\u57CB\u5E93\u5BA4\u3001\u677E\u52A8\u9636\u57FA\u548C\u4F4E\u901A\u9053\u9700\u8FDB\u5165\u8BB8\u53EF\u4E0E\u7167\u660E\uFF0C\u5E72\u6CB3\u5E8A\u53EF\u5728\u964D\u96E8\u540E\u8FC7\u6C34\u3002",
        travel: "\u897F\u7ECF\u5965\u5C14\u82AC\u5C71\u53E3\u63A5\u675C\u5C14\u6587\uFF0C\u4E1C\u6CBF\u585E\u62C9\u6587\u6CB3\u8C37\u548C\u5C71\u524D\u9053\u8DEF\u63A5\u74E6\u8428\u6069\u5357\u90E8\uFF0C\u5357\u63A5\u7D22\u62C9\u6069\u3002\u8FBE\u5C14\u7EB3\u6CB3\u6CBF\u897F\u7F18\u5357\u4E0B\u5230\u6E56\u5317\u5CB8\u5CA9\u53F0\uFF0C\u5206\u4E3A\u76F4\u63A5\u5165\u6E56\u7684\u5317\u53E3\u548C\u6CBF\u9AD8\u53F0\u4E1C\u884C\u7684\u827E\u6D1B\u6069\u6CB3\uFF1B\u585E\u62C9\u6587\u6CB3\u6CBF\u4E1C\u7F18\u8F6C\u897F\u5357\u63A5\u7EB3\u827E\u6D1B\u6069\u6CB3\uFF0C\u7ECF\u7011\u5E03\u5171\u540C\u5165\u6E56\u4E1C\u5317\uFF0C\u4E24\u4FA7\u6CB3\u9636\u9053\u8DEF\u8FDE\u63A5\u7530\u5703\u548C\u6751\u9547\u3002\u4E2D\u592E\u53E4\u9053\u4E0E\u8BFA\u7EF4\u6069\u4E95\u7AD9\u670D\u52A1\u5E72\u71E5\u5CA9\u53F0\uFF0C\u8D6B\u7F57\u6069\u65E7\u6CB3\u6BB5\u4ECD\u4E3A\u5B63\u8282\u6C9F\uFF0C\u8F66\u8F86\u6309\u5404\u6BB5\u5730\u9762\u6761\u4EF6\u901A\u884C\u3002",
        geographyKeys: [
          "\u5854\u745E\u5C14\u6751",
          "\u8D1D\u6D1B\u6069\u6751"
        ]
      },
      {
        id: "REG-11",
        name: "\u7D22\u62C9\u6069\u6C99\u6D77",
        prefix: "SOL",
        source: "world/regions/REG-11_SORAN.md",
        life: "\u8428\u7EF4\u5170\u5750\u843D\u6C99\u6D77\u5357\u90E8\u6CC9\u6E56\u5317\u5CB8\u7684\u786C\u5B9E\u57CE\u53F0\uFF0C\u4EE5\u6CC9\u773C\u3001\u5730\u4E0B\u4E95\u3001\u84C4\u6C34\u6C60\u548C\u6C34\u6E20\u4F9B\u6C34\uFF0C\u4EBA\u7C7B\u4E0E\u517D\u4EBA\u6570\u91CF\u63A5\u8FD1\u3002\u5C45\u6C11\u7ECF\u8425\u5546\u961F\u3001\u67D3\u7EC7\u3001\u73BB\u7483\u3001\u78E8\u574A\u548C\u56ED\u5703\uFF0C\u7EFF\u6D32\u5357\u7F18\u63A5\u783E\u77F3\u53F0\u5730\u4E0E\u666E\u901A\u6D77\u5CB8\u8FC7\u6E21\u5730\u3002\u5317\u7F18\u585E\u62C9\u6587\u6CB3\u8C37\u53E6\u6709\u519C\u6751\u3001\u9A7F\u70B9\u548C\u704C\u6E89\u5730\u3002",
        sight: "\u4E3B\u8981\u5CE1\u6BB5\u957F\u7EA67\u516C\u91CC\uFF0C\u8C37\u58C1\u9AD8\u7EA660\u2014120\u7C73\uFF0C\u6700\u5BBD\u8C37\u6BB5\u8FD1200\u7C73\u3002\u5CA9\u4F53\u4E2D\u5206\u5E03\u6D45\u91D1\u3001\u7070\u7EFF\u548C\u70DF\u84DD\u8272\u73BB\u7483\u8D28\u5C42\uFF0C\u7531\u53E4\u8001\u5730\u706B\u4E0E\u5F53\u5730\u9B54\u529B\u5171\u540C\u4F5C\u7528\u5F62\u6210\u3002\u9633\u5149\u7A7F\u8FC7\u8584\u5C42\u5F62\u6210\u5149\u5E26\uFF0C\u9002\u5F53\u659C\u7167\u89D2\u5EA6\u4E0B\uFF0C\u90E8\u5206\u6298\u5C04\u5149\u53D7\u81EA\u7136\u9B54\u529B\u5F71\u54CD\u5F62\u6210\u60AC\u7A7A\u5149\u5F27\u3002\u5149\u5F27\u6CA1\u6709\u627F\u91CD\u80FD\u529B\u3002\u5165\u53E3\u6709\u5C55\u53F0\u548C\u7EF4\u62A4\u6B65\u9053\uFF0C\u4E0B\u5C42\u788E\u73BB\u7483\u5761\u3001\u7A84\u7F1D\u53CA\u672A\u7EF4\u62A4\u53F0\u5730\u5B58\u5728\u53CD\u5149\u3001\u5272\u4F24\u548C\u843D\u7247\u98CE\u9669\u3002\u6750\u6599\u91C7\u96C6\u9700\u8BB8\u53EF\u3002",
        risk: "\u73BB\u7483\u5CE1\u8C37\u672A\u7EF4\u62A4\u533A\u6709\u53CD\u5149\u3001\u950B\u5229\u65AD\u9762\u548C\u53EF\u80FD\u8131\u843D\u7684\u5CA9\u7247\uFF0C\u6750\u6599\u91C7\u96C6\u5B9E\u884C\u8BB8\u53EF\u7BA1\u7406\u3002",
        travel: "\u897F\u63A5\u6D1B\u65AF\u6587\uFF0C\u5317\u63A5\u57C3\u65AF\u51EF\u5C14\uFF0C\u4E1C\u5317\u7ECF\u53F0\u5730\u63A5\u827E\u65AF\u5854\u6069\u3002\u897F\u90E8\u4E34\u7EF4\u7EB3\u5C14\u6E56\u4E1C\u5CB8\uFF0C\u5357\u90E8\u4E34\u666E\u901A\u6D77\u6D0B\uFF0C\u897F\u5357\u4E18\u5730\u548C\u6797\u5730\u5206\u9694\u4E24\u5904\u6C34\u9762\u3002\u585E\u62C9\u6587\u6CB3\u6CBF\u5730\u533A\u5317\u7F18\u7531\u4E1C\u5317\u5411\u897F\u5357\u6D41\uFF0C\u5728\u5165\u6E56\u5CA9\u574E\u4E0A\u65B9\u4E0E\u827E\u6D1B\u6069\u6CB3\u6C47\u5408\uFF0C\u518D\u7ECF\u7011\u5E03\u5165\u6E56\u3002\u5546\u8DEF\u5728\u6CB3\u8C37\u7530\u5730\u3001\u5E72\u8349\u5761\u3001\u6CC9\u4E95\u548C\u7EFF\u6D32\u4E4B\u95F4\u76F8\u63A5\u3002\u8428\u7EF4\u5170\u4F4D\u4E8E\u72EC\u7ACB\u6CC9\u6E56\u5317\u5CB8\uFF0C\u57CE\u5317\u81F3\u4E1C\u5317\u7EA618\u516C\u91CC\u8FDB\u5165\u5965\u745E\u6069\u8FDE\u7EED\u6C99\u4E18\uFF0C\u57CE\u5357\u7684\u745F\u5170\u5FB7\u6C34\u5EAD\u5728\u6CC9\u6E56\u5357\u5CB8\uFF0C\u518D\u5411\u5357\u4E3A\u783E\u77F3\u5761\u5730\u548C\u6D77\u5CB8\u8FC7\u6E21\u5E26\u3002\u786C\u5B9E\u9053\u8DEF\u3001\u677E\u6C99\u548C\u7EFF\u6D32\u95F4\u7EBF\u8DEF\u5206\u522B\u4F7F\u7528\u5339\u914D\u8F66\u8F86\u4E0E\u9A6E\u755C\u3002",
        geographyKeys: [
          "\u74E6\u745E\u6069\u6751",
          "\u54C8\u4F26\u5FB7\u6751"
        ]
      },
      {
        id: "REG-12",
        name: "\u8BFA\u5C14\u7EF4\u514B\u51BB\u539F",
        prefix: "NOR",
        source: "world/regions/REG-12_NORVIK.md",
        life: "\u8D6B\u5C14\u65AF\u5854\u5FB7\u4F4D\u4E8E\u51BB\u539F\u5357\u7F18\u5185\u9646\u6E56\u6CB3\u7684\u4E1C\u5CB8\u907F\u98CE\u5761\uFF0C\u4EE5\u51AC\u5385\u8BAE\u4E8B\u81EA\u6CBB\uFF0C\u517D\u4EBA\u4E0E\u4EBA\u7C7B\u6570\u91CF\u63A5\u8FD1\u3001\u517D\u4EBA\u7565\u591A\u3002\u5C45\u6C11\u7ECF\u8425\u6E14\u4E1A\u3001\u7EC7\u9020\u3001\u755C\u517B\u3001\u70DF\u718F\u98DF\u54C1\u548C\u8D38\u6613\uFF0C\u5357\u7F18\u9488\u53F6\u6797\u3001\u878D\u96EA\u8349\u5730\u3001\u6E56\u5CB8\u6751\u843D\u548C\u9A7F\u70B9\u4E3A\u51AC\u5B63\u50A8\u5907\u63D0\u4F9B\u7269\u8D44\u3002",
        sight: "\u6781\u5149\u4E0E\u5317\u90E8\u9AD8\u7A7A\u9B54\u529B\u6D41\u53D8\u5316\u76F8\u5173\uFF0C\u5E38\u89C1\u6D45\u7EFF\u3001\u84DD\u7EFF\u3001\u94F6\u767D\u53CA\u7D2B\u8272\u5149\u5E26\u3002\u5F3A\u5149\u65F6\u53EF\u5728\u96EA\u9762\u3001\u971C\u9762\u6216\u6E05\u51B0\u4E0A\u5F62\u6210\u53CD\u5149\uFF0C\u4E91\u5C42\u3001\u591C\u8272\u548C\u89C6\u91CE\u5F71\u54CD\u53EF\u89C1\u7A0B\u5EA6\u3002\u90E8\u5206\u6E05\u51B0\u53D7\u5F3A\u5149\u540E\u4F1A\u77ED\u6682\u4FDD\u7559\u5F69\u7EB9\uFF0C\u968F\u540E\u6D88\u9000\u3002\u6781\u5149\u53CD\u590D\u51FA\u73B0\uFF0C\u5177\u4F53\u51FA\u73B0\u65F6\u95F4\u65E0\u6CD5\u4FDD\u8BC1\u3002\u7EF4\u65AF\u5854\u89C2\u666F\u53F0\u8BBE\u907F\u98CE\u4F11\u606F\u5904\uFF0C\u9547\u8FB9\u548C\u6E56\u5CB8\u4E5F\u6709\u5F00\u9614\u89C6\u91CE\u3002",
        risk: "\u51B0\u9762\u627F\u8F7D\u53D7\u51B0\u51B5\u5F71\u54CD\uFF0C\u6DF1\u96EA\u8986\u76D6\u90E8\u5206\u9053\u8DEF\uFF0C\u5DE8\u77F3\u5ECA\u6709\u672A\u7EF4\u62A4\u7ED3\u6784\uFF1B\u6781\u5149\u53EF\u89C1\u7A0B\u5EA6\u53D7\u9AD8\u7A7A\u5149\u3001\u4E91\u5C42\u548C\u591C\u8272\u5F71\u54CD\u3002",
        travel: "\u897F\u5357\u63A5\u5E03\u96F7\u5361\uFF0C\u4E1C\u5357\u63A5\u74E6\u8428\u6069\u3002\u4F0A\u5C14\u74E6\u6069\u6E56\u76C6\u51FA\u6C34\u63A5\u7EB3\u878D\u96EA\u4E0E\u5C71\u6CC9\uFF0C\u5F62\u6210\u8FBE\u5C14\u7EB3\u6CB3\uFF0C\u6CBF\u8D6B\u5C14\u65AF\u5854\u5FB7\u897F\u4FA7\u8C37\u5730\u5411\u5357\u8F6C\u5165\u675C\u5C14\u6587\u4E1C\u9E93\uFF0C\u518D\u6CBF\u57C3\u65AF\u51EF\u5C14\u897F\u7F18\u62B5\u6D1B\u65AF\u6587\u5317\u5CB8\u9AD8\u4F4D\u5CA9\u53F0\uFF0C\u5206\u6210\u76F4\u5165\u6E56\u5317\u6E7E\u7684\u5317\u53E3\u548C\u4E1C\u884C\u7684\u827E\u6D1B\u6069\u6CB3\uFF1B\u827E\u6D1B\u6069\u6CB3\u6C47\u585E\u62C9\u6587\u6CB3\u540E\u7ECF\u4E1C\u5317\u7011\u5E03\u5165\u6E56\u3002\u5317\u90E8\u6D77\u5CB8\u77ED\u6EAA\u53E6\u5165\u666E\u901A\u6D77\u6E7E\u3002\u5BD2\u5B63\u4F7F\u7528\u9002\u7528\u96EA\u5730\u4EA4\u901A\uFF0C\u878D\u96EA\u5B63\u6309\u9053\u8DEF\u548C\u6C34\u9762\u6362\u4E58\uFF0C\u51AC\u5385\u4E0E\u9A7F\u70B9\u6CBF\u5185\u9646\u8C37\u9053\u5206\u5E03\u3002",
        geographyKeys: [
          "\u7EF4\u5C14\u8BFA\u6751",
          "\u8D6B\u5FB7\u6797\u6751"
        ]
      },
      {
        id: "REG-13",
        name: "\u74E6\u8428\u6069\u706B\u5C71\u533A",
        prefix: "VAS",
        source: "world/regions/REG-13_VASAN.md",
        life: "\u5965\u5C14\u745F\u59C6\u4F4D\u4E8E\u585E\u62C9\u6587\u6CB3\u8C37\u5317\u5761\u7684\u9636\u5730\uFF0C\u5C5E\u4E8E\u5965\u65AF\u7EF4\u6069\uFF0C\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF1B\u5317\u90E8\u5E03\u96F7\u6069\u4E3A\u6DF7\u5C45\u81EA\u6CBB\u6751\u3002\u706B\u5C71\u4E1C\u90E8\u6CBF\u6D77\u5CA9\u53F0\u8FD8\u6709\u5C5E\u6751\u3001\u5B88\u706F\u70B9\u548C\u5761\u5730\u519C\u5E84\u3002\u5C45\u6C11\u7ECF\u8425\u6E29\u6CC9\u3001\u9676\u5668\u3001\u6E29\u5BA4\u3001\u8FD0\u8F93\u4E0E\u5C71\u5730\u670D\u52A1\uFF0C\u591A\u6570\u5C71\u5761\u51C9\u51B7\uFF0C\u5730\u70ED\u96C6\u4E2D\u4E8E\u90E8\u5206\u8C37\u5730\u3002",
        sight: "\u5361\u5C14\u7EF4\u65AF\u9AD8\u51FA\u5468\u56F4\u4E3B\u8981\u8C37\u5730\u7EA61700\u7C73\uFF0C\u9AD8\u5904\u548C\u80CC\u9634\u51F9\u69FD\u53EF\u79EF\u96EA\uFF0C\u6D3B\u52A8\u88C2\u9699\u5728\u9002\u5F53\u6761\u4EF6\u4E0B\u53EF\u89C1\u6697\u7EA2\u5149\u53CA\u84B8\u6C14\u3002\u5FB7\u5C14\u6587\u89C2\u706B\u53F0\u4F4D\u4E8E\u5CA9\u810A\uFF0C\u8BBE\u98CE\u6321\u548C\u7B80\u6613\u4F11\u606F\u5904\uFF0C\u706B\u5C71\u4F5C\u4E1A\u533A\u53E6\u884C\u7BA1\u7406\u3002\u4F0A\u65AF\u5FB7\u62C9\u9ED1\u5CA9\u9636\u5730\u6CBF\u4FA7\u8C37\u5C55\u5F00\u8FD11\u516C\u91CC\uFF0C\u67F1\u5CA9\u6709\u76F4\u7ACB\u53CA\u6247\u5F62\u503E\u659C\u5206\u5E03\uFF0C\u5CA9\u53F0\u843D\u5DEE\u7EA620\u201430\u7C73\u3002\u516C\u5171\u6B65\u9053\u7ECF\u8FC7\u7EF4\u62A4\u6BB5\uFF0C\u65AD\u88C2\u8FB9\u7F18\u3001\u8584\u5CA9\u58F3\u53CA\u672A\u68C0\u67E5\u6D1E\u9699\u5B58\u5728\u98CE\u9669\u3002",
        risk: "\u706B\u5C71\u4F5C\u4E1A\u533A\u5B58\u5728\u55B7\u53E3\u3001\u8584\u5CA9\u58F3\u3001\u65AD\u88C2\u8FB9\u7F18\u548C\u672A\u68C0\u67E5\u6D1E\u9699\uFF1B\u5DE8\u9F99\u5DE2\u5730\u8FDB\u5165\u548C\u4F1A\u9762\u7531\u672C\u4EBA\u540C\u610F\u3002",
        travel: "\u5317\u63A5\u8BFA\u5C14\u7EF4\u514B\uFF0C\u897F\u5357\u63A5\u57C3\u65AF\u51EF\u5C14\uFF0C\u4E1C\u5357\u63A5\u827E\u65AF\u5854\u6069\u3002\u585E\u62C9\u6587\u6CB3\u6E90\u4E8E\u5357\u9E93\u96EA\u6C34\u3001\u5C71\u6CC9\u548C\u51C9\u51B7\u8C37\u5730\uFF0C\u5854\u7EF4\u6069\u6696\u6EAA\u7B49\u5730\u70ED\u652F\u6C34\u6C47\u5165\u540E\u4E0E\u51B7\u6C34\u6DF7\u5408\uFF1B\u6CB3\u6D41\u7ED5\u8352\u539F\u4E1C\u7F18\uFF0C\u6CBF\u7D22\u62C9\u6069\u5317\u7F18\u5411\u897F\u5357\u6D41\uFF0C\u5728\u6E56\u4E1C\u5317\u9AD8\u4F4D\u5CA9\u53F0\u63A5\u7EB3\u827E\u6D1B\u6069\u6CB3\u540E\uFF0C\u5171\u540C\u7ECF\u585E\u62C9\u6587\u7011\u5E03\u5165\u6D1B\u65AF\u6587\u3002\u6CB3\u9636\u9053\u8DEF\u8FDE\u63A5\u8C37\u57CE\u3001\u519C\u7530\u548C\u9A7F\u6751\uFF0C\u5730\u65B9\u8239\u8FD0\u5728\u9002\u7528\u6CB3\u6BB5\u8FD0\u884C\uFF1B\u4E1C\u90E8\u6D77\u5D16\u7684\u77ED\u6EAA\u53E6\u5FAA\u72EC\u7ACB\u5C0F\u8C37\u5165\u6D77\u3002\u5DE8\u9F99\u642D\u4E58\u6309\u53CC\u65B9\u540C\u610F\u53CA\u660E\u786E\u5F80\u8FD4\u5B89\u6392\u3002",
        geographyKeys: [
          "\u585E\u62C9\u6587\u6CB3",
          "\u51EF\u6D1B\u65AF\u6751",
          "\u745F\u7EF4\u6069\u6751"
        ]
      },
      {
        id: "REG-14",
        name: "\u827E\u65AF\u5854\u6069\u5D16\u5CB8",
        prefix: "EST",
        source: "world/regions/REG-14_ESTAEN.md",
        life: "\u54C8\u5C14\u7EF4\u65AF\u4E3A\u5965\u65AF\u7EF4\u6069\u9996\u5E9C\uFF0C\u5750\u843D\u4E2D\u5317\u6BB5\u6CBF\u6D77\u8349\u5761\u53F0\u5730\uFF0C\u4E3B\u57CE\u533A\u3001\u4E1C\u4FA7\u9AD8\u5854\u548C\u6865\u8DEF\u76F8\u8FDE\uFF1B\u7EF4\u5C14\u745F\u4F4D\u4E8E\u5176\u5357\u504F\u897F\u7684\u53E6\u4E00\u5C42\u6CBF\u5D16\u53F0\u5730\u3002\u4EBA\u53E3\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u5C45\u6C11\u7ECF\u8425\u884C\u653F\u3001\u5546\u4E1A\u3001\u7267\u4E1A\u3001\u5976\u916A\u3001\u4FEE\u8865\u3001\u4F4F\u5BBF\u548C\u5761\u5730\u519C\u5E84\u3002\u8D1D\u4F26\u7EB3\u6E2F\u6751\u4F7F\u7528\u666E\u901A\u6D77\u6E7E\u6CCA\u4F4D\uFF0C\u4E34\u6D77\u5C0F\u6751\u548C\u5B88\u706F\u4F4F\u533A\u7531\u53F0\u5730\u9053\u8DEF\u76F8\u63A5\u3002",
        sight: "\u4F0A\u65AF\u5854\u7EF4\u5C14\u5CAC\u5916\u4FA7\u4E3A\u5C40\u90E8\u7A7A\u95F4\u5F02\u5E38\uFF0C\u5D16\u5916\u5448\u6DF1\u84DD\u661F\u5E55\u3001\u661F\u70B9\u53CA\u94F6\u84DD\u8272\u5149\u6D6A\uFF0C\u7F3A\u5C11\u666E\u901A\u6C34\u9762\u548C\u6D77\u5E73\u7EBF\u3002\u5149\u6D6A\u7167\u4EAE\u8FD1\u5CB8\u5CA9\u9762\u3001\u4F4E\u5899\u548C\u8349\u53F6\uFF0C\u663C\u591C\u5747\u53EF\u89C1\uFF0C\u591C\u95F4\u7EC6\u8282\u8F83\u6E05\u695A\u3002\u90E8\u5206\u91CD\u53E0\u5149\u6D6A\u77ED\u6682\u5448\u73B0\u5176\u4ED6\u4E16\u754C\u7684\u8F6E\u5ED3\u4E0E\u6D3B\u52A8\uFF0C\u5F71\u50CF\u6765\u6E90\u548C\u51FA\u73B0\u65F6\u523B\u4E0D\u53D7\u89C2\u8005\u63A7\u5236\u3002\u5F71\u50CF\u53EF\u80FD\u5305\u542B\u6C7D\u8F66\u3001\u98DE\u673A\u3001\u624B\u673A\u6216\u5176\u4ED6\u964C\u751F\u4E8B\u7269\uFF0C\u5F53\u5730\u5C45\u6C11\u4EC5\u638C\u63E1\u5176\u6240\u89C2\u5BDF\u5230\u7684\u5916\u5F62\u4E0E\u884C\u4E3A\u3002\u5F71\u50CF\u4E0E\u9192\u9192\u539F\u5C5E\u4E16\u754C\u7684\u5BF9\u5E94\u5173\u7CFB\u6CA1\u6709\u786E\u5B9A\u8BC1\u636E\u3002",
        risk: "\u661F\u6D77\u8FB9\u754C\u7F3A\u5C11\u53EF\u9760\u822A\u8DEF\u8D44\u6599\uFF0C\u661F\u6865\u901A\u884C\u6761\u4EF6\u5C1A\u672A\u4E3A\u5F53\u5730\u5C45\u6C11\u6240\u77E5\uFF0C\u672A\u6709\u53EF\u9760\u7684\u6210\u529F\u8DE8\u754C\u8BB0\u5F55\u3002",
        travel: "\u897F\u5317\u63A5\u74E6\u8428\u6069\uFF0C\u897F\u5357\u63A5\u7D22\u62C9\u6069\uFF0C\u5C71\u8C37\u9053\u8DEF\u63A5\u8349\u5761\u53F0\u5730\u4E0E\u6CBF\u5D16\u4E3B\u8DEF\u3002\u54C8\u5C14\u7EF4\u65AF\u6CBF\u5D16\u9053\u8DEF\u5411\u5357\u504F\u897F\u7EA692\u516C\u91CC\u62B5\u7EF4\u5C14\u745F\uFF0C\u518D\u5411\u4E1C\u7EA69\u516C\u91CC\u5230\u89C2\u666F\u9636\u5730\u3002\u53F0\u5730\u77ED\u6EAA\u3001\u6CC9\u6C34\u548C\u84C4\u6C34\u8BBE\u65BD\u4F9B\u5E94\u5C45\u6C11\uFF0C\u6EAA\u6C34\u4ECE\u666E\u901A\u6D77\u5D16\u5411\u4E0B\u6392\u6D77\uFF0C\u6E2F\u8DEF\u6CBF\u5761\u9053\u62B5\u8D1D\u4F26\u7EB3\u6E2F\u6751\u6240\u5728\u7684\u666E\u901A\u6D77\u6E7E\u897F\u5CB8\uFF0C\u4E1C\u5411\u6E7E\u53E3\u4E0E\u5916\u6D77\u822A\u9053\u76F8\u8FDE\uFF0C\u7A84\u53E3\u77F3\u6865\u8FDE\u63A5\u4E24\u4FA7\u53F0\u5730\u9053\u8DEF\u3002\u4F0A\u65AF\u5854\u7EF4\u5C14\u5CAC\u5916\u4E3A\u5C40\u90E8\u661F\u6D77\u3002",
        geographyKeys: [
          "\u7F57\u7EF4\u6069\u6751",
          "\u5FB7\u745E\u5C14\u6751"
        ]
      },
      {
        id: "REG-15",
        name: "\u6258\u4F26\u5CAC\u6D77\u5CB8",
        prefix: "TOR",
        source: "world/regions/REG-15_TOREN.md",
        life: "\u6258\u4F26\u5CAC\u6D77\u5CB8\u5C5E\u4E8E\u74E6\u5C14\u767B\u738B\u56FD\uFF0C\u4F4D\u4E8E\u7EF4\u5C14\u767B\u4EE5\u897F\u3001\u5361\u5FB7\u6E29\u4EE5\u5317\u3002\u5C45\u6C11\u4EE5\u4EBA\u7C7B\u4E3A\u4E3B\uFF0C\u4E5F\u6709\u517D\u4EBA\u5BB6\u5EAD\uFF0C\u7ECF\u8425\u6355\u9C7C\u3001\u6652\u7F51\u3001\u5761\u5730\u8015\u4F5C\u4E0E\u6CBF\u5CB8\u8F6C\u8FD0\u3002\u6258\u4F26\u6E14\u57E0\u63D0\u4F9B\u6709\u9650\u98DF\u5BBF\u3001\u65E5\u5E38\u8865\u7ED9\u548C\u7B80\u5355\u8239\u5177\u4FEE\u8865\uFF0C\u6E29\u5FB7\u5C14\u6751\u627F\u63A5\u5185\u9646\u9053\u8DEF\u5F80\u6765\u3002",
        sight: "\u6D77\u5CB8\u7531\u9AD8\u4F4E\u76F8\u63A5\u7684\u77F3\u8D28\u6D77\u5D16\u3001\u5CAC\u89D2\u548C\u80CC\u98CE\u5C0F\u6E7E\u7EC4\u6210\uFF0C\u7070\u8272\u7901\u76D8\u3001\u6C99\u5730\u4E0E\u8FD1\u5CB8\u5C9B\u7901\u4EA4\u66FF\u3002\u5CAC\u9876\u5206\u5E03\u5C45\u6C11\u70B9\u3001\u5B88\u706F\u4F4F\u5C4B\u4E0E\u5761\u7530\uFF0C\u4E0B\u5CB8\u9053\u8DEF\u901A\u6E14\u57E0\u6728\u6CCA\u4F4D\u3002\u6258\u4F26\u5CAC\u89D2\u6B65\u9053\u6CBF\u8349\u5761\u4E0E\u5D16\u9876\u5C55\u5F00\uFF0C\u57C3\u6587\u7901\u6EE9\u9000\u6F6E\u65F6\u9732\u51FA\u5C42\u72B6\u5CA9\u76D8\u3001\u6F6E\u6C60\u548C\u6D77\u85FB\uFF0C\u6E14\u57E0\u8BBE\u6652\u7F51\u67B6\uFF0C\u6751\u843D\u5EFA\u6709\u77F3\u5899\u3002",
        risk: "\u5CAC\u89D2\u4E34\u5D16\u6B65\u9053\u53D7\u6A2A\u98CE\u5F71\u54CD\uFF0C\u7901\u76D8\u968F\u6F6E\u4F4D\u548C\u6D6A\u6D8C\u53D8\u5316\uFF0C\u4E34\u6C34\u5CA9\u9762\u6E7F\u6ED1\u3002",
        travel: "\u5411\u4E1C\u6CBF\u4F4E\u4E18\u9053\u8DEF\u63A5\u7EF4\u5C14\u767B\uFF0C\u8FBE\u4F26\u798F\u5FB7\u81F3\u6258\u4F26\u6E14\u57E0\u7EA645\u516C\u91CC\uFF0C\u53EF\u6B65\u884C\u3001\u9A91\u4E58\u6216\u4F7F\u7528\u9002\u7528\u8F7B\u8F66\uFF0C\u8DEF\u7ECF\u6E29\u5FB7\u5C14\u6751\u3002\u6CBF\u5CB8\u8239\u6CBF\u897F\u5CB8\u5411\u5357\u63A5\u5361\u5FB7\u6E29\u8D1D\u8428\u5C14\u6E2F\uFF0C\u4EE3\u8868\u822A\u7A0B\u7EA6300\u516C\u91CC\uFF1B\u5B9E\u9645\u505C\u9760\u3001\u8239\u671F\u3001\u8D39\u7528\u53CA\u8F66\u755C\u884C\u674E\u627F\u8FD0\u6309\u6240\u642D\u8239\u53EA\u7EA6\u5B9A\u3002\u5CAC\u89D2\u4E0E\u7901\u6EE9\u652F\u7EBF\u4EE5\u6B65\u884C\u4E3A\u4E3B\uFF1B\u5854\u4F26\u6CB3\u4ECD\u5728\u5361\u5FB7\u6E29\u6D77\u6E7E\u5165\u6D77\u3002",
        geographyKeys: [
          "\u5361\u5C14\u8BFA\u6751",
          "\u7EF4\u6069\u8FBE\u6751"
        ]
      }
    ]
  };

  // src/ui-geometric/atlas-map-layout.mjs
  var MAP_IMAGE_SIZE = { width: 1774, height: 887 };
  var MAP_IMAGE_POINTS = {
    "REG-01": [24.6, 47.1],
    "REG-02": [25.4, 68.6],
    "REG-03": [42, 38.2],
    "REG-04": [19, 82],
    "REG-05": [27.5, 20.5],
    "REG-06": [49.2, 16.6],
    "REG-07": [52.5, 45.3],
    "REG-08": [38.6, 84.2],
    "REG-09": [55.8, 72.9],
    "REG-10": [70.9, 38.2],
    "REG-11": [77.3, 73],
    "REG-12": [72.1, 13],
    "REG-13": [87.5, 35.4],
    "REG-14": [88.8, 56.4],
    "REG-15": [9, 52.4]
  };

  // src/ui/map-themes.mjs
  var rows = [
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
    ["REG-14", "cliff", "star", "#71628f", "#f1ecfc", "22px 6px 22px 6px", "\u6D77\u5D16\u8349\u53F6\u4E0E\u661F\u5149"],
    ["REG-15", "coast", "ship", "#447f9a", "#eaf5fa", "8px 22px 8px 22px", "\u6D77\u6D6A\u4E0E\u5CAC\u89D2"]
  ];
  var MAP_THEMES = Object.fromEntries(rows.map(([id, key, icon6, accent, wash, radius, motif]) => [id, { key, icon: icon6, accent, wash, radius, motif, ornament: id === "REG-02" ? null : "mapdir-ornament-" + id.toLowerCase() }]));

  // src/ui-geometric/assets/continent-selected-20261025.png
  var continent_selected_20261025_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/1be3d8b8dd8943bfce4de7e4d61ee34499eb0e50/handbook/images/maps/world/continent-selected-20261025.png";

  // src/ui-geometric/assets/regions/clean-reg-01-20261026.png
  var clean_reg_01_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/95455ffbd3b78819697a93a38a6c9bf01f80f270/handbook/images/maps/regions/clean-reg-01-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-02-20261026.png
  var clean_reg_02_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/95455ffbd3b78819697a93a38a6c9bf01f80f270/handbook/images/maps/regions/clean-reg-02-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-03-20261026.png
  var clean_reg_03_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/95455ffbd3b78819697a93a38a6c9bf01f80f270/handbook/images/maps/regions/clean-reg-03-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-04-20261026.png
  var clean_reg_04_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/95455ffbd3b78819697a93a38a6c9bf01f80f270/handbook/images/maps/regions/clean-reg-04-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-05-20261026.png
  var clean_reg_05_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/95455ffbd3b78819697a93a38a6c9bf01f80f270/handbook/images/maps/regions/clean-reg-05-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-06-20261026.png
  var clean_reg_06_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/95455ffbd3b78819697a93a38a6c9bf01f80f270/handbook/images/maps/regions/clean-reg-06-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-07-20261026.png
  var clean_reg_07_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/95455ffbd3b78819697a93a38a6c9bf01f80f270/handbook/images/maps/regions/clean-reg-07-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-08-20261026.png
  var clean_reg_08_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/95455ffbd3b78819697a93a38a6c9bf01f80f270/handbook/images/maps/regions/clean-reg-08-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-09-20261026.png
  var clean_reg_09_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/95455ffbd3b78819697a93a38a6c9bf01f80f270/handbook/images/maps/regions/clean-reg-09-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-10-20261026.png
  var clean_reg_10_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/95455ffbd3b78819697a93a38a6c9bf01f80f270/handbook/images/maps/regions/clean-reg-10-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-11-20261026.png
  var clean_reg_11_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/072f06a83506a4b4ebf6cb790e004b02b4065b97/handbook/images/maps/regions/clean-reg-11-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-12-20261026.png
  var clean_reg_12_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/072f06a83506a4b4ebf6cb790e004b02b4065b97/handbook/images/maps/regions/clean-reg-12-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-13-20261026.png
  var clean_reg_13_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/072f06a83506a4b4ebf6cb790e004b02b4065b97/handbook/images/maps/regions/clean-reg-13-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-14-20261026.png
  var clean_reg_14_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/072f06a83506a4b4ebf6cb790e004b02b4065b97/handbook/images/maps/regions/clean-reg-14-20261026.png";

  // src/ui-geometric/assets/regions/clean-reg-15-20261026.png
  var clean_reg_15_20261026_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/072f06a83506a4b4ebf6cb790e004b02b4065b97/handbook/images/maps/regions/clean-reg-15-20261026.png";

  // src/ui-geometric/region-atlas-data.mjs
  var regionAtlases = {
    "REG-01": { image: clean_reg_01_20261026_default, points: { "LOC-VIR-001": [62, 37.1], "LOC-VIR-002": [62, 37.1], "LOC-VIR-003": [62, 37.1], "LOC-VIR-004": [62, 37.1], "LOC-VIR-005": [56.9, 17.5], "LOC-VIR-006": [69, 54.1], "LOC-VIR-007": [88, 39], "LOC-VIR-008": [54.8, 78], "LOC-VIR-009": [62, 37.1] }, labels: [{ "id": "LOC-VIR-001", "text": "\u8FBE\u4F26\u798F\u5FB7", "x": 67, "y": 30.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIR-005", "text": "\u79D1\u5C14\u6587\u77F3\u6865", "x": 65, "y": 18.3, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIR-006", "text": "\u963F\u65AF\u7279\u5C14\u65E7\u95F8\u4E0E\u6C34\u5ECA", "x": 73, "y": 61.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIR-007", "text": "\u6885\u91CC\u5B89\u6751", "x": 92, "y": 34.8, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIR-008", "text": "\u96F7\u6587\u7EB3", "x": 64, "y": 75, "kind": "place", "anchor": "middle" }, { "id": "water:talen", "text": "\u5854\u4F26\u6CB3", "x": 54, "y": 51, "kind": "water", "anchor": "middle", "rotation": 0, "characterPoints": [[56.5, 45.4], [55.2, 49.6], [53.2, 53.8]], "fontSize": 26 }, { "id": "exit:REG-01:REG-03:land:1", "text": "\u963F\u5C14\u7EF4\u514B", "x": 65, "y": 4, "kind": "exit", "anchor": "middle", "direction": 0 }, { "id": "exit:REG-01:REG-15:land:2", "text": "\u6258\u4F26\u5CAC\u6D77\u5CB8", "x": 6, "y": 47, "kind": "exit", "anchor": "middle", "direction": 270 }, { "id": "exit:REG-01:REG-02:land:3", "text": "\u585E\u4F26\u8FBE\u4E18\u9675", "x": 93, "y": 94, "kind": "exit", "anchor": "middle", "direction": 90 }, { "id": "exit:REG-01:REG-04:water:4", "text": "\u5361\u5FB7\u6E29\u6D77\u6E7E", "x": 27, "y": 93, "kind": "exit", "anchor": "middle", "direction": 245 }, { "id": "village:REG-01:1", "text": "\u83B1\u6C40\u6751", "x": 28, "y": 26, "kind": "village", "anchor": "middle" }, { "id": "village:REG-01:2", "text": "\u9A6C\u7EF4\u5C14\u6751", "x": 29, "y": 58, "kind": "village", "anchor": "middle" }, { "id": "village:REG-01:3", "text": "\u8BFA\u6797\u6751", "x": 22, "y": 75, "kind": "village", "anchor": "middle" }] },
    "REG-02": { image: clean_reg_02_20261026_default, points: { "LOC-SER-001": [67.5, 59.5], "LOC-SER-002": [67.5, 59.5], "LOC-SER-003": [43.7, 75], "LOC-SER-004": [49.5, 36.5], "LOC-SER-005": [81, 18], "LOC-SER-006": [67.5, 59.5] }, labels: [{ "id": "LOC-SER-001", "text": "\u8D1D\u5C14\u8499\u7279", "x": 74, "y": 51.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-SER-003", "text": "\u83F2\u4F26\u5E84\u56ED", "x": 46, "y": 69, "kind": "place", "anchor": "middle" }, { "id": "LOC-SER-004", "text": "\u5965\u96F7\u65AF\u82B1\u6D77", "x": 49.5, "y": 36.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-SER-005", "text": "\u7F57\u745F\u6069\u5821", "x": 87, "y": 14, "kind": "place", "anchor": "middle" }, { "id": "water:talen", "text": "\u5854\u4F26\u6CB3", "x": 25, "y": 54, "kind": "water", "anchor": "middle", "rotation": 0, "characterPoints": [[28, 47.6], [25.6, 51.6], [23.7, 55.6]], "fontSize": 26 }, { "id": "exit:REG-02:REG-01:land:1", "text": "\u7EF4\u5C14\u767B\u6CB3\u8C37", "x": 64.5, "y": 3.5, "kind": "exit", "anchor": "middle", "direction": 0 }, { "id": "exit:REG-02:REG-04:land:2", "text": "\u5361\u5FB7\u6E29\u6D77\u6E7E", "x": 31, "y": 94, "kind": "exit", "anchor": "middle", "direction": 225 }, { "id": "exit:REG-02:REG-08:land:3", "text": "\u7EF4\u65AF\u5361\u68EE\u6797", "x": 92, "y": 94, "kind": "exit", "anchor": "middle", "direction": 135 }, { "id": "exit:REG-02:REG-04:water:4", "text": "\u5361\u5FB7\u6E29\u6D77\u6E7E", "x": 9, "y": 91, "kind": "exit", "anchor": "middle", "direction": 245 }, { "id": "village:REG-02:1", "text": "\u6D1B\u745E\u6069\u6751", "x": 15, "y": 26.5, "kind": "village", "anchor": "middle" }, { "id": "village:REG-02:2", "text": "\u5361\u5C14\u6C40\u6751", "x": 12, "y": 32, "kind": "village", "anchor": "middle" }, { "id": "village:REG-02:3", "text": "\u827E\u6587\u8BFA\u6751", "x": 9, "y": 69, "kind": "village", "anchor": "middle" }] },
    "REG-03": { image: clean_reg_03_20261026_default, points: { "LOC-ALV-001": [35.3, 36.7], "LOC-ALV-002": [43, 43.2], "LOC-ALV-003": [29.9, 56.2], "LOC-ALV-004": [33.5, 48.3], "LOC-ALV-005": [51, 63.7], "LOC-ALV-006": [34.6, 65.4] }, labels: [{ "id": "LOC-ALV-001", "text": "\u963F\u5C14\u7EF4\u514B\u81EA\u7531\u5E02", "x": 34.5, "y": 21.3, "kind": "place", "anchor": "middle" }, { "id": "LOC-ALV-003", "text": "\u591A\u4F26\u8857", "x": 26.7, "y": 56.8, "kind": "place", "anchor": "middle" }, { "id": "LOC-ALV-004", "text": "\u963F\u4F26\u8428\u6D74\u573A", "x": 35.7, "y": 54, "kind": "place", "anchor": "middle" }, { "id": "LOC-ALV-005", "text": "\u7EF4\u7279\u62C9\u6865\u7FA4", "x": 52, "y": 69.7, "kind": "place", "anchor": "middle" }, { "id": "LOC-ALV-006", "text": "\u6D1B\u6885\u65AF\u65E7\u8857", "x": 34, "y": 72, "kind": "place", "anchor": "middle" }, { "id": "water:hordan", "text": "\u970D\u5C14\u4E39\u6CB3", "x": 61, "y": 18.5, "kind": "water", "anchor": "middle", "rotation": 0 }, { "id": "water:urldak", "text": "\u4E4C\u5C14\u8FBE\u514B\u6EAA", "x": 31, "y": 11.7, "kind": "water", "anchor": "middle", "rotation": 6, "fontSize": 18 }, { "id": "water:talen", "text": "\u5854\u4F26\u6CB3", "x": 26, "y": 85, "kind": "water", "anchor": "middle", "rotation": -12, "fontSize": 23 }, { "id": "water:talen-branch", "text": "\u57C3\u91CC\u6851\u6CB3", "x": 74, "y": 44, "kind": "water", "anchor": "middle", "rotation": 0, "characterPoints": [[73.3, 39], [74.1, 42.2], [74.4, 45.4], [73.8, 48.6]], "fontSize": 20 }, { "id": "exit:REG-03:REG-05:land:1", "text": "\u970D\u5C14\u4E39\u5E73\u539F", "x": 64, "y": 4.4, "kind": "exit", "anchor": "middle", "direction": 0, "arrowPoint": [57.3, 4.4] }, { "id": "exit:REG-03:REG-07:land:2", "text": "\u675C\u5C14\u6587\u5C71\u8109", "x": 94, "y": 35, "kind": "exit", "anchor": "middle", "direction": 90, "arrowPoint": [98, 37.8] }, { "id": "exit:REG-03:REG-01:land:3", "text": "\u7EF4\u5C14\u767B\u6CB3\u8C37", "x": 7, "y": 76, "kind": "exit", "anchor": "middle", "direction": 270, "arrowPoint": [2.2, 78.8] }, { "id": "exit:REG-03:REG-01:water:4", "text": "\u7EF4\u5C14\u767B\u6CB3\u8C37", "x": 13, "y": 92, "kind": "exit", "anchor": "middle", "direction": 250, "arrowPoint": [6, 94] }, { "id": "village:REG-03:1", "text": "\u57C3\u5FB7\u6797\u6751", "x": 9.7, "y": 54.8, "kind": "village", "anchor": "middle" }, { "id": "village:REG-03:2", "text": "\u745F\u5170\u6C40\u6751", "x": 61.8, "y": 41.8, "kind": "village", "anchor": "middle" }] },
    "REG-04": { image: clean_reg_04_20261026_default, points: { "LOC-CAD-001": [46.7, 36.2], "LOC-CAD-002": [46.7, 36.2], "LOC-CAD-003": [62.4, 44], "LOC-CAD-004": [40.2, 65.6], "LOC-CAD-005": [80.8, 71], "LOC-CAD-006": [87.7, 88.6] }, labels: [{ "id": "LOC-CAD-001", "text": "\u8D1D\u8428\u5C14\u6E2F", "x": 42, "y": 29.2, "kind": "place", "anchor": "middle" }, { "id": "LOC-CAD-003", "text": "\u9A6C\u96F7\u65AF\u8239\u575E", "x": 66.2, "y": 38.8, "kind": "place", "anchor": "middle" }, { "id": "LOC-CAD-004", "text": "\u5854\u5C14\u8428\u5C9B", "x": 43.5, "y": 74, "kind": "place", "anchor": "middle" }, { "id": "LOC-CAD-005", "text": "\u57C3\u65AF\u4F26\u6D77\u8680\u6D1E", "x": 77.8, "y": 76.8, "kind": "place", "anchor": "middle" }, { "id": "LOC-CAD-006", "text": "\u7EF4\u8428\u6069\u65E7\u5824\u9053", "x": 73.4, "y": 84.4, "kind": "place", "anchor": "middle" }, { "id": "water:talen", "text": "\u5854\u4F26\u6CB3", "x": 65.5, "y": 22, "kind": "water", "anchor": "middle", "rotation": -10 }, { "id": "exit:REG-04:REG-02:land:1", "text": "\u585E\u4F26\u8FBE\u4E18\u9675", "x": 62, "y": 4, "kind": "exit", "anchor": "middle", "direction": 0 }, { "id": "exit:REG-04:REG-08:land:2", "text": "\u7EF4\u65AF\u5361\u68EE\u6797", "x": 95, "y": 44, "kind": "exit", "anchor": "middle", "direction": 90 }, { "id": "exit:REG-04:REG-15:water:3", "text": "\u6258\u4F26\u5CAC\u6D77\u5CB8", "x": 10, "y": 54, "kind": "exit", "anchor": "middle", "direction": 315 }, { "id": "exit:REG-04:REG-09:water:4", "text": "\u6D1B\u65AF\u6587\u6E56\u533A", "x": 92, "y": 94, "kind": "exit", "anchor": "middle", "direction": 90 }, { "id": "village:REG-04:1", "text": "\u5965\u5FB7\u91CC\u6751", "x": 85.5, "y": 14, "kind": "village", "anchor": "middle" }, { "id": "village:REG-04:2", "text": "\u7EF4\u5170\u8BFA\u6751", "x": 87.7, "y": 56.5, "kind": "village", "anchor": "middle" }] },
    "REG-05": { image: clean_reg_05_20261026_default, points: { "LOC-HOR-001": [55.4, 46.5], "LOC-HOR-002": [55.4, 46.5], "LOC-HOR-003": [51.8, 44.4], "LOC-HOR-004": [63.5, 47.1], "LOC-HOR-005": [62.8, 19.4], "LOC-HOR-006": [55.7, 70.9], "LOC-HOR-007": [18.2, 53.9], "LOC-HOR-008": [55.4, 46.5], "LOC-HOR-009": [24.7, 22.6], "LOC-HOR-010": [14.7, 29.4] }, labels: [{ "id": "LOC-HOR-001", "text": "\u4E4C\u5C14\u8FBE\u514B", "x": 58, "y": 29.7, "kind": "place", "anchor": "middle" }, { "id": "LOC-HOR-003", "text": "\u5361\u5C14\u7EB3\u96C6\u5E02", "x": 42, "y": 43.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-HOR-004", "text": "\u591A\u62C9\u6069\u7ADE\u6280\u573A", "x": 64, "y": 55.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-HOR-005", "text": "\u51EF\u5C14\u8428\u77F3\u73AF", "x": 61, "y": 12, "kind": "place", "anchor": "middle" }, { "id": "LOC-HOR-006", "text": "\u4E4C\u5C14\u8FBE\u514B\u6EAA\u6E21\u573A", "x": 57, "y": 76.3, "kind": "place", "anchor": "middle" }, { "id": "LOC-HOR-007", "text": "\u7EB3\u7EF4\u5C14\u5824\u7267\u533A", "x": 16, "y": 55, "kind": "place", "anchor": "middle" }, { "id": "LOC-HOR-009", "text": "\u683C\u5C14\u6C40\u6E14\u6751", "x": 26, "y": 27, "kind": "place", "anchor": "middle" }, { "id": "LOC-HOR-010", "text": "\u767D\u783E\u6E7E", "x": 14, "y": 25.5, "kind": "place", "anchor": "middle" }, { "id": "water:hordan", "text": "\u970D\u5C14\u4E39\u6CB3", "x": 87, "y": 49, "kind": "water", "anchor": "middle", "rotation": 0, "characterPoints": [[89.1, 44.2], [88.2, 47], [86.4, 49.8], [85, 52.6]], "fontSize": 20 }, { "id": "water:urldak", "text": "\u4E4C\u5C14\u8FBE\u514B\u6EAA", "x": 41, "y": 66, "kind": "water", "anchor": "middle", "rotation": 10, "fontSize": 18 }, { "id": "water:talen", "text": "\u5854\u4F26\u6CB3", "x": 70, "y": 80, "kind": "water", "anchor": "middle", "rotation": 0 }, { "id": "exit:REG-05:REG-06:land:1", "text": "\u5E03\u96F7\u5361\u9AD8\u5730", "x": 83.5, "y": 4.7, "kind": "exit", "anchor": "middle", "direction": 45, "arrowPoint": [89.7, 3] }, { "id": "exit:REG-05:REG-03:land:2", "text": "\u963F\u5C14\u7EF4\u514B", "x": 54, "y": 94, "kind": "exit", "anchor": "middle", "direction": 180, "arrowPoint": [49, 96] }, { "id": "exit:REG-05:REG-03:water:3", "text": "\u963F\u5C14\u7EF4\u514B", "x": 73, "y": 94, "kind": "exit", "anchor": "middle", "direction": 180, "arrowPoint": [75, 97] }, { "id": "village:REG-05:1", "text": "\u5E03\u4F26\u8FBE\u6751", "x": 38, "y": 17, "kind": "village", "anchor": "middle" }, { "id": "village:REG-05:2", "text": "\u51EF\u5FB7\u6069\u6751", "x": 90, "y": 76.7, "kind": "village", "anchor": "middle" }] },
    "REG-06": { image: clean_reg_06_20261026_default, points: { "LOC-BRE-001": [39.4, 61.8], "LOC-BRE-002": [39.4, 61.8], "LOC-BRE-003": [39.4, 61.8], "LOC-BRE-004": [49.4, 40.4], "LOC-BRE-005": [62.3, 18.3], "LOC-BRE-006": [61.5, 71.2], "LOC-BRE-007": [83.8, 42.8], "LOC-BRE-008": [39.4, 61.8] }, labels: [{ "id": "LOC-BRE-001", "text": "\u79D1\u5C14\u74E6\u6069", "x": 31.5, "y": 53.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-BRE-004", "text": "\u7EF4\u5FB7\u62C9\u5347\u964D\u7AD9", "x": 56.5, "y": 40.1, "kind": "place", "anchor": "middle" }, { "id": "LOC-BRE-005", "text": "\u827E\u745E\u745F\u5C14\u53E4\u57CE", "x": 67, "y": 7.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-BRE-006", "text": "\u8D6B\u5C14\u739B\u89C2\u4E91\u53F0", "x": 61.2, "y": 66.2, "kind": "place", "anchor": "middle" }, { "id": "LOC-BRE-007", "text": "\u514B\u96F7\u65AF\u5C71\u9053", "x": 81.5, "y": 33.7, "kind": "place", "anchor": "middle" }, { "id": "exit:REG-06:REG-05:land:1", "text": "\u970D\u5C14\u4E39\u5E73\u539F", "x": 6, "y": 63, "kind": "exit", "anchor": "middle", "direction": 270, "arrowPoint": [2, 65] }, { "id": "exit:REG-06:REG-07:land:2", "text": "\u675C\u5C14\u6587\u5C71\u8109", "x": 42, "y": 94, "kind": "exit", "anchor": "middle", "direction": 180, "arrowPoint": [34.3, 96] }, { "id": "exit:REG-06:REG-12:land:3", "text": "\u8BFA\u5C14\u7EF4\u514B\u51BB\u539F", "x": 82, "y": 4.2, "kind": "exit", "anchor": "middle", "direction": 45, "arrowPoint": [89, 5.2] }, { "id": "village:REG-06:1", "text": "\u74E6\u5C14\u6069\u6751", "x": 13.5, "y": 28.6, "kind": "village", "anchor": "middle" }, { "id": "village:REG-06:2", "text": "\u591A\u96F7\u6069\u6751", "x": 12.2, "y": 82.4, "kind": "village", "anchor": "middle" }] },
    "REG-07": { image: clean_reg_07_20261026_default, points: { "LOC-DUR-001": [29.2, 54.2], "LOC-DUR-002": [29.2, 54.2], "LOC-DUR-003": [48.8, 49], "LOC-DUR-004": [61.6, 66.1], "LOC-DUR-005": [29.2, 54.2], "LOC-DUR-006": [34.7, 81.1], "LOC-DUR-007": [61.4, 31.9], "LOC-DUR-008": [71.8, 51], "LOC-DUR-009": [29.2, 54.2] }, labels: [{ "id": "LOC-DUR-001", "text": "\u6258\u5C14\u6587", "x": 25.5, "y": 46.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-DUR-003", "text": "\u54C8\u5FB7\u6797\u77F3\u5385", "x": 50, "y": 41, "kind": "place", "anchor": "middle" }, { "id": "LOC-DUR-004", "text": "\u745F\u62C9\u8FEA\u6069\u6676\u6E56", "x": 61.5, "y": 69.2, "kind": "water", "anchor": "middle" }, { "id": "LOC-DUR-006", "text": "\u4F0A\u5C14\u8FBE\u6E29\u6CC9\u9662", "x": 38, "y": 75.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-DUR-007", "text": "\u5361\u5C14\u5FB7\u65E7\u77FF\u9053", "x": 63, "y": 27, "kind": "place", "anchor": "middle" }, { "id": "LOC-DUR-008", "text": "\u5965\u5C14\u82AC\u5C71\u53E3", "x": 71, "y": 45.5, "kind": "place", "anchor": "middle" }, { "id": "water:darna", "text": "\u8FBE\u5C14\u7EB3\u6CB3", "x": 82, "y": 72, "kind": "water", "anchor": "middle", "rotation": 0, "characterPoints": [[81.6, 67.1], [81.5, 70.5], [82, 73.8], [83.1, 77.1]], "fontSize": 21 }, { "id": "exit:REG-07:REG-06:land:1", "text": "\u5E03\u96F7\u5361\u9AD8\u5730", "x": 30, "y": 4, "kind": "exit", "anchor": "middle", "direction": 0, "arrowPoint": [26.3, 3] }, { "id": "exit:REG-07:REG-03:land:2", "text": "\u963F\u5C14\u7EF4\u514B", "x": 6, "y": 49, "kind": "exit", "anchor": "middle", "direction": 270, "arrowPoint": [2, 52] }, { "id": "exit:REG-07:REG-10:land:3", "text": "\u57C3\u65AF\u51EF\u5C14\u8352\u539F", "x": 94, "y": 49, "kind": "exit", "anchor": "middle", "direction": 90, "arrowPoint": [98, 52] }, { "id": "exit:REG-07:REG-09:water:4", "text": "\u6D1B\u65AF\u6587\u6E56\u533A", "x": 88, "y": 92, "kind": "exit", "anchor": "middle", "characterPoints": [[86.5, 86.3], [87, 88.8], [87.8, 91.3], [88.8, 93.8], [90, 96.3]], "direction": 180, "arrowPoint": [92.1, 96.8], "fontSize": 17 }, { "id": "village:REG-07:1", "text": "\u82AC\u5FB7\u91CC\u6751", "x": 12, "y": 40, "kind": "village", "anchor": "middle" }, { "id": "village:REG-07:2", "text": "\u963F\u7EF4\u5C14\u6751", "x": 92.5, "y": 63, "kind": "village", "anchor": "middle" }] },
    "REG-08": { image: clean_reg_08_20261026_default, points: { "LOC-VIS-001": [30.2, 43.9], "LOC-VIS-002": [30.2, 43.9], "LOC-VIS-003": [30.2, 43.9], "LOC-VIS-004": [64.7, 41.5], "LOC-VIS-005": [64.7, 49.8], "LOC-VIS-006": [70.4, 69], "LOC-VIS-007": [43.4, 27.1], "LOC-VIS-008": [30.2, 43.9], "LOC-VIS-009": [48.2, 46.9], "LOC-VIS-010": [19, 74.1], "LOC-VIS-011": [35.2, 86.6] }, labels: [{ "id": "LOC-VIS-001", "text": "\u5E03\u4F26\u7EF4\u5C14", "x": 28.5, "y": 51.3, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIS-004", "text": "\u57C3\u5C14\u5FB7\u6797\u5DE8\u6811", "x": 79, "y": 36, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIS-005", "text": "\u745F\u7EF4\u5C14\u6839\u62F1\u9053", "x": 66.2, "y": 54.7, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIS-006", "text": "\u6258\u5170\u65E7\u836F\u5703", "x": 70.4, "y": 62, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIS-007", "text": "\u745E\u65AF\u6797\u6811\u8102\u56ED", "x": 42.8, "y": 20.2, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIS-009", "text": "\u74E6\u4F26\u6EAA\u8425\u5730", "x": 48, "y": 42.4, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIS-010", "text": "\u8D5B\u6D1B\u6069\u6E14\u6751", "x": 20.5, "y": 68.7, "kind": "place", "anchor": "middle" }, { "id": "LOC-VIS-011", "text": "\u6749\u5F71\u6D77\u6EE9", "x": 35.5, "y": 84.1, "kind": "place", "anchor": "middle" }, { "id": "water:valen", "text": "\u74E6\u4F26\u6EAA", "x": 50.2, "y": 59, "kind": "water", "anchor": "middle", "rotation": -55 }, { "id": "exit:REG-08:REG-04:land:1", "text": "\u5361\u5FB7\u6E29\u6D77\u6E7E", "x": 6.5, "y": 42, "kind": "exit", "anchor": "middle", "direction": 270 }, { "id": "exit:REG-08:REG-09:land:2", "text": "\u6D1B\u65AF\u6587\u6E56\u533A", "x": 94, "y": 46, "kind": "exit", "anchor": "middle", "direction": 90 }, { "id": "village:REG-08:1", "text": "\u6D1B\u745F\u6069\u6751", "x": 17.1, "y": 26.5, "kind": "village", "anchor": "middle" }, { "id": "village:REG-08:2", "text": "\u827E\u5170\u5FB7\u6751", "x": 89.5, "y": 58.6, "kind": "village", "anchor": "middle" }] },
    "REG-09": { image: clean_reg_09_20261026_default, points: { "LOC-LOS-001": [44.5, 37.1], "LOC-LOS-002": [44.5, 37.1], "LOC-LOS-003": [44.5, 37.1], "LOC-LOS-004": [53.5, 48.4], "LOC-LOS-005": [68.7, 43.6], "LOC-LOS-006": [63, 57.3], "LOC-LOS-007": [18.4, 75.1], "LOC-LOS-008": [73, 26.8], "LOC-LOS-009": [44.5, 37.1], "LOC-LOS-010": [44.5, 37.1], "LOC-LOS-011": [44.5, 37.1], "LOC-LOS-012": [44.5, 37.1], "LOC-LOS-013": [49.9, 76.2], "LOC-LOS-014": [52.7, 89.1] }, labels: [{ "id": "LOC-LOS-001", "text": "\u6885\u745E\u767B", "x": 56, "y": 36, "kind": "place", "anchor": "middle" }, { "id": "LOC-LOS-004", "text": "\u7EF4\u7EB3\u5C14\u6E56", "x": 51, "y": 52, "kind": "water", "anchor": "middle" }, { "id": "LOC-LOS-005", "text": "\u5965\u857E\u6069\u6D6E\u5C9B\u7FA4", "x": 68.8, "y": 37.8, "kind": "place", "anchor": "middle" }, { "id": "LOC-LOS-006", "text": "\u74E6\u96F7\u8428\u9057\u5740", "x": 65.5, "y": 62.3, "kind": "place", "anchor": "middle" }, { "id": "LOC-LOS-007", "text": "\u5361\u585E\u62C9\u9547", "x": 18.2, "y": 83, "kind": "place", "anchor": "middle" }, { "id": "LOC-LOS-008", "text": "\u585E\u62C9\u6587\u7011\u5E03", "x": 79, "y": 26.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-LOS-013", "text": "\u5357\u6C50\u6CB3\u53E3\u57E0", "x": 51.2, "y": 83.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-LOS-014", "text": "\u9E25\u6E7E\u6D77\u6EE9", "x": 49.3, "y": 90.8, "kind": "place", "anchor": "middle" }, { "id": "water:darna", "text": "\u8FBE\u5C14\u7EB3\u6CB3", "x": 42.4, "y": 22, "kind": "water", "anchor": "middle", "rotation": 24 }, { "id": "water:darna-branch", "text": "\u827E\u6D1B\u6069\u6CB3", "x": 64, "y": 16.5, "kind": "water", "anchor": "middle", "rotation": 0 }, { "id": "water:seraven", "text": "\u585E\u62C9\u6587\u6CB3", "x": 86, "y": 12, "kind": "water", "anchor": "middle", "rotation": -10 }, { "id": "water:nanshi", "text": "\u5357\u6C50\u6CB3", "x": 58.6, "y": 85.4, "kind": "water", "anchor": "middle", "rotation": 0 }, { "id": "exit:REG-09:REG-07:land:1", "text": "\u675C\u5C14\u6587\u5C71\u8109", "x": 64, "y": 3.5, "kind": "exit", "anchor": "middle", "direction": 0 }, { "id": "exit:REG-09:REG-08:land:2", "text": "\u7EF4\u65AF\u5361\u68EE\u6797", "x": 6, "y": 40.5, "kind": "exit", "anchor": "middle", "direction": 270 }, { "id": "exit:REG-09:REG-11:land:3", "text": "\u7D22\u62C9\u6069\u6C99\u6D77", "x": 94, "y": 47.6, "kind": "exit", "anchor": "middle", "direction": 90 }, { "id": "exit:REG-09:REG-04:water:4", "text": "\u5361\u5FB7\u6E29\u6D77\u6E7E", "x": 26, "y": 94, "kind": "exit", "anchor": "middle", "direction": 270 }, { "id": "village:REG-09:1", "text": "\u8D1D\u745E\u6069\u6751", "x": 21, "y": 27.5, "kind": "village", "anchor": "middle" }, { "id": "village:REG-09:2", "text": "\u7EF4\u5170\u745F\u6751", "x": 92, "y": 39.7, "kind": "village", "anchor": "middle" }] },
    "REG-10": { image: clean_reg_10_20261026_default, points: { "LOC-ESK-001": [40.9, 38.4], "LOC-ESK-002": [40.9, 38.4], "LOC-ESK-003": [40.9, 38.4], "LOC-ESK-004": [40.9, 38.4], "LOC-ESK-005": [65.7, 28.3], "LOC-ESK-006": [69.7, 62.5], "LOC-ESK-007": [46.5, 84.1], "LOC-ESK-008": [44.3, 61.8], "LOC-ESK-009": [30.7, 36.2] }, labels: [{ "id": "LOC-ESK-001", "text": "\u5FB7\u5170\u745F", "x": 41, "y": 28.8, "kind": "place", "anchor": "middle" }, { "id": "LOC-ESK-005", "text": "\u963F\u65AF\u5361\u4F26\u9636\u57CE", "x": 65.5, "y": 18.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-ESK-006", "text": "\u7EF4\u96F7\u6069\u65AD\u5D16", "x": 72.5, "y": 54.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-ESK-007", "text": "\u8BFA\u7EF4\u6069\u4E95\u7AD9", "x": 47, "y": 78.8, "kind": "place", "anchor": "middle" }, { "id": "LOC-ESK-008", "text": "\u8D6B\u7F57\u6069\u65E7\u6CB3\u5E8A", "x": 43, "y": 65.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-ESK-009", "text": "\u74E6\u5C14\u5FB7\u89C2\u666F\u5761", "x": 30, "y": 32.2, "kind": "place", "anchor": "middle" }, { "id": "water:darna", "text": "\u8FBE\u5C14\u7EB3\u6CB3", "x": 25.5, "y": 55.5, "kind": "water", "anchor": "middle", "rotation": 0, "vertical": true }, { "id": "water:seraven", "text": "\u585E\u62C9\u6587\u6CB3", "x": 88.5, "y": 66, "kind": "water", "anchor": "middle", "rotation": 0, "vertical": true }, { "id": "exit:REG-10:REG-07:land:1", "text": "\u675C\u5C14\u6587\u5C71\u8109", "x": 6.5, "y": 28, "kind": "exit", "anchor": "middle", "direction": 270 }, { "id": "exit:REG-10:REG-13:land:2", "text": "\u74E6\u8428\u6069\u706B\u5C71\u533A", "x": 92, "y": 23.2, "kind": "exit", "anchor": "middle", "direction": 90 }, { "id": "exit:REG-10:REG-11:land:3", "text": "\u7D22\u62C9\u6069\u6C99\u6D77", "x": 55, "y": 95, "kind": "exit", "anchor": "middle", "direction": 180 }, { "id": "exit:REG-10:REG-09:water:4", "text": "\u6D1B\u65AF\u6587\u6E56\u533A", "x": 16.8, "y": 94, "kind": "exit", "anchor": "middle", "direction": 225 }, { "id": "exit:REG-10:REG-09:water:5", "text": "\u6D1B\u65AF\u6587\u6E56\u533A", "x": 81, "y": 94, "kind": "exit", "anchor": "middle", "direction": 225 }, { "id": "village:REG-10:1", "text": "\u5854\u745E\u5C14\u6751", "x": 31.5, "y": 19.4, "kind": "village", "anchor": "middle" }, { "id": "village:REG-10:2", "text": "\u8D1D\u6D1B\u6069\u6751", "x": 94, "y": 72.5, "kind": "village", "anchor": "middle" }] },
    "REG-11": { image: clean_reg_11_20261026_default, points: { "LOC-SOL-001": [51.8, 54.2], "LOC-SOL-002": [51.8, 54.2], "LOC-SOL-003": [51.8, 54.2], "LOC-SOL-004": [51.8, 54.2], "LOC-SOL-005": [90.2, 49.6], "LOC-SOL-006": [63.6, 34.2], "LOC-SOL-007": [84.1, 78.2], "LOC-SOL-008": [60.5, 74.3], "LOC-SOL-009": [25.6, 50.8], "LOC-SOL-010": [46.9, 54.1] }, labels: [{ "id": "LOC-SOL-001", "text": "\u8428\u7EF4\u5170", "x": 53, "y": 44.7, "kind": "place", "anchor": "middle" }, { "id": "LOC-SOL-005", "text": "\u963F\u7EF4\u745F\u5C14\u73BB\u7483\u5CE1\u8C37", "x": 88.4, "y": 39.7, "kind": "place", "anchor": "middle" }, { "id": "LOC-SOL-006", "text": "\u5965\u745E\u6069\u6C99\u4E18", "x": 61.5, "y": 29.4, "kind": "place", "anchor": "middle" }, { "id": "LOC-SOL-007", "text": "\u6CD5\u5C14\u745F\u5DE8\u9AB8", "x": 84.4, "y": 84.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-SOL-008", "text": "\u745F\u5170\u5FB7\u6C34\u5EAD", "x": 60.2, "y": 80.1, "kind": "place", "anchor": "middle" }, { "id": "LOC-SOL-009", "text": "\u79D1\u745E\u6069\u7EFF\u6D32\u6751", "x": 25.3, "y": 45.8, "kind": "place", "anchor": "middle" }, { "id": "water:seraven", "text": "\u585E\u62C9\u6587\u6CB3", "x": 80.4, "y": 8.5, "kind": "water", "anchor": "middle", "rotation": -5, "fontSize": 18 }, { "id": "exit:REG-11:REG-10:land:1", "text": "\u57C3\u65AF\u51EF\u5C14\u8352\u539F", "x": 33.5, "y": 4.5, "kind": "exit", "anchor": "middle", "direction": 0, "arrowPoint": [33.5, 2] }, { "id": "exit:REG-11:REG-09:land:2", "text": "\u6D1B\u65AF\u6587\u6E56\u533A", "x": 8.5, "y": 56.2, "kind": "exit", "anchor": "middle", "direction": 270, "arrowPoint": [3, 53.8] }, { "id": "exit:REG-11:REG-14:land:3", "text": "\u827E\u65AF\u5854\u6069\u5D16\u5CB8", "x": 92.8, "y": 23.2, "kind": "exit", "anchor": "middle", "direction": 60, "arrowPoint": [98.4, 25] }, { "id": "exit:REG-11:REG-09:water:4", "text": "\u6D1B\u65AF\u6587\u6E56\u533A", "x": 7.8, "y": 27.5, "kind": "exit", "anchor": "middle", "direction": 270, "arrowPoint": [3.1, 27.5], "fontSize": 20 }, { "id": "village:REG-11:1", "text": "\u74E6\u745E\u6069\u6751", "x": 34.6, "y": 68.8, "kind": "village", "anchor": "middle" }, { "id": "village:REG-11:2", "text": "\u54C8\u4F26\u5FB7\u6751", "x": 53.8, "y": 21.5, "kind": "village", "anchor": "middle" }, { "id": "water:vinarl", "text": "\u7EF4\u7EB3\u5C14\u6E56", "x": 10, "y": 32.5, "kind": "water", "anchor": "middle", "fontSize": 25 }, { "id": "water:ailoren", "text": "\u827E\u6D1B\u6069\u6CB3", "x": 21.5, "y": 27.2, "kind": "water", "anchor": "middle", "characterPoints": [[22.9, 24.2], [22.3, 26.2], [21.1, 28.2], [19.7, 30.2]], "fontSize": 15 }] },
    "REG-12": { image: clean_reg_12_20261026_default, points: { "LOC-NOR-001": [51, 62.2], "LOC-NOR-002": [51, 62.2], "LOC-NOR-003": [51, 62.2], "LOC-NOR-004": [51, 62.2], "LOC-NOR-005": [45, 34], "LOC-NOR-006": [72.8, 40.2], "LOC-NOR-007": [82, 54.1], "LOC-NOR-008": [44.6, 74], "LOC-NOR-009": [70, 79.4], "LOC-NOR-010": [51, 62.2] }, labels: [{ "id": "LOC-NOR-001", "text": "\u8D6B\u5C14\u65AF\u5854\u5FB7", "x": 56, "y": 50.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-NOR-005", "text": "\u4F0A\u5C14\u74E6\u6069\u6E56", "x": 45, "y": 35.5, "kind": "water", "anchor": "middle" }, { "id": "LOC-NOR-006", "text": "\u7EF4\u65AF\u5854\u89C2\u666F\u53F0", "x": 77, "y": 37.2, "kind": "place", "anchor": "middle" }, { "id": "LOC-NOR-007", "text": "\u6258\u5C14\u8D5B\u6069\u5DE8\u77F3\u5ECA", "x": 90.5, "y": 53.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-NOR-009", "text": "\u827E\u6587\u8D6B\u907F\u98CE\u9A7F", "x": 70, "y": 74, "kind": "place", "anchor": "middle" }, { "id": "water:darna", "text": "\u8FBE\u5C14\u7EB3\u6CB3", "x": 45, "y": 78, "kind": "water", "anchor": "middle", "rotation": 0, "vertical": true }, { "id": "exit:REG-12:REG-06:land:1", "text": "\u5E03\u96F7\u5361\u9AD8\u5730", "x": 9, "y": 93, "kind": "exit", "anchor": "middle", "direction": 240 }, { "id": "exit:REG-12:REG-13:land:2", "text": "\u74E6\u8428\u6069\u706B\u5C71\u533A", "x": 91, "y": 94, "kind": "exit", "anchor": "middle", "direction": 115 }, { "id": "exit:REG-12:REG-07:water:3", "text": "\u675C\u5C14\u6587\u5C71\u8109", "x": 44, "y": 95, "kind": "exit", "anchor": "middle", "direction": 180 }, { "id": "village:REG-12:1", "text": "\u7EF4\u5C14\u8BFA\u6751", "x": 13, "y": 50.8, "kind": "village", "anchor": "middle" }, { "id": "village:REG-12:2", "text": "\u8D6B\u5FB7\u6797\u6751", "x": 28, "y": 50, "kind": "village", "anchor": "middle" }] },
    "REG-13": { image: clean_reg_13_20261026_default, points: { "LOC-VAS-001": [54.2, 65.6], "LOC-VAS-002": [54.2, 65.6], "LOC-VAS-003": [54.2, 65.6], "LOC-VAS-004": [54.2, 65.6], "LOC-VAS-005": [62.8, 58.8], "LOC-VAS-006": [43.9, 22.6], "LOC-VAS-007": [82.4, 14.7], "LOC-VAS-008": [76.5, 70.2], "LOC-VAS-009": [37, 64.6], "LOC-VAS-010": [60.1, 21.1], "LOC-VAS-011": [65.2, 41.2] }, labels: [{ "id": "LOC-VAS-001", "text": "\u5965\u5C14\u745F\u59C6", "x": 58, "y": 62.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-VAS-005", "text": "\u739B\u745F\u6069\u6E29\u5BA4\u7FA4", "x": 65, "y": 55.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-VAS-006", "text": "\u5E03\u96F7\u6069\u6751", "x": 43.5, "y": 18, "kind": "place", "anchor": "middle" }, { "id": "LOC-VAS-007", "text": "\u5361\u5C14\u7EF4\u65AF\u706B\u5C71", "x": 91, "y": 22.2, "kind": "place", "anchor": "middle" }, { "id": "LOC-VAS-008", "text": "\u4F0A\u65AF\u5FB7\u62C9\u9ED1\u5CA9\u9636\u5730", "x": 81, "y": 65.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-VAS-009", "text": "\u5854\u7EF4\u6069\u6696\u6EAA", "x": 37.5, "y": 67.4, "kind": "water", "anchor": "middle", "rotation": 31, "vertical": false, "characterPoints": [[35.23, 64.15], [36.08, 65.84], [37.03, 67.31], [38.33, 68.88], [39.74, 69.67]] }, { "id": "LOC-VAS-010", "text": "\u7EF4\u6D1B\u65AF\u5CA9\u53F0", "x": 62, "y": 17, "kind": "place", "anchor": "middle" }, { "id": "LOC-VAS-011", "text": "\u5FB7\u5C14\u6587\u89C2\u706B\u53F0", "x": 69, "y": 38, "kind": "place", "anchor": "middle" }, { "id": "water:seraven", "text": "\u585E\u62C9\u6587\u6CB3", "x": 36, "y": 87, "kind": "water", "anchor": "middle", "rotation": -11, "vertical": false }, { "id": "exit:REG-13:REG-12:land:1", "text": "\u8BFA\u5C14\u7EF4\u514B\u51BB\u539F", "x": 36.5, "y": 3.8, "kind": "exit", "anchor": "middle", "direction": 0 }, { "id": "exit:REG-13:REG-10:land:2", "text": "\u57C3\u65AF\u51EF\u5C14\u8352\u539F", "x": 6, "y": 87, "kind": "exit", "anchor": "middle", "direction": 260 }, { "id": "exit:REG-13:REG-14:land:3", "text": "\u827E\u65AF\u5854\u6069\u5D16\u5CB8", "x": 92, "y": 94, "kind": "exit", "anchor": "middle", "direction": 110 }, { "id": "exit:REG-13:REG-09:water:4", "text": "\u6D1B\u65AF\u6587\u6E56\u533A", "x": 12, "y": 95, "kind": "exit", "anchor": "middle", "direction": 250 }, { "id": "village:REG-13:1", "text": "\u51EF\u6D1B\u65AF\u6751", "x": 21, "y": 75.5, "kind": "village", "anchor": "middle" }, { "id": "village:REG-13:2", "text": "\u745F\u7EF4\u6069\u6751", "x": 89, "y": 52, "kind": "village", "anchor": "middle" }] },
    "REG-14": { image: clean_reg_14_20261026_default, points: { "LOC-EST-001": [57.5, 26.7], "LOC-EST-002": [57.5, 26.7], "LOC-EST-003": [57.5, 26.7], "LOC-EST-004": [57.5, 26.7], "LOC-EST-005": [44.9, 70.8], "LOC-EST-006": [44.9, 70.8], "LOC-EST-007": [44.9, 70.8], "LOC-EST-008": [44.4, 82.2], "LOC-EST-009": [46.5, 55.5], "LOC-EST-010": [28.7, 50.7], "LOC-EST-011": [24.5, 83.3], "LOC-EST-012": [82.7, 66], "LOC-EST-013": [72.1, 73.6], "LOC-EST-014": [44.9, 70.8], "LOC-EST-015": [57.5, 26.7] }, labels: [{ "id": "LOC-EST-001", "text": "\u54C8\u5C14\u7EF4\u65AF", "x": 64, "y": 17, "kind": "place", "anchor": "middle" }, { "id": "LOC-EST-005", "text": "\u7EF4\u5C14\u745F\u9547", "x": 47, "y": 64, "kind": "place", "anchor": "middle" }, { "id": "LOC-EST-008", "text": "\u827E\u6587\u91CC\u7267\u573A", "x": 46, "y": 85, "kind": "place", "anchor": "middle" }, { "id": "LOC-EST-009", "text": "\u6CD5\u5C14\u6E29\u65E7\u5821", "x": 51, "y": 51, "kind": "place", "anchor": "middle" }, { "id": "LOC-EST-010", "text": "\u8D1D\u4F26\u7EB3\u6E2F\u6751", "x": 34, "y": 45, "kind": "place", "anchor": "middle" }, { "id": "LOC-EST-011", "text": "\u83B1\u65AF\u6587\u6D77\u5D16", "x": 24.5, "y": 89.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-EST-012", "text": "\u4F0A\u65AF\u5854\u7EF4\u5C14\u5CAC", "x": 78.5, "y": 63.5, "kind": "place", "anchor": "middle" }, { "id": "LOC-EST-013", "text": "\u5965\u5C14\u5FB7\u89C2\u666F\u9636\u5730", "x": 67, "y": 67.5, "kind": "place", "anchor": "middle" }, { "id": "water:starshore", "text": "\u661F\u6D77\u4E4B\u5CB8", "x": 92, "y": 86, "kind": "water", "anchor": "middle", "rotation": 0, "vertical": false }, { "id": "exit:REG-14:REG-13:land:1", "text": "\u74E6\u8428\u6069\u706B\u5C71\u533A", "x": 36.5, "y": 4, "kind": "exit", "anchor": "middle", "direction": 0 }, { "id": "exit:REG-14:REG-11:land:2", "text": "\u7D22\u62C9\u6069\u6C99\u6D77", "x": 7, "y": 63, "kind": "exit", "anchor": "middle", "direction": 270 }, { "id": "village:REG-14:1", "text": "\u7F57\u7EF4\u6069\u6751", "x": 13, "y": 28.8, "kind": "village", "anchor": "middle" }, { "id": "village:REG-14:2", "text": "\u5FB7\u745E\u5C14\u6751", "x": 23, "y": 69.5, "kind": "village", "anchor": "middle" }] },
    "REG-15": { image: clean_reg_15_20261026_default, points: { "LOC-TOR-001": [46.3, 45.6], "LOC-TOR-002": [19.8, 15.8], "LOC-TOR-003": [49.8, 80.4], "LOC-TOR-004": [69.4, 44.7] }, labels: [{ "id": "LOC-TOR-001", "text": "\u6258\u4F26\u6E14\u57E0", "x": 44.3, "y": 53, "kind": "place", "anchor": "middle" }, { "id": "LOC-TOR-002", "text": "\u6258\u4F26\u5CAC\u89D2", "x": 26, "y": 27, "kind": "place", "anchor": "middle" }, { "id": "LOC-TOR-003", "text": "\u57C3\u6587\u7901\u6EE9", "x": 49, "y": 81, "kind": "place", "anchor": "middle" }, { "id": "LOC-TOR-004", "text": "\u6E29\u5FB7\u5C14\u6751", "x": 72, "y": 38.5, "kind": "place", "anchor": "middle" }, { "id": "exit:REG-15:REG-01:land:1", "text": "\u7EF4\u5C14\u767B\u6CB3\u8C37", "x": 94, "y": 36, "kind": "exit", "anchor": "middle", "direction": 90 }, { "id": "exit:REG-15:REG-04:water:2", "text": "\u5361\u5FB7\u6E29\u6D77\u6E7E", "x": 12, "y": 90, "kind": "exit", "anchor": "middle", "direction": 215 }, { "id": "village:REG-15:1", "text": "\u5361\u5C14\u8BFA\u6751", "x": 52, "y": 21, "kind": "village", "anchor": "middle" }, { "id": "village:REG-15:2", "text": "\u7EF4\u6069\u8FBE\u6751", "x": 84.9, "y": 68.3, "kind": "village", "anchor": "middle" }] }
  };

  // src/ui-geometric/assets/fonts/AtlasXiaoWei-20261027.woff2
  var AtlasXiaoWei_20261027_default = "https://cdn.jsdelivr.net/gh/gugu-art/fantasy-travel-assets@0b8b9c164b73a6a69eb3cf9cfcfe8120fce6573e/handbook/fonts/xiaowei/AtlasXiaoWei-20261027.woff2";

  // src/ui-geometric/region-atlas-labels.mjs
  var NS = "http://www.w3.org/2000/svg";
  var escape = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  var px = (value, axis) => Number((value * (axis === "x" ? 17.74 : 8.87)).toFixed(3));
  var ink = "#183c59";
  var edge = "#9e7839";
  var paper = "#fff2d7";
  var typeSize = { city: 32, place: 27, village: 23, water: 29, exit: 24 };
  var atlasLabelRules = `
.at-region-labels{position:absolute;inset:0;width:100%;height:100%;overflow:hidden;pointer-events:none}
.at-region-labels text{font-family:AtlasXiaoWei,serif;font-weight:400;font-synthesis:none;text-rendering:geometricPrecision}
`;
  var atlasLabelStyle = `@font-face{font-family:AtlasXiaoWei;src:url('${AtlasXiaoWei_20261027_default}') format('woff2');font-weight:400;font-style:normal;font-display:swap}
${atlasLabelRules}`;
  function riverText(label) {
    const size = label.fontSize ?? (/[河溪]$/.test(label.text) ? 23 : typeSize.water);
    const attrs = `class="atlas-label--water" font-size="${size}" fill="#205a79" stroke="#fff5dc" stroke-opacity=".95" stroke-width="1" paint-order="stroke"`;
    if (label.characterPoints) {
      return `<text ${attrs} aria-label="${escape(label.text)}">${[...label.text].map((character, i) => `<tspan x="${px(label.characterPoints[i][0], "x")}" y="${px(label.characterPoints[i][1], "y")}">${escape(character)}</tspan>`).join("")}</text>`;
    }
    const x = px(label.x, "x"), y = px(label.y, "y");
    const vertical = label.vertical ? ' style="writing-mode:vertical-rl;text-orientation:upright"' : "";
    const rotation = label.rotation ? ` transform="rotate(${label.rotation} ${x} ${y})"` : "";
    return `<text ${attrs} x="${x}" y="${y}"${vertical}${rotation} letter-spacing="${label.vertical ? ".09em" : ".13em"}">${escape(label.text)}</text>`;
  }
  function nameplate(role, width, height) {
    const l = -width / 2, r = width / 2, t = -height / 2, b = height / 2, dark = role === "city", trim = dark ? "#e0c081" : edge;
    return `<path d="M${l + 10} ${t}H${r - 10}L${r} 0 ${r - 10} ${b}H${l + 10}L${l} 0Z" fill="${dark ? "#163e58" : paper}" stroke="${edge}" stroke-width="1.5"/><path d="M${l + 15} ${t + 5}H${r - 15}M${l + 15} ${b - 5}H${r - 15}" fill="none" stroke="${trim}" stroke-width=".7"/><path d="m${l + 14} -2 2 2-2 2-2-2Z m${r - 14} -2 2 2-2 2-2-2Z" fill="${trim}"/>`;
  }
  function atlasLabelContent(labels3) {
    return `<g class="atlas-lettering" font-family="AtlasXiaoWei" font-weight="400" text-anchor="middle" dominant-baseline="central" style="font-synthesis:none">${labels3.map((label) => {
      const common = `data-label-id="${escape(label.id)}" data-kind="${escape(label.kind)}" aria-label="${escape(label.text)}"`;
      if (label.kind === "water") return `<g ${common}>${riverText(label)}</g>`;
      const role = label.kind === "place" ? /-001$/.test(label.id) || label.text === "\u96F7\u6587\u7EB3" ? "city" : "place" : label.kind;
      const size = typeSize[role], chars = [...label.text].length, width = chars * size * 1.024 + (chars - 1) + 54, height = size + (role === "city" ? 25 : 20);
      const x = Math.max(width / 2 + 19, Math.min(1774 - width / 2 - 19, px(label.x, "x"))), y = Math.max(height / 2 + 19, Math.min(887 - height / 2 - 19, px(label.y, "y")));
      if (role === "exit") {
        const point = label.arrowPoint ? label.arrowPoint.map((n, i) => px(n, i ? "y" : "x")) : [x - width / 2 + 9, y];
        const text = label.characterPoints ? `<text font-size="${label.fontSize ?? size}" fill="${ink}" stroke="${paper}" stroke-width="1.4" paint-order="stroke">${[...label.text].map((c, i) => `<tspan x="${px(label.characterPoints[i][0], "x")}" y="${px(label.characterPoints[i][1], "y")}">${escape(c)}</tspan>`).join("")}</text>` : `<text x="${x + 10}" y="${y}" font-size="${size}" fill="${ink}" stroke="${paper}" stroke-width="2" paint-order="stroke" letter-spacing="1">${escape(label.text)}</text>`;
        return `<g ${common}><path class="atlas-exit-arrow" d="M-1 11V-8M-7-2 0-10 7-2" transform="translate(${point[0]} ${point[1]}) rotate(${label.direction})" fill="none" stroke="${edge}" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round"/>${text}</g>`;
      }
      return `<g ${common} data-role="${role}" transform="translate(${x} ${y})">${nameplate(role, width, height)}<text x="0" y="0" font-size="${size}" letter-spacing="1" fill="${role === "city" ? "#fff1cf" : ink}">${escape(label.text)}</text></g>`;
    }).join("")}</g>`;
  }
  function atlasLabelSvg(labels3, imageHref = null, includeFont = true) {
    return `<svg xmlns="${NS}" class="at-region-labels" viewBox="0 0 1774 887" preserveAspectRatio="none" role="group" aria-label="\u5730\u56FE\u5730\u540D"><style>${includeFont ? atlasLabelStyle : atlasLabelRules}</style>${imageHref ? `<image href="${escape(imageHref)}" width="1774" height="887"/>` : ""}${atlasLabelContent(labels3)}</svg>`;
  }
  function createAtlasLabelLayer(labels3) {
    return new DOMParser().parseFromString(atlasLabelSvg(labels3, null, false), "image/svg+xml").documentElement;
  }

  // src/ui-geometric/assets/map-ornament-c-20261027.png
  var map_ornament_c_20261027_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/42601fb2fe0cf29da83f94a187a449e5cfe1cb45/handbook/images/map-ornaments/map-ornament-c-20261027.png";

  // src/ui-geometric/assets/map-ornament-c-title-blank-20261027.png
  var map_ornament_c_title_blank_20261027_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/42601fb2fe0cf29da83f94a187a449e5cfe1cb45/handbook/images/map-ornaments/map-ornament-c-title-blank-20261027.png";

  // src/ui-geometric/assets/map-ornament-c-collapse-blank-20261027.png
  var map_ornament_c_collapse_blank_20261027_default = "https://raw.githubusercontent.com/gugu-art/fantasy-travel-assets/42601fb2fe0cf29da83f94a187a449e5cfe1cb45/handbook/images/map-ornaments/map-ornament-c-collapse-blank-20261027.png";

  // src/ui-geometric/region-map-header.mjs
  var NS2 = "http://www.w3.org/2000/svg";
  function createRegionMapHeader(name, width, height) {
    const header = document.createElementNS(NS2, "svg");
    const titleWidth = Math.max(430, [...name].length * 52 + 170), titleHeight = titleWidth * 485 / 1120;
    header.classList.add("at-region-map-header");
    header.setAttribute("viewBox", `0 0 ${width} ${height}`);
    header.setAttribute("preserveAspectRatio", "none");
    header.setAttribute("role", "img");
    header.setAttribute("aria-label", name + "\uFF0C\u5317\u65B9\u671D\u4E0A");
    header.innerHTML = `<g class="at-region-map-title" data-title-style="C" transform="translate(22 12)">
    <svg width="${titleWidth}" height="${titleHeight}" viewBox="15 145 1120 485"><image href="${map_ornament_c_title_blank_20261027_default}" width="2172" height="724"/></svg>
    <text x="${titleWidth / 2}" y="${titleHeight / 2}" font-size="52"></text>
  </g><svg class="at-region-map-north" data-compass-style="C" x="${width - 154}" y="14" width="132" height="${132 * 570 / 490}" viewBox="1665 60 490 570"><image href="${map_ornament_c_20261027_default}" width="2172" height="724"/></svg>`;
    header.querySelector(".at-region-map-title text").textContent = name;
    return header;
  }
  function createRegionMapCollapseArt() {
    const art2 = document.createElementNS(NS2, "svg");
    art2.classList.add("at-region-map-collapse-art");
    art2.setAttribute("viewBox", "1156 237 464 288");
    art2.setAttribute("aria-hidden", "true");
    art2.innerHTML = `<image href="${map_ornament_c_collapse_blank_20261027_default}" width="2172" height="724"/>`;
    return art2;
  }

  // src/ui-geometric/region-atlas.mjs
  function mountRegionAtlas(target, { region, state, view, width, height }) {
    const map = regionAtlases[region];
    const viewport = document.createElement("div");
    viewport.className = "at-region-map-viewport";
    viewport.tabIndex = 0;
    viewport.dataset.region = region;
    viewport.dataset.mapKind = "region-atlas";
    viewport.setAttribute("aria-label", regionName(region) + "\u5730\u533A\u5730\u56FE\uFF1B\u62D6\u52A8\u6216\u65B9\u5411\u952E\u5E73\u79FB\uFF0C\u6EDA\u8F6E\u6216\u52A0\u51CF\u952E\u7F29\u653E");
    const plane = document.createElement("div");
    plane.className = "at-region-map-plane";
    const crop = document.createElement("div");
    crop.className = "at-region-map-crop";
    const image = document.createElement("img");
    image.src = map.image;
    image.alt = regionName(region) + "\u738B\u56FD\u8206\u56FE";
    image.draggable = false;
    Object.assign(image.style, { left: "0", top: "0", width: "100%", height: "100%" });
    crop.append(image);
    plane.append(crop, createAtlasLabelLayer(map.labels));
    viewport.append(plane, createRegionMapHeader(regionName(region), width, height));
    target.append(viewport);
    if (region === state.\u573A\u666F.\u5730\u533A) {
      let place = state.\u573A\u666F.\u5730\u70B9;
      while (Object.hasOwn(state.\u73A9\u6CD5.\u5C0F\u5730\u70B9, place)) place = state.\u73A9\u6CD5.\u5C0F\u5730\u70B9[place].\u6240\u5C5E\u5730\u70B9;
      const point = map.points[place];
      const pin = document.createElement("span");
      pin.className = "at-region-current";
      pin.setAttribute("role", "img");
      const label = "\u5F53\u524D\u4F4D\u7F6E\uFF1A" + placeName(state.\u573A\u666F.\u5730\u70B9, state);
      pin.setAttribute("aria-label", label);
      pin.title = label;
      Object.assign(pin.style, { left: point[0] + "%", top: point[1] + "%" });
      const symbol2 = document.createElement("span");
      symbol2.className = "at-symbol at-symbol-current-pin";
      symbol2.setAttribute("aria-hidden", "true");
      for (let i = 0; i < 3; i++) symbol2.append(document.createElement("i"));
      pin.append(symbol2);
      plane.append(pin);
    }
    const ratio = 2, planeWidth = Math.max(width, height * ratio), planeHeight = planeWidth / ratio;
    Object.assign(plane.style, { width: planeWidth + "px", height: planeHeight + "px", marginLeft: -planeWidth / 2 + "px", marginTop: -planeHeight / 2 + "px" });
    function apply() {
      const limitX = (planeWidth * view.zoom - width) / 2, limitY = (planeHeight * view.zoom - height) / 2;
      view.x = Math.max(-limitX, Math.min(limitX, view.x));
      view.y = Math.max(-limitY, Math.min(limitY, view.y));
      plane.style.transform = `translate(${view.x}px,${view.y}px) scale(${view.zoom})`;
    }
    function zoomBy(amount) {
      const previous = view.zoom;
      view.zoom = Math.max(1, Math.min(3, view.zoom + amount));
      view.x *= view.zoom / previous;
      view.y *= view.zoom / previous;
      apply();
    }
    function reset() {
      view.zoom = 1;
      view.x = 0;
      view.y = (planeHeight - height) / 2;
      apply();
    }
    let drag = null;
    viewport.addEventListener("pointerdown", (event) => {
      if (!event.isPrimary) return;
      viewport.focus({ preventScroll: true });
      viewport.setPointerCapture(event.pointerId);
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
      viewport.dataset.dragging = "true";
    });
    viewport.addEventListener("pointermove", (event) => {
      if (!drag || event.pointerId !== drag.id) return;
      const scale = viewport.getBoundingClientRect().width / width;
      view.x += (event.clientX - drag.x) / scale;
      view.y += (event.clientY - drag.y) / scale;
      drag.x = event.clientX;
      drag.y = event.clientY;
      apply();
    });
    const end = () => {
      drag = null;
      viewport.dataset.dragging = "false";
    };
    viewport.addEventListener("pointerup", end);
    viewport.addEventListener("pointercancel", end);
    viewport.addEventListener("lostpointercapture", end);
    viewport.addEventListener("wheel", (event) => {
      event.preventDefault();
      zoomBy(event.deltaY < 0 ? 0.15 : -0.15);
    }, { passive: false });
    viewport.addEventListener("keydown", (event) => {
      if (event.target !== viewport || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "+", "=", "-", "Home"].includes(event.key)) return;
      event.preventDefault();
      if (event.key === "+" || event.key === "=") zoomBy(0.2);
      else if (event.key === "-") zoomBy(-0.2);
      else if (event.key === "Home") reset();
      else {
        view.x += event.key === "ArrowLeft" ? 45 : event.key === "ArrowRight" ? -45 : 0;
        view.y += event.key === "ArrowUp" ? 45 : event.key === "ArrowDown" ? -45 : 0;
        apply();
      }
    });
    apply();
    return { reset };
  }

  // src/ui-geometric/atlas.mjs
  var regions = atlas_default.regions;
  var node6 = (tag, cls = "", text = "") => {
    const n = document.createElement(tag);
    n.className = cls;
    n.textContent = text;
    return n;
  };
  var button2 = (label, cls, run) => {
    const b = node6("button", cls, label);
    b.type = "button";
    b.addEventListener("click", run);
    return b;
  };
  function lines(kind) {
    const n = node6("span", "at-lines at-" + kind);
    n.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 18; i++) n.append(node6("i"));
    return n;
  }
  function frame3() {
    const f = node6("span", "at-frame-refined"), design = node6("span", "at-refined-design"), lower = node6("span", "at-frame-lower");
    f.dataset.frame = "map";
    f.setAttribute("aria-hidden", "true");
    design.append(lines("refined-top-map"), lines("refined-accent-top-map"));
    for (const [x, width] of [[13.5, 1.6], [22.2, 1], [1751, 1], [1759.5, 1.6]]) {
      const rail = node6("i", "at-refined-bridge");
      rail.style.left = x - width / 2 + "px";
      rail.style.width = width + "px";
      design.append(rail);
    }
    for (const side of ["left", "right"]) lower.append(node6("i", "at-refined-paint at-refined-paint-map-" + side));
    lower.append(lines("refined-bottom-map"), lines("refined-accent-bottom-map"));
    for (const [id, [x, y, right, bottom]] of Object.entries({ "bottom-left": [3, 771, 127, 887], "bottom-right": [1653, 776, 1773, 887], "bottom-middle": [848, 834, 927, 887] })) {
      const target = node6("i", "at-frame-target");
      target.dataset.frameTarget = id;
      Object.assign(target.style, { left: x + "px", top: y - 730 + "px", width: right - x + "px", height: bottom - y + "px" });
      lower.append(target);
    }
    design.append(lower);
    f.append(design);
    return f;
  }
  function symbol(kind, cls = "") {
    const n = node6("span", "at-symbol at-symbol-" + kind + " " + cls);
    n.setAttribute("aria-hidden", "true");
    n.append(node6("i"), node6("i"), node6("i"));
    return n;
  }
  var star2 = (cls = "") => symbol("star", cls);
  function fitSymbols(root) {
    for (const s of root.querySelectorAll(".at-symbol:not(.at-symbol-compass)")) {
      const size = getComputedStyle(s);
      s.style.setProperty("--at-symbol-sx", parseFloat(size.width) / 32);
      s.style.setProperty("--at-symbol-sy", parseFloat(size.height) / 36);
    }
  }
  function landscape(info, cls = "", alt = "") {
    const f = node6("span", "at-landscape " + cls), img = node6("img");
    img.src = info.src;
    img.alt = alt;
    img.draggable = false;
    f.append(img);
    f.dataset.imageKind = info.kind;
    return f;
  }
  function shell(target, options, kind) {
    let snapshot = options.snapshot, state = options.state;
    const viewport = node6("div", "at-viewport"), sheet = node6("article", "at-sheet at-" + kind), header = node6("div", "at-header"), body = node6("div", "at-body");
    sheet.style.height = options.frameHeight + "px";
    sheet.style.setProperty("--at-frame-height", options.frameHeight + "px");
    sheet.setAttribute("aria-label", kind === "map" ? "\u5927\u9646\u5730\u56FE" : "\u5730\u533A\u5730\u56FE");
    sheet.append(header, body);
    viewport.append(sheet);
    target.append(viewport);
    const topbar = createTopbar({ getScene: () => state.\u573A\u666F, active: "map", date: (state.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? "\u65E5\u671F\u5F85\u8BB0\u5F55").replace(/^共历\d+年/, ""), weather: state.\u573A\u666F.\u5929\u6C14, period: state.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5, onSelect(id) {
      options.onNavigate(id, TOPBAR_PAGES.find(([key]) => key === id)[1]);
    } });
    header.append(topbar.element);
    const resize = () => {
      const scale = viewport.clientWidth / 1774;
      sheet.style.transform = "scale(" + scale + ")";
      viewport.style.height = options.frameHeight * scale + "px";
    };
    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    return { viewport, sheet, body, get state() {
      return state;
    }, get snapshot() {
      return snapshot;
    }, regionArt(rid) {
      const r = REGION_ART[rid];
      return { src: snapshot.regionImages[rid] || options.assets["original-" + r.asset], kind: "region", label: "\u5730\u533A\u666F\u89C2\u793A\u610F" };
    }, setNavigation(id) {
      topbar.setActive(id);
    }, refresh(next) {
      snapshot = next;
      state = next.state;
    }, resize, destroy() {
      observer.disconnect();
      topbar.destroy();
      viewport.remove();
    } };
  }
  function mountMap(target, options) {
    const c = shell(target, options, "map");
    const view = { region: c.state.\u573A\u666F.\u5730\u533A, zoom: 1, x: 0, y: 0 };
    const mapWidth = 1774 - 23 - 24, mapHeight = options.frameHeight - 115.6058 - 8 - 32;
    const planeWidth = Math.max(mapWidth, mapHeight * MAP_IMAGE_SIZE.width / MAP_IMAGE_SIZE.height), planeHeight = planeWidth * MAP_IMAGE_SIZE.height / MAP_IMAGE_SIZE.width;
    let plane, viewport;
    function apply() {
      const limitX = Math.max(0, (planeWidth * view.zoom - mapWidth) / 2), limitY = Math.max(0, (planeHeight * view.zoom - mapHeight) / 2);
      view.x = Math.max(-limitX, Math.min(limitX, view.x));
      view.y = Math.max(-limitY, Math.min(limitY, view.y));
      plane.style.transform = "translate(" + view.x + "px," + view.y + "px) scale(" + view.zoom + ")";
    }
    function resetView() {
      view.zoom = 1;
      view.x = 0;
      view.y = 0;
      apply();
    }
    function zoom(amount) {
      const old = view.zoom;
      view.zoom = Math.max(1, Math.min(3, view.zoom + amount));
      view.x *= view.zoom / old;
      view.y *= view.zoom / old;
      apply();
    }
    function locate() {
      const [x, y] = MAP_IMAGE_POINTS[c.state.\u573A\u666F.\u5730\u533A];
      view.region = c.state.\u573A\u666F.\u5730\u533A;
      view.zoom = 1.6;
      view.x = (0.5 - x / 100) * planeWidth * view.zoom;
      view.y = (0.5 - y / 100) * planeHeight * view.zoom;
      render3();
    }
    function render3() {
      const s = c.state, root = node6("section", "at-map-content");
      root.setAttribute("aria-label", "\u57C3\u5C14\u745F\u4E9A\u65C5\u9014\u5730\u56FE");
      c.body.replaceChildren(frame3(), root);
      viewport = node6("div", "at-map-viewport");
      viewport.tabIndex = 0;
      viewport.setAttribute("aria-label", "\u5927\u9646\u5730\u56FE\uFF1A\u62D6\u52A8\u6216\u65B9\u5411\u952E\u5E73\u79FB\uFF0C\u52A0\u51CF\u7F29\u653E");
      plane = node6("div", "at-map-plane");
      Object.assign(plane.style, { width: planeWidth + "px", height: planeHeight + "px", marginLeft: -planeWidth / 2 + "px", marginTop: -planeHeight / 2 + "px" });
      plane.append(landscape({ src: continent_selected_20261025_default, kind: "map" }, "at-clean-map", "\u57C3\u5C14\u745F\u4E9A\u5927\u9646\u5730\u56FE"));
      const visited = new Set(Object.keys(s.\u65C5\u7A0B.\u5230\u8BBF).map((id) => WORLD.places[id] ? WORLD.places[id].region : s.\u73A9\u6CD5.\u5C0F\u5730\u70B9[id].\u5730\u533A));
      for (const r2 of regions) {
        const b = button2("", "at-map-marker", () => {
          view.region = r2.id;
          render3();
          if (r2.id === "REG-15") options.onOpen("region", { region: r2.id });
        }), width = r2.name.length * 22 + 61;
        b.dataset.region = r2.id;
        b.dataset.current = String(r2.id === s.\u573A\u666F.\u5730\u533A);
        b.dataset.visited = String(visited.has(r2.id));
        b.setAttribute("aria-pressed", String(r2.id === view.region));
        b.setAttribute("aria-label", "\u67E5\u770B\u5730\u533A\uFF1A" + r2.name);
        Object.assign(b.style, { left: MAP_IMAGE_POINTS[r2.id][0] + "%", top: MAP_IMAGE_POINTS[r2.id][1] + "%", width: width + "px" });
        b.style.setProperty("--marker-scale", width / 209);
        b.append(node6("span", "at-marker-face"), node6("span", "at-marker-outer"), node6("span", "at-marker-inner"), node6("span", "at-marker-tip at-marker-tip-left"), node6("span", "at-marker-tip at-marker-tip-right"), symbol(r2.id === "REG-01" ? "pine" : MAP_THEMES[r2.id].key), node6("span", "at-map-label", r2.name));
        if (r2.id === s.\u573A\u666F.\u5730\u533A) b.append(symbol("current-pin", "at-current-pin"));
        else if (visited.has(r2.id)) b.append(star2("at-visited-mark"));
        plane.append(b);
      }
      viewport.append(plane);
      root.append(viewport);
      const heading3 = node6("div", "at-map-heading");
      heading3.append(node6("span", "at-heading-paper-exact"), lines("heading-reference"), node6("h1", "", "\u57C3\u5C14\u745F\u4E9A \xB7 \u65C5\u9014\u5730\u56FE"));
      root.append(heading3);
      const legend = node6("div", "at-map-legend");
      legend.append(symbol("current-pin"), node6("span", "", "\u5F53\u524D\u4F4D\u7F6E"), star2(), node6("span", "", "\u5DF2\u5230\u8BBF"));
      root.append(legend);
      const compass = node6("div", "at-map-compass"), needle = node6("span", "at-symbol at-symbol-compass at-compass-reference");
      needle.append(lines("compass-reference"));
      compass.append(node6("span", "", "N"), needle);
      compass.setAttribute("aria-hidden", "true");
      root.append(compass);
      const tools = node6("nav", "at-map-tools");
      tools.setAttribute("aria-label", "\u5730\u56FE\u5DE5\u5177");
      for (const [label, kind, run] of [["\u653E\u5927\u5730\u56FE", "plus", () => zoom(0.2)], ["\u7F29\u5C0F\u5730\u56FE", "minus", () => zoom(-0.2)], ["\u56DE\u5230\u5F53\u524D\u4F4D\u7F6E", "target", locate], ["\u91CD\u7F6E\u5730\u56FE", "expand", resetView]]) {
        const b = button2("", "at-map-tool", run);
        b.setAttribute("aria-label", label);
        b.title = label;
        b.append(node6("span", "at-tool-face"), lines("map-tool"), symbol(kind));
        tools.append(b);
      }
      root.append(tools);
      const r = REGION_ART[view.region], card = node6("section", "at-map-selection");
      card.dataset.region = view.region;
      card.append(node6("span", "at-selection-face"), lines("map-selection"), landscape(c.regionArt(view.region), "at-selection-image", regionName(view.region) + "\u666F\u89C2"));
      const copy = node6("div", "at-selection-copy"), status = view.region === s.\u573A\u666F.\u5730\u533A ? "\u5F53\u524D\u6240\u5728" : visited.has(view.region) ? "\u5DF2\u5230\u8BBF\u7684\u5927\u5730\u533A" : "\u5730\u56FE\u53EF\u77E5 \xB7 \u5C1A\u672A\u5230\u8BBF";
      copy.append(node6("h2", "", r.name));
      const statusLine = node6("p", "at-selection-status", status);
      if (view.region === s.\u573A\u666F.\u5730\u533A) statusLine.prepend(symbol("current-pin"));
      copy.append(statusLine, node6("p", "at-selection-description", r.summary));
      const enter = button2("", "at-map-enter", () => options.onOpen("region", { region: view.region }));
      enter.append(symbol("next"), node6("span", "", "\u67E5\u770B\u5730\u533A\u5730\u56FE"), symbol("next"));
      copy.append(enter);
      card.append(copy);
      root.append(card);
      const pointers = /* @__PURE__ */ new Map();
      let gesture = null;
      viewport.addEventListener("pointerdown", (e) => {
        if (e.target.closest("button")) return;
        viewport.setPointerCapture(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        gesture = null;
      });
      viewport.addEventListener("pointermove", (e) => {
        if (!pointers.has(e.pointerId)) return;
        const previous = pointers.get(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pointers.size === 1) {
          const scale = c.viewport.clientWidth / 1774;
          view.x += (e.clientX - previous.x) / scale;
          view.y += (e.clientY - previous.y) / scale;
        } else {
          const [a, b] = [...pointers.values()], distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (gesture) {
            const old = view.zoom;
            view.zoom = Math.max(1, Math.min(3, view.zoom * distance / gesture));
            view.x *= view.zoom / old;
            view.y *= view.zoom / old;
          }
          gesture = distance;
        }
        apply();
      });
      const end = (e) => {
        pointers.delete(e.pointerId);
        gesture = null;
      };
      viewport.addEventListener("pointerup", end);
      viewport.addEventListener("pointercancel", end);
      viewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        zoom(e.deltaY < 0 ? 0.1 : -0.1);
      }, { passive: false });
      viewport.addEventListener("keydown", (e) => {
        if (e.target !== viewport || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "+", "-"].includes(e.key)) return;
        e.preventDefault();
        if (e.key === "+") zoom(0.2);
        else if (e.key === "-") zoom(-0.2);
        else {
          view.x += e.key === "ArrowLeft" ? 35 : e.key === "ArrowRight" ? -35 : 0;
          view.y += e.key === "ArrowUp" ? 35 : e.key === "ArrowDown" ? -35 : 0;
          apply();
        }
      });
      apply();
      fitSymbols(c.body);
      c.resize();
    }
    render3();
    return { element: c.viewport, get view() {
      return view;
    }, setNavigation: c.setNavigation, selectRegion(rid) {
      view.region = rid;
      render3();
    }, refresh(next) {
      c.refresh(next);
      render3();
    }, destroy: c.destroy };
  }
  function mountRegionMap(target, options) {
    const c = shell(target, options, "region-map"), view = { region: c.state.\u573A\u666F.\u5730\u533A, zoom: 1, x: 0, y: 0 };
    const width = 1774 - 23 - 24, height = options.frameHeight - 115.6058 - 8 - 32;
    function render3(reset = false) {
      const root = node6("section", "at-region-map-content");
      root.setAttribute("aria-label", regionName(view.region) + "\u5730\u533A\u5730\u56FE");
      c.body.dataset.region = view.region;
      c.body.replaceChildren(frame3(), root);
      const map = mountRegionAtlas(root, { region: view.region, state: c.state, view, width, height });
      const collapse = button2("", "at-region-map-collapse", () => options.onNavigate("map"));
      collapse.setAttribute("aria-label", "\u6536\u8D77\u5730\u56FE");
      collapse.append(createRegionMapCollapseArt(), node6("span", "at-region-map-collapse-label", "\u6536\u8D77\u5730\u56FE"));
      root.append(collapse);
      if (reset) map.reset();
      fitSymbols(c.body);
      c.resize();
    }
    function openRegion(region) {
      view.region = region;
      render3(true);
    }
    render3(true);
    return { element: c.viewport, get view() {
      return view;
    }, setNavigation: c.setNavigation, openRegion, refresh(next) {
      c.refresh(next);
      render3();
    }, destroy: c.destroy };
  }

  // src/ui-geometric/collections.mjs
  var names4 = { xingxing: "\u9192\u9192", xiaogai: "\u5C0F\u76D6", shared: "\u5171\u540C\u65C5\u8D39" };
  var node7 = (tag, cls = "", text = "") => {
    const e = document.createElement(tag);
    e.className = cls;
    e.textContent = text;
    return e;
  };
  var button3 = (text, cls, run) => {
    const b = node7("button", cls, text);
    b.type = "button";
    b.addEventListener("click", run);
    return b;
  };
  function linework4(kind, count = 18) {
    const e = node7("span", "cl-drawing " + kind);
    e.setAttribute("aria-hidden", "true");
    for (let i = 0; i < count; i++) e.append(node7("i"));
    return e;
  }
  function paint(page) {
    const e = node7("span", "cl-paints");
    e.setAttribute("aria-hidden", "true");
    const ids = page === 8 ? ["left-top", "left-right-top", "album-left-top", "album-right-top", "left-bottom", "middle-bottom", "album-left-bottom", "album-right-bottom"] : page === 9 ? ["left-bottom", "right-bottom"] : ["left-top", "right-top", "left-bottom", "right-bottom", "left-list-top", "right-list-top", "task-left-top", "task-right-top"];
    for (const id of ids) e.append(node7("i", "cl-paint cl-paint-" + id + (id.includes("bottom") ? " cl-move-bottom" : "")));
    return e;
  }
  function cropped(descriptor, cls = "") {
    if (!descriptor) return node7("span", "cl-picture cl-missing " + cls, "\u914D\u56FE\u5F85\u8865");
    const frame4 = node7("span", "cl-picture " + cls), canvas = node7("span", "cl-picture-canvas"), img = node7("img");
    img.src = descriptor.src;
    img.alt = "";
    img.draggable = false;
    if (descriptor.crop) {
      const [x, y, w, h] = descriptor.crop;
      canvas.style.setProperty("--crop-ratio", w / h);
      Object.assign(img.style, { width: descriptor.width / w * 100 + "%", height: descriptor.height / h * 100 + "%", left: -x / w * 100 + "%", top: -y / h * 100 + "%" });
    } else {
      frame4.classList.add("cl-picture-external");
    }
    canvas.append(img);
    frame4.append(canvas);
    return frame4;
  }
  function photo(gallery, assets, id, actor, cls = "") {
    const record = gallery.entry(id, actor);
    if (id === "scene-default" && !record.imageSrc && !record.imageWindow) return cropped({ src: assets["original-bond-scene"], width: 1344, height: 1170, crop: [0, 0, 1344, 1170] }, cls);
    if (cls === "cl-current-photo" && record.currentImageWindow) return cropped(record.currentImageWindow, cls);
    if (record.imageWindow) return cropped(record.imageWindow, cls);
    if (record.imageSrc) return cropped({ src: record.imageSrc }, cls);
    if (record.asset) {
      const asset = ORIGINALS[record.asset], crop = record.default && actor ? DEFAULT_PORTRAIT_CROPS[actor] : record.box;
      return cropped({ src: assets["original-" + record.asset], width: asset[1], height: asset[2], crop }, cls);
    }
    return node7("span", "cl-picture cl-missing " + cls, "\u914D\u56FE\u5F85\u8865");
  }
  var collectionPicture = photo;
  function cutControl(text, run, cls = "") {
    const b = button3("", "cl-cut-control " + cls, run);
    b.append(node7("span", "cl-cut-face"), node7("span", "cl-cut-label", text));
    return b;
  }
  function base(target, options, page, active) {
    const { state, frameHeight, onNavigate } = options, viewport = node7("div", "cl-viewport"), sheet = node7("article", "cl-sheet cl-pc" + page), header = node7("div", "cl-header"), body = node7("div", "cl-body");
    sheet.style.height = frameHeight + "px";
    sheet.style.setProperty("--bottom-adapt", { 8: 58, 9: 9, 10: 14 }[page] + "px");
    sheet.append(header, body);
    viewport.append(sheet);
    target.append(viewport);
    const topbar = createTopbar({ getScene: () => state.\u573A\u666F, active, date: (state.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? "\u65E5\u671F\u5F85\u8BB0\u5F55").replace(/^共历\d+年/, ""), weather: state.\u573A\u666F.\u5929\u6C14, period: state.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5, onSelect(id) {
      onNavigate(id, TOPBAR_PAGES.find(([key]) => key === id)[1]);
    } });
    header.append(topbar.element);
    function decorate() {
      body.replaceChildren();
      for (const id of ["gold", "accent"]) for (const pos of ["top", "bottom"]) {
        const line = linework4("cl-pc" + page + "-" + id + " cl-drawing-" + pos);
        body.append(line);
      }
      body.append(paint(page));
      const joins = node7("span", "cl-side-joins");
      joins.setAttribute("aria-hidden", "true");
      const joinXs = { 8: [30.5, 36.5, 689, 695, 725, 731, 1738, 1744], 9: [20, 25, 41, 786, 792, 799, 1735, 1752, 1757], 10: [10.5, 16.5, 37, 1041, 1057, 1064, 1740, 1757, 1763] }[page], cut = { 8: 735, 9: 720, 10: 744 }[page], delta = { 8: 58, 9: 9, 10: 14 }[page];
      for (const [x, index] of joinXs.map((x2, i) => [x2, i])) {
        const line = node7("i");
        Object.assign(line.style, { left: x + "px", top: cut - 2 + "px", height: delta + 4 + "px", width: index % 2 ? "1px" : "1.3px", background: index % 2 ? "#d49b69" : "#bc8541" });
        joins.append(line);
      }
      if (page === 8) for (const x of [61, 671, 752, 1719]) {
        const line = node7("i");
        Object.assign(line.style, { left: x + "px", top: "683px", height: "62px", width: ".8px", background: "linear-gradient(#e0b38b99,#e0b38b99)" });
        joins.append(line);
      }
      body.append(joins);
      if (page === 10) body.append(linework4("cl-task-fine-lines"), node7("i", "cl-task-line-join"));
    }
    function resize() {
      const scale = viewport.clientWidth / 1774;
      sheet.style.transform = "scale(" + scale + ")";
      viewport.style.height = frameHeight * scale + "px";
    }
    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    return { element: viewport, body, sheet, decorate, resize, setNavigation(id) {
      topbar.setActive(id);
    }, destroy() {
      observer.disconnect();
      topbar.destroy();
      viewport.remove();
    } };
  }
  function albumPager(body, page, count, change, kind) {
    const nav = node7("nav", "cl-album-pager");
    nav.setAttribute("aria-label", kind === "portrait" ? "\u5934\u50CF\u7FFB\u9875" : "\u63D2\u753B\u7FFB\u9875");
    const prev = cutControl("\u4E0A\u4E00\u9875", () => change(page - 1), "cl-album-prev"), next = cutControl("\u4E0B\u4E00\u9875", () => change(page + 1), "cl-album-next");
    prev.disabled = page === 0;
    next.disabled = page + 1 >= count;
    prev.prepend(node7("i", "cl-arrow cl-arrow-left"));
    next.append(node7("i", "cl-arrow cl-arrow-right"));
    nav.append(prev, node7("span", "cl-album-page", String(page + 1)), next);
    if (kind === "scene") nav.append(node7("span", "cl-album-count", "\u7B2C " + (page + 1) + " / " + count + " \u9875"));
    body.append(nav);
  }
  function mountPortraitAlbum(target, options) {
    let actor = "xingxing", backLabel = "\u8FD4\u56DE\u65C5\u9014";
    const pages = { xingxing: 0, xiaogai: 0 }, { gallery, assets, onChoosePortrait, onBack } = options, c = base(target, options, 8, "bonds");
    c.sheet.setAttribute("aria-label", "\u5934\u50CF\u753B\u518C");
    function render3() {
      c.decorate();
      const ids = gallery.available("portrait", actor), selected = gallery.selected("portrait", actor), record = gallery.entry(selected, actor), count = Math.max(1, Math.ceil(ids.length / 8));
      pages[actor] = Math.min(pages[actor], count - 1);
      c.body.append(cutControl(backLabel, onBack, "cl-back cl-portrait-back"), node7("h1", "cl-current-heading", "\u5F53\u524D\u5934\u50CF"), node7("h2", "cl-unlocked-heading", "\u5DF2\u89E3\u9501\u5934\u50CF"));
      const current = node7("section", "cl-portrait-current");
      current.setAttribute("aria-label", names4[actor] + "\u5F53\u524D\u5934\u50CF");
      current.append(photo(gallery, assets, selected, actor, "cl-current-photo"), node7("span", "cl-current-using", "\u4F7F\u7528\u4E2D"), node7("h2", "cl-current-name", names4[actor]), node7("p", "cl-current-caption", record.title.replace(names4[actor] + " \xB7 ", "")));
      c.body.append(current);
      const grid = node7("div", "cl-portrait-grid");
      grid.setAttribute("role", "group");
      grid.setAttribute("aria-label", "\u5DF2\u89E3\u9501\u5934\u50CF");
      ids.slice(pages[actor] * 8, pages[actor] * 8 + 8).forEach((id) => {
        const row = gallery.entry(id, actor), active = id === selected, b = button3("", "cl-portrait-option", () => {
          onChoosePortrait(actor, { id, ...row });
          render3();
          c.body.querySelector('[data-portrait-id="' + id + '"]').focus({ preventScroll: true });
        });
        b.dataset.portraitId = id;
        b.setAttribute("aria-label", "\u66F4\u6362\u5934\u50CF\uFF1A" + row.title);
        b.setAttribute("aria-pressed", String(active));
        b.title = row.title;
        b.append(photo(gallery, assets, id, actor, "cl-option-photo"), linework4("cl-portrait-frame"), linework4("cl-portrait-selected"));
        if (active) b.append(linework4("cl-portrait-star", 27), node7("span", "cl-option-using", "\u4F7F\u7528\u4E2D"));
        grid.append(b);
      });
      c.body.append(grid);
      albumPager(c.body, pages[actor], count, (p) => {
        pages[actor] = p;
        render3();
      }, "portrait");
      c.resize();
    }
    render3();
    return { element: c.element, setNavigation: c.setNavigation, refresh() {
      render3();
    }, destroy: c.destroy, setActor(next) {
      actor = next;
      render3();
    }, setBackLabel(label) {
      backLabel = label;
      render3();
    }, get view() {
      return { actor, pages: { ...pages }, selected: gallery.selected("portrait", actor) };
    } };
  }
  function mountSceneAlbum(target, options) {
    let page = 0;
    const { gallery, assets, onChooseScene, onBack } = options, c = base(target, options, 9, "bonds");
    c.sheet.setAttribute("aria-label", "\u65C5\u9014\u63D2\u753B\u518C");
    function render3() {
      c.decorate();
      const ids = gallery.available("scene"), selected = gallery.selected("scene"), record = gallery.entry(selected), count = Math.max(1, Math.ceil(ids.length / 6));
      page = Math.min(page, count - 1);
      c.body.append(cutControl("\u8FD4\u56DE", onBack, "cl-back cl-scene-back"), node7("h1", "cl-current-heading", "\u5F53\u524D\u914D\u56FE"), node7("h2", "cl-unlocked-heading", "\u5DF2\u89E3\u9501\u63D2\u753B"));
      const current = node7("section", "cl-scene-current");
      current.setAttribute("aria-label", "\u5F53\u524D\u65C5\u9014\u914D\u56FE");
      current.append(photo(gallery, assets, selected, void 0, "cl-current-photo"), node7("h2", "cl-current-name", record.title.replace(" \xB7 \u9ED8\u8BA4\u914D\u56FE", "")), node7("p", "cl-scene-using", "\u6B63\u5728\u4F7F\u7528"));
      c.body.append(current);
      const grid = node7("div", "cl-scene-grid");
      grid.setAttribute("role", "group");
      grid.setAttribute("aria-label", "\u5DF2\u89E3\u9501\u63D2\u753B");
      ids.slice(page * 6, page * 6 + 6).forEach((id) => {
        const row = gallery.entry(id), active = id === selected, b = button3("", "cl-scene-option", () => {
          onChooseScene(id);
          render3();
          c.body.querySelector('[data-scene-id="' + id + '"]').focus({ preventScroll: true });
        });
        b.dataset.sceneId = id;
        b.setAttribute("aria-label", "\u66F4\u6362\u914D\u56FE\uFF1A" + row.title);
        b.setAttribute("aria-pressed", String(active));
        b.title = row.title;
        b.append(photo(gallery, assets, id, void 0, "cl-option-photo"), linework4("cl-scene-frame"), node7("span", "cl-scene-caption", row.title.replace(" \xB7 \u9ED8\u8BA4\u914D\u56FE", "")));
        if (active) b.append(node7("span", "cl-scene-check"), node7("span", "cl-option-using", "\u4F7F\u7528\u4E2D"));
        grid.append(b);
      });
      c.body.append(grid);
      albumPager(c.body, page, count, (p) => {
        page = p;
        render3();
      }, "scene");
      c.resize();
    }
    render3();
    return { element: c.element, setNavigation: c.setNavigation, refresh() {
      render3();
    }, destroy: c.destroy, chooseScene(id) {
      page = Math.floor(gallery.available("scene").indexOf(id) / 6);
      render3();
    }, get view() {
      return { page, selected: gallery.selected("scene") };
    } };
  }
  function formatCoins(value) {
    if (value == null) return "\u8D44\u6599\u5F85\u8865";
    const silver = Math.floor(value / 100), copper = value % 100;
    return (silver ? silver + " \u94F6" : "") + (silver && copper ? " " : "") + (copper || !silver ? copper + " \u94DC" : "");
  }
  function mountLedger(target, options) {
    let snapshot = options.snapshot, state = options.state, flowPage = 0, taskPage = 0;
    const { gallery, assets, itemImages, onBack, onOpen } = options, c = base(target, options, 10, "journey");
    c.sheet.setAttribute("aria-label", "\u65C5\u9014\u8D26\u672C");
    function pageControls(cls, page, count, change, item = false) {
      const nav = node7("nav", "cl-ledger-pager " + cls);
      nav.setAttribute("aria-label", item ? "\u59D4\u6258\u7FFB\u9875" : "\u6D41\u6C34\u7FFB\u9875");
      const prev = item ? cutControl("\u4E0A\u4E00\u9879", () => change(page - 1), "cl-ledger-previous") : button3("", "cl-ledger-previous", () => change(page - 1)), next = item ? cutControl("\u4E0B\u4E00\u9879", () => change(page + 1), "cl-ledger-next") : button3("", "cl-ledger-next", () => change(page + 1));
      prev.setAttribute("aria-label", item ? "\u4E0A\u4E00\u9879\u59D4\u6258" : "\u4E0A\u4E00\u9875\u6D41\u6C34");
      next.setAttribute("aria-label", item ? "\u4E0B\u4E00\u9879\u59D4\u6258" : "\u4E0B\u4E00\u9875\u6D41\u6C34");
      prev.disabled = page === 0;
      next.disabled = page + 1 >= count;
      prev.prepend(node7("i", "cl-arrow cl-arrow-left"));
      next.append(node7("i", "cl-arrow cl-arrow-right"));
      nav.append(prev, node7("span", "", String(page + 1) + " / " + count), next);
      return nav;
    }
    function render3() {
      c.decorate();
      c.body.append(cutControl("\u8FD4\u56DE", onBack, "cl-back cl-ledger-back"), node7("h1", "cl-ledger-title", "\u65C5 \u9014 \u8D26 \u672C"));
      const wallets = node7("section", "cl-wallets");
      wallets.setAttribute("aria-label", "\u65C5\u9014\u94B1\u5305");
      for (const actor of ["xingxing", "xiaogai", "shared"]) {
        const wallet = node7("section", "cl-wallet cl-wallet-" + actor);
        wallet.append(node7("h2", "", names4[actor]), node7("p", "cl-wallet-value", formatCoins(state.\u94B1\u5305[actor])));
        if (actor !== "shared") wallet.append(photo(gallery, assets, gallery.selected("portrait", actor), actor, "cl-wallet-photo"));
        wallets.append(wallet);
      }
      c.body.append(wallets);
      const flows = state.\u8D26\u672C.\u8FD1\u671F\u6D41\u6C34, flowRows = flows === null ? null : Object.entries(flows), flowCount = Math.max(1, Math.ceil((flowRows === null ? 0 : flowRows.length) / 4));
      flowPage = Math.min(flowPage, flowCount - 1);
      const table = node7("table", "cl-flow-table"), columns = node7("colgroup");
      for (const width of [412, 244, 272]) {
        const col = node7("col");
        col.style.width = width + "px";
        columns.append(col);
      }
      table.append(columns);
      const thead = node7("thead"), heading3 = node7("tr");
      for (const label of ["\u8BF4\u660E", "\u94B1\u5305", "\u6536\u652F"]) heading3.append(node7("th", "", label));
      thead.append(heading3);
      table.append(thead);
      const tbody = node7("tbody");
      if (flowRows === null || flowRows.length === 0) {
        const tr = node7("tr"), td = node7("td", "cl-flow-empty", flowRows === null ? "\u6D41\u6C34\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u8BB0\u5F55\u3002" : "\u5C1A\u65E0\u5B9E\u9645\u6536\u652F\u8BB0\u5F55\u3002");
        td.colSpan = 3;
        tr.append(td);
        tbody.append(tr);
      } else for (const [id, value] of flowRows.slice(flowPage * 4, flowPage * 4 + 4)) {
        const tr = node7("tr");
        tr.dataset.flowId = id;
        const description = node7("td"), copy = node7("span", "cl-flow-copy", snapshot.ledgerDemo ? value.\u8BF4\u660E : flowSummary(state, value));
        copy.title = flowNature(value) + " \xB7 " + value.\u8BF4\u660E;
        copy.tabIndex = 0;
        if (value.\u7269\u54C1ID) {
          const item = state.\u7269\u54C1[value.\u7269\u54C1ID], descriptor = resolveItemArt(item.\u540D\u79F0, value.\u7269\u54C1ID, [itemImages], assets, item);
          description.append(cropped(descriptor, "cl-flow-item"));
        }
        description.append(copy);
        const settled = value.\u6027\u8D28?.includes("\u6838\u9500"), direction = settled ? "\u6838\u9500 " : value.\u7C7B\u578B === "\u652F\u51FA" ? "\u2212 " : value.\u7C7B\u578B === "\u6536\u5165" ? "+ " : "";
        const amount = node7("td", "cl-flow-amount", direction + formatCoins(value.\u91D1\u989D));
        amount.dataset.direction = settled ? "settlement" : value.\u7C7B\u578B === "\u6536\u5165" ? "income" : "expense";
        tr.append(description, node7("td", "", value.\u94B1\u5305 === "shared" ? "\u5171\u540C" : names4[value.\u94B1\u5305]), amount);
        tbody.append(tr);
      }
      table.append(tbody);
      c.body.append(node7("h2", "cl-flow-heading", "\u8FD1\u671F\u5B9E\u9645\u6536\u652F"), table, pageControls("cl-flow-pager", flowPage, flowCount, (p) => {
        flowPage = p;
        render3();
      }));
      c.body.append(node7("h2", "cl-archive-heading", "\u8F83\u65E9\u6D41\u6C34\u6458\u8981"));
      const archive = node7("section", "cl-archive");
      archive.setAttribute("aria-label", "\u8F83\u65E9\u6D41\u6C34\u6458\u8981");
      for (const actor of ["xingxing", "xiaogai", "shared"]) {
        const row = node7("section", "cl-archive-row"), value = state.\u8D26\u672C.\u5F52\u6863\u6458\u8981 === null ? null : state.\u8D26\u672C.\u5F52\u6863\u6458\u8981[actor];
        row.append(node7("h3", "", names4[actor]), node7("p", "", value === null ? "\u5F52\u6863\u8D44\u6599\u5F85\u8865\u3002" : value.\u7B14\u6570 === 0 ? "\u5DF2\u7ED3\u6E05\uFF0C\u65E0\u672A\u7ED3\u6D41\u6C34\u3002" : archiveText(value, formatCoins)));
        row.lastChild.tabIndex = 0;
        archive.append(row);
      }
      c.body.append(archive);
      const tasks = state.\u65C5\u7A0B.\u59D4\u6258, taskRows = tasks === null ? null : Object.entries(tasks), taskCount = Math.max(1, taskRows === null ? 0 : taskRows.length);
      taskPage = Math.min(taskPage, taskCount - 1);
      c.body.append(node7("h2", "cl-task-heading", "\u63A5\u53D6\u7684\u59D4\u6258"));
      const obligation = cutControl("\u67E5\u770B\u672A\u7ED3\u4E8B\u9879\uFF08" + openObligations(state).length + "\uFF09", () => onOpen("obligations", {}), "cl-obligations");
      obligation.prepend(node7("i", "cl-book-icon"));
      c.body.append(obligation);
      const task = node7("section", "cl-task");
      task.setAttribute("aria-label", "\u59D4\u6258\u5185\u5BB9");
      if (taskRows === null || taskRows.length === 0) task.append(node7("p", "cl-task-empty", taskRows === null ? "\u59D4\u6258\u8D44\u6599\u5F85\u8865\uFF0C\u5C1A\u4E0D\u80FD\u5224\u65AD\u6709\u65E0\u8BB0\u5F55\u3002" : "\u5C1A\u65E0\u63A5\u53D6\u7684\u59D4\u6258\u3002"));
      else {
        const [id, value] = taskRows[taskPage];
        task.dataset.taskId = id;
        task.append(node7("h3", "cl-task-name", value.\u540D\u79F0), node7("span", "cl-task-status", value.\u72B6\u6001), node7("p", "cl-task-reward", value.\u672A\u6536\u62A5\u916C === null ? "\u62A5\u916C\u8D44\u6599\u5F85\u8865" : "\u5F85\u6536\u62A5\u916C\uFF1A\u3000" + formatCoins(value.\u672A\u6536\u62A5\u916C)));
        const body = node7("div", "cl-task-body");
        body.tabIndex = 0;
        body.setAttribute("aria-label", "\u5B8C\u6574\u59D4\u6258\u8BF4\u660E");
        body.append(node7("h4", "", "\u59D4\u6258\u8BF4\u660E\uFF1A"));
        for (const text of taskDetails(state, value)) body.append(node7("p", "", text));
        const source = node7("p", "cl-task-source", "\u8BB0\u5F55\u4F9D\u636E\uFF1A " + (value.\u4F9D\u636E === null ? "\u8D44\u6599\u5F85\u8865" : value.\u4F9D\u636E));
        source.tabIndex = 0;
        task.append(body, source);
      }
      c.body.append(task, pageControls("cl-task-pager", taskPage, taskCount, (p) => {
        taskPage = p;
        render3();
      }, true));
      c.resize();
    }
    render3();
    return { element: c.element, setNavigation: c.setNavigation, refresh(next) {
      snapshot = next;
      state = next.state;
      render3();
    }, destroy: c.destroy, get view() {
      return { flowPage, taskPage };
    } };
  }

  // src/state/time.mjs
  var clockLabel = (time) => time.\u949F\u70B9?.replace(/:00$/, "") ?? null;

  // src/state/gameplay.mjs
  var round = (n) => Math.round(n * 1e9) / 1e9;
  function gameplay(s) {
    return s.\u73A9\u6CD5 ??= { \u7248\u672C: 1, \u7269\u8D44: {}, \u50A8\u7269: {}, \u672A\u7ED3\u4E8B\u9879: {}, \u4EA4\u901A\u4E2A\u4F53: {}, \u5C0F\u5730\u70B9: {}, \u6863\u6848: {}, \u6548\u679C: {}, \u7EC8\u70B9: null };
  }
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

  // src/ui-geometric/records-data.mjs
  function recordsData(state) {
    const s = state, openIds = new Set(openObligations(s).map(([id]) => id));
    return {
      scope: "records-state",
      obligations: Object.entries(s.\u73A9\u6CD5.\u672A\u7ED3\u4E8B\u9879).map(([id, v]) => ({ id, title: v.\u540D\u79F0, category: v.\u7C7B\u522B + " \xB7 " + v.\u65B9\u5411, wallet: entityName(s, v.\u94B1\u5305), party: entityName(s, v.\u5BF9\u65B9), outstanding: numberText(v.\u672A\u7ED3\u91D1\u989D) + "\u94DC", deposit: numberText(v.\u62BC\u91D1\u4F59\u989D) + "\u94DC", prepaid: numberText(v.\u9884\u4ED8\u4F59\u989D) + "\u94DC", evidence: v.\u4F9D\u636E, open: openIds.has(id) })),
      memories: facts(s).map((v) => ({ id: v.id, title: v.\u6807\u9898, body: v.\u5185\u5BB9, place: placeLabel(s, v.\u5730\u70B9), source: v.\u4F9D\u636E, highlight: v.\u91CD\u70B9 })),
      transit: {
        information: [["\u6240\u5728", placeLabel(s, s.\u573A\u666F.\u5730\u70B9)], ["\u5730\u533A", regionName(s.\u573A\u666F.\u5730\u533A)], ["\u65E5\u671F", s.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F === null ? "\u5C1A\u672A\u8BB0\u5F55" : s.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F.replace(/^共历\d+年/, "")], ["\u5B63\u8282", s.\u573A\u666F.\u65F6\u95F4.\u5B63\u8282], ["\u65F6\u6BB5", s.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5], ["\u5929\u6C14", s.\u573A\u666F.\u5929\u6C14 === null ? "\u8D44\u6599\u5F85\u8865" : s.\u573A\u666F.\u5929\u6C14], ["\u4EA4\u901A", s.\u65C5\u7A0B.\u4EA4\u901A === null ? "\u5C1A\u672A\u8BB0\u5F55" : s.\u65C5\u7A0B.\u4EA4\u901A.\u63CF\u8FF0], ["\u8DEF\u51B5", s.\u65C5\u7A0B.\u4EA4\u901A === null ? "\u5C1A\u672A\u8BB0\u5F55" : s.\u65C5\u7A0B.\u4EA4\u901A.\u8DEF\u51B5]].map(([label, value]) => ({ label, value })),
        companions: Object.entries(s.\u73A9\u6CD5.\u4EA4\u901A\u4E2A\u4F53).map(([id, v]) => ({ id, title: v.\u540D\u79F0 + " \xB7 " + v.\u72B6\u6001, fields: [["\u7C7B\u522B", v.\u7C7B\u522B], ["\u6240\u5728", placeLabel(s, v.\u5730\u70B9)], ["\u5F52\u5C5E", v.\u7C7B\u522B === "\u667A\u6167\u540C\u884C\u8005" ? "\u81EA\u4E3B\u540C\u884C\u8005" : entityName(s, v.\u5F52\u5C5E)], ["\u4FDD\u7BA1\u8005", entityName(s, v.\u4FDD\u7BA1\u8005)], ["\u901A\u884C\u65B9\u5F0F", v.\u65B9\u5F0F.join("\u3001") || "\u5C1A\u672A\u8BB0\u5F55"], ["\u5B9E\u9645\u8BAD\u7EC3", v.\u8BAD\u7EC3.join("\u3001") || "\u5C1A\u672A\u8BB0\u5F55"], ["\u540C\u884C\u610F\u613F", v.\u613F\u610F\u540C\u884C ? "\u613F\u610F\u540C\u884C" : "\u672A\u540C\u610F\u540C\u884C"], ["\u5173\u7CFB", v.\u957F\u671F && v.\u5177\u540D ? "\u5177\u540D\u957F\u671F\u4F19\u4F34" : v.\u957F\u671F ? "\u957F\u671F\u5173\u7CFB" : "\u5F53\u524D\u8BB0\u5F55"], ["\u4F9D\u636E", v.\u4F9D\u636E]].map(([label, value]) => ({ label, value })) })),
        loads: ["xingxing", "xiaogai"].map((id) => {
          const weight = carriedWeight(s, id);
          return { label: entityName(s, id) + "\u8D1F\u91CD", value: numberText(weight.\u5DF2\u77E5\u516C\u65A4) + " \u516C\u65A4" + (weight.\u5B8C\u6574 ? "" : "\uFF08\u90E8\u5206\u91CD\u91CF\u5F85\u8865\uFF09") };
        }),
        bags: Object.entries(s.\u50A8\u4F4D).filter(([, v]) => v.\u7C7B\u578B === "\u79D8\u6CD5\u884C\u56CA").map(([id, v]) => {
          const b = bagView(s, id);
          return b === null ? { id, label: "\u79D8\u6CD5\u884C\u56CA\u5BB9\u91CF", value: "\u8D44\u6599\u5F85\u8865", description: placeLabel(s, v.\u5730\u70B9) } : { id, label: b.\u540D\u79F0, value: numberText(b.\u5DF2\u7528\u5BB9\u79EF) + " / " + numberText(b.\u5BB9\u91CF) + " \u5347 \xB7 " + b.\u72B6\u6001, description: placeLabel(s, v.\u5730\u70B9) };
        }),
        conditions: ["xingxing", "xiaogai"].map((id) => ({ label: entityName(s, id), value: conditionText(s, id) })),
        starBridge: s.\u73A9\u6CD5.\u7EC8\u70B9 === null ? null : { stage: s.\u73A9\u6CD5.\u7EC8\u70B9.\u9636\u6BB5, evidence: s.\u73A9\u6CD5.\u7EC8\u70B9.\u4F9D\u636E, choice: s.\u73A9\u6CD5.\u7EC8\u70B9.\u786E\u8BA4\u539F\u8BDD }
      }
    };
  }

  // src/ui-geometric/records.mjs
  var node8 = (tag, cls = "", text = "") => {
    const e = document.createElement(tag);
    e.className = cls;
    e.textContent = text;
    return e;
  };
  var control4 = (label, cls, run) => {
    const b = node8("button", cls, label);
    b.type = "button";
    b.addEventListener("click", run);
    return b;
  };
  function drawing2(kind) {
    const s = node8("span", "rc-drawing rc-" + kind);
    s.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 18; i++) s.append(node8("i"));
    return s;
  }
  function paints(kind) {
    const s = node8("span", "rc-paints rc-paints-" + kind);
    s.setAttribute("aria-hidden", "true");
    for (const corner of kind === "memory" ? ["tl", "tr", "bl", "br"] : kind === "transit" ? ["bl", "br", "tl", "tr"] : ["bl", "br"]) s.append(node8("i", "rc-paint rc-paint-" + corner));
    return s;
  }
  function arrow(kind) {
    const e = node8("i", "rc-arrow rc-arrow-" + kind);
    e.setAttribute("aria-hidden", "true");
    return e;
  }
  function artButton(label, kind, run) {
    const b = control4("", "rc-art-button rc-" + kind, run);
    b.append(node8("span", "rc-button-face"), drawing2(kind + "-edge"), node8("span", "rc-button-label", label));
    return b;
  }
  function field(label, value) {
    const row = node8("div", "rc-field");
    row.append(node8("dt", "", label), node8("dd", "", value));
    return row;
  }
  function mountRecords(target, { state, data, frameHeight, onNavigate, onOpen, onBack }, kind) {
    let current = data, view, backLabel = "\u8FD4\u56DE\u8D26\u672C";
    const viewport = node8("div", "rc-viewport"), sheet = node8("article", "rc-sheet rc-" + kind), header = node8("div", "rc-header"), body = node8("div", "rc-body");
    sheet.style.height = frameHeight + "px";
    sheet.append(header, body);
    viewport.append(sheet);
    target.append(viewport);
    if (kind !== "transit") for (const ornament of ["seam-star-left", "seam-star-right", "seam-blue-left", "seam-blue-right"]) sheet.append(drawing2(ornament));
    else for (const ornament of ["anchor-star-left", "anchor-star-right"]) sheet.append(drawing2(ornament));
    const active = { obligations: "inventory", memories: "bonds", transit: "journey" }[kind];
    const bar = createTopbar({ getScene: () => state.\u573A\u666F, active, date: (state.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? "\u65E5\u671F\u5F85\u8BB0\u5F55").replace(/^共历\d+年/, ""), weather: state.\u573A\u666F.\u5929\u6C14, period: state.\u573A\u666F.\u65F6\u95F4.\u65F6\u6BB5, onSelect(id) {
      onNavigate(id, TOPBAR_PAGES.find(([key]) => key === id)[1]);
    } });
    header.append(bar.element);
    function reset() {
      view = { filter: "all", page: 0, expanded: new Set(current.obligations.slice(0, 1).map((v) => v.id)), companions: /* @__PURE__ */ new Set() };
      if (kind === "obligations") view.filter = "open";
    }
    function back(label) {
      const b = artButton(label, "back", onBack);
      b.prepend(arrow("left"));
      return b;
    }
    function filters(labels3) {
      const nav = node8("nav", "rc-filters");
      nav.setAttribute("aria-label", kind === "memories" ? "\u7ECF\u5386\u7B5B\u9009" : "\u4E8B\u9879\u7B5B\u9009");
      for (const [id, label] of labels3) {
        const b = control4("", "rc-filter", () => {
          view.filter = id;
          view.page = 0;
          render3(true);
          body.querySelector('[data-filter="' + id + '"]').focus({ preventScroll: true });
        });
        b.dataset.filter = id;
        b.setAttribute("aria-pressed", String(view.filter === id));
        b.append(node8("span", "rc-filter-face"), drawing2(id === labels3[0][0] ? "filter-edge" : "filter-plain"), node8("span", "rc-filter-label", label));
        nav.append(b);
      }
      return nav;
    }
    function obligations() {
      body.append(back(backLabel));
      const title = node8("h1", "rc-obligations-heading", "\u672A\u7ED3\u4E8B\u9879");
      title.prepend(node8("i", "rc-book"));
      body.append(title, filters([["open", "\u5C1A\u672A\u7ED3\u6E05"], ["all", "\u5168\u90E8\u4E8B\u9879"]]));
      const list = node8("section", "rc-obligation-list");
      list.setAttribute("aria-label", "\u672A\u7ED3\u4E8B\u9879\u8BB0\u5F55");
      list.tabIndex = 0;
      const rows2 = current.obligations.filter((v) => view.filter === "all" || v.open);
      for (const item of rows2) {
        const record = node8("details", "rc-obligation");
        record.dataset.obligation = item.id;
        record.open = view.expanded.has(item.id);
        const summary = node8("summary", "rc-obligation-summary"), title2 = node8("span", "rc-obligation-title", item.title);
        summary.append(node8("span", "rc-obligation-title-face"), drawing2("obligation-title-edge"), title2, arrow("collapse"));
        const fields = node8("dl", "rc-obligation-fields"), left = node8("div", "rc-obligation-left"), right = node8("div", "rc-obligation-right");
        for (const [label, value] of [["\u7C7B\u522B", item.category], ["\u94B1\u5305", item.wallet], ["\u5BF9\u8C61", item.party]]) {
          const row = field(label, value);
          row.prepend(drawing2("obligation-star"));
          left.append(row);
        }
        for (const [label, value] of [["\u672A\u7ED3\u91D1\u989D", item.outstanding], ["\u5F85\u9000\u62BC\u91D1", item.deposit], ["\u672A\u7ED3\u9884\u4ED8", item.prepaid], ["\u8BB0\u5F55\u4F9D\u636E", item.evidence]]) {
          const row = field(label, value);
          row.prepend(drawing2("obligation-star"));
          right.append(row);
        }
        fields.append(left, right);
        record.append(drawing2("obligation-edge"), summary, fields);
        record.addEventListener("toggle", () => {
          if (record.open) view.expanded.add(item.id);
          else view.expanded.delete(item.id);
        });
        list.append(record);
      }
      if (!rows2.length) list.append(node8("p", "rc-empty", view.filter === "open" ? "\u76EE\u524D\u6CA1\u6709\u5C1A\u672A\u7ED3\u6E05\u7684\u4E8B\u9879\u3002" : "\u76EE\u524D\u6CA1\u6709\u5DF2\u767B\u8BB0\u7684\u4E8B\u9879\u3002"));
      body.append(list);
    }
    function memories() {
      body.append(back("\u8FD4\u56DE\u7F81\u7ECA"), node8("h1", "rc-memories-heading", "\u5171\u540C\u7ECF\u5386 \xB7 \u8BB0\u5F55\u6765\u6E90"), filters([["all", "\u5168\u90E8\u7ECF\u5386\u4E0E\u6863\u6848"], ["highlight", "\u91CD\u70B9\u7ECF\u5386"]]));
      const rows2 = current.memories.filter((v) => view.filter === "all" || v.highlight), pages = Math.ceil(rows2.length / 8), list = node8("section", "rc-memory-list");
      list.setAttribute("aria-label", "\u5171\u540C\u7ECF\u5386\u4E0E\u8BB0\u5F55\u6765\u6E90");
      list.tabIndex = 0;
      for (const item of rows2.slice(view.page * 8, view.page * 8 + 8)) {
        const record = node8("article", "rc-memory");
        record.dataset.memory = item.id;
        if (item.title.length > 11 || item.body.length > 100 || item.source.length > 35) record.classList.add("rc-memory-long");
        const title = node8("h2", "rc-memory-title", item.title), content = node8("p", "rc-memory-body", item.body), source = node8("dl", "rc-memory-source");
        source.append(field("\u5730\u70B9", item.place), field("\u8BB0\u5F55\u4F9D\u636E", item.source));
        record.append(paints("memory"), drawing2("memory-edge"), drawing2("memory-accent"), title, content, source);
        list.append(record);
      }
      if (!rows2.length) list.append(node8("p", "rc-empty", view.filter === "highlight" ? "\u5C1A\u65E0\u91CD\u70B9\u7ECF\u5386\u3002" : "\u5C1A\u672A\u8BB0\u5F55\u5171\u540C\u7ECF\u5386\u4E0E\u6863\u6848\u3002"));
      body.append(list);
      const pager = node8("nav", "rc-pager");
      pager.setAttribute("aria-label", "\u5171\u540C\u7ECF\u5386\u7FFB\u9875");
      const previous = artButton("\u4E0A\u4E00\u9875\u6863\u6848", "previous", () => {
        view.page--;
        render3(true);
        const p = body.querySelector(".rc-previous");
        (p.disabled ? body.querySelector(".rc-next") : p).focus({ preventScroll: true });
      }), next = artButton("\u4E0B\u4E00\u9875\u6863\u6848", "next", () => {
        view.page++;
        render3(true);
        const n = body.querySelector(".rc-next");
        (n.disabled ? body.querySelector(".rc-previous") : n).focus({ preventScroll: true });
      });
      previous.prepend(arrow("left"));
      next.append(arrow("right"));
      previous.disabled = view.page === 0;
      next.disabled = pages === 0 || view.page === pages - 1;
      pager.append(previous, node8("span", "rc-page-count", (pages ? view.page + 1 : 0) + " / " + pages), next);
      body.append(pager);
    }
    function section(title, cls) {
      const panel = node8("section", "rc-transit-section rc-section-" + cls), heading3 = node8("h2", "rc-section-title", title);
      heading3.prepend(node8("span", "rc-section-title-face"), drawing2("section-title-edge"));
      panel.append(heading3, drawing2("section-star"));
      for (const id of ["tl", "tr", "bl", "br"]) panel.append(drawing2("section-corners-" + id));
      return panel;
    }
    function transit() {
      body.append(drawing2("top-corners"), drawing2("top-accent"));
      const title = node8("h1", "rc-transit-heading", "\u6B64\u523B\u7684\u65C5\u7A0B");
      title.prepend(node8("span", "rc-title-face"), drawing2("title-edge"));
      body.append(title, back("\u8FD4\u56DE"));
      const stack = node8("div", "rc-transit-stack");
      stack.tabIndex = 0;
      stack.setAttribute("aria-label", "\u5B8C\u6574\u65C5\u7A0B\u8D44\u6599");
      const info = section("\u5F53\u524D\u4FE1\u606F", "information"), list = node8("dl", "rc-information-fields");
      for (const item of current.transit.information) list.append(field(item.label, item.value));
      info.append(list);
      stack.append(info);
      const companions = section("\u540C\u884C\u4F19\u4F34\u4E0E\u8F66\u8F86", "companions"), entries2 = node8("div", "rc-companions");
      if (current.transit.companions.length === 0) {
        const empty = node8("p", "rc-companions-empty", "\u5F53\u524D\u5C1A\u672A\u767B\u8BB0\u72EC\u7ACB\u4F19\u4F34\u6216\u8F66\u8F86\u3002");
        empty.prepend(arrow("triangle"));
        entries2.append(empty);
      }
      for (const item of current.transit.companions) {
        const d = node8("details", "rc-companion");
        d.dataset.companion = item.id;
        d.open = view.companions.has(item.id);
        const summary = node8("summary", "", item.title);
        summary.prepend(arrow("triangle"));
        d.append(summary);
        const fields = node8("dl", "rc-companion-fields");
        for (const row of item.fields) fields.append(field(row.label, row.value));
        d.append(fields);
        d.addEventListener("toggle", () => {
          if (d.open) view.companions.add(item.id);
          else view.companions.delete(item.id);
        });
        entries2.append(d);
      }
      companions.append(entries2);
      stack.append(companions);
      const load = section("\u968F\u8EAB\u7269\u8D44\u4E0E\u884C\u56CA", "loads"), weights = node8("dl", "rc-load-fields"), bags = node8("dl", "rc-bag-fields");
      for (const row of current.transit.loads) weights.append(field(row.label, row.value));
      for (const row of current.transit.bags) {
        const f = field(row.label, row.value);
        f.append(node8("p", "rc-bag-description", row.description));
        bags.append(f);
      }
      if (!current.transit.bags.length) bags.append(field("\u79D8\u6CD5\u884C\u56CA\u5BB9\u91CF", "\u5C1A\u672A\u767B\u8BB0\u79D8\u6CD5\u884C\u56CA\u3002"));
      load.append(weights, bags);
      stack.append(load);
      const conditions = section("\u5F53\u524D\u72B6\u51B5\u4E0E\u6301\u7EED\u6548\u679C", "conditions"), conditionFields = node8("dl", "rc-condition-fields");
      for (const row of current.transit.conditions) conditionFields.append(field(row.label, row.value));
      conditions.append(conditionFields);
      stack.append(conditions);
      if (current.transit.starBridge !== null) {
        const bridge = section("\u661F\u6865\u8BB0\u5F55", "bridge"), fields = node8("dl", "rc-bridge-fields"), v = current.transit.starBridge;
        fields.append(field("\u9636\u6BB5", v.stage), field("\u4F9D\u636E", v.evidence));
        if (v.choice) fields.append(field("\u73A9\u5BB6\u9009\u62E9", v.choice));
        bridge.append(fields);
        stack.append(bridge);
      }
      body.append(stack);
      body.append(artButton("\u67E5\u770B\u672A\u7ED3\u4E8B\u9879", "open", () => onOpen("obligations", {})));
    }
    function render3(resetScroll = false) {
      const saved = body.querySelector(".rc-transit-stack,.rc-memory-list,.rc-obligation-list")?.scrollTop;
      body.replaceChildren(paints(kind), drawing2("main"), drawing2("accent"));
      ({ obligations, memories, transit })[kind]();
      if (saved !== void 0 && !resetScroll) body.querySelector(".rc-transit-stack,.rc-memory-list,.rc-obligation-list").scrollTop = saved;
      resize();
    }
    function resize() {
      const scale = viewport.clientWidth / 1774;
      sheet.style.transform = "scale(" + scale + ")";
      viewport.style.height = frameHeight * scale + "px";
    }
    reset();
    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    render3();
    return { element: viewport, get view() {
      return view;
    }, setNavigation(id) {
      bar.setActive(id);
    }, setBackLabel(label) {
      backLabel = label;
      body.querySelector(".rc-back .rc-button-label").textContent = label;
    }, refresh(next) {
      const changed = next.scope !== current.scope;
      current = next;
      if (changed) reset();
      render3();
    }, destroy() {
      observer.disconnect();
      bar.destroy();
      viewport.remove();
    } };
  }
  var mountObligations = (target, options) => mountRecords(target, options, "obligations");
  var mountMemorySources = (target, options) => mountRecords(target, options, "memories");
  var mountTransit = (target, options) => mountRecords(target, options, "transit");

  // src/ui-geometric/desktop.mjs
  var DESKTOP_PAGES = ["journey", "inventory", "bonds", "notebook", "map"];
  var DESKTOP_FRAME = { width: 1775, height: 905.671 };
  var DESKTOP_DETAILS = [["portraits", "\u5934\u50CF\u753B\u518C", "journey"], ["scenes", "\u65C5\u9014\u63D2\u753B\u753B\u518C", "bonds"], ["ledger", "\u65C5\u9014\u8D26\u672C", "inventory"], ["obligations", "\u672A\u7ED3\u4E8B\u9879", "inventory"], ["memories", "\u5171\u540C\u7ECF\u5386 \xB7 \u8BB0\u5F55\u6765\u6E90", "bonds"], ["transit", "\u6B64\u523B\u7684\u65C5\u7A0B", "journey"], ["region", "\u5730\u533A\u5730\u56FE", "map"]];
  var labels2 = Object.fromEntries([...TOPBAR_PAGES, ...DESKTOP_DETAILS.map(([id, label]) => [id, label])]);
  var parents = Object.fromEntries(DESKTOP_DETAILS.map(([id, , parent]) => [id, parent]));
  var selectors = { journey: ".jt-body", inventory: ".iv-body", bonds: ".bd-body", notebook: ".nt-body", map: ".at-body", region: ".at-body", portraits: ".cl-body", scenes: ".cl-body", ledger: ".cl-body", obligations: ".rc-body", memories: ".rc-body", transit: ".rc-body" };
  function mountDesktopHandbook(target, { snapshot, assets, itemImages, portraitImages, notebookData: notebookData2, recordData, collectionSnapshot, gallery, initialPage = "journey", onEquipment, onChooseScene, onChoosePortrait, onNavigate }) {
    const root = document.createElement("main");
    root.className = "desktop-handbook";
    target.append(root);
    const state = snapshot.state, panels = {}, pages = {}, routes = [...DESKTOP_PAGES, ...DESKTOP_DETAILS.map(([id]) => id)];
    let active = initialPage, main = parents[initialPage] || initialPage, notes = notebookData2, records2 = recordData, collections = collectionSnapshot;
    const trail = parents[initialPage] ? [{ route: main, main }] : [], portraitChoices = Object.fromEntries(["xingxing", "xiaogai"].map((actor) => {
      const id = gallery.selected("portrait", actor);
      return [actor, id === actor + "-default" ? null : id];
    })), initialScene = gallery.selected("scene");
    for (const id of routes) {
      const panel = document.createElement("section");
      panel.className = "desktop-handbook-page";
      panel.dataset.page = id;
      panel.setAttribute("aria-label", labels2[id] + "\u9875\u9762");
      root.append(panel);
      panels[id] = panel;
    }
    const frameHeight = DESKTOP_FRAME.height * 1774 / DESKTOP_FRAME.width, journeyExtension = frameHeight - 860.6058 - 15;
    panels.journey.style.setProperty("--desktop-frame-extra", journeyExtension + "px");
    panels.inventory.style.setProperty("--desktop-frame-extra", frameHeight - 887 + "px");
    panels.journey.style.setProperty("--desktop-here-art-scale", 1 + journeyExtension / 272);
    panels.journey.style.setProperty("--desktop-memo-art-scale", 1 + journeyExtension / 367);
    function portraitRenderer(actor, cls, includeDefault = false) {
      const picture = collectionPicture(gallery, assets, portraitChoices[actor] ?? actor + "-default", actor, cls + " desktop-linked-media"), img = picture.querySelector("img");
      if (img) img.alt = (actor === "xingxing" ? "\u9192\u9192" : "\u5C0F\u76D6") + "\u5934\u50CF";
      return picture;
    }
    function sceneRenderer(id, cls, alt) {
      const picture = collectionPicture(gallery, assets, id, void 0, cls + " desktop-linked-media"), img = picture.querySelector("img");
      if (img) img.alt = alt;
      return picture;
    }
    function navigate(id) {
      trail.length = 0;
      main = id;
      show(id, true);
    }
    function enter(id) {
      trail.push({ route: active, main });
      main = id === "obligations" && active === "transit" ? "journey" : parents[id] || id;
      show(id, true);
    }
    function back() {
      const previous = trail.pop();
      main = previous.main;
      show(previous.route, true);
    }
    function open(id, params = {}) {
      if (id === "inventory") {
        pages.inventory.setCategory(params.category, "shared");
        navigate("inventory");
        return;
      }
      if (id === "notebook") {
        navigate("notebook");
        return;
      }
      if (id === "artbook") {
        id = params.kind === "scene" ? "scenes" : "portraits";
      }
      if (id === "region") pages.region.openRegion(params.region);
      if (id === "portraits") {
        pages.portraits.setActor(params.actor);
        pages.portraits.setBackLabel("\u8FD4\u56DE" + labels2[active]);
      }
      if (id === "obligations") pages.obligations.setBackLabel(active === "transit" ? "\u8FD4\u56DE\u65C5\u7A0B" : "\u8FD4\u56DE\u8D26\u672C");
      enter(id);
    }
    function refreshCollections() {
      pages.portraits.refresh(collections);
      pages.scenes.refresh(collections);
      pages.ledger.refresh(collections);
    }
    function selectedScene(id) {
      gallery.choose("scene", null, id);
      onChooseScene(id);
      refreshCollections();
    }
    function chooseScene(id) {
      pages.bonds.chooseScene(id);
    }
    function choosePortrait(actor, entry) {
      gallery.choose("portrait", actor, entry.id);
      portraitChoices[actor] = entry.id === actor + "-default" ? null : entry.id;
      pages.journey.refresh(state);
      pages.inventory.refresh();
      pages.bonds.refresh(snapshot);
      refreshCollections();
      navigation();
      show(active);
      onChoosePortrait(actor, entry);
    }
    const common = { state, snapshot, assets, frameHeight, onNavigate: navigate, onOpen: open, onBack: back };
    pages.journey = mountJourney(panels.journey, { ...common, portraitImages, portraitRenderer, frameExtension: journeyExtension });
    pages.inventory = mountInventory(panels.inventory, { state, assets, itemImages, portraitImages, portraitRenderer, mode: "desktop", desktopFrameHeight: frameHeight, onEquipment(id, plan) {
      onEquipment(id, plan, refresh);
    }, onLedger() {
      open("ledger");
    }, onNavigate: navigate });
    pages.bonds = mountBonds(panels.bonds, { snapshot, assets, portraitImages, portraitRenderer: (actor, cls) => portraitRenderer(actor, cls, true), sceneChoice: initialScene, sceneRenderer, onChooseScene: selectedScene, onOpen: open, onNavigate: navigate });
    pages.notebook = mountNotebook(panels.notebook, { state, data: notes, frameHeight, onNavigate: navigate, onOpen: open });
    pages.map = mountMap(panels.map, common);
    pages.region = mountRegionMap(panels.region, common);
    const albums = { ...common, snapshot: collections, state: collections.state, itemImages, portraitImages, gallery, onChoosePortrait: choosePortrait, onChooseScene: chooseScene };
    pages.portraits = mountPortraitAlbum(panels.portraits, albums);
    pages.scenes = mountSceneAlbum(panels.scenes, albums);
    pages.ledger = mountLedger(panels.ledger, albums);
    for (const [id, mount] of [["obligations", mountObligations], ["memories", mountMemorySources], ["transit", mountTransit]]) pages[id] = mount(panels[id], { ...common, data: records2 });
    function navigation() {
      for (const id of routes) {
        const body = panels[id].querySelector(selectors[id]);
        body.id = "handbook-" + id + "-body";
        if (DESKTOP_PAGES.includes(id)) {
          body.setAttribute("role", "tabpanel");
          body.setAttribute("aria-labelledby", "handbook-" + id + "-tab-" + id);
        } else {
          body.setAttribute("role", "region");
          body.setAttribute("aria-label", labels2[id]);
        }
        for (const tab2 of panels[id].querySelectorAll(".tb-tab")) {
          const destination = tab2.dataset.page;
          tab2.id = "handbook-" + id + "-tab-" + destination;
          tab2.disabled = false;
          tab2.setAttribute("aria-disabled", "false");
          tab2.setAttribute("aria-controls", "handbook-" + destination + "-body");
          tab2.removeAttribute("title");
        }
      }
    }
    function show(id, focus = false) {
      active = id;
      root.dataset.page = id;
      for (const key of routes) panels[key].hidden = key !== id;
      pages[id].setNavigation(DESKTOP_PAGES.includes(id) ? id : main);
      if (focus) panels[id].querySelector('.tb-tab[data-page="' + main + '"]').focus({ preventScroll: true });
      onNavigate(id, labels2[id], main, id === "portraits" ? pages.portraits.view.actor : void 0);
    }
    function refresh() {
      pages.journey.refresh(state);
      pages.inventory.refresh();
      pages.bonds.refresh(snapshot, gallery.selected("scene"));
      pages.notebook.refresh(notes);
      pages.map.refresh(snapshot);
      pages.region.refresh(snapshot);
      for (const id of ["obligations", "memories", "transit"]) pages[id].refresh(records2);
      refreshCollections();
      navigation();
      show(active);
    }
    function update(next, nextNotes, nextRecords) {
      snapshot = next;
      collections = next;
      notes = nextNotes;
      records2 = nextRecords;
      for (const actor of ["xingxing", "xiaogai"]) {
        const id = gallery.selected("portrait", actor);
        portraitChoices[actor] = id === actor + "-default" ? null : id;
      }
      refresh();
    }
    navigation();
    show(initialPage);
    return { element: root, get activePage() {
      return active;
    }, get currentMain() {
      return main;
    }, show(id) {
      if (DESKTOP_PAGES.includes(id)) navigate(id);
      else enter(id);
    }, open, back, refresh, update, chooseScene, refreshCollections, setNotebookData(data) {
      notes = data;
      pages.notebook.refresh(notes);
      navigation();
      show(active);
    }, setRecordData(data) {
      records2 = data;
      for (const id of ["obligations", "memories", "transit"]) pages[id].refresh(data);
      navigation();
      show(active);
    }, setCollectionSnapshot(next) {
      collections = next;
      refreshCollections();
      navigation();
      show(active);
    }, get pages() {
      return pages;
    }, destroy() {
      for (const page of Object.values(pages)) page.destroy();
      root.remove();
    } };
  }

  // src/ui-geometric/notebook-data.mjs
  var entries = (value) => Object.entries(value ?? {});
  var actors2 = { xingxing: "\u9192\u9192", xiaogai: "\u5C0F\u76D6" };
  var date = (value) => value?.replace(/^共历\d+年/, "");
  function notebookData(state, scope = "") {
    const place = (id) => id ? placeName(id, state) : "";
    const region = (id) => WORLD.places[id]?.region ?? state.\u73A9\u6CD5?.\u5C0F\u5730\u70B9?.[id]?.\u5730\u533A;
    const commissions = entries(state.\u65C5\u7A0B?.\u59D4\u6258).map(([id, v]) => ({
      id,
      title: v.\u540D\u79F0,
      status: v.\u72B6\u6001,
      place: v.\u5730\u70B9,
      location: place(v.\u5730\u70B9),
      region: v.\u5730\u533A ?? region(v.\u5730\u70B9),
      senderId: v.\u59D4\u6258\u65B9,
      sender: v.\u59D4\u6258\u65B9 ? entityName(state, v.\u59D4\u6258\u65B9) : "",
      body: v.\u5185\u5BB9 ?? v.\u5B8C\u6210\u6761\u4EF6 ?? v.\u4F9D\u636E,
      reward: v.\u62A5\u916C\u7EA6\u5B9A,
      date: date(v.\u65E5\u671F),
      history: []
    }));
    const learning = Object.entries(actors2).flatMap(([actor, name]) => entries(state.\u4EBA\u7269?.[actor]?.\u5B66\u4E60\u4E2D).map(([id, v]) => ({
      id: actor + ":" + id,
      title: v.\u540D\u79F0,
      actor: name,
      status: v.\u5F53\u524D\u9636\u6BB5 ?? "\u7EC3\u4E60\u4E2D",
      body: v.\u6700\u8FD1\u6210\u679C,
      method: v.\u6765\u6E90,
      history: (v.\u7EC3\u4E60\u8BB0\u5F55 ?? []).map((row) => ({ date: date(row.\u65E5\u671F), text: row.\u5185\u5BB9 }))
    })));
    const people = entries(state.\u73A9\u6CD5?.\u6863\u6848).filter(([, v]) => v.\u7C7B\u578B === "\u4EBA\u7269").map(([id, v]) => {
      const facts2 = entries(v.\u4E8B\u5B9E), related = commissions.filter((task) => task.senderId === id);
      return {
        id,
        title: v.\u540D\u79F0,
        place: v.\u5730\u70B9,
        location: place(v.\u5730\u70B9) || regionName(v.\u5730\u533A) || "",
        region: v.\u5730\u533A ?? region(v.\u5730\u70B9),
        role: v.\u8EAB\u4EFD ?? v.\u4E8B\u5B9E.\u8EAB\u4EFD?.\u5185\u5BB9 ?? "",
        relation: v.\u4E8B\u5B9E.\u5173\u7CFB?.\u5185\u5BB9 ?? (related.length ? "\u6709\u59D4\u6258\u5F80\u6765" : ""),
        date: date(v.\u65E5\u671F),
        facts: facts2.filter(([key]) => !["\u8EAB\u4EFD", "\u5173\u7CFB", "\u76F8\u8BC6\u7ECF\u8FC7"].includes(key)).map(([, f]) => f.\u5185\u5BB9),
        history: facts2.filter(([key]) => !["\u8EAB\u4EFD", "\u5173\u7CFB", "\u57FA\u672C\u8D44\u6599"].includes(key)).map(([, f]) => ({ date: date(f.\u65E5\u671F), text: f.\u5185\u5BB9 })),
        summary: v.\u4E8B\u5B9E.\u76F8\u8BC6\u7ECF\u8FC7?.\u5185\u5BB9 ?? facts2[0]?.[1].\u5185\u5BB9 ?? "",
        related: related.map((task) => task.id)
      };
    });
    const mementos = (state.\u65C5\u7A0B?.\u91CD\u8981\u4E8B\u5B9E ?? []).map((v, i) => {
      const lines2 = v.\u5185\u5BB9.split("\n"), title = lines2.length > 1 ? lines2.shift() : v.\u5185\u5BB9;
      const imageId = state.\u5A92\u4F53?.\u5730\u70B9\u63D2\u753B?.[v.\u5730\u70B9], image = resolveRegionalItemArt(title)?.src ?? (imageId && state.\u5A92\u4F53.\u63D2\u753B[imageId]?.\u56FE\u7247);
      return {
        id: v.\u8BB0\u5F55ID ?? "journey-" + i,
        title,
        body: lines2.length ? lines2.join("\n") : v.\u5185\u5BB9,
        summary: lines2[0] ?? v.\u5185\u5BB9,
        place: v.\u5730\u70B9,
        location: place(v.\u5730\u70B9),
        region: region(v.\u5730\u70B9),
        date: date(v.\u65E5\u671F),
        image: image ? { src: image } : void 0
      };
    });
    return { scope, commissions, learning, people, mementos };
  }

  // src/characters/initial-state.json
  var initial_state_default = {
    \u4EBA\u7269: {
      xingxing: {
        \u4F24\u52BF: {},
        \u75B2\u52B3: "\u65E0\u660E\u663E\u75B2\u52B3",
        \u9B54\u529B: "\u9B54\u529B\u5145\u8DB3",
        \u5DF2\u5B66\u80FD\u529B: {},
        \u5B66\u4E60\u4E2D: null,
        \u88C5\u5907: {
          \u624B\u6301: "staff",
          \u5916\u8863: "cloak"
        }
      },
      xiaogai: {
        \u4F24\u52BF: {},
        \u75B2\u52B3: "\u65E0\u660E\u663E\u75B2\u52B3",
        \u9B54\u529B: "\u9B54\u529B\u5145\u8DB3",
        \u5DF2\u5B66\u80FD\u529B: null,
        \u5B66\u4E60\u4E2D: null,
        \u88C5\u5907: {
          \u624B\u6301: "astreya",
          \u62A4\u5177: "armor"
        }
      }
    },
    \u5173\u7CFB: {
      \u660E\u786E\u4E8B\u5B9E: { \u5F53\u524D\u5173\u7CFB: "\u65C5\u4F34", \u540C\u884C\u7EA6\u5B9A: "\u4E00\u8D77\u524D\u5F80\u661F\u6D77\u4E4B\u5CB8\u3002" }
    },
    \u94B1\u5305: {
      xingxing: null,
      xiaogai: null,
      shared: null
    },
    \u7269\u54C1: {
      ration: {
        \u540D\u79F0: "\u65C5\u884C\u53E3\u7CAE",
        \u6570\u91CF: 6,
        \u5355\u4F4D: "\u4EFD",
        owner: "shared",
        holder: "xingxing",
        storage_id: "hand_xingxing",
        \u89C4\u683C\u5F15\u7528: null,
        \u6D3B\u7269: false,
        \u63CF\u8FF0: "\u53EF\u968F\u8EAB\u643A\u5E26\u7684\u65C5\u884C\u5E72\u7CAE\u3002"
      },
      water: {
        \u540D\u79F0: "\u6E05\u6C34\u76AE\u56CA",
        \u6570\u91CF: 2,
        \u5355\u4F4D: "\u53EA",
        owner: "shared",
        holder: "xiaogai",
        storage_id: "hand_xiaogai",
        \u89C4\u683C\u5F15\u7528: null,
        \u6D3B\u7269: false,
        \u63CF\u8FF0: "\u88C5\u6709\u6E05\u6C34\u7684\u76AE\u56CA\u3002"
      },
      potion: {
        \u540D\u79F0: "\u6CBB\u7597\u836F\u5242",
        \u6570\u91CF: 3,
        \u5355\u4F4D: "\u74F6",
        owner: "shared",
        holder: "xiaogai",
        storage_id: "hand_xiaogai",
        \u89C4\u683C\u5F15\u7528: "POT-001",
        \u6D3B\u7269: false,
        \u63CF\u8FF0: "\u7528\u4E8E\u6CBB\u7597\u666E\u901A\u8F7B\u4F24\u7684\u836F\u5242\u3002"
      },
      camp: {
        \u540D\u79F0: "\u9732\u8425\u7528\u5177",
        \u6570\u91CF: 1,
        \u5355\u4F4D: "\u5957",
        owner: "shared",
        holder: "xiaogai",
        storage_id: "hand_xiaogai",
        \u89C4\u683C\u5F15\u7528: null,
        \u6D3B\u7269: false,
        \u63CF\u8FF0: "\u4F9B\u4E24\u4EBA\u9732\u8425\u4F7F\u7528\u7684\u4E00\u5957\u7528\u5177\u3002"
      },
      herb: {
        \u540D\u79F0: "\u82B1\u8349\u7D20\u6750",
        \u6570\u91CF: 5,
        \u5355\u4F4D: "\u675F",
        owner: "shared",
        holder: "xingxing",
        storage_id: "hand_xingxing",
        \u89C4\u683C\u5F15\u7528: null,
        \u6D3B\u7269: false,
        \u63CF\u8FF0: "\u968F\u884C\u643A\u5E26\u7684\u82B1\u8349\u7D20\u6750\u3002"
      },
      bookmark: {
        \u540D\u79F0: "\u538B\u82B1\u4E66\u7B7E",
        \u6570\u91CF: 1,
        \u5355\u4F4D: "\u679A",
        owner: "shared",
        holder: "xingxing",
        storage_id: "hand_xingxing",
        \u89C4\u683C\u5F15\u7528: null,
        \u6D3B\u7269: false,
        \u63CF\u8FF0: "\u4EE5\u538B\u82B1\u88C5\u9970\u7684\u4E66\u7B7E\u3002"
      },
      staff: {
        \u540D\u79F0: "\u65C5\u4EBA\u77ED\u6756",
        \u6570\u91CF: 1,
        \u5355\u4F4D: "\u67C4",
        owner: "xingxing",
        holder: "xingxing",
        storage_id: "hand_xingxing",
        \u89C4\u683C\u5F15\u7528: null,
        \u6D3B\u7269: false,
        \u63CF\u8FF0: "\u4FBF\u4E8E\u65C5\u884C\u643A\u5E26\u7684\u77ED\u6756\u3002"
      },
      cloak: {
        \u540D\u79F0: "\u8F7B\u4FBF\u62AB\u98CE",
        \u6570\u91CF: 1,
        \u5355\u4F4D: "\u4EF6",
        owner: "xingxing",
        holder: "xingxing",
        storage_id: "hand_xingxing",
        \u89C4\u683C\u5F15\u7528: null,
        \u6D3B\u7269: false,
        \u63CF\u8FF0: "\u9192\u9192\u7A7F\u6234\u7684\u8F7B\u4FBF\u62AB\u98CE\u3002"
      },
      sword: {
        \u540D\u79F0: "\u94F6\u7EB9\u77ED\u5251",
        \u6570\u91CF: 1,
        \u5355\u4F4D: "\u67C4",
        owner: "xiaogai",
        holder: "xiaogai",
        storage_id: "hand_xiaogai",
        \u89C4\u683C\u5F15\u7528: null,
        \u6D3B\u7269: false,
        \u63CF\u8FF0: "\u5C0F\u76D6\u968F\u8EAB\u4F69\u5E26\u7684\u94F6\u7EB9\u77ED\u5251\u3002"
      },
      armor: {
        \u540D\u79F0: "\u76AE\u9769\u62A4\u5177",
        \u6570\u91CF: 1,
        \u5355\u4F4D: "\u5957",
        owner: "xiaogai",
        holder: "xiaogai",
        storage_id: "hand_xiaogai",
        \u89C4\u683C\u5F15\u7528: null,
        \u6D3B\u7269: false,
        \u63CF\u8FF0: "\u5C0F\u76D6\u7A7F\u6234\u7684\u76AE\u9769\u62A4\u5177\u3002"
      },
      astreya: {
        \u540D\u79F0: "\u963F\u65AF\u7279\u857E\u96C5\xB7\u7FA4\u661F\u4E4B\u5195",
        \u6570\u91CF: 1,
        \u5355\u4F4D: "\u67C4",
        owner: "xiaogai",
        holder: "xiaogai",
        storage_id: "hand_xiaogai",
        \u89C4\u683C\u5F15\u7528: null,
        \u6D3B\u7269: false,
        \u54C1\u7EA7: "\u795E\u5668",
        \u7C7B\u522B: "\u88C5\u5907",
        \u7C7B\u578B: "\u6CD5\u6756",
        \u63CF\u8FF0: "\u94F6\u767D\u51A0\u72B6\u6756\u9996\u6258\u7740\u6DF1\u84DD\u661F\u6838\uFF0C\u7EC6\u661F\u73AF\u73AF\u7ED5\u5176\u4FA7\u3002\u53EF\u5C55\u5F00\u591A\u91CD\u661F\u9635\u65BD\u6CD5\uFF0C\u6536\u675F\u4E3A\u8D2F\u7A7F\u8981\u585E\u7684\u661F\u8292\uFF0C\u964D\u4E0B\u8986\u76D6\u6218\u573A\u7684\u661F\u96E8\uFF0C\u5E76\u4EE5\u5C42\u5C42\u661F\u8F68\u4FDD\u62A4\u6307\u5B9A\u7684\u4EBA\u3002"
      }
    },
    \u50A8\u4F4D: {
      hand_xingxing: {
        \u7C7B\u578B: "\u968F\u8EAB",
        \u5730\u70B9: "LOC-VIR-003",
        \u4FDD\u7BA1\u8005: "xingxing",
        \u53EF\u7528: true,
        \u7269\u54C1\u5F15\u7528: null
      },
      hand_xiaogai: {
        \u7C7B\u578B: "\u968F\u8EAB",
        \u5730\u70B9: "LOC-VIR-003",
        \u4FDD\u7BA1\u8005: "xiaogai",
        \u53EF\u7528: true,
        \u7269\u54C1\u5F15\u7528: null
      }
    },
    \u65C5\u7A0B: {
      \u59D4\u6258: null,
      \u7EA6\u5B9A: {},
      \u4EA4\u901A: null
    },
    \u73A9\u6CD5: {
      \u7248\u672C: 1,
      \u7269\u8D44: {
        ration: {
          \u5355\u4F4D\u91CD\u91CF: 0.2,
          \u5355\u4F4D\u5BB9\u79EF: 0.3
        },
        water: {
          \u5355\u4F4D\u91CD\u91CF: 1.1,
          \u5355\u4F4D\u5BB9\u79EF: 1.2
        },
        potion: {
          \u5355\u4F4D\u91CD\u91CF: 0.15,
          \u5355\u4F4D\u5BB9\u79EF: 0.15
        },
        camp: {
          \u5355\u4F4D\u91CD\u91CF: 3,
          \u5355\u4F4D\u5BB9\u79EF: 8
        },
        herb: {
          \u5355\u4F4D\u91CD\u91CF: 0.1,
          \u5355\u4F4D\u5BB9\u79EF: 0.5
        },
        bookmark: {
          \u5355\u4F4D\u91CD\u91CF: 0.01,
          \u5355\u4F4D\u5BB9\u79EF: 0.01
        },
        staff: {
          \u5355\u4F4D\u91CD\u91CF: 0.8,
          \u5355\u4F4D\u5BB9\u79EF: 1.5
        },
        cloak: {
          \u5355\u4F4D\u91CD\u91CF: 0.6,
          \u5355\u4F4D\u5BB9\u79EF: 2
        },
        sword: {
          \u5355\u4F4D\u91CD\u91CF: 1.2,
          \u5355\u4F4D\u5BB9\u79EF: 1.2
        },
        armor: {
          \u5355\u4F4D\u91CD\u91CF: 3,
          \u5355\u4F4D\u5BB9\u79EF: 5
        }
      },
      \u50A8\u7269: {},
      \u672A\u7ED3\u4E8B\u9879: {},
      \u4EA4\u901A\u4E2A\u4F53: {},
      \u5C0F\u5730\u70B9: {},
      \u6863\u6848: {},
      \u6548\u679C: {},
      \u7EC8\u70B9: null
    }
  };

  // src/ui-geometric/runtime-handbook.mjs
  function mountHandbook(root, adapter = {}) {
    let snapshot, app;
    const notice = document.createElement("p"), content = document.createElement("div");
    notice.setAttribute("role", "status");
    notice.textContent = "\u6B63\u5728\u8BFB\u53D6\u65C5\u9014\u8BB0\u5F55\u2026";
    root.replaceChildren(notice, content);
    const gallery = createArtbook({
      snapshot: () => snapshot,
      assets: adapter.assets,
      changed() {
      },
      getPortraitImages: () => [snapshot.portraitImages],
      getSceneImages: () => [snapshot.sceneImages]
    });
    function update(next) {
      if (next.status !== "ready") {
        notice.hidden = false;
        notice.textContent = next.reason ?? "\u6B63\u5728\u8BFB\u53D6\u65C5\u9014\u8BB0\u5F55\u2026";
        return;
      }
      const displayState = structuredClone(next.state);
      if (displayState.\u5173\u7CFB.\u660E\u786E\u4E8B\u5B9E === null) displayState.\u5173\u7CFB.\u660E\u786E\u4E8B\u5B9E = structuredClone(initial_state_default.\u5173\u7CFB.\u660E\u786E\u4E8B\u5B9E);
      const previousPact = displayState.\u65C5\u7A0B.\u7EA6\u5B9A?.\u5171\u540C\u76EE\u7684\u5730;
      if (previousPact) {
        displayState.\u5173\u7CFB.\u660E\u786E\u4E8B\u5B9E ??= {};
        displayState.\u5173\u7CFB.\u660E\u786E\u4E8B\u5B9E.\u540C\u884C\u7EA6\u5B9A ??= previousPact;
        delete displayState.\u65C5\u7A0B.\u7EA6\u5B9A.\u5171\u540C\u76EE\u7684\u5730;
      }
      gameplay(displayState);
      displayState.\u5A92\u4F53 ??= createMedia();
      next = { ...next, state: displayState, ...mediaSnapshot(displayState, adapter.origin) };
      notice.hidden = !next.recovery;
      if (next.recovery) notice.textContent = next.recovery.message;
      if (!app) {
        snapshot = next;
        app = mountDesktopHandbook(content, {
          snapshot,
          assets: adapter.assets,
          itemImages: snapshot.itemImages,
          portraitImages: {},
          notebookData: notebookData(snapshot.state, snapshot.scope),
          recordData: recordsData(snapshot.state),
          collectionSnapshot: snapshot,
          gallery,
          onNavigate() {
          },
          onChoosePortrait() {
          },
          onChooseScene() {
          },
          async onEquipment(id, plan) {
            try {
              await adapter.changeEquipment({ actor: plan.actor, slot: plan.slot, itemId: plan.itemId, version: snapshot.equipmentVersion }, snapshot.scope);
            } catch (error) {
              notice.textContent = error.message;
              notice.hidden = false;
            }
          }
        });
      } else {
        const state = snapshot.state, itemImages = snapshot.itemImages;
        if (state !== next.state) {
          for (const key of Object.keys(state)) delete state[key];
          Object.assign(state, next.state);
        }
        if (itemImages !== next.itemImages) {
          for (const key of Object.keys(itemImages)) delete itemImages[key];
          Object.assign(itemImages, next.itemImages);
        }
        Object.assign(snapshot, next, { state, itemImages });
        app.update(snapshot, notebookData(state, snapshot.scope), recordsData(state));
      }
    }
    return { update, destroy() {
      app?.destroy();
      root.replaceChildren();
    } };
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
    const base2 = document.createElement("div");
    base2.className = "xh-pov-crystal-frame";
    for (const frame4 of [base2, tint]) {
      frame4.style.backgroundImage = "url(" + JSON.stringify(mobile_crystal_master_default) + ")";
      frame4.style.maskImage = 'url("data:image/svg+xml,' + encodeURIComponent(mask) + '")';
      element.append(frame4);
    }
    return { element, tint };
  }

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
  var _forEachName = function _forEachName2(names6, func) {
    return (names6 = names6.split(",")).forEach(func) || names6;
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
  var _merge = function _merge2(base2, toMerge) {
    for (var p in toMerge) {
      base2[p] = toMerge[p];
    }
    return base2;
  };
  var _mergeDeep = function _mergeDeep2(base2, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base2[p] = _isObject(toMerge[p]) ? _mergeDeep2(base2[p] || (base2[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base2;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }
    return copy;
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
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
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
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels3 = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels3)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        position in labels3 || (labels3[position] = clippedDuration);
        return labels3[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
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
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base2 = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
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
        distances.b = l < 0 ? base2 - l : base2;
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
    var labels3 = timeline2.labels, min = _bigNum, p, distance, label;
    for (p in labels3) {
      distance = labels3[p] - fromTime;
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
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell2, d, l;
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
        shell2 = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell2.length - 1;
        for (; i < l; i++) {
          result += shell2[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell2) {
      shell2 = s.split(_colorExp);
      l = shell2.length - 1;
      for (; i < l; i++) {
        result += shell2[i] + colors[i];
      }
    }
    return result + shell2[l];
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
      var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame4;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame4 = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i = 0; _i < _listeners2.length; _i++) {
          _listeners2[_i](time, _delta, frame4, v);
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
  var _insertEase = function _insertEase2(names6, easeIn, easeOut, easeInOut) {
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
    _forEachName(names6, function(name) {
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
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
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
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
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
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
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
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
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
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
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
      var child = this._first, labels3 = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels3) {
          if (labels3[p] >= ignoreBeforeTime) {
            labels3[p] += amount;
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
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
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
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
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
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
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
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
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
            keyframes.forEach(function(frame4) {
              return tl.to(parsedTargets, frame4, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a = copy[p].sort(function(a2, b) {
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
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
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
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
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
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style2 = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px2, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px2 = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px2 * amount : curValue / 100 * px2);
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
        px2 = target[measureProperty];
        v ? target.style[property] = v : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style2.position = _getComputedProperty(target, "position"));
        parent === target && (style2.position = "static");
        parent.appendChild(_tempDiv);
        px2 = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style2.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px2 * curValue / amount : px2 && curValue ? amount / px2 * curValue : 0);
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
    var style2 = target.style, invertedScaleX = cache.scaleX < 0, px2 = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
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
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px2;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px2;
    cache.z = z + px2;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px2;
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

  // src/ui/pov-motion.mjs
  function createPovMotion(stage, portraits, texts, themes, effects, star3) {
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
      const point = star3();
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
  var names5 = { xingxing: "\u9192\u9192", xiaogai: "\u5C0F\u76D6" };
  var authors = { xingxing: "naiv31y", xiaogai: "gatsby" };
  var node9 = (tag, cls, text) => {
    const e = document.createElement(tag);
    e.className = cls;
    if (text !== void 0) e.textContent = text;
    return e;
  };
  var paths2 = { pin: "M12 23S3.5 14 3.5 8.5a8.5 8.5 0 1 1 17 0C20.5 14 12 23 12 23Z", swap: "M3 7h17m-5-5 5 5-5 5M21 17H4m5-5-5 5 5 5", heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z", star: "m12 1 2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5L12 1Z" };
  function icon5(name) {
    const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    e.setAttribute("viewBox", "0 0 24 24");
    e.setAttribute("aria-hidden", "true");
    for (const d of name === "swap" ? ["M3 7h17m-5-5 5 5-5 5", "M21 17H4m5-5-5 5 5 5"] : [paths2[name]]) {
      const p = document.createElementNS(e.namespaceURI, "path");
      p.setAttribute("d", d);
      e.append(p);
    }
    e.classList.add("xh-pov-icon", name);
    return e;
  }
  function art(src, clean = false) {
    const image = node9("img", "xh-pov-art" + (clean ? " xh-pov-art-clean" : ""));
    image.src = src;
    image.alt = "";
    image.draggable = false;
    if (!clean) image.style.maskImage = "url(" + JSON.stringify(header_mask_default) + ")";
    return image;
  }
  function mountPovHeader(root, adapter = {}) {
    root.__xhPovHeader?.destroy();
    let snapshot = { status: "loading", state: null }, pending = false, disposed = false;
    const viewport = node9("div", "xh-pov-viewport"), stage = node9("header", "xh-pov-stage");
    stage.setAttribute("aria-label", "\u4E3B\u89C6\u89D2\u4E0E\u65C5\u9014\u4FE1\u606F");
    stage.dataset.design = "crystal";
    const paper2 = node9("div", "xh-pov-paper"), backdrop = node9("div", "xh-pov-art-clip"), mobileArt = createMobilePovFrame(), themes = { xingxing: [], xiaogai: [] }, portraits = {}, texts = {};
    stage.dataset.mobileDesign = "crystal-1-common-ornament";
    const portraitLayer = node9("div", "xh-pov-portraits");
    for (const [id, frame4, clean] of [["xingxing", reference_xingxing_default, clean_portrait_backdrop_xingxing_default], ["xiaogai", reference_xiaogai_default, clean_portrait_backdrop_xiaogai_default]]) {
      const theme = node9("div", "xh-pov-art-theme " + id);
      theme.append(art(clean, true), art(frame4));
      backdrop.append(theme);
      themes[id].push(theme);
      const portrait = node9("span", "xh-pov-portrait");
      portrait.dataset.character = id;
      portrait.setAttribute("role", "img");
      portrait.setAttribute("aria-label", names5[id] + "\u5934\u50CF");
      portrait.append(node9("span", "xh-pov-portrait-inner"));
      portraitLayer.append(portrait);
      portraits[id] = portrait;
      const other = id === "xingxing" ? "xiaogai" : "xingxing", identity = node9("div", "xh-pov-identity " + id), line = node9("div", "xh-pov-names");
      const current = node9("span", "xh-pov-current"), companion = node9("span", "xh-pov-companion");
      current.append(node9("span", "", "\u626E\u6F14"), node9("strong", "", names5[id]));
      companion.append(icon5("heart"), node9("span", "", "\u540C\u884C"), node9("span", "", names5[other]));
      line.append(current, companion);
      identity.append(line, node9("div", "xh-pov-signature", authors[id] + " \xD7 " + authors[other]));
      texts[id] = identity;
    }
    themes.xiaogai.push(mobileArt.tint);
    const meta2 = node9("div", "xh-pov-meta"), location = node9("span", "xh-pov-field location"), locationText = node9("span", "");
    location.append(icon5("pin"), locationText);
    const date2 = node9("span", "xh-pov-field date"), season = node9("span", "xh-pov-field season"), weather = node9("span", "xh-pov-field weather"), weatherImage = node9("img", ""), weatherText = node9("span", ""), time = node9("span", "xh-pov-field clock");
    weatherImage.alt = "";
    weather.append(weatherImage, weatherText);
    const toggle = node9("button", "xh-pov-switch"), toggleText = node9("span", "", "\u5207\u6362\u626E\u6F14");
    toggle.type = "button";
    toggle.append(icon5("swap"), toggleText);
    toggle.disabled = true;
    const effects = node9("div", "xh-pov-motion-fx");
    effects.setAttribute("aria-hidden", "true");
    effects.append(node9("span", "xh-pov-light-sweep"));
    const status = node9("p", "xh-pov-status", "\u6B63\u5728\u8BFB\u53D6\u65C5\u9014\u8BB0\u5F55\u2026");
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    meta2.append(location, date2, season, weather, time);
    stage.append(paper2, backdrop, mobileArt.element, portraitLayer, texts.xingxing, texts.xiaogai, meta2, toggle, effects, status);
    viewport.append(stage);
    root.replaceChildren(viewport);
    const motion = createPovMotion(stage, portraits, texts, themes, effects, () => icon5("star"));
    const artbook = createArtbook({ snapshot: () => snapshot, assets: adapter.assets ?? {}, changed: () => render3(), getPortraitImages: () => [snapshot.portraitImages, adapter.portraitImages] });
    const portraitKeys = {};
    function render3() {
      const s = snapshot.state;
      if (!s) {
        status.textContent = snapshot.reason ?? "\u6B63\u5728\u8BFB\u53D6\u65C5\u9014\u8BB0\u5F55\u2026";
        return;
      }
      stage.dataset.ready = "true";
      for (const id of Object.keys(names5)) {
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
      date2.textContent = s.\u573A\u666F.\u65F6\u95F4.\u65E5\u671F ?? "";
      date2.title = date2.textContent;
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
      toggle.title = "\u6539\u4E3A\u626E\u6F14" + names5[other];
      toggle.setAttribute("aria-label", "\u5207\u6362\u626E\u6F14\uFF0C\u6539\u4E3A" + names5[other]);
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
  function mountRegionArrival(root, { origin, ink: ink2 } = {}) {
    const doc = root.ownerDocument, css = doc.createElement("style"), figure = doc.createElement("figure"), image = doc.createElement("img"), caption = doc.createElement("figcaption"), title = doc.createElement("h2"), description = doc.createElement("p"), failure = doc.createElement("p");
    css.textContent = style;
    root.classList.add("xh-arrival");
    root.hidden = true;
    if (ink2) root.style.setProperty("--xh-arrival-ink", ink2);
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
    return mountMessageSurface(root, api, parent, options, (node10, settings) => mountArrivalAndHandbook(node10, settings, mountHandbook), true);
  }
  function mountMessagePovHeader(root, api = globalThis, parent = api.parent, options = {}) {
    return mountMessageSurface(root, api, parent, options, mountPovHeader);
  }
  function mountMessageSurface(root, api, parent, options, mount, includeArrival = false) {
    let disposed = false, ticket = 0, unsubscribe, boundService, initialScope, refreshing = false, pendingRefresh = false, refreshTimer;
    root.dataset.xinghaiUiRevision = "test.5-geometric-20261030-food-media";
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
      appendDraft: async (text, scope) => {
        const service = parent.__xinghai_card;
        return service.appendDraft(text, initialScope);
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