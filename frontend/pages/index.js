import { useEffect, useRef } from "react";
import lottie from 'lottie-web';
import Fade from 'react-reveal/Fade'
import { useRouter } from "next/router";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function intro() {
  
  const foodcontainer = useRef();
  const cameracontainer = useRef();
  const socialcontainer = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: foodcontainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require("../public/foodcontainer.json")
    })

    lottie.loadAnimation({
      container: cameracontainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require("../public/camera.json")
    })
    lottie.loadAnimation({
      container: socialcontainer.current,
      renderer: 'svg',
      lopp: true,
      autoplay: true,
      animationData: require("../public/socialcontainer.json")
    })
  })

  const router = useRouter();

  const moveLogin = () => {
      router.push({
          pathname: '/main',
      })
  }

  return ( 
    <>
      <div className="w-screen h-screen">
        <div className="w-full h-full flex flex-col">
          <div className="m-auto text-center">
          <div ref={foodcontainer}/>
            <Fade bottom> 
              <p className="text-xl font-bold">
                오직, 당신만을 위한 영양사
              </p>
              <p className="text-xl font-bold">
                <span className="text-main text-4xl">Yammm</span>을 만나보세요.
              </p>
            </Fade>
          </div>
          <div className="text-center">
            <ArrowDropDownIcon sx={{ fontSize: 60 }} className="bottom-0 text-main animate-bounce"/>
          </div>
        </div>


        <div className="w-full h-full flex flex-col bg-slate-50">
          <div className="m-auto text-center">
            <Fade bottom> 
              <div className="ml-8 text-left font-bold ">
                <p className="mb-2 text-main text-2xl">AI 분석</p>
                <p className="text-3xl">쉽고, 간편하게</p>
                <p className="text-3xl">사진 한 장으로</p>
              </div>
            </Fade>

            <div className ="m-auto w-96 h-96"ref={cameracontainer}/>
            <Fade bottom> 
              <p className="text-lg font-bold ">
                  촬영한 음식을 AI로 분석하여
              </p>
              <p className="text-lg font-bold">
                  음식명과 영양성분을 
              </p>
              <p className="text-lg font-bold">
                  사용자에게 제공합니다.
              </p>
            </Fade>
          </div>
          <div className="text-center">
            <ArrowDropDownIcon sx={{ fontSize: 60 }} className="bottom-0 text-main animate-bounce"/>
          </div>
        </div>

        <div className="w-full h-full flex flex-col">
          <div className="m-auto text-center">
            <Fade bottom> 
              <div className="ml-8 text-left font-bold ">
                <p className="mb-2 text-main text-2xl">기록 · 커뮤니티</p>
                <p className="text-3xl">그 날 무엇을 먹었는지</p>
                <p className="text-3xl">기록하고 , 나누어 보세요.</p>
              </div>
            </Fade>
            <div className ="m-auto w-96 h-96" ref={socialcontainer}/>
              
            <Fade bottom> 
              <p className="text-lg font-bold ">
                  먹은 음식 정보를 손 쉽게 기록하며,
              </p>
              <p className="text-lg font-bold">
                  이용자들과 커뮤니티를 통해 공유하며
              </p>
              <p className="text-lg font-bold">
                  우리 식탁의 퀄리티를 높여줍니다.
              </p>
            </Fade>
          </div>
          <div className="text-center">
            <ArrowDropDownIcon sx={{ fontSize: 60 }} className="bottom-0 text-main animate-bounce"/>
          </div>
        </div>

        <div className="w-full h-full flex bg-slate-50">
          <div className="m-auto text-center">
            <Fade bottom> 
              <div>
                <img className="w-96 h-96 mt-2" src='mainlogo.png' alt="mainlogo"/>
              </div>
            </Fade>

            <Fade bottom> 
              <p className="mt-4 text-2xl font-bold">
                지금 바로<br/> 
                <span className="text-main text-3xl">Yammm </span>
                을 시작해보세요.
              </p>
              <div className="">
                <button className="mt-8 w-auto p-4 text-white font-bold shadow-md rounded-3xl bg-main" onClick={moveLogin}>시작하기</button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </> 
  )
  }
