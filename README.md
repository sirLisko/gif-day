# GifDay [![Netlify Status](https://api.netlify.com/api/v1/badges/247e6813-9ceb-4aa0-81e0-a7a57ef145d0/deploy-status)](https://app.netlify.com/sites/gifday/deploys)

> Your year in gifs...

[https://gifday.netlify.com](https://gifday.netlify.com)

## Motivation

I take advantage of this little project to test out a bit more [React Hooks](https://reactjs.org/docs/hooks-intro.html), I hope I didn't make any mess 😅 and to (finally) give a spin to [Cypress](https://cypress.io) for the integration tests.
Probably having a lot of gifs at the same time is not the best for page performance, using videos instead of images is improving the experience but it is still not good enough. Ideally, it would be better paginating them in month views, but this is going to lose a bit the "_wow effect_" on seeing a page crowded by gifs.
Another idea could be serving static images and animating the gif on `hover` or having a sort of switch for "unleashing the beast" and activating all the gifs at the same time. But also this is losing a bit the "wow effect" mentioned ☝️

### The stack

- WebApp scaffolded via [Create React App](https://github.com/facebook/create-react-app)
- Check the syntax and formatting of the JS, via [ESLint](http://eslint.org/) and [Prettier](https://prettier.io/)
- Style components with [Emotion](https://emotion.sh)
- [Giphy APIS](https://developers.giphy.com/docs/)
- Unit tests with [Jest](https://jestjs.io) and [Enzyme](https://airbnb.io/enzyme/)
- Integration test with [Cypress](https://cypress.io)

### Improvements

- Add a login system and the possibility to save your gifs, I'd go with [Firebase](https://firebase.google.com) with [rebase](https://github.com/tylermcginnis/re-base) (as done [here](https://github.com/sirlisko/been) WIP)
- Proxy the API call in order not to expose the API key
- Add a spinner while searching for GIF
- Having a fallback for the videos
- Push history on daily GIF
- Incrementally load fetch polyfill only if needed by the browser
- Improve Input, adding a debounce and searching on typing
- Polishing the UI
- Improving metatags and manifest
- Probably I am forgetting a bunch of them :-)

### API key

A [GIPHY API KEY](https://developers.giphy.com/dashboard/) is needed.

```sh
export GIF_API_KEY={token}
```
