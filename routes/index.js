
/*
 * GET Home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hoff IT' });
};


/*
 * GET About page.
 */

exports.search = function(req, res){
  res.render('search', { title: 'Hoff IT' });
};

/*
 * GET Contact page.
 */

exports.contact = function(req, res){
  res.render('contact', { title: 'Hoff IT' });
};