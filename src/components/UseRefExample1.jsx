import {useRef} from 'react'

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();
  
  const onSubmit = e => {
    e.preventDefault()
    inputRef.current.value = 'Hello'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        <input 
        type="text"
        ref={inputRef}
        id="name" 
        className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">
          Submit
          </button>
          <p onclick={() => inputRef.current.focus()} ref={paraRef}>
            click me
          </p>
      </label>
    </form>
  )
}

export default UseRefExample1