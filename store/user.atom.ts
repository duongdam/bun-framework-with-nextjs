import {proxy} from "valtio";
import {atomWithProxy} from "jotai/valtio";
import {atomWithStorage} from "jotai/utils";


const userProxy = proxy({
    user: {
        name: "github.com/duongdam",
        age: 31,
        address: "Nga Son, Thanh Hoa"
    },
    setUser: (data: any) => {
        userProxy.user = data
    }
})

const userProxyAtom = atomWithProxy(userProxy)
const userAtomStorage = atomWithStorage('user', null)

export {
    userProxy,
    userProxyAtom,
    userAtomStorage
}