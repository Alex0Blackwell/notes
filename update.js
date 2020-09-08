var markdownpdf = require("markdown-pdf")
  , fs = require("fs")


function getPDF(dir) {
  return new Promise(resolve => {
    var fileMap = new Map();

    fs.readdir(dir, (err, files) => {
      if (err)
        throw err;

      files.forEach(file => {
        if(file)
          fileMap.set(file.split(".pdf")[0], true);
      });
      resolve(fileMap);
    });
  });
}


function getMD(dir, fileMap) {
  return new Promise(resolve => {
    var newFiles = [];

    fs.readdir(dir, (err, files) => {
      if (err)
        throw err;

      files.forEach(file => {
        if(file) {
          if(fileMap.get(file.split(".md")[0]) !== true)
            newFiles.push(file);
        }
      });
      resolve(newFiles);
    });
  });
}


async function getAllMD() {
  let subjects = ["bus232", "cmpt225", "macm201", "math240", "phil105"];
  let fileMap = new Map();
  let allFiles = [];

  for(let i = 0; i < subjects.length; ++i) {
    let dir = `./subjects/${subjects[i]}/${subjects[i]}MD/`;
    allFiles.push(await getMD(dir, fileMap));
  }

  return allFiles;
}



async function getNewMDFiles(srcName) {
  let fileMap = new Map();

  let dir = `./subjects/${srcName}/${srcName}PDF/`;
  fileMap = await getPDF(dir);

  dir = `./subjects/${srcName}/${srcName}MD/`;
  let newFiles = [];
  newFiles = await getMD(dir, fileMap);

  return newFiles;
}


function generateLink(subject, fileName) {
  let element = `\n\t\t\t\t<div class="col-lg-4 col-6">\n\t\t\t\t\t<div class="inner-note-card" onclick="location.href='./${subject}PDF/${fileName}.pdf'">\n\t\t\t\t\t\t<h4>Click to view <b>${fileName}.pdf</b></h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n`

  return element;
}


function generatePDF(srcNames) {

  for(let i = 0; i < srcNames.length; ++i) {
    // brace yourselves ...
    let dest = srcNames[i].split("/")[2];
    dest = `./subjects/${dest}/${dest}PDF/${srcNames[i].split("/")[4].split(".")[0]}.pdf`;

    fs.createReadStream(srcNames[i])
    .pipe(markdownpdf())
    .pipe(fs.createWriteStream(dest));
  }
}


function addPDFToPage(className) {
  let filename = `./subjects/${className}/${className}.html`;

  fs.readFile(filename, async function (err, data) {
    if (err) throw err;

    let theFile = data.toString().split("\n");
    theFile.splice(25);

    let dir = `./subjects/${className}/${className}PDF/`;
    let pdfMap = new Map();
    pdfMap = await getPDF(dir);

    // always delete all links of the html and generate all updated links

    theFile = theFile.join("\n");


    let isEmpty = true;
    for(const [key, value] of pdfMap.entries()) {
      isEmpty = false;
      let el = generateLink(className, key);
      theFile += el;
    }

    if(isEmpty) {
      theFile += `\n</div>
		</div>
    <div class="text-center">
      <img src="../../img/alex-guitar-empty.png" alt="image">
      <h4>bow wow dudu deedoo</h4>
      <i>(It's coming I swear)</i>`
    }

    theFile += `\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>`


    fs.writeFile(filename, theFile, function (err) {
      if (err) throw err;
    });
  });

}




async function main() {
  let subjects = ["bus232", "cmpt225", "macm201", "math240", "phil105"];

  if(process.argv[2] == "-a" || process.argv[2] == "--all") {
    // allow the user to update all the md files to pdf's
    let allFiles = await getAllMD();

    let filesToUpdate = [];
    for(let i = 0; i < allFiles.length; ++i) {
      for(let j = 0; j < allFiles[i].length; ++j) {
        if(allFiles[j])
          filesToUpdate.push(`./subjects/${subjects[i]}/${subjects[i]}MD/${allFiles[i][j]}`);
      }
    }

    generatePDF(filesToUpdate);

    for(let i = 0; i < subjects.length; ++i) {
      addPDFToPage(subjects[i]);
    }

    console.log(`Finished generating ${filesToUpdate.length} file(s).`);
    // the pdf files are now generated and we have to link them from the website

  } else {
    // automatically detect new md files and compile those
    var classesToUpdate = [];
    for(let i = 0; i < subjects.length; ++i)
      classesToUpdate.push(false);

    let newMDFiles = [];

    let fileArr = [];
    for(let i = 0; i < subjects.length; ++i) {
      fileArr = await getNewMDFiles(subjects[i]);

      for(let j = 0; j < fileArr.length; ++j) {
        if(fileArr[j]) {
          newMDFiles.push(`./subjects/${subjects[i]}/${subjects[i]}MD/${fileArr[j]}`);
          classesToUpdate[i] = true;
        }
      }
    }

    generatePDF(newMDFiles);

    console.log(`Finished generating ${newMDFiles.length} file(s).`);
    // the pdf files are now generated and we have to link them from the website

    for(let i = 0; i < classesToUpdate.length; ++i) {
      if(classesToUpdate[i])
        addPDFToPage(subjects[i]);
    }
  }
}


main()
