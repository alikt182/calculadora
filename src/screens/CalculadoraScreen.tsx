import React from 'react'
import { Text, View } from 'react-native'
import { BotonCal } from '../components/BotonCal'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {

    const { 
            numeroAnterior,
            numero,
            limpiar,
            positivoNegativo,
            btnDelete,
            btnDividir,
            armarNumero,
            btnMultiplicar,
            btnRestar,
            btnSumar,
            calcular,
        } = useCalculadora();


  return (
    <View style={ styles.calculadoraContainer }>
        {
            ( numeroAnterior !== '0' ) && (
                <Text style={ styles.resultadoPequeno }>{ numeroAnterior}</Text>
            )
        }

        
        <Text 
            style={ styles.resultado }
            numberOfLines={ 1 } 
            adjustsFontSizeToFit
        >
            { numero }
        </Text>

        {/*Fila de botones */}
        <View style={ styles.fila }>
            <BotonCal texto="C" color="#9B9B9B" accion={ limpiar } />
            <BotonCal texto="+/-" color="#9B9B9B" accion={ positivoNegativo }/>
            <BotonCal texto="del" color="#9B9B9B" accion={ btnDelete }/>
            <BotonCal texto="/" color="#FF9427" accion={ btnDividir }/>
        </View>
        {/*Fila de botones */}
        <View style={ styles.fila }>
            <BotonCal texto="7" accion={ armarNumero }/>
            <BotonCal texto="8" accion={ armarNumero }/>
            <BotonCal texto="9" accion={ armarNumero }/>
            <BotonCal texto="x" color="#FF9427" accion={ btnMultiplicar }/>
        </View>
        {/*Fila de botones */}
        <View style={ styles.fila }>
            <BotonCal texto="4" accion={ armarNumero }/>
            <BotonCal texto="5" accion={ armarNumero }/>
            <BotonCal texto="6" accion={ armarNumero }/>
            <BotonCal texto="-" color="#FF9427" accion={ btnRestar }/>
        </View>
        {/*Fila de botones */}
        <View style={ styles.fila }>
            <BotonCal texto="1" accion={ armarNumero }/>
            <BotonCal texto="2" accion={ armarNumero }/>
            <BotonCal texto="3" accion={ armarNumero }/>
            <BotonCal texto="+" color="#FF9427" accion={ btnSumar }/>
        </View>
        {/*Fila de botones */}
        <View style={ styles.fila }>
            <BotonCal ancho texto="0" accion={ armarNumero }/>
            <BotonCal texto="." accion={ armarNumero }/>
            <BotonCal texto="=" color="#FF9427" accion={ calcular }/>     
        </View>
        <View style={ styles.fila }>
            <BotonCal texto="00" ancho accion={ armarNumero }/>
            <BotonCal texto="000" ancho accion={ armarNumero }/>
        </View>
     


    </View>
  )
}
