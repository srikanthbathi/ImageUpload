import React from 'react';
import './App.css';
import ImageUploadModal from './components/ImageUploadModal';
import ImageCropper from './imagecropper/ImageCropper';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';



const store = createStore(rootReducer)

function App() {
  return (<Provider store={store}>
     <div >
            {/*<ImageCropper/>*/}
            <ImageUploadModal/>
           
    </div>
          </Provider>
  );
}

export default App;
