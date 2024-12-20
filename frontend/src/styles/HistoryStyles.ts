import { FaEllipsisV, FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";


export const HistoryContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResumesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
`;

export const ResumeCard = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const ResumeTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ResumeEmail = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const ViewButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const EllipsisIcon = styled(FaEllipsisV)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  color: grey;
`;

export const DeleteIcon = styled(FaTrashAlt)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  color: red;
  display: none;
`;

export const ResumeCardContainer = styled.div`
  position: relative;

  &:hover ${DeleteIcon} {
    display: block;
  }
`;

