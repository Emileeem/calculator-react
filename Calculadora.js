import { Text, View, TouchableOpacity} from "react-native";

export default function Calculadora(){
    return(
        <>
        <View style={{
           borderWidth: 1,
           borderColor: "black",
           borderRadius:"10px",
           margin:"10%",
           width:"80%",
           padding:"5%",
           height:"100px"
        }}>
        </View>
        <View style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
                padding:"18px"
            }} >
            <Text style={{
                backgroundColor:"lightblue",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px"
            }} > + </Text>
            <Text style={{
                backgroundColor:"lightblue",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px"
            }}> - </Text>
            <Text style={{
                backgroundColor:"lightblue",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px"
            }}> / </Text>
            <Text style={{
                backgroundColor:"lightblue",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px"
            }}> X </Text>
            <Text style={{
                backgroundColor:"lightblue",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px"
            }}> = </Text>
        </View>
        <View style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            padding:"18px",
        }}>
            <Text style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }}> 1 </Text>
            <Text style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }}> 2 </Text>
            <Text style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }}> 3 </Text>
        </View>
        <View style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            padding:"18px",
        }}>
            <Text style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }}> 4 </Text>
            <Text style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }}> 5 </Text>
            <Text style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }}> 6 </Text>
        </View>
        <View style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            padding:"18px",
        }}>
            <Text style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }}> 7 </Text>
            <Text style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }}> 8 </Text>
            <Text style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }}> 9 </Text>
        </View>
        <View style={{
            textAlign:"center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            padding:"18px",
        }}>
            <Text style={{
                backgroundColor:"lightpink",
                height:"45px",
                width:"45px",
                textAlign:"center",
                fontSize:"33px",
                color:"black",
                borderRadius:"9px",
                margin:"2%",
            }}> 0 </Text>

        </View>
        </>
    )
}
