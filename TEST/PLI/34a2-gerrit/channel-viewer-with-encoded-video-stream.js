/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* global phenix */
// Alternate ways to load the sdk directly:
// import phenix from '@phenixrts/sdk';
// import phenix from '../../dist/channels/min/channels';
// import phenix from '../../src/sdk/channels';

const version = '34a2';
console.log(`NIKNIK: gerrit - build ${version} - PS34 firefox - interval - mk1`);

// ------------------------------------------------------------
const status = document.getElementById('PliStatus');
let triggerPli = false;

status.innerHTML = `${version} status: GOOD`;
setInterval(() => {
  triggerPli = !triggerPli;

  if (triggerPli) {
    status.innerHTML = `${version} status: PLIs for each frame`;
  } else {
    status.innerHTML = `${version} status: GOOD`;
  }
}, 15000);

// ------------------------------------------------------------
function processVideo(track, frame) {
  if (triggerPli) {
    return false;
  }

  return true;
}

// ------------------------------------------------------------
function processAudio(track, frame) {
  return true;
}

// ------------------------------------------------------------
// The token capabilities must include 'encoded-insertable-streams' to
// use "Encoded Transform" API
const videoElement = document.getElementsByTagName('video')[0];
const createChannelOptions = {
  videoElement,
  token: new URLSearchParams(location.search).get('token') || '',
  encodedVideoStreamSink: processVideo,
  encodedAudioStreamSink: processAudio
};

phenix.Channels.createChannel(createChannelOptions);
