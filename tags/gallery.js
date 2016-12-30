riot.tag('gallery', '<div class="pure-g"><div class="pure-u-1 gallery noselect" ><div class="small pure-u-1 pure-u-sm-1"><me ></me><myframe each="{ projects }"></myframe><you ></you></div><div class="medium"><div class="pure-u-md-1-2"><me ></me><myframe each="{ projects.slice(0, n/2) }"></myframe></div><div class="pure-u-md-1-2"><myframe each="{ projects.slice(n/2, n) }"></myframe><you ></you></div></div><div class="large"><div class="pure-u-lg-1-3 pure-u-xl-1-3"><me ></me><myframe each="{ projects.slice(0, n/3) }"></myframe></div><div class="pure-u-lg-1-3 pure-u-xl-1-3"><myframe each="{ projects.slice(n/3, (2*n)/3) }"></myframe></div><div class="pure-u-lg-1-3 pure-u-xl-1-3"><myframe each="{ projects.slice((2*n)/3, n) }"></myframe><you ></you></div></div></div><div class="pure-u-1 social-media-wrapper"><social-media></social-media></div></div>', function(opts) {this.projects = opts.projects;

this.n = projects.length;

});
