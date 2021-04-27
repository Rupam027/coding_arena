const runner = require('./runner');

runner.run({
        lang : runner.LANG.PYTHON3,
        code : `
print()
hi = """
 _   _      _ _         __        __         _     _
| | | | ___| | | ___    \\ \\      / /__  _ __| | __| |
| |_| |/ _ \\ | |/ _ \\    \\ \\ /\\ / / _ \\| '__| |/ _\` |
|  _  |  __/ | | (_) |    \\ V  V / (_) | |  | | (_| |
|_| |_|\\___|_|_|\\___( )    \\_/\\_/ \\___/|_|  |_|\\__,_|
                    |/
"""
print(hi)
print()
a, b = [ int(x) for x in input().split() ]
print('Your SUM =', a + b)
print()
`,
        input : "1 2",
        save : false
        }, function(err, data) {
                if (err) console.log(err);
                else console.log(data.output);
        })
