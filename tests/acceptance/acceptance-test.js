import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('masked input acceptance tests', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
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
