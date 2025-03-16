const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('Hello from my custom JS action')
    const bucket = core.getInput('bucket', { required: true })
    const bucketRegion = core.getInput('bucket-region', { required: true })
    const distFolder = core.getInput('dist-folder', { required: true })

    // log input
    core.notice(`Bucket: ${bucket}`)
    core.notice(`Bucket Region: ${bucketRegion}`)
    core.notice(`Dist Folder: ${distFolder}`)

    exec.exec('ls', ['-la'])

    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl);
}

run()