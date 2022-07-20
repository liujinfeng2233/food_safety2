import React, { useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import openCV from 'react-opencvjs'




function Micro () { 
/*   openCV({
    onLoaded: () => console.log('open cv loaded'),
    onFailed: () => console.log('open cv failed to load'),
    version: '4.5.1'
  })
  useEffect(()=>{
     let imgElement = document.getElementById('imageSrc');
     let inputElement = document.getElementById('fileInput');
     inputElement.addEventListener('change', (e) => {
     imgElement.src = URL.createObjectURL(e.target.files[0]);
     }, false);
     imgElement.onload = function() {
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
       cv.HoughCircles(G, circles, cv.HOUGH_GRADIENT,1, 25, 40, 11,15, 20);
     
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
       cv.imshow('canvasOutput', src);
       src.delete(); dst.delete(); circles.delete();G.delete();rgbaPlanes.delete();      
     }  
  })  */
  
    return (
      <div>
      <div className="inputoutput">
      <img id="imageSrc" alt="No Image" />
      <div className="caption"> Initial Image <input type="file" id="fileInput" name="file" /></div>
      </div>
      <div className="inputoutput">
      <canvas id="canvasOutput" ></canvas>
      <canvas id="canvasOutput2" ></canvas>
      </div>
          <Outlet/>
      </div>
    )  
}
export default Micro