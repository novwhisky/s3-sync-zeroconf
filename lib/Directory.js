var File = require("./File.js");

function Directory() {
    File.apply(this, arguments);

    this.size = 0;
    this.children = {
        "Foo": new File("Foo"),
        "Bar": new File("Bar")
    };
}
Directory.prototype = Object.create(File.prototype);

Directory.prototype.ls = function(args) {
    args = args || "df";

    var me = this,
        ret = [],
        files = Object.keys(this.children);

    files.forEach(function(v, idx, arr) {
        if(args.indexOf("d") > -1 && me.children[v] instanceof Directory)
            ret.push(v);
        else if(args.indexOf("f") > -1 && me.children[v] instanceof File)
            ret.push(v);
    });

    return ret;
};


module.exports = Directory;