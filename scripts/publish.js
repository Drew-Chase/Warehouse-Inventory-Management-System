import {buildBackend, buildFrontend, cleanup, deploy, incrementVersion} from "./app.js";

publish();

async function publish() {
    console.log(`Publishing for ${process.platform}...`);
    cleanup();
    // incrementVersion();
    buildFrontend();
    buildBackend();
    await deploy();
    cleanup();
}