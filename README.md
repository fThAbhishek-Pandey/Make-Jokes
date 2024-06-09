## Makes A Jokes Project

#### HTML Structure

- div.container
  - button.btn
  - p.result(dummy text)

#### External Data

- the main idea the same, just external data

#### What is an API?

[What is an API?](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)

#### Docs

- important
- search engine
- test in the browser

#### Makes A Jokes Docs

- [hindi Jokes](https://hindi-jokes-api.onrender.com)

- random joke
-   https://hindi-jokes-api.onrender.com
- Special thanks 
- [Amit Sharma](https://github.com/amitSharma7741)

#### Select Elements

- select btn, result
- check if both elements selected
- listen for click events

#### FetchMakeJoke Function

- create async function
- setup fetch
- set result.textContent = joke

```js
const fetchMakeJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'learning app',
    },
  });

  const data = await response.json();
  result.textContent = data.joke;
};
```

#### Loading

- set result equal to - 'Loading...'

#### Error Handling

- try/catch block
- set result equal to - 'There was an error..'

#### Check Status

- Fetch - only throws an error if cannot resolve
- Error response still a response
- check response.ok property
- throw new Error('Whoops!')
