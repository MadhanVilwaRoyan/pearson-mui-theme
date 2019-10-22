# Pearson Material UI Theme

This is Material UI Theme created to match Pearson UX specs as closely as possible.

## How to use
First, you have to include Open Sans font in your application. The best way would be add that in the head of
the application's index.html. Mostly this can be found in the public directory:
```html
<link
  href="https://fonts.googleapis.com/css?family=Open+Sans"
  rel="stylesheet">
```

Install the package in your project. In your app root folder do:

**NPM Command**

```shell
> npm install --save pearson-mui-theme
```

**Yarn Command**

```shell
> yarn add pearson-mui-theme
```

Once package is installed, it can be imported and used as your theme.
```javascript
import pearsonTheme from 'pearson-mui-theme';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
```

Wrap the theme provider on the root of your app:

```html
<ThemeProvider theme={createMuiTheme(pearsonTheme)}>
  <YourApp />
</ThemeProvider>
```

## License
This software is published by Pearson Education under the [MIT license](LICENSE).
