# Passion.io Coding Challenge

## Solution

I fixed issue with post id param and handle the case in which post data is not yet ready. Added infinite scrolling to slightly adjusted List component (to have the scroll inside the list, so that it can be easily handled). There are no heavy computations there, so no further improvements for scroll event handler (like `requestAnimationFrame`) should be needed. For the comments, I updated state, added some reducers and saga. I didn't have previous experiene with sagas, but I must say they are quite elegant. Sorting was a bit tricky. I did it first on the frontend side, but updating the list with infinite scroll made the scroll stutter a bit. I'm sure it could be fixed somehow, but as I don't have much time, I decided to change the approach and reload the whole list on order change, to get the sorted data from the API. In the end, I added some tests for reducers and snapshots for List component.

At first I wanted to rewrite the whole app in TypeScript, but wasn't sure if that's what you guys expect. So further improvements should include TS, some dev utils like Prettier, Eslint etc., splitting the redux stuff into domain-based files, some more tests, both unit and functional (e.g. with Cypress). If this app should scale with some more data (posts let's say), I would surely replace custom list with some virtualized one. Some UX improvements like saving the state (e.g. sort order) locally would also help.

## Background Information

Passion.io works with various successful people from around the globe.
They all are turned their passion into their profession in different verticals and niches.

This repository contains a simple app that loads and displays a list of 10 posts from jsonplaceholder.typicode.com.

Used libraries:

- redux
- react-redux
- redux-saga
- react-router
- react-router-dom

API docs:
https://github.com/typicode/json-server
http://jsonplaceholder.typicode.com/

## Your tasks

### Fix an issue

Right now when you click on post title or when you go to `localhost:3000/posts/1` by pasting the url, you get an error:

> Cannot read property 'title' of undefined

Find a solution to show the post preview, fix the issue and describe it in a commit message.

### Infinite scrolling

You will implement infinite scrolling. Right now we fetch only 10 posts. Develop a mechanism that will automatically fetch 10 additional posts each time the user is less than 200px from the bottom of the list.

### Load comments

Add a functionality that will load and display comments for a specific post.

### Sorting

Add a functionality that will allow to sort posts alphabetically by their title.

### Testing

Cover reducers and sagas with unit tests. Add unit tests to the `List` component.

## Challenges you will face

- State management, building reusable components, asynchronous requests, requests chaining, writing unit tests, making it visually appealing

## Questions

- How does your solution perform?
- How does your solution scale?
- What would you improve next?

## Submission Requirements

Please provide the URL(s) to your application(s) repo(s) and provide a description about your approach within a README.md.
If you do not want to host the repo, you can also email us the files.
In any case, please provide the README.md.

## Additional optional questions

- What was one of the biggest coding challenges that you ever had?
- Please show and explain why it was so difficult
