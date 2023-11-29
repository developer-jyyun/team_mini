import { GuestCount } from '@/interfaces/interface';
import { atom } from 'recoil';
import { Order, OrderRequest } from '../interfaces/interface';
import { CardInfoValues } from '../components/template/payment/AddCreditCard';
import { DateRange } from '@/components/layout/modal/DatePicker';

export const allUserState = atom<string[]>({
  key: 'allUserState',
  default: [],
});

export const orderState = atom<OrderRequest>({
  key: 'orderState',
  default: {
    orders: [],
    payment: 'KAKAOPAY',
  },
});

// 숙소 상세 페이지에서 예약하기 누르면, 예약 정보를 담는 state
export const reservationState = atom<Order>({
  key: 'reservationState',
  default: {
    checkIn: '',
    checkOut: '',
    personNumber: 0,
    productId: 0,
  },
});

export const cardState = atom<CardInfoValues>({
  key: 'cardState',
  default: {
    cardNumber: { first: '', second: '', third: '', fourth: '' },
    cardPassword: '',
    cardExpirationMonth: '',
    cardExpirationYear: '',
    isSaveCard: false,
  },
});

export const dateRangeState = atom<DateRange>({
  key: 'dateRangeState',
  default: {
    startDate: null,
    endDate: null,
  },
});

// 인원 증감 버튼 누를 시, 변경된 개별 인원수 담는 state
// totals: 게스트 모달에서 저장 버튼 클릭 시, 총 인원수 담는 state
export const guestCountState = atom<GuestCount>({
  key: 'guestCountState',
  default: {
    adults: 0,
    children: 0,
    infants: 0,
    totals: 0,
  },
});
