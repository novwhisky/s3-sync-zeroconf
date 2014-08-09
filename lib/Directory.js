var File = require("./File.js");

function Directory() {
    File.apply(this, arguments);

    this.size = 0;
    this.children = {};
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

Directory.prototype.add = function(file, overwrite) {
    overwrite = overwrite || false;

    if( "name" in file && !(file.name in this.children ) ||
        (file.name in this.children && overwrite === true) ) {
        this.children[file.name] = file;
        file.parent = this;
    }
};

Directory.prototype.rm = function(file) {
    if ( "name" in file && file.name in this.children ) {
        delete this.children[file.name];
    }
};


module.exports = Directory;