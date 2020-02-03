window.addEventListener("click", onRadarClick);

window.onunload = function(event) {
  window.removeEventListener("click", onRadarClick);
};
var iFrame = null;
var topics = {};
window.onRadarReady = function(iframe) {
  iFrame = iframe;
  iFrame.contentDocument.addEventListener("click", onIframeClicked);
  var checkLinks = this.setInterval(function() {
    var anchors = [].slice.call(iFrame.contentDocument.links);

    if (anchors.length > 0) {
      clearInterval(checkLinks);
      anchors.forEach(function(element) {
        element.setAttribute("target", "_blank");
      });
      var tables = iFrame.contentDocument.querySelectorAll(".quadrant-table");
      tables.forEach(function(table) {
        setTableToDictionary(table);
        var newQuadArray = reorderRadarQuadrentContent(table);
        removeQuadrantChildren(table);
        newQuadArray = newQuadArray.reduce(function(acc, val) {
          return acc.concat(val);
        }, []);
        newQuadArray.forEach(function(item) {
          table.appendChild(item);
          table.addEventListener("click", onTableClick);
        });
      });

      var qudrants = iFrame.contentDocument.querySelectorAll(".quadrant-group");
      qudrants = [].slice.call(qudrants);
      qudrants.forEach(function(q) {
        q.addEventListener("click", onQuadrentClick);
      });

      var ulContents = iFrame.contentDocument.querySelectorAll("#radar div.quadrant-table ul");
      ulContents = [].slice.call(ulContents);
      ulContents.forEach(function(ul) {
        ul.classList.add("ul-expanded");
        ul.classList.add("ul-collapsed");
      });
    }
  }, 500);
};
// Reordering radar table.
// This part is done at runtime. Rings reordering is done in _plugins/tech_radar_loader.rb
// Reordering is done according to 'order' array
var order = ["try", "start", "keep", "stop"];

function removeQuadrantChildren(quad) {
  var children = [].slice.call(quad.children);
  children.forEach(function(c) {
    c.parentElement.removeChild(c);
  });
}

function reorderRadarQuadrentContent(quad) {
  var qChildren = quad.childNodes;
  var tmp = [];
  var title = qChildren[0];
  // Take h3,ul pairs
  for (var i = 1; i < qChildren.length; i += 2) {
    var child = qChildren[i];
    var name = child.innerText;
    var idx = getIndexFor(name);

    tmp[idx] = [child, child.nextSibling];
  }
  tmp.unshift(title);
  return tmp;
}

function onTableClick(event) {
  var target = event.target;
  console.log("onTableClick", target);
  if (target.tagName.toLowerCase() === "h3") {
    target.nextSibling.classList.toggle("ul-collapsed");
  }
}

function onQuadrentClick(event) {
  var target = event.target;
  console.log("onQuadrentClick", target);
  if (target.tagName.toLowerCase() === "path") {
    var num = target.nextSibling.innerHTML;
    if (num) {
      topics[num].ul.classList.remove("ul-collapsed");
      topics[num].content.classList.add("expanded");
    }
  }
}

function getIndexFor(name) {
  var res = false;
  var i = 0;
  for (var i = 0; i < order.length; i++) {
    var item = order[i];
    if (item.toLowerCase() === name.toLowerCase()) {
      res = true;
      break;
    }
  }
  return res ? i : -1;
}

function setTableToDictionary(table) {
  var titles = table.querySelectorAll(".blip-list-item");
  titles = [].slice.call(titles);
  titles.forEach(function(title) {
    var num = title.innerText.substring(0, title.innerText.indexOf("."));
    topics[num] = {
      ul: title.parentElement.parentElement,
      content: title.nextSibling
    };
  });
}

window.addEventListener("click", onRadarClick);
var domainSelected = false;
function onIframeClicked(event) {
  var target = event.target;
  var backButton = document.getElementById("showRadar");
  var parentElement = target.parentElement;
  if (parentElement && parentElement.tagName === "g") {
    backButton.classList.add("home-link-show");
    // if(domainSelected && parentElement.className.baseVal === 'blip-link'){
    //     var textElement = parentElement.children[1];
    //     var index = textElement.innerHtml;
    // }
    domainSelected = true;
  } else {
    if (target.classList.length > 0) {
      var className = target.className;
      if (className.includes("button")) {
        backButton.classList.add("home-link-show");
        domainSelected = false;
      }
    }
  }
}

function onRadarClick(event) {
  var target = event.target;

  if (target.classList && target.classList.contains("domain-tab")) {
    var children = document.querySelectorAll("div.anchors .domain-tab");
    target.classList.add("domain-tab-selected");
    var length = children.length;

    for (var i = 0; i < length; i++) {
      var a = children[i];
      if (a !== target) {
        a.classList.remove("domain-tab-selected");
      }
    }
    var backButton = document.getElementById("showRadar");
    backButton.classList.add("home-link-show");
  } else if (target.id === "showRadar") {
    // The radar back button has the same class name as 'our' back button
    var backButton = iFrame.contentDocument.getElementsByClassName("home-link")[0];
    if (backButton) {
      backButton.click();
      target.classList.remove("home-link-show");
      var children = document.querySelectorAll("div.anchors .domain-tab");
      var length = children.length;

      for (var i = 0; i < length; i++) {
        var a = children[i];
        a.classList.remove("domain-tab-selected");
      }
    }
  }
}

window.initThoughtRadars = event => {
  // Radar iframe auto resize and preloader
  $(".thought-radar").each(function() {
    var $this = $(this);
    var sheet = $this.attr("data-sheet");
    var iframe = $('<iframe frameborder="0"></iframe>').css("visibility", "hidden");
    var loader = $('<div class="loader"><i class="glyphicon glyphicon-spin glyphicon-repeat"></i></div>');
    var powered = $(
      '<div class="powered-by">Powered by <a href="https://github.com/thoughtworks/build-your-own-radar" target="_blank">ThoughtWorks</a></div>'
    );

    $this
      .append(loader)
      .append(iframe)
      .append(powered);

    iframe[0].onload = function() {
      iframe.css("visibility", "visible");
      setTimeout(function() {
        loader.hide();
      }, 500);
      setInterval(function() {
        iframe.height(iframe[0] && iframe[0].contentWindow && iframe[0].contentWindow.document.body.scrollHeight);
      }, 100);
      window.onRadarReady(iframe[0]);
    };
    iframe[0].src = "radar/radar.html?sheetId=" + encodeURIComponent(sheet);

    $("[data-radar-button]").on("click", function() {
      var which = $(this).attr("data-radar-button");
      var button = $(iframe[0].contentWindow.document.getElementsByClassName("button")).filter("." + which)[0];

      button.click();
    });
  });
};
