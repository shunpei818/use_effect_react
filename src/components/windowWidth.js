import React ,{ useState,useEffect } from "react";

export default function WindowWidth() {

    const [WindowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
          // イベントリスナーを追加して、ウィンドウサイズの変更を検知  
        window.addEventListener('resize', handleResize);
    }, []);    
    return(
        <>
        <div className="container">
            <p>ウィンドウの横幅: {WindowWidth}px</p>
        </div>
        </>
    )
}