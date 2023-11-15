import './App.css';
import {useState, useEffect} from "react";
import Card from './components/Card';
import ContainerCard from './components/ContainerCard';

const givenData =     {
  "tickets": [
      {
          "id": "CAM-1",
          "title": "Update User Profile Page UI",
          "tag": [
              "Feature request"
          ],
          "userId": "usr-1",
          "status": "Todo",
          "priority": 4
      },
      {
          "id": "CAM-2",
          "title": "Add Multi-Language Support - Enable multi-language support within the application.",
          "tag": [
              "Feature Request"
          ],
          "userId": "usr-2",
          "status": "In progress",
          "priority": 3
      },
      {
          "id": "CAM-3",
          "title": "Optimize Database Queries for Performance",
          "tag": [
              "Feature Request"
          ],
          "userId": "usr-2",
          "status": "In progress",
          "priority": 1
      },
      {
          "id": "CAM-4",
          "title": "Implement Email Notification System",
          "tag": [
              "Feature Request"
          ],
          "userId": "usr-1",
          "status": "In progress",
          "priority": 3
      },
      {
          "id": "CAM-5",
          "title": "Enhance Search Functionality",
          "tag": [
              "Feature Request"
          ],
          "userId": "usr-5",
          "status": "In progress",
          "priority": 0
      },
      {
          "id": "CAM-6",
          "title": "Third-Party Payment Gateway",
          "tag": [
              "Feature Request"
          ],
          "userId": "usr-2",
          "status": "Todo",
          "priority": 1
      },
      {
          "id": "CAM-7",
          "title": "Create Onboarding Tutorial for New Users",
          "tag": [
              "Feature Request"
          ],
          "userId": "usr-1",
          "status": "Backlog",
          "priority": 2
      },
      {
          "id": "CAM-8",
          "title": "Implement Role-Based Access Control (RBAC)",
          "tag": [
              "Feature Request"
          ],
          "userId": "usr-3",
          "status": "In progress",
          "priority": 3
      },
      {
          "id": "CAM-9",
          "title": "Upgrade Server Infrastructure",
          "tag": [
              "Feature Request"
          ],
          "userId": "usr-5",
          "status": "Todo",
          "priority": 2
      },
      {
          "id": "CAM-10",
          "title": "Conduct Security Vulnerability Assessment",
          "tag": [
              "Feature Request"
          ],
          "userId": "usr-4",
          "status": "Backlog",
          "priority": 1
      }
  ],
  "users": [
      {
          "id": "usr-1",
          "name": "Anoop sharma",
          "available": false
      },
      {
          "id": "usr-2",
          "name": "Yogesh",
          "available": true
      },
      {
          "id": "usr-3",
          "name": "Shankar Kumar",
          "available": true
      },
      {
          "id": "usr-4",
          "name": "Ramesh",
          "available": true
      },
      {
          "id": "usr-5",
          "name": "Suresh",
          "available": true
      }
  ]
}

