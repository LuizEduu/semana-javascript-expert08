import VideoProcessor from "./videoProcessor";

const qvgaConstraints = {
  width: 320,
  height: 240,
};

const enconderConfig = {
  ...qvgaConstraints,
  bitrate: 10e6, //1MB por segundo
  //WebM
  codec: "vp09.00.10.08",
  pt: 4,
  hardwareAcceleration: "prefer-software",

  /* codec: "avc1.42002A",
  pt: 1,
  hardwareAcceleration: "prefer-hardware",
  avc: {
    format: "annexb",
  }, */
};

const videoProcessor = new VideoProcessor();

onmessage = ({ data }) => {
  console.log("recebido!!", data);
  self.postMessage({
    status: "done",
  });
};
