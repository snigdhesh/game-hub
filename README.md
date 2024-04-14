Reference: https://github.com/mosh-hamedani/game-hub
dev-url: https://gamehub-dev.vercel.app

## How to implement infinite scroll

`npm i react-infinite-scroll-component`

And wrap all your pagination under 
`<InfiniteScroll> </InfiniteScroll>`

## How to use time library?

**link:** https://www.npmjs.com/package/ms  
`npm i ms`  
`npm i --save-dev @types/ms`  

```
import ms from 'ms'  

const example = {
    staleTime: ms('24h')
}
```
