/*global services, plugin*/

function bootstrap() {
    var name = "c9-fiesta";
    var repoURL = "git@github.com:sergiobuj/c9-fiesta.git";
    services.fs.exists("~/" + name, function (exists) {
        if (exists == false) {
            services.console.show();
            services.console.open({
                editorType: "terminal",
                active: true
            }, function (e, tab) {
                tab.editor.write([
                    "ssh-keyscan github.com >> ~/.ssh/known_hosts",
                    "echo -e $(aws ssm get-parameter --name /bootstrap/id_rsa --with-decryption --query 'Parameter.Value' | tr -d \\\" ) > ~/.ssh/id_rsa",
                    "chmod 400 ~/.ssh/id_rsa",
                    "echo -e $(aws ssm get-parameter --name /bootstrap/id_rsa.pub --with-decryption --query 'Parameter.Value' | tr -d \\\" ) > ~/.ssh/id_rsa.pub",
                    "cd ~",
                    "git clone " + repoURL,
                    "cd " + name,
                    "bash ./bootstrap.sh",
                ].join(" &&\\\n") + "\n");
            });
        }
    });
}

setTimeout(bootstrap, 1000);
