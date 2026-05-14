import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchUserdata } from "../userSlice";
import { Link } from "react-router-dom";

function About(){

    const refresh = useDispatch();
    const {users} = useSelector(state => state.users);

    useEffect(()=>{
        refresh(fetchUserdata());
    },[refresh])
    return(
        <>
        <p>About us page</p>

        <div>
            {
                users.slice(0,5).map((user) =>(
                    <p key={user.id}><Link to={`/userDetailPage/${user.id}`}>{user.name}</Link></p>
                ))
            }
        </div>
        </>
    )
}
export default About;