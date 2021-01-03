import styled from 'styled-components';
import Colors from '../../resources/Colors';

export const Container = styled.div`
  padding: 5px;
  height: 100vh;
  width: 50px;
  background-color: ${Colors.background.black};
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  color: #fff;
`;
