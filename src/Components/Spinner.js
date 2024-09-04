import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  const styles = {
    // spinnerContainer: {
    //   position: 'absolute',
    //   padding:'10px',
    //   top: '50%',
    //   left: '50%',
    //   right: '50%',
    //   transform: 'translate(-50%, -50%)',
    //   textAlign: 'center',
    //   backgroundColor: '#fff',
    //   borderRadius: 10,
    //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
    // },
    img: {
      width: 50,
      height: 50,
      margin: "auto",
      display: "block",
    },
  };

  return (
    <div>
      <img src={loading} alt="loading" style={styles.img} />
    </div>
  );
};

export default Spinner;
