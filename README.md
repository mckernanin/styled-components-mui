# Styled Components MUI
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

Make writing styled-components with material-ui not suck!

## What's the problem?

[Material UI](https://material-ui.com/) is an awesome library, and it's theme abilities are awesome.
For custom components, I always turn to [Styled Components](https://material-ui.com/). Making these work together is a little tedious, having to do something like this:

```
import styled from 'styled-components';
import {Dialog } from '@material-ui/core';

const DialogStyless = styled(Dialog).attrs({
  classes: {paper: "Dialog Styles"}
})`
  .DialogStyles {
    width: 50vw;
    max-width: 100%;
    margin: 0 0 0 auto;
    height: 100vh;
    max-height: 100vh;
  }
`;
```

Using styled-components-mui, you can do the following instead:

```
import styled from 'styled-components-mui';
import {Dialog } from '@material-ui/core';

const DialogStyless = styled(Dialog, {paper: "DialogStyles"})`
  .DialogStyles {
    width: 50vw;
    max-width: 100%;
    margin: 0 0 0 auto;
    height: 100vh;
    max-height: 100vh;
  }
`;
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/4673651?v=4" width="100px;"/><br /><sub><b>Henry Kaufman</b></sub>](http://kaufman.io)<br />[💻](https://github.com/mckernanin/styled-components-mui/commits?author=hcjk "Code") [🤔](#ideas-hcjk "Ideas, Planning, & Feedback") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!