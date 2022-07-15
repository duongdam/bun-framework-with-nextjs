import React from "react";
import {userProxy} from "../store/user.atom";
import {useSnapshot} from "valtio";

function Title({}) {
    const {user} = useSnapshot(userProxy)
    const {name = null, company = null}: any = user
    console.log('render');
    return (
        <h1>
            Hello my friends: <h1>{name} - {company || ''}</h1>
        </h1>
    );
}

export default React.memo(Title)