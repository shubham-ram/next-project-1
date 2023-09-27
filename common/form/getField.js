import Password from "./Elements/password";
import Text from "./Elements/text";

const ComponentMapping ={
    text: Text,
    password: Password
}

function getField(type){
    return ComponentMapping[type] || Text;
}

export default getField