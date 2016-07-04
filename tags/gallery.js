riot.tag('gallery', '<div class="pure-g gallery" ><div class="pure-u-1-3"><div class="frame"><div class="me"><span><a href="#about">{ me.name }</a></span></div></div><myframe project="{ projects[0] }"></myframe><myframe project="{ projects[1] }"></myframe></div><div class="pure-u-1-3"><myframe project="{ projects[2] }"></myframe><myframe project="{ projects[3] }"></myframe><myframe project="{ projects[4] }"></myframe></div><div class="pure-u-1-3"><myframe project="{ projects[5] }"></myframe><myframe project="{ projects[6] }"></myframe><myframe project="{ projects[7] }"></myframe><div class="frame"><div class="you"><span><a href="{ you.github }" >&copy;{ you.name }</a></span></div></div></div></div>', function(opts) {var self;

self = this;

this.me = opts.me;

this.you = opts.you;

this.projects = opts.projects;

});
