import React from 'react';
import './App.css';
import ImageUploadModal from './components/ImageUploadModal';
import ImageCropper from './imagecropper/ImageCropper';


function App() {
  return ( <div>
            <ImageCropper/>
           {/* <ImageUploadModal/> */}
          </div>
  );
}

export default App;
