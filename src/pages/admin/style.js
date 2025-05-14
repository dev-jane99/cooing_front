import { styled } from 'styled-components';

const S = {};

// admin layout style

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'League Spartan', sans-serif;
  background-color: #000000;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
    * {
        font-size: inherit;
    }
`;


S.Navbar = styled.header`
  background-color: #ffffff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 15px 20px;
  }
`;

S.HeaderTitle = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

S.NavMenu = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 750px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

S.NavItem = styled.div`
  a {
    color: ${(props) => (props.$active ? '#495057' : '#adb5bd')};
    font-weight: ${(props) => (props.$active ? '700' : '500')};
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 8px;

    &:hover {
      background-color: #212529;
      color: #fff;
    }
  }
`;

S.Content = styled.main`
  flex: 1;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

S.FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 24px;
  background-color: #1a1a1a;
  color: #f1f1f1;
  width: 100%;
  box-sizing: border-box; 
  margin: 40px auto;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
`;


S.FormTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

// new announcement /application detail

S.FormGroup = styled.div`
  width: 100%;
  margin-bottom: 28px;

  label {
    display: block;
    font-size: 15px;
    font-weight: 600;
    color: #e0e0e0;
    margin-bottom: 8px;
    padding-left: 2px;
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 14px 16px;
    font-size: 15px;
    color: #fff;
    background-color: #2a2a2a;
    border: 1px solid #444;
    border-radius: 10px;
    outline: none;
    transition: border 0.2s;

    &:focus {
      border-color: #888;
    }

  }
     p{
      background-color: #111;
      height: 30px;
      padding-top: 14px;
      padding-left: 10px;
      border-radius: 10px;
      font-size: 15px;
    }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  @media (max-width: 480px) {
    label {
      font-size: 14px;
    }

    input,
    textarea {
      font-size: 14px;
      padding: 12px;
    }
  }
`;


S.ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 30px;
`;

S.CancelButton = styled.button`
  background-color: #444;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;



S.CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input {
    margin-right: 8px;
  }

  label {
    font-weight: 500;
    color: #adb5bd;
  }
`;

S.FileInput = styled.input`
  margin-top: 8px;
`;

S.SubmitButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #e9ecef;
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #444;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;


// announcement list style

S.TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; 
`;

S.Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; 

  th, td {
    padding: 12px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  th:nth-child(2),
  td:nth-child(2) {
    max-width: 120px;
  }

  th:nth-child(3),
  td:nth-child(3) {
    max-width: 80px;
  }

  th:nth-child(4),
  td:nth-child(4) {
    max-width: 100px;
  }

  th:nth-child(5),
  td:nth-child(5),
  th:nth-child(6),
  td:nth-child(6) {
    max-width: 80px;
  }

  th:nth-child(7),
  td:nth-child(7) {
    max-width: 60px;
  }

  th:nth-child(8),
  td:nth-child(8),
  th:nth-child(9),
  td:nth-child(9) {
    max-width: 80px;
  }

  th:last-child,
  td:last-child {
    min-width: 60px;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    th, td {
      font-size: 12px;
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    th, td {
      font-size: 10px;
      padding: 4px;
    }

    td:nth-child(n+7):nth-child(-n+9) { 
      display: none; 
    }

    th:nth-child(n+7):nth-child(-n+9) {
      display: none;
    }

    button {
      font-size: 10px;
      padding: 4px 6px;
    }
  }
`;


S.ListWrapper = styled.div`
  padding: 40px 20px;
  background-color: #000;
  min-height: 100vh;
  overflow-x: auto;
`;



S.Title = styled.h2`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;


S.ButtonBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
`;

S.HoverAction = styled.div`
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  gap: 8px;

  button {
    background-color: #6b7280;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #4b5563;
    }
  }
`;


S.AnnouncementList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

S.AnnouncementItem = styled.li`
  background-color: #111;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #333;
  color: #fff;

  h3 {
    font-size: 20px;
    margin: 0;
  }

  p {
    font-size: 16px;
    color: #aaa;
    margin-top: 8px;
  }

  &:hover {
    background-color: #222;
    transition: background-color 0.2s ease;
  }
`;

S.ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

S.SelectCheckbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

S.DeleteButton = styled.button`
  background-color: #000;
  color: white;
  border: 1px solid #fff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  min-width: 52px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;

  &:hover {
    background-color: gray;
  }

  @media (max-width: 480px) {
    display: block;
    width: 100%;
    margin-bottom: 6px;
  }
`;

S.EditButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  min-width: 52px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;

  &:hover {
    background-color: gray;
    color: white;
  }

  @media (max-width: 480px) {
    display: block;
    width: 100%;
    margin-left: 0;
  }
`;

//announcement detail

S.EmptyMessage = styled.p`
  color: #777;
  font-size: 18px;
  text-align: center;
  margin-top: 40px;
`;

S.ImagePreviewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

S.PreviewItem = styled.div`
  position: relative;
  width: 120px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  button {
    position: absolute;
    top: -6px;
    right: -6px;
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    line-height: 1;
  }
`;
S.AnnouncementInfoBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #444;
  background-color: #111;
  border-radius: 12px;
  color: #f1f1f1;
  margin-bottom: 30px;
  overflow-x: auto;
  word-break: break-word;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #fff;
  }

  .detail {
    font-size: 15px;
    line-height: 1.6;
    white-space: pre-wrap;
    max-height: 200px;
    overflow-y: auto;
    color: #ccc;
  }

  @media (max-width: 480px) {
    padding: 16px;

    h3 {
      font-size: 18px;
    }

    .detail {
      font-size: 14px;
    }
  }
`;

S.Top = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`

S.SearchBox = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #666;
  color: #fff;
  background: #111;
  outline: none;
  height: 20px;
`

export default S;
