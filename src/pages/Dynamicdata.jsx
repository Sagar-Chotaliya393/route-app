import { useParams } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../counterSlice";

function Dynamicdata() {

    const otherroute = useNavigate();
    const { id } = useParams();

    const { userdata, loading } = useContext(UserContext);

    const user = userdata.find((uu) => uu.id === Number(id));

    const count = useSelector(store => store.counter.value);
    const dispatch = useDispatch();

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <h1 className="text-red-500 text-5xl font-bold">
                Tailwind Working
            </h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.address?.city}</p>
            <button onClick={() => otherroute("/other-route")}>Go to list</button>

            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>


        </>
    )
}

export default Dynamicdata;