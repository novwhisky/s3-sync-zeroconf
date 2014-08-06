function File(name, ns, size) {
    this.name = name;
    this.path = ns || "./";
    this.size = size || 0;
}
File.prototype.setSize = function(bytes) {
    this.size = bytes;
};
File.prototype.getSize = function() {
    return this.size;
};

module.exports = File;