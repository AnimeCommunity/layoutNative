/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

function App(): JSX.Element {

  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./img/bg.jpg')} style={styles.banner} />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>
            Que hacer en paris?
          </Text>

          <ScrollView
            horizontal
          >
            <View>
              <Image source={require('./img/actividad1.jpg')} style={styles.ciudad} />
            </View>
            <View>
              <Image source={require('./img/actividad2.jpg')} style={styles.ciudad} />
            </View>
            <View>
              <Image source={require('./img/actividad3.jpg')} style={styles.ciudad} />
            </View>
            <View>
              <Image source={require('./img/actividad4.jpg')} style={styles.ciudad} />
            </View>
            <View>
              <Image source={require('./img/actividad5.jpg')} style={styles.ciudad} />
            </View>
          </ScrollView>


          <Text style={styles.titulo}>
            Los mejores alojamientos
          </Text>
          <View>
            <View>
              <Image source={require('./img/mejores1.jpg')} style={styles.mejores} />
            </View>
            <View>
              <Image source={require('./img/mejores2.jpg')} style={styles.mejores} />
            </View>
            <View>
              <Image source={require('./img/mejores3.jpg')} style={styles.mejores} />
            </View>
          </View>

          <Text style={styles.titulo}>
            Hospedaje en LA          
          </Text>

          <View
            style={styles.listado}
          >
            <View style={styles.listadoItem}>
              <Image source={require('./img/hospedaje1.jpg')} style={styles.mejores} />
            </View>
            <View style={styles.listadoItem}>
              <Image source={require('./img/hospedaje2.jpg')} style={styles.mejores} />
            </View>
            <View style={styles.listadoItem}>
              <Image source={require('./img/hospedaje3.jpg')} style={styles.mejores} />
            </View>
            <View style={styles.listadoItem}>
              <Image source={require('./img/hospedaje4.jpg')} style={styles.mejores} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner:
  {
    height: 250,
    flex: 1
  },
  titulo:
  {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contenedor:
  {
    marginHorizontal: 10
  },
  ciudad:
  {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores:
  {
    width: '100%',
    height:200,
    marginVertical:5
  },
  listado:
  {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-between'
  },
  listadoItem:
  {
    flexBasis:'49%',
  }
})

export default App;
