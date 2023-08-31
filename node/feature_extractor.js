const constants = require("../common/constants.js");
const features = require("../common/features.js");

const fs = require("fs");

const samples = JSON.parse(fs.readFileSync(constants.SAMPLES, "utf8"));

for (const sample of samples) {
  const paths = JSON.parse(
    fs.readFileSync(constants.JSON_DIR + "/" + sample.id + ".json"),
  );

  sample.points = [features.getPathCount(paths), features.getPointCount(paths)];
}

const featureNames = ["Path Counts", "Point Counts"];

fs.writeFileSync(
  constants.FEATURES,
  JSON.stringify({ featurenames: featureNames, samples: samples }),
   "utf8",
);
