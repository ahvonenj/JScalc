var testrunner = require("qunit");

testrunner.setup(
{
    log: 
	{

        // log assertions overview
        assertions: true,

        // log expected and actual values for failed tests
        errors: true,

        // log tests overview
        tests: true,

        // log summary
        summary: true,

        // log global summary (all files)
        globalSummary: true,

        // log coverage
        coverage: true,

        // log global coverage (all files)
        globalCoverage: true,

        // log currently testing code file
        testing: true
    },

    // run test coverage tool
    coverage: false,

    // define namespace your code will be attached to on global['your namespace']
    namespace: null,

    // max amount of ms child can be blocked, after that we assume running an infinite loop
    maxBlockDuration: 2000
});

// "/var/lib/jenkins/jobs/JonahJob/workspace/js/res/jquery-2.1.3.js"

testrunner.run(
{
	code: "/var/lib/jenkins/jobs/JonahJob/workspace/js/calculator.js",
    tests: "/var/lib/jenkins/jobs/JonahJob/workspace/tests/tests_jonah.js"
}, function(err, report) 
{
	console.err(report);
    console.dir(report);
});

