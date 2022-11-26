import React,{useState,useEffect} from 'react';
import { Button, Form, Grid, Loader } from 'semantic-ui-react';
import { db, storage } from '../firebase/Config';
import { useParams,useNavigate } from 'react-router-dom';
import { addDoc, collection, getDoc,doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL,ref, uploadBytesResumable } from 'firebase/storage';
import { async } from '@firebase/util';


const InitialState={
  name:"",
  errors:"",
  email:"",
  info:"",
  contact:"",
}

const AddEditUser = () => {
  const [data, setData] = useState(InitialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let {id} = useParams();
  const navigate = useNavigate();

 //update exiting Reacord
  useEffect(()=>{
    id && getSingleUser();
  }, [id])
  const getSingleUser = async () =>{
    const docRef = doc(db,"newInfo", id);
    const snapshot = await getDoc(docRef);
    if(snapshot.exists()){
      setData({...snapshot.data()});
    }
  }

  useEffect(()=>{
        const uploadFile = ()=> {
          const name = new Date().getTime() + file.name;
          const storageRef = ref(storage, file.name);
          const UploadTask = uploadBytesResumable(storageRef,file);
          
          UploadTask.on("state_changed",(onSnapshot)=>{
              const progress = (onSnapshot.bytesTransferred/onSnapshot)*100;
              setProgress(progress);
              switch(onSnapshot){
                  case"paused":
                  console.log("Upload is paused");
                  break;
                  case "running":
                    console.log("Upload is running");
                  break;
                  default:
                  break;  
              }
              }, (error)=>{
                console.log(error)
              },
              ()=>{
                getDownloadURL(UploadTask.snapshot.ref).then((getDownloadURL)=>{
                  setData((prev)=>({...prev,img:getDownloadURL}));
                });
              }
          );
        };
        file && uploadFile();
         }, [file]);

  const {name,info,email,contact}= data;

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  };

  const validate =() =>{
    let errors ={};
    if(!name){
      errors.name = "Name is Required";
    }
    if(!email){
      errors.email = "Email is Required";
    }
    if(!info){
      errors.info = "Info is Required";
    }
    if(!contact){
      errors.contact = "Contact is Required";
    }
    return errors;
  };
  //Handle Submit
  const handleSubmit = async(e) =>{
    e.preventDefault();
    let errors = validate();
    if(Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    if(!id){
      try {
        await addDoc(collection(db,"newInfo"), {
          ...data,
          timestamp:serverTimestamp()
        });
      } catch (error) {
        console.log(error);
      }
    }else{
      //Update existing Data
      try {
        await updateDoc(doc(db,"newInfo",id), {
          ...data,
          timestamp:serverTimestamp()
        });
      } catch (error) {
        console.log(error);
      }

    }
   
    navigate("/");
  };
  return (
    <div>
      <Grid 
      centered 
      verticalAlign='middle'
       columns="3"
        style={{height:"80vh"}}
        >
          <Grid.Row>
            <Grid.Column textAlign='Center'>
              <div>
                {isSubmit ? (
                   <Loader active inline="centered" size='huge'/>
               ) :(
                <>
                 <h2>{id ? "Update": "Add New" }</h2>
                 <Form>
                  <Form.Input
                    label="name" 
                    error={errors.name ? {content: errors.name} : null}
                    placeholder="Enter name"
                     name="name"
                     onChange={handleChange}
                     value={name}
                    autoFocus
                    /> 
                    <Form.Input
                    label="email" 
                    error={
                      errors.email ? {content: errors.email} : null
                      }
                    placeholder="Enter Email"
                     name="email"
                     onChange={handleChange}
                     value={email}
                    />  
                    <Form.TextArea
                    label="Info" 
                    error={
                      errors.info ? {content: errors.info} : null
                      }
                    placeholder="Enter Info"
                     name="info"
                     onChange={handleChange}
                     value={info}
                    />  
                    <Form.Input
                    label="Contact" 
                    error={
                      errors.contact ? {content: errors.contact} : null
                      }
                    placeholder="Enter Contact"
                     name="contact"
                     onChange={handleChange}
                     value={contact}
                    />   
                    <Form.Input
                    label="Upload"
                    type="file" 
                     onChange={(e)=>setFile(e.target.files[0])}
                    />  
                    <Button primary type="submit"disabled={progress !== null && progress<100} onClick={handleSubmit}>
                      Submit
                      </Button>
                 </Form>
                </>  
              )}
              </div>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}

export default AddEditUser