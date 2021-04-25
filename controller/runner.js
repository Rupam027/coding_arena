const fetch = require('node-fetch');

const encode = require('x-www-form-urlencode').encode;

const LANG = {
        C : 'C',
        CPP : 'Cpp',
        CPP14 : 'Cpp14',
        JAVA : 'Java',
        PYTHON : 'Python',
        PYTHON3 : 'Python3',
        SCALA : 'Scala',
        PHP : 'Php',
        PERL : 'Perl',
        CSHARP : 'Csharp'
}

const run = function(sourceCode, callback) {
        const runData = "lang=" + encode(sourceCode.lang)
                + "&code=" + encode(sourceCode.code)
                + "&input=" + encode(sourceCode.input)
                + "&save=" + encode(sourceCode.save);

        fetch(
                "https://ide.geeksforgeeks.org/main.php",
                {
                        method: "POST",
                        headers: {
                              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                              'Accept': 'application/*'
                        },
                        body: runData
                }
        )
        .then( response => response.json() )
        .then( runStatus => {
				console.log(runStatus);
                if (runStatus.status === 'SUCCESS')
                        getOutput(runStatus.sid, callback);
                else    throw 'Language Not Supported.';
        } )
        .catch( err => callback(err, null) );

}

function getOutput(outputId, callback) {
        const params = "sid=" + encode(outputId)
                + "&requestType=fetchResults"
        fetch(
                "https://ide.geeksforgeeks.org/submissionResult.php",
                {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                              'Accept': 'application/*'
                        },
                        body: params
                }
                
        )
        .then( response => response.json() )
        .then( outputData => {
			 console.log(outputData);
			
		callback(null, outputData); 
		}).catch( err => callback(err, null) )
}

module.exports = {
        run,
        LANG
}
