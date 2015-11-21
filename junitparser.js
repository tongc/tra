var xml2js = require('xml2js');
var fs = require('fs');

var parser = new xml2js.Parser();

module.exports = {
    run: function() {
        fs.readFile(__dirname + '/foo.xml', function(err, data) {
            return parser.parseString(data, function(err, result) {
                console.dir(result);
                console.log('Done');
                return result;
            });
        });
    }
};

