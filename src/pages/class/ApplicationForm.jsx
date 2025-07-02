import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import S from './style';

function ApplicationForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const announcementId = queryParams.get('announcementId');
  
  const [disabledSlots, setDisabledSlots] = useState(new Set());
  const [applicantName, setApplicantName] = useState('');
  const [mobile, setMobile] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [totalApplicants, setTotalApplicants] = useState(1);
  const [note, setNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [pricePerPerson, setPricePerPerson] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false); // 결제 완료 여부
  const [showBankTransferModal, setShowBankTransferModal] = useState(false); // 계좌이체 팝업 표시 여부
  const [showQRCodeModal, setShowQRCodeModal] = useState(false); // 카카오페이 QR 코드 팝업 표시 여부
  const [qrCodeUrl, setQrCodeUrl] = useState('https://qr.kakaopay.com/FWAdYm1pO'); // 카카오페이 결제 페이지 URL
  
  // 계좌 정보
  const bankDetails = {
    accountNumber: '3333-18-8222019',
    accountHolder: '류재은',
  };

  useEffect(() => {
    if (!announcementId) return;
  
    axios.get(`/api/admin/announcements/${announcementId}`)
      .then(async res => {
        const data = res.data;
        const start = new Date(data.startDate);
        const end = new Date(data.endDate);
        const dates = [];
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          dates.push(new Date(d));
        }
        setAvailableDates(dates);
        setAvailableTimes(data.availableTimes?.split(',') || []);
        setPricePerPerson(data.price || 0);
  
        const reservationRes = await axios.get(`/api/applications/reserved-slots?announcementId=${announcementId}`);
        const reserved = reservationRes.data || [];
        const disabled = new Set(reserved.map(r => `${r.date}|${r.time}`));
        setDisabledSlots(disabled);
      })
      .catch(() => {
        alert('공지 정보를 불러오지 못했습니다.');
        navigate('/');
      });
  }, [announcementId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!applicantName.trim()) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!mobile.trim()) {
      alert('전화번호를 입력해주세요.');
      return;
    }
    
    
    if (!announcementId || !preferredDate || !preferredTime || !paymentMethod) return;

    if (!isPaid) {
      alert('결제가 완료되지 않았습니다. 결제를 먼저 진행해주세요.');
      return;
    }

    const payload = {
      announcementId: parseInt(announcementId),
      applicantName,
      mobile,
      preferredDate,
      preferredTime,
      totalApplicants,
      note,
      status: '대기',
      paymentMethod,
      isPaid: true,
    };

    try {
      await axios.post('http://localhost:8080/api/applications', payload);
      alert('신청이 완료되었습니다. 결제가 확인되는 즉시 예약이 확정됩니다.');
      navigate('/');
    } catch {
      alert('신청 중 문제가 발생했습니다. 다시 시도해주세요.');
    }
    console.log("전송되는 payload:", payload);
  };

  // 카카오페이 결제 진행 버튼 클릭 시
  const handleKakaoPaySubmit = async () => {
    console.log("카카오페이 결제 진행 클릭됨");
    try {
      setIsLoading(true);
      const payload = {
        orderId: `order_${new Date().getTime()}`,
        totalAmount: pricePerPerson * totalApplicants,
      };

      const response = await axios.post('/api/payments/kakaopay/ready', payload);

      if (response.status === 200) {
        const { redirectUrl } = response.data;
        setQrCodeUrl(redirectUrl);
        setShowQRCodeModal(true);
      }
    } catch (error) {
      console.error("카카오페이 결제 오류:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 계좌이체 진행 버튼 클릭 시
  const handleBankTransfer = () => {
    console.log("계좌이체 진행 버튼 클릭됨");
    setShowBankTransferModal(true);
  };

  // 계좌이체 완료 버튼 클릭 시
  const handleBankTransferComplete = () => {
    setIsPaid(true);
    setShowBankTransferModal(false);
    alert('감사합니다, 예약을 진행 해 주세요');
  };

  // 완료 버튼 클릭 시
  const handleComplete = () => {
    setIsPaid(true);
    setShowQRCodeModal(false);
    alert('감사합니다, 예약을 진행 해 주세요');
  };

  return (
    <S.FormWrapper>
      <S.FormTitle>수업 신청</S.FormTitle>

      <S.Section>
        <S.SectionLabel>날짜 선택</S.SectionLabel>
        <S.DateList>
          {availableDates.map(date => {
            const dateStr = dayjs(date).format('YYYY-MM-DD');
            const isToday = dayjs().isSame(date, 'day');
            const year = dayjs(date).format('YYYY년'); 
            const month = dayjs(date).format('MM월'); 
            const dayOfWeek = dayjs(date).format('dd');
            return (
              <S.DateItem
                key={dateStr}
                $selected={preferredDate === dateStr}
                onClick={() => setPreferredDate(dateStr)}>
                <div>{year}</div>  
                <div>{month} {dayjs(date).date()}일</div>
                <small>{dayOfWeek}</small>
                {isToday && <div style={{ fontSize: '10px', color: '#3b82f6' }}>오늘</div>}
              </S.DateItem>
            );
          })}
        </S.DateList>
      </S.Section>

      <form onSubmit={handleSubmit}>
        <S.Section>
          <S.SectionLabel>시간 선택</S.SectionLabel>
          <S.TimeGrid>
            {availableTimes.map(time => {
              const key = `${preferredDate}|${time}`;
              const isDisabled = disabledSlots.has(key);

              return (
                <S.TimeButton
                  key={time}
                  $selected={preferredTime === time}
                  disabled={isDisabled}
                  onClick={() => {
                    if (!isDisabled) setPreferredTime(time);
                  }}
                >
                  {time}
                </S.TimeButton>
              );
            })}
          </S.TimeGrid>
        </S.Section>

        <S.FormGroup>
          <label>이름</label>
          <S.Input type="text" value={applicantName} onChange={e => setApplicantName(e.target.value)} required />
        </S.FormGroup>

        <S.FormGroup>
          <label>전화번호</label>
          <S.Input type="tel" value={mobile} onChange={e => setMobile(e.target.value)} required />
        </S.FormGroup>

        <S.FormGroup>
          <label>신청 인원</label>
          <S.Input type="number" min="1" value={totalApplicants} onChange={e => setTotalApplicants(Math.max(1, parseInt(e.target.value || '1')))} />
          <S.PriceDisplay>총 금액: {pricePerPerson * totalApplicants}원</S.PriceDisplay>
        </S.FormGroup>

        <S.FormGroup>
          <label>요청사항 (선택)</label>
          <S.Textarea value={note} onChange={e => setNote(e.target.value)} />
        </S.FormGroup>

        <S.FormGroup>
          <label>결제 수단</label>
          <S.RadioGroup>
            <label>
              <input
                type="radio"
                value="카카오페이"
                checked={paymentMethod === '카카오페이'}
                onChange={() => setPaymentMethod('카카오페이')}
              /> 카카오페이
            </label>
            <label>
              <input
                type="radio"
                value="계좌이체"
                checked={paymentMethod === '계좌이체'}
                onChange={() => setPaymentMethod('계좌이체')}
              /> 계좌이체
            </label>
          </S.RadioGroup>
        </S.FormGroup>

        <S.SubmitButton type="submit" disabled={isLoading}>예약하기</S.SubmitButton>
      </form>

      {/* 카카오페이 결제 진행 버튼 */}
      {paymentMethod === '카카오페이' && (
        <S.Button onClick={handleKakaoPaySubmit}>카카오페이 결제 진행</S.Button>
      )}

      {/* 계좌이체 진행 버튼 */}
      {paymentMethod === '계좌이체' && (
        <S.Button onClick={handleBankTransfer}>계좌이체 진행</S.Button>
      )}

      {/* 카카오페이 QR 코드 팝업 */}
      {showQRCodeModal && (
        <S.Modal $visible={showQRCodeModal ? "true" : "false"}>
          <S.ModalContent>
            <S.ModalTitle>결제 페이지</S.ModalTitle>
            <p>아래 QR 코드를 스캔하여 결제를 진행해주세요.</p>
            <img src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${qrCodeUrl}`} alt="QR Code" />
            <S.Button onClick={handleComplete}>완료</S.Button>
          </S.ModalContent>
        </S.Modal>
      )}

      {/* 계좌이체 팝업 */}
      {showBankTransferModal && (
        <S.Modal $visible={showBankTransferModal ? "true" : "false"}>
          <S.ModalContent>
            <S.ModalTitle>계좌 정보</S.ModalTitle>
            <p>계좌번호: {bankDetails.accountNumber}</p>
            <p>예금주: {bankDetails.accountHolder}</p>
            <S.Button onClick={handleBankTransferComplete}>이체 완료</S.Button>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.FormWrapper>
  );
}

export default ApplicationForm;
