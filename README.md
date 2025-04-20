# Revideo YouTube Short API

## Getting Started

First, install the dependencies:

```bash
npm install
```

This project comes with the following commands:

- `npm run revideo:serve` - Start the Revideo render api (required for the render button on the Next.js page to work)
- `npm run revideo:editor` - Start the Revideo editor, which you can use to inspect and preview your Revideo code

## Testing the API locally

Start the server using

Using Postman (or similar), make a `POST` request to the `/render` endpoint in the format:

```
{
  "variables": {
    "audioUrl": "https://revideo-example-assets.s3.amazonaws.com/12c4cb20-36b8-4ccf-a1bd-7a68b6b47173/audio.wav",
    "images": [
      "https://revideo-example-assets.s3.amazonaws.com/12c4cb20-36b8-4ccf-a1bd-7a68b6b47173/image-0.png",
      "https://revideo-example-assets.s3.amazonaws.com/12c4cb20-36b8-4ccf-a1bd-7a68b6b47173/image-1.png",
    ],
    "words": [
      {
        "start": 0.08,
        "end": 0.39999998,
        "punctuated_word": "Ready"
      },
      {
        "start": 0.39999998,
        "end": 0.48,
        "punctuated_word": "to"
      },
      {
        "start": 0.48,
        "end": 0.71999997,
        "punctuated_word": "have"
      }
    ]
  }
}
```
