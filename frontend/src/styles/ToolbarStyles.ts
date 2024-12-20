import styled from 'styled-components';

export const ToolbarContainer = styled.div<{ x: number; y: number; visible: boolean }>`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 100;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  margin: 5px;
`;

