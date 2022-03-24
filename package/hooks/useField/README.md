# useField

A hook for handle your inputs

## Usage/Examples

```javascript
import {useField} from '@color-ui/useField'

function Form() {
    const username = useField({type: 'text'})
    const password = useField({type: 'text'})

  <form>
    <input
    {...username}
    name='username'
    placeholder='username'
     />
    <input
    {...password}
    name='password'
    placeholder='password'
     />
  </form>
}
```
