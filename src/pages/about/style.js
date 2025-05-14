import { styled } from 'styled-components'
const S = {};

S.Intro = styled.div`
    // margin-top: 100px;
    // font-size: 14px;
    // line-height: 25px;
    // margin-left: 15px;
    // margin-right: 15px;
    margin: 100px auto 0 auto;
    padding: 0 20px;
    font-size: 16px;
    line-height: 16px;
    max-width: 780px; 
    text-align: left;

    P {
        margin-bottom: 5px;
    }
`

S.MainImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

    @media (max-width: 600px) {
        margin-top: 24px;
    }
`

S.Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 0 auto;
`;


export default S;
