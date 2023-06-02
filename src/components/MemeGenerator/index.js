import {Component} from 'react'

import {
  FirstDivContainer,
  SecondDivContainer,
  FormContainer,
  FormHeadingTitle,
  FormLabel,
  FormInputBox,
  SelectElement,
  EachOption,
  GenerateButton,
  ImageWithTextContainer,
  ImagePara,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    isActive: false,
    isObject: {},
  }

  onTopText = event => {
    this.setState({topText: event.target.value})
  }

  onBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onImageChange = event => {
    this.setState({imageUrl: event.target.value})
  }

  onFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSaveChanges = event => {
    event.preventDefault()
    const {isActive} = this.state
    this.setState(prev => ({
      isObject: {
        topText: prev.topText,
        bottomText: prev.bottomText,
        fontSize: prev.fontSize,
        imageUrl: prev.imageUrl,
      },
      isActive: true,
    }))
  }

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      fontSize,
      isActive,
      isObject,
    } = this.state
    console.log(imageUrl)
    return (
      <FirstDivContainer data-testid="meme">
        <SecondDivContainer>
          <FormContainer onSubmit={this.onSaveChanges}>
            <FormHeadingTitle>Meme Generator</FormHeadingTitle>
            <FormLabel htmlFor="imageurl">Image URL</FormLabel>
            <br />
            <FormInputBox
              id="imageurl"
              type="text"
              placeholder="Enter the Image Url"
              onChange={this.onImageChange}
              value={imageUrl}
            />
            <br />
            <FormLabel htmlFor="toptext">Top Text</FormLabel>
            <br />
            <FormInputBox
              id="toptext"
              type="text"
              placeholder="Enter the Top Text"
              onChange={this.onTopText}
              value={topText}
            />
            <br />
            <FormLabel htmlFor="bottomtext">Bottom Text</FormLabel>
            <br />
            <FormInputBox
              id="bottomtext"
              type="text"
              placeholder="Enter the Bottom Text"
              onChange={this.onBottomText}
              value={bottomText}
            />
            <br />
            <FormLabel htmlFor="fontsize">Font Size</FormLabel>
            <br />
            <SelectElement
              id="fontsize"
              value={fontSize}
              onChange={this.onFontSize}
            >
              {fontSizesOptionsList.map(eachOption => (
                <EachOption
                  value={eachOption.displayText}
                  key={eachOption.optionId}
                >
                  {eachOption.displayText}
                </EachOption>
              ))}
            </SelectElement>
            <br />
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
          {isActive ? (
            <ImageWithTextContainer eachSets={isObject}>
              <ImagePara eachSets={isObject}>{isObject.topText}</ImagePara>
              <ImagePara eachSets={isObject}>{isObject.bottomText}</ImagePara>
            </ImageWithTextContainer>
          ) : null}
        </SecondDivContainer>
      </FirstDivContainer>
    )
  }
}
export default MemeGenerator
