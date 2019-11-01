// The user initialization script allows you to run a custom JavaScript
// script as AWS Cloud9 loads.

// Warning: Adding code to this initialization script is currently an
// experimental feature and is not fully supported. If you add
// code to this script, you do so at your own risk. We reserve the
// right to change this functionality at any time.
// Note that using this initialization script to load third-party plugins by
// using the internal loadPackage API is currently not officially
// supported. If you attempt to load third-party plugins into the AWS Cloud9
// IDE, you do so at your own risk. Third-party plugins can have full access
// to all of your AWS Cloud9 environments, including their source code, AWS
// credentials if present, and various other settings and files. We cannot
// provide support for using third-party plugins, and we reserve the right to
// disable this functionality at any time.

/*global services*/
({
    workDir: function (self) { return '/home/ubuntu/environment'; },
    repoURL: function (self) { return 'git@github.com:sergiobuj/c9-fiesta.git'; },
    start: function (self) {
        services.proc.execFile('git',
            {
                args: ['clone', self.repoURL(), self.workDir()],
                cwd: '/'
            },
            self.runBootstrap(self));
    },
    runBootstrap: function (self) {
        services.proc.execFile('bash',
            {
                args: ['./bootstrap.sh'], cwd: self.workDir()
            });
    },
}).start();
