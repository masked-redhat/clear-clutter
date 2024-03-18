import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const folder = "/tryOnIt";

let directoryItems = fs.readdirSync(path.join(__dirname, folder));

for (const item of directoryItems) {
    let file = path.join(__dirname, folder, item);
    let ext = path.extname(file).slice(1);
    let dir_ = path.join(__dirname, folder, ext);

    if (!fs.existsSync(dir_)) {
        fs.mkdirSync(dir_);
    }

    // https://stackoverflow.com/questions/15630770/node-js-check-if-path-is-file-or-directory
    if (fs.lstatSync(file).isFile()) {
        fs.renameSync(file, path.join(dir_, path.basename(file)));
    }
}
