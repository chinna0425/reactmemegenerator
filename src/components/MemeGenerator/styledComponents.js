import styled from 'styled-components'

export const FirstDivContainer = styled.div`
  background-color: '#ffffff';
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SecondDivContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  padding: 30px;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    padding: 10px;
  }
`

export const FormContainer = styled.form`
  width: 40%;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    order: 1;
    width: 100%;
    margin-right: 0px;
  }
`
export const FormHeadingTitle = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
`
export const FormLabel = styled.label`
  color: #7e858e;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
`
export const FormInputBox = styled.input`
  width: 95%;
  margin-top: 6px;
  margin-bottom: 6px;
  height: 35px;
  padding-left: 5px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid #5a7184;
  cursor: pointer;
  outline: none;
`
export const SelectElement = styled.select`
  width: 95%;
  margin-top: 6px;
  margin-bottom: 6px;
  height: 30px;
  padding-left: 5px;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid #5a7184;
  cursor: pointer;
  outline: none;
`
export const EachOption = styled.option`
  font-size: 15px;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
  border-radius: 6px;
  border-width: 0px;
  padding: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 7px;
  outline: none;
  cursor: pointer;
`
export const ImageWithTextContainer = styled.div`
  background-image: url(${props => props.eachSets.imageUrl});
  background-size: cover;
  width: 50%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  @media screen and (max-width: 576px) {
    width: 100%;
    height: 40vh;
  }
`
export const ImagePara = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: ${props => props.eachSets.fontSize}px;
  font-weight: 500;
  font-family: 'Roboto';
`
