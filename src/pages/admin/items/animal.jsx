import React ,{useEffect,useRef} from 'react'
import { Outlet } from 'react-router-dom';


function Animal(){
  const cameraVideoRef = useRef(null);
  const cameraCanvasRef = useRef(null);
  function successFunc(mediaStream) {
    const video = cameraVideoRef.current;
    // const video = document.getElementById('cameraVideo') as HTMLVideoElement;
    // 旧的浏览器可能没有srcObject
    if ('srcObject' in video) {
      video.srcObject = mediaStream;
    }
    video.onloadedmetadata = () => {
      video.play();
    };
  }
  function errorFunc(err) {
    console.log(`${err.name}: ${err.message}`);
    // always check for errors at the end.
  }
    // 启动摄像头
  const openMedia = () => { // 打开摄像头
    const opt = {
      audio: false,
      video: {
        width: 1280,
        height: 720
      }
    };
    navigator.mediaDevices.getUserMedia(opt).then(successFunc).catch(errorFunc);
  };
  // 关闭摄像头
  const closeMedia = () => {
    // const video = document.getElementById('cameraVideo') as HTMLVideoElement;
    const video = cameraVideoRef.current;
    const stream = video.srcObject;
    if ('getTracks' in stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
    }
  };
  const getImg = () => { // 获取图片资源
    // const video = document.getElementById('cameraVideo') as HTMLVideoElement;
    // const canvas = document.getElementById('cameraCanvas') as HTMLCanvasElement;
    const video = cameraVideoRef.current;
    const canvas = cameraCanvasRef.current;
    if (canvas == null) {
      return;
    }
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight); // 把视频中的一帧在canvas画布里面绘制出来
    const imgStr = canvas.toDataURL(); // 将图片资源转成字符串
    const base64Img = imgStr.split(';base64,').pop(); // 将图片资源转成base64格式
    const imgData = {
      base64Img
    };
    //closeMedia(); // 获取到图片之后可以自动关闭摄像头
    return imgData;
  };
  const saveImg = () => { // electron项目保存到本地
    const data = getImg();
    document.getElementById('imgTag').src = data.base64Img
    // 网页保存图片的方法
    const saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    saveLink.href = data.base64Img;
    saveLink.download = './i.png';
    const event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    saveLink.dispatchEvent(event);
  }; 
  return <div>
    <video id="cameraVideo" ref={cameraVideoRef}/>
    <canvas  id="cameraCanvas" ref={cameraCanvasRef}/>
     <img id="imgTag" src="" alt="imgTag"/>
      <button onClick={openMedia} >打开摄像头</button>
      <button onClick={saveImg} >保存</button>
      <button onClick={closeMedia} >关闭摄像头</button>
      <Outlet/>
  </div>
}

export default Animal