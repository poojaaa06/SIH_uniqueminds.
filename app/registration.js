// Registration1.js
// Registration1.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

const Registration1 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imagePlaceholder} />
        
       
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Step 1 of 2</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.firstName}
            onChangeText={(value) => handleChange('firstName', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={formData.lastName}
            onChangeText={(value) => handleChange('lastName', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={formData.phone}
            onChangeText={(value) => handleChange('phone', value)}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="business-outline" size={20} color="#99D3B7" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Department"
            value={formData.department}
            onChangeText={(value) => handleChange('department', value)}
          />
        </View>

        <Link href="/registration2" style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </Link>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already a user?</Text>
          <Link href="/login" style={styles.loginLink}>
            Login
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding:10,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    marginBottom: 10,
    marginTop:20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2DBE60',
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CDE8DC',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  button: {
    backgroundColor: '#2DBE60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    textAlign:'center',
    marginTop:10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  loginLink: {
    color: '#3EB075',
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default Registration1;
