
/*
 * GET Home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'HoffIT' });
};


/*
 * GET About page.
 */

exports.search = function(req, res){
  res.render('search', { title: 'HoffIT' });
};

/*
 * GET Contact page.
 */

exports.contact = function(req, res){
  res.render('contact', { title: 'HoffIT' });
};