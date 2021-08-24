# Passion.io Coding Challenge

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
