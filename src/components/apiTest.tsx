import React, { useEffect, useState } from "react";
import axios from "axios";
import {getUrl} from "../services/getUrl";

interface Test{
    test: string
}

function ApiTest() {

    var [data, setData] = useState("");

    useEffect(() => {

        axios.get(getUrl() +"api/test")
            .then(res  => {
                console.log("Test data", res.data);
                setData(res.data['test']);
            })

    }, [])


    return <React.Fragment>
        {data}
    </React.Fragment>

}

export default ApiTest;