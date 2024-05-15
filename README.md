# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

```isMenuOpen: {
type: Boolean,
default: true,
},
menuTitle: {
type: String,
default: 'Akahon',
},
menuLogo: {
type: String,
default: '',
},
menuIcon: {
type: String,
default: 'bxl-c-plus-plus',
},
isPaddingLeft: {
type: Boolean,
default: true,
},
menuOpenedPaddingLeftBody: {
type: String,
default: '250px'
},
menuClosedPaddingLeftBody: {
type: String,
default: '78px'
},
//! Menu items
menuItems: {
type: Array,
default: () => [
{
link: '#',
name: 'Dashboard',
tooltip: 'Dashboard',
icon: 'bx-grid-alt',
},
{
link: '#',
name: 'User',
tooltip: 'User',
icon: 'bx-user',
},
{
link: '#',
name: 'Messages',
tooltip: 'Messages',
icon: 'bx-chat',
},
{
link: '#',
name: 'Analytics',
tooltip: 'Analytics',
icon: 'bx-pie-chart-alt-2',
},
{
link: '#',
name: 'File Manager',
tooltip: 'Files',
icon: 'bx-folder',
},
{
link: '#',
name: 'Order',
tooltip: 'Order',
icon: 'bx-cart-alt',
},
{
link: '#',
name: 'Saved',
tooltip: 'Saved',
icon: 'bx-heart',
},
{
link: '#',
name: 'Setting',
tooltip: 'Setting',
icon: 'bx-cog',
},
],
},
//! Search
isSearch: {
type: Boolean,
default: true,
},
searchPlaceholder: {
type: String,
default: 'Search...',
},
searchTooltip: {
type: String,
default: 'Search',
},
//! Profile detailes
profileImg: {
type: String,
default: require('../assets/img/photo.jpg'),
},
profileName: {
type: String,
default: 'Fayzullo Saidakbarov',
},
profileRole: {
type: String,
default: 'Frontend vue developer',
},
isExitButton: {
type: Boolean,
default: true,
},
isLoggedIn: {
type: Boolean,
default: true,
},
//! Styles
bgColor: {
type: String,
default: '#11101d',
},
secondaryColor: {
type: String,
default: '#1d1b31',
},
homeSectionColor: {
type: String,
default: '#e4e9f7',
},
logoTitleColor: {
type: String,
default: '#fff',
},
iconsColor: {
type: String,
default: '#fff',
},
itemsTooltipColor: {
type: String,
default: '#e4e9f7',
},
searchInputTextColor: {
type: String,
default: '#fff',
},
menuItemsHoverColor: {
type: String,
default: '#fff',
},
menuItemsTextColor: {
type: String,
default: '#fff',
},
menuFooterTextColor: {
type: String,
default: '#fff',
},
```

```
@button-exit-clicked: Emitted when the exit button has been clicked
@search-input-emit String: Emitted when user types in the search input
```
