---
label: MKVToolNix
order: 198
---

# MKVToolNix

![Your average MKVToolNix workload.](https://cdn.discordapp.com/attachments/778167033401049098/1104704457096306758/mkvtoolnix-gui_7lzrlaJwOp.png)


MKVToolNix is FOSS GUI frontend to a set of tools to create, alter and inspect Matroska files under Linux, other Unices and Windows (mkvmerge, mkvinfo, mkvpropedit, mkvextract).

&nbsp;&nbsp;

## Installation

Fortunately, Moritz Bunkus (Creator) is sane enough to provide downloads for pretty much all desktop operating systems normal people use which can be found [here](https://mkvtoolnix.download/downloads.html). If not available, check your local package manager.


## Usage

Drag and drop media files (or use "Add source files") to the application and modify, remux, demux, add streams, drop streams, anything and when done set your output destination and click "Start multiplexing" to start writing the output.

## Tips and tricks

1. You can import unencrypted BDMV (``index.bdmv``) or Blu-ray playlist files into MKVToolNix and it will prompt you to select which stream you would want to import.
2. You can set a WebM output in Output > Miscellaneous > "Create WebM compliant file"
3. You can split videos in multiple ways in Output > Splitting. Best of all? No crappy freeze frames unlike in FFmpeg and no re-encoding required.
