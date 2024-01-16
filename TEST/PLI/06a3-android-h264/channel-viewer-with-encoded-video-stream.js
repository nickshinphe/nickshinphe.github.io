/**
 * Copyright 2023 Phenix Real Time Solutions, Inc. Confidential and Proprietary. All Rights Reserved.
 */
/* global phenix */
// Alternate ways to load the sdk directly:
// import phenix from '@phenixrts/sdk';
// import phenix from '../../dist/channels/min/channels';
// import phenix from '../../src/sdk/channels';

console.log('NIKNIK: android H264 - build 6a3 - original valid, trunc invalid, intervals');

// ------------------------------------------------------------
const button = document.getElementById('triggerPli');
const status = document.getElementById('PliStatus');
let triggerPli = false;

button.addEventListener('click', () => {
  triggerPli = true;
});

setInterval(() => {
  triggerPli = !triggerPli;

  if (triggerPli) {
    status.innerHTML = 'status: PLIs for each frame';
  } else {
    status.innerHTML = 'status: GOOD';
  }
}, 15000);

// ------------------------------------------------------------
const timeStart = Date.now();
const frameStatistics = {
  key: {
    count: 0,
    totalBytes: 0,
    largestBytes: 0,
    smallestBytes: Infinity
  },
  delta: {
    count: 0,
    totalBytes: 0,
    largestBytes: 0,
    smallestBytes: Infinity
  },
  audio: {
    count: 0,
    totalBytes: 0,
    largestBytes: 0,
    smallestBytes: Infinity
  }
};
// Y
// Y function buf2hex(buffer) {
// Y   return [...new Uint8Array(buffer)]
// Y     .map(x => x.toString(16).padStart(2, '0'))
// Y     .join(', 0x');
// Y }
// Y
let XXX_KEY;
let XXX_DELTA;

// ------------------------------------------------------------
function processVideo(track, frame) {
  if (triggerPli) {
    // X triggerPli = false;

    return false;
  }

  if (frame.data) {
    if (frame.type === 'key') {
      // Y const results = `0x${buf2hex(frame.data)}`;

      console.log('KEY last length: ', XXX_KEY ? XXX_KEY.byteLength : '0', ' cur length: ', frame.data.byteLength);

      if (!XXX_KEY || frame.data.byteLength < XXX_KEY.byteLength) {
        // Y console.log('KEY: ', results);
        XXX_KEY = new ArrayBuffer(frame.data.byteLength);
        new Uint8Array(XXX_KEY).set(new Uint8Array(frame.data));
      }

      // Y status.innerHTML = `<p>KEY: ${results} </p><p>DELTA: 0x${(XXX_DELTA ? buf2hex(XXX_DELTA) : '')}`;

      frameStatistics.key.count++;
      frameStatistics.key.totalBytes += frame.data.byteLength;

      if (frame.data.byteLength < frameStatistics.key.smallestBytes) {
        frameStatistics.key.smallestBytes = frame.data.byteLength;
      }

      if (frame.data.byteLength > frameStatistics.key.largestBytes) {
        frameStatistics.key.largestBytes = frame.data.byteLength;
      }

      const timeNow = new Date();
      const totalSeconds = (timeNow.getTime() - timeStart) / 1000;
      const keyFramesPerSecond = (frameStatistics.key.count / totalSeconds).toFixed(2);
      const framesPerSecond = ((frameStatistics.key.count + frameStatistics.delta.count) / totalSeconds).toFixed(2);
      const averageKeyFrameSize = Math.trunc(frameStatistics.key.totalBytes / frameStatistics.key.count);
      const averageDeltaFrameSize = Math.trunc(frameStatistics.delta.totalBytes / frameStatistics.delta.count);
      const averageAudioDataSize = Math.trunc(frameStatistics.audio.totalBytes / frameStatistics.audio.count);
      const smallestVideoBytes = Math.min(frameStatistics.key.smallestBytes, frameStatistics.delta.smallestBytes);
      const largestVideoBytes = Math.max(frameStatistics.key.largestBytes, frameStatistics.delta.largestBytes);

      console.log('[%s] KF: [%s] KF/s [%s] FPS ([%s] Bytes Average I-frame Size, [%s] Bytes Average P-frame Size, [%s] Bytes Minimum Video Frame Size, [%s] Bytes Maximum Video Frame Size, [%s] Bytes Average Audio Data Size)', timeNow.toISOString(), keyFramesPerSecond, framesPerSecond, averageKeyFrameSize, averageDeltaFrameSize, smallestVideoBytes, largestVideoBytes, averageAudioDataSize);

      let XXX_TS = timeNow.toISOString();

      status.innerHTML = `<p>[${XXX_TS}] KF: [${keyFramesPerSecond}] KF/s [${framesPerSecond}] FPS ([${averageKeyFrameSize}] Bytes Average I-frame Size, [${averageDeltaFrameSize}] Bytes Average P-frame Size, [${smallestVideoBytes}] Bytes Minimum Video Frame Size, [${largestVideoBytes}] Bytes Maximum Video Frame Size, [${averageAudioDataSize}] Bytes Average Audio Data Size)`;
    } else if (frame.type === 'delta') {
      console.log('DELTA last length: ', XXX_DELTA ? XXX_DELTA.byteLength : '0', ' cur length: ', frame.data.byteLength);

      // X if (XXX_DELTA_LAST) {
      // X > const max = XXX_DELTA_LAST.size < frame.data.size ? XXX_DELTA_LAST.size : frame.data.size;
      // X > for (let i = 0; i < max; i++) {
      // X > > if (XXX_DELTA_LAST[i] != frame.data[i]) {
      // X > > > console.log('index[' + i + '] LAST:[' + XXX_DELTA_LAST[i] + '] NOW[' + frame.data[i] + ']');
      // X > > }
      // X > }
      // X }
      // X XXX_DELTA_LAST = frame.data;

      if (!XXX_DELTA || frame.data.byteLength < XXX_DELTA.byteLegnth) {
        XXX_DELTA = new ArrayBuffer(frame.data.byteLength);
        new Uint8Array(XXX_DELTA).set(new Uint8Array(frame.data));
        // Y console.log(`DELTA: 0x${buf2hex(XXX_DELTA)}`);
      }

      frameStatistics.delta.count++;
      frameStatistics.delta.totalBytes += frame.data.byteLength;

      if (frame.data.byteLength < frameStatistics.delta.smallestBytes) {
        frameStatistics.delta.smallestBytes = frame.data.byteLength;
      }

      if (frame.data.byteLength > frameStatistics.delta.largestBytes) {
        frameStatistics.delta.largestBytes = frame.data.byteLength;
      }
    }
  }

  return true;
}

// ------------------------------------------------------------
function processAudio(track, frame) {
  if (frame.data) {
    frameStatistics.audio.count++;
    frameStatistics.audio.totalBytes += frame.data.byteLength;

    if (frame.data.byteLength < frameStatistics.audio.smallestBytes) {
      frameStatistics.audio.smallestBytes = frame.data.byteLength;
    }

    if (frame.data.byteLength > frameStatistics.audio.largestBytes) {
      frameStatistics.audio.largestBytes = frame.data.byteLength;
    }
  }

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
