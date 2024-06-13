import {useState} from 'react'
import './index.css'

const HomePage = () => {
  const [saveBtn, setSaveBtn] = useState(true)
  const [inputValue, setInputValue] = useState('')

  const onChangesol = event => {
    setInputValue(event.target.value)
  }

  const ButtonEl = () => {
    setSaveBtn(prevState => !prevState)
  }

  const ButtonText = saveBtn ? 'Save' : 'Edit'

  const ParagraphEl = saveBtn ? (
    <input type="text" value={inputValue} onChange={onChangesol} />
  ) : (
    <p>{inputValue}</p>
  )

  return (
    <div className="BgImgEl">
      <div className="whitePageEl">
        <h1 className="headingEl1">Editable Text Input</h1>
        <div className="rowArr1">
          {ParagraphEl}
          <div>
            <button onClick={ButtonEl} type="button">
              {ButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
