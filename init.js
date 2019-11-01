config = {
    workDir: function (self) { return '/home/ubuntu/environment'; },
    repoURL: function (self) { return 'git@github.com:sergiobuj/c9-fiesta.git'; },
    start: function () {
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
}

config.start();