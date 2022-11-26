import React,{useEffect, useState} from 'react';
import {db} from "../firebase/Config";
import {Button,Card,Grid,Container,Image} from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { map } from '@firebase/util';
import ModalComp from '../components/ModalComp';
import Spinner from '../components/Spinner';

const Home = () => {
const [newInfo, setNewInfo] = useState([]);
const [open, setOpen] = useState(false);
const [details, setDetails] = useState({});
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

  useEffect(()=>{
    setLoading(false);
    const unsub = onSnapshot(collection(db,"newInfo"),(snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc)=>{
        list.push({id:doc.id, ...doc.data()})
      });
      setNewInfo(list);
      setLoading(false)
    },
    (error)=>{
      console.log(error);
    }
    );

    return()=>{
      unsub();
    };
  }, []);
  if(loading){
    return <Spinner />;
  }
  const handleModal=(item)=>{
    setOpen(true);
    setDetails(item);
  };
  const handleDelete = async(id) =>{
    if(window.confirm("Are sure you to delete this record ? "));
    try {
      setOpen(false);
      await deleteDoc(doc(db, "newInfo", id));
      setDetails(newInfo.filter((details) => details.id !== id));
    } catch (error) {
      console.log(error)
    }
  };
  return (
      <Container>
        {/* <Card.Group> */}
          <Grid columns={3} stackable>
            {newInfo && newInfo.map((item)=>(
              <Grid.Column>
                <Card key={item.id}>
                  <Card.Content>
                    <Image
                    src={item.img}
                    size="medium"
                    style={{
                      height:"150px",
                      width:"150px",
                      borderRadious:"50%"
                    }}
                    />
                    <Card.Header style={{marginTop:"10px"}}>
                      {item.name}
                      </Card.Header>
                      <Card.Description>{item.info}</Card.Description>
                  </Card.Content> 
                  <Card.Content extra>
                      <div>
                        <Button 
                        color="green" 
                        onClick={() =>navigate(`/update/${item.id}`)}>
                          Update
                        </Button>
                        <Button 
                       color="blue" onClick={() => handleModal(item)}>
                        View
                       </Button>
                        {open && (
                          <ModalComp 
                          open={open}
                          setOpen={setOpen}
                          handleDelete={handleDelete}
                          {...details}
                          />
                        )}
                      </div>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid>
        {/* </Card.Group> */}
      </Container>
  )
}

export default Home