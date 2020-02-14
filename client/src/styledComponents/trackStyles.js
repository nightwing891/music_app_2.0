import styled from 'styled-components';

export const TrackTable = styled.table`
  background-color: #191A1F;
  width: 100%;
  border-collapse: collapse;
`
  
  export const TrackTh = styled.th`
  color: #42474F;
  text-transform: uppercase;
  text-align: left;
  font-size: 10px
  `
  
  export const TrackTr = styled.tr`
  height: 60px;
  padding: 15px;
  background-color: #1C1D23;
  margin-bottom: 5px;
  font-size: 12px;
  border-left: 10px solid #191A1F;
  border-right: 10px solid #191A1F;
  `
  
  export const TrackHeadTr = styled.tr`
  height: 100px;
  padding-top: 15px;
  padding-bottom: 5px;
  border-left: 10px solid #191A1F;
  border-right: 10px solid #191A1F;
  `
  
export const TrackTd = styled.td`
  border-right: none;
  border-left: none;
  border-bottom: 10px solid #191A1F;
  border-top: 10px solid #191A1F;
  padding: 0px;
  color: #4C565F;
`

export const TrackTitleTd = styled.td`
  border-right: none;
  border-left: none;
  border-bottom: 10px solid #191A1F;
  border-top: 10px solid #191A1F;
  padding: 0px;
`

export const TrackImg = styled.img`
  width: 50px;
  margin: 10px auto;
`

export const TrackImgTd = styled.td`
  border-right:none;
  border-left:none;
  border-bottom: 5px solid #191A1F;
  border-top: 5px solid #191A1F;
  display: flex;
  justify-content: center;
  padding-bottom: 1px;
`