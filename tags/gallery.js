riot.tag('gallery', '<div class="pure-g gallery" ><div class="pure-u-1-3"><div class="frame"><div class="me"><span><a href="#about">{ me.name }</a></span></div></div><myframe each="{ projects.slice(0, n/3) }"></myframe></div><div class="pure-u-1-3"><myframe each="{ projects.slice(n/3, (2*n)/3) }"></myframe></div><div class="pure-u-1-3"><myframe each="{ projects.slice((2*n)/3, n) }"></myframe><div class="frame"><div class="you"><span><a href="{ you.github }" >&copy;{ you.name }</a></span></div></div></div></div>', function(opts) {var self;

self = this;

this.me = opts.me;

this.you = opts.you;

this.projects = opts.projects;

this.n = projects.length;

});
