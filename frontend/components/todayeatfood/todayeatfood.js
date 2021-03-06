import Slider from "react-slick";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import Image from "next/image";

const settings = {
    className: " ",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    speed: 500
  };
const dummyFoodImage = ["/asset/떡볶이.png","/asset/삼겹살.png","/asset/삼겹살.png", "/asset/떡볶이.png"] 

const TodayEatFood = ({ todayFoodInfo }) => {

  
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  
  const routeTodayFoodEatDetail = () => {
    
    if (user==null) { 
      router.push({
        pathname: '/login',
        query : { "url" : "/todayfoodeatdetail" }
    })}else{
      router.push("/todayfoodeatdetail");
    }
  }
  
  return (
    <div className="">
      <div className="font-bold px-8 pt-6 pb-2 mt-6 text-xl animate-pulse  ">
          <p>오늘 먹은 음식</p>
      </div>
      <div className= "px-8 ml-5 mr-5 rounded-2xl" onClick={(e)=>{routeTodayFoodEatDetail()}}>
        <Slider {...settings}>
          { todayFoodInfo && todayFoodInfo.map((images) => (
            <div className="" key={images.id}>
              <img className="w-full rounded-t-3xl px-2 h-[155px]" layout="fill" src={`http://elice-kdt-ai-3rd-team15.koreacentral.cloudapp.azure.com${images.image}`}></img>
              <div className="px-2">
                <div className="w-auto h-20 pt-1 px-4 bg-main rounded-b-3xl break-all ">
                  <p className="font-bold text-lg pt-2 ">{images.food_name}</p>
                  <p className="text-lg h-1/2 break-all   p-1 w-full overflow-y-hidden">{images.memo}</p>
                </div>
              </div>
            </div>
            )) }
        </Slider>
      </div>
    </div>
  );
};

export default TodayEatFood;
