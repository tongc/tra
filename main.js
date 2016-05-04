var Parallel = require('paralleljs');
var http = require("http");
var connect = require('connect');
var async = require('async');
var serveStatic = require('serve-static');
var finalhandler = require('finalhandler');
var xml2js = require('xml2js');
var fs = require('fs');
var loki = require('lokijs');
var db = new loki('loki.json');
var app = connect();
var serve = serveStatic('.', {
    'index': false
});
var component1unit = ["component1unit", 
"component1target/sucomponent44ire-reports/",
'component2target/sucomponent44ire-reports/',
'component3target/sucomponent44ire-reports/',
'component4target/sucomponent44ire-reports/',
'component5sucomponent44ire-reports/',
'component6target/sucomponent44ire-reports/',
'component7target/sucomponent44ire-reports/',
];
var component1int = ["component1int",
"component1target/failsafe-reports/",
'component2target/failsafe-reports/',
'component3target/failsafe-reports/',
'component5failsafe-reports/',
'component6target/failsafe-reports/',
'component4target/failsafe-reports/',
'component7target/failsafe-reports/'
];
var component2accept = ["component1accept", 
"component2target/"
];
var component3unit = ["component2unit",
"component3target/sucomponent44ire-reports/",
"component3target/sucomponent44ire-reports/"
];
var component3int = ["component2int",
"component4target/failsafe-reports/",
"component4target/failsafe-reports/"
];
var component3accept = ['component2accept',
"component5target/"
];
var component4unit = ["componentPath", 
"componentPath",
"componentPath"
];
var component4int = ["componentPath", 
"componentPath",
"componentPath"
];
var component5unit = ["componentPath", 
"componentPath",
"componentPath"
];
var component6unit = ["componentPath", 
"componentPath"
];
var component7unit = ["componentPath",
"componentPath",
"componentPath"
];
var component7ui = ["componentPath",
"componentPath"
];
var component7int = ["componentPath",
"componentPath"
];
var component7int = ["componentPath", 
"componentPath"
];
var component7accept = ["componentPath",
"componentPath"
];
var e2ePath = ["componentPath",
"componentPath"
];
var component11, component22, component33, component44, component55, component66;

function component44reshCollection() {
    if(component11) {
        component11.removeDataOnly();
    } else {
        component11 = db.addCollection('component11');
    }

    if(component22) {
        component22.removeDataOnly();
    } else {
        component22 = db.addCollection('component22');
    }

    if(component33) {
        component33.removeDataOnly();
    } else {
        component33 = db.addCollection('component33');
    }

    if(component44) {
        component44.removeDataOnly();
    } else {
        component44 = db.addCollection('component44');
    }

    if(component55) {
        component55.removeDataOnly();
    } else {
        component55 = db.addCollection('component55');
    }
    
    if(component66) {
        component66.removeDataOnly();
    } else {
        component66 = db.addCollection('component66');
    }    
}
component44reshCollection();
var parser = new xml2js.Parser();
var datadatasetset = {
    'unit': [],
    'integration': undefined,
    'acceptance': undefined,
    'ui': undefined
};
var resultCount = {
    'component11': {},
    'component33': {},
    'component44': {},
    'component22': {},
    'component55': {},
    'component66': {}
};

function updateResultCount() {
    resultCount.component11.unit = component11.find({
        'type': 'unit'
    }).length;
    resultCount.component11.integration = component11.find({
        'type': 'integration'
    }).length;
    resultCount.component11.ui = component11.find({
        'type': 'ui'
    }).length;
    resultCount.component22.unit = component22.find({
        'type': 'unit'
    }).length;
    resultCount.component33.unit = component33.find({
        'type': 'unit'
    }).length;
    resultCount.component33.integration = component33.find({
        'type': 'integration'
    }).length;    
    resultCount.component44.unit = component44.find({
        'type': 'unit'
    }).length;
    resultCount.tpmAcceptance = component11.find({
        'type': 'acceptance'
    }).length;
    resultCount.component55.unit = component55.find({
        'type': 'unit'
    }).length;
    resultCount.component55.integration = component55.find({
        'type': 'integration'
    }).length;
    resultCount.component55.acceptance = component55.find({
        'type': 'acceptance'
    }).length;
    resultCount.component66.unit = component66.find({
        'type': 'unit'
    }).length;
    resultCount.component66.integration = component66.find({
        'type': 'integration'
    }).length;
    resultCount.component66.acceptance = component66.find({
        'type': 'acceptance'
    }).length;
    resultCount.e2e = component11.find({
        'type': 'e2e'
    }).length;
}

