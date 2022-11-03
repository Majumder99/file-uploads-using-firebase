import "./App.css";
import { useState, useEffect } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload == null) {
      return;
    }
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // console.log(res);
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      console.log(res);
      res.items.forEach((item) =>
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        })
      );
    });
  }, []);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          setImageUpload(e.target.files);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
      <div className="flexClass">
        {imageList.map((m) => (
          <div key={v4()}>
            <img src={m} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
