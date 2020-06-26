import firebase from 'firebase/app';
const { firebaseStorage } = require("./firebase/firebase.config")
const ARTICLE_IMAGES_BASE_PATH = "article/images"

const fileUploadTaskEvents = {
    STATE_CHANGED: "state_changed"
}

export const uploadFileToFirebaseStorage = async (file, onProgressChange) => {
    if (!firebaseStorage){
        return null
    }
    const storageRef = firebaseStorage.ref();
    const filePathRef = storageRef.child(`${ARTICLE_IMAGES_BASE_PATH}/${file.name}`);
    const fileUploadTask = filePathRef.put(file)
    return new Promise((resolve, reject)=>{
        fileUploadTask.on(fileUploadTaskEvents.STATE_CHANGED, snapshot=>{
            const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            onProgressChange(progressPercent)
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
              }
        }, error=>{
            console.log("error", error)
           return reject(error)
        }, ()=>{
            console.log("upload completed")
            fileUploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
                console.log("downloadURI", downloadURL)
               return  resolve(downloadURL)
              });
        })
    })
}