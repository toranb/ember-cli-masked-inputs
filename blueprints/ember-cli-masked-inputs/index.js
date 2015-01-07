module.exports = {
    normalizeEntityName: function() {},
    afterInstall: function(options) {
        return this.addBowerPackageToProject('jquery-mask-library', '0.0.1');
    }
};
