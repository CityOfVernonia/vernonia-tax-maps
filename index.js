const fs = require('fs');
const { execFileSync } = require('child_process');
const download = require('download');
const FileType = require('file-type');
const chalk = require('chalk');

// tax map url
const taxMapUrl = 'http://65.122.151.216/geomoose2/taxlots_map_images/';

// array of tax maps
let taxMaps;

// convert pdf to tiff into `tiff` directory
const pdf2tiff = async taxMap => {
  await execFileSync(`gswin64c`, [
    `-sOutputFile=tax-maps/tiff/${taxMap}.tiff`,
    `-sDEVICE=tiff24nc`,
    `-sCompression=lzw`,
    `-r600`,
    `tax-maps/pdf/${taxMap}.pdf`
  ]);
  console.log(
    chalk.green(`${taxMap}.tiff successfully converted to ${taxMap}.pdf.`)
  );
};

// read list of tax maps
fs.readFile('tax-maps/tax_maps.txt', 'utf-8', (readError, readData) => {
  //handle read error
  if (readError) {
    console.log(
      chalk.red('Failed to read tax map list.'),
      readError
    );
    return;
  }

  // array of tax maps
  taxMaps = readData.split('\r\n');

  // download tax maps and write to `pdf` or `tiff` directory based on file type
  taxMaps.forEach(taxMap => {
    // download file
    download(`${taxMapUrl}${taxMap}`)
      .then(async downloadData => {

        // get file type from buffer
        const type = await (await FileType.fromBuffer(downloadData)).ext;

        // handle file by type
        if (type === 'tif' || type === 'tiff') {
          fs.writeFile(`tax-maps/tiff/${taxMap}.tiff`, downloadData, tiffWriteError => {

            // handle write error
            if (tiffWriteError) {
              console.log(
                chalk.red(`Failed to write ${taxMap}.tiff.`),
                tiffWriteError
              );
              return;
            }
            console.log(
              chalk.green(`${taxMap}.tiff successfully written.`)
            );

          });
        } else if (type === 'pdf') {
          fs.writeFile(`tax-maps/pdf/${taxMap}.pdf`, downloadData, pdfWriteError => {

            // handle write error
            if (pdfWriteError) {
              console.log(
                chalk.red(`Failed to write ${taxMap}.pdf.`),
                pdfWriteError
              );
              return;
            }
            console.log(
              chalk.green(`${taxMap}.pdf successfully written.`)
            );

            // convert
            pdf2tiff(taxMap);
          });
        } else {
          console.log(
            chalk.red(`Tax map ${taxMap} has a file type of ${type}`)
          );
        }
      })
      .catch(downloadError => {
        // handle download error
        console.log(
          chalk.red(`Failed to download ${taxMap} PDF.`),
          downloadError
        );
      });
  });
});
