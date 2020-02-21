# Webseed.Digital

This is the source code for https://webseed.digital, made available as a basic demonstration of experience in building and deploying a ReactJS front-end. 

There is no back-end or database layer for this site. Everything is statically created within various custom React Components so the site itself can be as simple as possible.

As this year progresses, this website will eventually grow with additional examples and case studies of my work and will likely change dramatically.

## ReactJS

This site uses ReactJS and React DOM and was initially created using the React-Create-App template.
The `build` folder contains the full deployed version of the site and can be served immediately upon cloning by running `serve -s build` from the root.

## Structure

Within the `src` folder are several components split into two categories:

### Components

These are the main, resuable components. `Header`, `Navigation` and `Footer` are self-explanatory. `ScrollTo` is used to wrap the native `scrollIntoView` function with some handling specific to React, including redirecting to the correct route if necessary. 

### Pages

Although, for now, this is a single-page website, the app is built to future-proof the likelihood that this will change as it grows. Even though each of these pages is included as a section within the `Home` page route, they're designed to be otherwise independent.

Each 'page' can have its own specific components, such as `WorkImage` and these are found within the nested `components` folders.
