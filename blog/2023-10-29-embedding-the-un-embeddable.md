---
title: "Embedding the Un-Embeddable: Dissecting discord.nfp.is, stolen.shoes & Others"
description: "Revealing the secrets of those websites that allow you to embed AV1 videos, while also over 500MB on Discord."
slug: embedding-the-un-embeddable
authors:
- name: Simulping
  title: Maintainer / Encoder
  url: https://github.com/Simulping
  image_url: https://avatars.githubusercontent.com/u/12994794?v=4
tags: [video, discord]
image: /img/discord-embed-blog-image.webp
hide_table_of_contents: false
---


![Feature image](/img/discord-embed-blog-image.webp)
**A 567.14 MB, 12 min 11 s, 2K (2,048 x 858), VP9 + Opus, 6.51 Mbps average, Blender short film "Cosmos Laundromat"**


## A Scenario

While chatting in your favorite Discord servers, or even group chats, one of your friend might have a sent an extremely weird link. You might even say suspicious. It is a video with the image of a movie backdrop poster with a play button just begging to be clicked, so you did.

<!--truncate-->

It loads for a bit, and to your surprise, it is a full-length, 90 minutes (sometimes even two hours!), unauthorized copy of a movie. You just sit there dumbfounded as the studio intros play in pitch perfect HD quality as opposed to the muddy, blocky, laggy ones you've seen being posted as shitposts.

![stolen.shoes](/img/stolenshoes-puss.webp)

The truth is, there is more than *one* site that does this, currently five at the time of typing this, here's an entire list of them:

- https://stolen.shoes
- https://discord.nfp.is
- https://embeds.video
- https://x266.mov/discord-embed
- https://autocompressor.net/av1

Now, let's get to dissecting.

## How it Works

The entire scheme is actually very, VERY simple to understand, it's all just HTML meta tags. (If you're a web developer this part is a walk in the park)

There are two parts on how this whole thing works, first let's see it on the website's end:

### The Website's End
If you viewed each website's source, you will find this specific line in every one of them, but they may have a different order:
```html
<meta property="og:image" content="https://example.com/i/someimageforthumbnail.jpg">
<meta property="og:type" content="video.other">
<meta property="og:video:url" content="https://example.com/v/video.mp4">
<meta property="og:video:width" content="1920">
<meta property="og:video:height" content="1080">
```

These are the `head` part of HTML, which dictates metadata for the document itself such as what's the website title/name, cosmetic embed, defining the site's icon, etc. They are usually found in between the `<html>` and `<body>` tag. Here's an example of a static HTML site serving one specific video:
```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" type="image/x-icon" href="../favicon.ico"/>
  <title>some embed site</title>
  <meta property="og:image" content="https://www.themoviedb.org/t/p/original/3U0vksjSY9LWe3Dqfr6xkgd3iQP.jpg">
  <meta property="og:type" content="video.other">
  <meta property="og:video:url" content="https://upload.wikimedia.org/wikipedia/commons/3/36/Cosmos_Laundromat_-_First_Cycle_-_Official_Blender_Foundation_release.webm">
  <meta property="og:video:width" content="2048">
  <meta property="og:video:height" content="858">
</head>
<body>
  <h1>hi</h1>
  <p>totally nothing suspicious is going on here</p>
  </body>
</html>
```

< br />
These interactive sites usually deploy a live script, usually a Javascript framework such as NodeJS, ExpressJS, Svelte, and more to parse these video and thumbnails realtime so it embeds on Discord and sometimes even other platforms.

### Discord's End

Traditionally, Discord's media embedder will impose it's own video embed size limits (50 MiB) when a user sends a direct video link like normal. But in this case Discord will embed the thumbnail first, not the video. You could say the link "tricks" Discord by showing it's false face.



## Strength & Limitations

After countless observations and rigorous testing throughout the past year, while also asking their creators, these are the current strength of this exploit:

