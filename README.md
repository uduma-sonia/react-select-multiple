# React-select-several

<div align="center">
  <br />
  <br />
  <h3 align="center">Customizable select and input field for React that enables users to select and input multiple options</h3>

  <p align="center">
  <a href="https://npm.im/react-select-several"><img src="https://img.shields.io/npm/v/react-select-several.svg?color=brightgreen&style=flat-square" alt="Package version."></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PR(s)-welcome-brightgreen.svg?style=flat-square" alt="Make a pull request."></a>
  </p>
</div>

<br />

## ⚡️ Features

- 100% responsive
- 100% customizable
- Supports any css unit
- No third party dependency
- TypeScript ready
- Multi select option
- Multi input option

<br/>
<br/>

## Installation

```
$ npm i react-select-several

```

<br/>
<br/>

## Basic Usage

For select field

```jsx
//Import react-select-several component
import { SelectMultiple } from 'react-select-several'

export const App = () => {
  const onChange = (values: string[]) => {
    console.log(values)
  }

  return (
    <>
      <SelectMultiple onChange={onChange}>
        <option>HTML</option>
        <option>CSS</option>
        <option>JavaScript</option>
      </SelectMultiple>
    </>
  )
}
```

For input field

```jsx
//Import react-select-several component
import { InputMultiple } from 'react-select-several'

export const App = () => {
  const onChange = (values: string[]) => {
    console.log(values)
  }

  return (
    <>
      <InputMultiple onChange={onChange} />
    </>
  )
}
```

<br/>
<br/>

## Props

React-select-several has two main components, a select field and input field. It is majorly used to select or input multiple options. Here is a table of the available props that can be passed down.

### General props

| Props              | Description                                                                    | Type                      | Default |
| ------------------ | ------------------------------------------------------------------------------ | ------------------------- | ------- |
| name               | Set the name of the input or select field                                      | _`string`_                |
| id                 | Set the name of the input or select field                                      | _`string`_                |
| onChange           | Function to get the values                                                     | _`(e: string[]) => void`_ |
| maxNumber          | Sets the maximum number for input or selection                                 | _`number`_                |
| tagIcon            | Custom Icon for the tag deletion, (react-icons can be used)                    | _`React.ReactElement`_    |
| placeholder        | Sets the placeholder for the input or select field                             | _`string`_                |
| required           | Props to ensure the field is required                                          | _`boolean`_               | false   |
| disable            | Props for disabling the field                                                  | _`boolean`_               | false   |
| autoFocus          | Props that lets you specify if the field should have focus when the page loads | _`boolean`_               | false   |
| autoComplete       | Props providing a hint for a user agent's autocomplete feature                 | _`string`_                |
| tagContainerClass  | Custom classname for the parent container of all tags                          | _`string`_                |
| tagBackgroundColor | Custom background color for tags                                               | _`string`_                |
| tagTextColor       | Custom color for tag text                                                      | _`string`_                |

<br/>
<br/>

### Select props

| Props              | Description                            | Type       |
| ------------------ | -------------------------------------- | ---------- |
| children           | A list of options for the select field |
| selectTagClass     | Custom class for tags                  | _`string`_ |
| selectTagTextClass | Custom class for tags texts            | _`string`_ |
| selectTagIconClass | Custom class for tags icons            | _`string`_ |
| selectClass        | Custom class for select field          | _`string`_ |

<br/>
<br/>

### Input props

| Props             | Description                  | Type       |
| ----------------- | ---------------------------- | ---------- |
| inputTagClass     | Custom class for tags        | _`string`_ |
| inputTagTextClass | Custom class for tags texts  | _`string`_ |
| inputTagIconClass | Custom class for tags icons  | _`string`_ |
| inputClass        | Custom class for input field | _`string`_ |

## Contribution

React-select-several is an open-source project and contributions are welcome.
Got ideas on how to make this better? Open an issue!

<br />
<br />

## ⚖️ Licence

MIT (c) [Sonia Uduma](https://sohnya.netlify.app/).
