riot.tag('myframe', '<div class="frame"><div class="frame-image noselect"><img riot-src="images/{ project.name }/thumb.jpeg" width="100%"></img></div><div class="frame-text"><p><a href="#project/{ project.name }">{ project.abstract}</a></p></div></div>', function(opts) {var self;

self = this;

this.project = opts.project;

});
