# vernonia-tax-maps

![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/CityOfVernonia/vernonia-tax-maps?color=success&style=flat-square)

A tool for downloading Columbia County tax maps within and adjacent to [Vernonia City Limits](https://gisportal.vernonia-or.gov/portal/home/item.html?id=eb0c7507611e44b7923dd1c0167e3b92).

Files are included as TIFFs and PDFs. TIFFs are georeferenced via the accompanying `*.tiff.aux.xml` file in spatial reference NAD 1983 (2011) Oregon Statewide Lambert (Intl Feet) _WKID 6557_.

Tax maps can be viewed over imagery in the interactive [Tax Map Viewer](https://vernonia-tax-map-viewer.netlify.app/) app. The source code for the app is available at [CityOfVernonia/vernonia-tax-maps](https://github.com/CityOfVernonia/vernonia-tax-maps)

### Install

1. Clone this repository.
1. Run `npm install` to install dependencies.
1. Run `npm run exec` to download and process tax map files.

Prerequisite: [GhostScript](https://ghostscript.com/download.html) installed with `gswin64c` available to execute via command line.

### Use in ArcGIS Pro

Copy or add to `tax-maps/tiff` directory to a Pro project and add TIFF files to a map.

### Tax Map Boundaries

The boundaries are included in the zipped FGDB `TaxMapBoundaries.gdb.zip`.

### Updates and Versioning

Updates are generally performed Monday morning. Versioning is Year-Mount-Day, i.e. `v2021.02.03`.

### Big Fat To Do

Reproject boundaries and TIFF georeferencing to WGS84 and include GeoTIFF files in this project.

***

Made with :heart: and :coffee: in Vernonia, Oregon
