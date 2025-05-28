const core = require('@actions/core');
const github = require('@actions/github');

// Run `composer update` command with dry run and capture the output
const exec = require('@actions/exec');
let output = '';
const options = {};
options.listeners = {
  stdout: (data) => {
    output += data.toString();
  }
};
await exec.exec('composer', ['update', '--dry-run'], options);
core.info(output);
