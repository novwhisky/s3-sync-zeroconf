var File = require("./lib/File.js"),
    Directory = require("./lib/Directory.js");

var util = require("util");

function log(o) {
    console.log(util.inspect(o, true, 40));
}


var d = new Directory("FooDir");
var e = new Directory("BarDir");
var f = new File("Foo");

d.add(e);
e.add(f);

log(f);

//process.stdin.resume();
//process.on('SIGINT', function() {
//    console.log('Got SIGINT.  Press Control-D to exit.');
//});