function component33itorFiles(dir, collection, type, processor, event) {
    fs.watch(dir, function(event, filename) {
        //console.log('event is: ' + event);
        if (event === event && filename) {
            // processor(dir, collection, type);
            //console.log('filename provided: ' + filename);
        }
    });
}

function component44reshTestCounts(callback) {
    console.log("component44reshing test data...");
    component44reshCollection();
    async.parallel([
        function(callback) {
            processJunitTests(component1unit, component55, 'unit', callback);
        },
        function(callback) {
            processJunitTests(component3unit, component66, 'unit', callback);
        },
        function(callback) {
            processJunitTests(component1int, component55, 'integration', callback);
        },
        function(callback) {
            processJunitTests(component3int, component66, 'integration', callback);
        },
        function(callback) {
            processCucumberTests(component2accept, component55, 'acceptance', callback);
        },
        function(callback) {
            processCucumberTests(component3accept, component66, 'acceptance', callback);
        },
        function(callback) {
            processJunitTests(component5unit, component22, 'unit', callback);
        },
        function(callback) {
            processJunitTests(component4unit, component33, 'unit', callback);
        },
        function(callback) {
            processJunitTests(component4int, component33, 'integration', callback);
        },
        function(callback) {
            processJunitTests(component7unit, component44, 'unit', callback);
        },
        function(callback) {
            processJunitTests(component7ui, component11, 'ui', callback);
        },
        function(callback) {
            processJunitTests(component6unit, component11, 'unit', callback);
        },
        function(callback) {
            processJunitTests(component7int, component11, 'integration', callback);
        },
        function(callback) {
            processCucumberTests(component7int, component11, 'integration', callback);
        },
        function(callback) {
            processCucumberTests(component7accept, component11, 'acceptance', callback);
        },
        function(callback) {
            processCucumberTests(e2ePath, component11, 'e2e', callback);
        }
    ], function(err, results) {
        updateResultCount();
        if (callback) {
            callback(true);
        }
    });
}
setInterval(function() {
    component44reshTestCounts();
}, 10 * 60 * 1000);

function processJunitTests(dir, collection, type, callback) {
    var testFiles = [];
    if(Array.isArray(dir)) {
        for(var i=0;i<dir.length;i++) {
            if(fs.existsSync(dir[i]) && fs.lstatSync(dir[i]).isDirectory()) {
                var files = fs.readdirSync(dir[i]);
                for(var j=0;j<files.length;j++) {
                    testFiles.push(dir[i] + files[j]);
                }
            }
        }
    } else {
        if(fs.existsSync(dir) && fs.lstatSync(dir).isDirectory()) {
            var files = fs.readdirSync(dir);
            for(var j=0;j<files.length;j++) {
                testFiles.push(dir + files[j]);s
            }            
        }
    }
    var files = [];
    for (var i = 0; i < testFiles.length; i++) {
        if (String(testFiles[i]).indexOf('.xml') > -1 && fs.lstatSync(testFiles[i]).isFile()) {
            files.push(fs.readFileSync(testFiles[i]));
        }
    }
    async.map(files, parser.parseString, function(err, results) {
        console.info("processing " + collection.name + " " + results.length + " " + type + " tests");
        for (var i = 0; i < results.length; i++) {
            if(results[i]['testsuite'] === undefined) {
                continue;
            }
            var testcases = results[i]['testsuite'].testcase;
            if(testcases!=undefined) {
                for (var j = 0; j < testcases.length; j++) {
                    collection.insert({
                        type: type,
                        test: results[i]['testsuite']['$']['name'] + " --- " + testcases[j]['$']['name']
                    });
                }
            }
        }
        if (callback) {
            callback(null, type);
        }
    });
}