function App() {
  const url = 'https://api.quicksell.co/v1/internal/frontend-assignment';
  const [data, setData] = useState(givenData);
  const [ticketData, setTicketData] = useState([]);
  const [UserData, setUserData] = useState([]);
  const [sortType, setSortType] = useState("");
  const [index, setIndex] = useState(0);




  // const fetchUrl = () =>{
  //   return fetch(url)
  //   .then((res) => res.json())
  //   .then((d) => setData(d))
  // }

  // function sortResult(prop){
  //   ticketData.sort((a,b) => {
  //     if(prop === "title"){
  //       const t1 = a[prop].toUpperCase();
  //       const t2 = b[prop].toUpperCase();
  //       if(t1 < t2) return -1;
  //     } else if(prop === "priority"){
  //       if(a[prop]<b[prop]) return -1;
  //     }
  //     return 0;
  //   });    
  //   console.log(ticketData);
  // }

  const sortedTickets = ticketData.sort((a,b) => {
    if(sortType === "title"){
      const t1 = a[sortType].toUpperCase();
      const t2 = b[sortType].toUpperCase();
      if(t1 < t2) return -1;
    } else if(sortType === "priority"){
      if(a[sortType]<b[sortType]) return -1;
    }
    return 0;
  });    

  const firstData = sortedTickets.filter(
    item => {
      if(index === 0) return(item.status === "Backlog")
      else if(index === 1) return(item.userId === "usr-1")
      else if(index === 2) return(item.priority === 0)
    }
  )

  const secondData = sortedTickets.filter(
    item => {
      if(index === 0) return(item.status === "Todo")
      else if(index === 1) return(item.userId === "usr-2")
      else if(index === 2) return(item.priority === 4)
    }
  )

  const thirdData = sortedTickets.filter(
    item => {
      if(index === 0) return(item.status === "In progress")
      else if(index === 1) return(item.userId === "usr-3")
      else if(index === 2) return(item.priority === 3)
    }
  )

  const fourthData = sortedTickets.filter(
    item => {
      if(index === 0) return(item.status === "Done")
      else if(index === 1) return(item.userId === "usr-4")
      else if(index === 2) return(item.priority === 2)
    }
  )

  const fifthData = sortedTickets.filter(
    item => {
      if(index === 0) return(item.status === "Canceled")
      else if(index === 1) return(item.userId === "usr-5")
      else if(index === 2) return(item.priority === 1)
    }
  )

  useEffect(() => {
    // const fetchData = async()=>{
    //   try{
    //     const res = await fetch('./data.json');
    //     const jsonData = await res.json();
    //     setData(jsonData);
    //   } catch (error) {
    //     console.log('Error fetching data',error);
    //   }
    // };
    // fetchData();
    setTicketData(data?.tickets);
    setUserData(data?.users);
    console.log(data);
  }, []);

  const card1 = ["Backlog", UserData[0].name, "No Priority"];
  const card2 = ["To do", UserData[1].name, "Urgent"];
  const card3 = ["In Progress", UserData[2].name, "High"];
  const card4 = ["Done", UserData[3].name, "Medium"];
  const card5 = ["Canceled", UserData[4].name, "Low"];
  // const grouping = {
  //   "groups":[
  //     {
  //       "id": 0,
  //       "text": "Status",
  //       "work": "status"
  //     },
  //     {
  //       "id": 1,
  //       "text": "Name",
  //       "work": "name"
  //     },
  //     {
  //       "id": 2,
  //       "text": "Priority",
  //       "work": "priority"
  //     }
  //   ],
  //   "sorts":[
  //     {
  //       "id": 4,
  //       "text": "Title",
  //       "work": "title"
  //     },
  //     {
  //       "id": 5,
  //       "text": "Priority",
  //       "work": "priority"
  //     },
  //   ]
  // };


  const setting = (e) =>{
    setIndex(e);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="dropdown-bar">
          <button onClick={()=>setIndex(0)}>Group by Status</button>
          <button onClick={()=>setIndex(2)}>Group by Priority</button>
          <button onClick={()=>setIndex(1)}>Group by Name</button>
          <button onClick={()=>setSortType("priority")}>Order by Priority</button>
          <button onClick={()=>setSortType("title")}>Order by Title</button>
        </div> */}
        <div className="hideable">
          <div className="grouping">
            <div>Grouping</div>
            {/* <select
              onChange={(e)=>setting(e.target.value)}
              value={index || 'Status'}
            >
              {grouping.groups.map((groupby)=><option key={groupby.id} value={groupby.id}>{groupby.text}</option>)}
            </select> */}
            <button onClick={()=>setIndex(0)}>Status</button>
          <button onClick={()=>setIndex(2)}>Priority</button>
          <button onClick={()=>setIndex(1)}>Name</button>
          </div>
          <div className="ordering">
          <div>Ordering</div>
            {/* <select
              onChange={(e)=>setSortType(e.target.value)}
              value={index || 'Priority'}
            >
              {grouping.sorts.map((groupby)=><option key={groupby.id} value={groupby.work}>{groupby.text}</option>)}
            </select> */}
            <button onClick={()=>setSortType("priority")}>Priority</button>
          <button onClick={()=>setSortType("title")}>Title</button>
          </div>
        </div>
        <div className="container-div">
          <ContainerCard groupby={card1[index]} data={firstData}/>
          <ContainerCard groupby={card2[index]} data={secondData}/>
          <ContainerCard groupby={card3[index]} data={thirdData}/>
          <ContainerCard groupby={card4[index]} data={fourthData}/>
          <ContainerCard groupby={card5[index]} data={fifthData}/>
        </div>
          {/* {sortedTickets.map((ticket, i) => (
            <Card
              key = {ticket.id}
              id = {ticket.id}
              tag = {ticket.tag[0]}
              title = {ticket.title}
            />
          ))} */}
      </header>
    </div>
  )
}

export default App;
