import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from '';
import Card from '';

const App = () => {

  function handleRedeSocial(rede_social) {
    
    switch(rede_social) {
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://www.linkedin.com/in/nattan-gama-05369a192/')
      break
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com/nattan.gama/')
      break
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/nattangama')
      break
    }
  }

  return (
    <>
      <View style={style.page}>

        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>NATTAN GAMA</Text>
          <Text style={style.funcao}>Desenvolvedor JR.</Text>
          <View style={style.redes_sociais} >
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>

          </View>
        </View>

        <Card titulo="Formação Acadêmica">
          <Text style={style.card_content_text}>Analise e Desenvolvimento De Sistemas</Text>
          <Text style={style.card_content_text}>Técnico em Computação Gráfica</Text>
        </Card>

        <Card titulo="Experiência Profissional"> 
          <Text style={style.card_content_text}>Estagiário da tecnologias de informação e comunicação</Text>
         
        </Card>

      </View>
    </>
  );
};

const style = StyleSheet.create ({
  
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 2,
    fontSize: 14
  }

})

export default App;
