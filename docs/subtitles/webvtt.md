---
title: WebVTT
---

# WebVTT

WebVTT, or Web Video Text Tracks, is the format for subtitles on the web. It is used with the [HTML \<track\> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track), or embedded into a webm container.

## Structure
WebVTT is a simple, text-based format. All files start with the string
`WEBVTT`, optionally, some text, then two new lines. That's where the
data we're interested in starts.

### Cue

A WebVTT file is basically a bunch of cues. They can have a line with
an ID, then they have to have a line specifying from where to where
the cue should be displayed like this: `STARTTIME -> ENDTIME [optional
settings go here]`, then all the text to be displayed goes after
it. That text can have some HTML-like formatting in it. To learn about
them, see [the
documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#webvtt_cues).
