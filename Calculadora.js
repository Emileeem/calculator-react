import { TouchableOpacity, View, Text } from "react-native";
import {useState, useContext} from 'react';
import { UtilsContext } from "./Context";
export default function Calculadora(props){
    const [value,setValue] = useState("")
    const {utils, setUtils} = useContext(UtilsContext)

    function goToHistorico()
    {
        props.navigation.navigate('Historico')
    }
    function equal(){
        if(utils.value){
            setUtils({...utils, value: [...utils.value,value+" = "+eval(value)]})
        }
        else{
            setUtils({...utils, value: [value+" = "+eval(value)]})
        }

        setValue(eval(value))
    }
    return(
        <>
        <View onChangeText={text => setValue(text)}
            value={value} style={{
           borderWidth: 1,
           borderColor: "black",
           borderRadius:"10px",
           margin:"10%",
           width:"80%",
           padding:"5%",
           height:"100px"
        }}>
            {value}
        </View>
        <View style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
                padding:"18px"
            }} >
            <TouchableOpacity style={{
                backgroundColor:"lightblue",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px"
            }} onPress={() => setValue(value+"+")}> <Text style={{fontSize:"33px", textAlign:"center"}}>+</Text> </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"lightblue",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px"
            }} onPress={() => setValue(value+"-")}><Text style={{fontSize:"33px", textAlign:"center"}}>-</Text> </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"lightblue",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px"
            }} onPress={() => setValue(value+"/")}><Text style={{fontSize:"33px", textAlign:"center"}}>/</Text> </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"lightblue",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px"
            }} onPress={() => setValue(value+"*")}> <Text style={{fontSize:"33px", textAlign:"center"}}>X</Text> </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"lightblue",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px"
            }} onPress={() => equal() }><Text style={{fontSize:"33px", textAlign:"center"}}>=</Text> </TouchableOpacity>
        </View>
        <View style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            padding:"18px",
        }}>
            <TouchableOpacity style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
        }} onPress={() => setValue(value+"1")}> <Text style={{fontSize:"33px", textAlign:"center"}}>1</Text> </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }} onPress={() => setValue(value+"2")}> <Text style={{fontSize:"33px", textAlign:"center"}}>2</Text> </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }} onPress={() => setValue(value+"3")}> <Text style={{fontSize:"33px", textAlign:"center"}}>3</Text> </TouchableOpacity>
        </View>
        <View style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            padding:"18px",
        }}>
            <TouchableOpacity style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }} onPress={() => setValue(value+"4")}> <Text style={{fontSize:"33px", textAlign:"center"}}>4</Text> </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }} onPress={() => setValue(value+"5")}> <Text style={{fontSize:"33px", textAlign:"center"}}>5</Text> </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }} onPress={() => setValue(value+"6")}> <Text style={{fontSize:"33px", textAlign:"center"}}>6</Text> </TouchableOpacity>
        </View>
        <View style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            padding:"18px",
        }}>
            <TouchableOpacity style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }} onPress={() => setValue(value+"7")}> <Text style={{fontSize:"33px", textAlign:"center"}}>7</Text> </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }} onPress={() => setValue(value+"8")}> <Text style={{fontSize:"33px", textAlign:"center"}}>8</Text> </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }} onPress={() => setValue(value+"9")}> <Text style={{fontSize:"33px", textAlign:"center"}}>9</Text> </TouchableOpacity>
        </View>
        <View style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            padding:"18px",
        }}>
            <TouchableOpacity style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }} onPress={() => setValue(value+"0")}> <Text style={{fontSize:"33px", textAlign:"center"}}>0</Text> </TouchableOpacity>
        </View>
        <View style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            padding:"18px",
        }}>

        <TouchableOpacity title="Limpar" onPress={() => props.navigation.navigate("Usuarios")}>
                <View style={{
                    width:"100px",
                    height:"40px",
                    padding:"6%",
                    marginRight:"8%",
                    backgroundColor:"lightblue",
                    borderRadius:"5px",
                    marginBottom:"10px",
                }}>
                <TouchableOpacity onPress={() => setValue("")}>
                    <Text style={{color:"black", textAlign:"center", fontWeight:"bold", fontSize:"20px"}}>Limpar</Text>
                </TouchableOpacity>
                </View>

        </TouchableOpacity>
        <TouchableOpacity title="Historico" onPress={() => goToHistorico()}>
                <View style={{
                    width:"100px",
                    height:"40px",
                    padding:"6%",
                    marginLeft:"8%",
                    backgroundColor:"lightblue",
                    borderRadius:"5px",
                    marginBottom:"10px"
                }}>
                    <Text style={{color:"black", textAlign:"center", fontWeight:"bold", fontSize:"20px"}}>Histórico</Text>
                </View>

        </TouchableOpacity>
        </View>
        </>
    )
}
