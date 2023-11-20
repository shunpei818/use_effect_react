import React,{useEffect} from "react";

const MountUnmountAlert = () => {
    useEffect(() => {
        // マウント時の処理
        alert("マウントされました");
        return () => {
            // アンマウント時の処理
            alert("アンマウントされました");
        };
    },[])
    return(
        <>
        <div className="container">
            <h1>マウント・アンマウントのサンプル</h1>
        </div>
        </>
    );
};

export default MountUnmountAlert;
