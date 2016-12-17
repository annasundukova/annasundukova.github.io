riot.tag('main', '<div if="{ show == \'welcome\' }" ><welcome ></welcome></div><div if="{ show == \'gallery\' }" ><gallery projects="{ projects }"></gallery></div><div if="{ show == \'project\' }" ><project bind="{ current }"></project></div><div if="{ show == \'about\' }" ><about ></about></div>', function(opts) {var f, self;

self = this;

this.show = 'gallery';

this.projects = projects;

this.current = projects[0];

this.project = function(name) {
  return _.first(_.filter(self.projects, function(i) {
    return i.name === name;
  }));
};

this.to = function(to, name) {
  switch (to) {
    case '':
      self.show = 'welcome';
      break;
    case 'gallery':
      self.show = 'gallery';
      break;
    case 'about':
      self.show = 'about';
      break;
    case 'project':
      self.show = 'project';
      self.current = self.project(name);
  }
  return riot.update();
};

f = function(to, name) {
  return self.to(to, name);
};

riot.route(f);

riot.route.start(true);

});
