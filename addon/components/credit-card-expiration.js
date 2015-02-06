import Ember from 'ember';

export default Ember.TextField.extend({
    type: 'tel',
    validate: function(strCheck, e) {
        var unicode = e.charCode ? e.charCode : e.keyCode;
        if (strCheck.indexOf(unicode) === -1) {
            e.preventDefault();
        }
    },
    didInsertElement: function() {
        var self = this;
        this.$().mask('99/9999');
        this.$().keypress(function (event) { self.validate('13,48,49,50,51,52,53,54,55,56,57,47', event); });
    }
});
