import fs from "fs";
import glob from "glob";

glob("src/**/*.ts", null, (err, files) => {
  files.forEach((file) => {
    fs.readFile(
      file,
      // "src/components/old-vue-file-test.ts",
      "utf8",
      (err, data) => {
        console.dir(data);
        const writeContents = data
          .replace(/import Vue from "vue";\n/, "")
          .replace(
            /import Component from "vue-class-component";/,
            'import { Options, Vue } from "vue-class-component";'
          )
          .trim();
        fs.writeFile(
          file,
          // "src/components/old-vue-file-test.ts",
          writeContents,
          (err) => {
            if (err) {
              throw err;
            }
            console.log("finished!");
          }
        );
      }
    );
  });
});
