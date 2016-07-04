riot.tag('project', '<div class="pure-g"><div class="pure-u-3-4 project-image noselect"><figure><img riot-src="images/{ opts.bind.name }/{ current }.jpeg" ></img><figcaption></figcaption></figure></div><div class="pure-u-1-4 project-descr"><h1 class="project-header">{ opts.bind.title }</h1><div class="project-text"><raw content="{ opts.bind.description }" ></raw></div></div><div class="pure-u-3-4 nav1 noselect"><span><a onclick="{ prev }" >&lt;</a></span>&nbsp;&nbsp; <span><a onclick="{ next }" >&gt;</a></span></div><div class="pure-u-1-4 nav2 noselect"><span><a href="#gallery">^</a></span></div></div>', function(opts) {var self;

self = this;

self.current = 0;

this.prev = function() {
  return self.current = (self.current - 1 + opts.bind.images) % opts.bind.images || 0;
};

this.next = function() {
  return self.current = (self.current + 1) % opts.bind.images || 0;
};

Mousetrap.bind('up', function() {
  return riot.route('#');
});

Mousetrap.bind('left', function() {
  self.prev();
  return riot.update();
});

Mousetrap.bind('right', function() {
  self.next();
  return riot.update();
});

});
