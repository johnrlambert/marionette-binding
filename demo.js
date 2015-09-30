'use strict';

window._ = require('underscore');
var MarionetteBinding = require('./marionette.binding');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var DemoView = MarionetteBinding.BindedView.extend({
  template: function(){
    return `<p>Test of Marionette.Binding</p>
      <input type="text" id="text" />
      <p>Hi <span id="repeat"></span></p>
      <input type="text" id="text_2" />
      <p>It sounds nice in <span id="repeat_2"></span> (html allowed on this one!)</p>
      Tick: <input type="text" id="text_pick" />
      <p><input type="radio" name="pick_me2" class="pick2" value="ok" /> pick me</p>
      <p><input type="radio" name="pick_me2" class="pick2" value="no" /> no, pick me</p>
      <p><input type="radio" name="pick_me" class="pick" value="ok" /> pick me</p>
      <p><input type="radio" name="pick_me" class="pick" value="no" /> no, pick me</p>`;
  },
  ui: {
    "text": "#text",
    "repeat": "#repeat",
    "text_2": "#text_2",
    "repeat_2": "#repeat_2",
    "pick": ".pick",
    "pick2": ".pick2",
    "text_pick": "#text_pick"
  },
  bindings: {
    "value @ui.text": "name",
    "text @ui.repeat": "name",
    "value @ui.text_2": "place",
    "html @ui.repeat_2": "place",
    "checked @ui.pick": "pick",
    "checked @ui.pick2": "pick",
    "value @ui.text_pick": "pick"
  }
});

var regions = new Marionette.RegionManager({
  regions: {
    body: "#content"
  }
});

var view = new DemoView({
  model: new Backbone.Model({name: "John", place: "The Well", pick: "ok"})
});
regions.get("body").show(view);
module.exports = view;
