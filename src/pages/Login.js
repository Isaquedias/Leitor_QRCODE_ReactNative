import React , {useState, useEffect}from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
 } from "react-native";

import logo from '../assets/logo.jpg'

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  async function handleSubimit(){
    navigation.navigate('List')
    
  }

  return (
    <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === 'ios'} style={style.container}>
      <Image source={logo} width="300" />

      <View style={style.form}>

        <Text style={style.label}>Seu E-Mail *</Text>
        <TextInput
          style={style.input}
          placeholder="Seu E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false} />

        <Text style={style.label}>Sua Senha *</Text>
        <TextInput
          style={style.input}
          placeholder="Seu E-mail"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          autoCorrect={false} />

        <TouchableOpacity onPress={handleSubimit} style={style.button}>
          <Text style={style.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})