/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* global phenix */
// Alternate ways to load the sdk directly:
// import phenix from '@phenixrts/sdk';
// import phenix from '../../dist/channels/min/channels';
// import phenix from '../../src/sdk/channels';

console.log('NIKNIK: android H264 - build 15a2 - 2x2 valid, 0x00 ac:2x2 1KF drop, interval - mk4');

// ------------------------------------------------------------
const status = document.getElementById('PliStatus');
let triggerPli = false;

setInterval(() => {
  triggerPli = !triggerPli;

  if (triggerPli) {
    status.innerHTML = 'status: PLIs for each frame';
  } else {
    status.innerHTML = 'status: GOOD';
  }
}, 15000);

// ------------------------------------------------------------
function processVideo(track, frame) {
  if (triggerPli) {
//    triggerPli = false;
//    status.innerHTML = 'status: GOOD';

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
