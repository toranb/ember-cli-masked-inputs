import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
import lookup from '../helpers/lookup';

var App;

module('masked input acceptance tests', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("phone-number test value is bound to passed in value", function() {
    var valid_phone_number = '515-555-5555';
    var controller = lookup('controller:application');
    equal(controller.get('number'), '');
    visit('/');
    fillIn('input:eq(0)', valid_phone_number);
    triggerEvent('input:eq(0)', 'blur');
    andThen(function(){
        equal(controller.get('number'), valid_phone_number);
        equal(find('input:eq(0)').val(), valid_phone_number);
    });
});

test("credit-card-expiration test value is bound to passed in value", function() {
    var valid_expiration = '12/2016';
    var expiration_input = 'input:eq(1)';
    var controller = lookup('controller:application');
    equal(controller.get('expiration'), '');
    visit('/');
    fillIn(expiration_input, valid_expiration);
    triggerEvent(expiration_input, 'blur');
    andThen(function(){
        equal(controller.get('expiration'), valid_expiration);
        equal(find(expiration_input).val(), valid_expiration);
    });
});

test("phone-number test", function() {
    visit('/');
    fillIn('input:eq(0)', '515-555');
    triggerEvent('input:eq(0)', 'blur');
    andThen(function(){
        equal(find('input:eq(0)').val(), '');
    });
    fillIn('input:eq(0)', '515-555-5454');
    triggerEvent('input:eq(0)', 'blur');
    andThen(function(){
        equal(find('input:eq(0)').val(), '515-555-5454');
    });
    fillIn('input:eq(0)', '5');
    triggerEvent('input:eq(0)', 'blur');
    andThen(function(){
        equal(find('input:eq(0)').val(), '');
    });
    fillIn('input:eq(0)', '515-555-54546888888809');
    triggerEvent('input:eq(0)', 'blur');
    andThen(function(){
        equal(find('input:eq(0)').val(), '515-555-5454');
    });
    fillIn('input:eq(0)', '515-555-545a4');
    triggerEvent('input:eq(0)', 'blur');
    andThen(function(){
        equal(find('input:eq(0)').val(), '515-555-5454');
    });
    fillIn('input:eq(0)', '515555545abc14');
    triggerEvent('input:eq(0)', 'blur');
    andThen(function(){
        equal(find('input:eq(0)').val(), '515-555-5451');
    });
    fillIn('input:eq(0)', '5-*15-5^*(55545abc14');
    triggerEvent('input:eq(0)', 'blur');
    andThen(function(){
        equal(find('input:eq(0)').val(), '515-555-5451');
    });
});

test("credit-card-expiration test", function() {
    visit('/');
    fillIn('input:eq(1)', '12/198');
    triggerEvent('input:eq(1)', 'blur');
    andThen(function(){
        equal(find('input:eq(1)').val(), '');
    });
    fillIn('input:eq(1)', '12/1983');
    triggerEvent('input:eq(1)', 'blur');
    andThen(function(){
        equal(find('input:eq(1)').val(), '12/1983');
    });
    fillIn('input:eq(1)', '1');
    triggerEvent('input:eq(1)', 'blur');
    andThen(function(){
        equal(find('input:eq(1)').val(), '');
    });
    fillIn('input:eq(1)', '12/19834567');
    triggerEvent('input:eq(1)', 'blur');
    andThen(function(){
        equal(find('input:eq(1)').val(), '12/1983');
    });
    fillIn('input:eq(1)', '12/198a4');
    triggerEvent('input:eq(1)', 'blur');
    andThen(function(){
        equal(find('input:eq(1)').val(), '12/1984');
    });
    fillIn('input:eq(1)', '121984');
    triggerEvent('input:eq(1)', 'blur');
    andThen(function(){
        equal(find('input:eq(1)').val(), '12/1984');
    });
    fillIn('input:eq(1)', '12/^*(1985');
    triggerEvent('input:eq(1)', 'blur');
    andThen(function(){
        equal(find('input:eq(1)').val(), '12/1985');
    });
});

test("allows you to pass in a custom css class attribute", function() {
    visit('/');
    andThen(function(){
        equal(find('input:eq(0)').hasClass('foobar'), true);
        equal(find('input:eq(0)').hasClass('wat'), true);
        equal(find('input:eq(1)').hasClass('bazz'), true);
    });
});
