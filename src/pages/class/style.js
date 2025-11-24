import { styled } from 'styled-components';

const S = {};

S.ClassPage = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 20px;
`;

S.SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #111827;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

S.Announcement = styled.div`

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 12px;
    background: #ffffff;
    margin-bottom: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);

    a {
      color: #2563eb;
      text-decoration: none;
      font-weight: 600;
      font-size: 20px;

      &:hover {
        text-decoration: underline;
      }
    }

    small {
      margin-top: 0.5rem;
      font-size: 14px;
      color: #6b7280;
    }
  }
`;

S.StatusBadge = styled.span`
  display: inline-block;
  margin-top: 8px;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 500;
  color: white;
  background-color: ${({ $isActive }) => ($isActive ? '#6faa66ff' : '#eaa9a4')};
`;

S.AnnouncementInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 72px;
    height: 72px;
    border-radius: 6px;
    object-fit: cover;
  }

  .text {
    flex-grow: 1;

    strong {
      font-size: 16px;
      color: #111;
    }

    small {
      font-size: 13px;
      color: #666;
      display: block;
      margin-top: 4px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 56px;
      height: 56px;
    }
  }
`;

S.PlaceholderThumb = styled.div`
  width: 72px;
  height: 72px;
  background: #e5e7eb;
  border-radius: 6px;

  @media (max-width: 480px) {
    width: 56px;
    height: 56px;
  }
`;

S.LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  gap: 12px;
  color: #555;
`;

S.Spinner = styled.div`
  width: 36px;
  height: 36px;
  border: 4px solid #ddd;
  border-top: 4px solid #111;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;


S.DetailWrapper = styled.div`
  display:flex;
  flex-direction: column;
  // align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
`;

S.DetailTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
`;

S.DetailDate = styled.p`
  font-size: 19px;
  color: #6b7280;
  margin-bottom: 1.5rem;
`;

S.DetailContent = styled.div`
  font-size: 18px;
  line-height: 1.75;
  white-space: pre-wrap;
  color: #374151;
  margin-bottom: 2rem;
`;

S.ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 2rem;

  img {
    width: 100%;
    max-width: 300px;
    object-fit: cover;
    border-radius: 20px;

    @media (max-width: 600px) {
      flex: 1 1 100%; 
    }
  }
  
`;

S.ApplyButton = styled.button`
  padding: 12px 28px;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2563eb;
  }
`;

S.FormWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
`;

S.FormTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
  color: #111827;
`;

S.Section = styled.div`
  margin-bottom: 32px;
`;

S.SectionLabel = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
`;

S.DateList = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  padding: 4px 0;
  list-style: none;
  margin: 0;
`;

S.DateItem = styled.li`
  flex: 0 0 auto;
  width: 64px;
  height: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ $selected }) => ($selected ? '#111' : '#f3f4f6')};
  color: ${({ $selected }) => ($selected ? '#fff' : '#111')};
  font-weight: ${({ $selected }) => ($selected ? '600' : '400')};
  font-size: 14px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.3 : 1)};
  transition: background-color 0.2s;
`;

S.TimeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

S.TimeButton = styled.button`
  padding: 10px 16px;
  border-radius: 24px;
  background-color: ${({ $selected }) => ($selected ? '#111' : '#f1f5f9')};
  color: ${({ $selected }) => ($selected ? '#fff' : '#111')};
  border: none;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;


S.DateScrollWrapper = styled.div`
  margin-bottom: 30px;
`;

S.DateScrollTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 12px;
`;

S.DateScrollList = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

S.TodayMark = styled.span`
  display: block;
  font-size: 12px;
  color: #3b82f6;
  margin-top: 4px;
`;

S.FormGroup = styled.div`
  margin-bottom: 24px;

  label {
    display: block;
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
  }

  input, textarea, select {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    font-size: 14px;
    background: #f9fafb;
    box-sizing: border-box;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`;

S.TimeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

S.TimeItem = styled.button`
  padding: 10px 16px;
  border-radius: 24px;
  background-color: ${({ $selected }) => ($selected ? '#111' : '#f1f5f9')};
  color: ${({ $selected }) => ($selected ? '#fff' : '#111')};
  border: none;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

S.PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

S.PriceDisplay = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
`;

S.Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  font-size: 14px;
  box-sizing: border-box;
`;

S.Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  font-size: 14px;
  box-sizing: border-box;
`;

S.RadioGroup = styled.div`
 display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    color: #374151;
  }

  input[type="radio"] {
    margin: 0;
    width: 15px;
    height: 15px;
    cursor: pointer;
    position: relative;

    &:checked {
      background-color: #111827;
      border-color: #111827;
    }
  }
`;

S.SubmitButton = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 600;
  background-color: #111827;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #1f2937;
  }
`;


S.Button = styled.button`
  margin-top: 15px;
  width: 100%;
  padding: 14px 0;
  font-size: 16px;
  font-weight: 600;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #b0c8f5;
    cursor: not-allowed;
  }
`;

S.Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

S.ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  button {
    background-color: #111827;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #1f2937;
    }
  }
`;

S.ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #111827;
`;

S.ModalContentText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #374151;
`;


export default S;
