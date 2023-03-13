# Crypto Token List Website

A Web App that shows the price of many token list, using PINTU API [See here](https://pintu-website-livid.vercel.app/)

> **Warning**
> Due to CORS issues when using pintu's API (trade price changes API) the author 
> build a custom server that passthrough the response from the API 
> Therefore, the custom server that author made may be broken, and need to rebuilded to function again.
> Please dont hesitate to contact author if by any chance there is an error on the production.

## Features

- Website that track the crypto token price using PINTU API
- Fully responsive! you can open it clearly in mobile, tab, or dekstop

## How this Website is Made
- Written fully using react (typescript)
- Used Hooks and Context to manage global state
- Used React Query and Axios to fetch data
- Fully linted using custom linting rules
- CI/CD linked in to vercel [Pintu WebApp](https://pintu-website-livid.vercel.app/)
- Styled with TailwindCSS
- Fully responsive!

## Techstacks
- React
- Typescript
- Vite js
- Tailwind
- React Query
## Contributing
#### Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/samdyra/PintuWebsite/issues) to report any bugs or file feature requests.

#### Developing

PRs are welcome. To begin developing, do this:

```
Yarn
$ git@github.com:samdyra/PintuWebsite.git
$ cd PintuWebsite/
$ yarn
$ yarn dev

NPM
$ git@github.com:samdyra/PintuWebsite.git
$ cd PintuWebsite/
$ npm install
$ npm run dev
```
