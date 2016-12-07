"use strict";
// From https://gist.github.com/tobie/39c068f2b58422b5d20a5e24941c9f17
window.addEventListener("load", function() {
    var CSS_TEXT = "float: left; padding: 5px 15px; border-left: 1px solid #999; cursor: pointer;"
    var CSS_BORDER = "border: 2px dashed #00F";
    var container = document.createElement("div");
    var display = document.createElement("div");
    var previous = document.createElement("div");
    var next = document.createElement("div");
    var position = document.createElement("span");
    display.appendChild(position);
    container.appendChild(display);
    container.appendChild(previous);
    container.appendChild(next);
    document.body.appendChild(container);
    container.className = "";
    container.style.cssText = "background-image: linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1)); font: 12px sans-serif; color: #666; border-top: 1px solid #999; border-right: 1px solid #999; border-left: 1px solid #999; position: fixed; bottom: 0; right: 25px; border-radius: 3px 3px 0 0; background-color: #eee"
    next.style.cssText = CSS_TEXT;
    previous.style.cssText = CSS_TEXT;
    display.style.cssText = "float: left; padding: 5px 5px;"
    position.style.cssText = "background-color: #fff; border: 1px solid #999; padding: 1px 5px; box-shadow: inset 0 1px 3px #ddd; border-radius: 2px"
    next.textContent = "next ›";
    next.title = "Keyboard nav: use \"j\" to jump to next change."
    previous.textContent = "‹ previous";
    previous.title = "Keyboard nav: use \"k\" to jump to previous change."
    
    
    function State(changes) {
        changes = Array.prototype.slice.call(changes, 0);
        var index = -1;
        var length = changes.length;
        
        return {
            index: function() {
                return index + 1;
            },
            size: function() {
                return length;
            },
            current: function() {
                return changes[index];
            },
            previous: function() {
                index--;
                if (index < 0) {
                    index = length-1;
                }
                return changes[index];
            },
            next: function() {
                index++;
                if (index >= length) {
                    index = 0;
                }
                return changes[index];
            },
            none: function() {
                index = -1;
            }
        }
    }
    
    function init(elements) {
        var current = null;
        var state = new State(elements);
        function update(state) {
            position.textContent = state.index() + " of " + state.size();
        }
        
        function onnext(e) {
            if (current) {
                current.style.cssText = "";
            }
            current = state.next();
            current.style.cssText = CSS_BORDER;
            current.scrollIntoView();
            update(state);
        }
        function onprevious(e) {
            if (current) {
                current.style.cssText = "";
            }
            current = state.previous();
            current.style.cssText = CSS_BORDER;
            current.scrollIntoView();
            update(state);
        }
        function onstop(e) {
            if (current) {
                current.style.cssText = "";
            }
            state.none();
            current = null;
            update(state);
        }
        next.onclick = onnext;
        previous.onclick = onprevious;
        document.addEventListener("keydown", function (e) {
            if (!e.metaKey && e.keyCode == 74) {
                onnext(e)
            } else if (!e.metaKey && e.keyCode == 75) {
                onprevious(e)
            } else if (!e.metaKey && e.keyCode == 27) {
                onstop(e)
            }
        }, false);
        update(state);
    }
    
    var diffs = document.querySelectorAll("del.diff-old, ins.diff-chg, ins.diff-new");
    diffs = Array.prototype.filter.call(diffs, function(e) {
        return e.offsetWidth || e.offsetHeight || e.getClientRects().length;
    });
    init(diffs);
});
