import {useSnapshot} from "valtio";
import {userAtomStorage, userProxy} from "../store/user.atom";
import {useEffect} from "react";
import {useAtom} from "jotai";


export const useUSer = () => {
    const {user, setUser} = useSnapshot(userProxy)
    const [userAtom, setUserAtom] = useAtom(userAtomStorage)

    useEffect(() => {
        setUser({
            ...user,
            company: "ClassFunc Software .,JSC",
        })
    }, [])

    return {userAtom}
}