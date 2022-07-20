import React, { useRef ,useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import { saveAs } from 'file-saver'
import openCV from 'react-opencvjs'

var FileSaver = require('file-saver');
function Add () {
/*   openCV({
    onLoaded: () => console.log('open cv loaded'),
    onFailed: () => console.log('open cv failed to load'),
    version: '4.5.1'
  })
    const videoRef=useRef(null)
    const canvasRef=useRef(null)
    const canvasOutRef=useRef(null)
  const  videoShow=()=>{
    const video=videoRef.current
    const constrains = {
     video: true,
     audio: false
    }   
    navigator.mediaDevices.getUserMedia(constrains)
    .then(stream => {
    video.srcObject = stream;
    }) 
 }
  const uploadImage=()=>{
    // 展示相片的image标签
    // canvas会读取video中的内容，然后输出（有点类似于给video截图）
    const canvas = canvasRef.current
    const video=videoRef.current   
   // const context = canvas.getContext('2d')
   // context.drawImage(video, 0, 0,640,480)
    //console.log(video.height,video.width)
    //获取摄像头实时图像的截图
    let startTime = new Date().getTime();
    let timer=setInterval(
     function(){
      if(new Date().getTime() - startTime >= 12000){
        clearInterval(timer);
        return;
    }
       const context = canvas.getContext('2d')
       context.drawImage(video, 0, 0,640,480)
       saveImage()   
       imgProcess()
     },3000)
    }
  const videoClose=()=>{
    const video=videoRef.current
    const stream = video.srcObject;
    if ('getTracks' in stream) {
    const tracks = stream.getTracks();
    tracks.forEach(track => {
      track.stop();
    });
   }
 }
  const saveImage=()=>{
  const canvas = canvasRef.current
  canvas.toBlob(function(blob){
    saveAs(blob,"preety image.png")
  })
   }
  function imgProcess() {
       let imgElement =canvasRef.current 
       const canvasOutput=canvasOutRef.current
       let arr1=new Array() 
       let src = cv.imread(imgElement);
     
       //转成灰度图像
       //let G = new cv.Mat();
       //cv.cvtColor(src, G, cv.COLOR_RGBA2GRAY, 0);
     
       let rgbaPlanes = new cv.MatVector();
       cv.split(src, rgbaPlanes);
       let G = rgbaPlanes.get(1);//获取绿色通道
       let dst =new cv.Mat()
       let circles = new cv.Mat();
       let color = new cv.Scalar(255,0,0,255);
      // cv.HoughCircles(G, circles, cv.HOUGH_GRADIENT,1, 25, 40, 11,15, 20);
        cv.HoughCircles(G, circles, cv.HOUGH_GRADIENT,1, 25, 40, 11,20,40);
       for (let i = 0; i < circles.cols; ++i) {
         let x = circles.data32F[i * 3];
         let y = circles.data32F[i * 3 + 1];
         let radius = circles.data32F[i * 3 + 2];
         let center = new cv.Point(x, y);
         cv.circle(src, center, radius, color);
         let number=i
         cv.putText(src,number.toString(),center,cv.FONT_HERSHEY_COMPLEX,0.5,color)
         let rtroi=new cv.Rect(x-radius,y-radius,2*radius,2*radius)
         dst=G.roi(rtroi)
         arr1.push( cv.mean(dst))
        }
       console.log(arr1)
       cv.imshow(canvasOutput, src);
       src.delete(); dst.delete(); circles.delete();G.delete();rgbaPlanes.delete(); 
  }  
 */
    return (
      <div>         
          <div>
                {/* <button onClick={videoShow}style={{position:'absolute',marginLeft:'50px',marginTop:'10px'}}>获取摄像头图像</button>
                <button onClick={uploadImage} style={{position:'absolute',marginLeft:'250px',marginTop:'10px'}}>上传</button>
                <button onClick={saveImage} style={{position:'absolute',marginLeft:'400px',marginTop:'10px'}}>保存图片</button>
                <button onClick={videoClose} style={{position:'absolute',marginLeft:'600px',marginTop:'10px'}}>关闭摄像头</button> */}
                {/* <video ref={videoRef} autoPlay style={{position:'absolute',marginLeft:'50px',marginTop:'50px',width:'300px',height:'auto'}}/>
                <canvas ref={canvasRef} height="480" width="640" style={{position:'absolute',marginLeft:'400px',marginTop:'50px',width:'300px',height:'auto'}}/>
                <canvas ref={canvasOutRef} height="480" width="640" style={{position:'absolute',marginLeft:'750px',marginTop:'50px',width:'300px',height:'auto'}}/> */}             
          </div>   
                <Outlet/>
      </div>
    )
}
export default  Add