Project for listing the locales that other box frontend projects are using when building.
When adding a new locale, please bump up the version in package.json before publishing to npmjs.

# To add a new locale
1. Add the new locale in [index.js](index.js).
2. Bump the version in [package.json](package.json).
3. Run the "Release Box Languages" Jenkins job to publish to npmjs. (Box engineers do not
have permissions to publish to the @box scope, so this job does that instead.)

# Usage examples:
To get the list of BCP-47 language tags that are officially supported by Box:
```js
const languages = require('@box/languages');
languages.forEach(...do something...);
```

To get the full languages object that are officially supported by Box:
```js
const { boxLanguages } = require('@box/languages');
boxLanguages.forEach(...do something...);
```
