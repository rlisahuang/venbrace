let startTime = Date.now();
let lastKeyTime = startTime;
const buffers = {};
const escapeKeys = new Set(['Shift','Escape','Alt','CapsLock']);
let ctrlDown = false,
    doubleClick = false,
    ctrlKey = 17,
    cmdKey = 91,
    upArrow = 38,
    downArrow = 40,
    leftArrow = 37,
    rightArrow = 39,
    enter = 13,
    tab = 9;


function track (editor) {
    
    buffers[lastKeyTime] = [];
    let buffer = buffers[lastKeyTime];
    
    updateData();

    // $("#submit").on("click", function() {
    //     let newline = String.fromCharCode(13, 10);
    //     $("#rawText").val($("#code").val().replaceAll('\\n', newline));
    // });

    editor.on("keydown", function (instance, event) {
        const k = event.key;
        const keyCode = event.keyCode;
        let currentTime = Date.now();
        let data = {};

        if ((currentTime - lastKeyTime > 1000) && buffer.length > 0) {
            buffers[currentTime] = [];
            buffer = buffers[currentTime];
            lastTimeStamp = currentTime;
        }

        if (escapeKeys.has(k)) {
            return;
        } else {
            setTimeout( function() {
                // let ch = null;
                if (keyCode == tab) {
                    data[currentTime] = {"edit": {"key": '\t', "cursor": editor.getCursor()}};
                } else if (keyCode == enter) {
                    data[currentTime] = {"edit": {"key": '\n', "cursor": editor.getCursor()}};
                } else if (keyCode == ctrlKey || keyCode == cmdKey){
                    ctrlDown = true;
                    return;
                } else if (keyCode == upArrow || keyCode == downArrow || keyCode == leftArrow || keyCode == rightArrow) {
                    data[currentTime] = {"move": {"key": k, "cursor": editor.getCursor()}};
                } else if (!ctrlDown) {
                    data[currentTime] = {"edit": {"key": k, "cursor": editor.getCursor()}};
                }

                buffer.push(data);

                console.log(buffer);
                lastKeyTime = currentTime;
                updateData();
            }, 1);
        }
    });

    editor.on("keyup", function (instance, event) {
        const keyCode = event.keyCode;
        if (keyCode == ctrlKey || keyCode == cmdKey) ctrlDown = false;
    });

    editor.on("dblclick", function(instance, event) {
        console.log("doubleclick!");
        doubleClick = true;
    });//escape

    editor.on("mousedown", function (instance, event) {

        // alert($("#changes").val());
        let currentTime = Date.now();
        let isRightMB;

        if ("which" in event) { // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
            isRightMB = event.which == 3;
        } else if ("button" in event) { // IE, Opera
            isRightMB = event.button == 2;
        }

        if (isRightMB) {
            // alert("Right button clicked!");
            return;
        }
    

        setTimeout(function() {
            let data = {};
            if (doubleClick) {
                doubleClick = false;

                data[currentTime] = {"dblclick-select": {"key": editor.getSelection(), "cursor": editor.getCursor()}};
                // pop previous click
                buffer.pop();
            }
            else {
                prevPos = editor.getCursor();
                data[currentTime] = {"move": {"key": "left", "cursor": editor.getCursor()}};
            }

            if ((currentTime - lastKeyTime > 1000) && buffer.length > 0) {
                buffers[currentTime] = [];
                buffer = buffers[currentTime];
                lastTimeStamp = currentTime;
            }

            buffer.push(data);

            console.log(buffer);
            lastKeyTime = currentTime;

            updateData();
        }, 1);

    });



    $(".CodeMirror").mouseup(function (instance, event) {

        let currPos = editor.getCursor();
        if (editor.somethingSelected()) {
            setTimeout(function() {
                buffer.pop();
                let data = {};
                let currentTime = Date.now();
                data[currentTime] = {"select": {"key": editor.getSelection(), "cursor": editor.getCursor()}};
                if ((currentTime - lastKeyTime > 1000) && buffer.length > 0) {
                    buffers[currentTime] = [];
                    buffer = buffers[currentTime];
                    lastTimeStamp = currentTime;
                }

                buffer.push(data);
                console.log(buffer);
                lastKeyTime = currentTime;

                updateData();
            }, 1);
        }
    });

    editor.on("copy", function(instance, event){
    let currentTime = Date.now();
    if ((currentTime - lastKeyTime > 1000) && buffer.length > 0) {
        buffers[currentTime] = [];
        buffer = buffers[currentTime];
        lastTimeStamp = currentTime;
    }

    setTimeout(function() {
        let data = {};
        data[currentTime] = {"copy": {"key": editor.getSelection(), "cursor": editor.getCursor()}};
        buffer.push(data);

        console.log(buffer);
        lastKeyTime = currentTime;

        updateData();
    }, 1);
    });

    editor.on("cut", function(instance, event){
        let currentTime = Date.now();
        if ((currentTime - lastKeyTime > 1000) && buffer.length > 0) {
            buffers[currentTime] = [];
            buffer = buffers[currentTime];
            lastTimeStamp = currentTime;
        }

        setTimeout(function() {
            let data = {};
            data[currentTime] = {"cut": {"key": editor.getSelection(), "cursor": editor.getCursor()}};
            buffer.push(data);

            console.log(buffer);
            lastKeyTime = currentTime;

            updateData();
        }, 1);
    });

    editor.on("paste", function(instance, event) {
        let currentTime = Date.now();
        if ((currentTime - lastKeyTime > 1000) && buffer.length > 0) {
            buffers[currentTime] = [];
            buffer = buffers[currentTime];
            lastTimeStamp = currentTime;
        }

        setTimeout(function() {
            let data = {};
            data[currentTime] = {"paste": {"key": event.clipboardData.getData("text"), "cursor": editor.getCursor()}};
            buffer.push(data);

            console.log(buffer);
            lastKeyTime = currentTime;

            updateData();
        }, 1);
    });

    function updateData() {
        $("#changes").val(JSON.stringify(buffers));
    }


}