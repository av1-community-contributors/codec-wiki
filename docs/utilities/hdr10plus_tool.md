---
label: hdr10plus_tool
order: 197
date: 2023-05-07
---

# hdr10plus_tool

**hdr10plus_tool** is a command line tool written in Rust for working with HDR10+ in HEVC files. Previously named ``hdr10plus_parser``, now it's more than just a parser.

&nbsp;&nbsp;

## Installation

- Download pre-built binaries from [here](https://github.com/quietvoid/hdr10plus_tool/releases)

or
- Compile yourself (Rust must be installed, minimum v1.57.0 at the time of writing)

```bash
git clone https://github.com/quietvoid/hdr10plus_tool.git
cd hdr10plus_tool
RUSTFLAGS="-C target-cpu=native" cargo build --release
```

on Windows:
```bash
git clone https://github.com/quietvoid/hdr10plus_tool.git
cd hdr10plus_tool
set RUSTFLAGS=-C target-cpu=native 
cargo build --release
```

&nbsp;&nbsp;

## Usage

```bash
hdr10plus_tool [OPTIONS] <SUBCOMMAND>
```

To get more detailed options for a subcommand

```bash
hdr10plus_tool <SUBCOMMAND> --help
```
