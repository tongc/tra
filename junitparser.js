var xml2js = require('xml2js');
var fs = require('fs');
var loki = require('lokijs');
var db = new loki('loki.json');

console.info(db);
var children = db.addCollection('children');
children.insert({name:'abccdddd', legs: 8});
var parser = new xml2js.Parser();

module.exports = {
    run: function() {
        var jsresult;
        fs.readFile(__dirname + '/foo.xml', function(err, data) {
            parser.parseString(data, function(err, result) {
                console.dir(result);
                console.log('Done');

                console.info(children.get(1));
                

            });
        });
    }
};