- You can embed non-web compatible codecs such as H.265/HEVC in MP4/MOV, but the user must be using a compatible browser that is able to decode/play them, such as [Thorium](https://thorium.rocks).
- There is no maximum size, you can embed a raw Blu-ray video if you want, although I do not condone this unless you have legal permissions to do so or it's a Creative Commons-licensed movie like Big Buck Bunny.
- You can send a high bitrate gaming clip to your friends without any restrictions, assuming you already have a place to upload them to.

<br />

and the limitations:
- You can only use [hotlinks](https://simple.wikipedia.org/wiki/Hotlinking), which means direct linking to the video itself ending in their file extension such as `.mp4`, so things such as cloud services like Google Drive or OneDrive does not work.
- You cannot use Discord's CDN (cdn.discordapp.com) as the video source, as it just doesn't work. I assume this is because of Discord's proxy blocking embeds over 50 MiB, but **only discord.nfp.is could do this**, as it **proxies cdn.discordapp.com** itself, making it work just fine.
- You cannot embed videos higher than 4K (3840 x 2160), Discord specifically imposes a hard limit for this (Even normally uploaded videos won't work) after the Discord-crashing-videos-incident where videos would play normally but then scaled to ridiculous resolution at a specified duration.



## Differences between Sites

Currently there's around five sites as of 29th October 2023, they all pretty much serve the same function but one may interest you more than the other 

around 4 of these except for `embeds.video` are owned by members of the AV1 Community Discord.

- https://stolen.shoes - Recognition as it's the OG.
- https://discord.nfp.is - You can use Discord CDN as video source.
- https://embeds.video - Immediately input video source into the URL (`https://embeds.video/https://example.com/v/video.mp4`)
- https://x266.mov/discord-embed - Domain, simple layout.
- https://autocompressor.net/av1 - Lots of info dump, pretty advanced features.

And that's it for the technical overview! Keep reading below if you want to know more about how this whole shebang started!

## The Lore

### Dwayne

In around April 2022, a Reddit user going by the name of u/CreativeGamer03 [posted a video on r/discordapp](https://www.reddit.com/r/discordapp/comments/u96kky/someone_sent_this_in_the_memes_channel_and_bruh) of a link where a GIF of Dwayne "The Rock" Johnson with the caption "Is this a GIF or is it a video?", and when upon playing, a low quality music video of Rick Astley's "Never Gonna Give You Up" plays, rickrolling the user.

It is most likely that the link was created way earlier before, it is now unfortunately [removed](https://archuser.de/the-rock).

### Discovery
Fast forward in 23th June 2022, a Discord user going by the name of *Clybius* on the AV1 Community Discord server, asked people for VP9/AVC videos that are over 100 MB in size (since at that time, 500 MB nitro tier does not exist yet). Then decided to use a 59-minute long, 1080p sample video of nature sceneries from around the world with the thumbnail being a GIF of a waterfall, it worked

then he tried with AV1. Eureka, it also worked:

![AV1](/img/clybius-av1.webp)

And then, when asked if the method could be patched if found out, Clybius said they could, but an important detail is that he got the idea from the *Dwayne Johnson GIF/video from above* but forgot about it for a couple of months. So it's safe to say the entire ordeal stemmed from a silly little rickroll video.

![Dwayne](/img/clybius-dwayne.webp)

### The Experiments & Interactive Site

After the immediate discovery of the possibility of AV1 embedding, experimentations followed and it was discovered that every codec in existence works, just as long as the client (user) can decode/play them and the container/extension is of the following: MP4, MOV, and WebM, A.K.A web-compatible containers.

This applies to HEVC, ProRes, xHE-AAC, and other bizarre codecs nobody else uses.

While experimentations began, Clybius converted one their owned-but-idle domain, `stolen.shoes` to serve as an interactive embedder that provides a textbox for video URL, thumbnail URL, width, and height of the video. This will be the first website to be set for embedding. Many others soon followed.

### Virality

It's not long before people outside of the AV1 Community Discord discovered `stolen.shoes`, and it went viral, **thrice**, at the time of typing. All to distribute full length, unauthorized copies of movies, sometimes very early.

- The first instance was when DreamWorks' sequel of "Puss in Boots (2011)", "Puss in Boots: The Last Wish (2022)", streaming-service sourced 1080p rip was the first wake up call that attracted attention to the existence of these embed sites. Used `stolen.shoes`.

![puss](/img/stolenshoes-puss.webp)

- The second instance was when highly-anticipated animated film "The Super Mario Bros. Movie (2023)" produced by Illumination, Universal Studios, and Nintendo was spread around. It was first spotted as a Cam (A camera recording by someone in theaters), then as it went out on streaming services a different link appeared but spread faster and with upgraded 1080p quality. Both used `stolen.shoes` as the host.

![mario](/img/stolenshoes-mario.webp)

- The third instance is very recent (again, at the time of typing). Is another fan favorite, a streaming-service sourced "Five Nights at Freddy's (2023)", since the movie released both in theaters and streaming service (Peacock) day one, it gained steam extremely fast as most people have not seen it yet and gaining [hundreds of upvotes within the r/discordapp subreddit](https://www.reddit.com/r/discordapp/comments/17hx45y/is_discordnfp_an_ip_grabber/). The copy seems to be a 720p encoded/compressed version released by [YTS](https://en.wikipedia.org/wiki/YIFY). Uses `discord.nfp.is`.

![fnaf](/img/discordnfpis-fnaf.webp)

Note the ones listed here are the ones that gained extreme popularities, there may be lesser known links being spread around either privately, or just did not cause enough noise to be in my radar. Lesser popular ones include: 
- Top Gun Maverick (2022)
- The SpongeBob trilogy (2005/2015/2020)
- Spider-Man: Across the Spider-Verse (2023)


## Closing

And that's it for today's blog! See you next time.

P.S Discord please don't patch this, thanks ;)