# Backendless test task

This task is simple client-side app that works like a primitive CMS (content management system).

**Deploy** link on **GitHub pages**: [evgeniam6.github.io/backendless-test-task/](https://evgeniam6.github.io/backendless-test-task/)

The app, upon its start, downloads a JSON file from a well-known path. The JSON file contains a description of tabs that must be rendered in the app.

The description of a tab in the JSON file consists of the following:
- id
- title
- the sequential order of the tab among other tabs
- the path to a JS file that has a React component that will be rendered in the tab's content.

## Stack

- React
- React Router
- TypeScript
- Webpack

## Features

- When switching between the tabs, the current tab's id must be added to the URL of the app. For example, `localhost/dummyTable` or `localhost/dummyChart`.
- The first tab must open by default.
- If, at the time when the app is loaded, the URL already contains a tab id, that tab must open by default.
- The file for the tab content (identified with the `path` property) is loaded only when it is needed (the **lazy loading** approach). For example, all files required for the `Dummy Table` is loaded only when the `Dummy Table` tab is selected. You can to see and confirm that in the **Network** section of the browser's dev tools.
