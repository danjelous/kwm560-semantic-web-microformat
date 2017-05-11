'use strict';

const microformat = require('microformat-node');
const prettyjson = require('prettyjson');
let options = {};

options.html = `
<cite class="vcard">
 <a class="fn url" href="http://meyerweb.com/">Eric Meyer</a>
</cite> wrote a post 
(<cite>
  <a href="http://meyerweb.com/eric/thoughts/2005/12/16/tax-relief/">
   Tax Relief
  </a>
 </cite>) 
about an unintentionally humorous letter he received from the
<span class="vcard">
 <a class="fn org url" href="http://irs.gov/">Internal Revenue Service</a>
</span>`;

microformat.get(options, (err, data) => {

    if(err) return next(err);

    console.log(prettyjson.render(data));

});
