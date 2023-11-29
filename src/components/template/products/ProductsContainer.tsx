import ImageContainer from './ImageContainer';
import AccommodationInfo from './AccommodationInfo';
import RoomCard from './RoomCard';
import ProductsFacility from './ProductsFacility';
import { useState, useEffect } from 'react';
import { Room } from '@/interfaces/interface';
import Review from './Review';
import { postAccomodation } from '@/api/service';
import Map from './Map';

interface ProductsContainerProps {
  accomodationID: string;
}
const ProductsContainer = ({ accomodationID }: ProductsContainerProps) => {
  const [roomData, setRoomData] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      if (accomodationID) {
        setIsLoading(true); // 데이터 로딩 시작
        try {
          const res = await postAccomodation(accomodationID);
          setRoomData(res.accomodationData.rooms);
        } catch (err) {
          console.log('에러');
        } finally {
          setIsLoading(false); // 데이터 로딩 완료
        }
      }
    };

    fetchData();
  }, [accomodationID]);

  if (isLoading) {
    return <div>Loading...</div>; // 데이터 로딩 중인 경우 로딩 표시
  }

  return (
    <>
      <ImageContainer />
      <AccommodationInfo />
      {roomData.map((room) => (
        <RoomCard
          key={room.room_id}
          roomData={room}
          accomodationID={accomodationID}
        />
      ))}
      <ProductsFacility />
      <Map lat={37.5649867} lng={126.985575} />
      <Review />
    </>
  );
};

export default ProductsContainer;
