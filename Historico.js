import {View, Text} from "react-native";
import { useContext} from 'react';
import { UtilsContext } from "./Context";

export default function Historico(){
    const {utils, setUtils} = useContext(UtilsContext)

    return(
        <>
            <View>
                {utils.value.map((item,index) =>
                <Text
                key={index}
                style={{
                    textAlign:"center",
                    fontSize:"30px"

                }}>{item} </Text> )}
            </View>
        </>
    )
}
