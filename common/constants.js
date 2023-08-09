const constants = {};

constants.DATA_DIR = "../data";
constants.DATA_RAW = constants.DATA_DIR + "/raw";
constants.DATA_DATASET = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = constants.DATA_DATASET + "/json";
constants.IMG_DIR = constants.DATA_DATASET + "/img";
constants.SAMPLES = constants.DATA_DATASET + "/samples.json";
constants.COMMON = "../common";
constants.JS_OBJECTS = constants.COMMON + "/js_objects";
constants.SAMPLES_JS = constants.JS_OBJECTS + "/samples.js";

if (typeof module !== "undefined") module.exports = constants;
