const core = require('@actions/core');
// const github = require('@actions/github' );
const exec = require('@actions/exec');

function run() {
  // 1) Get the inputs from the workflow file:
  const bucket = core.getInput('bucket', {required: true});
  const bucketRegion = core.getInput('bucket-region', {required: true}); // Even if the default is set in the action.yml file, it is still required in the workflow file. We are always receving
  const distFolder = core.getInput('dist-folder', {required: true}); // Even if the default is set in the action.yml file, it is still required in the workflow file. We are always receving

  // github.getOctokit();
  // github.context.
  // 2) Upload files
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region`);

  core.notice('Hello from my custon JavaScript Action');

  // 3) Outputs
  core.setOutput('bucket', bucket);
}


run();