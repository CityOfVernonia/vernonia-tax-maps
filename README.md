# vernonia-tax-maps

![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/CityOfVernonia/vernonia-tax-maps?color=success&style=flat-square)

## About

A tool for downloading Columbia County tax maps within and adjacent to Vernonia City Limits.

Files are included as JPEGs and PDFs. JPEGs are georeferenced via the accompanying `*.aux.xml` file in spatial reference NAD 1983 (2011) Oregon Statewide Lambert (Intl Feet) _WKID 6557_.

Georeferenced tax maps can be viewed overlaid imagery and and other layers in [Vernonia Map](https://map.vernonia-or.gov/) using the Tax Maps widget.

![Tax Maps widget!](/screenshot.jpg "Tax Maps widget")

## Files

### Boundaries

[TaxMapBoundaries.gdb.zip](/TaxMapBoundaries.gdb.zip)

[TaxMapBoundaries.geojson](/TaxMapBoundaries.geojson)

### PDFs and JPEGs

| [4403.pdf](/tax-maps/pdf/4403.pdf) | [4403.jpg](/tax-maps/jpg/4403.jpg) |

| [4403BA.pdf](/tax-maps/pdf/4403BA.pdf) | [4403BA.jpg](/tax-maps/jpg/4403BA.jpg) |

| [4403BB.pdf](/tax-maps/pdf/4403BB.pdf) | [4403BB.jpg](/tax-maps/jpg/4403BB.jpg) |

| [4403BC.pdf](/tax-maps/pdf/4403BC.pdf) | [4403BC.jpg](/tax-maps/jpg/4403BC.jpg) |

| [4403BD.pdf](/tax-maps/pdf/4403BD.pdf) | [4403BD.jpg](/tax-maps/jpg/4403BD.jpg) |

| [4403CA.pdf](/tax-maps/pdf/4403CA.pdf) | [4403CA.jpg](/tax-maps/jpg/4403CA.jpg) |

| [4404.pdf](/tax-maps/pdf/4404.pdf) | [4404.jpg](/tax-maps/jpg/4404.jpg) |

| [4404AB.pdf](/tax-maps/pdf/4404AB.pdf) | [4404AB.jpg](/tax-maps/jpg/4404AB.jpg) |

| [4404AC.pdf](/tax-maps/pdf/4404AC.pdf) | [4404AC.jpg](/tax-maps/jpg/4404AC.jpg) |

| [4404AD.pdf](/tax-maps/pdf/4404AD.pdf) | [4404AD.jpg](/tax-maps/jpg/4404AD.jpg) |

| [4404BA.pdf](/tax-maps/pdf/4404BA.pdf) | [4404BA.jpg](/tax-maps/jpg/4404BA.jpg) |

| [4404BB.pdf](/tax-maps/pdf/4404BB.pdf) | [4404BB.jpg](/tax-maps/jpg/4404BB.jpg) |

| [4404BC.pdf](/tax-maps/pdf/4404BC.pdf) | [4404BC.jpg](/tax-maps/jpg/4404BC.jpg) |

| [4404BD.pdf](/tax-maps/pdf/4404BD.pdf) | [4404BD.jpg](/tax-maps/jpg/4404BD.jpg) |

| [4404CA.pdf](/tax-maps/pdf/4404CA.pdf) | [4404CA.jpg](/tax-maps/jpg/4404CA.jpg) |

| [4404CB.pdf](/tax-maps/pdf/4404CB.pdf) | [4404CB.jpg](/tax-maps/jpg/4404CB.jpg) |

| [4404DA.pdf](/tax-maps/pdf/4404DA.pdf) | [4404DA.jpg](/tax-maps/jpg/4404DA.jpg) |

| [4405.pdf](/tax-maps/pdf/4405.pdf) | [4405.jpg](/tax-maps/jpg/4405.jpg) |

| [4405AA.pdf](/tax-maps/pdf/4405AA.pdf) | [4405AA.jpg](/tax-maps/jpg/4405AA.jpg) |

| [4405AC.pdf](/tax-maps/pdf/4405AC.pdf) | [4405AC.jpg](/tax-maps/jpg/4405AC.jpg) |

| [4405AD.pdf](/tax-maps/pdf/4405AD.pdf) | [4405AD.jpg](/tax-maps/jpg/4405AD.jpg) |

| [4405DA.pdf](/tax-maps/pdf/4405DA.pdf) | [4405DA.jpg](/tax-maps/jpg/4405DA.jpg) |

| [4405DD.pdf](/tax-maps/pdf/4405DD.pdf) | [4405DD.jpg](/tax-maps/jpg/4405DD.jpg) |

| [5432.pdf](/tax-maps/pdf/5432.pdf) | [5432.jpg](/tax-maps/jpg/5432.jpg) |

| [5433.pdf](/tax-maps/pdf/5433.pdf) | [5433.jpg](/tax-maps/jpg/5433.jpg) |

| [5433CD.pdf](/tax-maps/pdf/5433CD.pdf) | [5433CD.jpg](/tax-maps/jpg/5433CD.jpg) |

| [5433DC.pdf](/tax-maps/pdf/5433DC.pdf) | [5433DC.jpg](/tax-maps/jpg/5433DC.jpg) |

| [5434.pdf](/tax-maps/pdf/5434.pdf) | [5434.jpg](/tax-maps/jpg/5434.jpg) |

| [5434CC.pdf](/tax-maps/pdf/5434CC.pdf) | [5434CC.jpg](/tax-maps/jpg/5434CC.jpg) |

| [5434CD.pdf](/tax-maps/pdf/5434CD.pdf) | [5434CD.jpg](/tax-maps/jpg/5434CD.jpg) |

## Run the Tool

### Install

1. Clone this repository.
1. Run `npm install` to install dependencies.
1. Run `node index.js` to download and process tax map files.

Prerequisite: [GhostScript](https://ghostscript.com/download.html) installed with `gswin64c` available to execute via command line.

### Use in ArcGIS Pro

Copy or add `tax-maps/jpg` directory to a Pro project and add images to a map.

### Tax Map Boundaries

The boundaries are included in the zipped FGDB `TaxMapBoundaries.gdb.zip` or `TaxMapBoundaries.geojson`.

### Updates and Versioning

Updates are generally performed Monday morning (if I remember) and only if any tax map has been updated. Versioning is Year-Mount-Day, i.e. `v2021.02.03`.

***

Made with :heart: and :coffee: in Vernonia, Oregon