function processCucumberTests(dir, collection, type, callback) {
    var testFiles = [];
    if(Array.isArray(dir)) {
        for(var i=0;i<dir.length;i++) {
            if(fs.existsSync(dir[i]) && fs.lstatSync(dir[i]).isDirectory()) {
                var files = fs.readdirSync(dir[i]);
                for(var j=0;j<files.length;j++) {
                    testFiles.push(dir[i] + files[j]);
                }                
            }
        }
    } else {
        if(fs.existsSync(dir) && fs.lstatSync(dir).isDirectory()) {
            var files = fs.readdirSync(dir);
            for(var j=0;j<files.length;j++) {
                testFiles.push(dir + files[j]);
            }               
        }
    }    
    var files = [];
    for (var i = 0; i < testFiles.length; i++) {
        if (String(testFiles[i]).indexOf('.json') > -1 && fs.lstatSync(testFiles[i]).isFile()) {
            files.push(fs.readFileSync(testFiles[i]));
        }
    }
    console.info("processing " + collection.name + " " + files.length + " " + type + " tests");
    for (var m = 0; m < files.length; m++) {
        if(files[m] && files[m].length > 0) {  
            var data = JSON.parse(files[m]);
            for (var i = 0; i < data.length; i++) {
                var feature = data[i];
                if(feature['elements'] === undefined) {
                    continue;
                }
                for (var j = 0; j < feature['elements'].length; j++) {
                    collection.insert({
                        type: type,
                        test: feature.name + " --- " + feature['elements'][j].name
                    });
                }
            }
        }
    }
    if (callback) {
        callback(null, type);
    }
}
async.parallel([
    function(callback) {
        processJunitTests(component1unit, component55, 'unit', callback);
    },
    function(callback) {
        processJunitTests(component3unit, component66, 'unit', callback);
    },
    function(callback) {
        processJunitTests(component1int, component55, 'integration', callback);
    },
    function(callback) {
        processJunitTests(component3int, component66, 'integration', callback);
    },
    function(callback) {
        processCucumberTests(component2accept, component55, 'acceptance', callback);
    },
    function(callback) {
        processCucumberTests(component3accept, component66, 'acceptance', callback);
    },
    function(callback) {
        processJunitTests(component5unit, component22, 'unit', callback);
    },
    function(callback) {
        processJunitTests(component4unit, component33, 'unit', callback);
    },
    function(callback) {
        processJunitTests(component4int, component33, 'integration', callback);
    },    
    function(callback) {
        processJunitTests(component7unit, component44, 'unit', callback);
    },
    function(callback) {
        processJunitTests(component7ui, component11, 'ui', callback);
    },
    function(callback) {
        processJunitTests(component6unit, component11, 'unit', callback);
    },
    function(callback) {
        processJunitTests(component7int, component11, 'integration', callback);
    },
    function(callback) {
        processCucumberTests(component7int, component11, 'integration', callback);
    },
    function(callback) {
        processCucumberTests(component7accept, component11, 'acceptance', callback);
    },
    function(callback) {
        processCucumberTests(e2ePath, component11, 'e2e', callback);
    }
], function(err, results) {
    updateResultCount();
    http.createServer(function(req, res) {
        if (req.url.indexOf("idlResultCount") > -1) {
            res.end(JSON.stringify(resultCount));
        } else if (req.url.indexOf("idlcomponent44resh") > -1) {
            component44reshTestCounts(function(result) {
                res.end(String(result));
            });
        } else if (req.url.indexOf("idlSearchFilter") > -1) {
            req.on('data', function(chunk) {
                console.log("Received body data:");
                var searchVal = chunk.toString();
                console.info("searching for " + searchVal);
                var testResult = {
                    'component11': {},
                    'component22': {},
                    'component33': {},
                    'component44': {},
                    'component55': {},
                    'component66': {}
                };
                testResult.component11.unit = component11.find({
                    '$and': [{
                        'type': 'unit'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component22.unit = component22.find({
                    '$and': [{
                        'type': 'unit'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component33.unit = component33.find({
                    '$and': [{
                        'type': 'unit'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component44.unit = component44.find({
                    '$and': [{
                        'type': 'unit'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component11.integration = component11.find({
                    '$and': [{
                        'type': 'integration'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component11.ui = component11.find({
                    '$and': [{
                        'type': 'ui'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component55.unit = component55.find({
                    '$and': [{
                        'type': 'unit'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component66.unit = component66.find({
                    '$and': [{
                        'type': 'unit'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component55.integration = component55.find({
                    '$and': [{
                        'type': 'integration'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component66.integration = component66.find({
                    '$and': [{
                        'type': 'integration'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component55.acceptance = component55.find({
                    '$and': [{
                        'type': 'acceptance'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.component66.acceptance = component66.find({
                    '$and': [{
                        'type': 'acceptance'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.tpmAcceptance = component11.find({
                    '$and': [{
                        'type': 'acceptance'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                testResult.e2e = component11.find({
                    '$and': [{
                        'type': 'e2e'
                    }, {
                        'test': {
                            '$regex': new RegExp(searchVal, "i")
                        }
                    }]
                });
                res.end(JSON.stringify(testResult));
            });
        } else {
            var done = finalhandler(req, res);
            serve(req, res, done);
        }
    }).listen(12345);
});