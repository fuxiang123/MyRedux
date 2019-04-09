import React,{useState,useEffect} from 'react'
import {View,Text,Button} from 'react-native'
import store from './storeConfig'

function Counter(){
    const [num,setNum]=useState(0);
    useEffect(()=>{
        const unsubsrcibe=store.subscribe(()=>{
            const state=store.getState();
            console.log(state)
            setNum(state.number);
        })
        return unsubsrcibe();
    },[])

    return (
        <View style={container}>
            <Text>{'当前的数字为：'+num}</Text>
            <Button title={'+'} onPress={add}/>
            <Button title={'-'} onPress={minus}/>
        </View>
    )
}

function add(){
    store.dispatch({type:'add'})
}

function minus(){
    store.dispatch({type:'minus'})
}

const container={
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}

export default Counter;