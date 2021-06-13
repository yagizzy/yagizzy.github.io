(function ($) {
    $.fn.tickerText = function (contents, keep, seconds, delay = 20, iterations = 0, ratio, secondsout, dev = false, pausetarget, stoptarget) {
        let current = 0, //state
        count = 0, //state
        deviance = 20,
        inTransPercent = ratio,
        outTransPercent = 1 - ratio,
        exit = false,
        elem = this,
        pause = false,
        da,
        daDif,
        dat,
        dto,
        ds,
        dx,
        dxx,
        dyy,
        dy,
        timelineTimerAdd,
        timelineTimerSubract,
        timelineTimerAddNoop,
        timelineTimerSubtractNoop,
        timelineTimerNoop,
        masterTimelineTimerAdd,
        masterTimelineTimerAddTidy,
        masterTimelineTimerSubtract,
        masterTimelineTimerSubtractTidy;
        let maxInDelay = Math.floor(((seconds * inTransPercent) * 1000) / (contents[count % contents.length].textContent.length));
        let textArray = contents[count % contents.length].textContent.split("");

        
        function reset() {
            clearTimeout(masterTimelineTimerAdd);
            clearTimeout(masterTimelineTimerAddTidy);
            clearTimeout(masterTimelineTimerSubtract);
            clearTimeout(masterTimelineTimerSubtractTidy)
            clearTimeout(timelineTimerAdd);
            clearTimeout(timelineTimerSubract);
        }

        function timeoutAddNoop() {
            timelineTimerAddNoop = setTimeout(function () {
                if (!exit && !pause && vis()) {
                    clearTimeout(timelineTimerAddNoop);
                    return;
                }
                if (!exit && (pause || !vis())) {
                    if (dev) {
                        dto = performance.now();
                      
                    }
                    timeoutAddNoop();
                } if (exit) {
                    clearInterval(timelineTimerAddNoop);
                    return;
                };

            }, maxInDelay);
        }

        function timeoutSubtractNoop() {
            if (dev) {
                dtn = performance.now();
            }
            timelineTimerSubtractNoop = setTimeout(function () {

                if (!exit && !pause && vis()) {
                    if (dev) {
                        dto = performance.now();
                      
                    }
                    clearTimeout(timelineTimerSubtractNoop);
                    return;
                }
                if (!exit) {
                    if (dev) {
                        dto = performance.now();
                        
                    }
                    timeoutSubtractNoop();
                } if (exit) {
                    clearInterval(timelineTimerSubtractNoop);
                    return;
                };

            }, maxOutDelay);
        }

     
        function timeoutAdd() {
            timelineTimerAdd = setTimeout(function () {
  
                let text = elem.text();
                if (!keep && current < textArray.length ) {
                    elem.text(text + textArray[current]);
                    current++;
                }

                if (keep && current < textArray.length && count >= 0) {
                    if (textArray[current] !== undefined) {
                        elem.text(text + textArray[current]);
                    }
                    current++;
                }
                if (current >= textArray.length) {
                    da = performance.now();
                    daDif = da - dx;
                    if (daDif >= (1000 * inTransPercent * seconds) - deviance ) {
                        daDif = 0;
                    }
                    if (dev) {
                        da = performance.now();
                        console.log("completed pt1 ", da - dx, "microseconds", "text", elem.text());
                    }
                    clearInterval(timelineTimerAdd);
                    part2();
                    return;

                }

                if (!exit) {
                    clearInterval(timelineTimerAdd);
                    timeoutAdd();
                }

            }, (delay <= maxInDelay ? delay : maxInDelay));
        }

        let maxOutDelay = Math.floor(1000 * (seconds * outTransPercent) / elem.text().length);

        function timeoutSubtract() {
            timelineTimerSubract = setTimeout(function () {


                let tempText;
                if (elem.text().length > keep) {
                    tempText = elem.text().substring(0, elem.text().length - 1);
                }
                else {
                    tempText = elem.text();
                }

                if (current > 0 ) {
                    elem.text(tempText);
                    current--;
                }

                if (current <= keep) {
                    ds = performance.now();
                    dsDiff = ds - dat;
                    if (dsDiff >= (1000 * outTransPercent * seconds) - deviance) {
                        dsDiff = 0;
                    }
                    if (dev) {
                        
                    }
                    clearTimeout(timelineTimerSubract);
                    part4();
                    return;
                }

                if (!exit) {
                    clearInterval(timelineTimerSubract);
                    timeoutSubtract();
                }

            }, (delay <= maxOutDelay ? delay : maxOutDelay));
        }

  
        function timelineNoop() {

            if (dev) {
                dxx = performance.now();
            }
            timelineTimerNoop = setTimeout(function () {

                if (!exit && !pause && vis()) {
                   
                    if (dev) {
                        dyy = performance.now();
                       
                    }
                   
                    clearTimeout(timelineTimerNoop);
                    
                    timeline();
                    return;
                }
                if (!exit && (pause || !vis())) {
                    if (dev) {
                        dyy = performance.now();
                        
                    }
                    timelineNoop();
                } if (exit) {
                    clearInterval(timelineTimerNoop);
                    return;
                };

            }, maxInDelay );
        }

        function part1() {
            masterTimelineTimerAdd = setTimeout(function () {
                if (!exit) {
                    timeoutAdd();
                } else {
                    clearTimeout(masterTimelineTimerAdd);
                   // part2();
                    return;
                };

            }, 0);
        }

        function part2() {
            masterTimelineTimerAddTidy = setTimeout(function () {

                let text = elem.text();

                if (text != contents[(count) % contents.length].textContent && count >= 1 && !exit && (vis() && !pause)) {
                    elem.text(contents[count % contents.length].textContent);
                    current = contents[count % contents.length].textContent.length;
                }

                dat = performance.now();
                if (dev) {
                    console.log("completed pt2", dat - dx, "microseconds", "text", elem.text());
                }

                part3();

               
                if (iterations && count >= contents.length * iterations) {
                    exit = true;
    
                    clearTimeout(masterTimelineTimerAddTidy);
                    return;

                }

            }, Math.floor((1000 * inTransPercent * seconds) - deviance - daDif));
        }

        function part3() {
            masterTimelineTimerSubtract = setTimeout(function () {
                if (!exit) {
                    timeoutSubtract();
                } else {
                    clearTimeout(masterTimelineTimerSubtract);
                    return;
                };

            }, 0);

        }

        function part4() {

            masterTimelineTimerSubtractTidy = setTimeout(function () {

                let text = elem.text();
                
                if (!keep && text && !exit && (vis() && !pause)) {
                    elem.text("");
                }
                
                if (keep && text != contents[count % contents.length].textContent.substr(0, keep) && !exit && (vis() && !pause)) {
                    elem.text(contents[count % contents.length].textContent.substr(0, keep));
                }

                
                if (secondsout && count === 0) {
                    seconds = secondsout;
                    
                    maxInDelay = Math.floor(((seconds * inTransPercent) * 1000) / (contents[count % contents.length].textContent.length));
                    
                    maxOutDelay = Math.floor(1000 * (seconds * outTransPercent) / text.length);
                }

               
                if (!exit && (!pause || vis())) {
                    
                    count++;

                   
                    textArray = contents[count % contents.length].textContent.split("");

                    
                    if (dev) {
                        dy = performance.now();
                        console.log("completed pt4", dy - dx, "microseconds", "text", elem.text());
                    }
                    reset();
                    timeline();

                }
                if (!exit && (pause || !vis())) {

                    reset();
                    timelineNoop();
                }
                if (exit) {
                    return;
                };
            }, Math.floor((1000 * outTransPercent * seconds) - deviance - dsDiff));

        }

        function timeline() {

         
            dx = performance.now();

            if (dev) {
                dx = performance.now();
                console.log("count", count);
            }

            
            part1();

        }

       
        timeline();
    };

})(jQuery);


var vis = (function () {
    var stateKey,
        eventKey,
        keys = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }
    return function (c) {
        if (c) document.addEventListener(eventKey, c);
        return !document[stateKey];
    }
})();

